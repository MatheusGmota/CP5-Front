import React from 'react'
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex justify-center content-center flex-col p-5">
                <h1 className='text-5xl p-3'>Cálculo Proposto</h1>
                <section className='grid grid-flow-col inline-block align-middle m-5'>
                <p className='text-2xl text-justify '>Um dos cálculos propróstos por Immanuel Velikovsky foi sobre os efeitos graitacionais F=(G.m1.m2)/r². Esse cálculo envolvia a trajetória de Vênus e suas interações com a Terra, o autor supos que o planeta teria passado próximo ao nosso planeta aproximadamente 1500 a.C.
                    A mudança da rotação da Terra foi um dos fatores que o autor utilizou para argumentar sobre o fato de que, as mudanças climáticas poderiam ter ocorrido devido essa tal mudança, um desses eventos foi o diluvio. Mas os calculos foram refutados, pois não foram levado em conta as leis de gravidade de Newton.
                </p>
                <p className='text-5xl p-3'>dnjkdnajksdnjkasndkjla</p>
                {/* <Image src={'images-assets.nasa.gov/image/PIA01544/PIA01544~orig.jpg'} alt='' width={300} height={50}/> */}
            </section>
        </main>
    )
}