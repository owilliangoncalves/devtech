import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DEV EXP | Home',
  description:
    'Aprenda Engenharia de Software de uma forma leve. Feito por estudantes de Engenharia de Software para estudantes.',
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
