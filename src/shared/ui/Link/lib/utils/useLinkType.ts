import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import type { ILink } from '../../model/interfaces';
import type { TLinkStyle } from '../../model/types';
import { CLinkStylesNames } from '../constants';

export const useLinkType = ({ href, type }: ILink): TLinkStyle => {
  const path = usePathname();
  return useMemo(
    () => (path === href ? CLinkStylesNames.active : type),
    [path, href, type]
  );
};
