import { ThemeProvider } from '@/app/providers';
import Footer from '@/components/partials/footer';
import Header from '@/components/partials/header';
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

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
