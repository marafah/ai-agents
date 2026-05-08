import {
  AlertTriangle,
  Crosshair,
  FileWarning,
  Skull,
  ShieldAlert,
  Filter,
  Search,
  Brain,
  Shield,
  FileOutput,
  Lock,
  CheckCircle,
  Eye,
  ClipboardList,
  Wrench,
  Target,
  Database,
  Compass,
  Heart,
  Scale,
  Users,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const aiSecurityDiagrams: DiagramDataMap = {
  'prompt-injection-attacks': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Prompt Injection Attack Flow',
        ar: 'تدفق هجوم حقن الأوامر',
      },
      data: {
        steps: [
          {
            label: { en: 'Malicious Input', ar: 'إدخال ضار' },
            sublabel: { en: 'Crafted payload', ar: 'حمولة مصممة' },
            color: '#f43f5e',
            icon: AlertTriangle,
          },
          {
            label: { en: 'Injection Point', ar: 'نقطة الحقن' },
            sublabel: { en: 'Vulnerable entry', ar: 'نقطة دخول ضعيفة' },
            color: '#f59e0b',
            icon: Crosshair,
          },
          {
            label: { en: 'Hijacked Prompt', ar: 'أمر مختطف' },
            sublabel: { en: 'Modified instructions', ar: 'تعليمات معدّلة' },
            color: '#8b5cf6',
            icon: FileWarning,
          },
          {
            label: { en: 'Unintended Output', ar: 'مخرجات غير مقصودة' },
            sublabel: { en: 'Wrong behavior', ar: 'سلوك خاطئ' },
            color: '#f97316',
            icon: Skull,
          },
          {
            label: { en: 'Data Leak', ar: 'تسريب البيانات' },
            sublabel: { en: 'Sensitive info exposed', ar: 'كشف معلومات حساسة' },
            color: '#ef4444',
            icon: ShieldAlert,
          },
        ],
      },
    },
  ],

  'jailbreaking-defense': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Jailbreaking Defense Layers',
        ar: 'طبقات الدفاع ضد كسر الحماية',
      },
      data: {
        layers: [
          {
            label: { en: 'Input Sanitization', ar: 'تنقية المدخلات' },
            description: { en: 'Clean and validate input', ar: 'تنظيف والتحقق من المدخلات' },
            color: '#3b82f6',
            icon: Filter,
          },
          {
            label: { en: 'Pattern Detection', ar: 'كشف الأنماط' },
            description: { en: 'Identify known attacks', ar: 'تحديد الهجمات المعروفة' },
            color: '#8b5cf6',
            icon: Search,
          },
          {
            label: { en: 'Intent Classification', ar: 'تصنيف النوايا' },
            description: { en: 'Analyze user intent', ar: 'تحليل نية المستخدم' },
            color: '#f59e0b',
            icon: Brain,
          },
          {
            label: { en: 'Behavioral Guardrails', ar: 'حواجز سلوكية' },
            description: { en: 'Enforce policy limits', ar: 'فرض حدود السياسة' },
            color: '#10b981',
            icon: Shield,
          },
          {
            label: { en: 'Response Filtering', ar: 'تصفية الاستجابات' },
            description: { en: 'Block harmful outputs', ar: 'حظر المخرجات الضارة' },
            color: '#f43f5e',
            icon: FileOutput,
          },
        ],
      },
    },
  ],

  'adversarial-attacks-on-agents': [
    {
      template: 'comparison',
      position: 'after-definition',
      title: {
        en: 'Types of Adversarial Attacks on Agents',
        ar: 'أنواع الهجمات العدائية على الوكلاء',
      },
      data: {
        items: [
          {
            title: { en: 'Prompt Injection', ar: 'حقن الأوامر' },
            description: { en: 'Manipulating agent instructions via crafted inputs', ar: 'التلاعب بتعليمات الوكيل عبر مدخلات مصممة' },
            color: '#f43f5e',
            icon: AlertTriangle,
            features: {
              en: ['Overrides system prompt', 'Extracts hidden info', 'Changes behavior'],
              ar: ['يتجاوز أمر النظام', 'يستخرج معلومات مخفية', 'يغير السلوك'],
            },
          },
          {
            title: { en: 'Tool Manipulation', ar: 'التلاعب بالأدوات' },
            description: { en: 'Tricking agents into misusing their tools', ar: 'خداع الوكلاء لإساءة استخدام أدواتهم' },
            color: '#f59e0b',
            icon: Wrench,
            features: {
              en: ['Unauthorized API calls', 'Data exfiltration', 'Resource abuse'],
              ar: ['استدعاءات API غير مصرح بها', 'تسريب البيانات', 'إساءة استخدام الموارد'],
            },
          },
          {
            title: { en: 'Memory Poisoning', ar: 'تسميم الذاكرة' },
            description: { en: 'Corrupting the agent memory with false information', ar: 'إفساد ذاكرة الوكيل بمعلومات كاذبة' },
            color: '#8b5cf6',
            icon: Database,
            features: {
              en: ['False context injection', 'Long-term corruption', 'Cascading errors'],
              ar: ['حقن سياق مزيف', 'إفساد طويل الأمد', 'أخطاء متتالية'],
            },
          },
          {
            title: { en: 'Goal Hijacking', ar: 'اختطاف الأهداف' },
            description: { en: 'Redirecting the agent toward attacker objectives', ar: 'إعادة توجيه الوكيل نحو أهداف المهاجم' },
            color: '#06b6d4',
            icon: Target,
            features: {
              en: ['Objective replacement', 'Priority manipulation', 'Subtle misdirection'],
              ar: ['استبدال الأهداف', 'التلاعب بالأولويات', 'توجيه خفي خاطئ'],
            },
          },
        ],
      },
    },
  ],

  'sandboxing-permissions': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Sandboxing & Permissions Architecture',
        ar: 'معمارية العزل والصلاحيات',
      },
      data: {
        layers: [
          {
            label: { en: 'User Request', ar: 'طلب المستخدم' },
            description: { en: 'Incoming action request', ar: 'طلب إجراء وارد' },
            color: '#3b82f6',
            icon: Users,
          },
          {
            label: { en: 'Auth Check', ar: 'فحص المصادقة' },
            description: { en: 'Verify identity', ar: 'التحقق من الهوية' },
            color: '#8b5cf6',
            icon: Lock,
          },
          {
            label: { en: 'Permission Scope', ar: 'نطاق الصلاحيات' },
            description: { en: 'Define allowed actions', ar: 'تحديد الإجراءات المسموحة' },
            color: '#f59e0b',
            icon: Shield,
          },
          {
            label: { en: 'Sandboxed Execution', ar: 'تنفيذ معزول' },
            description: { en: 'Isolated environment', ar: 'بيئة معزولة' },
            color: '#10b981',
            icon: Eye,
          },
          {
            label: { en: 'Output Validation', ar: 'التحقق من المخرجات' },
            description: { en: 'Check results safety', ar: 'فحص أمان النتائج' },
            color: '#06b6d4',
            icon: CheckCircle,
          },
          {
            label: { en: 'Audit Trail', ar: 'سجل التدقيق' },
            description: { en: 'Log all actions', ar: 'تسجيل جميع الإجراءات' },
            color: '#f43f5e',
            icon: ClipboardList,
          },
        ],
      },
    },
  ],

  'responsible-ai-practices': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Responsible AI Pillars',
        ar: 'ركائز الذكاء الاصطناعي المسؤول',
      },
      data: {
        center: {
          label: { en: 'Responsible AI', ar: 'ذكاء اصطناعي مسؤول' },
          color: '#8b5cf6',
          icon: Heart,
        },
        spokes: [
          {
            label: { en: 'Fairness', ar: 'العدالة' },
            description: { en: 'Unbiased decisions', ar: 'قرارات غير متحيزة' },
            color: '#3b82f6',
            icon: Scale,
          },
          {
            label: { en: 'Transparency', ar: 'الشفافية' },
            description: { en: 'Explainable outcomes', ar: 'نتائج قابلة للتفسير' },
            color: '#f59e0b',
            icon: Eye,
          },
          {
            label: { en: 'Privacy', ar: 'الخصوصية' },
            description: { en: 'Data protection', ar: 'حماية البيانات' },
            color: '#10b981',
            icon: Lock,
          },
          {
            label: { en: 'Accountability', ar: 'المساءلة' },
            description: { en: 'Clear responsibility', ar: 'مسؤولية واضحة' },
            color: '#f43f5e',
            icon: ClipboardList,
          },
        ],
      },
    },
  ],
};
