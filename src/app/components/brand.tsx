import Image from 'next/image';
import Logo from '/public/static/img/dev-logo.svg';

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
        <h1 className='uppercase text-sm md:text-2xl lg:text-6xl text-important'>
          Exp
        </h1>
      </div>
      <Image
        className='w-auto md:h-40 lg:h-64'
        height={150}
        quality={100}
        src={props.img}
        alt='Ilustração de pessoas compartilhando conhecimento pela internet'
      />
    </div>
  );
}
