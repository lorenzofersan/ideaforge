import { ProjectPlan, Difficulty } from './types';

/**
 * Generates a structured project plan from a user's idea
 */
export function generateProject(idea: string): ProjectPlan {
  const lowerIdea = idea.toLowerCase().trim();

  // Extract key concepts and context from the idea
  const keywords = extractKeywords(lowerIdea);

  // Generate project components based on the idea
  const name = generateProjectName(lowerIdea, keywords);
  const problem = generateProblem(lowerIdea, keywords);
  const targetAudience = generateTargetAudience(lowerIdea, keywords);
  const solution = generateSolution(lowerIdea, keywords);
  const features = generateFeatures(lowerIdea, keywords);
  const tasks = generateTasks(lowerIdea, keywords);
  const difficulty = estimateDifficulty(lowerIdea, keywords);

  return {
    name,
    problem,
    targetAudience,
    solution,
    features,
    tasks,
    difficulty,
  };
}

function extractKeywords(idea: string): Set<string> {
  const keywords = new Set<string>();

  // Technology keywords
  const techTerms = ['app', 'site', 'website', 'plataforma', 'platform', 'sistema', 'system', 'ferramenta', 'tool', 'api', 'dashboard', 'mobile', 'web'];
  techTerms.forEach(term => {
    if (idea.includes(term)) keywords.add(term);
  });

  // Domain keywords
  if (idea.match(/tarefa|task|todo|afazer/)) keywords.add('tasks');
  if (idea.match(/finança|financeiro|dinheiro|gasto|despesa|receita|finance|money|expense/)) keywords.add('finance');
  if (idea.match(/estudo|estudar|aprender|learn|educação|education/)) keywords.add('education');
  if (idea.match(/saúde|health|exercício|exercise|fitness/)) keywords.add('health');
  if (idea.match(/rede social|social|comunidade|community|chat|mensagem/)) keywords.add('social');
  if (idea.match(/ecommerce|loja|compra|venda|shop|store/)) keywords.add('ecommerce');
  if (idea.match(/jogo|game|quiz/)) keywords.add('game');
  if (idea.match(/receita|culinária|comida|food|recipe/)) keywords.add('food');
  if (idea.match(/música|music|playlist/)) keywords.add('music');
  if (idea.match(/produtividade|productivity|organiz/)) keywords.add('productivity');
  if (idea.match(/blog|conteúdo|content|artigo|article/)) keywords.add('content');
  if (idea.match(/portfólio|portfolio|cv|currículo/)) keywords.add('portfolio');

  return keywords;
}

function generateProjectName(idea: string, keywords: Set<string>): string {
  // Define name patterns based on keywords
  const namePatterns: { [key: string]: string[] } = {
    tasks: ['TaskMaster', 'DoItNow', 'TaskFlow', 'CheckMate', 'TodoPro'],
    finance: ['MoneyTrack', 'FinanceFlow', 'BudgetWise', 'ExpenseHub', 'CashControl'],
    education: ['LearnHub', 'StudyPal', 'KnowledgeBase', 'EduTrack', 'SkillForge'],
    health: ['HealthTrack', 'FitLife', 'WellnessHub', 'ActiveMe', 'VitalityApp'],
    social: ['ConnectHub', 'SocialSphere', 'CommunityNet', 'TalkFlow', 'CircleApp'],
    ecommerce: ['ShopFlow', 'MarketPlace', 'QuickBuy', 'StoreFront', 'CartMaster'],
    game: ['GameQuest', 'PlayHub', 'QuizMaster', 'FunZone', 'ChallengeApp'],
    food: ['RecipeBox', 'CookBook', 'FoodieHub', 'MealPlanner', 'ChefMate'],
    music: ['SoundWave', 'PlaylistPro', 'MusicBox', 'TuneHub', 'BeatFlow'],
    productivity: ['FlowState', 'ProductivePro', 'FocusHub', 'WorkFlow', 'EfficiencyApp'],
    content: ['ContentHub', 'BlogForge', 'WriteFlow', 'StoryBox', 'PublishPro'],
    portfolio: ['ShowCase', 'PortfolioPro', 'ProfileHub', 'TalentBox', 'MyWork'],
  };

  // Check for keyword matches
  for (const [key, names] of Object.entries(namePatterns)) {
    if (keywords.has(key)) {
      return names[Math.floor(Math.random() * names.length)];
    }
  }

  // Default names if no specific keyword matched
  const defaultNames = ['IdeaFlow', 'ProjectHub', 'BuildIt', 'LaunchPad', 'MakerSpace', 'CreativeHub'];
  return defaultNames[Math.floor(Math.random() * defaultNames.length)];
}

