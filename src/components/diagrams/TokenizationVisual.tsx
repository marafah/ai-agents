'use client';

import { motion } from 'framer-motion';
import { Type } from 'lucide-react';

const tokensEn = ['The', ' cat', ' sat', ' on', ' the', ' mat'];
const tokensAr = ['القطة', ' جلست', ' على', ' السجادة'];
const idsEn = [464, 3797, 3492, 319, 279, 2800];
const idsAr = [12543, 8721, 5503, 19834];

const pillColors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#f43f5e', '#06b6d4'];

export default function TokenizationVisual({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const tokens = isAr ? tokensAr : tokensEn;
  const ids = isAr ? idsAr : idsEn;
  const sentence = isAr ? 'القطة جلست على السجادة' : 'The cat sat on the mat';

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        width: '100%',
        padding: '16px 24px',
        fontFamily: 'sans-serif',
        backgroundColor: 'var(--bg-card)',
        borderRadius: 14,
        border: '1px solid var(--border-primary)',
      }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          color: 'var(--text-primary)',
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        {isAr ? 'كيف يتم تحويل النص إلى رموز' : 'How Text Becomes Tokens'}
      </motion.h3>

      {/* Row 1: Full sentence */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 8,
          justifyContent: 'center',
        }}
      >
        <Type size={16} color="#06b6d4" />
        <span style={{ color: 'var(--text-secondary)', fontSize: 12, fontWeight: 600 }}>
          {isAr ? 'النص:' : 'Text:'}
        </span>
        <span
          style={{
            color: 'var(--text-primary)',
            fontSize: 15,
            fontWeight: 600,
            padding: '6px 14px',
            borderRadius: 8,
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)',
          }}
        >
          {sentence}
        </span>
      </motion.div>

      {/* Arrow */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0' }}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          style={{
            width: 2,
            height: 18,
            backgroundColor: 'var(--border-primary)',
            transformOrigin: 'top',
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '6px solid var(--border-primary)',
          }}
        />
      </div>

      {/* Row 2: Tokens */}
      <div style={{ marginBottom: 4 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 6,
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'var(--text-secondary)', fontSize: 12, fontWeight: 600 }}>
            {isAr ? 'الرموز:' : 'Tokens:'}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'center',
          }}
        >
          {tokens.map((token, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.3, type: 'spring', stiffness: 300 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span
                style={{
                  padding: '5px 12px',
                  borderRadius: 20,
                  backgroundColor: `${pillColors[i % pillColors.length]}22`,
                  border: `1.5px solid ${pillColors[i % pillColors.length]}`,
                  color: pillColors[i % pillColors.length],
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: 'monospace',
                  whiteSpace: 'nowrap',
                }}
              >
                {token}
              </span>
              {/* Row 3: Token IDs */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.12 }}
                style={{
                  fontSize: 11,
                  color: 'var(--text-secondary)',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                }}
              >
                {ids[i]}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Label for IDs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          textAlign: 'center',
          marginTop: 8,
          fontSize: 11,
          color: 'var(--text-secondary)',
        }}
      >
        {isAr ? '↑ معرّفات الرموز' : '↑ Token IDs'}
      </motion.div>
    </div>
  );
}
