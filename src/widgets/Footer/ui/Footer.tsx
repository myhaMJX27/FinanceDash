'use client';
import type { JSX } from 'react';

import { CLogoStyleNames, Logo } from '@/shared/ui/Logo';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Logo type={CLogoStyleNames.dark} />
    </footer>
  );
};
