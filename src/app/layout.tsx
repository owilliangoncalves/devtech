import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Devs Experts',
  description: 'Um site sobre Engenharia de Software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='pt-BR'>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
