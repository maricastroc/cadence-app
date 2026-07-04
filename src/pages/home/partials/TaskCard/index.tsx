/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  CardBody,
  CompleteToggle,
  DueDateBadge,
  InfoContent,
  InfoItem,
  ProgressContainer,
  ProgressFill,
  Tag,
  TagsContainer,
  TaskCardContainer,
  TaskTitle,
} from './styles'
import { TaskDetailsModal } from '@/components/Modals/TaskDetailsModal'
import { getTagHex } from '@/utils/getTagHex'
import { TaskProps } from '@/@types/task'
import { useWindowResize } from '@/utils/useWindowResize'
import { BREAKPOINT_SM } from '@/utils/constants'
import { useBoardsContext } from '@/contexts/BoardsContext'
import { BoardColumnProps } from '@/@types/board-column'
import { formatDate } from '@/utils/formatDate'
import { getDueStatus, getDueLabel } from '@/utils/getDueStatus'
import { api } from '@/lib/axios'
import { handleApiError } from '@/utils/handleApiError'
import {
  faCheck,
  faCircleCheck,
  faClock,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const taskSortableId = (id: TaskProps['id']) => `task-${id}`

type TaskCardProps = {
  task: TaskProps
  column: BoardColumnProps
  dragDisabled?: boolean
  dragOverlay?: boolean
}

export const CardContent = memo(function CardContent({
  task,
}: {
  task: TaskProps
}) {
  const totalSubtasks = task?.subtasks?.length || 0
  const completedSubtasks =
    task?.subtasks?.filter((subtask) => subtask?.is_completed)?.length || 0
  const progress =
    totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0

  const { activeBoardMutate } = useBoardsContext()
  const [isCompleted, setIsCompleted] = useState(!!task.is_completed)
  const [isToggling, setIsToggling] = useState(false)

  // On phones, keep cards uncluttered: show at most two tags + an overflow chip.
  const isMobile = useWindowResize(BREAKPOINT_SM)
  const tags = task?.tags ?? []
  const visibleTags = isMobile ? tags.slice(0, 2) : tags
  const hiddenTagCount = tags.length - visibleTags.length

  const dueStatus = task?.due_date
    ? getDueStatus(task.due_date, isCompleted)
    : ''
  const dueLabel = task?.due_date ? getDueLabel(task.due_date, isCompleted) : ''

  async function handleToggleCompletion(event: React.MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    if (isToggling) return

    const next = !isCompleted
    setIsCompleted(next)
    setIsToggling(true)

    try {
      await api.patch(`/tasks/${task.id}/toggle-completion`)
      await activeBoardMutate()
    } catch (error) {
      setIsCompleted(!next)
      handleApiError(error)
    } finally {
      setIsToggling(false)
    }
  }

  const hasMeta = totalSubtasks > 0 || !!task?.due_date

  return (
    <>
      <CompleteToggle
        type="button"
        className={isCompleted ? 'completed' : ''}
        onClick={handleToggleCompletion}
        onPointerDown={(event) => event.stopPropagation()}
        disabled={isToggling}
        aria-pressed={isCompleted}
        aria-label={isCompleted ? 'Mark task as not done' : 'Mark task as done'}
      >
        {isCompleted ? (
          <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
        ) : null}
      </CompleteToggle>

      <CardBody>
        <TaskTitle className={isCompleted ? 'completed' : ''}>
          {task.name}
        </TaskTitle>

        {tags.length > 0 && (
          <TagsContainer>
            {visibleTags.map((item) => (
              <Tag key={item.id}>
                <span
                  className="dot"
                  style={{ backgroundColor: getTagHex(item.color) }}
                />
                {item.name}
              </Tag>
            ))}
            {hiddenTagCount > 0 && (
              <Tag className="more">+{hiddenTagCount}</Tag>
            )}
          </TagsContainer>
        )}

        {completedSubtasks > 0 && (
          <ProgressContainer>
            <ProgressFill progress={progress} />
          </ProgressContainer>
        )}

        {hasMeta && (
          <InfoContent>
            {totalSubtasks > 0 && (
              <InfoItem>
                <FontAwesomeIcon icon={faListCheck} />
                <p>{`${completedSubtasks}/${totalSubtasks}`}</p>
              </InfoItem>
            )}

            {task?.due_date && (
              <DueDateBadge className={dueStatus} title={dueLabel || undefined}>
                <FontAwesomeIcon
                  icon={isCompleted ? faCircleCheck : faClock}
                  aria-hidden="true"
                />
                <span>{formatDate(task.due_date)}</span>
              </DueDateBadge>
            )}
          </InfoContent>
        )}
      </CardBody>
    </>
  )
})

export const TaskCard = memo(function TaskCard({
  task,
  column,
  dragDisabled,
  dragOverlay,
}: TaskCardProps) {
  const { handleEnableScrollFeature } = useBoardsContext()

  const [isTaskDetailsModalOpen, setIsTaskDetailsModalOpen] = useState(false)

  useEffect(() => {
    handleEnableScrollFeature(!isTaskDetailsModalOpen)
  }, [isTaskDetailsModalOpen])

  const { listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: taskSortableId(task.id),
      data: { type: 'task', task, columnId: column.id },
      disabled: dragDisabled || dragOverlay,
    })

  if (dragOverlay) {
    return (
      <TaskCardContainer className="task-card dragging">
        <CardContent task={task} />
      </TaskCardContainer>
    )
  }

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : undefined,
  }

  const openDetails = () => setIsTaskDetailsModalOpen(true)

  return (
    <Dialog.Root
      open={isTaskDetailsModalOpen}
      onOpenChange={setIsTaskDetailsModalOpen}
    >
      <TaskCardContainer
        ref={setNodeRef}
        style={style}
        className={`task-card${dragDisabled ? ' drag-disabled' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={`Open task: ${task.name}`}
        onClick={openDetails}
        {...listeners}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openDetails()
          }
        }}
      >
        <CardContent task={task} />
      </TaskCardContainer>
      <TaskDetailsModal
        task={task}
        column={column}
        onClose={() => setIsTaskDetailsModalOpen(false)}
      />
    </Dialog.Root>
  )
})
