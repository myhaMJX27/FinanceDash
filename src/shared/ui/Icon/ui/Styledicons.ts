'use client';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { IIconProps } from './../model/interfaces';

const BaseStyledIcon = styled(FontAwesomeIcon)<IIconProps>`
  height: ${(props) => props.iconsize};

  path {
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.transitionDefaultFast};
  }

  &:hover path {
    color: ${(props) => props.theme.colorTextAdd1};
  }
`;

export const StyledIconDark = styled(BaseStyledIcon)<IIconProps>`
  path {
    color: ${(props) => props.theme.colorAdd2};
  }
`;

export const StyledIconLight = styled(BaseStyledIcon)<IIconProps>`
  path {
    color: ${(props) => props.theme.colorAdd1};
  }
`;

export const StyledIconActive = styled(BaseStyledIcon)<IIconProps>`
  path {
    color: ${(props) => props.theme.colorAdd3};
  }
`;
