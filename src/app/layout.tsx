import type { Metadata } from 'next';
import type { JSX } from 'react';

import { AppProvider } from './providers/AppProvider';
export const metadata: Metadata = {
  title: 'Calculator',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
