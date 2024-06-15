import React from 'react';
interface TituloProps {
  titulo: string;
  className?: string;
}

const Titulo: React.FC<TituloProps> = ({ titulo, className, ...props }) => {
  return (
    <section>
      <div>
        <h1 className={`titulo ${className || ''}`} {...props}>
          {titulo}
        </h1>
      </div>
    </section>
  );
};

export default Titulo;
