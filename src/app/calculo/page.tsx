import React from 'react'
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex justify-center content-center h-screen p-20 mt-10">
            <section>
                <h1 className='text-center text-2xl'>Cálculo Proposto</h1>
                <article className="flex justify-between items-center max-w-6xl gap-10 p-10">
                    <p className='text-2xl text-justify'>Um dos cálculos propróstos por Immanuel Velikovsky foi sobre os efeitos graitacionais F=(G.m1.m2)/r². Esse cálculo envolvia a trajetória de Vênus e suas interações com a Terra, o autor supos que o planeta teria passado próximo ao nosso planeta aproximadamente 1500 a.C.
                        A mudança da rotação da Terra foi um dos fatores que o autor utilizou para argumentar sobre o fato de que, as mudanças climáticas poderiam ter ocorrido devido essa tal mudança, um desses eventos foi o diluvio. Mas os calculos foram refutados, pois não foram levado em conta as leis de gravidade de Newton.
                    </p>
                    <Image src={'https://images-assets.nasa.gov/image/PIA01544/PIA01544~orig.jpg'} alt='Vênus' width={200} height={200} className="w-auto h-auto"/>
                    
                </article>
            </section>
        </main>
    )
}