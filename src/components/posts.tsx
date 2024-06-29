interface PostsProps {
  className?: string;
  id?: string;
  tituloPosts: string;
}
import React from 'react';

export default function Posts({
  className,
  id,
  tituloPosts,
  ...props
}: PostsProps) {
  return (
    <div id={id} className={` text-md ${className || ''}`} {...props}>
      <h2 className={` tituloCard  ${className || ''}`} {...props}>
        {tituloPosts}
      </h2>
    </div>
  );
}
