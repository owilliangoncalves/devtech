import { Metadata } from 'next';
import NavBar from '@/app/components/navbar';
import PageLinguagens from './page';
import Footer from '@/app/components/footer';
export const metadata: Metadata = {
  title: 'DEV EXP | Linguagens ',
  description: 'Leia o nosso manifesto e entenda no que acreditamos.',
};

export default function LayoutLinguagens() {
  return (
    <div>
      <NavBar />
      <PageLinguagens />
      <Footer />
    </div>
  );
}
