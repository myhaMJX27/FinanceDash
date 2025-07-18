import type { JSX } from 'react';

import { CLogoNames } from '../lib/constants/names';
import { CLogoStyles } from '../lib/constants/styles';
import type { TLogoStyle } from '../model/types';

interface IProps {
  type: TLogoStyle;
}

export const Logo = ({ type }: IProps): JSX.Element => {
  const LogoElement = CLogoStyles[type];
  return <LogoElement>{CLogoNames.main}</LogoElement>;
};
