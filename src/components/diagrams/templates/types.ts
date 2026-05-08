import type { LucideIcon } from 'lucide-react';

export interface FlowStep {
  label: { en: string; ar: string };
  sublabel?: { en: string; ar: string };
  color: string;
  icon: LucideIcon;
}

export interface FlowData {
  steps: FlowStep[];
}

export interface ComparisonItem {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  color: string;
  icon: LucideIcon;
  features?: { en: string[]; ar: string[] };
}

export interface ComparisonData {
  items: ComparisonItem[];
}

export interface CycleNode {
  label: { en: string; ar: string };
  description?: { en: string; ar: string };
  color: string;
  icon: LucideIcon;
}

export interface CycleData {
  nodes: CycleNode[];
  centerLabel?: { en: string; ar: string };
}

export interface StackLayer {
  label: { en: string; ar: string };
  description?: { en: string; ar: string };
  color: string;
  icon: LucideIcon;
}

export interface StackData {
  layers: StackLayer[];
  title?: { en: string; ar: string };
}

export interface HubSpokeData {
  center: { label: { en: string; ar: string }; color: string; icon: LucideIcon };
  spokes: { label: { en: string; ar: string }; description?: { en: string; ar: string }; color: string; icon: LucideIcon }[];
}

export interface VsData {
  left: { title: { en: string; ar: string }; color: string; icon: LucideIcon; features: { en: string[]; ar: string[] } };
  right: { title: { en: string; ar: string }; color: string; icon: LucideIcon; features: { en: string[]; ar: string[] } };
}

export interface MultiFlowPhase {
  label: { en: string; ar: string };
  color: string;
  steps: FlowStep[];
}

export interface MultiFlowData {
  phases: MultiFlowPhase[];
  connector?: { en: string; ar: string };
}

export type DiagramTemplate = 'flow' | 'comparison' | 'cycle' | 'stack' | 'hub-spoke' | 'vs' | 'multi-flow';

export interface DiagramConfig {
  template: DiagramTemplate;
  position: 'after-definition' | 'after-analogy' | 'in-explanation' | 'after-explanation';
  title: { en: string; ar: string };
  data: FlowData | ComparisonData | CycleData | StackData | HubSpokeData | VsData | MultiFlowData;
}

export type DiagramDataMap = Record<string, DiagramConfig[]>;
