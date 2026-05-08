'use client';

import { motion } from 'framer-motion';
import type { FlowData } from './types';

export default function FlowDiagram({ data, locale }: { data: FlowData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { steps } = data;
  const cols = Math.min(steps.length, 8);

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: '8%',
            right: '8%',
            height: 2,
            background: `linear-gradient(90deg, ${steps.map((s) => s.color).join(', ')})`,
            borderRadius: 1,
            opacity: 0.3,
          }}
        />
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 6,
                }}
              >
                <Icon size={18} color={step.color} strokeWidth={2} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: step.color, textAlign: 'center', lineHeight: 1.2 }}>
                {isAr ? step.label.ar : step.label.en}
              </span>
              {step.sublabel && (
                <span style={{ fontSize: 9, color: 'var(--text-tertiary)', textAlign: 'center', lineHeight: 1.3, marginTop: 2 }}>
                  {isAr ? step.sublabel.ar : step.sublabel.en}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
