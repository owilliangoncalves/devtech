import Image from 'next/image';
import SoftwareEngineer from '/public/static/img/software-engineer.svg';
import Resume from '@/app/components/resume';
import Titulo from '@/app/components/titulo';
import SideNav from '@/app/components/sidenav';

export default function PageLinguagens() {
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

        <Titulo titulo='Linguagens de Programação' className='py-16' />

        <div className='md:grid md:grid-cols-8 gap-1'>
          <SideNav />
          <div className='col-start-2 col-span-7'>
            <div className='grid grid-cols-3 gap-3'>
              <Resume
                path='/blog/linguagens/java-  script'
                tituloCard='JavaScript'
              />
              <Resume
                path='/blog/linguagens/typescript'
                tituloCard='TypeScript'
              />
              <Resume path='/frameworks' tituloCard='padrões de projeto' />
              <Resume path='/frameworks' tituloCard='banco de dados' />
              <Resume path='/frameworks' tituloCard='testes de software' />
              <Resume path='/frameworks' tituloCard='gestão de projetos' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
