import Image from 'next/image';
import StorySet from '@/components/storyset';
import Titulo from '@/components/titulo';
import SideNav from '@/components/sidenav';
import Posts from '@/components/posts';
import ParagraphReference from '@/components/paragraphReference';
import Beginning from '/public/static/img/beginning.svg';
import Code from '@/components/code';
export default function Fundamentos() {
  return (
    <>
      <section className='containerResponsive'>
        <div className='justify-center w-full flex flex-col'>
          <Image
            src={Beginning}
            alt='Ilustração de um rapaz próximo ao objeto que lembra o símbolo do JavaScript'
            height={320}
            quality={100}
            className='w-auto md:h-96 '
          />
          <StorySet />
        </div>

        <Titulo titulo='Fundamentos' className='py-16' />

        <div className='lg:grid lg:grid-cols-4 gap-3'>
          <SideNav ids='' />
          <div className='col-span-3'>
            <div className=' '>
              <Posts tituloPosts='Variáveis' />
              <ParagraphReference
                id='Introdução'
                texto='Sabemos que atualmente (2024) não se necessita de ensino superior para se iniciar na área de programação, mas sempre incentivamos que você faça sim o curso. Semelhantemente acreditamos que não precisa ser necessariamente bom em matemática ou raciocínio lógico matemático para começar e que a medida com que você vai avançando nos desafios, acaba exercitando essas habilidades lógicas.'
              />
              <ParagraphReference texto='Já que a intenção aqui é compartilharmos nossa visão da Engenharia de Software e um pouco da visão de mundo, te convido a pensar em conhecimento como se fosse uma casa. Tem como começar a construção de uma casa pelo teto, depois colocar as paredes embaixo, fazer a fundação e depois a terraplanagem? Com o passar dos anos pode até ser que o ser humano até encontre um forma, mas concorda que não parece ser a forma mais otimizada com o que temos de tecnologia hoje?!' />
              <ParagraphReference texto='Seguindo essa linha de raciocínio é que queremos introduzir o que acreditamos ser fundamentos da programação. Nada muito profundo, só conceitos que ao nosso ver são o "ponta pé inicial" para o aprendizado em programação.' />
              <ParagraphReference
                id='Variáveis'
                texto='Se em algum momento você já ousou em estudar algum conteúdo de programação em algum momento você já se deparou - ou irá se deparar - com o termo "variável/variáveis", mas o que é uma variável? Pense em um armário com diversas gavetas, e que em cada gaveta você pode guardar alguma coisa - qualquer coisa -, imagine que em cada gaveta você quer guardar um tipo de talher e que na primeira gaveta você guardou "colher" e colou uma etiqueta no lado de fora da gaveta com a letra "a" (somente a letra "a"). É sério, tente imaginar! A matemática trabalha muito com abstrações e aqui esta uma boa forma de começar abstrair coisas.'
              />
              <ParagraphReference
                texto='Seguindo com a abstração, agora você sabe que toda vez que você precisar de uma colher deverá procurar uma gaveta que tem a letra "a", dentro dela deverá ter "colher". Agora troque o armário por um computador, as gavetas por espaços na memória do computador e colher pelo dado que você quer armazenar. Como as coisas que você quer guardar como pode ser qualquer coisa vamos chamar de variável (porque varia) e temos assim o conceito de variável. Logo, variável é um dado que é armazenado na memória do computador. '
                nameRef='MDN Mozilla'
                link={
                  'https://developer.mozilla.org/pt-BR/docs/Glossary/Variable'
                }
              />
              <ParagraphReference
                id=''
                texto='Hora do exemplo, vejamos um exemplo em JavaScript:'
              />

              <Code
                variable='var '
                nameVar='a '
                operator='= '
                value='"colher"'
                result='console.log(a) // "colher" '
              />
              <ParagraphReference
                id=''
                texto='A intenção, por enquanto, não é que você entenda detalhadamente cada trecho do código - esse dia vai chegar -, então, vou ler o código. Eu criei uma variável chamada "a" que recebe o valor (string) "colher", toda vez que eu quiser acessar aquele dado eu solicito ao computador que busque o espaço na memória que eu chamei de "a", abra a gaveta e mostre o que há la dentro e o computador retorna o valor "colher".'
              />
              <ParagraphReference
                id=''
                texto='Recapitulando e resumindo: variável é um dado que é armazenado na memória do computador. '
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
