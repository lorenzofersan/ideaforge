'use client';

import { ProjectPlan } from '@/lib/types';
import { useState } from 'react';

interface ProjectResultProps {
  project: ProjectPlan;
  onGenerateNew: () => void;
}

export default function ProjectResult({ project, onGenerateNew }: ProjectResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = formatProjectAsText(project);

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const formatProjectAsText = (project: ProjectPlan): string => {
    return `
📋 ${project.name}

❗ Problema
${project.problem}

👥 Público-alvo
${project.targetAudience}

💡 Solução
${project.solution}

✨ Funcionalidades Principais
${project.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

📝 Primeiras Tarefas
${project.tasks.map((t, i) => `${i + 1}. ${t}`).join('\n')}

⚡ Dificuldade: ${project.difficulty}
    `.trim();
  };

  const difficultyColors = {
    'Fácil': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Médio': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'Difícil': 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 animate-fade-in">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Seu Projeto</h2>
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-[var(--card-background)] border border-[var(--card-border)] rounded-lg hover:border-[var(--primary)] transition-all duration-200 flex items-center gap-2 text-sm"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copiado!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copiar
              </>
            )}
          </button>
          <button
            onClick={onGenerateNew}
            className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Nova ideia
          </button>
        </div>
      </div>

      {/* Project Name & Difficulty */}
      <div className="mb-6 p-6 bg-[var(--card-background)] border border-[var(--card-border)] rounded-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[project.difficulty]}`}>
            {project.difficulty}
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        {/* Problem */}
        <Card
          title="Problema"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
        >
          <p className="text-gray-300">{project.problem}</p>
        </Card>

        {/* Target Audience */}
        <Card
          title="Público-alvo"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        >
          <p className="text-gray-300">{project.targetAudience}</p>
        </Card>
      </div>

      {/* Solution - Full Width */}
      <div className="mb-6">
        <Card
          title="Solução"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
        >
          <p className="text-gray-300">{project.solution}</p>
        </Card>
      </div>

      {/* Features & Tasks */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Features */}
        <Card
          title="Funcionalidades Principais"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
        >
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-3 text-gray-300">
                <span className="text-[var(--primary)] font-bold flex-shrink-0">{index + 1}.</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Tasks */}
        <Card
          title="Primeiras Tarefas"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
        >
          <ul className="space-y-3">
            {project.tasks.map((task, index) => (
              <li key={index} className="flex gap-3 text-gray-300">
                <span className="text-[var(--accent)] font-bold flex-shrink-0">{index + 1}.</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Card({ title, icon, children }: CardProps) {
  return (
    <div className="p-6 bg-[var(--card-background)] border border-[var(--card-border)] rounded-lg hover:border-[var(--card-border)]/60 transition-all duration-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-[var(--primary)]">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}
