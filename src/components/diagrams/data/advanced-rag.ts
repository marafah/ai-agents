import {
  FileText,
  Network,
  Link,
  Database,
  Search,
  MessageSquare,
  Brain,
  Route,
  Filter,
  CheckCircle,
  RefreshCw,
  Sparkles,
  Layers,
  GitMerge,
  PenTool,
  SplitSquareVertical,
  ArrowRightLeft,
  Combine,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const advancedRagDiagrams: DiagramDataMap = {
  'graph-rag': [
    {
      template: 'multi-flow',
      position: 'after-definition',
      title: {
        en: 'Graph RAG Pipeline',
        ar: 'خط أنابيب Graph RAG',
      },
      data: {
        phases: [
          {
            label: { en: 'Build', ar: 'بناء' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Documents', ar: 'المستندات' },
                sublabel: { en: 'Source data', ar: 'البيانات المصدرية' },
                color: '#3b82f6',
                icon: FileText,
              },
              {
                label: { en: 'Entities', ar: 'الكيانات' },
                sublabel: { en: 'Extract entities', ar: 'استخراج الكيانات' },
                color: '#8b5cf6',
                icon: Network,
              },
              {
                label: { en: 'Relationships', ar: 'العلاقات' },
                sublabel: { en: 'Map connections', ar: 'رسم الروابط' },
                color: '#06b6d4',
                icon: Link,
              },
              {
                label: { en: 'Knowledge Graph', ar: 'رسم المعرفة' },
                sublabel: { en: 'Structured graph', ar: 'رسم بياني منظم' },
                color: '#10b981',
                icon: Database,
              },
            ],
          },
          {
            label: { en: 'Query', ar: 'استعلام' },
            color: '#f59e0b',
            steps: [
              {
                label: { en: 'Question', ar: 'السؤال' },
                sublabel: { en: 'User query', ar: 'استعلام المستخدم' },
                color: '#f59e0b',
                icon: MessageSquare,
              },
              {
                label: { en: 'Graph Traverse', ar: 'اجتياز الرسم' },
                sublabel: { en: 'Navigate graph', ar: 'التنقل في الرسم' },
                color: '#f43f5e',
                icon: Route,
              },
              {
                label: { en: 'Subgraph', ar: 'رسم فرعي' },
                sublabel: { en: 'Relevant context', ar: 'السياق ذو الصلة' },
                color: '#a855f7',
                icon: GitMerge,
              },
              {
                label: { en: 'LLM', ar: 'نموذج اللغة' },
                sublabel: { en: 'Generate answer', ar: 'توليد الإجابة' },
                color: '#0ea5e9',
                icon: Brain,
              },
              {
                label: { en: 'Answer', ar: 'الإجابة' },
                sublabel: { en: 'Final response', ar: 'الاستجابة النهائية' },
                color: '#10b981',
                icon: CheckCircle,
              },
            ],
          },
        ],
        connector: { en: 'then', ar: 'ثم' },
      },
    },
  ],

  'agentic-rag': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Agentic RAG Decision Loop',
        ar: 'حلقة قرار RAG الوكيلي',
      },
      data: {
        nodes: [
          {
            label: { en: 'Query', ar: 'استعلام' },
            description: { en: 'Receive user question', ar: 'استلام سؤال المستخدم' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Route', ar: 'توجيه' },
            description: { en: 'Choose retrieval strategy', ar: 'اختيار استراتيجية الاسترجاع' },
            color: '#8b5cf6',
            icon: Route,
          },
          {
            label: { en: 'Retrieve', ar: 'استرجاع' },
            description: { en: 'Fetch relevant documents', ar: 'جلب المستندات ذات الصلة' },
            color: '#f59e0b',
            icon: Database,
          },
          {
            label: { en: 'Grade', ar: 'تقييم' },
            description: { en: 'Score relevance', ar: 'تقييم مدى الصلة' },
            color: '#10b981',
            icon: Filter,
          },
          {
            label: { en: 'Decide', ar: 'قرار' },
            description: { en: 'Retry or answer', ar: 'إعادة المحاولة أو الإجابة' },
            color: '#f43f5e',
            icon: RefreshCw,
          },
        ],
        centerLabel: { en: 'Agentic RAG', ar: 'RAG وكيلي' },
      },
    },
  ],

  'self-rag': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Self-RAG Pipeline',
        ar: 'خط أنابيب Self-RAG',
      },
      data: {
        steps: [
          {
            label: { en: 'Query', ar: 'استعلام' },
            sublabel: { en: 'Input question', ar: 'سؤال الإدخال' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Retrieve', ar: 'استرجاع' },
            sublabel: { en: 'Fetch documents', ar: 'جلب المستندات' },
            color: '#8b5cf6',
            icon: Database,
          },
          {
            label: { en: 'Critique Relevance', ar: 'نقد الصلة' },
            sublabel: { en: 'Judge document quality', ar: 'تقييم جودة المستند' },
            color: '#f59e0b',
            icon: Filter,
          },
          {
            label: { en: 'Generate', ar: 'توليد' },
            sublabel: { en: 'Create response', ar: 'إنشاء الاستجابة' },
            color: '#06b6d4',
            icon: PenTool,
          },
          {
            label: { en: 'Critique Output', ar: 'نقد المخرجات' },
            sublabel: { en: 'Self-evaluate', ar: 'التقييم الذاتي' },
            color: '#f43f5e',
            icon: Sparkles,
          },
          {
            label: { en: 'Final Answer', ar: 'الإجابة النهائية' },
            sublabel: { en: 'Refined result', ar: 'النتيجة المحسّنة' },
            color: '#10b981',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'multi-hop-retrieval': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Multi-Hop Retrieval Process',
        ar: 'عملية الاسترجاع متعدد القفزات',
      },
      data: {
        steps: [
          {
            label: { en: 'Complex Question', ar: 'سؤال معقد' },
            sublabel: { en: 'Multi-part query', ar: 'استعلام متعدد الأجزاء' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'Decompose', ar: 'تفكيك' },
            sublabel: { en: 'Break into sub-questions', ar: 'تقسيم إلى أسئلة فرعية' },
            color: '#8b5cf6',
            icon: SplitSquareVertical,
          },
          {
            label: { en: 'Hop 1', ar: 'القفزة 1' },
            sublabel: { en: 'First retrieval', ar: 'الاسترجاع الأول' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'Intermediate', ar: 'وسيط' },
            sublabel: { en: 'Partial context', ar: 'سياق جزئي' },
            color: '#06b6d4',
            icon: ArrowRightLeft,
          },
          {
            label: { en: 'Hop 2', ar: 'القفزة 2' },
            sublabel: { en: 'Second retrieval', ar: 'الاسترجاع الثاني' },
            color: '#f43f5e',
            icon: Search,
          },
          {
            label: { en: 'Synthesize', ar: 'تجميع' },
            sublabel: { en: 'Combine & answer', ar: 'دمج والإجابة' },
            color: '#10b981',
            icon: Combine,
          },
        ],
      },
    },
  ],
};
