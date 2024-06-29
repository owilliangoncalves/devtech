'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '/public/static/img/dev-logo.svg';

function GetTitles(): string[] {
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    const elements = document.getElementsByClassName('tituloCard');
    const titlesArray: string[] = [];

    for (let i = 0; i < elements.length; i++) {
      titlesArray.push(elements[i].innerHTML);
    }

    setTitles(titlesArray);
  }, []);

  return titles;
}

function SideNav() {
  const titlesList = GetTitles();

  return (
    <div className='hidden fixed top-0 pt-16 h-screen w-60 lg:block col-start-1 px-4 py-2 bg-card overflow-scroll justify-center'>
      <div className='hidden md:flex md:items-center justify-center justify-items-center md:h-7 w-36 mb-2'>
        <Image
          className=''
          src={Logo}
          alt='logo Devs Experts'
          height={30}
          quality={100}
        />
        <h1 className='font-light uppercase text-sm ml-2 text-curious'>Exp</h1>
      </div>
      <div>
        {titlesList.map((title, index) => (
          <a key={index} href={`#${title}`} className='buttonSideNav'>
            {title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
