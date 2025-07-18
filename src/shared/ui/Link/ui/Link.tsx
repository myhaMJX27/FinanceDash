'use client';
import type { JSX } from 'react';

import { CLinkStyles } from '../lib/constants';
import { useLinkType } from '../lib/utils/useLinkType';
import type { ILink } from '../model/interfaces';

export const Link = ({ type, href, children }: ILink): JSX.Element => {
  const linkType = useLinkType({ type, href });
  const LinkElement = CLinkStyles[linkType];
  return <LinkElement href={href}>{children}</LinkElement>;
};
