export default function Disclaimer() {
  return (
    <section>
      <div className='container mx-auto '>
        <h1 className='titulo pb-3 uppercase'>disclaimer</h1>
      </div>
      <div className=' bg-card h-full'>
        <div className='cardContainer text-md'>
          <h2 className='tituloCard '>
            Olá! Seja bem vindo(a) ao Devs Experts 👋🏽{' '}
          </h2>
          <p>
            <span className='mp'>Feito</span> por estudantes de Engenharia de
            Software para estudantes de Engenharia de Software. Nosso objetivo é
            apoiar e enriquecer a jornada acadêmica de nossos colegas, oferecer
            uma perspectiva alternativa sobre diversos temas da Engenharia de
            Software, ajudando a clarificar conceitos que, por vezes, podem
            parecer complicados ou terem sido pouco compreendidos nas aulas. 🙃
          </p>
          <p>
            <span className='mp'>Acreditamos</span> que o aprendizado
            colaborativo é uma ferramenta poderosa. Por isso, buscamos criar um
            espaço onde possamos compartilhar conhecimentos, dicas e estratégias
            de estudo que podem facilitar a compreensão de matérias complexas.
            Queremos ser aquele apoio extra que pode fazer toda a diferença na
            sua trajetória acadêmica, ajudando a solidificar os fundamentos e a
            desenvolver um entendimento mais profundo dos conteúdos abordados em
            sala de aula.
          </p>
          <p>
            <span className='mp'>É</span> importante ressaltar que os posts e
            materiais que disponibilizamos aqui são complementares e não
            substituem de forma alguma as aulas ministradas por seus
            professores(as). Nossa intenção é somar ao aprendizado, oferecendo
            recursos adicionais que possam enriquecer seu estudo e contribuir
            para o seu sucesso acadêmico.
          </p>
          {/* <p className='text-important uppercase'>
            Vale lembrar que qualquer post aqui jamais substituirá qualquer aula
            que seu professor (a) tenha ministrado
          </p> */}
        </div>
      </div>
    </section>
  );
}
