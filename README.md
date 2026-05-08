<div align="center">
  <h1>AI Agents Academy</h1>
  <p><strong>Master AI Agents from Zero to Production</strong></p>
  <p>The most comprehensive, open-source learning platform for AI Agents — 137 lessons, 28 categories, bilingual (English/Arabic), fully interactive.</p>
  
  <p>
    <a href="#features">Features</a> &bull;
    <a href="#getting-started">Getting Started</a> &bull;
    <a href="#curriculum">Curriculum</a> &bull;
    <a href="#architecture">Architecture</a> &bull;
    <a href="#contributing">Contributing</a> &bull;
    <a href="#deployment">Deployment</a>
  </p>

  <p>
    <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg" />
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.2-black" />
    <img alt="React" src="https://img.shields.io/badge/React-19.2-61dafb" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-4-38bdf8" />
    <img alt="Lessons" src="https://img.shields.io/badge/Lessons-137-10b981" />
  </p>
</div>

---

## About

AI Agents Academy is a free, open-source educational platform that teaches everything about AI Agents — from foundational concepts to production-grade implementations. Built by [Dr. Mohammad Arafah](https://www.linkedin.com/in/mohammadarafah), it provides structured learning paths, interactive diagrams, hands-on projects, quizzes, and real-time agent simulations.

Every lesson is available in both **English** and **Arabic** with full RTL support.

## Features

- **137 Lessons** across 28 categories covering the full AI Agent ecosystem
- **152 Interactive Diagrams** — data-driven visualizations built with 7 reusable templates (flow, comparison, cycle, stack, hub-spoke, vs, multi-flow)
- **5 Learning Paths** — Beginner, Intermediate, Advanced, Industry, and Research tracks
- **Agent Playground** — simulate AI Agent behavior with mock tool calls, reasoning steps, and memory
- **Visual Simulations** — watch RAG pipelines, ReAct loops, and multi-agent workflows animate step-by-step
- **Quizzes & Exams** — MCQ, true/false, and scenario-based questions per lesson
- **Hands-On Projects** — build real agents from simple tool-using bots to enterprise systems
- **Bilingual** — full English and Arabic content with RTL layout
- **Dark/Light Theme** — professional design with instant theme switching
- **Progress Tracking** — completed lessons, quiz scores, and study time via local storage
- **Responsive** — optimized for desktop, tablet, and mobile
- **Animated Hero** — looping agent simulation demo with typing effects and 3 rotating scenarios
- **Open Source** — MIT licensed, community contributions welcome

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.5 | React framework with App Router and Turbopack |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations and transitions |
| [Zustand](https://zustand-demo.pmnd.rs/) | 5.x | Lightweight state management |
| [Lucide React](https://lucide.dev/) | 0.503 | Icon library (200+ icons used) |

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9 or later (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/marafah/ai-agents-academy.git
cd ai-agents-academy

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
ai-agents-academy/
├── public/                         # Static assets (images, fonts)
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── page.tsx                # Home page
│   │   ├── layout.tsx              # Root layout (fonts, theme, locale)
│   │   ├── globals.css             # Global styles, CSS variables, themes
│   │   ├── about/                  # About / author page
│   │   ├── lessons/                # Lesson listing + [slug] detail pages
│   │   ├── paths/                  # Learning paths + [slug] detail pages
│   │   ├── playground/             # AI Agent interactive playground
│   │   ├── simulations/            # Step-by-step agent simulations
│   │   ├── exams/                  # Quiz and exam system
│   │   └── projects/               # Hands-on project catalog
│   ├── components/
│   │   ├── layout/                 # Header, Footer, ThemeProvider, DirectionProvider
│   │   ├── ui/                     # Reusable UI (CodeBlock, DifficultyBadge, ProgressBar)
│   │   ├── home/                   # Home page sections (Hero, Features, Demo, Stats)
│   │   ├── diagrams/               # Diagram system
│   │   │   ├── templates/          # 7 reusable diagram templates
│   │   │   │   ├── types.ts        # Shared type definitions
│   │   │   │   ├── FlowDiagram.tsx
│   │   │   │   ├── ComparisonGrid.tsx
│   │   │   │   ├── CycleDiagram.tsx
│   │   │   │   ├── StackDiagram.tsx
│   │   │   │   ├── HubSpokeDiagram.tsx
│   │   │   │   ├── VsComparison.tsx
│   │   │   │   └── MultiFlowDiagram.tsx
│   │   │   ├── data/               # 27 category data files (152 diagram configs)
│   │   │   ├── index.tsx           # Diagram registry + factory
│   │   │   └── *.tsx               # 15 custom hand-crafted diagrams
│   │   ├── lessons/                # LessonDetailClient component
│   │   ├── playground/             # Playground components
│   │   ├── simulations/            # Simulation components
│   │   └── quiz/                   # Quiz components
│   ├── data/
│   │   ├── lessons/
│   │   │   ├── index.ts            # 137 lesson definitions
│   │   │   ├── content.ts          # Content aggregator
│   │   │   └── content-batch*.ts   # 10 content batch files
│   │   ├── paths/                  # Learning path definitions
│   │   ├── quizzes/                # Quiz question banks
│   │   └── projects/               # Project definitions
│   ├── hooks/                      # Custom hooks (useLocale, useProgress, useTheme)
│   ├── lib/                        # Utilities (i18n translations, helpers)
│   └── types/                      # TypeScript type definitions
├── .github/                        # GitHub templates and workflows
├── CONTRIBUTING.md                 # Contribution guidelines
├── CHANGELOG.md                    # Version history
├── CODE_OF_CONDUCT.md              # Community guidelines
├── SECURITY.md                     # Security policy
├── ROADMAP.md                      # Future plans
└── LICENSE                         # MIT License
```

## Architecture

### Server/Client Component Split

The lesson system uses a **server component / client component architecture** to optimize performance:

- **`src/app/lessons/[slug]/page.tsx`** (Server Component) — imports the full 2.2MB+ lesson content library server-side, selects the single lesson's data, and passes ~10-20KB as serialized props to the client.
- **`src/components/lessons/LessonDetailClient.tsx`** (Client Component) — receives only the current lesson's content, renders the article with diagrams, quizzes, and interactive features.

This pattern keeps the browser bundle small while supporting 137 lessons with full bilingual content.

### Diagram System

Instead of 152 individual diagram files, the platform uses a **template + data architecture**:

1. **7 Template Components** — reusable, animated React components (`FlowDiagram`, `ComparisonGrid`, `CycleDiagram`, `StackDiagram`, `HubSpokeDiagram`, `VsComparison`, `MultiFlowDiagram`)
2. **27 Data Files** — each category exports diagram configurations referencing templates, positions, icons, and bilingual labels
3. **Factory Function** — `createTemplateDiagram()` converts data configs into renderable components at registration time

Templates support: Framer Motion animations, Lucide icons, bilingual text (en/ar), RTL layout, dark/light themes, and responsive sizing.

### Internationalization

All content uses `Record<Locale, string>` for bilingual support:

```typescript
title: { en: 'What is an AI Agent?', ar: 'ما هو وكيل الذكاء الاصطناعي؟' }
```

The `useLocale()` hook provides `locale` and `direction` (`ltr`/`rtl`), and the `t()` function handles UI string translations from `src/lib/i18n.ts`.

## Curriculum

### 28 Categories, 137 Lessons

| Category | Lessons | Level |
|---|---|---|
| **Foundations** | What is AI, Machine Learning, Deep Learning, LLMs, AI Agents, Agent vs Chatbot | Beginner |
| **Core Concepts** | Prompts, Tools, ReAct, Memory, RAG, Embeddings, State, Orchestration | Beginner-Intermediate |
| **Design Patterns** | Chain-of-Thought, Tree-of-Thoughts, Reflection, Planning, Self-Consistency, Tool Use, Multi-Agent Collaboration | Intermediate |
| **Function Calling** | Deep Dive, Patterns, Parallel Calling, Structured Outputs, Schema Design | Intermediate |
| **Memory Systems** | Types Deep Dive, Conversational, Long-Term Strategies, CoALA, Mem0, LangMem, Supabase | Intermediate |
| **Advanced RAG** | Graph RAG, Agentic RAG, Self-RAG, Multi-Hop Retrieval | Advanced |
| **Agent Architectures** | Cognitive, Hierarchical, Reactive vs Deliberative, Graph-Based, AutoGPT/BabyAGI | Advanced |
| **NLP Fundamentals** | Tokenization, Word Embeddings, Named Entity Recognition, Semantic Analysis, Text Preprocessing | Intermediate |
| **Prompt Engineering** | Zero/Few-Shot, Role Prompting, System Prompt Design, Meta Prompting, XML/JSON, Adversarial | Intermediate |
| **LLM Internals** | Transformer Architecture, Attention Mechanisms, Training Pipelines, Fine-Tuning/LoRA, Quantization | Advanced |
| **Frameworks: LangGraph** | Introduction, Nodes/Edges, State Management, Conditional Flows, Tool Integration, Persistence, Streaming, Multi-Agent, Human-in-Loop, Deployment | Intermediate-Advanced |
| **Frameworks: AutoGen** | Introduction, Conversable Agents, Group Chat, Tool Use, Code Executors, Custom Agents, Nested Chat | Intermediate |
| **Frameworks: Google ADK** | Introduction, Sessions/State, Multi-Agent, Memory, Callbacks, Guardrails, Deployment | Intermediate |
| **Frameworks: AWS Bedrock** | Introduction, Knowledge Bases, Action Groups, Guardrails, Agent Collaboration | Advanced |
| **Frameworks: CrewAI** | Introduction, Multi-Agent Teams | Intermediate |
| **Frameworks: LlamaIndex** | Introduction, RAG Pipelines | Intermediate |
| **Frameworks: Semantic Kernel** | Introduction, Plugins & Planners | Intermediate |
| **Frameworks: OpenAI Agents** | Introduction, Advanced SDK | Intermediate |
| **Knowledge Representation** | Knowledge Graphs, Ontologies, Neo4j for Agents | Advanced |
| **Reinforcement Learning** | Basics/MDP, Q-Learning/DQN, PPO, RLHF for Agents | Advanced |
| **AI Security** | Prompt Injection, Jailbreaking Defense, Adversarial Attacks, Sandboxing, Responsible AI | Advanced |
| **Human-AI Interaction** | Human-in-the-Loop, Conversational UX, Multimodal Interfaces | Intermediate |
| **Agent Evaluation** | Benchmarks, Evaluation Frameworks, Cost Optimization | Advanced |
| **Production LLMOps** | Observability, Prompt Versioning, Model Serving, Cost Optimization, Distributed Systems | Advanced |
| **Computer Vision & Multimodal** | Vision-Language Models, CLIP/GPT-4V, Multimodal Agents | Advanced |
| **Voice AI** | Speech-to-Text/TTS, Real-Time Voice Agents | Advanced |
| **Industry Applications** | Customer Support, SQL Agent, CSV Agent, Code Review, Research Paper, Financial Report, Cybersecurity SOC, Healthcare, AI Tutor, Browser Automation, Digital Workers | Advanced |

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and configures the build
4. Deploy — no environment variables required

### Static Export

```bash
# Add to next.config.ts: output: 'export'
npm run build
# Deploy the 'out' directory to any static host
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-lesson`)
3. Commit your changes (`git commit -m "Add: new lesson on topic X"`)
4. Push to the branch (`git push origin feature/new-lesson`)
5. Open a Pull Request

## Author

**Dr. Mohammad Arafah**

- Assistant Professor, University of Petra
- Co-Founder & Head of AI, Sygma Global Software
- Ph.D. in Cybersecurity & Artificial Intelligence, Loughborough University, UK
- [LinkedIn](https://www.linkedin.com/in/mohammadarafah) | [Email](mailto:mohammad.arafah@sygma.net)

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This platform draws inspiration from the research and documentation of:

- [OpenAI](https://openai.com) — Large language models and agent APIs
- [Anthropic](https://anthropic.com) — AI safety research and Claude models
- [Google DeepMind](https://deepmind.google) — AI research, Gemini, and ADK
- [LangChain](https://langchain.com) — Open-source LLM frameworks
- [Meta AI](https://ai.meta.com) — Open-source LLMs (LLaMA)
- [Hugging Face](https://huggingface.co) — Model hub and ML tooling
- [Microsoft Research](https://www.microsoft.com/en-us/research/) — AutoGen and Semantic Kernel

---

<div align="center">
  <p>Built with dedication for the AI community</p>
  <p><strong>If you find this useful, please give it a star!</strong></p>
</div>
