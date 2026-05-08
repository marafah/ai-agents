'use client';

import { motion } from 'framer-motion';
import { Eye, Brain, Wrench, Database, Map } from 'lucide-react';

const layers = [
  {
    en: 'Perception Layer',
    ar: 'طبقة الإدراك',
    desc_en: 'Process inputs from environment',
    desc_ar: 'معالجة المدخلات من البيئة',
    color: '#10b981',
    icon: Eye,
    emphasis: false,
  },
  {
    en: 'Reasoning Engine / LLM',
    ar: 'محرك التفكير / LLM',
    desc_en: 'Core intelligence and decision making',
    desc_ar: 'الذكاء الأساسي واتخاذ القرارات',
    color: '#3b82f6',
    icon: Brain,
    emphasis: true,
  },
  {
    en: 'Tool System',
    ar: 'نظام الأدوات',
    desc_en: 'Execute actions in the real world',
    desc_ar: 'تنفيذ الإجراءات في العالم الحقيقي',
    color: '#f59e0b',
    icon: Wrench,
    emphasis: false,
  },
  {
    en: 'Memory',
    ar: 'الذاكرة',
    desc_en: 'Store and retrieve information',
    desc_ar: 'تخزين واسترجاع المعلومات',
    color: '#8b5cf6',
    icon: Database,
    emphasis: false,
  },
  {
    en: 'Planning Module',
    ar: 'وحدة التخطيط',
    desc_en: 'Break goals into subtasks',
    desc_ar: 'تقسيم الأهداف إلى مهام فرعية',
    color: '#06b6d4',
    icon: Map,
    emphasis: false,
  },
];

export default function AgentComponentsDiagram({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        width: '100%',
        maxWidth: 540,
        margin: '0 auto',
        padding: 24,
        minHeight: 340,
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
        {isAr ? 'مكونات وكيل الذكاء الاصطناعي' : 'AI Agent Components'}
      </motion.h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.en}
              initial={{ opacity: 0, x: isAr ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4, ease: 'easeOut' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: layer.emphasis ? '16px 18px' : '10px 16px',
                borderRadius: 12,
                backgroundColor: `${layer.color}12`,
                border: `2px solid ${layer.color}${layer.emphasis ? '' : '66'}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  [isAr ? 'right' : 'left']: 0,
                  width: 4,
                  backgroundColor: layer.color,
                  borderRadius: isAr ? '0 4px 4px 0' : '4px 0 0 4px',
                }}
              />

              <div
                style={{
                  width: layer.emphasis ? 40 : 32,
                  height: layer.emphasis ? 40 : 32,
                  borderRadius: 10,
                  backgroundColor: layer.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={layer.emphasis ? 22 : 16} color="#fff" />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: layer.emphasis ? 15 : 13,
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  {isAr ? layer.ar : layer.en}
                </div>
                <div
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 11,
                  }}
                >
                  {isAr ? layer.desc_ar : layer.desc_en}
                </div>
              </div>

              {layer.emphasis && (
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: layer.color,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isAr ? 'النواة' : 'CORE'}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
