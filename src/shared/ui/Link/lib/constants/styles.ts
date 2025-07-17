import type { LinkProps } from 'next/link';
import type { ComponentType, ReactNode } from 'react';

import type { TLinkStyle } from '../../model/types';
import {
  StyledLinkActive,
  StyledLinkDark,
  StyledLinkLight,
} from '../../ui/StyledLinks';

interface ILinkProps extends LinkProps {
  children?: ReactNode;
}

export const CLinkStyles: Record<TLinkStyle, ComponentType<ILinkProps>> = {
  dark: StyledLinkDark,
  light: StyledLinkLight,
  active: StyledLinkActive,
};
