import styled from 'styled-components'

export const AddColumnContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 11rem;
  max-width: 11rem;
  /* Stretch to the full board height (the columns container has a definite
     height) so the add-column target isn't a stubby box next to the columns. */
  align-self: stretch;
  min-height: 120px;
  border-radius: 14px;
  background-color: ${(props) => props.theme['field-bg']};
  box-shadow: ${(props) => props.theme['highlight-top']};
  transition: background-color var(--dur) var(--ease);

  &:hover {
    background-color: ${(props) => props.theme['accent-fill']};

    button {
      color: ${(props) => props.theme['accent-text']};
    }
  }
`

export const AddColumnBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: transparent;
  border: none;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${(props) => props.theme['muted-color']};
  transition: color 160ms;

  span {
    font-size: 1.05rem;
    line-height: 1;
  }
`
