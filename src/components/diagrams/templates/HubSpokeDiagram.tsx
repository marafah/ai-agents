'use client';

import { motion } from 'framer-motion';
import type { HubSpokeData } from './types';

export default function HubSpokeDiagram({ data, locale }: { data: HubSpokeData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { center, spokes } = data;
  const CenterIcon = center.icon;

  return (
    <div style={{ width: '100%', maxWidth: 520, margin: '0 auto', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 8 }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: `${center.color}15`,
            border: `3px solid ${center.color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CenterIcon size={24} color={center.color} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 700, color: center.color, marginTop: 6 }}>
          {isAr ? center.label.ar : center.label.en}
        </span>
      </motion.div>

      {/* Connector */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        style={{ width: 2, height: 20, background: `${center.color}30`, margin: '0 auto', transformOrigin: 'top' }}
      />

      {/* Horizontal connector */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        style={{ height: 2, background: `${center.color}20`, margin: '0 auto', maxWidth: '80%' }}
      />

      {/* Spokes */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(spokes.length, 4)}, 1fr)`, gap: 10, marginTop: 8 }}>
        {spokes.map((spoke, i) => {
          const Icon = spoke.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.35 }}
            >
              {/* Vertical connector from horizontal line */}
              <div style={{ width: 2, height: 12, background: `${spoke.color}30`, margin: '0 auto' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: spoke.color, margin: '-1px auto 6px' }} />

              <div
                style={{
                  borderRadius: 12,
                  border: `1px solid ${spoke.color}25`,
                  background: `${spoke.color}06`,
                  padding: '12px 10px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: `${spoke.color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 6px',
                  }}
                >
                  <Icon size={14} color={spoke.color} />
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: spoke.color, lineHeight: 1.3 }}>
                  {isAr ? spoke.label.ar : spoke.label.en}
                </div>
                {spoke.description && (
                  <div style={{ fontSize: 9, color: 'var(--text-tertiary)', lineHeight: 1.4, marginTop: 3 }}>
                    {isAr ? spoke.description.ar : spoke.description.en}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
