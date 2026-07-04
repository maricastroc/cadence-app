import styled from 'styled-components'

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme['field-bg']};
  border: none;
  padding: 0.75rem 0.875rem;
  line-height: 1.5;
  color: ${(props) => props.theme['title-color']};
  font-size: 0.8125rem;
  border-radius: 10px;
  min-height: 104px;
  resize: none;
  width: 100%;
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
`
