import Image from "next/image";

export default function Introducao() {
    return (
      <main>
        <h2>
            Introdução do Livro
        </h2>
        <p>
            Worlds in Collision, escrito por Immanuel Velikovsky em 1950, é uma obra controversa que propõe que eventos cataclísmicos no passado da Terra foram causados por interações com outros corpos celestes, especialmente Vênus e Marte. Velikovsky sugere que, em épocas antigas, Vênus foi ejetado como um cometa do planeta Júpiter e teve uma trajetória que a aproximou da Terra, causando uma série de eventos catastrofais como terremotos, inundações e mudanças climáticas extremas, que seriam responsáveis por relatos presentes em diversas mitologias e textos religiosos ao redor do mundo.
        </p>
        <Image src={} alt="Imagem Ilustrativa da Pagina de Introdução do Livro" width={200} height={50}/>
      </main>
    )
  }