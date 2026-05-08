'use client';

import { motion } from 'framer-motion';
import { Type, Hash, Sparkles, Network, BarChart3 } from 'lucide-react';

const layers = [
  {
    en: 'Output Probabilities',
    ar: 'احتمالات الإخراج',
    color: '#10b981',
    icon: BarChart3,
    key: false,
  },
  {
    en: 'Feed-Forward Network',
    ar: 'شبكة التغذية الأمامية',
    color: '#f59e0b',
    icon: Network,
    key: false,
  },
  {
    en: 'Self-Attention',
    ar: 'الانتباه الذاتي',
    color: '#8b5cf6',
    icon: Sparkles,
    key: true,
  },
  {
    en: 'Token Embeddings',
    ar: 'تضمينات الرموز',
    color: '#3b82f6',
    icon: Hash,
    key: false,
  },
  {
    en: 'Input Text → Tokenizer',
    ar: 'النص المدخل → المحلل',
    color: '#06b6d4',
    icon: Type,
    key: false,
  },
];

export default function TransformerDiagram({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const reversed = [...layers];

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        width: '100%',
        maxWidth: 520,
        margin: '0 auto',
        padding: 24,
        minHeight: 360,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        fontFamily: 'sans-serif',
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          color: 'var(--text-primary)',
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        {isAr ? 'بنية المحول (Transformer)' : 'Transformer Architecture'}
      </motion.h3>

      {reversed.map((layer, i) => {
        const Icon = layer.icon;
        const isKey = layer.key;
        return (
          <div key={layer.en} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {i > 0 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: (reversed.length - i) * 0.15, duration: 0.3 }}
                style={{ width: 2, height: 20, backgroundColor: 'var(--border-primary)', transformOrigin: 'bottom' }}
              />
            )}
            {i > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (reversed.length - i) * 0.15 + 0.2 }}
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderBottom: `8px solid var(--border-primary)`,
                  marginBottom: 2,
                  transform: 'rotate(180deg)',
                }}
              />
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (reversed.length - 1 - i) * 0.15, duration: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                maxWidth: isKey ? 460 : 400,
                padding: isKey ? '14px 18px' : '10px 16px',
                borderRadius: 12,
                backgroundColor: `${layer.color}18`,
                border: `2px solid ${layer.color}`,
                boxShadow: isKey ? `0 0 18px ${layer.color}55, 0 0 6px ${layer.color}33` : 'none',
                position: 'relative',
              }}
            >
              {isKey && (
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    inset: -3,
                    borderRadius: 14,
                    border: `2px solid ${layer.color}`,
                    pointerEvents: 'none',
                  }}
                />
              )}
              <div
                style={{
                  width: isKey ? 36 : 30,
                  height: isKey ? 36 : 30,
                  borderRadius: 8,
                  backgroundColor: layer.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={isKey ? 20 : 16} color="#fff" />
              </div>
              <span
                style={{
                  color: 'var(--text-primary)',
                  fontSize: isKey ? 15 : 13,
                  fontWeight: isKey ? 700 : 600,
                }}
              >
                {isAr ? layer.ar : layer.en}
              </span>
              {isKey && (
                <span
                  style={{
                    marginInlineStart: 'auto',
                    fontSize: 10,
                    color: layer.color,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  {isAr ? 'ابتكار رئيسي' : 'KEY INNOVATION'}
                </span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
