import type { TLogoComponentsMap, TLogoStyleMap } from '../../model/types';
import { styledLogoDark, styledLogoLight } from '../../ui/StyledLogos';

export const CLogoStyleNames: TLogoStyleMap = {
  dark: 'dark',
  light: 'light',
} as const;

export const CLogoStyles: TLogoComponentsMap = {
  dark: styledLogoDark,
  light: styledLogoLight,
} as const;
