import Link from 'next/link';

export default function EngSoftware() {
  return (
    <>
      <section className='container '>
        <h1 className='titulo py-16 '>Engenharia de Software</h1>
        <div className='md:grid md:grid-cols-3 gap-3'>
          <div className='bg-card'>
            <Link href={'/linguagens/java-script'}>
              <h1>JavaScript</h1>
              <p className='no-wrap'>
                Veja conteúdos relacionado a linguagem que é queridinha de quem
                está começando
              </p>
            </Link>
          </div>
          <div className='bg-card'>
            <Link href={'/linguagens/java-script'}>
              <h1>Ruby</h1>
              <p className='no-wrap'>
                Veja conteúdos relacionado a linguagem que é queridinha de quem
                está começando
              </p>
            </Link>
          </div>
          <div className='bg-card'>
            <Link href={'/linguagens/java-script'}>
              <h1>GoLang</h1>
              <p className='no-wrap'>
                Veja conteúdos relacionado a linguagem que é queridinha de quem
                está começando
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
