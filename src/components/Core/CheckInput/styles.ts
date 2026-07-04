import styled from 'styled-components'

export const UncheckedBox = styled.button`
  cursor: pointer;
  min-width: 18px;
  min-height: 18px;
  background-color: ${(props) => props.theme['field-bg']};
  border: solid 1.5px ${(props) => props.theme['hairline-strong']};
  border-radius: 6px;
  transition: border-color var(--dur) var(--ease);

  &:hover {
    border-color: ${(props) => props.theme['accent-color']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const CheckedBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 18px;
  min-height: 18px;
  background-color: ${(props) => props.theme['accent-color']};
  border: none;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['accent-on']};
    font-size: 0.7rem;
  }

  &:focus {
    box-shadow: none;
  }
`
