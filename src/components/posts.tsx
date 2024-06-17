import React from 'react';

interface PostsProps {
  className?: string;
  tituloPosts: string;
}

const Posts: React.FC<PostsProps> = ({ className, tituloPosts, ...props }) => {
  return (
    <div className={` text-md ${className || ''}`} {...props}>
      <h2 className={` tituloCard  ${className || ''}`} {...props}>
        {tituloPosts}
      </h2>
    </div>
  );
};
export default Posts;
