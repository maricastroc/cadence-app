import styled from 'styled-components'

export const TaskCardContainer = styled.div`
  cursor: grab;
  display: flex;
  align-items: flex-start;
  /* No flex gap: the completion toggle owns the left spacing via its own
     width + margin, so it can collapse to zero and let the title use the full
     width until revealed on hover. */
  gap: 0;
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

  /* Hover-lift is desktop-only — on touch it "sticks" after a tap. */
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme['card-lift']};
      border-color: ${(props) => props.theme['accent-soft']};
      box-shadow: ${(props) => props.theme['shadow-card-hover']};
      transform: translateY(-1px);
    }
  }

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme['muted-color']};
    outline-offset: 2px;
  }

  /* The lifted card that follows the cursor — Trello-style: a soft shadow and
     a slight tilt, gone slightly translucent, rather than a hard teal ring. */
  &.dragging {
    cursor: grabbing;
    background-color: ${(props) => props.theme['card-lift']};
    box-shadow: ${(props) => props.theme['shadow-lg']};
    transform: rotate(2.5deg) scale(1.02);
    opacity: 0.9;
  }

  /* When dragging is off (loading / filtering), the card is only clickable —
     drop the grab affordance so it doesn't promise a move that won't happen. */
  &.drag-disabled,
  &.drag-disabled:active {
    cursor: default;
  }

  @media (max-width: 767px) {
    gap: 0;
    padding: 0.9rem 0.95rem;
    border-radius: 14px;
    box-shadow: ${(props) => props.theme['shadow-sm']};

    &:active {
      background-color: ${(props) => props.theme['card-lift']};
      transform: scale(0.985);
    }
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

  @media (max-width: 767px) {
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.4;
  }
`

export const CompleteToggle = styled.button`
  flex-shrink: 0;
  margin-top: 1px;
  margin-right: 0.625rem;
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
  overflow: hidden;
  transition: border-color var(--dur-fast) var(--ease),
    background-color var(--dur-fast) var(--ease), opacity var(--dur) var(--ease),
    width var(--dur) var(--ease), margin-right var(--dur) var(--ease);

  svg {
    font-size: 0.55rem;
  }

  /* Desktop, Trello-style: the circle collapses to zero width so the title
     spans the full card, then slides open on hover (or focus, or when the task
     is already done) — the content shifts right to make room for the check. */
  @media (hover: hover) {
    width: 0;
    margin-right: 0;
    border-width: 0;
    opacity: 0;

    &:hover {
      border-color: ${(props) => props.theme['completed-color']};
    }

    .task-card:hover &,
    .task-card:focus-within &,
    .task-card.dragging &,
    &:focus-visible,
    &.completed {
      width: 16px;
      margin-right: 0.625rem;
      border-width: 1.5px;
      opacity: 1;
    }
  }

  &.completed {
    border-color: ${(props) => props.theme['completed-color']};
    background-color: ${(props) => props.theme['completed-color']};
  }

  &:disabled {
    cursor: default;
  }

  /* Keep the ring visually small but give it a full 44px tap target so it's
     comfortable to check off with a thumb. */
  @media (max-width: 767px) {
    width: 22px;
    height: 22px;
    margin-top: 2px;
    margin-right: 0.8rem;
    position: relative;

    svg {
      font-size: 0.7rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 44px;
      height: 44px;
    }

    &:active:not(:disabled) {
      transform: scale(0.9);
    }
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

  &.more {
    color: ${(props) => props.theme['muted-color']};
    font-weight: 600;
  }

  @media (max-width: 767px) {
    height: 22px;
    padding: 0 0.5rem;
    border-radius: 7px;
    font-size: 0.75rem;
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

  @media (max-width: 767px) {
    p {
      font-size: 0.8125rem;
    }

    svg {
      font-size: 0.8rem;
    }
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

  @media (max-width: 767px) {
    font-size: 0.8125rem;

    svg {
      font-size: 0.8rem;
    }
  }
`
