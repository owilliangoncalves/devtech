import Resume from '@/components/resume';
import Titulo from '@/components/titulo';
import Image from 'next/image';
import StorySet from '@/components/storyset';
import SideNav from '@/components/sidenav';
import JS from '/public/static/img/javascript.svg';

export default function PageJavaScript() {
  return (
    <>
      <section className='containerResponsive'>
        <div className='justify-center w-full flex flex-col'>
          <Image
            src={JS}
            alt='Um rapaz com capuz caminhando, ao fundo um painel com símbolos que lembram códigos'
            height={320}
            quality={100}
            className='w-auto md:h-96 '
          />
          <StorySet />
        </div>

        <Titulo titulo='JavaScript' className='py-16' />

        <div className='lg:grid lg:grid-cols-2 gap-3'>
          <SideNav />
          <div className=''>
            <div className=' '>
              <h2>O que é?</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
