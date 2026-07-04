import styled from 'styled-components'

export const SelectStatusField = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.875rem;
  background-color: ${(props) => props.theme['field-bg']};
  border: none;
  border-radius: 10px;
  transition: box-shadow var(--dur) var(--ease),
    background-color var(--dur) var(--ease);

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
  }

  &.active {
    box-shadow: inset 0 0 0 1.5px ${(props) => props.theme['accent-color']};
    background-color: ${(props) => props.theme['field-bg']};
  }

  p {
    font-size: ${(props) => props.theme['body-l']};
    color: ${(props) => props.theme['title-color']};
  }

  svg {
    color: ${(props) => props.theme['muted-color']};
    font-size: 0.95rem;
    transition: color 160ms ease;
  }

  &.active svg {
    color: ${(props) => props.theme['accent-color']};
  }
`
