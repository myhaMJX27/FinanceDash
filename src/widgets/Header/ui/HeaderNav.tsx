import type { JSX } from 'react';

import { Link } from '@/shared/ui/Link';

import { CHeaderLinks } from '../lib/constants/navConstants';

export const HeaderNav = (): JSX.Element => {
  return (
    <nav>
      {CHeaderLinks.map(({ href, children, type }) => (
        <Link type={type} href={href} key={href.toString()}>
          {children}
        </Link>
      ))}
    </nav>
  );
};
