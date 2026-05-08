import {
  Zap,
  Database,
  HardDrive,
  LayoutDashboard,
  Bell,
  Bug,
  Globe,
  Server,
  Cpu,
  Layers,
  Activity,
  FileEdit,
  TestTube,
  Tag,
  FlaskConical,
  ArrowUpCircle,
  Archive,
  Radio,
  Container,
  MessageSquare,
  Save,
  Route,
  PackageCheck,
  Shrink,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const productionLlmopsDiagrams: DiagramDataMap = {
  'observability-langsmith-wandb': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Observability Pipeline',
        ar: 'خط أنابيب المراقبة',
      },
      data: {
        steps: [
          {
            label: { en: 'Agent Action', ar: 'إجراء الوكيل' },
            sublabel: { en: 'Any agent operation', ar: 'أي عملية للوكيل' },
            color: '#3b82f6',
            icon: Zap,
          },
          {
            label: { en: 'Trace Capture', ar: 'التقاط التتبع' },
            sublabel: { en: 'Record execution spans', ar: 'تسجيل نطاقات التنفيذ' },
            color: '#8b5cf6',
            icon: Database,
          },
          {
            label: { en: 'Log Store', ar: 'مخزن السجلات' },
            sublabel: { en: 'Persist trace data', ar: 'حفظ بيانات التتبع' },
            color: '#f59e0b',
            icon: HardDrive,
          },
          {
            label: { en: 'Dashboard', ar: 'لوحة المعلومات' },
            sublabel: { en: 'Visualize metrics', ar: 'عرض المقاييس' },
            color: '#10b981',
            icon: LayoutDashboard,
          },
          {
            label: { en: 'Alert', ar: 'التنبيه' },
            sublabel: { en: 'Notify on anomalies', ar: 'الإشعار عند الشذوذ' },
            color: '#f43f5e',
            icon: Bell,
          },
          {
            label: { en: 'Debug', ar: 'تصحيح الأخطاء' },
            sublabel: { en: 'Investigate root causes', ar: 'التحقيق في الأسباب الجذرية' },
            color: '#06b6d4',
            icon: Bug,
          },
        ],
      },
    },
  ],

  'model-serving-infrastructure': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Model Serving Infrastructure Stack',
        ar: 'طبقات البنية التحتية لخدمة النماذج',
      },
      data: {
        layers: [
          {
            label: { en: 'Load Balancer', ar: 'موازن الحمل' },
            description: { en: 'Distribute traffic across servers', ar: 'توزيع حركة المرور عبر الخوادم' },
            color: '#3b82f6',
            icon: Globe,
          },
          {
            label: { en: 'API Gateway', ar: 'بوابة الواجهة البرمجية' },
            description: { en: 'Auth, rate limiting, routing', ar: 'المصادقة وتحديد المعدل والتوجيه' },
            color: '#8b5cf6',
            icon: Server,
          },
          {
            label: { en: 'Model Server', ar: 'خادم النموذج' },
            description: { en: 'Host and run inference', ar: 'استضافة وتشغيل الاستدلال' },
            color: '#f59e0b',
            icon: Cpu,
          },
          {
            label: { en: 'GPU Cluster', ar: 'مجموعة وحدات المعالجة الرسومية' },
            description: { en: 'Compute resources for inference', ar: 'موارد الحوسبة للاستدلال' },
            color: '#10b981',
            icon: Layers,
          },
          {
            label: { en: 'Cache Layer', ar: 'طبقة التخزين المؤقت' },
            description: { en: 'Store frequent responses', ar: 'تخزين الاستجابات المتكررة' },
            color: '#06b6d4',
            icon: HardDrive,
          },
          {
            label: { en: 'Monitoring', ar: 'المراقبة' },
            description: { en: 'Health checks and metrics', ar: 'فحوصات السلامة والمقاييس' },
            color: '#f43f5e',
            icon: Activity,
          },
        ],
      },
    },
  ],

  'prompt-versioning-management': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Prompt Versioning Lifecycle',
        ar: 'دورة حياة إصدارات الأوامر',
      },
      data: {
        steps: [
          {
            label: { en: 'Draft Prompt', ar: 'مسودة الأمر' },
            sublabel: { en: 'Write initial prompt', ar: 'كتابة الأمر الأولي' },
            color: '#3b82f6',
            icon: FileEdit,
          },
          {
            label: { en: 'Test', ar: 'اختبار' },
            sublabel: { en: 'Validate with test cases', ar: 'التحقق بحالات اختبار' },
            color: '#8b5cf6',
            icon: TestTube,
          },
          {
            label: { en: 'Version Tag', ar: 'وسم الإصدار' },
            sublabel: { en: 'Assign version number', ar: 'تعيين رقم الإصدار' },
            color: '#f59e0b',
            icon: Tag,
          },
          {
            label: { en: 'A/B Test', ar: 'اختبار أ/ب' },
            sublabel: { en: 'Compare with production', ar: 'المقارنة مع الإنتاج' },
            color: '#10b981',
            icon: FlaskConical,
          },
          {
            label: { en: 'Promote', ar: 'ترقية' },
            sublabel: { en: 'Deploy to production', ar: 'النشر في الإنتاج' },
            color: '#f43f5e',
            icon: ArrowUpCircle,
          },
          {
            label: { en: 'Archive', ar: 'أرشفة' },
            sublabel: { en: 'Store old versions', ar: 'تخزين الإصدارات القديمة' },
            color: '#06b6d4',
            icon: Archive,
          },
        ],
      },
    },
  ],

  'distributed-agent-systems': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Distributed Agent Architecture',
        ar: 'معمارية الوكلاء الموزعة',
      },
      data: {
        center: {
          label: { en: 'Orchestrator', ar: 'المنسق' },
          color: '#8b5cf6',
          icon: Radio,
        },
        spokes: [
          {
            label: { en: 'Worker Node A', ar: 'عقدة العامل أ' },
            description: { en: 'Handles task execution', ar: 'يتولى تنفيذ المهام' },
            color: '#3b82f6',
            icon: Container,
          },
          {
            label: { en: 'Worker Node B', ar: 'عقدة العامل ب' },
            description: { en: 'Parallel task processing', ar: 'معالجة المهام المتوازية' },
            color: '#10b981',
            icon: Container,
          },
          {
            label: { en: 'Message Queue', ar: 'طابور الرسائل' },
            description: { en: 'Async communication bus', ar: 'ناقل الاتصال غير المتزامن' },
            color: '#f59e0b',
            icon: MessageSquare,
          },
          {
            label: { en: 'State Store', ar: 'مخزن الحالة' },
            description: { en: 'Shared state persistence', ar: 'حفظ الحالة المشتركة' },
            color: '#f43f5e',
            icon: Save,
          },
        ],
      },
    },
  ],

  'production-cost-optimization': [
    {
      template: 'comparison',
      position: 'in-explanation',
      title: {
        en: 'Production Cost Optimization Strategies',
        ar: 'استراتيجيات تحسين تكلفة الإنتاج',
      },
      data: {
        items: [
          {
            title: { en: 'Model Routing', ar: 'توجيه النماذج' },
            description: { en: 'Cost-aware model selection', ar: 'اختيار النموذج بوعي التكلفة' },
            color: '#3b82f6',
            icon: Route,
            features: {
              en: ['Route simple tasks to small models', 'Use large models only when needed', 'Dynamic complexity scoring', 'Fallback chains'],
              ar: ['توجيه المهام البسيطة لنماذج صغيرة', 'استخدام النماذج الكبيرة عند الحاجة فقط', 'تسجيل التعقيد الديناميكي', 'سلاسل احتياطية'],
            },
          },
          {
            title: { en: 'Caching', ar: 'التخزين المؤقت' },
            description: { en: 'Reduce redundant API calls', ar: 'تقليل استدعاءات الواجهة المتكررة' },
            color: '#10b981',
            icon: HardDrive,
            features: {
              en: ['Semantic caching', 'Exact-match caching', 'TTL-based expiry', 'Cache hit analytics'],
              ar: ['تخزين دلالي مؤقت', 'تخزين التطابق الحرفي', 'انتهاء الصلاحية المؤقتة', 'تحليلات إصابة التخزين'],
            },
          },
          {
            title: { en: 'Batching', ar: 'التجميع' },
            description: { en: 'Improve throughput efficiency', ar: 'تحسين كفاءة الإنتاجية' },
            color: '#f59e0b',
            icon: PackageCheck,
            features: {
              en: ['Group similar requests', 'Reduce API overhead', 'Async batch processing', 'Priority queuing'],
              ar: ['تجميع الطلبات المتشابهة', 'تقليل حمل الواجهة', 'معالجة دفعية غير متزامنة', 'ترتيب الأولويات'],
            },
          },
          {
            title: { en: 'Quantization', ar: 'التكميم' },
            description: { en: 'Cheaper inference with smaller models', ar: 'استدلال أرخص بنماذج أصغر' },
            color: '#8b5cf6',
            icon: Shrink,
            features: {
              en: ['INT8/INT4 quantization', 'Knowledge distillation', 'Pruning unused weights', 'Mixed precision inference'],
              ar: ['تكميم INT8/INT4', 'تقطير المعرفة', 'تقليم الأوزان غير المستخدمة', 'استدلال بدقة مختلطة'],
            },
          },
        ],
      },
    },
  ],
};
