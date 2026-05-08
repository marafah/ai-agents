import {
  Bot,
  Wrench,
  Cpu,
  Rocket,
  BarChart3,
  RefreshCw,
  Cog,
  MessageSquare,
  Database,
  HardDrive,
  Search,
  Zap,
  Shield,
  AlertTriangle,
  Filter,
  FileText,
  GitBranch,
  Cloud,
  TestTube,
  Box,
  Activity,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksAdkDiagrams: DiagramDataMap = {
  'google-adk-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Google ADK Agent Lifecycle',
        ar: 'دورة حياة وكيل Google ADK',
      },
      data: {
        steps: [
          {
            label: { en: 'Define Agent', ar: 'تعريف الوكيل' },
            sublabel: { en: 'Create agent class', ar: 'إنشاء فئة الوكيل' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'Add Tools', ar: 'إضافة الأدوات' },
            sublabel: { en: 'Register capabilities', ar: 'تسجيل القدرات' },
            color: '#8b5cf6',
            icon: Wrench,
          },
          {
            label: { en: 'Configure Model', ar: 'تهيئة النموذج' },
            sublabel: { en: 'Set Gemini model', ar: 'ضبط نموذج Gemini' },
            color: '#f59e0b',
            icon: Cpu,
          },
          {
            label: { en: 'Deploy', ar: 'نشر' },
            sublabel: { en: 'Push to cloud', ar: 'دفع إلى السحابة' },
            color: '#06b6d4',
            icon: Rocket,
          },
          {
            label: { en: 'Monitor', ar: 'مراقبة' },
            sublabel: { en: 'Track performance', ar: 'تتبع الأداء' },
            color: '#10b981',
            icon: BarChart3,
          },
        ],
      },
    },
  ],

  'adk-sessions-state': [
    {
      template: 'cycle',
      position: 'in-explanation',
      title: {
        en: 'Session & State Management Cycle',
        ar: 'دورة إدارة الجلسات والحالة',
      },
      data: {
        nodes: [
          {
            label: { en: 'New Session', ar: 'جلسة جديدة' },
            description: { en: 'Initialize session context', ar: 'تهيئة سياق الجلسة' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Process Request', ar: 'معالجة الطلب' },
            description: { en: 'Handle user input', ar: 'معالجة مدخلات المستخدم' },
            color: '#f59e0b',
            icon: Cog,
          },
          {
            label: { en: 'Update State', ar: 'تحديث الحالة' },
            description: { en: 'Persist state changes', ar: 'حفظ تغييرات الحالة' },
            color: '#10b981',
            icon: RefreshCw,
          },
          {
            label: { en: 'Check Session', ar: 'فحص الجلسة' },
            description: { en: 'Validate session data', ar: 'التحقق من بيانات الجلسة' },
            color: '#8b5cf6',
            icon: Search,
          },
          {
            label: { en: 'Response', ar: 'الاستجابة' },
            description: { en: 'Return with context', ar: 'الرد مع السياق' },
            color: '#06b6d4',
            icon: MessageSquare,
          },
        ],
        centerLabel: { en: 'Session', ar: 'الجلسة' },
      },
    },
  ],

  'adk-memory-management': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'ADK Memory Stack',
        ar: 'مكدس ذاكرة ADK',
      },
      data: {
        layers: [
          {
            label: { en: 'Short-Term Buffer', ar: 'الذاكرة المؤقتة' },
            description: { en: 'Current conversation context', ar: 'سياق المحادثة الحالية' },
            color: '#3b82f6',
            icon: Zap,
          },
          {
            label: { en: 'Session Memory', ar: 'ذاكرة الجلسة' },
            description: { en: 'Per-session state data', ar: 'بيانات حالة كل جلسة' },
            color: '#8b5cf6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Persistent Store', ar: 'التخزين الدائم' },
            description: { en: 'Cross-session persistence', ar: 'الاستمرارية عبر الجلسات' },
            color: '#f59e0b',
            icon: Database,
          },
          {
            label: { en: 'Vector Index', ar: 'فهرس المتجهات' },
            description: { en: 'Semantic search index', ar: 'فهرس البحث الدلالي' },
            color: '#06b6d4',
            icon: HardDrive,
          },
          {
            label: { en: 'Retrieval', ar: 'الاسترجاع' },
            description: { en: 'Query and fetch relevant data', ar: 'استعلام وجلب البيانات المناسبة' },
            color: '#10b981',
            icon: Search,
          },
        ],
      },
    },
  ],

  'adk-callbacks': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Callback Execution Flow',
        ar: 'تدفق تنفيذ الاستدعاءات الراجعة',
      },
      data: {
        steps: [
          {
            label: { en: 'Event Trigger', ar: 'مشغّل الحدث' },
            sublabel: { en: 'Action or message received', ar: 'استلام إجراء أو رسالة' },
            color: '#3b82f6',
            icon: Zap,
          },
          {
            label: { en: 'Before Hook', ar: 'خطاف ما قبل' },
            sublabel: { en: 'Pre-processing logic', ar: 'منطق المعالجة المسبقة' },
            color: '#8b5cf6',
            icon: Shield,
          },
          {
            label: { en: 'Agent Process', ar: 'معالجة الوكيل' },
            sublabel: { en: 'Core agent execution', ar: 'تنفيذ الوكيل الأساسي' },
            color: '#f59e0b',
            icon: Cpu,
          },
          {
            label: { en: 'After Hook', ar: 'خطاف ما بعد' },
            sublabel: { en: 'Post-processing logic', ar: 'منطق المعالجة اللاحقة' },
            color: '#06b6d4',
            icon: Filter,
          },
          {
            label: { en: 'Log Result', ar: 'تسجيل النتيجة' },
            sublabel: { en: 'Record for audit', ar: 'تسجيل للمراجعة' },
            color: '#10b981',
            icon: FileText,
          },
        ],
      },
    },
  ],

  'adk-guardrails': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'ADK Guardrails Stack',
        ar: 'مكدس حواجز الحماية في ADK',
      },
      data: {
        layers: [
          {
            label: { en: 'Input Validation', ar: 'التحقق من المدخلات' },
            description: { en: 'Verify request format and content', ar: 'التحقق من تنسيق ومحتوى الطلب' },
            color: '#3b82f6',
            icon: Shield,
          },
          {
            label: { en: 'Content Safety', ar: 'سلامة المحتوى' },
            description: { en: 'Filter harmful content', ar: 'تصفية المحتوى الضار' },
            color: '#f43f5e',
            icon: AlertTriangle,
          },
          {
            label: { en: 'Rate Limiting', ar: 'تحديد المعدل' },
            description: { en: 'Control request frequency', ar: 'التحكم في تكرار الطلبات' },
            color: '#f59e0b',
            icon: Activity,
          },
          {
            label: { en: 'Output Filtering', ar: 'تصفية المخرجات' },
            description: { en: 'Sanitize agent responses', ar: 'تنقية استجابات الوكيل' },
            color: '#8b5cf6',
            icon: Filter,
          },
          {
            label: { en: 'Audit Log', ar: 'سجل المراجعة' },
            description: { en: 'Record all interactions', ar: 'تسجيل جميع التفاعلات' },
            color: '#10b981',
            icon: FileText,
          },
        ],
      },
    },
  ],

  'adk-multi-agent': [
    {
      template: 'hub-spoke',
      position: 'in-explanation',
      title: {
        en: 'ADK Multi-Agent Architecture',
        ar: 'معمارية الوكلاء المتعددين في ADK',
      },
      data: {
        center: {
          label: { en: 'Root Agent', ar: 'الوكيل الجذر' },
          color: '#8b5cf6',
          icon: Bot,
        },
        spokes: [
          {
            label: { en: 'Sub-Agent A', ar: 'الوكيل الفرعي أ' },
            description: { en: 'Specialized task handler', ar: 'معالج مهام متخصص' },
            color: '#3b82f6',
            icon: Cpu,
          },
          {
            label: { en: 'Sub-Agent B', ar: 'الوكيل الفرعي ب' },
            description: { en: 'Domain-specific processor', ar: 'معالج متخصص بالمجال' },
            color: '#10b981',
            icon: Cog,
          },
          {
            label: { en: 'Tool Agent', ar: 'وكيل الأدوات' },
            description: { en: 'External tool integration', ar: 'تكامل الأدوات الخارجية' },
            color: '#f59e0b',
            icon: Wrench,
          },
          {
            label: { en: 'Router Agent', ar: 'وكيل التوجيه' },
            description: { en: 'Directs requests to sub-agents', ar: 'يوجه الطلبات إلى الوكلاء الفرعيين' },
            color: '#f43f5e',
            icon: GitBranch,
          },
        ],
      },
    },
  ],

  'adk-deployment': [
    {
      template: 'flow',
      position: 'after-explanation',
      title: {
        en: 'ADK Deployment Pipeline',
        ar: 'خط أنابيب نشر ADK',
      },
      data: {
        steps: [
          {
            label: { en: 'Local Dev', ar: 'تطوير محلي' },
            sublabel: { en: 'Build and test locally', ar: 'بناء واختبار محلياً' },
            color: '#3b82f6',
            icon: Cpu,
          },
          {
            label: { en: 'Test Suite', ar: 'مجموعة الاختبارات' },
            sublabel: { en: 'Run automated tests', ar: 'تشغيل الاختبارات الآلية' },
            color: '#8b5cf6',
            icon: TestTube,
          },
          {
            label: { en: 'Container', ar: 'حاوية' },
            sublabel: { en: 'Package in Docker', ar: 'تغليف في Docker' },
            color: '#f59e0b',
            icon: Box,
          },
          {
            label: { en: 'Cloud Run', ar: 'تشغيل سحابي' },
            sublabel: { en: 'Deploy to Cloud Run', ar: 'النشر على Cloud Run' },
            color: '#06b6d4',
            icon: Cloud,
          },
          {
            label: { en: 'Production', ar: 'الإنتاج' },
            sublabel: { en: 'Live environment', ar: 'بيئة حية' },
            color: '#10b981',
            icon: Rocket,
          },
          {
            label: { en: 'Monitoring', ar: 'المراقبة' },
            sublabel: { en: 'Track metrics & logs', ar: 'تتبع المقاييس والسجلات' },
            color: '#f43f5e',
            icon: BarChart3,
          },
        ],
      },
    },
  ],
};
