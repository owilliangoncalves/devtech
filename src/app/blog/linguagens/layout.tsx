import { Metadata } from 'next';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
export const metadata: Metadata = {
  title: 'DEV EXP | Linguagens ',
  description:
    'Veja o que já escrevemos sobre algumas linguagens de programação.',
};

export default function LayoutJavaScript({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
