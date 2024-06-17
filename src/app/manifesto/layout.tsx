import type { Metadata } from 'next';
import Footer from '@/components/footer';
import NavBar from '../../components/navbar';
import Manifesto from './page';
import Brand from '@/components/brand';
import Group from '/public/static/img/group.svg';

export const metadata: Metadata = {
  title: 'DEV EXP | Manifesto ',
  description: 'Leia o nosso manifesto e entenda no que acreditamos.',
};

export default function LayoutManifesto() {
  return (
    <div>
      <NavBar />
      <Brand img={Group} />
      <Manifesto />
      <Footer />
    </div>
  );
}
