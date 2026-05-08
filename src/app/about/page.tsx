'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Heart,
  BookOpen,
  Code2,
  GitBranch,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Globe,
  Users,
  Shield,
  Brain,
  Layers,
  Cpu,
  Link2,
  Mail,
  MapPin,
  Award,
  FileText,
  Building2,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import authorImg from '../../../public/author.png';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const curriculumItems = [
  {
    icon: Sparkles,
    titleEn: 'Foundations of AI Agents',
    titleAr: 'أساسيات وكلاء الذكاء الاصطناعي',
    descEn: 'LLMs, prompting, embeddings, and the building blocks of intelligent agents.',
    descAr: 'نماذج اللغة الكبيرة، الأوامر، التضمينات، واللبنات الأساسية للوكلاء الأذكياء.',
    color: '#10b981',
  },
  {
    icon: Layers,
    titleEn: 'Core Agent Patterns',
    titleAr: 'أنماط الوكلاء الأساسية',
    descEn: 'ReAct, tool use, planning, memory systems, and RAG architectures.',
    descAr: 'نمط ReAct، استخدام الأدوات، التخطيط، أنظمة الذاكرة، ومعماريات RAG.',
    color: '#3b82f6',
  },
  {
    icon: Brain,
    titleEn: 'Advanced Architectures',
    titleAr: 'المعماريات المتقدمة',
    descEn: 'Multi-agent systems, supervisor patterns, graph-based workflows, and orchestration.',
    descAr: 'الأنظمة متعددة الوكلاء، أنماط المشرف، تدفقات العمل القائمة على الرسوم البيانية، والتنسيق.',
    color: '#8b5cf6',
  },
  {
    icon: Shield,
    titleEn: 'Safety & Security',
    titleAr: 'الأمان والحماية',
    descEn: 'Guardrails, prompt injection defense, evaluation, and responsible deployment.',
    descAr: 'الحواجز الأمنية، الدفاع ضد حقن الأوامر، التقييم، والنشر المسؤول.',
    color: '#f97316',
  },
  {
    icon: Cpu,
    titleEn: 'Production Systems',
    titleAr: 'أنظمة الإنتاج',
    descEn: 'Deployment, monitoring, scaling, human-in-the-loop, and enterprise integration.',
    descAr: 'النشر، المراقبة، التوسع، الإنسان في الحلقة، والتكامل المؤسسي.',
    color: '#f43f5e',
  },
];

