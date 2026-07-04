import styled, { css } from 'styled-components'

/**
 * Shared popover-menu primitives (Edit/Delete/Logout style dropdowns).
 * `menuSurface` is position-agnostic — apply absolute/fixed positioning
 * per usage. Pair with <MenuItem /> and <MenuDivider />.
 */
export const menuSurface = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1px;
  padding: 0.375rem;
  border-radius: 12px;
  z-index: 10;
  background-color: ${(props) => props.theme['card-color']};
  box-shadow: ${(props) => props.theme['shadow-pop']};
`

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.625rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme['text-color']};
  transition: background-color var(--dur-fast) var(--ease),
    color var(--dur-fast) var(--ease);

  svg {
    font-size: 0.82rem;
    width: 1rem;
    color: ${(props) => props.theme['muted-color']};
  }

  &:hover svg {
    color: ${(props) => props.theme['subtitle-color']};
  }

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
    color: ${(props) => props.theme['title-color']};
  }

  /* Delete stays quiet grey at rest; only the hover reveals the danger red. */
  &.danger {
    color: ${(props) => props.theme['text-color']};
  }

  &.danger:hover {
    background-color: ${(props) => props.theme['card-hover']};
    color: ${(props) => props.theme['error-hover']};
  }

  &.danger:hover svg {
    color: ${(props) => props.theme['error-hover']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:disabled:hover {
    background-color: transparent;
    color: ${(props) => props.theme['text-color']};
  }

  @media (max-width: 767px) {
    min-height: 44px;
    padding: 0.6rem 0.75rem;
    font-size: 0.9375rem;

    svg {
      font-size: 0.9rem;
    }
  }
`

export const MenuDivider = styled.div`
  height: 1px;
  width: 100%;
  margin: 0.15rem 0;
  background-color: ${(props) => props.theme['hairline-color']};
`
