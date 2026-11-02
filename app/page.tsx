'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import IdeaInput from '@/components/IdeaInput';
import ProjectResult from '@/components/ProjectResult';
import { generateProject } from '@/lib/projectGenerator';
import { ProjectPlan } from '@/lib/types';

export default function Home() {
  const [project, setProject] = useState<ProjectPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (idea: string) => {
    setIsLoading(true);

    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 1200));

    const generatedProject = generateProject(idea);
    setProject(generatedProject);
    setIsLoading(false);
  };

  const handleGenerateNew = () => {
    setProject(null);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-12">
        {!project ? (
          <IdeaInput onGenerate={handleGenerate} isLoading={isLoading} />
        ) : (
          <ProjectResult project={project} onGenerateNew={handleGenerateNew} />
        )}
      </div>

      <footer className="w-full py-6 px-4 border-t border-[var(--card-border)] text-center text-sm text-gray-500">
        <p>IdeaForge - Desenvolvido com Next.js, TypeScript e Tailwind CSS</p>
      </footer>
    </main>
  );
}
