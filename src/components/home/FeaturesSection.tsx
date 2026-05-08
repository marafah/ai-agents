'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Code2,
  FlaskConical,
  Gamepad2,
  GraduationCap,
  Languages,
  Layers,
  Trophy,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

const features = [
  {
    icon: BookOpen,
    title: { en: 'Structured Curriculum', ar: 'منهج منظم' },
    description: {
      en: 'From AI basics to production-grade agents. Five learning paths tailored to your level.',
      ar: 'من أساسيات الذكاء الاصطناعي إلى وكلاء بمستوى الإنتاج. خمسة مسارات تعلم مصممة لمستواك.',
    },
  },
  {
    icon: Code2,
    title: { en: 'Code Examples', ar: 'أمثلة برمجية' },
    description: {
      en: 'Every concept comes with tested, runnable code in Python and TypeScript.',
      ar: 'كل مفهوم يأتي مع كود مُختبر وقابل للتشغيل في Python و TypeScript.',
    },
  },
  {
    icon: Gamepad2,
    title: { en: 'Interactive Playground', ar: 'ساحة تجارب تفاعلية' },
    description: {
      en: 'Experiment with AI Agent behavior. See thinking, planning, and tool use in real-time.',
      ar: 'جرب سلوك وكلاء الذكاء الاصطناعي. شاهد التفكير والتخطيط واستخدام الأدوات في الوقت الفعلي.',
    },
  },
  {
    icon: FlaskConical,
    title: { en: 'Visual Simulations', ar: 'محاكاة بصرية' },
    description: {
      en: 'Watch RAG pipelines, ReAct loops, and multi-agent systems come alive with animations.',
      ar: 'شاهد خطوط أنابيب RAG وحلقات ReAct وأنظمة الوكلاء المتعددة تنبض بالحياة مع الرسوم المتحركة.',
    },
  },
  {
    icon: Trophy,
    title: { en: 'Quizzes & Exams', ar: 'اختبارات وامتحانات' },
    description: {
      en: 'Test your knowledge with MCQs, scenario questions, and practical coding challenges.',
      ar: 'اختبر معرفتك مع أسئلة الاختيار المتعدد والسيناريوهات والتحديات البرمجية العملية.',
    },
  },
  {
    icon: Layers,
    title: { en: 'Hands-On Projects', ar: 'مشاريع عملية' },
    description: {
      en: 'Build real agents: RAG systems, multi-agent teams, customer support bots, and more.',
      ar: 'ابنِ وكلاء حقيقيين: أنظمة RAG، فرق متعددة الوكلاء، روبوتات دعم العملاء، والمزيد.',
    },
  },
  {
    icon: Languages,
    title: { en: 'Multilingual', ar: 'متعدد اللغات' },
    description: {
      en: 'Full English and Arabic support with proper RTL layout. Learn in your language.',
      ar: 'دعم كامل للإنجليزية والعربية مع تخطيط RTL مناسب. تعلم بلغتك.',
    },
  },
  {
    icon: GraduationCap,
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
                <div className="gradient-bg w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {feature.title[locale]}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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
