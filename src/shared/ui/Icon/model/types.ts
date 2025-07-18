import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { ComponentType } from 'react';

import type { IIconProps } from './interfaces';

export type TIconComponent = IIconProps & FontAwesomeIconProps;

export type TIconStyle = 'light' | 'dark' | 'active';

export type TIconStyleMap = {
  [K in TIconStyle]: ComponentType<TIconComponent>;
};
