'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import React, {
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';

export const EmotionProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [cache] = useState(() => {
    const cache = createCache({
      key: 'css',
      prepend: true,
      nonce: Math.random().toString(36).substring(2),
    });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) {
      return null;
    }

    const names = entries.map(([key]) => key);
    const styles = entries.map(([, value]) => value).join(' ');

    cache.inserted = {};

    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  useEffect(() => {
    return () => {
      Object.keys(cache.inserted).forEach((key) => {
        delete cache.inserted[key];
      });
    };
  }, [cache]);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
