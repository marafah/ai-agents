import {
  FileCode,
  Boxes,
  GitBranch,
  Settings,
  Play,
  BookOpen,
  Cog,
  PenLine,
  Route,
  Network,
  CircleDot,
  Wrench,
  Brain,
  ArrowRight,
  GitFork,
  Merge,
  Send,
  RefreshCw,
  Search,
  CheckCircle,
  Pause,
  User,
  ThumbsUp,
  ThumbsDown,
  Crown,
  UserCog,
  Code,
  Eye,
  PenTool,
  Database,
  Save,
  Camera,
  Rewind,
  ShieldCheck,
  Zap,
  Hash,
  MoreHorizontal,
  Flag,
  TestTube,
  Hammer,
  Rocket,
  Activity,
  Scaling,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksLanggraphDiagrams: DiagramDataMap = {
  'langgraph-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'LangGraph: Build & Run a Graph',
        ar: 'لانغ غراف: بناء وتشغيل رسم بياني',
      },
      data: {
        steps: [
          {
            label: { en: 'Define State', ar: 'تعريف الحالة' },
            sublabel: { en: 'TypedDict schema', ar: 'مخطط TypedDict' },
            color: '#3b82f6',
            icon: FileCode,
          },
          {
            label: { en: 'Add Nodes', ar: 'إضافة العقد' },
            sublabel: { en: 'Processing functions', ar: 'دوال المعالجة' },
            color: '#8b5cf6',
            icon: Boxes,
          },
          {
            label: { en: 'Add Edges', ar: 'إضافة الحواف' },
            sublabel: { en: 'Define connections', ar: 'تحديد الاتصالات' },
            color: '#f59e0b',
            icon: GitBranch,
          },
          {
            label: { en: 'Compile', ar: 'تجميع' },
            sublabel: { en: 'Build executable graph', ar: 'بناء رسم بياني قابل للتنفيذ' },
            color: '#10b981',
            icon: Settings,
          },
          {
            label: { en: 'Run', ar: 'تشغيل' },
            sublabel: { en: 'Execute with input', ar: 'تنفيذ مع مدخلات' },
            color: '#f43f5e',
            icon: Play,
          },
        ],
      },
    },
  ],

  'langgraph-state-management': [
    {
      template: 'cycle',
      position: 'in-explanation',
      title: {
        en: 'LangGraph State Management Cycle',
        ar: 'دورة إدارة الحالة في لانغ غراف',
      },
      data: {
        nodes: [
          {
            label: { en: 'Read State', ar: 'قراءة الحالة' },
            description: { en: 'Access current state values', ar: 'الوصول إلى قيم الحالة الحالية' },
            color: '#3b82f6',
            icon: BookOpen,
          },
          {
            label: { en: 'Process Node', ar: 'معالجة العقدة' },
            description: { en: 'Run node logic', ar: 'تشغيل منطق العقدة' },
            color: '#f59e0b',
            icon: Cog,
          },
          {
            label: { en: 'Write State', ar: 'كتابة الحالة' },
            description: { en: 'Update state with results', ar: 'تحديث الحالة بالنتائج' },
            color: '#10b981',
            icon: PenLine,
          },
          {
            label: { en: 'Route Next', ar: 'توجيه التالي' },
            description: { en: 'Determine next node', ar: 'تحديد العقدة التالية' },
            color: '#8b5cf6',
            icon: Route,
          },
        ],
        centerLabel: { en: 'State', ar: 'الحالة' },
      },
    },
  ],

  'langgraph-nodes-edges': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Graph Nodes & Edges Architecture',
        ar: 'معمارية عقد وحواف الرسم البياني',
      },
      data: {
        center: {
          label: { en: 'Graph', ar: 'الرسم البياني' },
          color: '#8b5cf6',
          icon: Network,
        },
        spokes: [
          {
            label: { en: 'Entry Node', ar: 'عقدة الدخول' },
            description: { en: 'Starting point of execution', ar: 'نقطة بداية التنفيذ' },
            color: '#3b82f6',
            icon: CircleDot,
          },
          {
            label: { en: 'Tool Node', ar: 'عقدة الأداة' },
            description: { en: 'Executes external tools', ar: 'ينفذ الأدوات الخارجية' },
            color: '#f59e0b',
            icon: Wrench,
          },
          {
            label: { en: 'LLM Node', ar: 'عقدة النموذج' },
            description: { en: 'Calls the language model', ar: 'يستدعي نموذج اللغة' },
            color: '#10b981',
            icon: Brain,
          },
          {
            label: { en: 'End Node', ar: 'عقدة النهاية' },
            description: { en: 'Terminal state of graph', ar: 'الحالة النهائية للرسم البياني' },
            color: '#f43f5e',
            icon: Flag,
          },
        ],
      },
    },
  ],

  'langgraph-conditional-flows': [
    {
      template: 'flow',
      position: 'in-explanation',
      title: {
        en: 'Conditional Flow Branching',
        ar: 'التفريع الشرطي للتدفق',
      },
      data: {
        steps: [
          {
            label: { en: 'Input', ar: 'المدخل' },
            sublabel: { en: 'Receive data', ar: 'استقبال البيانات' },
            color: '#3b82f6',
            icon: Send,
          },
          {
            label: { en: 'Condition', ar: 'الشرط' },
            sublabel: { en: 'Evaluate routing rule', ar: 'تقييم قاعدة التوجيه' },
            color: '#f59e0b',
            icon: GitFork,
          },
          {
            label: { en: 'Branch A', ar: 'الفرع أ' },
            sublabel: { en: 'If condition is true', ar: 'إذا كان الشرط صحيحاً' },
            color: '#10b981',
            icon: ArrowRight,
          },
          {
            label: { en: 'Branch B', ar: 'الفرع ب' },
            sublabel: { en: 'If condition is false', ar: 'إذا كان الشرط خاطئاً' },
            color: '#8b5cf6',
            icon: ArrowRight,
          },
          {
            label: { en: 'Merge', ar: 'الدمج' },
            sublabel: { en: 'Combine results', ar: 'دمج النتائج' },
            color: '#06b6d4',
            icon: Merge,
          },
          {
            label: { en: 'Output', ar: 'المخرج' },
            sublabel: { en: 'Final result', ar: 'النتيجة النهائية' },
            color: '#f43f5e',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'langgraph-tool-integration': [
    {
      template: 'cycle',
      position: 'after-analogy',
      title: {
        en: 'LangGraph Tool Integration Loop',
        ar: 'حلقة تكامل الأدوات في لانغ غراف',
      },
      data: {
        nodes: [
          {
            label: { en: 'Agent', ar: 'الوكيل' },
            description: { en: 'Decides if a tool is needed', ar: 'يقرر إذا كانت الأداة مطلوبة' },
            color: '#3b82f6',
            icon: Brain,
          },
          {
            label: { en: 'Select Tool', ar: 'اختيار الأداة' },
            description: { en: 'Pick the right tool', ar: 'اختيار الأداة المناسبة' },
            color: '#f59e0b',
            icon: Wrench,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            description: { en: 'Run the tool function', ar: 'تشغيل دالة الأداة' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Parse Result', ar: 'تحليل النتيجة' },
            description: { en: 'Process tool output', ar: 'معالجة مخرجات الأداة' },
            color: '#8b5cf6',
            icon: Search,
          },
        ],
        centerLabel: { en: 'Tool Loop', ar: 'حلقة الأدوات' },
      },
    },
  ],

  'langgraph-human-in-loop': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Human-in-the-Loop Flow',
        ar: 'تدفق الإنسان في الحلقة',
      },
      data: {
        steps: [
          {
            label: { en: 'Agent', ar: 'الوكيل' },
            sublabel: { en: 'Processes task', ar: 'يعالج المهمة' },
            color: '#3b82f6',
            icon: Brain,
          },
          {
            label: { en: 'Checkpoint', ar: 'نقطة التحقق' },
            sublabel: { en: 'Pause execution', ar: 'إيقاف التنفيذ مؤقتاً' },
            color: '#f59e0b',
            icon: Pause,
          },
          {
            label: { en: 'Human Review', ar: 'مراجعة بشرية' },
            sublabel: { en: 'User inspects output', ar: 'المستخدم يفحص المخرجات' },
            color: '#8b5cf6',
            icon: User,
          },
          {
            label: { en: 'Approve / Reject', ar: 'موافقة / رفض' },
            sublabel: { en: 'Decision point', ar: 'نقطة القرار' },
            color: '#f43f5e',
            icon: ThumbsUp,
          },
          {
            label: { en: 'Continue', ar: 'متابعة' },
            sublabel: { en: 'Resume execution', ar: 'استئناف التنفيذ' },
            color: '#10b981',
            icon: Play,
          },
        ],
      },
    },
  ],

  'langgraph-multi-agent': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'LangGraph Multi-Agent Architecture',
        ar: 'معمارية متعددة الوكلاء في لانغ غراف',
      },
      data: {
        center: {
          label: { en: 'Supervisor', ar: 'المشرف' },
          color: '#8b5cf6',
          icon: Crown,
        },
        spokes: [
          {
            label: { en: 'Research Agent', ar: 'وكيل البحث' },
            description: { en: 'Gathers information from sources', ar: 'يجمع المعلومات من المصادر' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Code Agent', ar: 'وكيل البرمجة' },
            description: { en: 'Writes and modifies code', ar: 'يكتب ويعدل الأكواد' },
            color: '#10b981',
            icon: Code,
          },
          {
            label: { en: 'Review Agent', ar: 'وكيل المراجعة' },
            description: { en: 'Checks quality and correctness', ar: 'يتحقق من الجودة والصحة' },
            color: '#f59e0b',
            icon: Eye,
          },
          {
            label: { en: 'Writer Agent', ar: 'وكيل الكتابة' },
            description: { en: 'Produces documentation and summaries', ar: 'ينتج التوثيق والملخصات' },
            color: '#f43f5e',
            icon: PenTool,
          },
        ],
      },
    },
  ],

  'langgraph-persistence': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'LangGraph Persistence Stack',
        ar: 'طبقات الاستمرارية في لانغ غراف',
      },
      data: {
        layers: [
          {
            label: { en: 'Memory Layer', ar: 'طبقة الذاكرة' },
            description: { en: 'In-memory state storage', ar: 'تخزين الحالة في الذاكرة' },
            color: '#3b82f6',
            icon: Database,
          },
          {
            label: { en: 'Checkpoint Store', ar: 'مخزن نقاط التحقق' },
            description: { en: 'Persistent state snapshots', ar: 'لقطات الحالة المستمرة' },
            color: '#10b981',
            icon: Save,
          },
          {
            label: { en: 'State Snapshot', ar: 'لقطة الحالة' },
            description: { en: 'Point-in-time state capture', ar: 'التقاط الحالة في نقطة زمنية' },
            color: '#f59e0b',
            icon: Camera,
          },
          {
            label: { en: 'Replay Engine', ar: 'محرك الإعادة' },
            description: { en: 'Re-execute from any checkpoint', ar: 'إعادة التنفيذ من أي نقطة تحقق' },
            color: '#8b5cf6',
            icon: Rewind,
          },
          {
            label: { en: 'Recovery', ar: 'الاسترداد' },
            description: { en: 'Fault-tolerant state recovery', ar: 'استرداد الحالة المتسامح مع الأخطاء' },
            color: '#f43f5e',
            icon: ShieldCheck,
          },
        ],
      },
    },
  ],

  'langgraph-streaming': [
    {
      template: 'flow',
      position: 'after-analogy',
      title: {
        en: 'LangGraph Streaming Pipeline',
        ar: 'خط أنابيب البث في لانغ غراف',
      },
      data: {
        steps: [
          {
            label: { en: 'Start', ar: 'البدء' },
            sublabel: { en: 'Initiate stream', ar: 'بدء البث' },
            color: '#3b82f6',
            icon: Play,
          },
          {
            label: { en: 'Token 1', ar: 'الرمز ١' },
            sublabel: { en: 'First token emitted', ar: 'إرسال الرمز الأول' },
            color: '#10b981',
            icon: Zap,
          },
          {
            label: { en: 'Token 2', ar: 'الرمز ٢' },
            sublabel: { en: 'Streaming continues', ar: 'استمرار البث' },
            color: '#f59e0b',
            icon: Hash,
          },
          {
            label: { en: 'Token N', ar: 'الرمز N' },
            sublabel: { en: 'Ongoing generation', ar: 'توليد مستمر' },
            color: '#8b5cf6',
            icon: MoreHorizontal,
          },
          {
            label: { en: 'Complete', ar: 'الاكتمال' },
            sublabel: { en: 'Stream finished', ar: 'انتهاء البث' },
            color: '#f43f5e',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'langgraph-deployment': [
    {
      template: 'flow',
      position: 'after-explanation',
      title: {
        en: 'LangGraph Deployment Pipeline',
        ar: 'خط أنابيب نشر لانغ غراف',
      },
      data: {
        steps: [
          {
            label: { en: 'Dev', ar: 'التطوير' },
            sublabel: { en: 'Local development', ar: 'التطوير المحلي' },
            color: '#3b82f6',
            icon: Code,
          },
          {
            label: { en: 'Test', ar: 'الاختبار' },
            sublabel: { en: 'Run test suites', ar: 'تشغيل مجموعات الاختبار' },
            color: '#f59e0b',
            icon: TestTube,
          },
          {
            label: { en: 'Build', ar: 'البناء' },
            sublabel: { en: 'Package artifacts', ar: 'حزم الملفات' },
            color: '#8b5cf6',
            icon: Hammer,
          },
          {
            label: { en: 'Deploy', ar: 'النشر' },
            sublabel: { en: 'Push to production', ar: 'النشر للإنتاج' },
            color: '#10b981',
            icon: Rocket,
          },
          {
            label: { en: 'Monitor', ar: 'المراقبة' },
            sublabel: { en: 'Track performance', ar: 'تتبع الأداء' },
            color: '#f43f5e',
            icon: Activity,
          },
          {
            label: { en: 'Scale', ar: 'التوسع' },
            sublabel: { en: 'Handle load growth', ar: 'التعامل مع زيادة الحمل' },
            color: '#06b6d4',
            icon: Scaling,
          },
        ],
      },
    },
  ],
};
