import type { LessonContentData } from './content';

export const batch7Contents: Record<string, LessonContentData> = {
  // ─────────────────────────────────────────────
  // 1. Reactive vs Deliberative Agents
  // ─────────────────────────────────────────────
  'reactive-vs-deliberative-agents': {
    beginnerDefinition: {
      en: 'Reactive agents respond instantly to what they sense without thinking ahead, like a thermostat turning on heat when it is cold. Deliberative agents think, plan, and reason before acting, like a chess player considering future moves. Most modern AI agents combine both approaches.',
      ar: 'الوكلاء التفاعليون يستجيبون فوراً لما يستشعرونه دون التفكير مسبقاً، مثل منظم الحرارة الذي يشغل التدفئة عندما يكون الجو بارداً. الوكلاء التداوليون يفكرون ويخططون ويستدلون قبل التصرف، مثل لاعب شطرنج يدرس الحركات المستقبلية. معظم وكلاء الذكاء الاصطناعي الحديثة تجمع بين النهجين.',
    },
    technicalDefinition: {
      en: 'Reactive agents implement stimulus-response mappings (condition-action rules) without maintaining internal world models or performing search over future states. Deliberative agents maintain symbolic world models, use planning algorithms (e.g., STRIPS, HTN, PDDL-based planners), and reason over goal hierarchies before selecting actions. Hybrid architectures like the BDI (Belief-Desire-Intention) model layer reactive behaviors for time-critical responses atop deliberative planning for complex goals.',
      ar: 'الوكلاء التفاعليون ينفذون ربطاً بين المحفزات والاستجابات (قواعد الشرط-الفعل) دون الاحتفاظ بنماذج عالم داخلية أو إجراء بحث في الحالات المستقبلية. الوكلاء التداوليون يحتفظون بنماذج عالم رمزية ويستخدمون خوارزميات التخطيط (مثل STRIPS وHTN ومخططات PDDL) ويستدلون عبر تسلسلات الأهداف قبل اختيار الإجراءات. البنى الهجينة مثل نموذج BDI (المعتقد-الرغبة-النية) تضع طبقة سلوكيات تفاعلية للاستجابات الحرجة زمنياً فوق التخطيط التداولي للأهداف المعقدة.',
    },
    analogy: {
      en: 'A reactive agent is like a goalkeeper who dives instantly when the ball comes — pure reflex, no time to think. A deliberative agent is like a team coach who studies opponent footage, designs plays, and creates a game strategy before the match. The best teams have both: reflexive goalkeepers AND strategic coaches. Similarly, the best AI agents combine fast reactive responses with deeper deliberative planning.',
      ar: 'الوكيل التفاعلي مثل حارس المرمى الذي يقفز فوراً عندما تأتي الكرة — رد فعل محض، لا وقت للتفكير. الوكيل التداولي مثل مدرب الفريق الذي يدرس تسجيلات الخصم ويصمم خططاً ويضع استراتيجية اللعب قبل المباراة. أفضل الفرق لديها الاثنان: حراس مرمى بردود أفعال سريعة ومدربون استراتيجيون. وبالمثل، أفضل وكلاء الذكاء الاصطناعي تجمع بين الاستجابات التفاعلية السريعة والتخطيط التداولي الأعمق.',
    },
    explanation: {
      en: [
        'Reactive agents are the simplest form of intelligent agents. They operate on condition-action rules: "if X is detected, do Y." There is no internal state, no memory of past events, and no prediction of future consequences. Brooks\' subsumption architecture is a classic example, where layers of simple behaviors produce complex-looking actions without any central planning.',
        'Deliberative agents take the opposite approach. They maintain an internal model of the world, set goals, generate plans to achieve those goals, and then execute plans step by step. Classical AI planning systems like STRIPS formalize this: given an initial state and a goal state, find a sequence of actions that transforms one into the other.',
        'The key trade-off is speed versus sophistication. Reactive agents respond in milliseconds but cannot handle novel situations that their rules do not cover. Deliberative agents can solve complex, multi-step problems but may be too slow for real-time demands. This is known as the "thinking vs. acting" dilemma.',
        'Hybrid architectures resolve this tension by combining both approaches in layers. The bottom layer handles urgent, time-critical reactions (e.g., safety checks, input validation). Middle layers manage routine behaviors. The top layer performs deliberative planning for complex goals. Information flows both up and down between layers.',
        'In modern LLM-based agents, this distinction maps naturally. Simple tool calls based on pattern matching are reactive. Chain-of-thought reasoning, ReAct loops, and multi-step planning are deliberative. Frameworks like LangGraph let you design agents that blend both: quick responses for simple queries and deep planning for complex tasks.',
      ],
      ar: [
        'الوكلاء التفاعليون هم أبسط أشكال الوكلاء الأذكياء. يعملون على قواعد الشرط-الفعل: "إذا تم اكتشاف X، افعل Y." لا توجد حالة داخلية ولا ذاكرة لأحداث ماضية ولا تنبؤ بالعواقب المستقبلية. بنية الاحتواء لبروكس هي مثال كلاسيكي، حيث تنتج طبقات من السلوكيات البسيطة إجراءات تبدو معقدة دون أي تخطيط مركزي.',
        'الوكلاء التداوليون يتبعون النهج المعاكس. يحتفظون بنموذج داخلي للعالم ويضعون أهدافاً ويولدون خططاً لتحقيق تلك الأهداف ثم ينفذون الخطط خطوة بخطوة. أنظمة التخطيط الكلاسيكية في الذكاء الاصطناعي مثل STRIPS تصيغ هذا رسمياً: بالنظر إلى حالة أولية وحالة هدف، جد تسلسل إجراءات يحول إحداهما إلى الأخرى.',
        'المقايضة الرئيسية هي بين السرعة والتطور. الوكلاء التفاعليون يستجيبون في أجزاء من الثانية لكن لا يمكنهم التعامل مع المواقف الجديدة التي لا تغطيها قواعدهم. الوكلاء التداوليون يمكنهم حل مشاكل معقدة متعددة الخطوات لكن قد يكونون بطيئين جداً للمتطلبات الفورية. يُعرف هذا بمعضلة "التفكير مقابل التصرف".',
        'البنى الهجينة تحل هذا التوتر بدمج النهجين في طبقات. الطبقة السفلية تتعامل مع ردود الفعل العاجلة والحرجة زمنياً (مثل فحوصات السلامة والتحقق من المدخلات). الطبقات الوسطى تدير السلوكيات الروتينية. الطبقة العليا تنفذ التخطيط التداولي للأهداف المعقدة. تتدفق المعلومات صعوداً ونزولاً بين الطبقات.',
        'في وكلاء LLM الحديثة، ينطبق هذا التمييز بشكل طبيعي. استدعاءات الأدوات البسيطة المبنية على مطابقة الأنماط تفاعلية. الاستدلال بسلسلة الأفكار وحلقات ReAct والتخطيط متعدد الخطوات تداولية. أطر العمل مثل LangGraph تتيح لك تصميم وكلاء تمزج بين الاثنين: استجابات سريعة للاستعلامات البسيطة وتخطيط عميق للمهام المعقدة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `# Reactive agent: simple condition-action rules
class ReactiveAgent:
    """Stimulus-response agent with no internal state."""
    def __init__(self, rules: list[tuple]):
        self.rules = rules  # [(condition_fn, action_fn), ...]

    def act(self, percept: dict) -> str:
        for condition, action in self.rules:
            if condition(percept):
                return action(percept)
        return "no matching rule"

# Deliberative agent: maintains world model and plans
class DeliberativeAgent:
    """Goal-based agent with planning capability."""
    def __init__(self, model, tools, goal: str):
        self.model = model
        self.tools = tools
        self.goal = goal
        self.world_state = {}
        self.plan = []

    def perceive(self, observation: dict):
        self.world_state.update(observation)

    def plan_actions(self) -> list[str]:
        prompt = f"""Current state: {self.world_state}
Goal: {self.goal}
Available tools: {[t['name'] for t in self.tools]}
Create a step-by-step plan to achieve the goal."""
        response = self.model.invoke(prompt)
        self.plan = response.split("\\n")
        return self.plan

    def execute_next(self) -> str:
        if not self.plan:
            self.plan_actions()
        step = self.plan.pop(0)
        return self.execute_step(step)

    def execute_step(self, step: str) -> str:
        # Match step to tool and execute
        for tool in self.tools:
            if tool["name"] in step.lower():
                return tool["func"](step)
        return f"Executed: {step}"

# Hybrid agent combining both approaches
class HybridAgent:
    """Combines reactive safety checks with deliberative planning."""
    def __init__(self, reactive_rules, deliberative_agent):
        self.reactive = ReactiveAgent(reactive_rules)
        self.deliberative = deliberative_agent

    def act(self, percept: dict) -> str:
        # Layer 1: Reactive safety check (fast)
        reactive_result = self.reactive.act(percept)
        if reactive_result != "no matching rule":
            return f"[REACTIVE] {reactive_result}"
        # Layer 2: Deliberative planning (slow but flexible)
        self.deliberative.perceive(percept)
        return f"[DELIBERATIVE] {self.deliberative.execute_next()}"`,
      description: {
        en: 'Three agent types: a reactive agent using condition-action rules, a deliberative agent with world model and planning, and a hybrid agent combining both approaches in layers.',
        ar: 'ثلاثة أنواع من الوكلاء: وكيل تفاعلي يستخدم قواعد الشرط-الفعل، ووكيل تداولي بنموذج عالم وتخطيط، ووكيل هجين يجمع بين النهجين في طبقات.',
      },
    },
    commonMistakes: {
      en: [
        'Using a purely reactive architecture for tasks that require multi-step planning, resulting in agents that get stuck in loops or fail on novel situations.',
        'Over-engineering with full deliberative planning for simple tasks where fast condition-action rules would suffice, wasting compute and adding latency.',
        'Not implementing a fallback mechanism in reactive agents for unrecognized inputs, causing silent failures.',
        'Ignoring the interaction between reactive and deliberative layers in hybrid agents, leading to conflicting actions.',
      ],
      ar: [
        'استخدام بنية تفاعلية بحتة للمهام التي تتطلب تخطيطاً متعدد الخطوات، مما يؤدي إلى وكلاء يعلقون في حلقات أو يفشلون في المواقف الجديدة.',
        'الإفراط في الهندسة بتخطيط تداولي كامل للمهام البسيطة حيث تكفي قواعد الشرط-الفعل السريعة، مما يهدر الحوسبة ويضيف تأخيراً.',
        'عدم تنفيذ آلية احتياطية في الوكلاء التفاعليين للمدخلات غير المعروفة، مما يسبب إخفاقات صامتة.',
        'تجاهل التفاعل بين الطبقات التفاعلية والتداولية في الوكلاء الهجينة، مما يؤدي إلى إجراءات متعارضة.',
      ],
    },
    bestPractices: {
      en: [
        'Use hybrid architectures: reactive layers for safety-critical fast responses and deliberative layers for complex reasoning tasks.',
        'Design reactive rules to be the first line of defense for input validation, safety guardrails, and common queries.',
        'Implement deliberative planning with timeout mechanisms to prevent agents from spending too long on planning before acting.',
        'Profile your agent to understand which queries need reactive vs. deliberative handling and route accordingly.',
      ],
      ar: [
        'استخدم البنى الهجينة: طبقات تفاعلية للاستجابات السريعة الحرجة للسلامة وطبقات تداولية لمهام الاستدلال المعقدة.',
        'صمم القواعد التفاعلية لتكون خط الدفاع الأول للتحقق من المدخلات وحواجز السلامة والاستعلامات الشائعة.',
        'نفذ التخطيط التداولي مع آليات المهلة الزمنية لمنع الوكلاء من قضاء وقت طويل في التخطيط قبل التصرف.',
        'حلل أداء وكيلك لفهم أي الاستعلامات تحتاج معالجة تفاعلية مقابل تداولية ووجّهها وفقاً لذلك.',
      ],
    },
    references: [
      { title: 'Russell & Norvig - Artificial Intelligence: A Modern Approach', url: 'https://aima.cs.berkeley.edu/' },
      { title: 'Brooks - A Robust Layered Control System for a Mobile Robot', url: 'https://people.csail.mit.edu/brooks/papers/AIM-864.pdf' },
      { title: 'BDI Agent Architecture', url: 'https://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention_software_model' },
    ],
    quiz: [
      {
        id: 'batch7-q1',
        question: {
          en: 'What is the main limitation of a purely reactive agent?',
          ar: 'ما هو القيد الرئيسي للوكيل التفاعلي البحت؟',
        },
        options: {
          en: [
            'It is too slow to respond to inputs',
            'It cannot handle situations not covered by its predefined rules',
            'It requires too much memory',
            'It cannot interact with external tools',
          ],
          ar: [
            'بطيء جداً في الاستجابة للمدخلات',
            'لا يمكنه التعامل مع المواقف غير المشمولة بقواعده المحددة مسبقاً',
            'يتطلب ذاكرة كبيرة جداً',
            'لا يمكنه التفاعل مع الأدوات الخارجية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Reactive agents only respond to predefined condition-action rules. They have no world model or planning capability, so they cannot handle novel situations that fall outside their rule set.',
          ar: 'الوكلاء التفاعليون يستجيبون فقط لقواعد الشرط-الفعل المحددة مسبقاً. ليس لديهم نموذج عالم أو قدرة تخطيط، لذا لا يمكنهم التعامل مع المواقف الجديدة التي تقع خارج مجموعة قواعدهم.',
        },
      },
      {
        id: 'batch7-q2',
        question: {
          en: 'In a hybrid agent architecture, what is the role of the reactive layer?',
          ar: 'في بنية الوكيل الهجين، ما هو دور الطبقة التفاعلية؟',
        },
        options: {
          en: [
            'To perform long-term strategic planning',
            'To handle time-critical responses like safety checks and input validation',
            'To store memories of past interactions',
            'To communicate with external databases',
          ],
          ar: [
            'تنفيذ التخطيط الاستراتيجي طويل المدى',
            'التعامل مع الاستجابات الحرجة زمنياً مثل فحوصات السلامة والتحقق من المدخلات',
            'تخزين ذكريات التفاعلات السابقة',
            'التواصل مع قواعد البيانات الخارجية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'In hybrid architectures, the reactive layer provides fast, time-critical responses for safety checks, input validation, and common patterns, while the deliberative layer handles complex reasoning and planning.',
          ar: 'في البنى الهجينة، توفر الطبقة التفاعلية استجابات سريعة وحرجة زمنياً لفحوصات السلامة والتحقق من المدخلات والأنماط الشائعة، بينما تتولى الطبقة التداولية الاستدلال المعقد والتخطيط.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Cognitive Architectures
  // ─────────────────────────────────────────────
  'cognitive-architectures': {
    beginnerDefinition: {
      en: 'A cognitive architecture is a blueprint for building an AI mind. Just as a building architect designs how rooms, hallways, and floors connect, a cognitive architect designs how memory, reasoning, learning, and perception work together in an AI agent. Famous examples include SOAR and ACT-R, and modern LLM agents draw inspiration from these designs.',
      ar: 'البنية المعرفية هي مخطط لبناء عقل ذكاء اصطناعي. تماماً كما يصمم مهندس المباني كيفية ربط الغرف والممرات والطوابق، يصمم مهندس البنية المعرفية كيفية عمل الذاكرة والاستدلال والتعلم والإدراك معاً في وكيل ذكاء اصطناعي. من الأمثلة الشهيرة SOAR وACT-R، ووكلاء LLM الحديثة تستلهم من هذه التصاميم.',
    },
    technicalDefinition: {
      en: 'A cognitive architecture is a computational framework that defines the structural and functional organization of an intelligent agent, specifying how different cognitive modules (perception, memory systems, reasoning, learning, and motor control) interact. SOAR uses a production system with chunking-based learning over a universal subgoaling mechanism. ACT-R employs a modular architecture with declarative and procedural memory modules connected through a central production system with activation-based retrieval. Modern approaches adapt these principles using LLMs as the reasoning core, vector databases as long-term memory, and tool-use APIs as the action module.',
      ar: 'البنية المعرفية هي إطار حسابي يحدد التنظيم البنيوي والوظيفي لوكيل ذكي، محدداً كيفية تفاعل الوحدات المعرفية المختلفة (الإدراك وأنظمة الذاكرة والاستدلال والتعلم والتحكم الحركي). يستخدم SOAR نظام إنتاج مع تعلم قائم على التجميع عبر آلية التهديف الفرعي العامة. يستخدم ACT-R بنية وحدية مع وحدات ذاكرة تصريحية وإجرائية متصلة عبر نظام إنتاج مركزي مع استرجاع قائم على التنشيط. الأساليب الحديثة تكيف هذه المبادئ باستخدام نماذج اللغة الكبيرة كنواة استدلال وقواعد بيانات متجهة كذاكرة طويلة المدى وواجهات أدوات كوحدة الفعل.',
    },
    analogy: {
      en: 'Think of a cognitive architecture like the organizational chart of a company. The CEO (central executive) coordinates between departments: Memory (filing cabinets and databases), Perception (the reception desk taking in information), Reasoning (the strategy team analyzing data), and Action (the operations team executing plans). SOAR is like a lean startup where everyone works through a single decision-making process. ACT-R is like a larger company with specialized departments that communicate through formal channels. Modern LLM-based agents are like companies that outsource their thinking to a brilliant consultant (the LLM).',
      ar: 'فكر في البنية المعرفية مثل الهيكل التنظيمي لشركة. المدير التنفيذي (المنفذ المركزي) ينسق بين الأقسام: الذاكرة (خزائن الملفات وقواعد البيانات)، والإدراك (مكتب الاستقبال الذي يستلم المعلومات)، والاستدلال (فريق الاستراتيجية الذي يحلل البيانات)، والفعل (فريق العمليات الذي ينفذ الخطط). SOAR مثل شركة ناشئة رشيقة حيث يعمل الجميع عبر عملية صنع قرار واحدة. ACT-R مثل شركة أكبر بأقسام متخصصة تتواصل عبر قنوات رسمية. وكلاء LLM الحديثة مثل شركات تستعين بمصادر خارجية لتفكيرها من استشاري بارع (نموذج اللغة الكبير).',
    },
    explanation: {
      en: [
        'Cognitive architectures emerged from the goal of creating artificial general intelligence by modeling the structure of human cognition. Rather than building narrow AI for specific tasks, researchers designed general-purpose frameworks that could learn, reason, and act across many domains.',
        'SOAR (State, Operator, And Result), developed by Allen Newell and John Laird at the University of Michigan, organizes all problem-solving as search through a problem space. When SOAR reaches an impasse (cannot decide what to do), it creates a subgoal to resolve the impasse. Solutions to impasses are learned as "chunks" (new production rules), enabling the system to improve over time.',
        'ACT-R (Adaptive Control of Thought—Rational), developed by John Anderson at Carnegie Mellon, models cognition as the interaction between declarative memory (facts and knowledge) and procedural memory (skills and rules). It uses activation-based retrieval: memories that are recent, frequent, or contextually relevant have higher activation and are retrieved faster, mimicking human memory patterns.',
        'Modern LLM-based agent architectures draw from these traditions. The LLM serves as the reasoning engine (like SOAR\'s production system or ACT-R\'s procedural module). Vector databases provide long-term declarative memory with similarity-based retrieval (analogous to ACT-R\'s activation-based retrieval). The prompt and context window function as working memory. Tool APIs serve as the motor/action module.',
        'Key design principles from cognitive architectures that apply to modern agents include: separation of declarative and procedural knowledge, working memory limitations (context window management), goal-directed behavior with subgoaling, learning from experience (fine-tuning, in-context learning), and the importance of attention mechanisms for focusing on relevant information.',
      ],
      ar: [
        'ظهرت البنى المعرفية من هدف إنشاء ذكاء اصطناعي عام من خلال نمذجة بنية الإدراك البشري. بدلاً من بناء ذكاء اصطناعي ضيق لمهام محددة، صمم الباحثون أطراً عامة الغرض يمكنها التعلم والاستدلال والتصرف عبر مجالات متعددة.',
        'SOAR (الحالة والمعامل والنتيجة)، طوره ألن نيويل وجون ليرد في جامعة ميشيغان، ينظم كل حل المشكلات كبحث عبر فضاء المشكلة. عندما يصل SOAR إلى طريق مسدود (لا يمكنه تحديد ما يجب فعله)، ينشئ هدفاً فرعياً لحل المأزق. يتم تعلم حلول المآزق كـ"تجميعات" (قواعد إنتاج جديدة)، مما يمكّن النظام من التحسن مع الوقت.',
        'ACT-R (التحكم التكيفي للفكر—العقلاني)، طوره جون أندرسون في جامعة كارنيجي ميلون، يُنمذج الإدراك كتفاعل بين الذاكرة التصريحية (الحقائق والمعرفة) والذاكرة الإجرائية (المهارات والقواعد). يستخدم استرجاعاً قائماً على التنشيط: الذكريات الحديثة أو المتكررة أو ذات الصلة سياقياً لها تنشيط أعلى ويتم استرجاعها بشكل أسرع، محاكياً أنماط الذاكرة البشرية.',
        'بنى وكلاء LLM الحديثة تستمد من هذه التقاليد. يعمل نموذج اللغة الكبير كمحرك استدلال (مثل نظام إنتاج SOAR أو وحدة ACT-R الإجرائية). توفر قواعد البيانات المتجهة ذاكرة تصريحية طويلة المدى مع استرجاع قائم على التشابه (مماثلة لاسترجاع ACT-R القائم على التنشيط). يعمل السياق ونافذة السياق كذاكرة عاملة. تعمل واجهات الأدوات كوحدة الحركة/الفعل.',
        'المبادئ التصميمية الرئيسية من البنى المعرفية التي تنطبق على الوكلاء الحديثين تشمل: فصل المعرفة التصريحية عن الإجرائية، وقيود الذاكرة العاملة (إدارة نافذة السياق)، والسلوك الموجه بالأهداف مع التهديف الفرعي، والتعلم من الخبرة (الضبط الدقيق والتعلم في السياق)، وأهمية آليات الانتباه للتركيز على المعلومات ذات الصلة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `# Cognitive architecture inspired agent with separate memory systems
from dataclasses import dataclass, field
from typing import Any

@dataclass
class Memory:
    """Declarative memory with activation-based retrieval (ACT-R inspired)."""
    items: list[dict] = field(default_factory=list)

    def store(self, fact: str, metadata: dict = None):
        self.items.append({
            "fact": fact,
            "activation": 1.0,
            "access_count": 0,
            "metadata": metadata or {}
        })

    def retrieve(self, query: str, top_k: int = 3) -> list[str]:
        # Boost activation for relevant items (simplified)
        scored = []
        for item in self.items:
            relevance = sum(1 for w in query.lower().split()
                         if w in item["fact"].lower())
            score = relevance + item["activation"]
            scored.append((score, item))
            item["activation"] *= 0.95  # Decay
        scored.sort(key=lambda x: x[0], reverse=True)
        # Boost retrieved items
        for _, item in scored[:top_k]:
            item["activation"] += 0.5
            item["access_count"] += 1
        return [item["fact"] for _, item in scored[:top_k]]

@dataclass
class CognitiveAgent:
    """Agent with SOAR-inspired goal management and ACT-R-inspired memory."""
    llm: Any
    declarative_memory: Memory = field(default_factory=Memory)
    goal_stack: list[str] = field(default_factory=list)
    procedures: dict = field(default_factory=dict)

    def set_goal(self, goal: str):
        self.goal_stack.append(goal)

    def process(self, input_text: str) -> str:
        # 1. Perception: encode input
        context = f"Input: {input_text}"

        # 2. Memory retrieval
        relevant = self.declarative_memory.retrieve(input_text)
        context += f"\\nRelevant knowledge: {relevant}"

        # 3. Goal check (SOAR-style impasse detection)
        current_goal = self.goal_stack[-1] if self.goal_stack else "respond helpfully"
        context += f"\\nCurrent goal: {current_goal}"

        # 4. Reasoning (LLM as production system)
        response = self.llm.invoke(
            f"{context}\\nDecide action and respond."
        )

        # 5. Learning: store interaction in memory
        self.declarative_memory.store(
            f"Q: {input_text} -> A: {response[:100]}"
        )
        return response`,
      description: {
        en: 'A cognitive architecture-inspired agent combining ACT-R style activation-based memory retrieval with SOAR-style goal stack management, using an LLM as the central reasoning engine.',
        ar: 'وكيل مستوحى من البنية المعرفية يجمع بين استرجاع الذاكرة القائم على التنشيط بأسلوب ACT-R وإدارة مكدس الأهداف بأسلوب SOAR، مستخدماً نموذج لغة كبير كمحرك استدلال مركزي.',
      },
    },
    commonMistakes: {
      en: [
        'Treating the LLM context window as unlimited working memory without implementing summarization or compression strategies for long interactions.',
        'Not implementing memory decay or relevance scoring, causing old irrelevant information to pollute retrieval results.',
        'Ignoring the distinction between declarative knowledge (facts) and procedural knowledge (how-to), leading to poorly organized agent knowledge bases.',
      ],
      ar: [
        'معاملة نافذة سياق نموذج اللغة الكبير كذاكرة عاملة غير محدودة دون تنفيذ استراتيجيات تلخيص أو ضغط للتفاعلات الطويلة.',
        'عدم تنفيذ تناقص الذاكرة أو تسجيل الصلة، مما يتسبب في تلويث المعلومات القديمة غير ذات الصلة لنتائج الاسترجاع.',
        'تجاهل التمييز بين المعرفة التصريحية (الحقائق) والمعرفة الإجرائية (كيفية الفعل)، مما يؤدي إلى قواعد معرفة وكيل سيئة التنظيم.',
      ],
    },
    bestPractices: {
      en: [
        'Implement separate memory systems: working memory (context window), episodic memory (conversation history), and semantic memory (knowledge base) for better information management.',
        'Use activation-based or recency-weighted retrieval to ensure the most relevant memories surface during reasoning.',
        'Design goal management with subgoaling: when the agent encounters an impasse, it should decompose the problem into smaller subgoals.',
        'Apply cognitive load principles: limit the amount of information in the active context to what is relevant, summarizing or archiving the rest.',
      ],
      ar: [
        'نفذ أنظمة ذاكرة منفصلة: ذاكرة عاملة (نافذة السياق)، وذاكرة عرضية (تاريخ المحادثة)، وذاكرة دلالية (قاعدة المعرفة) لإدارة أفضل للمعلومات.',
        'استخدم استرجاعاً قائماً على التنشيط أو مرجحاً بالحداثة لضمان ظهور الذكريات الأكثر صلة أثناء الاستدلال.',
        'صمم إدارة الأهداف مع التهديف الفرعي: عندما يواجه الوكيل طريقاً مسدوداً، يجب أن يفكك المشكلة إلى أهداف فرعية أصغر.',
        'طبّق مبادئ الحمل المعرفي: حدد كمية المعلومات في السياق النشط بما هو ذو صلة، ولخص أو أرشف الباقي.',
      ],
    },
    references: [
      { title: 'SOAR Cognitive Architecture', url: 'https://soar.eecs.umich.edu/' },
      { title: 'ACT-R Cognitive Architecture', url: 'http://act-r.psy.cmu.edu/' },
      { title: 'Cognitive Architectures for Language Agents (CoALA)', url: 'https://arxiv.org/abs/2309.02427' },
    ],
    quiz: [
      {
        id: 'batch7-q3',
        question: {
          en: 'In the SOAR cognitive architecture, what happens when the agent reaches an impasse?',
          ar: 'في بنية SOAR المعرفية، ماذا يحدث عندما يصل الوكيل إلى طريق مسدود؟',
        },
        options: {
          en: [
            'The agent shuts down and restarts',
            'The agent creates a subgoal to resolve the impasse',
            'The agent asks the user for help',
            'The agent randomly selects an action',
          ],
          ar: [
            'يتوقف الوكيل ويعيد التشغيل',
            'ينشئ الوكيل هدفاً فرعياً لحل المأزق',
            'يطلب الوكيل المساعدة من المستخدم',
            'يختار الوكيل إجراءً عشوائياً',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'SOAR uses a universal subgoaling mechanism. When the agent reaches an impasse (cannot decide on an action), it automatically creates a subgoal to resolve the impasse. Solutions are then "chunked" into new production rules for future use.',
          ar: 'يستخدم SOAR آلية تهديف فرعي عامة. عندما يصل الوكيل إلى طريق مسدود (لا يمكنه تحديد إجراء)، ينشئ تلقائياً هدفاً فرعياً لحل المأزق. يتم بعد ذلك "تجميع" الحلول في قواعد إنتاج جديدة للاستخدام المستقبلي.',
        },
      },
      {
        id: 'batch7-q4',
        question: {
          en: 'How does ACT-R\'s activation-based retrieval relate to modern LLM agent design?',
          ar: 'كيف يرتبط الاسترجاع القائم على التنشيط في ACT-R بتصميم وكلاء LLM الحديثة؟',
        },
        options: {
          en: [
            'It has no relation to modern agent design',
            'It inspired the transformer attention mechanism directly',
            'It is analogous to similarity-based retrieval in vector databases used for agent memory',
            'It is identical to the LLM tokenization process',
          ],
          ar: [
            'لا علاقة له بتصميم الوكلاء الحديث',
            'ألهم آلية الانتباه في المحولات مباشرة',
            'يماثل الاسترجاع القائم على التشابه في قواعد البيانات المتجهة المستخدمة لذاكرة الوكيل',
            'مطابق لعملية الترميز في نماذج اللغة الكبيرة',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'ACT-R retrieves memories based on activation levels (recency, frequency, context relevance). This is analogous to how modern LLM agents use vector databases with similarity-based retrieval, where more relevant memories are retrieved first based on embedding similarity.',
          ar: 'يسترجع ACT-R الذكريات بناءً على مستويات التنشيط (الحداثة والتكرار وصلة السياق). هذا يماثل كيفية استخدام وكلاء LLM الحديثة لقواعد البيانات المتجهة مع استرجاع قائم على التشابه، حيث يتم استرجاع الذكريات الأكثر صلة أولاً بناءً على تشابه التضمين.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. AutoGPT and BabyAGI Patterns
  // ─────────────────────────────────────────────
  'autogpt-babyagi-patterns': {
    beginnerDefinition: {
      en: 'AutoGPT and BabyAGI are pioneering autonomous agent designs that showed how an LLM can run itself in a loop: set goals, create tasks, execute them, and create new tasks based on results — all without human intervention. They introduced patterns like task queues, self-prompting, and autonomous goal decomposition that modern agent frameworks still use today.',
      ar: 'AutoGPT وBabyAGI هما تصميمان رائدان للوكلاء المستقلين أظهرا كيف يمكن لنموذج لغة كبير تشغيل نفسه في حلقة: تحديد الأهداف وإنشاء المهام وتنفيذها وإنشاء مهام جديدة بناءً على النتائج — كل ذلك دون تدخل بشري. قدما أنماطاً مثل قوائم المهام والتوجيه الذاتي وتفكيك الأهداف المستقل التي لا تزال أطر عمل الوكلاء الحديثة تستخدمها اليوم.',
    },
    technicalDefinition: {
      en: 'AutoGPT implements an autonomous agent loop with four core phases: goal interpretation, task planning, tool-augmented execution, and self-evaluation. It maintains a task queue, short-term memory (conversation context), and long-term memory (vector store). BabyAGI introduced a simpler three-step loop: task execution, result-based task creation, and priority-based task re-ordering. Both systems use self-prompting where the LLM generates its own next prompt based on previous results, creating an autonomous execution cycle that persists until the goal is achieved or resources are exhausted.',
      ar: 'ينفذ AutoGPT حلقة وكيل مستقل بأربع مراحل أساسية: تفسير الهدف، وتخطيط المهام، والتنفيذ المعزز بالأدوات، والتقييم الذاتي. يحتفظ بقائمة مهام وذاكرة قصيرة المدى (سياق المحادثة) وذاكرة طويلة المدى (مخزن متجهات). قدم BabyAGI حلقة أبسط من ثلاث خطوات: تنفيذ المهام وإنشاء مهام قائم على النتائج وإعادة ترتيب المهام حسب الأولوية. كلا النظامين يستخدمان التوجيه الذاتي حيث يولد نموذج اللغة الكبير موجهه التالي بناءً على النتائج السابقة، مما ينشئ دورة تنفيذ مستقلة تستمر حتى تحقيق الهدف أو نفاد الموارد.',
    },
    analogy: {
      en: 'AutoGPT is like a self-managing freelancer. You give them a project brief ("build me a website"), and they break it down into tasks, work through them one by one, check their own work, and add new tasks as they discover what else needs to be done. BabyAGI is like a simpler version: a to-do list app that not only tracks tasks but also figures out what new tasks to add after each one is completed, and automatically re-prioritizes everything.',
      ar: 'AutoGPT مثل موظف مستقل يدير نفسه. تعطيه ملخص مشروع ("ابنِ لي موقعاً إلكترونياً")، فيقسمه إلى مهام ويعمل عليها واحدة تلو الأخرى ويتحقق من عمله ويضيف مهاماً جديدة كلما اكتشف ما يجب فعله أيضاً. BabyAGI مثل نسخة أبسط: تطبيق قائمة مهام لا يتتبع المهام فحسب بل يحدد أيضاً المهام الجديدة التي يجب إضافتها بعد إتمام كل واحدة ويعيد ترتيب الأولويات تلقائياً.',
    },
    explanation: {
      en: [
        'AutoGPT, created by Toran Bruce Richards in March 2023, was one of the first demonstrations of a fully autonomous LLM agent. It showed that by giving GPT-4 access to tools (web search, file operations, code execution) and running it in a loop, the model could pursue complex goals autonomously. The project went viral, becoming one of the fastest-growing GitHub repositories in history.',
        'The AutoGPT loop works as follows: (1) The user provides a high-level goal. (2) The agent generates a plan with numbered steps. (3) For each step, the agent selects and uses appropriate tools. (4) After execution, the agent evaluates the result and decides whether to continue, revise the plan, or declare the goal complete. (5) The cycle repeats until the goal is met or the budget is exhausted.',
        'BabyAGI, created by Yohei Nakajima, introduced a cleaner task management pattern. It uses three specialized LLM calls in a loop: an Execution Agent that performs the current task, a Task Creation Agent that generates new tasks based on results, and a Prioritization Agent that reorders the task queue. This separation of concerns made the system more predictable and easier to debug.',
        'Key design patterns from these systems that persist in modern frameworks include: the autonomous loop (perceive-think-act-reflect), task queue management, self-critique and reflection steps, long-term memory via vector stores, and budget/iteration limits as safety mechanisms. These patterns appear in LangChain agents, CrewAI, and many other modern frameworks.',
        'The main challenges these systems revealed include: goal drift (the agent gradually deviates from the original goal), infinite loops (the agent keeps creating new tasks without converging), high token costs (autonomous loops consume many LLM calls), and reliability issues (compound errors across many steps). Modern frameworks address these with better guardrails, human-in-the-loop checkpoints, and structured output formats.',
      ],
      ar: [
        'AutoGPT، أنشأه توران بروس ريتشاردز في مارس 2023، كان أحد أولى العروض التوضيحية لوكيل LLM مستقل بالكامل. أظهر أنه بإعطاء GPT-4 الوصول إلى أدوات (بحث الويب وعمليات الملفات وتنفيذ الأكواد) وتشغيله في حلقة، يمكن للنموذج متابعة أهداف معقدة بشكل مستقل. انتشر المشروع بسرعة ليصبح أحد أسرع مستودعات GitHub نمواً في التاريخ.',
        'تعمل حلقة AutoGPT كالتالي: (1) يقدم المستخدم هدفاً عالي المستوى. (2) يولد الوكيل خطة بخطوات مرقمة. (3) لكل خطوة، يختار الوكيل ويستخدم الأدوات المناسبة. (4) بعد التنفيذ، يقيّم الوكيل النتيجة ويقرر ما إذا كان سيستمر أو يراجع الخطة أو يعلن اكتمال الهدف. (5) تتكرر الدورة حتى تحقيق الهدف أو نفاد الميزانية.',
        'BabyAGI، أنشأه يوهي ناكاجيما، قدم نمط إدارة مهام أنظف. يستخدم ثلاث استدعاءات LLM متخصصة في حلقة: وكيل تنفيذ ينجز المهمة الحالية، ووكيل إنشاء مهام يولد مهاماً جديدة بناءً على النتائج، ووكيل ترتيب أولويات يعيد ترتيب قائمة المهام. فصل المسؤوليات هذا جعل النظام أكثر قابلية للتنبؤ وأسهل في التنقيح.',
        'أنماط التصميم الرئيسية من هذه الأنظمة التي تستمر في الأطر الحديثة تشمل: الحلقة المستقلة (إدراك-تفكير-تنفيذ-تأمل)، وإدارة قوائم المهام، وخطوات النقد الذاتي والتأمل، والذاكرة طويلة المدى عبر مخازن المتجهات، وحدود الميزانية/التكرار كآليات سلامة. تظهر هذه الأنماط في وكلاء LangChain وCrewAI والعديد من الأطر الحديثة الأخرى.',
        'التحديات الرئيسية التي كشفتها هذه الأنظمة تشمل: انحراف الهدف (ينحرف الوكيل تدريجياً عن الهدف الأصلي)، والحلقات اللانهائية (يستمر الوكيل في إنشاء مهام جديدة دون التقارب)، وتكاليف الرموز العالية (الحلقات المستقلة تستهلك استدعاءات LLM كثيرة)، ومشاكل الموثوقية (أخطاء مركبة عبر خطوات عديدة). تعالج الأطر الحديثة هذه بحواجز أفضل ونقاط تحقق بمشاركة بشرية وتنسيقات مخرجات منظمة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from collections import deque
from typing import Any

class BabyAGIPattern:
    """BabyAGI-style autonomous task management agent."""

    def __init__(self, llm: Any, tools: dict, max_iterations: int = 10):
        self.llm = llm
        self.tools = tools
        self.task_queue: deque = deque()
        self.completed_tasks: list[dict] = []
        self.max_iterations = max_iterations

    def run(self, objective: str) -> list[dict]:
        # Initialize with first task
        self.task_queue.append({
            "id": 1, "name": f"Develop a plan for: {objective}"
        })
        iteration = 0

        while self.task_queue and iteration < self.max_iterations:
            iteration += 1
            # Step 1: Pull the next task
            task = self.task_queue.popleft()
            print(f"Executing task {task['id']}: {task['name']}")

            # Step 2: Execute the task
            result = self._execute_task(task, objective)
            self.completed_tasks.append({**task, "result": result})

            # Step 3: Create new tasks based on result
            new_tasks = self._create_tasks(objective, task, result)

            # Step 4: Re-prioritize task queue
            for t in new_tasks:
                self.task_queue.append(t)
            self._prioritize_tasks(objective)

        return self.completed_tasks

    def _execute_task(self, task: dict, objective: str) -> str:
        context = "\\n".join(
            f"- {t['name']}: {t['result'][:100]}"
            for t in self.completed_tasks[-3:]
        )
        prompt = f"""Objective: {objective}
Completed work so far:
{context}
Current task: {task['name']}
Available tools: {list(self.tools.keys())}
Execute this task and return the result."""
        return self.llm.invoke(prompt)

    def _create_tasks(self, objective: str, task: dict, result: str) -> list:
        prompt = f"""Objective: {objective}
Just completed: {task['name']}
Result: {result[:200]}
Existing tasks: {[t['name'] for t in self.task_queue]}
What new tasks (if any) should be added? Return as a numbered list.
If the objective is complete, return NONE."""
        response = self.llm.invoke(prompt)
        if "NONE" in response.upper():
            return []
        next_id = max((t.get("id", 0) for t in self.completed_tasks), default=0) + 1
        tasks = []
        for line in response.strip().split("\\n"):
            line = line.strip().lstrip("0123456789.-) ")
            if line:
                tasks.append({"id": next_id, "name": line})
                next_id += 1
        return tasks

    def _prioritize_tasks(self, objective: str):
        if len(self.task_queue) <= 1:
            return
        names = [t["name"] for t in self.task_queue]
        prompt = f"""Objective: {objective}
Reprioritize these tasks (most important first):
{names}
Return as a numbered list."""
        response = self.llm.invoke(prompt)
        # Re-order queue based on LLM prioritization
        reordered = deque()
        for line in response.strip().split("\\n"):
            line = line.strip().lstrip("0123456789.-) ")
            for task in self.task_queue:
                if line and line.lower() in task["name"].lower():
                    reordered.append(task)
                    break
        # Add any tasks that weren't matched
        for task in self.task_queue:
            if task not in reordered:
                reordered.append(task)
        self.task_queue = reordered`,
      description: {
        en: 'A BabyAGI-style autonomous agent with task execution, task creation, and task prioritization running in a loop until the objective is achieved or the iteration limit is reached.',
        ar: 'وكيل مستقل بأسلوب BabyAGI مع تنفيذ المهام وإنشاء المهام وترتيب الأولويات يعمل في حلقة حتى تحقيق الهدف أو الوصول لحد التكرار.',
      },
    },
    commonMistakes: {
      en: [
        'Not setting iteration or budget limits, allowing the agent to run indefinitely and consume excessive API credits.',
        'Failing to detect goal drift — the agent gradually shifts its focus away from the original objective across many iterations.',
        'Storing all intermediate results in the prompt without summarization, eventually exceeding the context window limit.',
        'Not implementing a convergence check, so the agent keeps creating new tasks even when the objective is already met.',
      ],
      ar: [
        'عدم تعيين حدود التكرار أو الميزانية، مما يسمح للوكيل بالعمل إلى أجل غير مسمى واستهلاك أرصدة API مفرطة.',
        'الفشل في اكتشاف انحراف الهدف — ينقل الوكيل تركيزه تدريجياً بعيداً عن الهدف الأصلي عبر تكرارات عديدة.',
        'تخزين جميع النتائج الوسيطة في الموجه دون تلخيص، مما يتجاوز في النهاية حد نافذة السياق.',
        'عدم تنفيذ فحص التقارب، فيستمر الوكيل في إنشاء مهام جديدة حتى عندما يكون الهدف قد تحقق بالفعل.',
      ],
    },
    bestPractices: {
      en: [
        'Always set maximum iteration limits and token budget caps to prevent runaway autonomous loops.',
        'Implement a reflection step where the agent periodically re-evaluates whether it is still aligned with the original objective.',
        'Use task deduplication to prevent the agent from creating tasks that are identical or very similar to completed ones.',
        'Add human-in-the-loop checkpoints at critical decision points for high-stakes tasks.',
      ],
      ar: [
        'عيّن دائماً حدوداً قصوى للتكرار وسقوفاً لميزانية الرموز لمنع الحلقات المستقلة الجامحة.',
        'نفذ خطوة تأمل حيث يعيد الوكيل تقييم ما إذا كان لا يزال متوافقاً مع الهدف الأصلي بشكل دوري.',
        'استخدم إزالة تكرار المهام لمنع الوكيل من إنشاء مهام مطابقة أو مشابهة جداً للمهام المنجزة.',
        'أضف نقاط تحقق بمشاركة بشرية عند نقاط القرار الحرجة للمهام عالية المخاطر.',
      ],
    },
    references: [
      { title: 'AutoGPT GitHub Repository', url: 'https://github.com/Significant-Gravitas/AutoGPT' },
      { title: 'BabyAGI GitHub Repository', url: 'https://github.com/yoheinakajima/babyagi' },
      { title: 'Task-Driven Autonomous Agent (Yohei Nakajima)', url: 'https://yoheinakajima.com/task-driven-autonomous-agent-utilizing-gpt-4-pinecone-and-langchain-for-diverse-applications/' },
    ],
    quiz: [
      {
        id: 'batch7-q5',
        question: {
          en: 'What are the three specialized agents in the BabyAGI pattern?',
          ar: 'ما هم الوكلاء الثلاثة المتخصصون في نمط BabyAGI؟',
        },
        options: {
          en: [
            'Planner, Executor, and Reviewer',
            'Execution Agent, Task Creation Agent, and Prioritization Agent',
            'Manager, Worker, and Reporter',
            'Input Agent, Processing Agent, and Output Agent',
          ],
          ar: [
            'مخطط ومنفذ ومراجع',
            'وكيل التنفيذ ووكيل إنشاء المهام ووكيل الترتيب حسب الأولوية',
            'مدير وعامل ومُقرر',
            'وكيل المدخلات ووكيل المعالجة ووكيل المخرجات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'BabyAGI uses three specialized LLM calls in its loop: an Execution Agent that performs the current task, a Task Creation Agent that generates new tasks based on results, and a Prioritization Agent that reorders the task queue by importance.',
          ar: 'يستخدم BabyAGI ثلاث استدعاءات LLM متخصصة في حلقته: وكيل تنفيذ ينجز المهمة الحالية، ووكيل إنشاء مهام يولد مهاماً جديدة بناءً على النتائج، ووكيل ترتيب أولويات يعيد ترتيب قائمة المهام حسب الأهمية.',
        },
      },
      {
        id: 'batch7-q6',
        question: {
          en: 'What is "goal drift" in the context of autonomous agents like AutoGPT?',
          ar: 'ما هو "انحراف الهدف" في سياق الوكلاء المستقلين مثل AutoGPT؟',
        },
        options: {
          en: [
            'The agent completes the goal too quickly',
            'The agent gradually deviates from the original objective across iterations',
            'The agent refuses to start working on the goal',
            'The agent sets new goals that are harder than the original',
          ],
          ar: [
            'يكمل الوكيل الهدف بسرعة كبيرة',
            'ينحرف الوكيل تدريجياً عن الهدف الأصلي عبر التكرارات',
            'يرفض الوكيل البدء في العمل على الهدف',
            'يضع الوكيل أهدافاً جديدة أصعب من الأصلية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Goal drift occurs when an autonomous agent gradually shifts its focus away from the original objective over many iterations. Each small deviation compounds, eventually leading the agent to work on tasks that are no longer aligned with what the user originally wanted.',
          ar: 'يحدث انحراف الهدف عندما ينقل وكيل مستقل تركيزه تدريجياً بعيداً عن الهدف الأصلي عبر تكرارات عديدة. كل انحراف صغير يتراكم، مما يؤدي في النهاية إلى عمل الوكيل على مهام لم تعد متوافقة مع ما أراده المستخدم في الأصل.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. Hierarchical Agents
  // ─────────────────────────────────────────────
  'hierarchical-agents': {
    beginnerDefinition: {
      en: 'Hierarchical agent systems organize multiple AI agents in a boss-worker structure, just like a company. A manager agent receives a complex task, breaks it into smaller pieces, delegates each piece to specialized worker agents, and then combines their results into a final answer. This lets you solve problems that are too complex for a single agent.',
      ar: 'أنظمة الوكلاء الهرمية تنظم عدة وكلاء ذكاء اصطناعي في هيكل رئيس-عامل، تماماً مثل شركة. وكيل مدير يستلم مهمة معقدة ويقسمها إلى أجزاء أصغر ويفوض كل جزء إلى وكلاء عمال متخصصين ثم يجمع نتائجهم في إجابة نهائية. هذا يتيح لك حل مشاكل أكثر تعقيداً مما يمكن لوكيل واحد التعامل معه.',
    },
    technicalDefinition: {
      en: 'Hierarchical agent systems implement a multi-level delegation architecture where orchestrator (manager) agents decompose complex tasks into subtasks and delegate them to specialized subordinate (worker) agents. Communication follows defined protocols: top-down task assignment, bottom-up result reporting, and optional lateral communication between peers. Key patterns include the Orchestrator-Worker pattern (single manager, multiple workers), the Hierarchical Task Network (HTN) pattern (multi-level decomposition), and the Supervisor pattern (manager with routing and quality control). Frameworks like CrewAI, LangGraph, and AutoGen provide built-in support for hierarchical agent topologies.',
      ar: 'أنظمة الوكلاء الهرمية تنفذ بنية تفويض متعددة المستويات حيث تفكك وكلاء المنسق (المدير) المهام المعقدة إلى مهام فرعية وتفوضها إلى وكلاء مرؤوسين (عمال) متخصصين. يتبع التواصل بروتوكولات محددة: تعيين مهام من أعلى لأسفل، وإبلاغ نتائج من أسفل لأعلى، وتواصل أفقي اختياري بين الأقران. تشمل الأنماط الرئيسية نمط المنسق-العامل (مدير واحد وعمال متعددون)، ونمط شبكة المهام الهرمية (HTN) (تفكيك متعدد المستويات)، ونمط المشرف (مدير مع توجيه ومراقبة جودة). توفر أطر مثل CrewAI وLangGraph وAutoGen دعماً مدمجاً لطوبولوجيات الوكلاء الهرمية.',
    },
    analogy: {
      en: 'A hierarchical agent system works like a film production company. The director (orchestrator agent) has a vision for the movie. They delegate to department heads: the cinematographer handles visuals, the sound engineer handles audio, the editor handles post-production. Each department head may further delegate to their crew. The director does not operate the camera — they coordinate the specialists and ensure the final product is cohesive. Similarly, a manager agent coordinates specialist agents without doing their detailed work.',
      ar: 'يعمل نظام الوكلاء الهرمي مثل شركة إنتاج أفلام. المخرج (وكيل المنسق) لديه رؤية للفيلم. يفوض لرؤساء الأقسام: مدير التصوير يتولى المرئيات، ومهندس الصوت يتولى الصوت، والمحرر يتولى ما بعد الإنتاج. كل رئيس قسم قد يفوض بدوره لفريقه. المخرج لا يشغل الكاميرا — ينسق المتخصصين ويضمن تماسك المنتج النهائي. بالمثل، وكيل المدير ينسق وكلاء متخصصين دون القيام بعملهم التفصيلي.',
    },
    explanation: {
      en: [
        'Hierarchical agent systems solve a fundamental scaling problem: as tasks grow more complex, a single agent struggles with context window limits, diverse skill requirements, and error accumulation. By splitting work across specialized agents, each agent can focus on what it does best within a manageable scope.',
        'The Orchestrator-Worker pattern is the most common hierarchical design. A single orchestrator agent receives the user request, analyzes it, creates a plan, and delegates subtasks to worker agents. Workers may be specialized (e.g., one for code generation, one for research, one for data analysis) or general-purpose. The orchestrator collects results and synthesizes a final response.',
        'The Supervisor pattern adds quality control. The supervisor not only routes tasks but also reviews worker outputs, provides feedback, and can ask workers to retry if the quality is insufficient. This creates a review loop that improves output quality at the cost of additional LLM calls.',
        'Multi-level hierarchies extend these patterns. A top-level manager delegates to mid-level managers, who further delegate to workers. This is useful for very complex projects where tasks naturally decompose into multiple levels (e.g., a software project with architecture, implementation, and testing phases, each with their own subtasks).',
        'Communication protocols are critical in hierarchical systems. Workers need clear task specifications (what to do, constraints, expected output format). The orchestrator needs structured results (not just free text). Error handling must flow upward so the orchestrator can reassign failed tasks or adjust the plan.',
      ],
      ar: [
        'تحل أنظمة الوكلاء الهرمية مشكلة توسع أساسية: كلما زادت تعقيد المهام، يعاني وكيل واحد من حدود نافذة السياق ومتطلبات المهارات المتنوعة وتراكم الأخطاء. بتقسيم العمل عبر وكلاء متخصصين، يمكن لكل وكيل التركيز على ما يجيده ضمن نطاق قابل للإدارة.',
        'نمط المنسق-العامل هو التصميم الهرمي الأكثر شيوعاً. وكيل منسق واحد يستلم طلب المستخدم ويحلله وينشئ خطة ويفوض المهام الفرعية إلى وكلاء عمال. قد يكون العمال متخصصين (مثلاً واحد لتوليد الأكواد وواحد للبحث وواحد لتحليل البيانات) أو عامين الغرض. يجمع المنسق النتائج ويركب استجابة نهائية.',
        'نمط المشرف يضيف مراقبة الجودة. المشرف لا يوجه المهام فحسب بل يراجع أيضاً مخرجات العمال ويقدم ملاحظات ويمكنه طلب إعادة المحاولة إذا كانت الجودة غير كافية. هذا ينشئ حلقة مراجعة تحسن جودة المخرجات على حساب استدعاءات LLM إضافية.',
        'الهرميات متعددة المستويات توسع هذه الأنماط. مدير المستوى الأعلى يفوض لمديرين متوسطي المستوى الذين يفوضون بدورهم للعمال. هذا مفيد للمشاريع المعقدة جداً حيث تتفكك المهام طبيعياً إلى مستويات متعددة (مثل مشروع برمجي بمراحل معمارية وتنفيذية واختبارية، كل منها بمهامها الفرعية).',
        'بروتوكولات التواصل حاسمة في الأنظمة الهرمية. يحتاج العمال مواصفات مهام واضحة (ما يجب فعله والقيود وتنسيق المخرجات المتوقع). يحتاج المنسق نتائج منظمة (ليس مجرد نص حر). يجب أن تتدفق معالجة الأخطاء إلى أعلى حتى يتمكن المنسق من إعادة تعيين المهام الفاشلة أو تعديل الخطة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import Any

class WorkerAgent:
    """Specialized worker agent for a specific domain."""
    def __init__(self, name: str, llm: Any, specialty: str):
        self.name = name
        self.llm = llm
        self.specialty = specialty

    def execute(self, task: str) -> dict:
        prompt = f"""You are a {self.specialty} specialist.
Task: {task}
Provide a detailed, focused response."""
        result = self.llm.invoke(prompt)
        return {"agent": self.name, "task": task, "result": result}

class OrchestratorAgent:
    """Manager agent that decomposes tasks and delegates to workers."""
    def __init__(self, llm: Any, workers: list[WorkerAgent]):
        self.llm = llm
        self.workers = {w.name: w for w in workers}

    def run(self, request: str) -> str:
        # Step 1: Decompose the request into subtasks
        plan = self._create_plan(request)

        # Step 2: Delegate subtasks to appropriate workers
        results = []
        for subtask in plan:
            worker = self._select_worker(subtask)
            result = worker.execute(subtask["task"])
            results.append(result)

        # Step 3: Synthesize results into final response
        return self._synthesize(request, results)

    def _create_plan(self, request: str) -> list[dict]:
        worker_info = ", ".join(
            f"{w.name} ({w.specialty})" for w in self.workers.values()
        )
        prompt = f"""Break this request into subtasks for these workers:
Workers: {worker_info}
Request: {request}
Return JSON list: [{{"task": "...", "worker": "..."}}]"""
        response = self.llm.invoke(prompt)
        import json
        return json.loads(response)

    def _select_worker(self, subtask: dict) -> WorkerAgent:
        name = subtask.get("worker", "")
        if name in self.workers:
            return self.workers[name]
        return list(self.workers.values())[0]

    def _synthesize(self, request: str, results: list[dict]) -> str:
        formatted = "\\n".join(
            f"[{r['agent']}] {r['task']}:\\n{r['result']}"
            for r in results
        )
        prompt = f"""Original request: {request}
Worker results:
{formatted}
Synthesize these into a single cohesive response."""
        return self.llm.invoke(prompt)

# Usage example
# researcher = WorkerAgent("researcher", llm, "research and fact-finding")
# coder = WorkerAgent("coder", llm, "Python programming")
# reviewer = WorkerAgent("reviewer", llm, "code review and quality")
# orchestrator = OrchestratorAgent(llm, [researcher, coder, reviewer])
# result = orchestrator.run("Build a web scraper for news headlines")`,
      description: {
        en: 'An Orchestrator-Worker hierarchical agent system where the orchestrator decomposes tasks, delegates to specialized workers, and synthesizes their results into a final response.',
        ar: 'نظام وكلاء هرمي بنمط المنسق-العامل حيث يفكك المنسق المهام ويفوضها إلى عمال متخصصين ويركب نتائجهم في استجابة نهائية.',
      },
    },
    commonMistakes: {
      en: [
        'Making the orchestrator too involved in execution details instead of focusing on coordination, causing it to become a bottleneck.',
        'Not defining clear input/output contracts between the orchestrator and workers, leading to mismatched expectations and wasted iterations.',
        'Creating too many hierarchy levels for simple tasks, adding unnecessary latency and token costs.',
        'Failing to implement error handling at the orchestrator level, so one worker failure crashes the entire pipeline.',
      ],
      ar: [
        'جعل المنسق متورطاً جداً في تفاصيل التنفيذ بدلاً من التركيز على التنسيق، مما يجعله عنق زجاجة.',
        'عدم تحديد عقود مدخلات/مخرجات واضحة بين المنسق والعمال، مما يؤدي إلى توقعات غير متطابقة وتكرارات ضائعة.',
        'إنشاء مستويات هرمية كثيرة جداً للمهام البسيطة، مما يضيف تأخيراً وتكاليف رموز غير ضرورية.',
        'الفشل في تنفيذ معالجة الأخطاء على مستوى المنسق، فيتسبب فشل عامل واحد في انهيار خط الأنابيب بالكامل.',
      ],
    },
    bestPractices: {
      en: [
        'Define clear roles and responsibilities for each worker agent with specific system prompts that constrain their scope.',
        'Implement structured communication formats (JSON schemas) between orchestrator and workers for reliable data exchange.',
        'Add timeout and retry logic at the orchestrator level to handle worker failures gracefully.',
        'Keep hierarchies as flat as possible — use multi-level delegation only when task complexity genuinely requires it.',
      ],
      ar: [
        'حدد أدواراً ومسؤوليات واضحة لكل وكيل عامل مع موجهات نظام محددة تحد من نطاقهم.',
        'نفذ تنسيقات تواصل منظمة (مخططات JSON) بين المنسق والعمال لتبادل بيانات موثوق.',
        'أضف منطق المهلة الزمنية وإعادة المحاولة على مستوى المنسق للتعامل مع إخفاقات العمال بسلاسة.',
        'حافظ على الهرميات مسطحة قدر الإمكان — استخدم التفويض متعدد المستويات فقط عندما يتطلب تعقيد المهمة ذلك فعلاً.',
      ],
    },
    references: [
      { title: 'CrewAI Hierarchical Process', url: 'https://docs.crewai.com/concepts/processes#hierarchical-process' },
      { title: 'LangGraph Multi-Agent Architectures', url: 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/' },
      { title: 'AutoGen Multi-Agent Framework', url: 'https://microsoft.github.io/autogen/' },
    ],
    quiz: [
      {
        id: 'batch7-q7',
        question: {
          en: 'What is the primary advantage of hierarchical agent systems over single-agent systems?',
          ar: 'ما هي الميزة الأساسية لأنظمة الوكلاء الهرمية مقارنة بأنظمة الوكيل الواحد؟',
        },
        options: {
          en: [
            'They are always faster',
            'They use fewer API tokens',
            'They can handle complex tasks by decomposing them and using specialized agents',
            'They do not require LLMs',
          ],
          ar: [
            'دائماً أسرع',
            'تستخدم رموز API أقل',
            'يمكنها التعامل مع المهام المعقدة بتفكيكها واستخدام وكلاء متخصصين',
            'لا تتطلب نماذج لغة كبيرة',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Hierarchical systems excel at complex tasks by decomposing them into manageable subtasks and delegating to specialized agents. Each agent can focus within its scope, overcoming single-agent limitations like context window constraints and diverse skill requirements.',
          ar: 'تتفوق الأنظمة الهرمية في المهام المعقدة بتفكيكها إلى مهام فرعية قابلة للإدارة وتفويضها إلى وكلاء متخصصين. يمكن لكل وكيل التركيز ضمن نطاقه، متغلباً على قيود الوكيل الواحد مثل حدود نافذة السياق ومتطلبات المهارات المتنوعة.',
        },
      },
      {
        id: 'batch7-q8',
        question: {
          en: 'What does the Supervisor pattern add compared to the basic Orchestrator-Worker pattern?',
          ar: 'ماذا يضيف نمط المشرف مقارنة بنمط المنسق-العامل الأساسي؟',
        },
        options: {
          en: [
            'More worker agents',
            'Quality control — reviewing worker outputs and requesting retries if needed',
            'Faster execution speed',
            'Elimination of the orchestrator role',
          ],
          ar: [
            'المزيد من وكلاء العمال',
            'مراقبة الجودة — مراجعة مخرجات العمال وطلب إعادة المحاولة عند الحاجة',
            'سرعة تنفيذ أعلى',
            'إلغاء دور المنسق',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The Supervisor pattern extends the Orchestrator-Worker pattern by adding quality control. The supervisor reviews worker outputs, provides feedback, and can request retries if the quality is insufficient, creating a review loop that improves output quality.',
          ar: 'يوسع نمط المشرف نمط المنسق-العامل بإضافة مراقبة الجودة. يراجع المشرف مخرجات العمال ويقدم ملاحظات ويمكنه طلب إعادة المحاولة إذا كانت الجودة غير كافية، مما ينشئ حلقة مراجعة تحسن جودة المخرجات.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Graph-Based Agent Architectures
  // ─────────────────────────────────────────────
  'graph-based-agents': {
    beginnerDefinition: {
      en: 'Graph-based agent architectures define how an AI agent moves between different states or steps using a graph structure — like a flowchart. Each node in the graph represents a step (e.g., "research", "write code", "review"), and edges define which transitions are allowed. This gives you precise control over agent behavior compared to free-form autonomous loops.',
      ar: 'بنى الوكلاء المبنية على الرسوم البيانية تحدد كيفية انتقال وكيل الذكاء الاصطناعي بين حالات أو خطوات مختلفة باستخدام هيكل رسم بياني — مثل مخطط تدفق. كل عقدة في الرسم البياني تمثل خطوة (مثل "البحث"، "كتابة الكود"، "المراجعة")، والحواف تحدد الانتقالات المسموحة. هذا يمنحك تحكماً دقيقاً في سلوك الوكيل مقارنة بالحلقات المستقلة الحرة.',
    },
    technicalDefinition: {
      en: 'Graph-based agent architectures model agent control flow as directed graphs where nodes represent computational states (LLM calls, tool executions, or conditional logic) and edges represent transitions between states. Three primary graph types are used: Finite State Machines (FSMs) with deterministic transitions, Directed Acyclic Graphs (DAGs) for pipeline-style execution without cycles, and cyclic graphs that allow loops for iterative refinement. LangGraph is the most prominent framework implementing this pattern, using StateGraph objects with typed state, conditional edges, and checkpoint-based persistence.',
      ar: 'بنى الوكلاء المبنية على الرسوم البيانية تنمذج تدفق تحكم الوكيل كرسوم بيانية موجهة حيث تمثل العقد حالات حسابية (استدعاءات LLM أو تنفيذ أدوات أو منطق شرطي) وتمثل الحواف الانتقالات بين الحالات. تُستخدم ثلاثة أنواع رسوم بيانية أساسية: آلات الحالة المحدودة (FSM) بانتقالات حتمية، والرسوم البيانية الموجهة غير الدورية (DAG) للتنفيذ بأسلوب خط الأنابيب بدون دورات، والرسوم البيانية الدورية التي تسمح بالحلقات للتحسين التكراري. LangGraph هو الإطار الأبرز الذي ينفذ هذا النمط، مستخدماً كائنات StateGraph بحالة مُنمطة وحواف شرطية واستمرارية قائمة على نقاط التحقق.',
    },
    analogy: {
      en: 'Think of a graph-based agent like a board game. The game board is the graph, each square is a state (node), and the allowed moves between squares are edges. Some games are linear (like Snakes and Ladders — a DAG), some let you revisit squares (cyclic graphs), and some have branching paths depending on dice rolls or choices (conditional edges). The game rules (graph structure) constrain what moves are possible, making the game predictable and debuggable.',
      ar: 'فكر في وكيل مبني على الرسوم البيانية مثل لعبة لوحية. لوحة اللعبة هي الرسم البياني، كل مربع هو حالة (عقدة)، والحركات المسموحة بين المربعات هي الحواف. بعض الألعاب خطية (مثل السلالم والثعابين — رسم بياني موجه غير دوري)، وبعضها يسمح لك بإعادة زيارة المربعات (رسوم بيانية دورية)، وبعضها بمسارات متفرعة حسب رمي النرد أو الاختيارات (حواف شرطية). قواعد اللعبة (هيكل الرسم البياني) تحد من الحركات الممكنة، مما يجعل اللعبة قابلة للتنبؤ والتنقيح.',
    },
    explanation: {
      en: [
        'Graph-based architectures emerged as a response to the unpredictability of free-form autonomous agent loops like AutoGPT. By explicitly defining the states an agent can be in and the transitions between them, developers gain fine-grained control over agent behavior while retaining the flexibility of LLM-powered reasoning within each node.',
        'Finite State Machines (FSMs) are the simplest graph type. The agent is always in exactly one state, and transitions are triggered by specific conditions. For example: START -> RESEARCH -> DRAFT -> REVIEW -> PUBLISH. FSMs are easy to understand and debug but cannot handle concurrent execution or complex branching well.',
        'Directed Acyclic Graphs (DAGs) allow branching and merging but no cycles. They are ideal for pipeline-style workflows where tasks flow in one direction: parse input, then fan out to multiple parallel processors, then merge results. DAGs guarantee termination (no infinite loops) but cannot express iterative refinement.',
        'Cyclic graphs allow loops, enabling patterns like "write code, test it, fix errors, test again until it passes." This is the most powerful and most common pattern in modern agent frameworks. LangGraph uses cyclic graphs with conditional edges: a node can route to different next nodes based on the current state, and loops continue until a termination condition is met.',
        'State management is central to graph-based agents. Each node receives the current state, performs its computation (LLM call, tool use, etc.), and returns an updated state. The state flows through the graph, accumulating results. LangGraph uses typed state objects with reducer functions that define how state updates are merged, enabling features like message history accumulation.',
        'Checkpointing enables persistence and human-in-the-loop workflows. The graph state can be saved at any node, allowing the agent to be paused, inspected, and resumed. This is critical for production systems where you need to review agent decisions before allowing them to proceed.',
      ],
      ar: [
        'ظهرت البنى المبنية على الرسوم البيانية كاستجابة لعدم قابلية التنبؤ بحلقات الوكلاء المستقلة الحرة مثل AutoGPT. من خلال تحديد الحالات التي يمكن أن يكون فيها الوكيل والانتقالات بينها بشكل صريح، يحصل المطورون على تحكم دقيق في سلوك الوكيل مع الحفاظ على مرونة الاستدلال المدعوم بنماذج اللغة الكبيرة داخل كل عقدة.',
        'آلات الحالة المحدودة (FSM) هي أبسط نوع رسم بياني. يكون الوكيل دائماً في حالة واحدة بالضبط، وتُفعّل الانتقالات بشروط محددة. مثال: بداية -> بحث -> مسودة -> مراجعة -> نشر. آلات الحالة المحدودة سهلة الفهم والتنقيح لكن لا تتعامل جيداً مع التنفيذ المتزامن أو التفرع المعقد.',
        'الرسوم البيانية الموجهة غير الدورية (DAG) تسمح بالتفرع والدمج لكن بدون دورات. مثالية لسير العمل بأسلوب خط الأنابيب حيث تتدفق المهام باتجاه واحد: تحليل المدخلات، ثم التوزيع إلى معالجات متوازية متعددة، ثم دمج النتائج. تضمن DAG الإنهاء (لا حلقات لانهائية) لكن لا يمكنها التعبير عن التحسين التكراري.',
        'الرسوم البيانية الدورية تسمح بالحلقات، مما يتيح أنماطاً مثل "اكتب كوداً، اختبره، أصلح الأخطاء، اختبر مرة أخرى حتى ينجح." هذا هو النمط الأقوى والأكثر شيوعاً في أطر الوكلاء الحديثة. يستخدم LangGraph رسوماً بيانية دورية بحواف شرطية: يمكن للعقدة التوجيه إلى عقد تالية مختلفة بناءً على الحالة الحالية، وتستمر الحلقات حتى تحقيق شرط الإنهاء.',
        'إدارة الحالة مركزية في الوكلاء المبنيين على الرسوم البيانية. كل عقدة تستلم الحالة الحالية وتنفذ حسابها (استدعاء LLM أو استخدام أداة وغيرها) وتعيد حالة محدثة. تتدفق الحالة عبر الرسم البياني مراكمة النتائج. يستخدم LangGraph كائنات حالة مُنمطة مع دوال مُخفِّضة تحدد كيفية دمج تحديثات الحالة، مما يتيح ميزات مثل تراكم سجل الرسائل.',
        'نقاط التحقق تتيح الاستمرارية وسير العمل بمشاركة بشرية. يمكن حفظ حالة الرسم البياني عند أي عقدة، مما يسمح بإيقاف الوكيل وفحصه واستئنافه. هذا حاسم لأنظمة الإنتاج حيث تحتاج لمراجعة قرارات الوكيل قبل السماح له بالمتابعة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Literal
from langgraph.graph import StateGraph, END

# Define the state that flows through the graph
class AgentState(TypedDict):
    task: str
    research: str
    draft: str
    review: str
    status: str

# Define node functions
def research_node(state: AgentState) -> dict:
    # Simulate LLM research
    return {"research": f"Research findings for: {state['task']}"}

def draft_node(state: AgentState) -> dict:
    return {"draft": f"Draft based on: {state['research'][:50]}"}

def review_node(state: AgentState) -> dict:
    # Simulate quality check
    if "error" in state["draft"].lower():
        return {"review": "needs revision", "status": "revise"}
    return {"review": "approved", "status": "approved"}

# Define routing logic (conditional edges)
def should_revise(state: AgentState) -> Literal["draft", "end"]:
    if state.get("status") == "revise":
        return "draft"
    return "end"

# Build the graph
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("research", research_node)
workflow.add_node("draft", draft_node)
workflow.add_node("review", review_node)

# Add edges (define transitions)
workflow.set_entry_point("research")
workflow.add_edge("research", "draft")     # research -> draft
workflow.add_edge("draft", "review")        # draft -> review
workflow.add_conditional_edges(             # review -> draft OR end
    "review",
    should_revise,
    {"draft": "draft", "end": END}
)

# Compile and run
app = workflow.compile()
result = app.invoke({"task": "Write about graph-based agents"})
print(result)`,
      description: {
        en: 'A LangGraph state machine with three nodes (research, draft, review) and a conditional edge that creates a revision loop — the agent keeps revising until the review passes.',
        ar: 'آلة حالة LangGraph بثلاث عقد (بحث، مسودة، مراجعة) وحافة شرطية تنشئ حلقة مراجعة — يستمر الوكيل في المراجعة حتى تنجح.',
      },
    },
    commonMistakes: {
      en: [
        'Creating cyclic graphs without termination conditions, leading to infinite loops that consume resources endlessly.',
        'Putting too much logic inside a single node instead of decomposing it into separate nodes, losing the benefits of graph-based control flow.',
        'Not using typed state objects, leading to runtime errors from missing or mistyped state keys.',
        'Ignoring checkpointing for long-running graphs, making it impossible to resume after failures.',
      ],
      ar: [
        'إنشاء رسوم بيانية دورية بدون شروط إنهاء، مما يؤدي إلى حلقات لانهائية تستهلك الموارد بلا نهاية.',
        'وضع منطق كثير جداً داخل عقدة واحدة بدلاً من تفكيكه إلى عقد منفصلة، مما يفقد فوائد التحكم بالتدفق القائم على الرسوم البيانية.',
        'عدم استخدام كائنات حالة مُنمطة، مما يؤدي إلى أخطاء وقت التشغيل من مفاتيح حالة مفقودة أو خاطئة النوع.',
        'تجاهل نقاط التحقق للرسوم البيانية طويلة التشغيل، مما يجعل الاستئناف بعد الإخفاقات مستحيلاً.',
      ],
    },
    bestPractices: {
      en: [
        'Start with simple linear graphs and add conditional edges and cycles only when needed for your use case.',
        'Always include a maximum iteration counter for cyclic graphs to prevent infinite loops.',
        'Use typed state objects (TypedDict or Pydantic models) to catch state-related errors at development time.',
        'Implement checkpointing for any graph that takes more than a few seconds to run, enabling recovery and human-in-the-loop review.',
      ],
      ar: [
        'ابدأ برسوم بيانية خطية بسيطة وأضف حواف شرطية ودورات فقط عند الحاجة لحالة الاستخدام.',
        'أضف دائماً عداد تكرار أقصى للرسوم البيانية الدورية لمنع الحلقات اللانهائية.',
        'استخدم كائنات حالة مُنمطة (TypedDict أو نماذج Pydantic) لاكتشاف أخطاء الحالة في وقت التطوير.',
        'نفذ نقاط التحقق لأي رسم بياني يستغرق أكثر من بضع ثوانٍ للتشغيل، مما يتيح الاسترداد والمراجعة بمشاركة بشرية.',
      ],
    },
    references: [
      { title: 'LangGraph Documentation', url: 'https://langchain-ai.github.io/langgraph/' },
      { title: 'LangGraph Concepts - State Machines', url: 'https://langchain-ai.github.io/langgraph/concepts/low_level/' },
      { title: 'Finite State Machines - Wikipedia', url: 'https://en.wikipedia.org/wiki/Finite-state_machine' },
    ],
    quiz: [
      {
        id: 'batch7-q9',
        question: {
          en: 'What is the key advantage of a DAG (Directed Acyclic Graph) over a cyclic graph for agent workflows?',
          ar: 'ما هي الميزة الرئيسية للرسم البياني الموجه غير الدوري (DAG) مقارنة بالرسم البياني الدوري لسير عمل الوكلاء؟',
        },
        options: {
          en: [
            'DAGs can express any workflow pattern',
            'DAGs guarantee termination since they have no cycles (no infinite loops possible)',
            'DAGs are always faster to execute',
            'DAGs use less memory',
          ],
          ar: [
            'يمكن لـ DAG التعبير عن أي نمط سير عمل',
            'يضمن DAG الإنهاء لأنه لا يحتوي على دورات (لا حلقات لانهائية ممكنة)',
            'تنفيذ DAG دائماً أسرع',
            'يستخدم DAG ذاكرة أقل',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'DAGs guarantee termination because they have no cycles — the execution always moves forward toward completion. Cyclic graphs allow loops, which are powerful for iterative refinement but risk infinite loops if termination conditions are not properly set.',
          ar: 'يضمن DAG الإنهاء لأنه لا يحتوي على دورات — ينتقل التنفيذ دائماً للأمام نحو الإتمام. الرسوم البيانية الدورية تسمح بالحلقات، وهي قوية للتحسين التكراري لكنها تخاطر بحلقات لانهائية إذا لم تُعيَّن شروط الإنهاء بشكل صحيح.',
        },
      },
      {
        id: 'batch7-q10',
        question: {
          en: 'In LangGraph, what do conditional edges enable?',
          ar: 'في LangGraph، ماذا تتيح الحواف الشرطية؟',
        },
        options: {
          en: [
            'Parallel execution of all nodes simultaneously',
            'Dynamic routing between nodes based on the current state',
            'Automatic error correction in node outputs',
            'Connection to external databases',
          ],
          ar: [
            'التنفيذ المتوازي لجميع العقد في وقت واحد',
            'التوجيه الديناميكي بين العقد بناءً على الحالة الحالية',
            'التصحيح التلقائي للأخطاء في مخرجات العقد',
            'الاتصال بقواعد البيانات الخارجية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Conditional edges in LangGraph allow dynamic routing: a function examines the current state and decides which node to transition to next. This enables branching logic like "if the review passes, go to END; otherwise, go back to draft for revision."',
          ar: 'تسمح الحواف الشرطية في LangGraph بالتوجيه الديناميكي: تفحص دالة الحالة الحالية وتقرر أي عقدة يتم الانتقال إليها تالياً. هذا يتيح منطق التفرع مثل "إذا نجحت المراجعة، اذهب إلى النهاية؛ وإلا، عُد إلى المسودة للمراجعة."',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Graph RAG
  // ─────────────────────────────────────────────
  'graph-rag': {
    beginnerDefinition: {
      en: 'Graph RAG combines knowledge graphs (structured networks of facts and relationships) with retrieval-augmented generation. Instead of just searching through text documents, the agent also navigates a web of connected entities — people, places, concepts, and their relationships — to find more complete and accurate information for answering questions.',
      ar: 'Graph RAG يجمع بين الرسوم البيانية المعرفية (شبكات منظمة من الحقائق والعلاقات) والتوليد المعزز بالاسترجاع. بدلاً من البحث في المستندات النصية فقط، يتنقل الوكيل أيضاً في شبكة من الكيانات المتصلة — أشخاص وأماكن ومفاهيم وعلاقاتها — للعثور على معلومات أكثر اكتمالاً ودقة للإجابة على الأسئلة.',
    },
    technicalDefinition: {
      en: 'Graph RAG augments standard RAG pipelines with knowledge graph traversal. During indexing, entities and relationships are extracted from source documents using NER and relation extraction, forming a knowledge graph stored in a graph database (e.g., Neo4j). At query time, the system performs both vector similarity search on document chunks and structured graph queries (e.g., Cypher) to retrieve relevant subgraphs. Community detection algorithms can identify clusters of related entities. The retrieved text chunks and graph context are combined into the LLM prompt, providing both semantic similarity results and structured relational context for more accurate generation.',
      ar: 'يعزز Graph RAG خطوط أنابيب RAG القياسية بتجول الرسم البياني المعرفي. أثناء الفهرسة، يتم استخراج الكيانات والعلاقات من المستندات المصدرية باستخدام التعرف على الكيانات المسماة واستخراج العلاقات، مشكلاً رسماً بيانياً معرفياً مخزناً في قاعدة بيانات رسوم بيانية (مثل Neo4j). عند الاستعلام، ينفذ النظام كلاً من بحث التشابه المتجهي على أجزاء المستندات واستعلامات رسوم بيانية منظمة (مثل Cypher) لاسترجاع رسوم بيانية فرعية ذات صلة. يمكن لخوارزميات اكتشاف المجتمعات تحديد مجموعات من الكيانات ذات الصلة. يتم دمج أجزاء النص المسترجعة وسياق الرسم البياني في موجه LLM، مما يوفر نتائج تشابه دلالي وسياق علائقي منظم لتوليد أكثر دقة.',
    },
    analogy: {
      en: 'Standard RAG is like searching a library by looking at book summaries. Graph RAG is like having both the library AND a detailed mind map on the wall that shows how all the topics, authors, and concepts are connected. When someone asks about a topic, you not only find the relevant books but also trace the connections on the mind map to discover related information you might have missed with text search alone.',
      ar: 'RAG القياسي مثل البحث في مكتبة من خلال النظر في ملخصات الكتب. Graph RAG مثل امتلاك المكتبة وخريطة ذهنية مفصلة على الحائط تُظهر كيفية ارتباط جميع المواضيع والمؤلفين والمفاهيم. عندما يسأل شخص عن موضوع، لا تجد الكتب ذات الصلة فحسب بل تتتبع أيضاً الروابط على الخريطة الذهنية لاكتشاف معلومات ذات صلة ربما فاتتك بالبحث النصي وحده.',
    },
    explanation: {
      en: [
        'Standard RAG retrieves relevant text chunks based on semantic similarity to the query. While effective for many cases, it struggles with questions that require understanding relationships between entities, aggregating information across many documents, or reasoning about connections that are implicit in the text.',
        'Graph RAG addresses these limitations by adding a knowledge graph layer. During the indexing phase, an LLM or NLP pipeline extracts entities (people, organizations, concepts) and their relationships from source documents. These are stored as nodes and edges in a graph database, creating a structured representation of the knowledge in the corpus.',
        'Microsoft Research introduced a prominent Graph RAG approach that uses community detection. The knowledge graph is partitioned into communities of closely related entities using algorithms like Leiden. Each community gets an LLM-generated summary. For global questions (those requiring information from across the entire corpus), the system queries community summaries rather than individual chunks, enabling holistic answers.',
        'At query time, Graph RAG typically performs a hybrid retrieval: vector search finds semantically relevant text chunks, while graph queries (Cypher, SPARQL, or Gremlin) traverse the knowledge graph to find structurally relevant entities and relationships. The combined context — text chunks plus graph subgraph — is provided to the LLM for generation.',
        'Graph RAG excels at questions like "What are the main themes across all documents?", "How is person X connected to organization Y?", or "What are all the factors that influence Z?" These questions require connecting information across multiple sources, which is exactly what knowledge graphs enable.',
      ],
      ar: [
        'يسترجع RAG القياسي أجزاء نصية ذات صلة بناءً على التشابه الدلالي مع الاستعلام. رغم فعاليته في حالات كثيرة، يعاني مع الأسئلة التي تتطلب فهم العلاقات بين الكيانات أو تجميع معلومات عبر مستندات عديدة أو الاستدلال حول روابط ضمنية في النص.',
        'يعالج Graph RAG هذه القيود بإضافة طبقة رسم بياني معرفي. أثناء مرحلة الفهرسة، يستخرج نموذج لغة كبير أو خط أنابيب معالجة لغة طبيعية الكيانات (أشخاص ومنظمات ومفاهيم) وعلاقاتها من المستندات المصدرية. تُخزن هذه كعقد وحواف في قاعدة بيانات رسوم بيانية، مما ينشئ تمثيلاً منظماً للمعرفة في المجموعة.',
        'قدم Microsoft Research نهج Graph RAG بارزاً يستخدم اكتشاف المجتمعات. يُقسم الرسم البياني المعرفي إلى مجتمعات من كيانات مترابطة وثيقاً باستخدام خوارزميات مثل Leiden. يحصل كل مجتمع على ملخص يولده LLM. للأسئلة الشاملة (تلك التي تتطلب معلومات من عبر المجموعة بأكملها)، يستعلم النظام ملخصات المجتمعات بدلاً من الأجزاء الفردية، مما يتيح إجابات شمولية.',
        'عند الاستعلام، ينفذ Graph RAG عادةً استرجاعاً هجيناً: البحث المتجهي يجد أجزاء نصية ذات صلة دلالياً، بينما استعلامات الرسم البياني (Cypher أو SPARQL أو Gremlin) تتجول في الرسم البياني المعرفي للعثور على كيانات وعلاقات ذات صلة بنيوياً. السياق المدمج — أجزاء نصية مع رسم بياني فرعي — يُقدم لنموذج اللغة الكبير للتوليد.',
        'يتفوق Graph RAG في أسئلة مثل "ما هي المواضيع الرئيسية عبر جميع المستندات؟"، "كيف يرتبط الشخص X بالمنظمة Y؟"، أو "ما هي جميع العوامل التي تؤثر على Z؟" هذه الأسئلة تتطلب ربط معلومات عبر مصادر متعددة، وهذا بالضبط ما تتيحه الرسوم البيانية المعرفية.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from neo4j import GraphDatabase
from openai import OpenAI

client = OpenAI()

class GraphRAG:
    """Combines vector search with knowledge graph traversal."""

    def __init__(self, neo4j_uri: str, neo4j_auth: tuple):
        self.driver = GraphDatabase.driver(neo4j_uri, auth=neo4j_auth)

    def build_graph_from_text(self, text: str):
        """Extract entities and relations using LLM, store in Neo4j."""
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{
                "role": "user",
                "content": f"""Extract entities and relationships from this text.
Return JSON: {{"entities": ["name:type"], "relations": ["entity1|relation|entity2"]}}
Text: {text}"""
            }]
        )
        import json
        data = json.loads(response.choices[0].message.content)

        with self.driver.session() as session:
            for entity in data["entities"]:
                name, etype = entity.split(":")
                session.run(
                    "MERGE (e:Entity {name: $name, type: $type})",
                    name=name.strip(), type=etype.strip()
                )
            for rel in data["relations"]:
                src, rtype, tgt = rel.split("|")
                session.run(
                    """MATCH (a:Entity {name: $src}), (b:Entity {name: $tgt})
                    MERGE (a)-[:RELATES {type: $rtype}]->(b)""",
                    src=src.strip(), tgt=tgt.strip(), rtype=rtype.strip()
                )

    def graph_query(self, entity: str, hops: int = 2) -> str:
        """Retrieve subgraph context around an entity."""
        with self.driver.session() as session:
            result = session.run(
                """MATCH path = (e:Entity {name: $name})-[*1..""" + str(hops) + """]->(related)
                RETURN e.name AS source, related.name AS target,
                       [r IN relationships(path) | r.type] AS relations
                LIMIT 20""",
                name=entity
            )
            context_lines = []
            for record in result:
                context_lines.append(
                    f"{record['source']} -> {record['relations']} -> {record['target']}"
                )
            return "\\n".join(context_lines)

    def query(self, question: str) -> str:
        """Hybrid retrieval: graph context + LLM generation."""
        # Step 1: Extract key entity from question
        extract = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user",
                       "content": f"Extract the main entity from: {question}"}]
        )
        entity = extract.choices[0].message.content.strip()

        # Step 2: Get graph context
        graph_context = self.graph_query(entity)

        # Step 3: Generate answer with graph context
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user",
                       "content": f"""Answer using this knowledge graph context:
{graph_context}

Question: {question}"""}]
        )
        return response.choices[0].message.content`,
      description: {
        en: 'A Graph RAG system that extracts entities and relationships from text into Neo4j, then retrieves graph context at query time to augment LLM generation with structured relational knowledge.',
        ar: 'نظام Graph RAG يستخرج الكيانات والعلاقات من النص إلى Neo4j، ثم يسترجع سياق الرسم البياني عند الاستعلام لتعزيز توليد LLM بمعرفة علائقية منظمة.',
      },
    },
    commonMistakes: {
      en: [
        'Extracting too many low-quality entities and relationships, creating a noisy knowledge graph that degrades retrieval quality.',
        'Not combining graph retrieval with vector search — using only the graph misses important textual context.',
        'Ignoring graph maintenance: as source documents are updated, the knowledge graph must be updated accordingly.',
      ],
      ar: [
        'استخراج كيانات وعلاقات كثيرة جداً منخفضة الجودة، مما ينشئ رسماً بيانياً معرفياً مشوشاً يُضعف جودة الاسترجاع.',
        'عدم دمج استرجاع الرسم البياني مع البحث المتجهي — استخدام الرسم البياني فقط يُفوّت سياقاً نصياً مهماً.',
        'تجاهل صيانة الرسم البياني: عند تحديث المستندات المصدرية، يجب تحديث الرسم البياني المعرفي وفقاً لذلك.',
      ],
    },
    bestPractices: {
      en: [
        'Use hybrid retrieval: combine vector similarity search for text chunks with graph traversal for relational context.',
        'Apply entity resolution to avoid duplicate nodes representing the same real-world entity with different names.',
        'Use community detection algorithms to create summaries for global questions that span the entire knowledge base.',
        'Validate extracted entities and relationships with confidence scores, only storing high-confidence extractions in the graph.',
      ],
      ar: [
        'استخدم الاسترجاع الهجين: ادمج بحث التشابه المتجهي لأجزاء النص مع تجول الرسم البياني للسياق العلائقي.',
        'طبّق تحليل الكيانات لتجنب العقد المكررة التي تمثل نفس الكيان الحقيقي بأسماء مختلفة.',
        'استخدم خوارزميات اكتشاف المجتمعات لإنشاء ملخصات للأسئلة الشاملة التي تمتد عبر قاعدة المعرفة بأكملها.',
        'تحقق من الكيانات والعلاقات المستخرجة بدرجات ثقة، وخزّن فقط الاستخراجات عالية الثقة في الرسم البياني.',
      ],
    },
    references: [
      { title: 'Microsoft GraphRAG', url: 'https://microsoft.github.io/graphrag/' },
      { title: 'From Local to Global: A Graph RAG Approach (Microsoft Research)', url: 'https://arxiv.org/abs/2404.16130' },
      { title: 'Neo4j GraphRAG Package', url: 'https://neo4j.com/docs/neo4j-graphrag-python/current/' },
    ],
    quiz: [
      {
        id: 'batch7-q11',
        question: {
          en: 'What is the main advantage of Graph RAG over standard vector-based RAG?',
          ar: 'ما هي الميزة الرئيسية لـ Graph RAG مقارنة بـ RAG القياسي القائم على المتجهات؟',
        },
        options: {
          en: [
            'It is faster at retrieving documents',
            'It can understand and leverage relationships between entities across documents',
            'It requires less storage space',
            'It does not need an LLM for generation',
          ],
          ar: [
            'أسرع في استرجاع المستندات',
            'يمكنه فهم واستغلال العلاقات بين الكيانات عبر المستندات',
            'يتطلب مساحة تخزين أقل',
            'لا يحتاج نموذج لغة كبير للتوليد',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Graph RAG captures entities and their relationships in a knowledge graph, enabling it to answer questions that require understanding connections between concepts across multiple documents — something standard vector search cannot do effectively.',
          ar: 'يلتقط Graph RAG الكيانات وعلاقاتها في رسم بياني معرفي، مما يمكنه من الإجابة على أسئلة تتطلب فهم الروابط بين المفاهيم عبر مستندات متعددة — شيء لا يمكن للبحث المتجهي القياسي فعله بفعالية.',
        },
      },
      {
        id: 'batch7-q12',
        question: {
          en: 'What role does community detection play in Microsoft\'s Graph RAG approach?',
          ar: 'ما الدور الذي يلعبه اكتشاف المجتمعات في نهج Graph RAG من Microsoft؟',
        },
        options: {
          en: [
            'It speeds up the LLM inference time',
            'It groups related entities into clusters and creates summaries for answering global questions',
            'It removes duplicate documents from the corpus',
            'It translates the graph into vector embeddings',
          ],
          ar: [
            'يسرّع وقت استدلال LLM',
            'يجمع الكيانات ذات الصلة في مجموعات وينشئ ملخصات للإجابة على الأسئلة الشاملة',
            'يزيل المستندات المكررة من المجموعة',
            'يحول الرسم البياني إلى تضمينات متجهية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Microsoft\'s Graph RAG uses community detection algorithms (like Leiden) to partition the knowledge graph into clusters of closely related entities. Each community gets an LLM-generated summary, enabling the system to answer global questions that span the entire corpus by querying these summaries.',
          ar: 'يستخدم Graph RAG من Microsoft خوارزميات اكتشاف المجتمعات (مثل Leiden) لتقسيم الرسم البياني المعرفي إلى مجموعات من الكيانات المترابطة وثيقاً. يحصل كل مجتمع على ملخص يولده LLM، مما يمكن النظام من الإجابة على أسئلة شاملة تمتد عبر المجموعة بأكملها باستعلام هذه الملخصات.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. Agentic RAG
  // ─────────────────────────────────────────────
  'agentic-rag': {
    beginnerDefinition: {
      en: 'Agentic RAG turns retrieval into an active, intelligent process. Instead of doing a single search and hoping for the best, an AI agent dynamically plans which sources to search, evaluates the results, refines its queries, and decides when it has enough information to answer — just like a research librarian who knows how to find exactly what you need.',
      ar: 'RAG الوكيلي يحول الاسترجاع إلى عملية نشطة وذكية. بدلاً من إجراء بحث واحد وأمل الحصول على الأفضل، يخطط وكيل الذكاء الاصطناعي ديناميكياً لأي المصادر يبحث فيها، ويقيّم النتائج، ويحسّن استعلاماته، ويقرر متى لديه معلومات كافية للإجابة — تماماً مثل أمين مكتبة بحثي يعرف كيف يجد بالضبط ما تحتاجه.',
    },
    technicalDefinition: {
      en: 'Agentic RAG replaces the static retrieve-then-generate pipeline with an agent-driven retrieval loop. The agent uses an LLM to analyze the query, plan a retrieval strategy (which indexes to query, what search terms to use), execute retrieval actions via tool calls, evaluate the relevance and sufficiency of retrieved results, and iteratively refine queries or search additional sources until a confidence threshold is met. This pattern supports multi-source retrieval (querying different vector stores, APIs, databases), query decomposition (breaking complex questions into sub-queries), and adaptive retrieval depth based on question complexity.',
      ar: 'يستبدل RAG الوكيلي خط أنابيب الاسترجاع-ثم-التوليد الثابت بحلقة استرجاع يقودها وكيل. يستخدم الوكيل نموذج لغة كبير لتحليل الاستعلام وتخطيط استراتيجية استرجاع (أي الفهارس يُستعلم وأي مصطلحات بحث تُستخدم) وتنفيذ إجراءات الاسترجاع عبر استدعاءات الأدوات وتقييم صلة وكفاية النتائج المسترجعة وتحسين الاستعلامات تكرارياً أو البحث في مصادر إضافية حتى تحقيق عتبة ثقة. يدعم هذا النمط استرجاعاً متعدد المصادر (استعلام مخازن متجهات ومواجهات برمجة وقواعد بيانات مختلفة) وتفكيك الاستعلامات (تقسيم الأسئلة المعقدة إلى استعلامات فرعية) وعمق استرجاع تكيفي بناءً على تعقيد السؤال.',
    },
    analogy: {
      en: 'Standard RAG is like using a search engine once and reading the first page of results. Agentic RAG is like hiring a professional researcher: they start with your question, search multiple databases, read through results critically, follow references to dig deeper, rephrase search terms when initial results are poor, cross-reference findings from different sources, and only report back when they are confident in their answer.',
      ar: 'RAG القياسي مثل استخدام محرك بحث مرة واحدة وقراءة الصفحة الأولى من النتائج. RAG الوكيلي مثل توظيف باحث محترف: يبدأ بسؤالك ويبحث في قواعد بيانات متعددة ويقرأ النتائج بنظرة نقدية ويتبع المراجع للتعمق أكثر ويعيد صياغة مصطلحات البحث عندما تكون النتائج الأولية ضعيفة ويقارن النتائج من مصادر مختلفة ولا يقدم تقريره إلا عندما يكون واثقاً من إجابته.',
    },
    explanation: {
      en: [
        'Standard RAG follows a fixed pipeline: embed the query, search the vector store, stuff the top-k results into a prompt, and generate an answer. This works well for simple factual questions but falls short when questions are complex, ambiguous, or require information from multiple sources.',
        'Agentic RAG introduces an intelligent retrieval agent that orchestrates the search process. The agent first analyzes the user query to understand what information is needed. It may decompose a complex question into multiple sub-questions that can be searched independently.',
        'The agent then selects which retrieval tools to use. It might search a vector database for one sub-question, query a SQL database for another, and call a web search API for a third. This multi-source capability is a key advantage over static RAG pipelines that are locked to a single retrieval source.',
        'After retrieval, the agent evaluates the results: Are they relevant? Do they fully answer the question? Are there contradictions? If the results are insufficient, the agent can reformulate queries, try different search terms, or search additional sources. This iterative refinement loop continues until the agent is satisfied.',
        'Frameworks like LlamaIndex and LangChain provide agent-based retrieval tools. LlamaIndex offers QueryEngine tools that agents can call, while LangChain provides retriever tools that can be composed into agent workflows. Both enable the dynamic, multi-step retrieval that defines agentic RAG.',
      ],
      ar: [
        'يتبع RAG القياسي خط أنابيب ثابت: تضمين الاستعلام والبحث في مخزن المتجهات وحشو أعلى k نتيجة في موجه وتوليد إجابة. يعمل جيداً للأسئلة الواقعية البسيطة لكنه يقصر عندما تكون الأسئلة معقدة أو غامضة أو تتطلب معلومات من مصادر متعددة.',
        'يقدم RAG الوكيلي وكيل استرجاع ذكي ينسق عملية البحث. يحلل الوكيل أولاً استعلام المستخدم لفهم المعلومات المطلوبة. قد يفكك سؤالاً معقداً إلى أسئلة فرعية متعددة يمكن البحث عنها بشكل مستقل.',
        'يختار الوكيل بعد ذلك أدوات الاسترجاع التي سيستخدمها. قد يبحث في قاعدة بيانات متجهات لسؤال فرعي ويستعلم قاعدة بيانات SQL لآخر ويستدعي واجهة بحث ويب لثالث. قدرة المصادر المتعددة هذه ميزة رئيسية مقارنة بخطوط أنابيب RAG الثابتة المحصورة بمصدر استرجاع واحد.',
        'بعد الاسترجاع، يقيّم الوكيل النتائج: هل هي ذات صلة؟ هل تجيب على السؤال بالكامل؟ هل هناك تناقضات؟ إذا كانت النتائج غير كافية، يمكن للوكيل إعادة صياغة الاستعلامات أو تجربة مصطلحات بحث مختلفة أو البحث في مصادر إضافية. تستمر حلقة التحسين التكراري هذه حتى يكون الوكيل راضياً.',
        'توفر أطر مثل LlamaIndex وLangChain أدوات استرجاع قائمة على الوكلاء. يقدم LlamaIndex أدوات QueryEngine يمكن للوكلاء استدعاؤها، بينما يوفر LangChain أدوات استرجاع يمكن تركيبها في سير عمل الوكلاء. كلاهما يتيح الاسترجاع الديناميكي متعدد الخطوات الذي يحدد RAG الوكيلي.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json

client = OpenAI()

class AgenticRAG:
    """Agent that dynamically plans and executes retrieval strategies."""

    def __init__(self, retrievers: dict):
        self.retrievers = retrievers  # {"docs": vec_search, "sql": sql_query, ...}

    def query(self, question: str, max_iterations: int = 3) -> str:
        context_pieces = []

        for i in range(max_iterations):
            # Step 1: Plan retrieval strategy
            plan = self._plan_retrieval(question, context_pieces)

            if plan["action"] == "answer":
                break  # Agent has enough information

            # Step 2: Execute retrieval
            retriever = self.retrievers.get(plan["source"])
            if retriever:
                results = retriever(plan["query"])
                context_pieces.append({
                    "source": plan["source"],
                    "query": plan["query"],
                    "results": results
                })

        # Step 3: Generate final answer with all collected context
        return self._generate_answer(question, context_pieces)

    def _plan_retrieval(self, question: str, existing_context: list) -> dict:
        context_summary = "\\n".join(
            f"[{c['source']}] {c['query']}: {c['results'][:200]}"
            for c in existing_context
        ) if existing_context else "No context retrieved yet."

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""You are a retrieval planning agent.
Question: {question}
Available sources: {list(self.retrievers.keys())}
Already retrieved:
{context_summary}

Decide: Do you have enough to answer, or need more retrieval?
Return JSON: {{"action": "retrieve"|"answer", "source": "...", "query": "..."}}"""}],
            response_format={"type": "json_object"}
        )
        return json.loads(response.choices[0].message.content)

    def _generate_answer(self, question: str, context: list) -> str:
        all_context = "\\n\\n".join(
            f"Source: {c['source']}\\nQuery: {c['query']}\\nResults: {c['results']}"
            for c in context
        )
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user",
                       "content": f"""Answer based on the retrieved context.
Context:
{all_context}

Question: {question}"""}]
        )
        return response.choices[0].message.content`,
      description: {
        en: 'An Agentic RAG system that dynamically plans which sources to query, evaluates retrieved results, and iteratively retrieves more information until it has enough context to answer the question.',
        ar: 'نظام RAG وكيلي يخطط ديناميكياً لأي المصادر يستعلم ويقيّم النتائج المسترجعة ويسترجع معلومات إضافية تكرارياً حتى يكون لديه سياق كافٍ للإجابة على السؤال.',
      },
    },
    commonMistakes: {
      en: [
        'Not setting a maximum iteration limit for the retrieval loop, causing the agent to search endlessly without answering.',
        'Using only one retrieval source when the question requires cross-referencing multiple knowledge bases.',
        'Not evaluating the relevance of retrieved results before adding them to context, polluting the LLM prompt with irrelevant information.',
      ],
      ar: [
        'عدم تعيين حد أقصى لتكرارات حلقة الاسترجاع، مما يتسبب في بحث الوكيل بلا نهاية دون الإجابة.',
        'استخدام مصدر استرجاع واحد فقط عندما يتطلب السؤال مقارنة مرجعية من قواعد معرفة متعددة.',
        'عدم تقييم صلة النتائج المسترجعة قبل إضافتها للسياق، مما يلوث موجه LLM بمعلومات غير ذات صلة.',
      ],
    },
    bestPractices: {
      en: [
        'Implement query decomposition for complex questions — break them into sub-questions that can be searched independently.',
        'Use multiple retrieval sources (vector stores, SQL databases, web search) and let the agent select the best source for each sub-query.',
        'Add a relevance evaluation step after each retrieval to filter out low-quality results before they enter the LLM context.',
        'Set clear stopping criteria: maximum iterations, confidence threshold, or explicit "sufficient information" check by the LLM.',
      ],
      ar: [
        'نفذ تفكيك الاستعلامات للأسئلة المعقدة — قسمها إلى أسئلة فرعية يمكن البحث عنها بشكل مستقل.',
        'استخدم مصادر استرجاع متعددة (مخازن متجهات وقواعد بيانات SQL وبحث الويب) ودع الوكيل يختار المصدر الأفضل لكل استعلام فرعي.',
        'أضف خطوة تقييم صلة بعد كل استرجاع لتصفية النتائج منخفضة الجودة قبل دخولها سياق LLM.',
        'عيّن معايير توقف واضحة: تكرارات قصوى أو عتبة ثقة أو فحص "معلومات كافية" صريح من LLM.',
      ],
    },
    references: [
      { title: 'Agentic RAG - LlamaIndex', url: 'https://docs.llamaindex.ai/en/stable/use_cases/agents/' },
      { title: 'Building Agentic RAG with LangGraph', url: 'https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_agentic_rag/' },
      { title: 'Agentic RAG Overview - Hugging Face', url: 'https://huggingface.co/learn/cookbook/agent_rag' },
    ],
    quiz: [
      {
        id: 'batch7-q13',
        question: {
          en: 'How does Agentic RAG differ from standard RAG?',
          ar: 'كيف يختلف RAG الوكيلي عن RAG القياسي؟',
        },
        options: {
          en: [
            'Agentic RAG does not use vector embeddings',
            'Agentic RAG uses an agent that dynamically plans, executes, and evaluates retrieval in an iterative loop',
            'Agentic RAG only works with SQL databases',
            'Agentic RAG generates responses without any retrieval',
          ],
          ar: [
            'RAG الوكيلي لا يستخدم تضمينات متجهية',
            'RAG الوكيلي يستخدم وكيلاً يخطط وينفذ ويقيّم الاسترجاع ديناميكياً في حلقة تكرارية',
            'RAG الوكيلي يعمل فقط مع قواعد بيانات SQL',
            'RAG الوكيلي يولد استجابات دون أي استرجاع',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Unlike standard RAG which performs a single retrieve-then-generate step, Agentic RAG uses an agent that dynamically plans retrieval strategies, evaluates results, and iteratively refines queries across multiple sources until sufficient information is gathered.',
          ar: 'على عكس RAG القياسي الذي ينفذ خطوة استرجاع-ثم-توليد واحدة، يستخدم RAG الوكيلي وكيلاً يخطط استراتيجيات الاسترجاع ديناميكياً ويقيّم النتائج ويحسّن الاستعلامات تكرارياً عبر مصادر متعددة حتى جمع معلومات كافية.',
        },
      },
      {
        id: 'batch7-q14',
        question: {
          en: 'What is query decomposition in the context of Agentic RAG?',
          ar: 'ما هو تفكيك الاستعلامات في سياق RAG الوكيلي؟',
        },
        options: {
          en: [
            'Translating queries into SQL',
            'Breaking a complex question into simpler sub-questions that can be searched independently',
            'Compressing the query to reduce token usage',
            'Converting text queries into vector embeddings',
          ],
          ar: [
            'ترجمة الاستعلامات إلى SQL',
            'تقسيم سؤال معقد إلى أسئلة فرعية أبسط يمكن البحث عنها بشكل مستقل',
            'ضغط الاستعلام لتقليل استخدام الرموز',
            'تحويل الاستعلامات النصية إلى تضمينات متجهية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Query decomposition breaks a complex question into simpler sub-questions. For example, "Compare the economic policies of country A and country B" becomes two sub-queries: one about country A\'s policies and one about country B\'s policies. Each can be searched independently and results combined.',
          ar: 'تفكيك الاستعلامات يقسم سؤالاً معقداً إلى أسئلة فرعية أبسط. مثلاً، "قارن السياسات الاقتصادية للبلد A والبلد B" يصبح استعلامين فرعيين: واحد عن سياسات البلد A وواحد عن سياسات البلد B. يمكن البحث عن كل منهما بشكل مستقل ودمج النتائج.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. Self-RAG
  // ─────────────────────────────────────────────
  'self-rag': {
    beginnerDefinition: {
      en: 'Self-RAG is a smarter version of retrieval-augmented generation where the AI learns to critique its own work. It decides whether it even needs to retrieve information, checks if the retrieved passages are relevant, and evaluates whether its final answer is actually supported by the evidence — all by itself, without relying on separate models or hard-coded rules.',
      ar: 'Self-RAG هو نسخة أذكى من التوليد المعزز بالاسترجاع حيث يتعلم الذكاء الاصطناعي نقد عمله بنفسه. يقرر ما إذا كان يحتاج فعلاً لاسترجاع معلومات، ويتحقق مما إذا كانت النصوص المسترجعة ذات صلة، ويقيّم ما إذا كانت إجابته النهائية مدعومة فعلاً بالأدلة — كل هذا بنفسه، دون الاعتماد على نماذج منفصلة أو قواعد ثابتة مبرمجة.',
    },
    technicalDefinition: {
      en: 'Self-RAG (Self-Reflective Retrieval-Augmented Generation) trains a single LLM to generate special reflection tokens that control the retrieval and generation process. The model learns four types of reflection tokens: Retrieve (whether retrieval is needed), IsRel (whether a retrieved passage is relevant), IsSup (whether the generation is supported by the passage), and IsUse (overall utility of the response). During inference, the model first decides whether to retrieve, then generates candidate responses with and without retrieved passages, scores them using the reflection tokens, and selects the best response. This self-reflective mechanism enables adaptive retrieval without external classifiers.',
      ar: 'Self-RAG (التوليد المعزز بالاسترجاع ذاتي التأمل) يدرب نموذج لغة كبير واحد لتوليد رموز تأمل خاصة تتحكم في عملية الاسترجاع والتوليد. يتعلم النموذج أربعة أنواع من رموز التأمل: Retrieve (هل الاسترجاع مطلوب)، IsRel (هل النص المسترجع ذو صلة)، IsSup (هل التوليد مدعوم بالنص)، وIsUse (الفائدة الإجمالية للاستجابة). أثناء الاستدلال، يقرر النموذج أولاً ما إذا كان سيسترجع، ثم يولد استجابات مرشحة مع وبدون نصوص مسترجعة، ويسجلها باستخدام رموز التأمل، ويختار أفضل استجابة. تمكن آلية التأمل الذاتي هذه الاسترجاع التكيفي بدون مصنفات خارجية.',
    },
    analogy: {
      en: 'Imagine a student writing an essay. A regular RAG student always looks up references before writing anything. A Self-RAG student is smarter: they first ask "Do I already know this, or do I need to look it up?" If they do look something up, they check "Is this source actually relevant to my essay?" After writing a paragraph, they review it: "Is what I wrote actually supported by my sources, or did I make things up?" This self-checking habit produces more accurate, well-sourced essays.',
      ar: 'تخيل طالباً يكتب مقالاً. طالب RAG العادي دائماً يبحث عن مراجع قبل كتابة أي شيء. طالب Self-RAG أذكى: يسأل أولاً "هل أعرف هذا بالفعل، أم أحتاج للبحث عنه؟" إذا بحث عن شيء، يتحقق "هل هذا المصدر ذو صلة فعلاً بمقالي؟" بعد كتابة فقرة، يراجعها: "هل ما كتبته مدعوم فعلاً بمصادري، أم اختلقت أشياء؟" عادة التحقق الذاتي هذه تنتج مقالات أكثر دقة وموثقة جيداً.',
    },
    explanation: {
      en: [
        'Standard RAG always retrieves, regardless of whether the model already knows the answer. This can introduce noise (irrelevant passages that confuse the model) and unnecessary latency. Self-RAG solves this by making retrieval conditional: the model first assesses whether it needs external information to answer the question.',
        'The key innovation of Self-RAG is the use of reflection tokens — special tokens that the model generates to assess its own behavior. The Retrieve token indicates whether retrieval is needed for the current segment. The IsRel token evaluates whether a retrieved passage is relevant to the query. The IsSup token checks whether the generated text is supported by the retrieved evidence. The IsUse token rates the overall quality and usefulness of the response.',
        'During training, a critic model labels training data with these reflection tokens. The generator model is then fine-tuned on this labeled data, learning to produce reflection tokens as part of its natural generation process. At inference time, no separate critic model is needed — the generator handles everything.',
        'At inference, Self-RAG generates multiple candidate responses. For each segment of text, it may generate a version with retrieval and a version without. It scores all candidates using the reflection tokens and selects the best combination. This allows fine-grained control: some parts of the answer might use retrieval while others rely on parametric knowledge.',
        'Self-RAG demonstrates that language models can learn to be self-aware about the quality of their own outputs. This principle of "built-in self-critique" extends beyond RAG — it is a design pattern that can improve any generative AI system by making the model its own quality checker.',
      ],
      ar: [
        'RAG القياسي يسترجع دائماً، بغض النظر عما إذا كان النموذج يعرف الإجابة بالفعل. هذا قد يدخل ضوضاء (نصوص غير ذات صلة تربك النموذج) وتأخيراً غير ضروري. يحل Self-RAG هذا بجعل الاسترجاع مشروطاً: يقيّم النموذج أولاً ما إذا كان يحتاج معلومات خارجية للإجابة على السؤال.',
        'الابتكار الرئيسي في Self-RAG هو استخدام رموز التأمل — رموز خاصة يولدها النموذج لتقييم سلوكه الخاص. رمز Retrieve يشير إلى ما إذا كان الاسترجاع مطلوباً للجزء الحالي. رمز IsRel يقيّم ما إذا كان النص المسترجع ذا صلة بالاستعلام. رمز IsSup يتحقق مما إذا كان النص المولد مدعوماً بالأدلة المسترجعة. رمز IsUse يقيّم الجودة الإجمالية وفائدة الاستجابة.',
        'أثناء التدريب، يقوم نموذج ناقد بوسم بيانات التدريب برموز التأمل هذه. يتم بعد ذلك ضبط نموذج المُولد بدقة على هذه البيانات الموسومة، متعلماً إنتاج رموز التأمل كجزء من عملية التوليد الطبيعية. عند الاستدلال، لا حاجة لنموذج ناقد منفصل — يتولى المُولد كل شيء.',
        'عند الاستدلال، يولد Self-RAG استجابات مرشحة متعددة. لكل جزء من النص، قد يولد نسخة مع استرجاع ونسخة بدون. يسجل جميع المرشحين باستخدام رموز التأمل ويختار أفضل تركيبة. هذا يتيح تحكماً دقيقاً: بعض أجزاء الإجابة قد تستخدم الاسترجاع بينما تعتمد أخرى على المعرفة البارامترية.',
        'يُظهر Self-RAG أن نماذج اللغة يمكنها تعلم الوعي الذاتي بجودة مخرجاتها الخاصة. مبدأ "النقد الذاتي المدمج" هذا يمتد إلى ما بعد RAG — إنه نمط تصميم يمكن أن يحسن أي نظام ذكاء اصطناعي توليدي بجعل النموذج فاحص جودته الخاص.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI

client = OpenAI()

class SelfRAG:
    """Self-reflective RAG that decides when and what to retrieve."""

    def __init__(self, retriever):
        self.retriever = retriever

    def query(self, question: str) -> str:
        # Step 1: Decide if retrieval is needed
        needs_retrieval = self._assess_retrieval_need(question)

        if not needs_retrieval:
            # Generate without retrieval (parametric knowledge)
            return self._generate_direct(question)

        # Step 2: Retrieve and evaluate relevance
        passages = self.retriever(question, top_k=5)
        relevant = self._filter_relevant(question, passages)

        if not relevant:
            return self._generate_direct(question)

        # Step 3: Generate with retrieved context
        response = self._generate_with_context(question, relevant)

        # Step 4: Self-critique — is the response supported?
        support_score = self._check_support(response, relevant)
        if support_score < 0.5:
            # Low support — try regenerating with different emphasis
            response = self._generate_with_context(
                question, relevant, emphasis="strict"
            )

        return response

    def _assess_retrieval_need(self, question: str) -> bool:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""Does this question require
retrieving external information, or can it be answered from general knowledge?
Question: {question}
Answer with just YES (needs retrieval) or NO (general knowledge suffices)."""}]
        )
        return "YES" in response.choices[0].message.content.upper()

    def _filter_relevant(self, question: str, passages: list) -> list:
        relevant = []
        for passage in passages:
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[{"role": "user", "content": f"""Is this passage relevant
to answering the question?
Question: {question}
Passage: {passage}
Answer: RELEVANT or IRRELEVANT"""}]
            )
            if "RELEVANT" in response.choices[0].message.content.upper():
                relevant.append(passage)
        return relevant

    def _check_support(self, response: str, passages: list) -> float:
        result = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""Rate how well this response
is supported by the provided passages (0.0 to 1.0).
Response: {response}
Passages: {passages}
Return only the numeric score."""}]
        )
        try:
            return float(result.choices[0].message.content.strip())
        except ValueError:
            return 0.5

    def _generate_direct(self, question: str) -> str:
        r = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": question}]
        )
        return r.choices[0].message.content

    def _generate_with_context(self, question: str, passages: list,
                                emphasis: str = "normal") -> str:
        instruction = "Answer strictly based on the passages only." \\
            if emphasis == "strict" else "Answer using the passages as context."
        r = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""{instruction}
Passages: {passages}
Question: {question}"""}]
        )
        return r.choices[0].message.content`,
      description: {
        en: 'A Self-RAG implementation that decides whether retrieval is needed, filters relevant passages, generates an answer, and self-critiques whether the answer is supported by evidence.',
        ar: 'تنفيذ Self-RAG يقرر ما إذا كان الاسترجاع مطلوباً ويصفي النصوص ذات الصلة ويولد إجابة ويقوم بنقد ذاتي لما إذا كانت الإجابة مدعومة بالأدلة.',
      },
    },
    commonMistakes: {
      en: [
        'Always retrieving regardless of the question type, negating the key benefit of Self-RAG which is adaptive retrieval.',
        'Not implementing the support checking step, allowing hallucinated content that is not grounded in retrieved evidence.',
        'Using a single binary relevant/irrelevant classification instead of graded relevance scoring for retrieved passages.',
      ],
      ar: [
        'الاسترجاع دائماً بغض النظر عن نوع السؤال، مما يلغي الفائدة الرئيسية لـ Self-RAG وهي الاسترجاع التكيفي.',
        'عدم تنفيذ خطوة فحص الدعم، مما يسمح بمحتوى مُختلق غير مبني على أدلة مسترجعة.',
        'استخدام تصنيف ثنائي واحد ذو صلة/غير ذو صلة بدلاً من تسجيل صلة متدرج للنصوص المسترجعة.',
      ],
    },
    bestPractices: {
      en: [
        'Implement all four reflection stages: retrieval necessity, relevance evaluation, generation, and support verification.',
        'Generate multiple candidate responses and score them against retrieved evidence, selecting the most well-supported one.',
        'Cache retrieval necessity decisions for common question patterns to reduce latency on repeated question types.',
        'Use graded relevance scoring rather than binary classification to better rank retrieved passages.',
      ],
      ar: [
        'نفذ جميع مراحل التأمل الأربع: ضرورة الاسترجاع وتقييم الصلة والتوليد والتحقق من الدعم.',
        'ولّد استجابات مرشحة متعددة وسجلها مقابل الأدلة المسترجعة واختر الأكثر دعماً.',
        'خزّن قرارات ضرورة الاسترجاع للأنماط الشائعة من الأسئلة لتقليل التأخير على أنواع الأسئلة المتكررة.',
        'استخدم تسجيل صلة متدرج بدلاً من التصنيف الثنائي لترتيب النصوص المسترجعة بشكل أفضل.',
      ],
    },
    references: [
      { title: 'Self-RAG: Learning to Retrieve, Generate, and Critique (Paper)', url: 'https://arxiv.org/abs/2310.11511' },
      { title: 'Self-RAG GitHub Repository', url: 'https://github.com/AkariAsai/self-rag' },
      { title: 'Self-Reflective RAG with LangGraph', url: 'https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_self_rag/' },
    ],
    quiz: [
      {
        id: 'batch7-q15',
        question: {
          en: 'What are the reflection tokens used in Self-RAG?',
          ar: 'ما هي رموز التأمل المستخدمة في Self-RAG؟',
        },
        options: {
          en: [
            'Start, Stop, Continue, Reset',
            'Retrieve, IsRel, IsSup, IsUse',
            'Query, Search, Rank, Answer',
            'Encode, Decode, Evaluate, Output',
          ],
          ar: [
            'بداية، توقف، متابعة، إعادة تعيين',
            'Retrieve وIsRel وIsSup وIsUse',
            'استعلام، بحث، ترتيب، إجابة',
            'تشفير، فك تشفير، تقييم، مخرجات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Self-RAG uses four reflection tokens: Retrieve (is retrieval needed?), IsRel (is the passage relevant?), IsSup (is the generation supported by evidence?), and IsUse (is the response useful overall?).',
          ar: 'يستخدم Self-RAG أربعة رموز تأمل: Retrieve (هل الاسترجاع مطلوب؟)، IsRel (هل النص ذو صلة؟)، IsSup (هل التوليد مدعوم بالأدلة؟)، وIsUse (هل الاستجابة مفيدة بشكل عام؟).',
        },
      },
      {
        id: 'batch7-q16',
        question: {
          en: 'What is the key difference between Self-RAG and standard RAG regarding retrieval?',
          ar: 'ما هو الفرق الرئيسي بين Self-RAG وRAG القياسي بخصوص الاسترجاع؟',
        },
        options: {
          en: [
            'Self-RAG uses a different embedding model',
            'Self-RAG makes retrieval conditional — it only retrieves when the model determines external information is needed',
            'Self-RAG retrieves from more sources simultaneously',
            'Self-RAG skips retrieval entirely',
          ],
          ar: [
            'Self-RAG يستخدم نموذج تضمين مختلف',
            'Self-RAG يجعل الاسترجاع مشروطاً — يسترجع فقط عندما يحدد النموذج أن المعلومات الخارجية مطلوبة',
            'Self-RAG يسترجع من مصادر أكثر في وقت واحد',
            'Self-RAG يتخطى الاسترجاع بالكامل',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Standard RAG always retrieves for every query. Self-RAG makes retrieval conditional: the model first assesses whether it needs external information, only retrieving when necessary. This reduces noise from irrelevant passages and improves efficiency.',
          ar: 'RAG القياسي يسترجع دائماً لكل استعلام. Self-RAG يجعل الاسترجاع مشروطاً: يقيّم النموذج أولاً ما إذا كان يحتاج معلومات خارجية، ويسترجع فقط عند الحاجة. هذا يقلل الضوضاء من النصوص غير ذات الصلة ويحسن الكفاءة.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. Multi-Hop Retrieval
  // ─────────────────────────────────────────────
  'multi-hop-retrieval': {
    beginnerDefinition: {
      en: 'Multi-hop retrieval is a technique for answering complex questions that cannot be answered by a single search. The system performs multiple retrieval steps, where each step uses information from previous steps to guide the next search — like following a chain of clues where each clue leads to the next one.',
      ar: 'الاسترجاع متعدد القفزات هو تقنية للإجابة على أسئلة معقدة لا يمكن الإجابة عليها ببحث واحد. ينفذ النظام خطوات استرجاع متعددة، حيث تستخدم كل خطوة معلومات من الخطوات السابقة لتوجيه البحث التالي — مثل تتبع سلسلة من القرائن حيث تقود كل قرينة إلى التالية.',
    },
    technicalDefinition: {
      en: 'Multi-hop retrieval decomposes complex questions that require reasoning over multiple pieces of evidence into a sequence of retrieval steps. Each hop retrieves a set of documents or passages, extracts intermediate answers or entities, and formulates a new query for the next hop. Techniques include iterative retrieval with query reformulation, chain-of-thought decomposition into sub-questions, bridge entity extraction for linking facts across documents, and beam search over retrieval paths. Benchmarks like HotpotQA and MuSiQue specifically evaluate multi-hop reasoning capability.',
      ar: 'الاسترجاع متعدد القفزات يفكك الأسئلة المعقدة التي تتطلب الاستدلال عبر أجزاء متعددة من الأدلة إلى تسلسل من خطوات الاسترجاع. كل قفزة تسترجع مجموعة من المستندات أو النصوص وتستخرج إجابات أو كيانات وسيطة وتصوغ استعلاماً جديداً للقفزة التالية. تشمل التقنيات الاسترجاع التكراري مع إعادة صياغة الاستعلام وتفكيك سلسلة الأفكار إلى أسئلة فرعية واستخراج كيانات الجسر لربط الحقائق عبر المستندات والبحث الشعاعي عبر مسارات الاسترجاع. معايير مثل HotpotQA وMuSiQue تقيّم تحديداً قدرة الاستدلال متعدد القفزات.',
    },
    analogy: {
      en: 'Multi-hop retrieval is like solving a mystery. The detective cannot solve the case with one piece of evidence. First, they find a fingerprint (hop 1), which leads to a suspect name (intermediate result). They search for information about that suspect (hop 2), finding an address. They investigate the address (hop 3) and discover the final piece of evidence. Each "hop" brings new information that guides the next search, building a chain of reasoning to the answer.',
      ar: 'الاسترجاع متعدد القفزات مثل حل لغز. لا يمكن للمحقق حل القضية بدليل واحد. أولاً، يجد بصمة (القفزة 1)، تقوده إلى اسم مشتبه (نتيجة وسيطة). يبحث عن معلومات حول ذلك المشتبه (القفزة 2)، فيجد عنواناً. يحقق في العنوان (القفزة 3) ويكتشف الدليل النهائي. كل "قفزة" تجلب معلومات جديدة توجه البحث التالي، بانياً سلسلة استدلال نحو الإجابة.',
    },
    explanation: {
      en: [
        'Many real-world questions require connecting information from multiple sources. For example: "What university did the inventor of the World Wide Web attend?" requires first finding who invented the WWW (Tim Berners-Lee), then finding which university he attended (Oxford). A single retrieval step is unlikely to return a document containing both facts.',
        'The simplest multi-hop approach is iterative retrieval with query reformulation. The system performs an initial search, extracts key information (entities, facts), and uses that information to formulate a new, more specific query. This process repeats until the final answer is found or a maximum number of hops is reached.',
        'Chain-of-thought decomposition is a more structured approach. An LLM breaks the original question into an ordered sequence of sub-questions. Each sub-question is answered through retrieval, and the answer feeds into the next sub-question. For example: Q1: "Who invented the WWW?" -> A1: "Tim Berners-Lee" -> Q2: "What university did Tim Berners-Lee attend?" -> A2: "Oxford".',
        'Bridge entity extraction focuses on finding entities that connect different pieces of information. In the example above, "Tim Berners-Lee" is the bridge entity connecting the WWW to the university. The system identifies these bridge entities and uses them to traverse from one document to another, building a chain of evidence.',
        'The main challenges in multi-hop retrieval include error propagation (mistakes in early hops cascade to later ones), increased latency (each hop adds retrieval and LLM processing time), and distraction (retrieving irrelevant information at intermediate steps that leads the chain astray). Careful sub-question design and intermediate validation help mitigate these issues.',
      ],
      ar: [
        'كثير من الأسئلة الواقعية تتطلب ربط معلومات من مصادر متعددة. مثال: "أي جامعة التحق بها مخترع الشبكة العنكبوتية العالمية؟" يتطلب أولاً إيجاد من اخترع الويب (تيم بيرنرز-لي)، ثم إيجاد أي جامعة التحق بها (أكسفورد). خطوة استرجاع واحدة من غير المحتمل أن تعيد مستنداً يحتوي على الحقيقتين معاً.',
        'أبسط نهج متعدد القفزات هو الاسترجاع التكراري مع إعادة صياغة الاستعلام. ينفذ النظام بحثاً أولياً ويستخرج معلومات رئيسية (كيانات وحقائق) ويستخدم تلك المعلومات لصياغة استعلام جديد أكثر تحديداً. تتكرر هذه العملية حتى إيجاد الإجابة النهائية أو الوصول لعدد أقصى من القفزات.',
        'تفكيك سلسلة الأفكار هو نهج أكثر تنظيماً. يقسم نموذج لغة كبير السؤال الأصلي إلى تسلسل مرتب من الأسئلة الفرعية. كل سؤال فرعي يُجاب عليه من خلال الاسترجاع، والإجابة تغذي السؤال الفرعي التالي. مثال: س1: "من اخترع الويب؟" -> ج1: "تيم بيرنرز-لي" -> س2: "أي جامعة التحق بها تيم بيرنرز-لي؟" -> ج2: "أكسفورد".',
        'استخراج كيانات الجسر يركز على إيجاد الكيانات التي تربط أجزاء مختلفة من المعلومات. في المثال أعلاه، "تيم بيرنرز-لي" هو كيان الجسر الذي يربط الويب بالجامعة. يحدد النظام كيانات الجسر هذه ويستخدمها للتنقل من مستند إلى آخر، بانياً سلسلة من الأدلة.',
        'التحديات الرئيسية في الاسترجاع متعدد القفزات تشمل انتشار الأخطاء (أخطاء القفزات المبكرة تتسلسل إلى اللاحقة)، وزيادة التأخير (كل قفزة تضيف وقت استرجاع ومعالجة LLM)، والتشتت (استرجاع معلومات غير ذات صلة في خطوات وسيطة تقود السلسلة بعيداً). التصميم الدقيق للأسئلة الفرعية والتحقق الوسيط يساعدان في تخفيف هذه المشاكل.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json

client = OpenAI()

class MultiHopRetriever:
    """Answers complex questions through iterative retrieval hops."""

    def __init__(self, retriever, max_hops: int = 3):
        self.retriever = retriever
        self.max_hops = max_hops

    def answer(self, question: str) -> dict:
        # Step 1: Decompose into sub-questions
        sub_questions = self._decompose(question)

        # Step 2: Iteratively answer each sub-question
        chain = []
        for i, sub_q in enumerate(sub_questions):
            # Reformulate using previous answers
            context = "\\n".join(
                f"Q: {c['question']} A: {c['answer']}"
                for c in chain
            )
            reformulated = self._reformulate(sub_q, context)

            # Retrieve relevant passages
            passages = self.retriever(reformulated, top_k=3)

            # Extract answer for this hop
            answer = self._extract_answer(reformulated, passages)
            chain.append({
                "hop": i + 1,
                "question": reformulated,
                "answer": answer,
                "evidence": passages[:2]
            })

        # Step 3: Synthesize final answer
        final = self._synthesize(question, chain)
        return {"answer": final, "reasoning_chain": chain}

    def _decompose(self, question: str) -> list[str]:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""Break this complex question
into 2-4 simpler sub-questions that build on each other.
Question: {question}
Return as JSON list: ["sub_q1", "sub_q2", ...]"""}],
            response_format={"type": "json_object"}
        )
        data = json.loads(response.choices[0].message.content)
        return data.get("questions", data.get("sub_questions", [question]))

    def _reformulate(self, sub_question: str, context: str) -> str:
        if not context:
            return sub_question
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""Rewrite this question using
the known information to make it more specific.
Known: {context}
Question: {sub_question}
Return only the reformulated question."""}]
        )
        return response.choices[0].message.content.strip()

    def _extract_answer(self, question: str, passages: list) -> str:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""Answer this question concisely
based on the passages.
Passages: {passages}
Question: {question}"""}]
        )
        return response.choices[0].message.content.strip()

    def _synthesize(self, question: str, chain: list) -> str:
        reasoning = "\\n".join(
            f"Hop {c['hop']}: {c['question']} -> {c['answer']}"
            for c in chain
        )
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": f"""Using this chain of reasoning,
answer the original question.
{reasoning}
Original question: {question}"""}]
        )
        return response.choices[0].message.content`,
      description: {
        en: 'A multi-hop retrieval system that decomposes complex questions into sub-questions, iteratively retrieves and answers each one, and synthesizes the reasoning chain into a final answer.',
        ar: 'نظام استرجاع متعدد القفزات يفكك الأسئلة المعقدة إلى أسئلة فرعية ويسترجع ويجيب على كل واحدة تكرارياً ويركب سلسلة الاستدلال في إجابة نهائية.',
      },
    },
    commonMistakes: {
      en: [
        'Not validating intermediate answers before using them in subsequent hops, causing error propagation through the reasoning chain.',
        'Decomposing questions into too many sub-questions, adding unnecessary latency without improving answer quality.',
        'Failing to reformulate sub-questions using context from previous hops, leading to generic searches that miss specific information.',
      ],
      ar: [
        'عدم التحقق من الإجابات الوسيطة قبل استخدامها في القفزات اللاحقة، مما يسبب انتشار الأخطاء عبر سلسلة الاستدلال.',
        'تفكيك الأسئلة إلى أسئلة فرعية كثيرة جداً، مما يضيف تأخيراً غير ضروري دون تحسين جودة الإجابة.',
        'الفشل في إعادة صياغة الأسئلة الفرعية باستخدام سياق من القفزات السابقة، مما يؤدي إلى عمليات بحث عامة تفوت معلومات محددة.',
      ],
    },
    bestPractices: {
      en: [
        'Validate intermediate answers with confidence scores before using them in subsequent retrieval hops.',
        'Use bridge entity extraction to identify key entities that connect facts across different documents.',
        'Implement early stopping when the chain reaches sufficient evidence to answer the question, avoiding unnecessary hops.',
        'Maintain the full reasoning chain for transparency and debugging, showing users how the final answer was derived.',
      ],
      ar: [
        'تحقق من الإجابات الوسيطة بدرجات ثقة قبل استخدامها في قفزات الاسترجاع اللاحقة.',
        'استخدم استخراج كيانات الجسر لتحديد الكيانات الرئيسية التي تربط الحقائق عبر مستندات مختلفة.',
        'نفذ التوقف المبكر عندما تصل السلسلة إلى أدلة كافية للإجابة على السؤال، متجنباً القفزات غير الضرورية.',
        'حافظ على سلسلة الاستدلال الكاملة للشفافية والتنقيح، مُظهراً للمستخدمين كيف تم استخلاص الإجابة النهائية.',
      ],
    },
    references: [
      { title: 'HotpotQA: Multi-Hop Question Answering Dataset', url: 'https://hotpotqa.github.io/' },
      { title: 'Multi-Hop Question Answering Survey', url: 'https://arxiv.org/abs/2204.09140' },
      { title: 'IRCoT: Interleaving Retrieval with Chain-of-Thought', url: 'https://arxiv.org/abs/2212.10509' },
    ],
    quiz: [
      {
        id: 'batch7-q17',
        question: {
          en: 'What is a "bridge entity" in multi-hop retrieval?',
          ar: 'ما هو "كيان الجسر" في الاسترجاع متعدد القفزات؟',
        },
        options: {
          en: [
            'A database that connects two different search engines',
            'An entity that appears in multiple documents and connects different pieces of information needed to answer the question',
            'A special token used to separate retrieval hops',
            'A type of vector embedding that links similar documents',
          ],
          ar: [
            'قاعدة بيانات تربط محركي بحث مختلفين',
            'كيان يظهر في مستندات متعددة ويربط أجزاء مختلفة من المعلومات المطلوبة للإجابة على السؤال',
            'رمز خاص يستخدم للفصل بين قفزات الاسترجاع',
            'نوع من التضمين المتجهي يربط المستندات المتشابهة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A bridge entity is a key entity that connects information across multiple documents. For example, in "What university did the inventor of the WWW attend?", "Tim Berners-Lee" is the bridge entity connecting the fact about the WWW invention to the fact about university attendance.',
          ar: 'كيان الجسر هو كيان رئيسي يربط المعلومات عبر مستندات متعددة. مثلاً، في "أي جامعة التحق بها مخترع الويب؟"، "تيم بيرنرز-لي" هو كيان الجسر الذي يربط حقيقة اختراع الويب بحقيقة الالتحاق بالجامعة.',
        },
      },
      {
        id: 'batch7-q18',
        question: {
          en: 'What is the main risk of error propagation in multi-hop retrieval?',
          ar: 'ما هو الخطر الرئيسي لانتشار الأخطاء في الاسترجاع متعدد القفزات؟',
        },
        options: {
          en: [
            'The system uses too much memory',
            'A mistake in an early hop leads to wrong queries and wrong answers in all subsequent hops',
            'The retrieval becomes faster but less accurate',
            'The system can only retrieve from one source',
          ],
          ar: [
            'يستخدم النظام ذاكرة كبيرة جداً',
            'خطأ في قفزة مبكرة يؤدي إلى استعلامات وإجابات خاطئة في جميع القفزات اللاحقة',
            'يصبح الاسترجاع أسرع لكن أقل دقة',
            'يمكن للنظام الاسترجاع من مصدر واحد فقط',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Error propagation in multi-hop retrieval means that a mistake at an early hop (e.g., retrieving the wrong entity) cascades through subsequent hops, leading each following query to search for wrong information and ultimately producing an incorrect final answer.',
          ar: 'انتشار الأخطاء في الاسترجاع متعدد القفزات يعني أن خطأ في قفزة مبكرة (مثل استرجاع الكيان الخاطئ) يتسلسل عبر القفزات اللاحقة، مما يقود كل استعلام تالٍ للبحث عن معلومات خاطئة وإنتاج إجابة نهائية غير صحيحة في النهاية.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. RL Basics: MDP, Policies
  // ─────────────────────────────────────────────
  'rl-basics-mdp-policies': {
    beginnerDefinition: {
      en: 'Reinforcement Learning (RL) is how an AI agent learns by trial and error, like a child learning to ride a bike. The agent takes actions in an environment, receives rewards (good outcome) or penalties (bad outcome), and gradually figures out the best strategy (policy) to maximize its total reward. A Markov Decision Process (MDP) is the mathematical framework that formally describes this learning setup.',
      ar: 'التعلم بالتعزيز (RL) هو كيف يتعلم وكيل الذكاء الاصطناعي بالتجربة والخطأ، مثل طفل يتعلم ركوب الدراجة. يتخذ الوكيل إجراءات في بيئة ويتلقى مكافآت (نتيجة جيدة) أو عقوبات (نتيجة سيئة) ويكتشف تدريجياً أفضل استراتيجية (سياسة) لتعظيم مكافأته الإجمالية. عملية قرار ماركوف (MDP) هي الإطار الرياضي الذي يصف هذا الإعداد التعليمي بشكل رسمي.',
    },
    technicalDefinition: {
      en: 'A Markov Decision Process (MDP) is defined as a tuple (S, A, P, R, γ) where S is the set of states, A is the set of actions, P(s\'|s,a) is the state transition probability function, R(s,a,s\') is the reward function, and γ ∈ [0,1] is the discount factor for future rewards. A policy π(a|s) maps states to action probabilities. The goal of RL is to find the optimal policy π* that maximizes the expected cumulative discounted reward (return): E[Σ γ^t · r_t]. The value function V^π(s) represents the expected return from state s following policy π, and the action-value function Q^π(s,a) represents the expected return from taking action a in state s then following π.',
      ar: 'عملية قرار ماركوف (MDP) تُعرّف كصف (S, A, P, R, γ) حيث S هي مجموعة الحالات، وA هي مجموعة الإجراءات، وP(s\'|s,a) هي دالة احتمالات انتقال الحالة، وR(s,a,s\') هي دالة المكافأة، وγ ∈ [0,1] هو عامل الخصم للمكافآت المستقبلية. السياسة π(a|s) تربط الحالات باحتمالات الإجراءات. هدف التعلم بالتعزيز هو إيجاد السياسة المثلى π* التي تعظم المكافأة التراكمية المخصومة المتوقعة (العائد): E[Σ γ^t · r_t]. دالة القيمة V^π(s) تمثل العائد المتوقع من الحالة s باتباع السياسة π، ودالة قيمة الفعل Q^π(s,a) تمثل العائد المتوقع من اتخاذ الإجراء a في الحالة s ثم اتباع π.',
    },
    analogy: {
      en: 'RL is like training a dog. The dog (agent) is in your house (environment). It can do various things (actions) like sit, fetch, or chew shoes. When it sits on command, you give a treat (positive reward). When it chews shoes, you say "no" (negative reward). Over time, the dog learns a policy: "when the human says sit, I should sit" because it has learned which actions lead to treats. The MDP is the formal description of this whole setup — the possible states, actions, transition rules, and rewards.',
      ar: 'التعلم بالتعزيز مثل تدريب كلب. الكلب (الوكيل) في منزلك (البيئة). يمكنه فعل أشياء مختلفة (إجراءات) مثل الجلوس أو الإحضار أو مضغ الأحذية. عندما يجلس بناءً على الأمر، تعطيه مكافأة (مكافأة إيجابية). عندما يمضغ الأحذية، تقول "لا" (مكافأة سلبية). مع الوقت، يتعلم الكلب سياسة: "عندما يقول الإنسان اجلس، يجب أن أجلس" لأنه تعلم أي الإجراءات تؤدي إلى المكافآت. MDP هو الوصف الرسمي لهذا الإعداد بأكمله — الحالات الممكنة والإجراءات وقواعد الانتقال والمكافآت.',
    },
    explanation: {
      en: [
        'Reinforcement Learning differs fundamentally from supervised learning. In supervised learning, you have labeled examples (input-output pairs) to learn from. In RL, the agent must discover which actions are good through experience — there are no labels, only rewards that come after actions are taken.',
        'The Markov Decision Process provides the formal framework for RL. The "Markov" property means that the future depends only on the current state, not on the history of how you got there. This simplification makes RL mathematically tractable. An MDP defines states (what the agent observes), actions (what the agent can do), transitions (how actions change the state), rewards (feedback signals), and a discount factor (how much to value future vs. immediate rewards).',
        'A policy is the agent\'s strategy — a mapping from states to actions. A deterministic policy directly says "in state X, do action Y." A stochastic policy gives probability distributions: "in state X, do action Y with 70% probability and action Z with 30% probability." The optimal policy is the one that maximizes cumulative reward over time.',
        'Value functions are central to many RL algorithms. The state value function V(s) tells you how good it is to be in a particular state (expected future reward from that state). The action-value function Q(s,a) tells you how good it is to take a specific action in a specific state. If you know the optimal Q-function, the optimal policy is simply: always pick the action with the highest Q-value.',
        'The discount factor γ (gamma) controls how far-sighted the agent is. With γ = 0, the agent only cares about immediate reward. With γ close to 1, the agent values future rewards almost as much as immediate ones. This parameter is crucial: too low makes the agent short-sighted, too high makes learning unstable.',
        'RL is foundational to AI agents because it provides the framework for agents that learn from interaction with their environment. RLHF (Reinforcement Learning from Human Feedback), which is used to train ChatGPT and other LLMs, is built directly on these MDP and policy concepts.',
      ],
      ar: [
        'يختلف التعلم بالتعزيز جوهرياً عن التعلم المُشرف عليه. في التعلم المُشرف عليه، لديك أمثلة موسومة (أزواج مدخلات-مخرجات) للتعلم منها. في التعلم بالتعزيز، يجب على الوكيل اكتشاف أي الإجراءات جيدة من خلال التجربة — لا توجد وسوم، فقط مكافآت تأتي بعد اتخاذ الإجراءات.',
        'توفر عملية قرار ماركوف الإطار الرسمي للتعلم بالتعزيز. خاصية "ماركوف" تعني أن المستقبل يعتمد فقط على الحالة الحالية، وليس على تاريخ كيف وصلت إليها. هذا التبسيط يجعل التعلم بالتعزيز قابلاً للمعالجة رياضياً. يُعرّف MDP الحالات (ما يلاحظه الوكيل) والإجراءات (ما يمكن للوكيل فعله) والانتقالات (كيف تغير الإجراءات الحالة) والمكافآت (إشارات التغذية الراجعة) وعامل الخصم (مقدار تقييم المكافآت المستقبلية مقابل الفورية).',
        'السياسة هي استراتيجية الوكيل — ربط من الحالات إلى الإجراءات. السياسة الحتمية تقول مباشرة "في الحالة X، افعل الإجراء Y." السياسة الاحتمالية تعطي توزيعات احتمالية: "في الحالة X، افعل الإجراء Y باحتمال 70% والإجراء Z باحتمال 30%." السياسة المثلى هي التي تعظم المكافأة التراكمية مع مرور الوقت.',
        'دوال القيمة مركزية في كثير من خوارزميات التعلم بالتعزيز. دالة قيمة الحالة V(s) تخبرك كم هو جيد أن تكون في حالة معينة (المكافأة المستقبلية المتوقعة من تلك الحالة). دالة قيمة الفعل Q(s,a) تخبرك كم هو جيد اتخاذ إجراء معين في حالة معينة. إذا عرفت دالة Q المثلى، فالسياسة المثلى ببساطة هي: اختر دائماً الإجراء بأعلى قيمة Q.',
        'عامل الخصم γ (غاما) يتحكم في مدى بُعد نظر الوكيل. مع γ = 0، يهتم الوكيل فقط بالمكافأة الفورية. مع γ قريب من 1، يقدر الوكيل المكافآت المستقبلية تقريباً بنفس قدر الفورية. هذا المعامل حاسم: منخفض جداً يجعل الوكيل قصير النظر، عالٍ جداً يجعل التعلم غير مستقر.',
        'التعلم بالتعزيز أساسي لوكلاء الذكاء الاصطناعي لأنه يوفر الإطار للوكلاء الذين يتعلمون من التفاعل مع بيئتهم. RLHF (التعلم بالتعزيز من التغذية الراجعة البشرية)، المستخدم لتدريب ChatGPT ونماذج لغة كبيرة أخرى، مبني مباشرة على مفاهيم MDP والسياسة هذه.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import numpy as np

class GridWorldMDP:
    """Simple grid world MDP for learning RL basics."""

    def __init__(self, size: int = 4):
        self.size = size
        self.n_states = size * size
        self.n_actions = 4  # up, down, left, right
        self.goal = (size - 1, size - 1)
        self.gamma = 0.9  # Discount factor
        self.state = (0, 0)  # Start position

    def step(self, action: int) -> tuple:
        """Take action, return (next_state, reward, done)."""
        moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # up, down, left, right
        dr, dc = moves[action]
        new_r = max(0, min(self.size - 1, self.state[0] + dr))
        new_c = max(0, min(self.size - 1, self.state[1] + dc))
        self.state = (new_r, new_c)

        if self.state == self.goal:
            return self.state, 1.0, True   # Reached goal
        return self.state, -0.01, False     # Small penalty per step

    def reset(self):
        self.state = (0, 0)
        return self.state

def value_iteration(mdp: GridWorldMDP, theta: float = 1e-6) -> dict:
    """Find optimal policy using value iteration."""
    V = np.zeros((mdp.size, mdp.size))

    while True:
        delta = 0
        for r in range(mdp.size):
            for c in range(mdp.size):
                if (r, c) == mdp.goal:
                    continue
                v = V[r, c]
                values = []
                for a in range(mdp.n_actions):
                    mdp.state = (r, c)
                    next_s, reward, done = mdp.step(a)
                    next_v = 0 if done else V[next_s[0], next_s[1]]
                    values.append(reward + mdp.gamma * next_v)
                V[r, c] = max(values)
                delta = max(delta, abs(v - V[r, c]))
        if delta < theta:
            break

    # Extract policy from value function
    policy = {}
    action_names = ["up", "down", "left", "right"]
    for r in range(mdp.size):
        for c in range(mdp.size):
            if (r, c) == mdp.goal:
                policy[(r, c)] = "GOAL"
                continue
            best_a, best_v = 0, float("-inf")
            for a in range(mdp.n_actions):
                mdp.state = (r, c)
                next_s, reward, done = mdp.step(a)
                next_v = 0 if done else V[next_s[0], next_s[1]]
                val = reward + mdp.gamma * next_v
                if val > best_v:
                    best_a, best_v = a, val
            policy[(r, c)] = action_names[best_a]

    return policy

# Run value iteration
mdp = GridWorldMDP(size=4)
optimal_policy = value_iteration(mdp)
for r in range(4):
    row = [optimal_policy[(r, c)][:1].upper() for c in range(4)]
    print(" ".join(f"{x:>4}" for x in row))`,
      description: {
        en: 'A grid world MDP with value iteration to find the optimal policy. The agent learns to navigate from the top-left corner to the bottom-right goal with minimum steps.',
        ar: 'عالم شبكي MDP مع تكرار القيمة لإيجاد السياسة المثلى. يتعلم الوكيل التنقل من الزاوية العلوية اليسرى إلى الهدف في الزاوية السفلية اليمنى بأقل عدد من الخطوات.',
      },
    },
    commonMistakes: {
      en: [
        'Choosing a discount factor of exactly 1.0, which can cause value functions to diverge in infinite-horizon problems.',
        'Designing sparse reward functions where the agent rarely receives feedback, making learning extremely slow.',
        'Violating the Markov property by not including all relevant information in the state representation.',
        'Confusing the reward signal with the value function — reward is immediate feedback, value is expected cumulative future reward.',
      ],
      ar: [
        'اختيار عامل خصم يساوي 1.0 بالضبط، مما قد يتسبب في تباعد دوال القيمة في مشاكل الأفق اللانهائي.',
        'تصميم دوال مكافأة متناثرة حيث نادراً ما يتلقى الوكيل تغذية راجعة، مما يجعل التعلم بطيئاً للغاية.',
        'انتهاك خاصية ماركوف بعدم تضمين جميع المعلومات ذات الصلة في تمثيل الحالة.',
        'الخلط بين إشارة المكافأة ودالة القيمة — المكافأة هي تغذية راجعة فورية، القيمة هي المكافأة التراكمية المستقبلية المتوقعة.',
      ],
    },
    bestPractices: {
      en: [
        'Design reward functions that provide frequent, informative feedback — use reward shaping to guide the agent toward the goal.',
        'Ensure your state representation satisfies the Markov property by including all information the agent needs to make decisions.',
        'Start with a discount factor around 0.9-0.99 and tune based on the time horizon of your task.',
        'Visualize the learned value function and policy during training to understand what the agent has learned.',
      ],
      ar: [
        'صمم دوال مكافأة توفر تغذية راجعة متكررة ومفيدة — استخدم تشكيل المكافأة لتوجيه الوكيل نحو الهدف.',
        'تأكد من أن تمثيل الحالة يحقق خاصية ماركوف بتضمين جميع المعلومات التي يحتاجها الوكيل لاتخاذ القرارات.',
        'ابدأ بعامل خصم حوالي 0.9-0.99 واضبط بناءً على الأفق الزمني لمهمتك.',
        'تصور دالة القيمة المتعلمة والسياسة أثناء التدريب لفهم ما تعلمه الوكيل.',
      ],
    },
    references: [
      { title: 'Sutton & Barto - Reinforcement Learning: An Introduction', url: 'http://incompleteideas.net/book/the-book.html' },
      { title: 'David Silver RL Course', url: 'https://www.davidsilver.uk/teaching/' },
      { title: 'OpenAI Spinning Up in Deep RL', url: 'https://spinningup.openai.com/' },
    ],
    quiz: [
      {
        id: 'batch7-q19',
        question: {
          en: 'What does the discount factor γ (gamma) control in an MDP?',
          ar: 'ماذا يتحكم به عامل الخصم γ (غاما) في MDP؟',
        },
        options: {
          en: [
            'The number of actions available to the agent',
            'How much the agent values future rewards relative to immediate rewards',
            'The probability of transitioning between states',
            'The maximum number of episodes for training',
          ],
          ar: [
            'عدد الإجراءات المتاحة للوكيل',
            'مقدار تقدير الوكيل للمكافآت المستقبلية مقارنة بالمكافآت الفورية',
            'احتمال الانتقال بين الحالات',
            'العدد الأقصى لحلقات التدريب',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The discount factor γ determines how much the agent values future rewards. A γ close to 0 makes the agent short-sighted (only caring about immediate rewards), while a γ close to 1 makes the agent far-sighted (valuing future rewards almost equally to immediate ones).',
          ar: 'عامل الخصم γ يحدد مقدار تقدير الوكيل للمكافآت المستقبلية. γ قريب من 0 يجعل الوكيل قصير النظر (يهتم فقط بالمكافآت الفورية)، بينما γ قريب من 1 يجعل الوكيل بعيد النظر (يقدر المكافآت المستقبلية تقريباً بالتساوي مع الفورية).',
        },
      },
      {
        id: 'batch7-q20',
        question: {
          en: 'What is the relationship between the Q-function and the optimal policy?',
          ar: 'ما هي العلاقة بين دالة Q والسياسة المثلى؟',
        },
        options: {
          en: [
            'The Q-function defines the transition probabilities of the policy',
            'If you know the optimal Q-function, the optimal policy is to always select the action with the highest Q-value',
            'The Q-function is only used during training, not for the final policy',
            'The Q-function and policy are completely independent concepts',
          ],
          ar: [
            'دالة Q تحدد احتمالات انتقال السياسة',
            'إذا عرفت دالة Q المثلى، فالسياسة المثلى هي اختيار الإجراء بأعلى قيمة Q دائماً',
            'دالة Q تُستخدم فقط أثناء التدريب وليس للسياسة النهائية',
            'دالة Q والسياسة مفهومان مستقلان تماماً',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The optimal Q-function Q*(s,a) gives the expected return of taking action a in state s and following the optimal policy thereafter. Once you know Q*, the optimal policy is simply: in each state, pick the action with the highest Q-value — π*(s) = argmax_a Q*(s,a).',
          ar: 'دالة Q المثلى Q*(s,a) تعطي العائد المتوقع من اتخاذ الإجراء a في الحالة s ثم اتباع السياسة المثلى بعدها. بمجرد معرفة Q*، السياسة المثلى ببساطة هي: في كل حالة، اختر الإجراء بأعلى قيمة Q — π*(s) = argmax_a Q*(s,a).',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 11. Q-Learning and DQN
  // ─────────────────────────────────────────────
  'q-learning-dqn': {
    beginnerDefinition: {
      en: 'Q-Learning is an algorithm that teaches an agent to make good decisions by learning the value of each action in each situation. The agent builds a "cheat sheet" (Q-table) that says "in this situation, this action is worth this much reward." Deep Q-Networks (DQN) extend this to complex environments by replacing the table with a neural network that can handle millions of possible states, like video game pixels.',
      ar: 'Q-Learning هو خوارزمية تعلم الوكيل اتخاذ قرارات جيدة بتعلم قيمة كل إجراء في كل موقف. يبني الوكيل "ورقة غش" (جدول Q) تقول "في هذا الموقف، هذا الإجراء يستحق هذا القدر من المكافأة." شبكات Q العميقة (DQN) توسع هذا لبيئات معقدة باستبدال الجدول بشبكة عصبية يمكنها التعامل مع ملايين الحالات الممكنة، مثل بكسلات ألعاب الفيديو.',
    },
    technicalDefinition: {
      en: 'Q-Learning is a model-free, off-policy temporal difference (TD) algorithm that learns the optimal action-value function Q*(s,a) using the Bellman optimality equation: Q(s,a) ← Q(s,a) + α[r + γ·max_a\' Q(s\',a\') - Q(s,a)]. Deep Q-Networks (DQN) approximate Q* with a neural network Q(s,a;θ), using experience replay (storing transitions in a buffer and sampling mini-batches) and a target network (a periodically updated copy of the Q-network) to stabilize training. Key extensions include Double DQN (decoupling action selection and evaluation), Dueling DQN (separate value and advantage streams), and Prioritized Experience Replay (sampling important transitions more frequently).',
      ar: 'Q-Learning هي خوارزمية فرق زمني (TD) بدون نموذج وخارج السياسة تتعلم دالة قيمة الفعل المثلى Q*(s,a) باستخدام معادلة بيلمان المثلى: Q(s,a) ← Q(s,a) + α[r + γ·max_a\' Q(s\',a\') - Q(s,a)]. شبكات Q العميقة (DQN) تقرب Q* بشبكة عصبية Q(s,a;θ)، مستخدمةً إعادة تشغيل الخبرة (تخزين الانتقالات في مخزن مؤقت وأخذ عينات دفعات صغيرة) وشبكة هدف (نسخة محدثة دورياً من شبكة Q) لتثبيت التدريب. تشمل الامتدادات الرئيسية Double DQN (فصل اختيار الإجراء عن التقييم) وDueling DQN (تيارات قيمة وميزة منفصلة) وإعادة تشغيل خبرة مرتبة حسب الأولوية (أخذ عينات من الانتقالات المهمة بشكل أكثر تكراراً).',
    },
    analogy: {
      en: 'Q-Learning is like a restaurant reviewer who visits many restaurants (states), tries different dishes (actions), and rates each dish at each restaurant (Q-values). Over time, they build a detailed guide: "At Restaurant A, order the pasta (Q=9.5). At Restaurant B, order the steak (Q=8.7)." DQN is like scaling this from reviewing 10 restaurants to reviewing every restaurant in the world — you need a smarter system (neural network) because you cannot keep individual notes for millions of restaurants.',
      ar: 'Q-Learning مثل ناقد مطاعم يزور مطاعم كثيرة (حالات) ويجرب أطباقاً مختلفة (إجراءات) ويقيّم كل طبق في كل مطعم (قيم Q). مع الوقت، يبني دليلاً مفصلاً: "في المطعم A، اطلب المعكرونة (Q=9.5). في المطعم B، اطلب الستيك (Q=8.7)." DQN مثل توسيع هذا من مراجعة 10 مطاعم إلى مراجعة كل مطعم في العالم — تحتاج نظاماً أذكى (شبكة عصبية) لأنك لا تستطيع الاحتفاظ بملاحظات فردية لملايين المطاعم.',
    },
    explanation: {
      en: [
        'Q-Learning works by iteratively updating a Q-table that stores the estimated value of each state-action pair. The update rule uses the Bellman equation: the new Q-value is adjusted toward the observed reward plus the discounted maximum Q-value of the next state. The learning rate α controls how quickly old estimates are replaced by new ones.',
        'Exploration vs. exploitation is a key challenge: should the agent try new actions (explore) or stick with the best known action (exploit)? The ε-greedy strategy is the most common solution: with probability ε, take a random action; otherwise, take the action with the highest Q-value. ε is typically decreased over time (from 1.0 toward 0.01) as the agent learns.',
        'Tabular Q-Learning works well for small, discrete state spaces. But for complex environments (like video games with pixel inputs), the state space is enormous — a 210×160 pixel Atari screen has more possible states than atoms in the universe. DQN, introduced by DeepMind in 2013, solved this by using a neural network to approximate the Q-function.',
        'DQN introduced two key innovations for stable training. Experience replay stores past transitions (s, a, r, s\') in a buffer and trains on random mini-batches, breaking the correlation between consecutive experiences. The target network is a frozen copy of the Q-network that is updated periodically, preventing the moving target problem where the network chases its own changing predictions.',
        'DQN\'s success on Atari games (achieving superhuman performance on many games) demonstrated that deep RL could solve complex decision-making tasks from raw sensory input. This paved the way for more advanced algorithms (PPO, SAC) and ultimately for RLHF, which uses RL principles to align language models with human preferences.',
      ],
      ar: [
        'يعمل Q-Learning بتحديث تكراري لجدول Q يخزن القيمة المقدرة لكل زوج حالة-إجراء. قاعدة التحديث تستخدم معادلة بيلمان: قيمة Q الجديدة تُعدّل نحو المكافأة الملاحظة مضافاً إليها القيمة Q القصوى المخصومة للحالة التالية. معدل التعلم α يتحكم في سرعة استبدال التقديرات القديمة بالجديدة.',
        'الاستكشاف مقابل الاستغلال هو تحدٍ رئيسي: هل يجب على الوكيل تجربة إجراءات جديدة (استكشاف) أو التمسك بأفضل إجراء معروف (استغلال)؟ استراتيجية ε-الجشعة هي الحل الأكثر شيوعاً: باحتمال ε، اتخذ إجراءً عشوائياً؛ وإلا، اتخذ الإجراء بأعلى قيمة Q. عادةً يُخفّض ε مع الوقت (من 1.0 نحو 0.01) كلما تعلم الوكيل.',
        'Q-Learning الجدولي يعمل جيداً لفضاءات الحالة الصغيرة والمتقطعة. لكن للبيئات المعقدة (مثل ألعاب الفيديو بمدخلات البكسل)، فضاء الحالة هائل — شاشة Atari بدقة 210×160 بكسل لها حالات ممكنة أكثر من الذرات في الكون. DQN، قدمها DeepMind في 2013، حلت هذا باستخدام شبكة عصبية لتقريب دالة Q.',
        'قدم DQN ابتكارين رئيسيين للتدريب المستقر. إعادة تشغيل الخبرة تخزن الانتقالات السابقة (s, a, r, s\') في مخزن مؤقت وتتدرب على دفعات صغيرة عشوائية، مما يكسر الارتباط بين الخبرات المتتالية. شبكة الهدف هي نسخة مجمدة من شبكة Q تُحدّث دورياً، مما يمنع مشكلة الهدف المتحرك حيث تطارد الشبكة تنبؤاتها المتغيرة.',
        'نجاح DQN في ألعاب Atari (تحقيق أداء فوق بشري في ألعاب كثيرة) أظهر أن التعلم العميق بالتعزيز يمكنه حل مهام صنع قرار معقدة من مدخلات حسية خام. هذا مهد الطريق لخوارزميات أكثر تقدماً (PPO وSAC) وفي النهاية لـ RLHF، الذي يستخدم مبادئ التعلم بالتعزيز لمواءمة نماذج اللغة مع التفضيلات البشرية.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import numpy as np
from collections import defaultdict

class QLearningAgent:
    """Tabular Q-Learning agent."""

    def __init__(self, n_actions: int, lr: float = 0.1,
                 gamma: float = 0.99, epsilon: float = 1.0,
                 epsilon_decay: float = 0.995, epsilon_min: float = 0.01):
        self.q_table = defaultdict(lambda: np.zeros(n_actions))
        self.n_actions = n_actions
        self.lr = lr              # Learning rate (alpha)
        self.gamma = gamma        # Discount factor
        self.epsilon = epsilon    # Exploration rate
        self.epsilon_decay = epsilon_decay
        self.epsilon_min = epsilon_min

    def select_action(self, state) -> int:
        """Epsilon-greedy action selection."""
        if np.random.random() < self.epsilon:
            return np.random.randint(self.n_actions)  # Explore
        return int(np.argmax(self.q_table[state]))     # Exploit

    def update(self, state, action, reward, next_state, done):
        """Q-Learning update rule (Bellman equation)."""
        current_q = self.q_table[state][action]
        if done:
            target = reward
        else:
            target = reward + self.gamma * np.max(self.q_table[next_state])

        # TD update
        self.q_table[state][action] += self.lr * (target - current_q)

        # Decay exploration
        self.epsilon = max(self.epsilon_min,
                          self.epsilon * self.epsilon_decay)

# Training loop
def train_q_learning(env, agent, episodes: int = 1000):
    rewards_history = []
    for ep in range(episodes):
        state = env.reset()
        total_reward = 0
        done = False
        while not done:
            action = agent.select_action(state)
            next_state, reward, done = env.step(action)
            agent.update(state, action, reward, next_state, done)
            state = next_state
            total_reward += reward
        rewards_history.append(total_reward)
        if (ep + 1) % 100 == 0:
            avg = np.mean(rewards_history[-100:])
            print(f"Episode {ep+1}, Avg Reward: {avg:.2f}, "
                  f"Epsilon: {agent.epsilon:.3f}")
    return rewards_history`,
      description: {
        en: 'A tabular Q-Learning agent with epsilon-greedy exploration and the Bellman equation update rule. Includes a training loop that shows learning progress over episodes.',
        ar: 'وكيل Q-Learning جدولي مع استكشاف ε-جشع وقاعدة تحديث معادلة بيلمان. يتضمن حلقة تدريب تُظهر تقدم التعلم عبر الحلقات.',
      },
    },
    commonMistakes: {
      en: [
        'Using a fixed high epsilon throughout training, causing the agent to explore randomly forever and never exploit what it has learned.',
        'Setting the learning rate too high, causing Q-values to oscillate and never converge to stable estimates.',
        'Not using experience replay and target networks with DQN, leading to unstable or divergent training.',
        'Applying tabular Q-Learning to continuous or very large state spaces where a function approximator (DQN) is needed.',
      ],
      ar: [
        'استخدام ε ثابت مرتفع طوال التدريب، مما يتسبب في استكشاف الوكيل عشوائياً للأبد وعدم استغلال ما تعلمه.',
        'ضبط معدل التعلم عالياً جداً، مما يتسبب في تذبذب قيم Q وعدم التقارب نحو تقديرات مستقرة.',
        'عدم استخدام إعادة تشغيل الخبرة وشبكات الهدف مع DQN، مما يؤدي إلى تدريب غير مستقر أو متباعد.',
        'تطبيق Q-Learning الجدولي على فضاءات حالة مستمرة أو كبيرة جداً حيث يُحتاج لمقرب دوال (DQN).',
      ],
    },
    bestPractices: {
      en: [
        'Decay epsilon gradually from 1.0 to a small value (0.01-0.05) to shift from exploration to exploitation over training.',
        'Use experience replay with a large buffer (10K-1M transitions) and random sampling to break correlation between consecutive experiences.',
        'Update the target network slowly (soft update with τ=0.001 or hard update every few thousand steps) for stable training.',
        'Monitor Q-value statistics during training — exploding Q-values indicate instability.',
      ],
      ar: [
        'خفّض ε تدريجياً من 1.0 إلى قيمة صغيرة (0.01-0.05) للتحول من الاستكشاف إلى الاستغلال عبر التدريب.',
        'استخدم إعادة تشغيل الخبرة بمخزن مؤقت كبير (10 آلاف - مليون انتقال) وأخذ عينات عشوائي لكسر الارتباط بين الخبرات المتتالية.',
        'حدّث شبكة الهدف ببطء (تحديث ناعم بـ τ=0.001 أو تحديث صلب كل بضعة آلاف خطوة) لتدريب مستقر.',
        'راقب إحصائيات قيم Q أثناء التدريب — قيم Q المتفجرة تشير إلى عدم الاستقرار.',
      ],
    },
    references: [
      { title: 'Playing Atari with Deep Reinforcement Learning (DQN Paper)', url: 'https://arxiv.org/abs/1312.5602' },
      { title: 'Human-Level Control through Deep RL (Nature DQN)', url: 'https://www.nature.com/articles/nature14236' },
      { title: 'OpenAI Spinning Up - Deep Q-Networks', url: 'https://spinningup.openai.com/en/latest/' },
    ],
    quiz: [
      {
        id: 'batch7-q21',
        question: {
          en: 'What are the two key innovations that made DQN training stable?',
          ar: 'ما هما الابتكاران الرئيسيان اللذان جعلا تدريب DQN مستقراً؟',
        },
        options: {
          en: [
            'Batch normalization and dropout',
            'Experience replay and target network',
            'Data augmentation and transfer learning',
            'Gradient clipping and weight decay',
          ],
          ar: [
            'تطبيع الدفعات والتسرب',
            'إعادة تشغيل الخبرة وشبكة الهدف',
            'تعزيز البيانات ونقل التعلم',
            'قص التدرج وتحلل الأوزان',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'DQN introduced two key innovations: Experience Replay (storing transitions in a buffer and sampling random mini-batches to break correlation) and Target Network (a periodically updated frozen copy of the Q-network to prevent the moving target problem).',
          ar: 'قدم DQN ابتكارين رئيسيين: إعادة تشغيل الخبرة (تخزين الانتقالات في مخزن مؤقت وأخذ عينات دفعات صغيرة عشوائية لكسر الارتباط) وشبكة الهدف (نسخة مجمدة محدثة دورياً من شبكة Q لمنع مشكلة الهدف المتحرك).',
        },
      },
      {
        id: 'batch7-q22',
        question: {
          en: 'What is the purpose of the epsilon-greedy strategy in Q-Learning?',
          ar: 'ما هو الغرض من استراتيجية ε-الجشعة في Q-Learning؟',
        },
        options: {
          en: [
            'To speed up the neural network training',
            'To balance exploration of new actions with exploitation of known good actions',
            'To reduce the memory usage of the Q-table',
            'To calculate the discount factor automatically',
          ],
          ar: [
            'لتسريع تدريب الشبكة العصبية',
            'لموازنة استكشاف إجراءات جديدة مع استغلال الإجراءات الجيدة المعروفة',
            'لتقليل استخدام ذاكرة جدول Q',
            'لحساب عامل الخصم تلقائياً',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Epsilon-greedy balances exploration and exploitation: with probability ε the agent takes a random action (exploration) to discover potentially better strategies, and with probability 1-ε it takes the best known action (exploitation). ε is typically decayed over time.',
          ar: 'ε-الجشعة توازن بين الاستكشاف والاستغلال: باحتمال ε يتخذ الوكيل إجراءً عشوائياً (استكشاف) لاكتشاف استراتيجيات أفضل محتملة، وباحتمال 1-ε يتخذ أفضل إجراء معروف (استغلال). عادةً يُخفّض ε مع الوقت.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 12. Proximal Policy Optimization (PPO)
  // ─────────────────────────────────────────────
  'proximal-policy-optimization': {
    beginnerDefinition: {
      en: 'PPO (Proximal Policy Optimization) is the most widely used algorithm for training AI agents through reinforcement learning. It teaches an agent to improve its decision-making by making small, safe updates to its strategy — never changing too much at once. PPO is the core algorithm behind RLHF, which is how ChatGPT and other language models are fine-tuned to follow human preferences.',
      ar: 'PPO (تحسين السياسة القريب) هو الخوارزمية الأكثر استخداماً لتدريب وكلاء الذكاء الاصطناعي عبر التعلم بالتعزيز. يعلم الوكيل تحسين صنع قراراته بإجراء تحديثات صغيرة وآمنة لاستراتيجيته — دون تغيير كثير في مرة واحدة. PPO هي الخوارزمية الأساسية وراء RLHF، وهي كيفية ضبط ChatGPT ونماذج اللغة الأخرى لاتباع التفضيلات البشرية.',
    },
    technicalDefinition: {
      en: 'PPO is an on-policy, actor-critic policy gradient algorithm that constrains policy updates using a clipped surrogate objective. The objective function is L(θ) = E[min(r_t(θ)·A_t, clip(r_t(θ), 1-ε, 1+ε)·A_t)] where r_t(θ) = π_θ(a_t|s_t)/π_θ_old(a_t|s_t) is the probability ratio between new and old policies, A_t is the advantage estimate (typically computed via GAE - Generalized Advantage Estimation), and ε is the clipping hyperparameter (typically 0.1-0.2). By clipping the ratio, PPO prevents destructively large policy updates that can destabilize training, achieving stable learning without the complexity of trust region methods like TRPO.',
      ar: 'PPO هي خوارزمية تدرج سياسة ممثل-ناقد ضمن السياسة تقيد تحديثات السياسة باستخدام هدف بديل مقصوص. دالة الهدف هي L(θ) = E[min(r_t(θ)·A_t, clip(r_t(θ), 1-ε, 1+ε)·A_t)] حيث r_t(θ) = π_θ(a_t|s_t)/π_θ_old(a_t|s_t) هي نسبة الاحتمال بين السياسة الجديدة والقديمة، وA_t هو تقدير الميزة (يُحسب عادةً عبر GAE - تقدير الميزة المعمم)، وε هو معامل القص (عادةً 0.1-0.2). بقص النسبة، يمنع PPO تحديثات السياسة الكبيرة المدمرة التي يمكن أن تزعزع التدريب، محققاً تعلماً مستقراً دون تعقيد أساليب منطقة الثقة مثل TRPO.',
    },
    analogy: {
      en: 'PPO is like a careful driving instructor. The student (agent) drives (takes actions) and the instructor provides feedback (rewards). Instead of grabbing the steering wheel and making a dramatic turn (large policy update that could crash), the instructor says "turn slightly more to the left next time" (small, clipped update). The clipping mechanism is like a safety limit: no matter how wrong the current driving is, the correction is bounded so the student does not overcorrect and crash in the other direction.',
      ar: 'PPO مثل مدرب قيادة حذر. الطالب (الوكيل) يقود (يتخذ إجراءات) والمدرب يقدم ملاحظات (مكافآت). بدلاً من الإمساك بعجلة القيادة وإجراء انعطاف حاد (تحديث سياسة كبير قد يتسبب في حادث)، يقول المدرب "انعطف قليلاً أكثر لليسار في المرة القادمة" (تحديث صغير مقصوص). آلية القص مثل حد أمان: مهما كانت القيادة الحالية خاطئة، التصحيح محدود حتى لا يبالغ الطالب في التصحيح ويتسبب في حادث بالاتجاه المعاكس.',
    },
    explanation: {
      en: [
        'Policy gradient methods directly optimize the policy (the agent\'s strategy) by computing gradients that increase the probability of actions that led to high rewards. However, naive policy gradient methods are unstable: a single bad update can catastrophically degrade the policy, and recovery may be impossible.',
        'PPO solves this stability problem with a clipped objective function. It computes the ratio between the new and old policy probabilities for each action. If this ratio deviates too far from 1 (meaning the policy is changing too much), the objective is clipped to prevent the update from being too aggressive. The clipping parameter ε (typically 0.1-0.2) controls how much the policy can change in a single update.',
        'PPO uses the actor-critic architecture. The "actor" is the policy network that decides which action to take. The "critic" is the value network that estimates how good the current state is. The advantage function A = Q(s,a) - V(s) tells us how much better an action is compared to the average action in that state. PPO maximizes the probability of above-average actions and minimizes the probability of below-average ones.',
        'GAE (Generalized Advantage Estimation) is used to compute the advantage estimates. It balances bias and variance using a parameter λ: low λ gives low-variance but biased estimates, high λ gives unbiased but high-variance estimates. Typical values are λ=0.95 and γ=0.99.',
        'PPO became the dominant RL algorithm because of its simplicity, stability, and sample efficiency compared to alternatives. It is the algorithm used in InstructGPT and ChatGPT for RLHF: a reward model (trained on human preference comparisons) provides reward signals, and PPO updates the language model policy to generate outputs that the reward model scores highly.',
      ],
      ar: [
        'أساليب تدرج السياسة تحسن السياسة (استراتيجية الوكيل) مباشرة بحساب تدرجات تزيد احتمال الإجراءات التي أدت إلى مكافآت عالية. لكن أساليب تدرج السياسة البسيطة غير مستقرة: تحديث سيء واحد يمكن أن يدمر السياسة بشكل كارثي، وقد يكون التعافي مستحيلاً.',
        'يحل PPO مشكلة الاستقرار هذه بدالة هدف مقصوصة. يحسب النسبة بين احتمالات السياسة الجديدة والقديمة لكل إجراء. إذا انحرفت هذه النسبة كثيراً عن 1 (بمعنى أن السياسة تتغير كثيراً)، يُقص الهدف لمنع التحديث من أن يكون عدوانياً جداً. معامل القص ε (عادةً 0.1-0.2) يتحكم في مقدار تغيير السياسة في تحديث واحد.',
        'يستخدم PPO بنية الممثل-الناقد. "الممثل" هو شبكة السياسة التي تقرر أي إجراء يُتخذ. "الناقد" هو شبكة القيمة التي تقدر مدى جودة الحالة الحالية. دالة الميزة A = Q(s,a) - V(s) تخبرنا كم هو الإجراء أفضل مقارنة بمتوسط الإجراءات في تلك الحالة. يعظم PPO احتمال الإجراءات فوق المتوسط ويقلل احتمال الإجراءات تحت المتوسط.',
        'يُستخدم GAE (تقدير الميزة المعمم) لحساب تقديرات الميزة. يوازن بين الانحياز والتباين باستخدام معامل λ: λ منخفض يعطي تقديرات منخفضة التباين لكن منحازة، λ مرتفع يعطي تقديرات غير منحازة لكن عالية التباين. القيم النموذجية هي λ=0.95 وγ=0.99.',
        'أصبح PPO خوارزمية التعلم بالتعزيز المهيمنة بسبب بساطتها واستقرارها وكفاءة العينات مقارنة بالبدائل. هي الخوارزمية المستخدمة في InstructGPT وChatGPT لـ RLHF: نموذج مكافأة (مُدرب على مقارنات التفضيلات البشرية) يوفر إشارات المكافأة، ويحدث PPO سياسة نموذج اللغة لتوليد مخرجات يسجلها نموذج المكافأة بدرجات عالية.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import torch
import torch.nn as nn
import numpy as np

class ActorCritic(nn.Module):
    """Actor-Critic network for PPO."""
    def __init__(self, state_dim: int, action_dim: int, hidden: int = 64):
        super().__init__()
        self.actor = nn.Sequential(
            nn.Linear(state_dim, hidden), nn.Tanh(),
            nn.Linear(hidden, hidden), nn.Tanh(),
            nn.Linear(hidden, action_dim), nn.Softmax(dim=-1)
        )
        self.critic = nn.Sequential(
            nn.Linear(state_dim, hidden), nn.Tanh(),
            nn.Linear(hidden, hidden), nn.Tanh(),
            nn.Linear(hidden, 1)
        )

    def forward(self, state):
        return self.actor(state), self.critic(state)

class PPOAgent:
    """Proximal Policy Optimization agent."""
    def __init__(self, state_dim, action_dim, lr=3e-4,
                 gamma=0.99, lam=0.95, clip_eps=0.2, epochs=10):
        self.model = ActorCritic(state_dim, action_dim)
        self.optimizer = torch.optim.Adam(self.model.parameters(), lr=lr)
        self.gamma = gamma
        self.lam = lam
        self.clip_eps = clip_eps
        self.epochs = epochs

    def select_action(self, state):
        state_t = torch.FloatTensor(state).unsqueeze(0)
        probs, value = self.model(state_t)
        dist = torch.distributions.Categorical(probs)
        action = dist.sample()
        return action.item(), dist.log_prob(action), value

    def compute_gae(self, rewards, values, dones):
        """Generalized Advantage Estimation."""
        advantages = []
        gae = 0
        for t in reversed(range(len(rewards))):
            next_val = values[t + 1] if t + 1 < len(values) else 0
            delta = rewards[t] + self.gamma * next_val * (1 - dones[t]) - values[t]
            gae = delta + self.gamma * self.lam * (1 - dones[t]) * gae
            advantages.insert(0, gae)
        return advantages

    def update(self, states, actions, old_log_probs, rewards, dones, values):
        advantages = self.compute_gae(rewards, values, dones)
        advantages = torch.FloatTensor(advantages)
        advantages = (advantages - advantages.mean()) / (advantages.std() + 1e-8)
        returns = advantages + torch.FloatTensor(values[:len(advantages)])

        states = torch.FloatTensor(np.array(states))
        actions = torch.LongTensor(actions)
        old_log_probs = torch.stack(old_log_probs).detach()

        for _ in range(self.epochs):
            probs, values_pred = self.model(states)
            dist = torch.distributions.Categorical(probs)
            new_log_probs = dist.log_prob(actions)

            # PPO clipped objective
            ratio = torch.exp(new_log_probs - old_log_probs)
            surr1 = ratio * advantages
            surr2 = torch.clamp(ratio, 1 - self.clip_eps,
                                1 + self.clip_eps) * advantages
            actor_loss = -torch.min(surr1, surr2).mean()
            critic_loss = (returns - values_pred.squeeze()).pow(2).mean()

            loss = actor_loss + 0.5 * critic_loss
            self.optimizer.zero_grad()
            loss.backward()
            self.optimizer.step()`,
      description: {
        en: 'A PPO implementation with actor-critic architecture, clipped surrogate objective, and Generalized Advantage Estimation (GAE). Shows the core training loop with the clipping mechanism.',
        ar: 'تنفيذ PPO ببنية الممثل-الناقد وهدف بديل مقصوص وتقدير الميزة المعمم (GAE). يُظهر حلقة التدريب الأساسية مع آلية القص.',
      },
    },
    commonMistakes: {
      en: [
        'Setting the clipping parameter ε too large (>0.3), allowing policy updates that are too aggressive and destabilize training.',
        'Not normalizing advantages before computing the policy loss, leading to unbalanced updates.',
        'Training for too many epochs per batch, causing the policy to overfit to the current batch of experience.',
        'Using a shared network for actor and critic without proper loss balancing, causing one to dominate training.',
      ],
      ar: [
        'ضبط معامل القص ε كبيراً جداً (>0.3)، مما يسمح بتحديثات سياسة عدوانية جداً تزعزع التدريب.',
        'عدم تطبيع الميزات قبل حساب خسارة السياسة، مما يؤدي إلى تحديثات غير متوازنة.',
        'التدريب لحقب كثيرة جداً لكل دفعة، مما يتسبب في إفراط السياسة في التخصص للدفعة الحالية من الخبرة.',
        'استخدام شبكة مشتركة للممثل والناقد دون موازنة خسارة مناسبة، مما يتسبب في هيمنة أحدهما على التدريب.',
      ],
    },
    bestPractices: {
      en: [
        'Use a clipping parameter ε between 0.1 and 0.2, and normalize advantages to zero mean and unit variance.',
        'Train for 3-10 epochs per batch of experience with mini-batch updates for better sample efficiency.',
        'Use GAE with λ=0.95 and γ=0.99 for a good balance between bias and variance in advantage estimates.',
        'Monitor the KL divergence between old and new policies during training — if it spikes, reduce the learning rate.',
      ],
      ar: [
        'استخدم معامل قص ε بين 0.1 و0.2، وطبّع الميزات بمتوسط صفر وتباين واحد.',
        'تدرب لـ 3-10 حقب لكل دفعة من الخبرة مع تحديثات الدفعات الصغيرة لكفاءة عينات أفضل.',
        'استخدم GAE مع λ=0.95 وγ=0.99 لتوازن جيد بين الانحياز والتباين في تقديرات الميزة.',
        'راقب تباعد KL بين السياسات القديمة والجديدة أثناء التدريب — إذا ارتفع فجأة، خفض معدل التعلم.',
      ],
    },
    references: [
      { title: 'Proximal Policy Optimization Algorithms (Original Paper)', url: 'https://arxiv.org/abs/1707.06347' },
      { title: 'OpenAI Spinning Up - PPO', url: 'https://spinningup.openai.com/en/latest/algorithms/ppo.html' },
      { title: 'The 37 Implementation Details of PPO', url: 'https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/' },
    ],
    quiz: [
      {
        id: 'batch7-q23',
        question: {
          en: 'What problem does PPO\'s clipping mechanism solve?',
          ar: 'ما المشكلة التي تحلها آلية القص في PPO؟',
        },
        options: {
          en: [
            'It reduces the memory requirements of training',
            'It prevents destructively large policy updates that could destabilize training',
            'It speeds up the forward pass of the neural network',
            'It eliminates the need for a value function',
          ],
          ar: [
            'تقلل متطلبات ذاكرة التدريب',
            'تمنع تحديثات السياسة الكبيرة المدمرة التي قد تزعزع التدريب',
            'تسرع التمرير الأمامي للشبكة العصبية',
            'تلغي الحاجة لدالة القيمة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'PPO clips the policy ratio to prevent the policy from changing too dramatically in a single update. Without clipping, a single bad update could catastrophically degrade the policy. The clipping bounds the update to a safe range (1-ε to 1+ε).',
          ar: 'يقص PPO نسبة السياسة لمنع تغيير السياسة بشكل كبير في تحديث واحد. بدون القص، تحديث سيء واحد يمكن أن يدمر السياسة بشكل كارثي. يحد القص التحديث إلى نطاق آمن (1-ε إلى 1+ε).',
        },
      },
      {
        id: 'batch7-q24',
        question: {
          en: 'Why is PPO important for language model alignment (RLHF)?',
          ar: 'لماذا يعتبر PPO مهماً لمواءمة نماذج اللغة (RLHF)؟',
        },
        options: {
          en: [
            'PPO is the only algorithm that works with text data',
            'PPO provides stable, sample-efficient policy updates, making it ideal for fine-tuning LLMs with reward model feedback',
            'PPO was specifically designed for natural language processing',
            'PPO does not require any reward signal',
          ],
          ar: [
            'PPO هي الخوارزمية الوحيدة التي تعمل مع البيانات النصية',
            'يوفر PPO تحديثات سياسة مستقرة وفعالة في العينات، مما يجعله مثالياً لضبط نماذج اللغة مع تغذية راجعة من نموذج المكافأة',
            'صُمم PPO خصيصاً لمعالجة اللغة الطبيعية',
            'PPO لا يتطلب أي إشارة مكافأة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'PPO is used in RLHF because it provides stable policy updates that are critical when fine-tuning large language models. Its clipping mechanism prevents the LLM from changing too drastically in response to reward signals, maintaining fluency while improving alignment with human preferences.',
          ar: 'يُستخدم PPO في RLHF لأنه يوفر تحديثات سياسة مستقرة ضرورية عند ضبط نماذج اللغة الكبيرة. آلية القص تمنع نموذج اللغة من التغير بشكل كبير استجابة لإشارات المكافأة، مما يحافظ على الطلاقة مع تحسين المواءمة مع التفضيلات البشرية.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 13. RLHF for Agents
  // ─────────────────────────────────────────────
  'rlhf-for-agents': {
    beginnerDefinition: {
      en: 'Reinforcement Learning from Human Feedback (RLHF) for agents means training AI agents to behave in ways that humans prefer. Instead of manually programming every rule, you collect human feedback on agent actions and use it to teach the agent what good behavior looks like — making it more helpful, safe, and aligned with human values.',
      ar: 'التعلم التعزيزي من التغذية الراجعة البشرية (RLHF) للوكلاء يعني تدريب وكلاء الذكاء الاصطناعي على التصرف بطرق يفضلها البشر. بدلاً من برمجة كل قاعدة يدوياً، تجمع تغذية راجعة بشرية حول إجراءات الوكيل وتستخدمها لتعليم الوكيل كيف يبدو السلوك الجيد — مما يجعله أكثر فائدة وأماناً ومتوافقاً مع القيم البشرية.',
    },
    technicalDefinition: {
      en: 'RLHF for agents extends the standard RLHF pipeline (reward model training + PPO optimization) to agentic settings where the model takes multi-step actions with tools and environments. The reward model evaluates complete agent trajectories (sequences of thoughts, tool calls, and responses) rather than single text completions. Constitutional AI (CAI) and RLAIF (RL from AI Feedback) reduce human annotation costs by using AI-generated critiques. Process Reward Models (PRMs) provide step-level rewards rather than outcome-level, enabling better credit assignment in multi-step agent tasks.',
      ar: 'يوسّع RLHF للوكلاء خط أنابيب RLHF القياسي (تدريب نموذج المكافأة + تحسين PPO) إلى الإعدادات الوكيلية حيث يتخذ النموذج إجراءات متعددة الخطوات مع الأدوات والبيئات. يُقيّم نموذج المكافأة مسارات الوكيل الكاملة (تسلسلات الأفكار واستدعاءات الأدوات والاستجابات) بدلاً من إكمالات نصية فردية. يقلل الذكاء الاصطناعي الدستوري (CAI) وRLAIF (التعلم التعزيزي من تغذية الذكاء الاصطناعي) تكاليف التعليق البشري باستخدام نقد مُولّد بالذكاء الاصطناعي. توفر نماذج مكافأة العملية (PRMs) مكافآت على مستوى الخطوة بدلاً من مستوى النتيجة مما يمكّن تعيين ائتمان أفضل في مهام الوكيل متعددة الخطوات.',
    },
    analogy: {
      en: 'RLHF for agents is like training a new employee through performance reviews rather than a rigid manual. The employee (agent) tries different approaches to tasks, and managers (human evaluators) rate which approaches were better. Over time, the employee learns not just what to do, but the subtle judgment calls that make them excellent. Process reward models are like having a mentor watch each step and say "good call" or "you should reconsider" in real time, rather than only reviewing the final report.',
      ar: 'RLHF للوكلاء يشبه تدريب موظف جديد من خلال مراجعات الأداء بدلاً من دليل صارم. الموظف (الوكيل) يجرب مناهج مختلفة للمهام، والمديرون (المُقيّمون البشريون) يُصنّفون أي المناهج كان أفضل. بمرور الوقت يتعلم الموظف ليس فقط ماذا يفعل بل القرارات الدقيقة التي تجعله ممتازاً. نماذج مكافأة العملية تشبه وجود مرشد يراقب كل خطوة ويقول "قرار جيد" أو "يجب أن تعيد النظر" في الوقت الحقيقي بدلاً من مراجعة التقرير النهائي فقط.',
    },
    explanation: {
      en: [
        'The standard RLHF pipeline for agents involves three stages. First, collect human preference data by having evaluators compare pairs of agent trajectories (not just final outputs, but the full sequence of reasoning, tool calls, and actions). Second, train a reward model on these preferences to predict which trajectory a human would prefer. Third, use PPO to optimize the agent policy against this reward model.',
        'Agent-specific RLHF differs from text-only RLHF because agent trajectories are multi-step and involve tool interactions. The reward model must evaluate whether the agent chose the right tools, called them with correct parameters, handled errors appropriately, and synthesized results correctly. This makes trajectory comparison more complex — annotators need domain expertise to evaluate technical correctness.',
        'Process Reward Models (PRMs) address a key challenge in agent RLHF: credit assignment. When an agent takes 10 steps to solve a problem and fails, which steps were wrong? Outcome Reward Models (ORMs) only score the final result, but PRMs score each step, enabling the agent to learn which specific decisions were good or bad. Research shows PRMs significantly improve agent performance on multi-step reasoning tasks.',
        'Constitutional AI (CAI) and RLAIF reduce the need for expensive human annotations. In CAI, the AI critiques its own outputs against a set of principles (constitution) and generates improved responses. In RLAIF, a stronger AI model provides preference judgments instead of humans. These approaches scale better but may miss subtle issues that human evaluators would catch.',
        'Practical challenges include reward hacking (the agent finds exploits in the reward model), reward model degradation over time as the policy improves, and the cost of collecting high-quality human feedback for complex agent tasks. Iterative RLHF — where the reward model is retrained periodically on the improving agent behavior — helps address distribution shift.',
      ],
      ar: [
        'يتضمن خط أنابيب RLHF القياسي للوكلاء ثلاث مراحل. أولاً، جمع بيانات التفضيل البشري بجعل المُقيّمين يقارنون أزواج مسارات الوكيل (ليس فقط المخرجات النهائية بل التسلسل الكامل للاستدلال واستدعاءات الأدوات والإجراءات). ثانياً، تدريب نموذج مكافأة على هذه التفضيلات للتنبؤ بأي المسارات يفضلها الإنسان. ثالثاً، استخدام PPO لتحسين سياسة الوكيل مقابل نموذج المكافأة.',
        'يختلف RLHF الخاص بالوكلاء عن RLHF النصي فقط لأن مسارات الوكيل متعددة الخطوات وتتضمن تفاعلات مع الأدوات. يجب على نموذج المكافأة تقييم ما إذا اختار الوكيل الأدوات الصحيحة واستدعاها بمعاملات صحيحة وتعامل مع الأخطاء بشكل مناسب وجمّع النتائج بشكل صحيح. هذا يجعل مقارنة المسارات أكثر تعقيداً — يحتاج المُعلّقون خبرة مجالية لتقييم الصحة التقنية.',
        'تعالج نماذج مكافأة العملية (PRMs) تحدياً رئيسياً في RLHF للوكلاء: تعيين الائتمان. عندما يتخذ الوكيل 10 خطوات لحل مشكلة ويفشل، أي الخطوات كانت خاطئة؟ نماذج مكافأة النتيجة (ORMs) تُسجّل النتيجة النهائية فقط لكن PRMs تُسجّل كل خطوة مما يمكّن الوكيل من تعلم أي القرارات المحددة كانت جيدة أو سيئة. تُظهر الأبحاث أن PRMs تحسّن أداء الوكيل بشكل كبير في مهام الاستدلال متعددة الخطوات.',
        'يقلل الذكاء الاصطناعي الدستوري (CAI) وRLAIF الحاجة للتعليقات البشرية المكلفة. في CAI، ينتقد الذكاء الاصطناعي مخرجاته مقابل مجموعة من المبادئ (الدستور) ويولّد استجابات محسّنة. في RLAIF، يقدم نموذج ذكاء اصطناعي أقوى أحكام التفضيل بدلاً من البشر. تتوسع هذه النهج بشكل أفضل لكن قد تفوت مشاكل دقيقة يكتشفها المُقيّمون البشريون.',
        'تشمل التحديات العملية اختراق المكافأة (الوكيل يجد ثغرات في نموذج المكافأة) وتدهور نموذج المكافأة بمرور الوقت مع تحسن السياسة وتكلفة جمع تغذية راجعة بشرية عالية الجودة لمهام وكيل معقدة. يساعد RLHF التكراري — حيث يُعاد تدريب نموذج المكافأة دورياً على سلوك الوكيل المتحسن — في معالجة انزياح التوزيع.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from trl import PPOTrainer, PPOConfig, AutoModelForCausalLMWithValueHead
from transformers import AutoTokenizer
import torch

# Load model with value head for PPO
model = AutoModelForCausalLMWithValueHead.from_pretrained("gpt2-medium")
ref_model = AutoModelForCausalLMWithValueHead.from_pretrained("gpt2-medium")
tokenizer = AutoTokenizer.from_pretrained("gpt2-medium")
tokenizer.pad_token = tokenizer.eos_token

# PPO configuration for agent training
ppo_config = PPOConfig(
    batch_size=16,
    mini_batch_size=4,
    learning_rate=1.41e-5,
    kl_penalty="kl",
    init_kl_coef=0.2,    # KL penalty to prevent reward hacking
    target=6.0,
    log_with="wandb",
)

ppo_trainer = PPOTrainer(ppo_config, model, ref_model, tokenizer)

# Simulated reward model for agent trajectories
def reward_model(trajectory: str) -> float:
    score = 0.0
    if "tool_call" in trajectory:
        score += 0.3  # Reward tool usage
    if "error_handling" in trajectory:
        score += 0.2  # Reward error handling
    if "final_answer" in trajectory:
        score += 0.5  # Reward task completion
    return score

# Training loop
for epoch in range(100):
    # Generate agent trajectories
    queries = tokenizer(
        ["Solve this task: find the weather in Paris"],
        return_tensors="pt", padding=True
    )
    response_tensors = ppo_trainer.generate(
        queries["input_ids"], max_new_tokens=256
    )
    responses = tokenizer.batch_decode(response_tensors)

    # Score with reward model
    rewards = [torch.tensor(reward_model(r)) for r in responses]

    # PPO update step
    stats = ppo_trainer.step(
        queries["input_ids"].unbind(), response_tensors.unbind(), rewards
    )
    print(f"Epoch {epoch}: mean_reward={stats['ppo/mean_scores']:.3f}")`,
      description: {
        en: 'A simplified RLHF training loop for agents using PPO, showing how agent trajectories are scored by a reward model and optimized.',
        ar: 'حلقة تدريب RLHF مبسطة للوكلاء باستخدام PPO تُظهر كيف تُسجّل مسارات الوكيل بواسطة نموذج مكافأة وتُحسّن.',
      },
    },
    commonMistakes: {
      en: [
        'Using only outcome-level rewards for multi-step agent tasks — process rewards give much better learning signals',
        'Not maintaining a KL penalty against the reference model, allowing reward hacking and mode collapse',
        'Training the reward model on a fixed dataset without iterative updates, leading to distribution shift as the agent improves',
        'Collecting preference data from non-experts for technical agent tasks, resulting in a reward model that optimizes for appearance rather than correctness',
      ],
      ar: [
        'استخدام مكافآت على مستوى النتيجة فقط لمهام الوكيل متعددة الخطوات — مكافآت العملية تعطي إشارات تعلم أفضل بكثير',
        'عدم الحفاظ على عقوبة KL مقابل النموذج المرجعي مما يسمح باختراق المكافأة وانهيار النمط',
        'تدريب نموذج المكافأة على مجموعة بيانات ثابتة بدون تحديثات تكرارية مما يؤدي لانزياح التوزيع مع تحسن الوكيل',
        'جمع بيانات التفضيل من غير الخبراء لمهام الوكيل التقنية مما ينتج نموذج مكافأة يُحسّن للمظهر بدلاً من الصحة',
      ],
    },
    bestPractices: {
      en: [
        'Use process reward models for multi-step agent tasks to provide granular feedback on each decision',
        'Implement iterative RLHF with periodic reward model retraining as the agent policy improves',
        'Combine RLHF with rule-based safety constraints for critical agent actions (tool calls, data access)',
        'Use RLAIF for initial scaling and reserve expensive human feedback for edge cases and safety-critical evaluations',
      ],
      ar: [
        'استخدم نماذج مكافأة العملية لمهام الوكيل متعددة الخطوات لتوفير تغذية راجعة دقيقة على كل قرار',
        'طبّق RLHF تكراري مع إعادة تدريب دورية لنموذج المكافأة مع تحسن سياسة الوكيل',
        'اجمع بين RLHF وقيود أمان قائمة على القواعد لإجراءات الوكيل الحرجة (استدعاءات الأدوات والوصول للبيانات)',
        'استخدم RLAIF للتوسع المبدئي واحتفظ بالتغذية الراجعة البشرية المكلفة للحالات الحدية والتقييمات الحرجة للسلامة',
      ],
    },
    references: [
      { title: 'Training Language Models to Follow Instructions with Human Feedback', url: 'https://arxiv.org/abs/2203.02155' },
      { title: 'Let\'s Verify Step by Step (Process Reward Models)', url: 'https://arxiv.org/abs/2305.20050' },
      { title: 'Constitutional AI: Harmlessness from AI Feedback', url: 'https://arxiv.org/abs/2212.08073' },
    ],
    quiz: [
      {
        id: 'batch7-q25',
        question: {
          en: 'What advantage do Process Reward Models (PRMs) have over Outcome Reward Models (ORMs) for agent training?',
          ar: 'ما الميزة التي تتمتع بها نماذج مكافأة العملية (PRMs) على نماذج مكافأة النتيجة (ORMs) لتدريب الوكلاء؟',
        },
        options: {
          en: ['PRMs are simpler to implement', 'PRMs provide step-level feedback enabling better credit assignment in multi-step tasks', 'PRMs require less training data', 'PRMs only work with text-based tasks'],
          ar: ['PRMs أبسط في التنفيذ', 'PRMs توفر تغذية راجعة على مستوى الخطوة مما يمكّن تعيين ائتمان أفضل في المهام متعددة الخطوات', 'PRMs تتطلب بيانات تدريب أقل', 'PRMs تعمل فقط مع المهام النصية'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'PRMs score each step in an agent trajectory, enabling the agent to learn which specific decisions were good or bad. ORMs only provide a final score, making it difficult for the agent to know which of many steps led to success or failure.',
          ar: 'تُسجّل PRMs كل خطوة في مسار الوكيل مما يمكّن الوكيل من تعلم أي القرارات المحددة كانت جيدة أو سيئة. توفر ORMs درجة نهائية فقط مما يجعل من الصعب على الوكيل معرفة أي من الخطوات العديدة أدى للنجاح أو الفشل.',
        },
      },
      {
        id: 'batch7-q26',
        question: {
          en: 'What is reward hacking in the context of RLHF?',
          ar: 'ما هو اختراق المكافأة في سياق RLHF؟',
        },
        options: {
          en: ['Hacking the training server', 'The agent exploits imperfections in the reward model to get high scores without genuinely completing tasks', 'Using more compute for training', 'Manually editing reward scores'],
          ar: ['اختراق خادم التدريب', 'الوكيل يستغل عيوب في نموذج المكافأة للحصول على درجات عالية دون إنجاز المهام فعلياً', 'استخدام المزيد من الحوسبة للتدريب', 'تعديل درجات المكافأة يدوياً'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Reward hacking occurs when the agent finds shortcuts to maximize the reward model score without actually being helpful or correct. For example, an agent might learn to produce verbose, confident-sounding responses that the reward model scores highly but that do not actually solve the problem.',
          ar: 'يحدث اختراق المكافأة عندما يجد الوكيل اختصارات لتعظيم درجة نموذج المكافأة دون أن يكون مفيداً أو صحيحاً فعلياً. مثلاً قد يتعلم الوكيل إنتاج استجابات مُسهبة وواثقة يُسجّلها نموذج المكافأة عالياً لكنها لا تحل المشكلة فعلياً.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 14. Knowledge Graphs
  // ─────────────────────────────────────────────
  'knowledge-graphs': {
    beginnerDefinition: {
      en: 'Knowledge graphs are structured databases that store information as a network of entities (things) connected by relationships (how things relate to each other). They are like a smart map of facts — "Paris is the capital of France," "France is in Europe" — that AI agents can navigate to answer complex questions by following connections between concepts.',
      ar: 'رسوم المعرفة البيانية هي قواعد بيانات منظمة تخزن المعلومات كشبكة من الكيانات (الأشياء) مرتبطة بعلاقات (كيف ترتبط الأشياء ببعضها). تشبه خريطة ذكية للحقائق — "باريس هي عاصمة فرنسا"، "فرنسا في أوروبا" — يمكن لوكلاء الذكاء الاصطناعي التنقل فيها للإجابة على أسئلة معقدة بتتبع الروابط بين المفاهيم.',
    },
    technicalDefinition: {
      en: 'Knowledge graphs represent information as directed labeled graphs where nodes represent entities and edges represent typed relationships between them. Data is stored as (subject, predicate, object) triples — e.g., (Paris, capitalOf, France). They support schema-based reasoning through ontologies (classes, properties, constraints), and can be queried using graph query languages like SPARQL or Cypher. Key systems include Wikidata, Google Knowledge Graph, and enterprise implementations using Neo4j, Amazon Neptune, or Apache Jena.',
      ar: 'تمثل رسوم المعرفة البيانية المعلومات كرسوم بيانية موجهة ومسمّاة حيث تمثل العقد الكيانات والحواف تمثل العلاقات المُنمّطة بينها. تُخزّن البيانات كثلاثيات (فاعل، مسند، مفعول) — مثل (باريس، عاصمة_لـ، فرنسا). تدعم الاستدلال القائم على المخطط من خلال الأنطولوجيا (الأصناف والخصائص والقيود)، ويمكن الاستعلام عنها باستخدام لغات استعلام الرسوم البيانية مثل SPARQL أو Cypher. تشمل الأنظمة الرئيسية Wikidata وGoogle Knowledge Graph والتنفيذات المؤسسية باستخدام Neo4j وAmazon Neptune أو Apache Jena.',
    },
    analogy: {
      en: 'A knowledge graph is like a well-organized mind map that a detective builds during an investigation. Each person, location, and event is a card pinned to a board, with colored strings connecting related items. Unlike a flat spreadsheet, this board lets the detective follow chains of connections — "the suspect worked at Company X, which is owned by Person Y, who lives near the crime scene" — revealing insights that individual facts would not reveal alone.',
      ar: 'رسم المعرفة البياني يشبه خريطة ذهنية منظمة يبنيها محقق أثناء التحقيق. كل شخص وموقع وحدث هو بطاقة مثبتة على لوحة، مع خيوط ملونة تربط العناصر المرتبطة. بخلاف جدول بيانات مسطح، تتيح هذه اللوحة للمحقق تتبع سلاسل الروابط — "المشتبه به عمل في الشركة X التي يملكها الشخص Y الذي يعيش بالقرب من مسرح الجريمة" — كاشفة عن رؤى لا تكشفها الحقائق الفردية وحدها.',
    },
    explanation: {
      en: [
        'At their core, knowledge graphs store facts as triples: (subject, predicate, object). "Albert Einstein was born in Ulm" becomes (Albert_Einstein, bornIn, Ulm). This simple format is expressive enough to represent complex domains — medical knowledge, product catalogs, organizational structures, or scientific literature.',
        'Graph databases like Neo4j store these relationships natively and optimize for graph traversal queries. Unlike relational databases where joining many tables is expensive, graph databases can traverse millions of relationships in milliseconds. This makes them ideal for questions like "find all researchers who collaborated with someone who published on topic X within the last 2 years."',
        'For AI agents, knowledge graphs provide structured, factual grounding that complements LLM knowledge. An agent can query a knowledge graph to verify facts, discover connections, and ensure accuracy. This is more reliable than relying solely on the LLM parametric memory, which can hallucinate or contain outdated information.',
        'Knowledge graph construction can be automated using NLP techniques: Named Entity Recognition extracts entities from text, Relation Extraction identifies relationships between entities, and Entity Linking resolves mentions to canonical entities. LLMs can accelerate this process by extracting triples from unstructured text at scale.',
        'In production agent systems, knowledge graphs are often combined with vector databases in a hybrid architecture. The vector database handles semantic similarity search (fuzzy matching, "find similar documents"), while the knowledge graph handles structured reasoning (exact relationships, multi-hop queries, constraint satisfaction). Graph RAG combines both for the best of both worlds.',
      ],
      ar: [
        'في جوهرها تخزن رسوم المعرفة البيانية الحقائق كثلاثيات: (فاعل، مسند، مفعول). "أينشتاين وُلد في أولم" تصبح (ألبرت_أينشتاين، وُلد_في، أولم). هذا التنسيق البسيط تعبيري بما يكفي لتمثيل مجالات معقدة — المعرفة الطبية وكتالوجات المنتجات والهياكل التنظيمية أو الأدبيات العلمية.',
        'تخزن قواعد بيانات الرسوم البيانية مثل Neo4j هذه العلاقات أصلياً وتُحسّن لاستعلامات اجتياز الرسوم. بخلاف قواعد البيانات العلائقية حيث ربط جداول كثيرة مكلف، يمكن لقواعد بيانات الرسوم اجتياز ملايين العلاقات في ميلي ثانية. يجعلها هذا مثالية لأسئلة مثل "ابحث عن جميع الباحثين الذين تعاونوا مع شخص نشر حول الموضوع X خلال آخر سنتين."',
        'لوكلاء الذكاء الاصطناعي توفر رسوم المعرفة البيانية ترسيخاً منظماً وواقعياً يُكمل معرفة نماذج اللغة الكبيرة. يمكن للوكيل استعلام رسم معرفة بياني للتحقق من الحقائق واكتشاف الروابط وضمان الدقة. هذا أكثر موثوقية من الاعتماد فقط على الذاكرة المُعلّمة لنموذج اللغة التي قد تهلوس أو تحتوي على معلومات قديمة.',
        'يمكن أتمتة بناء رسوم المعرفة البيانية باستخدام تقنيات معالجة اللغة الطبيعية: التعرف على الكيانات المسمّاة يستخرج الكيانات من النص واستخراج العلاقات يحدد العلاقات بين الكيانات وربط الكيانات يحل الإشارات إلى كيانات قانونية. يمكن لنماذج اللغة الكبيرة تسريع هذه العملية باستخراج الثلاثيات من النصوص غير المنظمة على نطاق واسع.',
        'في أنظمة الوكلاء الإنتاجية غالباً ما تُجمع رسوم المعرفة البيانية مع قواعد البيانات المتجهية في معمارية هجينة. تتعامل قاعدة البيانات المتجهية مع البحث بالتشابه الدلالي (المطابقة الغامضة، "ابحث عن مستندات مشابهة")، بينما يتعامل رسم المعرفة البياني مع الاستدلال المنظم (العلاقات الدقيقة، الاستعلامات متعددة القفزات، تلبية القيود). يجمع Graph RAG بين الاثنين للحصول على أفضل ما فيهما.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from neo4j import GraphDatabase
import json

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "password"))

def create_knowledge_graph(tx):
    # Create entities (nodes)
    tx.run("CREATE (p:Person {name: 'Alan Turing', born: 1912})")
    tx.run("CREATE (p:Person {name: 'Claude Shannon', born: 1916})")
    tx.run("CREATE (c:Concept {name: 'Turing Machine'})")
    tx.run("CREATE (c:Concept {name: 'Information Theory'})")
    tx.run("CREATE (f:Field {name: 'Computer Science'})")
    tx.run("CREATE (f:Field {name: 'Artificial Intelligence'})")

    # Create relationships (edges)
    tx.run("""
        MATCH (a:Person {name: 'Alan Turing'}), (t:Concept {name: 'Turing Machine'})
        CREATE (a)-[:INVENTED]->(t)
    """)
    tx.run("""
        MATCH (a:Person {name: 'Alan Turing'}), (f:Field {name: 'Computer Science'})
        CREATE (a)-[:FOUNDED]->(f)
    """)
    tx.run("""
        MATCH (c:Person {name: 'Claude Shannon'}), (i:Concept {name: 'Information Theory'})
        CREATE (c)-[:INVENTED]->(i)
    """)
    tx.run("""
        MATCH (cs:Field {name: 'Computer Science'}), (ai:Field {name: 'Artificial Intelligence'})
        CREATE (cs)-[:SUBFIELD_OF {since: 1956}]->(ai)
    """)

def query_graph(tx, question: str):
    # Multi-hop query: Who founded the field that AI is a subfield of?
    result = tx.run("""
        MATCH (p:Person)-[:FOUNDED]->(f:Field)<-[:SUBFIELD_OF]-(ai:Field {name: 'Artificial Intelligence'})
        RETURN p.name AS founder, f.name AS field
    """)
    return [dict(record) for record in result]

with driver.session() as session:
    session.execute_write(create_knowledge_graph)
    results = session.execute_read(query_graph, "Who founded AI's parent field?")
    print(json.dumps(results, indent=2))
    # [{"founder": "Alan Turing", "field": "Computer Science"}]`,
      description: {
        en: 'Building and querying a knowledge graph with Neo4j: creating entities, relationships, and executing multi-hop Cypher queries.',
        ar: 'بناء واستعلام رسم معرفة بياني مع Neo4j: إنشاء الكيانات والعلاقات وتنفيذ استعلامات Cypher متعددة القفزات.',
      },
    },
    commonMistakes: {
      en: [
        'Treating knowledge graphs as simple key-value stores instead of leveraging their graph traversal and reasoning capabilities',
        'Not defining a clear ontology (schema) before building the graph, leading to inconsistent entity types and relationship names',
        'Ignoring entity resolution — the same real-world entity may appear under different names and must be linked',
        'Building overly complex graphs with too many relationship types, making queries and maintenance difficult',
      ],
      ar: [
        'التعامل مع رسوم المعرفة البيانية كمخازن مفتاح-قيمة بسيطة بدلاً من الاستفادة من قدرات اجتياز الرسم والاستدلال',
        'عدم تحديد أنطولوجيا واضحة (مخطط) قبل بناء الرسم مما يؤدي لأنواع كيانات وأسماء علاقات غير متسقة',
        'تجاهل تحليل الكيانات — نفس الكيان في العالم الحقيقي قد يظهر بأسماء مختلفة ويجب ربطه',
        'بناء رسوم بيانية معقدة جداً بأنواع علاقات كثيرة مما يجعل الاستعلامات والصيانة صعبة',
      ],
    },
    bestPractices: {
      en: [
        'Design your ontology first — define entity types, relationship types, and constraints before importing data',
        'Use knowledge graphs alongside vector databases in a hybrid architecture for both structured reasoning and semantic search',
        'Automate graph construction with LLM-powered entity and relation extraction pipelines',
        'Version your knowledge graph schema and implement migration strategies as your domain model evolves',
      ],
      ar: [
        'صمّم الأنطولوجيا أولاً — حدد أنواع الكيانات وأنواع العلاقات والقيود قبل استيراد البيانات',
        'استخدم رسوم المعرفة البيانية جنباً إلى جنب مع قواعد البيانات المتجهية في معمارية هجينة للاستدلال المنظم والبحث الدلالي معاً',
        'أتمت بناء الرسم البياني بخطوط أنابيب استخراج الكيانات والعلاقات المدعومة بنماذج اللغة الكبيرة',
        'أدر إصدارات مخطط رسم المعرفة البياني وطبّق استراتيجيات الترحيل مع تطور نموذج مجالك',
      ],
    },
    references: [
      { title: 'Neo4j Graph Database Documentation', url: 'https://neo4j.com/docs/' },
      { title: 'Wikidata: A Free Collaborative Knowledge Base', url: 'https://www.wikidata.org/' },
      { title: 'Knowledge Graphs (Hogan et al., 2021)', url: 'https://arxiv.org/abs/2003.02320' },
    ],
    quiz: [
      {
        id: 'batch7-q27',
        question: {
          en: 'What is the basic unit of information in a knowledge graph?',
          ar: 'ما هي الوحدة الأساسية للمعلومات في رسم المعرفة البياني؟',
        },
        options: {
          en: ['A row in a table', 'A (subject, predicate, object) triple', 'A JSON document', 'A vector embedding'],
          ar: ['صف في جدول', 'ثلاثية (فاعل، مسند، مفعول)', 'مستند JSON', 'تضمين متجهي'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Knowledge graphs store facts as (subject, predicate, object) triples — for example, (Paris, capitalOf, France). This format captures entities and their typed relationships in a way that supports graph traversal and reasoning.',
          ar: 'تخزن رسوم المعرفة البيانية الحقائق كثلاثيات (فاعل، مسند، مفعول) — مثلاً (باريس، عاصمة_لـ، فرنسا). يلتقط هذا التنسيق الكيانات وعلاقاتها المُنمّطة بطريقة تدعم اجتياز الرسم والاستدلال.',
        },
      },
      {
        id: 'batch7-q28',
        question: {
          en: 'Why are knowledge graphs valuable for AI agents compared to relying solely on LLM knowledge?',
          ar: 'لماذا تعتبر رسوم المعرفة البيانية قيّمة لوكلاء الذكاء الاصطناعي مقارنة بالاعتماد فقط على معرفة نموذج اللغة؟',
        },
        options: {
          en: ['Knowledge graphs are always faster', 'Knowledge graphs provide structured, verifiable facts that reduce hallucination', 'Knowledge graphs replace the need for LLMs', 'Knowledge graphs are cheaper to build'],
          ar: ['رسوم المعرفة البيانية دائماً أسرع', 'رسوم المعرفة البيانية توفر حقائق منظمة وقابلة للتحقق تقلل الهلوسة', 'رسوم المعرفة البيانية تحل محل الحاجة لنماذج اللغة الكبيرة', 'رسوم المعرفة البيانية أقل تكلفة في البناء'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Knowledge graphs store verified, structured facts that agents can query for accurate information. Unlike LLM parametric knowledge, which can hallucinate or become outdated, knowledge graph facts are explicit and verifiable, providing reliable grounding for agent responses.',
          ar: 'تخزن رسوم المعرفة البيانية حقائق مُتحققة ومنظمة يمكن للوكلاء الاستعلام عنها للحصول على معلومات دقيقة. بخلاف المعرفة المُعلّمة لنماذج اللغة التي قد تهلوس أو تصبح قديمة، حقائق رسم المعرفة البياني صريحة وقابلة للتحقق وتوفر ترسيخاً موثوقاً لاستجابات الوكيل.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 15. Ontologies for Agents
  // ─────────────────────────────────────────────
  'ontologies-for-agents': {
    beginnerDefinition: {
      en: 'Ontologies are formal descriptions of concepts in a domain and how they relate to each other — like a dictionary plus a rule book for a specific field. For AI agents, ontologies define what types of things exist, what properties they have, and what rules govern them, enabling agents to reason logically about their domain rather than just pattern-matching.',
      ar: 'الأنطولوجيا هي أوصاف رسمية للمفاهيم في مجال وكيف ترتبط ببعضها — مثل قاموس بالإضافة لكتاب قواعد لمجال محدد. لوكلاء الذكاء الاصطناعي تحدد الأنطولوجيا ما هي أنواع الأشياء الموجودة وما هي خصائصها وما هي القواعد التي تحكمها مما يمكّن الوكلاء من الاستدلال المنطقي حول مجالهم بدلاً من مجرد مطابقة الأنماط.',
    },
    technicalDefinition: {
      en: 'An ontology is a formal, explicit specification of a shared conceptualization. It defines classes (types of entities), properties (attributes and relationships), axioms (logical constraints and rules), and instances (individual entities). Standards include OWL (Web Ontology Language) for formal semantics and reasoning, RDFS for lightweight schemas, and SKOS for taxonomies. Ontologies enable automated inference — deriving new facts from existing ones through logical reasoning (e.g., if A is a subclass of B, and X is an instance of A, then X is also an instance of B).',
      ar: 'الأنطولوجيا هي مواصفة رسمية وصريحة لتصور مشترك. تحدد الأصناف (أنواع الكيانات) والخصائص (السمات والعلاقات) والبديهيات (القيود والقواعد المنطقية) والنسخ (الكيانات الفردية). تشمل المعايير OWL (لغة أنطولوجيا الويب) للدلالات الرسمية والاستدلال وRDFS للمخططات الخفيفة وSKOS للتصنيفات. تمكّن الأنطولوجيا الاستدلال الآلي — اشتقاق حقائق جديدة من الموجودة من خلال الاستدلال المنطقي (مثلاً إذا كان A صنف فرعي من B وX نسخة من A فإن X أيضاً نسخة من B).',
    },
    analogy: {
      en: 'An ontology is like the organizational chart plus policies of a large company. The org chart defines what types of roles exist (CEO, Manager, Engineer), what properties each has (salary range, permissions), and the hierarchy (CEO > VP > Manager > Engineer). The policies define rules (a manager must approve expenses over $1000, engineers can only access their team repositories). An agent with this ontology can automatically determine who approves a purchase order or who has access to a specific system.',
      ar: 'الأنطولوجيا تشبه الهيكل التنظيمي بالإضافة لسياسات شركة كبيرة. يحدد الهيكل التنظيمي أنواع الأدوار الموجودة (رئيس تنفيذي، مدير، مهندس) وخصائص كل منها (نطاق الراتب، الصلاحيات) والتسلسل الهرمي (رئيس تنفيذي > نائب رئيس > مدير > مهندس). تحدد السياسات القواعد (يجب على المدير الموافقة على النفقات فوق 1000 دولار، المهندسون يمكنهم فقط الوصول لمستودعات فريقهم). وكيل بهذه الأنطولوجيا يمكنه تحديد من يوافق على أمر شراء أو من لديه وصول لنظام محدد تلقائياً.',
    },
    explanation: {
      en: [
        'Ontologies formalize domain knowledge in a machine-readable way. While knowledge graphs store specific facts (instances), ontologies define the schema — what classes of entities exist, what properties they can have, and what logical rules apply. Think of it as the difference between a database schema (ontology) and the data rows (knowledge graph instances).',
        'For AI agents, ontologies enable constraint-based reasoning. An agent working in healthcare can use a medical ontology to know that "ibuprofen" is a type of "NSAID" which is a type of "anti-inflammatory drug," and that NSAIDs are contraindicated with blood thinners. This structured knowledge helps the agent make safe recommendations without needing every drug interaction explicitly listed.',
        'OWL (Web Ontology Language) is the most expressive standard, supporting class hierarchies, property restrictions, cardinality constraints, and complex logical axioms. A reasoner (like HermiT or Pellet) can automatically infer new facts from the ontology. For example, given the axiom "every parent has at least one child" and the fact "Alice is a parent," the reasoner can infer that Alice has at least one child even if none are explicitly mentioned.',
        'In practice, building ontologies for AI agents involves: (1) identifying the domain concepts and their relationships, (2) formalizing them in OWL or a simpler format, (3) populating with instance data, and (4) integrating with the agent reasoning pipeline. LLMs can assist by extracting ontological structures from domain documentation.',
        'Modern agent systems often use lightweight ontologies (JSON-LD, Schema.org) rather than full OWL for practical reasons. The key benefit remains: giving agents structured knowledge about what is possible, allowed, and related in their domain, complementing the statistical knowledge in their LLM backbone.',
      ],
      ar: [
        'تُشكّل الأنطولوجيا المعرفة المجالية بطريقة قابلة للقراءة الآلية. بينما تخزن رسوم المعرفة البيانية حقائق محددة (نسخ)، تحدد الأنطولوجيا المخطط — ما هي أصناف الكيانات الموجودة وما هي الخصائص التي يمكن أن تمتلكها وما هي القواعد المنطقية المطبقة. فكر فيها كالفرق بين مخطط قاعدة البيانات (الأنطولوجيا) وصفوف البيانات (نسخ رسم المعرفة البياني).',
        'لوكلاء الذكاء الاصطناعي تمكّن الأنطولوجيا الاستدلال القائم على القيود. يمكن لوكيل يعمل في الرعاية الصحية استخدام أنطولوجيا طبية لمعرفة أن "الإيبوبروفين" نوع من "مضادات الالتهاب غير الستيرويدية" وهي نوع من "الأدوية المضادة للالتهابات"، وأن مضادات الالتهاب غير الستيرويدية موانع مع مميعات الدم. تساعد هذه المعرفة المنظمة الوكيل على تقديم توصيات آمنة دون الحاجة لإدراج كل تفاعل دوائي صراحةً.',
        'OWL (لغة أنطولوجيا الويب) هي المعيار الأكثر تعبيرية وتدعم تسلسلات الأصناف وقيود الخصائص وقيود العدد والبديهيات المنطقية المعقدة. يمكن لمحرك استدلال (مثل HermiT أو Pellet) استنتاج حقائق جديدة تلقائياً من الأنطولوجيا. مثلاً بمعطى البديهية "كل والد لديه طفل واحد على الأقل" والحقيقة "أليس والدة"، يمكن للمحرك استنتاج أن أليس لديها طفل واحد على الأقل حتى لو لم يُذكر أي منهم صراحةً.',
        'عملياً بناء الأنطولوجيا لوكلاء الذكاء الاصطناعي يتضمن: (1) تحديد مفاهيم المجال وعلاقاتها، (2) إضفاء الطابع الرسمي عليها في OWL أو صيغة أبسط، (3) ملؤها ببيانات النسخ، (4) دمجها مع خط أنابيب استدلال الوكيل. يمكن لنماذج اللغة الكبيرة المساعدة باستخراج الهياكل الأنطولوجية من وثائق المجال.',
        'غالباً ما تستخدم أنظمة الوكلاء الحديثة أنطولوجيا خفيفة (JSON-LD، Schema.org) بدلاً من OWL الكامل لأسباب عملية. تبقى الفائدة الرئيسية: إعطاء الوكلاء معرفة منظمة حول ما هو ممكن ومسموح ومرتبط في مجالهم مكمّلة المعرفة الإحصائية في عمود نموذج اللغة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from rdflib import Graph, Namespace, RDF, RDFS, OWL, Literal
from rdflib.namespace import XSD

# Create an ontology for a medical agent
g = Graph()
MED = Namespace("http://example.org/medical#")
g.bind("med", MED)

# Define classes (types of entities)
g.add((MED.Drug, RDF.type, OWL.Class))
g.add((MED.NSAID, RDF.type, OWL.Class))
g.add((MED.NSAID, RDFS.subClassOf, MED.Drug))
g.add((MED.Disease, RDF.type, OWL.Class))
g.add((MED.Patient, RDF.type, OWL.Class))

# Define properties (relationships)
g.add((MED.treats, RDF.type, OWL.ObjectProperty))
g.add((MED.treats, RDFS.domain, MED.Drug))
g.add((MED.treats, RDFS.range, MED.Disease))

g.add((MED.contraindicatedWith, RDF.type, OWL.ObjectProperty))
g.add((MED.contraindicatedWith, RDFS.domain, MED.Drug))

# Add instances
g.add((MED.Ibuprofen, RDF.type, MED.NSAID))
g.add((MED.Ibuprofen, MED.treats, MED.Inflammation))
g.add((MED.Ibuprofen, MED.contraindicatedWith, MED.BloodThinner))
g.add((MED.Inflammation, RDF.type, MED.Disease))

# Agent query: "Is Ibuprofen an NSAID?" (uses RDFS reasoning)
query = """
SELECT ?drug WHERE {
    ?drug rdf:type/rdfs:subClassOf* med:Drug .
    ?drug med:contraindicatedWith med:BloodThinner .
}
"""
for row in g.query(query, initNs={"med": MED}):
    print(f"Warning: {row.drug.split('#')[1]} is contraindicated with blood thinners")

# Serialize ontology
g.serialize("medical_ontology.ttl", format="turtle")
print(f"Ontology has {len(g)} triples")`,
      description: {
        en: 'Building a medical ontology with RDFLib: defining classes, properties, instances, and querying for contraindication reasoning.',
        ar: 'بناء أنطولوجيا طبية مع RDFLib: تحديد الأصناف والخصائص والنسخ والاستعلام لاستدلال موانع الاستعمال.',
      },
    },
    commonMistakes: {
      en: [
        'Over-engineering the ontology with unnecessary complexity — start simple and extend as needed',
        'Not reusing existing ontologies (Schema.org, FHIR, Dublin Core) and reinventing definitions from scratch',
        'Confusing ontology (schema/rules) with knowledge graph (data/instances) — they serve different purposes',
        'Building ontologies without domain expert involvement, leading to incorrect or incomplete conceptualizations',
      ],
      ar: [
        'الإفراط في هندسة الأنطولوجيا بتعقيد غير ضروري — ابدأ بسيطاً ووسّع حسب الحاجة',
        'عدم إعادة استخدام الأنطولوجيا الموجودة (Schema.org، FHIR، Dublin Core) وإعادة اختراع التعريفات من الصفر',
        'الخلط بين الأنطولوجيا (المخطط/القواعد) ورسم المعرفة البياني (البيانات/النسخ) — يخدمان أغراضاً مختلفة',
        'بناء الأنطولوجيا دون مشاركة خبراء المجال مما يؤدي لتصورات غير صحيحة أو ناقصة',
      ],
    },
    bestPractices: {
      en: [
        'Start with existing ontology standards (Schema.org, FHIR for healthcare, Dublin Core for documents) and extend',
        'Keep ontologies modular — separate core concepts from domain-specific extensions',
        'Use lightweight formats (JSON-LD, RDFS) for agent integration unless you need full OWL reasoning',
        'Validate your ontology with a reasoner to ensure logical consistency before deploying with agents',
      ],
      ar: [
        'ابدأ بمعايير الأنطولوجيا الموجودة (Schema.org، FHIR للرعاية الصحية، Dublin Core للمستندات) ووسّعها',
        'اجعل الأنطولوجيا معيارية — افصل المفاهيم الأساسية عن الامتدادات الخاصة بالمجال',
        'استخدم صيغاً خفيفة (JSON-LD، RDFS) لدمج الوكيل ما لم تحتج لاستدلال OWL الكامل',
        'تحقق من الأنطولوجيا بمحرك استدلال لضمان الاتساق المنطقي قبل النشر مع الوكلاء',
      ],
    },
    references: [
      { title: 'W3C OWL 2 Web Ontology Language', url: 'https://www.w3.org/TR/owl2-overview/' },
      { title: 'Protégé Ontology Editor', url: 'https://protege.stanford.edu/' },
      { title: 'Schema.org', url: 'https://schema.org/' },
    ],
    quiz: [
      {
        id: 'batch7-q29',
        question: {
          en: 'What is the primary purpose of an ontology in an AI agent system?',
          ar: 'ما هو الغرض الأساسي للأنطولوجيا في نظام وكيل ذكاء اصطناعي؟',
        },
        options: {
          en: ['To store large amounts of text data', 'To define the schema, rules, and logical constraints of a domain enabling structured reasoning', 'To replace the LLM entirely', 'To speed up inference time'],
          ar: ['لتخزين كميات كبيرة من البيانات النصية', 'لتحديد المخطط والقواعد والقيود المنطقية لمجال مما يمكّن الاستدلال المنظم', 'لاستبدال نموذج اللغة الكبير بالكامل', 'لتسريع وقت الاستدلال'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Ontologies define the conceptual schema of a domain — what types of things exist, their properties, and logical rules. This enables agents to perform structured reasoning, check constraints, and make inferences beyond what pattern matching alone can achieve.',
          ar: 'تحدد الأنطولوجيا المخطط المفاهيمي للمجال — ما هي أنواع الأشياء الموجودة وخصائصها وقواعدها المنطقية. يمكّن هذا الوكلاء من إجراء استدلال منظم والتحقق من القيود وإجراء استنتاجات تتجاوز ما يمكن لمطابقة الأنماط وحدها تحقيقه.',
        },
      },
      {
        id: 'batch7-q30',
        question: {
          en: 'What can an OWL reasoner do that a simple database query cannot?',
          ar: 'ما الذي يمكن لمحرك استدلال OWL فعله ولا يستطيعه استعلام قاعدة بيانات بسيط؟',
        },
        options: {
          en: ['Run faster queries', 'Automatically infer new facts from existing ones using logical rules', 'Store more data', 'Generate natural language text'],
          ar: ['تشغيل استعلامات أسرع', 'استنتاج حقائق جديدة تلقائياً من الموجودة باستخدام قواعد منطقية', 'تخزين المزيد من البيانات', 'توليد نصوص باللغة الطبيعية'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'OWL reasoners apply logical inference rules to derive new facts. For example, if the ontology states "NSAIDs are a subclass of Drugs" and "Ibuprofen is an NSAID," the reasoner can infer "Ibuprofen is a Drug" without this being explicitly stated. Databases return only explicitly stored data.',
          ar: 'تطبق محركات استدلال OWL قواعد الاستدلال المنطقي لاشتقاق حقائق جديدة. مثلاً إذا ذكرت الأنطولوجيا "مضادات الالتهاب غير الستيرويدية صنف فرعي من الأدوية" و"الإيبوبروفين مضاد التهاب غير ستيرويدي"، يمكن للمحرك استنتاج "الإيبوبروفين دواء" دون ذكر هذا صراحةً. تعيد قواعد البيانات فقط البيانات المخزنة صراحةً.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 16. Neo4j for Agents
  // ─────────────────────────────────────────────
  'neo4j-for-agents': {
    beginnerDefinition: {
      en: 'Neo4j is a graph database that AI agents can use to store, query, and reason over connected data. Unlike traditional databases that use tables, Neo4j stores data as nodes (things) and relationships (connections), making it natural to answer questions like "what is connected to what" and enabling agents to discover patterns across complex networks of information.',
      ar: 'Neo4j هي قاعدة بيانات رسوم بيانية يمكن لوكلاء الذكاء الاصطناعي استخدامها لتخزين واستعلام والاستدلال على البيانات المترابطة. بخلاف قواعد البيانات التقليدية التي تستخدم الجداول، يخزن Neo4j البيانات كعقد (أشياء) وعلاقات (روابط)، مما يجعل من الطبيعي الإجابة على أسئلة مثل "ما الذي مرتبط بماذا" ويمكّن الوكلاء من اكتشاف الأنماط عبر شبكات معلومات معقدة.',
    },
    technicalDefinition: {
      en: 'Neo4j is a native graph database using the property graph model, where nodes and relationships can have key-value properties. It uses the Cypher query language for declarative graph pattern matching and traversal. Neo4j supports ACID transactions, full-text indexing, vector indexing (since 5.11), and the Graph Data Science (GDS) library for algorithms like PageRank, community detection, and shortest path. For AI agents, Neo4j integrates with LangChain, LlamaIndex, and other frameworks through official connectors, enabling agents to use Cypher as a tool for structured knowledge retrieval.',
      ar: 'Neo4j هي قاعدة بيانات رسوم بيانية أصلية تستخدم نموذج الرسم البياني للخصائص، حيث يمكن للعقد والعلاقات أن تمتلك خصائص مفتاح-قيمة. تستخدم لغة استعلام Cypher لمطابقة واجتياز أنماط الرسم البياني التصريحية. يدعم Neo4j معاملات ACID والفهرسة النصية الكاملة وفهرسة المتجهات (منذ 5.11) ومكتبة علوم بيانات الرسوم (GDS) لخوارزميات مثل PageRank واكتشاف المجتمعات وأقصر مسار. لوكلاء الذكاء الاصطناعي يتكامل Neo4j مع LangChain وLlamaIndex وأطر أخرى من خلال موصلات رسمية مما يمكّن الوكلاء من استخدام Cypher كأداة لاسترجاع المعرفة المنظمة.',
    },
    analogy: {
      en: 'Neo4j is like a social network map for your data. Just as LinkedIn shows how you are connected to any other person through chains of connections, Neo4j lets an AI agent navigate connections in data — following links from a customer to their orders, to the products in those orders, to the suppliers of those products, to other customers who bought from those suppliers. Each hop reveals new context that would require multiple complex SQL joins in a traditional database.',
      ar: 'Neo4j يشبه خريطة شبكة اجتماعية لبياناتك. تماماً كما يُظهر LinkedIn كيف تتصل بأي شخص آخر من خلال سلاسل الاتصالات، يتيح Neo4j لوكيل الذكاء الاصطناعي التنقل في الروابط في البيانات — تتبع الروابط من عميل إلى طلباته إلى المنتجات في تلك الطلبات إلى موردي تلك المنتجات إلى عملاء آخرين اشتروا من هؤلاء الموردين. كل قفزة تكشف سياقاً جديداً يتطلب عمليات SQL JOIN معقدة متعددة في قاعدة بيانات تقليدية.',
    },
    explanation: {
      en: [
        'Neo4j stores data in a property graph model: nodes represent entities (users, products, documents), relationships connect nodes with typed edges (PURCHASED, AUTHORED, SIMILAR_TO), and both can carry key-value properties. This model maps naturally to how we think about connected information.',
        'Cypher is Neo4j declarative query language designed for graph pattern matching. A query like MATCH (u:User)-[:PURCHASED]->(p:Product)<-[:PURCHASED]-(other:User) RETURN other finds users who bought the same products. Cypher queries are intuitive for relationship-heavy queries that would require many JOINs in SQL.',
        'For AI agents, Neo4j serves as a structured knowledge backend. An agent can generate Cypher queries dynamically based on user questions, execute them against the graph, and use the structured results to formulate accurate answers. This is Graph RAG — using a graph database instead of (or alongside) a vector database for retrieval.',
        'Neo4j 5.11+ includes built-in vector indexing, enabling hybrid queries that combine structural graph traversal with semantic similarity search in a single query. An agent can ask: "find entities similar to X that are connected to Y within 2 hops" — combining semantic and structural constraints that neither vector databases nor relational databases can handle alone.',
        'The Graph Data Science (GDS) library provides production-grade graph algorithms. PageRank identifies important nodes, community detection finds clusters, similarity algorithms find related entities, and pathfinding algorithms discover connections. Agents can use these algorithms to answer analytical questions like "who are the most influential people in this network?" or "which topics form distinct clusters?"',
      ],
      ar: [
        'يخزن Neo4j البيانات في نموذج الرسم البياني للخصائص: العقد تمثل الكيانات (المستخدمين، المنتجات، المستندات) والعلاقات تربط العقد بحواف مُنمّطة (اشترى، كتب، مشابه_لـ) وكلاهما يمكن أن يحمل خصائص مفتاح-قيمة. يتناسب هذا النموذج بشكل طبيعي مع كيف نفكر في المعلومات المترابطة.',
        'Cypher هي لغة استعلام تصريحية لـ Neo4j مصممة لمطابقة أنماط الرسوم البيانية. استعلام مثل MATCH (u:User)-[:PURCHASED]->(p:Product)<-[:PURCHASED]-(other:User) RETURN other يجد المستخدمين الذين اشتروا نفس المنتجات. استعلامات Cypher بديهية للاستعلامات الكثيفة بالعلاقات التي تتطلب العديد من JOINs في SQL.',
        'لوكلاء الذكاء الاصطناعي يعمل Neo4j كخلفية معرفة منظمة. يمكن للوكيل توليد استعلامات Cypher ديناميكياً بناءً على أسئلة المستخدم وتنفيذها مقابل الرسم واستخدام النتائج المنظمة لصياغة إجابات دقيقة. هذا هو Graph RAG — استخدام قاعدة بيانات رسوم بيانية بدلاً من (أو بجانب) قاعدة بيانات متجهية للاسترجاع.',
        'يتضمن Neo4j 5.11+ فهرسة متجهات مدمجة مما يمكّن استعلامات هجينة تجمع اجتياز الرسم البنيوي مع البحث بالتشابه الدلالي في استعلام واحد. يمكن للوكيل أن يسأل: "ابحث عن كيانات مشابهة لـ X مرتبطة بـ Y ضمن قفزتين" — يجمع قيوداً دلالية وبنيوية لا يمكن لقواعد البيانات المتجهية ولا العلائقية التعامل معها بمفردها.',
        'توفر مكتبة علوم بيانات الرسوم (GDS) خوارزميات رسوم بيانية بمستوى إنتاجي. PageRank يحدد العقد المهمة واكتشاف المجتمعات يجد المجموعات وخوارزميات التشابه تجد الكيانات المرتبطة وخوارزميات إيجاد المسار تكتشف الروابط. يمكن للوكلاء استخدام هذه الخوارزميات للإجابة على أسئلة تحليلية مثل "من هم الأشخاص الأكثر تأثيراً في هذه الشبكة؟" أو "ما هي المواضيع التي تشكل مجموعات متميزة؟"',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from langchain_community.graphs import Neo4jGraph
from langchain.chains import GraphCypherQAChain
from langchain_openai import ChatOpenAI

# Connect to Neo4j
graph = Neo4jGraph(
    url="bolt://localhost:7687",
    username="neo4j",
    password="password"
)

# Populate with data
graph.query("""
CREATE (alice:Person {name: 'Alice', role: 'ML Engineer'})
CREATE (bob:Person {name: 'Bob', role: 'Data Scientist'})
CREATE (proj:Project {name: 'RAG Pipeline', status: 'active'})
CREATE (doc:Document {title: 'Architecture Doc', pages: 25})
CREATE (alice)-[:WORKS_ON {since: '2024-01'}]->(proj)
CREATE (bob)-[:WORKS_ON {since: '2024-03'}]->(proj)
CREATE (alice)-[:AUTHORED]->(doc)
CREATE (doc)-[:BELONGS_TO]->(proj)
""")

# AI agent uses natural language to query the graph
llm = ChatOpenAI(model="gpt-4", temperature=0)
chain = GraphCypherQAChain.from_llm(
    llm=llm,
    graph=graph,
    verbose=True,
    allow_dangerous_requests=True,
)

# Agent generates Cypher and executes automatically
result = chain.invoke({"query": "Who works on the RAG Pipeline project?"})
print(result["result"])

# Hybrid: vector search + graph traversal
graph.query("""
CREATE VECTOR INDEX doc_embeddings IF NOT EXISTS
FOR (d:Document) ON (d.embedding)
OPTIONS {indexConfig: {
    \`vector.dimensions\`: 1536,
    \`vector.similarity_function\`: 'cosine'
}}
""")`,
      description: {
        en: 'Using Neo4j with LangChain as an AI agent tool: natural language to Cypher conversion, graph queries, and hybrid vector+graph search.',
        ar: 'استخدام Neo4j مع LangChain كأداة لوكيل ذكاء اصطناعي: تحويل اللغة الطبيعية إلى Cypher واستعلامات الرسم البياني والبحث الهجين متجهي+رسم بياني.',
      },
    },
    commonMistakes: {
      en: [
        'Using Neo4j for simple tabular data that would be better served by a relational database — use graphs when relationships are the primary query pattern',
        'Writing Cypher queries without indexes, causing full graph scans on large databases',
        'Not modeling relationships as first-class entities — Neo4j relationships can carry properties, not just connect nodes',
        'Generating unbounded Cypher queries from LLMs (e.g., MATCH (n) RETURN n) that return the entire graph',
      ],
      ar: [
        'استخدام Neo4j لبيانات جدولية بسيطة يخدمها بشكل أفضل قاعدة بيانات علائقية — استخدم الرسوم البيانية عندما تكون العلاقات هي نمط الاستعلام الأساسي',
        'كتابة استعلامات Cypher بدون فهارس مما يسبب مسحاً كاملاً للرسم على قواعد بيانات كبيرة',
        'عدم نمذجة العلاقات ككيانات من الدرجة الأولى — يمكن لعلاقات Neo4j حمل خصائص وليس فقط ربط العقد',
        'توليد استعلامات Cypher غير محدودة من نماذج اللغة (مثل MATCH (n) RETURN n) تُرجع الرسم البياني بالكامل',
      ],
    },
    bestPractices: {
      en: [
        'Create indexes on commonly queried node properties (CREATE INDEX FOR (n:Person) ON (n.name))',
        'Use LIMIT clauses in LLM-generated Cypher to prevent runaway queries returning too much data',
        'Leverage Neo4j built-in vector index for hybrid graph+semantic queries instead of maintaining a separate vector DB',
        'Use the APOC and GDS libraries for advanced graph algorithms and data processing within Neo4j',
      ],
      ar: [
        'أنشئ فهارس على خصائص العقد المُستعلمة بكثرة (CREATE INDEX FOR (n:Person) ON (n.name))',
        'استخدم عبارات LIMIT في Cypher المُولّد من نماذج اللغة لمنع الاستعلامات الهاربة التي تُرجع بيانات كثيرة',
        'استفد من فهرس المتجهات المدمج في Neo4j للاستعلامات الهجينة رسم بياني+دلالية بدلاً من الحفاظ على قاعدة بيانات متجهية منفصلة',
        'استخدم مكتبتي APOC وGDS لخوارزميات الرسوم البيانية المتقدمة ومعالجة البيانات داخل Neo4j',
      ],
    },
    references: [
      { title: 'Neo4j Documentation', url: 'https://neo4j.com/docs/' },
      { title: 'Neo4j & LangChain Integration', url: 'https://python.langchain.com/docs/integrations/graphs/neo4j_cypher' },
      { title: 'Cypher Query Language Reference', url: 'https://neo4j.com/docs/cypher-manual/current/' },
    ],
    quiz: [
      {
        id: 'batch7-q31',
        question: {
          en: 'What query language does Neo4j use for graph pattern matching?',
          ar: 'ما هي لغة الاستعلام التي يستخدمها Neo4j لمطابقة أنماط الرسوم البيانية؟',
        },
        options: {
          en: ['SQL', 'Cypher', 'SPARQL', 'GraphQL'],
          ar: ['SQL', 'Cypher', 'SPARQL', 'GraphQL'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Neo4j uses Cypher, a declarative graph query language designed specifically for property graph pattern matching and traversal. It uses ASCII-art syntax like (a)-[:KNOWS]->(b) to express graph patterns intuitively.',
          ar: 'يستخدم Neo4j لغة Cypher وهي لغة استعلام رسوم بيانية تصريحية مصممة خصيصاً لمطابقة أنماط الرسوم البيانية للخصائص واجتيازها. تستخدم بناء جملة ASCII-art مثل (a)-[:KNOWS]->(b) للتعبير عن أنماط الرسم بشكل بديهي.',
        },
      },
      {
        id: 'batch7-q32',
        question: {
          en: 'What is the advantage of Neo4j built-in vector index for AI agents?',
          ar: 'ما هي ميزة فهرس المتجهات المدمج في Neo4j لوكلاء الذكاء الاصطناعي؟',
        },
        options: {
          en: ['It replaces the need for any database', 'It enables hybrid queries combining structural graph traversal with semantic similarity in one query', 'It makes Neo4j faster than all other databases', 'It eliminates the need for embeddings'],
          ar: ['يحل محل الحاجة لأي قاعدة بيانات', 'يمكّن استعلامات هجينة تجمع اجتياز الرسم البنيوي مع التشابه الدلالي في استعلام واحد', 'يجعل Neo4j أسرع من جميع قواعد البيانات الأخرى', 'يلغي الحاجة للتضمينات'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Neo4j vector index allows combining graph pattern matching (structural relationships) with semantic similarity search (vector cosine distance) in a single Cypher query. This means agents can find semantically similar entities that also satisfy specific relationship constraints.',
          ar: 'يسمح فهرس المتجهات في Neo4j بالجمع بين مطابقة أنماط الرسم (العلاقات البنيوية) مع البحث بالتشابه الدلالي (مسافة جيب التمام المتجهية) في استعلام Cypher واحد. يعني هذا أن الوكلاء يمكنهم إيجاد كيانات متشابهة دلالياً تستوفي أيضاً قيود علاقات محددة.',
        },
      },
    ],
  },
};
