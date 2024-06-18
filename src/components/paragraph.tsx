interface ParagraphProps {
  texto: string;
  nameRef?: string;
  className?: string;
}
import React from 'react';

export default function Paragraph({
  texto,
  nameRef,
  className,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={`pt-4 leading-loose font-light ${className || ''}`}
      {...props}
    >
      {texto}
    </p>
  );
}
