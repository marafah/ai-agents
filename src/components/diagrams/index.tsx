'use client';

import type { ComponentType } from 'react';
import type { Locale } from '@/types';
import type { DiagramConfig, FlowData, ComparisonData, CycleData, StackData, HubSpokeData, VsData, MultiFlowData, DiagramDataMap } from './templates/types';
import FlowDiagram from './templates/FlowDiagram';
import ComparisonGrid from './templates/ComparisonGrid';
import CycleDiagram from './templates/CycleDiagram';
import StackDiagram from './templates/StackDiagram';
import HubSpokeDiagram from './templates/HubSpokeDiagram';
import VsComparison from './templates/VsComparison';
import MultiFlowDiagram from './templates/MultiFlowDiagram';

export interface DiagramProps {
  locale: Locale;
}

export interface LessonDiagram {
  component: ComponentType<DiagramProps>;
  position: 'after-definition' | 'after-analogy' | 'in-explanation' | 'after-explanation';
  title: Record<Locale, string>;
}

// ─── Existing custom diagram components ───

import AITimelineDiagram from './AITimelineDiagram';
import AITypesComparison from './AITypesComparison';
import MLPipelineDiagram from './MLPipelineDiagram';
import MLTypesGrid from './MLTypesGrid';
import NeuralNetworkDiagram from './NeuralNetworkDiagram';
import DLArchitectureComparison from './DLArchitectureComparison';
import TransformerDiagram from './TransformerDiagram';
import TokenizationVisual from './TokenizationVisual';
import AgentLoopDiagram from './AgentLoopDiagram';
import AgentComponentsDiagram from './AgentComponentsDiagram';
import AgentVsChatbotComparison from './AgentVsChatbotComparison';
import FunctionCallingFlow from './FunctionCallingFlow';
import ReActCycleDiagram from './ReActCycleDiagram';
import RAGPipelineDiagram from './RAGPipelineDiagram';
import MemoryTypesVisual from './MemoryTypesVisual';

// ─── Template factory ───

function createTemplateDiagram(config: DiagramConfig): LessonDiagram {
  const { template, position, title, data } = config;

  let Component: ComponentType<DiagramProps>;

  switch (template) {
    case 'flow':
      Component = ({ locale }: DiagramProps) => <FlowDiagram data={data as FlowData} locale={locale} />;
      break;
    case 'comparison':
      Component = ({ locale }: DiagramProps) => <ComparisonGrid data={data as ComparisonData} locale={locale} />;
      break;
    case 'cycle':
      Component = ({ locale }: DiagramProps) => <CycleDiagram data={data as CycleData} locale={locale} />;
      break;
    case 'stack':
      Component = ({ locale }: DiagramProps) => <StackDiagram data={data as StackData} locale={locale} />;
      break;
    case 'hub-spoke':
      Component = ({ locale }: DiagramProps) => <HubSpokeDiagram data={data as HubSpokeData} locale={locale} />;
      break;
    case 'vs':
      Component = ({ locale }: DiagramProps) => <VsComparison data={data as VsData} locale={locale} />;
      break;
    case 'multi-flow':
      Component = ({ locale }: DiagramProps) => <MultiFlowDiagram data={data as MultiFlowData} locale={locale} />;
      break;
  }

  return { component: Component, position, title };
}

function registerDataDiagrams(dataMap: DiagramDataMap, target: Record<string, LessonDiagram[]>) {
  for (const [slug, configs] of Object.entries(dataMap)) {
    if (!target[slug]) target[slug] = [];
    for (const config of configs) {
      target[slug].push(createTemplateDiagram(config));
    }
  }
}

// ─── Data imports ───

import { coreConceptsDiagrams } from './data/core-concepts';
import { advancedDiagrams } from './data/advanced';
import { functionCallingDiagrams } from './data/function-calling';
import { designPatternsDiagrams } from './data/design-patterns';
import { frameworksLanggraphDiagrams } from './data/frameworks-langgraph';
import { memorySystemsDiagrams } from './data/memory-systems';
import { frameworksAutogenDiagrams } from './data/frameworks-autogen';
import { frameworksAdkDiagrams } from './data/frameworks-adk';
import { frameworksBedrockDiagrams } from './data/frameworks-bedrock';
import { industryApplicationsDiagrams } from './data/industry-applications';
import { nlpFundamentalsDiagrams } from './data/nlp-fundamentals';
import { promptEngineeringDiagrams } from './data/prompt-engineering';
import { llmInternalsDiagrams } from './data/llm-internals';
import { agentArchitecturesDiagrams } from './data/agent-architectures';
import { advancedRagDiagrams } from './data/advanced-rag';
import { reinforcementLearningDiagrams } from './data/reinforcement-learning';
import { knowledgeRepresentationDiagrams } from './data/knowledge-representation';
import { frameworksCrewaiDiagrams } from './data/frameworks-crewai';
import { frameworksLlamaindexDiagrams } from './data/frameworks-llamaindex';
import { frameworksSemanticKernelDiagrams } from './data/frameworks-semantic-kernel';
import { frameworksOpenaiAgentsDiagrams } from './data/frameworks-openai-agents';
import { aiSecurityDiagrams } from './data/ai-security';
import { humanAiInteractionDiagrams } from './data/human-ai-interaction';
import { agentEvaluationDiagrams } from './data/agent-evaluation';
import { productionLlmopsDiagrams } from './data/production-llmops';
import { computerVisionMultimodalDiagrams } from './data/computer-vision-multimodal';
import { voiceAiDiagrams } from './data/voice-ai';

