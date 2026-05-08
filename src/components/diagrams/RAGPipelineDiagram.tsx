'use client';

import { motion } from 'framer-motion';
import { FileText, Scissors, Hash, Database, Search, Brain, MessageSquare } from 'lucide-react';

const indexingSteps = [
  { en: 'Documents', ar: 'المستندات', icon: FileText, color: '#3b82f6' },
  { en: 'Chunk', ar: 'تقسيم', icon: Scissors, color: '#60a5fa' },
  { en: 'Embed', ar: 'تضمين', icon: Hash, color: '#8b5cf6' },
  { en: 'Vector DB', ar: 'قاعدة المتجهات', icon: Database, color: '#a78bfa' },
];

const querySteps = [
  { en: 'Question', ar: 'السؤال', icon: MessageSquare, color: '#10b981' },
  { en: 'Embed', ar: 'تضمين', icon: Hash, color: '#34d399' },
  { en: 'Search', ar: 'بحث', icon: Search, color: '#06b6d4' },
  { en: 'Context', ar: 'السياق', icon: FileText, color: '#f59e0b' },
  { en: 'LLM', ar: 'LLM', icon: Brain, color: '#8b5cf6' },
  { en: 'Answer', ar: 'الإجابة', icon: MessageSquare, color: '#10b981' },
];

function FlowRow({
  steps,
  label,
  labelColor,
  columns,
  delay,
  isAr,
}: {
  steps: typeof indexingSteps;
  label: string;
  labelColor: string;
  columns: number;
  delay: number;
  isAr: boolean;
}) {
  return (
    <div style={{ marginBottom: 12 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: labelColor,
          marginBottom: 8,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        {label}
      </motion.div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 0,
          position: 'relative',
        }}
      >
        {/* Connecting line */}
        <div
          style={{
            position: 'absolute',
            top: 17,
            left: '8%',
            right: '8%',
            height: 2,
            background: `${labelColor}30`,
            borderRadius: 1,
          }}
        />

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.en + i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + i * 0.08, duration: 0.3 }}
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
              <span
                style={{
                  color: step.color,
                  fontSize: 10,
                  fontWeight: 600,
                  textAlign: 'center',
                  lineHeight: 1.2,
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

export default function RAGPipelineDiagram({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

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
        <FlowRow
          steps={indexingSteps}
          label={isAr ? 'مرحلة الفهرسة' : 'Indexing Phase'}
          labelColor="#3b82f6"
          columns={4}
          delay={0}
          isAr={isAr}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '2px 0',
            marginBottom: 4,
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'var(--border-primary)' }} />
          <span style={{ fontSize: 9, color: 'var(--text-tertiary)', fontWeight: 600, whiteSpace: 'nowrap' }}>
            {isAr ? 'قاعدة المتجهات مشتركة' : 'Shared Vector DB'}
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-primary)' }} />
        </motion.div>

        <FlowRow
          steps={querySteps}
          label={isAr ? 'مرحلة الاستعلام' : 'Query Phase'}
          labelColor="#10b981"
          columns={6}
          delay={0.4}
          isAr={isAr}
        />
      </div>
    </div>
  );
}
