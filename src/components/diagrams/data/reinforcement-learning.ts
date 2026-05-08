import {
  CircleDot,
  Zap,
  Trophy,
  ArrowRight,
  Brain,
  BarChart3,
  MousePointerClick,
  Box,
  Award,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Users,
  ListOrdered,
  Sparkles,
  Settings,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const reinforcementLearningDiagrams: DiagramDataMap = {
  'rl-basics-mdp-policies': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Markov Decision Process Cycle',
        ar: 'دورة عملية قرار ماركوف',
      },
      data: {
        nodes: [
          {
            label: { en: 'State', ar: 'الحالة' },
            description: { en: 'Current observation', ar: 'الملاحظة الحالية' },
            color: '#3b82f6',
            icon: CircleDot,
          },
          {
            label: { en: 'Action', ar: 'الإجراء' },
            description: { en: 'Chosen by policy', ar: 'يختاره السياسة' },
            color: '#f59e0b',
            icon: Zap,
          },
          {
            label: { en: 'Reward', ar: 'المكافأة' },
            description: { en: 'Feedback signal', ar: 'إشارة التغذية الراجعة' },
            color: '#10b981',
            icon: Trophy,
          },
          {
            label: { en: 'Next State', ar: 'الحالة التالية' },
            description: { en: 'Environment transitions', ar: 'انتقالات البيئة' },
            color: '#8b5cf6',
            icon: ArrowRight,
          },
        ],
        centerLabel: { en: 'MDP', ar: 'MDP' },
      },
    },
  ],

  'q-learning-dqn': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Q-Learning / DQN Pipeline',
        ar: 'خط أنابيب Q-Learning / DQN',
      },
      data: {
        steps: [
          {
            label: { en: 'State', ar: 'الحالة' },
            sublabel: { en: 'Current observation', ar: 'الملاحظة الحالية' },
            color: '#3b82f6',
            icon: CircleDot,
          },
          {
            label: { en: 'Q-Network', ar: 'شبكة Q' },
            sublabel: { en: 'Neural network', ar: 'شبكة عصبية' },
            color: '#8b5cf6',
            icon: Brain,
          },
          {
            label: { en: 'Action Values', ar: 'قيم الإجراءات' },
            sublabel: { en: 'Q-value estimates', ar: 'تقديرات قيمة Q' },
            color: '#06b6d4',
            icon: BarChart3,
          },
          {
            label: { en: 'Select Action', ar: 'اختيار إجراء' },
            sublabel: { en: 'ε-greedy policy', ar: 'سياسة ε-جشعة' },
            color: '#f59e0b',
            icon: MousePointerClick,
          },
          {
            label: { en: 'Environment', ar: 'البيئة' },
            sublabel: { en: 'Interact & observe', ar: 'تفاعل وملاحظة' },
            color: '#10b981',
            icon: Box,
          },
          {
            label: { en: 'Update Q', ar: 'تحديث Q' },
            sublabel: { en: 'Bellman update', ar: 'تحديث بيلمان' },
            color: '#f43f5e',
            icon: RefreshCw,
          },
        ],
      },
    },
  ],

  'proximal-policy-optimization': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'PPO Training Loop',
        ar: 'حلقة تدريب PPO',
      },
      data: {
        steps: [
          {
            label: { en: 'Collect Trajectories', ar: 'جمع المسارات' },
            sublabel: { en: 'Run episodes', ar: 'تشغيل الحلقات' },
            color: '#3b82f6',
            icon: ListOrdered,
          },
          {
            label: { en: 'Compute Advantages', ar: 'حساب المزايا' },
            sublabel: { en: 'GAE estimation', ar: 'تقدير GAE' },
            color: '#8b5cf6',
            icon: TrendingUp,
          },
          {
            label: { en: 'Policy Update', ar: 'تحديث السياسة' },
            sublabel: { en: 'Clipped objective', ar: 'الهدف المقيد' },
            color: '#f59e0b',
            icon: Settings,
          },
          {
            label: { en: 'Repeat', ar: 'تكرار' },
            sublabel: { en: 'Iterate until convergence', ar: 'التكرار حتى التقارب' },
            color: '#10b981',
            icon: RefreshCw,
          },
        ],
      },
    },
  ],

  'rlhf-for-agents': [
    {
      template: 'multi-flow',
      position: 'after-definition',
      title: {
        en: 'RLHF Training Pipeline',
        ar: 'خط أنابيب تدريب RLHF',
      },
      data: {
        phases: [
          {
            label: { en: 'Collect', ar: 'جمع' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Prompt', ar: 'الأمر' },
                sublabel: { en: 'Input to model', ar: 'إدخال للنموذج' },
                color: '#3b82f6',
                icon: MessageSquare,
              },
              {
                label: { en: 'Model Outputs', ar: 'مخرجات النموذج' },
                sublabel: { en: 'Generate responses', ar: 'توليد الاستجابات' },
                color: '#8b5cf6',
                icon: Brain,
              },
              {
                label: { en: 'Human Ranking', ar: 'تقييم بشري' },
                sublabel: { en: 'Preference labels', ar: 'تسميات التفضيل' },
                color: '#f59e0b',
                icon: Users,
              },
            ],
          },
          {
            label: { en: 'Train', ar: 'تدريب' },
            color: '#10b981',
            steps: [
              {
                label: { en: 'Reward Model', ar: 'نموذج المكافأة' },
                sublabel: { en: 'Learn preferences', ar: 'تعلم التفضيلات' },
                color: '#10b981',
                icon: Award,
              },
              {
                label: { en: 'PPO', ar: 'PPO' },
                sublabel: { en: 'Policy optimization', ar: 'تحسين السياسة' },
                color: '#f43f5e',
                icon: TrendingUp,
              },
              {
                label: { en: 'Updated Policy', ar: 'سياسة محدثة' },
                sublabel: { en: 'Aligned model', ar: 'نموذج متوافق' },
                color: '#a855f7',
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
