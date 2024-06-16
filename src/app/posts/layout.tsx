import Footer from '@/app/components/footer';
import NavBar from '../components/navbar';
import PagePosts from './page';

export default function PostsLayout() {
  return (
    <div>
      <NavBar />
      <PagePosts />
      <Footer />
    </div>
  );
}
