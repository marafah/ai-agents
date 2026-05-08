import {
  Users,
  UserCheck,
  ListChecks,
  Settings,
  Rocket,
  CheckCircle,
  Search,
  PenTool,
  FileEdit,
  ShieldCheck,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksCrewaiDiagrams: DiagramDataMap = {
  'crewai-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'CrewAI Workflow',
        ar: 'سير عمل CrewAI',
      },
      data: {
        steps: [
          {
            label: { en: 'Define Agents', ar: 'تعريف الوكلاء' },
            sublabel: { en: 'Create agent instances', ar: 'إنشاء نسخ الوكلاء' },
            color: '#3b82f6',
            icon: Users,
          },
          {
            label: { en: 'Assign Roles', ar: 'تعيين الأدوار' },
            sublabel: { en: 'Set expertise areas', ar: 'تحديد مجالات الخبرة' },
            color: '#8b5cf6',
            icon: UserCheck,
          },
          {
            label: { en: 'Create Tasks', ar: 'إنشاء المهام' },
            sublabel: { en: 'Define work items', ar: 'تحديد عناصر العمل' },
            color: '#f59e0b',
            icon: ListChecks,
          },
          {
            label: { en: 'Set Process', ar: 'تعيين العملية' },
            sublabel: { en: 'Sequential or parallel', ar: 'تسلسلي أو متوازي' },
            color: '#06b6d4',
            icon: Settings,
          },
          {
            label: { en: 'Crew Kickoff', ar: 'انطلاق الفريق' },
            sublabel: { en: 'Start execution', ar: 'بدء التنفيذ' },
            color: '#10b981',
            icon: Rocket,
          },
          {
            label: { en: 'Results', ar: 'النتائج' },
            sublabel: { en: 'Collected outputs', ar: 'المخرجات المجمعة' },
            color: '#f43f5e',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'crewai-multi-agent-teams': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'CrewAI Multi-Agent Team',
        ar: 'فريق CrewAI متعدد الوكلاء',
      },
      data: {
        center: {
          label: { en: 'Crew Manager', ar: 'مدير الفريق' },
          color: '#8b5cf6',
          icon: Users,
        },
        spokes: [
          {
            label: { en: 'Researcher', ar: 'الباحث' },
            description: { en: 'Gathers information', ar: 'يجمع المعلومات' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Writer', ar: 'الكاتب' },
            description: { en: 'Creates content', ar: 'ينشئ المحتوى' },
            color: '#f59e0b',
            icon: PenTool,
          },
          {
            label: { en: 'Editor', ar: 'المحرر' },
            description: { en: 'Refines and polishes', ar: 'يحسّن وينقّح' },
            color: '#10b981',
            icon: FileEdit,
          },
          {
            label: { en: 'QA Reviewer', ar: 'مراجع الجودة' },
            description: { en: 'Validates quality', ar: 'يتحقق من الجودة' },
            color: '#f43f5e',
            icon: ShieldCheck,
          },
        ],
      },
    },
  ],
};
