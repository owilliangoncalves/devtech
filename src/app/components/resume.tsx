import React from 'react';
import Link from 'next/link';

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
  return (
    <>
      <section className=' hover:bg-card flex flex-col rounded-md px-4 py-2 justify-items-center'>
        <Link href={path}>
          <h1 className='text-link'>{tituloCard.toUpperCase()}</h1>
          <p className={`no-wrap mt-1 ${className || ''}`} {...props}>
            <span className=''>Clique</span> e veja mais conteúdo sobre{' '}
            {tituloCard}.
          </p>
        </Link>
      </section>
    </>
  );
};

export default Resume;
