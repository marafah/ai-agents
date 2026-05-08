import {
  Zap,
  Brain,
  Eye,
  Database,
  Lightbulb,
  Clock,
  Target,
  ListChecks,
  Play,
  BarChart3,
  RefreshCw,
  Users,
  UserCheck,
  User,
  Workflow,
  GitBranch,
  Settings,
  Route,
  CircleDot,
  Compass,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const agentArchitecturesDiagrams: DiagramDataMap = {
  'reactive-vs-deliberative-agents': [
    {
      template: 'vs',
      position: 'after-definition',
      title: {
        en: 'Reactive vs Deliberative Agents',
        ar: 'الوكلاء التفاعليون مقابل الوكلاء التداوليون',
      },
      data: {
        left: {
          title: { en: 'Reactive', ar: 'تفاعلي' },
          color: '#f59e0b',
          icon: Zap,
          features: {
            en: ['Stimulus-response', 'No internal model', 'Fast decisions', 'Simple behaviors'],
            ar: ['استجابة للمحفزات', 'بدون نموذج داخلي', 'قرارات سريعة', 'سلوكيات بسيطة'],
          },
        },
        right: {
          title: { en: 'Deliberative', ar: 'تداولي' },
          color: '#8b5cf6',
          icon: Brain,
          features: {
            en: ['Internal world model', 'Planning & reasoning', 'Slower but strategic', 'Complex behaviors'],
            ar: ['نموذج عالم داخلي', 'تخطيط واستدلال', 'أبطأ لكن استراتيجي', 'سلوكيات معقدة'],
          },
        },
      },
    },
  ],

  'cognitive-architectures': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'Cognitive Architecture Layers',
        ar: 'طبقات المعمارية المعرفية',
      },
      data: {
        layers: [
          {
            label: { en: 'Perception Layer', ar: 'طبقة الإدراك' },
            description: { en: 'Processes raw sensory input', ar: 'معالجة المدخلات الحسية الخام' },
            color: '#3b82f6',
            icon: Eye,
          },
          {
            label: { en: 'Working Memory', ar: 'الذاكرة العاملة' },
            description: { en: 'Holds active context', ar: 'تحتفظ بالسياق النشط' },
            color: '#06b6d4',
            icon: Database,
          },
          {
            label: { en: 'Reasoning Engine', ar: 'محرك الاستدلال' },
            description: { en: 'Logical inference & analysis', ar: 'الاستدلال المنطقي والتحليل' },
            color: '#8b5cf6',
            icon: Brain,
          },
          {
            label: { en: 'Planning Module', ar: 'وحدة التخطيط' },
            description: { en: 'Goal decomposition & scheduling', ar: 'تفكيك الأهداف والجدولة' },
            color: '#f59e0b',
            icon: ListChecks,
          },
          {
            label: { en: 'Action Execution', ar: 'تنفيذ الإجراءات' },
            description: { en: 'Carries out planned actions', ar: 'تنفيذ الإجراءات المخططة' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Learning & Adaptation', ar: 'التعلم والتكيف' },
            description: { en: 'Improves from experience', ar: 'التحسن من الخبرة' },
            color: '#f43f5e',
            icon: Lightbulb,
          },
        ],
      },
    },
  ],

  'autogpt-babyagi-patterns': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Autonomous Agent Loop',
        ar: 'حلقة الوكيل المستقل',
      },
      data: {
        nodes: [
          {
            label: { en: 'Set Goal', ar: 'تحديد الهدف' },
            description: { en: 'Define the objective', ar: 'تحديد الهدف المطلوب' },
            color: '#3b82f6',
            icon: Target,
          },
          {
            label: { en: 'Plan Tasks', ar: 'تخطيط المهام' },
            description: { en: 'Break goal into steps', ar: 'تقسيم الهدف إلى خطوات' },
            color: '#f59e0b',
            icon: ListChecks,
          },
          {
            label: { en: 'Execute Task', ar: 'تنفيذ المهمة' },
            description: { en: 'Run the current task', ar: 'تشغيل المهمة الحالية' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Evaluate', ar: 'تقييم' },
            description: { en: 'Assess the result', ar: 'تقييم النتيجة' },
            color: '#8b5cf6',
            icon: BarChart3,
          },
          {
            label: { en: 'Reprioritize', ar: 'إعادة الترتيب' },
            description: { en: 'Reorder remaining tasks', ar: 'إعادة ترتيب المهام المتبقية' },
            color: '#f43f5e',
            icon: RefreshCw,
          },
        ],
        centerLabel: { en: 'Autonomous', ar: 'مستقل' },
      },
    },
  ],

  'hierarchical-agents': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Hierarchical Agent Structure',
        ar: 'هيكل الوكلاء الهرمي',
      },
      data: {
        center: {
          label: { en: 'Manager Agent', ar: 'الوكيل المدير' },
          color: '#8b5cf6',
          icon: Users,
        },
        spokes: [
          {
            label: { en: 'Team Lead A', ar: 'قائد الفريق أ' },
            description: { en: 'Manages sub-team A', ar: 'يدير الفريق الفرعي أ' },
            color: '#3b82f6',
            icon: UserCheck,
          },
          {
            label: { en: 'Team Lead B', ar: 'قائد الفريق ب' },
            description: { en: 'Manages sub-team B', ar: 'يدير الفريق الفرعي ب' },
            color: '#f59e0b',
            icon: UserCheck,
          },
          {
            label: { en: 'Worker 1', ar: 'العامل 1' },
            description: { en: 'Executes specific tasks', ar: 'ينفذ مهام محددة' },
            color: '#10b981',
            icon: User,
          },
          {
            label: { en: 'Worker 2', ar: 'العامل 2' },
            description: { en: 'Executes specific tasks', ar: 'ينفذ مهام محددة' },
            color: '#f43f5e',
            icon: User,
          },
        ],
      },
    },
  ],

  'graph-based-agents': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Graph-Based Agent Execution',
        ar: 'تنفيذ الوكيل القائم على الرسم البياني',
      },
      data: {
        steps: [
          {
            label: { en: 'Define Graph', ar: 'تعريف الرسم البياني' },
            sublabel: { en: 'Set up structure', ar: 'إعداد الهيكل' },
            color: '#3b82f6',
            icon: Workflow,
          },
          {
            label: { en: 'Add Nodes', ar: 'إضافة العقد' },
            sublabel: { en: 'Create processing units', ar: 'إنشاء وحدات المعالجة' },
            color: '#8b5cf6',
            icon: CircleDot,
          },
          {
            label: { en: 'Configure Edges', ar: 'تهيئة الحواف' },
            sublabel: { en: 'Connect nodes', ar: 'ربط العقد' },
            color: '#f59e0b',
            icon: GitBranch,
          },
          {
            label: { en: 'Set Conditions', ar: 'تحديد الشروط' },
            sublabel: { en: 'Define routing logic', ar: 'تحديد منطق التوجيه' },
            color: '#06b6d4',
            icon: Settings,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            sublabel: { en: 'Run the graph', ar: 'تشغيل الرسم البياني' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Traverse', ar: 'اجتياز' },
            sublabel: { en: 'Follow execution path', ar: 'اتباع مسار التنفيذ' },
            color: '#f43f5e',
            icon: Route,
          },
        ],
      },
    },
  ],
};
