import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IdeaForge - Transforme ideias em projetos executáveis",
  description: "Uma ferramenta para transformar suas ideias simples em planos estruturados de projetos, prontos para serem executados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
