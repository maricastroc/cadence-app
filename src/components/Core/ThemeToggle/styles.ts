import styled from 'styled-components'
import { Root as RadixRoot, Thumb as RadixThumb } from '@radix-ui/react-switch'

export const ThemeSwitcherContainer = styled.div`
  background-color: ${(props) => props.theme['card-color']};
  box-shadow: ${(props) => props.theme['shadow-card']};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.625rem;
  gap: 0.875rem;

  svg {
    color: ${(props) => props.theme['muted-color']};
    font-size: 0.9rem;
  }

  /* Only shown inside the mobile board switcher (the sidebar is hidden on
     phones) — size it up, and use field-bg since card-color matches the modal
     surface in dark mode and the pill would otherwise disappear. */
  @media (max-width: 767px) {
    padding: 0.6rem 0.9rem;
    gap: 1rem;
    border-radius: 12px;
    background-color: ${(props) => props.theme['field-bg']};
    box-shadow: none;

    svg {
      font-size: 1.15rem;
    }
  }
`

export const SwitchRoot = styled(RadixRoot)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 38px;
  height: 20px;
  padding: 0;
  background-color: ${(props) => props.theme['accent-color']};
  border-radius: 9999px;
  position: relative;
  box-shadow: none;
  border: none;
  flex-shrink: 0;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${(props) => props.theme['accent-hover']};
  }

  @media (max-width: 767px) {
    width: 52px;
    height: 30px;
  }
`

export const SwitchThumb = styled(RadixThumb)`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffffff;
  transform: translateX(3px);
  transition: transform 0.2s ease;
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(21px);
  }

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;
    transform: translateX(3px);

    &[data-state='checked'] {
      transform: translateX(25px);
    }
  }
`
