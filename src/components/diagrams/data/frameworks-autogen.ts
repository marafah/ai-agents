import {
  Bot,
  Settings,
  Wrench,
  MessageSquare,
  CheckCircle,
  Users,
  UserCheck,
  Code,
  Play,
  Eye,
  RefreshCw,
  ArrowUpCircle,
  Layers,
  GraduationCap,
  Cpu,
  Send,
  Sparkles,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksAutogenDiagrams: DiagramDataMap = {
  'autogen-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'AutoGen Agent Workflow',
        ar: 'سير عمل وكيل AutoGen',
      },
      data: {
        steps: [
          {
            label: { en: 'Define Agents', ar: 'تعريف الوكلاء' },
            sublabel: { en: 'Configure roles & behavior', ar: 'تكوين الأدوار والسلوك' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'Configure', ar: 'تهيئة' },
            sublabel: { en: 'Set LLM & parameters', ar: 'ضبط النموذج والمعاملات' },
            color: '#8b5cf6',
            icon: Settings,
          },
          {
            label: { en: 'Register Tools', ar: 'تسجيل الأدوات' },
            sublabel: { en: 'Attach capabilities', ar: 'إرفاق القدرات' },
            color: '#f59e0b',
            icon: Wrench,
          },
          {
            label: { en: 'Start Conversation', ar: 'بدء المحادثة' },
            sublabel: { en: 'Initiate agent chat', ar: 'بدء محادثة الوكيل' },
            color: '#06b6d4',
            icon: MessageSquare,
          },
          {
            label: { en: 'Get Result', ar: 'الحصول على النتيجة' },
            sublabel: { en: 'Receive final output', ar: 'استلام المخرجات النهائية' },
            color: '#10b981',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'autogen-conversable-agents': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'ConversableAgent Hierarchy',
        ar: 'التسلسل الهرمي لـ ConversableAgent',
      },
      data: {
        center: {
          label: { en: 'ConversableAgent', ar: 'الوكيل القابل للمحادثة' },
          color: '#8b5cf6',
          icon: MessageSquare,
        },
        spokes: [
          {
            label: { en: 'AssistantAgent', ar: 'وكيل المساعد' },
            description: { en: 'AI-powered code & text generation', ar: 'توليد الكود والنصوص بالذكاء الاصطناعي' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'UserProxyAgent', ar: 'وكيل وكيل المستخدم' },
            description: { en: 'Executes code on behalf of user', ar: 'ينفذ الكود نيابة عن المستخدم' },
            color: '#10b981',
            icon: UserCheck,
          },
          {
            label: { en: 'GroupChatAgent', ar: 'وكيل الدردشة الجماعية' },
            description: { en: 'Manages multi-agent conversations', ar: 'يدير المحادثات متعددة الوكلاء' },
            color: '#f59e0b',
            icon: Users,
          },
          {
            label: { en: 'CustomAgent', ar: 'وكيل مخصص' },
            description: { en: 'User-defined specialized agent', ar: 'وكيل متخصص يحدده المستخدم' },
            color: '#f43f5e',
            icon: Settings,
          },
        ],
      },
    },
  ],

  'autogen-code-executors': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Code Execution Pipeline',
        ar: 'خط أنابيب تنفيذ الكود',
      },
      data: {
        steps: [
          {
            label: { en: 'Task', ar: 'المهمة' },
            sublabel: { en: 'Receive coding task', ar: 'استلام مهمة البرمجة' },
            color: '#3b82f6',
            icon: Cpu,
          },
          {
            label: { en: 'Generate Code', ar: 'توليد الكود' },
            sublabel: { en: 'LLM writes code', ar: 'النموذج يكتب الكود' },
            color: '#8b5cf6',
            icon: Code,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            sublabel: { en: 'Run in sandbox', ar: 'تشغيل في بيئة معزولة' },
            color: '#f59e0b',
            icon: Play,
          },
          {
            label: { en: 'Verify Output', ar: 'التحقق من المخرجات' },
            sublabel: { en: 'Check results', ar: 'فحص النتائج' },
            color: '#06b6d4',
            icon: Eye,
          },
          {
            label: { en: 'Iterate', ar: 'تكرار' },
            sublabel: { en: 'Fix errors if needed', ar: 'إصلاح الأخطاء إن لزم' },
            color: '#10b981',
            icon: RefreshCw,
          },
        ],
      },
    },
  ],

  'autogen-group-chat': [
    {
      template: 'cycle',
      position: 'in-explanation',
      title: {
        en: 'Group Chat Communication Cycle',
        ar: 'دورة اتصال الدردشة الجماعية',
      },
      data: {
        nodes: [
          {
            label: { en: 'Agent A', ar: 'الوكيل أ' },
            description: { en: 'Proposes solution', ar: 'يقترح حلاً' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'Agent B', ar: 'الوكيل ب' },
            description: { en: 'Reviews & refines', ar: 'يراجع ويحسّن' },
            color: '#f59e0b',
            icon: Eye,
          },
          {
            label: { en: 'Agent C', ar: 'الوكيل ج' },
            description: { en: 'Validates output', ar: 'يتحقق من المخرجات' },
            color: '#10b981',
            icon: CheckCircle,
          },
          {
            label: { en: 'Manager', ar: 'المدير' },
            description: { en: 'Selects next speaker', ar: 'يختار المتحدث التالي' },
            color: '#8b5cf6',
            icon: Users,
          },
        ],
        centerLabel: { en: 'Group Chat', ar: 'الدردشة الجماعية' },
      },
    },
  ],

  'autogen-nested-chat': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Nested Chat Architecture',
        ar: 'معمارية المحادثة المتداخلة',
      },
      data: {
        layers: [
          {
            label: { en: 'Outer Conversation', ar: 'المحادثة الخارجية' },
            description: { en: 'Main agent dialogue', ar: 'حوار الوكيل الرئيسي' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Inner Task 1', ar: 'المهمة الداخلية 1' },
            description: { en: 'Sub-conversation for subtask', ar: 'محادثة فرعية للمهمة الفرعية' },
            color: '#8b5cf6',
            icon: Layers,
          },
          {
            label: { en: 'Inner Task 2', ar: 'المهمة الداخلية 2' },
            description: { en: 'Additional nested processing', ar: 'معالجة متداخلة إضافية' },
            color: '#f59e0b',
            icon: Layers,
          },
          {
            label: { en: 'Results Bubble Up', ar: 'النتائج تصعد للأعلى' },
            description: { en: 'Inner results propagate outward', ar: 'النتائج الداخلية تنتشر للخارج' },
            color: '#06b6d4',
            icon: ArrowUpCircle,
          },
          {
            label: { en: 'Continue Outer', ar: 'متابعة الخارجية' },
            description: { en: 'Resume main conversation', ar: 'استئناف المحادثة الرئيسية' },
            color: '#10b981',
            icon: RefreshCw,
          },
        ],
      },
    },
  ],

  'autogen-tool-use': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Tool Use Flow in AutoGen',
        ar: 'تدفق استخدام الأدوات في AutoGen',
      },
      data: {
        steps: [
          {
            label: { en: 'Agent', ar: 'الوكيل' },
            sublabel: { en: 'Receives request', ar: 'يستلم الطلب' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'Select Tool', ar: 'اختيار الأداة' },
            sublabel: { en: 'Pick the right tool', ar: 'اختيار الأداة المناسبة' },
            color: '#8b5cf6',
            icon: Wrench,
          },
          {
            label: { en: 'Generate Call', ar: 'توليد الاستدعاء' },
            sublabel: { en: 'Create function call', ar: 'إنشاء استدعاء الوظيفة' },
            color: '#f59e0b',
            icon: Code,
          },
          {
            label: { en: 'Execute Tool', ar: 'تنفيذ الأداة' },
            sublabel: { en: 'Run the function', ar: 'تشغيل الوظيفة' },
            color: '#06b6d4',
            icon: Play,
          },
          {
            label: { en: 'Return Result', ar: 'إرجاع النتيجة' },
            sublabel: { en: 'Get tool output', ar: 'الحصول على مخرجات الأداة' },
            color: '#10b981',
            icon: CheckCircle,
          },
          {
            label: { en: 'Agent Response', ar: 'استجابة الوكيل' },
            sublabel: { en: 'Final answer', ar: 'الإجابة النهائية' },
            color: '#f43f5e',
            icon: Send,
          },
        ],
      },
    },
  ],

  'autogen-custom-agents': [
    {
      template: 'comparison',
      position: 'in-explanation',
      title: {
        en: 'AutoGen Agent Types',
        ar: 'أنواع وكلاء AutoGen',
      },
      data: {
        items: [
          {
            title: { en: 'Assistant', ar: 'المساعد' },
            description: { en: 'Generates code and solutions using LLM', ar: 'يولّد الكود والحلول باستخدام النموذج' },
            color: '#3b82f6',
            icon: Sparkles,
            features: {
              en: ['Code generation', 'Text analysis', 'Problem solving', 'LLM-powered'],
              ar: ['توليد الكود', 'تحليل النصوص', 'حل المشكلات', 'مدعوم بالنموذج'],
            },
          },
          {
            title: { en: 'User Proxy', ar: 'وكيل المستخدم' },
            description: { en: 'Executes code and represents the user', ar: 'ينفذ الكود ويمثل المستخدم' },
            color: '#10b981',
            icon: UserCheck,
            features: {
              en: ['Code execution', 'Human input', 'Tool invocation', 'Sandbox runner'],
              ar: ['تنفيذ الكود', 'إدخال بشري', 'استدعاء الأدوات', 'تشغيل معزول'],
            },
          },
          {
            title: { en: 'Critic', ar: 'الناقد' },
            description: { en: 'Reviews and validates agent outputs', ar: 'يراجع ويتحقق من مخرجات الوكلاء' },
            color: '#f59e0b',
            icon: Eye,
            features: {
              en: ['Output review', 'Quality checks', 'Error detection', 'Feedback loops'],
              ar: ['مراجعة المخرجات', 'فحوصات الجودة', 'كشف الأخطاء', 'حلقات التغذية الراجعة'],
            },
          },
          {
            title: { en: 'Teacher', ar: 'المعلم' },
            description: { en: 'Instructs and guides other agents', ar: 'يوجّه ويرشد الوكلاء الآخرين' },
            color: '#8b5cf6',
            icon: GraduationCap,
            features: {
              en: ['Task instruction', 'Knowledge sharing', 'Step-by-step guidance', 'Curriculum design'],
              ar: ['تعليمات المهام', 'مشاركة المعرفة', 'توجيه خطوة بخطوة', 'تصميم المنهج'],
            },
          },
        ],
      },
    },
  ],
};
