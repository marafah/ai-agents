import {
  Crown,
  BookOpen,
  Code,
  Eye,
  PenTool,
  ShieldCheck,
  Filter,
  FileCheck,
  Activity,
  ScrollText,
  BarChart3,
  LayoutDashboard,
  Bell,
  IterationCcw,
  Search,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const advancedDiagrams: DiagramDataMap = {
  'multi-agent-systems': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Multi-Agent System Architecture',
        ar: 'معمارية نظام متعدد الوكلاء',
      },
      data: {
        center: {
          label: { en: 'Supervisor', ar: 'المشرف' },
          color: '#8b5cf6',
          icon: Crown,
        },
        spokes: [
          {
            label: { en: 'Researcher', ar: 'الباحث' },
            description: { en: 'Gathers and analyzes information', ar: 'يجمع ويحلل المعلومات' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Coder', ar: 'المبرمج' },
            description: { en: 'Writes and debugs code', ar: 'يكتب ويصلح الأكواد' },
            color: '#10b981',
            icon: Code,
          },
          {
            label: { en: 'Reviewer', ar: 'المراجع' },
            description: { en: 'Reviews quality and correctness', ar: 'يراجع الجودة والصحة' },
            color: '#f59e0b',
            icon: Eye,
          },
          {
            label: { en: 'Writer', ar: 'الكاتب' },
            description: { en: 'Creates documentation and reports', ar: 'يُنشئ التوثيق والتقارير' },
            color: '#f43f5e',
            icon: PenTool,
          },
        ],
      },
    },
  ],

  'guardrails-and-safety': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'Safety Stack Architecture',
        ar: 'معمارية طبقات الأمان',
      },
      data: {
        layers: [
          {
            label: { en: 'Input Validation', ar: 'التحقق من المدخلات' },
            description: { en: 'Sanitize and validate user inputs', ar: 'تنظيف والتحقق من مدخلات المستخدم' },
            color: '#3b82f6',
            icon: ShieldCheck,
          },
          {
            label: { en: 'Content Filter', ar: 'مرشح المحتوى' },
            description: { en: 'Block harmful or inappropriate content', ar: 'حجب المحتوى الضار أو غير المناسب' },
            color: '#f59e0b',
            icon: Filter,
          },
          {
            label: { en: 'Output Check', ar: 'فحص المخرجات' },
            description: { en: 'Verify response compliance', ar: 'التحقق من توافق الاستجابة' },
            color: '#10b981',
            icon: FileCheck,
          },
          {
            label: { en: 'Safety Monitor', ar: 'مراقب السلامة' },
            description: { en: 'Real-time threat detection', ar: 'كشف التهديدات في الوقت الحقيقي' },
            color: '#f43f5e',
            icon: Activity,
          },
          {
            label: { en: 'Logging', ar: 'التسجيل' },
            description: { en: 'Audit trail for all actions', ar: 'سجل تدقيق لجميع الإجراءات' },
            color: '#8b5cf6',
            icon: ScrollText,
          },
        ],
      },
    },
  ],

  'evaluation-and-observability': [
    {
      template: 'flow',
      position: 'after-explanation',
      title: {
        en: 'Evaluation & Observability Pipeline',
        ar: 'خط أنابيب التقييم والمراقبة',
      },
      data: {
        steps: [
          {
            label: { en: 'Trace', ar: 'التتبع' },
            sublabel: { en: 'Capture execution spans', ar: 'التقاط نطاقات التنفيذ' },
            color: '#3b82f6',
            icon: BookOpen,
          },
          {
            label: { en: 'Metrics', ar: 'المقاييس' },
            sublabel: { en: 'Measure performance', ar: 'قياس الأداء' },
            color: '#f59e0b',
            icon: BarChart3,
          },
          {
            label: { en: 'Dashboard', ar: 'لوحة المعلومات' },
            sublabel: { en: 'Visualize insights', ar: 'عرض الرؤى' },
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
            label: { en: 'Iterate', ar: 'التكرار' },
            sublabel: { en: 'Improve based on data', ar: 'التحسين بناءً على البيانات' },
            color: '#8b5cf6',
            icon: IterationCcw,
          },
        ],
      },
    },
  ],
};
