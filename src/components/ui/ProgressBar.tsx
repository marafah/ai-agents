'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  size = 'md',
}: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between mb-1">
          {label && (
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div
        className={`w-full rounded-full overflow-hidden ${heights[size]}`}
        style={{ background: 'var(--bg-tertiary)' }}
      >
        <motion.div
          className={`${heights[size]} rounded-full gradient-bg`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
