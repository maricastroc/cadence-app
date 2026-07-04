import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 44px;
  background-color: ${(props) => props.theme['field-bg']};
  border: none;
  padding: 0 0.875rem;
  color: ${(props) => props.theme['title-color']};
  font-size: 0.8125rem;
  border-radius: 10px;
  transition: box-shadow var(--dur) var(--ease),
    background-color var(--dur) var(--ease);

  &::placeholder {
    color: ${(props) => props.theme['muted-color']};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme['muted-color']};
  }

  &.error {
    background-color: ${(props) => props.theme['error-soft']};
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme['error-border']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const DeleteFieldBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  pointer-events: initial;
  border-radius: 8px;
  transition: background-color 140ms ease, color 140ms ease;

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['muted-color']};
  }

  &:hover:not(.disabled) {
    background-color: ${(props) => props.theme['hairline-color']};

    svg {
      color: ${(props) => props.theme['error-color']};
    }
  }

  &.disabled {
    cursor: not-allowed;

    svg {
      opacity: 0.25;
    }
  }
`
