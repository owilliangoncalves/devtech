import NavBar from './components/navbar';
import Brand from './components/brand';
import Educational from '/public/static/img/educational.svg';
import Footer from './components/footer';
import PageHome from './home/home';

export default function App() {
  return (
    <>
      <NavBar />
      <Brand img={Educational} />
      <PageHome />
      <Footer />
    </>
  );
}
