import Image from 'next/image';
import SoftwareEngineer from '/public/static/img/software-engineer.svg';
import Resume from '@/app/components/resume';
import Titulo from '@/app/components/titulo';

export default function EngSoftware() {
  return (
    <>
      <section className='containerResponsive'>
        <div className='justify-center w-full flex'>
          <Image
            src={SoftwareEngineer}
            alt='Um rapaz com capuz caminhando, ao fundo um painel com símbolos que lembram códigos'
            height={320}
            quality={100}
            className='w-auto md:h-80 '
          />
        </div>

        <Titulo titulo='Engenharia de Software' className='py-16' />

        <div className='md:grid md:grid-cols-8 gap-1 '>
          <div className='col-start-1 bg-card'>
            <h6>Nessa página</h6>
          </div>
          <div className='col-start-2 col-span-7'>
            <div className='grid grid-cols-3 gap-1'>
              <Resume
                path='/eng-software/linguagens'
                tituloCard='linguagens de programação'
              />
              <Resume
                path='/requisitos'
                tituloCard='engenharia de requisitos'
              />
              <Resume path='/frameworks' tituloCard='frameworks' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
