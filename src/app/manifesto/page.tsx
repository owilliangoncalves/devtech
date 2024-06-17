import Paragraph from '@/app/components/paragraph';
import Titulo from '@/app/components/titulo';
import Posts from '@/app/components/posts';
import Image from 'next/image';
import Learning from '/public/static/img/onlineLearning.svg';
import Road from '/public/static/img/road.svg';
import StorySet from '../components/storyset';

export default function PageManifesto() {
  return (
    <>
      <div className='containerResponsive'>
        <Titulo titulo='Manifesto DEV EXP' />
        <Posts tituloPosts='Nosso manifesto' />
      </div>
      <div className='bg-card rounded-sm shadow-md'>
        <div className='containerResponsive'>
          <div className=' lg:grid grid-cols-2 gap-x-10 items-center justify-items-center'>
            <Paragraph
              texto='Em um mundo cada vez mais digital, onde a tecnologia desempenha um papel
          central em nossas vidas, acreditamos que o conhecimento em programação
          e áreas afins deve ser acessível a todos. Não somos uma escola de
          programação e não estamos aqui para vender cursos, queremos
          transformar a forma como o conhecimento é transmitido e recebido,
          tornando-o mais inclusivo, acessível e livre. Por isso, nos propomos a abordar os mesmos tópicos que você deverá
          encontrar na faculdade de tecnologia, mas de uma maneira diferente. O
          que abordamos aqui nunca deverá substituir uma aula que você teve na
          faculdade, deve ser para lhe auxiliar a entender um tema que foi
          introduzido servindo como um auxilio. Sim, incentivamos a formação em
          nível superior em Tecnologia, embora o mercado de trabalho para
          tecnologia não se restrinja a profissionais com ensino superior,
          acreditamos que o ambiente universitário está além de aulas
          acadêmicas, ele tem o papel do promover conexões que podem gerar uma
          boa ideia, além do papel na formação social do cidadão.'
            />
            <div className='flex flex-col '>
              <Image
                className=' w-auto md:h-40 lg:h-96'
                src={Learning}
                alt='Um homem tendo aula pela internet com uma mulher.'
                height={300}
                quality={100}
              />
              <StorySet />
            </div>
          </div>
          <div className=' gap-x-10 gap-y-10 items-center justify-items-center'>
            <Paragraph
              texto='Nosso compromisso é com a didática inclusiva. Buscamos incessantemente
        aperfeiçoar nossas metodologias de ensino para que o aprendizado seja
        acessível e eficaz para o maior número de pessoas possível. Estamos
        buscando ilustrações e recursos visuais que abrangem uma diversidade
        maior de público, respeitando e celebrando as diferentes formas de
        aprender. Pra DEV EXP, ser diferente é normal. Se você possui habilidades com ilustração ou acredita ter uma boa didática
        e deseja contribuir para essa missão, convidamos você a se juntar a nós.
        Sua arte pode ser a ponte que conecta muitos ao conhecimento, tornando
        os conceitos mais claros e o aprendizado mais agradável e eficaz.'
            />
          </div>
          <Paragraph
            texto='O conhecimento não deve ser guardado, se te ajudamos de alguma forma compartilhe. Acreditamos que o conhecimento deva ser livre e
        disseminado, permitindo que todos tenham a oportunidade de crescer e se
        desenvolver. Acreditamos que, ao democratizar o acesso ao conhecimento,
        estamos contribuindo para um mundo mais justo e equitativo. Apoiamos a técnica de estudo desenvolvida por Richard Feynman, que se baseia em
        explicar os conceitos de forma simples e clara, como se estivesse
        ensinando para alguém que não tem conhecimento prévio no assunto. Essa
        abordagem não apenas facilita a compreensão, mas também solidifica o
        conhecimento e promove uma aprendizagem mais profunda e significativa.'
          />

          <Paragraph texto='Junte-se a nós nessa missão e vamos, juntos, democratizar o conhecimento. Juntos,podemos fazer a diferença.' />
        </div>
      </div>
    </>
  );
}
