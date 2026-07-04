import styled from 'styled-components'

// Dashed "Add column" composer reuses the shared sheet primitive.
export { DashedComposerBtn as AddColumnBtn } from '../Sheet/styles'

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  width: 100%;
  margin-bottom: 0.7rem;
`

export const ColumnRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 44px;
  padding: 0 0.4rem 0 0.65rem;
  background-color: ${(props) => props.theme['field-bg']};
  border: none;
  border-radius: 10px;
  transition: box-shadow var(--dur) var(--ease),
    background-color var(--dur) var(--ease);

  &:focus-within {
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme['muted-color']};
  }

  &.error {
    background-color: ${(props) => props.theme['error-soft']};
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme['error-border']};
  }

  &.error:focus-within {
    border-color: ${(props) => props.theme['error-border']};
    box-shadow: 0 0 0 3px ${(props) => props.theme['error-soft']};
  }
`

export const DragHandle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 26px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['muted-color']};
  font-size: 0.8rem;
  cursor: grab;
  touch-action: none;
  transition: color 140ms ease, background-color 140ms ease;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme['title-color']};
    background-color: ${(props) => props.theme['card-hover']};
  }

  &:active {
    cursor: grabbing;
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`

export const ColumnInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme['title-color']};
  font-size: 0.85rem;

  /* The row itself shows the focus ring (:focus-within); suppress the global
     input:focus-visible outline so we don't get a doubled/offset outline. */
  &:focus,
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['muted-color']};
  }
`

export const RemoveColumnBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 7px;
  color: ${(props) => props.theme['muted-color']};
  transition: background-color 140ms ease, color 140ms ease;

  svg {
    font-size: 0.95rem;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme['hairline-color']};
    color: ${(props) => props.theme['error-color']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }
`
