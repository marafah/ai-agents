import {
  Image,
  ScanEye,
  Blocks,
  Brain,
  FileText,
  Ear,
  Type,
  Cog,
  Camera,
  Binary,
  Search,
  MessageSquare,
  Lightbulb,
  Reply,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const computerVisionMultimodalDiagrams: DiagramDataMap = {
  'vision-language-models': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Vision-Language Model Pipeline',
        ar: 'خط أنابيب نموذج الرؤية واللغة',
      },
      data: {
        steps: [
          {
            label: { en: 'Image', ar: 'الصورة' },
            sublabel: { en: 'Raw visual input', ar: 'المدخل البصري الخام' },
            color: '#3b82f6',
            icon: Image,
          },
          {
            label: { en: 'Vision Encoder', ar: 'مشفّر الرؤية' },
            sublabel: { en: 'Extract visual features', ar: 'استخراج الميزات البصرية' },
            color: '#8b5cf6',
            icon: ScanEye,
          },
          {
            label: { en: 'Feature Tokens', ar: 'رموز الميزات' },
            sublabel: { en: 'Visual token representations', ar: 'تمثيلات الرموز البصرية' },
            color: '#f59e0b',
            icon: Blocks,
          },
          {
            label: { en: 'LLM', ar: 'نموذج اللغة الكبير' },
            sublabel: { en: 'Language model reasoning', ar: 'استدلال نموذج اللغة' },
            color: '#10b981',
            icon: Brain,
          },
          {
            label: { en: 'Text Response', ar: 'الاستجابة النصية' },
            sublabel: { en: 'Generated text output', ar: 'النص المولّد كمخرج' },
            color: '#f43f5e',
            icon: FileText,
          },
        ],
      },
    },
  ],

  'multimodal-agents': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Multimodal Agent Architecture',
        ar: 'معمارية الوكيل متعدد الوسائط',
      },
      data: {
        center: {
          label: { en: 'Multimodal Agent', ar: 'الوكيل متعدد الوسائط' },
          color: '#8b5cf6',
          icon: Brain,
        },
        spokes: [
          {
            label: { en: 'Vision Module', ar: 'وحدة الرؤية' },
            description: { en: 'Process images and video', ar: 'معالجة الصور والفيديو' },
            color: '#3b82f6',
            icon: ScanEye,
          },
          {
            label: { en: 'Audio Module', ar: 'وحدة الصوت' },
            description: { en: 'Process speech and sound', ar: 'معالجة الكلام والأصوات' },
            color: '#10b981',
            icon: Ear,
          },
          {
            label: { en: 'Text Module', ar: 'وحدة النص' },
            description: { en: 'Process natural language', ar: 'معالجة اللغة الطبيعية' },
            color: '#f59e0b',
            icon: Type,
          },
          {
            label: { en: 'Action Module', ar: 'وحدة الإجراءات' },
            description: { en: 'Execute tools and actions', ar: 'تنفيذ الأدوات والإجراءات' },
            color: '#f43f5e',
            icon: Cog,
          },
        ],
      },
    },
  ],

  'clip-gpt4v-integration': [
    {
      template: 'multi-flow',
      position: 'after-explanation',
      title: {
        en: 'CLIP vs GPT-4V Processing',
        ar: 'معالجة CLIP مقابل GPT-4V',
      },
      data: {
        phases: [
          {
            label: { en: 'CLIP', ar: 'CLIP' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Image', ar: 'الصورة' },
                sublabel: { en: 'Visual input', ar: 'مدخل بصري' },
                color: '#3b82f6',
                icon: Camera,
              },
              {
                label: { en: 'Encode', ar: 'تشفير' },
                sublabel: { en: 'Dual encoder', ar: 'مشفّر مزدوج' },
                color: '#06b6d4',
                icon: Binary,
              },
              {
                label: { en: 'Embedding', ar: 'التضمين' },
                sublabel: { en: 'Vector representation', ar: 'تمثيل متجهي' },
                color: '#0ea5e9',
                icon: Blocks,
              },
              {
                label: { en: 'Similarity', ar: 'التشابه' },
                sublabel: { en: 'Match text & image', ar: 'مطابقة النص والصورة' },
                color: '#14b8a6',
                icon: Search,
              },
            ],
          },
          {
            label: { en: 'GPT-4V', ar: 'GPT-4V' },
            color: '#8b5cf6',
            steps: [
              {
                label: { en: 'Image + Text', ar: 'الصورة + النص' },
                sublabel: { en: 'Multimodal input', ar: 'مدخل متعدد الوسائط' },
                color: '#8b5cf6',
                icon: MessageSquare,
              },
              {
                label: { en: 'Analyze', ar: 'تحليل' },
                sublabel: { en: 'Deep understanding', ar: 'فهم عميق' },
                color: '#a855f7',
                icon: ScanEye,
              },
              {
                label: { en: 'Reason', ar: 'استدلال' },
                sublabel: { en: 'Chain-of-thought', ar: 'سلسلة التفكير' },
                color: '#d946ef',
                icon: Lightbulb,
              },
              {
                label: { en: 'Respond', ar: 'الاستجابة' },
                sublabel: { en: 'Detailed text output', ar: 'مخرج نصي مفصّل' },
                color: '#ec4899',
                icon: Reply,
              },
            ],
          },
        ],
        connector: { en: 'vs', ar: 'مقابل' },
      },
    },
  ],
};
