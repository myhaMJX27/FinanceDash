import type { ReactNode } from 'react';

import type { TLinkStyle } from './types';

export interface ILink {
  type: TLinkStyle;
  href: string;
  children?: ReactNode;
}
