import styled from 'styled-components'

export const TaskCardContainer = styled.div`
  cursor: grab;
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 0.75rem;
  outline: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme['card-color']};

  -webkit-touch-callout: none;
  user-select: none;

  box-shadow: ${(props) => props.theme['shadow-xs']};
  box-shadow: ${(props) => props.theme['shadow-card']};
  width: 100%;
  transition: background-color var(--dur) var(--ease),
    border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease),
    transform var(--dur) var(--ease);
  will-change: transform;

  &:hover {
    background-color: ${(props) => props.theme['card-lift']};
    border-color: ${(props) => props.theme['accent-soft']};
    box-shadow: ${(props) => props.theme['shadow-card-hover']};
    transform: translateY(-1px);
  }

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme['muted-color']};
    outline-offset: 2px;
  }

  &.dragging {
    cursor: grabbing;
    background-color: ${(props) => props.theme['card-lift']};
    border-color: ${(props) => props.theme['accent-color']};
    box-shadow: ${(props) => props.theme['shadow-lg']},
      0 0 0 1px ${(props) => props.theme['accent-color']};
    transform: rotate(1.2deg) scale(1.02);
  }

  /* When dragging is off (loading / filtering), the card is only clickable —
     drop the grab affordance so it doesn't promise a move that won't happen. */
  &.drag-disabled,
  &.drag-disabled:active {
    cursor: default;
  }
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
  width: 100%;
`

export const TaskTitle = styled.strong`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme['title-color']};
  line-height: 1.45;
  letter-spacing: -0.012em;

  &.completed {
    color: ${(props) => props.theme['muted-color']};
    text-decoration: line-through;
    text-decoration-color: ${(props) => props.theme['muted-color']};
  }
`

export const CompleteToggle = styled.button`
  flex-shrink: 0;
  margin-top: 1px;
  width: 16px;
  height: 16px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${(props) => props.theme['hairline-strong']};
  border-radius: 50%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease),
    background-color var(--dur-fast) var(--ease);

  svg {
    font-size: 0.55rem;
  }

  &:hover {
    border-color: ${(props) => props.theme['completed-color']};
  }

  &.completed {
    border-color: ${(props) => props.theme['completed-color']};
    background-color: ${(props) => props.theme['completed-color']};
  }

  &:disabled {
    cursor: default;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;
  height: 18px;
  padding: 0 0.4375rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme['hairline-color']};
  color: ${(props) => props.theme['subtitle-color']};
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.005em;
  white-space: nowrap;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
  }
`

export const ProgressContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme['hairline-strong']};
  border-radius: 3px;
  overflow: hidden;
`

export const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.theme['accent-color']};
  transition: width var(--dur-slow) var(--ease);
  border-radius: 3px;
`

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  width: 100%;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  color: ${(props) => props.theme['muted-color']};

  p {
    color: ${(props) => props.theme['muted-color']};
    font-size: 0.75rem;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }

  svg {
    color: ${(props) => props.theme['muted-color']};
    font-size: 0.72rem;
  }
`

export const DueDateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: ${(props) => props.theme['muted-color']};
  border-radius: 5px;
  white-space: nowrap;

  svg {
    font-size: 0.72rem;
    color: currentColor;
  }

  &.overdue {
    color: ${(props) => props.theme['overdue-color']};
  }

  &.due_soon {
    color: ${(props) => props.theme['due-soon-color']};
  }

  &.completed {
    color: ${(props) => props.theme['completed-color']};
  }
`
