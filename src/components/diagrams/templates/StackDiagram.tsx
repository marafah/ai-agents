'use client';

import { motion } from 'framer-motion';
import type { StackData } from './types';

export default function StackDiagram({ data, locale }: { data: StackData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { layers } = data;

  return (
    <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          const isFirst = i === 0;
          const isLast = i === layers.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                borderRadius: isFirst ? '14px 14px 4px 4px' : isLast ? '4px 4px 14px 14px' : 4,
                background: `${layer.color}08`,
                border: `1px solid ${layer.color}25`,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: `${layer.color}15`,
                  border: `2px solid ${layer.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={16} color={layer.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: layer.color, lineHeight: 1.3 }}>
                  {isAr ? layer.label.ar : layer.label.en}
                </div>
                {layer.description && (
                  <div style={{ fontSize: 10, color: 'var(--text-tertiary)', lineHeight: 1.4, marginTop: 2 }}>
                    {isAr ? layer.description.ar : layer.description.en}
                  </div>
                )}
              </div>
              {!isLast && (
                <div style={{
                  position: 'absolute',
                  bottom: -5,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: `5px solid ${layer.color}40`,
                  zIndex: 2,
                }} />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
