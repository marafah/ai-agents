import {
  Upload,
  Table,
  Search,
  Play,
  BarChart3,
  FileText,
  MessageSquare,
  Database,
  Code,
  Cog,
  DollarSign,
  TrendingUp,
  PieChart,
  PenTool,
  BookOpen,
  Quote,
  ClipboardList,
  GitPullRequest,
  Bug,
  Lightbulb,
  FileCheck,
  HelpCircle,
  FolderSearch,
  Reply,
  PhoneForwarded,
  ThumbsUp,
  Shield,
  Eye,
  Siren,
  Wrench,
  CheckCircle,
  Stethoscope,
  Brain,
  AlertTriangle,
  HeartPulse,
  UserCheck,
  GraduationCap,
  BookMarked,
  Presentation,
  ClipboardCheck,
  Award,
  Globe,
  Map,
  MousePointer,
  Crosshair,
  PackageCheck,
  Mail,
  Calendar,
  FileEdit,
  BarChart2,
  Network,
  RefreshCw,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const industryApplicationsDiagrams: DiagramDataMap = {
  'csv-data-agent': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'CSV Data Agent Pipeline',
        ar: 'خط أنابيب وكيل بيانات CSV',
      },
      data: {
        steps: [
          {
            label: { en: 'CSV Upload', ar: 'رفع CSV' },
            sublabel: { en: 'Load the data file', ar: 'تحميل ملف البيانات' },
            color: '#3b82f6',
            icon: Upload,
          },
          {
            label: { en: 'Parse Headers', ar: 'تحليل العناوين' },
            sublabel: { en: 'Understand structure', ar: 'فهم البنية' },
            color: '#8b5cf6',
            icon: Table,
          },
          {
            label: { en: 'Generate Query', ar: 'توليد الاستعلام' },
            sublabel: { en: 'Create data query', ar: 'إنشاء استعلام البيانات' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            sublabel: { en: 'Run the query', ar: 'تشغيل الاستعلام' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Visualize', ar: 'عرض بصري' },
            sublabel: { en: 'Create charts', ar: 'إنشاء الرسوم البيانية' },
            color: '#06b6d4',
            icon: BarChart3,
          },
          {
            label: { en: 'Report', ar: 'التقرير' },
            sublabel: { en: 'Generate insights', ar: 'توليد الرؤى' },
            color: '#f43f5e',
            icon: FileText,
          },
        ],
      },
    },
  ],

  'sql-database-agent': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'SQL Database Agent Pipeline',
        ar: 'خط أنابيب وكيل قواعد بيانات SQL',
      },
      data: {
        steps: [
          {
            label: { en: 'Natural Language', ar: 'اللغة الطبيعية' },
            sublabel: { en: 'User question', ar: 'سؤال المستخدم' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Schema Analysis', ar: 'تحليل المخطط' },
            sublabel: { en: 'Understand DB structure', ar: 'فهم بنية قاعدة البيانات' },
            color: '#8b5cf6',
            icon: Database,
          },
          {
            label: { en: 'SQL Generation', ar: 'توليد SQL' },
            sublabel: { en: 'Write the query', ar: 'كتابة الاستعلام' },
            color: '#f59e0b',
            icon: Code,
          },
          {
            label: { en: 'Execute Query', ar: 'تنفيذ الاستعلام' },
            sublabel: { en: 'Run against database', ar: 'التشغيل على قاعدة البيانات' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Format Results', ar: 'تنسيق النتائج' },
            sublabel: { en: 'Structure the output', ar: 'هيكلة المخرجات' },
            color: '#06b6d4',
            icon: Table,
          },
          {
            label: { en: 'Response', ar: 'الاستجابة' },
            sublabel: { en: 'Natural language answer', ar: 'إجابة باللغة الطبيعية' },
            color: '#f43f5e',
            icon: Reply,
          },
        ],
      },
    },
  ],

  'financial-report-agent': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Financial Report Agent Pipeline',
        ar: 'خط أنابيب وكيل التقارير المالية',
      },
      data: {
        steps: [
          {
            label: { en: 'Data Sources', ar: 'مصادر البيانات' },
            sublabel: { en: 'APIs, databases, files', ar: 'واجهات برمجية، قواعد بيانات، ملفات' },
            color: '#3b82f6',
            icon: Database,
          },
          {
            label: { en: 'Extract Financials', ar: 'استخراج البيانات المالية' },
            sublabel: { en: 'Parse financial data', ar: 'تحليل البيانات المالية' },
            color: '#8b5cf6',
            icon: DollarSign,
          },
          {
            label: { en: 'Analyze Trends', ar: 'تحليل الاتجاهات' },
            sublabel: { en: 'Identify patterns', ar: 'تحديد الأنماط' },
            color: '#f59e0b',
            icon: TrendingUp,
          },
          {
            label: { en: 'Generate Charts', ar: 'إنشاء الرسوم البيانية' },
            sublabel: { en: 'Visual representations', ar: 'تمثيلات بصرية' },
            color: '#10b981',
            icon: PieChart,
          },
          {
            label: { en: 'Write Report', ar: 'كتابة التقرير' },
            sublabel: { en: 'Draft analysis document', ar: 'صياغة وثيقة التحليل' },
            color: '#06b6d4',
            icon: PenTool,
          },
          {
            label: { en: 'Review', ar: 'المراجعة' },
            sublabel: { en: 'Quality assurance', ar: 'ضمان الجودة' },
            color: '#f43f5e',
            icon: FileCheck,
          },
        ],
      },
    },
  ],

  'research-paper-agent': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Research Paper Agent Pipeline',
        ar: 'خط أنابيب وكيل الأبحاث العلمية',
      },
      data: {
        steps: [
          {
            label: { en: 'Topic Query', ar: 'استعلام الموضوع' },
            sublabel: { en: 'Define research question', ar: 'تحديد سؤال البحث' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Search Papers', ar: 'البحث في الأوراق' },
            sublabel: { en: 'Query academic databases', ar: 'الاستعلام في قواعد البيانات الأكاديمية' },
            color: '#8b5cf6',
            icon: BookOpen,
          },
          {
            label: { en: 'Extract Key Findings', ar: 'استخراج النتائج الرئيسية' },
            sublabel: { en: 'Identify core insights', ar: 'تحديد الرؤى الأساسية' },
            color: '#f59e0b',
            icon: Lightbulb,
          },
          {
            label: { en: 'Summarize', ar: 'التلخيص' },
            sublabel: { en: 'Condense information', ar: 'تكثيف المعلومات' },
            color: '#10b981',
            icon: ClipboardList,
          },
          {
            label: { en: 'Cite', ar: 'الاقتباس' },
            sublabel: { en: 'Format references', ar: 'تنسيق المراجع' },
            color: '#06b6d4',
            icon: Quote,
          },
          {
            label: { en: 'Compile Report', ar: 'تجميع التقرير' },
            sublabel: { en: 'Final research report', ar: 'تقرير البحث النهائي' },
            color: '#f43f5e',
            icon: FileText,
          },
        ],
      },
    },
  ],

  'code-review-agent': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Code Review Agent Cycle',
        ar: 'دورة وكيل مراجعة الأكواد',
      },
      data: {
        nodes: [
          {
            label: { en: 'Receive PR', ar: 'استلام طلب الدمج' },
            description: { en: 'Pull request submitted', ar: 'تم تقديم طلب الدمج' },
            color: '#3b82f6',
            icon: GitPullRequest,
          },
          {
            label: { en: 'Analyze Code', ar: 'تحليل الكود' },
            description: { en: 'Parse and understand changes', ar: 'تحليل وفهم التغييرات' },
            color: '#8b5cf6',
            icon: Code,
          },
          {
            label: { en: 'Find Issues', ar: 'إيجاد المشكلات' },
            description: { en: 'Detect bugs and smells', ar: 'اكتشاف الأخطاء والمشكلات' },
            color: '#f59e0b',
            icon: Bug,
          },
          {
            label: { en: 'Suggest Fixes', ar: 'اقتراح الإصلاحات' },
            description: { en: 'Recommend improvements', ar: 'التوصية بالتحسينات' },
            color: '#10b981',
            icon: Lightbulb,
          },
          {
            label: { en: 'Generate Report', ar: 'إنشاء التقرير' },
            description: { en: 'Summary of findings', ar: 'ملخص النتائج' },
            color: '#f43f5e',
            icon: FileCheck,
          },
        ],
        centerLabel: { en: 'Code Review', ar: 'مراجعة الأكواد' },
      },
    },
  ],

  'customer-support-agent-design': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Customer Support Agent Pipeline',
        ar: 'خط أنابيب وكيل دعم العملاء',
      },
      data: {
        steps: [
          {
            label: { en: 'Customer Query', ar: 'استفسار العميل' },
            sublabel: { en: 'Incoming request', ar: 'الطلب الوارد' },
            color: '#3b82f6',
            icon: HelpCircle,
          },
          {
            label: { en: 'Classify Intent', ar: 'تصنيف النية' },
            sublabel: { en: 'Understand the need', ar: 'فهم الحاجة' },
            color: '#8b5cf6',
            icon: Cog,
          },
          {
            label: { en: 'Search KB', ar: 'البحث في قاعدة المعرفة' },
            sublabel: { en: 'Find relevant articles', ar: 'إيجاد المقالات ذات الصلة' },
            color: '#f59e0b',
            icon: FolderSearch,
          },
          {
            label: { en: 'Generate Response', ar: 'توليد الاستجابة' },
            sublabel: { en: 'Craft helpful reply', ar: 'صياغة رد مفيد' },
            color: '#10b981',
            icon: Reply,
          },
          {
            label: { en: 'Escalate if Needed', ar: 'التصعيد عند الحاجة' },
            sublabel: { en: 'Route to human agent', ar: 'التوجيه لوكيل بشري' },
            color: '#06b6d4',
            icon: PhoneForwarded,
          },
          {
            label: { en: 'Feedback', ar: 'التغذية الراجعة' },
            sublabel: { en: 'Collect satisfaction', ar: 'جمع مستوى الرضا' },
            color: '#f43f5e',
            icon: ThumbsUp,
          },
        ],
      },
    },
  ],

  'cybersecurity-soc-agent': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Cybersecurity SOC Agent Cycle',
        ar: 'دورة وكيل مركز العمليات الأمنية',
      },
      data: {
        nodes: [
          {
            label: { en: 'Monitor', ar: 'المراقبة' },
            description: { en: 'Watch network traffic and logs', ar: 'مراقبة حركة الشبكة والسجلات' },
            color: '#3b82f6',
            icon: Eye,
          },
          {
            label: { en: 'Detect', ar: 'الاكتشاف' },
            description: { en: 'Identify threats and anomalies', ar: 'تحديد التهديدات والشذوذ' },
            color: '#f43f5e',
            icon: Siren,
          },
          {
            label: { en: 'Analyze', ar: 'التحليل' },
            description: { en: 'Investigate the incident', ar: 'التحقيق في الحادث' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Respond', ar: 'الاستجابة' },
            description: { en: 'Take containment actions', ar: 'اتخاذ إجراءات الاحتواء' },
            color: '#8b5cf6',
            icon: Shield,
          },
          {
            label: { en: 'Remediate', ar: 'المعالجة' },
            description: { en: 'Fix vulnerabilities', ar: 'إصلاح الثغرات' },
            color: '#10b981',
            icon: Wrench,
          },
        ],
        centerLabel: { en: 'SOC Agent', ar: 'وكيل SOC' },
      },
    },
  ],

  'healthcare-assistant-agent': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Healthcare Assistant Agent Pipeline',
        ar: 'خط أنابيب وكيل المساعد الصحي',
      },
      data: {
        steps: [
          {
            label: { en: 'Patient Query', ar: 'استفسار المريض' },
            sublabel: { en: 'Health concern input', ar: 'إدخال المخاوف الصحية' },
            color: '#3b82f6',
            icon: HeartPulse,
          },
          {
            label: { en: 'Symptom Analysis', ar: 'تحليل الأعراض' },
            sublabel: { en: 'Parse symptoms', ar: 'تحليل الأعراض' },
            color: '#8b5cf6',
            icon: Stethoscope,
          },
          {
            label: { en: 'Knowledge Lookup', ar: 'البحث في المعرفة' },
            sublabel: { en: 'Medical database search', ar: 'البحث في قاعدة البيانات الطبية' },
            color: '#f59e0b',
            icon: BookOpen,
          },
          {
            label: { en: 'Risk Assessment', ar: 'تقييم المخاطر' },
            sublabel: { en: 'Evaluate severity', ar: 'تقييم الخطورة' },
            color: '#f43f5e',
            icon: AlertTriangle,
          },
          {
            label: { en: 'Recommendation', ar: 'التوصية' },
            sublabel: { en: 'Suggest next steps', ar: 'اقتراح الخطوات التالية' },
            color: '#10b981',
            icon: CheckCircle,
          },
          {
            label: { en: 'Doctor Review', ar: 'مراجعة الطبيب' },
            sublabel: { en: 'Human expert validation', ar: 'تحقق خبير بشري' },
            color: '#06b6d4',
            icon: UserCheck,
          },
        ],
      },
    },
  ],

  'ai-tutor-agent': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'AI Tutor Agent Cycle',
        ar: 'دورة وكيل المعلم الذكي',
      },
      data: {
        nodes: [
          {
            label: { en: 'Assess Student', ar: 'تقييم الطالب' },
            description: { en: 'Evaluate current level', ar: 'تقييم المستوى الحالي' },
            color: '#3b82f6',
            icon: ClipboardCheck,
          },
          {
            label: { en: 'Adapt Content', ar: 'تكييف المحتوى' },
            description: { en: 'Personalize material', ar: 'تخصيص المادة التعليمية' },
            color: '#8b5cf6',
            icon: BookMarked,
          },
          {
            label: { en: 'Teach', ar: 'التعليم' },
            description: { en: 'Deliver the lesson', ar: 'تقديم الدرس' },
            color: '#f59e0b',
            icon: GraduationCap,
          },
          {
            label: { en: 'Quiz', ar: 'الاختبار' },
            description: { en: 'Test understanding', ar: 'اختبار الفهم' },
            color: '#10b981',
            icon: Presentation,
          },
          {
            label: { en: 'Evaluate Progress', ar: 'تقييم التقدم' },
            description: { en: 'Track improvement', ar: 'تتبع التحسن' },
            color: '#f43f5e',
            icon: Award,
          },
        ],
        centerLabel: { en: 'AI Tutor', ar: 'المعلم الذكي' },
      },
    },
  ],

  'autonomous-browser-agent': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Autonomous Browser Agent Pipeline',
        ar: 'خط أنابيب وكيل المتصفح المستقل',
      },
      data: {
        steps: [
          {
            label: { en: 'Task Description', ar: 'وصف المهمة' },
            sublabel: { en: 'Define the goal', ar: 'تحديد الهدف' },
            color: '#3b82f6',
            icon: FileText,
          },
          {
            label: { en: 'Plan Steps', ar: 'تخطيط الخطوات' },
            sublabel: { en: 'Break into actions', ar: 'تقسيم إلى إجراءات' },
            color: '#8b5cf6',
            icon: Map,
          },
          {
            label: { en: 'Navigate', ar: 'التنقل' },
            sublabel: { en: 'Browse to target pages', ar: 'التصفح للصفحات المستهدفة' },
            color: '#f59e0b',
            icon: Globe,
          },
          {
            label: { en: 'Interact', ar: 'التفاعل' },
            sublabel: { en: 'Click, type, scroll', ar: 'النقر، الكتابة، التمرير' },
            color: '#10b981',
            icon: MousePointer,
          },
          {
            label: { en: 'Extract Data', ar: 'استخراج البيانات' },
            sublabel: { en: 'Scrape information', ar: 'جمع المعلومات' },
            color: '#06b6d4',
            icon: Crosshair,
          },
          {
            label: { en: 'Complete Task', ar: 'إتمام المهمة' },
            sublabel: { en: 'Deliver results', ar: 'تسليم النتائج' },
            color: '#f43f5e',
            icon: PackageCheck,
          },
        ],
      },
    },
  ],

  'digital-workers': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Digital Worker Architecture',
        ar: 'معمارية العامل الرقمي',
      },
      data: {
        center: {
          label: { en: 'Digital Worker', ar: 'العامل الرقمي' },
          color: '#8b5cf6',
          icon: Network,
        },
        spokes: [
          {
            label: { en: 'Email Agent', ar: 'وكيل البريد الإلكتروني' },
            description: { en: 'Read, draft, and send emails', ar: 'قراءة وصياغة وإرسال البريد الإلكتروني' },
            color: '#3b82f6',
            icon: Mail,
          },
          {
            label: { en: 'Calendar Agent', ar: 'وكيل التقويم' },
            description: { en: 'Schedule and manage meetings', ar: 'جدولة وإدارة الاجتماعات' },
            color: '#10b981',
            icon: Calendar,
          },
          {
            label: { en: 'Document Agent', ar: 'وكيل المستندات' },
            description: { en: 'Create and edit documents', ar: 'إنشاء وتعديل المستندات' },
            color: '#f59e0b',
            icon: FileEdit,
          },
          {
            label: { en: 'Data Agent', ar: 'وكيل البيانات' },
            description: { en: 'Analyze and report on data', ar: 'تحليل البيانات وإعداد التقارير' },
            color: '#f43f5e',
            icon: BarChart2,
          },
        ],
      },
    },
  ],
};
