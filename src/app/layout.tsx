import type { Metadata } from 'next';
import type { JSX } from 'react';

import { Header } from '@/widgets/Header';

import { AppProvider } from './providers/AppProvider';
export const metadata: Metadata = {
  title: 'FinanceDash',
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
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
