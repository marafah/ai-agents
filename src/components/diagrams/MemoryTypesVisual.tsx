'use client';

import { motion } from 'framer-motion';
import { Bot, MessageSquare, Database, Clock } from 'lucide-react';

const memoryTypes = [
  {
    en: 'Short-term Memory',
    ar: 'الذاكرة قصيرة المدى',
    desc_en: 'Current conversation',
    desc_ar: 'المحادثة الحالية',
    color: '#10b981',
    icon: MessageSquare,
  },
  {
    en: 'Long-term Memory',
    ar: 'الذاكرة طويلة المدى',
    desc_en: 'Facts & knowledge',
    desc_ar: 'الحقائق والمعرفة',
    color: '#3b82f6',
    icon: Database,
  },
  {
    en: 'Episodic Memory',
    ar: 'الذاكرة العرضية',
    desc_en: 'Past interactions',
    desc_ar: 'التفاعلات السابقة',
    color: '#8b5cf6',
    icon: Clock,
  },
];

export default function MemoryTypesVisual({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  return (
    <div style={{ width: '100%', padding: '16px 0', direction: isAr ? 'rtl' : 'ltr' }}>
      {/* Agent node */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: 'spring' }}
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: '#f43f5e15',
          border: '2.5px solid #f43f5e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 8px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Bot size={22} color="#f43f5e" />
        <span style={{ fontSize: 9, fontWeight: 700, color: '#f43f5e', marginTop: 1 }}>
          {isAr ? 'الوكيل' : 'Agent'}
        </span>
      </motion.div>

      {/* Vertical connector */}
      <div style={{ width: 2, height: 16, background: 'var(--border-primary)', margin: '0 auto' }} />

      {/* Memory cards grid */}
      <div style={{ position: 'relative' }}>
        {/* Horizontal connector */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: 2,
            background: 'var(--border-primary)',
            zIndex: 0,
          }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, position: 'relative', zIndex: 2 }}>
          {memoryTypes.map((mem, i) => {
            const Icon = mem.icon;
            return (
              <motion.div
                key={mem.en}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 14,
                  border: `2px solid ${mem.color}50`,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Connector dot */}
                <div
                  style={{
                    position: 'absolute',
                    top: -5,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: mem.color,
                    border: '2px solid var(--bg-card)',
                  }}
                />

                <div style={{ height: 3, background: mem.color }} />
                <div style={{ padding: '14px 10px 12px', textAlign: 'center' }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: `${mem.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 6px',
                    }}
                  >
                    <Icon size={16} color={mem.color} />
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontSize: 11, fontWeight: 700, marginBottom: 2, lineHeight: 1.3 }}>
                    {isAr ? mem.ar : mem.en}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 10, lineHeight: 1.4 }}>
                    {isAr ? mem.desc_ar : mem.desc_en}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
