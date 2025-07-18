import type { JSX } from 'react';

import { CLogoStyleNames, Logo } from '@/shared/ui/Logo';

import { HeaderNav } from './HeaderNav';

export const Header = (): JSX.Element => {
  return (
    <header>
      <Logo type={CLogoStyleNames.light} />
      <HeaderNav />
    </header>
  );
};
