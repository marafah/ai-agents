'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  Database,
  FileText,
  Search,
  Brain,
  MessageSquare,
  Cpu,
  Wrench,
  Users,
  Zap,
  ArrowRight,
  Eye,
  Lightbulb,
  Code,
  Send,
  Box,
  Layers,
  Settings,
  Gauge,
  CheckCircle2,
  CircleDot,
  Circle,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SimStep {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  detail: string;
}

interface Simulation {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  steps: SimStep[];
}

/* ------------------------------------------------------------------ */
/*  Simulation Data                                                    */
/* ------------------------------------------------------------------ */

const RAG_COLOR = '#6366f1';
const REACT_COLOR = '#f59e0b';
const TOOL_COLOR = '#10b981';
const MULTI_COLOR = '#ec4899';
const PLANNING_COLOR = '#0ea5e9';
const REFLECTION_COLOR = '#8b5cf6';
const GRAPH_RAG_COLOR = '#14b8a6';
const RLHF_COLOR = '#f43f5e';

function getSimulations(): Simulation[] {
  return [
    {
      id: 'rag',
      title: 'RAG Pipeline',
      description:
        'Retrieval-Augmented Generation: watch documents get chunked, embedded, stored, and retrieved to augment an LLM response.',
      icon: <Database className="h-7 w-7" />,
      color: RAG_COLOR,
      gradient: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
      steps: [
        {
          id: 'doc',
          label: 'Document Input',
          description: 'Raw documents enter the pipeline',
          icon: <FileText className="h-5 w-5" />,
          color: '#6366f1',
          detail:
            'The source document (PDF, webpage, or text file) is loaded into the system. This could be company docs, research papers, or knowledge bases.',
        },
        {
          id: 'chunk',
          label: 'Chunking',
          description: 'Text is split into manageable pieces',
          icon: <Layers className="h-5 w-5" />,
          color: '#818cf8',
          detail:
            'The document is split into overlapping chunks (e.g. 512 tokens with 50-token overlap). This ensures no context is lost at boundaries.',
        },
        {
          id: 'embed',
          label: 'Embedding',
          description: 'Chunks become numerical vectors',
          icon: <Cpu className="h-5 w-5" />,
          color: '#a78bfa',
          detail:
            'Each chunk is passed through an embedding model (e.g. text-embedding-3-small) to produce a dense vector that captures semantic meaning.',
        },
        {
          id: 'store',
          label: 'Vector Store',
          description: 'Vectors are indexed for fast search',
          icon: <Database className="h-5 w-5" />,
          color: '#c4b5fd',
          detail:
            'Vectors are stored in a vector database (Pinecone, Weaviate, Chroma) with metadata. An ANN index enables sub-millisecond similarity search.',
        },
        {
          id: 'query',
          label: 'User Query',
          description: 'A question triggers retrieval',
          icon: <Search className="h-5 w-5" />,
          color: '#6366f1',
          detail:
            'The user asks a question. The query is also embedded using the same model to produce a comparable vector representation.',
        },
        {
          id: 'retrieve',
          label: 'Retrieval',
          description: 'Most relevant chunks are found',
          icon: <Zap className="h-5 w-5" />,
          color: '#818cf8',
          detail:
            'Cosine similarity search returns the top-k most relevant chunks. Optionally, a reranker (e.g. Cohere Rerank) re-scores the results for higher precision.',
        },
        {
          id: 'llm',
          label: 'LLM Generation',
          description: 'LLM receives query + context',
          icon: <Brain className="h-5 w-5" />,
          color: '#a78bfa',
          detail:
            'The retrieved chunks are injected into the prompt as context. The LLM generates a grounded answer based on both the question and retrieved evidence.',
        },
        {
          id: 'response',
          label: 'Response',
          description: 'Grounded answer is delivered',
          icon: <MessageSquare className="h-5 w-5" />,
          color: '#6366f1',
          detail:
            'The final response is returned with citations pointing back to the source chunks, so the user can verify the answer against original documents.',
        },
      ],
    },
    {
      id: 'react',
      title: 'ReAct Loop',
      description:
        'Reasoning + Acting: the agent thinks, takes an action, observes the result, and repeats until the task is done.',
      icon: <Brain className="h-7 w-7" />,
      color: REACT_COLOR,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      steps: [
        {
          id: 'think1',
          label: 'Thought 1',
          description: 'Agent reasons about the task',
          icon: <Lightbulb className="h-5 w-5" />,
          color: '#f59e0b',
          detail:
            '"I need to find the current weather in Tokyo. I should use the weather API tool to get real-time data rather than relying on my training data."',
        },
        {
          id: 'act1',
          label: 'Action 1',
          description: 'Agent calls a tool',
          icon: <Wrench className="h-5 w-5" />,
          color: '#d97706',
          detail:
            'Action: get_weather(location="Tokyo, Japan")\nThe agent formats a tool call with the correct parameters and dispatches it to the tool runtime.',
        },
        {
          id: 'obs1',
          label: 'Observation 1',
          description: 'Tool result is observed',
          icon: <Eye className="h-5 w-5" />,
          color: '#b45309',
          detail:
            'Observation: {"temp": "22C", "condition": "Partly Cloudy", "humidity": "65%"}\nThe raw tool output is returned and appended to the agent\'s context window.',
        },
        {
          id: 'think2',
          label: 'Thought 2',
          description: 'Agent reflects on the observation',
          icon: <Lightbulb className="h-5 w-5" />,
          color: '#f59e0b',
          detail:
            '"I have the current weather. The user also asked about what to wear. I should reason about appropriate clothing for 22C partly cloudy weather."',
        },
        {
          id: 'act2',
          label: 'Action 2',
          description: 'Agent searches for more info',
          icon: <Search className="h-5 w-5" />,
          color: '#d97706',
          detail:
            'Action: web_search(query="what to wear 22C partly cloudy weather")\nThe agent decides it needs external knowledge to give a well-informed clothing recommendation.',
        },
        {
          id: 'obs2',
          label: 'Observation 2',
          description: 'Search results are processed',
          icon: <Eye className="h-5 w-5" />,
          color: '#b45309',
          detail:
            'Observation: "For 22C partly cloudy: light layers, long sleeves or a light jacket recommended. Sunglasses advisable for intermittent sun."',
        },
        {
          id: 'think3',
          label: 'Thought 3',
          description: 'Agent decides it has enough info',
          icon: <Lightbulb className="h-5 w-5" />,
          color: '#f59e0b',
          detail:
            '"I now have both the weather data and clothing advice. I can compile a comprehensive answer for the user without needing additional tool calls."',
        },
        {
          id: 'respond',
          label: 'Final Response',
          description: 'Agent delivers the answer',
          icon: <MessageSquare className="h-5 w-5" />,
          color: '#92400e',
          detail:
            '"Tokyo is currently 22C and partly cloudy with 65% humidity. I\'d recommend light layers -- a t-shirt with a light jacket. Bring sunglasses for the intermittent sun!"',
        },
      ],
    },
    {
      id: 'tool',
      title: 'Tool Calling',
      description:
        'How an LLM decides to use external tools: from understanding the prompt, selecting the tool, executing it, and incorporating results.',
      icon: <Wrench className="h-7 w-7" />,
      color: TOOL_COLOR,
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      steps: [
        {
          id: 'prompt',
          label: 'User Prompt',
          description: 'User sends a request',
          icon: <Send className="h-5 w-5" />,
          color: '#10b981',
          detail:
            'User: "What\'s the stock price of NVIDIA right now?"\nThe LLM receives this prompt along with a list of available tool schemas it can invoke.',
        },
        {
          id: 'analyze',
          label: 'Intent Analysis',
          description: 'LLM determines it needs a tool',
          icon: <Brain className="h-5 w-5" />,
          color: '#059669',
          detail:
            'The LLM recognizes that "right now" requires real-time data it cannot provide from training. It decides to call the stock_price tool rather than hallucinate.',
        },
        {
          id: 'schema',
          label: 'Tool Schema',
          description: 'LLM formats the tool call',
          icon: <Code className="h-5 w-5" />,
          color: '#047857',
          detail:
            '{"name": "get_stock_price", "parameters": {"symbol": "NVDA"}}\nThe LLM generates a structured JSON tool call matching the function\'s schema definition.',
        },
        {
          id: 'execute',
          label: 'Tool Execution',
          description: 'External API is called',
          icon: <Zap className="h-5 w-5" />,
          color: '#065f46',
          detail:
            'The runtime intercepts the tool call, validates the parameters against the schema, and executes the actual API request to a financial data provider.',
        },
        {
          id: 'result',
          label: 'Tool Result',
          description: 'Result returns to the LLM',
          icon: <Box className="h-5 w-5" />,
          color: '#10b981',
          detail:
            '{"symbol": "NVDA", "price": 924.79, "change": "+2.35%", "volume": "45.2M"}\nThe structured result is injected back into the conversation as a tool response message.',
        },
        {
          id: 'generate',
          label: 'Response Generation',
          description: 'LLM crafts the final answer',
          icon: <MessageSquare className="h-5 w-5" />,
          color: '#059669',
          detail:
            '"NVIDIA (NVDA) is currently trading at $924.79, up 2.35% today on volume of 45.2M shares."\nThe LLM synthesizes the tool result into a natural language response.',
        },
      ],
    },
    {
      id: 'multi',
      title: 'Multi-Agent Workflow',
      description:
        'Multiple specialized agents coordinate through a supervisor: researching, analyzing, and producing a final report.',
      icon: <Users className="h-7 w-7" />,
      color: MULTI_COLOR,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      steps: [
        {
          id: 'supervisor-assign',
          label: 'Supervisor Assigns',
          description: 'Task is decomposed into sub-tasks',
          icon: <Settings className="h-5 w-5" />,
          color: '#ec4899',
          detail:
            'The Supervisor agent receives "Write a market analysis report on AI chips." It decomposes this into: (1) Research market data, (2) Analyze trends, (3) Write the report.',
        },
        {
          id: 'researcher-work',
          label: 'Researcher Gathers Data',
          description: 'Research agent collects information',
          icon: <Search className="h-5 w-5" />,
          color: '#3b82f6',
          detail:
            'The Researcher agent uses web_search and document_retrieval tools to gather market data, competitor info, financial reports, and industry forecasts for the AI chip sector.',
        },
        {
          id: 'researcher-done',
          label: 'Research Complete',
          description: 'Findings sent to Supervisor',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#3b82f6',
          detail:
            'Researcher returns a structured data package: market size ($XX B), key players (NVIDIA, AMD, Intel, custom chips), growth rate (35% CAGR), and 12 source documents.',
        },
        {
          id: 'supervisor-route',
          label: 'Supervisor Routes',
          description: 'Data is passed to the Analyst',
          icon: <Settings className="h-5 w-5" />,
          color: '#ec4899',
          detail:
            'The Supervisor reviews the research output, confirms it meets quality requirements, and forwards the data to the Analyst agent with instructions to identify key trends.',
        },
        {
          id: 'analyst-work',
          label: 'Analyst Processes',
          description: 'Analyst finds trends and insights',
          icon: <Gauge className="h-5 w-5" />,
          color: '#f59e0b',
          detail:
            'The Analyst agent processes the raw data, identifies 5 key trends, creates comparative analyses, and generates 3 strategic insights with supporting evidence.',
        },
        {
          id: 'analyst-done',
          label: 'Analysis Complete',
          description: 'Insights sent to Supervisor',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#f59e0b',
          detail:
            'Analyst returns: trend analysis, competitive landscape map, SWOT for top 3 players, and a risk assessment. The Supervisor validates completeness.',
        },
        {
          id: 'writer-work',
          label: 'Writer Drafts Report',
          description: 'Writer agent composes the document',
          icon: <FileText className="h-5 w-5" />,
          color: '#10b981',
          detail:
            'The Writer agent receives both research data and analysis. It structures the report with executive summary, methodology, findings, analysis, and recommendations sections.',
        },
        {
          id: 'supervisor-final',
          label: 'Final Delivery',
          description: 'Supervisor reviews and delivers',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#ec4899',
          detail:
            'The Supervisor performs a final quality check, ensures citations are correct, formatting is consistent, and delivers the completed market analysis report to the user.',
        },
      ],
    },
    {
      id: 'planning',
      title: 'Planning Agent',
      description:
        'Watch a planning agent decompose a complex goal into sub-tasks, execute them sequentially, and dynamically re-plan when obstacles arise.',
      icon: <Lightbulb className="h-7 w-7" />,
      color: PLANNING_COLOR,
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
      steps: [
        {
          id: 'goal',
          label: 'Goal Received',
          description: 'Complex user goal arrives',
          icon: <MessageSquare className="h-5 w-5" />,
          color: '#0ea5e9',
          detail:
            'The user provides a high-level goal: "Research the top 5 AI frameworks, compare their features, and write a recommendation report." The planner must break this into executable steps.',
        },
        {
          id: 'decompose',
          label: 'Task Decomposition',
          description: 'Goal broken into sub-tasks',
          icon: <Layers className="h-5 w-5" />,
          color: '#38bdf8',
          detail:
            'The planner decomposes the goal into ordered sub-tasks: 1) Identify top 5 frameworks, 2) Research each framework, 3) Create comparison matrix, 4) Analyze trade-offs, 5) Write recommendation.',
        },
        {
          id: 'execute-1',
          label: 'Execute Task 1',
          description: 'First sub-task runs',
          icon: <Zap className="h-5 w-5" />,
          color: '#0284c7',
          detail:
            'The agent executes the first task: searching the web for top AI agent frameworks. It collects information on LangGraph, CrewAI, AutoGen, LlamaIndex, and Semantic Kernel.',
        },
        {
          id: 'evaluate',
          label: 'Evaluate Progress',
          description: 'Check results against plan',
          icon: <Eye className="h-5 w-5" />,
          color: '#0ea5e9',
          detail:
            'The planner evaluates whether Task 1 was successful. It checks: Were 5 frameworks found? Is there enough detail? Should the plan be adjusted based on initial findings?',
        },
        {
          id: 'replan',
          label: 'Dynamic Re-plan',
          description: 'Adjust plan based on findings',
          icon: <Settings className="h-5 w-5" />,
          color: '#38bdf8',
          detail:
            'Based on initial research, the planner adds a new sub-task: "Research OpenAI Agents SDK" which emerged as a 6th major framework. The plan adapts dynamically.',
        },
        {
          id: 'execute-remaining',
          label: 'Execute Remaining',
          description: 'Complete all sub-tasks',
          icon: <Code className="h-5 w-5" />,
          color: '#0284c7',
          detail:
            'The agent works through remaining sub-tasks in order: researching each framework, building the comparison matrix, and analyzing trade-offs. Each step feeds into the next.',
        },
        {
          id: 'synthesize',
          label: 'Synthesize Output',
          description: 'Combine results into final report',
          icon: <FileText className="h-5 w-5" />,
          color: '#0ea5e9',
          detail:
            'All sub-task results are combined into a cohesive recommendation report with executive summary, detailed comparisons, and a final recommendation based on the analysis.',
        },
        {
          id: 'deliver',
          label: 'Deliver Result',
          description: 'Final output sent to user',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#0ea5e9',
          detail:
            'The completed report is delivered to the user. The planner logs the execution trace showing which tasks succeeded, which required re-planning, and total execution time.',
        },
      ],
    },
    {
      id: 'reflection',
      title: 'Reflection Loop',
      description:
        'Observe an agent generate output, self-critique it against quality criteria, then iteratively revise until the output meets standards.',
      icon: <Eye className="h-7 w-7" />,
      color: REFLECTION_COLOR,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      steps: [
        {
          id: 'input',
          label: 'Task Input',
          description: 'Writing task received',
          icon: <MessageSquare className="h-5 w-5" />,
          color: '#8b5cf6',
          detail:
            'The agent receives a task: "Write a technical blog post explaining how RAG works for a developer audience." The reflection loop will ensure high-quality output.',
        },
        {
          id: 'draft',
          label: 'Generate Draft',
          description: 'First draft created',
          icon: <FileText className="h-5 w-5" />,
          color: '#a78bfa',
          detail:
            'The generator LLM produces the first draft. It covers the basics but may have issues with accuracy, completeness, tone, or structure that need to be identified.',
        },
        {
          id: 'critique',
          label: 'Self-Critique',
          description: 'Agent evaluates its own output',
          icon: <Eye className="h-5 w-5" />,
          color: '#7c3aed',
          detail:
            'The critic evaluates the draft across dimensions: factual accuracy, technical depth, clarity, structure, and audience fit. It identifies specific issues: "Missing explanation of embedding models" and "Introduction is too vague."',
        },
        {
          id: 'score',
          label: 'Quality Score',
          description: 'Numeric quality assessment',
          icon: <Gauge className="h-5 w-5" />,
          color: '#8b5cf6',
          detail:
            'The critic assigns a quality score: 6/10. The threshold is 8/10. Scores below the threshold trigger another revision cycle. The specific improvement areas are documented.',
        },
        {
          id: 'revise',
          label: 'Revision (Round 1)',
          description: 'Agent improves based on critique',
          icon: <Code className="h-5 w-5" />,
          color: '#a78bfa',
          detail:
            'The generator receives the critique and revises: adds embedding model explanation, rewrites the introduction with a concrete example, and improves technical accuracy throughout.',
        },
        {
          id: 'critique-2',
          label: 'Re-evaluate',
          description: 'Second round of critique',
          icon: <Eye className="h-5 w-5" />,
          color: '#7c3aed',
          detail:
            'The critic re-evaluates the revised draft. Score improves to 8.5/10. Remaining issue: "Add a code example showing a basic RAG implementation." The critique is more specific.',
        },
        {
          id: 'final-revise',
          label: 'Final Revision',
          description: 'Last improvements applied',
          icon: <Code className="h-5 w-5" />,
          color: '#a78bfa',
          detail:
            'Final revision adds the Python code example, polishes transitions, and ensures consistent formatting. The draft is now significantly better than the original first attempt.',
        },
        {
          id: 'output',
          label: 'Final Output',
          description: 'Polished result delivered',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#8b5cf6',
          detail:
            'Final quality score: 9.2/10, exceeding the 8/10 threshold. The output is delivered with a quality report showing the improvement trajectory: 6.0 -> 8.5 -> 9.2 across 3 iterations.',
        },
      ],
    },
    {
      id: 'graph-rag',
      title: 'Graph RAG',
      description:
        'See how a knowledge graph is built from documents, entities are linked, subgraphs are retrieved, and answers are synthesized with structural context.',
      icon: <Box className="h-7 w-7" />,
      color: GRAPH_RAG_COLOR,
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
      steps: [
        {
          id: 'ingest',
          label: 'Document Ingestion',
          description: 'Source documents loaded',
          icon: <FileText className="h-5 w-5" />,
          color: '#14b8a6',
          detail:
            'Research papers and technical documents are loaded. Unlike standard RAG which just chunks text, Graph RAG first extracts structured knowledge to build a connected graph.',
        },
        {
          id: 'extract',
          label: 'Entity Extraction',
          description: 'Named entities identified',
          icon: <Search className="h-5 w-5" />,
          color: '#2dd4bf',
          detail:
            'The LLM extracts entities (people, technologies, concepts, organizations) and relationships from the text. Example: "LangGraph" -> "built_by" -> "LangChain team", "uses" -> "StateGraph".',
        },
        {
          id: 'graph-build',
          label: 'Graph Construction',
          description: 'Knowledge graph assembled',
          icon: <Box className="h-5 w-5" />,
          color: '#0d9488',
          detail:
            'Entities become nodes and relationships become edges in a knowledge graph (stored in Neo4j or similar). The graph captures connections that flat text chunks would miss.',
        },
        {
          id: 'community',
          label: 'Community Detection',
          description: 'Topic clusters identified',
          icon: <Users className="h-5 w-5" />,
          color: '#14b8a6',
          detail:
            'Graph algorithms detect communities - clusters of densely connected nodes representing topics. Each community gets an auto-generated summary for high-level retrieval.',
        },
        {
          id: 'query',
          label: 'User Query',
          description: 'Question arrives for processing',
          icon: <MessageSquare className="h-5 w-5" />,
          color: '#2dd4bf',
          detail:
            'A user asks: "How do the state management approaches in LangGraph and AutoGen compare?" The query is analyzed to identify relevant entities and relationships needed.',
        },
        {
          id: 'subgraph',
          label: 'Subgraph Retrieval',
          description: 'Relevant graph portion extracted',
          icon: <Database className="h-5 w-5" />,
          color: '#0d9488',
          detail:
            'Instead of retrieving text chunks, the system retrieves the relevant subgraph: nodes for LangGraph, AutoGen, StateGraph, ConversableAgent, and their connecting edges and community summaries.',
        },
        {
          id: 'synthesize',
          label: 'Answer Synthesis',
          description: 'LLM generates grounded answer',
          icon: <Brain className="h-5 w-5" />,
          color: '#14b8a6',
          detail:
            'The LLM receives the subgraph context including entity properties, relationships, and community summaries. It generates an answer that leverages the structural relationships between concepts.',
        },
        {
          id: 'answer',
          label: 'Structured Answer',
          description: 'Response with graph evidence',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#14b8a6',
          detail:
            'The final answer includes structural comparisons derived from the graph, citations to source entities, and relationship paths showing how the answer was derived from connected knowledge.',
        },
      ],
    },
    {
      id: 'rlhf',
      title: 'RLHF Training Loop',
      description:
        'Follow the Reinforcement Learning from Human Feedback pipeline: collecting preferences, training a reward model, and optimizing with PPO.',
      icon: <Gauge className="h-7 w-7" />,
      color: RLHF_COLOR,
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
      steps: [
        {
          id: 'base-model',
          label: 'Base Model',
          description: 'Pre-trained LLM as starting point',
          icon: <Brain className="h-5 w-5" />,
          color: '#f43f5e',
          detail:
            'Start with a pre-trained language model (e.g., Llama 3) that has been instruction-tuned via supervised fine-tuning (SFT). This model can follow instructions but may not align with human preferences.',
        },
        {
          id: 'generate-pairs',
          label: 'Generate Response Pairs',
          description: 'Model produces multiple outputs',
          icon: <FileText className="h-5 w-5" />,
          color: '#fb7185',
          detail:
            'For each prompt, the model generates 2-4 different responses. These variations capture different tones, levels of detail, and approaches to answering the same question.',
        },
        {
          id: 'human-rank',
          label: 'Human Ranking',
          description: 'Humans rank response quality',
          icon: <Users className="h-5 w-5" />,
          color: '#e11d48',
          detail:
            'Human evaluators compare response pairs and rank them by quality: helpfulness, harmlessness, and honesty. This creates a preference dataset: "Response A is better than Response B for prompt X."',
        },
        {
          id: 'reward-model',
          label: 'Train Reward Model',
          description: 'Learn to predict human preferences',
          icon: <Cpu className="h-5 w-5" />,
          color: '#f43f5e',
          detail:
            'A reward model is trained on the preference dataset. Given a prompt and response, it outputs a scalar score predicting how much a human would prefer this response. This automates human judgment.',
        },
        {
          id: 'ppo-init',
          label: 'PPO Initialization',
          description: 'Set up policy optimization',
          icon: <Settings className="h-5 w-5" />,
          color: '#fb7185',
          detail:
            'Proximal Policy Optimization (PPO) is initialized with the SFT model as the policy, the reward model as the objective, and a KL divergence penalty to prevent the model from deviating too far from the original.',
        },
        {
          id: 'ppo-loop',
          label: 'PPO Training Loop',
          description: 'Iterative policy improvement',
          icon: <Zap className="h-5 w-5" />,
          color: '#e11d48',
          detail:
            'For each batch: generate responses, score with reward model, compute advantage estimates, update policy with clipped objective. The KL penalty ensures stable training without catastrophic forgetting.',
        },
        {
          id: 'eval',
          label: 'Evaluation',
          description: 'Test aligned model performance',
          icon: <Gauge className="h-5 w-5" />,
          color: '#f43f5e',
          detail:
            'The RLHF-trained model is evaluated against benchmarks and human evaluators. Win rate against the base model, reward score distribution, and safety checks are all measured.',
        },
        {
          id: 'deploy',
          label: 'Aligned Model',
          description: 'Deploy human-aligned agent',
          icon: <CheckCircle2 className="h-5 w-5" />,
          color: '#f43f5e',
          detail:
            'The final aligned model produces responses that better match human preferences. It is deployed as the backbone of AI agents, providing more helpful, harmless, and honest behavior.',
        },
      ],
    },
  ];
}

