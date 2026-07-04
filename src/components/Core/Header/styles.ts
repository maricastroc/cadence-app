import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 100vw;
  padding: 1rem;
  background-color: ${(props) => props.theme['canvas-color']};
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 1.125rem 1.5rem;
    margin-left: 220px;
    width: auto;

    &.hide-sidebar-mode {
      margin-left: 0;
    }
  }
`

export const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`

export const Eyebrow = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme['muted-color']};
  margin-bottom: -0.25rem;
`

export const BoardName = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: -0.024em;
  line-height: 1.15;
  color: ${(props) => props.theme['title-color']};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60vw;
`

export const BoardNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;

  .chevron {
    display: none;
  }

  @media (max-width: 767px) {
    .chevron {
      display: inline-flex;
      flex-shrink: 0;
      color: ${(props) => props.theme['muted-color']};
      font-size: 0.85rem;
    }
  }
`

// Board metadata reads as quiet inline chips — the same hairline-fill language
// as the tag chips on cards, so the whole product rhymes. Only "% done" carries
// a dot of the accent, because it's the one number worth a glance.
export const MetricStrip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-wrap: wrap;
`

export const StatChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  height: 24px;
  padding: 0 0.5rem;
  border-radius: 7px;
  background-color: ${(props) => props.theme['hairline-color']};
  font-size: 0.75rem;
  color: ${(props) => props.theme['muted-color']};
  white-space: nowrap;

  strong {
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: ${(props) => props.theme['text-color']};
  }

  .ring {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${(props) => props.theme['accent-color']};
  }
`

export const BoardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  min-width: 0;
  cursor: default;

  @media (max-width: 767px) {
    cursor: pointer;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`

export const ActionBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4375rem;
  height: 38px;
  padding: 0 0.875rem;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme['accent-color']};
  box-shadow: ${(props) => props.theme['highlight-top']},
    0 2px 6px -1px ${(props) => props.theme['accent-glow']};
  transition: background-color var(--dur) var(--ease),
    box-shadow var(--dur) var(--ease), transform var(--dur-fast) var(--ease);

  &:hover {
    background-color: ${(props) => props.theme['accent-hover']};
    box-shadow: ${(props) => props.theme['highlight-top']},
      0 2px 10px -1px ${(props) => props.theme['accent-glow']},
      0 0 0 3px ${(props) => props.theme['accent-soft']};
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    font-size: 0.8rem;
    color: ${(props) => props.theme['button-title']};
  }

  p {
    font-size: 0.8125rem;
    font-weight: 600;
    color: ${(props) => props.theme['button-title']};
  }

  &.secondary {
    background-color: ${(props) => props.theme['card-color']};
    box-shadow: ${(props) => props.theme['shadow-card']};

    svg {
      color: ${(props) => props.theme['subtitle-color']};
    }

    p {
      color: ${(props) => props.theme['text-color']};
    }

    &:hover {
      background-color: ${(props) => props.theme['card-hover']};
      box-shadow: ${(props) => props.theme['shadow-card-hover']};
    }
  }

  p {
    display: none;
  }

  @media (min-width: 560px) {
    p {
      display: block;
    }
  }
`

export const EditDeleteBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme['card-color']};
  box-shadow: ${(props) => props.theme['shadow-card']};
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme['subtitle-color']};
  transition: background-color var(--dur) var(--ease),
    box-shadow var(--dur) var(--ease), color var(--dur) var(--ease);

  svg {
    color: ${(props) => props.theme['subtitle-color']};
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
    box-shadow: ${(props) => props.theme['shadow-card-hover']};
    color: ${(props) => props.theme['title-color']};
  }
`

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  transition: opacity var(--dur) var(--ease);

  &.disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }
`

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 160px;
  height: 42px;
  padding: 0 0.875rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['card-color']};
  box-shadow: ${(props) => props.theme['shadow-card']};
  transition: box-shadow var(--dur) var(--ease);

  svg {
    font-size: 0.8rem;
    color: ${(props) => props.theme['muted-color']};
    flex-shrink: 0;
  }

  input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.8125rem;
    color: ${(props) => props.theme['text-color']};

    &::placeholder {
      color: ${(props) => props.theme['muted-color']};
    }
  }

  .clear {
    cursor: pointer;
    color: ${(props) => props.theme['muted-color']};
    font-size: 0.85rem;

    &:hover {
      color: ${(props) => props.theme['text-color']};
    }
  }

  .kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme['kbd-bg']};
    font-size: 0.6875rem;
    font-weight: 600;
    color: ${(props) => props.theme['muted-color']};
    flex-shrink: 0;
  }

  &:focus-within {
    box-shadow: ${(props) => props.theme['shadow-card']},
      inset 0 0 0 1.5px ${(props) => props.theme['muted-color']};

    .kbd {
      opacity: 0;
    }
  }
`

export const ToolButtonWrapper = styled.div`
  position: relative;
`

export const ToolButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4375rem;
  height: 42px;
  padding: 0 0.875rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['card-color']};
  box-shadow: ${(props) => props.theme['shadow-card']};
  border: none;
  color: ${(props) => props.theme['text-color']};
  font-size: 0.8125rem;
  font-weight: 500;
  transition: background-color var(--dur) var(--ease),
    box-shadow var(--dur) var(--ease), color var(--dur) var(--ease);

  svg {
    font-size: 0.8rem;
    color: ${(props) => props.theme['muted-color']};
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: 8px;
    font-size: 0.625rem;
    font-weight: 700;
    background-color: ${(props) => props.theme['accent-color']};
    color: ${(props) => props.theme['accent-on']};
  }

  &:hover,
  &.open {
    background-color: ${(props) => props.theme['card-hover']};
    box-shadow: ${(props) => props.theme['shadow-card-hover']};
  }

  &.active {
    color: ${(props) => props.theme['accent-text']};
    box-shadow: ${(props) => props.theme['shadow-card']},
      inset 0 0 0 1.5px ${(props) => props.theme['accent-color']};

    svg {
      color: ${(props) => props.theme['accent-color']};
    }
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 50;
  min-width: 208px;
  padding: 0.375rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['card-color']};
  box-shadow: ${(props) => props.theme['shadow-pop']};
  display: flex;
  flex-direction: column;
  gap: 1px;

  .dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 0.5rem 0.5rem;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${(props) => props.theme['muted-color']};

    button {
      cursor: pointer;
      background: none;
      border: none;
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      color: ${(props) => props.theme['accent-text']};
      text-transform: none;
    }
  }

  .empty {
    padding: 0.5rem;
    font-size: 0.8125rem;
    color: ${(props) => props.theme['muted-color']};
  }
`

export const DropdownItem = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  background: transparent;
  border: none;
  text-align: left;
  font-size: 0.8125rem;
  color: ${(props) => props.theme['text-color']};
  transition: background-color var(--dur-fast) var(--ease);

  .swatch {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .check {
    margin-left: auto;
    font-size: 0.75rem;
    color: ${(props) => props.theme['accent-color']};
  }

  span.label {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
  }

  &.selected {
    color: ${(props) => props.theme['accent-text']};
  }
`
