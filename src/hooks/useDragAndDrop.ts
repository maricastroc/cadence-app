import { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
  closestCorners,
  CollisionDetection,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useBoardsContext } from '@/contexts/BoardsContext'
import { api } from '@/lib/axios'
import { handleApiError } from '@/utils/handleApiError'
import { TaskProps } from '@/@types/task'
import { BoardColumnProps } from '@/@types/board-column'
import { taskSortableId } from '@/pages/home/partials/TaskCard'

type SetColumns = Dispatch<SetStateAction<BoardColumnProps[] | undefined>>

type Id = string | number | null | undefined

const sameId = (a: Id, b: Id) => String(a) === String(b)

export const kanbanCollisionDetection: CollisionDetection = (args) => {
  if (args.active.data.current?.type !== 'column') return closestCorners(args)

  return closestCorners({
    ...args,
    droppableContainers: args.droppableContainers.filter(
      (container) => container.data.current?.type === 'column',
    ),
  })
}

const rawTaskId = (dndId: string) => dndId.replace('task-', '')

export function useDragAndDrop(
  boardColumns: BoardColumnProps[] | undefined,
  setBoardColumns: SetColumns,
) {
  const { activeBoardMutate } = useBoardsContext()

  const [activeTask, setActiveTask] = useState<TaskProps | null>(null)
  const [activeColumn, setActiveColumn] = useState<BoardColumnProps | null>(
    null,
  )

  const [pendingPersists, setPendingPersists] = useState(0)
  const persistQueue = useRef<Promise<unknown>>(Promise.resolve())

  const enqueuePersist = (task: () => Promise<void>) => {
    setPendingPersists((n) => n + 1)
    persistQueue.current = persistQueue.current
      .then(task)
      .catch(() => {})
      .finally(() => setPendingPersists((n) => Math.max(0, n - 1)))
  }
  const columnsRef = useRef(boardColumns)
  columnsRef.current = boardColumns

  const dragStart = useRef<{
    columns: BoardColumnProps[]
    columnId: BoardColumnProps['id']
  } | null>(null)

  const columnDragStart = useRef<BoardColumnProps[] | null>(null)

  const resolveColumn = (
    columns: BoardColumnProps[],
    dndId: string,
  ): BoardColumnProps | undefined => {
    if (dndId.startsWith('column-')) {
      const id = dndId.replace('column-', '')
      return columns.find((col) => sameId(col.id, id))
    }
    const taskId = rawTaskId(dndId)
    return columns.find((col) =>
      col.tasks.some((task) => sameId(task.id, taskId)),
    )
  }

  const onDragStart = (event: DragStartEvent) => {
    if (!boardColumns) return

    if (event.active.data.current?.type === 'column') {
      const column = event.active.data.current?.column as
        | BoardColumnProps
        | undefined
      if (!column) return
      setActiveColumn(column)
      columnDragStart.current = boardColumns
      return
    }

    const task = event.active.data.current?.task as TaskProps | undefined
    const columnId = event.active.data.current
      ?.columnId as BoardColumnProps['id']

    if (!task) return

    setActiveTask(task)
    dragStart.current = { columns: boardColumns, columnId }
  }

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    if (active.data.current?.type === 'column') return

    const activeId = String(active.id)
    const overId = String(over.id)
    if (activeId === overId) return

    setBoardColumns((prev) => {
      if (!prev) return prev

      const activeColumn = resolveColumn(prev, activeId)
      const overColumn = resolveColumn(prev, overId)
      if (!activeColumn || !overColumn) return prev
      if (sameId(activeColumn.id, overColumn.id)) return prev

      const taskId = rawTaskId(activeId)
      const movingTask = activeColumn.tasks.find((t) => sameId(t.id, taskId))
      if (!movingTask) return prev

      const overIndex = overColumn.tasks.findIndex(
        (t) => taskSortableId(t.id) === overId,
      )
      const insertAt = overIndex >= 0 ? overIndex : overColumn.tasks.length

      return prev.map((col) => {
        if (sameId(col.id, activeColumn.id)) {
          return {
            ...col,
            tasks: col.tasks.filter((t) => !sameId(t.id, taskId)),
          }
        }
        if (sameId(col.id, overColumn.id)) {
          const tasks = [...col.tasks]
          tasks.splice(insertAt, 0, movingTask)
          return { ...col, tasks }
        }
        return col
      })
    })
  }

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.data.current?.type === 'column') {
      onColumnDragEnd(active, over)
      return
    }

    setActiveTask(null)

    const snapshot = dragStart.current
    dragStart.current = null

    const current = columnsRef.current
    if (!over || !snapshot || !current) return

    const activeId = String(active.id)
    const overId = String(over.id)
    const taskId = rawTaskId(activeId)

    const destColumn = resolveColumn(current, activeId)
    const overColumn = resolveColumn(current, overId)
    if (!destColumn || !overColumn) {
      setBoardColumns(snapshot.columns)
      return
    }

    let columns = current
    if (sameId(destColumn.id, overColumn.id)) {
      const oldIndex = destColumn.tasks.findIndex((t) => sameId(t.id, taskId))
      const overIndex = destColumn.tasks.findIndex(
        (t) => taskSortableId(t.id) === overId,
      )
      const newIndex = overIndex >= 0 ? overIndex : destColumn.tasks.length - 1

      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        columns = current.map((col) =>
          sameId(col.id, destColumn.id)
            ? { ...col, tasks: arrayMove(col.tasks, oldIndex, newIndex) }
            : col,
        )
        setBoardColumns(columns)
      }
    }

    const finalColumn = columns.find((c) => sameId(c.id, destColumn.id))
    if (!finalColumn) return

    const newIndex = finalColumn.tasks.findIndex((t) => sameId(t.id, taskId))
    const movedToNewColumn = !sameId(snapshot.columnId, destColumn.id)

    if (!movedToNewColumn) {
      const originalIndex = snapshot.columns
        .find((c) => sameId(c.id, snapshot.columnId))
        ?.tasks.findIndex((t) => sameId(t.id, taskId))
      if (originalIndex === newIndex) return
    }

    commit({
      taskId,
      destColumnId: destColumn.id,
      newOrder: newIndex + 1,
      movedToNewColumn,
    })
  }

  const commit = ({
    taskId,
    destColumnId,
    newOrder,
    movedToNewColumn,
  }: {
    taskId: string
    destColumnId: BoardColumnProps['id']
    newOrder: number
    movedToNewColumn: boolean
  }) => {
    enqueuePersist(async () => {
      try {
        if (movedToNewColumn) {
          await api.patch(`tasks/${taskId}/move`, {
            new_column_id: Number(destColumnId),
            new_order: newOrder,
          })
        } else {
          await api.patch(`tasks/${taskId}/reorder`, { new_order: newOrder })
        }
      } catch (error) {
        handleApiError(error)
        activeBoardMutate()
      }
    })
  }

  const onColumnDragEnd = (
    active: DragEndEvent['active'],
    over: DragEndEvent['over'],
  ) => {
    setActiveColumn(null)

    const snapshot = columnDragStart.current
    columnDragStart.current = null

    const current = columnsRef.current
    if (!over || !snapshot || !current) return

    const draggedColumn = resolveColumn(current, String(active.id))
    const targetColumn = resolveColumn(current, String(over.id))
    if (!draggedColumn || !targetColumn) return

    const oldIndex = current.findIndex((c) => sameId(c.id, draggedColumn.id))
    const newIndex = current.findIndex((c) => sameId(c.id, targetColumn.id))
    if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return

    setBoardColumns(arrayMove(current, oldIndex, newIndex))

    commitColumn({
      columnId: draggedColumn.id,
      newOrder: newIndex + 1,
    })
  }

  const commitColumn = ({
    columnId,
    newOrder,
  }: {
    columnId: BoardColumnProps['id']
    newOrder: number
  }) => {
    enqueuePersist(async () => {
      try {
        await api.patch(`columns/${columnId}/reorder`, { new_order: newOrder })
      } catch (error) {
        handleApiError(error)
        activeBoardMutate()
      }
    })
  }
  const onDragCancel = () => {
    setActiveTask(null)
    setActiveColumn(null)
    dragStart.current = null
    columnDragStart.current = null
  }

  return {
    activeTask,
    activeColumn,
    isApiProcessing: pendingPersists > 0,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDragCancel,
  }
}
