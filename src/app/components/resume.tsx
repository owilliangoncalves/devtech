'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ResumeProps {
  tituloCard: string;
  path: string;
  className?: string;
}

const Resume: React.FC<ResumeProps> = ({
  tituloCard,
  path,
  className,
  ...props
}) => {
  const router = useRouter();
  return (
    <>
      <section className=' shadow-md  flex flex-col rounded-md px-4 py-2 justify-items-center transform hover:scale-105 duration-200 '>
        <Link href={path} onClick={() => console.log('oi')}>
          <h2 className='text-link font-base '>{tituloCard.toUpperCase()}</h2>
          <p
            className={`no-wrap mt-1 font-light ${className || ''}`}
            {...props}
          >
            Clique e veja mais conteúdo sobre {tituloCard}.
          </p>
        </Link>
      </section>
    </>
  );
};

export default Resume;
