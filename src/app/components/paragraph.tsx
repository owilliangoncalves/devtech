import React from 'react';
interface ParagraphProps {
  texto: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  texto,
  className,
  ...props
}) => {
  return (
    <p
      className={`pt-4 leading-loose font-light ${className || ''}`}
      {...props}
    >
      {texto}
    </p>
  );
};
export default Paragraph;
