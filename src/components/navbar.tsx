import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/static/img/dev-logo.svg';

export default function NavBar() {
  return (
    <header className='containerResponsive font-light'>
      <nav className='flex items-center '>
        <Link href={'/'}>
          <Image src={Logo} alt='Logo Devs Experts' height={45} width={45} />
        </Link>
        <p className='ml-2 text-important '>EXP</p>

        <div className=' hidden md:flex justify-end w-full'>
          <ul className='flex gap-3 text-important   '>
            <li className='buttonCustom '>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='buttonCustom '>
              <Link href={'/posts'}>Posts</Link>
            </li>
            <li className='buttonCustom'>
              <Link href={'/manifesto'}>Manifesto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
