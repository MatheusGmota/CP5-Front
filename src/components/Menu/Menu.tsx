import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex justify-center items-center w-full">
        <ul className="flex justify-between items-center w-1/2">
            <li><Link className="text-white font-semibold hover:underline" href="/" >Home</Link></li>
            <li><Link className="text-white font-semibold hover:underline" href="/introducao" >Introdução</Link></li>
            <li><Link className="text-white font-semibold hover:underline" href="/ideias" >Principais Ideias</Link></li>
            <li><Link className="text-white font-semibold hover:underline" href="/calculo" >Calculo de Velikovsky</Link></li>
            <li><Link className="text-white font-semibold hover:underline" href="/conclusao" >Conclusão</Link></li>
        </ul>
    </nav>
  )
}
