'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Layers, Code, GitBranch, Database,
  Puzzle, Users, Cloud, Server, Briefcase, Clock, BookOpen,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { learningPaths } from '@/data/paths';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import ProgressBar from '@/components/ui/ProgressBar';
import { useProgress } from '@/hooks/useProgress';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Layers, Code, GitBranch, Database,
  Puzzle, Users, Cloud, Server, Briefcase,
};

const colorMap: Record<string, string> = {
  emerald: '#10b981',
  blue: '#3b82f6',
  cyan: '#06b6d4',
  violet: '#8b5cf6',
  amber: '#f59e0b',
  rose: '#f43f5e',
  teal: '#14b8a6',
  sky: '#0ea5e9',
  orange: '#f97316',
  indigo: '#6366f1',
};

export default function PathsPage() {
  const { locale } = useLocale();
  const { completedLessons } = useProgress();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {t('paths.title', locale)}
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {t('paths.subtitle', locale)}
        </p>
      </div>

      <div className="space-y-6">
        {learningPaths.map((path, index) => {
          const Icon = iconMap[path.icon] || Sparkles;
          const color = colorMap[path.color] || '#6366f1';
          const completed = path.lessonSlugs.filter((s) => completedLessons.includes(s)).length;
          const progress = path.lessonSlugs.length > 0 ? (completed / path.lessonSlugs.length) * 100 : 0;

          return (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/paths/${path.slug}`}
                className="block rounded-2xl p-6 border card-hover"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: color }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {path.title[locale]}
                      </h2>
                      <DifficultyBadge difficulty={path.difficulty} />
                    </div>

                    <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {path.description[locale]}
                    </p>

                    <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {path.lessonSlugs.length} {t('common.lessons', locale)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {path.estimatedHours} {t('common.hours', locale)}
                      </span>
                    </div>

                    {progress > 0 && (
                      <div className="mt-3">
                        <ProgressBar
                          value={progress}
                          size="sm"
                          label={`${completed}/${path.lessonSlugs.length}`}
                        />
                      </div>
                    )}
                  </div>

                  <ArrowRight className="h-5 w-5 flex-shrink-0 hidden md:block" style={{ color: 'var(--text-tertiary)' }} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
