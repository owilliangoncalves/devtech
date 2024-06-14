import Footer from '@/app/components/footer';
import NavBar from '../../components/navbar';
import Manifesto from './page';

export default function EngSoftwareLayout() {
  return (
    <div>
      <NavBar />
      <Manifesto />
      <Footer />
    </div>
  );
}
