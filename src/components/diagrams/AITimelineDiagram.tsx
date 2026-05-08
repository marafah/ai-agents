'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Eye, Zap, MessageSquare, Bot } from 'lucide-react';

const milestones = [
  { year: '1956', en: 'Dartmouth Conference', ar: 'مؤتمر دارتموث', icon: Brain, color: '#8b5cf6' },
  { year: '1997', en: 'Deep Blue beats Kasparov', ar: 'ديب بلو يهزم كاسباروف', icon: Cpu, color: '#3b82f6' },
  { year: '2012', en: 'ImageNet Breakthrough', ar: 'اختراق ImageNet', icon: Eye, color: '#10b981' },
  { year: '2017', en: 'Transformer Paper', ar: 'ورقة المحولات', icon: Zap, color: '#f59e0b' },
  { year: '2022', en: 'ChatGPT Launch', ar: 'إطلاق ChatGPT', icon: MessageSquare, color: '#f43f5e' },
  { year: '2024', en: 'AI Agents Era', ar: 'عصر وكلاء الذكاء', icon: Bot, color: '#06b6d4' },
];

export default function AITimelineDiagram({ locale }: { locale: 'en' | 'ar' }) {
  return (
    <div style={{ width: '100%', padding: '20px 0', direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, position: 'relative' }}>
        {/* Gradient connecting line */}
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: '8%',
            right: '8%',
            height: 3,
            borderRadius: 2,
            background: 'linear-gradient(to right, #8b5cf6, #3b82f6, #10b981, #f59e0b, #f43f5e, #06b6d4)',
            opacity: 0.4,
          }}
        />

        {milestones.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 16 }}
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
                  borderRadius: '50%',
                  background: m.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 12px ${m.color}44`,
                  border: '3px solid var(--bg-card)',
                }}
              >
                <Icon size={20} color="#fff" strokeWidth={2} />
              </div>
              <span
                style={{
                  marginTop: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  color: m.color,
                }}
              >
                {m.year}
              </span>
              <span
                style={{
                  marginTop: 2,
                  fontSize: 10,
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  maxWidth: 90,
                  lineHeight: 1.3,
                }}
              >
                {locale === 'ar' ? m.ar : m.en}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
