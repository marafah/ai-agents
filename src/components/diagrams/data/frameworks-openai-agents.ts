import {
  Bot,
  Wrench,
  FileText,
  Play,
  Radio,
  ArrowRightLeft,
  Shield,
  Activity,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksOpenaiAgentsDiagrams: DiagramDataMap = {
  'openai-agents-sdk-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'OpenAI Agents SDK Flow',
        ar: 'تدفق OpenAI Agents SDK',
      },
      data: {
        steps: [
          {
            label: { en: 'Define Agent', ar: 'تعريف الوكيل' },
            sublabel: { en: 'Create agent instance', ar: 'إنشاء نسخة الوكيل' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'Add Tools', ar: 'إضافة الأدوات' },
            sublabel: { en: 'Register capabilities', ar: 'تسجيل القدرات' },
            color: '#8b5cf6',
            icon: Wrench,
          },
          {
            label: { en: 'Set Instructions', ar: 'تعيين التعليمات' },
            sublabel: { en: 'Define behavior', ar: 'تحديد السلوك' },
            color: '#f59e0b',
            icon: FileText,
          },
          {
            label: { en: 'Run', ar: 'تشغيل' },
            sublabel: { en: 'Execute the agent', ar: 'تنفيذ الوكيل' },
            color: '#10b981',
            icon: Play,
          },
          {
            label: { en: 'Stream Response', ar: 'بث الاستجابة' },
            sublabel: { en: 'Real-time output', ar: 'مخرجات فورية' },
            color: '#06b6d4',
            icon: Radio,
          },
        ],
      },
    },
  ],

  'openai-agents-sdk-advanced': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'OpenAI Agents SDK Advanced Components',
        ar: 'المكونات المتقدمة لـ OpenAI Agents SDK',
      },
      data: {
        center: {
          label: { en: 'Runner', ar: 'المشغّل' },
          color: '#8b5cf6',
          icon: Play,
        },
        spokes: [
          {
            label: { en: 'Agent', ar: 'الوكيل' },
            description: { en: 'Core AI entity', ar: 'كيان الذكاء الأساسي' },
            color: '#3b82f6',
            icon: Bot,
          },
          {
            label: { en: 'Handoff', ar: 'التسليم' },
            description: { en: 'Transfer between agents', ar: 'التنقل بين الوكلاء' },
            color: '#f59e0b',
            icon: ArrowRightLeft,
          },
          {
            label: { en: 'Guardrail', ar: 'حاجز الأمان' },
            description: { en: 'Safety constraints', ar: 'قيود الأمان' },
            color: '#f43f5e',
            icon: Shield,
          },
          {
            label: { en: 'Tracing', ar: 'التتبع' },
            description: { en: 'Observability & logging', ar: 'المراقبة والتسجيل' },
            color: '#10b981',
            icon: Activity,
          },
        ],
      },
    },
  ],
};
