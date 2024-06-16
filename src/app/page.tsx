import NavBar from './components/navbar';
import Brand from './components/brand';
import Sharing from '/public/static/img/sharing.svg';
import Footer from './components/footer';
import PageHome from './home';

export default function App() {
  return (
    <>
      <NavBar />
      <Brand img={Sharing} />
      <PageHome />
      <Footer />
    </>
  );
}
