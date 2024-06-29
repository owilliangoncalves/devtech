interface ParagraphReferenceProps {
  texto: string;
  nameRef?: string;
  link?: string;
  id?: string;
  className?: string;
}

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
      id={id}
      className={`pt-4 leading-loose font-light text-curious-blue-950 ${
        className || ''
      }`}
      {...props}
    >
      {texto}{' '}
      <Link
        href={`${link}`}
        target='_blank'
        className=' text-muted hover:text-curious-blue-600 text-sm'
      >
        {nameRef}
      </Link>
    </p>
  );
}
