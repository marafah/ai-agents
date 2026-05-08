import {
  FileText,
  MessageSquare,
  Combine,
  Brain,
  Reply,
  Type,
  Scissors,
  Box,
  Move3d,
  Search,
  Play,
  Cog,
  RefreshCw,
  CheckCircle,
  Radio,
  Map,
  Cpu,
  Activity,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const coreConceptsDiagrams: DiagramDataMap = {
  'prompts-and-system-prompts': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'How Prompts Flow Through an LLM',
        ar: 'كيف تتدفق الأوامر عبر نموذج اللغة الكبير',
      },
      data: {
        steps: [
          {
            label: { en: 'System Prompt', ar: 'أمر النظام' },
            sublabel: { en: 'Sets behavior & rules', ar: 'يحدد السلوك والقواعد' },
            color: '#8b5cf6',
            icon: FileText,
          },
          {
            label: { en: 'User Message', ar: 'رسالة المستخدم' },
            sublabel: { en: 'The actual request', ar: 'الطلب الفعلي' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Combined Input', ar: 'المدخلات المجمعة' },
            sublabel: { en: 'Merged context', ar: 'السياق المدمج' },
            color: '#06b6d4',
            icon: Combine,
          },
          {
            label: { en: 'LLM Processing', ar: 'معالجة النموذج' },
            sublabel: { en: 'Token generation', ar: 'توليد الرموز' },
            color: '#f59e0b',
            icon: Brain,
          },
          {
            label: { en: 'Response', ar: 'الاستجابة' },
            sublabel: { en: 'Generated output', ar: 'المخرجات المولّدة' },
            color: '#10b981',
            icon: Reply,
          },
        ],
      },
    },
  ],

  'embeddings-and-vectors': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'From Text to Similarity Search',
        ar: 'من النص إلى البحث بالتشابه',
      },
      data: {
        steps: [
          {
            label: { en: 'Text', ar: 'النص' },
            sublabel: { en: 'Raw input data', ar: 'البيانات الخام' },
            color: '#3b82f6',
            icon: Type,
          },
          {
            label: { en: 'Tokenize', ar: 'ترميز' },
            sublabel: { en: 'Split into tokens', ar: 'تقسيم إلى رموز' },
            color: '#f59e0b',
            icon: Scissors,
          },
          {
            label: { en: 'Embed', ar: 'تضمين' },
            sublabel: { en: 'Convert to numbers', ar: 'تحويل إلى أرقام' },
            color: '#8b5cf6',
            icon: Box,
          },
          {
            label: { en: 'Vector Space', ar: 'فضاء المتجهات' },
            sublabel: { en: 'Multi-dimensional space', ar: 'فضاء متعدد الأبعاد' },
            color: '#06b6d4',
            icon: Move3d,
          },
          {
            label: { en: 'Similarity Search', ar: 'البحث بالتشابه' },
            sublabel: { en: 'Find nearest vectors', ar: 'إيجاد أقرب المتجهات' },
            color: '#10b981',
            icon: Search,
          },
        ],
      },
    },
  ],

  'agent-state-and-workflows': [
    {
      template: 'cycle',
      position: 'in-explanation',
      title: {
        en: 'Agent State Machine Cycle',
        ar: 'دورة آلة حالة الوكيل',
      },
      data: {
        nodes: [
          {
            label: { en: 'Initialize', ar: 'تهيئة' },
            description: { en: 'Set up initial state', ar: 'إعداد الحالة الأولية' },
            color: '#3b82f6',
            icon: Play,
          },
          {
            label: { en: 'Process', ar: 'معالجة' },
            description: { en: 'Execute current task', ar: 'تنفيذ المهمة الحالية' },
            color: '#f59e0b',
            icon: Cog,
          },
          {
            label: { en: 'Update State', ar: 'تحديث الحالة' },
            description: { en: 'Save new state data', ar: 'حفظ بيانات الحالة الجديدة' },
            color: '#10b981',
            icon: RefreshCw,
          },
          {
            label: { en: 'Check Condition', ar: 'فحص الشرط' },
            description: { en: 'Decide next action', ar: 'تحديد الإجراء التالي' },
            color: '#8b5cf6',
            icon: CheckCircle,
          },
        ],
        centerLabel: { en: 'State Machine', ar: 'آلة الحالة' },
      },
    },
  ],

  'orchestration': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Orchestration Architecture',
        ar: 'معمارية التنسيق',
      },
      data: {
        center: {
          label: { en: 'Orchestrator', ar: 'المنسق' },
          color: '#8b5cf6',
          icon: Radio,
        },
        spokes: [
          {
            label: { en: 'Router', ar: 'الموجّه' },
            description: { en: 'Directs tasks to the right handler', ar: 'يوجه المهام إلى المعالج المناسب' },
            color: '#3b82f6',
            icon: Map,
          },
          {
            label: { en: 'Planner', ar: 'المخطط' },
            description: { en: 'Breaks goals into subtasks', ar: 'يقسم الأهداف إلى مهام فرعية' },
            color: '#f59e0b',
            icon: FileText,
          },
          {
            label: { en: 'Executor', ar: 'المنفذ' },
            description: { en: 'Runs the planned actions', ar: 'ينفذ الإجراءات المخططة' },
            color: '#10b981',
            icon: Cpu,
          },
          {
            label: { en: 'Monitor', ar: 'المراقب' },
            description: { en: 'Tracks progress and errors', ar: 'يتتبع التقدم والأخطاء' },
            color: '#f43f5e',
            icon: Activity,
          },
        ],
      },
    },
  ],
};
