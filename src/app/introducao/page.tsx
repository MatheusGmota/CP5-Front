import Image from "next/image";

export default function Introducao() {
    return (
      <main className="flex justify-center content-center h-screen p-20">
        <section>

          <h2 className="text-center text-2xl">              
            Introdução do Livro
          </h2>

          <article className="flex justify-between items-center max-w-6xl gap-10 p-10">
            <p className="text-justify">
              Worlds in Collision, escrito por Immanuel Velikovsky em 1950, é uma obra controversa que propõe que eventos cataclísmicos no passado da Terra foram causados por interações com outros corpos celestes, especialmente Vênus e Marte. Velikovsky sugere que, em épocas antigas, Vênus foi ejetado como um cometa do planeta Júpiter e teve uma trajetória que a aproximou da Terra, causando uma série de eventos catastrofais como terremotos, inundações e mudanças climáticas extremas, que seriam responsáveis por relatos presentes em diversas mitologias e textos religiosos ao redor do mundo.
              </p>
            <Image src="http://images-assets.nasa.gov/image/PIA01544/PIA01544~orig.jpg" alt="Imagem do Planeta Vênus" width={350} height={150}/>
          </article>
        </section>
      </main>
    )
  }