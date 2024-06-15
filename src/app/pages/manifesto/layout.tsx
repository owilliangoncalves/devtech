import type { Metadata } from 'next';
import Footer from '@/app/components/footer';
import NavBar from '../../components/navbar';
import Manifesto from './page';
import Brand from '@/app/components/brand';
import Manifest from '/public/static/img/manifest.svg';

export const metadata: Metadata = {
  title: 'DEV EXP | Manifesto ',
  description: 'Leia o nosso manifesto e entenda no que acreditamos.',
};

export default function pageManifesto() {
  return (
    <div>
      <NavBar />
      <Brand img={Manifest} />
      <Manifesto />
      <Footer />
    </div>
  );
}
