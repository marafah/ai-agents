import type { LessonContentData } from './content';

export const batch8Contents: Record<string, LessonContentData> = {
  // ─────────────────────────────────────────────
  // 1. CrewAI Introduction
  // ─────────────────────────────────────────────
  'crewai-introduction': {
    beginnerDefinition: {
      en: 'CrewAI is a Python framework that lets you create AI agents that work together like a team. Each agent has a specific role (like "Researcher" or "Writer"), receives tasks to complete, and collaborates with other agents inside a Crew to accomplish complex goals that a single agent could not handle alone.',
      ar: 'CrewAI هو إطار عمل بلغة بايثون يتيح لك إنشاء وكلاء ذكاء اصطناعي يعملون معاً كفريق. كل وكيل له دور محدد (مثل "باحث" أو "كاتب")، ويتلقى مهاماً لإنجازها، ويتعاون مع وكلاء آخرين داخل طاقم لتحقيق أهداف معقدة لا يستطيع وكيل واحد التعامل معها بمفرده.',
    },
    technicalDefinition: {
      en: 'CrewAI is an open-source multi-agent orchestration framework built on top of LangChain that implements a role-based agent architecture. It provides three core abstractions: Agents (autonomous units with defined roles, goals, backstories, and optional tool access), Tasks (discrete units of work with descriptions, expected outputs, and agent assignments), and Crews (orchestration containers that manage agent collaboration through configurable process types such as sequential and hierarchical). CrewAI supports tool integration, memory systems, delegation between agents, and structured output parsing.',
      ar: 'CrewAI هو إطار عمل مفتوح المصدر لتنسيق الوكلاء المتعددين مبني فوق LangChain ينفذ بنية وكلاء قائمة على الأدوار. يوفر ثلاثة تجريدات أساسية: الوكلاء (وحدات مستقلة بأدوار وأهداف وقصص خلفية محددة ووصول اختياري للأدوات)، والمهام (وحدات عمل منفصلة بأوصاف ومخرجات متوقعة وتعيينات للوكلاء)، والأطقم (حاويات تنسيق تدير تعاون الوكلاء عبر أنواع عمليات قابلة للتكوين مثل التسلسلي والهرمي). يدعم CrewAI تكامل الأدوات وأنظمة الذاكرة والتفويض بين الوكلاء وتحليل المخرجات المنظمة.',
    },
    analogy: {
      en: 'Imagine you are running a small magazine. You have a researcher who finds stories, a journalist who writes articles, and an editor who polishes the final text. Each person has a clear role, knows what they are good at, and passes their work to the next person. CrewAI works exactly the same way: you define each agent\'s role and backstory, assign them tasks, and the Crew coordinates who works on what and in which order, just like a managing editor running the magazine.',
      ar: 'تخيل أنك تدير مجلة صغيرة. لديك باحث يجد القصص، وصحفي يكتب المقالات، ومحرر يصقل النص النهائي. كل شخص له دور واضح، ويعرف ما يجيده، ويمرر عمله إلى الشخص التالي. CrewAI يعمل بنفس الطريقة تماماً: تحدد دور كل وكيل وقصته الخلفية، وتسند إليهم مهاماً، ويقوم الطاقم بتنسيق من يعمل على ماذا وبأي ترتيب، تماماً مثل رئيس التحرير الذي يدير المجلة.',
    },
    explanation: {
      en: [
        'CrewAI was created to simplify the process of building multi-agent AI systems. Instead of writing complex orchestration logic yourself, you describe your agents in natural language terms (role, goal, backstory) and let the framework handle the coordination. This role-based design makes it intuitive: you think in terms of team members rather than code modules.',
        'An Agent in CrewAI is defined by its role (what it does), goal (what it tries to achieve), and backstory (context that shapes its behavior). For example, a "Senior Data Analyst" agent might have the goal "Produce accurate insights from raw data" and a backstory describing years of experience in data science. The LLM uses these attributes to stay in character and produce role-appropriate outputs.',
        'A Task represents a specific piece of work to be completed. Each task has a description, an expected output format, and is assigned to a particular agent. Tasks can depend on each other, forming a pipeline where the output of one task becomes the input for the next. This is how CrewAI achieves complex multi-step workflows.',
        'A Crew is the top-level container that brings agents and tasks together. When you call crew.kickoff(), the framework executes the tasks according to the configured process type. In a sequential process, tasks run one after another. In a hierarchical process, a manager agent delegates work to other agents and synthesizes their results.',
        'CrewAI integrates with a rich ecosystem of tools. Agents can use search engines, file readers, web scrapers, code interpreters, and custom tools you define. Tools are assigned to agents, and the framework handles tool calling through the LLM\'s function-calling capabilities. This makes agents capable of interacting with external systems and data sources.',
        'Memory is another powerful feature. CrewAI supports short-term memory (within a single crew execution), long-term memory (across multiple runs), and entity memory (facts about specific entities). Memory allows agents to learn from past interactions and build on previous results, making the crew more effective over time.',
      ],
      ar: [
        'تم إنشاء CrewAI لتبسيط عملية بناء أنظمة الذكاء الاصطناعي متعددة الوكلاء. بدلاً من كتابة منطق تنسيق معقد بنفسك، تصف وكلاءك بمصطلحات اللغة الطبيعية (الدور، الهدف، القصة الخلفية) وتدع الإطار يتولى التنسيق. هذا التصميم القائم على الأدوار يجعله بديهياً: تفكر من حيث أعضاء الفريق بدلاً من وحدات الكود.',
        'يُعرَّف الوكيل في CrewAI بدوره (ماذا يفعل)، وهدفه (ما يحاول تحقيقه)، وقصته الخلفية (السياق الذي يشكل سلوكه). على سبيل المثال، وكيل "محلل بيانات أول" قد يكون هدفه "إنتاج رؤى دقيقة من البيانات الخام" وقصة خلفية تصف سنوات من الخبرة في علم البيانات. يستخدم نموذج اللغة هذه السمات للبقاء في الشخصية وإنتاج مخرجات مناسبة للدور.',
        'تمثل المهمة جزءاً محدداً من العمل المطلوب إنجازه. كل مهمة لها وصف وصيغة مخرجات متوقعة ومُسندة إلى وكيل معين. يمكن أن تعتمد المهام على بعضها البعض، مشكلة خط أنابيب حيث يصبح ناتج مهمة واحدة مدخلاً للمهمة التالية. هكذا يحقق CrewAI سير عمل معقد متعدد الخطوات.',
        'الطاقم هو الحاوية العليا التي تجمع الوكلاء والمهام معاً. عندما تستدعي crew.kickoff()، ينفذ الإطار المهام وفقاً لنوع العملية المكوّن. في العملية التسلسلية، تعمل المهام واحدة تلو الأخرى. في العملية الهرمية، يفوض وكيل مدير العمل إلى وكلاء آخرين ويجمع نتائجهم.',
        'يتكامل CrewAI مع منظومة غنية من الأدوات. يمكن للوكلاء استخدام محركات البحث وقارئات الملفات وكاشطات الويب ومفسرات الكود وأدوات مخصصة تحددها. تُسند الأدوات إلى الوكلاء، ويتولى الإطار استدعاء الأدوات عبر قدرات استدعاء الدوال في نموذج اللغة. هذا يجعل الوكلاء قادرين على التفاعل مع الأنظمة الخارجية ومصادر البيانات.',
        'الذاكرة ميزة قوية أخرى. يدعم CrewAI الذاكرة قصيرة المدى (ضمن تنفيذ طاقم واحد)، والذاكرة طويلة المدى (عبر عمليات تشغيل متعددة)، وذاكرة الكيانات (حقائق عن كيانات محددة). تسمح الذاكرة للوكلاء بالتعلم من التفاعلات السابقة والبناء على النتائج السابقة، مما يجعل الطاقم أكثر فعالية بمرور الوقت.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from crewai import Agent, Task, Crew, Process

# Define agents with roles and goals
researcher = Agent(
    role="Senior Research Analyst",
    goal="Find the latest breakthroughs in quantum computing",
    backstory="""You are a seasoned research analyst with 15 years
    of experience tracking emerging technologies. You excel at
    finding and synthesizing information from multiple sources.""",
    verbose=True,
    allow_delegation=False,
)

writer = Agent(
    role="Technical Content Writer",
    goal="Write an engaging summary of quantum computing advances",
    backstory="""You are an expert technical writer who translates
    complex scientific topics into clear, accessible content
    for a general audience.""",
    verbose=True,
    allow_delegation=False,
)

# Define tasks assigned to agents
research_task = Task(
    description="""Research the top 3 breakthroughs in quantum
    computing from the past year. For each breakthrough, identify
    the research team, the key innovation, and its potential impact.""",
    expected_output="A structured report with 3 breakthroughs, each with team, innovation, and impact.",
    agent=researcher,
)

writing_task = Task(
    description="""Using the research findings, write a compelling
    500-word article about quantum computing progress. Make it
    accessible to non-technical readers.""",
    expected_output="A polished 500-word article in markdown format.",
    agent=writer,
)

# Create and run the crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,  # Tasks run in order
    verbose=True,
)

result = crew.kickoff()
print(result)`,
      description: {
        en: 'A basic CrewAI setup with two agents (researcher and writer) collaborating sequentially. The researcher finds information, then the writer uses those findings to create an article.',
        ar: 'إعداد CrewAI أساسي مع وكيلين (باحث وكاتب) يتعاونان بشكل تسلسلي. يجد الباحث المعلومات، ثم يستخدم الكاتب تلك النتائج لإنشاء مقال.',
      },
    },
    commonMistakes: {
      en: [
        'Giving agents vague roles and goals, which leads to unfocused outputs. Each agent should have a specific, well-defined role like "Senior Data Analyst" rather than just "Analyst".',
        'Forgetting to set allow_delegation=False when agents should not pass work to others, causing unexpected delegation loops.',
        'Not defining expected_output on tasks, resulting in inconsistent or overly verbose agent responses that are hard for downstream tasks to consume.',
        'Creating too many agents for simple tasks. Start with 2-3 agents and add more only when a clear division of labor is needed.',
      ],
      ar: [
        'إعطاء الوكلاء أدواراً وأهدافاً غامضة مما يؤدي إلى مخرجات غير مركزة. يجب أن يكون لكل وكيل دور محدد ومعرّف جيداً مثل "محلل بيانات أول" بدلاً من مجرد "محلل".',
        'نسيان تعيين allow_delegation=False عندما لا يجب على الوكلاء تمرير العمل إلى الآخرين، مما يسبب حلقات تفويض غير متوقعة.',
        'عدم تحديد expected_output في المهام، مما يؤدي إلى ردود وكلاء غير متسقة أو مطولة بشكل مفرط يصعب على المهام اللاحقة استهلاكها.',
        'إنشاء عدد كبير جداً من الوكلاء لمهام بسيطة. ابدأ بـ 2-3 وكلاء وأضف المزيد فقط عند الحاجة لتقسيم واضح للعمل.',
      ],
    },
    bestPractices: {
      en: [
        'Write detailed backstories for each agent to give the LLM rich context that improves output quality. The more specific the backstory, the more focused the agent behavior.',
        'Use sequential process for simple pipelines and switch to hierarchical only when you need dynamic task delegation by a manager agent.',
        'Always define expected_output on every task to constrain agent responses and ensure compatibility between consecutive tasks in the pipeline.',
        'Test each agent independently before assembling them into a crew. Verify that individual agents produce quality output on their own.',
      ],
      ar: [
        'اكتب قصصاً خلفية مفصلة لكل وكيل لإعطاء نموذج اللغة سياقاً غنياً يحسن جودة المخرجات. كلما كانت القصة الخلفية أكثر تحديداً، كان سلوك الوكيل أكثر تركيزاً.',
        'استخدم العملية التسلسلية لخطوط الأنابيب البسيطة وانتقل إلى الهرمية فقط عندما تحتاج تفويض مهام ديناميكي بواسطة وكيل مدير.',
        'حدد دائماً expected_output لكل مهمة لتقييد ردود الوكلاء وضمان التوافق بين المهام المتتالية في خط الأنابيب.',
        'اختبر كل وكيل بشكل مستقل قبل تجميعهم في طاقم. تحقق من أن الوكلاء الفرديين ينتجون مخرجات عالية الجودة بمفردهم.',
      ],
    },
    references: [
      { title: 'CrewAI Official Documentation', url: 'https://docs.crewai.com/' },
      { title: 'CrewAI GitHub Repository', url: 'https://github.com/crewAIInc/crewAI' },
      { title: 'CrewAI Core Concepts', url: 'https://docs.crewai.com/concepts/' },
    ],
    quiz: [
      {
        id: 'batch8-q1',
        question: {
          en: 'What are the three core abstractions in CrewAI?',
          ar: 'ما هي التجريدات الأساسية الثلاثة في CrewAI؟',
        },
        options: {
          en: [
            'Models, Prompts, and Chains',
            'Agents, Tasks, and Crews',
            'Workers, Jobs, and Pipelines',
            'Nodes, Edges, and Graphs',
          ],
          ar: [
            'النماذج والمطالبات والسلاسل',
            'الوكلاء والمهام والأطقم',
            'العمال والوظائف وخطوط الأنابيب',
            'العقد والحواف والرسوم البيانية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'CrewAI is built around three core abstractions: Agents (role-based autonomous units), Tasks (discrete work items), and Crews (orchestration containers that coordinate agents and tasks).',
          ar: 'بُني CrewAI حول ثلاثة تجريدات أساسية: الوكلاء (وحدات مستقلة قائمة على الأدوار)، والمهام (وحدات عمل منفصلة)، والأطقم (حاويات تنسيق تنسق الوكلاء والمهام).',
        },
      },
      {
        id: 'batch8-q2',
        question: {
          en: 'Which attributes are required to define an Agent in CrewAI?',
          ar: 'ما هي السمات المطلوبة لتعريف وكيل في CrewAI؟',
        },
        options: {
          en: [
            'name, description, and temperature',
            'role, goal, and backstory',
            'model, prompt, and tools',
            'input, output, and processor',
          ],
          ar: [
            'الاسم والوصف ودرجة الحرارة',
            'الدور والهدف والقصة الخلفية',
            'النموذج والمطالبة والأدوات',
            'المدخل والمخرج والمعالج',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A CrewAI Agent is defined by its role (what it does), goal (what it aims to achieve), and backstory (context that shapes its behavior). These three attributes give the LLM the persona context it needs.',
          ar: 'يُعرَّف وكيل CrewAI بدوره (ماذا يفعل)، وهدفه (ما يهدف لتحقيقه)، وقصته الخلفية (السياق الذي يشكل سلوكه). توفر هذه السمات الثلاث لنموذج اللغة سياق الشخصية الذي يحتاجه.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. CrewAI Multi-Agent Teams
  // ─────────────────────────────────────────────
  'crewai-multi-agent-teams': {
    beginnerDefinition: {
      en: 'Building multi-agent teams with CrewAI means creating groups of specialized AI agents that collaborate on complex projects, just like a real-world team. You can set up pipelines where agents work one after another (sequential) or create a hierarchy where a manager agent delegates tasks to specialists (hierarchical).',
      ar: 'بناء فرق متعددة الوكلاء مع CrewAI يعني إنشاء مجموعات من وكلاء الذكاء الاصطناعي المتخصصين الذين يتعاونون في مشاريع معقدة، تماماً مثل فريق في العالم الحقيقي. يمكنك إعداد خطوط أنابيب حيث يعمل الوكلاء واحداً تلو الآخر (تسلسلي) أو إنشاء هرمية حيث يفوض وكيل مدير المهام إلى المتخصصين (هرمي).',
    },
    technicalDefinition: {
      en: 'CrewAI multi-agent teams leverage configurable process orchestration to coordinate agent collaboration. The sequential process executes tasks in a linear chain where each task\'s output context flows to the next agent. The hierarchical process introduces a manager agent (powered by a capable LLM) that dynamically delegates tasks, reviews outputs, and synthesizes final results. Advanced features include inter-agent delegation, task callbacks, output validators using Pydantic models, conditional task execution, asynchronous task execution, and crew-level memory that persists context across the entire execution pipeline.',
      ar: 'تستفيد فرق CrewAI متعددة الوكلاء من تنسيق العمليات القابل للتكوين لتنسيق تعاون الوكلاء. تنفذ العملية التسلسلية المهام في سلسلة خطية حيث يتدفق سياق مخرجات كل مهمة إلى الوكيل التالي. تقدم العملية الهرمية وكيل مدير (مدعوم بنموذج لغة قادر) يفوض المهام ديناميكياً ويراجع المخرجات ويجمع النتائج النهائية. تشمل الميزات المتقدمة التفويض بين الوكلاء واستدعاءات المهام ومدققات المخرجات باستخدام نماذج Pydantic والتنفيذ الشرطي للمهام والتنفيذ غير المتزامن للمهام وذاكرة على مستوى الطاقم تحافظ على السياق عبر خط التنفيذ بالكامل.',
    },
    analogy: {
      en: 'Think of two ways a film crew can work. In the sequential approach, it is like an assembly line: the screenwriter finishes the script, hands it to the director who plans the shots, then the cinematographer films scenes, and finally the editor assembles the movie. Each person waits for the previous one to finish. In the hierarchical approach, it is like a producer overseeing the whole project: the producer reads the brief, decides which specialists to assign, reviews their work, asks for revisions, and assembles the final product. CrewAI lets you choose either approach or mix them.',
      ar: 'فكر في طريقتين يمكن لطاقم فيلم العمل بهما. في النهج التسلسلي، يشبه خط التجميع: يُنهي كاتب السيناريو النص، ويسلمه للمخرج الذي يخطط اللقطات، ثم يصور المصور السينمائي المشاهد، وأخيراً يجمع المونتير الفيلم. كل شخص ينتظر انتهاء السابق. في النهج الهرمي، يشبه منتجاً يشرف على المشروع بالكامل: يقرأ المنتج الملخص، ويقرر أي المتخصصين يكلف، ويراجع عملهم، ويطلب تعديلات، ويجمع المنتج النهائي. CrewAI يتيح لك اختيار أي نهج أو المزج بينهما.',
    },
    explanation: {
      en: [
        'The sequential process is the simplest way to orchestrate a CrewAI team. Tasks are executed in the order they appear in the tasks list. The output of each task is automatically passed as context to the next task. This works well when your workflow is a clear pipeline: gather data, analyze it, then write a report. Each agent focuses on its specialty and builds on the previous agent\'s work.',
        'The hierarchical process adds a management layer. A manager agent (which you can customize or let CrewAI auto-create) receives all the tasks and decides how to delegate them. The manager can assign tasks to agents, review their outputs, request revisions, and compile the final result. This is ideal when the optimal task order is not known in advance or when tasks need dynamic coordination.',
        'Inter-agent delegation is a powerful feature where agents can voluntarily pass subtasks to other agents they think are better suited. When allow_delegation=True, an agent can ask another agent for help on a specific part of its task. This mimics how real teams work: a researcher might ask a data analyst to verify statistics before including them in a report.',
        'Structured outputs using Pydantic models ensure that agent outputs conform to a specific schema. You define a Pydantic model for your expected output and assign it to the task. CrewAI instructs the agent to produce output matching that schema and validates it automatically. This is critical for building reliable pipelines where downstream tasks depend on specific data formats.',
        'Task callbacks and hooks let you inject custom logic at various points in the execution pipeline. You can define functions that run after a task completes (for logging, validation, or side effects), before a task starts (for setup), or when errors occur. This gives you fine-grained control over the crew execution without modifying agent logic.',
        'Crew-level memory enables agents to share knowledge across the entire execution. Short-term memory keeps context within a single run, while long-term memory persists across multiple runs using storage backends. Entity memory tracks facts about specific entities mentioned during execution. Combined, these memory types make crews more coherent and capable of learning from experience.',
      ],
      ar: [
        'العملية التسلسلية هي أبسط طريقة لتنسيق فريق CrewAI. تُنفَّذ المهام بالترتيب الذي تظهر به في قائمة المهام. يُمرَّر ناتج كل مهمة تلقائياً كسياق للمهمة التالية. يعمل هذا جيداً عندما يكون سير عملك خط أنابيب واضحاً: جمع البيانات، تحليلها، ثم كتابة تقرير. يركز كل وكيل على تخصصه ويبني على عمل الوكيل السابق.',
        'تضيف العملية الهرمية طبقة إدارية. وكيل مدير (يمكنك تخصيصه أو ترك CrewAI ينشئه تلقائياً) يستقبل جميع المهام ويقرر كيفية تفويضها. يمكن للمدير تعيين مهام للوكلاء ومراجعة مخرجاتهم وطلب تعديلات وتجميع النتيجة النهائية. هذا مثالي عندما لا يكون ترتيب المهام الأمثل معروفاً مسبقاً أو عندما تحتاج المهام تنسيقاً ديناميكياً.',
        'التفويض بين الوكلاء ميزة قوية حيث يمكن للوكلاء تمرير مهام فرعية طوعاً إلى وكلاء آخرين يعتقدون أنهم أكثر ملاءمة. عندما يكون allow_delegation=True، يمكن للوكيل طلب المساعدة من وكيل آخر في جزء محدد من مهمته. هذا يحاكي كيف تعمل الفرق الحقيقية: قد يطلب باحث من محلل بيانات التحقق من الإحصائيات قبل تضمينها في تقرير.',
        'المخرجات المنظمة باستخدام نماذج Pydantic تضمن أن مخرجات الوكلاء تتوافق مع مخطط محدد. تحدد نموذج Pydantic لمخرجاتك المتوقعة وتسنده إلى المهمة. يوجه CrewAI الوكيل لإنتاج مخرجات مطابقة لذلك المخطط ويتحقق منها تلقائياً. هذا حاسم لبناء خطوط أنابيب موثوقة حيث تعتمد المهام اللاحقة على صيغ بيانات محددة.',
        'استدعاءات المهام والخطافات تتيح لك حقن منطق مخصص في نقاط مختلفة من خط التنفيذ. يمكنك تحديد دوال تعمل بعد اكتمال مهمة (للتسجيل أو التحقق أو الآثار الجانبية)، وقبل بدء مهمة (للإعداد)، أو عند حدوث أخطاء. يمنحك هذا تحكماً دقيقاً في تنفيذ الطاقم دون تعديل منطق الوكيل.',
        'الذاكرة على مستوى الطاقم تمكن الوكلاء من مشاركة المعرفة عبر التنفيذ بالكامل. تحتفظ الذاكرة قصيرة المدى بالسياق ضمن تشغيل واحد، بينما تستمر الذاكرة طويلة المدى عبر عمليات تشغيل متعددة باستخدام واجهات تخزين خلفية. تتتبع ذاكرة الكيانات حقائق عن كيانات محددة ذُكرت أثناء التنفيذ. مجتمعة، تجعل أنواع الذاكرة هذه الأطقم أكثر ترابطاً وقدرة على التعلم من التجربة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from crewai import Agent, Task, Crew, Process
from pydantic import BaseModel

# Structured output model
class ResearchReport(BaseModel):
    title: str
    findings: list[str]
    recommendation: str

# Define a team of specialists
planner = Agent(
    role="Research Planner",
    goal="Create a clear research plan for the given topic",
    backstory="Expert at breaking complex topics into research tasks.",
    allow_delegation=False,
)

researcher = Agent(
    role="Deep Researcher",
    goal="Conduct thorough research and gather key findings",
    backstory="Meticulous researcher who digs deep into sources.",
    allow_delegation=True,  # Can delegate to fact-checker
)

fact_checker = Agent(
    role="Fact Checker",
    goal="Verify claims and ensure accuracy of findings",
    backstory="Skeptical analyst who cross-references every claim.",
    allow_delegation=False,
)

# Define tasks with dependencies
plan_task = Task(
    description="Create a research plan for: {topic}",
    expected_output="A numbered list of 3-5 research questions.",
    agent=planner,
)

research_task = Task(
    description="Research each question from the plan. Gather evidence.",
    expected_output="Detailed findings for each research question.",
    agent=researcher,
    context=[plan_task],  # Uses plan_task output as input
)

report_task = Task(
    description="Compile verified findings into a final report.",
    expected_output="A structured research report.",
    agent=fact_checker,
    context=[research_task],
    output_pydantic=ResearchReport,  # Structured output
)

# Hierarchical crew with a manager
crew = Crew(
    agents=[planner, researcher, fact_checker],
    tasks=[plan_task, research_task, report_task],
    process=Process.hierarchical,
    manager_llm="gpt-4o",  # Manager LLM for delegation
    memory=True,            # Enable crew memory
    verbose=True,
)

result = crew.kickoff(inputs={"topic": "Impact of AI on healthcare"})
print(f"Report title: {result.pydantic.title}")
print(f"Findings: {result.pydantic.findings}")`,
      description: {
        en: 'A hierarchical multi-agent team with a planner, researcher, and fact-checker. Uses structured Pydantic output, task dependencies via context, inter-agent delegation, and crew memory.',
        ar: 'فريق هرمي متعدد الوكلاء مع مخطط وباحث ومدقق حقائق. يستخدم مخرجات Pydantic منظمة وتبعيات المهام عبر السياق والتفويض بين الوكلاء وذاكرة الطاقم.',
      },
    },
    commonMistakes: {
      en: [
        'Using hierarchical process with a weak LLM as the manager. The manager agent needs a capable model (like GPT-4o) to effectively delegate and coordinate tasks.',
        'Creating circular task dependencies where Task A depends on Task B which depends on Task A, causing execution deadlocks.',
        'Enabling delegation for all agents without considering that excessive delegation can lead to infinite loops or wasted LLM calls.',
        'Not using the context parameter on tasks, forcing agents to work without information from previous steps.',
      ],
      ar: [
        'استخدام العملية الهرمية مع نموذج لغة ضعيف كمدير. يحتاج وكيل المدير إلى نموذج قادر (مثل GPT-4o) للتفويض والتنسيق بشكل فعال.',
        'إنشاء تبعيات مهام دائرية حيث تعتمد المهمة أ على المهمة ب التي تعتمد على المهمة أ، مما يسبب جمود التنفيذ.',
        'تمكين التفويض لجميع الوكلاء دون مراعاة أن التفويض المفرط يمكن أن يؤدي إلى حلقات لا نهائية أو استدعاءات مهدرة لنموذج اللغة.',
        'عدم استخدام معامل context في المهام، مما يجبر الوكلاء على العمل بدون معلومات من الخطوات السابقة.',
      ],
    },
    bestPractices: {
      en: [
        'Start with sequential process for straightforward pipelines and only switch to hierarchical when you need dynamic task routing or manager oversight.',
        'Use Pydantic output models for tasks whose outputs feed into other systems or tasks, ensuring consistent data formats throughout the pipeline.',
        'Design task dependencies explicitly using the context parameter rather than relying on implicit ordering, making the data flow clear and maintainable.',
        'Enable memory for crews that run repeatedly on similar data, allowing agents to build on past insights and improve over time.',
      ],
      ar: [
        'ابدأ بالعملية التسلسلية لخطوط الأنابيب المباشرة وانتقل إلى الهرمية فقط عندما تحتاج توجيه مهام ديناميكي أو إشراف مدير.',
        'استخدم نماذج مخرجات Pydantic للمهام التي تغذي مخرجاتها أنظمة أو مهام أخرى، مما يضمن صيغ بيانات متسقة عبر خط الأنابيب.',
        'صمم تبعيات المهام بشكل صريح باستخدام معامل context بدلاً من الاعتماد على الترتيب الضمني، مما يجعل تدفق البيانات واضحاً وقابلاً للصيانة.',
        'فعّل الذاكرة للأطقم التي تعمل بشكل متكرر على بيانات مماثلة، مما يسمح للوكلاء بالبناء على رؤى سابقة والتحسن بمرور الوقت.',
      ],
    },
    references: [
      { title: 'CrewAI Processes Documentation', url: 'https://docs.crewai.com/concepts/processes' },
      { title: 'CrewAI Tasks and Delegation', url: 'https://docs.crewai.com/concepts/tasks' },
      { title: 'CrewAI Memory System', url: 'https://docs.crewai.com/concepts/memory' },
    ],
    quiz: [
      {
        id: 'batch8-q3',
        question: {
          en: 'What is the key difference between sequential and hierarchical processes in CrewAI?',
          ar: 'ما هو الفرق الرئيسي بين العمليات التسلسلية والهرمية في CrewAI؟',
        },
        options: {
          en: [
            'Sequential is faster, hierarchical is slower',
            'Sequential runs tasks in fixed order; hierarchical uses a manager agent to dynamically delegate tasks',
            'Sequential uses one agent; hierarchical uses multiple agents',
            'Sequential is for text tasks; hierarchical is for code tasks',
          ],
          ar: [
            'التسلسلي أسرع والهرمي أبطأ',
            'التسلسلي ينفذ المهام بترتيب ثابت؛ الهرمي يستخدم وكيل مدير لتفويض المهام ديناميكياً',
            'التسلسلي يستخدم وكيلاً واحداً؛ الهرمي يستخدم وكلاء متعددين',
            'التسلسلي للمهام النصية؛ الهرمي لمهام الكود',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'In sequential process, tasks execute in a fixed linear order. In hierarchical process, a manager agent dynamically decides which agents handle which tasks, can request revisions, and synthesizes the final output.',
          ar: 'في العملية التسلسلية، تُنفذ المهام بترتيب خطي ثابت. في العملية الهرمية، يقرر وكيل مدير ديناميكياً أي الوكلاء يتولون أي مهام، ويمكنه طلب تعديلات وتجميع المخرجات النهائية.',
        },
      },
      {
        id: 'batch8-q4',
        question: {
          en: 'What does the context parameter on a CrewAI Task do?',
          ar: 'ماذا يفعل معامل context في مهمة CrewAI؟',
        },
        options: {
          en: [
            'It sets the language model to use for that task',
            'It provides the output of specified previous tasks as input context for the current task',
            'It defines environment variables for the task execution',
            'It configures the task timeout period',
          ],
          ar: [
            'يحدد نموذج اللغة المستخدم لتلك المهمة',
            'يوفر مخرجات المهام السابقة المحددة كسياق إدخال للمهمة الحالية',
            'يحدد متغيرات البيئة لتنفيذ المهمة',
            'يكوّن مهلة المهمة الزمنية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The context parameter accepts a list of other tasks. Their outputs are automatically provided as context to the current task, creating explicit data flow dependencies between tasks in the pipeline.',
          ar: 'يقبل معامل context قائمة من المهام الأخرى. يتم توفير مخرجاتها تلقائياً كسياق للمهمة الحالية، مما يخلق تبعيات صريحة لتدفق البيانات بين المهام في خط الأنابيب.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. LlamaIndex Introduction
  // ─────────────────────────────────────────────
  'llamaindex-introduction': {
    beginnerDefinition: {
      en: 'LlamaIndex is a Python framework that helps you connect your own data (documents, databases, APIs) to large language models. It makes it easy to build applications where an AI can search through your data, understand it, and answer questions about it accurately, instead of relying only on what the LLM was trained on.',
      ar: 'LlamaIndex هو إطار عمل بلغة بايثون يساعدك على ربط بياناتك الخاصة (المستندات وقواعد البيانات وواجهات البرمجة) بنماذج اللغة الكبيرة. يسهّل بناء تطبيقات حيث يمكن للذكاء الاصطناعي البحث في بياناتك وفهمها والإجابة عن الأسئلة حولها بدقة، بدلاً من الاعتماد فقط على ما تم تدريب نموذج اللغة عليه.',
    },
    technicalDefinition: {
      en: 'LlamaIndex (formerly GPT Index) is a data framework for building LLM-powered applications with custom data. It provides a comprehensive toolkit of data connectors (loaders for 160+ data sources), data indices (vector stores, keyword indices, knowledge graphs), query engines (retrieval and synthesis pipelines), and agent abstractions. The framework implements the RAG (Retrieval-Augmented Generation) pattern as a first-class citizen, offering modular components for document ingestion, chunking, embedding, indexing, retrieval, and response synthesis, all connected through a composable pipeline architecture.',
      ar: 'LlamaIndex (المعروف سابقاً بـ GPT Index) هو إطار بيانات لبناء تطبيقات مدعومة بنماذج اللغة الكبيرة مع بيانات مخصصة. يوفر مجموعة أدوات شاملة من موصلات البيانات (محملات لأكثر من 160 مصدر بيانات)، ومؤشرات البيانات (مخازن المتجهات، ومؤشرات الكلمات المفتاحية، والرسوم البيانية المعرفية)، ومحركات الاستعلام (خطوط أنابيب الاسترجاع والتركيب)، وتجريدات الوكلاء. ينفذ الإطار نمط RAG (التوليد المعزز بالاسترجاع) كمكوّن من الدرجة الأولى، موفراً مكونات معيارية لاستيعاب المستندات والتقطيع والتضمين والفهرسة والاسترجاع وتركيب الاستجابة، كلها متصلة عبر بنية خطوط أنابيب قابلة للتركيب.',
    },
    analogy: {
      en: 'Imagine you are a librarian with a massive collection of books, and visitors ask you questions all day. Without any system, you would have to read every book each time someone asks a question. LlamaIndex is like building a smart library catalog: it reads all your books (data connectors), creates organized index cards with summaries and keywords (indices), and when someone asks a question, it quickly finds the right books and pages (query engine) to give an accurate answer. The LLM is the knowledgeable librarian who reads the found pages and crafts a clear response.',
      ar: 'تخيل أنك أمين مكتبة لديك مجموعة ضخمة من الكتب، والزوار يسألونك أسئلة طوال اليوم. بدون أي نظام، ستضطر لقراءة كل كتاب في كل مرة يسأل شخص سؤالاً. LlamaIndex يشبه بناء فهرس مكتبة ذكي: يقرأ جميع كتبك (موصلات البيانات)، وينشئ بطاقات فهرسة منظمة بملخصات وكلمات مفتاحية (المؤشرات)، وعندما يسأل شخص سؤالاً، يجد بسرعة الكتب والصفحات المناسبة (محرك الاستعلام) لإعطاء إجابة دقيقة. نموذج اللغة هو أمين المكتبة المطلع الذي يقرأ الصفحات الموجودة ويصوغ استجابة واضحة.',
    },
    explanation: {
      en: [
        'LlamaIndex solves a fundamental problem: LLMs are trained on general data and do not know about your private documents, company data, or recent information. By connecting your data to the LLM through LlamaIndex, you get accurate answers grounded in your actual data rather than fabricated responses. This is the core value proposition of the framework.',
        'Data Connectors (also called Loaders or Readers) are the entry point. LlamaIndex provides connectors for PDFs, Word documents, web pages, databases (SQL, MongoDB), APIs (Notion, Slack, Google Drive), and many more. The LlamaHub community registry contains over 160 loaders. Each connector reads data from a source and converts it into LlamaIndex Document objects.',
        'Once data is loaded, it needs to be processed into an Index. The most common index type is the VectorStoreIndex, which splits documents into chunks (nodes), generates vector embeddings for each chunk using an embedding model, and stores them in a vector database. When a query arrives, the most relevant chunks are found through vector similarity search.',
        'Query Engines sit on top of indices and handle the end-to-end question-answering flow. When you call query_engine.query("What is X?"), the engine retrieves relevant document chunks from the index, constructs a prompt that includes the question and the retrieved context, sends it to the LLM, and returns the synthesized answer. This is the RAG pattern in action.',
        'LlamaIndex also provides Chat Engines for conversational interactions that maintain history, and Agent abstractions that can use multiple tools and indices to answer complex queries. Agents can decide which index to query, when to use a calculator, or when to search the web, making them versatile problem solvers.',
        'The framework is highly modular. You can swap out any component: use OpenAI or a local model for embeddings, store vectors in Pinecone or Chroma or Qdrant, customize chunking strategies, change the retrieval algorithm, or modify the response synthesis prompt. This modularity lets you optimize each step of the pipeline independently.',
      ],
      ar: [
        'يحل LlamaIndex مشكلة أساسية: نماذج اللغة الكبيرة مدربة على بيانات عامة ولا تعرف شيئاً عن مستنداتك الخاصة أو بيانات شركتك أو المعلومات الحديثة. بربط بياناتك بنموذج اللغة عبر LlamaIndex، تحصل على إجابات دقيقة مبنية على بياناتك الفعلية بدلاً من استجابات ملفقة. هذا هو عرض القيمة الأساسي للإطار.',
        'موصلات البيانات (تسمى أيضاً المحملات أو القارئات) هي نقطة الدخول. يوفر LlamaIndex موصلات لملفات PDF ومستندات Word وصفحات الويب وقواعد البيانات (SQL وMongoDB) وواجهات البرمجة (Notion وSlack وGoogle Drive) وغيرها الكثير. يحتوي سجل مجتمع LlamaHub على أكثر من 160 محملاً. يقرأ كل موصل البيانات من مصدر ويحولها إلى كائنات مستندات LlamaIndex.',
        'بمجرد تحميل البيانات، تحتاج إلى معالجتها في مؤشر. أكثر أنواع المؤشرات شيوعاً هو VectorStoreIndex، الذي يقسم المستندات إلى قطع (عقد)، ويولد تضمينات متجهات لكل قطعة باستخدام نموذج تضمين، ويخزنها في قاعدة بيانات متجهات. عند وصول استعلام، يتم العثور على القطع الأكثر صلة عبر بحث تشابه المتجهات.',
        'تجلس محركات الاستعلام فوق المؤشرات وتتعامل مع تدفق الإجابة على الأسئلة من البداية للنهاية. عندما تستدعي query_engine.query("ما هو X؟")، يسترجع المحرك قطع المستندات ذات الصلة من المؤشر، ويبني مطالبة تتضمن السؤال والسياق المسترجع، ويرسلها إلى نموذج اللغة، ويعيد الإجابة المركبة. هذا هو نمط RAG قيد التطبيق.',
        'يوفر LlamaIndex أيضاً محركات محادثة للتفاعلات الحوارية التي تحافظ على السجل، وتجريدات وكلاء يمكنها استخدام أدوات ومؤشرات متعددة للإجابة على استعلامات معقدة. يمكن للوكلاء تحديد أي مؤشر يستعلمون، ومتى يستخدمون آلة حاسبة، أو متى يبحثون في الويب، مما يجعلهم حلالي مشاكل متعددي الاستخدامات.',
        'الإطار معياري للغاية. يمكنك استبدال أي مكون: استخدام OpenAI أو نموذج محلي للتضمينات، وتخزين المتجهات في Pinecone أو Chroma أو Qdrant، وتخصيص استراتيجيات التقطيع، وتغيير خوارزمية الاسترجاع، أو تعديل مطالبة تركيب الاستجابة. تتيح لك هذه المعيارية تحسين كل خطوة في خط الأنابيب بشكل مستقل.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding

# Configure global settings
Settings.llm = OpenAI(model="gpt-4o-mini", temperature=0)
Settings.embed_model = OpenAIEmbedding(model="text-embedding-3-small")

# Step 1: Load documents from a directory
documents = SimpleDirectoryReader("./data").load_data()
print(f"Loaded {len(documents)} documents")

# Step 2: Build a vector index (chunks, embeds, and stores)
index = VectorStoreIndex.from_documents(documents)

# Step 3: Create a query engine
query_engine = index.as_query_engine(
    similarity_top_k=3,  # Retrieve top 3 relevant chunks
)

# Step 4: Ask questions about your data
response = query_engine.query(
    "What are the main findings in the Q4 report?"
)
print(f"Answer: {response}")
print(f"Sources: {response.source_nodes}")

# You can also create a chat engine for conversations
chat_engine = index.as_chat_engine(chat_mode="condense_plus_context")
chat_response = chat_engine.chat("Tell me more about revenue trends.")
print(f"Chat: {chat_response}")`,
      description: {
        en: 'A complete LlamaIndex pipeline: loading documents from a directory, building a vector index, and querying the data with both a query engine and a chat engine.',
        ar: 'خط أنابيب LlamaIndex كامل: تحميل المستندات من دليل، وبناء مؤشر متجهات، واستعلام البيانات بمحرك استعلام ومحرك محادثة.',
      },
    },
    commonMistakes: {
      en: [
        'Using default chunk sizes without considering your data. Small chunks lose context while large chunks may exceed token limits. Experiment with chunk_size and chunk_overlap parameters.',
        'Not persisting the index to disk or a vector store, causing expensive re-indexing every time the application restarts.',
        'Ignoring the source_nodes in the response, which provide transparency into which documents were used to generate the answer.',
        'Using a general-purpose embedding model for domain-specific data without evaluating retrieval quality. Sometimes a fine-tuned or domain-specific embedding model performs significantly better.',
      ],
      ar: [
        'استخدام أحجام القطع الافتراضية دون مراعاة بياناتك. القطع الصغيرة تفقد السياق بينما القطع الكبيرة قد تتجاوز حدود الرموز. جرب معاملات chunk_size وchunk_overlap.',
        'عدم حفظ المؤشر على القرص أو في مخزن متجهات، مما يسبب إعادة فهرسة مكلفة في كل مرة تُعاد فيها تشغيل التطبيق.',
        'تجاهل source_nodes في الاستجابة، التي توفر شفافية حول المستندات المستخدمة لتوليد الإجابة.',
        'استخدام نموذج تضمين عام لبيانات متخصصة في مجال معين دون تقييم جودة الاسترجاع. أحياناً يؤدي نموذج تضمين مضبوط أو متخصص في المجال أداءً أفضل بشكل ملحوظ.',
      ],
    },
    bestPractices: {
      en: [
        'Always persist your index using index.storage_context.persist() or a managed vector store to avoid re-processing documents on every restart.',
        'Use metadata filters and node postprocessors to improve retrieval precision. Adding metadata (like source, date, category) to documents enables targeted filtering at query time.',
        'Start with SimpleDirectoryReader for prototyping, then switch to specialized loaders from LlamaHub for production data sources.',
        'Monitor retrieval quality by examining source_nodes and adjusting similarity_top_k, chunk_size, and chunk_overlap based on the results.',
      ],
      ar: [
        'احفظ دائماً مؤشرك باستخدام index.storage_context.persist() أو مخزن متجهات مُدار لتجنب إعادة معالجة المستندات عند كل إعادة تشغيل.',
        'استخدم فلاتر البيانات الوصفية ومعالجات ما بعد العقد لتحسين دقة الاسترجاع. إضافة بيانات وصفية (مثل المصدر والتاريخ والفئة) إلى المستندات تمكّن التصفية المستهدفة وقت الاستعلام.',
        'ابدأ بـ SimpleDirectoryReader للنمذجة الأولية، ثم انتقل إلى محملات متخصصة من LlamaHub لمصادر بيانات الإنتاج.',
        'راقب جودة الاسترجاع بفحص source_nodes وضبط similarity_top_k وchunk_size وchunk_overlap بناءً على النتائج.',
      ],
    },
    references: [
      { title: 'LlamaIndex Official Documentation', url: 'https://docs.llamaindex.ai/' },
      { title: 'LlamaIndex GitHub Repository', url: 'https://github.com/run-llama/llama_index' },
      { title: 'LlamaHub - Community Data Loaders', url: 'https://llamahub.ai/' },
    ],
    quiz: [
      {
        id: 'batch8-q5',
        question: {
          en: 'What problem does LlamaIndex primarily solve?',
          ar: 'ما المشكلة التي يحلها LlamaIndex بشكل أساسي؟',
        },
        options: {
          en: [
            'Training new language models from scratch',
            'Connecting private/custom data to LLMs for accurate question answering',
            'Replacing databases with AI-powered storage',
            'Generating synthetic training data for machine learning',
          ],
          ar: [
            'تدريب نماذج لغة جديدة من الصفر',
            'ربط البيانات الخاصة/المخصصة بنماذج اللغة الكبيرة للإجابة الدقيقة على الأسئلة',
            'استبدال قواعد البيانات بتخزين مدعوم بالذكاء الاصطناعي',
            'توليد بيانات تدريب اصطناعية للتعلم الآلي',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'LlamaIndex bridges the gap between your private data and LLMs. It ingests, indexes, and retrieves your data so the LLM can answer questions accurately based on your actual documents rather than its general training data.',
          ar: 'يسد LlamaIndex الفجوة بين بياناتك الخاصة ونماذج اللغة الكبيرة. يستوعب بياناتك ويفهرسها ويسترجعها حتى يتمكن نموذج اللغة من الإجابة على الأسئلة بدقة بناءً على مستنداتك الفعلية بدلاً من بيانات تدريبه العامة.',
        },
      },
      {
        id: 'batch8-q6',
        question: {
          en: 'What is the most common type of index in LlamaIndex?',
          ar: 'ما هو أكثر أنواع المؤشرات شيوعاً في LlamaIndex؟',
        },
        options: {
          en: [
            'KeywordTableIndex',
            'VectorStoreIndex',
            'ListIndex',
            'TreeIndex',
          ],
          ar: [
            'مؤشر جدول الكلمات المفتاحية',
            'مؤشر مخزن المتجهات',
            'مؤشر القائمة',
            'مؤشر الشجرة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'VectorStoreIndex is the most widely used index type in LlamaIndex. It converts document chunks into vector embeddings and uses similarity search to find the most relevant pieces of information for a given query.',
          ar: 'مؤشر مخزن المتجهات هو أكثر أنواع المؤشرات استخداماً في LlamaIndex. يحوّل قطع المستندات إلى تضمينات متجهات ويستخدم بحث التشابه للعثور على أكثر أجزاء المعلومات صلة لاستعلام معين.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. LlamaIndex RAG Pipelines
  // ─────────────────────────────────────────────
  'llamaindex-rag-pipelines': {
    beginnerDefinition: {
      en: 'A RAG (Retrieval-Augmented Generation) pipeline built with LlamaIndex is a system that first searches through your documents to find relevant information, then feeds that information to an AI model to generate accurate answers. Think of it as giving the AI a cheat sheet of relevant facts before asking it to answer your question.',
      ar: 'خط أنابيب RAG (التوليد المعزز بالاسترجاع) المبني مع LlamaIndex هو نظام يبحث أولاً في مستنداتك للعثور على المعلومات ذات الصلة، ثم يغذي تلك المعلومات لنموذج ذكاء اصطناعي لتوليد إجابات دقيقة. فكر فيه على أنه إعطاء الذكاء الاصطناعي ورقة مرجعية بالحقائق ذات الصلة قبل أن تطلب منه الإجابة على سؤالك.',
    },
    technicalDefinition: {
      en: 'A LlamaIndex RAG pipeline is a multi-stage data processing and retrieval system composed of three phases: Ingestion (loading documents via connectors, applying transformations like chunking and metadata extraction, generating embeddings, and storing in a vector/document store), Indexing (organizing processed data into queryable structures such as VectorStoreIndex with configurable retrieval strategies), and Querying (receiving a user query, retrieving relevant nodes via similarity search or hybrid retrieval, applying node postprocessors for re-ranking and filtering, and synthesizing a response using the LLM with customizable response synthesis strategies like tree_summarize, compact, or refine).',
      ar: 'خط أنابيب RAG في LlamaIndex هو نظام معالجة واسترجاع بيانات متعدد المراحل يتكون من ثلاث مراحل: الاستيعاب (تحميل المستندات عبر الموصلات، وتطبيق التحويلات مثل التقطيع واستخراج البيانات الوصفية، وتوليد التضمينات، والتخزين في مخزن متجهات/مستندات)، والفهرسة (تنظيم البيانات المعالجة في هياكل قابلة للاستعلام مثل VectorStoreIndex مع استراتيجيات استرجاع قابلة للتكوين)، والاستعلام (استقبال استعلام المستخدم، واسترجاع العقد ذات الصلة عبر بحث التشابه أو الاسترجاع الهجين، وتطبيق معالجات ما بعد العقد لإعادة الترتيب والتصفية، وتركيب استجابة باستخدام نموذج اللغة مع استراتيجيات تركيب استجابة قابلة للتخصيص مثل tree_summarize وcompact وrefine).',
    },
    analogy: {
      en: 'Building a RAG pipeline is like setting up a research assistant\'s workflow. First, the assistant organizes all the reference books by scanning them, creating sticky notes on key sections, and filing them in labeled drawers (ingestion and indexing). When you ask a question, the assistant pulls the most relevant sticky-noted pages from the drawers (retrieval), double-checks the sources for reliability (postprocessing), and then writes you a clear answer in their own words while citing which pages they used (synthesis). LlamaIndex automates this entire workflow.',
      ar: 'بناء خط أنابيب RAG يشبه إعداد سير عمل مساعد بحث. أولاً، ينظم المساعد جميع الكتب المرجعية عن طريق مسحها، وإنشاء ملاحظات لاصقة على الأقسام الرئيسية، وحفظها في أدراج مصنفة (الاستيعاب والفهرسة). عندما تسأل سؤالاً، يسحب المساعد الصفحات الأكثر صلة بالملاحظات اللاصقة من الأدراج (الاسترجاع)، ويتحقق من المصادر للموثوقية (المعالجة اللاحقة)، ثم يكتب لك إجابة واضحة بكلماته الخاصة مع الإشارة إلى الصفحات التي استخدمها (التركيب). يقوم LlamaIndex بأتمتة سير العمل هذا بالكامل.',
    },
    explanation: {
      en: [
        'The ingestion phase is the foundation of any RAG pipeline. LlamaIndex provides an IngestionPipeline class that chains together transformations: loading raw data with readers, splitting text into manageable chunks using splitters like SentenceSplitter or TokenTextSplitter, extracting metadata (titles, keywords, summaries) with extractors, generating embeddings, and storing everything in a document store and vector store.',
        'Chunking strategy is critical for RAG quality. LlamaIndex offers multiple text splitters: SentenceSplitter respects sentence boundaries, TokenTextSplitter ensures chunks fit within token limits, and SemanticSplitter uses embeddings to split at natural topic boundaries. You also configure chunk_overlap to maintain context across chunk boundaries. The right strategy depends on your data type and query patterns.',
        'The retrieval phase uses the index to find the most relevant chunks. VectorIndexRetriever performs similarity search using embeddings. BM25Retriever uses keyword matching. For best results, you can combine them in a hybrid approach using QueryFusionRetriever or a custom ensemble. The similarity_top_k parameter controls how many chunks are retrieved.',
        'Node postprocessors refine the retrieved results before they reach the LLM. SimilarityPostprocessor filters by a minimum similarity score. MetadataReplacementPostprocessor replaces node text with metadata fields. SentenceWindowNodeParser and MetadataReplacementPostprocessor together implement the "sentence window" technique, where small chunks are retrieved but surrounding context is included for the LLM. Cohere or LLM-based rerankers can also be used to improve relevance.',
        'Response synthesis is the final stage where the LLM generates an answer from the retrieved context. LlamaIndex provides several strategies: "compact" stuffs as much context as possible into a single prompt, "refine" iteratively improves the answer by processing one chunk at a time, and "tree_summarize" recursively summarizes chunks into a hierarchical answer. Choosing the right strategy affects both quality and latency.',
        'For production RAG systems, LlamaIndex supports evaluation tools to measure retrieval quality (hit rate, MRR) and response quality (faithfulness, relevancy). The framework also supports advanced patterns like sub-question decomposition (breaking complex queries into simpler ones), routing (directing queries to different indices), and agentic RAG (using agents to decide retrieval strategy dynamically).',
      ],
      ar: [
        'مرحلة الاستيعاب هي أساس أي خط أنابيب RAG. يوفر LlamaIndex فئة IngestionPipeline التي تربط التحويلات معاً: تحميل البيانات الخام بالقارئات، وتقسيم النص إلى قطع قابلة للإدارة باستخدام مقسمات مثل SentenceSplitter أو TokenTextSplitter، واستخراج البيانات الوصفية (العناوين والكلمات المفتاحية والملخصات) بالمستخرجات، وتوليد التضمينات، وتخزين كل شيء في مخزن مستندات ومخزن متجهات.',
        'استراتيجية التقطيع حاسمة لجودة RAG. يوفر LlamaIndex عدة مقسمات نصية: SentenceSplitter يحترم حدود الجمل، وTokenTextSplitter يضمن أن القطع تناسب حدود الرموز، وSemanticSplitter يستخدم التضمينات للتقسيم عند حدود المواضيع الطبيعية. تقوم أيضاً بتكوين chunk_overlap للحفاظ على السياق عبر حدود القطع. تعتمد الاستراتيجية الصحيحة على نوع بياناتك وأنماط استعلاماتك.',
        'تستخدم مرحلة الاسترجاع المؤشر للعثور على القطع الأكثر صلة. VectorIndexRetriever ينفذ بحث التشابه باستخدام التضمينات. BM25Retriever يستخدم مطابقة الكلمات المفتاحية. للحصول على أفضل النتائج، يمكنك الجمع بينهما في نهج هجين باستخدام QueryFusionRetriever أو مجموعة مخصصة. يتحكم معامل similarity_top_k في عدد القطع المسترجعة.',
        'تنقّح معالجات ما بعد العقد النتائج المسترجعة قبل وصولها إلى نموذج اللغة. SimilarityPostprocessor يصفي بحد أدنى لدرجة التشابه. MetadataReplacementPostprocessor يستبدل نص العقدة بحقول البيانات الوصفية. SentenceWindowNodeParser وMetadataReplacementPostprocessor معاً ينفذان تقنية "نافذة الجملة"، حيث تُسترجع قطع صغيرة لكن يُضمّن السياق المحيط لنموذج اللغة. يمكن أيضاً استخدام أدوات إعادة ترتيب من Cohere أو قائمة على نموذج اللغة لتحسين الصلة.',
        'تركيب الاستجابة هو المرحلة النهائية حيث يولد نموذج اللغة إجابة من السياق المسترجع. يوفر LlamaIndex عدة استراتيجيات: "compact" يحشو أكبر قدر ممكن من السياق في مطالبة واحدة، و"refine" يحسّن الإجابة تكرارياً بمعالجة قطعة واحدة في كل مرة، و"tree_summarize" يلخص القطع بشكل متكرر في إجابة هرمية. اختيار الاستراتيجية الصحيحة يؤثر على الجودة وزمن الاستجابة.',
        'لأنظمة RAG في الإنتاج، يدعم LlamaIndex أدوات تقييم لقياس جودة الاسترجاع (معدل الإصابة وMRR) وجودة الاستجابة (الأمانة والصلة). يدعم الإطار أيضاً أنماطاً متقدمة مثل تفكيك الأسئلة الفرعية (تقسيم الاستعلامات المعقدة إلى أبسط)، والتوجيه (توجيه الاستعلامات إلى مؤشرات مختلفة)، وRAG الوكيلي (استخدام وكلاء لتحديد استراتيجية الاسترجاع ديناميكياً).',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    Settings,
)
from llama_index.core.ingestion import IngestionPipeline
from llama_index.core.node_parser import SentenceSplitter
from llama_index.core.extractors import (
    TitleExtractor,
    QuestionsAnsweredExtractor,
)
from llama_index.core.postprocessor import SimilarityPostprocessor
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding

# Configure LLM and embeddings
Settings.llm = OpenAI(model="gpt-4o-mini", temperature=0)
Settings.embed_model = OpenAIEmbedding(model="text-embedding-3-small")

# --- Phase 1: Ingestion Pipeline ---
documents = SimpleDirectoryReader("./company_docs").load_data()

pipeline = IngestionPipeline(
    transformations=[
        SentenceSplitter(chunk_size=512, chunk_overlap=64),
        TitleExtractor(nodes=3),
        QuestionsAnsweredExtractor(questions=3),
        Settings.embed_model,
    ]
)
nodes = pipeline.run(documents=documents)
print(f"Processed {len(nodes)} nodes from {len(documents)} documents")

# --- Phase 2: Indexing ---
index = VectorStoreIndex(nodes)
index.storage_context.persist(persist_dir="./storage")

# --- Phase 3: Query with Postprocessing ---
query_engine = index.as_query_engine(
    similarity_top_k=5,
    node_postprocessors=[
        SimilarityPostprocessor(similarity_cutoff=0.7),
    ],
    response_mode="compact",
)

response = query_engine.query(
    "What is our company policy on remote work?"
)
print(f"Answer: {response}")
for node in response.source_nodes:
    print(f"  Source: {node.metadata.get('file_name')} "
          f"(score: {node.score:.3f})")`,
      description: {
        en: 'A production-ready RAG pipeline with three phases: ingestion (chunking, metadata extraction, embedding), indexing (VectorStoreIndex with persistence), and querying (similarity search with postprocessing and source attribution).',
        ar: 'خط أنابيب RAG جاهز للإنتاج بثلاث مراحل: الاستيعاب (التقطيع واستخراج البيانات الوصفية والتضمين)، والفهرسة (VectorStoreIndex مع الحفظ الدائم)، والاستعلام (بحث التشابه مع المعالجة اللاحقة ونسب المصادر).',
      },
    },
    commonMistakes: {
      en: [
        'Skipping the evaluation step and deploying a RAG pipeline without measuring retrieval quality. Always test with representative queries and check if the right documents are being retrieved.',
        'Using too small or too large chunk sizes without testing. Chunks that are too small lose important context; chunks that are too large dilute the relevant information with noise.',
        'Not implementing chunk overlap, causing information at chunk boundaries to be lost or split across chunks in a way that makes retrieval miss relevant content.',
        'Relying solely on vector similarity without considering hybrid retrieval. Keyword-based retrieval (BM25) often catches exact matches that vector search misses.',
      ],
      ar: [
        'تخطي خطوة التقييم ونشر خط أنابيب RAG دون قياس جودة الاسترجاع. اختبر دائماً باستعلامات تمثيلية وتحقق مما إذا كانت المستندات الصحيحة يتم استرجاعها.',
        'استخدام أحجام قطع صغيرة جداً أو كبيرة جداً دون اختبار. القطع الصغيرة جداً تفقد سياقاً مهماً؛ والقطع الكبيرة جداً تخفف المعلومات ذات الصلة بالضوضاء.',
        'عدم تنفيذ تراكب القطع، مما يتسبب في فقدان المعلومات عند حدود القطع أو تقسيمها عبر القطع بطريقة تجعل الاسترجاع يفوت المحتوى ذي الصلة.',
        'الاعتماد فقط على تشابه المتجهات دون مراعاة الاسترجاع الهجين. الاسترجاع القائم على الكلمات المفتاحية (BM25) غالباً يلتقط المطابقات الدقيقة التي يفوتها بحث المتجهات.',
      ],
    },
    bestPractices: {
      en: [
        'Build an evaluation dataset with queries and expected documents/answers, then measure retrieval metrics (hit rate, MRR) and response metrics (faithfulness, relevancy) to guide optimization.',
        'Use IngestionPipeline with caching enabled to avoid reprocessing unchanged documents when updating your index with new data.',
        'Implement metadata extraction (titles, keywords, questions answered) during ingestion to enrich nodes and improve retrieval precision through metadata filtering.',
        'Use the sentence window technique (small retrieval chunks with larger context windows) for documents where surrounding context is important for accurate answers.',
      ],
      ar: [
        'ابنِ مجموعة بيانات تقييم باستعلامات ومستندات/إجابات متوقعة، ثم قس مقاييس الاسترجاع (معدل الإصابة وMRR) ومقاييس الاستجابة (الأمانة والصلة) لتوجيه التحسين.',
        'استخدم IngestionPipeline مع تمكين التخزين المؤقت لتجنب إعادة معالجة المستندات غير المتغيرة عند تحديث مؤشرك ببيانات جديدة.',
        'نفذ استخراج البيانات الوصفية (العناوين والكلمات المفتاحية والأسئلة المجاب عنها) أثناء الاستيعاب لإثراء العقد وتحسين دقة الاسترجاع عبر تصفية البيانات الوصفية.',
        'استخدم تقنية نافذة الجملة (قطع استرجاع صغيرة مع نوافذ سياق أكبر) للمستندات حيث يكون السياق المحيط مهماً للإجابات الدقيقة.',
      ],
    },
    references: [
      { title: 'LlamaIndex RAG Guide', url: 'https://docs.llamaindex.ai/en/stable/understanding/rag/' },
      { title: 'LlamaIndex Ingestion Pipeline', url: 'https://docs.llamaindex.ai/en/stable/module_guides/loading/ingestion_pipeline/' },
      { title: 'LlamaIndex Response Synthesis', url: 'https://docs.llamaindex.ai/en/stable/module_guides/querying/response_synthesizers/' },
    ],
    quiz: [
      {
        id: 'batch8-q7',
        question: {
          en: 'What are the three main phases of a LlamaIndex RAG pipeline?',
          ar: 'ما هي المراحل الرئيسية الثلاث لخط أنابيب RAG في LlamaIndex؟',
        },
        options: {
          en: [
            'Training, Validation, and Testing',
            'Ingestion, Indexing, and Querying',
            'Loading, Processing, and Saving',
            'Input, Computation, and Output',
          ],
          ar: [
            'التدريب والتحقق والاختبار',
            'الاستيعاب والفهرسة والاستعلام',
            'التحميل والمعالجة والحفظ',
            'الإدخال والحساب والإخراج',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A LlamaIndex RAG pipeline consists of three phases: Ingestion (loading and processing documents), Indexing (organizing data into queryable structures), and Querying (retrieving relevant context and synthesizing responses).',
          ar: 'يتكون خط أنابيب RAG في LlamaIndex من ثلاث مراحل: الاستيعاب (تحميل ومعالجة المستندات)، والفهرسة (تنظيم البيانات في هياكل قابلة للاستعلام)، والاستعلام (استرجاع السياق ذي الصلة وتركيب الاستجابات).',
        },
      },
      {
        id: 'batch8-q8',
        question: {
          en: 'Why is chunk_overlap important in a RAG pipeline?',
          ar: 'لماذا يعد تراكب القطع مهماً في خط أنابيب RAG؟',
        },
        options: {
          en: [
            'It reduces the total number of chunks to save storage',
            'It ensures information at chunk boundaries is not lost, maintaining context continuity',
            'It speeds up the embedding generation process',
            'It is required by all vector databases',
          ],
          ar: [
            'يقلل العدد الإجمالي للقطع لتوفير التخزين',
            'يضمن عدم فقدان المعلومات عند حدود القطع، مما يحافظ على استمرارية السياق',
            'يسرّع عملية توليد التضمينات',
            'مطلوب من جميع قواعد بيانات المتجهات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Chunk overlap ensures that text near chunk boundaries appears in adjacent chunks. This prevents important information that spans a chunk boundary from being lost during retrieval, maintaining context continuity.',
          ar: 'يضمن تراكب القطع أن النص القريب من حدود القطع يظهر في القطع المتجاورة. هذا يمنع فقدان المعلومات المهمة التي تمتد عبر حد قطعة أثناء الاسترجاع، مما يحافظ على استمرارية السياق.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Semantic Kernel Introduction
  // ─────────────────────────────────────────────
  'semantic-kernel-introduction': {
    beginnerDefinition: {
      en: 'Microsoft Semantic Kernel (SK) is an open-source SDK that helps developers integrate AI capabilities into their existing applications. It acts as a bridge between your application code and AI models like GPT-4, letting you combine traditional programming with AI-powered features through a concept called plugins, which are collections of functions the AI can call.',
      ar: 'Microsoft Semantic Kernel (SK) هو حزمة تطوير برمجيات مفتوحة المصدر تساعد المطورين على دمج قدرات الذكاء الاصطناعي في تطبيقاتهم الحالية. يعمل كجسر بين كود تطبيقك ونماذج الذكاء الاصطناعي مثل GPT-4، مما يتيح لك الجمع بين البرمجة التقليدية والميزات المدعومة بالذكاء الاصطناعي عبر مفهوم يسمى الإضافات، وهي مجموعات من الدوال التي يمكن للذكاء الاصطناعي استدعاؤها.',
    },
    technicalDefinition: {
      en: 'Semantic Kernel is a lightweight, open-source orchestration SDK developed by Microsoft that enables the integration of large language models with conventional programming languages (Python, C#, Java). Its architecture revolves around the Kernel object, which serves as the dependency injection container and orchestration engine. Key abstractions include: Plugins (groups of semantically described functions), which can be either Semantic Functions (prompt templates with configuration) or Native Functions (regular code methods decorated with kernel annotations), Planners (AI-driven modules that decompose user goals into executable plans using available plugins), Memory (semantic search over stored embeddings), and Connectors (integrations with AI services, vector stores, and external APIs). SK supports automatic function calling, where the LLM selects and invokes appropriate plugin functions to fulfill user requests.',
      ar: 'Semantic Kernel هو حزمة تنسيق خفيفة الوزن مفتوحة المصدر طورتها Microsoft تمكّن من دمج نماذج اللغة الكبيرة مع لغات البرمجة التقليدية (Python وC# وJava). تدور بنيته حول كائن Kernel، الذي يعمل كحاوية حقن التبعيات ومحرك التنسيق. تشمل التجريدات الرئيسية: الإضافات (مجموعات من الدوال الموصوفة دلالياً)، والتي يمكن أن تكون دوال دلالية (قوالب مطالبات مع تكوين) أو دوال أصلية (دوال كود عادية مزينة بتعليقات النواة)، والمخططين (وحدات مدفوعة بالذكاء الاصطناعي تفكك أهداف المستخدم إلى خطط قابلة للتنفيذ باستخدام الإضافات المتاحة)، والذاكرة (بحث دلالي عبر التضمينات المخزنة)، والموصلات (تكاملات مع خدمات الذكاء الاصطناعي ومخازن المتجهات وواجهات البرمجة الخارجية). يدعم SK الاستدعاء التلقائي للدوال، حيث يختار نموذج اللغة ويستدعي دوال الإضافات المناسبة لتلبية طلبات المستخدم.',
    },
    analogy: {
      en: 'Think of Semantic Kernel like an operating system for AI features in your app. Just as Windows or macOS provides a kernel that connects applications to hardware (printers, screens, keyboards), Semantic Kernel connects your application code to AI services. Plugins are like device drivers: they expose specific capabilities (math, search, email) in a standardized way. The Planner is like a task scheduler that figures out which "drivers" to use and in which order to accomplish a user\'s request. Your existing app stays the same; SK just adds an AI layer on top.',
      ar: 'فكر في Semantic Kernel كنظام تشغيل لميزات الذكاء الاصطناعي في تطبيقك. كما يوفر Windows أو macOS نواة تربط التطبيقات بالأجهزة (الطابعات والشاشات ولوحات المفاتيح)، يربط Semantic Kernel كود تطبيقك بخدمات الذكاء الاصطناعي. الإضافات مثل برامج التشغيل: تعرض قدرات محددة (الرياضيات والبحث والبريد الإلكتروني) بطريقة موحدة. المخطط مثل مجدول المهام الذي يحدد أي "برامج تشغيل" يستخدم وبأي ترتيب لتحقيق طلب المستخدم. تبقى تطبيقاتك الحالية كما هي؛ SK يضيف فقط طبقة ذكاء اصطناعي فوقها.',
    },
    explanation: {
      en: [
        'Semantic Kernel was built by Microsoft with enterprise applications in mind. Unlike frameworks that require you to rebuild your application around AI, SK is designed to be added to existing codebases. You can gradually introduce AI features by creating plugins that wrap your existing business logic, letting the LLM orchestrate calls to your existing code.',
        'The Kernel is the central object in SK. It serves as the configuration hub where you register AI services (OpenAI, Azure OpenAI, Hugging Face), add plugins, and configure settings. Think of it as the "brain" of your application: all AI operations go through the Kernel, which handles service selection, function resolution, and execution.',
        'Plugins are the building blocks of SK. A plugin is a collection of related functions that perform specific tasks. Each function has a name, description, and typed parameters, all described with semantic annotations. This metadata is crucial because it allows the LLM to understand what each function does and decide when to call it. Plugins can be shared and reused across applications.',
        'There are two types of functions in SK. Native Functions are regular Python (or C#/Java) methods decorated with the @kernel_function decorator. They execute traditional code: database queries, API calls, calculations. Semantic Functions are prompt templates that get sent to the LLM. Both types are treated uniformly by the Kernel, so they can be mixed freely in plugins and plans.',
        'Automatic Function Calling is a powerful feature where you provide the LLM with the descriptions of available plugin functions, and the LLM decides which ones to call to fulfill a user request. For example, if you have a "Weather" plugin and a "Calendar" plugin, and the user asks "Should I bring an umbrella to my meeting tomorrow?", the LLM will call the Calendar function to find the meeting location, then the Weather function to check the forecast.',
        'SK supports multiple AI services simultaneously. You can configure Azure OpenAI for production, OpenAI for development, and a local model for testing, switching between them with configuration. This multi-provider support makes SK particularly attractive for enterprise environments where flexibility and vendor independence are important.',
      ],
      ar: [
        'بُني Semantic Kernel بواسطة Microsoft مع مراعاة تطبيقات المؤسسات. على عكس الأطر التي تتطلب إعادة بناء تطبيقك حول الذكاء الاصطناعي، صُمم SK ليُضاف إلى قواعد الكود الحالية. يمكنك تقديم ميزات الذكاء الاصطناعي تدريجياً عن طريق إنشاء إضافات تغلف منطق عملك الحالي، مما يتيح لنموذج اللغة تنسيق الاستدعاءات لكودك الحالي.',
        'النواة هي الكائن المركزي في SK. تعمل كمركز تكوين حيث تسجل خدمات الذكاء الاصطناعي (OpenAI وAzure OpenAI وHugging Face)، وتضيف إضافات، وتكوّن الإعدادات. فكر فيها على أنها "دماغ" تطبيقك: جميع عمليات الذكاء الاصطناعي تمر عبر النواة، التي تتولى اختيار الخدمة وحل الدوال والتنفيذ.',
        'الإضافات هي لبنات البناء في SK. الإضافة هي مجموعة من الدوال المترابطة التي تؤدي مهام محددة. كل دالة لها اسم ووصف ومعاملات مكتوبة، كلها موصوفة بتعليقات دلالية. هذه البيانات الوصفية حاسمة لأنها تسمح لنموذج اللغة بفهم ما تفعله كل دالة وتحديد متى يستدعيها. يمكن مشاركة الإضافات وإعادة استخدامها عبر التطبيقات.',
        'هناك نوعان من الدوال في SK. الدوال الأصلية هي دوال Python (أو C#/Java) عادية مزينة بمزخرف @kernel_function. تنفذ كوداً تقليدياً: استعلامات قواعد البيانات واستدعاءات واجهات البرمجة والحسابات. الدوال الدلالية هي قوالب مطالبات تُرسل إلى نموذج اللغة. يُعامَل كلا النوعين بشكل موحد بواسطة النواة، لذا يمكن مزجهما بحرية في الإضافات والخطط.',
        'الاستدعاء التلقائي للدوال ميزة قوية حيث توفر لنموذج اللغة أوصاف دوال الإضافات المتاحة، ويقرر نموذج اللغة أيها يستدعي لتلبية طلب المستخدم. على سبيل المثال، إذا كان لديك إضافة "الطقس" وإضافة "التقويم"، وسأل المستخدم "هل يجب أن أحمل مظلة لاجتماعي غداً؟"، سيستدعي نموذج اللغة دالة التقويم لإيجاد موقع الاجتماع، ثم دالة الطقس للتحقق من التوقعات.',
        'يدعم SK عدة خدمات ذكاء اصطناعي في وقت واحد. يمكنك تكوين Azure OpenAI للإنتاج وOpenAI للتطوير ونموذج محلي للاختبار، والتبديل بينها بالتكوين. هذا الدعم المتعدد المزودين يجعل SK جذاباً بشكل خاص لبيئات المؤسسات حيث المرونة واستقلالية المزود مهمتان.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import asyncio
from semantic_kernel import Kernel
from semantic_kernel.connectors.ai.open_ai import (
    AzureChatCompletion,
    OpenAIChatCompletion,
)
from semantic_kernel.functions import kernel_function

# --- Define a Native Plugin ---
class WeatherPlugin:
    """Plugin for weather-related functions."""

    @kernel_function(
        name="get_forecast",
        description="Get the weather forecast for a given city and date.",
    )
    def get_forecast(self, city: str, date: str) -> str:
        # In production, call a real weather API here
        return f"The forecast for {city} on {date}: Sunny, 25C"

class CalendarPlugin:
    """Plugin for calendar operations."""

    @kernel_function(
        name="get_events",
        description="Get calendar events for a specific date.",
    )
    def get_events(self, date: str) -> str:
        return f"Events on {date}: Team standup at 9am (NYC office)"

async def main():
    # Initialize the Kernel
    kernel = Kernel()

    # Add an AI service
    kernel.add_service(
        OpenAIChatCompletion(
            service_id="chat",
            ai_model_id="gpt-4o",
        )
    )

    # Register plugins
    kernel.add_plugin(WeatherPlugin(), plugin_name="Weather")
    kernel.add_plugin(CalendarPlugin(), plugin_name="Calendar")

    # Automatic function calling - the LLM decides which
    # plugin functions to call based on the user request
    from semantic_kernel.connectors.ai.open_ai import (
        OpenAIChatPromptExecutionSettings,
    )
    from semantic_kernel.connectors.ai.function_choice_behavior import (
        FunctionChoiceBehavior,
    )
    from semantic_kernel.contents import ChatHistory

    settings = OpenAIChatPromptExecutionSettings(
        function_choice_behavior=FunctionChoiceBehavior.Auto()
    )

    chat_history = ChatHistory()
    chat_history.add_user_message(
        "Should I bring an umbrella to my meeting tomorrow?"
    )

    result = await kernel.invoke_prompt(
        prompt="{{$chat_history}}",
        chat_history=chat_history,
        settings=settings,
    )
    print(f"Assistant: {result}")

asyncio.run(main())`,
      description: {
        en: 'A Semantic Kernel application with two native plugins (Weather and Calendar). The LLM automatically decides which plugin functions to call to answer the user question about needing an umbrella for a meeting.',
        ar: 'تطبيق Semantic Kernel مع إضافتين أصليتين (الطقس والتقويم). يقرر نموذج اللغة تلقائياً أي دوال الإضافات يستدعي للإجابة على سؤال المستخدم حول الحاجة لمظلة للاجتماع.',
      },
    },
    commonMistakes: {
      en: [
        'Writing poor function descriptions in the @kernel_function decorator. The LLM relies on these descriptions to decide when to call each function, so vague descriptions lead to incorrect function selection.',
        'Not using async/await properly in Python SK. Most Kernel operations are asynchronous, and mixing sync and async code causes runtime errors or deadlocks.',
        'Registering too many plugins without organizing them logically, making it hard for the LLM to choose the right function and increasing token usage from the function descriptions.',
        'Hardcoding AI service credentials instead of using environment variables or Azure Key Vault, creating security vulnerabilities.',
      ],
      ar: [
        'كتابة أوصاف دوال ضعيفة في مزخرف @kernel_function. يعتمد نموذج اللغة على هذه الأوصاف لتقرير متى يستدعي كل دالة، لذا الأوصاف الغامضة تؤدي إلى اختيار دوال غير صحيح.',
        'عدم استخدام async/await بشكل صحيح في Python SK. معظم عمليات النواة غير متزامنة، وخلط الكود المتزامن وغير المتزامن يسبب أخطاء تشغيل أو توقفات.',
        'تسجيل إضافات كثيرة جداً دون تنظيمها منطقياً، مما يصعّب على نموذج اللغة اختيار الدالة الصحيحة ويزيد استخدام الرموز من أوصاف الدوال.',
        'ترميز بيانات اعتماد خدمة الذكاء الاصطناعي بشكل ثابت بدلاً من استخدام متغيرات البيئة أو Azure Key Vault، مما يخلق ثغرات أمنية.',
      ],
    },
    bestPractices: {
      en: [
        'Write clear, specific descriptions for every kernel function. Include what the function does, what parameters it needs, and what it returns. The LLM uses these descriptions as its "manual" for your code.',
        'Group related functions into cohesive plugins with descriptive names. A "MathPlugin" with add, subtract, multiply is better than separate plugins for each operation.',
        'Use FunctionChoiceBehavior.Auto() for open-ended tasks where the LLM should decide which functions to call, and FunctionChoiceBehavior.Required() when you know a specific function must be called.',
        'Leverage SK\'s built-in support for multiple AI services to create fallback chains: try Azure OpenAI first, fall back to OpenAI if unavailable.',
      ],
      ar: [
        'اكتب أوصافاً واضحة ومحددة لكل دالة نواة. اذكر ما تفعله الدالة وما المعاملات التي تحتاجها وما تُرجعه. يستخدم نموذج اللغة هذه الأوصاف كـ "دليله" لكودك.',
        'جمّع الدوال المترابطة في إضافات متماسكة بأسماء وصفية. "MathPlugin" مع جمع وطرح وضرب أفضل من إضافات منفصلة لكل عملية.',
        'استخدم FunctionChoiceBehavior.Auto() للمهام المفتوحة حيث يجب أن يقرر نموذج اللغة أي الدوال يستدعي، وFunctionChoiceBehavior.Required() عندما تعلم أن دالة محددة يجب استدعاؤها.',
        'استفد من دعم SK المدمج لخدمات ذكاء اصطناعي متعددة لإنشاء سلاسل احتياطية: جرب Azure OpenAI أولاً، وارجع إلى OpenAI إذا لم يكن متاحاً.',
      ],
    },
    references: [
      { title: 'Semantic Kernel Documentation', url: 'https://learn.microsoft.com/en-us/semantic-kernel/' },
      { title: 'Semantic Kernel GitHub Repository', url: 'https://github.com/microsoft/semantic-kernel' },
      { title: 'Semantic Kernel Python SDK', url: 'https://learn.microsoft.com/en-us/semantic-kernel/get-started/quick-start-guide' },
    ],
    quiz: [
      {
        id: 'batch8-q9',
        question: {
          en: 'What is the central object in Semantic Kernel that manages AI services and plugins?',
          ar: 'ما هو الكائن المركزي في Semantic Kernel الذي يدير خدمات الذكاء الاصطناعي والإضافات؟',
        },
        options: {
          en: [
            'The Agent',
            'The Kernel',
            'The Pipeline',
            'The Orchestrator',
          ],
          ar: [
            'الوكيل',
            'النواة',
            'خط الأنابيب',
            'المنسق',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The Kernel is the central object in Semantic Kernel. It acts as the dependency injection container where AI services are registered, plugins are added, and all AI operations are orchestrated.',
          ar: 'النواة هي الكائن المركزي في Semantic Kernel. تعمل كحاوية حقن التبعيات حيث تُسجل خدمات الذكاء الاصطناعي وتُضاف الإضافات وتُنسّق جميع عمليات الذكاء الاصطناعي.',
        },
      },
      {
        id: 'batch8-q10',
        question: {
          en: 'What is the difference between Native Functions and Semantic Functions in Semantic Kernel?',
          ar: 'ما الفرق بين الدوال الأصلية والدوال الدلالية في Semantic Kernel؟',
        },
        options: {
          en: [
            'Native Functions are faster; Semantic Functions are slower',
            'Native Functions are regular code methods; Semantic Functions are prompt templates sent to the LLM',
            'Native Functions work offline; Semantic Functions require internet',
            'Native Functions are for C# only; Semantic Functions are for Python only',
          ],
          ar: [
            'الدوال الأصلية أسرع؛ الدوال الدلالية أبطأ',
            'الدوال الأصلية هي دوال كود عادية؛ الدوال الدلالية هي قوالب مطالبات تُرسل إلى نموذج اللغة',
            'الدوال الأصلية تعمل بدون إنترنت؛ الدوال الدلالية تتطلب إنترنت',
            'الدوال الأصلية لـ C# فقط؛ الدوال الدلالية لـ Python فقط',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Native Functions are regular programming methods (Python, C#, Java) decorated with @kernel_function that run traditional code. Semantic Functions are prompt templates that get processed by the LLM. Both are treated uniformly by the Kernel.',
          ar: 'الدوال الأصلية هي دوال برمجة عادية (Python وC# وJava) مزينة بـ @kernel_function تنفذ كوداً تقليدياً. الدوال الدلالية هي قوالب مطالبات تُعالج بواسطة نموذج اللغة. كلاهما يُعامَل بشكل موحد بواسطة النواة.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Semantic Kernel Plugins & Planners
  // ─────────────────────────────────────────────
  'semantic-kernel-plugins-planners': {
    beginnerDefinition: {
      en: 'SK Plugins and Planners let you teach the AI what your application can do, and then let the AI figure out how to use those capabilities to accomplish user goals. A Plugin is like a toolbox of functions (e.g., send email, look up calendar, do math). A Planner is the AI\'s ability to look at all available tools and create a step-by-step plan to complete a task.',
      ar: 'إضافات ومخططات SK تتيح لك تعليم الذكاء الاصطناعي ما يمكن لتطبيقك فعله، ثم ترك الذكاء الاصطناعي يكتشف كيفية استخدام تلك القدرات لتحقيق أهداف المستخدم. الإضافة مثل صندوق أدوات من الدوال (مثل إرسال بريد إلكتروني، البحث في التقويم، إجراء حسابات). المخطط هو قدرة الذكاء الاصطناعي على النظر في جميع الأدوات المتاحة وإنشاء خطة خطوة بخطوة لإكمال مهمة.',
    },
    technicalDefinition: {
      en: 'Semantic Kernel Plugins are composable units of functionality containing one or more kernel functions (native or semantic). Each function exposes typed parameters with descriptions, enabling the LLM to invoke them via automatic function calling. Planners are specialized components that use the LLM to decompose complex user goals into ordered sequences of plugin function calls. The Handlebars Planner generates plans as Handlebars templates that orchestrate function calls with loops, conditionals, and variable passing. The Stepwise Planner uses a ReAct-style loop where the LLM reasons about each step, executes it, observes the result, and decides the next step. Function Calling Stepwise Planner leverages the model\'s native tool-use capabilities for more reliable step execution. Plans can be serialized, cached, and re-executed, enabling plan reuse and auditability.',
      ar: 'إضافات Semantic Kernel هي وحدات وظيفية قابلة للتركيب تحتوي على دالة نواة واحدة أو أكثر (أصلية أو دلالية). كل دالة تعرض معاملات مكتوبة مع أوصاف، مما يمكّن نموذج اللغة من استدعائها عبر الاستدعاء التلقائي للدوال. المخططون هم مكونات متخصصة تستخدم نموذج اللغة لتفكيك أهداف المستخدم المعقدة إلى تسلسلات مرتبة من استدعاءات دوال الإضافات. مخطط Handlebars يولد خططاً كقوالب Handlebars تنسق استدعاءات الدوال مع حلقات وشروط وتمرير متغيرات. المخطط التدريجي يستخدم حلقة بنمط ReAct حيث يفكر نموذج اللغة في كل خطوة وينفذها ويلاحظ النتيجة ويقرر الخطوة التالية. مخطط استدعاء الدوال التدريجي يستفيد من قدرات استخدام الأدوات الأصلية للنموذج لتنفيذ خطوات أكثر موثوقية. يمكن تسلسل الخطط وتخزينها مؤقتاً وإعادة تنفيذها، مما يتيح إعادة استخدام الخطط وقابلية المراجعة.',
    },
    analogy: {
      en: 'Imagine you are organizing a big dinner party. Your plugins are like the staff you have available: a chef (CookingPlugin), a sommelier (WinePlugin), a decorator (DecorPlugin), and a DJ (MusicPlugin). Each staff member has specific skills (the chef can prepare appetizers, main courses, and desserts). The Planner is like the event coordinator who hears "throw a romantic Italian dinner for two" and creates a plan: tell the chef to make bruschetta and pasta, have the sommelier pick a Chianti, instruct the decorator for candlelight, and ask the DJ for Italian jazz. The coordinator (Planner) knows each staff member\'s capabilities and sequences them into a coherent plan.',
      ar: 'تخيل أنك تنظم حفل عشاء كبير. إضافاتك مثل الموظفين المتاحين لديك: طاهٍ (CookingPlugin)، ومتذوق نبيذ (WinePlugin)، ومزيّن (DecorPlugin)، ودي جي (MusicPlugin). كل موظف لديه مهارات محددة (الطاهي يمكنه إعداد مقبلات وأطباق رئيسية وحلويات). المخطط مثل منسق الحدث الذي يسمع "أقم عشاء إيطالي رومانسي لشخصين" وينشئ خطة: أخبر الطاهي بإعداد بروشيتا ومعكرونة، واطلب من متذوق النبيذ اختيار كيانتي، ووجه المزيّن لإضاءة الشموع، واطلب من الدي جي موسيقى جاز إيطالية. المنسق (المخطط) يعرف قدرات كل موظف ويرتبها في خطة متماسكة.',
    },
    explanation: {
      en: [
        'Building a plugin in SK starts with creating a Python class and decorating its methods with @kernel_function. Each function must have a clear name, a detailed description, and typed parameters with their own descriptions. This metadata is what the LLM reads to understand how to use your functions. Good metadata is the difference between a plugin that works reliably and one that the LLM misuses.',
        'Semantic Functions let you define AI-powered operations as prompt templates. Instead of writing code, you write a prompt with template variables like "Summarize the following text in {{$style}} style: {{$input}}". The Kernel compiles this into a function that can be called just like a native function. This is powerful for text transformation tasks like summarization, translation, tone adjustment, and content generation.',
        'The Handlebars Planner generates executable plans as Handlebars templates. Given a user goal and the list of available plugin functions, it produces a template with helpers that map to function calls. The plan can include loops ({{#each}}), conditionals ({{#if}}), and variable assignments. Plans are text-based, so they can be logged, reviewed, and cached for reuse on similar requests.',
        'The Function Calling Stepwise Planner takes a different approach: it uses the LLM\'s built-in tool-calling capabilities in a loop. At each step, the LLM decides which function to call next based on the goal and previous results. It observes each function\'s output, reasons about what to do next, and continues until the goal is met or a maximum number of steps is reached. This is more flexible than Handlebars but harder to predict.',
        'Plugin composition is a key design pattern. You can create higher-level plugins that internally use other plugins. For example, a "TravelPlannerPlugin" might compose calls to a FlightsPlugin, HotelsPlugin, and WeatherPlugin. This layered approach keeps individual plugins simple and reusable while enabling complex workflows through composition.',
        'For production applications, it is important to implement guardrails around planners. Set maximum step limits to prevent runaway planning loops, validate function inputs before execution, implement retry logic for transient failures, and log every step for debugging and auditing. SK provides hooks and filters at various stages of execution that let you inject validation and monitoring logic.',
      ],
      ar: [
        'بناء إضافة في SK يبدأ بإنشاء فئة Python وتزيين دوالها بـ @kernel_function. يجب أن يكون لكل دالة اسم واضح ووصف مفصل ومعاملات مكتوبة مع أوصافها الخاصة. هذه البيانات الوصفية هي ما يقرأه نموذج اللغة لفهم كيفية استخدام دوالك. البيانات الوصفية الجيدة هي الفرق بين إضافة تعمل بموثوقية وأخرى يسيء نموذج اللغة استخدامها.',
        'الدوال الدلالية تتيح لك تعريف عمليات مدعومة بالذكاء الاصطناعي كقوالب مطالبات. بدلاً من كتابة كود، تكتب مطالبة بمتغيرات قالب مثل "لخص النص التالي بأسلوب {{$style}}: {{$input}}". تجمع النواة هذا في دالة يمكن استدعاؤها تماماً مثل دالة أصلية. هذا قوي لمهام تحويل النص مثل التلخيص والترجمة وتعديل النغمة وتوليد المحتوى.',
        'مخطط Handlebars يولد خططاً قابلة للتنفيذ كقوالب Handlebars. بالنظر إلى هدف المستخدم وقائمة دوال الإضافات المتاحة، ينتج قالباً بمساعدات تربط باستدعاءات الدوال. يمكن أن تتضمن الخطة حلقات ({{#each}}) وشروطاً ({{#if}}) وتعيينات متغيرات. الخطط نصية، لذا يمكن تسجيلها ومراجعتها وتخزينها مؤقتاً لإعادة الاستخدام في طلبات مماثلة.',
        'مخطط استدعاء الدوال التدريجي يأخذ نهجاً مختلفاً: يستخدم قدرات استدعاء الأدوات المدمجة في نموذج اللغة في حلقة. في كل خطوة، يقرر نموذج اللغة أي دالة يستدعي بعد ذلك بناءً على الهدف والنتائج السابقة. يلاحظ مخرجات كل دالة، ويفكر فيما يفعل بعد ذلك، ويستمر حتى يتحقق الهدف أو يصل لعدد أقصى من الخطوات. هذا أكثر مرونة من Handlebars لكنه أصعب في التنبؤ.',
        'تركيب الإضافات نمط تصميم رئيسي. يمكنك إنشاء إضافات عالية المستوى تستخدم داخلياً إضافات أخرى. على سبيل المثال، "TravelPlannerPlugin" قد تركب استدعاءات لـ FlightsPlugin وHotelsPlugin وWeatherPlugin. هذا النهج الطبقي يبقي الإضافات الفردية بسيطة وقابلة لإعادة الاستخدام مع تمكين سير عمل معقد عبر التركيب.',
        'لتطبيقات الإنتاج، من المهم تنفيذ حواجز حماية حول المخططين. حدد حدوداً قصوى للخطوات لمنع حلقات التخطيط الخارجة عن السيطرة، وتحقق من مدخلات الدوال قبل التنفيذ، ونفذ منطق إعادة المحاولة للأعطال العابرة، وسجل كل خطوة للتصحيح والمراجعة. يوفر SK خطافات وفلاتر في مراحل مختلفة من التنفيذ تتيح لك حقن منطق التحقق والمراقبة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import asyncio
from semantic_kernel import Kernel
from semantic_kernel.functions import kernel_function
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion
from semantic_kernel.planners import FunctionCallingStepwisePlanner
from semantic_kernel.planners.function_calling_stepwise_planner.function_calling_stepwise_planner_options import (
    FunctionCallingStepwisePlannerOptions,
)

# --- Native Plugin: Email Operations ---
class EmailPlugin:
    """Plugin for email operations."""

    @kernel_function(
        name="send_email",
        description="Send an email to a recipient with a subject and body.",
    )
    def send_email(self, to: str, subject: str, body: str) -> str:
        return f"Email sent to {to}: [{subject}] {body[:50]}..."

    @kernel_function(
        name="search_inbox",
        description="Search inbox for emails matching a query string.",
    )
    def search_inbox(self, query: str) -> str:
        return f"Found 2 emails matching '{query}': 1) Project update, 2) Meeting notes"

# --- Native Plugin: Task Management ---
class TaskPlugin:
    """Plugin for managing tasks and to-do items."""

    @kernel_function(
        name="create_task",
        description="Create a new task with a title, description, and due date.",
    )
    def create_task(self, title: str, description: str, due_date: str) -> str:
        return f"Task created: '{title}' due {due_date}"

    @kernel_function(
        name="list_tasks",
        description="List all pending tasks, optionally filtered by status.",
    )
    def list_tasks(self, status: str = "pending") -> str:
        return f"Pending tasks: 1) Review PR, 2) Update docs, 3) Deploy v2"

async def main():
    kernel = Kernel()
    kernel.add_service(
        OpenAIChatCompletion(service_id="chat", ai_model_id="gpt-4o")
    )

    # Register plugins
    kernel.add_plugin(EmailPlugin(), plugin_name="Email")
    kernel.add_plugin(TaskPlugin(), plugin_name="Tasks")

    # --- Semantic Function (prompt template) ---
    summarize_fn = kernel.add_function(
        plugin_name="TextUtils",
        function_name="summarize",
        prompt="Summarize the following in one sentence: {{$input}}",
        description="Summarize text into a single concise sentence.",
    )

    # --- Use the Stepwise Planner ---
    planner = FunctionCallingStepwisePlanner(
        service_id="chat",
        options=FunctionCallingStepwisePlannerOptions(
            max_iterations=10,
            max_tokens=4000,
        ),
    )

    # The planner figures out the steps automatically
    result = await planner.invoke(
        kernel,
        "Find my recent project emails, create a task from them, "
        "and send a summary email to manager@company.com",
    )
    print(f"Plan result: {result.final_answer}")

asyncio.run(main())`,
      description: {
        en: 'A complete SK application with native plugins (Email, Tasks), a semantic function (summarize), and a Stepwise Planner that automatically chains plugin functions to accomplish a complex multi-step goal.',
        ar: 'تطبيق SK كامل مع إضافات أصلية (البريد الإلكتروني والمهام)، ودالة دلالية (التلخيص)، ومخطط تدريجي يربط تلقائياً دوال الإضافات لإنجاز هدف معقد متعدد الخطوات.',
      },
    },
    commonMistakes: {
      en: [
        'Not setting max_iterations on planners, allowing the LLM to run indefinitely and consume excessive tokens when it gets stuck in a reasoning loop.',
        'Creating functions with overlapping descriptions, confusing the LLM about which function to call. Each function should have a unique, unambiguous purpose.',
        'Ignoring error handling in plugin functions. When a function throws an unhandled exception, the planner cannot recover gracefully. Always return informative error messages.',
        'Over-engineering plans for simple tasks. If a task only needs one function call, use direct invocation (kernel.invoke) instead of a planner.',
      ],
      ar: [
        'عدم تعيين max_iterations في المخططين، مما يسمح لنموذج اللغة بالعمل إلى ما لا نهاية واستهلاك رموز مفرطة عندما يعلق في حلقة استدلال.',
        'إنشاء دوال بأوصاف متداخلة، مما يربك نموذج اللغة حول أي دالة يستدعي. يجب أن يكون لكل دالة غرض فريد لا لبس فيه.',
        'تجاهل معالجة الأخطاء في دوال الإضافات. عندما ترمي دالة استثناءً غير معالج، لا يستطيع المخطط التعافي بسلاسة. أرجع دائماً رسائل خطأ مفيدة.',
        'الإفراط في هندسة الخطط لمهام بسيطة. إذا كانت المهمة تحتاج استدعاء دالة واحدة فقط، استخدم الاستدعاء المباشر (kernel.invoke) بدلاً من مخطط.',
      ],
    },
    bestPractices: {
      en: [
        'Design plugins around business domains (EmailPlugin, CalendarPlugin) rather than technical capabilities (StringPlugin, HttpPlugin). Domain-oriented plugins are easier for the LLM to understand and select.',
        'Set reasonable max_iterations (5-15) on planners and implement a fallback response when the planner reaches the limit without completing the task.',
        'Test plugins independently by invoking each function directly before using them with a planner. Verify that each function works correctly in isolation.',
        'Use SK filters and hooks to log every function call, its parameters, and return values. This provides an audit trail for debugging and compliance.',
      ],
      ar: [
        'صمم الإضافات حول مجالات الأعمال (EmailPlugin وCalendarPlugin) بدلاً من القدرات التقنية (StringPlugin وHttpPlugin). الإضافات الموجهة نحو المجال أسهل لنموذج اللغة في الفهم والاختيار.',
        'حدد max_iterations معقولة (5-15) في المخططين ونفذ استجابة احتياطية عندما يصل المخطط إلى الحد دون إكمال المهمة.',
        'اختبر الإضافات بشكل مستقل باستدعاء كل دالة مباشرة قبل استخدامها مع مخطط. تحقق من أن كل دالة تعمل بشكل صحيح بمعزل.',
        'استخدم فلاتر وخطافات SK لتسجيل كل استدعاء دالة ومعاملاته وقيمه المُرجعة. هذا يوفر مسار مراجعة للتصحيح والامتثال.',
      ],
    },
    references: [
      { title: 'SK Plugins Documentation', url: 'https://learn.microsoft.com/en-us/semantic-kernel/concepts/plugins/' },
      { title: 'SK Planners Guide', url: 'https://learn.microsoft.com/en-us/semantic-kernel/concepts/planning' },
      { title: 'SK Function Calling', url: 'https://learn.microsoft.com/en-us/semantic-kernel/concepts/ai-services/chat-completion/function-calling/' },
    ],
    quiz: [
      {
        id: 'batch8-q11',
        question: {
          en: 'What does a Planner do in Semantic Kernel?',
          ar: 'ماذا يفعل المخطط في Semantic Kernel؟',
        },
        options: {
          en: [
            'It trains the LLM on new data',
            'It uses the LLM to decompose user goals into a sequence of plugin function calls',
            'It schedules when plugins are loaded into memory',
            'It manages database connections for plugins',
          ],
          ar: [
            'يدرب نموذج اللغة على بيانات جديدة',
            'يستخدم نموذج اللغة لتفكيك أهداف المستخدم إلى تسلسل من استدعاءات دوال الإضافات',
            'يجدول متى يتم تحميل الإضافات في الذاكرة',
            'يدير اتصالات قواعد البيانات للإضافات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A Planner in SK uses the LLM to analyze available plugin functions and the user\'s goal, then generates an executable plan (a sequence of function calls) to accomplish that goal.',
          ar: 'يستخدم المخطط في SK نموذج اللغة لتحليل دوال الإضافات المتاحة وهدف المستخدم، ثم يولد خطة قابلة للتنفيذ (تسلسل من استدعاءات الدوال) لتحقيق ذلك الهدف.',
        },
      },
      {
        id: 'batch8-q12',
        question: {
          en: 'What is the advantage of the Handlebars Planner over the Stepwise Planner?',
          ar: 'ما ميزة مخطط Handlebars على المخطط التدريجي؟',
        },
        options: {
          en: [
            'It is always faster',
            'It generates a complete plan as a reusable template that can be cached and re-executed',
            'It does not require an LLM',
            'It supports more programming languages',
          ],
          ar: [
            'دائماً أسرع',
            'يولد خطة كاملة كقالب قابل لإعادة الاستخدام يمكن تخزينه مؤقتاً وإعادة تنفيذه',
            'لا يتطلب نموذج لغة',
            'يدعم لغات برمجة أكثر',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The Handlebars Planner generates the entire plan upfront as a Handlebars template. This template can be serialized, cached, and re-executed for similar requests without re-invoking the LLM for planning, saving cost and latency.',
          ar: 'يولد مخطط Handlebars الخطة الكاملة مسبقاً كقالب Handlebars. يمكن تسلسل هذا القالب وتخزينه مؤقتاً وإعادة تنفيذه لطلبات مماثلة دون إعادة استدعاء نموذج اللغة للتخطيط، مما يوفر التكلفة وزمن الاستجابة.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. OpenAI Agents SDK Introduction
  // ─────────────────────────────────────────────
  'openai-agents-sdk-introduction': {
    beginnerDefinition: {
      en: 'The OpenAI Agents SDK is a Python framework from OpenAI for building AI agents that can use tools, follow instructions, hand off conversations to other agents, and enforce safety rules. It provides simple building blocks: an Agent (an AI with instructions and tools), a Runner (which executes the agent loop), Handoffs (passing control between agents), and Guardrails (safety checks on inputs and outputs).',
      ar: 'حزمة OpenAI Agents SDK هي إطار عمل بلغة بايثون من OpenAI لبناء وكلاء ذكاء اصطناعي يمكنهم استخدام الأدوات واتباع التعليمات وتسليم المحادثات إلى وكلاء آخرين وفرض قواعد السلامة. توفر لبنات بناء بسيطة: وكيل (ذكاء اصطناعي بتعليمات وأدوات)، ومشغّل (ينفذ حلقة الوكيل)، والتسليمات (نقل التحكم بين الوكلاء)، والحواجز الأمنية (فحوصات سلامة على المدخلات والمخرجات).',
    },
    technicalDefinition: {
      en: 'The OpenAI Agents SDK (formerly OpenAI Swarm) is a lightweight, production-grade Python framework for building agentic applications. Its core primitives are: Agent (a configuration object combining a model, system instructions, tools, handoffs, and output type), Runner (the execution engine that manages the agent loop of calling the LLM, executing tool calls, and processing handoffs), Handoffs (mechanisms for transferring conversation control between specialized agents with optional context filtering), and Guardrails (input and output validators that run in parallel with agent execution to enforce safety constraints). The SDK is built on top of OpenAI\'s Chat Completions API with native support for function calling, structured outputs via Pydantic, and comprehensive tracing for observability.',
      ar: 'حزمة OpenAI Agents SDK (المعروفة سابقاً بـ OpenAI Swarm) هي إطار عمل Python خفيف الوزن وجاهز للإنتاج لبناء تطبيقات وكيلية. بدائياتها الأساسية هي: الوكيل (كائن تكوين يجمع بين نموذج وتعليمات نظام وأدوات وتسليمات ونوع مخرجات)، والمشغّل (محرك التنفيذ الذي يدير حلقة الوكيل من استدعاء نموذج اللغة وتنفيذ استدعاءات الأدوات ومعالجة التسليمات)، والتسليمات (آليات لنقل التحكم في المحادثة بين وكلاء متخصصين مع تصفية سياق اختيارية)، والحواجز الأمنية (مدققات المدخلات والمخرجات التي تعمل بالتوازي مع تنفيذ الوكيل لفرض قيود السلامة). الحزمة مبنية فوق واجهة Chat Completions من OpenAI مع دعم أصلي لاستدعاء الدوال والمخرجات المنظمة عبر Pydantic وتتبع شامل لقابلية المراقبة.',
    },
    analogy: {
      en: 'Think of the OpenAI Agents SDK like a customer service call center. Each Agent is a specialist operator with their own script (instructions) and tools (computer systems they can access). The Runner is the phone system that keeps the call going, connecting speakers and managing the flow. Handoffs are like call transfers: when you call about a billing issue and the general operator says "Let me transfer you to our billing department" - that is a handoff to a specialist agent. Guardrails are like the compliance team listening in to make sure operators follow the rules and do not share sensitive data.',
      ar: 'فكر في OpenAI Agents SDK مثل مركز اتصال خدمة العملاء. كل وكيل هو عامل متخصص بنصه الخاص (التعليمات) وأدواته (أنظمة الكمبيوتر التي يمكنه الوصول إليها). المشغّل هو نظام الهاتف الذي يبقي المكالمة جارية، ويربط المتحدثين ويدير التدفق. التسليمات مثل تحويلات المكالمات: عندما تتصل بشأن مشكلة فوترة ويقول العامل العام "دعني أحولك إلى قسم الفوترة" - هذا تسليم إلى وكيل متخصص. الحواجز الأمنية مثل فريق الامتثال الذي يستمع للتأكد من أن العاملين يتبعون القواعد ولا يشاركون بيانات حساسة.',
    },
    explanation: {
      en: [
        'The Agent is the core building block. You create an agent by specifying its name, instructions (system prompt), model, tools it can use, and any agents it can hand off to. The agent itself is just a configuration object; it does not do anything until a Runner executes it. This separation of configuration from execution makes agents easy to define, test, and reuse.',
        'Tools in the Agents SDK are Python functions decorated with a simple decorator or defined as function schemas. When the LLM decides it needs to use a tool, the Runner calls the function, passes the arguments, and sends the result back to the LLM. You can define tools for web search, file operations, database queries, API calls, or any custom logic. The SDK also includes built-in tools like WebSearchTool and FileSearchTool.',
        'The Runner is the execution engine. When you call Runner.run(agent, messages), it starts a loop: send messages to the LLM, check if the LLM wants to call a tool or handoff, execute the action, send results back, and repeat until the LLM produces a final text response. The Runner handles the complexity of multi-turn tool calling and agent switching transparently.',
        'Handoffs enable multi-agent architectures. You can define a triage agent that analyzes the user request and hands off to a specialist. A handoff is simply a reference to another agent with an optional description. When the LLM decides to handoff, the Runner switches to the new agent while preserving conversation history. This creates flexible routing patterns without complex orchestration code.',
        'Guardrails are safety validators that run alongside the agent. Input guardrails check the user message before the agent processes it (for example, rejecting off-topic requests). Output guardrails validate the agent\'s response before returning it to the user (for example, checking for PII leakage). Guardrails are defined as functions that receive the context and return a pass/fail result with a reason. They run in parallel with the agent for efficiency.',
        'The SDK supports structured outputs using Pydantic models. You can specify an output_type on the Agent, and the SDK instructs the LLM to return a response conforming to that schema. This is essential for building reliable applications where the agent\'s output feeds into downstream systems that expect specific data formats.',
      ],
      ar: [
        'الوكيل هو لبنة البناء الأساسية. تنشئ وكيلاً بتحديد اسمه وتعليماته (مطالبة النظام) ونموذجه والأدوات التي يمكنه استخدامها وأي وكلاء يمكنه التسليم إليهم. الوكيل نفسه مجرد كائن تكوين؛ لا يفعل شيئاً حتى ينفذه مشغّل. هذا الفصل بين التكوين والتنفيذ يجعل الوكلاء سهلي التعريف والاختبار وإعادة الاستخدام.',
        'الأدوات في Agents SDK هي دوال Python مزينة بمزخرف بسيط أو معرّفة كمخططات دوال. عندما يقرر نموذج اللغة أنه يحتاج استخدام أداة، يستدعي المشغّل الدالة ويمرر الوسائط ويرسل النتيجة مرة أخرى إلى نموذج اللغة. يمكنك تعريف أدوات للبحث في الويب وعمليات الملفات واستعلامات قواعد البيانات واستدعاءات واجهات البرمجة أو أي منطق مخصص. تتضمن الحزمة أيضاً أدوات مدمجة مثل WebSearchTool وFileSearchTool.',
        'المشغّل هو محرك التنفيذ. عندما تستدعي Runner.run(agent, messages)، يبدأ حلقة: إرسال الرسائل إلى نموذج اللغة، والتحقق مما إذا كان نموذج اللغة يريد استدعاء أداة أو تسليم، وتنفيذ الإجراء، وإرسال النتائج مرة أخرى، والتكرار حتى ينتج نموذج اللغة استجابة نصية نهائية. يتعامل المشغّل مع تعقيد استدعاء الأدوات متعدد الأدوار وتبديل الوكلاء بشفافية.',
        'التسليمات تمكّن البنى متعددة الوكلاء. يمكنك تعريف وكيل فرز يحلل طلب المستخدم ويسلم إلى متخصص. التسليم ببساطة مرجع إلى وكيل آخر مع وصف اختياري. عندما يقرر نموذج اللغة التسليم، يتحول المشغّل إلى الوكيل الجديد مع الحفاظ على تاريخ المحادثة. هذا يخلق أنماط توجيه مرنة دون كود تنسيق معقد.',
        'الحواجز الأمنية هي مدققات سلامة تعمل بجانب الوكيل. حواجز المدخلات تتحقق من رسالة المستخدم قبل أن يعالجها الوكيل (على سبيل المثال، رفض الطلبات خارج الموضوع). حواجز المخرجات تتحقق من استجابة الوكيل قبل إرجاعها للمستخدم (على سبيل المثال، التحقق من تسرب معلومات شخصية). تُعرَّف الحواجز كدوال تستقبل السياق وتُرجع نتيجة نجاح/فشل مع سبب. تعمل بالتوازي مع الوكيل للكفاءة.',
        'تدعم الحزمة المخرجات المنظمة باستخدام نماذج Pydantic. يمكنك تحديد output_type على الوكيل، وتوجه الحزمة نموذج اللغة لإرجاع استجابة مطابقة لذلك المخطط. هذا ضروري لبناء تطبيقات موثوقة حيث يغذي ناتج الوكيل أنظمة لاحقة تتوقع صيغ بيانات محددة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from agents import Agent, Runner, function_tool, handoff, GuardrailFunctionOutput, InputGuardrail
from pydantic import BaseModel

# --- Define Tools ---
@function_tool
def lookup_order(order_id: str) -> str:
    """Look up an order by its ID and return its status."""
    return f"Order {order_id}: Shipped on May 5, arriving May 8."

@function_tool
def process_refund(order_id: str, reason: str) -> str:
    """Process a refund for a given order."""
    return f"Refund initiated for order {order_id}. Reason: {reason}"

# --- Define Guardrail ---
async def check_topic(ctx, agent, input_data):
    """Reject messages not related to orders or support."""
    result = await Runner.run(
        Agent(
            name="Topic Checker",
            instructions="Return 'on_topic' if about orders/support, else 'off_topic'.",
        ),
        input_data,
    )
    is_on = "on_topic" in result.final_output.lower()
    return GuardrailFunctionOutput(
        output_info={"on_topic": is_on},
        tripwire_triggered=not is_on,
    )

# --- Define Specialist Agents ---
order_agent = Agent(
    name="Order Specialist",
    instructions="You help customers track and manage their orders.",
    tools=[lookup_order],
)

refund_agent = Agent(
    name="Refund Specialist",
    instructions="You handle refund requests. Always confirm the reason.",
    tools=[process_refund],
)

# --- Define Triage Agent with Handoffs ---
triage_agent = Agent(
    name="Customer Support",
    instructions="""You are the first point of contact. Determine what
    the customer needs and transfer to the right specialist.""",
    handoffs=[
        handoff(agent=order_agent, description="For order tracking"),
        handoff(agent=refund_agent, description="For refund requests"),
    ],
    input_guardrails=[
        InputGuardrail(guardrail_function=check_topic),
    ],
)

# --- Run the Agent ---
import asyncio

async def main():
    result = await Runner.run(
        triage_agent,
        "Can you check the status of order #12345?",
    )
    print(f"Response: {result.final_output}")

asyncio.run(main())`,
      description: {
        en: 'A multi-agent customer support system using the OpenAI Agents SDK. A triage agent with input guardrails routes customers to order or refund specialists via handoffs.',
        ar: 'نظام دعم عملاء متعدد الوكلاء باستخدام OpenAI Agents SDK. وكيل فرز بحواجز أمنية للمدخلات يوجه العملاء إلى متخصصين في الطلبات أو الاستردادات عبر التسليمات.',
      },
    },
    commonMistakes: {
      en: [
        'Confusing the Agent (configuration) with the Runner (execution). The Agent only defines behavior; the Runner actually runs the agentic loop. Always use Runner.run() to execute an agent.',
        'Not implementing guardrails for production agents, leaving the system vulnerable to prompt injection, off-topic abuse, or sensitive data leakage in responses.',
        'Creating overly complex handoff chains where it is unclear which agent is responsible. Keep the handoff graph simple and well-documented.',
        'Forgetting to handle the case where a guardrail trips. When a guardrail triggers, you need to return a user-friendly message explaining why the request was rejected.',
      ],
      ar: [
        'الخلط بين الوكيل (التكوين) والمشغّل (التنفيذ). الوكيل يعرّف السلوك فقط؛ المشغّل ينفذ فعلياً الحلقة الوكيلية. استخدم دائماً Runner.run() لتنفيذ وكيل.',
        'عدم تنفيذ حواجز أمنية لوكلاء الإنتاج، مما يترك النظام عرضة لحقن المطالبات أو الإساءة خارج الموضوع أو تسرب بيانات حساسة في الاستجابات.',
        'إنشاء سلاسل تسليم معقدة للغاية حيث لا يتضح أي وكيل مسؤول. اجعل رسم التسليمات بسيطاً وموثقاً جيداً.',
        'نسيان معالجة الحالة عند تشغيل حاجز أمني. عندما يُفعّل حاجز أمني، تحتاج إلى إرجاع رسالة سهلة الفهم توضح سبب رفض الطلب.',
      ],
    },
    bestPractices: {
      en: [
        'Use a triage agent pattern for multi-agent systems: one front-door agent determines intent and hands off to specialists, keeping routing logic centralized and maintainable.',
        'Always implement both input and output guardrails for production agents. Input guardrails catch malicious or off-topic requests early; output guardrails prevent sensitive data from leaking.',
        'Keep agent instructions concise and focused. An agent with a 2000-word system prompt is harder for the LLM to follow than one with clear, bullet-pointed instructions.',
        'Use structured outputs (output_type) when your agent\'s response feeds into other systems, ensuring consistent and parseable data formats.',
      ],
      ar: [
        'استخدم نمط وكيل الفرز لأنظمة متعددة الوكلاء: وكيل واحد في المقدمة يحدد النية ويسلم إلى المتخصصين، مما يبقي منطق التوجيه مركزياً وقابلاً للصيانة.',
        'نفذ دائماً حواجز أمنية للمدخلات والمخرجات لوكلاء الإنتاج. حواجز المدخلات تلتقط الطلبات الخبيثة أو خارج الموضوع مبكراً؛ حواجز المخرجات تمنع تسرب البيانات الحساسة.',
        'اجعل تعليمات الوكيل موجزة ومركزة. وكيل بمطالبة نظام من 2000 كلمة أصعب على نموذج اللغة في المتابعة من وكيل بتعليمات واضحة بنقاط.',
        'استخدم المخرجات المنظمة (output_type) عندما تغذي استجابة وكيلك أنظمة أخرى، مما يضمن صيغ بيانات متسقة وقابلة للتحليل.',
      ],
    },
    references: [
      { title: 'OpenAI Agents SDK Documentation', url: 'https://openai.github.io/openai-agents-python/' },
      { title: 'OpenAI Agents SDK GitHub Repository', url: 'https://github.com/openai/openai-agents-python' },
      { title: 'OpenAI Agents SDK Quickstart', url: 'https://openai.github.io/openai-agents-python/quickstart/' },
    ],
    quiz: [
      {
        id: 'batch8-q13',
        question: {
          en: 'What are the four core primitives of the OpenAI Agents SDK?',
          ar: 'ما هي البدائيات الأساسية الأربع لحزمة OpenAI Agents SDK؟',
        },
        options: {
          en: [
            'Model, Prompt, Chain, Memory',
            'Agent, Runner, Handoffs, Guardrails',
            'Worker, Queue, Router, Validator',
            'Client, Server, Middleware, Plugin',
          ],
          ar: [
            'النموذج والمطالبة والسلسلة والذاكرة',
            'الوكيل والمشغّل والتسليمات والحواجز الأمنية',
            'العامل والطابور والموجه والمدقق',
            'العميل والخادم والوسيط والإضافة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The OpenAI Agents SDK is built around four core primitives: Agent (configuration with instructions and tools), Runner (execution engine), Handoffs (inter-agent control transfer), and Guardrails (safety validators).',
          ar: 'بُنيت OpenAI Agents SDK حول أربع بدائيات أساسية: الوكيل (تكوين بتعليمات وأدوات)، والمشغّل (محرك التنفيذ)، والتسليمات (نقل التحكم بين الوكلاء)، والحواجز الأمنية (مدققات السلامة).',
        },
      },
      {
        id: 'batch8-q14',
        question: {
          en: 'What is the purpose of a Handoff in the OpenAI Agents SDK?',
          ar: 'ما هو الغرض من التسليم في OpenAI Agents SDK؟',
        },
        options: {
          en: [
            'To save the conversation to a database',
            'To transfer control of the conversation from one agent to a more specialized agent',
            'To end the conversation and disconnect the user',
            'To send the conversation transcript via email',
          ],
          ar: [
            'لحفظ المحادثة في قاعدة بيانات',
            'لنقل التحكم في المحادثة من وكيل إلى وكيل أكثر تخصصاً',
            'لإنهاء المحادثة وقطع الاتصال بالمستخدم',
            'لإرسال نص المحادثة عبر البريد الإلكتروني',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A Handoff transfers conversation control from the current agent to another agent better suited for the user\'s request. The conversation history is preserved, allowing the new agent to continue seamlessly.',
          ar: 'التسليم ينقل التحكم في المحادثة من الوكيل الحالي إلى وكيل آخر أكثر ملاءمة لطلب المستخدم. يُحفظ تاريخ المحادثة، مما يسمح للوكيل الجديد بالمتابعة بسلاسة.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. OpenAI Agents SDK Advanced
  // ─────────────────────────────────────────────
  'openai-agents-sdk-advanced': {
    beginnerDefinition: {
      en: 'Advanced features of the OpenAI Agents SDK let you build sophisticated production systems. Tracing records everything your agent does for debugging. Multi-agent orchestration coordinates complex teams of agents. Streaming delivers responses to users in real time as the agent works. Together, these features turn simple prototypes into reliable, observable, production-ready agent applications.',
      ar: 'الميزات المتقدمة لحزمة OpenAI Agents SDK تتيح لك بناء أنظمة إنتاج متطورة. التتبع يسجل كل ما يفعله وكيلك لأغراض التصحيح. تنسيق الوكلاء المتعددين ينسق فرقاً معقدة من الوكلاء. البث يوصل الاستجابات للمستخدمين في الوقت الحقيقي أثناء عمل الوكيل. معاً، هذه الميزات تحول النماذج الأولية البسيطة إلى تطبيقات وكلاء موثوقة وقابلة للمراقبة وجاهزة للإنتاج.',
    },
    technicalDefinition: {
      en: 'Advanced OpenAI Agents SDK capabilities include: Tracing (automatic instrumentation that captures agent runs, LLM calls, tool executions, handoffs, and guardrail checks as hierarchical spans, exportable to OpenAI Dashboard or custom backends via trace processors), Multi-Agent Orchestration (complex agent topologies beyond simple handoffs, including agent-as-tool patterns where one agent invokes another as a tool call, dynamic agent creation, and context-aware routing with filtered conversation history), and Streaming (Server-Sent Events-based real-time output via Runner.run_streamed() that emits granular events for raw LLM deltas, tool call starts/completions, handoff events, and guardrail results, enabling responsive UIs). Additional advanced features include custom tool error recovery, model context protocol (MCP) server integration, lifecycle hooks, and output type unions for agents that return different structured types based on context.',
      ar: 'تشمل القدرات المتقدمة لحزمة OpenAI Agents SDK: التتبع (أداة قياس تلقائية تلتقط تشغيل الوكلاء واستدعاءات نموذج اللغة وتنفيذ الأدوات والتسليمات وفحوصات الحواجز الأمنية كنطاقات هرمية، قابلة للتصدير إلى لوحة OpenAI أو واجهات خلفية مخصصة عبر معالجات التتبع)، وتنسيق الوكلاء المتعددين (طوبولوجيات وكلاء معقدة تتجاوز التسليمات البسيطة، بما في ذلك أنماط الوكيل كأداة حيث يستدعي وكيل آخر كاستدعاء أداة، وإنشاء وكلاء ديناميكي، والتوجيه الواعي بالسياق مع تاريخ محادثة مصفى)، والبث (مخرجات في الوقت الحقيقي عبر أحداث مرسلة من الخادم عبر Runner.run_streamed() التي تصدر أحداثاً دقيقة لدلتا نموذج اللغة الخام وبدايات/اكتمالات استدعاءات الأدوات وأحداث التسليم ونتائج الحواجز الأمنية، مما يمكّن واجهات مستخدم متجاوبة). تشمل الميزات المتقدمة الإضافية استرداد أخطاء الأدوات المخصصة وتكامل خادم بروتوكول سياق النموذج (MCP) وخطافات دورة الحياة واتحادات أنواع المخرجات للوكلاء التي تُرجع أنواعاً منظمة مختلفة بناءً على السياق.',
    },
    analogy: {
      en: 'Imagine a busy hospital emergency room. Tracing is like the medical chart that follows each patient: every doctor, nurse, test, and medication is recorded so anyone can review what happened and why (debugging and auditing). Multi-agent orchestration is the hospital\'s triage system: the intake nurse (triage agent) evaluates patients, routes them to the right specialist (cardiologist, orthopedist), and specialists can consult each other or call in sub-specialists (agent-as-tool). Streaming is like real-time vital signs on a monitor: instead of waiting for the final diagnosis, you see the heart rate, blood pressure, and oxygen levels updating live as the doctor works.',
      ar: 'تخيل غرفة طوارئ مستشفى مزدحمة. التتبع مثل السجل الطبي الذي يتبع كل مريض: كل طبيب وممرض وفحص ودواء يُسجل حتى يتمكن أي شخص من مراجعة ما حدث ولماذا (التصحيح والمراجعة). تنسيق الوكلاء المتعددين مثل نظام الفرز في المستشفى: ممرض الاستقبال (وكيل الفرز) يقيّم المرضى ويوجههم إلى المتخصص المناسب (طبيب قلب، أخصائي عظام)، ويمكن للمتخصصين استشارة بعضهم أو استدعاء متخصصين فرعيين (الوكيل كأداة). البث مثل العلامات الحيوية في الوقت الحقيقي على شاشة: بدلاً من انتظار التشخيص النهائي، ترى معدل ضربات القلب وضغط الدم ومستويات الأكسجين تتحدث مباشرة أثناء عمل الطبيب.',
    },
    explanation: {
      en: [
        'Tracing is built into the SDK and automatically captures every step of agent execution. Each agent run creates a trace containing spans for LLM calls (with input/output tokens, latency), tool executions (with arguments and results), handoffs (with source and target agents), and guardrail evaluations. Traces are viewable in the OpenAI Dashboard for debugging, and you can export them to custom observability backends using trace processors.',
        'Custom trace processors let you integrate tracing with your existing observability stack. You can implement a TracingProcessor that sends spans to Datadog, Jaeger, or any OpenTelemetry-compatible backend. This is critical for production systems where you need unified monitoring across your entire application, not just the agent components.',
        'The agent-as-tool pattern is a powerful orchestration technique. Instead of using handoffs (which transfer control entirely), you can wrap an agent as a tool that another agent calls. The outer agent invokes the inner agent, receives its output as a tool result, and continues its own reasoning. This enables hub-and-spoke architectures where a coordinator agent delegates subtasks to specialized agents without losing control of the overall conversation.',
        'Dynamic agent creation allows building agents on the fly based on runtime conditions. You can create agents with different instructions, tools, or model configurations based on user preferences, tenant settings, or conversation context. This enables personalized agent experiences and multi-tenant applications where each tenant gets a customized agent behavior.',
        'Streaming with Runner.run_streamed() delivers real-time events as the agent works. The stream emits RawResponsesStreamEvent (token-by-token LLM output), RunItemStreamEvent (tool calls, tool results, handoffs), and AgentUpdatedStreamEvent (when the active agent changes). You can use these events to build responsive UIs that show typing indicators, tool execution progress, and real-time responses.',
        'Context management in multi-agent systems is crucial. When using handoffs, you can filter the conversation history passed to the target agent using input_filter. This prevents irrelevant conversation history from confusing specialist agents and reduces token usage. You can also inject context variables that are available to all agents and tools through the RunContextWrapper, enabling shared state across the agent network.',
      ],
      ar: [
        'التتبع مدمج في الحزمة ويلتقط تلقائياً كل خطوة من تنفيذ الوكيل. كل تشغيل وكيل ينشئ تتبعاً يحتوي على نطاقات لاستدعاءات نموذج اللغة (مع رموز الإدخال/الإخراج وزمن الاستجابة)، وتنفيذ الأدوات (مع الوسائط والنتائج)، والتسليمات (مع الوكيل المصدر والهدف)، وتقييمات الحواجز الأمنية. يمكن عرض التتبعات في لوحة OpenAI للتصحيح، ويمكنك تصديرها إلى واجهات مراقبة مخصصة باستخدام معالجات التتبع.',
        'معالجات التتبع المخصصة تتيح لك دمج التتبع مع مكدس المراقبة الحالي. يمكنك تنفيذ TracingProcessor يرسل النطاقات إلى Datadog أو Jaeger أو أي واجهة خلفية متوافقة مع OpenTelemetry. هذا حاسم لأنظمة الإنتاج حيث تحتاج مراقبة موحدة عبر تطبيقك بالكامل، وليس فقط مكونات الوكيل.',
        'نمط الوكيل كأداة تقنية تنسيق قوية. بدلاً من استخدام التسليمات (التي تنقل التحكم بالكامل)، يمكنك لف وكيل كأداة يستدعيها وكيل آخر. الوكيل الخارجي يستدعي الوكيل الداخلي، ويستقبل مخرجاته كنتيجة أداة، ويواصل استدلاله الخاص. هذا يمكّن بنى المحور والأذرع حيث يفوض وكيل منسق المهام الفرعية إلى وكلاء متخصصين دون فقدان التحكم في المحادثة الشاملة.',
        'إنشاء الوكلاء الديناميكي يسمح ببناء وكلاء أثناء التشغيل بناءً على ظروف وقت التشغيل. يمكنك إنشاء وكلاء بتعليمات وأدوات وتكوينات نموذج مختلفة بناءً على تفضيلات المستخدم أو إعدادات المستأجر أو سياق المحادثة. هذا يمكّن تجارب وكلاء مخصصة وتطبيقات متعددة المستأجرين حيث يحصل كل مستأجر على سلوك وكيل مخصص.',
        'البث مع Runner.run_streamed() يوصل أحداثاً في الوقت الحقيقي أثناء عمل الوكيل. يصدر البث RawResponsesStreamEvent (إخراج نموذج اللغة رمزاً برمز)، وRunItemStreamEvent (استدعاءات الأدوات ونتائج الأدوات والتسليمات)، وAgentUpdatedStreamEvent (عندما يتغير الوكيل النشط). يمكنك استخدام هذه الأحداث لبناء واجهات مستخدم متجاوبة تعرض مؤشرات الكتابة وتقدم تنفيذ الأدوات واستجابات في الوقت الحقيقي.',
        'إدارة السياق في أنظمة متعددة الوكلاء أمر حاسم. عند استخدام التسليمات، يمكنك تصفية تاريخ المحادثة الممرر إلى الوكيل المستهدف باستخدام input_filter. هذا يمنع تاريخ المحادثة غير ذي الصلة من إرباك الوكلاء المتخصصين ويقلل استخدام الرموز. يمكنك أيضاً حقن متغيرات سياق متاحة لجميع الوكلاء والأدوات عبر RunContextWrapper، مما يمكّن الحالة المشتركة عبر شبكة الوكلاء.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import asyncio
from agents import Agent, Runner, function_tool, handoff, trace
from agents.tracing import TracingProcessor

# --- Custom Tracing Processor ---
class LoggingProcessor(TracingProcessor):
    """Send trace data to our logging system."""
    def on_trace_start(self, trace_data):
        print(f"[TRACE START] {trace_data.name}")

    def on_span_start(self, span_data):
        print(f"  [SPAN] {span_data.span_type}: {span_data.name}")

    def on_span_end(self, span_data):
        print(f"  [SPAN END] {span_data.name} ({span_data.duration_ms}ms)")

    def on_trace_end(self, trace_data):
        print(f"[TRACE END] {trace_data.name} ({trace_data.duration_ms}ms)")

# --- Define Tools ---
@function_tool
def query_database(sql: str) -> str:
    """Execute a read-only SQL query against the analytics database."""
    return "Results: [{'revenue': 1500000, 'growth': '12%'}]"

@function_tool
def generate_chart(data: str, chart_type: str) -> str:
    """Generate a chart image from data. Returns the chart URL."""
    return f"https://charts.example.com/{chart_type}_abc123.png"

# --- Agent-as-Tool Pattern ---
data_agent = Agent(
    name="Data Analyst",
    instructions="You analyze data and provide statistical insights.",
    tools=[query_database],
)

chart_agent = Agent(
    name="Chart Generator",
    instructions="You create visualizations from data.",
    tools=[generate_chart],
)

# Coordinator uses other agents as tools
coordinator = Agent(
    name="Report Coordinator",
    instructions="""You coordinate report generation. Use the data
    analyst to get insights and the chart generator to create visuals.
    Compile everything into a final report.""",
    tools=[
        data_agent.as_tool(
            tool_name="analyze_data",
            tool_description="Get a data analyst to query and analyze data",
        ),
        chart_agent.as_tool(
            tool_name="create_chart",
            tool_description="Get a chart generator to create visualizations",
        ),
    ],
)

async def main():
    # Enable custom tracing
    with trace(
        "report_generation",
        trace_processors=[LoggingProcessor()],
    ):
        # --- Streaming Example ---
        result = Runner.run_streamed(
            coordinator,
            "Generate a Q4 revenue report with a bar chart.",
        )

        async for event in result.stream_events():
            if event.type == "raw_response_event":
                print(event.data.delta, end="", flush=True)
            elif event.type == "run_item_stream_event":
                if event.item.type == "tool_call_item":
                    print(f"\\n[Tool Call: {event.item.raw_item.name}]")
                elif event.item.type == "tool_return_item":
                    print(f"[Tool Result received]")

        final = await result.final_output()
        print(f"\\nFinal report: {final}")

asyncio.run(main())`,
      description: {
        en: 'Advanced OpenAI Agents SDK featuring: custom tracing processor for observability, agent-as-tool pattern for multi-agent orchestration without handoffs, and streaming for real-time event processing.',
        ar: 'ميزات متقدمة لحزمة OpenAI Agents SDK تشمل: معالج تتبع مخصص لقابلية المراقبة، ونمط الوكيل كأداة لتنسيق الوكلاء المتعددين بدون تسليمات، والبث لمعالجة الأحداث في الوقت الحقيقي.',
      },
    },
    commonMistakes: {
      en: [
        'Not implementing tracing in production, making it impossible to debug agent behavior when things go wrong. Always enable tracing and export to your observability platform.',
        'Using handoffs when agent-as-tool would be more appropriate. Handoffs transfer full control; agent-as-tool lets the coordinator maintain control and combine multiple agent outputs.',
        'Not handling streaming events properly, leading to incomplete responses or UI glitches. Always process all event types and handle the stream completion correctly.',
        'Passing full conversation history through handoffs to specialized agents, wasting tokens and confusing agents with irrelevant context. Use input_filter to trim history.',
      ],
      ar: [
        'عدم تنفيذ التتبع في الإنتاج، مما يجعل من المستحيل تصحيح سلوك الوكيل عند حدوث أخطاء. فعّل دائماً التتبع وصدّر إلى منصة المراقبة.',
        'استخدام التسليمات عندما يكون الوكيل كأداة أكثر ملاءمة. التسليمات تنقل التحكم الكامل؛ الوكيل كأداة يتيح للمنسق الحفاظ على التحكم والجمع بين مخرجات وكلاء متعددين.',
        'عدم معالجة أحداث البث بشكل صحيح، مما يؤدي إلى استجابات غير مكتملة أو مشاكل في واجهة المستخدم. عالج دائماً جميع أنواع الأحداث وتعامل مع اكتمال البث بشكل صحيح.',
        'تمرير تاريخ المحادثة الكامل عبر التسليمات إلى وكلاء متخصصين، مما يهدر الرموز ويربك الوكلاء بسياق غير ذي صلة. استخدم input_filter لتقليم التاريخ.',
      ],
    },
    bestPractices: {
      en: [
        'Implement custom TracingProcessors that export to your production observability stack (Datadog, New Relic, Grafana) for unified monitoring of agent behavior alongside your other services.',
        'Use the agent-as-tool pattern for orchestrating subtasks where the coordinator needs to combine results from multiple agents. Reserve handoffs for scenarios where full conversation transfer to a specialist is the right UX.',
        'Implement streaming for all user-facing agents to provide responsive experiences. Show tool call progress and intermediate results to keep users informed during long-running agent tasks.',
        'Design context management carefully: use input_filter on handoffs to pass only relevant history, inject shared state via RunContextWrapper, and keep per-agent context focused and minimal.',
      ],
      ar: [
        'نفذ معالجات تتبع مخصصة تصدّر إلى مكدس مراقبة الإنتاج (Datadog وNew Relic وGrafana) للمراقبة الموحدة لسلوك الوكيل جنباً إلى جنب مع خدماتك الأخرى.',
        'استخدم نمط الوكيل كأداة لتنسيق المهام الفرعية حيث يحتاج المنسق إلى الجمع بين نتائج من وكلاء متعددين. احتفظ بالتسليمات للسيناريوهات حيث يكون النقل الكامل للمحادثة إلى متخصص هو تجربة المستخدم الصحيحة.',
        'نفذ البث لجميع الوكلاء الموجهين للمستخدم لتوفير تجارب متجاوبة. اعرض تقدم استدعاءات الأدوات والنتائج الوسيطة لإبقاء المستخدمين مطلعين أثناء مهام الوكيل الطويلة.',
        'صمم إدارة السياق بعناية: استخدم input_filter في التسليمات لتمرير التاريخ ذي الصلة فقط، واحقن الحالة المشتركة عبر RunContextWrapper، واجعل سياق كل وكيل مركزاً وبأدنى حد.',
      ],
    },
    references: [
      { title: 'OpenAI Agents SDK Tracing', url: 'https://openai.github.io/openai-agents-python/tracing/' },
      { title: 'OpenAI Agents SDK Multi-Agent Patterns', url: 'https://openai.github.io/openai-agents-python/multi-agent/' },
      { title: 'OpenAI Agents SDK Streaming', url: 'https://openai.github.io/openai-agents-python/streaming/' },
    ],
    quiz: [
      {
        id: 'batch8-q15',
        question: {
          en: 'What is the difference between a Handoff and the agent-as-tool pattern in the OpenAI Agents SDK?',
          ar: 'ما الفرق بين التسليم ونمط الوكيل كأداة في OpenAI Agents SDK؟',
        },
        options: {
          en: [
            'There is no difference; they are the same feature',
            'Handoffs transfer full conversation control; agent-as-tool lets the coordinator invoke another agent and use its output while maintaining control',
            'Agent-as-tool is for Python only; Handoffs work in all languages',
            'Handoffs are faster; agent-as-tool is slower but more accurate',
          ],
          ar: [
            'لا يوجد فرق؛ هما نفس الميزة',
            'التسليمات تنقل التحكم الكامل في المحادثة؛ الوكيل كأداة يتيح للمنسق استدعاء وكيل آخر واستخدام مخرجاته مع الحفاظ على التحكم',
            'الوكيل كأداة لـ Python فقط؛ التسليمات تعمل في جميع اللغات',
            'التسليمات أسرع؛ الوكيل كأداة أبطأ لكنه أكثر دقة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Handoffs fully transfer conversation control to another agent. The agent-as-tool pattern wraps an agent as a callable tool, so the coordinator agent invokes it, receives the result, and continues its own execution, maintaining overall control of the conversation.',
          ar: 'التسليمات تنقل التحكم الكامل في المحادثة إلى وكيل آخر. نمط الوكيل كأداة يلف وكيلاً كأداة قابلة للاستدعاء، لذا يستدعيه الوكيل المنسق ويستقبل النتيجة ويواصل تنفيذه الخاص، مع الحفاظ على التحكم الشامل في المحادثة.',
        },
      },
      {
        id: 'batch8-q16',
        question: {
          en: 'What does Runner.run_streamed() provide in the OpenAI Agents SDK?',
          ar: 'ماذا يوفر Runner.run_streamed() في OpenAI Agents SDK؟',
        },
        options: {
          en: [
            'It runs the agent faster by using parallel processing',
            'It streams real-time events (LLM tokens, tool calls, handoffs) as the agent executes',
            'It saves the agent output to a streaming file format',
            'It connects the agent to a live video stream',
          ],
          ar: [
            'يشغّل الوكيل أسرع باستخدام المعالجة المتوازية',
            'يبث أحداثاً في الوقت الحقيقي (رموز نموذج اللغة واستدعاءات الأدوات والتسليمات) أثناء تنفيذ الوكيل',
            'يحفظ مخرجات الوكيل بصيغة ملف بث',
            'يربط الوكيل ببث فيديو مباشر',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Runner.run_streamed() returns a stream of real-time events as the agent executes. These events include raw LLM token deltas, tool call starts and completions, handoff events, and guardrail results, enabling responsive user interfaces.',
          ar: 'يُرجع Runner.run_streamed() تدفقاً من الأحداث في الوقت الحقيقي أثناء تنفيذ الوكيل. تشمل هذه الأحداث دلتا رموز نموذج اللغة الخام وبدايات واكتمالات استدعاءات الأدوات وأحداث التسليم ونتائج الحواجز الأمنية، مما يمكّن واجهات مستخدم متجاوبة.',
        },
      },
    ],
  },
};
