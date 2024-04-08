import { ThemeProvider } from '@/app/providers';
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sébastien OUALLET - Portfolio développeur Fullstack',
  description:
    'Développeur Web Fullstack et Freelance localisé en île-de-France. Découvrez en plus à mon sujet et sur mon travail en parcourant mon portfolio.',
  authors: { name: 'Sébastien OUALLET' },
  keywords: [
    'Développeur',
    'Freelance',
    'Développeur web Fullstack',
    'portfolio fullstack',
  ],
  creator: 'Sébastien OUALLET',
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
            <main className="flex flex-col container mx-auto grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
