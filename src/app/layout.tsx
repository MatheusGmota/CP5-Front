import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";

export const metadata: Metadata = {
  title: "Worlds in Collision",
  description: "Explorando as Ideias de Immanuel Velikovsky com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
      </body>
    </html>
  );
}
