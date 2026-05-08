import {
  Type,
  Hash,
  Layers,
  ArrowRight,
  Repeat,
  Brain,
  Search,
  Key,
  FileText,
  Target,
  BarChart3,
  Sparkles,
  Database,
  Eraser,
  Cog,
  MessageSquare,
  Rocket,
  CheckCircle,
  Cpu,
  Zap,
  Scissors,
  Box,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const llmInternalsDiagrams: DiagramDataMap = {
  'transformer-architecture': [
    {
      template: 'stack',
      position: 'after-definition',
      title: {
        en: 'Transformer Architecture Stack',
        ar: 'مكدس معمارية المحول',
      },
      data: {
        layers: [
          {
            label: { en: 'Input Embedding', ar: 'تضمين المدخلات' },
            description: { en: 'Convert tokens to vectors', ar: 'تحويل الرموز إلى متجهات' },
            color: '#3b82f6',
            icon: Type,
          },
          {
            label: { en: 'Positional Encoding', ar: 'الترميز الموضعي' },
            description: { en: 'Add position information', ar: 'إضافة معلومات الموضع' },
            color: '#8b5cf6',
            icon: Hash,
          },
          {
            label: { en: 'Multi-Head Attention', ar: 'الانتباه متعدد الرؤوس' },
            description: { en: 'Parallel attention mechanisms', ar: 'آليات انتباه متوازية' },
            color: '#f59e0b',
            icon: Layers,
          },
          {
            label: { en: 'Feed Forward', ar: 'التغذية الأمامية' },
            description: { en: 'Non-linear transformation', ar: 'تحويل غير خطي' },
            color: '#06b6d4',
            icon: ArrowRight,
          },
          {
            label: { en: 'Layer Norm', ar: 'تطبيع الطبقة' },
            description: { en: 'Normalize activations', ar: 'تطبيع التنشيطات' },
            color: '#f43f5e',
            icon: Repeat,
          },
          {
            label: { en: 'Output', ar: 'المخرجات' },
            description: { en: 'Final token predictions', ar: 'التنبؤات النهائية للرموز' },
            color: '#10b981',
            icon: Sparkles,
          },
        ],
      },
    },
  ],

  'attention-mechanisms': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Attention Mechanism Flow',
        ar: 'تدفق آلية الانتباه',
      },
      data: {
        steps: [
          {
            label: { en: 'Query', ar: 'الاستعلام' },
            sublabel: { en: 'What to attend to', ar: 'ما يجب الانتباه إليه' },
            color: '#3b82f6',
            icon: Search,
          },
          {
            label: { en: 'Key', ar: 'المفتاح' },
            sublabel: { en: 'Content identifiers', ar: 'معرّفات المحتوى' },
            color: '#8b5cf6',
            icon: Key,
          },
          {
            label: { en: 'Value', ar: 'القيمة' },
            sublabel: { en: 'Actual content', ar: 'المحتوى الفعلي' },
            color: '#f59e0b',
            icon: FileText,
          },
          {
            label: { en: 'Attention Scores', ar: 'درجات الانتباه' },
            sublabel: { en: 'QK^T similarity', ar: 'تشابه QK^T' },
            color: '#06b6d4',
            icon: Target,
          },
          {
            label: { en: 'Softmax', ar: 'Softmax' },
            sublabel: { en: 'Normalize to probabilities', ar: 'تطبيع إلى احتمالات' },
            color: '#f43f5e',
            icon: BarChart3,
          },
          {
            label: { en: 'Weighted Sum', ar: 'المجموع الموزون' },
            sublabel: { en: 'Combine values', ar: 'دمج القيم' },
            color: '#10b981',
            icon: Sparkles,
          },
        ],
      },
    },
  ],

  'llm-training-pipelines': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'LLM Training Pipeline',
        ar: 'خط أنابيب تدريب النماذج اللغوية الكبيرة',
      },
      data: {
        steps: [
          {
            label: { en: 'Data Collection', ar: 'جمع البيانات' },
            sublabel: { en: 'Web crawl & datasets', ar: 'زحف الويب ومجموعات البيانات' },
            color: '#3b82f6',
            icon: Database,
          },
          {
            label: { en: 'Cleaning', ar: 'تنظيف' },
            sublabel: { en: 'Filter & deduplicate', ar: 'تصفية وإزالة التكرار' },
            color: '#8b5cf6',
            icon: Eraser,
          },
          {
            label: { en: 'Pre-training', ar: 'التدريب المسبق' },
            sublabel: { en: 'Next token prediction', ar: 'التنبؤ بالرمز التالي' },
            color: '#f59e0b',
            icon: Brain,
          },
          {
            label: { en: 'SFT', ar: 'الضبط الدقيق الموجه' },
            sublabel: { en: 'Supervised fine-tuning', ar: 'ضبط دقيق مُشرف عليه' },
            color: '#06b6d4',
            icon: MessageSquare,
          },
          {
            label: { en: 'RLHF', ar: 'RLHF' },
            sublabel: { en: 'Human feedback alignment', ar: 'المحاذاة بالتغذية الراجعة البشرية' },
            color: '#f43f5e',
            icon: Cog,
          },
          {
            label: { en: 'Evaluation', ar: 'التقييم' },
            sublabel: { en: 'Benchmark testing', ar: 'اختبار المعايير' },
            color: '#14b8a6',
            icon: CheckCircle,
          },
        ],
      },
    },
  ],

  'fine-tuning-lora-peft': [
    {
      template: 'vs',
      position: 'after-definition',
      title: {
        en: 'Full Fine-Tuning vs LoRA/PEFT',
        ar: 'الضبط الدقيق الكامل مقابل LoRA/PEFT',
      },
      data: {
        left: {
          title: { en: 'Full Fine-Tuning', ar: 'الضبط الدقيق الكامل' },
          color: '#f43f5e',
          icon: Cpu,
          features: {
            en: ['All parameters updated', 'High compute required', 'Full model control', 'Risk of catastrophic forgetting'],
            ar: ['تحديث جميع المعاملات', 'حوسبة عالية مطلوبة', 'تحكم كامل بالنموذج', 'خطر النسيان الكارثي'],
          },
        },
        right: {
          title: { en: 'LoRA/PEFT', ar: 'LoRA/PEFT' },
          color: '#10b981',
          icon: Zap,
          features: {
            en: ['Few parameters trained', 'Low compute needed', 'Memory efficient', 'Preserves base knowledge'],
            ar: ['تدريب معاملات قليلة', 'حوسبة منخفضة مطلوبة', 'كفاءة في الذاكرة', 'يحافظ على المعرفة الأساسية'],
          },
        },
      },
    },
  ],

  'quantization-distillation': [
    {
      template: 'comparison',
      position: 'in-explanation',
      title: {
        en: 'Model Compression Techniques',
        ar: 'تقنيات ضغط النماذج',
      },
      data: {
        items: [
          {
            title: { en: 'INT8 Quantization', ar: 'تكميم INT8' },
            description: { en: 'Reduce precision to 8-bit integers', ar: 'تقليل الدقة إلى أعداد صحيحة 8 بت' },
            color: '#3b82f6',
            icon: Scissors,
            features: {
              en: ['2x memory reduction', 'Minimal quality loss', 'Fast inference', 'Wide hardware support'],
              ar: ['تقليل الذاكرة بمقدار الضعف', 'فقدان جودة ضئيل', 'استدلال سريع', 'دعم واسع للعتاد'],
            },
          },
          {
            title: { en: 'INT4 Quantization', ar: 'تكميم INT4' },
            description: { en: 'Aggressive 4-bit compression', ar: 'ضغط عنيف إلى 4 بت' },
            color: '#8b5cf6',
            icon: Box,
            features: {
              en: ['4x memory reduction', 'Some quality trade-off', 'Edge deployment', 'GPTQ/AWQ methods'],
              ar: ['تقليل الذاكرة 4 أضعاف', 'مقايضة بعض الجودة', 'نشر على الأطراف', 'طرق GPTQ/AWQ'],
            },
          },
          {
            title: { en: 'Knowledge Distillation', ar: 'تقطير المعرفة' },
            description: { en: 'Train a smaller student model', ar: 'تدريب نموذج طالب أصغر' },
            color: '#f59e0b',
            icon: Brain,
            features: {
              en: ['Smaller model size', 'Retains key behaviors', 'Teacher-student training', 'Task-specific transfer'],
              ar: ['حجم نموذج أصغر', 'يحتفظ بالسلوكيات الرئيسية', 'تدريب معلم-طالب', 'نقل خاص بالمهمة'],
            },
          },
          {
            title: { en: 'Pruning', ar: 'التقليم' },
            description: { en: 'Remove unnecessary weights', ar: 'إزالة الأوزان غير الضرورية' },
            color: '#10b981',
            icon: Eraser,
            features: {
              en: ['Sparse networks', 'Structured/unstructured', 'Retraining optional', 'Combinable with quantization'],
              ar: ['شبكات متفرقة', 'منظم/غير منظم', 'إعادة التدريب اختيارية', 'قابل للدمج مع التكميم'],
            },
          },
        ],
      },
    },
  ],
};
