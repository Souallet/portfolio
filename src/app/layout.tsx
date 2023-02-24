import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sébastien OUALLET - Portfolio',
  description: 'Développeur Web Freelance Fullstack.',
};

interface TProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
