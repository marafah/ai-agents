'use client';

import { motion } from 'framer-motion';
import { Tag, Layers, Trophy, ArrowRight, ArrowLeft } from 'lucide-react';

const types = [
  {
    icon: Tag,
    color: '#3b82f6',
    titleEn: 'Supervised Learning',
    titleAr: 'التعلم الخاضع للإشراف',
    flowEn: ['Labeled Data', 'Model', 'Predictions'],
    flowAr: ['بيانات موسومة', 'نموذج', 'تنبؤات'],
    exampleEn: 'Spam detection, Image classification',
    exampleAr: 'كشف البريد العشوائي، تصنيف الصور',
  },
  {
    icon: Layers,
    color: '#10b981',
    titleEn: 'Unsupervised Learning',
    titleAr: 'التعلم غير الخاضع للإشراف',
    flowEn: ['Raw Data', 'Model', 'Patterns'],
    flowAr: ['بيانات خام', 'نموذج', 'أنماط'],
    exampleEn: 'Customer segmentation, Anomaly detection',
    exampleAr: 'تقسيم العملاء، كشف الشذوذ',
  },
  {
    icon: Trophy,
    color: '#8b5cf6',
    titleEn: 'Reinforcement Learning',
    titleAr: 'التعلم المعزز',
    flowEn: ['Agent', 'Environment', 'Reward'],
    flowAr: ['وكيل', 'بيئة', 'مكافأة'],
    exampleEn: 'Game playing, Robotics',
    exampleAr: 'لعب الألعاب، الروبوتات',
  },
];

export default function MLTypesGrid({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const FlowArrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {types.map((t, i) => {
          const Icon = t.icon;
          const flow = isAr ? t.flowAr : t.flowEn;
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
              }}
            >
              <div style={{ height: 3, background: `linear-gradient(90deg, ${t.color}, ${t.color}80)` }} />
              <div style={{ padding: '16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
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
                  <h3 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {isAr ? t.titleAr : t.titleEn}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    padding: '8px 6px',
                    borderRadius: 8,
                    background: `${t.color}08`,
                    border: `1px solid ${t.color}15`,
                    marginBottom: 10,
                  }}
                >
                  {flow.map((step, si) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: t.color, whiteSpace: 'nowrap' }}>
                        {step}
                      </span>
                      {si < flow.length - 1 && <FlowArrow size={10} color={`${t.color}80`} strokeWidth={2.5} />}
                    </div>
                  ))}
                </div>

                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                  {isAr ? t.exampleAr : t.exampleEn}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
