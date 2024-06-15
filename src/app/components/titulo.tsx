export default function Titulo({ ...props }) {
  return (
    <section>
      <div>
        <h1 className='titulo col-span-2'>{props.titulo}</h1>
      </div>
    </section>
  );
}
