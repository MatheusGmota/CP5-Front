import Image from "next/image";

export default function Ideias() {
    return (
      <main className="flex justify-center content-center h-screen p-20">
        <section>

          <h2 className="text-center text-2xl">
              Principais Ideias do Livro
          </h2>

          <article className="flex justify-between items-center max-w-6xl gap-10 p-10">
            <p className="text-justify">Em seu livro Worlds in Collision, Immanuel Velikovsky nos convida a uma viagem desafiadora e extraordinária, sugerindo que a Terra e a humanidade testemunharam catástrofes cósmicas de escala inimaginável. A afirmação principal de Velikovsky é que o corpo terrestre ou, mais precisamente, sua civilização, teve encontros próximos e bastante dramáticos com outros corpos celestes, mormente Vênus e Marte, meramente no ritmo de poucos milhares de anos. Tais incidentes causaram terremotos, inundações e mudanças de temperatura que enfeitam o volume catastrófico da conhecimento humanidade.</p>
            <Image className="w-auto h-auto" src="http://images-assets.nasa.gov/image/PIA23791/PIA23791~orig.jpg" width={200} height={200} alt="Imagem do Planeta Vênus"></Image>
          </article>

          <article className="flex justify-between items-center max-w-6xl gap-10 p-10">
            <Image className="w-auto h-auto" src="http://images-assets.nasa.gov/image/PIA01324/PIA01324~orig.jpg" width={200} height={200} alt="Imagem do Planeta Júpiter"></Image>
            <p className="text-justify">Numa de suas teses mais cativantes, Velikovsky pressupõe que Vênus, que hoje nos parece um planeta calmo no globo, seria um cometa criado por Júpiter, que vagou para o sistema e se aproximou da Terra com a devida periculosidade, colocando o planeta abaixo do pânico antes de acalmar em a órbita com a qual estamos perfeitamente familiarizados hoje. Mas de dia para noite, há uns quatro ou cinco milênios, todos os eventos acima mencionados deram a imprensão, e as fontes anteriores são um sutil lembrete prático de que ninguém noções exatamente quanto em tempo presente. A história de Velikovsky é diretamente relacionada com a descrição dos eventos que antigo em textos sagrados, lendas e mitos de diametralmente nações e tradições. Na verdade, a Estudo, ou seja, a Estudo sideral como saber, dever-se-ia escassamente adivinhar tal história como um delírio da imaginação, tesouro Velikovsky.</p>
          </article>

          <article className="flex justify-between items-center max-w-6xl gap-10 p-10">
            <p className="text-justify">Ele insiste em que história e abstraia podem surgir se o profano ensinar história também está negando aos nossos antepassados qualquer lógica e subconsciência. Ainda que suas missões não façam qualquer sentido para a maioria dos cientistas e sejam permanentemente rejeitadas por eles, Velikovsky desafia a retratar o cosmos e nossa hestória com uma novidade insuspeita de mistério e curiosidade.</p>
            <Image className="w-auto h-auto" src="https://images-assets.nasa.gov/image/PIA00232/PIA00232~orig.jpg" width={200} height={200} alt="Imagem do Planeta Terra"></Image>
          </article>

        </section>
      </main>
    )
  }