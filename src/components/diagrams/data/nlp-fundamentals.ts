import {
  FileText,
  Cog,
  Scissors,
  Hash,
  BookOpen,
  Type,
  Search,
  Brain,
  Tag,
  Users,
  Layers,
  MessageSquare,
  Lightbulb,
  Binary,
  ArrowRight,
  Globe,
  Sparkles,
  Eraser,
  CaseSensitive,
  Filter,
  Trash2,
  GitBranch,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const nlpFundamentalsDiagrams: DiagramDataMap = {
  'nlp-tokenization-deep-dive': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Tokenization Pipeline',
        ar: 'خط أنابيب الترميز',
      },
      data: {
        steps: [
          {
            label: { en: 'Raw Text', ar: 'النص الخام' },
            sublabel: { en: 'Unprocessed input', ar: 'مدخلات غير معالجة' },
            color: '#3b82f6',
            icon: FileText,
          },
          {
            label: { en: 'Pre-process', ar: 'المعالجة المسبقة' },
            sublabel: { en: 'Clean and normalize', ar: 'تنظيف وتطبيع' },
            color: '#8b5cf6',
            icon: Cog,
          },
          {
            label: { en: 'Tokenize', ar: 'ترميز' },
            sublabel: { en: 'Split into tokens', ar: 'تقسيم إلى رموز' },
            color: '#f59e0b',
            icon: Scissors,
          },
          {
            label: { en: 'Encode', ar: 'تشفير' },
            sublabel: { en: 'Map to numbers', ar: 'تعيين إلى أرقام' },
            color: '#06b6d4',
            icon: Hash,
          },
          {
            label: { en: 'Token IDs', ar: 'معرّفات الرموز' },
            sublabel: { en: 'Numerical sequence', ar: 'تسلسل رقمي' },
            color: '#f43f5e',
            icon: Binary,
          },
          {
            label: { en: 'Vocabulary', ar: 'المفردات' },
            sublabel: { en: 'Token-to-ID mapping', ar: 'تعيين الرمز إلى المعرّف' },
            color: '#10b981',
            icon: BookOpen,
          },
        ],
      },
    },
  ],

  'named-entity-recognition': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Named Entity Recognition Pipeline',
        ar: 'خط أنابيب التعرف على الكيانات المسماة',
      },
      data: {
        steps: [
          {
            label: { en: 'Text Input', ar: 'إدخال النص' },
            sublabel: { en: 'Sentence or document', ar: 'جملة أو مستند' },
            color: '#3b82f6',
            icon: Type,
          },
          {
            label: { en: 'Tokenize', ar: 'ترميز' },
            sublabel: { en: 'Split into words', ar: 'تقسيم إلى كلمات' },
            color: '#8b5cf6',
            icon: Scissors,
          },
          {
            label: { en: 'Feature Extract', ar: 'استخراج السمات' },
            sublabel: { en: 'Context and patterns', ar: 'السياق والأنماط' },
            color: '#f59e0b',
            icon: Search,
          },
          {
            label: { en: 'NER Model', ar: 'نموذج NER' },
            sublabel: { en: 'Classify each token', ar: 'تصنيف كل رمز' },
            color: '#06b6d4',
            icon: Brain,
          },
          {
            label: { en: 'Entity Tags', ar: 'علامات الكيانات' },
            sublabel: { en: 'B-PER, I-ORG, O...', ar: 'B-PER, I-ORG, O...' },
            color: '#f43f5e',
            icon: Tag,
          },
          {
            label: { en: 'Entities', ar: 'الكيانات' },
            sublabel: { en: 'People, places, orgs', ar: 'أشخاص، أماكن، منظمات' },
            color: '#10b981',
            icon: Users,
          },
        ],
      },
    },
  ],

  'semantic-analysis': [
    {
      template: 'comparison',
      position: 'in-explanation',
      title: {
        en: 'Levels of Language Analysis',
        ar: 'مستويات تحليل اللغة',
      },
      data: {
        items: [
          {
            title: { en: 'Lexical', ar: 'المعجمي' },
            description: { en: 'Analysis at the word level', ar: 'التحليل على مستوى الكلمة' },
            color: '#3b82f6',
            icon: Type,
            features: {
              en: ['Word meanings', 'Morphology', 'Vocabulary lookup', 'Part-of-speech'],
              ar: ['معاني الكلمات', 'علم الصرف', 'البحث في المفردات', 'أقسام الكلام'],
            },
          },
          {
            title: { en: 'Syntactic', ar: 'النحوي' },
            description: { en: 'Analysis of sentence structure', ar: 'تحليل بنية الجملة' },
            color: '#8b5cf6',
            icon: Layers,
            features: {
              en: ['Grammar rules', 'Parse trees', 'Dependency relations', 'Phrase structure'],
              ar: ['قواعد النحو', 'أشجار التحليل', 'علاقات التبعية', 'بنية العبارة'],
            },
          },
          {
            title: { en: 'Semantic', ar: 'الدلالي' },
            description: { en: 'Understanding meaning', ar: 'فهم المعنى' },
            color: '#10b981',
            icon: Lightbulb,
            features: {
              en: ['Word sense', 'Semantic roles', 'Logical forms', 'Entailment'],
              ar: ['دلالة الكلمة', 'الأدوار الدلالية', 'الأشكال المنطقية', 'الاستلزام'],
            },
          },
          {
            title: { en: 'Pragmatic', ar: 'التداولي' },
            description: { en: 'Meaning in context', ar: 'المعنى في السياق' },
            color: '#f59e0b',
            icon: MessageSquare,
            features: {
              en: ['Speaker intent', 'Discourse context', 'Implied meaning', 'Speech acts'],
              ar: ['نية المتحدث', 'سياق الخطاب', 'المعنى الضمني', 'الأفعال الكلامية'],
            },
          },
        ],
      },
    },
  ],

  'word-embeddings-evolution': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Evolution of Word Embeddings',
        ar: 'تطور تضمينات الكلمات',
      },
      data: {
        steps: [
          {
            label: { en: 'One-Hot', ar: 'ترميز أحادي' },
            sublabel: { en: 'Sparse vectors', ar: 'متجهات متفرقة' },
            color: '#3b82f6',
            icon: Binary,
          },
          {
            label: { en: 'Word2Vec', ar: 'Word2Vec' },
            sublabel: { en: 'Dense word vectors', ar: 'متجهات كلمات كثيفة' },
            color: '#8b5cf6',
            icon: ArrowRight,
          },
          {
            label: { en: 'GloVe', ar: 'GloVe' },
            sublabel: { en: 'Global co-occurrence', ar: 'التواجد المشترك العالمي' },
            color: '#f59e0b',
            icon: Globe,
          },
          {
            label: { en: 'ELMo', ar: 'ELMo' },
            sublabel: { en: 'Contextual embeddings', ar: 'تضمينات سياقية' },
            color: '#06b6d4',
            icon: Layers,
          },
          {
            label: { en: 'BERT', ar: 'BERT' },
            sublabel: { en: 'Bidirectional context', ar: 'سياق ثنائي الاتجاه' },
            color: '#f43f5e',
            icon: Brain,
          },
          {
            label: { en: 'GPT Embeddings', ar: 'تضمينات GPT' },
            sublabel: { en: 'Autoregressive LLM', ar: 'نموذج لغوي ذاتي الانحدار' },
            color: '#10b981',
            icon: Sparkles,
          },
        ],
      },
    },
  ],

  'text-preprocessing-pipelines': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Text Preprocessing Pipeline',
        ar: 'خط أنابيب المعالجة المسبقة للنصوص',
      },
      data: {
        steps: [
          {
            label: { en: 'Raw Text', ar: 'النص الخام' },
            sublabel: { en: 'Unstructured input', ar: 'مدخلات غير منظمة' },
            color: '#3b82f6',
            icon: FileText,
          },
          {
            label: { en: 'Clean', ar: 'تنظيف' },
            sublabel: { en: 'Remove noise & HTML', ar: 'إزالة الضوضاء و HTML' },
            color: '#8b5cf6',
            icon: Eraser,
          },
          {
            label: { en: 'Normalize', ar: 'تطبيع' },
            sublabel: { en: 'Lowercase & unicode', ar: 'أحرف صغيرة ويونيكود' },
            color: '#f59e0b',
            icon: CaseSensitive,
          },
          {
            label: { en: 'Tokenize', ar: 'ترميز' },
            sublabel: { en: 'Split into tokens', ar: 'تقسيم إلى رموز' },
            color: '#06b6d4',
            icon: Scissors,
          },
          {
            label: { en: 'Remove Stops', ar: 'إزالة التوقفات' },
            sublabel: { en: 'Filter stop words', ar: 'تصفية كلمات التوقف' },
            color: '#f43f5e',
            icon: Filter,
          },
          {
            label: { en: 'Stem/Lemma', ar: 'تجذير/تحليل صرفي' },
            sublabel: { en: 'Reduce to root form', ar: 'تقليل إلى الشكل الجذري' },
            color: '#10b981',
            icon: GitBranch,
          },
        ],
      },
    },
  ],
};
