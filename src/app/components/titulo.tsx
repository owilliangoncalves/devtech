export default function Titulo({ ...props }) {
  return (
    <section>
      <div className='containerResponsive '>
        <h1 className='titulo'>{props.titulo}</h1>
      </div>
    </section>
  );
}
