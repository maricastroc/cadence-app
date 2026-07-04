import styled from 'styled-components'

// Borderless input: a recessed well defined by a fill darker than its container
// (field-bg), never an outline. Focus is an accent ring (box-shadow), error is
// an inset ring — no borders anywhere.
export const Input = styled.input`
  pointer-events: initial;
  opacity: 1;
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

  &.error:focus,
  &.error:focus-visible {
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme['error-border']},
      0 0 0 3px ${(props) => props.theme['error-soft']};
  }

  &.transparent {
    background-color: transparent;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
