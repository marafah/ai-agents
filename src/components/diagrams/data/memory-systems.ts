import {
  CalendarClock,
  Pickaxe,
  Database,
  Search,
  Syringe,
  Layers,
  Brain,
  BookOpen,
  Lightbulb,
  Cog,
  Box,
  Table2,
  Filter,
  MessageSquare,
  ListRestart,
  FileText,
  Archive,
  Clock,
  HardDrive,
  Tag,
  Combine,
  User,
  ScrollText,
  Sparkles,
  Save,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const memorySystemsDiagrams: DiagramDataMap = {
  'langmem-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'LangMem Memory Pipeline',
        ar: 'خط أنابيب ذاكرة لانغ ميم',
      },
      data: {
        steps: [
          {
            label: { en: 'Event', ar: 'الحدث' },
            sublabel: { en: 'Interaction occurs', ar: 'حدوث التفاعل' },
            color: '#3b82f6',
            icon: CalendarClock,
          },
          {
            label: { en: 'Extract', ar: 'استخراج' },
            sublabel: { en: 'Pull key information', ar: 'سحب المعلومات الأساسية' },
            color: '#f59e0b',
            icon: Pickaxe,
          },
          {
            label: { en: 'Store', ar: 'تخزين' },
            sublabel: { en: 'Save to memory', ar: 'حفظ في الذاكرة' },
            color: '#10b981',
            icon: Database,
          },
          {
            label: { en: 'Retrieve', ar: 'استرجاع' },
            sublabel: { en: 'Fetch relevant memories', ar: 'جلب الذكريات ذات الصلة' },
            color: '#8b5cf6',
            icon: Search,
          },
          {
            label: { en: 'Inject', ar: 'حقن' },
            sublabel: { en: 'Add to context', ar: 'إضافة إلى السياق' },
            color: '#f43f5e',
            icon: Syringe,
          },
        ],
      },
    },
  ],

  'mem0-memory-layer': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'Mem0 Memory Layer Architecture',
        ar: 'معمارية طبقة ذاكرة Mem0',
      },
      data: {
        layers: [
          {
            label: { en: 'User Input', ar: 'مدخلات المستخدم' },
            description: { en: 'Incoming user message', ar: 'رسالة المستخدم الواردة' },
            color: '#3b82f6',
            icon: User,
          },
          {
            label: { en: 'Memory Search', ar: 'البحث في الذاكرة' },
            description: { en: 'Query stored memories', ar: 'استعلام الذكريات المخزنة' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Relevant Memories', ar: 'الذكريات ذات الصلة' },
            description: { en: 'Top-k matching results', ar: 'أفضل النتائج المطابقة' },
            color: '#8b5cf6',
            icon: Filter,
          },
          {
            label: { en: 'Context Injection', ar: 'حقن السياق' },
            description: { en: 'Merge memories with prompt', ar: 'دمج الذكريات مع الأمر' },
            color: '#10b981',
            icon: Syringe,
          },
          {
            label: { en: 'LLM Response', ar: 'استجابة النموذج' },
            description: { en: 'Memory-aware answer', ar: 'إجابة واعية بالذاكرة' },
            color: '#f43f5e',
            icon: Brain,
          },
        ],
      },
    },
  ],

  'coala-architecture': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'COALA Memory Architecture',
        ar: 'معمارية ذاكرة COALA',
      },
      data: {
        center: {
          label: { en: 'COALA Core', ar: 'نواة COALA' },
          color: '#8b5cf6',
          icon: Brain,
        },
        spokes: [
          {
            label: { en: 'Working Memory', ar: 'الذاكرة العاملة' },
            description: { en: 'Current context and active data', ar: 'السياق الحالي والبيانات النشطة' },
            color: '#3b82f6',
            icon: Layers,
          },
          {
            label: { en: 'Episodic Memory', ar: 'الذاكرة العرضية' },
            description: { en: 'Past experiences and events', ar: 'التجارب والأحداث السابقة' },
            color: '#10b981',
            icon: BookOpen,
          },
          {
            label: { en: 'Semantic Memory', ar: 'الذاكرة الدلالية' },
            description: { en: 'Facts, concepts, and knowledge', ar: 'الحقائق والمفاهيم والمعرفة' },
            color: '#f59e0b',
            icon: Lightbulb,
          },
          {
            label: { en: 'Procedural Memory', ar: 'الذاكرة الإجرائية' },
            description: { en: 'Skills and action sequences', ar: 'المهارات وتسلسلات الإجراءات' },
            color: '#f43f5e',
            icon: Cog,
          },
        ],
      },
    },
  ],

  'supabase-agent-memory': [
    {
      template: 'flow',
      position: 'in-explanation',
      title: {
        en: 'Supabase Agent Memory Pipeline',
        ar: 'خط أنابيب ذاكرة وكيل Supabase',
      },
      data: {
        steps: [
          {
            label: { en: 'Agent', ar: 'الوكيل' },
            sublabel: { en: 'Generates data', ar: 'يولد البيانات' },
            color: '#3b82f6',
            icon: Brain,
          },
          {
            label: { en: 'Embed', ar: 'تضمين' },
            sublabel: { en: 'Convert to vector', ar: 'تحويل إلى متجه' },
            color: '#f59e0b',
            icon: Box,
          },
          {
            label: { en: 'Supabase pgvector', ar: 'Supabase pgvector' },
            sublabel: { en: 'Store in vector DB', ar: 'تخزين في قاعدة متجهات' },
            color: '#10b981',
            icon: Table2,
          },
          {
            label: { en: 'Query', ar: 'استعلام' },
            sublabel: { en: 'Similarity search', ar: 'بحث بالتشابه' },
            color: '#8b5cf6',
            icon: Search,
          },
          {
            label: { en: 'Context', ar: 'السياق' },
            sublabel: { en: 'Inject into prompt', ar: 'حقن في الأمر' },
            color: '#f43f5e',
            icon: Sparkles,
          },
        ],
      },
    },
  ],

  'memory-types-deep-dive': [
    {
      template: 'comparison',
      position: 'after-definition',
      title: {
        en: 'Memory Types Comparison',
        ar: 'مقارنة أنواع الذاكرة',
      },
      data: {
        items: [
          {
            title: { en: 'Short-Term (Buffer)', ar: 'قصيرة المدى (مخزن مؤقت)' },
            description: { en: 'Recent conversation context', ar: 'سياق المحادثة الأخيرة' },
            color: '#3b82f6',
            icon: Clock,
            features: {
              en: ['Limited window', 'Fast access', 'Auto-expires'],
              ar: ['نافذة محدودة', 'وصول سريع', 'تنتهي تلقائياً'],
            },
          },
          {
            title: { en: 'Long-Term (Vector DB)', ar: 'طويلة المدى (قاعدة متجهات)' },
            description: { en: 'Persistent knowledge store', ar: 'مخزن معرفة دائم' },
            color: '#10b981',
            icon: HardDrive,
            features: {
              en: ['Persistent storage', 'Semantic search', 'Scalable'],
              ar: ['تخزين دائم', 'بحث دلالي', 'قابل للتوسع'],
            },
          },
          {
            title: { en: 'Episodic (Events)', ar: 'عرضية (أحداث)' },
            description: { en: 'Specific past interactions', ar: 'تفاعلات سابقة محددة' },
            color: '#f59e0b',
            icon: CalendarClock,
            features: {
              en: ['Time-stamped', 'Event-based', 'Contextual recall'],
              ar: ['مختومة زمنياً', 'مبنية على الأحداث', 'استرجاع سياقي'],
            },
          },
          {
            title: { en: 'Semantic (Facts)', ar: 'دلالية (حقائق)' },
            description: { en: 'Structured factual knowledge', ar: 'معرفة حقائقية منظمة' },
            color: '#8b5cf6',
            icon: Tag,
            features: {
              en: ['Entity-based', 'Relationship mapping', 'Fact retrieval'],
              ar: ['مبنية على الكيانات', 'ربط العلاقات', 'استرجاع الحقائق'],
            },
          },
        ],
      },
    },
  ],

  'conversational-memory': [
    {
      template: 'flow',
      position: 'after-analogy',
      title: {
        en: 'Conversational Memory Flow',
        ar: 'تدفق ذاكرة المحادثة',
      },
      data: {
        steps: [
          {
            label: { en: 'User Message', ar: 'رسالة المستخدم' },
            sublabel: { en: 'New input received', ar: 'مدخل جديد مستلم' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Buffer', ar: 'المخزن المؤقت' },
            sublabel: { en: 'Add to recent history', ar: 'إضافة إلى السجل الأخير' },
            color: '#f59e0b',
            icon: ScrollText,
          },
          {
            label: { en: 'Summarize', ar: 'تلخيص' },
            sublabel: { en: 'Compress old messages', ar: 'ضغط الرسائل القديمة' },
            color: '#8b5cf6',
            icon: FileText,
          },
          {
            label: { en: 'Store', ar: 'تخزين' },
            sublabel: { en: 'Save to long-term', ar: 'حفظ طويل المدى' },
            color: '#10b981',
            icon: Save,
          },
          {
            label: { en: 'Retrieve on Next Turn', ar: 'استرجاع في الدورة التالية' },
            sublabel: { en: 'Fetch relevant context', ar: 'جلب السياق ذي الصلة' },
            color: '#f43f5e',
            icon: ListRestart,
          },
        ],
      },
    },
  ],

  'long-term-memory-strategies': [
    {
      template: 'comparison',
      position: 'after-explanation',
      title: {
        en: 'Long-Term Memory Strategies',
        ar: 'استراتيجيات الذاكرة طويلة المدى',
      },
      data: {
        items: [
          {
            title: { en: 'RAG-based', ar: 'مبنية على RAG' },
            description: { en: 'Retrieve and augment with vectors', ar: 'استرجاع وتعزيز بالمتجهات' },
            color: '#3b82f6',
            icon: Search,
            features: {
              en: ['Vector similarity', 'Dynamic retrieval', 'Source grounding'],
              ar: ['تشابه المتجهات', 'استرجاع ديناميكي', 'تأصيل بالمصادر'],
            },
          },
          {
            title: { en: 'Summary-based', ar: 'مبنية على التلخيص' },
            description: { en: 'Compress conversations into summaries', ar: 'ضغط المحادثات إلى ملخصات' },
            color: '#10b981',
            icon: FileText,
            features: {
              en: ['Token efficient', 'Preserves gist', 'Progressive compression'],
              ar: ['كفاءة في الرموز', 'يحافظ على الجوهر', 'ضغط تدريجي'],
            },
          },
          {
            title: { en: 'Entity-based', ar: 'مبنية على الكيانات' },
            description: { en: 'Track entities and their attributes', ar: 'تتبع الكيانات وسماتها' },
            color: '#f59e0b',
            icon: Tag,
            features: {
              en: ['Structured data', 'Relationship tracking', 'Entity updates'],
              ar: ['بيانات منظمة', 'تتبع العلاقات', 'تحديث الكيانات'],
            },
          },
          {
            title: { en: 'Hybrid', ar: 'هجينة' },
            description: { en: 'Combines multiple strategies', ar: 'تجمع بين استراتيجيات متعددة' },
            color: '#8b5cf6',
            icon: Combine,
            features: {
              en: ['Best of all approaches', 'Adaptive retrieval', 'Multi-layer memory'],
              ar: ['أفضل ما في جميع الأساليب', 'استرجاع تكيفي', 'ذاكرة متعددة الطبقات'],
            },
          },
        ],
      },
    },
  ],
};
