'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

type TProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: TProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
