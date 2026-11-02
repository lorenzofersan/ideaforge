'use client';

import { useState } from 'react';

interface IdeaInputProps {
  onGenerate: (idea: string) => void;
  isLoading: boolean;
}

const EXAMPLE_IDEAS = [
  'Um app para controlar gastos pessoais',
  'Uma plataforma de receitas culinárias',
  'Um gerenciador de tarefas minimalista',
  'Um site de portfólio para designers',
];

export default function IdeaInput({ onGenerate, isLoading }: IdeaInputProps) {
  const [idea, setIdea] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!idea.trim()) {
      setError('Por favor, insira uma ideia');
      return;
    }

    if (idea.trim().length < 10) {
      setError('Descreva sua ideia com mais detalhes (mínimo 10 caracteres)');
      return;
    }

    setError('');
    onGenerate(idea);
  };

  const handleExampleClick = (example: string) => {
    setIdea(example);
    setError('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          O que você está pensando em construir?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              value={idea}
              onChange={(e) => {
                setIdea(e.target.value);
                setError('');
              }}
              placeholder="Descreva sua ideia aqui..."
              className="w-full px-4 py-3 bg-[var(--card-background)] border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none transition-all duration-200"
              rows={4}
              disabled={isLoading}
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Gerando projeto...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Gerar projeto
              </>
            )}
          </button>
        </form>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-gray-400 text-center">
          Ou experimente uma dessas ideias:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {EXAMPLE_IDEAS.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              disabled={isLoading}
              className="px-4 py-2 bg-[var(--card-background)] border border-[var(--card-border)] rounded-full text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
