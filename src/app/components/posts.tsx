export default function Posts({ ...props }) {
  return (
    <div className='containerResponsive text-md '>
      <h2 className='tituloCard '>{props.titulo}</h2>
    </div>
  );
}
