# IdeaForge

Uma aplicação web moderna que transforma ideias simples em planos estruturados de projetos executáveis.

## 📋 Descrição

IdeaForge é uma ferramenta intuitiva que ajuda você a transformar suas ideias em projetos bem estruturados. Basta descrever sua ideia e receba instantaneamente:

- Nome sugerido para o projeto
- Problema que pretende resolver
- Público-alvo identificado
- Descrição da solução proposta
- Três funcionalidades principais
- Três primeiras tarefas para começar
- Estimativa de dificuldade (Fácil, Médio ou Difícil)

## ✨ Funcionalidades

- **Interface moderna e minimalista**: Design inspirado em produtos SaaS como Linear, Vercel e Notion
- **Tema escuro**: Interface profissional com fundo grafite e tipografia limpa
- **Geração inteligente**: Algoritmo contextual que analisa sua ideia e gera um plano estruturado
- **Exemplos prontos**: Clique em ideias de exemplo para explorar rapidamente
- **Copiar para clipboard**: Exporte seu plano gerado com um clique
- **Totalmente responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- **Sem dependências externas**: Funciona 100% localmente, sem necessidade de APIs ou banco de dados

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para código mais robusto
- **Tailwind CSS** - Estilização utilitária e responsiva
- **React 19** - Biblioteca para construção de interfaces

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ideaforge.git
cd ideaforge
```

2. Instale as dependências:
```bash
npm install
```

## 🏃 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

### Build de Produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
ideaforge/
├── app/
│   ├── layout.tsx          # Layout principal da aplicação
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais e tema
├── components/
│   ├── Header.tsx          # Cabeçalho com logo e subtítulo
│   ├── IdeaInput.tsx       # Formulário de entrada de ideias
│   └── ProjectResult.tsx   # Exibição dos resultados gerados
├── lib/
│   ├── types.ts            # Tipos TypeScript
│   └── projectGenerator.ts # Lógica de geração de projetos
├── public/                 # Arquivos estáticos
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.ts      # Configuração Tailwind
└── next.config.js          # Configuração Next.js
```

## 🎯 Como Usar

1. **Descreva sua ideia**: Digite ou selecione uma ideia de exemplo no campo de texto
2. **Gere o projeto**: Clique no botão "Gerar projeto"
3. **Visualize o plano**: Veja todas as informações estruturadas em cards organizados
4. **Copie ou refaça**: Use o botão de copiar para exportar ou gere uma nova ideia

## 🎨 Design

O design segue princípios de interfaces SaaS modernas:

- Tema escuro com fundo grafite (#0a0a0a)
- Bordas discretas e espaçamento consistente
- Animações sutis para melhor experiência
- Tipografia limpa e hierarquia visual clara
- Cards com hover effects
- Ícones SVG consistentes
- Layout totalmente responsivo

## 🔧 Configuração

Não há necessidade de variáveis de ambiente ou configurações adicionais. A aplicação funciona imediatamente após a instalação.

## 📝 Licença

Este projeto é open source e está disponível para uso pessoal e portfólio.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📧 Contato

Desenvolvido como projeto de portfólio demonstrando habilidades em Next.js, TypeScript e design de interfaces modernas.

---

**Nota**: Esta é a primeira versão do IdeaForge. Futuras versões podem incluir recursos como autenticação, salvamento de projetos, integração com IA e mais opções de personalização.
