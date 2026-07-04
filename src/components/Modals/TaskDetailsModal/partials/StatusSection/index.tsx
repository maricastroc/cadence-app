import { Label } from '@/components/Core/Label'
import { StatusContainer, StatusSelectorContainer } from './styles'
import { SelectStatus } from '@/components/Core/SelectStatus'
import { RefObject, useEffect } from 'react'
import { StatusSelector } from '@/components/Shared/StatusSelector'
import { BoardColumnProps } from '@/@types/board-column'
import { BoardProps } from '@/@types/board'

interface Props {
  activeBoard?: BoardProps
  isOpen: boolean
  isActive: boolean
  status: string
  statusRef: RefObject<HTMLDivElement | null>
  onToggleOpen: (value: boolean) => void
  handleChangeStatus: (column: BoardColumnProps) => Promise<void>
}

export const StatusSection = ({
  isActive,
  isOpen,
  status,
  statusRef,
  activeBoard,
  onToggleOpen,
  handleChangeStatus,
}: Props) => {
  // The options list opens inline near the bottom of the modal; bring it fully
  // into view on open so the user never has to hunt-scroll for the items.
  useEffect(() => {
    if (!isOpen) return
    const id = requestAnimationFrame(() =>
      statusRef.current?.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      }),
    )
    return () => cancelAnimationFrame(id)
  }, [isOpen, statusRef])

  return (
    <StatusContainer>
      <Label>Current Status</Label>
      <SelectStatus
        isActive={isActive}
        isOpen={isOpen}
        status={status}
        onClick={() => onToggleOpen(true)}
      />
      {isOpen && (
        <StatusSelectorContainer ref={statusRef}>
          {activeBoard?.columns?.map((column) => (
            <StatusSelector
              key={column.name}
              column={column}
              status={status}
              handleChangeStatus={(column) => {
                handleChangeStatus(column)
              }}
            />
          ))}
        </StatusSelectorContainer>
      )}
    </StatusContainer>
  )
}
