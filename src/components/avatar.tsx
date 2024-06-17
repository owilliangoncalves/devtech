import Image from 'next/image';
import AvatarIMG from '/public/static/img/avatar.jpeg';

export default function Avatar() {
  return (
    <>
      <div className='flex items-center gap-4'>
        <Image
          src={AvatarIMG}
          className='w-10 h-10 rounded-full object-contain'
          alt='Imagem de perfil de Willian Gonçalves'
        />
        <div className='font-medium dark:text-white'>
          <div>Willian Gonçalves</div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            Joined in August 2014
          </div>
        </div>
      </div>
    </>
  );
}
