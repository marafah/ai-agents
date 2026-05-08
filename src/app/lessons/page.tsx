'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Clock, BookOpen, Tag, CheckCircle } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { useProgress } from '@/hooks/useProgress';
import { t } from '@/lib/i18n';
import { lessons } from '@/data/lessons';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import type { Difficulty } from '@/types';

const difficultyFilters: Array<Difficulty | 'all'> = ['all', 'beginner', 'intermediate', 'advanced'];
const categoryFilters = [
  'all', 'foundations', 'core-concepts', 'advanced',
  'nlp-fundamentals', 'prompt-engineering', 'llm-internals',
  'function-calling', 'frameworks-langgraph', 'memory-systems', 'design-patterns',
  'agent-architectures', 'advanced-rag', 'reinforcement-learning', 'knowledge-representation',
  'frameworks-autogen', 'frameworks-adk', 'frameworks-bedrock',
  'frameworks-crewai', 'frameworks-llamaindex', 'frameworks-semantic-kernel', 'frameworks-openai-agents',
  'ai-security', 'human-ai-interaction', 'agent-evaluation', 'production-llmops',
  'computer-vision-multimodal', 'voice-ai', 'industry-applications',
] as const;

const categoryLabels: Record<string, Record<string, string>> = {
  all: { en: 'All', ar: 'الكل' },
  foundations: { en: 'Foundations', ar: 'الأساسيات' },
  'core-concepts': { en: 'Core Concepts', ar: 'المفاهيم الأساسية' },
  advanced: { en: 'Advanced', ar: 'متقدم' },
  'nlp-fundamentals': { en: 'NLP Fundamentals', ar: 'أساسيات معالجة اللغة' },
  'prompt-engineering': { en: 'Prompt Engineering', ar: 'هندسة المطالبات' },
  'llm-internals': { en: 'LLM Internals', ar: 'بنية نماذج اللغة' },
  'function-calling': { en: 'Function Calling', ar: 'استدعاء الوظائف' },
  'frameworks-langgraph': { en: 'LangGraph', ar: 'LangGraph' },
  'memory-systems': { en: 'Memory Systems', ar: 'أنظمة الذاكرة' },
  'design-patterns': { en: 'Design Patterns', ar: 'أنماط التصميم' },
  'agent-architectures': { en: 'Agent Architectures', ar: 'معماريات الوكلاء' },
  'advanced-rag': { en: 'Advanced RAG', ar: 'RAG متقدم' },
  'reinforcement-learning': { en: 'Reinforcement Learning', ar: 'التعلم المعزز' },
  'knowledge-representation': { en: 'Knowledge Graphs', ar: 'رسوم المعرفة' },
  'frameworks-autogen': { en: 'AutoGen', ar: 'AutoGen' },
  'frameworks-adk': { en: 'Google ADK', ar: 'Google ADK' },
  'frameworks-bedrock': { en: 'Bedrock', ar: 'Bedrock' },
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
  'industry-applications': { en: 'Industry', ar: 'تطبيقات صناعية' },
};

const categoryColors: Record<string, string> = {
  foundations: '#10b981',
  'core-concepts': '#3b82f6',
  advanced: '#a855f7',
  'nlp-fundamentals': '#0d9488',
  'prompt-engineering': '#d946ef',
  'llm-internals': '#7c3aed',
  'function-calling': '#06b6d4',
  'frameworks-langgraph': '#8b5cf6',
  'memory-systems': '#f59e0b',
  'design-patterns': '#f43f5e',
  'agent-architectures': '#2563eb',
  'advanced-rag': '#dc2626',
  'reinforcement-learning': '#ea580c',
  'knowledge-representation': '#0891b2',
  'frameworks-autogen': '#14b8a6',
  'frameworks-adk': '#0ea5e9',
  'frameworks-bedrock': '#f97316',
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
  'industry-applications': '#6366f1',
};

