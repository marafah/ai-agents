import {
  Zap,
  BookOpen,
  Code,
  FileJson,
  Tags,
  Braces,
  Layers,
  UserCheck,
  Shield,
  FileText,
  AlertTriangle,
  RefreshCw,
  Play,
  Search,
  CheckCircle,
  Lightbulb,
  GraduationCap,
  BarChart3,
  Palette,
  Target,
  Brain,
  Lock,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const promptEngineeringDiagrams: DiagramDataMap = {
  'zero-shot-few-shot-prompting': [
    {
      template: 'vs',
      position: 'after-definition',
      title: {
        en: 'Zero-Shot vs Few-Shot Prompting',
        ar: 'المطالبة بدون أمثلة مقابل المطالبة بأمثلة قليلة',
      },
      data: {
        left: {
          title: { en: 'Zero-Shot', ar: 'بدون أمثلة' },
          color: '#3b82f6',
          icon: Zap,
          features: {
            en: ['No examples needed', 'Relies on training data', 'Fast to set up', 'Less accurate for complex tasks'],
            ar: ['لا حاجة لأمثلة', 'يعتمد على بيانات التدريب', 'سريع الإعداد', 'أقل دقة للمهام المعقدة'],
          },
        },
        right: {
          title: { en: 'Few-Shot', ar: 'أمثلة قليلة' },
          color: '#10b981',
          icon: BookOpen,
          features: {
            en: ['2-5 examples provided', 'Guided by demonstrations', 'More tokens used', 'Higher accuracy on complex tasks'],
            ar: ['2-5 أمثلة مقدمة', 'موجّه بالعروض التوضيحية', 'استخدام رموز أكثر', 'دقة أعلى في المهام المعقدة'],
          },
        },
      },
    },
  ],

  'xml-json-prompting': [
    {
      template: 'vs',
      position: 'after-definition',
      title: {
        en: 'XML vs JSON Prompting',
        ar: 'مطالبة XML مقابل مطالبة JSON',
      },
      data: {
        left: {
          title: { en: 'XML Prompting', ar: 'مطالبة XML' },
          color: '#8b5cf6',
          icon: Tags,
          features: {
            en: ['Tags for structure', 'Human readable', 'Verbose format', 'Flexible nesting'],
            ar: ['وسوم للبنية', 'قابل للقراءة البشرية', 'تنسيق مطوّل', 'تداخل مرن'],
          },
        },
        right: {
          title: { en: 'JSON Prompting', ar: 'مطالبة JSON' },
          color: '#f59e0b',
          icon: Braces,
          features: {
            en: ['Key-value pairs', 'Machine parseable', 'Compact format', 'Strict schema support'],
            ar: ['أزواج مفتاح-قيمة', 'قابل للتحليل آلياً', 'تنسيق مدمج', 'دعم مخطط صارم'],
          },
        },
      },
    },
  ],

  'system-prompt-design': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'System Prompt Design Layers',
        ar: 'طبقات تصميم أمر النظام',
      },
      data: {
        layers: [
          {
            label: { en: 'Role Definition', ar: 'تعريف الدور' },
            description: { en: 'Who the AI should be', ar: 'من يجب أن يكون الذكاء الاصطناعي' },
            color: '#3b82f6',
            icon: UserCheck,
          },
          {
            label: { en: 'Context Setting', ar: 'تحديد السياق' },
            description: { en: 'Background information and scope', ar: 'معلومات الخلفية والنطاق' },
            color: '#8b5cf6',
            icon: Layers,
          },
          {
            label: { en: 'Rules & Constraints', ar: 'القواعد والقيود' },
            description: { en: 'Boundaries and limitations', ar: 'الحدود والقيود' },
            color: '#f59e0b',
            icon: Shield,
          },
          {
            label: { en: 'Output Format', ar: 'تنسيق المخرجات' },
            description: { en: 'Response structure requirements', ar: 'متطلبات بنية الاستجابة' },
            color: '#06b6d4',
            icon: FileText,
          },
          {
            label: { en: 'Fallback Behavior', ar: 'سلوك الرجوع' },
            description: { en: 'How to handle edge cases', ar: 'كيفية التعامل مع الحالات الحدية' },
            color: '#f43f5e',
            icon: AlertTriangle,
          },
        ],
      },
    },
  ],

  'role-prompting': [
    {
      template: 'comparison',
      position: 'in-explanation',
      title: {
        en: 'Role Prompting Types',
        ar: 'أنواع المطالبة بالأدوار',
      },
      data: {
        items: [
          {
            title: { en: 'Expert Role', ar: 'دور الخبير' },
            description: { en: 'Deep domain knowledge specialist', ar: 'متخصص بمعرفة عميقة بالمجال' },
            color: '#3b82f6',
            icon: GraduationCap,
            features: {
              en: ['Technical precision', 'Domain terminology', 'Detailed analysis', 'Research-backed'],
              ar: ['دقة تقنية', 'مصطلحات المجال', 'تحليل مفصل', 'مدعوم بالأبحاث'],
            },
          },
          {
            title: { en: 'Teacher Role', ar: 'دور المعلم' },
            description: { en: 'Explains concepts clearly', ar: 'يشرح المفاهيم بوضوح' },
            color: '#10b981',
            icon: Lightbulb,
            features: {
              en: ['Simple language', 'Step-by-step', 'Examples & analogies', 'Progressive complexity'],
              ar: ['لغة بسيطة', 'خطوة بخطوة', 'أمثلة وتشبيهات', 'تعقيد تدريجي'],
            },
          },
          {
            title: { en: 'Analyst Role', ar: 'دور المحلل' },
            description: { en: 'Data-driven evaluation', ar: 'تقييم مبني على البيانات' },
            color: '#f59e0b',
            icon: BarChart3,
            features: {
              en: ['Data interpretation', 'Trend analysis', 'Objective assessment', 'Structured reports'],
              ar: ['تفسير البيانات', 'تحليل الاتجاهات', 'تقييم موضوعي', 'تقارير منظمة'],
            },
          },
          {
            title: { en: 'Creative Role', ar: 'دور المبدع' },
            description: { en: 'Imaginative and original output', ar: 'مخرجات خيالية وأصيلة' },
            color: '#8b5cf6',
            icon: Palette,
            features: {
              en: ['Original ideas', 'Narrative flow', 'Metaphors & style', 'Brainstorming'],
              ar: ['أفكار أصيلة', 'تدفق سردي', 'استعارات وأسلوب', 'عصف ذهني'],
            },
          },
        ],
      },
    },
  ],

  'meta-prompting': [
    {
      template: 'cycle',
      position: 'in-explanation',
      title: {
        en: 'Meta-Prompting Cycle',
        ar: 'دورة المطالبة الوصفية',
      },
      data: {
        nodes: [
          {
            label: { en: 'Task', ar: 'المهمة' },
            description: { en: 'Define the objective', ar: 'تحديد الهدف' },
            color: '#3b82f6',
            icon: Target,
          },
          {
            label: { en: 'Generate Prompt', ar: 'توليد الأمر' },
            description: { en: 'LLM creates a prompt', ar: 'النموذج ينشئ أمراً' },
            color: '#8b5cf6',
            icon: Brain,
          },
          {
            label: { en: 'Evaluate Prompt', ar: 'تقييم الأمر' },
            description: { en: 'Assess prompt quality', ar: 'تقييم جودة الأمر' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Refine Prompt', ar: 'تحسين الأمر' },
            description: { en: 'Iterate on improvements', ar: 'التكرار على التحسينات' },
            color: '#06b6d4',
            icon: RefreshCw,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            description: { en: 'Run the final prompt', ar: 'تشغيل الأمر النهائي' },
            color: '#10b981',
            icon: Play,
          },
        ],
        centerLabel: { en: 'Meta', ar: 'وصفي' },
      },
    },
  ],

  'adversarial-prompting': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Adversarial Prompt Defense Flow',
        ar: 'تدفق الدفاع ضد الأوامر العدائية',
      },
      data: {
        steps: [
          {
            label: { en: 'Attack Attempt', ar: 'محاولة هجوم' },
            sublabel: { en: 'Malicious prompt', ar: 'أمر خبيث' },
            color: '#f43f5e',
            icon: AlertTriangle,
          },
          {
            label: { en: 'Detection Layer', ar: 'طبقة الكشف' },
            sublabel: { en: 'Pattern matching', ar: 'مطابقة الأنماط' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Classification', ar: 'التصنيف' },
            sublabel: { en: 'Threat level assessment', ar: 'تقييم مستوى التهديد' },
            color: '#8b5cf6',
            icon: Shield,
          },
          {
            label: { en: 'Block/Allow', ar: 'حظر/سماح' },
            sublabel: { en: 'Decision gate', ar: 'بوابة القرار' },
            color: '#06b6d4',
            icon: Lock,
          },
          {
            label: { en: 'Log & Learn', ar: 'تسجيل وتعلّم' },
            sublabel: { en: 'Improve defenses', ar: 'تحسين الدفاعات' },
            color: '#10b981',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],
};
