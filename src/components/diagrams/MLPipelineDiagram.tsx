'use client';

import { motion } from 'framer-motion';
import { Database, Filter, Settings, Cpu, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  { icon: Database, color: '#06b6d4', en: 'Data Collection', ar: 'جمع البيانات' },
  { icon: Filter, color: '#3b82f6', en: 'Data Cleaning', ar: 'تنظيف البيانات' },
  { icon: Settings, color: '#8b5cf6', en: 'Feature Engineering', ar: 'هندسة الميزات' },
  { icon: Cpu, color: '#f59e0b', en: 'Model Training', ar: 'تدريب النموذج' },
  { icon: CheckCircle, color: '#10b981', en: 'Evaluation', ar: 'التقييم' },
  { icon: Rocket, color: '#f43f5e', en: 'Deployment', ar: 'النشر' },
];

export default function MLPipelineDiagram({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  return (
    <div style={{ width: '100%', padding: '20px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, position: 'relative' }}>
        {/* Connecting line */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: '8%',
            right: '8%',
            height: 2,
            background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #f59e0b, #10b981, #f43f5e)',
            borderRadius: 1,
            opacity: 0.3,
          }}
        />

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.en}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${step.color}12`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}
              >
                <Icon size={20} color={step.color} strokeWidth={2} />
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: step.color,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  maxWidth: 80,
                }}
              >
                {isAr ? step.ar : step.en}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