export default function LessonsPage() {
  const { locale, direction } = useLocale();
  const { completedLessons } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredLessons = useMemo(() => {
    return lessons
      .filter((lesson) => {
        // Search filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchesTitle = lesson.title[locale].toLowerCase().includes(query);
          const matchesDesc = lesson.description[locale].toLowerCase().includes(query);
          const matchesTags = lesson.tags.some((tag) => tag.toLowerCase().includes(query));
          if (!matchesTitle && !matchesDesc && !matchesTags) return false;
        }

        // Difficulty filter
        if (difficultyFilter !== 'all' && lesson.difficulty !== difficultyFilter) return false;

        // Category filter
        if (categoryFilter !== 'all' && lesson.category !== categoryFilter) return false;

        return true;
      })
      .sort((a, b) => a.order - b.order);
  }, [searchQuery, difficultyFilter, categoryFilter, locale]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" dir={direction}>
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {t('lessons.title', locale)}
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {t('lessons.subtitle', locale)}
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        className="mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div
          className="relative flex items-center rounded-xl border overflow-hidden"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-primary)',
          }}
        >
          <Search
            className="h-5 w-5 absolute mx-4"
            style={{
              color: 'var(--text-tertiary)',
              ...(direction === 'rtl' ? { right: 0 } : { left: 0 }),
            }}
          />
          <input
            type="text"
            placeholder={t('lessons.search', locale)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 bg-transparent outline-none text-sm"
            style={{
              color: 'var(--text-primary)',
              paddingInlineStart: '3rem',
              paddingInlineEnd: '1rem',
            }}
          />
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {/* Difficulty filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {difficultyFilters.map((filter) => {
            const isActive = difficultyFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setDifficultyFilter(filter)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: isActive ? 'var(--color-primary)' : 'var(--bg-secondary)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? 'var(--color-primary)' : 'var(--border-primary)'}`,
                }}
              >
                {filter === 'all'
                  ? t('lessons.filter.all', locale)
                  : t(`lessons.filter.${filter}`, locale)}
              </button>
            );
          })}
        </div>

        {/* Category filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categoryFilters.map((filter) => {
            const isActive = categoryFilter === filter;
            const color = filter !== 'all' ? categoryColors[filter] : undefined;
            return (
              <button
                key={filter}
                onClick={() => setCategoryFilter(filter)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                style={{
                  background: isActive
                    ? color
                      ? `${color}20`
                      : 'var(--color-primary)'
                    : 'var(--bg-secondary)',
                  color: isActive
                    ? color || '#ffffff'
                    : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? (color || 'var(--color-primary)') : 'var(--border-primary)'}`,
                }}
              >
                {filter !== 'all' && (
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: categoryColors[filter] }}
                  />
                )}
                {categoryLabels[filter]?.[locale] || filter}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Results count */}
      <div className="mb-6 text-center">
        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
          {locale === 'en'
            ? `Showing ${filteredLessons.length} of ${lessons.length} lessons`
            : `عرض ${filteredLessons.length} من ${lessons.length} درساً`}
        </p>
      </div>

      {/* Lessons Grid */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.slug);
            const color = categoryColors[lesson.category] || '#6366f1';

            return (
              <motion.div
                key={lesson.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/lessons/${lesson.slug}`}
                  className="block rounded-2xl p-6 border card-hover h-full"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  {/* Top row: order number + completion */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-md"
                      style={{
                        background: `${color}15`,
                        color: color,
                      }}
                    >
                      #{lesson.order}
                    </span>
                    {isCompleted && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-2 line-clamp-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {lesson.title[locale]}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {lesson.description[locale]}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <DifficultyBadge difficulty={lesson.difficulty} />
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      <Clock className="h-3.5 w-3.5" />
                      {lesson.estimatedMinutes} {t('common.minutes', locale)}
                    </span>
                  </div>

                  {/* Category tag */}
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: `${color}10`,
                        color: color,
                      }}
                    >
                      <Tag className="h-3 w-3" />
                      {categoryLabels[lesson.category]?.[locale] || lesson.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BookOpen
            className="h-16 w-16 mx-auto mb-4"
            style={{ color: 'var(--text-tertiary)' }}
          />
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
            {locale === 'en' ? 'No lessons found' : 'لم يتم العثور على دروس'}
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'en'
              ? 'Try adjusting your search or filter criteria'
              : 'حاول تعديل معايير البحث أو التصفية'}
          </p>
        </motion.div>
      )}
    </div>
  );
}
