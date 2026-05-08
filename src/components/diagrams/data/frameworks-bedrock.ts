import {
  Brain,
  Settings,
  Layers,
  Database,
  Rocket,
  FileText,
  Scissors,
  Box,
  HardDrive,
  HelpCircle,
  Search,
  Sparkles,
  MessageSquare,
  Bot,
  Cog,
  Send,
  Shield,
  Ban,
  Filter,
  Eye,
  FileCheck,
  BarChart3,
  ClipboardCheck,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksBedrockDiagrams: DiagramDataMap = {
  'bedrock-agents-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Bedrock Agent Setup Flow',
        ar: 'تدفق إعداد وكيل Bedrock',
      },
      data: {
        steps: [
          {
            label: { en: 'Foundation Model', ar: 'النموذج الأساسي' },
            sublabel: { en: 'Select base LLM', ar: 'اختيار النموذج الأساسي' },
            color: '#3b82f6',
            icon: Brain,
          },
          {
            label: { en: 'Agent Config', ar: 'تهيئة الوكيل' },
            sublabel: { en: 'Define instructions', ar: 'تحديد التعليمات' },
            color: '#8b5cf6',
            icon: Settings,
          },
          {
            label: { en: 'Action Groups', ar: 'مجموعات الإجراءات' },
            sublabel: { en: 'Attach API actions', ar: 'إرفاق إجراءات API' },
            color: '#f59e0b',
            icon: Layers,
          },
          {
            label: { en: 'Knowledge Base', ar: 'قاعدة المعرفة' },
            sublabel: { en: 'Connect data sources', ar: 'ربط مصادر البيانات' },
            color: '#06b6d4',
            icon: Database,
          },
          {
            label: { en: 'Deploy', ar: 'نشر' },
            sublabel: { en: 'Publish agent', ar: 'نشر الوكيل' },
            color: '#10b981',
            icon: Rocket,
          },
        ],
      },
    },
  ],

  'bedrock-knowledge-bases': [
    {
      template: 'multi-flow',
      position: 'after-definition',
      title: {
        en: 'Knowledge Base: Ingestion & Query',
        ar: 'قاعدة المعرفة: الاستيعاب والاستعلام',
      },
      data: {
        phases: [
          {
            label: { en: 'Ingestion', ar: 'الاستيعاب' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Documents', ar: 'المستندات' },
                sublabel: { en: 'Source files', ar: 'ملفات المصدر' },
                color: '#3b82f6',
                icon: FileText,
              },
              {
                label: { en: 'Chunk', ar: 'تقسيم' },
                sublabel: { en: 'Split into segments', ar: 'تقسيم إلى أجزاء' },
                color: '#8b5cf6',
                icon: Scissors,
              },
              {
                label: { en: 'Embed', ar: 'تضمين' },
                sublabel: { en: 'Generate vectors', ar: 'توليد المتجهات' },
                color: '#f59e0b',
                icon: Box,
              },
              {
                label: { en: 'Store', ar: 'تخزين' },
                sublabel: { en: 'Save to vector DB', ar: 'حفظ في قاعدة المتجهات' },
                color: '#10b981',
                icon: HardDrive,
              },
            ],
          },
          {
            label: { en: 'Query', ar: 'الاستعلام' },
            color: '#06b6d4',
            steps: [
              {
                label: { en: 'Question', ar: 'السؤال' },
                sublabel: { en: 'User query', ar: 'استعلام المستخدم' },
                color: '#06b6d4',
                icon: HelpCircle,
              },
              {
                label: { en: 'Retrieve', ar: 'استرجاع' },
                sublabel: { en: 'Find relevant chunks', ar: 'إيجاد الأجزاء ذات الصلة' },
                color: '#a855f7',
                icon: Search,
              },
              {
                label: { en: 'Augment', ar: 'تعزيز' },
                sublabel: { en: 'Add context to prompt', ar: 'إضافة السياق للأمر' },
                color: '#f43f5e',
                icon: Layers,
              },
              {
                label: { en: 'Generate', ar: 'توليد' },
                sublabel: { en: 'LLM produces answer', ar: 'النموذج يولّد الإجابة' },
                color: '#10b981',
                icon: Sparkles,
              },
            ],
          },
        ],
        connector: { en: 'then', ar: 'ثم' },
      },
    },
  ],

  'bedrock-action-groups': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Action Group Execution Flow',
        ar: 'تدفق تنفيذ مجموعة الإجراءات',
      },
      data: {
        steps: [
          {
            label: { en: 'User Request', ar: 'طلب المستخدم' },
            sublabel: { en: 'Natural language input', ar: 'مدخلات لغة طبيعية' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Agent', ar: 'الوكيل' },
            sublabel: { en: 'Interprets intent', ar: 'يفسر النية' },
            color: '#8b5cf6',
            icon: Bot,
          },
          {
            label: { en: 'Select Action Group', ar: 'اختيار مجموعة الإجراءات' },
            sublabel: { en: 'Match to API group', ar: 'المطابقة مع مجموعة API' },
            color: '#f59e0b',
            icon: Cog,
          },
          {
            label: { en: 'API Call', ar: 'استدعاء API' },
            sublabel: { en: 'Execute Lambda/API', ar: 'تنفيذ Lambda/API' },
            color: '#06b6d4',
            icon: Send,
          },
          {
            label: { en: 'Process Response', ar: 'معالجة الاستجابة' },
            sublabel: { en: 'Parse API result', ar: 'تحليل نتيجة API' },
            color: '#f43f5e',
            icon: FileCheck,
          },
          {
            label: { en: 'Answer', ar: 'الإجابة' },
            sublabel: { en: 'Return to user', ar: 'إرجاع للمستخدم' },
            color: '#10b981',
            icon: Sparkles,
          },
        ],
      },
    },
  ],

  'bedrock-guardrails': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Bedrock Guardrails Layers',
        ar: 'طبقات حواجز حماية Bedrock',
      },
      data: {
        layers: [
          {
            label: { en: 'Topic Denial', ar: 'رفض الموضوعات' },
            description: { en: 'Block off-topic requests', ar: 'حظر الطلبات خارج الموضوع' },
            color: '#f43f5e',
            icon: Ban,
          },
          {
            label: { en: 'Content Filters', ar: 'مرشحات المحتوى' },
            description: { en: 'Filter harmful or inappropriate content', ar: 'تصفية المحتوى الضار أو غير المناسب' },
            color: '#f59e0b',
            icon: Filter,
          },
          {
            label: { en: 'PII Detection', ar: 'كشف المعلومات الشخصية' },
            description: { en: 'Detect and redact personal data', ar: 'كشف وحجب البيانات الشخصية' },
            color: '#8b5cf6',
            icon: Eye,
          },
          {
            label: { en: 'Word Filters', ar: 'مرشحات الكلمات' },
            description: { en: 'Block specific terms and phrases', ar: 'حظر مصطلحات وعبارات محددة' },
            color: '#3b82f6',
            icon: Shield,
          },
          {
            label: { en: 'Response Guardrails', ar: 'حواجز حماية الاستجابة' },
            description: { en: 'Validate output before delivery', ar: 'التحقق من المخرجات قبل التسليم' },
            color: '#10b981',
            icon: FileCheck,
          },
        ],
      },
    },
  ],

  'bedrock-agent-collaboration': [
    {
      template: 'hub-spoke',
      position: 'in-explanation',
      title: {
        en: 'Bedrock Multi-Agent Collaboration',
        ar: 'تعاون الوكلاء المتعددين في Bedrock',
      },
      data: {
        center: {
          label: { en: 'Supervisor Agent', ar: 'الوكيل المشرف' },
          color: '#8b5cf6',
          icon: Bot,
        },
        spokes: [
          {
            label: { en: 'Research Agent', ar: 'وكيل البحث' },
            description: { en: 'Gathers and retrieves information', ar: 'يجمع ويسترجع المعلومات' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Analysis Agent', ar: 'وكيل التحليل' },
            description: { en: 'Processes and analyzes data', ar: 'يعالج ويحلل البيانات' },
            color: '#10b981',
            icon: BarChart3,
          },
          {
            label: { en: 'Report Agent', ar: 'وكيل التقارير' },
            description: { en: 'Generates formatted reports', ar: 'يولّد تقارير منسقة' },
            color: '#f59e0b',
            icon: FileText,
          },
          {
            label: { en: 'QA Agent', ar: 'وكيل ضمان الجودة' },
            description: { en: 'Validates accuracy and quality', ar: 'يتحقق من الدقة والجودة' },
            color: '#f43f5e',
            icon: ClipboardCheck,
          },
        ],
      },
    },
  ],
};
