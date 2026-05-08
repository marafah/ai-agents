'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Code2,
  Gamepad2,
  FlaskConical,
  Trophy,
  Rocket,
  Globe,
  Building2,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

const features = [
  {
    icon: BookOpen,
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.12)',
    title: { en: 'Structured Curriculum', ar: 'منهج منظم' },
    description: {
      en: 'From AI basics to production-grade agents. Five learning paths tailored to your level.',
      ar: 'من أساسيات الذكاء الاصطناعي إلى وكلاء بمستوى الإنتاج. خمسة مسارات تعلم مصممة لمستواك.',
    },
  },
  {
    icon: Code2,
    color: '#06b6d4',
    bg: 'rgba(6, 182, 212, 0.12)',
    title: { en: 'Code Examples', ar: 'أمثلة برمجية' },
    description: {
      en: 'Every concept comes with tested, runnable code in Python and TypeScript.',
      ar: 'كل مفهوم يأتي مع كود مُختبر وقابل للتشغيل في Python و TypeScript.',
    },
  },
  {
    icon: Gamepad2,
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    title: { en: 'Interactive Playground', ar: 'ساحة تجارب تفاعلية' },
    description: {
      en: 'Experiment with AI Agent behavior. See thinking, planning, and tool use in real-time.',
      ar: 'جرب سلوك وكلاء الذكاء الاصطناعي. شاهد التفكير والتخطيط واستخدام الأدوات في الوقت الفعلي.',
    },
  },
  {
    icon: FlaskConical,
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.12)',
    title: { en: 'Visual Simulations', ar: 'محاكاة بصرية' },
    description: {
      en: 'Watch RAG pipelines, ReAct loops, and multi-agent systems come alive with animations.',
      ar: 'شاهد خطوط أنابيب RAG وحلقات ReAct وأنظمة الوكلاء المتعددة تنبض بالحياة مع الرسوم المتحركة.',
    },
  },
  {
    icon: Trophy,
    color: '#ef4444',
    bg: 'rgba(239, 68, 68, 0.12)',
    title: { en: 'Quizzes & Exams', ar: 'اختبارات وامتحانات' },
    description: {
      en: 'Test your knowledge with MCQs, scenario questions, and practical coding challenges.',
      ar: 'اختبر معرفتك مع أسئلة الاختيار المتعدد والسيناريوهات والتحديات البرمجية العملية.',
    },
  },
  {
    icon: Rocket,
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    title: { en: 'Hands-On Projects', ar: 'مشاريع عملية' },
    description: {
      en: 'Build real agents: RAG systems, multi-agent teams, customer support bots, and more.',
      ar: 'ابنِ وكلاء حقيقيين: أنظمة RAG، فرق متعددة الوكلاء، روبوتات دعم العملاء، والمزيد.',
    },
  },
  {
    icon: Globe,
    color: '#0ea5e9',
    bg: 'rgba(14, 165, 233, 0.12)',
    title: { en: 'Multilingual', ar: 'متعدد اللغات' },
    description: {
      en: 'Full English and Arabic support with proper RTL layout. Learn in your language.',
      ar: 'دعم كامل للإنجليزية والعربية مع تخطيط RTL مناسب. تعلم بلغتك.',
    },
  },
  {
    icon: Building2,
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.12)',
    title: { en: 'Industry Scenarios', ar: 'سيناريوهات صناعية' },
    description: {
      en: 'Apply agents to cybersecurity, healthcare, finance, education, and software engineering.',
      ar: 'طبق الوكلاء على الأمن السيبراني والرعاية الصحية والمالية والتعليم وهندسة البرمجيات.',
    },
  },
];

export default function FeaturesSection() {
  const { locale } = useLocale();

  return (
    <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('home.features.title', locale)}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {t('home.features.subtitle', locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl p-6 border card-hover"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: feature.bg }}
                >
                  <Icon className="h-6 w-6" style={{ color: feature.color }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {feature.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description[locale]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
