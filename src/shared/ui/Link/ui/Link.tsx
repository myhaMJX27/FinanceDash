'use client';
import { usePathname } from 'next/navigation';
import type { JSX } from 'react';

import { CLinkStyles } from '../lib/constants/styles';
import type { ILink } from '../model/interfaces';

export const Link = ({ type, href, children }: ILink): JSX.Element => {
  const path = usePathname();
  const LinkElement = CLinkStyles[path === href ? 'active' : type];
  return <LinkElement href={href}>{children}</LinkElement>;
};
