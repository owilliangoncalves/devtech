import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/static/img/dev-logo.svg';

export default function NavBar() {
  return (
    <header className='containerResponsive'>
      <nav className='flex items-center '>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo Devs Experts' height={45} width={45} />
        </Link>
        <p className='ml-2 text-important '>EXP</p>

        <div className=' hidden md:flex justify-end w-full'>
          <ul className='flex gap-3 text-important '>
            <li className='ml-3 btHover active:bg-hover p-1  '>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='ml-3 btHover active:bg-hover p-1  '>
              <Link href={'/pages/eng-software'}>Publicações</Link>
            </li>
            <li className='btHover p-1 '>
              <Link href={'/pages/manifesto'}>Manifesto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
