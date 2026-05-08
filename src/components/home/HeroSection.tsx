'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ExternalLink, Bot, Cpu, Zap, Network, Search, FileText, CheckCircle, Send, Loader2 } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import authorImg from '../../../public/author.png';

interface AgentStepData {
  icon: React.ReactNode;
  label: Record<string, string>;
  content: Record<string, string>;
  color: string;
  typingSpeed?: number;
}

const agentScenarios: { title: Record<string, string>; query: Record<string, string>; steps: AgentStepData[] }[] = [
  {
    title: { en: 'Research Assistant', ar: 'مساعد البحث' },
    query: { en: 'Find recent AI agent papers and summarize them', ar: 'ابحث عن أوراق بحثية حديثة عن وكلاء الذكاء الاصطناعي ولخصها' },
    steps: [
      {
        icon: <Cpu className="h-4 w-4" />,
        label: { en: 'Thinking', ar: 'يفكر' },
        content: { en: 'I need to search for recent AI research papers and summarize the findings...', ar: 'أحتاج للبحث عن أوراق بحثية حديثة في الذكاء الاصطناعي وتلخيص النتائج...' },
        color: '#8b5cf6',
      },
      {
        icon: <Search className="h-4 w-4" />,
        label: { en: 'Using Tool: web_search', ar: 'يستخدم أداة: بحث_الويب' },
        content: { en: 'search("AI agents research 2025")', ar: 'بحث("أبحاث وكلاء الذكاء الاصطناعي 2025")' },
        color: '#06b6d4',
        typingSpeed: 30,
      },
      {
        icon: <FileText className="h-4 w-4" />,
        label: { en: 'Reading Results', ar: 'يقرأ النتائج' },
        content: { en: 'Found 3 papers: "ReAct Agents", "Tool-Augmented LLMs", "Multi-Agent Systems"...', ar: 'وجدت 3 أوراق: "وكلاء ReAct"، "نماذج معززة بالأدوات"، "أنظمة متعددة الوكلاء"...' },
        color: '#f59e0b',
      },
      {
        icon: <Network className="h-4 w-4" />,
        label: { en: 'Planning', ar: 'يخطط' },
        content: { en: 'I will analyze each paper and create a comparative summary report...', ar: 'سأحلل كل ورقة وأنشئ تقريراً مقارناً ملخصاً...' },
        color: '#10b981',
      },
      {
        icon: <CheckCircle className="h-4 w-4" />,
        label: { en: 'Done', ar: 'تم' },
        content: { en: 'Summary report generated with key findings across all 3 papers.', ar: 'تم إنشاء التقرير الملخص مع النتائج الرئيسية عبر الأوراق الثلاث.' },
        color: '#10b981',
      },
    ],
  },
  {
    title: { en: 'Code Review Agent', ar: 'وكيل مراجعة الكود' },
    query: { en: 'Review my pull request for security issues', ar: 'راجع طلب السحب الخاص بي بحثاً عن مشاكل أمنية' },
    steps: [
      {
        icon: <Cpu className="h-4 w-4" />,
        label: { en: 'Thinking', ar: 'يفكر' },
        content: { en: 'I will fetch the PR diff and scan for common vulnerability patterns...', ar: 'سأجلب تغييرات طلب السحب وأفحص أنماط الثغرات الشائعة...' },
        color: '#8b5cf6',
      },
      {
        icon: <Zap className="h-4 w-4" />,
        label: { en: 'Using Tool: github_api', ar: 'يستخدم أداة: واجهة_غيتهب' },
        content: { en: 'gh.pulls.get(owner="user", repo="app", number=42)', ar: 'gh.pulls.get(owner="user", repo="app", number=42)' },
        color: '#06b6d4',
        typingSpeed: 25,
      },
      {
        icon: <Search className="h-4 w-4" />,
        label: { en: 'Analyzing', ar: 'يحلل' },
        content: { en: 'Scanning 12 changed files for SQL injection, XSS, and auth bypasses...', ar: 'فحص 12 ملفاً بحثاً عن حقن SQL و XSS وتجاوز المصادقة...' },
        color: '#f59e0b',
      },
      {
        icon: <FileText className="h-4 w-4" />,
        label: { en: 'Report', ar: 'التقرير' },
        content: { en: 'Found 1 issue: unsanitized user input at line 47 in api/handler.ts', ar: 'وجدت مشكلة واحدة: مدخل مستخدم غير مطهر في السطر 47 من api/handler.ts' },
        color: '#ef4444',
      },
      {
        icon: <CheckCircle className="h-4 w-4" />,
        label: { en: 'Done', ar: 'تم' },
        content: { en: 'Review complete. 1 critical issue found, fix suggestion posted as comment.', ar: 'اكتملت المراجعة. تم إيجاد مشكلة حرجة واحدة، ونشر اقتراح الإصلاح كتعليق.' },
        color: '#10b981',
      },
    ],
  },
  {
    title: { en: 'Data Analyst Agent', ar: 'وكيل تحليل البيانات' },
    query: { en: 'Analyze last month sales and find trends', ar: 'حلل مبيعات الشهر الماضي واعثر على الاتجاهات' },
    steps: [
      {
        icon: <Cpu className="h-4 w-4" />,
        label: { en: 'Thinking', ar: 'يفكر' },
        content: { en: 'I need to query the sales database and perform trend analysis...', ar: 'أحتاج للاستعلام من قاعدة بيانات المبيعات وإجراء تحليل الاتجاهات...' },
        color: '#8b5cf6',
      },
      {
        icon: <Zap className="h-4 w-4" />,
        label: { en: 'Using Tool: sql_query', ar: 'يستخدم أداة: استعلام_SQL' },
        content: { en: 'SELECT date, SUM(amount) FROM sales GROUP BY date ORDER BY date', ar: 'SELECT date, SUM(amount) FROM sales GROUP BY date ORDER BY date' },
        color: '#06b6d4',
        typingSpeed: 20,
      },
      {
        icon: <Network className="h-4 w-4" />,
        label: { en: 'Processing', ar: 'يعالج' },
        content: { en: 'Running statistical analysis: moving averages, growth rate, anomaly detection...', ar: 'تشغيل التحليل الإحصائي: المتوسطات المتحركة، معدل النمو، كشف الشذوذ...' },
        color: '#f59e0b',
      },
      {
        icon: <FileText className="h-4 w-4" />,
        label: { en: 'Insight', ar: 'رؤية' },
        content: { en: 'Revenue up 23% week-over-week. Peak sales on Thursdays. Mobile orders grew 41%.', ar: 'ارتفع الإيراد 23% أسبوعياً. ذروة المبيعات أيام الخميس. نمت الطلبات عبر الجوال 41%.' },
        color: '#10b981',
      },
      {
        icon: <CheckCircle className="h-4 w-4" />,
        label: { en: 'Done', ar: 'تم' },
        content: { en: 'Full report ready with 3 charts and 5 actionable recommendations.', ar: 'التقرير الكامل جاهز مع 3 رسوم بيانية و5 توصيات قابلة للتنفيذ.' },
        color: '#10b981',
      },
    ],
  },
];

