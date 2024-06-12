export default function Disclaimer() {
  return (
    <section className='container '>
      <div>
        <h1 className='titulo uppercase'>disclaimer</h1>
      </div>
      <div className='text-muted text-wrap lg:py-3 text-justify text-sm bg-card'>
        <h2>Olá, seja bem vindo(a) ao Devs Experts</h2>
        <p>
          Feito por estudantes de Engenharia de Software para estudantes de
          Engenharia de Software. Nosso objetivo aqui é tentar trazer uma
          abordagem alternativa para alguns assuntos para quem sabe fazer com
          que você entenda aquela matéria que esta difícil de entender
          <s> talvez porque conceitos básicos tenha passado em branco</s>. 🙃
        </p>
        <p className='text-important'>
          Vale lembrar que qualquer post aqui jamais substituirá qualquer aula
          que seu professor (a) tenha ministrado
        </p>
      </div>
    </section>
  );
}
