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

/**
 * Applies the body-level `modal-open` lock (which freezes the board's
 * horizontal pan) for as long as it stays mounted, ref-counting so nested or
 * stacked modals release the lock only once the last one closes.
 *
 * This is a component — not a hook called in BaseModal's body — so it can live
 * *inside* `Dialog.Content`. Radix only mounts the content while the dialog is
 * actually open, whereas BaseModal itself is often rendered unconditionally
 * inside a closed `<Dialog.Root>`. Locking on the content's presence is what
 * keeps closed-but-mounted modals from freezing the board forever.
 */
function BodyModalLock() {
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

  return null
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
        <BodyModalLock />
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
