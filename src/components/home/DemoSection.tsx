'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageSquare, Wrench, Brain, CheckCircle, Play, RotateCcw } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

interface DemoStep {
  type: 'user' | 'thinking' | 'tool' | 'result' | 'response';
  icon: React.ComponentType<{ className?: string }>;
  label: Record<'en' | 'ar', string>;
  content: Record<'en' | 'ar', string>;
  color: string;
}

const demoSteps: DemoStep[] = [
  {
    type: 'user',
    icon: MessageSquare,
    label: { en: 'User', ar: 'المستخدم' },
    content: {
      en: 'What is the weather in Tokyo and should I bring an umbrella?',
      ar: 'ما هو الطقس في طوكيو وهل يجب أن أحمل مظلة؟',
    },
    color: '#6366f1',
  },
  {
    type: 'thinking',
    icon: Brain,
    label: { en: 'Agent Thinking', ar: 'تفكير الوكيل' },
    content: {
      en: 'The user wants weather info and practical advice. I need to: 1) Get Tokyo weather data, 2) Analyze rain probability, 3) Give a recommendation.',
      ar: 'المستخدم يريد معلومات الطقس ونصيحة عملية. أحتاج أن: 1) أحصل على بيانات طقس طوكيو، 2) أحلل احتمال المطر، 3) أعطي توصية.',
    },
    color: '#8b5cf6',
  },
  {
    type: 'tool',
    icon: Wrench,
    label: { en: 'Tool Call: get_weather', ar: 'استدعاء أداة: get_weather' },
    content: {
      en: 'get_weather(city="Tokyo", include_forecast=true)',
      ar: 'get_weather(city="طوكيو", include_forecast=true)',
    },
    color: '#06b6d4',
  },
  {
    type: 'result',
    icon: CheckCircle,
    label: { en: 'Tool Result', ar: 'نتيجة الأداة' },
    content: {
      en: '{"temp": "18°C", "condition": "Partly cloudy", "rain_chance": "70%", "forecast": "Rain expected afternoon"}',
      ar: '{"درجة_الحرارة": "18°C", "الحالة": "غائم جزئياً", "احتمال_المطر": "70%", "التوقع": "أمطار متوقعة بعد الظهر"}',
    },
    color: '#10b981',
  },
  {
    type: 'response',
    icon: Bot,
    label: { en: 'Agent Response', ar: 'رد الوكيل' },
    content: {
      en: 'Tokyo is currently 18°C and partly cloudy. There is a 70% chance of rain this afternoon, so yes  - definitely bring an umbrella! ☂️',
      ar: 'طوكيو حالياً 18 درجة مئوية وغائم جزئياً. هناك احتمال 70% للمطر بعد الظهر، لذا نعم  - بالتأكيد احمل مظلة! ☂️',
    },
    color: '#6366f1',
  },
];

export default function DemoSection() {
  const { locale } = useLocale();
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const playDemo = () => {
    setCurrentStep(-1);
    setIsPlaying(true);
    let step = 0;
    const interval = setInterval(() => {
      setCurrentStep(step);
      step++;
      if (step >= demoSteps.length) {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 1200);
  };

  const reset = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
  };

  return (
    <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('home.demo.title', locale)}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('home.demo.subtitle', locale)}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl border overflow-hidden"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)', boxShadow: 'var(--shadow-lg)' }}
          >
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {locale === 'en' ? 'Agent Demo' : 'عرض الوكيل'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={playDemo}
                  disabled={isPlaying}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium text-white gradient-bg disabled:opacity-50 transition-opacity"
                >
                  <Play className="h-3 w-3" />
                  {locale === 'en' ? 'Play' : 'تشغيل'}
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-sm border transition-colors hover:bg-[var(--bg-secondary)]"
                  style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
                >
                  <RotateCcw className="h-3 w-3" />
                  {locale === 'en' ? 'Reset' : 'إعادة'}
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3 min-h-[300px]">
              <AnimatePresence>
                {demoSteps.map((step, index) => {
                  if (index > currentStep) return null;
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-lg p-3 border"
                      style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-secondary)' }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span style={{ color: step.color }}><Icon className="h-4 w-4" /></span>
                        <span className="text-xs font-semibold" style={{ color: step.color }}>
                          {step.label[locale]}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${step.type === 'tool' || step.type === 'result' ? 'font-mono' : ''}`}
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {step.content[locale]}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {currentStep === -1 && (
                <div className="flex items-center justify-center h-[260px]">
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {locale === 'en' ? 'Click "Play" to see the agent in action' : 'انقر "تشغيل" لرؤية الوكيل أثناء العمل'}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: { en: 'Chatbot', ar: 'روبوت محادثة' }, desc: { en: 'Text in → Text out', ar: 'نص → نص' } },
              { label: { en: 'AI Agent', ar: 'وكيل ذكاء' }, desc: { en: 'Think → Plan → Act', ar: 'فكر → خطط → نفذ' } },
              { label: { en: 'Tools', ar: 'أدوات' }, desc: { en: 'Extend capabilities', ar: 'توسيع القدرات' } },
              { label: { en: 'Memory', ar: 'ذاكرة' }, desc: { en: 'Remember context', ar: 'تذكر السياق' } },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg p-3 border text-center"
                style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-card)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.label[locale]}</p>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{item.desc[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
