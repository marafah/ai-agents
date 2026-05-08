import { notFound } from 'next/navigation';
import { lessons } from '@/data/lessons';
import { lessonContents } from '@/data/lessons/content';
import LessonDetailClient from '@/components/lessons/LessonDetailClient';

const categoryLabels: Record<string, Record<string, string>> = {
  foundations: { en: 'Foundations', ar: 'الأساسيات' },
  'core-concepts': { en: 'Core Concepts', ar: 'المفاهيم الأساسية' },
  advanced: { en: 'Advanced', ar: 'متقدم' },
  'function-calling': { en: 'Function Calling', ar: 'استدعاء الوظائف' },
  'frameworks-langgraph': { en: 'LangGraph', ar: 'LangGraph' },
  'memory-systems': { en: 'Memory Systems', ar: 'أنظمة الذاكرة' },
  'design-patterns': { en: 'Design Patterns', ar: 'أنماط التصميم' },
  'frameworks-autogen': { en: 'AutoGen', ar: 'AutoGen' },
  'frameworks-adk': { en: 'Google ADK', ar: 'Google ADK' },
  'frameworks-bedrock': { en: 'Bedrock', ar: 'Bedrock' },
  'industry-applications': { en: 'Industry', ar: 'تطبيقات صناعية' },
  'nlp-fundamentals': { en: 'NLP Fundamentals', ar: 'أساسيات معالجة اللغة' },
  'prompt-engineering': { en: 'Prompt Engineering', ar: 'هندسة المطالبات' },
  'llm-internals': { en: 'LLM Internals', ar: 'بنية نماذج اللغة' },
  'agent-architectures': { en: 'Agent Architectures', ar: 'معماريات الوكلاء' },
  'advanced-rag': { en: 'Advanced RAG', ar: 'RAG متقدم' },
  'reinforcement-learning': { en: 'Reinforcement Learning', ar: 'التعلم المعزز' },
  'knowledge-representation': { en: 'Knowledge Graphs', ar: 'رسوم المعرفة' },
  'frameworks-crewai': { en: 'CrewAI', ar: 'CrewAI' },
  'frameworks-llamaindex': { en: 'LlamaIndex', ar: 'LlamaIndex' },
  'frameworks-semantic-kernel': { en: 'Semantic Kernel', ar: 'Semantic Kernel' },
  'frameworks-openai-agents': { en: 'OpenAI Agents SDK', ar: 'OpenAI Agents SDK' },
  'ai-security': { en: 'AI Security', ar: 'أمن الذكاء الاصطناعي' },
  'human-ai-interaction': { en: 'Human-AI Interaction', ar: 'تفاعل الإنسان والذكاء' },
  'agent-evaluation': { en: 'Agent Evaluation', ar: 'تقييم الوكلاء' },
  'production-llmops': { en: 'Production & LLMOps', ar: 'الإنتاج وعمليات LLM' },
  'computer-vision-multimodal': { en: 'Vision & Multimodal', ar: 'الرؤية ومتعدد الوسائط' },
  'voice-ai': { en: 'Voice AI', ar: 'الذكاء الصوتي' },
};

const categoryColors: Record<string, string> = {
  foundations: '#10b981',
  'core-concepts': '#3b82f6',
  advanced: '#a855f7',
  'function-calling': '#06b6d4',
  'frameworks-langgraph': '#8b5cf6',
  'memory-systems': '#f59e0b',
  'design-patterns': '#f43f5e',
  'frameworks-autogen': '#14b8a6',
  'frameworks-adk': '#0ea5e9',
  'frameworks-bedrock': '#f97316',
  'industry-applications': '#6366f1',
  'nlp-fundamentals': '#0d9488',
  'prompt-engineering': '#d946ef',
  'llm-internals': '#7c3aed',
  'agent-architectures': '#2563eb',
  'advanced-rag': '#dc2626',
  'reinforcement-learning': '#ea580c',
  'knowledge-representation': '#0891b2',
  'frameworks-crewai': '#4f46e5',
  'frameworks-llamaindex': '#059669',
  'frameworks-semantic-kernel': '#7c3aed',
  'frameworks-openai-agents': '#171717',
  'ai-security': '#e11d48',
  'human-ai-interaction': '#8b5cf6',
  'agent-evaluation': '#ca8a04',
  'production-llmops': '#0284c7',
  'computer-vision-multimodal': '#c026d3',
  'voice-ai': '#15803d',
};

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export default async function LessonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) notFound();

  const content = lessonContents[slug] || null;

  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);
  const currentIndex = sortedLessons.findIndex((l) => l.slug === slug);
  const prevLesson = currentIndex > 0 ? sortedLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < sortedLessons.length - 1 ? sortedLessons[currentIndex + 1] : null;

  const categoryGroups: { category: string; lessons: { slug: string; title: Record<string, string> }[] }[] = [];
  const seen = new Set<string>();
  for (const l of sortedLessons) {
    if (!seen.has(l.category)) {
      seen.add(l.category);
      categoryGroups.push({
        category: l.category,
        lessons: sortedLessons
          .filter((x) => x.category === l.category)
          .map((x) => ({ slug: x.slug, title: x.title })),
      });
    }
  }

  const prerequisiteLessons = lesson.prerequisites
    .map((prereqSlug) => {
      const prereq = lessons.find((l) => l.slug === prereqSlug);
      return prereq ? { slug: prereq.slug, title: prereq.title } : null;
    })
    .filter((x): x is { slug: string; title: Record<string, string> } => x !== null);

  const serializedLesson = {
    slug: lesson.slug,
    title: lesson.title,
    description: lesson.description,
    category: lesson.category,
    difficulty: lesson.difficulty,
    estimatedMinutes: lesson.estimatedMinutes,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    order: lesson.order,
  };

  return (
    <LessonDetailClient
      lesson={serializedLesson}
      content={content}
      prevLesson={prevLesson ? { slug: prevLesson.slug, title: prevLesson.title } : null}
      nextLesson={nextLesson ? { slug: nextLesson.slug, title: nextLesson.title } : null}
      totalLessons={sortedLessons.length}
      currentIndex={currentIndex}
      categoryGroups={categoryGroups}
      prerequisiteLessons={prerequisiteLessons}
      categoryLabel={categoryLabels[lesson.category] || { en: lesson.category, ar: lesson.category }}
      categoryColor={categoryColors[lesson.category] || '#6366f1'}
    />
  );
}
