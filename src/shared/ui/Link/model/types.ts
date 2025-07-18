import type { ComponentType } from 'react';

import type { ILinkProps } from './interfaces';

export type TLinkStyle = 'dark' | 'light' | 'active';
export type TLinkStyleMap = {
  [K in TLinkStyle]: K;
};
export type TLinkComponentsMap = {
  [key in TLinkStyle]: ComponentType<ILinkProps>;
};
