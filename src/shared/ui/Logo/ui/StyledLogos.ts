'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const logoStyle = css`
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const styledLogoLight = styled.div(logoStyle, (props) => ({
  color: props.theme.colorAdd1,
}));

export const styledLogoDark = styled.div(logoStyle, (props) => ({
  color: props.theme.colorAdd2,
}));
