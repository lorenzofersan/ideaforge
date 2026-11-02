export type Difficulty = 'Fácil' | 'Médio' | 'Difícil';

export interface ProjectPlan {
  name: string;
  problem: string;
  targetAudience: string;
  solution: string;
  features: string[];
  tasks: string[];
  difficulty: Difficulty;
}

export interface GenerateProjectInput {
  idea: string;
}
