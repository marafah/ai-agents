'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Locale, Difficulty } from '@/types';
import type { LessonContentData } from '@/data/lessons/content';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle,
  Circle,
  Target,
  BookOpen,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Lightbulb,
  AlertTriangle,
  Award,
  Layers,
  GraduationCap,
  Code2,
  Link2,
  HelpCircle,
  List,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { useProgress } from '@/hooks/useProgress';
import { t } from '@/lib/i18n';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import CodeBlock from '@/components/ui/CodeBlock';
import { lessonDiagrams } from '@/components/diagrams';

interface SerializedLesson {
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  objectives: Record<string, string[]>;
  prerequisites: string[];
  order: number;
}

interface SidebarCategory {
  category: string;
  lessons: { slug: string; title: Record<string, string> }[];
}

interface NavLesson {
  slug: string;
  title: Record<string, string>;
}

interface Props {
  lesson: SerializedLesson;
  content: LessonContentData | null;
  prevLesson: NavLesson | null;
  nextLesson: NavLesson | null;
  totalLessons: number;
  currentIndex: number;
  categoryGroups: SidebarCategory[];
  prerequisiteLessons: { slug: string; title: Record<string, string> }[];
  categoryLabel: Record<string, string>;
  categoryColor: string;
}

export default function LessonDetailClient({
  lesson,
  content,
  prevLesson,
  nextLesson,
  totalLessons,
  currentIndex,
  categoryGroups,
  prerequisiteLessons,
  categoryLabel,
  categoryColor: color,
}: Props) {
  const { locale, direction } = useLocale();
  const { completeLesson, isLessonComplete } = useProgress();
  const slug = lesson.slug;

  const isCompleted = isLessonComplete(slug);
  const diagrams = lessonDiagrams[slug] || [];

  const tocSections = [
    { id: 'intro', icon: BookOpen, label: locale === 'en' ? 'Introduction' : 'المقدمة' },
    { id: 'technical', icon: Layers, label: t('common.definition_technical', locale) },
    { id: 'analogy', icon: Lightbulb, label: t('common.analogy', locale) },
    { id: 'how-it-works', icon: GraduationCap, label: locale === 'en' ? 'How It Works' : 'كيف يعمل' },
    ...(content?.codeExample ? [{ id: 'code', icon: Code2, label: t('common.code_example', locale) }] : []),
    { id: 'tips', icon: AlertTriangle, label: locale === 'en' ? 'Tips & Pitfalls' : 'نصائح وأخطاء' },
    ...(content?.references?.length ? [{ id: 'references', icon: Link2, label: t('common.references', locale) }] : []),
    ...(content?.quiz?.length ? [{ id: 'quiz', icon: HelpCircle, label: t('common.quiz', locale) }] : []),
  ];

  const [activeSection, setActiveSection] = useState(tocSections[0]?.id || '');

  useEffect(() => {
    const ids = tocSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug]);

  return (
    <div dir={direction} className="overflow-x-hidden">
      {/* ══════ HERO ══════ */}
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}15 0%, ${color}05 50%, transparent 100%)` }}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}30, transparent)` }} />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-8 pb-14">
          <motion.div
            initial={{ opacity: 0, x: direction === 'rtl' ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/lessons"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {direction === 'rtl' ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {t('common.back', locale)}
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <DifficultyBadge difficulty={lesson.difficulty} />
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
              >
                {categoryLabel[locale] || lesson.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                <Clock className="h-4 w-4" />
                {lesson.estimatedMinutes} {t('common.estimated_time', locale)}
              </span>
              {isCompleted && (
                <span className="flex items-center gap-1.5 text-sm font-semibold text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  {t('common.complete', locale)}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-[1.15] tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {lesson.title[locale]}
            </h1>

            <p className="text-lg max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {lesson.description[locale]}
            </p>
          </motion.header>
        </div>
      </div>

      {/* ══════ BODY ══════ */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col xl:flex-row gap-8">

          {/* ── Left Sidebar: Course Outline ── */}
          <motion.aside
            className="hidden xl:block w-[240px] flex-shrink-0"
            initial={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="lg:sticky lg:top-20">
              <div
                className="rounded-2xl border shadow-sm overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="px-4 py-3 flex items-center gap-2" style={{ background: `${color}08`, borderBottom: `1px solid ${color}15` }}>
                  <List className="h-4 w-4" style={{ color }} />
                  <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                    {locale === 'en' ? 'Course Outline' : 'محتوى الدورة'}
                  </h3>
                </div>
                <div className="py-2 max-h-[calc(100vh-140px)] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                  {categoryGroups.map((group) => {
                    const catColor = getCategoryColor(group.category);
                    const isCurrentCategory = group.category === lesson.category;
                    return (
                      <div key={group.category}>
                        <div
                          className="px-4 py-2 flex items-center gap-2"
                          style={{ borderBottom: '1px solid var(--border-primary)' }}
                        >
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: catColor }} />
                          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: catColor }}>
                            {getCategoryLabel(group.category, locale)}
                          </span>
                        </div>
                        {isCurrentCategory && group.lessons.map((l) => {
                          const isCurrent = l.slug === slug;
                          const done = isLessonComplete(l.slug);
                          return (
                            <Link
                              key={l.slug}
                              href={`/lessons/${l.slug}`}
                              className="flex items-center gap-2 px-4 py-[7px] text-[12px] transition-all hover:bg-[var(--bg-secondary)]"
                              style={{
                                color: isCurrent ? color : 'var(--text-secondary)',
                                fontWeight: isCurrent ? 600 : 400,
                                background: isCurrent ? `${color}08` : 'transparent',
                                borderInlineStart: isCurrent ? `3px solid ${color}` : '3px solid transparent',
                              }}
                            >
                              {done ? (
                                <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: '#10b981' }} />
                              ) : isCurrent ? (
                                <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ border: `2px solid ${color}`, background: `${color}20` }}>
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                                </div>
                              ) : (
                                <Circle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: 'var(--border-secondary)' }} />
                              )}
                              <span className="truncate">{l.title[locale]}</span>
                            </Link>
                          );
                        })}
                        {!isCurrentCategory && (
                          <div className="px-4 py-1.5 text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
                            {group.lessons.length} {locale === 'en' ? 'lessons' : 'دروس'}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* ── Article ── */}
          <div className="flex-1 min-w-0 overflow-hidden">
            {content ? (
              <motion.article
                className="rounded-2xl border overflow-hidden shadow-sm"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)', fontFamily: 'Georgia, "Palatino Linotype", "Book Antiqua", Palatino, serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="px-8 sm:px-14 py-12" style={{ textAlign: 'justify' }}>

                  {/* Introduction */}
                  <section id="intro">
                    <p
                      className="text-[1.15rem] leading-[2]"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <span
                        style={{
                          color,
                          float: direction === 'rtl' ? 'right' : 'left',
                          fontSize: '3rem',
                          fontWeight: 800,
                          lineHeight: 1,
                          marginTop: '0.25rem',
                          ...(direction === 'rtl'
                            ? { marginLeft: '0.75rem' }
                            : { marginRight: '0.75rem' }),
                        }}
                      >
                        {content.beginnerDefinition[locale].charAt(0)}
                      </span>
                      {content.beginnerDefinition[locale].slice(1)}
                    </p>
                  </section>

                  <ArticleDivider color={color} />

                  {/* Technical Definition */}
                  <section id="technical">
                    <SectionHeading icon={Layers} color={color}>
                      {t('common.definition_technical', locale)}
                    </SectionHeading>
                    <p className="text-base leading-[1.9]" style={{ color: 'var(--text-primary)' }}>
                      {content.technicalDefinition[locale]}
                    </p>
                  </section>

                  {diagrams.filter((d) => d.position === 'after-definition').map((d, i) => (
                    <DiagramInline key={`def-${i}`} title={d.title[locale]} color={color}>
                      <d.component locale={locale} />
                    </DiagramInline>
                  ))}

                  <ArticleDivider color={color} />

                  {/* Analogy */}
                  <section id="analogy">
                    <SectionHeading icon={Lightbulb} color={color}>
                      {t('common.analogy', locale)}
                    </SectionHeading>
                    <div
                      className="rounded-xl p-6 relative overflow-hidden"
                      style={{ background: `${color}08`, border: `1px solid ${color}20` }}
                    >
                      <div className="absolute top-3 right-4 opacity-10">
                        <Lightbulb size={48} color={color} />
                      </div>
                      <p className="text-base leading-[1.9] italic relative" style={{ color: 'var(--text-primary)' }}>
                        {content.analogy[locale]}
                      </p>
                    </div>
                  </section>

                  {diagrams.filter((d) => d.position === 'after-analogy').map((d, i) => (
                    <DiagramInline key={`ana-${i}`} title={d.title[locale]} color={color}>
                      <d.component locale={locale} />
                    </DiagramInline>
                  ))}

                  <ArticleDivider color={color} />

                  {/* How It Works */}
                  <section id="how-it-works">
                    <SectionHeading icon={GraduationCap} color={color}>
                      {locale === 'en' ? 'How It Works' : 'كيف يعمل'}
                    </SectionHeading>
                    <div className="space-y-0">
                      {content.explanation[locale].map((step, i) => (
                        <div
                          key={i}
                          className="flex gap-5 relative"
                          style={{ paddingBottom: i < content.explanation[locale].length - 1 ? 24 : 0 }}
                        >
                          {i < content.explanation[locale].length - 1 && (
                            <div
                              className="absolute top-10 w-0.5 rounded-full"
                              style={{
                                [direction === 'rtl' ? 'right' : 'left']: 17,
                                bottom: 0,
                                background: `linear-gradient(to bottom, ${color}40, ${color}10)`,
                              }}
                            />
                          )}
                          <div
                            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold relative z-10"
                            style={{ background: i === 0 ? color : `${color}15`, color: i === 0 ? '#fff' : color }}
                          >
                            {i + 1}
                          </div>
                          <p className="text-base leading-[1.9] pt-1.5 flex-1" style={{ color: 'var(--text-primary)' }}>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {diagrams.filter((d) => d.position === 'in-explanation').map((d, i) => (
                    <DiagramInline key={`exp-${i}`} title={d.title[locale]} color={color}>
                      <d.component locale={locale} />
                    </DiagramInline>
                  ))}

                  {diagrams.filter((d) => d.position === 'after-explanation').map((d, i) => (
                    <DiagramInline key={`aft-${i}`} title={d.title[locale]} color={color}>
                      <d.component locale={locale} />
                    </DiagramInline>
                  ))}

                  {/* Code Example */}
                  {content.codeExample && (
                    <>
                      <ArticleDivider color={color} />
                      <section id="code">
                        <SectionHeading icon={Code2} color={color}>
                          {t('common.code_example', locale)}
                        </SectionHeading>
                        <p className="text-sm mb-5" style={{ color: 'var(--text-primary)' }}>
                          {content.codeExample.description[locale]}
                        </p>
                        <CodeBlock
                          code={content.codeExample.code}
                          language={content.codeExample.language}
                          title={lesson.title.en}
                        />
                      </section>
                    </>
                  )}

                  <ArticleDivider color={color} />

                  {/* Tips & Pitfalls */}
                  <section id="tips">
                    <SectionHeading icon={AlertTriangle} color={color}>
                      {locale === 'en' ? 'Tips & Pitfalls' : 'نصائح وأخطاء شائعة'}
                    </SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div
                        className="rounded-xl p-5 border"
                        style={{ borderColor: '#f59e0b30', background: '#f59e0b06' }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle className="h-4 w-4" style={{ color: '#f59e0b' }} />
                          <span className="text-sm font-bold" style={{ color: '#f59e0b' }}>
                            {t('common.common_mistakes', locale)}
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {content.commonMistakes[locale].map((mistake, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                              <span className="text-amber-500 mt-0.5 flex-shrink-0 text-xs">&#x2716;</span>
                              {mistake}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="rounded-xl p-5 border"
                        style={{ borderColor: '#10b98130', background: '#10b98106' }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-4 w-4" style={{ color: '#10b981' }} />
                          <span className="text-sm font-bold" style={{ color: '#10b981' }}>
                            {t('common.best_practices', locale)}
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {content.bestPractices[locale].map((practice, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                              <span className="text-green-500 mt-0.5 flex-shrink-0 text-xs">&#x2714;</span>
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* References */}
                  {content.references.length > 0 && (
                    <>
                      <ArticleDivider color={color} />
                      <section id="references">
                        <SectionHeading icon={Link2} color={color}>
                          {t('common.references', locale)}
                        </SectionHeading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {content.references.map((ref, i) => (
                            <a
                              key={i}
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all hover:shadow-sm border group"
                              style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
                            >
                              <ExternalLink className="h-4 w-4 flex-shrink-0 transition-colors group-hover:text-[var(--color-primary)]" style={{ color: 'var(--text-tertiary)' }} />
                              <span className="truncate">{ref.title}</span>
                            </a>
                          ))}
                        </div>
                      </section>
                    </>
                  )}
                </div>

                {/* Quiz */}
                {content.quiz.length > 0 && (
                  <div
                    id="quiz"
                    className="px-8 sm:px-14 py-10 border-t"
                    style={{ background: `${color}04`, borderColor: 'var(--border-primary)' }}
                  >
                    <SectionHeading icon={HelpCircle} color={color}>
                      {t('common.quiz', locale)}
                    </SectionHeading>
                    <MiniQuiz questions={content.quiz} locale={locale} lessonSlug={slug} color={color} />
                  </div>
                )}
              </motion.article>
            ) : (
              <motion.div
                className="rounded-2xl p-16 border text-center shadow-sm"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <BookOpen className="h-14 w-14 mx-auto mb-5" style={{ color: 'var(--text-tertiary)' }} />
                <p className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {locale === 'en' ? 'Content Coming Soon' : 'المحتوى قادم قريبا'}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'en'
                    ? 'The full content for this lesson is being prepared.'
                    : 'يتم تحضير المحتوى الكامل لهذا الدرس.'}
                </p>
              </motion.div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <motion.aside
            className="lg:w-[280px] xl:w-[300px] flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <div className="lg:sticky lg:top-20 space-y-4">

              {/* ── Unified Sidebar Card ── */}
              <div
                className="rounded-2xl border shadow-sm overflow-hidden"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                {/* Progress header */}
                <div className="px-5 py-4" style={{ background: `linear-gradient(135deg, ${color}12, ${color}06)`, borderBottom: `1px solid ${color}20` }}>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <svg width="44" height="44" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="18" fill="none" stroke={`${color}20`} strokeWidth="3" />
                        <circle
                          cx="22" cy="22" r="18"
                          fill="none"
                          stroke={color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={`${((currentIndex + (isCompleted ? 1 : 0)) / totalLessons) * 113} 113`}
                          transform="rotate(-90 22 22)"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold" style={{ color }}>
                        {currentIndex + 1}/{totalLessons}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate" style={{ color: 'var(--text-primary)' }}>
                        {categoryLabel[locale] || lesson.category}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                        {locale === 'en'
                          ? `Lesson ${currentIndex + 1} of ${totalLessons}`
                          : `الدرس ${currentIndex + 1} من ${totalLessons}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0" style={{ marginInlineStart: 'auto' }}>
                      <Clock className="h-3.5 w-3.5" style={{ color: 'var(--text-tertiary)' }} />
                      <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
                        {lesson.estimatedMinutes} {locale === 'en' ? 'min' : 'د'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table of Contents */}
                {content && (
                  <div className="px-4 py-4" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 px-1" style={{ color: 'var(--text-tertiary)' }}>
                      {locale === 'en' ? 'On This Page' : 'في هذه الصفحة'}
                    </h4>
                    <nav className="relative">
                      <div
                        className="absolute top-0 bottom-0 w-[2px] rounded-full"
                        style={{
                          [direction === 'rtl' ? 'right' : 'left']: 6,
                          background: `${color}15`,
                        }}
                      />
                      <div className="space-y-0">
                        {tocSections.map((sec) => {
                          const Icon = sec.icon;
                          const isActive = activeSection === sec.id;
                          return (
                            <a
                              key={sec.id}
                              href={`#${sec.id}`}
                              className="group relative flex items-center gap-3 py-[7px] transition-all"
                              style={{
                                paddingInlineStart: 18,
                                color: isActive ? color : 'var(--text-secondary)',
                              }}
                            >
                              <div
                                className="absolute top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full transition-all"
                                style={{
                                  [direction === 'rtl' ? 'right' : 'left']: 3,
                                  background: isActive ? color : 'transparent',
                                  border: isActive ? `2px solid ${color}` : `2px solid ${color}30`,
                                  boxShadow: isActive ? `0 0 6px ${color}40` : 'none',
                                }}
                              />
                              <Icon
                                className="h-[15px] w-[15px] flex-shrink-0 transition-colors"
                                style={{ color: isActive ? color : `${color}50` }}
                              />
                              <span
                                className="text-[13px] transition-all"
                                style={{ fontWeight: isActive ? 600 : 400 }}
                              >
                                {sec.label}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </nav>
                  </div>
                )}

                {/* Learning Objectives */}
                <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
                    <Target className="h-3.5 w-3.5" style={{ color }} />
                    {t('common.objectives', locale)}
                  </h4>
                  <ul className="space-y-2">
                    {lesson.objectives[locale].map((objective, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div
                          className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
                          style={{
                            background: isCompleted ? `${color}15` : 'var(--bg-secondary)',
                            border: `1.5px solid ${isCompleted ? color : 'var(--border-secondary)'}`,
                          }}
                        >
                          {isCompleted && <CheckCircle className="h-3 w-3" style={{ color }} />}
                        </div>
                        <span className="text-[13px] leading-[1.5]" style={{ color: 'var(--text-primary)' }}>
                          {objective}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prerequisites */}
                {prerequisiteLessons.length > 0 && (
                  <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2.5 flex items-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
                      <BookOpen className="h-3.5 w-3.5" style={{ color }} />
                      {t('common.prerequisites', locale)}
                    </h4>
                    <div className="space-y-1">
                      {prerequisiteLessons.map((prereq) => {
                        const prereqDone = isLessonComplete(prereq.slug);
                        return (
                          <Link
                            key={prereq.slug}
                            href={`/lessons/${prereq.slug}`}
                            className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[13px] transition-all hover:bg-[var(--bg-secondary)]"
                            style={{ color: prereqDone ? 'var(--text-tertiary)' : 'var(--text-secondary)' }}
                          >
                            {prereqDone ? (
                              <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: '#10b981' }} />
                            ) : (
                              <Circle className="h-4 w-4 flex-shrink-0" style={{ color: `${color}50` }} />
                            )}
                            <span style={{ textDecoration: prereqDone ? 'line-through' : 'none' }}>
                              {prereq.title[locale]}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Complete Button */}
                <div className="px-5 py-4">
                  <button
                    onClick={() => completeLesson(lesson.slug)}
                    disabled={isCompleted}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all"
                    style={{
                      background: isCompleted ? `#10b98112` : `linear-gradient(135deg, ${color}, ${color}cc)`,
                      color: isCompleted ? '#10b981' : '#ffffff',
                      border: `1.5px solid ${isCompleted ? '#10b98130' : color}`,
                      cursor: isCompleted ? 'default' : 'pointer',
                      boxShadow: isCompleted ? 'none' : `0 2px 8px ${color}30`,
                    }}
                  >
                    {isCompleted ? (
                      <><CheckCircle className="h-4 w-4" />{locale === 'en' ? 'Lesson Completed' : 'الدرس مكتمل'}</>
                    ) : (
                      <><Award className="h-4 w-4" />{locale === 'en' ? 'Mark as Complete' : 'تحديد كمكتمل'}</>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </motion.aside>

        </div>

        {/* ══════ PREV / NEXT NAVIGATION ══════ */}
        {(prevLesson || nextLesson) && (
          <div className="mt-10 grid gap-4" style={{ gridTemplateColumns: prevLesson && nextLesson ? '1fr 1fr' : '1fr' }}>
            {prevLesson && (
              <Link
                href={`/lessons/${prevLesson.slug}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg hover:border-[var(--border-secondary)]"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}
                >
                  {direction === 'rtl' ? (
                    <ArrowRight className="h-5 w-5" style={{ color: 'var(--text-tertiary)' }} />
                  ) : (
                    <ArrowLeft className="h-5 w-5" style={{ color: 'var(--text-tertiary)' }} />
                  )}
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-widest font-bold block mb-1" style={{ color: 'var(--text-tertiary)' }}>
                    {t('common.previous', locale)}
                  </span>
                  <span className="text-sm font-semibold block truncate" style={{ color: 'var(--text-primary)' }}>
                    {prevLesson.title[locale]}
                  </span>
                </div>
              </Link>
            )}
            {nextLesson && (
              <Link
                href={`/lessons/${nextLesson.slug}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${color}06, ${color}03)`,
                  borderColor: `${color}25`,
                  justifyContent: prevLesson ? 'flex-end' : 'flex-start',
                  textAlign: prevLesson ? 'end' : 'start',
                }}
              >
                <div className="min-w-0" style={{ order: prevLesson ? 0 : 1 }}>
                  <span className="text-xs uppercase tracking-widest font-bold block mb-1" style={{ color }}>
                    {t('common.next', locale)}
                  </span>
                  <span className="text-sm font-semibold block truncate" style={{ color: 'var(--text-primary)' }}>
                    {nextLesson.title[locale]}
                  </span>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${color}12`, border: `1px solid ${color}25`, order: prevLesson ? 1 : 0 }}
                >
                  {direction === 'rtl' ? (
                    <ArrowLeft className="h-5 w-5" style={{ color }} />
                  ) : (
                    <ArrowRight className="h-5 w-5" style={{ color }} />
                  )}
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Category helpers (lightweight inline maps, no big data import) ─── */

const ALL_CATEGORY_LABELS: Record<string, Record<string, string>> = {
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

const ALL_CATEGORY_COLORS: Record<string, string> = {
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

function getCategoryColor(category: string): string {
  return ALL_CATEGORY_COLORS[category] || '#6366f1';
}

function getCategoryLabel(category: string, locale: string): string {
  return ALL_CATEGORY_LABELS[category]?.[locale] || category;
}

/* ─── Section Heading with Icon & Accent ─── */

function SectionHeading({
  icon: Icon,
  color,
  children,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-1 h-7 rounded-full"
        style={{ background: color }}
      />
      <Icon className="h-5 w-5" style={{ color }} />
      <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {children}
      </h2>
    </div>
  );
}

/* ─── Divider ─── */

function ArticleDivider({ color }: { color: string }) {
  return (
    <div className="my-10 flex items-center gap-3">
      <div className="flex-1 h-px" style={{ background: 'var(--border-primary)' }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.4 }} />
      <div className="flex-1 h-px" style={{ background: 'var(--border-primary)' }} />
    </div>
  );
}

/* ─── Diagram Figure ─── */

function DiagramInline({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-10 -mx-2 sm:mx-0">
      <div
        className="rounded-xl p-5 overflow-hidden border"
        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}
      >
        {children}
      </div>
      <figcaption className="flex items-center justify-center gap-2 text-sm mt-3 font-medium" style={{ color: 'var(--text-tertiary)' }}>
        <div className="w-3 h-0.5 rounded-full" style={{ background: color }} />
        {title}
        <div className="w-3 h-0.5 rounded-full" style={{ background: color }} />
      </figcaption>
    </figure>
  );
}

/* ─── Mini Quiz ─── */

interface QuizQuestionData {
  id: string;
  question: Record<string, string>;
  options: Record<string, string[]>;
  correctAnswer: number;
  explanation: Record<string, string>;
}

function MiniQuiz({
  questions,
  locale,
  lessonSlug,
  color,
}: {
  questions: QuizQuestionData[];
  locale: string;
  lessonSlug: string;
  color: string;
}) {
  const { setQuizScore } = useProgress();
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
    const score = Math.round((correct / questions.length) * 100);
    setQuizScore(`lesson-${lessonSlug}`, score);
  };

  const allAnswered = questions.every((q) => answers[q.id] !== undefined && answers[q.id] !== null);
  const correctCount = submitted ? questions.filter((q) => answers[q.id] === q.correctAnswer).length : 0;

  return (
    <div className="space-y-6">
      {questions.map((question, qIndex) => {
        const selectedAnswer = answers[question.id];
        const isCorrect = submitted && selectedAnswer === question.correctAnswer;
        const isWrong = submitted && selectedAnswer !== null && selectedAnswer !== question.correctAnswer;

        return (
          <div
            key={question.id}
            className="rounded-xl p-5 border transition-all"
            style={{
              background: 'var(--bg-card)',
              borderColor: submitted
                ? isCorrect ? 'rgba(16, 185, 129, 0.4)' : isWrong ? 'rgba(239, 68, 68, 0.4)' : 'var(--border-primary)'
                : 'var(--border-primary)',
            }}
          >
            <p className="font-semibold mb-4 text-[0.95rem]" style={{ color: 'var(--text-primary)' }}>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg me-2 text-xs font-bold" style={{ background: `${color}15`, color }}>
                {qIndex + 1}
              </span>
              {question.question[locale]}
            </p>

            <div className="space-y-2">
              {question.options[locale].map((option, oIndex) => {
                const isSelected = selectedAnswer === oIndex;
                const isCorrectOption = oIndex === question.correctAnswer;
                let bg = 'transparent';
                let border = 'var(--border-primary)';
                let textColor = 'var(--text-secondary)';

                if (submitted && isCorrectOption) {
                  bg = 'rgba(16, 185, 129, 0.08)';
                  border = 'rgba(16, 185, 129, 0.5)';
                  textColor = 'var(--text-primary)';
                } else if (submitted && isSelected && !isCorrectOption) {
                  bg = 'rgba(239, 68, 68, 0.08)';
                  border = 'rgba(239, 68, 68, 0.5)';
                  textColor = 'var(--text-primary)';
                } else if (!submitted && isSelected) {
                  bg = `${color}08`;
                  border = color;
                  textColor = 'var(--text-primary)';
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelect(question.id, oIndex)}
                    className="w-full text-start px-4 py-3 rounded-xl border text-sm transition-all flex items-center gap-3"
                    style={{ borderColor: border, background: bg, color: textColor, cursor: submitted ? 'default' : 'pointer' }}
                    disabled={submitted}
                  >
                    <span
                      className="w-7 h-7 rounded-lg border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all"
                      style={{
                        borderColor: isSelected ? (submitted ? (isCorrectOption ? '#10b981' : '#ef4444') : color) : 'var(--border-secondary)',
                        background: isSelected ? (submitted ? (isCorrectOption ? '#10b981' : '#ef4444') : color) : 'transparent',
                        color: isSelected ? '#fff' : 'var(--text-tertiary)',
                      }}
                    >
                      {String.fromCharCode(65 + oIndex)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div
                className="mt-4 p-4 rounded-xl text-sm leading-relaxed"
                style={{
                  background: isCorrect ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span className="font-bold" style={{ color: isCorrect ? '#10b981' : '#ef4444' }}>
                  {isCorrect ? (locale === 'en' ? 'Correct!' : 'صحيح!') : (locale === 'en' ? 'Incorrect' : 'غير صحيح')}{' '}
                </span>
                {question.explanation[locale]}
              </div>
            )}
          </div>
        );
      })}

      <div className="text-center pt-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-sm"
            style={{
              background: allAnswered ? `linear-gradient(135deg, ${color}, ${color}cc)` : 'var(--bg-tertiary)',
              color: allAnswered ? '#fff' : 'var(--text-tertiary)',
              cursor: allAnswered ? 'pointer' : 'not-allowed',
            }}
          >
            {locale === 'en' ? 'Submit Answers' : 'إرسال الإجابات'}
          </button>
        ) : (
          <div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl text-sm font-bold"
            style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-primary)' }}
          >
            <Award className="h-5 w-5" style={{ color: correctCount === questions.length ? '#10b981' : color }} />
            {locale === 'en' ? 'Score' : 'النتيجة'}: {correctCount}/{questions.length} ({Math.round((correctCount / questions.length) * 100)}%)
          </div>
        )}
      </div>
    </div>
  );
}
