import {
  FileText,
  Database,
  Search,
  Combine,
  CheckCircle,
  Upload,
  RefreshCw,
  Box,
  HardDrive,
  Filter,
  Sparkles,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const frameworksLlamaindexDiagrams: DiagramDataMap = {
  'llamaindex-introduction': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'LlamaIndex Core Flow',
        ar: 'التدفق الأساسي لـ LlamaIndex',
      },
      data: {
        steps: [
          {
            label: { en: 'Documents', ar: 'المستندات' },
            sublabel: { en: 'Load source data', ar: 'تحميل البيانات المصدرية' },
            color: '#3b82f6',
            icon: FileText,
          },
          {
            label: { en: 'Index', ar: 'الفهرس' },
            sublabel: { en: 'Build search index', ar: 'بناء فهرس البحث' },
            color: '#8b5cf6',
            icon: Database,
          },
          {
            label: { en: 'Query Engine', ar: 'محرك الاستعلام' },
            sublabel: { en: 'Process queries', ar: 'معالجة الاستعلامات' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Response Synthesizer', ar: 'مولّد الاستجابة' },
            sublabel: { en: 'Combine results', ar: 'دمج النتائج' },
            color: '#06b6d4',
            icon: Combine,
          },
          {
            label: { en: 'Answer', ar: 'الإجابة' },
            sublabel: { en: 'Final output', ar: 'المخرجات النهائية' },
            color: '#10b981',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'llamaindex-rag-pipelines': [
    {
      template: 'multi-flow',
      position: 'after-definition',
      title: {
        en: 'LlamaIndex RAG Pipeline',
        ar: 'خط أنابيب RAG في LlamaIndex',
      },
      data: {
        phases: [
          {
            label: { en: 'Indexing', ar: 'الفهرسة' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Load', ar: 'تحميل' },
                sublabel: { en: 'Read documents', ar: 'قراءة المستندات' },
                color: '#3b82f6',
                icon: Upload,
              },
              {
                label: { en: 'Transform', ar: 'تحويل' },
                sublabel: { en: 'Chunk & process', ar: 'تقسيم ومعالجة' },
                color: '#8b5cf6',
                icon: RefreshCw,
              },
              {
                label: { en: 'Embed', ar: 'تضمين' },
                sublabel: { en: 'Create vectors', ar: 'إنشاء المتجهات' },
                color: '#06b6d4',
                icon: Box,
              },
              {
                label: { en: 'Store', ar: 'تخزين' },
                sublabel: { en: 'Save to vector DB', ar: 'حفظ في قاعدة المتجهات' },
                color: '#10b981',
                icon: HardDrive,
              },
            ],
          },
          {
            label: { en: 'Querying', ar: 'الاستعلام' },
            color: '#f59e0b',
            steps: [
              {
                label: { en: 'Query', ar: 'استعلام' },
                sublabel: { en: 'User question', ar: 'سؤال المستخدم' },
                color: '#f59e0b',
                icon: Search,
              },
              {
                label: { en: 'Retrieve', ar: 'استرجاع' },
                sublabel: { en: 'Find relevant chunks', ar: 'إيجاد الأجزاء ذات الصلة' },
                color: '#f43f5e',
                icon: Database,
              },
              {
                label: { en: 'Post-Process', ar: 'معالجة لاحقة' },
                sublabel: { en: 'Rerank & filter', ar: 'إعادة ترتيب وتصفية' },
                color: '#a855f7',
                icon: Filter,
              },
              {
                label: { en: 'Synthesize', ar: 'تجميع' },
                sublabel: { en: 'Generate answer', ar: 'توليد الإجابة' },
                color: '#14b8a6',
                icon: Sparkles,
              },
            ],
          },
        ],
        connector: { en: 'then', ar: 'ثم' },
      },
    },
  ],
};
