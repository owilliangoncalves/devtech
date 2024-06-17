import Image from 'next/image';
import Developer from '/public/static/img/developer.svg';
import Resume from '@/app/components/resume';
import Titulo from '@/app/components/titulo';
import SideNav from '@/app/components/sidenav';
import StorySet from '../components/storyset';

export default function PagePosts() {
  return (
    <>
      <section className='containerResponsive'>
        <div className='justify-center w-full flex flex-col'>
          <Image
            src={Developer}
            alt='Um rapaz com capuz caminhando, ao fundo um painel com símbolos que lembram códigos'
            height={320}
            quality={100}
            className='w-auto md:h-96 '
          />
          <StorySet />
        </div>

        <Titulo titulo='Engenharia de Software' className='py-16' />

        <div className='lg:grid lg:grid-cols-8 gap-1'>
          <SideNav />
          <div className='col-start-2 col-span-7'>
            <div className='md:grid grid-cols-3 gap-3'>
              <Resume
                className='resumeCard '
                path='/blog/linguagens'
                tituloCard='linguagens de programação'
              />
              <Resume
                className='resumeCard'
                path='/requisitos'
                tituloCard='arquitetura e design de sistemas'
              />
              <Resume
                className='resumeCard'
                path='/frameworks'
                tituloCard='padrões de projeto'
              />
              <Resume
                className='resumeCard'
                path='/frameworks'
                tituloCard='banco de dados'
              />
              <Resume
                className='resumeCard'
                path='/frameworks'
                tituloCard='testes de software'
              />
              <Resume
                className='resumeCard'
                path='/frameworks'
                tituloCard='gestão de projetos'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
