import type { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    type: 'mcq',
    question: {
      en: 'What is the primary difference between an AI Agent and a chatbot?',
      ar: 'ما هو الفرق الأساسي بين وكيل الذكاء الاصطناعي وروبوت المحادثة؟',
    },
    options: {
      en: [
        'Agents can only generate text',
        'Agents can use tools, plan, and take actions autonomously',
        'Chatbots are more powerful than agents',
        'There is no difference',
      ],
      ar: [
        'الوكلاء يمكنهم فقط توليد النص',
        'الوكلاء يمكنهم استخدام الأدوات والتخطيط واتخاذ إجراءات بشكل مستقل',
        'روبوتات المحادثة أقوى من الوكلاء',
        'لا يوجد فرق',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'AI Agents can use tools, plan multi-step tasks, maintain memory, and take autonomous actions  - unlike chatbots which primarily generate text responses.',
      ar: 'يمكن لوكلاء الذكاء الاصطناعي استخدام الأدوات والتخطيط لمهام متعددة الخطوات والحفاظ على الذاكرة واتخاذ إجراءات مستقلة  - على عكس روبوتات المحادثة التي تولد ردود نصية بشكل أساسي.',
    },
    difficulty: 'beginner',
    category: 'foundations',
  },
  {
    id: 'q2',
    type: 'mcq',
    question: {
      en: 'What does the ReAct pattern stand for?',
      ar: 'ما الذي يرمز إليه نمط ReAct؟',
    },
    options: {
      en: ['React JavaScript Framework', 'Reasoning + Acting', 'Reactive Agent Control', 'Real-time Action Computing'],
      ar: ['إطار عمل React JavaScript', 'الاستدلال + التنفيذ', 'التحكم التفاعلي بالوكيل', 'الحوسبة الفعلية في الوقت الحقيقي'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'ReAct stands for Reasoning + Acting. It\'s a pattern where the agent alternates between thinking about what to do and taking actions, observing results to inform next steps.',
      ar: 'ReAct يرمز إلى الاستدلال + التنفيذ. إنه نمط يتناوب فيه الوكيل بين التفكير في ما يجب فعله واتخاذ الإجراءات، مع ملاحظة النتائج لتوجيه الخطوات التالية.',
    },
    difficulty: 'intermediate',
    category: 'core-concepts',
  },
  {
    id: 'q3',
    type: 'true-false',
    question: {
      en: 'RAG (Retrieval-Augmented Generation) allows an AI Agent to access external knowledge beyond its training data.',
      ar: 'يسمح التوليد المعزز بالاسترجاع (RAG) لوكيل الذكاء الاصطناعي بالوصول إلى المعرفة الخارجية بعيداً عن بيانات التدريب.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. RAG retrieves relevant documents from an external knowledge base and feeds them to the LLM as context, allowing it to answer questions about data it wasn\'t trained on.',
      ar: 'صحيح. يسترجع RAG المستندات ذات الصلة من قاعدة المعرفة الخارجية ويقدمها لنموذج اللغة كسياق، مما يسمح له بالإجابة على أسئلة حول بيانات لم يتم تدريبه عليها.',
    },
    difficulty: 'intermediate',
    category: 'core-concepts',
  },
  {
    id: 'q4',
    type: 'mcq',
    question: {
      en: 'What is the purpose of guardrails in AI Agent systems?',
      ar: 'ما هو الغرض من الحواجز الأمنية في أنظمة وكلاء الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'To make agents faster',
        'To ensure agents behave safely and within defined boundaries',
        'To train the model',
        'To reduce costs',
      ],
      ar: [
        'لجعل الوكلاء أسرع',
        'لضمان سلوك الوكلاء بأمان وضمن حدود محددة',
        'لتدريب النموذج',
        'لتقليل التكاليف',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Guardrails are safety mechanisms that validate inputs, outputs, and actions to ensure agents operate within acceptable boundaries and don\'t produce harmful or incorrect results.',
      ar: 'الحواجز الأمنية هي آليات سلامة تتحقق من المدخلات والمخرجات والإجراءات لضمان عمل الوكلاء ضمن حدود مقبولة وعدم إنتاج نتائج ضارة أو غير صحيحة.',
    },
    difficulty: 'advanced',
    category: 'advanced',
  },
  {
    id: 'q5',
    type: 'mcq',
    question: {
      en: 'Which component converts text into numerical vectors for similarity search?',
      ar: 'أي مكون يحول النص إلى متجهات عددية للبحث بالتشابه؟',
    },
    options: {
      en: ['Tokenizer', 'Embedding model', 'Classifier', 'Decoder'],
      ar: ['المُرمّز', 'نموذج التضمين', 'المُصنّف', 'مفكك الترميز'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Embedding models convert text into dense numerical vectors (embeddings) that capture semantic meaning, enabling similarity search in vector databases.',
      ar: 'تحول نماذج التضمين النص إلى متجهات عددية كثيفة (تضمينات) تلتقط المعنى الدلالي، مما يمكّن البحث بالتشابه في قواعد البيانات المتجهة.',
    },
    difficulty: 'intermediate',
    category: 'core-concepts',
  },
  {
    id: 'q6',
    type: 'scenario',
    question: {
      en: 'You are building a customer support agent. A user asks about their order status. The agent should: (1) Look up the order, (2) Check shipping status, (3) Respond to the user. What pattern best describes this behavior?',
      ar: 'أنت تبني وكيل دعم عملاء. يسأل المستخدم عن حالة طلبه. يجب على الوكيل: (1) البحث عن الطلب، (2) التحقق من حالة الشحن، (3) الرد على المستخدم. ما النمط الذي يصف هذا السلوك بشكل أفضل؟',
    },
    options: {
      en: ['Simple prompt completion', 'ReAct (Reasoning + Acting)', 'Pure retrieval', 'Random generation'],
      ar: ['إكمال أمر بسيط', 'ReAct (الاستدلال + التنفيذ)', 'استرجاع بحت', 'توليد عشوائي'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'This is a classic ReAct pattern: the agent reasons about what information it needs, takes actions (tool calls) to look up the order and shipping status, observes the results, and generates a final response.',
      ar: 'هذا نمط ReAct كلاسيكي: يفكر الوكيل في المعلومات التي يحتاجها، ويتخذ إجراءات (استدعاءات أدوات) للبحث عن الطلب وحالة الشحن، ويلاحظ النتائج، ويولد ردًا نهائيًا.',
    },
    difficulty: 'intermediate',
    category: 'core-concepts',
  },
  {
    id: 'q7',
    type: 'true-false',
    question: {
      en: 'In a multi-agent system, agents can only communicate through a central supervisor.',
      ar: 'في نظام متعدد الوكلاء، يمكن للوكلاء التواصل فقط من خلال مشرف مركزي.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. Multi-agent systems can use various communication patterns including peer-to-peer, blackboard systems, publish-subscribe, and supervisor architectures. The supervisor pattern is just one approach.',
      ar: 'خطأ. يمكن لأنظمة الوكلاء المتعددة استخدام أنماط اتصال متنوعة بما في ذلك نظير لنظير، أنظمة السبورة، نشر-اشتراك، ومعماريات المشرف. نمط المشرف هو نهج واحد فقط.',
    },
    difficulty: 'advanced',
    category: 'advanced',
  },
  {
    id: 'q8',
    type: 'mcq',
    question: {
      en: 'What is prompt injection?',
      ar: 'ما هو حقن الأوامر؟',
    },
    options: {
      en: [
        'A technique to improve prompt quality',
        'A security vulnerability where malicious input overrides agent instructions',
        'A way to add more context to a prompt',
        'A method of prompt caching',
      ],
      ar: [
        'تقنية لتحسين جودة الأوامر',
        'ثغرة أمنية حيث تتجاوز المدخلات الخبيثة تعليمات الوكيل',
        'طريقة لإضافة المزيد من السياق إلى أمر',
        'طريقة لتخزين الأوامر مؤقتًا',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Prompt injection is a security vulnerability where malicious user input attempts to override or bypass the system prompt instructions, potentially causing the agent to behave in unintended ways.',
      ar: 'حقن الأوامر هو ثغرة أمنية حيث تحاول المدخلات الخبيثة من المستخدم تجاوز أو تخطي تعليمات أوامر النظام، مما قد يتسبب في سلوك الوكيل بطرق غير مقصودة.',
    },
    difficulty: 'advanced',
    category: 'advanced',
  },
  // ===== NEW QUESTIONS (q9-q38) =====
  // Function Calling (q9-q12)
  {
    id: 'q9',
    type: 'mcq',
    question: {
      en: 'What format does the LLM typically use to specify tool calls in function calling?',
      ar: 'ما هو التنسيق الذي يستخدمه نموذج اللغة الكبير عادةً لتحديد استدعاءات الأدوات في استدعاء الدوال؟',
    },
    options: {
      en: [
        'Plain text with keywords',
        'Structured JSON with function name and arguments',
        'Binary encoded data',
        'XML with SOAP headers',
      ],
      ar: [
        'نص عادي مع كلمات مفتاحية',
        'JSON منظم يتضمن اسم الدالة والمعاملات',
        'بيانات مشفرة ثنائيًا',
        'XML مع ترويسات SOAP',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The LLM outputs structured JSON containing the function name and its arguments when making a tool call. This structured format allows the application to parse the call reliably and execute the corresponding function with the correct parameters.',
      ar: 'يُخرج نموذج اللغة الكبير JSON منظمًا يتضمن اسم الدالة ومعاملاتها عند إجراء استدعاء أداة. يتيح هذا التنسيق المنظم للتطبيق تحليل الاستدعاء بشكل موثوق وتنفيذ الدالة المقابلة بالمعاملات الصحيحة.',
    },
    difficulty: 'intermediate',
    category: 'function-calling',
  },
  {
    id: 'q10',
    type: 'true-false',
    question: {
      en: 'An LLM can call multiple tools in a single response during function calling.',
      ar: 'يمكن لنموذج اللغة الكبير استدعاء أدوات متعددة في استجابة واحدة أثناء استدعاء الدوال.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Modern LLMs support parallel tool calling, where the model can request multiple tool invocations in a single response. This is useful when multiple independent pieces of information are needed simultaneously, reducing the number of round trips.',
      ar: 'صحيح. تدعم نماذج اللغة الكبيرة الحديثة استدعاء الأدوات بشكل متوازٍ، حيث يمكن للنموذج طلب استدعاءات أدوات متعددة في استجابة واحدة. هذا مفيد عند الحاجة إلى معلومات مستقلة متعددة في وقت واحد، مما يقلل عدد الرحلات ذهابًا وإيابًا.',
    },
    difficulty: 'intermediate',
    category: 'function-calling',
  },
  {
    id: 'q11',
    type: 'scenario',
    question: {
      en: 'You are designing a tool schema for an e-commerce agent that needs to search products by name, category, and price range. Which approach best describes a well-designed tool schema?',
      ar: 'أنت تصمم مخطط أداة لوكيل تجارة إلكترونية يحتاج للبحث عن المنتجات بالاسم والفئة ونطاق السعر. أي نهج يصف بشكل أفضل مخطط أداة مصمم بشكل جيد؟',
    },
    options: {
      en: [
        'One tool with a single string parameter that accepts free-form queries',
        'A tool with clearly typed parameters: name (string), category (enum), minPrice (number), maxPrice (number) with descriptions',
        'Three separate tools, one for each search criterion with no way to combine them',
        'No schema at all  - let the LLM figure out the format',
      ],
      ar: [
        'أداة واحدة بمعامل نصي واحد يقبل استعلامات حرة',
        'أداة بمعاملات محددة الأنواع: الاسم (نص)، الفئة (تعداد)، الحد الأدنى للسعر (رقم)، الحد الأقصى للسعر (رقم) مع أوصاف',
        'ثلاث أدوات منفصلة، واحدة لكل معيار بحث بدون طريقة لدمجها',
        'بدون مخطط على الإطلاق  - دع نموذج اللغة يحدد التنسيق',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A well-designed tool schema uses clearly typed parameters with descriptive names and types. Using an enum for category constrains the values, number types for prices enable validation, and parameter descriptions help the LLM understand when and how to use each field correctly.',
      ar: 'يستخدم مخطط الأداة المصمم بشكل جيد معاملات محددة الأنواع بأسماء وأنواع وصفية. استخدام التعداد للفئة يقيّد القيم، وأنواع الأرقام للأسعار تمكّن التحقق، وأوصاف المعاملات تساعد نموذج اللغة على فهم متى وكيف يستخدم كل حقل بشكل صحيح.',
    },
    difficulty: 'intermediate',
    category: 'function-calling',
  },
  {
    id: 'q12',
    type: 'mcq',
    question: {
      en: 'What is the purpose of the "required" field in a tool schema?',
      ar: 'ما هو الغرض من حقل "required" في مخطط الأداة؟',
    },
    options: {
      en: [
        'To mark which tools must always be called',
        'To specify which parameters must be provided by the LLM when calling the tool',
        'To indicate the tool is mandatory in the system',
        'To enforce API rate limits',
      ],
      ar: [
        'لتحديد الأدوات التي يجب استدعاؤها دائمًا',
        'لتحديد المعاملات التي يجب أن يوفرها نموذج اللغة عند استدعاء الأداة',
        'للإشارة إلى أن الأداة إلزامية في النظام',
        'لفرض حدود معدل واجهة برمجة التطبيقات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The "required" field in a JSON Schema tool definition lists which parameters must be included when the LLM invokes the tool. Optional parameters can be omitted, but required ones must always be provided to ensure the function receives the minimum necessary inputs for correct execution.',
      ar: 'يسرد حقل "required" في تعريف مخطط أداة JSON المعاملات التي يجب تضمينها عند استدعاء نموذج اللغة للأداة. يمكن حذف المعاملات الاختيارية، لكن يجب توفير المعاملات المطلوبة دائمًا لضمان حصول الدالة على الحد الأدنى من المدخلات اللازمة للتنفيذ الصحيح.',
    },
    difficulty: 'intermediate',
    category: 'function-calling',
  },
  // Frameworks - LangGraph (q13-q17)
  {
    id: 'q13',
    type: 'mcq',
    question: {
      en: 'What is a StateGraph in LangGraph?',
      ar: 'ما هو StateGraph في LangGraph؟',
    },
    options: {
      en: [
        'A visualization library for plotting data',
        'A graph structure where nodes are functions and edges define execution flow, with a shared state object',
        'A database schema diagram',
        'A frontend component for rendering charts',
      ],
      ar: [
        'مكتبة تصوير لرسم البيانات',
        'هيكل رسم بياني حيث العقد هي دوال والحواف تحدد تدفق التنفيذ مع كائن حالة مشترك',
        'مخطط قاعدة بيانات',
        'مكون واجهة أمامية لعرض المخططات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A StateGraph in LangGraph is a graph structure that defines a workflow as a set of nodes (functions) connected by edges (transitions). All nodes read from and write to a shared state object, which flows through the graph and accumulates results as nodes execute.',
      ar: 'StateGraph في LangGraph هو هيكل رسم بياني يحدد سير العمل كمجموعة من العقد (الدوال) المتصلة بحواف (انتقالات). تقرأ جميع العقد من كائن حالة مشترك وتكتب إليه، والذي يتدفق عبر الرسم البياني ويجمع النتائج مع تنفيذ العقد.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-langgraph',
  },
  {
    id: 'q14',
    type: 'true-false',
    question: {
      en: 'LangGraph nodes can only be LLM calls.',
      ar: 'يمكن أن تكون عقد LangGraph استدعاءات نماذج لغة كبيرة فقط.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. LangGraph nodes can be any Python function that takes the state as input and returns an update to the state. This includes LLM calls, API requests, database queries, data transformations, conditional logic, or any other computation.',
      ar: 'خطأ. يمكن أن تكون عقد LangGraph أي دالة Python تأخذ الحالة كمدخل وتعيد تحديثًا للحالة. يشمل ذلك استدعاءات نماذج اللغة، وطلبات API، واستعلامات قواعد البيانات، وتحويلات البيانات، والمنطق الشرطي، أو أي حسابات أخرى.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-langgraph',
  },
  {
    id: 'q15',
    type: 'mcq',
    question: {
      en: 'What are conditional edges used for in LangGraph?',
      ar: 'ما هي الحواف الشرطية المستخدمة في LangGraph؟',
    },
    options: {
      en: [
        'To add styling to the graph visualization',
        'To dynamically route execution to different nodes based on the current state',
        'To create backup copies of the state',
        'To handle error logging',
      ],
      ar: [
        'لإضافة تنسيق لتصوير الرسم البياني',
        'لتوجيه التنفيذ ديناميكيًا إلى عقد مختلفة بناءً على الحالة الحالية',
        'لإنشاء نسخ احتياطية من الحالة',
        'للتعامل مع تسجيل الأخطاء',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Conditional edges in LangGraph use a routing function that examines the current state and returns the name of the next node to execute. This enables dynamic branching, allowing the workflow to take different paths based on intermediate results, user input, or any state condition.',
      ar: 'تستخدم الحواف الشرطية في LangGraph دالة توجيه تفحص الحالة الحالية وتعيد اسم العقدة التالية للتنفيذ. يتيح ذلك التفرع الديناميكي، مما يسمح لسير العمل باتخاذ مسارات مختلفة بناءً على النتائج الوسيطة أو مدخلات المستخدم أو أي شرط حالة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-langgraph',
  },
  {
    id: 'q16',
    type: 'scenario',
    question: {
      en: 'You are designing a LangGraph workflow for document processing. The workflow should: extract text, classify the document type, then route to specialized processing nodes (invoice processor, contract analyzer, or general summarizer). Which LangGraph features would you use?',
      ar: 'أنت تصمم سير عمل LangGraph لمعالجة المستندات. يجب أن يقوم سير العمل بـ: استخراج النص، تصنيف نوع المستند، ثم التوجيه إلى عقد معالجة متخصصة (معالج فواتير، محلل عقود، أو ملخص عام). ما ميزات LangGraph التي ستستخدمها؟',
    },
    options: {
      en: [
        'Only simple edges connecting all nodes in sequence',
        'StateGraph with nodes for each step and conditional edges after classification to route to the correct processor',
        'A single node that does everything',
        'Multiple separate graphs with no connection between them',
      ],
      ar: [
        'حواف بسيطة فقط تربط جميع العقد بالتسلسل',
        'StateGraph مع عقد لكل خطوة وحواف شرطية بعد التصنيف للتوجيه إلى المعالج الصحيح',
        'عقدة واحدة تفعل كل شيء',
        'رسوم بيانية منفصلة متعددة بدون اتصال بينها',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The correct approach uses a StateGraph with dedicated nodes for text extraction, classification, and each specialized processor. After the classification node, a conditional edge examines the document type in the state and routes to the appropriate processing node (invoice, contract, or general).',
      ar: 'النهج الصحيح يستخدم StateGraph مع عقد مخصصة لاستخراج النص والتصنيف ولكل معالج متخصص. بعد عقدة التصنيف، تفحص حافة شرطية نوع المستند في الحالة وتوجه إلى عقدة المعالجة المناسبة (فاتورة أو عقد أو عام).',
    },
    difficulty: 'advanced',
    category: 'frameworks-langgraph',
  },
  {
    id: 'q17',
    type: 'mcq',
    question: {
      en: 'What does checkpointing enable in LangGraph?',
      ar: 'ماذا يمكّن نظام نقاط التفتيش في LangGraph؟',
    },
    options: {
      en: [
        'Faster model inference',
        'Persisting graph state so execution can be paused, resumed, or rewound to previous steps',
        'Automatic code generation',
        'Real-time collaboration between developers',
      ],
      ar: [
        'استدلال أسرع للنموذج',
        'حفظ حالة الرسم البياني بحيث يمكن إيقاف التنفيذ مؤقتًا أو استئنافه أو إرجاعه لخطوات سابقة',
        'توليد الكود تلقائيًا',
        'التعاون في الوقت الفعلي بين المطورين',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Checkpointing in LangGraph persists the graph state at each step, enabling powerful capabilities like pausing and resuming long-running workflows, rewinding to previous states for debugging, implementing human-in-the-loop approval steps, and recovering from failures.',
      ar: 'يحفظ نظام نقاط التفتيش في LangGraph حالة الرسم البياني عند كل خطوة، مما يمكّن قدرات قوية مثل إيقاف واستئناف سير العمل طويل التشغيل، والعودة إلى حالات سابقة لتصحيح الأخطاء، وتنفيذ خطوات موافقة بشرية، والتعافي من حالات الفشل.',
    },
    difficulty: 'advanced',
    category: 'frameworks-langgraph',
  },
  // Memory Systems (q18-q21)
  {
    id: 'q18',
    type: 'mcq',
    question: {
      en: 'What is the difference between short-term and long-term memory in AI agents?',
      ar: 'ما هو الفرق بين الذاكرة قصيرة المدى والذاكرة طويلة المدى في وكلاء الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'Short-term memory uses faster hardware while long-term uses slower storage',
        'Short-term memory holds the current conversation context, while long-term memory persists information across sessions',
        'They are the same concept with different names',
        'Long-term memory only stores numerical data',
      ],
      ar: [
        'الذاكرة قصيرة المدى تستخدم عتادًا أسرع بينما الذاكرة طويلة المدى تستخدم تخزينًا أبطأ',
        'الذاكرة قصيرة المدى تحتفظ بسياق المحادثة الحالي، بينما الذاكرة طويلة المدى تحفظ المعلومات عبر الجلسات',
        'هما نفس المفهوم بأسماء مختلفة',
        'الذاكرة طويلة المدى تخزن البيانات الرقمية فقط',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Short-term memory (working memory) holds the active conversation context, recent messages, and temporary working data within a single session. Long-term memory persists across sessions, storing user preferences, learned facts, and interaction history that can be retrieved in future conversations.',
      ar: 'تحتفظ الذاكرة قصيرة المدى (الذاكرة العاملة) بسياق المحادثة النشط والرسائل الأخيرة وبيانات العمل المؤقتة ضمن جلسة واحدة. تستمر الذاكرة طويلة المدى عبر الجلسات، وتخزن تفضيلات المستخدم والحقائق المكتسبة وتاريخ التفاعل الذي يمكن استرجاعه في المحادثات المستقبلية.',
    },
    difficulty: 'intermediate',
    category: 'memory-systems',
  },
  {
    id: 'q19',
    type: 'true-false',
    question: {
      en: 'Mem0 replaces the need for conversation history in AI agents.',
      ar: 'يحل Mem0 محل الحاجة إلى سجل المحادثات في وكلاء الذكاء الاصطناعي.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. Mem0 complements conversation history rather than replacing it. Mem0 provides an intelligent long-term memory layer that extracts and organizes key facts from conversations, but the conversation history (short-term memory) is still needed for maintaining the immediate context of the current interaction.',
      ar: 'خطأ. يكمّل Mem0 سجل المحادثات بدلاً من استبداله. يوفر Mem0 طبقة ذاكرة ذكية طويلة المدى تستخرج وتنظم الحقائق الرئيسية من المحادثات، لكن سجل المحادثات (الذاكرة قصيرة المدى) لا يزال مطلوبًا للحفاظ على السياق الفوري للتفاعل الحالي.',
    },
    difficulty: 'intermediate',
    category: 'memory-systems',
  },
  {
    id: 'q20',
    type: 'mcq',
    question: {
      en: 'What does CoALA stand for in agent memory architecture?',
      ar: 'ما الذي يرمز إليه CoALA في معمارية ذاكرة الوكيل؟',
    },
    options: {
      en: [
        'Collaborative Agents with Learning Algorithms',
        'Cognitive Architectures for Language Agents',
        'Conversational AI with Large Adapters',
        'Computed Analysis for Language Applications',
      ],
      ar: [
        'الوكلاء التعاونيون مع خوارزميات التعلم',
        'البنى المعرفية لوكلاء اللغة',
        'الذكاء الاصطناعي التحادثي مع محولات كبيرة',
        'التحليل المحوسب لتطبيقات اللغة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'CoALA stands for Cognitive Architectures for Language Agents. It is a framework that organizes agent memory into four types inspired by human cognition: working memory (active context), episodic memory (past experiences), semantic memory (general knowledge), and procedural memory (learned skills and strategies).',
      ar: 'CoALA يرمز إلى البنى المعرفية لوكلاء اللغة. هو إطار عمل ينظم ذاكرة الوكيل إلى أربعة أنواع مستوحاة من الإدراك البشري: الذاكرة العاملة (السياق النشط)، الذاكرة العرضية (التجارب السابقة)، الذاكرة الدلالية (المعرفة العامة)، والذاكرة الإجرائية (المهارات والاستراتيجيات المكتسبة).',
    },
    difficulty: 'intermediate',
    category: 'memory-systems',
  },
  {
    id: 'q21',
    type: 'scenario',
    question: {
      en: 'You are building a customer service agent that needs to remember a customer\'s product preferences across multiple sessions, recall the current conversation context, and learn from resolved support tickets. Which memory types should you implement?',
      ar: 'أنت تبني وكيل خدمة عملاء يحتاج لتذكر تفضيلات المنتجات للعميل عبر جلسات متعددة، واستحضار سياق المحادثة الحالية، والتعلم من تذاكر الدعم المحلولة. ما أنواع الذاكرة التي يجب تنفيذها؟',
    },
    options: {
      en: [
        'Only short-term memory for the conversation',
        'Only long-term memory for storing preferences',
        'Short-term memory for conversation context, semantic memory for preferences, and episodic memory for past ticket resolutions',
        'No memory is needed  - just use a larger context window',
      ],
      ar: [
        'ذاكرة قصيرة المدى فقط للمحادثة',
        'ذاكرة طويلة المدى فقط لتخزين التفضيلات',
        'ذاكرة قصيرة المدى لسياق المحادثة، وذاكرة دلالية للتفضيلات، وذاكرة عرضية لحلول التذاكر السابقة',
        'لا حاجة لذاكرة  - استخدم فقط نافذة سياق أكبر',
      ],
    },
    correctAnswer: 2,
    explanation: {
      en: 'This scenario requires three memory types: short-term (working) memory to maintain the current conversation context, semantic memory to store and retrieve customer preferences and product knowledge across sessions, and episodic memory to recall specific past support interactions and their resolutions for similar issues.',
      ar: 'يتطلب هذا السيناريو ثلاثة أنواع من الذاكرة: ذاكرة قصيرة المدى (عاملة) للحفاظ على سياق المحادثة الحالية، وذاكرة دلالية لتخزين واسترجاع تفضيلات العملاء ومعرفة المنتجات عبر الجلسات، وذاكرة عرضية لاستحضار تفاعلات الدعم السابقة المحددة وحلولها لمشاكل مماثلة.',
    },
    difficulty: 'intermediate',
    category: 'memory-systems',
  },
  // Design Patterns (q22-q26)
  {
    id: 'q22',
    type: 'mcq',
    question: {
      en: 'What is the Reflection pattern in agentic AI?',
      ar: 'ما هو نمط الانعكاس في الذكاء الاصطناعي الوكيل؟',
    },
    options: {
      en: [
        'A pattern where the agent mirrors user input back to them',
        'A pattern where the agent reviews and critiques its own output to iteratively improve quality',
        'A pattern for reflecting data across databases',
        'A pattern for creating mirror copies of agents',
      ],
      ar: [
        'نمط يعكس فيه الوكيل مدخلات المستخدم إليه',
        'نمط يراجع فيه الوكيل مخرجاته ويقيّمها لتحسين الجودة بشكل تكراري',
        'نمط لعكس البيانات عبر قواعد البيانات',
        'نمط لإنشاء نسخ مرآة من الوكلاء',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The Reflection pattern involves an agent generating an initial output, then critically evaluating it for correctness, quality, and completeness. The agent iterates  - producing improved versions based on its self-critique  - until the output meets a quality threshold. This mimics how humans review and revise their own work.',
      ar: 'يتضمن نمط الانعكاس قيام الوكيل بتوليد مخرجات أولية، ثم تقييمها نقديًا من حيث الصحة والجودة والاكتمال. يكرر الوكيل  - منتجًا نسخًا محسنة بناءً على نقده الذاتي  - حتى تلبي المخرجات حدًا أدنى من الجودة. هذا يحاكي كيفية مراجعة البشر لعملهم وتنقيحه.',
    },
    difficulty: 'intermediate',
    category: 'design-patterns',
  },
  {
    id: 'q23',
    type: 'true-false',
    question: {
      en: 'Chain-of-thought prompting always improves the accuracy of LLM responses.',
      ar: 'يحسّن التفكير التسلسلي دائمًا دقة استجابات نماذج اللغة الكبيرة.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. While chain-of-thought (CoT) prompting often improves reasoning on complex tasks, it does not always improve accuracy. For simple factual questions, CoT can sometimes introduce unnecessary reasoning steps that lead to errors. It also increases token usage and latency, and can amplify biases present in the reasoning chain.',
      ar: 'خطأ. بينما يحسّن التفكير التسلسلي الاستدلال في المهام المعقدة غالبًا، إلا أنه لا يحسّن الدقة دائمًا. بالنسبة للأسئلة الواقعية البسيطة، يمكن أن يقدم أحيانًا خطوات استدلال غير ضرورية تؤدي إلى أخطاء. كما أنه يزيد استخدام الرموز وزمن الاستجابة، ويمكن أن يضخم التحيزات الموجودة في سلسلة الاستدلال.',
    },
    difficulty: 'intermediate',
    category: 'design-patterns',
  },
  {
    id: 'q24',
    type: 'mcq',
    question: {
      en: 'What distinguishes the Planning pattern from simple ReAct?',
      ar: 'ما الذي يميز نمط التخطيط عن نمط ReAct البسيط؟',
    },
    options: {
      en: [
        'Planning uses fewer API calls',
        'Planning creates a full multi-step plan before execution, while ReAct interleaves reasoning and action one step at a time',
        'ReAct is more advanced than Planning',
        'Planning does not use any tools',
      ],
      ar: [
        'التخطيط يستخدم استدعاءات API أقل',
        'التخطيط ينشئ خطة كاملة متعددة الخطوات قبل التنفيذ، بينما ReAct يتناوب بين الاستدلال والتنفيذ خطوة بخطوة',
        'ReAct أكثر تقدمًا من التخطيط',
        'التخطيط لا يستخدم أي أدوات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The Planning pattern differs from ReAct by generating a comprehensive multi-step plan upfront before executing any actions. The agent decomposes the task into sub-tasks, orders them, and then executes them. ReAct, in contrast, interleaves one reasoning step with one action at a time, deciding the next step only after observing the result of the previous one.',
      ar: 'يختلف نمط التخطيط عن ReAct بتوليد خطة شاملة متعددة الخطوات مقدمًا قبل تنفيذ أي إجراءات. يقسم الوكيل المهمة إلى مهام فرعية ويرتبها ثم ينفذها. على النقيض، يتناوب ReAct بين خطوة استدلال واحدة وإجراء واحد في كل مرة، ويقرر الخطوة التالية فقط بعد ملاحظة نتيجة الخطوة السابقة.',
    },
    difficulty: 'intermediate',
    category: 'design-patterns',
  },
  {
    id: 'q25',
    type: 'scenario',
    question: {
      en: 'You are building a code review system that should: generate initial review comments, evaluate if the comments are constructive and accurate, revise unhelpful comments, and produce a final review. Which agentic design pattern is most appropriate?',
      ar: 'أنت تبني نظام مراجعة كود يجب أن: يولّد تعليقات مراجعة أولية، ويقيّم ما إذا كانت التعليقات بنّاءة ودقيقة، ويراجع التعليقات غير المفيدة، وينتج مراجعة نهائية. ما نمط التصميم الوكيل الأنسب؟',
    },
    options: {
      en: [
        'Simple prompt-response without iteration',
        'Reflection pattern  - generate, critique, and iteratively improve the review',
        'Tool Use pattern only',
        'Random sampling from multiple LLMs',
      ],
      ar: [
        'استجابة أمر بسيطة بدون تكرار',
        'نمط الانعكاس  - التوليد والنقد والتحسين التكراري للمراجعة',
        'نمط استخدام الأدوات فقط',
        'أخذ عينات عشوائية من نماذج لغة متعددة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The Reflection pattern is ideal for this code review system. The agent generates initial review comments, then acts as its own critic to evaluate whether comments are constructive and accurate. Unhelpful or inaccurate comments are revised iteratively until the quality meets the desired standard, producing a polished final review.',
      ar: 'نمط الانعكاس مثالي لنظام مراجعة الكود هذا. يولّد الوكيل تعليقات مراجعة أولية، ثم يعمل كناقد لنفسه لتقييم ما إذا كانت التعليقات بنّاءة ودقيقة. تُراجع التعليقات غير المفيدة أو غير الدقيقة بشكل تكراري حتى تلبي الجودة المعيار المطلوب، منتجةً مراجعة نهائية مصقولة.',
    },
    difficulty: 'advanced',
    category: 'design-patterns',
  },
  {
    id: 'q26',
    type: 'mcq',
    question: {
      en: 'What is Tree of Thoughts?',
      ar: 'ما هي شجرة الأفكار؟',
    },
    options: {
      en: [
        'A data structure for storing conversation history',
        'A reasoning framework where the LLM explores multiple reasoning paths simultaneously and evaluates which is most promising',
        'A visualization tool for displaying agent architectures',
        'A method for organizing training data into hierarchies',
      ],
      ar: [
        'هيكل بيانات لتخزين سجل المحادثات',
        'إطار استدلال يستكشف فيه نموذج اللغة مسارات استدلال متعددة في وقت واحد ويقيّم أيها الأكثر وعدًا',
        'أداة تصوير لعرض معماريات الوكلاء',
        'طريقة لتنظيم بيانات التدريب في تسلسلات هرمية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Tree of Thoughts (ToT) is an advanced reasoning framework that extends chain-of-thought by exploring multiple reasoning paths as branches of a tree. The LLM generates several candidate thoughts at each step, evaluates their promise, and can backtrack from dead ends to explore alternative paths  - similar to how humans consider multiple approaches to solve complex problems.',
      ar: 'شجرة الأفكار هي إطار استدلال متقدم يوسع التفكير التسلسلي من خلال استكشاف مسارات استدلال متعددة كفروع لشجرة. يولّد نموذج اللغة عدة أفكار مرشحة في كل خطوة، ويقيّم مدى وعدها، ويمكنه التراجع عن الطرق المسدودة لاستكشاف مسارات بديلة  - مشابهًا لكيفية تفكير البشر في مناهج متعددة لحل المشاكل المعقدة.',
    },
    difficulty: 'advanced',
    category: 'design-patterns',
  },
  // Frameworks - AutoGen (q27-q30)
  {
    id: 'q27',
    type: 'mcq',
    question: {
      en: 'What is a ConversableAgent in AutoGen?',
      ar: 'ما هو ConversableAgent في AutoGen؟',
    },
    options: {
      en: [
        'A read-only logging agent that only records conversations',
        'A versatile base agent class that can send/receive messages, use tools, execute code, and be configured with various LLMs',
        'A simple text parser without any intelligence',
        'A database connection manager',
      ],
      ar: [
        'وكيل تسجيل للقراءة فقط يسجل المحادثات فقط',
        'فئة وكيل أساسية متعددة الاستخدامات يمكنها إرسال/استقبال الرسائل واستخدام الأدوات وتنفيذ الكود وتكوينها بنماذج لغة مختلفة',
        'محلل نص بسيط بدون أي ذكاء',
        'مدير اتصال قاعدة البيانات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'ConversableAgent is the foundational building block in AutoGen. It is a highly configurable agent class that can send and receive messages, be backed by different LLMs, use registered tools, execute code, and participate in multi-agent conversations. Specialized agents like AssistantAgent and UserProxyAgent extend ConversableAgent.',
      ar: 'ConversableAgent هو اللبنة الأساسية في AutoGen. إنه فئة وكيل قابلة للتكوين بدرجة عالية يمكنها إرسال واستقبال الرسائل، ودعمها بنماذج لغة مختلفة، واستخدام الأدوات المسجلة، وتنفيذ الكود، والمشاركة في محادثات متعددة الوكلاء. الوكلاء المتخصصون مثل AssistantAgent و UserProxyAgent يوسعون ConversableAgent.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-autogen',
  },
  {
    id: 'q28',
    type: 'true-false',
    question: {
      en: 'AutoGen GroupChat requires a fixed number of agents that cannot be changed after initialization.',
      ar: 'يتطلب GroupChat في AutoGen عددًا ثابتًا من الوكلاء لا يمكن تغييره بعد التهيئة.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. AutoGen GroupChat is flexible in the number and composition of participating agents. Agents can be dynamically added to or configured within a group chat, and the GroupChatManager handles speaker selection and turn-taking regardless of the number of agents involved.',
      ar: 'خطأ. GroupChat في AutoGen مرن في عدد وتركيبة الوكلاء المشاركين. يمكن إضافة الوكلاء ديناميكيًا أو تكوينهم ضمن محادثة جماعية، ويتولى GroupChatManager اختيار المتحدث وتناوب الأدوار بغض النظر عن عدد الوكلاء المشاركين.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-autogen',
  },
  {
    id: 'q29',
    type: 'mcq',
    question: {
      en: 'What is nested chat in AutoGen?',
      ar: 'ما هي المحادثة المتداخلة في AutoGen؟',
    },
    options: {
      en: [
        'A chat window inside another chat window in the UI',
        'A pattern where an agent triggers a separate inner conversation with other agents to handle a sub-task before responding',
        'A method for compressing chat history',
        'A way to encrypt messages between agents',
      ],
      ar: [
        'نافذة محادثة داخل نافذة محادثة أخرى في الواجهة',
        'نمط يقوم فيه الوكيل بتشغيل محادثة داخلية منفصلة مع وكلاء آخرين لمعالجة مهمة فرعية قبل الاستجابة',
        'طريقة لضغط سجل المحادثة',
        'طريقة لتشفير الرسائل بين الوكلاء',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Nested chat in AutoGen allows an agent to initiate a separate, self-contained conversation with one or more other agents as part of handling a message. This inner conversation resolves a sub-task, and the result is used to formulate the outer response. It enables modular, hierarchical agent workflows.',
      ar: 'تسمح المحادثة المتداخلة في AutoGen للوكيل ببدء محادثة منفصلة ومستقلة مع وكيل آخر أو أكثر كجزء من معالجة رسالة. تحل هذه المحادثة الداخلية مهمة فرعية، وتُستخدم النتيجة لصياغة الاستجابة الخارجية. تمكّن سير عمل الوكلاء المعياري والهرمي.',
    },
    difficulty: 'advanced',
    category: 'frameworks-autogen',
  },
  {
    id: 'q30',
    type: 'scenario',
    question: {
      en: 'You are configuring AutoGen agents for a software development workflow. You need a project manager agent to coordinate tasks, a coder agent to write code, and a reviewer agent to check quality. How should you set up the communication?',
      ar: 'أنت تقوم بتكوين وكلاء AutoGen لسير عمل تطوير البرمجيات. تحتاج وكيل مدير مشروع لتنسيق المهام، ووكيل مبرمج لكتابة الكود، ووكيل مراجع للتحقق من الجودة. كيف يجب إعداد التواصل؟',
    },
    options: {
      en: [
        'Let all agents run independently with no communication',
        'Use GroupChat with a GroupChatManager so agents can discuss, and the manager coordinates who speaks next based on the conversation context',
        'Only allow the coder to communicate, all others are silent',
        'Use a single agent to do everything',
      ],
      ar: [
        'ترك جميع الوكلاء يعملون بشكل مستقل بدون تواصل',
        'استخدام GroupChat مع GroupChatManager حتى يتمكن الوكلاء من المناقشة، والمدير ينسق من يتحدث بعد ذلك بناءً على سياق المحادثة',
        'السماح للمبرمج فقط بالتواصل والبقية صامتون',
        'استخدام وكيل واحد لفعل كل شيء',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'GroupChat with a GroupChatManager is the ideal setup for this multi-agent software development workflow. The manager agent assigns tasks, the coder implements them, and the reviewer provides feedback  - all within a shared conversation. The GroupChatManager intelligently selects the next speaker based on the conversation flow, enabling natural collaboration.',
      ar: 'GroupChat مع GroupChatManager هو الإعداد المثالي لسير عمل تطوير البرمجيات متعدد الوكلاء. يعيّن وكيل المدير المهام، وينفذها المبرمج، ويقدم المراجع الملاحظات  - كل ذلك ضمن محادثة مشتركة. يختار GroupChatManager بذكاء المتحدث التالي بناءً على تدفق المحادثة، مما يمكّن التعاون الطبيعي.',
    },
    difficulty: 'advanced',
    category: 'frameworks-autogen',
  },
  // Frameworks - ADK (q31-q34)
  {
    id: 'q31',
    type: 'mcq',
    question: {
      en: 'What is Google ADK primarily designed for?',
      ar: 'ما الغرض الأساسي الذي صُمم من أجله Google ADK؟',
    },
    options: {
      en: [
        'Building mobile applications',
        'Building, deploying, and orchestrating AI agents with Google Cloud integration',
        'Creating static websites',
        'Managing cloud storage buckets',
      ],
      ar: [
        'بناء تطبيقات الهاتف المحمول',
        'بناء ونشر وتنسيق وكلاء الذكاء الاصطناعي مع تكامل Google Cloud',
        'إنشاء مواقع ويب ثابتة',
        'إدارة حاويات التخزين السحابي',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Google ADK (Agent Development Kit) is primarily designed for building, deploying, and orchestrating AI agents. It provides tools for defining agents, managing sessions, integrating with Google Cloud services, and implementing multi-agent workflows with features like callbacks, guardrails, and various execution patterns.',
      ar: 'صُمم Google ADK (مجموعة تطوير الوكلاء) بشكل أساسي لبناء ونشر وتنسيق وكلاء الذكاء الاصطناعي. يوفر أدوات لتعريف الوكلاء وإدارة الجلسات والتكامل مع خدمات Google Cloud وتنفيذ سير عمل متعدد الوكلاء مع ميزات مثل الاستدعاءات الراجعة والحواجز الأمنية وأنماط تنفيذ مختلفة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-adk',
  },
  {
    id: 'q32',
    type: 'true-false',
    question: {
      en: 'ADK callbacks can modify agent behavior at runtime.',
      ar: 'يمكن لاستدعاءات ADK الراجعة تعديل سلوك الوكيل في وقت التشغيل.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. ADK callbacks are hook functions that execute before or after agent actions, allowing developers to inspect, modify, or block agent behavior at runtime. They can alter inputs, filter outputs, enforce safety policies, add logging, or redirect the flow of execution dynamically.',
      ar: 'صحيح. استدعاءات ADK الراجعة هي دوال ربط تُنفذ قبل أو بعد إجراءات الوكيل، مما يسمح للمطورين بفحص أو تعديل أو حظر سلوك الوكيل في وقت التشغيل. يمكنها تعديل المدخلات وتصفية المخرجات وفرض سياسات الأمان وإضافة التسجيل أو إعادة توجيه تدفق التنفيذ ديناميكيًا.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-adk',
  },
  {
    id: 'q33',
    type: 'mcq',
    question: {
      en: 'What role do guardrails play in ADK?',
      ar: 'ما الدور الذي تلعبه الحواجز الأمنية في ADK؟',
    },
    options: {
      en: [
        'They speed up model inference',
        'They validate and constrain agent inputs, outputs, and actions to ensure safe and policy-compliant behavior',
        'They manage billing and cost allocation',
        'They provide a user interface framework',
      ],
      ar: [
        'تسرّع استدلال النموذج',
        'تتحقق وتقيّد مدخلات ومخرجات وإجراءات الوكيل لضمان سلوك آمن ومتوافق مع السياسات',
        'تدير الفوترة وتوزيع التكاليف',
        'توفر إطار عمل لواجهة المستخدم',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Guardrails in ADK act as safety and compliance mechanisms that validate agent inputs, outputs, and actions. They can block harmful content, enforce organizational policies, prevent unauthorized tool use, sanitize sensitive data, and ensure the agent stays within its intended operational boundaries.',
      ar: 'تعمل الحواجز الأمنية في ADK كآليات سلامة وامتثال تتحقق من مدخلات ومخرجات وإجراءات الوكيل. يمكنها حظر المحتوى الضار وفرض سياسات المنظمة ومنع الاستخدام غير المصرح به للأدوات وتنقية البيانات الحساسة وضمان بقاء الوكيل ضمن حدوده التشغيلية المقصودة.',
    },
    difficulty: 'advanced',
    category: 'frameworks-adk',
  },
  {
    id: 'q34',
    type: 'scenario',
    question: {
      en: 'You are implementing session management in a Google ADK application where users can have long-running conversations over days. The agent must remember context from previous messages. Which ADK approach should you use?',
      ar: 'أنت تنفذ إدارة الجلسات في تطبيق Google ADK حيث يمكن للمستخدمين إجراء محادثات طويلة على مدار أيام. يجب أن يتذكر الوكيل السياق من الرسائل السابقة. ما نهج ADK الذي يجب استخدامه؟',
    },
    options: {
      en: [
        'Create a new session for every message and discard history',
        'Use ADK SessionService with persistent storage to maintain session state and conversation history across interactions',
        'Store everything in browser local storage',
        'Rely on the LLM\'s training data to remember past conversations',
      ],
      ar: [
        'إنشاء جلسة جديدة لكل رسالة وتجاهل التاريخ',
        'استخدام SessionService في ADK مع تخزين دائم للحفاظ على حالة الجلسة وسجل المحادثات عبر التفاعلات',
        'تخزين كل شيء في التخزين المحلي للمتصفح',
        'الاعتماد على بيانات تدريب نموذج اللغة لتذكر المحادثات السابقة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'ADK\'s SessionService with persistent storage (such as database-backed session stores) is the correct approach. It maintains conversation history, session state, and context across multiple interactions over time. This allows the agent to recall previous messages, user preferences, and ongoing task context even when conversations span days.',
      ar: 'SessionService في ADK مع التخزين الدائم (مثل مخازن الجلسات المدعومة بقاعدة بيانات) هو النهج الصحيح. يحافظ على سجل المحادثات وحالة الجلسة والسياق عبر تفاعلات متعددة بمرور الوقت. يتيح ذلك للوكيل استحضار الرسائل السابقة وتفضيلات المستخدم وسياق المهام الجارية حتى عندما تمتد المحادثات لأيام.',
    },
    difficulty: 'advanced',
    category: 'frameworks-adk',
  },
  // Frameworks - Bedrock (q35-q36)
  {
    id: 'q35',
    type: 'mcq',
    question: {
      en: 'What are Action Groups in Amazon Bedrock Agents?',
      ar: 'ما هي مجموعات الإجراءات في وكلاء Amazon Bedrock؟',
    },
    options: {
      en: [
        'Groups of users with admin permissions',
        'Defined sets of actions backed by Lambda functions or API schemas that an agent can invoke to perform tasks',
        'Collections of training datasets',
        'Categories for organizing cloud resources',
      ],
      ar: [
        'مجموعات مستخدمين بصلاحيات إدارية',
        'مجموعات إجراءات محددة مدعومة بدوال Lambda أو مخططات API يمكن للوكيل استدعاؤها لتنفيذ المهام',
        'مجموعات من بيانات التدريب',
        'فئات لتنظيم الموارد السحابية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Action Groups in Amazon Bedrock Agents are defined sets of actions that the agent can perform. Each action group is backed by an AWS Lambda function or an API schema that executes business logic. The agent analyzes the user\'s request, determines which action group and specific action to invoke, generates the required parameters, and calls the Lambda function to carry out the task.',
      ar: 'مجموعات الإجراءات في وكلاء Amazon Bedrock هي مجموعات محددة من الإجراءات التي يمكن للوكيل تنفيذها. كل مجموعة إجراءات مدعومة بدالة AWS Lambda أو مخطط API ينفذ منطق العمل. يحلل الوكيل طلب المستخدم، ويحدد مجموعة الإجراءات والإجراء المحدد للاستدعاء، ويولّد المعاملات المطلوبة، ويستدعي دالة Lambda لتنفيذ المهمة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-bedrock',
  },
  {
    id: 'q36',
    type: 'true-false',
    question: {
      en: 'Bedrock Knowledge Bases can only use Amazon S3 as a data source.',
      ar: 'يمكن لقواعد المعرفة في Bedrock استخدام Amazon S3 فقط كمصدر بيانات.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. While Amazon S3 is a commonly used data source for Bedrock Knowledge Bases, it supports multiple data source types including web crawlers, Confluence, SharePoint, Salesforce, and custom data sources. This flexibility allows organizations to connect their existing data repositories to Bedrock agents.',
      ar: 'خطأ. بينما يُعد Amazon S3 مصدر بيانات شائع الاستخدام لقواعد معرفة Bedrock، إلا أنه يدعم أنواعًا متعددة من مصادر البيانات بما في ذلك زاحف الويب و Confluence و SharePoint و Salesforce ومصادر بيانات مخصصة. تتيح هذه المرونة للمنظمات ربط مستودعات بياناتها الحالية بوكلاء Bedrock.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-bedrock',
  },
  // Industry Applications (q37-q38)
  {
    id: 'q37',
    type: 'scenario',
    question: {
      en: 'You are building a CSV agent to analyze sales data. The dataset contains 500,000 rows with columns for date, product, region, revenue, and quantity. A user asks: "What was the top-selling product by revenue in each region last quarter?" How should the agent approach this?',
      ar: 'أنت تبني وكيل CSV لتحليل بيانات المبيعات. تحتوي مجموعة البيانات على 500,000 صف بأعمدة للتاريخ والمنتج والمنطقة والإيرادات والكمية. يسأل المستخدم: "ما هو المنتج الأكثر مبيعًا من حيث الإيرادات في كل منطقة في الربع الأخير؟" كيف يجب أن يتعامل الوكيل مع هذا؟',
    },
    options: {
      en: [
        'Load all 500K rows into the LLM context and ask it to compute the answer',
        'Generate and execute code that filters by date, groups by region and product, sums revenue, and returns the top product per region',
        'Randomly sample 100 rows and guess the answer',
        'Tell the user the dataset is too large to analyze',
      ],
      ar: [
        'تحميل جميع الصفوف الـ 500 ألف في سياق نموذج اللغة وطلب حساب الإجابة',
        'توليد وتنفيذ كود يفلتر حسب التاريخ ويجمع حسب المنطقة والمنتج ويجمع الإيرادات ويعيد المنتج الأعلى لكل منطقة',
        'أخذ عينة عشوائية من 100 صف وتخمين الإجابة',
        'إخبار المستخدم أن مجموعة البيانات كبيرة جدًا للتحليل',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The correct approach is for the agent to generate executable code (e.g., using pandas or SQL) that programmatically filters the data for the last quarter, groups by region and product, aggregates revenue, and identifies the top product per region. This leverages the LLM\'s ability to write analytical code while using proper data tools for computation, rather than trying to process raw data in the context window.',
      ar: 'النهج الصحيح هو أن يولّد الوكيل كودًا قابلاً للتنفيذ (مثل pandas أو SQL) يقوم برمجيًا بتصفية البيانات للربع الأخير، ويجمع حسب المنطقة والمنتج، ويجمّع الإيرادات، ويحدد المنتج الأعلى لكل منطقة. يستفيد هذا من قدرة نموذج اللغة على كتابة كود تحليلي مع استخدام أدوات البيانات المناسبة للحسابات، بدلاً من محاولة معالجة البيانات الخام في نافذة السياق.',
    },
    difficulty: 'intermediate',
    category: 'industry-applications',
  },
  {
    id: 'q38',
    type: 'mcq',
    question: {
      en: 'What is the key challenge when building SQL database agents?',
      ar: 'ما هو التحدي الرئيسي عند بناء وكلاء قواعد بيانات SQL؟',
    },
    options: {
      en: [
        'SQL syntax is too difficult for LLMs to generate',
        'Ensuring the agent generates safe, correct queries while preventing SQL injection, unauthorized data access, and destructive operations',
        'Databases are too slow for real-time agent use',
        'LLMs cannot understand table relationships',
      ],
      ar: [
        'صياغة SQL صعبة جدًا على نماذج اللغة لتوليدها',
        'ضمان توليد الوكيل لاستعلامات آمنة وصحيحة مع منع حقن SQL والوصول غير المصرح به للبيانات والعمليات التدميرية',
        'قواعد البيانات بطيئة جدًا للاستخدام الفوري للوكيل',
        'نماذج اللغة لا يمكنها فهم علاقات الجداول',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The key challenge in building SQL database agents is security and correctness. The agent must generate syntactically correct and semantically accurate queries, but also guard against SQL injection attacks, prevent access to unauthorized tables or sensitive data, avoid destructive operations (DROP, DELETE, UPDATE without proper authorization), and handle edge cases in schema interpretation  - all while being useful and responsive to user queries.',
      ar: 'التحدي الرئيسي في بناء وكلاء قواعد بيانات SQL هو الأمان والصحة. يجب على الوكيل توليد استعلامات صحيحة نحويًا ودلاليًا، مع الحماية أيضًا من هجمات حقن SQL، ومنع الوصول إلى جداول غير مصرح بها أو بيانات حساسة، وتجنب العمليات التدميرية (DROP و DELETE و UPDATE بدون تصريح مناسب)، والتعامل مع الحالات الحدية في تفسير المخطط  - كل ذلك مع البقاء مفيدًا ومتجاوبًا مع استعلامات المستخدم.',
    },
    difficulty: 'advanced',
    category: 'industry-applications',
  },
  // ===== NEW QUESTIONS (q39-q118) =====
  // NLP Fundamentals (q39-q41)
  {
    id: 'q39',
    type: 'mcq',
    question: {
      en: 'What is tokenization in Natural Language Processing?',
      ar: 'ما هو الترميز في معالجة اللغات الطبيعية؟',
    },
    options: {
      en: [
        'Converting text into encrypted tokens for security',
        'Breaking text into smaller units such as words, subwords, or characters for model processing',
        'Assigning monetary value to text data',
        'Compressing text files for storage',
      ],
      ar: [
        'تحويل النص إلى رموز مشفرة للأمان',
        'تقسيم النص إلى وحدات أصغر مثل الكلمات أو الأجزاء الفرعية أو الأحرف لمعالجة النموذج',
        'تعيين قيمة نقدية لبيانات النص',
        'ضغط الملفات النصية للتخزين',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Tokenization is the process of breaking text into smaller units called tokens. Modern LLMs typically use subword tokenization (like BPE or SentencePiece) which balances vocabulary size with the ability to handle rare words by splitting them into known subword pieces.',
      ar: 'الترميز هو عملية تقسيم النص إلى وحدات أصغر تسمى رموز. تستخدم نماذج اللغة الكبيرة الحديثة عادةً ترميز الأجزاء الفرعية (مثل BPE أو SentencePiece) الذي يوازن بين حجم المفردات والقدرة على التعامل مع الكلمات النادرة بتقسيمها إلى أجزاء فرعية معروفة.',
    },
    difficulty: 'beginner',
    category: 'nlp-fundamentals',
  },
  {
    id: 'q40',
    type: 'true-false',
    question: {
      en: 'Named Entity Recognition (NER) is used to classify entire documents into categories.',
      ar: 'يُستخدم التعرف على الكيانات المسماة (NER) لتصنيف المستندات بأكملها إلى فئات.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. Named Entity Recognition (NER) identifies and classifies specific entities within text such as person names, organizations, locations, dates, and monetary values. Document-level classification is a separate task called text classification or document categorization.',
      ar: 'خطأ. يحدد التعرف على الكيانات المسماة (NER) ويصنف كيانات محددة داخل النص مثل أسماء الأشخاص والمنظمات والمواقع والتواريخ والقيم النقدية. تصنيف المستندات على مستوى المستند هو مهمة منفصلة تسمى تصنيف النصوص أو تصنيف المستندات.',
    },
    difficulty: 'beginner',
    category: 'nlp-fundamentals',
  },
  {
    id: 'q41',
    type: 'mcq',
    question: {
      en: 'What is the attention mechanism in transformer models?',
      ar: 'ما هي آلية الانتباه في نماذج المحول؟',
    },
    options: {
      en: [
        'A mechanism that limits the model to processing one word at a time',
        'A mechanism that allows the model to weigh the relevance of different parts of the input when generating each output token',
        'A user interface feature that highlights important text',
        'A memory management technique for reducing RAM usage',
      ],
      ar: [
        'آلية تقيّد النموذج بمعالجة كلمة واحدة في كل مرة',
        'آلية تسمح للنموذج بتقييم أهمية أجزاء مختلفة من المدخلات عند توليد كل رمز مخرج',
        'ميزة واجهة مستخدم تبرز النص المهم',
        'تقنية إدارة ذاكرة لتقليل استخدام الذاكرة العشوائية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The attention mechanism allows transformer models to dynamically focus on different parts of the input sequence when producing each output token. Self-attention computes relevance scores between all token pairs, enabling the model to capture long-range dependencies and contextual relationships regardless of distance in the text.',
      ar: 'تسمح آلية الانتباه لنماذج المحول بالتركيز ديناميكيًا على أجزاء مختلفة من تسلسل المدخلات عند إنتاج كل رمز مخرج. يحسب الانتباه الذاتي درجات الأهمية بين جميع أزواج الرموز، مما يمكّن النموذج من التقاط التبعيات بعيدة المدى والعلاقات السياقية بغض النظر عن المسافة في النص.',
    },
    difficulty: 'intermediate',
    category: 'nlp-fundamentals',
  },
  // Prompt Engineering (q42-q45)
  {
    id: 'q42',
    type: 'mcq',
    question: {
      en: 'What is few-shot prompting?',
      ar: 'ما هو التلقين بأمثلة قليلة؟',
    },
    options: {
      en: [
        'Training the model on a small dataset',
        'Providing a few examples of the desired input-output format in the prompt to guide the model\'s response',
        'Sending multiple API requests in quick succession',
        'Using a very short prompt with minimal instructions',
      ],
      ar: [
        'تدريب النموذج على مجموعة بيانات صغيرة',
        'تقديم أمثلة قليلة من تنسيق المدخلات والمخرجات المطلوب في الأمر لتوجيه استجابة النموذج',
        'إرسال طلبات API متعددة بسرعة متتالية',
        'استخدام أمر قصير جدًا مع تعليمات بسيطة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Few-shot prompting involves including a small number of examples (typically 2-5) in the prompt that demonstrate the desired task format and output style. This helps the model understand the pattern without any fine-tuning, significantly improving accuracy and consistency for structured tasks.',
      ar: 'يتضمن التلقين بأمثلة قليلة تضمين عدد صغير من الأمثلة (عادةً 2-5) في الأمر توضح تنسيق المهمة المطلوب ونمط المخرجات. يساعد ذلك النموذج على فهم النمط دون أي ضبط دقيق، مما يحسن الدقة والاتساق بشكل كبير للمهام المنظمة.',
    },
    difficulty: 'beginner',
    category: 'prompt-engineering',
  },
  {
    id: 'q43',
    type: 'mcq',
    question: {
      en: 'What is the role of a system prompt in LLM applications?',
      ar: 'ما هو دور أمر النظام في تطبيقات نماذج اللغة الكبيرة؟',
    },
    options: {
      en: [
        'To provide the operating system configuration',
        'To define the model\'s persona, behavior rules, and constraints before user interaction begins',
        'To debug system errors in the application',
        'To configure the hardware settings for model inference',
      ],
      ar: [
        'لتوفير تكوين نظام التشغيل',
        'لتحديد شخصية النموذج وقواعد السلوك والقيود قبل بدء تفاعل المستخدم',
        'لتصحيح أخطاء النظام في التطبيق',
        'لتكوين إعدادات الأجهزة لاستدلال النموذج',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The system prompt sets the foundational context for the LLM. It defines the model\'s role, personality, behavioral guidelines, output format preferences, safety rules, and any constraints. It is processed before user messages and shapes how the model responds throughout the entire conversation.',
      ar: 'يحدد أمر النظام السياق الأساسي لنموذج اللغة الكبير. يعرّف دور النموذج وشخصيته وإرشادات السلوك وتفضيلات تنسيق المخرجات وقواعد الأمان وأي قيود. تتم معالجته قبل رسائل المستخدم ويشكل طريقة استجابة النموذج طوال المحادثة بأكملها.',
    },
    difficulty: 'beginner',
    category: 'prompt-engineering',
  },
  {
    id: 'q44',
    type: 'mcq',
    question: {
      en: 'What is the "temperature" parameter in LLM inference?',
      ar: 'ما هو معامل "الحرارة" في استدلال نماذج اللغة الكبيرة؟',
    },
    options: {
      en: [
        'The physical temperature of the GPU during processing',
        'A parameter that controls randomness in token sampling, where lower values produce more deterministic outputs',
        'The speed at which the model processes tokens',
        'The maximum number of tokens the model can generate',
      ],
      ar: [
        'الحرارة الفيزيائية لوحدة معالجة الرسوميات أثناء المعالجة',
        'معامل يتحكم في العشوائية في اختيار الرموز، حيث تنتج القيم المنخفضة مخرجات أكثر حتمية',
        'السرعة التي يعالج بها النموذج الرموز',
        'الحد الأقصى لعدد الرموز التي يمكن للنموذج توليدها',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Temperature controls the randomness of the model\'s output distribution. A temperature of 0 makes the model always pick the most likely token (deterministic), while higher values (e.g., 0.8-1.0) increase diversity and creativity. For factual tasks, low temperature is preferred; for creative tasks, higher temperature allows more varied outputs.',
      ar: 'تتحكم الحرارة في عشوائية توزيع مخرجات النموذج. حرارة 0 تجعل النموذج يختار دائمًا الرمز الأكثر احتمالاً (حتمي)، بينما القيم الأعلى (مثل 0.8-1.0) تزيد التنوع والإبداع. للمهام الواقعية، يُفضل حرارة منخفضة؛ وللمهام الإبداعية، تسمح الحرارة الأعلى بمخرجات أكثر تنوعًا.',
    },
    difficulty: 'intermediate',
    category: 'prompt-engineering',
  },
  {
    id: 'q45',
    type: 'true-false',
    question: {
      en: 'Structured output formatting (like JSON mode) guarantees that LLM responses will always be valid JSON.',
      ar: 'يضمن تنسيق المخرجات المنظمة (مثل وضع JSON) أن تكون استجابات نماذج اللغة الكبيرة دائمًا JSON صالحة.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. When using structured output modes (like OpenAI\'s JSON mode or response_format with a schema), the API constrains the model\'s token generation to only produce valid JSON that matches the specified schema. This is different from simply asking the model to output JSON in the prompt, which can sometimes fail.',
      ar: 'صحيح. عند استخدام أوضاع المخرجات المنظمة (مثل وضع JSON في OpenAI أو response_format مع مخطط)، تقيّد واجهة البرمجة توليد رموز النموذج لإنتاج JSON صالح يطابق المخطط المحدد فقط. هذا يختلف عن مجرد طلب إخراج JSON من النموذج في الأمر، والذي قد يفشل أحيانًا.',
    },
    difficulty: 'intermediate',
    category: 'prompt-engineering',
  },
  // LLM Internals (q46-q49)
  {
    id: 'q46',
    type: 'mcq',
    question: {
      en: 'What is the context window of an LLM?',
      ar: 'ما هي نافذة السياق في نموذج اللغة الكبير؟',
    },
    options: {
      en: [
        'The physical display window showing model outputs',
        'The maximum number of tokens the model can process in a single input-output sequence',
        'The time window during which the model is available for inference',
        'The number of layers in the neural network',
      ],
      ar: [
        'نافذة العرض الفيزيائية التي تظهر مخرجات النموذج',
        'الحد الأقصى لعدد الرموز التي يمكن للنموذج معالجتها في تسلسل مدخلات-مخرجات واحد',
        'النافذة الزمنية التي يكون فيها النموذج متاحًا للاستدلال',
        'عدد الطبقات في الشبكة العصبية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The context window defines the maximum number of tokens (input + output combined) that an LLM can process in a single request. For example, a 128K context window can handle roughly 100,000 words. Exceeding this limit requires techniques like chunking, summarization, or RAG to manage information across multiple calls.',
      ar: 'تحدد نافذة السياق الحد الأقصى لعدد الرموز (المدخلات + المخرجات مجتمعة) التي يمكن لنموذج اللغة الكبير معالجتها في طلب واحد. على سبيل المثال، يمكن لنافذة سياق 128K التعامل مع حوالي 100,000 كلمة. يتطلب تجاوز هذا الحد تقنيات مثل التقسيم أو التلخيص أو RAG لإدارة المعلومات عبر استدعاءات متعددة.',
    },
    difficulty: 'beginner',
    category: 'llm-internals',
  },
  {
    id: 'q47',
    type: 'mcq',
    question: {
      en: 'What is model quantization?',
      ar: 'ما هو تكميم النموذج؟',
    },
    options: {
      en: [
        'Increasing the size of the model by adding more parameters',
        'Reducing the precision of model weights (e.g., from 32-bit to 4-bit) to decrease memory usage and speed up inference',
        'Splitting the model into smaller independent models',
        'Converting the model from one programming language to another',
      ],
      ar: [
        'زيادة حجم النموذج بإضافة المزيد من المعاملات',
        'تقليل دقة أوزان النموذج (مثلاً من 32 بت إلى 4 بت) لتقليل استخدام الذاكرة وتسريع الاستدلال',
        'تقسيم النموذج إلى نماذج مستقلة أصغر',
        'تحويل النموذج من لغة برمجة إلى أخرى',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Quantization reduces the numerical precision of model weights from higher bit representations (like FP32 or FP16) to lower ones (like INT8 or INT4). This dramatically reduces memory requirements and can speed up inference, making it possible to run large models on consumer hardware, with a small trade-off in output quality.',
      ar: 'يقلل التكميم الدقة العددية لأوزان النموذج من تمثيلات بت أعلى (مثل FP32 أو FP16) إلى أقل (مثل INT8 أو INT4). يقلل هذا بشكل كبير من متطلبات الذاكرة ويمكن أن يسرّع الاستدلال، مما يتيح تشغيل النماذج الكبيرة على أجهزة المستهلك، مع تنازل بسيط في جودة المخرجات.',
    },
    difficulty: 'advanced',
    category: 'llm-internals',
  },
  {
    id: 'q48',
    type: 'true-false',
    question: {
      en: 'Fine-tuning an LLM modifies the model\'s pre-trained weights to specialize it for a specific task or domain.',
      ar: 'يعدّل الضبط الدقيق لنموذج اللغة الكبير الأوزان المدربة مسبقًا للنموذج لتخصيصه لمهمة أو مجال معين.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Fine-tuning continues the training process on a domain-specific or task-specific dataset, updating the model\'s weights to improve performance on that particular use case. This is different from prompting (which does not change weights) and from RAG (which adds external knowledge at inference time).',
      ar: 'صحيح. يواصل الضبط الدقيق عملية التدريب على مجموعة بيانات خاصة بالمجال أو المهمة، مع تحديث أوزان النموذج لتحسين الأداء في حالة الاستخدام المحددة. هذا يختلف عن التلقين (الذي لا يغير الأوزان) وعن RAG (الذي يضيف معرفة خارجية في وقت الاستدلال).',
    },
    difficulty: 'intermediate',
    category: 'llm-internals',
  },
  {
    id: 'q49',
    type: 'mcq',
    question: {
      en: 'What is the difference between autoregressive and masked language models?',
      ar: 'ما الفرق بين نماذج اللغة الارتجاعية ونماذج اللغة المقنّعة؟',
    },
    options: {
      en: [
        'They are identical architectures with different names',
        'Autoregressive models predict the next token left-to-right, while masked models predict missing tokens using bidirectional context',
        'Masked models are always larger than autoregressive models',
        'Autoregressive models can only process images, not text',
      ],
      ar: [
        'هما معماريتان متطابقتان بأسماء مختلفة',
        'تتنبأ النماذج الارتجاعية بالرمز التالي من اليسار إلى اليمين، بينما تتنبأ النماذج المقنّعة بالرموز المفقودة باستخدام سياق ثنائي الاتجاه',
        'النماذج المقنّعة دائمًا أكبر من النماذج الارتجاعية',
        'النماذج الارتجاعية يمكنها معالجة الصور فقط وليس النص',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Autoregressive models (like GPT) generate text one token at a time from left to right, each prediction conditioned on all previous tokens. Masked language models (like BERT) are trained to predict randomly masked tokens using context from both directions. This makes autoregressive models ideal for generation and masked models better for understanding tasks like classification and NER.',
      ar: 'تولّد النماذج الارتجاعية (مثل GPT) النص رمزًا واحدًا في كل مرة من اليسار إلى اليمين، حيث يعتمد كل تنبؤ على جميع الرموز السابقة. تُدرّب نماذج اللغة المقنّعة (مثل BERT) للتنبؤ بالرموز المقنّعة عشوائيًا باستخدام السياق من كلا الاتجاهين. هذا يجعل النماذج الارتجاعية مثالية للتوليد والنماذج المقنّعة أفضل لمهام الفهم مثل التصنيف والتعرف على الكيانات.',
    },
    difficulty: 'advanced',
    category: 'llm-internals',
  },
  // Agent Architectures (q50-q53)
  {
    id: 'q50',
    type: 'mcq',
    question: {
      en: 'What is a supervisor agent architecture?',
      ar: 'ما هي معمارية الوكيل المشرف؟',
    },
    options: {
      en: [
        'An architecture where all agents have equal authority with no coordination',
        'An architecture where a central agent delegates tasks to specialized sub-agents and aggregates their results',
        'An architecture that monitors server CPU usage',
        'An architecture where agents compete against each other',
      ],
      ar: [
        'معمارية يكون فيها لجميع الوكلاء سلطة متساوية بدون تنسيق',
        'معمارية يقوم فيها وكيل مركزي بتفويض المهام إلى وكلاء فرعيين متخصصين ويجمّع نتائجهم',
        'معمارية تراقب استخدام المعالج في الخادم',
        'معمارية يتنافس فيها الوكلاء ضد بعضهم البعض',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A supervisor agent architecture features a central orchestrator agent that receives tasks, breaks them down, delegates sub-tasks to specialized worker agents, monitors progress, and combines results into a final output. This pattern is effective for complex workflows requiring different expertise areas.',
      ar: 'تتميز معمارية الوكيل المشرف بوكيل منسق مركزي يستقبل المهام ويقسمها ويفوّض المهام الفرعية إلى وكلاء عاملين متخصصين ويراقب التقدم ويجمع النتائج في مخرج نهائي. هذا النمط فعال لسير العمل المعقد الذي يتطلب مجالات خبرة مختلفة.',
    },
    difficulty: 'intermediate',
    category: 'agent-architectures',
  },
  {
    id: 'q51',
    type: 'mcq',
    question: {
      en: 'What is the key advantage of a swarm architecture over a supervisor architecture?',
      ar: 'ما هي الميزة الرئيسية لمعمارية السرب مقارنة بمعمارية المشرف؟',
    },
    options: {
      en: [
        'Swarm architecture is always faster',
        'Agents can hand off tasks directly to each other without a central bottleneck, enabling more flexible and resilient workflows',
        'Swarm architecture uses fewer resources',
        'Swarm architecture does not require any agents',
      ],
      ar: [
        'معمارية السرب دائمًا أسرع',
        'يمكن للوكلاء تسليم المهام مباشرة لبعضهم البعض بدون عنق زجاجة مركزي، مما يمكّن سير عمل أكثر مرونة وصمودًا',
        'معمارية السرب تستخدم موارد أقل',
        'معمارية السرب لا تتطلب أي وكلاء',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'In a swarm architecture, agents communicate and hand off tasks directly to each other through peer-to-peer interactions, rather than routing everything through a central supervisor. This eliminates the single point of failure, reduces bottlenecks, and allows for more dynamic and emergent collaborative behaviors.',
      ar: 'في معمارية السرب، يتواصل الوكلاء ويسلّمون المهام مباشرة لبعضهم البعض من خلال تفاعلات نظير لنظير، بدلاً من توجيه كل شيء عبر مشرف مركزي. هذا يلغي نقطة الفشل الوحيدة ويقلل عنق الزجاجة ويسمح بسلوكيات تعاونية أكثر ديناميكية وناشئة.',
    },
    difficulty: 'intermediate',
    category: 'agent-architectures',
  },
  {
    id: 'q52',
    type: 'true-false',
    question: {
      en: 'In a hierarchical multi-agent system, sub-agents can themselves act as supervisors for lower-level agents.',
      ar: 'في نظام متعدد الوكلاء الهرمي، يمكن للوكلاء الفرعيين أنفسهم العمل كمشرفين على وكلاء من مستوى أدنى.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Hierarchical multi-agent systems support nested delegation, where a supervisor delegates to sub-agents that can themselves supervise their own set of specialized agents. This creates a tree-like structure ideal for very complex tasks requiring multiple levels of decomposition and specialization.',
      ar: 'صحيح. تدعم أنظمة الوكلاء المتعددة الهرمية التفويض المتداخل، حيث يفوّض المشرف إلى وكلاء فرعيين يمكنهم بدورهم الإشراف على مجموعتهم الخاصة من الوكلاء المتخصصين. ينشئ هذا هيكلاً شبيهاً بالشجرة مثاليًا للمهام المعقدة جدًا التي تتطلب مستويات متعددة من التحليل والتخصص.',
    },
    difficulty: 'advanced',
    category: 'agent-architectures',
  },
  {
    id: 'q53',
    type: 'mcq',
    question: {
      en: 'What is a "tool-use" agent pattern?',
      ar: 'ما هو نمط الوكيل "مستخدم الأدوات"؟',
    },
    options: {
      en: [
        'An agent that builds physical tools',
        'An agent that augments its capabilities by calling external APIs, databases, code interpreters, or other services as tools',
        'An agent that only uses pre-built templates',
        'An agent designed exclusively for manufacturing automation',
      ],
      ar: [
        'وكيل يبني أدوات مادية',
        'وكيل يعزز قدراته من خلال استدعاء واجهات برمجة تطبيقات خارجية وقواعد بيانات ومفسرات أكواد أو خدمات أخرى كأدوات',
        'وكيل يستخدم فقط القوالب المعدة مسبقًا',
        'وكيل مصمم حصريًا لأتمتة التصنيع',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The tool-use agent pattern enables an LLM to extend its capabilities beyond text generation by invoking external tools. The agent decides when a tool is needed, selects the appropriate one, formulates the correct parameters, executes the call, and incorporates the result into its reasoning. This is fundamental to making agents that can interact with the real world.',
      ar: 'يمكّن نمط وكيل استخدام الأدوات نموذج اللغة الكبير من توسيع قدراته إلى ما هو أبعد من توليد النص من خلال استدعاء أدوات خارجية. يقرر الوكيل متى تكون الأداة مطلوبة ويختار المناسبة ويصيغ المعاملات الصحيحة وينفذ الاستدعاء ويدمج النتيجة في استدلاله. هذا أساسي لصنع وكلاء يمكنهم التفاعل مع العالم الحقيقي.',
    },
    difficulty: 'beginner',
    category: 'agent-architectures',
  },
  // Advanced RAG (q54-q57)
  {
    id: 'q54',
    type: 'mcq',
    question: {
      en: 'What is hybrid search in the context of RAG systems?',
      ar: 'ما هو البحث الهجين في سياق أنظمة RAG؟',
    },
    options: {
      en: [
        'Using two different LLMs for the same query',
        'Combining dense vector similarity search with sparse keyword-based search (like BM25) to improve retrieval quality',
        'Searching across both cloud and on-premise databases',
        'Running search queries on both CPU and GPU simultaneously',
      ],
      ar: [
        'استخدام نموذجي لغة كبيرين مختلفين لنفس الاستعلام',
        'الجمع بين بحث تشابه المتجهات الكثيفة والبحث المبني على الكلمات المفتاحية (مثل BM25) لتحسين جودة الاسترجاع',
        'البحث عبر قواعد بيانات سحابية ومحلية معًا',
        'تشغيل استعلامات البحث على المعالج ووحدة الرسوميات في وقت واحد',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Hybrid search combines the strengths of dense vector search (good at semantic similarity) with sparse keyword search like BM25 (good at exact term matching). Results are merged using techniques like Reciprocal Rank Fusion (RRF), providing more robust retrieval that handles both semantic and lexical queries effectively.',
      ar: 'يجمع البحث الهجين بين نقاط قوة بحث المتجهات الكثيفة (الجيد في التشابه الدلالي) مع البحث بالكلمات المفتاحية مثل BM25 (الجيد في المطابقة الدقيقة للمصطلحات). تُدمج النتائج باستخدام تقنيات مثل دمج الترتيب المتبادل (RRF)، مما يوفر استرجاعًا أكثر قوة يتعامل مع الاستعلامات الدلالية والمعجمية بفعالية.',
    },
    difficulty: 'intermediate',
    category: 'advanced-rag',
  },
  {
    id: 'q55',
    type: 'mcq',
    question: {
      en: 'What is query rewriting in advanced RAG pipelines?',
      ar: 'ما هي إعادة كتابة الاستعلام في خطوط أنابيب RAG المتقدمة؟',
    },
    options: {
      en: [
        'Correcting spelling errors in user input',
        'Using an LLM to reformulate the user\'s query into one or more optimized search queries that improve retrieval results',
        'Translating queries to a different language',
        'Caching previous queries for faster lookup',
      ],
      ar: [
        'تصحيح الأخطاء الإملائية في مدخلات المستخدم',
        'استخدام نموذج لغة كبير لإعادة صياغة استعلام المستخدم إلى استعلام بحث واحد أو أكثر محسّنة لتحسين نتائج الاسترجاع',
        'ترجمة الاستعلامات إلى لغة مختلفة',
        'تخزين الاستعلامات السابقة مؤقتًا للبحث الأسرع',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Query rewriting uses an LLM to transform the user\'s original question into better search queries. Techniques include generating multiple query variations (multi-query), decomposing complex questions into sub-queries, and adding context to vague queries. This bridges the gap between how users naturally ask questions and what retrieves the best documents.',
      ar: 'تستخدم إعادة كتابة الاستعلام نموذج لغة كبير لتحويل سؤال المستخدم الأصلي إلى استعلامات بحث أفضل. تشمل التقنيات توليد تنويعات متعددة للاستعلام (استعلام متعدد)، وتحليل الأسئلة المعقدة إلى استعلامات فرعية، وإضافة سياق للاستعلامات الغامضة. يسد هذا الفجوة بين كيفية طرح المستخدمين للأسئلة بشكل طبيعي وما يسترجع أفضل المستندات.',
    },
    difficulty: 'intermediate',
    category: 'advanced-rag',
  },
  {
    id: 'q56',
    type: 'true-false',
    question: {
      en: 'Chunking strategy has no significant impact on RAG retrieval quality.',
      ar: 'لا يكون لاستراتيجية التقسيم تأثير كبير على جودة استرجاع RAG.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'False. Chunking strategy significantly affects RAG quality. Chunks that are too small lose context, while chunks that are too large dilute relevance. Advanced strategies include semantic chunking (splitting at topic boundaries), recursive splitting, and overlapping chunks. The right strategy depends on document type, query patterns, and the embedding model used.',
      ar: 'خطأ. تؤثر استراتيجية التقسيم بشكل كبير على جودة RAG. الأجزاء الصغيرة جدًا تفقد السياق، بينما الأجزاء الكبيرة جدًا تخفف الصلة. تشمل الاستراتيجيات المتقدمة التقسيم الدلالي (التقسيم عند حدود الموضوعات)، والتقسيم التكراري، والأجزاء المتداخلة. تعتمد الاستراتيجية الصحيحة على نوع المستند وأنماط الاستعلام ونموذج التضمين المستخدم.',
    },
    difficulty: 'intermediate',
    category: 'advanced-rag',
  },
  {
    id: 'q57',
    type: 'mcq',
    question: {
      en: 'What is re-ranking in a RAG pipeline?',
      ar: 'ما هي إعادة الترتيب في خط أنابيب RAG؟',
    },
    options: {
      en: [
        'Sorting documents alphabetically',
        'Using a cross-encoder model to re-score and reorder initially retrieved documents by their relevance to the query',
        'Randomly shuffling search results',
        'Removing duplicate documents from the results',
      ],
      ar: [
        'فرز المستندات أبجديًا',
        'استخدام نموذج تشفير متقاطع لإعادة تسجيل وإعادة ترتيب المستندات المسترجعة مبدئيًا حسب صلتها بالاستعلام',
        'خلط نتائج البحث عشوائيًا',
        'إزالة المستندات المكررة من النتائج',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Re-ranking is a second-stage refinement step that uses a cross-encoder model to score the relevance of each retrieved document against the query more accurately. Unlike bi-encoders used in initial retrieval, cross-encoders process the query and document together, capturing deeper interactions. This improves precision by pushing the most relevant documents to the top.',
      ar: 'إعادة الترتيب هي خطوة تنقيح في المرحلة الثانية تستخدم نموذج تشفير متقاطع لتسجيل صلة كل مستند مسترجع بالاستعلام بدقة أكبر. على عكس المشفرات الثنائية المستخدمة في الاسترجاع الأولي، تعالج المشفرات المتقاطعة الاستعلام والمستند معًا، مما يلتقط تفاعلات أعمق. يحسّن هذا الدقة بدفع المستندات الأكثر صلة إلى الأعلى.',
    },
    difficulty: 'advanced',
    category: 'advanced-rag',
  },
  // Reinforcement Learning (q58-q60)
  {
    id: 'q58',
    type: 'mcq',
    question: {
      en: 'What is RLHF (Reinforcement Learning from Human Feedback)?',
      ar: 'ما هو التعلم المعزز من الملاحظات البشرية (RLHF)؟',
    },
    options: {
      en: [
        'Training a model from scratch using only human-written text',
        'A technique that uses human preference judgments to train a reward model, which then guides the LLM to produce more helpful and safe outputs',
        'A method for humans to directly edit model weights',
        'An algorithm for reinforcing hardware connections in neural chips',
      ],
      ar: [
        'تدريب نموذج من الصفر باستخدام نص مكتوب بشريًا فقط',
        'تقنية تستخدم أحكام التفضيل البشري لتدريب نموذج مكافأة، والذي يوجه بعد ذلك نموذج اللغة لإنتاج مخرجات أكثر فائدة وأمانًا',
        'طريقة للبشر لتحرير أوزان النموذج مباشرة',
        'خوارزمية لتعزيز اتصالات الأجهزة في الرقائق العصبية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'RLHF fine-tunes an LLM using human preferences. First, human annotators rank model outputs by quality. These rankings train a reward model that predicts human preferences. Finally, the LLM is optimized using reinforcement learning (typically PPO) to maximize the reward model\'s score, aligning the model with human values and preferences.',
      ar: 'يضبط RLHF نموذج اللغة الكبير باستخدام التفضيلات البشرية. أولاً، يرتب المعلقون البشريون مخرجات النموذج حسب الجودة. تدرّب هذه التصنيفات نموذج مكافأة يتنبأ بالتفضيلات البشرية. أخيرًا، يُحسّن نموذج اللغة باستخدام التعلم المعزز (عادةً PPO) لتعظيم درجة نموذج المكافأة، مما يوائم النموذج مع القيم والتفضيلات البشرية.',
    },
    difficulty: 'advanced',
    category: 'reinforcement-learning',
  },
  {
    id: 'q59',
    type: 'true-false',
    question: {
      en: 'DPO (Direct Preference Optimization) eliminates the need for a separate reward model compared to RLHF.',
      ar: 'يلغي تحسين التفضيل المباشر (DPO) الحاجة إلى نموذج مكافأة منفصل مقارنة بـ RLHF.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. DPO simplifies the RLHF pipeline by directly optimizing the language model using pairs of preferred and rejected outputs, without needing to train a separate reward model. This makes the alignment process simpler and more stable, while achieving comparable results to traditional RLHF with PPO.',
      ar: 'صحيح. يبسّط DPO خط أنابيب RLHF من خلال تحسين نموذج اللغة مباشرة باستخدام أزواج من المخرجات المفضلة والمرفوضة، دون الحاجة لتدريب نموذج مكافأة منفصل. يجعل هذا عملية المواءمة أبسط وأكثر استقرارًا، مع تحقيق نتائج مماثلة لـ RLHF التقليدي مع PPO.',
    },
    difficulty: 'advanced',
    category: 'reinforcement-learning',
  },
  {
    id: 'q60',
    type: 'mcq',
    question: {
      en: 'What is the reward model\'s role in reinforcement learning for LLMs?',
      ar: 'ما هو دور نموذج المكافأة في التعلم المعزز لنماذج اللغة الكبيرة؟',
    },
    options: {
      en: [
        'To generate the final output text',
        'To assign a numerical score to model outputs indicating how well they align with desired behavior',
        'To provide the training data for pre-training',
        'To manage the GPU memory allocation',
      ],
      ar: [
        'لتوليد النص النهائي',
        'لتعيين درجة رقمية لمخرجات النموذج تشير إلى مدى توافقها مع السلوك المطلوب',
        'لتوفير بيانات التدريب للتدريب المسبق',
        'لإدارة تخصيص ذاكرة وحدة الرسوميات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The reward model acts as a learned proxy for human judgment. It takes a prompt and a model response as input and outputs a scalar score indicating quality. During RL fine-tuning, this score serves as the reward signal that guides the LLM to produce outputs that humans would prefer, covering aspects like helpfulness, harmlessness, and honesty.',
      ar: 'يعمل نموذج المكافأة كوكيل متعلّم للحكم البشري. يأخذ أمرًا واستجابة نموذج كمدخلات ويخرج درجة عددية تشير إلى الجودة. أثناء الضبط الدقيق بالتعلم المعزز، تعمل هذه الدرجة كإشارة مكافأة توجه نموذج اللغة لإنتاج مخرجات يفضلها البشر، تغطي جوانب مثل الفائدة وعدم الضرر والصدق.',
    },
    difficulty: 'advanced',
    category: 'reinforcement-learning',
  },
  // Knowledge Representation (q61-q63)
  {
    id: 'q61',
    type: 'mcq',
    question: {
      en: 'What is a knowledge graph?',
      ar: 'ما هو الرسم البياني المعرفي؟',
    },
    options: {
      en: [
        'A line chart showing knowledge test scores',
        'A structured representation of entities and their relationships as nodes and edges, enabling reasoning over connected information',
        'A file system directory structure',
        'A graph of database query performance over time',
      ],
      ar: [
        'مخطط خطي يظهر درجات اختبار المعرفة',
        'تمثيل منظم للكيانات وعلاقاتها كعقد وحواف، مما يمكّن الاستدلال على المعلومات المترابطة',
        'هيكل دليل نظام ملفات',
        'رسم بياني لأداء استعلامات قاعدة البيانات عبر الزمن',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A knowledge graph represents information as a network of entities (nodes) connected by typed relationships (edges). For example, "Albert Einstein" --[born_in]--> "Ulm". This structure enables complex queries, multi-hop reasoning, and integration with LLMs for fact-grounded generation and reduced hallucination.',
      ar: 'يمثل الرسم البياني المعرفي المعلومات كشبكة من الكيانات (عقد) مرتبطة بعلاقات مصنّفة (حواف). على سبيل المثال، "ألبرت أينشتاين" --[وُلد_في]--> "أولم". يمكّن هذا الهيكل الاستعلامات المعقدة والاستدلال متعدد القفزات والتكامل مع نماذج اللغة للتوليد المبني على الحقائق وتقليل الهلوسة.',
    },
    difficulty: 'intermediate',
    category: 'knowledge-representation',
  },
  {
    id: 'q62',
    type: 'true-false',
    question: {
      en: 'Ontologies in AI define formal vocabularies and rules for representing knowledge within a specific domain.',
      ar: 'تحدد الأنطولوجيا في الذكاء الاصطناعي مفردات وقواعد رسمية لتمثيل المعرفة ضمن مجال محدد.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Ontologies provide a formal, shared vocabulary for a domain, defining concepts, their properties, and the relationships between them. They enable consistent knowledge representation, automated reasoning, and interoperability between systems. Examples include medical ontologies like SNOMED-CT and general ones like Schema.org.',
      ar: 'صحيح. توفر الأنطولوجيا مفردات رسمية مشتركة لمجال ما، تعرّف المفاهيم وخصائصها والعلاقات بينها. تمكّن التمثيل المتسق للمعرفة والاستدلال الآلي وقابلية التشغيل البيني بين الأنظمة. تشمل الأمثلة الأنطولوجيا الطبية مثل SNOMED-CT والعامة مثل Schema.org.',
    },
    difficulty: 'intermediate',
    category: 'knowledge-representation',
  },
  {
    id: 'q63',
    type: 'mcq',
    question: {
      en: 'How can knowledge graphs enhance RAG systems?',
      ar: 'كيف يمكن للرسوم البيانية المعرفية تعزيز أنظمة RAG؟',
    },
    options: {
      en: [
        'By replacing vector databases entirely',
        'By providing structured relationship context that helps the LLM make multi-hop inferences and produce more factually accurate answers',
        'By eliminating the need for an LLM in the pipeline',
        'By reducing the cost of embedding models',
      ],
      ar: [
        'باستبدال قواعد البيانات المتجهة بالكامل',
        'بتوفير سياق العلاقات المنظم الذي يساعد نموذج اللغة على إجراء استدلالات متعددة القفزات وإنتاج إجابات أكثر دقة واقعية',
        'بإلغاء الحاجة لنموذج لغة كبير في خط الأنابيب',
        'بتقليل تكلفة نماذج التضمين',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Knowledge graphs augment RAG by providing structured, relational context alongside retrieved text chunks. When a question requires connecting multiple facts (multi-hop reasoning), the graph traversal can surface related entities and relationships that pure vector search might miss. This leads to more factually grounded and comprehensive answers.',
      ar: 'تعزز الرسوم البيانية المعرفية RAG من خلال توفير سياق منظم وعلائقي إلى جانب أجزاء النص المسترجعة. عندما يتطلب السؤال ربط حقائق متعددة (الاستدلال متعدد القفزات)، يمكن لاجتياز الرسم البياني إظهار الكيانات والعلاقات ذات الصلة التي قد يفوتها البحث بالمتجهات فقط. يؤدي ذلك إلى إجابات أكثر ارتباطًا بالحقائق وشمولية.',
    },
    difficulty: 'advanced',
    category: 'knowledge-representation',
  },
  // Frameworks - CrewAI (q64-q66)
  {
    id: 'q64',
    type: 'mcq',
    question: {
      en: 'What are the core building blocks of a CrewAI application?',
      ar: 'ما هي اللبنات الأساسية لتطبيق CrewAI؟',
    },
    options: {
      en: [
        'Servers, containers, and load balancers',
        'Agents (with roles and goals), Tasks (with descriptions and expected outputs), and Crews (orchestrating agent collaboration)',
        'Models, datasets, and training loops',
        'Routers, controllers, and views',
      ],
      ar: [
        'خوادم وحاويات وموازنات تحميل',
        'وكلاء (بأدوار وأهداف)، ومهام (بأوصاف ومخرجات متوقعة)، وطواقم (تنسق تعاون الوكلاء)',
        'نماذج ومجموعات بيانات وحلقات تدريب',
        'موجّهات ومتحكمات وعروض',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'CrewAI is built around three core concepts: Agents have defined roles, goals, and backstories that shape their behavior. Tasks specify what needs to be done with descriptions and expected outputs. Crews bring agents together, defining the process (sequential or hierarchical) by which agents collaborate on tasks.',
      ar: 'بُني CrewAI حول ثلاثة مفاهيم أساسية: الوكلاء لديهم أدوار وأهداف وخلفيات محددة تشكل سلوكهم. المهام تحدد ما يجب القيام به مع الأوصاف والمخرجات المتوقعة. الطواقم تجمع الوكلاء معًا وتحدد العملية (تتابعية أو هرمية) التي يتعاون بها الوكلاء في المهام.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-crewai',
  },
  {
    id: 'q65',
    type: 'true-false',
    question: {
      en: 'In CrewAI, a sequential process means each task must be completed before the next one starts.',
      ar: 'في CrewAI، تعني العملية التتابعية أنه يجب إكمال كل مهمة قبل بدء المهمة التالية.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. In CrewAI\'s sequential process, tasks are executed one after another in the defined order. Each task\'s output becomes available as context for subsequent tasks. This is useful when tasks have dependencies, such as research before writing, or data collection before analysis.',
      ar: 'صحيح. في العملية التتابعية لـ CrewAI، تُنفذ المهام واحدة تلو الأخرى بالترتيب المحدد. تصبح مخرجات كل مهمة متاحة كسياق للمهام اللاحقة. هذا مفيد عندما يكون للمهام تبعيات، مثل البحث قبل الكتابة، أو جمع البيانات قبل التحليل.',
    },
    difficulty: 'beginner',
    category: 'frameworks-crewai',
  },
  {
    id: 'q66',
    type: 'mcq',
    question: {
      en: 'How does CrewAI handle tool sharing among agents?',
      ar: 'كيف يتعامل CrewAI مع مشاركة الأدوات بين الوكلاء؟',
    },
    options: {
      en: [
        'All agents must use the same tools',
        'Tools can be assigned to individual agents or to specific tasks, giving fine-grained control over which agent can use which tool',
        'Tools are randomly assigned at runtime',
        'CrewAI does not support tools',
      ],
      ar: [
        'يجب على جميع الوكلاء استخدام نفس الأدوات',
        'يمكن تعيين الأدوات لوكلاء فرديين أو لمهام محددة، مما يمنح تحكمًا دقيقًا في أي وكيل يمكنه استخدام أي أداة',
        'تُعيّن الأدوات عشوائيًا في وقت التشغيل',
        'CrewAI لا يدعم الأدوات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'CrewAI provides flexible tool assignment. Tools can be attached directly to an agent (available for all their tasks) or to specific tasks (only available when that task executes). This enables principle of least privilege, ensuring agents only have access to the tools they need for their specific responsibilities.',
      ar: 'يوفر CrewAI تعيين أدوات مرن. يمكن إرفاق الأدوات مباشرة بوكيل (متاحة لجميع مهامه) أو بمهام محددة (متاحة فقط عند تنفيذ تلك المهمة). يمكّن ذلك مبدأ الحد الأدنى من الامتيازات، مما يضمن وصول الوكلاء فقط إلى الأدوات التي يحتاجونها لمسؤولياتهم المحددة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-crewai',
  },
  // Frameworks - LlamaIndex (q67-q69)
  {
    id: 'q67',
    type: 'mcq',
    question: {
      en: 'What is LlamaIndex primarily designed for?',
      ar: 'ما الغرض الأساسي الذي صُمم من أجله LlamaIndex؟',
    },
    options: {
      en: [
        'Training large language models from scratch',
        'Connecting LLMs with external data sources through indexing, retrieval, and query interfaces',
        'Managing cloud infrastructure',
        'Building mobile user interfaces',
      ],
      ar: [
        'تدريب نماذج اللغة الكبيرة من الصفر',
        'ربط نماذج اللغة الكبيرة بمصادر البيانات الخارجية من خلال الفهرسة والاسترجاع وواجهات الاستعلام',
        'إدارة البنية التحتية السحابية',
        'بناء واجهات مستخدم للهاتف المحمول',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'LlamaIndex is a data framework for LLM applications that specializes in ingesting, indexing, and querying data from diverse sources. It provides abstractions for document loaders, text splitters, vector stores, retrievers, and query engines, making it straightforward to build RAG pipelines and data-augmented LLM applications.',
      ar: 'LlamaIndex هو إطار بيانات لتطبيقات نماذج اللغة الكبيرة متخصص في استيعاب وفهرسة والاستعلام عن البيانات من مصادر متنوعة. يوفر تجريدات لمحمّلات المستندات ومقسّمات النصوص ومخازن المتجهات والمسترجعات ومحركات الاستعلام، مما يجعل بناء خطوط أنابيب RAG وتطبيقات نماذج اللغة المعززة بالبيانات أمرًا مباشرًا.',
    },
    difficulty: 'beginner',
    category: 'frameworks-llamaindex',
  },
  {
    id: 'q68',
    type: 'mcq',
    question: {
      en: 'What is a VectorStoreIndex in LlamaIndex?',
      ar: 'ما هو VectorStoreIndex في LlamaIndex؟',
    },
    options: {
      en: [
        'A SQL database index for faster queries',
        'An index that converts documents into vector embeddings and stores them for similarity-based retrieval',
        'A file system index for locating documents on disk',
        'A spreadsheet-based data organizer',
      ],
      ar: [
        'فهرس قاعدة بيانات SQL لاستعلامات أسرع',
        'فهرس يحوّل المستندات إلى تضمينات متجهية ويخزنها للاسترجاع المبني على التشابه',
        'فهرس نظام ملفات لتحديد مواقع المستندات على القرص',
        'منظم بيانات مبني على جداول البيانات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'VectorStoreIndex is a core LlamaIndex component that takes documents, splits them into chunks, generates vector embeddings for each chunk, and stores them in a vector store. At query time, the user\'s query is also embedded, and the most similar document chunks are retrieved using vector similarity search to provide context for the LLM.',
      ar: 'VectorStoreIndex هو مكون أساسي في LlamaIndex يأخذ المستندات ويقسمها إلى أجزاء ويولّد تضمينات متجهية لكل جزء ويخزنها في مخزن متجهات. في وقت الاستعلام، يُضمّن استعلام المستخدم أيضًا، وتُسترجع أجزاء المستندات الأكثر تشابهًا باستخدام بحث تشابه المتجهات لتوفير سياق لنموذج اللغة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-llamaindex',
  },
  {
    id: 'q69',
    type: 'true-false',
    question: {
      en: 'LlamaIndex supports building agents that can use query engines as tools.',
      ar: 'يدعم LlamaIndex بناء وكلاء يمكنهم استخدام محركات الاستعلام كأدوات.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. LlamaIndex allows developers to wrap query engines, retrievers, and other components as tools that an agent can invoke. This enables building sophisticated agentic RAG systems where the agent can decide which data sources to query, combine results from multiple indexes, and reason over retrieved information.',
      ar: 'صحيح. يسمح LlamaIndex للمطورين بتغليف محركات الاستعلام والمسترجعات والمكونات الأخرى كأدوات يمكن للوكيل استدعاؤها. يمكّن ذلك بناء أنظمة RAG وكيلية متطورة حيث يمكن للوكيل تقرير مصادر البيانات التي يستعلم عنها ودمج النتائج من فهارس متعددة والاستدلال على المعلومات المسترجعة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-llamaindex',
  },
  // Frameworks - Semantic Kernel (q70-q72)
  {
    id: 'q70',
    type: 'mcq',
    question: {
      en: 'What is a "plugin" in Semantic Kernel?',
      ar: 'ما هو "المكوّن الإضافي" في Semantic Kernel؟',
    },
    options: {
      en: [
        'A hardware extension for GPU acceleration',
        'A collection of functions (native code or prompt-based) that can be registered with the kernel and invoked by the AI',
        'A browser extension for debugging LLM calls',
        'A logging framework for monitoring API requests',
      ],
      ar: [
        'امتداد أجهزة لتسريع وحدة الرسوميات',
        'مجموعة من الدوال (كود أصلي أو مبنية على الأوامر) يمكن تسجيلها مع النواة واستدعاؤها بواسطة الذكاء الاصطناعي',
        'امتداد متصفح لتصحيح استدعاءات نماذج اللغة',
        'إطار تسجيل لمراقبة طلبات واجهة البرمجة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'In Semantic Kernel, a plugin is a group of related functions that extend the AI\'s capabilities. Plugins can contain native functions (written in C#, Python, or Java) or semantic functions (defined by prompts). They are registered with the Kernel and can be automatically selected and invoked by the AI through function calling.',
      ar: 'في Semantic Kernel، المكوّن الإضافي هو مجموعة من الدوال المرتبطة التي توسع قدرات الذكاء الاصطناعي. يمكن أن تحتوي المكوّنات الإضافية على دوال أصلية (مكتوبة بـ C# أو Python أو Java) أو دوال دلالية (محددة بالأوامر). يتم تسجيلها مع النواة ويمكن اختيارها واستدعاؤها تلقائيًا بواسطة الذكاء الاصطناعي من خلال استدعاء الدوال.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-semantic-kernel',
  },
  {
    id: 'q71',
    type: 'mcq',
    question: {
      en: 'What is the Kernel in Microsoft Semantic Kernel?',
      ar: 'ما هي النواة في Microsoft Semantic Kernel؟',
    },
    options: {
      en: [
        'The operating system kernel that manages processes',
        'The central orchestrator that manages AI services, plugins, memory, and the execution pipeline',
        'A lightweight database engine',
        'A mathematical computation library',
      ],
      ar: [
        'نواة نظام التشغيل التي تدير العمليات',
        'المنسق المركزي الذي يدير خدمات الذكاء الاصطناعي والمكوّنات الإضافية والذاكرة وخط تنفيذ الأنابيب',
        'محرك قاعدة بيانات خفيف',
        'مكتبة حسابات رياضية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The Kernel is the central component of Semantic Kernel that wires everything together. It manages connections to AI services (OpenAI, Azure, etc.), registers plugins and their functions, handles memory and state, and orchestrates the execution of AI requests through configurable filters and middleware.',
      ar: 'النواة هي المكون المركزي في Semantic Kernel الذي يربط كل شيء معًا. تدير الاتصالات بخدمات الذكاء الاصطناعي (OpenAI و Azure وغيرها)، وتسجل المكوّنات الإضافية ودوالها، وتتعامل مع الذاكرة والحالة، وتنسق تنفيذ طلبات الذكاء الاصطناعي من خلال مرشحات وبرمجيات وسيطة قابلة للتكوين.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-semantic-kernel',
  },
  {
    id: 'q72',
    type: 'true-false',
    question: {
      en: 'Semantic Kernel supports automatic function calling where the AI model selects and invokes plugin functions without explicit developer orchestration.',
      ar: 'يدعم Semantic Kernel استدعاء الدوال التلقائي حيث يختار نموذج الذكاء الاصطناعي دوال المكوّنات الإضافية ويستدعيها دون تنسيق صريح من المطور.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Semantic Kernel supports automatic function calling where registered plugin functions are exposed to the AI model via their descriptions and schemas. The model can then autonomously decide which functions to call and with what parameters, similar to tool use in other frameworks, enabling the AI to dynamically extend its capabilities.',
      ar: 'صحيح. يدعم Semantic Kernel استدعاء الدوال التلقائي حيث تُعرض دوال المكوّنات الإضافية المسجلة لنموذج الذكاء الاصطناعي عبر أوصافها ومخططاتها. يمكن للنموذج بعد ذلك أن يقرر بشكل مستقل أي الدوال يستدعي وبأي معاملات، مشابهًا لاستخدام الأدوات في الأطر الأخرى، مما يمكّن الذكاء الاصطناعي من توسيع قدراته ديناميكيًا.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-semantic-kernel',
  },
  // Frameworks - OpenAI Agents (q73-q75)
  {
    id: 'q73',
    type: 'mcq',
    question: {
      en: 'What is the OpenAI Agents SDK primarily used for?',
      ar: 'ما الغرض الأساسي من استخدام حزمة تطوير وكلاء OpenAI؟',
    },
    options: {
      en: [
        'Training custom GPT models from scratch',
        'Building agentic applications with tool use, handoffs, and guardrails using OpenAI models',
        'Managing OpenAI billing and API keys',
        'Creating image generation pipelines',
      ],
      ar: [
        'تدريب نماذج GPT مخصصة من الصفر',
        'بناء تطبيقات وكيلية مع استخدام الأدوات والتسليمات والحواجز الأمنية باستخدام نماذج OpenAI',
        'إدارة فوترة OpenAI ومفاتيح واجهة البرمجة',
        'إنشاء خطوط أنابيب توليد الصور',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The OpenAI Agents SDK provides primitives for building agentic applications: Agents (LLMs with instructions and tools), Handoffs (transferring control between agents), Guardrails (validating inputs/outputs), and Tracing (monitoring execution). It supports building both simple single-agent and complex multi-agent workflows.',
      ar: 'توفر حزمة تطوير وكلاء OpenAI مكوّنات أساسية لبناء تطبيقات وكيلية: وكلاء (نماذج لغة كبيرة مع تعليمات وأدوات)، وتسليمات (نقل التحكم بين الوكلاء)، وحواجز أمنية (التحقق من المدخلات/المخرجات)، وتتبع (مراقبة التنفيذ). تدعم بناء سير عمل بوكيل واحد بسيط ومتعدد الوكلاء المعقد.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-openai-agents',
  },
  {
    id: 'q74',
    type: 'mcq',
    question: {
      en: 'What is a "handoff" in the OpenAI Agents SDK?',
      ar: 'ما هو "التسليم" في حزمة تطوير وكلاء OpenAI؟',
    },
    options: {
      en: [
        'A method for transferring files between servers',
        'A mechanism where one agent transfers control of a conversation to another specialized agent',
        'A process of backing up agent configurations',
        'A technique for load balancing API requests',
      ],
      ar: [
        'طريقة لنقل الملفات بين الخوادم',
        'آلية ينقل فيها وكيل التحكم في المحادثة إلى وكيل متخصص آخر',
        'عملية نسخ احتياطي لتكوينات الوكيل',
        'تقنية لموازنة تحميل طلبات واجهة البرمجة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A handoff in the OpenAI Agents SDK allows one agent to transfer the conversation to another agent that is better suited to handle the current request. For example, a triage agent might hand off to a billing agent, a technical support agent, or a sales agent based on the user\'s needs. The receiving agent continues with the full conversation context.',
      ar: 'يسمح التسليم في حزمة تطوير وكلاء OpenAI لوكيل بنقل المحادثة إلى وكيل آخر أكثر ملاءمة للتعامل مع الطلب الحالي. على سبيل المثال، قد يسلّم وكيل الفرز إلى وكيل الفوترة أو وكيل الدعم الفني أو وكيل المبيعات بناءً على احتياجات المستخدم. يستمر الوكيل المستقبل بسياق المحادثة الكامل.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-openai-agents',
  },
  {
    id: 'q75',
    type: 'true-false',
    question: {
      en: 'The OpenAI Agents SDK supports tracing agent execution for debugging and monitoring purposes.',
      ar: 'تدعم حزمة تطوير وكلاء OpenAI تتبع تنفيذ الوكيل لأغراض تصحيح الأخطاء والمراقبة.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. The OpenAI Agents SDK includes built-in tracing that captures detailed execution logs including agent actions, tool calls, handoffs, and guardrail checks. Traces can be viewed in the OpenAI dashboard or exported to external observability platforms, making it easier to debug, optimize, and monitor agent behavior in production.',
      ar: 'صحيح. تتضمن حزمة تطوير وكلاء OpenAI تتبعًا مدمجًا يلتقط سجلات تنفيذ مفصلة تشمل إجراءات الوكيل واستدعاءات الأدوات والتسليمات وفحوصات الحواجز الأمنية. يمكن عرض التتبعات في لوحة تحكم OpenAI أو تصديرها إلى منصات مراقبة خارجية، مما يسهّل تصحيح ومراقبة وتحسين سلوك الوكيل في الإنتاج.',
    },
    difficulty: 'beginner',
    category: 'frameworks-openai-agents',
  },
  // AI Security (q76-q80)
  {
    id: 'q76',
    type: 'mcq',
    question: {
      en: 'What is indirect prompt injection?',
      ar: 'ما هو حقن الأوامر غير المباشر؟',
    },
    options: {
      en: [
        'Injecting prompts directly into the system prompt',
        'Hiding malicious instructions in external content (like documents or web pages) that the agent retrieves and processes',
        'A method of compressing prompts for efficiency',
        'Sending prompts through a secure encrypted channel',
      ],
      ar: [
        'حقن الأوامر مباشرة في أمر النظام',
        'إخفاء تعليمات خبيثة في محتوى خارجي (مثل المستندات أو صفحات الويب) يسترجعه الوكيل ويعالجه',
        'طريقة لضغط الأوامر لتحقيق الكفاءة',
        'إرسال الأوامر عبر قناة مشفرة آمنة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Indirect prompt injection occurs when malicious instructions are embedded in external data sources (documents, emails, web pages) that the agent retrieves during RAG or tool use. Unlike direct injection from user input, indirect injection is harder to detect because the harmful content enters through trusted data channels the agent is designed to consume.',
      ar: 'يحدث حقن الأوامر غير المباشر عندما تُضمّن تعليمات خبيثة في مصادر بيانات خارجية (مستندات، رسائل بريد إلكتروني، صفحات ويب) يسترجعها الوكيل أثناء RAG أو استخدام الأدوات. على عكس الحقن المباشر من مدخلات المستخدم، يصعب اكتشاف الحقن غير المباشر لأن المحتوى الضار يدخل عبر قنوات بيانات موثوقة مصمم الوكيل لاستهلاكها.',
    },
    difficulty: 'advanced',
    category: 'ai-security',
  },
  {
    id: 'q77',
    type: 'mcq',
    question: {
      en: 'What is the principle of least privilege in AI agent security?',
      ar: 'ما هو مبدأ الحد الأدنى من الامتيازات في أمان وكلاء الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'Giving agents maximum access to all systems for efficiency',
        'Granting agents only the minimum permissions needed to perform their specific tasks',
        'Restricting all agents from using any tools',
        'Allowing only the most experienced agents to access sensitive data',
      ],
      ar: [
        'منح الوكلاء أقصى وصول لجميع الأنظمة من أجل الكفاءة',
        'منح الوكلاء فقط الحد الأدنى من الأذونات اللازمة لأداء مهامهم المحددة',
        'تقييد جميع الوكلاء من استخدام أي أدوات',
        'السماح فقط للوكلاء الأكثر خبرة بالوصول إلى البيانات الحساسة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The principle of least privilege means each agent should only have access to the tools, data, and permissions it strictly needs. For example, a customer service agent should not have write access to the billing database. This limits the blast radius of any security breach, prompt injection, or agent malfunction.',
      ar: 'مبدأ الحد الأدنى من الامتيازات يعني أن كل وكيل يجب أن يكون لديه فقط الوصول إلى الأدوات والبيانات والأذونات التي يحتاجها بشكل صارم. على سبيل المثال، لا يجب أن يكون لوكيل خدمة العملاء وصول كتابة لقاعدة بيانات الفوترة. يحد هذا من نطاق الضرر لأي اختراق أمني أو حقن أوامر أو خلل في الوكيل.',
    },
    difficulty: 'intermediate',
    category: 'ai-security',
  },
  {
    id: 'q78',
    type: 'true-false',
    question: {
      en: 'Data poisoning attacks target the training data to influence the model\'s behavior at inference time.',
      ar: 'تستهدف هجمات تسميم البيانات بيانات التدريب للتأثير على سلوك النموذج في وقت الاستدلال.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Data poisoning attacks inject malicious or manipulated examples into training data to cause the model to learn incorrect patterns. This can result in biased outputs, backdoor vulnerabilities (where specific trigger phrases cause unwanted behavior), or degraded performance on certain inputs. Defenses include data validation, anomaly detection, and dataset curation.',
      ar: 'صحيح. تحقن هجمات تسميم البيانات أمثلة خبيثة أو متلاعب بها في بيانات التدريب لتسبب تعلم النموذج لأنماط غير صحيحة. يمكن أن يؤدي ذلك إلى مخرجات متحيزة وثغرات خلفية (حيث تسبب عبارات تشغيل معينة سلوكًا غير مرغوب) أو أداء متدهور على مدخلات معينة. تشمل الدفاعات التحقق من البيانات واكتشاف الشذوذ وتنظيم مجموعة البيانات.',
    },
    difficulty: 'advanced',
    category: 'ai-security',
  },
  {
    id: 'q79',
    type: 'mcq',
    question: {
      en: 'What is model exfiltration in the context of AI security?',
      ar: 'ما هو تسريب النموذج في سياق أمان الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'Upgrading a model to a newer version',
        'An attack where an adversary extracts a model\'s weights, architecture, or training data through repeated querying or exploitation',
        'The process of deploying a model to production',
        'Removing a model from service for maintenance',
      ],
      ar: [
        'ترقية النموذج إلى إصدار أحدث',
        'هجوم يستخرج فيه خصم أوزان النموذج أو معماريته أو بيانات تدريبه من خلال الاستعلام المتكرر أو الاستغلال',
        'عملية نشر النموذج في الإنتاج',
        'إزالة النموذج من الخدمة للصيانة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Model exfiltration (or model stealing) involves an adversary attempting to reconstruct a proprietary model by sending many crafted queries and analyzing the outputs. Defenses include rate limiting, output perturbation, watermarking, monitoring for suspicious query patterns, and restricting the amount of information returned per query.',
      ar: 'يتضمن تسريب النموذج (أو سرقة النموذج) محاولة خصم إعادة بناء نموذج ملكية من خلال إرسال العديد من الاستعلامات المصممة وتحليل المخرجات. تشمل الدفاعات تحديد المعدل وتشويش المخرجات والعلامة المائية ومراقبة أنماط الاستعلام المشبوهة وتقييد كمية المعلومات المعادة لكل استعلام.',
    },
    difficulty: 'advanced',
    category: 'ai-security',
  },
  {
    id: 'q80',
    type: 'mcq',
    question: {
      en: 'What is the purpose of output sanitization in AI agent security?',
      ar: 'ما هو الغرض من تنقية المخرجات في أمان وكلاء الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'Making the output more grammatically correct',
        'Filtering agent responses to remove sensitive data, harmful content, or unintended information leakage before delivering to the user',
        'Compressing output to save bandwidth',
        'Translating output into multiple languages',
      ],
      ar: [
        'جعل المخرجات أكثر صحة نحويًا',
        'تصفية استجابات الوكيل لإزالة البيانات الحساسة أو المحتوى الضار أو تسرب المعلومات غير المقصود قبل التسليم للمستخدم',
        'ضغط المخرجات لتوفير عرض النطاق',
        'ترجمة المخرجات إلى لغات متعددة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Output sanitization inspects and cleans agent responses before they reach the user. It catches sensitive data leaks (PII, API keys, internal URLs), removes harmful or toxic content, strips any injected instructions the agent may have inadvertently echoed, and ensures compliance with organizational content policies.',
      ar: 'تفحص تنقية المخرجات استجابات الوكيل وتنظفها قبل وصولها للمستخدم. تلتقط تسريبات البيانات الحساسة (المعلومات الشخصية ومفاتيح واجهة البرمجة وعناوين URL الداخلية)، وتزيل المحتوى الضار أو السام، وتمسح أي تعليمات محقونة قد يكون الوكيل قد رددها عن غير قصد، وتضمن الامتثال لسياسات محتوى المنظمة.',
    },
    difficulty: 'intermediate',
    category: 'ai-security',
  },
  // Human-AI Interaction (q81-q83)
  {
    id: 'q81',
    type: 'mcq',
    question: {
      en: 'What is "human-in-the-loop" in AI agent systems?',
      ar: 'ما هو مفهوم "الإنسان في الحلقة" في أنظمة وكلاء الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'A feedback form that users fill out after using the AI',
        'A design pattern where the agent pauses at critical decision points for human review and approval before proceeding',
        'A training technique where humans write all the code',
        'A hardware setup where humans physically connect to the AI system',
      ],
      ar: [
        'نموذج ملاحظات يملؤه المستخدمون بعد استخدام الذكاء الاصطناعي',
        'نمط تصميم يتوقف فيه الوكيل عند نقاط القرار الحرجة للمراجعة والموافقة البشرية قبل المتابعة',
        'تقنية تدريب يكتب فيها البشر كل الكود',
        'إعداد أجهزة يتصل فيه البشر فيزيائيًا بنظام الذكاء الاصطناعي',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Human-in-the-loop is a design pattern where the agent requests human approval before executing high-stakes actions like financial transactions, data deletions, or external communications. This adds a safety layer for irreversible or sensitive operations while still allowing the agent to handle routine tasks autonomously.',
      ar: 'الإنسان في الحلقة هو نمط تصميم يطلب فيه الوكيل الموافقة البشرية قبل تنفيذ إجراءات عالية المخاطر مثل المعاملات المالية أو حذف البيانات أو الاتصالات الخارجية. يضيف هذا طبقة أمان للعمليات غير القابلة للعكس أو الحساسة مع السماح للوكيل بالتعامل مع المهام الروتينية بشكل مستقل.',
    },
    difficulty: 'beginner',
    category: 'human-ai-interaction',
  },
  {
    id: 'q82',
    type: 'true-false',
    question: {
      en: 'Explainability in AI agents refers to the ability to provide clear reasoning for why the agent made specific decisions.',
      ar: 'تشير القابلية للتفسير في وكلاء الذكاء الاصطناعي إلى القدرة على تقديم تفسير واضح لسبب اتخاذ الوكيل لقرارات محددة.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Explainability means the agent can articulate its reasoning process, including which tools it chose and why, what information it considered, and how it arrived at its conclusion. This is crucial for building trust, debugging failures, meeting regulatory requirements, and enabling users to verify the agent\'s decisions.',
      ar: 'صحيح. تعني القابلية للتفسير أن الوكيل يمكنه توضيح عملية استدلاله، بما في ذلك الأدوات التي اختارها ولماذا، والمعلومات التي أخذها بعين الاعتبار، وكيف توصل إلى استنتاجه. هذا ضروري لبناء الثقة وتصحيح الأخطاء وتلبية المتطلبات التنظيمية وتمكين المستخدمين من التحقق من قرارات الوكيل.',
    },
    difficulty: 'beginner',
    category: 'human-ai-interaction',
  },
  {
    id: 'q83',
    type: 'mcq',
    question: {
      en: 'What is "progressive autonomy" in human-AI collaboration?',
      ar: 'ما هو "الاستقلالية التدريجية" في التعاون بين الإنسان والذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'Immediately giving the AI full control over all decisions',
        'Gradually increasing the agent\'s autonomy as it demonstrates reliability, starting with supervised execution and progressing to more independent operation',
        'Progressively reducing the AI\'s capabilities over time',
        'A political philosophy applied to AI governance',
      ],
      ar: [
        'منح الذكاء الاصطناعي تحكمًا كاملاً فوريًا في جميع القرارات',
        'زيادة استقلالية الوكيل تدريجيًا مع إثبات موثوقيته، بدءًا من التنفيذ المراقب والتقدم نحو عمل أكثر استقلالية',
        'تقليل قدرات الذكاء الاصطناعي تدريجيًا بمرور الوقت',
        'فلسفة سياسية مطبقة على حوكمة الذكاء الاصطناعي',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Progressive autonomy is a deployment strategy where an agent starts with heavy human oversight (e.g., approving every action) and gradually earns more independence as it proves reliable. This builds user trust, catches edge cases early, and allows the system to safely expand its scope of autonomous action over time.',
      ar: 'الاستقلالية التدريجية هي استراتيجية نشر يبدأ فيها الوكيل بإشراف بشري كثيف (مثل الموافقة على كل إجراء) ويكتسب تدريجيًا مزيدًا من الاستقلالية مع إثبات موثوقيته. يبني ذلك ثقة المستخدم ويكتشف الحالات الحدية مبكرًا ويسمح للنظام بتوسيع نطاق الإجراء المستقل بأمان بمرور الوقت.',
    },
    difficulty: 'intermediate',
    category: 'human-ai-interaction',
  },
  // Agent Evaluation (q84-q86)
  {
    id: 'q84',
    type: 'mcq',
    question: {
      en: 'What is the purpose of evaluating AI agents with benchmark datasets?',
      ar: 'ما هو الغرض من تقييم وكلاء الذكاء الاصطناعي بمجموعات بيانات معيارية؟',
    },
    options: {
      en: [
        'To make the agent run faster',
        'To systematically measure agent performance on standardized tasks and compare against baselines or other agents',
        'To generate marketing materials for the agent',
        'To reduce the agent\'s memory usage',
      ],
      ar: [
        'لجعل الوكيل يعمل بشكل أسرع',
        'لقياس أداء الوكيل بشكل منهجي على مهام موحدة ومقارنته بالخطوط الأساسية أو وكلاء آخرين',
        'لتوليد مواد تسويقية للوكيل',
        'لتقليل استخدام ذاكرة الوكيل',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Benchmark evaluations provide a standardized way to measure and compare agent capabilities. They test specific skills like tool use accuracy, reasoning depth, task completion rate, and safety compliance. Benchmarks enable objective comparison between different architectures, prompts, or models, and help track improvements over iterations.',
      ar: 'توفر التقييمات المعيارية طريقة موحدة لقياس ومقارنة قدرات الوكيل. تختبر مهارات محددة مثل دقة استخدام الأدوات وعمق الاستدلال ومعدل إتمام المهام والامتثال للأمان. تمكّن المعايير المقارنة الموضوعية بين المعماريات أو الأوامر أو النماذج المختلفة، وتساعد في تتبع التحسينات عبر التكرارات.',
    },
    difficulty: 'intermediate',
    category: 'agent-evaluation',
  },
  {
    id: 'q85',
    type: 'true-false',
    question: {
      en: 'LLM-as-a-judge is a technique where one LLM evaluates the quality of another LLM\'s output.',
      ar: 'نموذج اللغة كحكم هو تقنية يقيّم فيها نموذج لغة كبير جودة مخرجات نموذج لغة كبير آخر.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. LLM-as-a-judge uses a (usually stronger) language model to evaluate the outputs of another model against defined criteria like accuracy, helpfulness, or safety. This approach scales evaluation beyond human review capacity, though it should be calibrated against human judgments and is subject to biases like verbosity preference.',
      ar: 'صحيح. يستخدم نموذج اللغة كحكم نموذج لغة (عادةً أقوى) لتقييم مخرجات نموذج آخر وفقًا لمعايير محددة مثل الدقة والفائدة أو الأمان. يوسع هذا النهج التقييم إلى ما يتجاوز قدرة المراجعة البشرية، رغم أنه يجب معايرته مقابل الأحكام البشرية ويخضع لتحيزات مثل تفضيل الإسهاب.',
    },
    difficulty: 'intermediate',
    category: 'agent-evaluation',
  },
  {
    id: 'q86',
    type: 'mcq',
    question: {
      en: 'Which metric is most appropriate for evaluating a RAG system\'s retrieval quality?',
      ar: 'أي مقياس هو الأنسب لتقييم جودة استرجاع نظام RAG؟',
    },
    options: {
      en: [
        'Lines of code in the implementation',
        'Recall@K and Mean Reciprocal Rank (MRR) measuring how many relevant documents are retrieved and their ranking positions',
        'Total API cost per query',
        'Number of documents in the database',
      ],
      ar: [
        'عدد سطور الكود في التنفيذ',
        'الاستدعاء عند K ومتوسط الترتيب المتبادل (MRR) لقياس عدد المستندات ذات الصلة المسترجعة ومواقع ترتيبها',
        'إجمالي تكلفة واجهة البرمجة لكل استعلام',
        'عدد المستندات في قاعدة البيانات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Recall@K measures the proportion of relevant documents found in the top K results, while MRR evaluates the ranking position of the first relevant result. Together, they indicate whether the retrieval system is finding the right documents and ranking them highly. Other important metrics include precision, NDCG, and faithfulness of the final generated answer.',
      ar: 'يقيس الاستدعاء عند K نسبة المستندات ذات الصلة الموجودة في أفضل K نتيجة، بينما يقيّم MRR موقع ترتيب أول نتيجة ذات صلة. معًا، يشيران إلى ما إذا كان نظام الاسترجاع يجد المستندات الصحيحة ويرتبها عاليًا. تشمل المقاييس المهمة الأخرى الدقة و NDCG وأمانة الإجابة المولدة النهائية.',
    },
    difficulty: 'advanced',
    category: 'agent-evaluation',
  },
  // Production LLMOps (q87-q91)
  {
    id: 'q87',
    type: 'mcq',
    question: {
      en: 'What is prompt versioning in LLMOps?',
      ar: 'ما هو إصدار الأوامر في عمليات نماذج اللغة الكبيرة؟',
    },
    options: {
      en: [
        'Writing prompts in different programming languages',
        'Tracking changes to prompts over time with version control, enabling rollback, A/B testing, and audit trails',
        'Using different prompts for different time zones',
        'Numbering prompts sequentially from 1 to N',
      ],
      ar: [
        'كتابة الأوامر بلغات برمجة مختلفة',
        'تتبع التغييرات في الأوامر عبر الزمن مع التحكم بالإصدارات، مما يتيح التراجع واختبار A/B ومسارات التدقيق',
        'استخدام أوامر مختلفة لمناطق زمنية مختلفة',
        'ترقيم الأوامر بشكل تتابعي من 1 إلى N',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Prompt versioning applies version control practices to prompts, treating them as critical software artifacts. Each change to a prompt is tracked with metadata (author, timestamp, reason), enabling teams to compare performance across versions, roll back to previous versions if quality drops, and run A/B tests between prompt variants in production.',
      ar: 'يطبق إصدار الأوامر ممارسات التحكم بالإصدارات على الأوامر، ويعاملها كمكونات برمجية حرجة. يُتتبع كل تغيير في الأمر مع بيانات وصفية (المؤلف والطابع الزمني والسبب)، مما يمكّن الفرق من مقارنة الأداء عبر الإصدارات والتراجع إلى إصدارات سابقة إذا انخفضت الجودة وإجراء اختبارات A/B بين متغيرات الأوامر في الإنتاج.',
    },
    difficulty: 'intermediate',
    category: 'production-llmops',
  },
  {
    id: 'q88',
    type: 'true-false',
    question: {
      en: 'Caching LLM responses for identical queries can significantly reduce costs and latency in production systems.',
      ar: 'يمكن أن يقلل تخزين استجابات نماذج اللغة مؤقتًا للاستعلامات المتطابقة من التكاليف وزمن الاستجابة بشكل كبير في أنظمة الإنتاج.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Semantic caching stores LLM responses and returns cached results for identical or semantically similar queries. This avoids redundant API calls, reducing both cost and latency. Advanced implementations use embedding similarity to match semantically equivalent queries even if worded differently, with TTL policies to ensure freshness.',
      ar: 'صحيح. يخزن التخزين المؤقت الدلالي استجابات نماذج اللغة ويعيد النتائج المخزنة للاستعلامات المتطابقة أو المتشابهة دلاليًا. يتجنب ذلك استدعاءات واجهة البرمجة الزائدة، مما يقلل التكلفة وزمن الاستجابة. تستخدم التنفيذات المتقدمة تشابه التضمين لمطابقة الاستعلامات المتكافئة دلاليًا حتى لو صيغت بشكل مختلف، مع سياسات مدة الصلاحية لضمان الحداثة.',
    },
    difficulty: 'intermediate',
    category: 'production-llmops',
  },
  {
    id: 'q89',
    type: 'mcq',
    question: {
      en: 'What is observability in the context of production AI agents?',
      ar: 'ما هي قابلية المراقبة في سياق وكلاء الذكاء الاصطناعي في الإنتاج؟',
    },
    options: {
      en: [
        'Making the agent\'s UI visually appealing',
        'The ability to understand the internal state and behavior of an agent through logs, traces, metrics, and dashboards',
        'Watching the agent run in a video call',
        'Reading the agent\'s source code',
      ],
      ar: [
        'جعل واجهة مستخدم الوكيل جذابة بصريًا',
        'القدرة على فهم الحالة الداخلية وسلوك الوكيل من خلال السجلات والتتبعات والمقاييس ولوحات المعلومات',
        'مشاهدة الوكيل يعمل في مكالمة فيديو',
        'قراءة الكود المصدري للوكيل',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Observability for AI agents encompasses structured logging of all interactions, distributed tracing of multi-step workflows, metrics collection (latency, token usage, error rates, cost), and dashboards for real-time monitoring. Tools like LangSmith, Phoenix, and Langfuse provide specialized AI observability with features like prompt tracking and evaluation pipelines.',
      ar: 'تشمل قابلية المراقبة لوكلاء الذكاء الاصطناعي التسجيل المنظم لجميع التفاعلات والتتبع الموزع لسير العمل متعدد الخطوات وجمع المقاييس (زمن الاستجابة واستخدام الرموز ومعدلات الخطأ والتكلفة) ولوحات المعلومات للمراقبة في الوقت الفعلي. توفر أدوات مثل LangSmith و Phoenix و Langfuse قابلية مراقبة ذكاء اصطناعي متخصصة مع ميزات مثل تتبع الأوامر وخطوط أنابيب التقييم.',
    },
    difficulty: 'intermediate',
    category: 'production-llmops',
  },
  {
    id: 'q90',
    type: 'mcq',
    question: {
      en: 'What is the purpose of rate limiting in production LLM applications?',
      ar: 'ما هو الغرض من تحديد المعدل في تطبيقات نماذج اللغة الكبيرة في الإنتاج؟',
    },
    options: {
      en: [
        'To increase the speed of all API calls',
        'To control the number of requests per time period, preventing abuse, managing costs, and ensuring fair resource distribution',
        'To rate the quality of LLM outputs',
        'To limit the number of models that can be deployed',
      ],
      ar: [
        'لزيادة سرعة جميع استدعاءات واجهة البرمجة',
        'للتحكم في عدد الطلبات لكل فترة زمنية، ومنع سوء الاستخدام وإدارة التكاليف وضمان توزيع عادل للموارد',
        'لتقييم جودة مخرجات نماذج اللغة',
        'للحد من عدد النماذج التي يمكن نشرها',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Rate limiting controls how many API requests can be made within a given time window. In LLM applications, it prevents cost overruns from runaway agent loops, protects against denial-of-service attacks, ensures fair usage among users, and stays within API provider rate limits. Strategies include token bucket, sliding window, and per-user quotas.',
      ar: 'يتحكم تحديد المعدل في عدد طلبات واجهة البرمجة التي يمكن إجراؤها خلال نافذة زمنية معينة. في تطبيقات نماذج اللغة، يمنع تجاوز التكاليف من حلقات الوكيل الخارجة عن السيطرة ويحمي من هجمات رفض الخدمة ويضمن الاستخدام العادل بين المستخدمين ويبقى ضمن حدود معدل مزود واجهة البرمجة. تشمل الاستراتيجيات دلو الرموز والنافذة المنزلقة والحصص لكل مستخدم.',
    },
    difficulty: 'intermediate',
    category: 'production-llmops',
  },
  {
    id: 'q91',
    type: 'mcq',
    question: {
      en: 'What is a fallback strategy in production LLM deployments?',
      ar: 'ما هي استراتيجية الاحتياط في نشر نماذج اللغة الكبيرة في الإنتاج؟',
    },
    options: {
      en: [
        'Always using the cheapest model available',
        'Having backup models, cached responses, or graceful degradation paths ready when the primary model fails or is unavailable',
        'Falling back to manual human processing for every request',
        'Retrying the same failed request indefinitely',
      ],
      ar: [
        'استخدام النموذج الأرخص المتاح دائمًا',
        'توفير نماذج احتياطية أو استجابات مخزنة أو مسارات تدهور رشيقة جاهزة عند فشل النموذج الأساسي أو عدم توفره',
        'الرجوع إلى المعالجة البشرية اليدوية لكل طلب',
        'إعادة محاولة نفس الطلب الفاشل إلى ما لا نهاية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A fallback strategy ensures system resilience when the primary LLM is unavailable, rate-limited, or returning errors. Common strategies include routing to a backup model (e.g., falling back from GPT-4 to GPT-3.5), serving cached responses for common queries, providing a simplified rule-based response, or queuing requests for later processing.',
      ar: 'تضمن استراتيجية الاحتياط مرونة النظام عندما يكون نموذج اللغة الأساسي غير متاح أو محدود المعدل أو يعيد أخطاء. تشمل الاستراتيجيات الشائعة التوجيه إلى نموذج احتياطي (مثل الرجوع من GPT-4 إلى GPT-3.5) وتقديم استجابات مخزنة للاستعلامات الشائعة وتوفير استجابة مبسطة قائمة على القواعد أو وضع الطلبات في طابور للمعالجة لاحقًا.',
    },
    difficulty: 'advanced',
    category: 'production-llmops',
  },
  // Computer Vision & Multimodal (q92-q94)
  {
    id: 'q92',
    type: 'mcq',
    question: {
      en: 'What does "multimodal" mean in the context of AI models?',
      ar: 'ما معنى "متعدد الوسائط" في سياق نماذج الذكاء الاصطناعي؟',
    },
    options: {
      en: [
        'A model that can only process text in multiple languages',
        'A model that can understand and generate content across multiple types of data such as text, images, audio, and video',
        'A model deployed on multiple servers',
        'A model with multiple output formats like JSON and XML',
      ],
      ar: [
        'نموذج يمكنه معالجة النص بلغات متعددة فقط',
        'نموذج يمكنه فهم وتوليد محتوى عبر أنواع متعددة من البيانات مثل النص والصور والصوت والفيديو',
        'نموذج منشور على خوادم متعددة',
        'نموذج بتنسيقات مخرجات متعددة مثل JSON و XML',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Multimodal AI models can process and generate content across different data modalities. For example, GPT-4V can analyze images alongside text, and models like Gemini can process text, images, audio, and video. This enables use cases like describing images, answering questions about visual content, and generating images from text descriptions.',
      ar: 'يمكن لنماذج الذكاء الاصطناعي متعددة الوسائط معالجة وتوليد محتوى عبر أنماط بيانات مختلفة. على سبيل المثال، يمكن لـ GPT-4V تحليل الصور مع النص، ويمكن لنماذج مثل Gemini معالجة النص والصور والصوت والفيديو. يمكّن ذلك حالات استخدام مثل وصف الصور والإجابة على أسئلة حول المحتوى المرئي وتوليد الصور من أوصاف نصية.',
    },
    difficulty: 'beginner',
    category: 'computer-vision-multimodal',
  },
  {
    id: 'q93',
    type: 'true-false',
    question: {
      en: 'Vision Language Models (VLMs) can perform optical character recognition (OCR) on images without a dedicated OCR engine.',
      ar: 'يمكن لنماذج اللغة البصرية (VLMs) إجراء التعرف الضوئي على الأحرف (OCR) على الصور بدون محرك OCR مخصص.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Modern VLMs like GPT-4V and Claude can read and extract text from images, including handwritten text, screenshots, documents, and signs. While dedicated OCR engines may still offer advantages for specialized use cases (like structured document extraction), VLMs provide a flexible zero-shot capability for text extraction from images.',
      ar: 'صحيح. يمكن لنماذج اللغة البصرية الحديثة مثل GPT-4V و Claude قراءة واستخراج النص من الصور، بما في ذلك النص المكتوب بخط اليد ولقطات الشاشة والمستندات واللافتات. بينما قد تقدم محركات OCR المخصصة مزايا لحالات الاستخدام المتخصصة (مثل استخراج المستندات المنظمة)، توفر نماذج اللغة البصرية قدرة مرنة بدون تدريب لاستخراج النص من الصور.',
    },
    difficulty: 'intermediate',
    category: 'computer-vision-multimodal',
  },
  {
    id: 'q94',
    type: 'mcq',
    question: {
      en: 'What is CLIP (Contrastive Language-Image Pre-training)?',
      ar: 'ما هو CLIP (التدريب المسبق التقابلي للغة والصورة)؟',
    },
    options: {
      en: [
        'A video editing software',
        'A model trained to understand the relationship between images and text by learning shared embedding spaces for both modalities',
        'A clipboard management tool for developers',
        'A technique for clipping gradients during training',
      ],
      ar: [
        'برنامج تحرير فيديو',
        'نموذج مدرّب لفهم العلاقة بين الصور والنص من خلال تعلم فضاءات تضمين مشتركة لكلا الوسيطتين',
        'أداة إدارة حافظة للمطورين',
        'تقنية لقص التدرجات أثناء التدريب',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'CLIP learns a shared embedding space where images and their text descriptions are mapped close together. This enables zero-shot image classification (matching images to text labels without specific training), image search using natural language queries, and serving as a foundation for more advanced multimodal systems.',
      ar: 'يتعلم CLIP فضاء تضمين مشترك حيث تُعيّن الصور وأوصافها النصية بالقرب من بعضها. يمكّن ذلك التصنيف البصري بدون تدريب (مطابقة الصور مع تسميات نصية بدون تدريب محدد) والبحث عن الصور باستخدام استعلامات لغة طبيعية والعمل كأساس لأنظمة متعددة الوسائط أكثر تقدمًا.',
    },
    difficulty: 'advanced',
    category: 'computer-vision-multimodal',
  },
  // Voice AI (q95-q96)
  {
    id: 'q95',
    type: 'mcq',
    question: {
      en: 'What are the main components of a voice AI pipeline?',
      ar: 'ما هي المكونات الرئيسية لخط أنابيب الذكاء الاصطناعي الصوتي؟',
    },
    options: {
      en: [
        'Only a microphone and speaker',
        'Speech-to-Text (STT) for transcription, LLM for understanding and generating responses, and Text-to-Speech (TTS) for vocalization',
        'A single neural network that handles everything',
        'A database of pre-recorded audio responses',
      ],
      ar: [
        'ميكروفون ومكبر صوت فقط',
        'تحويل الكلام إلى نص (STT) للنسخ، ونموذج لغة كبير للفهم وتوليد الاستجابات، وتحويل النص إلى كلام (TTS) للنطق',
        'شبكة عصبية واحدة تتعامل مع كل شيء',
        'قاعدة بيانات استجابات صوتية مسجلة مسبقًا',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A typical voice AI pipeline has three core stages: STT converts spoken audio into text, the LLM processes the text to understand intent and generate a response, and TTS converts the text response back into natural-sounding speech. Advanced systems add components like voice activity detection, emotion recognition, and streaming for real-time interaction.',
      ar: 'يحتوي خط أنابيب الذكاء الاصطناعي الصوتي النموذجي على ثلاث مراحل أساسية: تحويل الكلام إلى نص يحول الصوت المنطوق إلى نص، ونموذج اللغة الكبير يعالج النص لفهم النية وتوليد استجابة، وتحويل النص إلى كلام يحول الاستجابة النصية إلى كلام يبدو طبيعيًا. تضيف الأنظمة المتقدمة مكونات مثل اكتشاف النشاط الصوتي والتعرف على المشاعر والبث للتفاعل في الوقت الفعلي.',
    },
    difficulty: 'beginner',
    category: 'voice-ai',
  },
  {
    id: 'q96',
    type: 'true-false',
    question: {
      en: 'Real-time voice AI agents must handle interruptions (barge-in) where the user speaks while the agent is still talking.',
      ar: 'يجب على وكلاء الذكاء الاصطناعي الصوتي في الوقت الفعلي التعامل مع المقاطعات حيث يتحدث المستخدم بينما لا يزال الوكيل يتحدث.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Natural conversation involves interruptions, and voice AI agents must handle "barge-in" gracefully. This requires stopping the current TTS output, processing the new user speech, and generating an appropriate response. Without barge-in support, voice agents feel unnatural and frustrating to interact with.',
      ar: 'صحيح. تتضمن المحادثة الطبيعية مقاطعات، ويجب على وكلاء الذكاء الاصطناعي الصوتي التعامل مع "المقاطعة" بسلاسة. يتطلب ذلك إيقاف مخرجات تحويل النص إلى كلام الحالية ومعالجة كلام المستخدم الجديد وتوليد استجابة مناسبة. بدون دعم المقاطعة، يشعر المستخدمون بعدم طبيعية وإحباط في التفاعل مع الوكلاء الصوتيين.',
    },
    difficulty: 'intermediate',
    category: 'voice-ai',
  },
  // Industry Applications (q97-q102)
  {
    id: 'q97',
    type: 'mcq',
    question: {
      en: 'What is the primary benefit of AI agents in healthcare documentation?',
      ar: 'ما هي الفائدة الأساسية لوكلاء الذكاء الاصطناعي في توثيق الرعاية الصحية؟',
    },
    options: {
      en: [
        'Replacing doctors entirely',
        'Automatically transcribing and structuring clinical notes from doctor-patient conversations, reducing administrative burden',
        'Diagnosing diseases without any human oversight',
        'Managing hospital parking systems',
      ],
      ar: [
        'استبدال الأطباء بالكامل',
        'نسخ وتنظيم الملاحظات السريرية تلقائيًا من محادثات الطبيب والمريض، مما يقلل العبء الإداري',
        'تشخيص الأمراض دون أي إشراف بشري',
        'إدارة أنظمة مواقف السيارات في المستشفيات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'AI agents can listen to doctor-patient conversations, transcribe them in real-time, extract relevant medical information, and structure it into standardized clinical notes (SOAP notes). This reduces the documentation burden on physicians (a major source of burnout) while ensuring comprehensive and consistent medical records.',
      ar: 'يمكن لوكلاء الذكاء الاصطناعي الاستماع إلى محادثات الطبيب والمريض ونسخها في الوقت الفعلي واستخراج المعلومات الطبية ذات الصلة وتنظيمها في ملاحظات سريرية موحدة (ملاحظات SOAP). يقلل ذلك من عبء التوثيق على الأطباء (مصدر رئيسي للإرهاق) مع ضمان سجلات طبية شاملة ومتسقة.',
    },
    difficulty: 'intermediate',
    category: 'industry-applications',
  },
  {
    id: 'q98',
    type: 'mcq',
    question: {
      en: 'How can AI agents improve software development workflows?',
      ar: 'كيف يمكن لوكلاء الذكاء الاصطناعي تحسين سير عمل تطوير البرمجيات؟',
    },
    options: {
      en: [
        'By writing all code without any developer involvement',
        'By assisting with code generation, review, debugging, documentation, and test creation while developers maintain oversight',
        'By eliminating the need for version control',
        'By replacing all development tools with a single AI interface',
      ],
      ar: [
        'بكتابة جميع الأكواد دون أي مشاركة من المطورين',
        'بالمساعدة في توليد الكود والمراجعة والتصحيح والتوثيق وإنشاء الاختبارات بينما يحافظ المطورون على الإشراف',
        'بإلغاء الحاجة للتحكم بالإصدارات',
        'باستبدال جميع أدوات التطوير بواجهة ذكاء اصطناعي واحدة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'AI coding agents augment developer productivity by generating code from natural language descriptions, performing automated code reviews, identifying and fixing bugs, generating documentation, creating unit tests, and explaining unfamiliar codebases. The developer remains in control, reviewing and validating AI-generated code before merging.',
      ar: 'تعزز وكلاء البرمجة بالذكاء الاصطناعي إنتاجية المطورين من خلال توليد الكود من أوصاف اللغة الطبيعية وإجراء مراجعات كود آلية وتحديد وإصلاح الأخطاء وتوليد التوثيق وإنشاء اختبارات الوحدة وشرح قواعد الكود غير المألوفة. يبقى المطور في وضع السيطرة، يراجع ويتحقق من الكود المولّد بالذكاء الاصطناعي قبل الدمج.',
    },
    difficulty: 'beginner',
    category: 'industry-applications',
  },
  {
    id: 'q99',
    type: 'true-false',
    question: {
      en: 'AI agents in financial services must comply with regulatory requirements for explainability and audit trails.',
      ar: 'يجب على وكلاء الذكاء الاصطناعي في الخدمات المالية الامتثال للمتطلبات التنظيمية للتفسير ومسارات التدقيق.',
    },
    options: {
      en: ['True', 'False'],
      ar: ['صحيح', 'خطأ'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'True. Financial services are heavily regulated, and AI agents operating in this domain must maintain detailed audit trails of all decisions and actions, provide explainable reasoning for recommendations, comply with regulations like GDPR, SOX, and MiFID II, and ensure fair treatment across demographic groups. This requires robust logging, transparency mechanisms, and human oversight.',
      ar: 'صحيح. الخدمات المالية تخضع لتنظيم كثيف، ويجب على وكلاء الذكاء الاصطناعي العاملين في هذا المجال الحفاظ على مسارات تدقيق مفصلة لجميع القرارات والإجراءات، وتوفير استدلال قابل للتفسير للتوصيات، والامتثال للوائح مثل GDPR و SOX و MiFID II، وضمان المعاملة العادلة عبر المجموعات الديموغرافية. يتطلب ذلك تسجيلًا قويًا وآليات شفافية وإشرافًا بشريًا.',
    },
    difficulty: 'intermediate',
    category: 'industry-applications',
  },
  {
    id: 'q100',
    type: 'mcq',
    question: {
      en: 'What is a key consideration when deploying AI agents for legal document analysis?',
      ar: 'ما هو الاعتبار الرئيسي عند نشر وكلاء الذكاء الاصطناعي لتحليل المستندات القانونية؟',
    },
    options: {
      en: [
        'Using the fastest model regardless of accuracy',
        'Ensuring high accuracy with citation to specific clauses, maintaining attorney-client privilege, and flagging uncertainty rather than guessing',
        'Processing documents as quickly as possible without review',
        'Using generic models without any legal domain customization',
      ],
      ar: [
        'استخدام النموذج الأسرع بغض النظر عن الدقة',
        'ضمان دقة عالية مع الاستشهاد بالبنود المحددة والحفاظ على سرية المحامي والموكل والإشارة إلى عدم اليقين بدلاً من التخمين',
        'معالجة المستندات بأسرع ما يمكن دون مراجعة',
        'استخدام نماذج عامة بدون أي تخصيص للمجال القانوني',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Legal AI agents must prioritize accuracy and traceability. Every finding should reference specific document sections or clauses. The agent must respect confidentiality requirements, clearly indicate when it is uncertain, and never fabricate legal precedents or clause interpretations. Human attorney review remains essential for any legally consequential output.',
      ar: 'يجب أن تعطي وكلاء الذكاء الاصطناعي القانونية الأولوية للدقة وقابلية التتبع. يجب أن يشير كل نتيجة إلى أقسام أو بنود محددة في المستندات. يجب على الوكيل احترام متطلبات السرية والإشارة بوضوح عندما يكون غير متأكد وعدم اختلاق سوابق قانونية أو تفسيرات بنود. تبقى مراجعة المحامي البشري ضرورية لأي مخرج ذي عواقب قانونية.',
    },
    difficulty: 'advanced',
    category: 'industry-applications',
  },
  {
    id: 'q101',
    type: 'mcq',
    question: {
      en: 'What role do AI agents play in supply chain management?',
      ar: 'ما الدور الذي تلعبه وكلاء الذكاء الاصطناعي في إدارة سلسلة التوريد؟',
    },
    options: {
      en: [
        'Only tracking package deliveries',
        'Demand forecasting, inventory optimization, supplier risk assessment, and automated procurement decision support',
        'Physically moving goods in warehouses',
        'Designing product packaging',
      ],
      ar: [
        'تتبع تسليم الطرود فقط',
        'التنبؤ بالطلب وتحسين المخزون وتقييم مخاطر الموردين ودعم قرارات الشراء الآلية',
        'نقل البضائع فيزيائيًا في المستودعات',
        'تصميم تغليف المنتجات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'AI agents in supply chain management analyze historical data and market signals to forecast demand, optimize inventory levels to minimize costs while preventing stockouts, assess supplier risks by monitoring news and financial data, and support procurement decisions by comparing suppliers, prices, and delivery times across complex global networks.',
      ar: 'تحلل وكلاء الذكاء الاصطناعي في إدارة سلسلة التوريد البيانات التاريخية وإشارات السوق للتنبؤ بالطلب وتحسين مستويات المخزون لتقليل التكاليف مع منع نفاد المخزون وتقييم مخاطر الموردين من خلال مراقبة الأخبار والبيانات المالية ودعم قرارات الشراء بمقارنة الموردين والأسعار وأوقات التسليم عبر الشبكات العالمية المعقدة.',
    },
    difficulty: 'intermediate',
    category: 'industry-applications',
  },
  {
    id: 'q102',
    type: 'mcq',
    question: {
      en: 'What is the main challenge of using AI agents in education?',
      ar: 'ما هو التحدي الرئيسي لاستخدام وكلاء الذكاء الاصطناعي في التعليم؟',
    },
    options: {
      en: [
        'AI is too slow for educational use',
        'Balancing personalized learning assistance with academic integrity, avoiding over-reliance, and ensuring pedagogically sound interactions',
        'Educational content is too simple for AI',
        'Students do not have access to computers',
      ],
      ar: [
        'الذكاء الاصطناعي بطيء جدًا للاستخدام التعليمي',
        'الموازنة بين المساعدة التعليمية المخصصة والنزاهة الأكاديمية وتجنب الاعتماد المفرط وضمان تفاعلات سليمة تربويًا',
        'المحتوى التعليمي بسيط جدًا للذكاء الاصطناعي',
        'الطلاب ليس لديهم وصول لأجهزة الكمبيوتر',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'AI in education must guide students toward understanding rather than simply providing answers. Key challenges include preventing cheating while offering legitimate help, adapting to different learning levels, providing pedagogically appropriate scaffolding, handling misconceptions accurately, and ensuring equitable access across diverse student populations.',
      ar: 'يجب أن يوجه الذكاء الاصطناعي في التعليم الطلاب نحو الفهم بدلاً من تقديم الإجابات ببساطة. تشمل التحديات الرئيسية منع الغش مع تقديم مساعدة مشروعة والتكيف مع مستويات التعلم المختلفة وتوفير دعم مناسب تربويًا والتعامل مع المفاهيم الخاطئة بدقة وضمان الوصول العادل عبر مجموعات الطلاب المتنوعة.',
    },
    difficulty: 'intermediate',
    category: 'industry-applications',
  },
  // Cross-topic Scenario Questions (q103-q118)
  {
    id: 'q103',
    type: 'scenario',
    question: {
      en: 'You are building a multi-agent research system that searches academic papers, extracts key findings, and generates literature reviews. Papers are stored in a vector database. Users report that the system sometimes cites papers that don\'t exist. What is the most likely cause and best fix?',
      ar: 'أنت تبني نظام بحث متعدد الوكلاء يبحث في الأوراق الأكاديمية ويستخرج النتائج الرئيسية ويولّد مراجعات أدبية. تُخزن الأوراق في قاعدة بيانات متجهية. يبلّغ المستخدمون أن النظام يستشهد أحيانًا بأوراق غير موجودة. ما هو السبب الأكثر احتمالاً وأفضل حل؟',
    },
    options: {
      en: [
        'The vector database is corrupted and needs to be rebuilt',
        'The LLM is hallucinating citations; add a verification step that cross-references generated citations against the retrieved documents',
        'Users are searching for the wrong papers',
        'The system needs a larger context window',
      ],
      ar: [
        'قاعدة البيانات المتجهية تالفة وتحتاج إعادة بناء',
        'نموذج اللغة يهلوس استشهادات؛ أضف خطوة تحقق تقاطع المراجع المولدة مع المستندات المسترجعة',
        'المستخدمون يبحثون عن الأوراق الخاطئة',
        'النظام يحتاج نافذة سياق أكبر',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'LLM hallucination of citations is a well-known problem. The model may generate plausible-sounding but non-existent paper titles and authors. The fix is to add a grounding verification step that checks every citation against the actual retrieved documents, only including citations that match real papers in the knowledge base.',
      ar: 'هلوسة الاستشهادات من نماذج اللغة مشكلة معروفة. قد يولّد النموذج عناوين أوراق وأسماء مؤلفين تبدو معقولة لكنها غير موجودة. الحل هو إضافة خطوة تحقق من التأسيس تفحص كل استشهاد مقابل المستندات المسترجعة فعليًا، وتضمّن فقط الاستشهادات التي تطابق أوراقًا حقيقية في قاعدة المعرفة.',
    },
    difficulty: 'advanced',
    category: 'advanced-rag',
  },
  {
    id: 'q104',
    type: 'scenario',
    question: {
      en: 'Your company\'s customer service AI agent has access to order management, refund processing, and account deletion tools. A prompt injection attack attempts to make the agent delete all customer accounts. What layered defense would best protect against this?',
      ar: 'وكيل خدمة العملاء بالذكاء الاصطناعي في شركتك لديه وصول لأدوات إدارة الطلبات ومعالجة المبالغ المستردة وحذف الحسابات. يحاول هجوم حقن أوامر جعل الوكيل يحذف جميع حسابات العملاء. ما هو الدفاع متعدد الطبقات الأفضل للحماية من هذا؟',
    },
    options: {
      en: [
        'Simply tell the agent not to follow malicious instructions in the system prompt',
        'Remove all tools from the agent so it cannot do anything',
        'Combine input validation guardrails, tool-level authorization checks, rate limiting on destructive operations, and mandatory human approval for bulk actions',
        'Switch to a smaller, less capable model',
      ],
      ar: [
        'ببساطة أخبر الوكيل ألا يتبع التعليمات الخبيثة في أمر النظام',
        'إزالة جميع الأدوات من الوكيل حتى لا يستطيع فعل أي شيء',
        'الجمع بين حواجز التحقق من المدخلات وفحوصات التفويض على مستوى الأداة وتحديد معدل العمليات التدميرية والموافقة البشرية الإلزامية للإجراءات الجماعية',
        'التحول إلى نموذج أصغر وأقل قدرة',
      ],
    },
    correctAnswer: 2,
    explanation: {
      en: 'Defense in depth is essential for AI agent security. No single layer is sufficient. Input guardrails detect and filter injection attempts, tool-level authorization ensures the agent can only delete one account at a time (not bulk), rate limiting prevents rapid repeated destructive actions, and human-in-the-loop approval catches anything that slips through automated defenses.',
      ar: 'الدفاع في العمق ضروري لأمان وكلاء الذكاء الاصطناعي. لا تكفي طبقة واحدة. تكتشف حواجز المدخلات محاولات الحقن وتصفيها، ويضمن التفويض على مستوى الأداة أن الوكيل يمكنه حذف حساب واحد فقط في المرة (وليس جماعي)، ويمنع تحديد المعدل الإجراءات التدميرية المتكررة السريعة، وتلتقط الموافقة البشرية أي شيء يتسرب عبر الدفاعات الآلية.',
    },
    difficulty: 'advanced',
    category: 'ai-security',
  },
  {
    id: 'q105',
    type: 'scenario',
    question: {
      en: 'You need to build an agent that helps users analyze their personal financial data from bank statements (PDFs). The agent should extract transactions, categorize spending, and provide insights. Which architecture would you recommend?',
      ar: 'تحتاج لبناء وكيل يساعد المستخدمين في تحليل بياناتهم المالية الشخصية من كشوف الحسابات البنكية (ملفات PDF). يجب أن يستخرج الوكيل المعاملات ويصنف الإنفاق ويقدم رؤى. ما المعمارية التي توصي بها؟',
    },
    options: {
      en: [
        'Send all bank statements directly to a cloud LLM without any processing',
        'A pipeline with local PDF parsing, structured data extraction, on-device categorization, and LLM-powered insights with PII redaction before any cloud API calls',
        'Ask users to manually type all their transactions',
        'Use a single prompt that includes the entire PDF as text',
      ],
      ar: [
        'إرسال جميع كشوف الحسابات البنكية مباشرة إلى نموذج لغة سحابي بدون أي معالجة',
        'خط أنابيب مع تحليل PDF محلي واستخراج بيانات منظمة وتصنيف على الجهاز ورؤى مدعومة بنموذج اللغة مع تنقيح المعلومات الشخصية قبل أي استدعاءات سحابية',
        'مطالبة المستخدمين بكتابة جميع معاملاتهم يدويًا',
        'استخدام أمر واحد يتضمن ملف PDF بالكامل كنص',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Financial data requires careful privacy handling. The recommended architecture processes PDFs locally to extract structured transaction data, categorizes spending using local models or rules where possible, and only sends anonymized or aggregated data to cloud LLMs for generating insights. PII redaction before cloud calls protects sensitive account numbers and personal information.',
      ar: 'تتطلب البيانات المالية معالجة خصوصية دقيقة. المعمارية الموصى بها تعالج ملفات PDF محليًا لاستخراج بيانات معاملات منظمة وتصنف الإنفاق باستخدام نماذج أو قواعد محلية حيث أمكن وترسل فقط بيانات مجهولة الهوية أو مجمّعة إلى نماذج اللغة السحابية لتوليد الرؤى. تنقيح المعلومات الشخصية قبل الاستدعاءات السحابية يحمي أرقام الحسابات الحساسة والمعلومات الشخصية.',
    },
    difficulty: 'advanced',
    category: 'agent-architectures',
  },
  {
    id: 'q106',
    type: 'scenario',
    question: {
      en: 'You are deploying an LLM-powered agent to production. During testing, you notice that the agent occasionally enters infinite tool-calling loops, repeatedly calling the same API. What is the best mitigation strategy?',
      ar: 'أنت تنشر وكيلاً مدعومًا بنموذج لغة كبير في الإنتاج. أثناء الاختبار، تلاحظ أن الوكيل يدخل أحيانًا في حلقات استدعاء أدوات لا نهائية، يستدعي نفس واجهة البرمجة بشكل متكرر. ما هي أفضل استراتيجية تخفيف؟',
    },
    options: {
      en: [
        'Increase the timeout to let the loop eventually resolve itself',
        'Implement a maximum iteration limit, detect repeated identical calls, add circuit breakers, and set per-session cost caps',
        'Remove all tools so loops cannot happen',
        'Ignore the issue since it only happens occasionally',
      ],
      ar: [
        'زيادة مهلة الانتظار للسماح للحلقة بحل نفسها في النهاية',
        'تنفيذ حد أقصى للتكرارات واكتشاف الاستدعاءات المتكررة المتطابقة وإضافة قواطع دائرة ووضع حدود تكلفة لكل جلسة',
        'إزالة جميع الأدوات حتى لا تحدث حلقات',
        'تجاهل المشكلة لأنها تحدث أحيانًا فقط',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Agent loops are a critical production concern. The best approach combines multiple safeguards: a hard cap on maximum iterations per run, detection of repeated identical tool calls (which indicates a loop), circuit breakers that stop execution when error rates spike, and per-session cost limits that prevent runaway API spending. These should be combined with alerting and logging for post-incident analysis.',
      ar: 'حلقات الوكيل مصدر قلق حرج في الإنتاج. أفضل نهج يجمع بين حمايات متعددة: حد أقصى صارم على التكرارات لكل تشغيل واكتشاف استدعاءات الأدوات المتكررة المتطابقة (التي تشير إلى حلقة) وقواطع دائرة توقف التنفيذ عند ارتفاع معدلات الأخطاء وحدود تكلفة لكل جلسة تمنع الإنفاق الجامح على واجهة البرمجة. يجب الجمع بينها مع التنبيه والتسجيل لتحليل ما بعد الحادث.',
    },
    difficulty: 'advanced',
    category: 'production-llmops',
  },
  {
    id: 'q107',
    type: 'scenario',
    question: {
      en: 'A healthcare startup wants to build an AI agent that assists radiologists by analyzing medical images and generating preliminary reports. What is the most critical requirement for this system?',
      ar: 'تريد شركة ناشئة في مجال الرعاية الصحية بناء وكيل ذكاء اصطناعي يساعد أخصائيي الأشعة بتحليل الصور الطبية وتوليد تقارير أولية. ما هو المتطلب الأكثر أهمية لهذا النظام؟',
    },
    options: {
      en: [
        'Processing images as fast as possible',
        'Ensuring the system clearly marks outputs as preliminary, maintains high sensitivity for detecting abnormalities, requires radiologist verification, and complies with medical device regulations',
        'Using the latest and most expensive AI model',
        'Making the interface look modern and appealing',
      ],
      ar: [
        'معالجة الصور بأسرع ما يمكن',
        'ضمان أن النظام يُعلّم المخرجات بوضوح كأولية ويحافظ على حساسية عالية لاكتشاف الشذوذات ويتطلب تحقق أخصائي الأشعة ويمتثل لأنظمة الأجهزة الطبية',
        'استخدام أحدث وأغلى نموذج ذكاء اصطناعي',
        'جعل الواجهة تبدو حديثة وجذابة',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Medical AI systems have life-safety implications. The agent must clearly label all outputs as preliminary assessments requiring radiologist review, prioritize sensitivity (catching all abnormalities even at the cost of more false positives), maintain audit trails for every analysis, comply with regulations like FDA clearance and HIPAA, and never be positioned as a replacement for qualified medical professionals.',
      ar: 'لأنظمة الذكاء الاصطناعي الطبية آثار على سلامة الحياة. يجب أن يُعلّم الوكيل بوضوح جميع المخرجات كتقييمات أولية تتطلب مراجعة أخصائي الأشعة ويعطي الأولوية للحساسية (اكتشاف جميع الشذوذات حتى على حساب المزيد من الإيجابيات الكاذبة) ويحافظ على مسارات تدقيق لكل تحليل ويمتثل للوائح مثل موافقة FDA و HIPAA ولا يُقدم أبدًا كبديل للمتخصصين الطبيين المؤهلين.',
    },
    difficulty: 'advanced',
    category: 'industry-applications',
  },
  {
    id: 'q108',
    type: 'scenario',
    question: {
      en: 'You are designing a CrewAI-based content marketing system with a researcher agent, writer agent, and editor agent. The researcher should gather information, the writer should create articles, and the editor should polish them. What process type and task flow would you use?',
      ar: 'أنت تصمم نظام تسويق محتوى مبني على CrewAI مع وكيل باحث ووكيل كاتب ووكيل محرر. يجب أن يجمع الباحث المعلومات والكاتب يكتب المقالات والمحرر يصقلها. ما نوع العملية وتدفق المهام الذي ستستخدمه؟',
    },
    options: {
      en: [
        'Parallel process where all agents work simultaneously on the same task',
        'Sequential process: research task first, then writing task using research output as context, then editing task using the draft as context',
        'Let each agent work independently and concatenate their outputs',
        'Only use the writer agent and skip research and editing',
      ],
      ar: [
        'عملية متوازية حيث تعمل جميع الوكلاء في وقت واحد على نفس المهمة',
        'عملية تتابعية: مهمة البحث أولاً، ثم مهمة الكتابة باستخدام مخرجات البحث كسياق، ثم مهمة التحرير باستخدام المسودة كسياق',
        'ترك كل وكيل يعمل بشكل مستقل ودمج مخرجاتهم',
        'استخدام وكيل الكاتب فقط وتخطي البحث والتحرير',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A sequential process is ideal here because each step depends on the previous one. The researcher first gathers relevant information, which flows as context to the writer who creates the article draft. The editor then receives the draft and polishes it. CrewAI\'s sequential process naturally passes each task\'s output as context to the next task in the pipeline.',
      ar: 'العملية التتابعية مثالية هنا لأن كل خطوة تعتمد على السابقة. يجمع الباحث أولاً المعلومات ذات الصلة التي تتدفق كسياق للكاتب الذي يكتب مسودة المقال. ثم يستقبل المحرر المسودة ويصقلها. تمرر العملية التتابعية في CrewAI بشكل طبيعي مخرجات كل مهمة كسياق للمهمة التالية في خط الأنابيب.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-crewai',
  },
  {
    id: 'q109',
    type: 'scenario',
    question: {
      en: 'Your RAG system retrieves relevant documents but the LLM\'s answers are often too generic and don\'t use the specific details from the retrieved context. What technique would most likely improve the answer quality?',
      ar: 'يسترجع نظام RAG الخاص بك مستندات ذات صلة لكن إجابات نموذج اللغة غالبًا ما تكون عامة جدًا ولا تستخدم التفاصيل المحددة من السياق المسترجع. ما التقنية التي ستحسّن جودة الإجابات على الأرجح؟',
    },
    options: {
      en: [
        'Increase the number of retrieved documents to 100',
        'Improve the prompt to explicitly instruct the LLM to cite and reference specific information from the provided context, and consider using a more capable model',
        'Remove the retrieval step entirely',
        'Decrease the temperature to 0',
      ],
      ar: [
        'زيادة عدد المستندات المسترجعة إلى 100',
        'تحسين الأمر لتوجيه نموذج اللغة صراحة للاستشهاد بمعلومات محددة من السياق المقدم والإشارة إليها، والنظر في استخدام نموذج أكثر قدرة',
        'إزالة خطوة الاسترجاع بالكامل',
        'خفض الحرارة إلى 0',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'When the LLM ignores retrieved context, the solution is to improve the generation prompt. Explicitly instruct the model to base its answer on the provided documents, quote specific passages, and avoid using knowledge outside the context. Using a more capable model can also help with context adherence. Simply adding more documents can actually worsen the problem by diluting relevant information.',
      ar: 'عندما يتجاهل نموذج اللغة السياق المسترجع، الحل هو تحسين أمر التوليد. وجّه النموذج صراحة لبناء إجابته على المستندات المقدمة واقتباس مقاطع محددة وتجنب استخدام معرفة خارج السياق. استخدام نموذج أكثر قدرة يمكن أن يساعد أيضًا في الالتزام بالسياق. ببساطة إضافة المزيد من المستندات يمكن أن يزيد المشكلة بتخفيف المعلومات ذات الصلة.',
    },
    difficulty: 'intermediate',
    category: 'prompt-engineering',
  },
  {
    id: 'q110',
    type: 'scenario',
    question: {
      en: 'You are evaluating two different LLMs for a production agent. Model A scores 95% on benchmarks but costs $0.03 per request and has 500ms latency. Model B scores 88% on benchmarks but costs $0.003 per request and has 100ms latency. The agent handles 10 million requests per month. What approach should you take?',
      ar: 'أنت تقيّم نموذجي لغة مختلفين لوكيل إنتاج. النموذج A يحقق 95% في المعايير لكن يكلف $0.03 لكل طلب وزمن استجابة 500 مللي ثانية. النموذج B يحقق 88% في المعايير لكن يكلف $0.003 لكل طلب وزمن استجابة 100 مللي ثانية. يتعامل الوكيل مع 10 مليون طلب شهريًا. ما النهج الذي يجب اتباعه؟',
    },
    options: {
      en: [
        'Always use Model A since it has higher benchmark scores',
        'Always use Model B since it is cheaper',
        'Use a routing strategy: Model B for simple queries and Model A for complex ones, optimizing the cost-quality tradeoff based on query classification',
        'Use both models simultaneously and pick the better response',
      ],
      ar: [
        'استخدام النموذج A دائمًا لأن درجاته المعيارية أعلى',
        'استخدام النموذج B دائمًا لأنه أرخص',
        'استخدام استراتيجية توجيه: النموذج B للاستعلامات البسيطة والنموذج A للمعقدة، مع تحسين مفاضلة التكلفة والجودة بناءً على تصنيف الاستعلام',
        'استخدام كلا النموذجين في وقت واحد واختيار الاستجابة الأفضل',
      ],
    },
    correctAnswer: 2,
    explanation: {
      en: 'Model routing is a production best practice that balances cost and quality. A classifier determines query complexity: simple questions (which might be 70-80% of traffic) go to the faster, cheaper Model B, while complex queries requiring deeper reasoning go to Model A. At 10M requests/month, this could save $200K+ monthly while maintaining quality where it matters most.',
      ar: 'توجيه النماذج هو أفضل ممارسة إنتاجية توازن بين التكلفة والجودة. يحدد مصنّف تعقيد الاستعلام: الأسئلة البسيطة (التي قد تشكل 70-80% من الحركة) تذهب للنموذج B الأسرع والأرخص، بينما الاستعلامات المعقدة التي تتطلب استدلالاً أعمق تذهب للنموذج A. عند 10 مليون طلب/شهر، يمكن أن يوفر هذا أكثر من $200 ألف شهريًا مع الحفاظ على الجودة حيث تكون أكثر أهمية.',
    },
    difficulty: 'advanced',
    category: 'production-llmops',
  },
  {
    id: 'q111',
    type: 'scenario',
    question: {
      en: 'You are building a Semantic Kernel application that needs to manage a user\'s calendar. The AI should be able to create events, find free time slots, and send invitations. How would you structure the plugins?',
      ar: 'أنت تبني تطبيق Semantic Kernel يحتاج لإدارة تقويم المستخدم. يجب أن يكون الذكاء الاصطناعي قادرًا على إنشاء الأحداث والعثور على فترات زمنية فارغة وإرسال الدعوات. كيف ستنظم المكوّنات الإضافية؟',
    },
    options: {
      en: [
        'Put everything in one massive function',
        'Create a CalendarPlugin with separate functions for CreateEvent, FindFreeSlots, and SendInvitation, each with clearly typed parameters and descriptions',
        'Use only prompt-based functions without any native code',
        'Hard-code all calendar operations without using plugins',
      ],
      ar: [
        'وضع كل شيء في دالة واحدة ضخمة',
        'إنشاء CalendarPlugin بدوال منفصلة لـ CreateEvent و FindFreeSlots و SendInvitation، كل منها بمعاملات محددة الأنواع وأوصاف واضحة',
        'استخدام دوال مبنية على الأوامر فقط بدون أي كود أصلي',
        'ترميز جميع عمليات التقويم بشكل ثابت بدون استخدام مكوّنات إضافية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The best practice in Semantic Kernel is to create a well-structured plugin with granular functions. Each function (CreateEvent, FindFreeSlots, SendInvitation) should have descriptive names, typed parameters with documentation, and clear return types. This allows the AI to understand each capability and invoke the right function with correct parameters through automatic function calling.',
      ar: 'أفضل ممارسة في Semantic Kernel هي إنشاء مكوّن إضافي منظم جيدًا بدوال تفصيلية. كل دالة (CreateEvent و FindFreeSlots و SendInvitation) يجب أن يكون لها أسماء وصفية ومعاملات محددة الأنواع مع توثيق وأنواع إرجاع واضحة. يسمح ذلك للذكاء الاصطناعي بفهم كل قدرة واستدعاء الدالة الصحيحة بالمعاملات الصحيحة من خلال استدعاء الدوال التلقائي.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-semantic-kernel',
  },
  {
    id: 'q112',
    type: 'scenario',
    question: {
      en: 'An e-commerce company wants to build a voice AI shopping assistant. The assistant should understand spoken product queries, search the catalog, recommend items, and process orders by voice. What is the biggest technical challenge?',
      ar: 'تريد شركة تجارة إلكترونية بناء مساعد تسوق صوتي بالذكاء الاصطناعي. يجب أن يفهم المساعد استعلامات المنتجات المنطوقة ويبحث في الكتالوج ويوصي بالعناصر ويعالج الطلبات صوتيًا. ما هو أكبر تحدٍ تقني؟',
    },
    options: {
      en: [
        'Making the voice sound robotic and mechanical',
        'Managing end-to-end latency across STT, LLM processing, tool calls, and TTS to maintain a natural conversational flow under 2 seconds total response time',
        'Finding a microphone that works with the system',
        'Training the model on product images',
      ],
      ar: [
        'جعل الصوت يبدو آليًا وميكانيكيًا',
        'إدارة زمن الاستجابة الشامل عبر تحويل الكلام إلى نص ومعالجة نموذج اللغة واستدعاءات الأدوات وتحويل النص إلى كلام للحفاظ على تدفق محادثة طبيعي بأقل من ثانيتين إجمالي وقت الاستجابة',
        'إيجاد ميكروفون يعمل مع النظام',
        'تدريب النموذج على صور المنتجات',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Voice AI latency is the biggest challenge because each stage adds delay: STT (200-500ms), LLM processing (500-2000ms), tool calls for catalog search (100-500ms), and TTS (200-500ms). Keeping total response time under 2 seconds requires streaming at every stage, efficient model selection, caching, and techniques like speculative execution and pre-computed TTS for common phrases.',
      ar: 'زمن استجابة الذكاء الاصطناعي الصوتي هو أكبر تحدٍ لأن كل مرحلة تضيف تأخيرًا: تحويل الكلام إلى نص (200-500 مللي ثانية)، ومعالجة نموذج اللغة (500-2000 مللي ثانية)، واستدعاءات الأدوات للبحث في الكتالوج (100-500 مللي ثانية)، وتحويل النص إلى كلام (200-500 مللي ثانية). الحفاظ على إجمالي وقت الاستجابة أقل من ثانيتين يتطلب البث في كل مرحلة واختيار النموذج الفعال والتخزين المؤقت وتقنيات مثل التنفيذ التخميني وتحويل النص إلى كلام المحسوب مسبقًا للعبارات الشائعة.',
    },
    difficulty: 'advanced',
    category: 'voice-ai',
  },
  {
    id: 'q113',
    type: 'scenario',
    question: {
      en: 'You are building a knowledge management agent using LlamaIndex that needs to query both a vector database of company documents and a SQL database of structured business data. How should you architect this?',
      ar: 'أنت تبني وكيل إدارة معرفة باستخدام LlamaIndex يحتاج للاستعلام من قاعدة بيانات متجهية لمستندات الشركة وقاعدة بيانات SQL للبيانات التجارية المنظمة. كيف يجب تصميم هذا؟',
    },
    options: {
      en: [
        'Only use the vector database and ignore structured data',
        'Create separate query engines for each data source and wrap them as tools for a LlamaIndex agent that can route queries to the appropriate engine',
        'Dump all SQL data into the vector database',
        'Build two completely separate applications',
      ],
      ar: [
        'استخدام قاعدة البيانات المتجهية فقط وتجاهل البيانات المنظمة',
        'إنشاء محركات استعلام منفصلة لكل مصدر بيانات وتغليفها كأدوات لوكيل LlamaIndex يمكنه توجيه الاستعلامات إلى المحرك المناسب',
        'تفريغ جميع بيانات SQL في قاعدة البيانات المتجهية',
        'بناء تطبيقين منفصلين تمامًا',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'LlamaIndex supports building agents with multiple query engine tools. Create a VectorStoreIndex query engine for documents and a SQL query engine for structured data, each wrapped as a tool with a clear description. The agent analyzes each user query and routes it to the appropriate engine, or queries both when the answer requires combining unstructured and structured data.',
      ar: 'يدعم LlamaIndex بناء وكلاء بأدوات محركات استعلام متعددة. أنشئ محرك استعلام VectorStoreIndex للمستندات ومحرك استعلام SQL للبيانات المنظمة، كل منهما مغلف كأداة بوصف واضح. يحلل الوكيل كل استعلام مستخدم ويوجهه إلى المحرك المناسب، أو يستعلم من كليهما عندما تتطلب الإجابة دمج البيانات غير المنظمة والمنظمة.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-llamaindex',
  },
  {
    id: 'q114',
    type: 'scenario',
    question: {
      en: 'A team is using RLHF to align their customer service LLM. They notice the model has become excessively verbose and apologetic after training. What is the likely issue and how should they address it?',
      ar: 'يستخدم فريق RLHF لمواءمة نموذج اللغة لخدمة العملاء. يلاحظون أن النموذج أصبح مفرط الإسهاب والاعتذار بعد التدريب. ما هي المشكلة المحتملة وكيف يجب معالجتها؟',
    },
    options: {
      en: [
        'The model needs more training data',
        'Reward model bias: human annotators likely preferred longer, more cautious responses, causing the model to optimize for verbosity rather than helpfulness; retrain with more balanced preference data and add length penalties',
        'The base model is defective and needs to be replaced',
        'The problem will resolve itself with more training',
      ],
      ar: [
        'النموذج يحتاج المزيد من بيانات التدريب',
        'تحيز نموذج المكافأة: المعلقون البشريون فضلوا على الأرجح استجابات أطول وأكثر حذرًا، مما جعل النموذج يحسّن من أجل الإسهاب بدلاً من الفائدة؛ أعد التدريب ببيانات تفضيل أكثر توازنًا وأضف عقوبات على الطول',
        'النموذج الأساسي معيب ويحتاج استبداله',
        'ستحل المشكلة نفسها مع المزيد من التدريب',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'This is a classic reward hacking problem in RLHF. Human annotators often have a verbosity bias, preferring longer responses. The model learns to exploit this by being excessively wordy and cautious. Solutions include retraining the reward model with explicit instructions to penalize unnecessary verbosity, adding length normalization, using preference data that specifically rewards concise helpful answers, and potentially using DPO for more stable optimization.',
      ar: 'هذه مشكلة كلاسيكية لاستغلال المكافأة في RLHF. غالبًا ما يكون لدى المعلقين البشريين تحيز نحو الإسهاب ويفضلون استجابات أطول. يتعلم النموذج استغلال ذلك بالإفراط في الإسهاب والحذر. تشمل الحلول إعادة تدريب نموذج المكافأة بتعليمات صريحة لمعاقبة الإسهاب غير الضروري وإضافة تطبيع الطول واستخدام بيانات تفضيل تكافئ تحديدًا الإجابات المختصرة المفيدة وربما استخدام DPO لتحسين أكثر استقرارًا.',
    },
    difficulty: 'advanced',
    category: 'reinforcement-learning',
  },
  {
    id: 'q115',
    type: 'scenario',
    question: {
      en: 'You are tasked with implementing a customer support triage system using the OpenAI Agents SDK. Incoming requests should be classified and routed to either a billing agent, technical support agent, or general inquiry agent. What is the most effective architecture?',
      ar: 'كُلّفت بتنفيذ نظام فرز دعم العملاء باستخدام حزمة تطوير وكلاء OpenAI. يجب تصنيف الطلبات الواردة وتوجيهها إلى وكيل الفوترة أو وكيل الدعم الفني أو وكيل الاستفسارات العامة. ما هي المعمارية الأكثر فعالية؟',
    },
    options: {
      en: [
        'Use a single agent that handles all types of requests',
        'Create a triage agent with handoffs to specialized agents: the triage agent classifies the request and transfers to the appropriate specialist using the handoff mechanism',
        'Build three separate applications with no connection between them',
        'Let the user manually select which agent they want to talk to',
      ],
      ar: [
        'استخدام وكيل واحد يتعامل مع جميع أنواع الطلبات',
        'إنشاء وكيل فرز بتسليمات إلى وكلاء متخصصين: يصنف وكيل الفرز الطلب وينقله إلى المتخصص المناسب باستخدام آلية التسليم',
        'بناء ثلاثة تطبيقات منفصلة بدون اتصال بينها',
        'ترك المستخدم يختار يدويًا الوكيل الذي يريد التحدث إليه',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'The OpenAI Agents SDK\'s handoff mechanism is designed exactly for this use case. A triage agent with clear instructions analyzes the incoming request and uses handoffs to transfer the conversation to the appropriate specialized agent (billing, technical, or general). Each specialized agent has its own tools, instructions, and guardrails optimized for its domain, while the handoff preserves full conversation context.',
      ar: 'آلية التسليم في حزمة تطوير وكلاء OpenAI مصممة بالضبط لحالة الاستخدام هذه. يحلل وكيل فرز بتعليمات واضحة الطلب الوارد ويستخدم التسليمات لنقل المحادثة إلى الوكيل المتخصص المناسب (الفوترة أو الفني أو العام). كل وكيل متخصص لديه أدواته وتعليماته وحواجزه الأمنية المحسّنة لمجاله، بينما يحافظ التسليم على سياق المحادثة الكامل.',
    },
    difficulty: 'intermediate',
    category: 'frameworks-openai-agents',
  },
  {
    id: 'q116',
    type: 'scenario',
    question: {
      en: 'You need to build an agent that can answer questions about a large codebase (500+ files). The agent should understand code structure, find relevant implementations, and explain complex logic. What combination of techniques would work best?',
      ar: 'تحتاج لبناء وكيل يمكنه الإجابة على أسئلة حول قاعدة كود كبيرة (أكثر من 500 ملف). يجب أن يفهم الوكيل هيكل الكود ويجد التطبيقات ذات الصلة ويشرح المنطق المعقد. ما مجموعة التقنيات الأفضل؟',
    },
    options: {
      en: [
        'Load all 500 files into the context window',
        'Combine code-aware embeddings for semantic search, AST-based code indexing for structural queries, and a knowledge graph of code dependencies to provide comprehensive codebase understanding',
        'Only search by file names',
        'Ask the developer to explain the code instead',
      ],
      ar: [
        'تحميل جميع الـ 500 ملف في نافذة السياق',
        'الجمع بين التضمينات المدركة للكود للبحث الدلالي وفهرسة الكود المبنية على شجرة البنية النحوية للاستعلامات الهيكلية ورسم بياني معرفي لتبعيات الكود لتوفير فهم شامل لقاعدة الكود',
        'البحث بأسماء الملفات فقط',
        'مطالبة المطور بشرح الكود بدلاً من ذلك',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Understanding a large codebase requires multiple retrieval strategies. Code-aware embeddings capture semantic meaning of code snippets. AST-based indexing understands code structure (functions, classes, imports). A dependency graph maps relationships between modules. Together, these enable the agent to find relevant code through semantic search, understand call chains, and provide contextually rich explanations.',
      ar: 'فهم قاعدة كود كبيرة يتطلب استراتيجيات استرجاع متعددة. التضمينات المدركة للكود تلتقط المعنى الدلالي لمقتطفات الكود. الفهرسة المبنية على شجرة البنية النحوية تفهم هيكل الكود (الدوال والفئات والاستيرادات). رسم التبعيات البياني يعيّن العلاقات بين الوحدات. معًا، تمكّن هذه الوكيل من إيجاد الكود ذي الصلة من خلال البحث الدلالي وفهم سلاسل الاستدعاء وتقديم شروحات غنية بالسياق.',
    },
    difficulty: 'advanced',
    category: 'knowledge-representation',
  },
  {
    id: 'q117',
    type: 'scenario',
    question: {
      en: 'You are building an agent evaluation pipeline. The agent is a multi-step research assistant that searches the web, reads documents, and synthesizes reports. How should you evaluate it comprehensively?',
      ar: 'أنت تبني خط أنابيب تقييم وكيل. الوكيل هو مساعد بحث متعدد الخطوات يبحث في الويب ويقرأ المستندات ويجمّع التقارير. كيف يجب تقييمه بشكل شامل؟',
    },
    options: {
      en: [
        'Only check if the final report looks good',
        'Evaluate at multiple levels: individual tool call accuracy, retrieval relevance, intermediate reasoning quality, final output faithfulness and completeness, plus end-to-end task success rate',
        'Count the number of API calls made',
        'Only measure response time',
      ],
      ar: [
        'التحقق فقط مما إذا كان التقرير النهائي يبدو جيدًا',
        'التقييم على مستويات متعددة: دقة استدعاء الأدوات الفردية وصلة الاسترجاع وجودة الاستدلال الوسيط وأمانة واكتمال المخرجات النهائية بالإضافة إلى معدل نجاح المهمة الشامل',
        'حساب عدد استدعاءات واجهة البرمجة التي أُجريت',
        'قياس وقت الاستجابة فقط',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Comprehensive agent evaluation requires multi-level assessment. Component-level evaluation checks each tool call\'s correctness and each retrieval\'s relevance. Process-level evaluation examines reasoning quality and decision-making at each step. Output-level evaluation measures the final report\'s accuracy, faithfulness to sources, and completeness. End-to-end metrics track overall task success rates. This layered approach pinpoints exactly where failures occur.',
      ar: 'يتطلب التقييم الشامل للوكيل تقييمًا متعدد المستويات. تقييم مستوى المكونات يفحص صحة كل استدعاء أداة وصلة كل استرجاع. تقييم مستوى العملية يفحص جودة الاستدلال واتخاذ القرار في كل خطوة. تقييم مستوى المخرجات يقيس دقة التقرير النهائي وأمانته للمصادر واكتماله. المقاييس الشاملة تتتبع معدلات نجاح المهام الإجمالية. يحدد هذا النهج المتعدد الطبقات بالضبط أين تحدث حالات الفشل.',
    },
    difficulty: 'advanced',
    category: 'agent-evaluation',
  },
  {
    id: 'q118',
    type: 'scenario',
    question: {
      en: 'A multinational corporation wants to deploy an internal AI agent that helps employees across 15 countries with HR policies, IT support, and expense reporting. Each country has different policies and regulations. What is the most important architectural decision?',
      ar: 'تريد شركة متعددة الجنسيات نشر وكيل ذكاء اصطناعي داخلي يساعد الموظفين في 15 دولة بسياسات الموارد البشرية والدعم الفني وتقارير المصاريف. لكل دولة سياسات ولوائح مختلفة. ما هو أهم قرار معماري؟',
    },
    options: {
      en: [
        'Use a single global prompt with all countries\' policies combined',
        'Implement a context-aware routing system that identifies the employee\'s country and loads the relevant policy documents, regulations, and localized knowledge base into the agent\'s context',
        'Build 15 completely separate agents with no shared infrastructure',
        'Only support English and ignore local regulations',
      ],
      ar: [
        'استخدام أمر عالمي واحد يجمع سياسات جميع الدول',
        'تنفيذ نظام توجيه مدرك للسياق يحدد دولة الموظف ويحمّل مستندات السياسة ذات الصلة واللوائح وقاعدة المعرفة المحلية في سياق الوكيل',
        'بناء 15 وكيلاً منفصلاً تمامًا بدون بنية تحتية مشتركة',
        'دعم اللغة الإنجليزية فقط وتجاهل اللوائح المحلية',
      ],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Context-aware routing is the best approach. When an employee interacts with the agent, the system identifies their country from their profile, dynamically loads the relevant policy documents and regulations into the RAG context, applies the correct language preferences, and ensures compliance with local data privacy laws. This balances scalability (shared infrastructure) with localization (country-specific knowledge).',
      ar: 'التوجيه المدرك للسياق هو أفضل نهج. عندما يتفاعل موظف مع الوكيل، يحدد النظام دولته من ملفه الشخصي ويحمّل ديناميكيًا مستندات السياسة واللوائح ذات الصلة في سياق RAG ويطبق تفضيلات اللغة الصحيحة ويضمن الامتثال لقوانين خصوصية البيانات المحلية. يوازن هذا بين قابلية التوسع (البنية التحتية المشتركة) والتوطين (المعرفة الخاصة بالدولة).',
    },
    difficulty: 'advanced',
    category: 'human-ai-interaction',
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.difficulty === difficulty);
}