export default function HeroSection() {
  const { locale } = useLocale();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 gradient-bg blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 gradient-bg blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-sm"
              style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {locale === 'en' ? 'Open Source & Free Forever' : 'مفتوح المصدر ومجاني للأبد'}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="gradient-text">{t('hero.title', locale)}</span>
              <br />
              <span style={{ color: 'var(--text-primary)' }}>{t('hero.subtitle', locale)}</span>
            </h1>

            <p className="text-lg mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              {t('hero.description', locale)}
            </p>

            <a
              href="https://marafah.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mb-6 group"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden"
                style={{ boxShadow: '0 0 0 2px var(--bg-primary), 0 0 0 3px #06b6d4' }}
              >
                <Image
                  src={authorImg}
                  alt="Dr. Mohammad Arafah"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium transition-colors group-hover:text-[#06b6d4]" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'ar' ? 'د. محمد عرفة' : 'Dr. Mohammad Arafah'}
              </span>
              <ExternalLink className="h-3 w-3 transition-colors group-hover:text-[#06b6d4]" style={{ color: 'var(--text-tertiary)' }} />
            </a>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/paths"
                className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-transform hover:scale-105"
              >
                {t('hero.cta.start', locale)}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/playground"
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border transition-colors hover:bg-[var(--bg-tertiary)]"
                style={{ borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}
              >
                <Play className="h-4 w-4" />
                {t('hero.cta.playground', locale)}
              </Link>
              <Link
                href="https://github.com/marafah/ai-agents"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border transition-colors hover:bg-[var(--bg-tertiary)]"
                style={{ borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}
              >
                <ExternalLink className="h-4 w-4" />
                {t('hero.cta.github', locale)}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <AgentSimulation locale={locale} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AgentSimulation({ locale }: { locale: string }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [typingStepIndex, setTypingStepIndex] = useState(-1);
  const [typedText, setTypedText] = useState('');
  const [queryTyped, setQueryTyped] = useState('');
  const [phase, setPhase] = useState<'typing-query' | 'running' | 'done' | 'fading-out'>('typing-query');
  const [contentOpacity, setContentOpacity] = useState(1);
  const stepsRef = useRef<HTMLDivElement>(null);

  const scenario = agentScenarios[scenarioIndex];
  const queryText = scenario.query[locale] || scenario.query.en;

  const advanceScenario = useCallback(() => {
    setPhase('fading-out');
    setContentOpacity(0);
    setTimeout(() => {
      setScenarioIndex((prev) => (prev + 1) % agentScenarios.length);
      setVisibleSteps(0);
      setTypingStepIndex(-1);
      setTypedText('');
      setQueryTyped('');
      requestAnimationFrame(() => {
        setContentOpacity(1);
        setPhase('typing-query');
      });
    }, 500);
  }, []);

  // Phase 1: Type the user query
  useEffect(() => {
    if (phase !== 'typing-query') return;
    if (queryTyped.length >= queryText.length) {
      const timer = setTimeout(() => setPhase('running'), 400);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setQueryTyped(queryText.slice(0, queryTyped.length + 1));
    }, 35);
    return () => clearTimeout(timer);
  }, [phase, queryTyped, queryText]);

  // Phase 2: Show steps one by one with typing effect
  useEffect(() => {
    if (phase !== 'running') return;
    if (visibleSteps >= scenario.steps.length) {
      setPhase('done');
      return;
    }

    const currentStep = scenario.steps[visibleSteps];
    const fullText = currentStep.content[locale] || currentStep.content.en;

    if (typingStepIndex !== visibleSteps) {
      setTypingStepIndex(visibleSteps);
      setTypedText('');
      return;
    }

    if (typedText.length >= fullText.length) {
      const timer = setTimeout(() => {
        setVisibleSteps((v) => v + 1);
      }, 600);
      return () => clearTimeout(timer);
    }

    const speed = currentStep.typingSpeed || 18;
    const timer = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [phase, visibleSteps, typingStepIndex, typedText, scenario.steps, locale]);

  // Auto-scroll steps container to show latest step
  useEffect(() => {
    if (stepsRef.current) {
      stepsRef.current.scrollTo({ top: stepsRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [visibleSteps, typedText]);

  // Phase 3: Hold the final state, then fade out
  useEffect(() => {
    if (phase !== 'done') return;
    const timer = setTimeout(advanceScenario, 2500);
    return () => clearTimeout(timer);
  }, [phase, advanceScenario]);

  return (
    <div
      className="rounded-2xl p-5 border relative overflow-hidden"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)', boxShadow: 'var(--shadow-xl)' }}
    >
      {/* Header — always visible */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          <Bot className="h-5 w-5" style={{ color: '#06b6d4' }} />
          {locale === 'en' ? 'AI Agent in Action' : 'وكيل الذكاء الاصطناعي أثناء العمل'}
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium transition-opacity duration-500"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', opacity: contentOpacity }}
        >
          {scenario.title[locale] || scenario.title.en}
        </span>
      </div>

      {/* Fading content wrapper */}
      <div
        style={{ opacity: contentOpacity, transition: 'opacity 0.4s ease-in-out' }}
      >
        {/* User query input */}
        <div
          className="rounded-lg px-3 py-2.5 mb-3 flex items-center gap-2 border"
          style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-secondary)' }}
        >
          <Send className="h-3.5 w-3.5 flex-shrink-0" style={{ color: 'var(--text-tertiary)' }} />
          <span className="text-sm font-mono flex-1 truncate" style={{ color: 'var(--text-primary)' }}>
            {queryTyped}
            {phase === 'typing-query' && (
              <span className="inline-block w-0.5 h-4 align-middle ml-0.5 animate-pulse" style={{ background: 'var(--color-primary)' }} />
            )}
          </span>
        </div>

        {/* Agent steps */}
        <div ref={stepsRef} className="space-y-2 overflow-y-auto scrollbar-hide" style={{ height: 280 }}>
          {scenario.steps.slice(0, visibleSteps + (phase === 'running' || phase === 'done' ? 1 : 0)).map((step, i) => {
            const isCurrentlyTyping = i === visibleSteps && phase === 'running';
            const fullText = step.content[locale] || step.content.en;
            const displayText = i < visibleSteps ? fullText : typedText;

            return (
              <motion.div
                key={`${scenarioIndex}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-lg p-3 border"
                style={{
                  borderColor: isCurrentlyTyping ? `${step.color}40` : 'var(--border-primary)',
                  background: isCurrentlyTyping ? `${step.color}08` : 'var(--bg-secondary)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: step.color }}>{step.icon}</span>
                  <span className="text-xs font-semibold" style={{ color: step.color }}>
                    {step.label[locale] || step.label.en}
                  </span>
                  {isCurrentlyTyping && (
                    <Loader2 className="h-3 w-3 animate-spin" style={{ color: step.color, marginInlineStart: 'auto' }} />
                  )}
                </div>
                <p className="text-sm font-mono leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {displayText}
                  {isCurrentlyTyping && (
                    <span className="inline-block w-0.5 h-3.5 align-middle ml-0.5 animate-pulse" style={{ background: step.color }} />
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress dots — always visible */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {agentScenarios.map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === scenarioIndex ? 24 : 6,
              background: i === scenarioIndex ? '#06b6d4' : 'var(--border-secondary)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
