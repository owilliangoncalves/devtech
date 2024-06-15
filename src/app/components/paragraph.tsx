import React from 'react';
interface ParagraphProps {
  primeiraPalavra: string;
  texto: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  primeiraPalavra,
  texto,
  className,
  ...props
}) => {
  return (
    <p className={`first:pt-2 leading-loose ${className || ''}`} {...props}>
      {' '}
      <span className='mp'>{primeiraPalavra}</span> {texto}
    </p>
  );
};
export default Paragraph;
