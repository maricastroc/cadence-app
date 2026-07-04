import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme['field-bg']};
  border: none;
  border-radius: 10px;
  transition: background-color var(--dur) var(--ease);

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
  }
`

export const Title = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.4;
  color: ${(props) => props.theme['text-color']};

  @media (max-width: 767px) {
    font-size: 0.9375rem;
  }

  &.checked {
    color: ${(props) => props.theme['muted-color']};
    text-decoration: line-through;
  }

  &.unchecked {
    color: ${(props) => props.theme['text-color']};
    text-decoration: none;
  }
`
