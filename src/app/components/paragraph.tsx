export default function Paragraph({ ...props }) {
  return (
    <div className='containerResponsive'>
      <p className='py-2'>
        {' '}
        <span className='mp'>{props.primeiraPalavra}</span> {props.texto}
      </p>
    </div>
  );
}
