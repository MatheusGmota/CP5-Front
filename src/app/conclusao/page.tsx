import Image from "next/image";

export default function Conclusao() {
  return (
    <main className="flex justify-center content-center h-screen p-20">
      <section>

        <h2 className="text-center text-2xl">
          Conclusão Finais
        </h2>

        <article className="flex justify-between items-center max-w-6xl gap-10 p-10">
          <p className="text-justify">
            O livro foi amplamente criticado por cientistas e acadêmicos, pois desafia a física e a astronomia convencionais, além de carecer de evidências científicas sólidas. Apesar disso, Worlds in Collision gerou intenso debate e provocou questionamentos sobre a forma como a ciência tradicional aborda fenômenos históricos e cósmicos. A obra acabou se tornando um marco na literatura pseudocientífica, inspirando discussões sobre a interação entre mitologia, história e ciência.
          </p>
          <Image src="http://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001894/GSFC_20171208_Archive_e001894~orig.jpg" alt="Imagem Ilustrativa da Pagina de Conclusão do Livro" width={200} height={50}/>
        </article>

      </section>
    </main>
  )
}
