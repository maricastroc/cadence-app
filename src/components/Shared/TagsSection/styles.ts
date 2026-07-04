import styled, { keyframes } from 'styled-components'

const pop = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const TagsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const TagsLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme['muted-color']};

  svg {
    font-size: 0.72rem;
  }

  @media (max-width: 767px) {
    font-size: 0.8125rem;

    svg {
      font-size: 0.8rem;
    }
  }
`

export const TagsHint = styled.p`
  font-size: 0.75rem;
  line-height: 1.4;
  color: ${(props) => props.theme['muted-color']};

  @media (max-width: 767px) {
    font-size: 0.8125rem;
  }
`

export const ChipsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
`

export const Chip = styled.button<{ $color: string; $checked: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4375rem;
  padding: 0.5rem 0.6875rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ $checked, theme }) =>
    $checked ? theme['card-hover'] : theme['hairline-color']};
  color: ${({ $checked, theme }) =>
    $checked ? theme['accent-text'] : theme['subtitle-color']};
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: background-color var(--dur) var(--ease),
    border-color var(--dur) var(--ease), color var(--dur) var(--ease),
    transform var(--dur-fast) var(--ease);

  &:hover {
    color: ${(props) => props.theme['text-color']};
    background-color: ${({ $checked, theme }) =>
      $checked ? theme['card-hover'] : theme['card-hover']};
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 767px) {
    min-height: 44px;
    padding: 0.5rem 0.85rem;
    font-size: 0.9375rem;
  }
`

export const ChipDot = styled.span<{ $color: string }>`
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`

export const ChipCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${(props) => props.theme['accent-color']};
  animation: ${pop} 160ms var(--ease);

  svg {
    font-size: 0.7rem;
  }
`

export const Empty = styled.span`
  color: ${(props) => props.theme['muted-color']};
  font-size: 0.8125rem;
`
