import type { ComponentType, ReactNode } from 'react';

export type TLogoStyle = 'dark' | 'light';

export type TLogoStyleMap = {
  [K in TLogoStyle]: K;
};

export type TLogoComponentsMap = {
  [K in TLogoStyle]: ComponentType<{ children?: ReactNode }>;
};
