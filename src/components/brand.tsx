import Image from 'next/image';
import Logo from '/public/static/img/dev-logo.svg';
import StorySet from './storyset';

export default function Brand({ ...props }) {
  return (
    <div className='containerResponsive flex md:flex lg:pt-20 lg:pb-16 justify-around gap-36 items-center'>
      <div className='hidden md:flex md:items-center justify-items-center '>
        <Image
          className='md:h-32 w-auto'
          src={Logo}
          alt='logo Devs Experts'
          height={50}
          quality={100}
        />
        <h1 className='font-light uppercase text-sm md:text-2xl lg:text-6xl text-curious-blue-950'>
          Exp
        </h1>
      </div>
      <div>
        <Image
          className='h-auto w-auto md:h-80 lg:h-64'
          quality={100}
          src={props.img}
          alt='Ilustração de pessoas compartilhando conhecimento. Imagem retirada do site Storyset (conheçam)'
        />
        <StorySet />
      </div>
    </div>
  );
}
