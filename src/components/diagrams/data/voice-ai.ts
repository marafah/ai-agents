import {
  AudioLines,
  BarChart3,
  Brain,
  FileText,
  Music,
  AudioWaveform,
  Volume2,
  Mic,
  Type,
  Cpu,
  Speaker,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const voiceAiDiagrams: DiagramDataMap = {
  'speech-to-text-tts': [
    {
      template: 'multi-flow',
      position: 'after-definition',
      title: {
        en: 'Speech-to-Text & Text-to-Speech Pipeline',
        ar: 'خط أنابيب تحويل الكلام لنص والنص لكلام',
      },
      data: {
        phases: [
          {
            label: { en: 'Speech-to-Text', ar: 'تحويل الكلام إلى نص' },
            color: '#3b82f6',
            steps: [
              {
                label: { en: 'Audio', ar: 'الصوت' },
                sublabel: { en: 'Raw speech input', ar: 'مدخل الكلام الخام' },
                color: '#3b82f6',
                icon: Mic,
              },
              {
                label: { en: 'Feature Extract', ar: 'استخراج الميزات' },
                sublabel: { en: 'Mel spectrograms', ar: 'أطياف ميل' },
                color: '#06b6d4',
                icon: BarChart3,
              },
              {
                label: { en: 'ASR Model', ar: 'نموذج التعرف على الكلام' },
                sublabel: { en: 'Acoustic model', ar: 'النموذج الصوتي' },
                color: '#0ea5e9',
                icon: Brain,
              },
              {
                label: { en: 'Text', ar: 'النص' },
                sublabel: { en: 'Transcribed output', ar: 'النص المنسوخ' },
                color: '#14b8a6',
                icon: FileText,
              },
            ],
          },
          {
            label: { en: 'Text-to-Speech', ar: 'تحويل النص إلى كلام' },
            color: '#8b5cf6',
            steps: [
              {
                label: { en: 'Text', ar: 'النص' },
                sublabel: { en: 'Input text', ar: 'النص المدخل' },
                color: '#8b5cf6',
                icon: Type,
              },
              {
                label: { en: 'Prosody', ar: 'الإيقاع اللغوي' },
                sublabel: { en: 'Rhythm and intonation', ar: 'الإيقاع والتنغيم' },
                color: '#a855f7',
                icon: Music,
              },
              {
                label: { en: 'Vocoder', ar: 'محوّل الصوت' },
                sublabel: { en: 'Generate waveform', ar: 'توليد الموجة الصوتية' },
                color: '#d946ef',
                icon: AudioWaveform,
              },
              {
                label: { en: 'Audio', ar: 'الصوت' },
                sublabel: { en: 'Synthesized speech', ar: 'الكلام المُركّب' },
                color: '#ec4899',
                icon: Volume2,
              },
            ],
          },
        ],
        connector: { en: 'then', ar: 'ثم' },
      },
    },
  ],

  'real-time-voice-agents': [
    {
      template: 'cycle',
      position: 'after-definition',
      title: {
        en: 'Real-Time Voice Agent Cycle',
        ar: 'دورة وكيل الصوت في الوقت الحقيقي',
      },
      data: {
        nodes: [
          {
            label: { en: 'Listen', ar: 'الاستماع' },
            description: { en: 'Capture audio input', ar: 'التقاط المدخل الصوتي' },
            color: '#3b82f6',
            icon: Mic,
          },
          {
            label: { en: 'Transcribe', ar: 'النسخ' },
            description: { en: 'Convert speech to text', ar: 'تحويل الكلام إلى نص' },
            color: '#8b5cf6',
            icon: FileText,
          },
          {
            label: { en: 'Process (LLM)', ar: 'المعالجة (نموذج اللغة)' },
            description: { en: 'Understand and generate response', ar: 'فهم وتوليد الاستجابة' },
            color: '#f59e0b',
            icon: Cpu,
          },
          {
            label: { en: 'Synthesize', ar: 'التركيب' },
            description: { en: 'Convert text to speech', ar: 'تحويل النص إلى كلام' },
            color: '#10b981',
            icon: AudioLines,
          },
          {
            label: { en: 'Speak', ar: 'النطق' },
            description: { en: 'Output audio response', ar: 'إخراج الاستجابة الصوتية' },
            color: '#f43f5e',
            icon: Speaker,
          },
        ],
        centerLabel: { en: 'Voice Agent', ar: 'وكيل الصوت' },
      },
    },
  ],
};
