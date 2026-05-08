'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Layers, Code, GitBranch, Database,
  Puzzle, Users, Cloud, Server, Briefcase, Brain, FlaskConical,
  Building2, MessageSquare, Cpu, Network, GitMerge, Shield,
  Rocket, UsersRound, Flame,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { learningPaths } from '@/data/paths';
import DifficultyBadge from '@/components/ui/DifficultyBadge';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Sparkles, Layers, Code, GitBranch, Database,
  Puzzle, Users, Cloud, Server, Briefcase,
  Brain, FlaskConical, Building2, MessageSquare,
  Cpu, Network, GitMerge, Shield, Rocket,
  UsersRound, Flame,
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
  lime: '#84cc16',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  red: '#ef4444',
  slate: '#64748b',
  purple: '#a855f7',
};

export default function PathsPreview() {
  const { locale } = useLocale();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('home.paths.title', locale)}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('home.paths.subtitle', locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.slice(0, 3).map((path, index) => {
            const Icon = iconMap[path.icon] || Sparkles;
            const color = colorMap[path.color] || '#6366f1';
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/paths/${path.slug}`}
                  className="block rounded-xl p-6 border card-hover h-full"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${color}18` }}
                    >
                      <Icon className="h-6 w-6" style={{ color }} />
                    </div>
                    <DifficultyBadge difficulty={path.difficulty} />
                  </div>

                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {path.title[locale]}
                  </h3>

                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {path.description[locale]}
                  </p>

                  <div className="flex items-center justify-between text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    <span>
                      {path.lessonSlugs.length} {t('common.lessons', locale)} &middot; {path.estimatedHours} {t('common.hours', locale)}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/paths"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-colors hover:bg-[var(--bg-tertiary)]"
            style={{ borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}
          >
            {locale === 'en' ? 'View All Paths' : 'عرض جميع المسارات'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
