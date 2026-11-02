export default function Header() {
  return (
    <header className="w-full py-8 px-4 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          IdeaForge
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Transforme ideias em projetos executáveis
        </p>
      </div>
    </header>
  );
}
