import type { Exam } from '@/types';

export const exams: Exam[] = [
  {
    id: 'foundations-exam',
    title: {
      en: 'AI Foundations Exam',
      ar: 'اختبار أساسيات الذكاء الاصطناعي',
    },
    description: {
      en: 'Test your understanding of AI, machine learning, deep learning, LLMs, and AI agents fundamentals.',
      ar: 'اختبر فهمك للذكاء الاصطناعي، التعلم الآلي، التعلم العميق، النماذج اللغوية الكبيرة، وأساسيات وكلاء الذكاء الاصطناعي.',
    },
    difficulty: 'beginner',
    timeMinutes: 20,
    questionIds: ['q1', 'q5', 'q6', 'q39', 'q40', 'q41', 'q42', 'q43'],
    passingScore: 70,
  },
  {
    id: 'core-concepts-exam',
    title: {
      en: 'Core Agent Concepts Exam',
      ar: 'اختبار مفاهيم الوكلاء الأساسية',
    },
    description: {
      en: 'Assess your knowledge of tools, function calling, memory, RAG, embeddings, and agent orchestration.',
      ar: 'قيّم معرفتك بالأدوات، استدعاء الوظائف، الذاكرة، التوليد المعزز بالاسترجاع، التضمينات، وتنسيق الوكلاء.',
    },
    difficulty: 'intermediate',
    timeMinutes: 30,
    questionIds: ['q2', 'q3', 'q6', 'q9', 'q10', 'q11', 'q12', 'q18', 'q19', 'q20'],
    passingScore: 70,
  },
  {
    id: 'function-calling-exam',
    title: {
      en: 'Function Calling Mastery Exam',
      ar: 'اختبار إتقان استدعاء الوظائف',
    },
    description: {
      en: 'Prove your expertise in function calling patterns, structured outputs, parallel calls, and schema design.',
      ar: 'أثبت خبرتك في أنماط استدعاء الوظائف، المخرجات المنظمة، الاستدعاءات المتوازية، وتصميم المخططات.',
    },
    difficulty: 'intermediate',
    timeMinutes: 25,
    questionIds: ['q9', 'q10', 'q11', 'q12', 'q44', 'q45', 'q46', 'q47'],
    passingScore: 75,
  },
  {
    id: 'frameworks-exam',
    title: {
      en: 'Agent Frameworks Exam',
      ar: 'اختبار أطر عمل الوكلاء',
    },
    description: {
      en: 'Test your knowledge across major agent frameworks: LangGraph, AutoGen, Google ADK, Bedrock, CrewAI, and more.',
      ar: 'اختبر معرفتك عبر أطر عمل الوكلاء الرئيسية: LangGraph، AutoGen، Google ADK، Bedrock، CrewAI، والمزيد.',
    },
    difficulty: 'advanced',
    timeMinutes: 40,
    questionIds: ['q13', 'q14', 'q15', 'q16', 'q17', 'q27', 'q28', 'q29', 'q30', 'q31', 'q32', 'q61', 'q62', 'q63', 'q64', 'q65', 'q66', 'q67', 'q68', 'q69'],
    passingScore: 70,
  },
  {
    id: 'memory-systems-exam',
    title: {
      en: 'Memory Systems Exam',
      ar: 'اختبار أنظمة الذاكرة',
    },
    description: {
      en: 'Evaluate your understanding of agent memory: working, episodic, semantic memory, vector databases, and retrieval.',
      ar: 'قيّم فهمك لذاكرة الوكلاء: الذاكرة العاملة، العرضية، الدلالية، قواعد البيانات المتجهية، والاسترجاع.',
    },
    difficulty: 'intermediate',
    timeMinutes: 25,
    questionIds: ['q18', 'q19', 'q20', 'q21', 'q52', 'q53', 'q54', 'q58'],
    passingScore: 70,
  },
  {
    id: 'design-patterns-exam',
    title: {
      en: 'Agentic Design Patterns Exam',
      ar: 'اختبار أنماط التصميم الوكيلي',
    },
    description: {
      en: 'Demonstrate mastery of agentic patterns: Reflection, Planning, Tool Use, Multi-Agent Collaboration, and reasoning techniques.',
      ar: 'أظهر إتقانك لأنماط التصميم الوكيلي: الانعكاس، التخطيط، استخدام الأدوات، التعاون متعدد الوكلاء، وتقنيات الاستدلال.',
    },
    difficulty: 'advanced',
    timeMinutes: 30,
    questionIds: ['q22', 'q23', 'q24', 'q25', 'q26', 'q49', 'q50', 'q51'],
    passingScore: 75,
  },
  {
    id: 'security-exam',
    title: {
      en: 'AI Security & Safety Exam',
      ar: 'اختبار أمان وسلامة الذكاء الاصطناعي',
    },
    description: {
      en: 'Test your knowledge of AI security: prompt injection, jailbreaking, adversarial attacks, sandboxing, and responsible AI.',
      ar: 'اختبر معرفتك بأمان الذكاء الاصطناعي: حقن الأوامر، كسر الحماية، الهجمات العدائية، العزل، والذكاء الاصطناعي المسؤول.',
    },
    difficulty: 'advanced',
    timeMinutes: 30,
    questionIds: ['q4', 'q7', 'q8', 'q73', 'q74', 'q75', 'q76', 'q77'],
    passingScore: 75,
  },
  {
    id: 'production-exam',
    title: {
      en: 'Production & LLMOps Exam',
      ar: 'اختبار الإنتاج وعمليات النماذج اللغوية',
    },
    description: {
      en: 'Prove your readiness for production: observability, model serving, cost optimization, distributed systems, and deployment.',
      ar: 'أثبت جاهزيتك للإنتاج: المراقبة، خدمة النماذج، تحسين التكلفة، الأنظمة الموزعة، والنشر.',
    },
    difficulty: 'advanced',
    timeMinutes: 35,
    questionIds: ['q84', 'q85', 'q86', 'q87', 'q88', 'q81', 'q82', 'q83'],
    passingScore: 75,
  },
];
