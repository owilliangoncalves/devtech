import Footer from '@/app/components/footer';
import NavBar from '../../components/navbar';
import Manifesto from './page';
import Brand from '@/app/components/brand';
import Manifest from '/public/static/img/manifest.svg';
import Posts from '@/app/components/posts';
import Titulo from '@/app/components/titulo';

export default function EngSoftwareLayout() {
  return (
    <div>
      <NavBar />
      <Brand img={Manifest} />
      <Manifesto />
      <Footer />
    </div>
  );
}
