import {
  User,
  Brain,
  GitBranch,
  FileJson,
  Play,
  CheckCircle,
  MessageSquare,
  Send,
  SplitSquareVertical,
  Wrench,
  Combine,
  Reply,
  Braces,
  List,
  ToggleLeft,
  Layers,
  ArrowRightLeft,
  Repeat,
  Zap,
  Tag,
  FileText,
  AlignLeft,
  Settings,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const functionCallingDiagrams: DiagramDataMap = {
  'function-calling-deep-dive': [
    {
      template: 'multi-flow',
      position: 'after-definition',
      title: {
        en: 'Function Calling Request-Response Cycle',
        ar: 'دورة الطلب والاستجابة لاستدعاء الدوال',
      },
      data: {
        phases: [
          {
            label: { en: 'Request Phase', ar: 'مرحلة الطلب' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'User', ar: 'المستخدم' },
                sublabel: { en: 'Sends query', ar: 'يرسل الاستعلام' },
                color: '#3b82f6',
                icon: User,
              },
              {
                label: { en: 'LLM', ar: 'النموذج' },
                sublabel: { en: 'Analyzes intent', ar: 'يحلل النية' },
                color: '#8b5cf6',
                icon: Brain,
              },
              {
                label: { en: 'Tool Decision', ar: 'قرار الأداة' },
                sublabel: { en: 'Selects function', ar: 'يختار الدالة' },
                color: '#f59e0b',
                icon: GitBranch,
              },
              {
                label: { en: 'JSON Call', ar: 'استدعاء JSON' },
                sublabel: { en: 'Structured request', ar: 'طلب منظم' },
                color: '#06b6d4',
                icon: FileJson,
              },
            ],
          },
          {
            label: { en: 'Response Phase', ar: 'مرحلة الاستجابة' },
            color: '#10b981',
            steps: [
              {
                label: { en: 'Execute', ar: 'التنفيذ' },
                sublabel: { en: 'Run function', ar: 'تشغيل الدالة' },
                color: '#10b981',
                icon: Play,
              },
              {
                label: { en: 'Result', ar: 'النتيجة' },
                sublabel: { en: 'Function output', ar: 'مخرجات الدالة' },
                color: '#14b8a6',
                icon: CheckCircle,
              },
              {
                label: { en: 'LLM', ar: 'النموذج' },
                sublabel: { en: 'Formats response', ar: 'يصيغ الاستجابة' },
                color: '#8b5cf6',
                icon: Brain,
              },
              {
                label: { en: 'Answer', ar: 'الإجابة' },
                sublabel: { en: 'Natural language', ar: 'لغة طبيعية' },
                color: '#f43f5e',
                icon: MessageSquare,
              },
            ],
          },
        ],
        connector: { en: 'then', ar: 'ثم' },
      },
    },
  ],

  'parallel-function-calling': [
    {
      template: 'flow',
      position: 'in-explanation',
      title: {
        en: 'Parallel Function Calling Flow',
        ar: 'تدفق استدعاء الدوال المتوازي',
      },
      data: {
        steps: [
          {
            label: { en: 'User Query', ar: 'استعلام المستخدم' },
            sublabel: { en: 'Multi-part request', ar: 'طلب متعدد الأجزاء' },
            color: '#3b82f6',
            icon: Send,
          },
          {
            label: { en: 'LLM Analysis', ar: 'تحليل النموذج' },
            sublabel: { en: 'Identifies parallel tasks', ar: 'يحدد المهام المتوازية' },
            color: '#8b5cf6',
            icon: Brain,
          },
          {
            label: { en: 'Tool A', ar: 'الأداة أ' },
            sublabel: { en: 'Concurrent call', ar: 'استدعاء متزامن' },
            color: '#f59e0b',
            icon: Wrench,
          },
          {
            label: { en: 'Tool B', ar: 'الأداة ب' },
            sublabel: { en: 'Concurrent call', ar: 'استدعاء متزامن' },
            color: '#10b981',
            icon: Wrench,
          },
          {
            label: { en: 'Aggregate', ar: 'التجميع' },
            sublabel: { en: 'Merge all results', ar: 'دمج جميع النتائج' },
            color: '#06b6d4',
            icon: Combine,
          },
          {
            label: { en: 'Response', ar: 'الاستجابة' },
            sublabel: { en: 'Unified answer', ar: 'إجابة موحدة' },
            color: '#f43f5e',
            icon: Reply,
          },
        ],
      },
    },
  ],

  'structured-outputs': [
    {
      template: 'comparison',
      position: 'after-definition',
      title: {
        en: 'Structured Output Types',
        ar: 'أنواع المخرجات المنظمة',
      },
      data: {
        items: [
          {
            title: { en: 'JSON Object', ar: 'كائن JSON' },
            description: { en: 'Key-value pairs for structured data', ar: 'أزواج مفتاح-قيمة للبيانات المنظمة' },
            color: '#3b82f6',
            icon: Braces,
            features: {
              en: ['Named fields', 'Type-safe values', 'Nested structures'],
              ar: ['حقول مسماة', 'قيم آمنة النوع', 'هياكل متداخلة'],
            },
          },
          {
            title: { en: 'JSON Array', ar: 'مصفوفة JSON' },
            description: { en: 'Ordered lists of items', ar: 'قوائم مرتبة من العناصر' },
            color: '#10b981',
            icon: List,
            features: {
              en: ['Ordered elements', 'Iterable results', 'Batch processing'],
              ar: ['عناصر مرتبة', 'نتائج قابلة للتكرار', 'معالجة دفعية'],
            },
          },
          {
            title: { en: 'Enum / Literal', ar: 'تعداد / قيمة حرفية' },
            description: { en: 'Constrained value sets', ar: 'مجموعات قيم مقيدة' },
            color: '#f59e0b',
            icon: ToggleLeft,
            features: {
              en: ['Fixed options', 'Classification', 'Validation built-in'],
              ar: ['خيارات ثابتة', 'تصنيف', 'تحقق مدمج'],
            },
          },
          {
            title: { en: 'Nested Schema', ar: 'مخطط متداخل' },
            description: { en: 'Complex hierarchical data', ar: 'بيانات هرمية معقدة' },
            color: '#8b5cf6',
            icon: Layers,
            features: {
              en: ['Deep nesting', 'References', 'Recursive types'],
              ar: ['تداخل عميق', 'مراجع', 'أنواع تكرارية'],
            },
          },
        ],
      },
    },
  ],

  'function-calling-patterns': [
    {
      template: 'comparison',
      position: 'after-explanation',
      title: {
        en: 'Function Calling Patterns',
        ar: 'أنماط استدعاء الدوال',
      },
      data: {
        items: [
          {
            title: { en: 'Single-Turn', ar: 'دورة واحدة' },
            description: { en: 'One call, one response', ar: 'استدعاء واحد، استجابة واحدة' },
            color: '#3b82f6',
            icon: ArrowRightLeft,
            features: {
              en: ['Simple queries', 'Low latency', 'Stateless'],
              ar: ['استعلامات بسيطة', 'زمن استجابة منخفض', 'بدون حالة'],
            },
          },
          {
            title: { en: 'Multi-Turn', ar: 'متعدد الدورات' },
            description: { en: 'Sequential calls with context', ar: 'استدعاءات متتالية مع سياق' },
            color: '#10b981',
            icon: Repeat,
            features: {
              en: ['Conversational', 'Context-aware', 'Iterative refinement'],
              ar: ['حواري', 'واعي بالسياق', 'تحسين تكراري'],
            },
          },
          {
            title: { en: 'Chained', ar: 'متسلسل' },
            description: { en: 'Output feeds into next call', ar: 'المخرجات تغذي الاستدعاء التالي' },
            color: '#f59e0b',
            icon: GitBranch,
            features: {
              en: ['Pipeline pattern', 'Data transformation', 'Dependent calls'],
              ar: ['نمط الأنابيب', 'تحويل البيانات', 'استدعاءات مترابطة'],
            },
          },
          {
            title: { en: 'Parallel', ar: 'متوازي' },
            description: { en: 'Multiple simultaneous calls', ar: 'استدعاءات متزامنة متعددة' },
            color: '#8b5cf6',
            icon: Zap,
            features: {
              en: ['Concurrent execution', 'Faster responses', 'Independent tasks'],
              ar: ['تنفيذ متزامن', 'استجابات أسرع', 'مهام مستقلة'],
            },
          },
        ],
      },
    },
  ],

  'tool-schema-design': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'Tool Schema Design Layers',
        ar: 'طبقات تصميم مخطط الأداة',
      },
      data: {
        layers: [
          {
            label: { en: 'Function Name', ar: 'اسم الدالة' },
            description: { en: 'Clear, descriptive identifier', ar: 'معرّف واضح ووصفي' },
            color: '#3b82f6',
            icon: Tag,
          },
          {
            label: { en: 'Description', ar: 'الوصف' },
            description: { en: 'What the function does and when to use it', ar: 'ماذا تفعل الدالة ومتى تُستخدم' },
            color: '#10b981',
            icon: AlignLeft,
          },
          {
            label: { en: 'Parameters', ar: 'المعاملات' },
            description: { en: 'Input arguments with types', ar: 'وسائط الإدخال مع الأنواع' },
            color: '#f59e0b',
            icon: Settings,
          },
          {
            label: { en: 'Type Validation', ar: 'التحقق من الأنواع' },
            description: { en: 'Enforce correct data types', ar: 'فرض أنواع البيانات الصحيحة' },
            color: '#8b5cf6',
            icon: ShieldCheck,
          },
          {
            label: { en: 'Error Handling', ar: 'معالجة الأخطاء' },
            description: { en: 'Graceful failure responses', ar: 'استجابات فشل أنيقة' },
            color: '#f43f5e',
            icon: AlertTriangle,
          },
        ],
      },
    },
  ],
};
