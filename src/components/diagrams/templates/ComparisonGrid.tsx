'use client';

import { motion } from 'framer-motion';
import type { ComparisonData } from './types';

export default function ComparisonGrid({ data, locale }: { data: ComparisonData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { items } = data;
  const cols = Math.min(items.length, 4);

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 12 }}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                borderRadius: 14,
                border: `1px solid ${item.color}30`,
                background: 'var(--bg-card)',
                overflow: 'hidden',
              }}
            >
              <div style={{ height: 3, background: item.color }} />
              <div style={{ padding: '14px 12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: `${item.color}12`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={16} color={item.color} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>
                    {isAr ? item.title.ar : item.title.en}
                  </span>
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: item.features ? 8 : 0 }}>
                  {isAr ? item.description.ar : item.description.en}
                </p>
                {item.features && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {(isAr ? item.features.ar : item.features.en).map((f, j) => (
                      <li key={j} style={{ fontSize: 10, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
                        <span style={{ width: 4, height: 4, borderRadius: 2, background: item.color, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