/* ------------------------------------------------------------------ */
/*  Connector Line (SVG between nodes)                                 */
/* ------------------------------------------------------------------ */

function ConnectorLine({
  active,
  completed,
  color,
  vertical,
}: {
  active: boolean;
  completed: boolean;
  color: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center ${
        vertical ? 'h-8 w-full' : 'w-8 h-full flex-shrink-0'
      }`}
    >
      <motion.div
        className={`rounded-full ${vertical ? 'w-0.5 h-full' : 'h-0.5 w-full'}`}
        style={{
          backgroundColor: completed
            ? color
            : active
            ? color
            : 'var(--border-primary)',
        }}
        animate={{
          opacity: active ? [0.4, 1, 0.4] : completed ? 1 : 0.3,
        }}
        transition={{
          duration: 1.5,
          repeat: active ? Infinity : 0,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step Node                                                          */
/* ------------------------------------------------------------------ */

function StepNode({
  step,
  index,
  currentStep,
}: {
  step: SimStep;
  index: number;
  currentStep: number;
  totalSteps?: number;
  simColor?: string;
}) {
  const isActive = index === currentStep;
  const isCompleted = index < currentStep;

  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 min-w-0"
      style={{ flex: '1 1 0' }}
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Icon circle */}
      <motion.div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center border-2 flex-shrink-0"
        style={{
          borderColor: isActive
            ? step.color
            : isCompleted
            ? step.color
            : 'var(--border-primary)',
          backgroundColor: isActive
            ? `${step.color}20`
            : isCompleted
            ? `${step.color}10`
            : 'var(--bg-secondary)',
          color: isActive || isCompleted ? step.color : 'var(--text-tertiary)',
        }}
        animate={
          isActive
            ? {
                boxShadow: [
                  `0 0 0 0px ${step.color}30`,
                  `0 0 0 8px ${step.color}00`,
                ],
              }
            : { boxShadow: `0 0 0 0px ${step.color}00` }
        }
        transition={{
          duration: 1.5,
          repeat: isActive ? Infinity : 0,
        }}
      >
        {step.icon}
        {isCompleted && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: step.color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <CheckCircle2 className="h-3 w-3 text-white" />
          </motion.div>
        )}
      </motion.div>

      {/* Label */}
      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{
          color: isActive
            ? step.color
            : isCompleted
            ? 'var(--text-primary)'
            : 'var(--text-tertiary)',
        }}
      >
        {step.label}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step Detail Panel                                                   */
/* ------------------------------------------------------------------ */

function StepDetail({ step, index }: { step: SimStep; index: number }) {
  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="rounded-xl p-5 border"
      style={{
        backgroundColor: `${step.color}08`,
        borderColor: `${step.color}30`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: `${step.color}20`, color: step.color }}
        >
          {step.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${step.color}20`,
                color: step.color,
              }}
            >
              Step {index + 1}
            </span>
            <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
              {step.label}
            </span>
          </div>
          <p
            className="text-sm leading-relaxed whitespace-pre-line"
            style={{ color: 'var(--text-secondary)' }}
          >
            {step.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Speed Control                                                       */
/* ------------------------------------------------------------------ */

function SpeedControl({
  speed,
  onSpeedChange,
}: {
  speed: number;
  onSpeedChange: (s: number) => void;
}) {
  const speeds = [0.5, 1, 1.5, 2];
  return (
    <div className="flex items-center gap-1.5">
      <span style={{ color: 'var(--text-tertiary)' }}><Gauge className="h-3.5 w-3.5" /></span>
      {speeds.map((s) => (
        <button
          key={s}
          onClick={() => onSpeedChange(s)}
          className="px-2 py-0.5 rounded text-xs font-medium transition-colors"
          style={{
            backgroundColor: speed === s ? 'var(--color-primary)' : 'var(--bg-tertiary)',
            color: speed === s ? '#fff' : 'var(--text-secondary)',
          }}
        >
          {s}x
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step Indicator (dots)                                               */
/* ------------------------------------------------------------------ */

function StepIndicator({
  total,
  current,
  color,
}: {
  total: number;
  current: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;
        const isCompleted = i < current;
        return (
          <motion.div
            key={i}
            className="flex items-center justify-center"
            animate={{ scale: isActive ? 1.3 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {isActive ? (
              <span style={{ color }}><CircleDot className="h-3.5 w-3.5" /></span>
            ) : isCompleted ? (
              <span style={{ color }}><CheckCircle2 className="h-3.5 w-3.5" /></span>
            ) : (
              <span style={{ color: 'var(--border-primary)' }}><Circle className="h-3.5 w-3.5" /></span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Expanded Simulation View                                            */
/* ------------------------------------------------------------------ */

function SimulationViewer({
  simulation,
  onClose,
}: {
  simulation: Simulation;
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSteps = simulation.steps.length;

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    stop();
    setIsPlaying(true);
    setCurrentStep((prev) => (prev < 0 ? 0 : prev));
    intervalRef.current = setInterval(
      () => {
        setCurrentStep((prev) => {
          if (prev >= totalSteps - 1) {
            stop();
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      },
      2000 / speed,
    );
  }, [speed, totalSteps, stop]);

  const pause = useCallback(() => {
    stop();
    setIsPlaying(false);
  }, [stop]);

  const reset = useCallback(() => {
    stop();
    setIsPlaying(false);
    setCurrentStep(-1);
  }, [stop]);

  // Manage interval via effect to avoid setState-in-effect lint errors
  useEffect(() => {
    if (!isPlaying) return;
    stop();
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= totalSteps - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000 / speed);
    return () => stop();
  }, [isPlaying, speed, totalSteps, stop]);

  const activeStep = currentStep >= 0 && currentStep < totalSteps ? simulation.steps[currentStep] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-primary)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between p-5 border-b backdrop-blur-sm"
          style={{
            borderColor: 'var(--border-primary)',
            backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
          }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: simulation.gradient,
                color: '#fff',
              }}
            >
              {simulation.icon}
            </div>
            <div>
              <h2
                className="text-lg font-bold leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {simulation.title}
              </h2>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {simulation.description}
              </p>
            </div>
          </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="p-5">
          {/* Desktop: horizontal pipeline */}
          <div className="hidden md:block mb-6">
            <div className="flex items-start">
              {simulation.steps.map((step, i) => (
                <div key={step.id} className="flex items-start flex-1 min-w-0">
                  <StepNode
                    step={step}
                    index={i}
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    simColor={simulation.color}
                  />
                  {i < totalSteps - 1 && (
                    <ConnectorLine
                      active={i === currentStep}
                      completed={i < currentStep}
                      color={simulation.color}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="md:hidden mb-6">
            <div className="flex flex-col items-center gap-0">
              {simulation.steps.map((step, i) => (
                <div key={step.id} className="flex flex-col items-center w-full">
                  <div className="flex items-center gap-3 w-full">
                    <motion.div
                      className="w-10 h-10 rounded-lg flex items-center justify-center border-2 flex-shrink-0"
                      style={{
                        borderColor:
                          i === currentStep
                            ? step.color
                            : i < currentStep
                            ? step.color
                            : 'var(--border-primary)',
                        backgroundColor:
                          i === currentStep
                            ? `${step.color}20`
                            : i < currentStep
                            ? `${step.color}10`
                            : 'var(--bg-secondary)',
                        color:
                          i === currentStep || i < currentStep
                            ? step.color
                            : 'var(--text-tertiary)',
                      }}
                      animate={
                        i === currentStep
                          ? {
                              boxShadow: [
                                `0 0 0 0px ${step.color}30`,
                                `0 0 0 6px ${step.color}00`,
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.5,
                        repeat: i === currentStep ? Infinity : 0,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <span
                        className="text-sm font-semibold"
                        style={{
                          color:
                            i === currentStep
                              ? step.color
                              : i < currentStep
                              ? 'var(--text-primary)'
                              : 'var(--text-tertiary)',
                        }}
                      >
                        {step.label}
                      </span>
                      <p
                        className="text-xs"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {i < totalSteps - 1 && (
                    <ConnectorLine
                      active={i === currentStep}
                      completed={i < currentStep}
                      color={simulation.color}
                      vertical
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Detail */}
          <div className="mb-5 min-h-[140px]">
            <AnimatePresence mode="wait">
              {activeStep ? (
                <StepDetail step={activeStep} index={currentStep} />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl p-5 border text-center"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)',
                  }}
                >
                  <p
                    className="text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Press <strong>Play</strong> to start the simulation, or click
                    the step indicator dots below.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls Bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl p-4 border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)',
            }}
          >
            {/* Playback controls */}
            <div className="flex items-center gap-2">
              {isPlaying ? (
                <button
                  onClick={pause}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                  style={{
                    background: simulation.gradient,
                    color: '#fff',
                  }}
                >
                  <Pause className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={play}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                  style={{
                    background: simulation.gradient,
                    color: '#fff',
                  }}
                >
                  <Play className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={reset}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                }}
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <span
                className="text-xs font-medium px-2"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {currentStep >= 0 ? currentStep + 1 : 0} / {totalSteps}
              </span>
            </div>

            {/* Step dots */}
            <StepIndicator
              total={totalSteps}
              current={currentStep}
              color={simulation.color}
            />

            {/* Speed */}
            <SpeedControl speed={speed} onSpeedChange={setSpeed} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Simulation Card (grid item)                                         */
/* ------------------------------------------------------------------ */

function SimulationCard({
  simulation,
  index,
  onSelect,
}: {
  simulation: Simulation;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="text-left rounded-2xl border overflow-hidden group cursor-pointer transition-shadow"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-primary)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Gradient header */}
      <div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        style={{ background: simulation.gradient }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id={`grid-${simulation.id}`}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${simulation.id})`} />
          </svg>
        </div>

        {/* Floating mini nodes */}
        <div className="relative flex items-center gap-2">
          {simulation.steps.slice(0, 5).map((step, i) => (
            <motion.div
              key={step.id}
              className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {step.icon}
            </motion.div>
          ))}
          {simulation.steps.length > 5 && (
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold">
              +{simulation.steps.length - 5}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: `${simulation.color}15`,
              color: simulation.color,
            }}
          >
            {simulation.icon}
          </div>
          <h3
            className="text-base font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            {simulation.title}
          </h3>
        </div>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {simulation.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {simulation.steps.length} steps
          </span>
          <div
            className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
            style={{ color: simulation.color }}
          >
            <span>Run Simulation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function SimulationsPage() {
  const { locale } = useLocale();
  const [selectedSim, setSelectedSim] = useState<string | null>(null);
  const simulations = getSimulations();
  const activeSim = simulations.find((s) => s.id === selectedSim) || null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--color-primary)',
          }}
        >
          <Zap className="h-4 w-4" />
          <span>Interactive Learning</span>
        </div>
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('simulations.title', locale)}
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('simulations.subtitle', locale)}
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {simulations.map((sim, i) => (
          <SimulationCard
            key={sim.id}
            simulation={sim}
            index={i}
            onSelect={() => setSelectedSim(sim.id)}
          />
        ))}
      </div>

      {/* Expanded Simulation Modal */}
      <AnimatePresence>
        {activeSim && (
          <SimulationViewer
            key={activeSim.id}
            simulation={activeSim}
            onClose={() => setSelectedSim(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
