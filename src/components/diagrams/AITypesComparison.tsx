'use client';

import { motion } from 'framer-motion';
import { Target, Brain, Sparkles } from 'lucide-react';

const types = [
  {
    icon: Target,
    color: '#10b981',
    titleEn: 'Narrow AI (ANI)',
    titleAr: 'ذكاء اصطناعي ضيق',
    descEn: 'Specialized in one task',
    descAr: 'متخصص في مهمة واحدة',
    examplesEn: ['Siri', 'Chess engines', 'Spam filters'],
    examplesAr: ['سيري', 'محركات الشطرنج', 'فلاتر البريد'],
    statusEn: 'Exists Today',
    statusAr: 'موجود اليوم',
  },
  {
    icon: Brain,
    color: '#3b82f6',
    titleEn: 'General AI (AGI)',
    titleAr: 'ذكاء اصطناعي عام',
    descEn: 'Human-level reasoning',
    descAr: 'استدلال بمستوى بشري',
    examplesEn: ['Hypothetical', 'Any human task'],
    examplesAr: ['افتراضي', 'أي مهمة بشرية'],
    statusEn: 'Theoretical',
    statusAr: 'نظري',
  },
  {
    icon: Sparkles,
    color: '#8b5cf6',
    titleEn: 'Super AI (ASI)',
    titleAr: 'ذكاء اصطناعي خارق',
    descEn: 'Surpasses all humans',
    descAr: 'يتفوق على جميع البشر',
    examplesEn: ['Hypothetical', 'Beyond imagination'],
    examplesAr: ['افتراضي', 'يتجاوز الخيال'],
    statusEn: 'Hypothetical',
    statusAr: 'افتراضي',
  },
];

export default function AITypesComparison({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {types.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.titleEn}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid var(--border-primary)',
                position: 'relative',
              }}
            >
              <div style={{ height: 3, background: `linear-gradient(90deg, ${t.color}, ${t.color}60)` }} />

              <div style={{ padding: '16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${t.color}12`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={t.color} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {isAr ? t.titleAr : t.titleEn}
                    </h3>
                    <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: t.color }}>
                      {isAr ? t.descAr : t.descEn}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: 10 }}>
                  {(isAr ? t.examplesAr : t.examplesEn).map((ex) => (
                    <div key={ex} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                      <div style={{ width: 4, height: 4, borderRadius: 2, background: t.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{ex}</span>
                    </div>
                  ))}
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: 20,
                    fontSize: 10,
                    fontWeight: 700,
                    color: t.color,
                    background: `${t.color}12`,
                    border: `1px solid ${t.color}25`,
                    letterSpacing: '0.02em',
                  }}
                >
                  {isAr ? t.statusAr : t.statusEn}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
