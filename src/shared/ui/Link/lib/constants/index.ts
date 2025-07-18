import type { TLinkStyleMap, TLinkComponentsMap } from '../../model/types';
import {
  StyledLinkActive,
  StyledLinkDark,
  StyledLinkLight,
} from '../../ui/StyledLinks';

export const CLinkStylesNames: TLinkStyleMap = {
  dark: 'dark',
  light: 'light',
  active: 'active',
} as const;

export const CLinkStyles: TLinkComponentsMap = {
  dark: StyledLinkDark,
  light: StyledLinkLight,
  active: StyledLinkActive,
} as const;
