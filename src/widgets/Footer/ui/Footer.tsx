import type { JSX } from 'react';

import { Logo } from '@/shared/ui/Logo';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Logo type="light" />
    </footer>
  );
};
