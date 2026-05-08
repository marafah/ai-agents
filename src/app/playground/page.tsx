'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  RotateCcw,
  Bot,
  Brain,
  ListChecks,
  Wrench,
  CheckCircle2,
  Database,
  MessageSquare,
  Search,
  Calculator,
  Cloud,
  Code2,
  FileText,
  Server,
  Zap,
  ChevronDown,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  Gauge,
  Loader2,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import type { AgentStep } from '@/types';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type AgentType = 'general' | 'research' | 'support' | 'code';

interface Tool {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Scenario {
  id: string;
  label: string;
  agentType: AgentType;
  prompt: string;
  tools: string[];
  steps: AgentStep[];
  chatbotResponse: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const AGENT_TYPES: { id: AgentType; label: string; description: string; color: string }[] = [
  { id: 'general', label: 'General Assistant', description: 'A versatile agent for everyday tasks', color: '#6366f1' },
  { id: 'research', label: 'Research Agent', description: 'Specialized in finding and analyzing information', color: '#8b5cf6' },
  { id: 'support', label: 'Customer Support Agent', description: 'Handles customer queries and issues', color: '#06b6d4' },
  { id: 'code', label: 'Code Assistant', description: 'Helps write, debug, and review code', color: '#10b981' },
];

const TOOLS: Tool[] = [
  { id: 'web-search', label: 'Web Search', icon: Search },
  { id: 'calculator', label: 'Calculator', icon: Calculator },
  { id: 'weather', label: 'Weather API', icon: Cloud },
  { id: 'code-exec', label: 'Code Executor', icon: Code2 },
  { id: 'file-reader', label: 'File Reader', icon: FileText },
  { id: 'db-query', label: 'Database Query', icon: Server },
];

const STEP_META: Record<AgentStep['type'], { icon: React.ComponentType<{ className?: string }>; label: string; color: string; bg: string }> = {
  thinking:     { icon: Brain,        label: 'Thinking',      color: '#a78bfa', bg: 'rgba(167,139,250,0.10)' },
  planning:     { icon: ListChecks,   label: 'Planning',      color: '#60a5fa', bg: 'rgba(96,165,250,0.10)' },
  'tool-call':  { icon: Wrench,       label: 'Tool Call',     color: '#22d3ee', bg: 'rgba(34,211,238,0.10)' },
  'tool-result':{ icon: CheckCircle2, label: 'Tool Result',   color: '#34d399', bg: 'rgba(52,211,153,0.10)' },
  memory:       { icon: Database,     label: 'Memory Update', color: '#fbbf24', bg: 'rgba(251,191,36,0.10)' },
  response:     { icon: MessageSquare,label: 'Final Response', color: '#818cf8', bg: 'rgba(129,140,248,0.10)' },
};

/* ------------------------------------------------------------------ */
/*  Scenarios                                                          */
/* ------------------------------------------------------------------ */

const SCENARIOS: Scenario[] = [
  {
    id: 'weather-trip',
    label: 'Trip Weather Planning',
    agentType: 'general',
    prompt: 'I am planning a trip to Paris next week. What will the weather be like, and should I pack warm clothes?',
    tools: ['web-search', 'weather'],
    chatbotResponse: 'Paris weather varies. I recommend checking a weather website for the latest forecast. Generally, bring layers and a jacket just in case.',
    steps: [
      { type: 'thinking', content: 'The user wants a weather forecast for Paris next week and packing advice. I need to check the weather API and maybe search for seasonal trends.', timestamp: 0 },
      { type: 'planning', content: 'Plan:\n1. Call Weather API for Paris 7-day forecast\n2. Search for Paris seasonal clothing tips\n3. Analyze rain probability and temperatures\n4. Give specific packing recommendations', timestamp: 1 },
      { type: 'tool-call', content: 'weather.getForecast({ city: "Paris", days: 7 })', timestamp: 2 },
      { type: 'tool-result', content: '{ "city": "Paris", "forecast": [{ "day": "Mon", "high": 14, "low": 8, "condition": "Cloudy", "rain": "40%" }, { "day": "Tue", "high": 12, "low": 6, "condition": "Rain", "rain": "80%" }, { "day": "Wed", "high": 15, "low": 9, "condition": "Partly Cloudy", "rain": "20%" }, { "day": "Thu", "high": 16, "low": 10, "condition": "Sunny", "rain": "5%" }] }', timestamp: 3 },
      { type: 'tool-call', content: 'webSearch.query("Paris packing tips spring weather")', timestamp: 4 },
      { type: 'tool-result', content: '{ "results": [{ "title": "What to Pack for Paris in Spring", "snippet": "Layers are essential. Expect temperatures between 8-18C. A waterproof jacket and comfortable walking shoes are must-haves." }] }', timestamp: 5 },
      { type: 'memory', content: 'Stored: User is planning a trip to Paris. Preference for practical travel advice noted.', timestamp: 6 },
      { type: 'response', content: 'Based on the 7-day forecast for Paris:\n\n- Monday: 14C, Cloudy (40% rain)\n- Tuesday: 12C, Rain expected (80% rain)\n- Wednesday: 15C, Partly Cloudy\n- Thursday: 16C, Sunny\n\nYes, you should definitely pack warm clothes! Temperatures will range from 6-16C. I recommend:\n- A waterproof jacket (especially for Tuesday)\n- Layerable clothing (sweaters, long sleeves)\n- Comfortable walking shoes\n- A compact umbrella\n\nParis in spring is beautiful but unpredictable. Layers are your best strategy!', timestamp: 7 },
    ],
  },
  {
    id: 'debug-code',
    label: 'Debug Python Code',
    agentType: 'code',
    prompt: 'My Python function to calculate fibonacci numbers is returning wrong results for large inputs. Here is the code:\n\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)',
    tools: ['code-exec', 'web-search'],
    chatbotResponse: 'Your fibonacci function looks correct for small values. For large inputs, you might want to use memoization or an iterative approach to improve performance.',
    steps: [
      { type: 'thinking', content: 'The user has a recursive fibonacci function. The issue is likely stack overflow or extreme slowness for large n due to exponential time complexity O(2^n). Let me analyze and test this.', timestamp: 0 },
      { type: 'planning', content: 'Plan:\n1. Execute the code to reproduce the issue\n2. Identify the root cause (likely exponential recursion)\n3. Search for optimal fibonacci implementations\n4. Provide fixed code with explanation', timestamp: 1 },
      { type: 'tool-call', content: 'codeExecutor.run({\n  language: "python",\n  code: "import time\\ndef fib(n):\\n    if n <= 1: return n\\n    return fib(n-1) + fib(n-2)\\n\\nstart = time.time()\\nprint(fib(35))\\nprint(f\'Time: {time.time()-start:.2f}s\')"\n})', timestamp: 2 },
      { type: 'tool-result', content: '9227465\nTime: 4.73s\n\n(Note: fib(50) would take hours with this approach)', timestamp: 3 },
      { type: 'tool-call', content: 'codeExecutor.run({\n  language: "python",\n  code: "from functools import lru_cache\\nimport time\\n\\n@lru_cache(maxsize=None)\\ndef fib_memo(n):\\n    if n <= 1: return n\\n    return fib_memo(n-1) + fib_memo(n-2)\\n\\ndef fib_iter(n):\\n    a, b = 0, 1\\n    for _ in range(n):\\n        a, b = b, a + b\\n    return a\\n\\nstart = time.time()\\nprint(fib_memo(100))\\nprint(f\'Memoized: {time.time()-start:.6f}s\')\\n\\nstart = time.time()\\nprint(fib_iter(100))\\nprint(f\'Iterative: {time.time()-start:.6f}s\')"\n})', timestamp: 4 },
      { type: 'tool-result', content: '354224848179261915075\nMemoized: 0.000089s\n354224848179261915075\nIterative: 0.000012s', timestamp: 5 },
      { type: 'memory', content: 'Stored: User works with Python. Interested in algorithm optimization.', timestamp: 6 },
      { type: 'response', content: 'The issue is that your recursive fibonacci has O(2^n) time complexity -- it recalculates the same values exponentially many times. For fib(35), it takes ~5 seconds. For fib(50), it would take hours!\n\nHere are two fixed versions:\n\n**Option 1 -- Memoization (easy fix):**\n```python\nfrom functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n```\n\n**Option 2 -- Iterative (best performance):**\n```python\ndef fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n```\n\nBoth compute fib(100) in microseconds. The iterative version is O(n) time and O(1) space -- the optimal solution.', timestamp: 7 },
    ],
  },
  {
    id: 'customer-refund',
    label: 'Handle Refund Request',
    agentType: 'support',
    prompt: 'I ordered a laptop 3 days ago (Order #A1234) and it arrived with a cracked screen. I want a refund or replacement immediately.',
    tools: ['db-query', 'web-search'],
    chatbotResponse: 'I\'m sorry to hear about your damaged laptop. Please contact our support team at support@example.com or call 1-800-SUPPORT for assistance with returns and refunds.',
    steps: [
      { type: 'thinking', content: 'The customer has a damaged product and wants resolution. I need to look up the order, verify the purchase, check return eligibility, and initiate the process. This is an urgent issue -- damaged on arrival means it is eligible for immediate replacement.', timestamp: 0 },
      { type: 'planning', content: 'Plan:\n1. Query database for order #A1234\n2. Verify order status and return window\n3. Check inventory for replacement availability\n4. Initiate replacement/refund process\n5. Provide tracking and timeline to customer', timestamp: 1 },
      { type: 'tool-call', content: 'database.query("SELECT * FROM orders WHERE order_id = \'A1234\' JOIN customers ON orders.customer_id = customers.id")', timestamp: 2 },
      { type: 'tool-result', content: '{ "order_id": "A1234", "product": "ProBook Laptop 15\\"", "price": 1299.99, "order_date": "2025-05-03", "delivery_date": "2025-05-05", "status": "delivered", "customer": "Mohammad A.", "return_eligible": true, "warranty": "active" }', timestamp: 3 },
      { type: 'tool-call', content: 'database.query("SELECT stock FROM inventory WHERE product_sku = \'PBL15-2025\'")', timestamp: 4 },
      { type: 'tool-result', content: '{ "product_sku": "PBL15-2025", "stock": 23, "warehouse": "US-East", "estimated_ship": "1 business day" }', timestamp: 5 },
      { type: 'tool-call', content: 'database.execute("INSERT INTO returns (order_id, reason, type, status) VALUES (\'A1234\', \'damaged_on_arrival\', \'replacement\', \'approved\')")', timestamp: 6 },
      { type: 'tool-result', content: '{ "return_id": "R5678", "status": "approved", "replacement_order": "A1235", "label_generated": true, "pickup_scheduled": "2025-05-07" }', timestamp: 7 },
      { type: 'memory', content: 'Stored: Customer Mohammad -- Order A1234 had DOA damage (cracked screen). Replacement approved (R5678). Priority flag set on account for follow-up.', timestamp: 8 },
      { type: 'response', content: 'I am sorry about the cracked screen! I have already taken care of this for you:\n\n1. **Return approved** -- Return ID: R5678\n2. **Replacement ordered** -- New Order #A1235 (ProBook Laptop 15") will ship within 1 business day\n3. **Free pickup scheduled** -- A carrier will pick up the damaged laptop on May 7th. A prepaid return label has been emailed to you.\n\nYou do not need to wait for us to receive the return -- your replacement is already being prepared.\n\nIs there anything else I can help with?', timestamp: 9 },
    ],
  },
  {
    id: 'research-ai',
    label: 'Research AI Trends',
    agentType: 'research',
    prompt: 'What are the latest trends in AI agent architectures? I need a summary for a presentation.',
    tools: ['web-search', 'file-reader'],
    chatbotResponse: 'AI agent architectures are evolving rapidly. Some trends include multi-agent systems, tool use, and chain-of-thought reasoning. You can find more details on recent research papers and tech blogs.',
    steps: [
      { type: 'thinking', content: 'The user needs a comprehensive summary of current AI agent architecture trends for a presentation. I should search for recent papers, blog posts, and industry reports to compile an authoritative overview.', timestamp: 0 },
      { type: 'planning', content: 'Plan:\n1. Search for recent AI agent architecture papers (2024-2025)\n2. Search for industry trends and frameworks\n3. Search for practical implementations\n4. Synthesize findings into a presentation-ready summary\n5. Include key references', timestamp: 1 },
      { type: 'tool-call', content: 'webSearch.query("AI agent architectures trends 2025 survey")', timestamp: 2 },
      { type: 'tool-result', content: '{ "results": [\n  { "title": "A Survey of AI Agent Architectures 2025", "snippet": "Key trends: ReAct pattern, multi-agent orchestration, tool-augmented LLMs, memory-enhanced agents, and planning with world models." },\n  { "title": "The Rise of Autonomous AI Agents", "snippet": "Frameworks like LangGraph, CrewAI, and AutoGen enable sophisticated agent workflows with built-in reasoning loops." }\n] }', timestamp: 3 },
      { type: 'tool-call', content: 'webSearch.query("multi-agent systems LLM frameworks comparison 2025")', timestamp: 4 },
      { type: 'tool-result', content: '{ "results": [\n  { "title": "Multi-Agent LLM Systems", "snippet": "Trending architectures: hierarchical agents, debate-based verification, specialized role agents, and supervisor patterns." },\n  { "title": "Agent Memory Systems", "snippet": "RAG-based long-term memory, episodic memory buffers, and semantic knowledge graphs are becoming standard components." }\n] }', timestamp: 5 },
      { type: 'memory', content: 'Stored: User preparing a presentation on AI agent architectures. Professional context -- may need follow-up with more detail.', timestamp: 6 },
      { type: 'response', content: 'Here is a summary of the latest AI agent architecture trends for your presentation:\n\n**1. ReAct & Reasoning-Action Loops**\nAgents that interleave reasoning (chain-of-thought) with actions (tool calls) in iterative loops, enabling self-correction.\n\n**2. Multi-Agent Orchestration**\nSystems with multiple specialized agents collaborating: supervisor patterns, debate-based verification, and hierarchical delegation.\n\n**3. Tool-Augmented LLMs**\nAgents that dynamically select and use external tools (APIs, code execution, databases) based on task requirements.\n\n**4. Advanced Memory Systems**\n- Short-term: conversation context windows\n- Long-term: RAG-based retrieval, episodic buffers\n- Semantic: knowledge graphs for structured recall\n\n**5. Planning with World Models**\nAgents that build internal models to simulate outcomes before acting, reducing errors.\n\n**6. Key Frameworks**\nLangGraph, CrewAI, AutoGen, and Semantic Kernel are leading the ecosystem.\n\nWant me to go deeper on any of these topics?', timestamp: 7 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helper: generate steps from custom prompt                          */
/* ------------------------------------------------------------------ */

function generateCustomSteps(prompt: string, agentType: AgentType, selectedTools: string[]): AgentStep[] {
  const toolNames = selectedTools.map(id => TOOLS.find(tool => tool.id === id)?.label || id);
  const agentLabel = AGENT_TYPES.find(a => a.id === agentType)?.label || 'Agent';

  const steps: AgentStep[] = [
    {
      type: 'thinking',
      content: `As a ${agentLabel}, I need to analyze this request: "${prompt.slice(0, 80)}${prompt.length > 80 ? '...' : ''}". Let me determine the best approach and which tools to use.`,
      timestamp: 0,
    },
    {
      type: 'planning',
      content: `Plan:\n1. Analyze the user's intent and requirements\n2. ${toolNames.length > 0 ? `Use ${toolNames[0]} to gather initial information` : 'Process the request directly'}\n3. ${toolNames.length > 1 ? `Cross-reference with ${toolNames[1]}` : 'Evaluate findings'}\n4. Synthesize results into a comprehensive response`,
      timestamp: 1,
    },
  ];

  if (selectedTools.length > 0) {
    const firstTool = TOOLS.find(tool => tool.id === selectedTools[0]);
    steps.push({
      type: 'tool-call',
      content: `${firstTool?.label.replace(/\s/g, '')}.execute({ query: "${prompt.slice(0, 50)}..." })`,
      timestamp: 2,
    });
    steps.push({
      type: 'tool-result',
      content: `{ "status": "success", "results": [{ "relevance": 0.95, "data": "Relevant information found for the query..." }], "metadata": { "source": "${firstTool?.label}", "timestamp": "${new Date().toISOString()}" } }`,
      timestamp: 3,
    });
  }

  if (selectedTools.length > 1) {
    const secondTool = TOOLS.find(tool => tool.id === selectedTools[1]);
    steps.push({
      type: 'tool-call',
      content: `${secondTool?.label.replace(/\s/g, '')}.query({ input: "processed_context", format: "detailed" })`,
      timestamp: 4,
    });
    steps.push({
      type: 'tool-result',
      content: `{ "status": "success", "analysis": { "confidence": 0.92, "findings": "Additional context retrieved and cross-referenced successfully." } }`,
      timestamp: 5,
    });
  }

  steps.push({
    type: 'memory',
    content: `Stored: User query processed by ${agentLabel}. Context and preferences saved for future interactions.`,
    timestamp: steps.length,
  });

  steps.push({
    type: 'response',
    content: `Based on my analysis${selectedTools.length > 0 ? ' and the data gathered from ' + toolNames.join(' and ') : ''}, here is my response to your request.\n\nI have processed your query "${prompt.slice(0, 60)}${prompt.length > 60 ? '...' : ''}" using the ${agentLabel} capabilities. The key findings and recommendations have been compiled for you.\n\nThis is a simulated response -- in a real agent, this would contain specific, actionable information tailored to your request.`,
    timestamp: steps.length + 1,
  });

  return steps;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PlaygroundPage() {
  const { locale, direction } = useLocale();

  /* State */
  const [agentType, setAgentType] = useState<AgentType>('general');
  const [prompt, setPrompt] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>(['web-search', 'calculator']);
  const [speed, setSpeed] = useState(1);           // 0.5x – 3x
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState<AgentStep[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const [chatbotResponse, setChatbotResponse] = useState('');
  const [agentDropdownOpen, setAgentDropdownOpen] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepsEndRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll to latest step */
  useEffect(() => {
    if (stepsEndRef.current) {
      stepsEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [visibleCount]);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /* Run simulation */
  const runSimulation = useCallback((scenarioSteps: AgentStep[], companionChatbot?: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setSteps(scenarioSteps);
    setVisibleCount(0);
    setIsRunning(true);
    if (companionChatbot) setChatbotResponse(companionChatbot);

    let count = 0;
    const delay = 1200 / speed;

    intervalRef.current = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= scenarioSteps.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
      }
    }, delay);
  }, [speed]);

  /* Handle Run button */
  const handleRun = useCallback(() => {
    if (!prompt.trim()) return;
    const customSteps = generateCustomSteps(prompt, agentType, selectedTools);
    const fallbackChatbot = `I understand your question: "${prompt.slice(0, 80)}${prompt.length > 80 ? '...' : ''}". Here is a direct response without any tool usage, planning, or reasoning steps. This represents a basic chatbot behavior.`;
    runSimulation(customSteps, fallbackChatbot);
  }, [prompt, agentType, selectedTools, runSimulation]);

  /* Handle scenario click */
  const handleScenario = useCallback((scenario: Scenario) => {
    setPrompt(scenario.prompt);
    setAgentType(scenario.agentType);
    setSelectedTools(scenario.tools);
    setChatbotResponse(scenario.chatbotResponse);
    runSimulation(scenario.steps, scenario.chatbotResponse);
  }, [runSimulation]);

  /* Toggle tool */
  const toggleTool = useCallback((toolId: string) => {
    setSelectedTools(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  }, []);

  /* Reset */
  const handleReset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSteps([]);
    setVisibleCount(0);
    setIsRunning(false);
    setPrompt('');
    setChatbotResponse('');
    setShowComparison(false);
  }, []);

  const selectedAgentInfo = AGENT_TYPES.find(a => a.id === agentType)!;
  const isFinished = visibleCount >= steps.length && steps.length > 0;

  return (
    <div dir={direction} className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <div className="border-b" style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-secondary)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(99,102,241,0.15)' }}
              >
                <Bot className="h-5 w-5" style={{ color: '#6366f1' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {t('playground.title', locale)}
              </h1>
            </div>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('playground.subtitle', locale)}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Predefined Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
            Quick Examples
          </p>
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScenario(s)}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  borderColor: 'var(--border-primary)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                }}
              >
                <Sparkles className="h-3.5 w-3.5" style={{ color: '#f59e0b' }} />
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main layout: input left, output right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ---- LEFT PANEL: Configuration ---- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Agent Type */}
            <div
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <label className="text-sm font-semibold mb-2 block" style={{ color: 'var(--text-primary)' }}>
                Agent Type
              </label>
              <div className="relative">
                <button
                  onClick={() => setAgentDropdownOpen(!agentDropdownOpen)}
                  className="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border text-sm transition-colors"
                  style={{
                    borderColor: 'var(--border-primary)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: selectedAgentInfo.color }}
                    />
                    <span className="font-medium">{selectedAgentInfo.label}</span>
                  </div>
                  <ChevronDown
                    className="h-4 w-4 transition-transform"
                    style={{
                      color: 'var(--text-tertiary)',
                      transform: agentDropdownOpen ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </button>

                <AnimatePresence>
                  {agentDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-20 mt-1 w-full rounded-lg border overflow-hidden shadow-lg"
                      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
                    >
                      {AGENT_TYPES.map((agent) => (
                        <button
                          key={agent.id}
                          onClick={() => {
                            setAgentType(agent.id);
                            setAgentDropdownOpen(false);
                          }}
                          className="w-full flex items-start gap-3 px-3 py-2.5 text-left transition-colors hover:bg-[var(--bg-secondary)]"
                        >
                          <div
                            className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: agent.color }}
                          />
                          <div>
                            <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                              {agent.label}
                            </p>
                            <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                              {agent.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Prompt */}
            <div
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <label className="text-sm font-semibold mb-2 block" style={{ color: 'var(--text-primary)' }}>
                {t('playground.prompt.label', locale)}
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t('playground.prompt.placeholder', locale)}
                rows={4}
                className="w-full rounded-lg border px-3 py-2.5 text-sm resize-none outline-none transition-colors focus:ring-2 focus:ring-[#6366f1]/30"
                style={{
                  borderColor: 'var(--border-primary)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            {/* Tool Selection */}
            <div
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <label className="text-sm font-semibold mb-3 block" style={{ color: 'var(--text-primary)' }}>
                {t('playground.tools.label', locale)}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {TOOLS.map((tool) => {
                  const isActive = selectedTools.includes(tool.id);
                  const Icon = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => toggleTool(tool.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all"
                      style={{
                        borderColor: isActive ? '#6366f1' : 'var(--border-primary)',
                        background: isActive ? 'rgba(99,102,241,0.10)' : 'var(--bg-secondary)',
                        color: isActive ? '#6366f1' : 'var(--text-secondary)',
                      }}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium truncate">{tool.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Speed Control */}
            <div
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                  <Gauge className="h-4 w-4" style={{ color: 'var(--text-tertiary)' }} />
                  Simulation Speed
                </label>
                <span
                  className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                >
                  {speed.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={3}
                step={0.5}
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-[#6366f1]"
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                <span>0.5x</span>
                <span>1.5x</span>
                <span>3x</span>
              </div>
            </div>

            {/* Comparison Toggle */}
            <div
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="w-full flex items-center justify-between"
              >
                <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Agent vs Chatbot Comparison
                </span>
                {showComparison ? (
                  <ToggleRight className="h-6 w-6" style={{ color: '#6366f1' }} />
                ) : (
                  <ToggleLeft className="h-6 w-6" style={{ color: 'var(--text-tertiary)' }} />
                )}
              </button>
            </div>

            {/* Run / Reset Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleRun}
                disabled={!prompt.trim() || isRunning}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: isRunning
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                    : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: !prompt.trim() || isRunning ? 'none' : '0 4px 14px rgba(99,102,241,0.35)',
                }}
              >
                {isRunning ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                {isRunning ? 'Running...' : t('playground.run', locale)}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  borderColor: 'var(--border-primary)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                }}
              >
                <RotateCcw className="h-4 w-4" />
                {t('playground.reset', locale)}
              </button>
            </div>
          </motion.div>

          {/* ---- RIGHT PANEL: Output ---- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Comparison view or Agent-only view */}
            {showComparison && isFinished ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Chatbot side */}
                <div
                  className="rounded-xl border overflow-hidden"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-3 border-b"
                    style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-tertiary)' }}
                  >
                    <MessageSquare className="h-4 w-4" style={{ color: '#f97316' }} />
                    <span className="text-sm font-semibold" style={{ color: '#f97316' }}>
                      Traditional Chatbot
                    </span>
                  </div>
                  <div className="p-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-sm whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                        {chatbotResponse}
                      </p>
                      <div className="mt-4 flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: '#f97316' }} />
                        <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          No reasoning, no tools, no memory
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Agent side summary */}
                <div
                  className="rounded-xl border overflow-hidden"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-3 border-b"
                    style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-tertiary)' }}
                  >
                    <Bot className="h-4 w-4" style={{ color: '#6366f1' }} />
                    <span className="text-sm font-semibold" style={{ color: '#6366f1' }}>
                      AI Agent
                    </span>
                  </div>
                  <div className="p-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {steps.length > 0 && (
                        <p className="text-sm whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                          {steps[steps.length - 1].content}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: '#6366f1' }} />
                        <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          {steps.length} reasoning steps, tool usage, memory
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Agent Steps */}
            <div
              className="rounded-xl border overflow-hidden"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              {/* Steps header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-tertiary)' }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {t('playground.steps', locale)}
                  </span>
                </div>
                {steps.length > 0 && (
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-tertiary)' }}
                  >
                    {visibleCount}/{steps.length}
                  </span>
                )}
              </div>

              {/* Steps content */}
              <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                {steps.length === 0 && !isRunning ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: 'var(--bg-tertiary)' }}
                    >
                      <Bot className="h-8 w-8" style={{ color: 'var(--text-tertiary)' }} />
                    </div>
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                      No agent steps yet
                    </p>
                    <p className="text-xs max-w-[240px]" style={{ color: 'var(--text-tertiary)' }}>
                      Enter a prompt and click &quot;Run Agent&quot;, or try one of the quick examples above
                    </p>
                  </div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {steps.slice(0, visibleCount).map((step, index) => {
                      const meta = STEP_META[step.type];
                      const Icon = meta.icon;
                      return (
                        <motion.div
                          key={`${step.type}-${index}`}
                          initial={{ opacity: 0, y: 16, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.97 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="rounded-lg border overflow-hidden"
                          style={{
                            borderColor: `${meta.color}30`,
                            background: meta.bg,
                          }}
                        >
                          {/* Step header */}
                          <div className="flex items-center gap-2 px-3 py-2">
                            <div
                              className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                              style={{ background: `${meta.color}20` }}
                            >
                              <span style={{ color: meta.color }}><Icon className="h-3.5 w-3.5" /></span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: meta.color }}>
                              {meta.label}
                            </span>
                            <span className="text-xs ml-auto font-mono" style={{ color: 'var(--text-tertiary)' }}>
                              Step {index + 1}
                            </span>
                          </div>
                          {/* Step content */}
                          <div className="px-3 pb-3">
                            <p
                              className={`text-sm whitespace-pre-wrap leading-relaxed ${
                                step.type === 'tool-call' || step.type === 'tool-result' ? 'font-mono text-xs' : ''
                              }`}
                              style={{
                                color: 'var(--text-secondary)',
                                ...(step.type === 'tool-call' || step.type === 'tool-result'
                                  ? { background: 'var(--bg-code)', padding: '8px 10px', borderRadius: '6px' }
                                  : {}),
                              }}
                            >
                              {step.content}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                )}

                {/* Loading indicator */}
                {isRunning && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 px-3 py-2"
                  >
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#6366f1' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#6366f1' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#6366f1' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>
                      {t('playground.thinking', locale)}
                    </span>
                  </motion.div>
                )}

                {/* Finished indicator */}
                {isFinished && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(52,211,153,0.08)' }}
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: '#34d399' }} />
                    <span className="text-xs font-semibold" style={{ color: '#34d399' }}>
                      Simulation complete -- {steps.length} steps executed
                    </span>
                  </motion.div>
                )}

                <div ref={stepsEndRef} />
              </div>
            </div>

            {/* Step type legend */}
            {steps.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 rounded-xl border p-4"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Step Types
                </p>
                <div className="flex flex-wrap gap-3">
                  {(Object.entries(STEP_META) as [AgentStep['type'], typeof STEP_META[AgentStep['type']]][]).map(([type, meta]) => {
                    const Icon = meta.icon;
                    return (
                      <div key={type} className="flex items-center gap-1.5">
                        <span style={{ color: meta.color }}><Icon className="h-3 w-3" /></span>
                        <span className="text-xs" style={{ color: meta.color }}>
                          {meta.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
