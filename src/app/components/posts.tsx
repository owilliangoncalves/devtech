import React from 'react';

interface PostsPros {
  className?: string;
  titulo: string;
}

const Posts: React.FC<PostsPros> = ({ className, titulo, ...props }) => {
  return (
    <div className={` text-md ${className || ''}`} {...props}>
      <h2 className={`titulo-card  ${className || ''}`} {...props}>
        {titulo}
      </h2>
    </div>
  );
};
export default Posts;
