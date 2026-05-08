import {
  Sparkles,
  ClipboardCheck,
  MessageSquareWarning,
  RefreshCw,
  Eye,
  Wrench,
  Play,
  FileSearch,
  ArrowRight,
  Target,
  ListTree,
  ListOrdered,
  Cog,
  CheckCircle,
  Radio,
  UserCog,
  UserCheck,
  MessageCircle,
  Combine,
  Brain,
  Footprints,
  HelpCircle,
  GitBranch,
  Vote,
  Handshake,
  Reply,
  TreePine,
  Scissors,
  Search,
  Ban,
  Route,
  Award,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const designPatternsDiagrams: DiagramDataMap = {
  'reflection-pattern': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'The Reflection Pattern Cycle',
        ar: 'دورة نمط الانعكاس',
      },
      data: {
        nodes: [
          {
            label: { en: 'Generate', ar: 'توليد' },
            description: { en: 'Produce initial output', ar: 'إنتاج المخرجات الأولية' },
            color: '#3b82f6',
            icon: Sparkles,
          },
          {
            label: { en: 'Evaluate', ar: 'تقييم' },
            description: { en: 'Assess quality and correctness', ar: 'تقييم الجودة والصحة' },
            color: '#f59e0b',
            icon: ClipboardCheck,
          },
          {
            label: { en: 'Critique', ar: 'نقد' },
            description: { en: 'Identify weaknesses', ar: 'تحديد نقاط الضعف' },
            color: '#f43f5e',
            icon: MessageSquareWarning,
          },
          {
            label: { en: 'Refine', ar: 'تحسين' },
            description: { en: 'Improve based on feedback', ar: 'التحسين بناءً على الملاحظات' },
            color: '#10b981',
            icon: RefreshCw,
          },
        ],
        centerLabel: { en: 'Reflection', ar: 'الانعكاس' },
      },
    },
  ],

  'tool-use-pattern': [
    {
      template: 'flow',
      position: 'in-explanation',
      title: {
        en: 'Tool Use Pattern Flow',
        ar: 'تدفق نمط استخدام الأدوات',
      },
      data: {
        steps: [
          {
            label: { en: 'Observe', ar: 'ملاحظة' },
            sublabel: { en: 'Analyze the context', ar: 'تحليل السياق' },
            color: '#3b82f6',
            icon: Eye,
          },
          {
            label: { en: 'Decide Tool', ar: 'اختيار الأداة' },
            sublabel: { en: 'Select appropriate tool', ar: 'اختيار الأداة المناسبة' },
            color: '#8b5cf6',
            icon: Wrench,
          },
          {
            label: { en: 'Call Tool', ar: 'استدعاء الأداة' },
            sublabel: { en: 'Execute with parameters', ar: 'التنفيذ مع المعاملات' },
            color: '#f59e0b',
            icon: Play,
          },
          {
            label: { en: 'Parse Result', ar: 'تحليل النتيجة' },
            sublabel: { en: 'Process tool output', ar: 'معالجة مخرجات الأداة' },
            color: '#10b981',
            icon: FileSearch,
          },
          {
            label: { en: 'Continue', ar: 'متابعة' },
            sublabel: { en: 'Next step or respond', ar: 'الخطوة التالية أو الاستجابة' },
            color: '#06b6d4',
            icon: ArrowRight,
          },
        ],
      },
    },
  ],

  'planning-pattern': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'The Planning Pattern Pipeline',
        ar: 'خط أنابيب نمط التخطيط',
      },
      data: {
        steps: [
          {
            label: { en: 'Goal', ar: 'الهدف' },
            sublabel: { en: 'Define objective', ar: 'تحديد الهدف' },
            color: '#f43f5e',
            icon: Target,
          },
          {
            label: { en: 'Decompose', ar: 'تفكيك' },
            sublabel: { en: 'Break into subtasks', ar: 'تقسيم إلى مهام فرعية' },
            color: '#3b82f6',
            icon: ListTree,
          },
          {
            label: { en: 'Prioritize', ar: 'ترتيب الأولويات' },
            sublabel: { en: 'Order by importance', ar: 'ترتيب حسب الأهمية' },
            color: '#f59e0b',
            icon: ListOrdered,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            sublabel: { en: 'Run each subtask', ar: 'تنفيذ كل مهمة فرعية' },
            color: '#10b981',
            icon: Cog,
          },
          {
            label: { en: 'Verify', ar: 'تحقق' },
            sublabel: { en: 'Validate results', ar: 'التحقق من النتائج' },
            color: '#8b5cf6',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'multi-agent-collaboration-pattern': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Multi-Agent Collaboration Pattern',
        ar: 'نمط التعاون متعدد الوكلاء',
      },
      data: {
        center: {
          label: { en: 'Coordinator', ar: 'المنسق' },
          color: '#8b5cf6',
          icon: Radio,
        },
        spokes: [
          {
            label: { en: 'Specialist A', ar: 'المتخصص أ' },
            description: { en: 'Domain-specific expertise', ar: 'خبرة متخصصة في المجال' },
            color: '#3b82f6',
            icon: UserCog,
          },
          {
            label: { en: 'Specialist B', ar: 'المتخصص ب' },
            description: { en: 'Complementary skills', ar: 'مهارات تكميلية' },
            color: '#10b981',
            icon: UserCheck,
          },
          {
            label: { en: 'Critic', ar: 'الناقد' },
            description: { en: 'Reviews and challenges output', ar: 'يراجع وينتقد المخرجات' },
            color: '#f43f5e',
            icon: MessageCircle,
          },
          {
            label: { en: 'Synthesizer', ar: 'المُركّب' },
            description: { en: 'Combines all contributions', ar: 'يدمج جميع المساهمات' },
            color: '#f59e0b',
            icon: Combine,
          },
        ],
      },
    },
  ],

  'chain-of-thought': [
    {
      template: 'flow',
      position: 'after-analogy',
      title: {
        en: 'Chain-of-Thought Reasoning',
        ar: 'التفكير بسلسلة الأفكار',
      },
      data: {
        steps: [
          {
            label: { en: 'Problem', ar: 'المشكلة' },
            sublabel: { en: 'Input question', ar: 'سؤال الإدخال' },
            color: '#f43f5e',
            icon: HelpCircle,
          },
          {
            label: { en: 'Step 1', ar: 'الخطوة ١' },
            sublabel: { en: 'Break down problem', ar: 'تفكيك المشكلة' },
            color: '#3b82f6',
            icon: Footprints,
          },
          {
            label: { en: 'Step 2', ar: 'الخطوة ٢' },
            sublabel: { en: 'Apply reasoning', ar: 'تطبيق المنطق' },
            color: '#f59e0b',
            icon: Brain,
          },
          {
            label: { en: 'Step 3', ar: 'الخطوة ٣' },
            sublabel: { en: 'Derive conclusion', ar: 'استخلاص الاستنتاج' },
            color: '#8b5cf6',
            icon: GitBranch,
          },
          {
            label: { en: 'Answer', ar: 'الإجابة' },
            sublabel: { en: 'Final result', ar: 'النتيجة النهائية' },
            color: '#10b981',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'self-consistency': [
    {
      template: 'multi-flow',
      position: 'in-explanation',
      title: {
        en: 'Self-Consistency Through Multiple Paths',
        ar: 'الاتساق الذاتي عبر مسارات متعددة',
      },
      data: {
        phases: [
          {
            label: { en: 'Generate', ar: 'التوليد' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Prompt', ar: 'الأمر' },
                sublabel: { en: 'Same input', ar: 'نفس المدخل' },
                color: '#3b82f6',
                icon: MessageCircle,
              },
              {
                label: { en: 'Path A', ar: 'المسار أ' },
                sublabel: { en: 'Reasoning chain 1', ar: 'سلسلة تفكير ١' },
                color: '#f59e0b',
                icon: Route,
              },
              {
                label: { en: 'Path B', ar: 'المسار ب' },
                sublabel: { en: 'Reasoning chain 2', ar: 'سلسلة تفكير ٢' },
                color: '#10b981',
                icon: Route,
              },
              {
                label: { en: 'Path C', ar: 'المسار ج' },
                sublabel: { en: 'Reasoning chain 3', ar: 'سلسلة تفكير ٣' },
                color: '#8b5cf6',
                icon: Route,
              },
            ],
          },
          {
            label: { en: 'Aggregate', ar: 'التجميع' },
            color: '#f43f5e',
            steps: [
              {
                label: { en: 'Vote', ar: 'التصويت' },
                sublabel: { en: 'Compare answers', ar: 'مقارنة الإجابات' },
                color: '#f43f5e',
                icon: Vote,
              },
              {
                label: { en: 'Consensus', ar: 'الإجماع' },
                sublabel: { en: 'Majority agreement', ar: 'اتفاق الأغلبية' },
                color: '#06b6d4',
                icon: Handshake,
              },
              {
                label: { en: 'Answer', ar: 'الإجابة' },
                sublabel: { en: 'Most consistent result', ar: 'النتيجة الأكثر اتساقاً' },
                color: '#10b981',
                icon: Reply,
              },
            ],
          },
        ],
        connector: { en: 'then', ar: 'ثم' },
      },
    },
  ],

  'tree-of-thoughts': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Tree-of-Thoughts Exploration',
        ar: 'استكشاف شجرة الأفكار',
      },
      data: {
        layers: [
          {
            label: { en: 'Root Problem', ar: 'المشكلة الجذرية' },
            description: { en: 'Define the starting question', ar: 'تحديد السؤال الأولي' },
            color: '#f43f5e',
            icon: TreePine,
          },
          {
            label: { en: 'Branch A / Branch B', ar: 'الفرع أ / الفرع ب' },
            description: { en: 'Explore multiple thought paths', ar: 'استكشاف مسارات تفكير متعددة' },
            color: '#3b82f6',
            icon: GitBranch,
          },
          {
            label: { en: 'Evaluate', ar: 'تقييم' },
            description: { en: 'Score each branch\'s promise', ar: 'تقييم إمكانية كل فرع' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Prune', ar: 'تقليم' },
            description: { en: 'Discard weak branches', ar: 'استبعاد الفروع الضعيفة' },
            color: '#8b5cf6',
            icon: Scissors,
          },
          {
            label: { en: 'Best Path', ar: 'أفضل مسار' },
            description: { en: 'Follow the strongest branch', ar: 'اتباع الفرع الأقوى' },
            color: '#06b6d4',
            icon: Award,
          },
          {
            label: { en: 'Solution', ar: 'الحل' },
            description: { en: 'Final answer from best path', ar: 'الإجابة النهائية من أفضل مسار' },
            color: '#10b981',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],
};
