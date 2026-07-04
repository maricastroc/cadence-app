import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  HeaderContent,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ReactNode, useEffect } from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { LoadingComponent } from '@/components/Shared/LoadingComponent'

// Radix locks <body> scroll while a modal is open, but the board is a nested
// horizontal scroller (overflow-x) that the body lock doesn't reach — so it can
// still be panned behind the overlay. Flag <body> while any modal is mounted
// (ref-counted so stacked/swapped modals don't clear it early) and let CSS lock
// the board. The count lives on document.body so it survives Fast Refresh.
function useBodyModalLock() {
  useEffect(() => {
    const body = document.body
    const next = (Number(body.dataset.openModals) || 0) + 1
    body.dataset.openModals = String(next)
    body.classList.add('modal-open')
    return () => {
      const remaining = (Number(body.dataset.openModals) || 1) - 1
      if (remaining <= 0) {
        delete body.dataset.openModals
        body.classList.remove('modal-open')
      } else {
        body.dataset.openModals = String(remaining)
      }
    }
  }, [])
}

interface Props {
  title?: string
  children: ReactNode
  padding?: string
  height?: string
  maxHeight?: string
  titlePadding?: string
  isLoading?: boolean
  hasHeader?: boolean
  overflow?: string
  className?: string
  onClose: () => void
}

export const BaseModal = ({
  title,
  children,
  padding,
  titlePadding,
  height,
  maxHeight,
  isLoading,
  hasHeader = true,
  overflow,
  className,
  onClose,
}: Props) => {
  useBodyModalLock()

  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent
        padding={padding}
        className={`DialogContent ${className ?? ''}`}
        maxHeight={maxHeight}
        height={height}
        overflow={overflow}
      >
        {hasHeader && (
          <HeaderContent padding={titlePadding}>
            <ModalTitle className="DialogTitle">{title}</ModalTitle>
            <CloseButton onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </CloseButton>
          </HeaderContent>
        )}

        <VisuallyHidden>
          <Dialog.Description />
        </VisuallyHidden>

        {children}
      </ModalContent>

      {isLoading && <LoadingComponent />}
    </Dialog.Portal>
  )
}
