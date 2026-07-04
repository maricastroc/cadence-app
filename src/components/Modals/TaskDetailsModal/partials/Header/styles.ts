import styled from 'styled-components'
import { Title as RadixTitle } from '@radix-ui/react-dialog'
import { menuSurface } from '@/components/Core/Menu/styles'

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.5rem 1.5rem 1.25rem;
`

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
  flex: 1;
  min-width: 0;
`

export const TaskTitle = styled(RadixTitle)`
  font-size: ${(props) => props.theme['heading-l']};
  font-weight: 600;
  letter-spacing: -0.018em;
  line-height: 1.35;
  color: ${(props) => props.theme['title-color']};
`

export const TaskSubtitle = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme['muted-color']};

  svg {
    font-size: 0.7rem;
  }

  @media (max-width: 767px) {
    font-size: 0.8125rem;

    svg {
      font-size: 0.78rem;
    }
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
`

export const OptionsBtn = styled.button`
  cursor: pointer;
  display: flex;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['muted-color']};
  transition: background-color 160ms ease, color 160ms ease;

  svg {
    cursor: pointer;
    font-size: 1.05rem;
  }

  &:hover,
  &[data-active='true'] {
    background-color: ${(props) => props.theme['hairline-color']};
    color: ${(props) => props.theme['title-color']};
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;

    svg {
      font-size: 1.2rem;
    }
  }
`

export const OptionsModal = styled.div`
  ${menuSurface}
  position: absolute;
  top: 2.6rem;
  right: 0;
  width: 11rem;
`
