'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Circle } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { learningPaths } from '@/data/paths';
import { lessons } from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import ProgressBar from '@/components/ui/ProgressBar';

export default function PathDetailClient({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const { completedLessons } = useProgress();

  const path = learningPaths.find((p) => p.slug === slug);
  if (!path) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {locale === 'en' ? 'Path not found' : 'المسار غير موجود'}
        </h1>
      </div>
    );
  }

  const pathLessons = path.lessonSlugs
    .map((slug) => lessons.find((l) => l.slug === slug))
    .filter(Boolean);

  const completed = path.lessonSlugs.filter((s) => completedLessons.includes(s)).length;
  const progress = pathLessons.length > 0 ? (completed / pathLessons.length) * 100 : 0;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/paths"
        className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:text-[var(--color-primary)]"
        style={{ color: 'var(--text-secondary)' }}
      >
        <ArrowLeft className="h-4 w-4" />
        {t('common.back', locale)}
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {path.title[locale]}
          </h1>
          <DifficultyBadge difficulty={path.difficulty} />
        </div>
        <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
          {path.description[locale]}
        </p>
        <ProgressBar value={progress} label={`${completed}/${pathLessons.length} ${t('common.lessons', locale)}`} />
      </div>

      <div className="space-y-3">
        {pathLessons.map((lesson, index) => {
          if (!lesson) return null;
          const isCompleted = completedLessons.includes(lesson.slug);

          return (
            <motion.div
              key={lesson.slug}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/lessons/${lesson.slug}`}
                className="flex items-center gap-4 rounded-xl p-4 border transition-colors hover:bg-[var(--bg-secondary)]"
                style={{ borderColor: 'var(--border-primary)' }}
              >
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6" style={{ color: 'var(--text-tertiary)' }} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                      {index + 1}.
                    </span>
                    <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {lesson.title[locale]}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {lesson.description[locale]}
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="flex items-center gap-1 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    <Clock className="h-4 w-4" />
                    {lesson.estimatedMinutes} {t('common.minutes', locale)}
                  </span>
                  <ArrowRight className="h-4 w-4" style={{ color: 'var(--text-tertiary)' }} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
