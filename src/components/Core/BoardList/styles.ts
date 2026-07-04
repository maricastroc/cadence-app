import styled from 'styled-components'

export const BoardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  gap: 1px;
  padding: 0 0.625rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`

export const EmptyBoardsHint = styled.p`
  padding: 0.375rem 0.625rem 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: ${(props) => props.theme['muted-color']};
`

export const BoardIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  box-shadow: ${(props) => props.theme['highlight-top']};
`

export const BoardButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 0.5rem 0.625rem;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  gap: 0.625rem;
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme['subtitle-color']};
  transition: background-color var(--dur) var(--ease),
    color var(--dur) var(--ease);

  svg {
    font-size: 0.95rem;
    flex-shrink: 0;
    color: ${(props) => props.theme['muted-color']};
  }

  p {
    flex: 1;
    min-width: 0;
    font-size: 0.8125rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: inherit;
  }

  .count {
    font-size: 0.6875rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: ${(props) => props.theme['muted-color']};
  }

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
    color: ${(props) => props.theme['text-color']};
  }

  &.active {
    background-color: ${(props) => props.theme['accent-fill']};
    color: ${(props) => props.theme['accent-text']};

    svg {
      color: ${(props) => props.theme['accent-color']};
    }

    .count {
      color: ${(props) => props.theme['accent-color']};
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 18px;
      width: 2px;
      border-radius: 0 2px 2px 0;
      background-color: ${(props) => props.theme['accent-color']};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`
export const CreateBoardButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.5rem 0.625rem;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  gap: 0.625rem;
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme['accent-color']};
  transition: background-color var(--dur) var(--ease);

  .plus-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme['accent-fill']};
  }

  svg {
    font-size: 0.8rem;
    color: ${(props) => props.theme['accent-color']};
  }

  p {
    font-size: 0.8125rem;
    font-weight: 500;
    color: ${(props) => props.theme['subtitle-color']};
  }

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};

    p {
      color: ${(props) => props.theme['text-color']};
    }
  }
`
