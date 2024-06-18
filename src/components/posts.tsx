interface PostsProps {
  className?: string;
  tituloPosts: string;
}
import React from 'react';

export default function Posts({
  className,
  tituloPosts,
  ...props
}: PostsProps) {
  return (
    <div className={` text-md ${className || ''}`} {...props}>
      <h2 className={` tituloCard  ${className || ''}`} {...props}>
        {tituloPosts}
      </h2>
    </div>
  );
}
