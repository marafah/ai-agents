'use client';

import { motion } from 'framer-motion';
import { User, Brain, Code, Play, FileOutput, MessageSquare } from 'lucide-react';

const stepsEn = [
  { label: 'User', sublabel: 'Sends prompt', color: '#3b82f6', icon: User },
  { label: 'LLM', sublabel: 'Decides action', color: '#8b5cf6', icon: Brain },
  { label: 'Tool Call', sublabel: 'JSON request', color: '#f59e0b', icon: Code },
  { label: 'Execution', sublabel: 'Tool runs', color: '#f43f5e', icon: Play },
  { label: 'Result', sublabel: 'Tool output', color: '#06b6d4', icon: FileOutput },
  { label: 'Response', sublabel: 'Final answer', color: '#10b981', icon: MessageSquare },
];

const stepsAr = [
  { label: 'المستخدم', sublabel: 'يرسل الطلب', color: '#3b82f6', icon: User },
  { label: 'LLM', sublabel: 'يقرر الإجراء', color: '#8b5cf6', icon: Brain },
  { label: 'استدعاء', sublabel: 'طلب JSON', color: '#f59e0b', icon: Code },
  { label: 'التنفيذ', sublabel: 'الأداة تعمل', color: '#f43f5e', icon: Play },
  { label: 'النتيجة', sublabel: 'المخرجات', color: '#06b6d4', icon: FileOutput },
  { label: 'الاستجابة', sublabel: 'الإجابة النهائية', color: '#10b981', icon: MessageSquare },
];

export default function FunctionCallingFlow({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const steps = isAr ? stepsAr : stepsEn;

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, position: 'relative' }}>
        {/* Connecting line */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: '8%',
            right: '8%',
            height: 2,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b, #f43f5e, #06b6d4, #10b981)',
            borderRadius: 1,
            opacity: 0.3,
          }}
        />

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label + i}
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
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: step.color,
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}
              >
                {step.label}
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: 'var(--text-tertiary)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  marginTop: 2,
                }}
              >
                {step.sublabel}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
