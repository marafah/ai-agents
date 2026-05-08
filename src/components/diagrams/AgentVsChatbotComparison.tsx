'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Bot, Check, X } from 'lucide-react';

const features = [
  { en: 'Text Generation', ar: 'توليد النصوص', chatbot: true, agent: true },
  { en: 'Q&A', ar: 'الأسئلة والأجوبة', chatbot: true, agent: true },
  { en: 'Tools', ar: 'الأدوات', chatbot: false, agent: true },
  { en: 'Memory', ar: 'الذاكرة', chatbot: false, agent: true },
  { en: 'Planning', ar: 'التخطيط', chatbot: false, agent: true },
  { en: 'Autonomy', ar: 'الاستقلالية', chatbot: false, agent: true },
];

export default function AgentVsChatbotComparison({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 12, alignItems: 'stretch' }}>
        {/* Chatbot Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'var(--bg-card)',
            borderRadius: 14,
            border: '2px solid #f59e0b44',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 14px',
              background: '#f59e0b18',
              borderBottom: '1px solid #f59e0b33',
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageSquare size={14} color="#fff" />
            </div>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 13 }}>
              {isAr ? 'روبوت المحادثة' : 'Chatbot'}
            </span>
          </div>
          <div style={{ padding: '6px 14px' }}>
            {features.map((f, i) => (
              <div
                key={f.en}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 0',
                  borderBottom: i < features.length - 1 ? '1px solid var(--border-primary)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    background: f.chatbot ? '#10b98122' : '#f43f5e22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {f.chatbot ? (
                    <Check size={10} color="#10b981" strokeWidth={3} />
                  ) : (
                    <X size={10} color="#f43f5e" strokeWidth={3} />
                  )}
                </div>
                <span style={{ color: 'var(--text-primary)', fontSize: 11, fontWeight: 500 }}>
                  {isAr ? f.ar : f.en}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* VS divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            style={{
              color: 'var(--text-tertiary)',
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: '0.05em',
            }}
          >
            VS
          </motion.span>
        </div>

        {/* Agent Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            background: 'var(--bg-card)',
            borderRadius: 14,
            border: '2px solid #10b98144',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 14px',
              background: '#10b98118',
              borderBottom: '1px solid #10b98133',
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Bot size={14} color="#fff" />
            </div>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 13 }}>
              {isAr ? 'الوكيل' : 'Agent'}
            </span>
          </div>
          <div style={{ padding: '6px 14px' }}>
            {features.map((f, i) => (
              <div
                key={f.en}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 0',
                  borderBottom: i < features.length - 1 ? '1px solid var(--border-primary)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    background: f.agent ? '#10b98122' : '#f43f5e22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {f.agent ? (
                    <Check size={10} color="#10b981" strokeWidth={3} />
                  ) : (
                    <X size={10} color="#f43f5e" strokeWidth={3} />
                  )}
                </div>
                <span style={{ color: 'var(--text-primary)', fontSize: 11, fontWeight: 500 }}>
                  {isAr ? f.ar : f.en}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
