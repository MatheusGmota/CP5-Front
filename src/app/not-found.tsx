import Image from 'next/image';

export default function NotFound() {
  return (
    <main className='flex justify-center content-center h-screen '>
      <section className='flex justify-center content-center flex-col items-center'>
        <Image src={"https://http.cat/404"} alt='Erro 404 - Página não encontrada' width={400} height={50}/>
        <h1 className='text-5xl p-3'>
            ERROR 404 - Not Found
        </h1>
        <button type='button' className='cursor-pointer bg-[#1da1f2] text-white text-2xl rounded w-48 h-12 m-4'>
          Voltar Home
        </button>
      </section>
        
    </main>
  )
}
