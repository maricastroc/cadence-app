import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  background-color: ${(props) => props.theme['sidebar-color']};
  position: fixed;
  top: 0;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
  transform: translateX(0);
  width: 220px;
  transition: transform 0.3s ease, width 0.3s ease;
  padding: 1rem 0 0.75rem;

  &::-webkit-scrollbar {
    display: none;
  }

  &.hidden {
    transform: translateX(-100%);
    min-width: 0;
    width: 0;
  }

  scrollbar-width: none;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.25rem 1rem 1.5rem;

  .logo-mark {
    display: flex;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: ${(props) => props.theme['highlight-top']};

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme['title-color']};
  }
`

export const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.1875rem 0.5rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  color: ${(props) => props.theme['muted-color']};
  text-transform: uppercase;
`

export const CreateBoardArea = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 0.6rem;
`

export const CreateDivider = styled.div`
  height: 1px;
  margin: 0.45rem 0.5rem;
  background-color: ${(props) => props.theme['hairline-color']};
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.75rem 0.75rem 0;
  margin-top: auto;
`

export const HideButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  padding: 0.5rem 0.625rem;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  width: 100%;
  color: ${(props) => props.theme['muted-color']};
  transition: background-color var(--dur) var(--ease),
    color var(--dur) var(--ease);

  p {
    font-size: 0.8125rem;
    font-weight: 500;
    color: inherit;
  }

  svg {
    color: inherit;
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['card-hover']};
    color: ${(props) => props.theme['text-color']};
  }
`
