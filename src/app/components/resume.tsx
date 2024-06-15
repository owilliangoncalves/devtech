import Link from 'next/link';

export default function Resume({ ...props }) {
  const tituloCard = props.tituloCard;
  return (
    <>
      <section className='hover:bg-hover flex flex-col rounded-md px-4 py-2 justify-items-center'>
        <Link href={props.path}>
          <h1>{tituloCard.toUpperCase()}</h1>
          <p className='no-wrap mt-1'>
            Clique e veja mais conteúdo sobre {props.tituloCard}.
          </p>
        </Link>
      </section>
    </>
  );
}