function generateProblem(idea: string, keywords: Set<string>): string {
  const problemTemplates: { [key: string]: string } = {
    tasks: 'Pessoas têm dificuldade em organizar e acompanhar suas tarefas diárias, resultando em baixa produtividade e prazos perdidos.',
    finance: 'Muitas pessoas não têm controle adequado de suas finanças pessoais, levando a gastos desnecessários e dificuldades em atingir objetivos financeiros.',
    education: 'Estudantes enfrentam desafios para organizar conteúdos de estudo e acompanhar seu progresso de aprendizagem de forma eficiente.',
    health: 'Indivíduos têm dificuldade em manter hábitos saudáveis e acompanhar consistentemente seus objetivos de bem-estar.',
    social: 'Pessoas buscam formas mais autênticas e focadas de se conectar com comunidades que compartilham seus interesses.',
    ecommerce: 'Consumidores precisam de uma experiência de compra mais simplificada e personalizada para encontrar produtos relevantes.',
    game: 'Usuários procuram experiências interativas e envolventes para entretenimento e desenvolvimento de habilidades.',
    food: 'Cozinheiros caseiros precisam de uma forma organizada de descobrir, salvar e planejar receitas para suas refeições.',
    music: 'Amantes de música desejam ferramentas melhores para organizar, descobrir e compartilhar suas músicas favoritas.',
    productivity: 'Profissionais lutam para manter o foco e gerenciar seu tempo de forma eficaz em meio a múltiplas distrações.',
    content: 'Criadores de conteúdo precisam de plataformas mais simples e eficientes para publicar e gerenciar seus trabalhos.',
    portfolio: 'Profissionais criativos têm dificuldade em apresentar seus trabalhos de forma atraente e organizada para potenciais clientes.',
  };

  for (const [key, problem] of Object.entries(problemTemplates)) {
    if (keywords.has(key)) return problem;
  }

  return 'Usuários enfrentam desafios para realizar uma tarefa específica de forma eficiente, necessitando de uma solução digital que simplifique o processo.';
}

function generateTargetAudience(idea: string, keywords: Set<string>): string {
  const audienceTemplates: { [key: string]: string } = {
    tasks: 'Profissionais, estudantes e qualquer pessoa que busca maior organização e produtividade no dia a dia.',
    finance: 'Jovens adultos e famílias que desejam ter maior controle sobre suas finanças pessoais.',
    education: 'Estudantes de todas as idades, autodidatas e profissionais em formação contínua.',
    health: 'Pessoas interessadas em melhorar sua saúde e bem-estar através de hábitos consistentes.',
    social: 'Usuários que valorizam conexões significativas e comunidades baseadas em interesses comuns.',
    ecommerce: 'Consumidores online que buscam praticidade e personalização em suas compras.',
    game: 'Jogadores casuais e entusiastas que buscam entretenimento interativo e desafios.',
    food: 'Entusiastas da culinária, desde iniciantes até cozinheiros experientes.',
    music: 'Ouvintes de música de todas as idades que desejam uma experiência musical mais organizada.',
    productivity: 'Profissionais de conhecimento, freelancers e empreendedores que buscam otimizar seu tempo.',
    content: 'Escritores, blogueiros, jornalistas e criadores de conteúdo digital.',
    portfolio: 'Designers, fotógrafos, desenvolvedores e outros profissionais criativos.',
  };

  for (const [key, audience] of Object.entries(audienceTemplates)) {
    if (keywords.has(key)) return audience;
  }

  return 'Usuários gerais que buscam uma solução prática para um problema específico do cotidiano.';
}