const techStack = [
  { name: 'Next.js', desc: 'React framework' },
  { name: 'TypeScript', desc: 'Type safety' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling' },
  { name: 'Framer Motion', desc: 'Animations' },
  { name: 'Zustand', desc: 'State management' },
  { name: 'Lucide Icons', desc: 'Icon library' },
];

const organizations = [
  {
    name: 'OpenAI',
    url: 'https://openai.com',
    descEn: 'Pioneering large language models and agent APIs.',
    descAr: 'رائدة في نماذج اللغة الكبيرة وواجهات برمجة تطبيقات الوكلاء.',
  },
  {
    name: 'Anthropic',
    url: 'https://anthropic.com',
    descEn: 'AI safety research and Claude model family.',
    descAr: 'أبحاث سلامة الذكاء الاصطناعي وعائلة نماذج Claude.',
  },
  {
    name: 'Google DeepMind',
    url: 'https://deepmind.google',
    descEn: 'Advanced AI research, Gemini models, and agent frameworks.',
    descAr: 'أبحاث الذكاء الاصطناعي المتقدمة ونماذج Gemini وأطر عمل الوكلاء.',
  },
  {
    name: 'LangChain',
    url: 'https://langchain.com',
    descEn: 'Open-source frameworks for building LLM applications and agents.',
    descAr: 'أطر عمل مفتوحة المصدر لبناء تطبيقات ووكلاء نماذج اللغة الكبيرة.',
  },
  {
    name: 'Meta AI',
    url: 'https://ai.meta.com',
    descEn: 'Open-source LLMs (LLaMA) and AI research.',
    descAr: 'نماذج لغة كبيرة مفتوحة المصدر (LLaMA) وأبحاث الذكاء الاصطناعي.',
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co',
    descEn: 'Open-source model hub and ML tooling.',
    descAr: 'مركز النماذج مفتوحة المصدر وأدوات تعلم الآلة.',
  },
];

export default function AboutPage() {
  const { locale, direction } = useLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" dir={direction}>
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          {...fadeUp}
          className="text-4xl font-bold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('about.title', locale)}
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('about.subtitle', locale)}
        </motion.p>
      </div>

      {/* ── Mission Statement ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.15 }}
        className="mb-16"
      >
        <div
          className="rounded-2xl p-8 sm:p-10 border relative overflow-hidden"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
        >
          {/* Decorative gradient corner */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
            style={{ background: '#06b6d4', transform: 'translate(30%, -30%)' }}
          />

          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(6, 182, 212, 0.15)' }}
            >
              <Heart className="h-7 w-7" style={{ color: '#06b6d4' }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                {locale === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'ar'
                  ? 'أكاديمية وكلاء الذكاء الاصطناعي هي منصة تعليمية مفتوحة المصدر بالكامل مكرسة لإزالة الغموض عن وكلاء الذكاء الاصطناعي. نؤمن بأن المعرفة حول بناء أنظمة ذكاء اصطناعي آمنة ومسؤولة يجب أن تكون متاحة للجميع  - بغض النظر عن خلفيتهم أو لغتهم أو موقعهم الجغرافي.'
                  : 'AI Agents is a fully open-source educational platform dedicated to demystifying AI Agents. We believe that knowledge about building safe, responsible AI systems should be accessible to everyone - regardless of background, language, or location.'}
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'ar'
                  ? 'من النظرية الأساسية إلى أنظمة الإنتاج، نقدم منهجًا منظمًا يجمع بين التعلم التفاعلي والمشاريع العملية ومحاكاة الوكلاء  - وكل ذلك متاح باللغتين العربية والإنجليزية.'
                  : 'From foundational theory to production systems, we provide a structured curriculum that combines interactive learning, hands-on projects, and agent simulations  - all available in both Arabic and English.'}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Author / Creator ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.18 }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            <Award className="inline-block h-6 w-6 mr-2 -mt-1" style={{ color: '#06b6d4' }} />
            {locale === 'ar' ? 'المؤلف والمنشئ' : 'Author & Creator'}
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? 'تعرّف على الشخص الذي يقف وراء هذه المنصة'
              : 'Meet the person behind this platform'}
          </p>
        </div>

        <div
          className="rounded-2xl border overflow-hidden"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Photo & Quick Info */}
            <div
              className="lg:w-80 flex-shrink-0 p-8 flex flex-col items-center text-center relative overflow-hidden"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                }}
              />

              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-5"
                style={{ boxShadow: '0 0 0 3px var(--bg-tertiary), 0 0 0 6px #06b6d4' }}
              >
                <Image
                  src={authorImg}
                  alt="Dr. Mohammad Arafah"
                  fill
                  className="object-cover"
                  sizes="144px"
                  priority
                />
              </div>

              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {locale === 'ar' ? 'د. محمد عرفة' : 'Dr. Mohammad Arafah'}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: '#06b6d4' }}>
                {locale === 'ar' ? 'أستاذ مساعد | رئيس الذكاء الاصطناعي' : 'Assistant Professor | Head of AI'}
              </p>

              <div className="flex items-center gap-1.5 mb-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{locale === 'ar' ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/in/mohammadarafah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.3)' }}
                  aria-label="LinkedIn"
                >
                  <Link2 className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/marafah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.3)' }}
                  aria-label="GitHub"
                >
                  <GitBranch className="h-4 w-4" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=marafah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.3)' }}
                  aria-label="Google Scholar"
                >
                  <FileText className="h-4 w-4" />
                </a>
                <a
                  href="mailto:mohammad.arafah@sygma.net"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.3)' }}
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: Bio & Details */}
            <div className="flex-1 p-8">
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'ar'
                  ? 'د. محمد عرفة هو باحث وممارس في مجال الذكاء الاصطناعي يدمج بين البحث الأكاديمي الدقيق وأنظمة الذكاء الاصطناعي الإنتاجية في مجالات الأمن السيبراني والرعاية الصحية وتجارة التجزئة والأنظمة الحوارية. يحمل درجة الدكتوراه في الأمن السيبراني والذكاء الاصطناعي من جامعة لوبورو في المملكة المتحدة، ويجمع بين أكثر من 13 عاماً من الخبرة المهنية في بناء أنظمة ذكية تخدم أكثر من 10,000 مستخدم.'
                  : 'Dr. Mohammad Arafah is an AI researcher and practitioner bridging rigorous academic research with production-grade AI in cybersecurity, healthcare, retail, and conversational systems. He holds a Ph.D. in Cybersecurity & Artificial Intelligence from Loughborough University, UK, and brings over 13 years of professional experience building intelligent systems serving 10,000+ users.'}
              </p>

              {/* Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: GraduationCap,
                    titleEn: 'Assistant Professor',
                    titleAr: 'أستاذ مساعد',
                    orgEn: 'University of Petra',
                    orgAr: 'جامعة البتراء',
                    color: '#3b82f6',
                  },
                  {
                    icon: Brain,
                    titleEn: 'Co-Founder & Head of AI',
                    titleAr: 'مؤسس مشارك ورئيس الذكاء الاصطناعي',
                    orgEn: 'Sygma Global Software',
                    orgAr: 'سيغما للحلول البرمجية',
                    color: '#8b5cf6',
                  },
                  {
                    icon: Building2,
                    titleEn: 'Asst. Director of E-Learning',
                    titleAr: 'مساعد مدير التعلم الإلكتروني',
                    orgEn: 'University of Petra',
                    orgAr: 'جامعة البتراء',
                    color: '#10b981',
                  },
                  {
                    icon: FileText,
                    titleEn: 'Peer Reviewer',
                    titleAr: 'مراجع أقران',
                    orgEn: 'Springer, Elsevier, Nature',
                    orgAr: 'Springer، Elsevier، Nature',
                    color: '#f97316',
                  },
                ].map((role, i) => {
                  const RoleIcon = role.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-xl p-4 flex items-start gap-3 border"
                      style={{ background: 'var(--bg-secondary)', borderColor: `${role.color}25` }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${role.color}20` }}
                      >
                        <RoleIcon className="h-4 w-4" style={{ color: role.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {locale === 'ar' ? role.titleAr : role.titleEn}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {locale === 'ar' ? role.orgAr : role.orgEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { valueEn: 'Ph.D.', valueAr: 'دكتوراه', labelEn: 'Cybersecurity & AI', labelAr: 'أمن سيبراني وذكاء اصطناعي', color: '#06b6d4' },
                  { valueEn: '22', valueAr: '22', labelEn: 'Publications', labelAr: 'منشور بحثي', color: '#3b82f6' },
                  { valueEn: '17', valueAr: '17', labelEn: 'Courses Taught', labelAr: 'مادة دراسية', color: '#10b981' },
                  { valueEn: '13+', valueAr: '+13', labelEn: 'Years Experience', labelAr: 'عام خبرة', color: '#f97316' },
                ].map((stat, i) => (
                  <div key={i} className="text-center rounded-xl p-3 border" style={{ background: 'var(--bg-secondary)', borderColor: `${stat.color}25` }}>
                    <p className="text-lg font-bold mb-0.5" style={{ color: stat.color }}>
                      {locale === 'ar' ? stat.valueAr : stat.valueEn}
                    </p>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {locale === 'ar' ? stat.labelAr : stat.labelEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── What You'll Learn ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            <GraduationCap className="inline-block h-6 w-6 mr-2 -mt-1" style={{ color: '#06b6d4' }} />
            {locale === 'ar' ? 'ماذا ستتعلم' : "What You'll Learn"}
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? 'نظرة شاملة على المنهج الدراسي'
              : 'A comprehensive overview of the curriculum'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {curriculumItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07 }}
                className="rounded-2xl p-6 border card-hover"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}15` }}
                >
                  <span style={{ color: item.color }}><Icon className="h-6 w-6" /></span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {locale === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'ar' ? item.descAr : item.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ── Technology Stack ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            <Code2 className="inline-block h-6 w-6 mr-2 -mt-1" style={{ color: '#06b6d4' }} />
            {locale === 'ar' ? 'التقنيات المستخدمة' : 'Technology Stack'}
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? 'الأدوات والأطر التي بُنيت عليها هذه المنصة'
              : 'The tools and frameworks powering this platform'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.05 }}
              className="rounded-xl p-4 border text-center card-hover"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                {tech.name}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── How to Contribute ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.35 }}
        className="mb-16"
      >
        <div
          className="rounded-2xl p-8 sm:p-10 border"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
        >
          <div className="flex items-start gap-5 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(16, 185, 129, 0.1)' }}
            >
              <GitBranch className="h-7 w-7" style={{ color: '#10b981' }} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {locale === 'ar' ? 'كيف تساهم' : 'How to Contribute'}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {locale === 'ar'
                  ? 'نرحب بمساهمات المجتمع! سواء كنت ترغب في إصلاح خطأ، إضافة درس جديد، تحسين الترجمة، أو اقتراح ميزة  - مشاركتك تحدث فرقًا.'
                  : 'We welcome community contributions! Whether you want to fix a bug, add a new lesson, improve translations, or suggest a feature  - your participation makes a difference.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Code2,
                labelEn: 'Fork & Clone',
                labelAr: 'انسخ المستودع',
                descEn: 'Fork the repo and set up your local environment.',
                descAr: 'انسخ المستودع وأعد بيئة التطوير المحلية.',
              },
              {
                icon: BookOpen,
                labelEn: 'Pick an Issue',
                labelAr: 'اختر مشكلة',
                descEn: 'Browse open issues or propose new features.',
                descAr: 'تصفح المشكلات المفتوحة أو اقترح ميزات جديدة.',
              },
              {
                icon: GitBranch,
                labelEn: 'Create a Branch',
                labelAr: 'أنشئ فرعًا',
                descEn: 'Work on your changes in a dedicated branch.',
                descAr: 'اعمل على تعديلاتك في فرع مخصص.',
              },
              {
                icon: Users,
                labelEn: 'Submit a PR',
                labelAr: 'أرسل طلب دمج',
                descEn: 'Open a pull request for review and discussion.',
                descAr: 'افتح طلب دمج للمراجعة والنقاش.',
              },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl p-4 relative"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <span
                    className="absolute top-3 text-xs font-bold"
                    style={{
                      color: 'var(--text-tertiary)',
                      ...(direction === 'rtl' ? { left: 12 } : { right: 12 }),
                    }}
                  >
                    {i + 1}
                  </span>
                  <StepIcon
                    className="h-5 w-5 mb-2"
                    style={{ color: '#06b6d4' }}
                  />
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {locale === 'ar' ? step.labelAr : step.labelEn}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {locale === 'ar' ? step.descAr : step.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── Credits / References ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            <Globe className="inline-block h-6 w-6 mr-2 -mt-1" style={{ color: '#06b6d4' }} />
            {locale === 'ar' ? 'المراجع والشكر' : 'Credits & References'}
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? 'نستلهم من أبحاث وأعمال هذه المنظمات الرائدة'
              : 'We draw inspiration from the research and work of these leading organizations'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizations.map((org, i) => (
            <motion.a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.05 }}
              className="rounded-xl p-5 border card-hover group flex items-start gap-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {org.name}
                  </p>
                  <ExternalLink
                    className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--text-tertiary)' }}
                  />
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {locale === 'ar' ? org.descAr : org.descEn}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ── GitHub CTA ── */}
      <motion.section
        {...fadeUp}
        transition={{ delay: 0.5 }}
      >
        <div
          className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            }}
          />
          <GitBranch className="h-10 w-10 mx-auto mb-4" style={{ color: 'var(--text-primary)' }} />
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {locale === 'ar' ? 'ابحث عنا على GitHub' : 'Find Us on GitHub'}
          </h3>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? 'تصفح الكود المصدري، قدم طلبات دمج، أو أضف نجمة للمستودع لدعم المشروع.'
              : 'Browse the source code, submit pull requests, or star the repository to support the project.'}
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: '#06b6d4' }}
          >
            <ExternalLink className="h-4 w-4" />
            {locale === 'ar' ? 'قيّم على GitHub' : 'Star on GitHub'}
          </a>
        </div>
      </motion.section>
    </div>
  );
}
