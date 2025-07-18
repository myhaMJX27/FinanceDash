import type { IconLookup } from '@fortawesome/free-solid-svg-icons';
import type { JSX } from 'react';

import { CIconStyle } from '../lib/constants';
import type { IIconProps } from '../model/interfaces';
import type { TIconStyle } from '../model/types';

interface IProps extends IIconProps {
  icon: IconLookup;
  type: TIconStyle;
}

const Icon = ({ icon, type, iconsize }: IProps): JSX.Element => {
  const IconElement = CIconStyle[type];
  return <IconElement icon={icon} iconsize={iconsize} />;
};

export default Icon;
