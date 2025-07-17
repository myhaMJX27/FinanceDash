import type { JSX } from 'react';

import { Logo } from '@/shared/ui/Logo';

import { HeaderNav } from './HeaderNav';

export const Header = (): JSX.Element => {
  return (
    <header>
      <Logo type="dark" />
      <HeaderNav />
    </header>
  );
};
