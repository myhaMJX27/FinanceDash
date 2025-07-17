import { Global, css } from '@emotion/react';

import { constTheme } from '../lib/constants';
import type { ITheme } from '../models/interfaces';

const dynamicGlobalStyles = (theme: ITheme) => css`
  * {
    margin: 0;
    padding: 0;
    height: fit-content;
    box-sizing: border-box;
    cursor: default;
    color: ${theme.colorTextMain};
    font-family: sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    gap: ${theme.gaps.gapMedium};
  }

  header {
    height: 50px;
    width: 90%;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > nav {
      display: flex;
      gap: ${theme.gaps.gapMedium};
      align-items: center;
    }
  }

  a {
    font-size: 0.875rem;
    text-decoration: none;
    color: transparent;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
  }

  input {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: text;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    color: ${theme.colorMain};
  }

  time {
    font-size: 0.75rem;
    color: ${theme.colorAdd2}40;
  }

  span {
    color: ${theme.colorTextAdd1};
  }
`;
export const GlobalStyles = () => {
  return <Global styles={dynamicGlobalStyles(constTheme)} />;
};
