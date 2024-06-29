'use client';
interface AvatarProps {
  author: string;
  date: string;
}
interface ImageLoaderProps {
  src: string;
  width: string;
  quality: string;
}

import Image from 'next/image';
const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://avatars.githubusercontent.com/${src}?w=${width}&q=${
    quality || 100
  }`;
};

export default function Avatar({ author, date }: AvatarProps) {
  return (
    <>
      <div className='flex items-center gap-4'>
        <Image
          loader={imageLoader}
          src={'u/118922633?v=4'}
          className='w-10 h-10 rounded-full object-contain'
          alt={`Imagem de perfil de ${author}`}
          width={'32'}
          height={'32'}
        />
        <div className='font-medium text-curious-blue-950'>
          <div>{author}</div>
          <div className='text-sm text-muted'>{date}</div>
        </div>
      </div>
    </>
  );
}
