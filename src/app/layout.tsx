import { ThemeProvider } from '@/app/providers';
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
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
