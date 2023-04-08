'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

type TProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: TProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};
export default Providers;
