'use client';

import Providers from '@/app/Providers';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/header';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Sébastien OUALLET - Portfolio',
//   description: 'Développeur Web Freelance Fullstack.',
// };

interface TProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased text-slate-500 dark:text-gray-200 bg-white dark:bg-black`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
