import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/static/img/dev-logo.svg';

export default function NavBar() {
  return (
    <header className='container mx-auto'>
      <nav className='flex items-center '>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo Devs Experts' height={45} width={45} />
        </Link>
        <p className='ml-2 text-important '>EXPERT</p>

        <div className=' hidden md:flex justify-end w-full'>
          <ul className='flex gap-3 text-important '>
            <li className='ml-3 btHover active:bg-hover p-1  '>
              <Link href={'/eng-software'}>Eng. Software</Link>
            </li>
            <li className='btHover p-1 '>
              <Link href={'/manifesto'}>Manifesto</Link>
            </li>
            <li className='btHover p-1'>
              <Link href={'/nao-somos'}>Quem não somos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}