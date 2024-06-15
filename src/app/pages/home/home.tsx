import Paragraph from '@/app/components/paragraph';
import Posts from '@/app/components/posts';
import Titulo from '@/app/components/titulo';
export default function Home() {
  return (
    <div className='containerResponsive'>
      <Titulo titulo='Disclaimer' />
      <Posts tituloPosts='Olá! Seja bem vindo(a) ao DEV EXP 👋🏽' />

      <Paragraph
        primeiraPalavra='Feito'
        texto='por estudantes de Engenharia de
        Software para estudantes de Engenharia de Software. Nosso objetivo é
        apoiar e enriquecer a jornada acadêmica de nossos colegas, oferecer uma
        perspectiva alternativa sobre diversos temas da Engenharia de Software,
        ajudando a clarificar conceitos que, por vezes, podem parecer
        complicados ou terem sido pouco compreendidos nas aulas. 🙃'
      />
      <Paragraph
        primeiraPalavra='Acreditamos'
        texto='que o aprendizado colaborativo
        é uma ferramenta poderosa. Por isso, buscamos criar um espaço onde
        possamos compartilhar conhecimentos, dicas e estratégias de estudo que
        podem facilitar a compreensão de matérias complexas. Queremos ser aquele
        apoio extra que pode fazer toda a diferença na sua trajetória acadêmica,
        ajudando a solidificar os fundamentos e a desenvolver um entendimento
        mais profundo dos conteúdos abordados em sala de aula.'
      />
      <Paragraph
        primeiraPalavra='É'
        texto='importante ressaltar que os posts e
        materiais que disponibilizamos aqui são complementares e não substituem
        de forma alguma as aulas ministradas por seus professores(as). Nossa
        intenção é somar ao aprendizado, oferecendo recursos adicionais que
        possam enriquecer seu estudo e contribuir para o seu sucesso acadêmico.'
      />
      <Paragraph
        primeiraPalavra='Todo'
        texto='conteúdo de apoio que encontrar, como
        animação, aqui foi retirado da internet e possuem isenção de Direitos
        Autorais. Peço desculpa por falta de ilustrações que tragam mais
        diversidade e representatividade, não consegui encontra-las de forma
        gratuita na internet. Caso você saiba onde encontrar ou tenha talento
        para ilustração aguardo seu contato. As que utilizo aqui são baixadas em
        .svg e o máximo que sei fazer é alterar as cores no Figma.'
      />

      <Paragraph
        primeiraPalavra='Se'
        texto='o conteúdo de ajudou de alguma forma,
        compartilhe com seus colegas, eles podem estar tendo a mesma dificuldade
        que você. 😊'
      />
    </div>
  );
}