function generateSolution(idea: string, keywords: Set<string>): string {
  const solutionTemplates: { [key: string]: string } = {
    tasks: 'Uma aplicação intuitiva que permite criar, organizar e acompanhar tarefas com facilidade, oferecendo visualizações claras de progresso e prioridades.',
    finance: 'Uma plataforma para registrar receitas e despesas, categorizar gastos, visualizar relatórios e estabelecer metas financeiras de forma simples.',
    education: 'Um sistema que ajuda a organizar materiais de estudo, criar cronogramas de aprendizagem e acompanhar o progresso em diferentes disciplinas.',
    health: 'Uma ferramenta para monitorar hábitos saudáveis, registrar atividades, definir metas de bem-estar e visualizar progresso ao longo do tempo.',
    social: 'Uma plataforma que conecta pessoas com interesses similares, facilitando conversas significativas e a formação de comunidades engajadas.',
    ecommerce: 'Uma interface de compras que oferece navegação simplificada, recomendações personalizadas e processo de checkout otimizado.',
    game: 'Uma experiência interativa e envolvente que combina entretenimento com desafios progressivos e sistema de recompensas.',
    food: 'Um catálogo digital de receitas com funcionalidades de busca, organização por categorias e planejamento de refeições.',
    music: 'Uma ferramenta para criar e gerenciar playlists, descobrir novas músicas e organizar bibliotecas musicais de forma eficiente.',
    productivity: 'Um sistema que combina técnicas de gerenciamento de tempo com ferramentas para minimizar distrações e maximizar foco.',
    content: 'Uma plataforma simplificada para criar, editar, organizar e publicar conteúdo com interface limpa e intuitiva.',
    portfolio: 'Um site elegante e profissional para exibir trabalhos, projetos e habilidades de forma visualmente atraente.',
  };

  for (const [key, solution] of Object.entries(solutionTemplates)) {
    if (keywords.has(key)) return solution;
  }

  return 'Uma aplicação web que fornece uma interface intuitiva e funcionalidades essenciais para resolver o problema identificado de forma eficiente.';
}

function generateFeatures(idea: string, keywords: Set<string>): string[] {
  const featureTemplates: { [key: string]: string[] } = {
    tasks: [
      'Criação e edição rápida de tarefas com título, descrição e prioridade',
      'Organização por categorias ou projetos com visualização em lista ou kanban',
      'Sistema de notificações e lembretes para prazos importantes'
    ],
    finance: [
      'Registro de transações com categorização automática e tags personalizadas',
      'Dashboards visuais com gráficos de gastos por categoria e período',
      'Definição de orçamentos mensais com alertas de limite'
    ],
    education: [
      'Criação de cronogramas de estudo personalizados por disciplina',
      'Sistema de flashcards e materiais de revisão organizados',
      'Acompanhamento de progresso com estatísticas de tempo estudado'
    ],
    health: [
      'Registro diário de atividades físicas e hábitos saudáveis',
      'Gráficos de progresso ao longo do tempo com métricas personalizadas',
      'Sistema de metas com lembretes e motivação diária'
    ],
    social: [
      'Perfis de usuário com interesses e bio personalizável',
      'Criação de grupos ou comunidades temáticas',
      'Sistema de mensagens diretas e discussões em grupo'
    ],
    ecommerce: [
      'Catálogo de produtos com busca e filtros avançados',
      'Carrinho de compras com cálculo de frete e formas de pagamento',
      'Sistema de avaliações e recomendações personalizadas'
    ],
    game: [
      'Sistema de níveis ou fases progressivas com dificuldade crescente',
      'Pontuação e ranking para competição amigável',
      'Conquistas e recompensas para engajamento contínuo'
    ],
    food: [
      'Biblioteca de receitas com busca por ingredientes e categoria',
      'Favoritos e coleções personalizadas de receitas',
      'Planejador de refeições semanal com lista de compras automática'
    ],
    music: [
      'Criação e edição de playlists personalizadas',
      'Sistema de recomendações baseado em preferências',
      'Organização por gênero, artista e mood'
    ],
    productivity: [
      'Timer Pomodoro integrado com intervalos personalizáveis',
      'Bloqueador de distrações e modo foco',
      'Relatórios de produtividade com insights acionáveis'
    ],
    content: [
      'Editor de texto rico com formatação e preview em tempo real',
      'Organização de conteúdos por tags e categorias',
      'Sistema de rascunhos e versionamento de publicações'
    ],
    portfolio: [
      'Galeria de projetos com imagens e descrições detalhadas',
      'Seção sobre mim com biografia e habilidades',
      'Formulário de contato integrado para oportunidades'
    ],
  };

  for (const [key, features] of Object.entries(featureTemplates)) {
    if (keywords.has(key)) return features;
  }

  return [
    'Interface intuitiva e responsiva para acesso em qualquer dispositivo',
    'Sistema de cadastro e personalização de preferências do usuário',
    'Funcionalidade principal otimizada para resolver o problema identificado'
  ];
}

