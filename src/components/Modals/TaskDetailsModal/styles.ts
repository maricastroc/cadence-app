import styled from 'styled-components'

export const TaskDescription = styled.p`
  color: ${(props) => props.theme['subtitle-color']};
  font-size: ${(props) => props.theme['body-l']};
  line-height: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.4rem;

  @media (max-width: 767px) {
    font-size: 0.9375rem;
    line-height: 1.5rem;
  }
`
