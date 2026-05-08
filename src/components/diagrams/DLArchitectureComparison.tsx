'use client';

import { motion } from 'framer-motion';
import { Image, RefreshCw, Zap } from 'lucide-react';

const architectures = [
  {
    icon: Image,
    color: '#3b82f6',
    nameEn: 'CNN',
    nameAr: 'CNN',
    fullNameEn: 'Convolutional Neural Network',
    fullNameAr: 'شبكة عصبية التفافية',
    bestForEn: 'Images & Video',
    bestForAr: 'الصور والفيديو',
    keyEn: 'Convolutional filters detect visual patterns',
    keyAr: 'مرشحات التفاف تكشف الأنماط البصرية',
  },
  {
    icon: RefreshCw,
    color: '#10b981',
    nameEn: 'RNN',
    nameAr: 'RNN',
    fullNameEn: 'Recurrent Neural Network',
    fullNameAr: 'شبكة عصبية تكرارية',
    bestForEn: 'Sequences & Time Series',
    bestForAr: 'التسلسلات والسلاسل الزمنية',
    keyEn: 'Hidden state carries information forward',
    keyAr: 'الحالة المخفية تنقل المعلومات للأمام',
  },
  {
    icon: Zap,
    color: '#8b5cf6',
    nameEn: 'Transformer',
    nameAr: 'Transformer',
    fullNameEn: 'Transformer Architecture',
    fullNameAr: 'هندسة المحولات',
    bestForEn: 'Language & Everything',
    bestForAr: 'اللغة وكل شيء',
    keyEn: 'Self-attention processes all tokens in parallel',
    keyAr: 'الانتباه الذاتي يعالج جميع الرموز بالتوازي',
  },
];

export default function DLArchitectureComparison({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {architectures.map((arch, i) => {
          const Icon = arch.icon;
          return (
            <motion.div
              key={arch.nameEn}
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
              <div style={{ height: 3, background: `linear-gradient(90deg, ${arch.color}, ${arch.color}60)` }} />

              <div style={{ padding: '16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${arch.color}12`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color={arch.color} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: arch.color, letterSpacing: '0.02em' }}>
                      {isAr ? arch.nameAr : arch.nameEn}
                    </h3>
                    <p style={{ margin: 0, fontSize: 9, color: 'var(--text-tertiary)', fontWeight: 500 }}>
                      {isAr ? arch.fullNameAr : arch.fullNameEn}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: `${arch.color}08`,
                    border: `1px solid ${arch.color}15`,
                    marginBottom: 10,
                  }}
                >
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isAr ? 'الأفضل لـ' : 'Best for'}
                  </span>
                  <p style={{ margin: '2px 0 0', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>
                    {isAr ? arch.bestForAr : arch.bestForEn}
                  </p>
                </div>

                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {isAr ? arch.keyAr : arch.keyEn}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
