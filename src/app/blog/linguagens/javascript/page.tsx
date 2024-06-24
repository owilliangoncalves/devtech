import Titulo from '@/components/titulo';
import Image from 'next/image';
import StorySet from '@/components/storyset';
import SideNav from '@/components/sidenav';
import JS from '/public/static/img/javascript.svg';
import ParagraphReference from '@/components/paragraphReference';
import Posts from '@/components/posts';

export default function PageJavaScript() {
  return (
    <>
      <section className='containerResponsive'>
        <div className='justify-center w-full flex flex-col'>
          <Image
            src={JS}
            alt='Ilustração de um rapaz próximo ao objeto que lembra o símbolo do JavaScript'
            height={320}
            quality={100}
            className='w-auto md:h-96 '
          />
          <StorySet />
        </div>

        <Titulo titulo='JavaScript' className='py-16' />

        <div className='lg:grid lg:grid-cols-2 gap-3'>
          <SideNav ids='' />
          <div className=''>
            <div className=' '>
              <Posts tituloPosts='Introdução' />
              <ParagraphReference
                id='Introdução'
                texto='Quando o JavaScript foi criado, inicialmente ele possuía o nome de LiveScript, mas a linguagem de programação Java era muito popular na época, então os criadores da linguagem decidiram que iriam mudar o nome de LiveScript para JavaScript.'
                nameRef='JavaScript.info'
                link={'https://javascript.info/intro'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
