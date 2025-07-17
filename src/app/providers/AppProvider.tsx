'use client';
import type { JSX } from 'react';
import { type FC, type PropsWithChildren } from 'react';

import { EmotionProvider } from './EmotionProvider';
import { StyleProvider } from './StyledProvider';

export const AppProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  return (
    <EmotionProvider>
      <StyleProvider>{children}</StyleProvider>
    </EmotionProvider>
  );
};
