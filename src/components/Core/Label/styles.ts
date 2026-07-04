import styled from 'styled-components'

export const Label = styled.label<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme['muted-color']};
  margin-bottom: 0.5rem;

  svg {
    font-size: 0.72rem;
    color: inherit;
  }
`
