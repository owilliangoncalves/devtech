interface ParagraphReferenceProps {
  texto: string;
  nameRef?: string;
  link?: string;
  id?: string;
  className?: string;
}
import React from 'react';
import Link from 'next/link';

export default function ParagraphReference({
  id,
  texto,
  nameRef,
  link,
  className,
  ...props
}: ParagraphReferenceProps) {
  return (
    <p
      id={`${id}`}
      className={`pt-4 leading-loose font-light  ${className || ''}`}
      {...props}
    >
      {texto}{' '}
      <Link
        href={`${link}`}
        target='_blank'
        className=' text-muted hover:text-link text-sm'
      >
        {nameRef}
      </Link>
    </p>
  );
}
