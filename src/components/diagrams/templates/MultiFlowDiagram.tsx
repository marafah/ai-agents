'use client';

import { motion } from 'framer-motion';
import type { MultiFlowData } from './types';

export default function MultiFlowDiagram({ data, locale }: { data: MultiFlowData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { phases, connector } = data;

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: 14,
          border: '1px solid var(--border-primary)',
          padding: '16px 14px',
        }}
      >
        {phases.map((phase, pi) => (
          <div key={pi}>
            {/* Phase label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: pi * 0.3 }}
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: phase.color,
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              {isAr ? phase.label.ar : phase.label.en}
            </motion.div>

            {/* Steps row */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${phase.steps.length}, 1fr)`, gap: 0, position: 'relative', marginBottom: pi < phases.length - 1 ? 4 : 0 }}>
              <div
                style={{
                  position: 'absolute',
                  top: 17,
                  left: '8%',
                  right: '8%',
                  height: 2,
                  background: `${phase.color}30`,
                  borderRadius: 1,
                }}
              />
              {phase.steps.map((step, si) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pi * 0.3 + si * 0.08, duration: 0.3 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 4,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        background: `${step.color}15`,
                        border: `2px solid ${step.color}60`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={15} color={step.color} />
                    </div>
                    <span style={{ color: step.color, fontSize: 10, fontWeight: 600, textAlign: 'center', lineHeight: 1.2 }}>
                      {isAr ? step.label.ar : step.label.en}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Connector between phases */}
            {pi < phases.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (pi + 1) * 0.3 - 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '2px 0',
                  marginBottom: 4,
                }}
              >
                <div style={{ flex: 1, height: 1, background: 'var(--border-primary)' }} />
                {connector && (
                  <span style={{ fontSize: 9, color: 'var(--text-tertiary)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {isAr ? connector.ar : connector.en}
                  </span>
                )}
                <div style={{ flex: 1, height: 1, background: 'var(--border-primary)' }} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
