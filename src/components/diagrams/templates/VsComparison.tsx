'use client';

import { motion } from 'framer-motion';
import type { VsData } from './types';

export default function VsComparison({ data, locale }: { data: VsData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { left, right } = data;
  const LeftIcon = left.icon;
  const RightIcon = right.icon;

  const Side = ({ side, delay }: { side: typeof left; delay: number }) => {
    const Icon = side.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        style={{
          flex: 1,
          borderRadius: 14,
          border: `1px solid ${side.color}30`,
          background: `${side.color}05`,
          overflow: 'hidden',
        }}
      >
        <div style={{ height: 3, background: side.color }} />
        <div style={{ padding: '14px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: `${side.color}15`,
                border: `2px solid ${side.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon size={16} color={side.color} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: side.color }}>
              {isAr ? side.title.ar : side.title.en}
            </span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {(isAr ? side.features.ar : side.features.en).map((f, i) => (
              <li key={i} style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: 6, marginTop: 5 }}>
                <span style={{ width: 5, height: 5, borderRadius: 3, background: side.color, flexShrink: 0, marginTop: 4 }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
        <Side side={left} delay={0.1} />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '2px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 800,
              color: 'var(--text-tertiary)',
            }}
          >
            VS
          </div>
        </motion.div>
        <Side side={right} delay={0.2} />
      </div>
    </div>
  );
}
