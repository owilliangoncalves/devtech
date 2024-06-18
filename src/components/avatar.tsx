interface AvatarProps {
  imagePath: string;
  author: string;
  date: string;
}

import Image from 'next/image';

export default function Avatar({ imagePath, author, date }: AvatarProps) {
  return (
    <>
      <div className='flex items-center gap-4'>
        <Image
          src={imagePath}
          className='w-10 h-10 rounded-full object-contain'
          alt='Imagem de perfil de '
        />
        <div className='font-medium dark:text-white'>
          <div>{author}</div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>{date}</div>
        </div>
      </div>
    </>
  );
}
