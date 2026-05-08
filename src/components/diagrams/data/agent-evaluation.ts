import {
  Target,
  Star,
  Wrench,
  BrainCircuit,
  Ruler,
  Database,
  Play,
  BarChart3,
  GitCompare,
  FileText,
  Layers,
  HardDrive,
  Sparkles,
  PackageCheck,
  Coins,
  Activity,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const agentEvaluationDiagrams: DiagramDataMap = {
  'agent-benchmarks': [
    {
      template: 'comparison',
      position: 'after-definition',
      title: {
        en: 'Agent Benchmark Metrics',
        ar: 'مقاييس تقييم أداء الوكيل',
      },
      data: {
        items: [
          {
            title: { en: 'Task Completion Rate', ar: 'معدل إتمام المهام' },
            description: { en: 'Percentage of tasks completed successfully', ar: 'نسبة المهام المكتملة بنجاح' },
            color: '#10b981',
            icon: Target,
            features: {
              en: ['End-to-end success', 'Partial completion tracking', 'Timeout handling', 'Error recovery rate'],
              ar: ['النجاح من البداية للنهاية', 'تتبع الإتمام الجزئي', 'معالجة انتهاء الوقت', 'معدل التعافي من الأخطاء'],
            },
          },
          {
            title: { en: 'Response Quality', ar: 'جودة الاستجابة' },
            description: { en: 'Accuracy and relevance of agent outputs', ar: 'دقة وملاءمة مخرجات الوكيل' },
            color: '#3b82f6',
            icon: Star,
            features: {
              en: ['Factual accuracy', 'Relevance score', 'Coherence', 'Human preference rating'],
              ar: ['الدقة الواقعية', 'درجة الملاءمة', 'الترابط', 'تقييم التفضيل البشري'],
            },
          },
          {
            title: { en: 'Tool Usage Accuracy', ar: 'دقة استخدام الأدوات' },
            description: { en: 'Correct selection and use of tools', ar: 'الاختيار والاستخدام الصحيح للأدوات' },
            color: '#f59e0b',
            icon: Wrench,
            features: {
              en: ['Tool selection precision', 'Parameter accuracy', 'Retry efficiency', 'Unnecessary calls avoided'],
              ar: ['دقة اختيار الأداة', 'دقة المعاملات', 'كفاءة إعادة المحاولة', 'تجنب الاستدعاءات غير الضرورية'],
            },
          },
          {
            title: { en: 'Reasoning Depth', ar: 'عمق الاستدلال' },
            description: { en: 'Quality of multi-step reasoning chains', ar: 'جودة سلاسل الاستدلال المتعددة' },
            color: '#8b5cf6',
            icon: BrainCircuit,
            features: {
              en: ['Chain-of-thought quality', 'Logical consistency', 'Handling ambiguity', 'Self-correction ability'],
              ar: ['جودة سلسلة التفكير', 'الاتساق المنطقي', 'معالجة الغموض', 'القدرة على التصحيح الذاتي'],
            },
          },
        ],
      },
    },
  ],

  'evaluation-frameworks': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Evaluation Framework Pipeline',
        ar: 'خط أنابيب إطار التقييم',
      },
      data: {
        steps: [
          {
            label: { en: 'Define Metrics', ar: 'تحديد المقاييس' },
            sublabel: { en: 'Set evaluation criteria', ar: 'تعيين معايير التقييم' },
            color: '#3b82f6',
            icon: Ruler,
          },
          {
            label: { en: 'Collect Traces', ar: 'جمع التتبعات' },
            sublabel: { en: 'Capture agent execution logs', ar: 'التقاط سجلات تنفيذ الوكيل' },
            color: '#8b5cf6',
            icon: Database,
          },
          {
            label: { en: 'Run Evaluators', ar: 'تشغيل المقيّمات' },
            sublabel: { en: 'Apply scoring functions', ar: 'تطبيق دوال التسجيل' },
            color: '#f59e0b',
            icon: Play,
          },
          {
            label: { en: 'Score', ar: 'التسجيل' },
            sublabel: { en: 'Generate numeric scores', ar: 'توليد درجات رقمية' },
            color: '#10b981',
            icon: BarChart3,
          },
          {
            label: { en: 'Compare', ar: 'المقارنة' },
            sublabel: { en: 'Benchmark against baselines', ar: 'المقارنة مع خطوط الأساس' },
            color: '#06b6d4',
            icon: GitCompare,
          },
          {
            label: { en: 'Report', ar: 'التقرير' },
            sublabel: { en: 'Generate evaluation report', ar: 'إنشاء تقرير التقييم' },
            color: '#f43f5e',
            icon: FileText,
          },
        ],
      },
    },
  ],

  'agent-cost-optimization': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'Cost Optimization Stack',
        ar: 'طبقات تحسين التكلفة',
      },
      data: {
        layers: [
          {
            label: { en: 'Model Selection', ar: 'اختيار النموذج' },
            description: { en: 'Pick the right model for each task', ar: 'اختيار النموذج المناسب لكل مهمة' },
            color: '#3b82f6',
            icon: BrainCircuit,
          },
          {
            label: { en: 'Caching Layer', ar: 'طبقة التخزين المؤقت' },
            description: { en: 'Cache repeated queries and responses', ar: 'تخزين الاستعلامات والاستجابات المتكررة' },
            color: '#8b5cf6',
            icon: HardDrive,
          },
          {
            label: { en: 'Prompt Optimization', ar: 'تحسين الأوامر' },
            description: { en: 'Reduce token usage with concise prompts', ar: 'تقليل استخدام الرموز بأوامر موجزة' },
            color: '#f59e0b',
            icon: Sparkles,
          },
          {
            label: { en: 'Batch Processing', ar: 'المعالجة الدفعية' },
            description: { en: 'Group requests for efficiency', ar: 'تجميع الطلبات لتحقيق الكفاءة' },
            color: '#10b981',
            icon: PackageCheck,
          },
          {
            label: { en: 'Token Budget', ar: 'ميزانية الرموز' },
            description: { en: 'Set limits per task and session', ar: 'تعيين حدود لكل مهمة وجلسة' },
            color: '#f43f5e',
            icon: Coins,
          },
          {
            label: { en: 'Monitoring', ar: 'المراقبة' },
            description: { en: 'Track spend and usage patterns', ar: 'تتبع الإنفاق وأنماط الاستخدام' },
            color: '#06b6d4',
            icon: Activity,
          },
        ],
      },
    },
  ],
};
