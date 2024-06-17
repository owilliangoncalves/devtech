import Image from 'next/image';
import Programming from '/public/static/img/programming.svg';
import StorySet from '@/components/storyset';
import Titulo from '@/components/titulo';
import Resume from '@/components/resume';

export default function PageLinguagens() {
  return (
    <>
      <section className='containerResponsive'>
        <div className='justify-center w-full flex flex-col'>
          <Image
            src={Programming}
            alt='Mão desenhadas em preto e branco digitando'
            height={320}
            quality={100}
            className='w-auto md:h-96 '
          />
          <StorySet />
        </div>
        <Titulo titulo='Linguagens' />
        <div className='lg:grid lg:grid-cols-8 gap-3'>
          <div className='col-start-2 col-span-7'>
            <div className='md:grid grid-cols-3 gap-12 h-[300px]'>
              <Resume
                tituloCard='JavaScript'
                path='/blog/linguagens/javascript'
                className=''
              />
              <Resume tituloCard='TypeScript' path='' className='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