// ─── Registry ───

export const lessonDiagrams: Record<string, LessonDiagram[]> = {
  'what-is-ai': [
    { component: AITimelineDiagram, position: 'after-analogy', title: { en: 'AI Timeline: Key Milestones', ar: 'الجدول الزمني للذكاء الاصطناعي: المعالم الرئيسية' } },
    { component: AITypesComparison, position: 'in-explanation', title: { en: 'Types of Artificial Intelligence', ar: 'أنواع الذكاء الاصطناعي' } },
  ],
  'what-is-machine-learning': [
    { component: MLTypesGrid, position: 'in-explanation', title: { en: 'Types of Machine Learning', ar: 'أنواع التعلم الآلي' } },
    { component: MLPipelineDiagram, position: 'after-explanation', title: { en: 'The Machine Learning Pipeline', ar: 'خط أنابيب التعلم الآلي' } },
  ],
  'what-is-deep-learning': [
    { component: NeuralNetworkDiagram, position: 'after-analogy', title: { en: 'Neural Network Architecture', ar: 'معمارية الشبكة العصبية' } },
    { component: DLArchitectureComparison, position: 'in-explanation', title: { en: 'Deep Learning Architectures', ar: 'معماريات التعلم العميق' } },
  ],
  'what-are-llms': [
    { component: TransformerDiagram, position: 'after-definition', title: { en: 'The Transformer Architecture', ar: 'معمارية المحول' } },
    { component: TokenizationVisual, position: 'in-explanation', title: { en: 'How Tokenization Works', ar: 'كيف يعمل الترميز' } },
  ],
  'what-is-an-ai-agent': [
    { component: AgentLoopDiagram, position: 'after-analogy', title: { en: 'The Agent Loop', ar: 'حلقة الوكيل' } },
    { component: AgentComponentsDiagram, position: 'in-explanation', title: { en: 'AI Agent Architecture', ar: 'معمارية وكيل الذكاء الاصطناعي' } },
  ],
  'agent-vs-chatbot': [
    { component: AgentVsChatbotComparison, position: 'after-definition', title: { en: 'Agent vs Chatbot: Feature Comparison', ar: 'الوكيل مقابل روبوت المحادثة: مقارنة الميزات' } },
  ],
  'tools-and-function-calling': [
    { component: FunctionCallingFlow, position: 'after-analogy', title: { en: 'Function Calling Flow', ar: 'تدفق استدعاء الوظائف' } },
  ],
  'react-pattern': [
    { component: ReActCycleDiagram, position: 'after-definition', title: { en: 'The ReAct Cycle', ar: 'دورة ReAct' } },
  ],
  'rag-fundamentals': [
    { component: RAGPipelineDiagram, position: 'after-definition', title: { en: 'The RAG Pipeline', ar: 'خط أنابيب RAG' } },
  ],
  'memory-systems': [
    { component: MemoryTypesVisual, position: 'after-analogy', title: { en: 'Agent Memory Types', ar: 'أنواع ذاكرة الوكيل' } },
  ],
};

// Register all template-based diagrams
registerDataDiagrams(coreConceptsDiagrams, lessonDiagrams);
registerDataDiagrams(advancedDiagrams, lessonDiagrams);
registerDataDiagrams(functionCallingDiagrams, lessonDiagrams);
registerDataDiagrams(designPatternsDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksLanggraphDiagrams, lessonDiagrams);
registerDataDiagrams(memorySystemsDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksAutogenDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksAdkDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksBedrockDiagrams, lessonDiagrams);
registerDataDiagrams(industryApplicationsDiagrams, lessonDiagrams);
registerDataDiagrams(nlpFundamentalsDiagrams, lessonDiagrams);
registerDataDiagrams(promptEngineeringDiagrams, lessonDiagrams);
registerDataDiagrams(llmInternalsDiagrams, lessonDiagrams);
registerDataDiagrams(agentArchitecturesDiagrams, lessonDiagrams);
registerDataDiagrams(advancedRagDiagrams, lessonDiagrams);
registerDataDiagrams(reinforcementLearningDiagrams, lessonDiagrams);
registerDataDiagrams(knowledgeRepresentationDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksCrewaiDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksLlamaindexDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksSemanticKernelDiagrams, lessonDiagrams);
registerDataDiagrams(frameworksOpenaiAgentsDiagrams, lessonDiagrams);
registerDataDiagrams(aiSecurityDiagrams, lessonDiagrams);
registerDataDiagrams(humanAiInteractionDiagrams, lessonDiagrams);
registerDataDiagrams(agentEvaluationDiagrams, lessonDiagrams);
registerDataDiagrams(productionLlmopsDiagrams, lessonDiagrams);
registerDataDiagrams(computerVisionMultimodalDiagrams, lessonDiagrams);
registerDataDiagrams(voiceAiDiagrams, lessonDiagrams);
