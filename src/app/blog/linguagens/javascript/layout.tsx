import PageJavaScript from './page';
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function LayoutJavaScript() {
  return (
    <div>
      <NavBar />
      <PageJavaScript />
      <Footer />
    </div>
  );
}
