import {
  Box,
  Puzzle,
  Database,
  ListChecks,
  Play,
  Code,
  Sparkles,
  GitBranch,
  Workflow,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksSemanticKernelDiagrams: DiagramDataMap = {
  'semantic-kernel-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Semantic Kernel Architecture',
        ar: 'معمارية Semantic Kernel',
      },
      data: {
        steps: [
          {
            label: { en: 'Kernel', ar: 'النواة' },
            sublabel: { en: 'Core orchestrator', ar: 'المنسق الأساسي' },
            color: '#8b5cf6',
            icon: Box,
          },
          {
            label: { en: 'Plugins', ar: 'الإضافات' },
            sublabel: { en: 'Extend capabilities', ar: 'توسيع القدرات' },
            color: '#3b82f6',
            icon: Puzzle,
          },
          {
            label: { en: 'Memory', ar: 'الذاكرة' },
            sublabel: { en: 'Store context', ar: 'تخزين السياق' },
            color: '#06b6d4',
            icon: Database,
          },
          {
            label: { en: 'Planner', ar: 'المخطط' },
            sublabel: { en: 'Plan execution steps', ar: 'تخطيط خطوات التنفيذ' },
            color: '#f59e0b',
            icon: ListChecks,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            sublabel: { en: 'Run the plan', ar: 'تشغيل الخطة' },
            color: '#10b981',
            icon: Play,
          },
        ],
      },
    },
  ],

  'semantic-kernel-plugins-planners': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Kernel Plugins & Planners',
        ar: 'إضافات ومخططات النواة',
      },
      data: {
        center: {
          label: { en: 'Kernel', ar: 'النواة' },
          color: '#8b5cf6',
          icon: Box,
        },
        spokes: [
          {
            label: { en: 'Native Plugin', ar: 'إضافة أصلية' },
            description: { en: 'C#/Python functions', ar: 'دوال C#/Python' },
            color: '#3b82f6',
            icon: Code,
          },
          {
            label: { en: 'Semantic Plugin', ar: 'إضافة دلالية' },
            description: { en: 'Prompt-based functions', ar: 'دوال قائمة على الأوامر' },
            color: '#f59e0b',
            icon: Sparkles,
          },
          {
            label: { en: 'Stepwise Planner', ar: 'مخطط تدريجي' },
            description: { en: 'Step-by-step execution', ar: 'تنفيذ خطوة بخطوة' },
            color: '#10b981',
            icon: GitBranch,
          },
          {
            label: { en: 'Handlebars Planner', ar: 'مخطط Handlebars' },
            description: { en: 'Template-based plans', ar: 'خطط قائمة على القوالب' },
            color: '#f43f5e',
            icon: Workflow,
          },
        ],
      },
    },
  ],
};
