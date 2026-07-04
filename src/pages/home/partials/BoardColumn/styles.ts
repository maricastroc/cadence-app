import styled from 'styled-components'
import { menuSurface } from '@/components/Core/Menu/styles'

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 18rem;
  max-width: 18rem;
  width: 100%;
  align-self: flex-start;
  max-height: 100%;
  background-color: ${(props) => props.theme['panel-color']};

  border-radius: 14px;
  box-shadow: ${(props) => props.theme['highlight-top']};
  overflow: hidden;
  transition: border-color var(--dur) var(--ease);
  /* The column body isn't draggable (only the grip is) — don't inherit the
     board's pan grab cursor here. */
  cursor: default;

  .column-drag-handle,
  .menu,
  .add-task {
    transition: color var(--dur) var(--ease),
      background-color var(--dur) var(--ease);
  }

  &:hover {
    border-color: ${(props) => props.theme['hairline-strong']};
  }

  &.drag-overlay {
    cursor: grabbing;
    border-color: ${(props) => props.theme['accent-soft']};
    box-shadow: ${(props) => props.theme['shadow-lg']};

    .column-drag-handle {
      opacity: 1;
    }
  }
`

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.625rem 0.5rem 0.5rem 0.375rem;

  .name {
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme['title-color']};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .count {
    font-size: 0.75rem;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    color: ${(props) => props.theme['muted-color']};
  }
`

export const DragHandle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['muted-color']};
  cursor: grab;
  touch-action: none;

  svg {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${(props) => props.theme['subtitle-color']};
    background-color: ${(props) => props.theme['card-hover']};
  }

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme['muted-color']};
    outline-offset: 2px;
    color: ${(props) => props.theme['title-color']};
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: auto;
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background-color: transparent;
  border: none;
  border-radius: 7px;
  color: ${(props) => props.theme['muted-color']};
  cursor: pointer;
  transition: color var(--dur) var(--ease),
    background-color var(--dur) var(--ease);

  svg {
    font-size: 0.85rem;
  }

  &:hover,
  &.is-open {
    color: ${(props) => props.theme['title-color']};
    background-color: ${(props) => props.theme['card-hover']};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme['muted-color']};
    outline-offset: 2px;
    color: ${(props) => props.theme['title-color']};
  }
`

export const MenuDropdown = styled.div`
  ${menuSurface}
  position: absolute;
  top: 2rem;
  right: 0;
  width: 11rem;
  z-index: 9999;
`

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  flex: 1;
  min-height: 0;
  padding: 0.5rem;
  overflow-y: auto;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['scroll-color']};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme['scroll-color']} transparent;
`

export const EmptyTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 96px;
  background-color: ${(props) => props.theme['field-bg']};
  border-radius: 10px;
  color: ${(props) => props.theme['muted-color']};

  svg {
    font-size: 1.05rem;
    opacity: 0.6;
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
  }
`

export const AddTaskButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.625rem 0.75rem;
  background: transparent;
  border: none;
  color: ${(props) => props.theme['muted-color']};
  font-size: 0.8125rem;
  font-weight: 500;

  svg {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${(props) => props.theme['title-color']};
    background-color: ${(props) => props.theme['card-color']};
  }
`