function generateTasks(idea: string, keywords: Set<string>): string[] {
  const taskTemplates: { [key: string]: string[] } = {
    tasks: [
      'Criar a estrutura de dados para tarefas (título, descrição, status, prioridade, data)',
      'Implementar interface de listagem com filtros por status e prioridade',
      'Desenvolver formulário de criação e edição de tarefas com validação'
    ],
    finance: [
      'Estruturar modelo de dados para transações e categorias',
      'Criar dashboard inicial com resumo de receitas e despesas do mês',
      'Implementar formulário de registro de transação com seleção de categoria'
    ],
    education: [
      'Definir estrutura de dados para disciplinas e materiais de estudo',
      'Criar interface de cronograma semanal editável',
      'Implementar sistema de registro de sessões de estudo'
    ],
    health: [
      'Estruturar modelo de dados para hábitos e registros diários',
      'Criar dashboard com visualização de progresso semanal',
      'Implementar formulário de registro diário de atividades'
    ],
    social: [
      'Criar sistema de autenticação e perfis de usuário',
      'Implementar feed principal com postagens e interações',
      'Desenvolver página de perfil com informações editáveis'
    ],
    ecommerce: [
      'Estruturar catálogo de produtos com sistema de categorias',
      'Criar página de listagem com grid responsivo de produtos',
      'Implementar página de detalhes do produto com imagens e informações'
    ],
    game: [
      'Definir mecânica principal do jogo e regras de pontuação',
      'Criar tela inicial com opções de jogar e ver ranking',
      'Implementar primeira fase ou nível jogável'
    ],
    food: [
      'Estruturar modelo de dados para receitas com ingredientes e passos',
      'Criar grid de cards de receitas com imagens e informações básicas',
      'Implementar página de detalhes da receita com ingredientes e modo de preparo'
    ],
    music: [
      'Estruturar modelo de dados para músicas e playlists',
      'Criar interface de listagem de playlists do usuário',
      'Implementar página de playlist com lista de músicas'
    ],
    productivity: [
      'Implementar timer Pomodoro funcional com contagem regressiva',
      'Criar dashboard com estatísticas de sessões de foco',
      'Desenvolver interface de configuração de intervalos personalizados'
    ],
    content: [
      'Estruturar modelo de dados para posts com título, conteúdo e metadados',
      'Criar editor de texto com formatação básica (negrito, itálico, títulos)',
      'Implementar listagem de posts com preview e status (publicado/rascunho)'
    ],
    portfolio: [
      'Criar estrutura de página inicial com seção hero e navegação',
      'Implementar seção de projetos com grid de cards clicáveis',
      'Desenvolver página de detalhes do projeto com galeria de imagens'
    ],
  };

  for (const [key, tasks] of Object.entries(taskTemplates)) {
    if (keywords.has(key)) return tasks;
  }

  return [
    'Definir a estrutura de dados e componentes principais da aplicação',
    'Criar a interface inicial com navegação e layout responsivo',
    'Implementar a funcionalidade principal com validações básicas'
  ];
}

function estimateDifficulty(idea: string, keywords: Set<string>): Difficulty {
  let complexityScore = 0;

  // Base complexity from keywords
  const highComplexity = ['social', 'ecommerce', 'game'];
  const mediumComplexity = ['finance', 'education', 'health', 'music', 'productivity'];

  highComplexity.forEach(term => {
    if (keywords.has(term)) complexityScore += 3;
  });

  mediumComplexity.forEach(term => {
    if (keywords.has(term)) complexityScore += 2;
  });

  // Additional complexity indicators
  if (idea.match(/autenticação|login|usuário|authentication|user/)) complexityScore += 1;
  if (idea.match(/pagamento|payment|checkout/)) complexityScore += 2;
  if (idea.match(/tempo real|real-time|chat|notificação/)) complexityScore += 2;
  if (idea.match(/api|integração|integration/)) complexityScore += 1;
  if (idea.match(/mobile|app nativo|native/)) complexityScore += 1;

  // Determine difficulty
  if (complexityScore >= 5) return 'Difícil';
  if (complexityScore >= 2) return 'Médio';
  return 'Fácil';
}
