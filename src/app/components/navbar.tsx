import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/static/img/dev-logo.svg';

export default function NavBar() {
  return (
    <header className=''>
      <nav className='flex  items-center '>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo Devs Experts' height={45} width={45} />
        </Link>
        <p className='ml-2 text-important '>EXPERT</p>

        <div className=' flex justify-end'>
          <ul className='flex gap-3 text-right text-important'>
            <li className='ml-3 '>
              <Link href={'/'}>Eng. Software</Link>
            </li>
            <li>
              <Link href={'/manifesto'}>Manifesto</Link>
            </li>
            <li>
              <Link href={'/nao-somos'}>Quem não somos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
