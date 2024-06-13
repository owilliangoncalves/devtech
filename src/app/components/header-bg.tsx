import Image from 'next/image';
import Sharing from '/public/static/img/sharing.svg';

export default function HeaderBG() {
  return (
    <div>
      <Image
        src={Sharing}
        alt='Ilustração de pessoas compartilhando conhecimento pela internet'
        height={100}
        width={100}
      />
    </div>
  );
}
