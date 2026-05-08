'use client';

import type { Difficulty } from '@/types';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

const colors: Record<Difficulty, { bg: string; text: string; border: string }> = {
  beginner: { bg: 'rgba(16, 185, 129, 0.1)', text: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
  intermediate: { bg: 'rgba(59, 130, 246, 0.1)', text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
  advanced: { bg: 'rgba(168, 85, 247, 0.1)', text: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
};

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const { locale } = useLocale();
  const color = colors[difficulty];

  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
      style={{
        background: color.bg,
        color: color.text,
        borderColor: color.border,
      }}
    >
      {t(`common.${difficulty}`, locale)}
    </span>
  );
}
