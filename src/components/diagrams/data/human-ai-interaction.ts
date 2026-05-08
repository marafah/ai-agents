import {
  MessageSquare,
  Brain,
  Settings,
  Reply,
  Volume2,
  RefreshCw,
  Users,
  CheckCircle,
  XCircle,
  SlidersHorizontal,
  Play,
  Type,
  Mic,
  Eye,
  Hand,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const humanAiInteractionDiagrams: DiagramDataMap = {
  'conversational-ux-design': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Conversational UX Pipeline',
        ar: 'خط أنابيب تجربة المحادثة',
      },
      data: {
        steps: [
          {
            label: { en: 'User Intent', ar: 'نية المستخدم' },
            sublabel: { en: 'What the user wants', ar: 'ما يريده المستخدم' },
            color: '#3b82f6',
            icon: MessageSquare,
          },
          {
            label: { en: 'NLU', ar: 'فهم اللغة الطبيعية' },
            sublabel: { en: 'Parse and understand', ar: 'تحليل وفهم' },
            color: '#8b5cf6',
            icon: Brain,
          },
          {
            label: { en: 'Dialog Manager', ar: 'مدير الحوار' },
            sublabel: { en: 'Manage conversation flow', ar: 'إدارة تدفق المحادثة' },
            color: '#f59e0b',
            icon: Settings,
          },
          {
            label: { en: 'Response Generator', ar: 'مولّد الاستجابة' },
            sublabel: { en: 'Craft the reply', ar: 'صياغة الرد' },
            color: '#10b981',
            icon: Reply,
          },
          {
            label: { en: 'TTS / Display', ar: 'تحويل لصوت / عرض' },
            sublabel: { en: 'Deliver to user', ar: 'تقديم للمستخدم' },
            color: '#06b6d4',
            icon: Volume2,
          },
          {
            label: { en: 'Feedback Loop', ar: 'حلقة التغذية الراجعة' },
            sublabel: { en: 'Learn and improve', ar: 'التعلم والتحسين' },
            color: '#f43f5e',
            icon: RefreshCw,
          },
        ],
      },
    },
  ],

  'human-in-the-loop-design': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Human-in-the-Loop Cycle',
        ar: 'دورة الإنسان في الحلقة',
      },
      data: {
        nodes: [
          {
            label: { en: 'Agent Proposes', ar: 'الوكيل يقترح' },
            description: { en: 'AI generates a suggestion', ar: 'الذكاء الاصطناعي يولّد اقتراحًا' },
            color: '#3b82f6',
            icon: Brain,
          },
          {
            label: { en: 'Human Reviews', ar: 'الإنسان يراجع' },
            description: { en: 'Expert evaluates the proposal', ar: 'الخبير يقيّم الاقتراح' },
            color: '#f59e0b',
            icon: Users,
          },
          {
            label: { en: 'Approve / Reject', ar: 'قبول / رفض' },
            description: { en: 'Decision is made', ar: 'اتخاذ القرار' },
            color: '#10b981',
            icon: CheckCircle,
          },
          {
            label: { en: 'Agent Adjusts', ar: 'الوكيل يُعدّل' },
            description: { en: 'Refine based on feedback', ar: 'التحسين بناءً على التغذية الراجعة' },
            color: '#8b5cf6',
            icon: SlidersHorizontal,
          },
          {
            label: { en: 'Execute', ar: 'تنفيذ' },
            description: { en: 'Carry out the approved action', ar: 'تنفيذ الإجراء المعتمد' },
            color: '#f43f5e',
            icon: Play,
          },
        ],
        centerLabel: { en: 'HITL', ar: 'الإنسان في الحلقة' },
      },
    },
  ],

  'multimodal-interfaces': [
    {
      template: 'comparison',
      position: 'after-definition',
      title: {
        en: 'Multimodal Interface Types',
        ar: 'أنواع الواجهات متعددة الوسائط',
      },
      data: {
        items: [
          {
            title: { en: 'Text Interface', ar: 'واجهة نصية' },
            description: { en: 'Chat-based text input and output', ar: 'إدخال وإخراج نصي عبر المحادثة' },
            color: '#3b82f6',
            icon: Type,
            features: {
              en: ['Keyboard input', 'Rich formatting', 'Copy-paste support', 'Code blocks'],
              ar: ['إدخال لوحة المفاتيح', 'تنسيق غني', 'دعم النسخ واللصق', 'كتل الأكواد'],
            },
          },
          {
            title: { en: 'Voice Interface', ar: 'واجهة صوتية' },
            description: { en: 'Speech-based interaction', ar: 'تفاعل قائم على الكلام' },
            color: '#10b981',
            icon: Mic,
            features: {
              en: ['Hands-free operation', 'Natural speech', 'Real-time response', 'Emotion detection'],
              ar: ['تشغيل بدون يدين', 'كلام طبيعي', 'استجابة فورية', 'كشف المشاعر'],
            },
          },
          {
            title: { en: 'Visual Interface', ar: 'واجهة بصرية' },
            description: { en: 'Image and video-based input', ar: 'إدخال قائم على الصور والفيديو' },
            color: '#8b5cf6',
            icon: Eye,
            features: {
              en: ['Image upload', 'Screen sharing', 'Diagram recognition', 'Video analysis'],
              ar: ['رفع الصور', 'مشاركة الشاشة', 'التعرف على المخططات', 'تحليل الفيديو'],
            },
          },
          {
            title: { en: 'Gesture Interface', ar: 'واجهة إيمائية' },
            description: { en: 'Motion and touch-based control', ar: 'تحكم قائم على الحركة واللمس' },
            color: '#f59e0b',
            icon: Hand,
            features: {
              en: ['Touch gestures', 'Body tracking', 'AR/VR interaction', 'Spatial control'],
              ar: ['إيماءات اللمس', 'تتبع الجسم', 'تفاعل الواقع المعزز/الافتراضي', 'تحكم مكاني'],
            },
          },
        ],
      },
    },
  ],
};
