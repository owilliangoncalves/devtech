export default function Paragraph({ ...props }) {
  return (
    <p className='first:pt-2 leading-loose'>
      {' '}
      <span className='mp'>{props.primeiraPalavra}</span> {props.texto}
    </p>
  );
}
