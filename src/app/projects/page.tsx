'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ChevronDown,
  ChevronUp,
  Target,
  ListOrdered,
  Tag,
  Filter,
  Hammer,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { projects } from '@/data/projects';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import type { Difficulty } from '@/types';

const difficultyFilters: Array<{ key: 'all' | Difficulty; labelKey: string }> = [
  { key: 'all', labelKey: 'lessons.filter.all' },
  { key: 'beginner', labelKey: 'lessons.filter.beginner' },
  { key: 'intermediate', labelKey: 'lessons.filter.intermediate' },
  { key: 'advanced', labelKey: 'lessons.filter.advanced' },
];

export default function ProjectsPage() {
  const { locale, direction } = useLocale();
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | Difficulty>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects =
    difficultyFilter === 'all'
      ? projects
      : projects.filter((p) => p.difficulty === difficultyFilter);

  const toggleExpanded = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" dir={direction}>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('projects.title', locale)}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('projects.subtitle', locale)}
        </motion.p>
      </div>

      {/* Difficulty Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div
          className="inline-flex rounded-xl p-1 gap-1"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          {difficultyFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setDifficultyFilter(f.key)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: difficultyFilter === f.key ? 'var(--bg-card)' : 'transparent',
                color: difficultyFilter === f.key ? 'var(--text-primary)' : 'var(--text-tertiary)',
                boxShadow: difficultyFilter === f.key ? 'var(--shadow-sm)' : 'none',
              }}
            >
              {t(f.labelKey, locale)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredProjects.map((project, index) => {
          const isExpanded = expandedId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                borderColor: isExpanded ? 'var(--color-primary)' : 'var(--border-primary)',
                boxShadow: isExpanded ? '0 0 0 1px var(--color-primary)' : 'none',
              }}
            >
              {/* Card Header — always visible */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title[locale]}
                  </h3>
                  <DifficultyBadge difficulty={project.difficulty} />
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description[locale]}
                </p>

                {/* Meta + Technologies row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    <Clock className="h-4 w-4" />
                    {project.estimatedHours} {t('common.hours', locale)}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    <Hammer className="h-4 w-4" />
                    {project.steps[locale].length} {locale === 'ar' ? 'خطوات' : 'Steps'}
                  </span>
                  <div className="h-4 w-px mx-1" style={{ background: 'var(--border-primary)' }} />
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Tag className="h-3 w-3" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand / Collapse Toggle */}
                <button
                  onClick={() => toggleExpanded(project.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80"
                  style={{
                    background: isExpanded ? 'var(--color-primary)' : 'var(--bg-tertiary)',
                    color: isExpanded ? '#fff' : 'var(--color-primary)',
                  }}
                >
                  {isExpanded
                    ? locale === 'ar' ? 'إخفاء التفاصيل' : 'Hide Details'
                    : locale === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Expanded Detail Section */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 pt-4 border-t"
                      style={{ borderColor: 'var(--border-primary)' }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Objectives */}
                        <div>
                          <h4
                            className="flex items-center gap-2 text-sm font-semibold mb-3"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <Target className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                            {t('common.objectives', locale)}
                          </h4>
                          <ul className="space-y-2">
                            {project.objectives[locale].map((obj, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                              >
                                <span
                                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                                  style={{
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    color: 'var(--color-primary)',
                                  }}
                                >
                                  {i + 1}
                                </span>
                                {obj}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Steps */}
                        <div>
                          <h4
                            className="flex items-center gap-2 text-sm font-semibold mb-3"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <ListOrdered className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                            {locale === 'ar' ? 'خطوات التنفيذ' : 'Step-by-Step Instructions'}
                          </h4>
                          <ol className="space-y-3">
                            {project.steps[locale].map((step, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm">
                                <span
                                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                                  style={{
                                    background: 'var(--bg-tertiary)',
                                    color: 'var(--text-secondary)',
                                  }}
                                >
                                  {i + 1}
                                </span>
                                <span style={{ color: 'var(--text-secondary)' }}>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Filter className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--text-tertiary)' }} />
          <p className="text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? 'لا توجد مشاريع لهذا المستوى'
              : 'No projects found for this difficulty level'}
          </p>
        </motion.div>
      )}
    </div>
  );
}
