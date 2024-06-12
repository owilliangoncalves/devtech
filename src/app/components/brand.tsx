import Image from 'next/image';
import Logo from '/public/static/img/dev-logo.svg';
export default function Brand() {
  return (
    <div className='container flex flex-col md:flex lg:pt-36 lg:pb-16 lg:px-16 justify-center'>
      <Image src={Logo} height={100} width={100} alt='logo Devs Experts' />
      <h1 className='titulo'>Experts</h1>
    </div>
  );
}
