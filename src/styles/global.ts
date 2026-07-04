import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* One motion language for the whole product. */
    --ease: cubic-bezier(0.22, 1, 0.36, 1);
    --dur-fast: 130ms;
    --dur: 180ms;
    --dur-slow: 260ms;
  }

  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  a:focus-visible
  {
    outline: 2px solid ${(props) => props.theme['muted-color']};
    outline-offset: 2px;
    border-color: ${(props) => props.theme['muted-color']};
  }

  button:focus-visible {
    outline: 2px solid ${(props) => props.theme['muted-color']};
    outline-offset: 2px;
  }

  body {
    background-color: ${(props) => props.theme['bg-color']};
    color: ${(props) => props.theme['title-color']};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: -0.011em;
    font-feature-settings: 'cv05' 1, 'ss01' 1, 'calt' 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif;
    letter-spacing: -0.022em;
  }

  ::selection {
    background-color: ${(props) => props.theme['accent-fill']};
    color: ${(props) => props.theme['title-color']};
  }

  /* Quiet by default; the thumb only gains presence on hover. */
  ::-webkit-scrollbar {
    width: 0.625rem;
    height: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['scroll-color']};
    border-radius: 10px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme['muted-color']};
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme['scroll-color']} transparent;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${(props) => props.theme['text-color']};
    -webkit-box-shadow: 0 0 0px 1000px ${(props) =>
      props.theme['field-bg']} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`
