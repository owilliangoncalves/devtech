import Footer from './components/footer';
import NavBar from './components/navbar';
import Posts from './components/posts';

export default function Home() {
  return (
    <div className='container mx-auto '>
      <NavBar />
      <Posts />
      {/* <Footer /> */}
    </div>
  );
}
