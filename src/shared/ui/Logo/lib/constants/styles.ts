import type { ComponentType, ReactNode } from 'react';

import type { TLogoStyle } from '../../model/types';
import { styledLogoDark, styledLogoLight } from '../../ui/StyledLogos';

export const CLogoStyles: Record<
  TLogoStyle,
  ComponentType<{ children?: ReactNode }>
> = {
  dark: styledLogoLight,
  light: styledLogoDark,
};
