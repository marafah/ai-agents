import type { LessonContentData } from './content';

export const batch5Contents: Record<string, LessonContentData> = {
  // ─────────────────────────────────────────────
  // 1. ADK Deployment
  // ─────────────────────────────────────────────
  'adk-deployment': {
    beginnerDefinition: {
      en: 'Deploying a Google ADK agent means taking the agent you built on your computer and putting it on the internet so real users can access it 24/7. Google Cloud and Vertex AI Agent Engine provide the infrastructure to run, scale, and monitor your agent in production.',
      ar: 'نشر وكيل Google ADK يعني أخذ الوكيل الذي بنيته على جهازك ووضعه على الإنترنت حتى يتمكن المستخدمون الحقيقيون من الوصول إليه على مدار الساعة. يوفر Google Cloud ومحرك وكلاء Vertex AI البنية التحتية لتشغيل وكيلك وتوسيعه ومراقبته في بيئة الإنتاج.',
    },
    technicalDefinition: {
      en: 'ADK deployment encompasses containerizing an Agent Development Kit application using Docker, deploying it to Google Cloud services such as Cloud Run or Vertex AI Agent Engine, configuring autoscaling policies, setting up monitoring and logging via Cloud Operations, and managing secrets and environment variables through Secret Manager. The Vertex AI Agent Engine provides a managed runtime specifically optimized for ADK agents with built-in session management, tool orchestration, and observability.',
      ar: 'يشمل نشر ADK حاوية تطبيق أدوات تطوير الوكلاء باستخدام Docker، ونشره على خدمات Google Cloud مثل Cloud Run أو محرك وكلاء Vertex AI، وتكوين سياسات التوسع التلقائي، وإعداد المراقبة والتسجيل عبر Cloud Operations، وإدارة الأسرار ومتغيرات البيئة عبر Secret Manager. يوفر محرك وكلاء Vertex AI بيئة تشغيل مُدارة محسّنة خصيصاً لوكلاء ADK مع إدارة جلسات مدمجة وتنسيق أدوات وقابلية مراقبة.',
    },
    analogy: {
      en: 'Building an ADK agent on your laptop is like cooking a great meal in your home kitchen. Deploying it to production is like opening a restaurant: you need a commercial kitchen (Google Cloud infrastructure), a way to handle rush hour crowds (autoscaling), health inspections (monitoring and guardrails), and a manager who watches everything (Cloud Operations). Vertex AI Agent Engine is like a franchise system that handles the restaurant operations for you so you can focus on the recipes.',
      ar: 'بناء وكيل ADK على حاسوبك المحمول يشبه طهي وجبة رائعة في مطبخ منزلك. نشره في الإنتاج يشبه افتتاح مطعم: تحتاج مطبخاً تجارياً (بنية Google Cloud التحتية)، وطريقة للتعامل مع ساعات الذروة (التوسع التلقائي)، وتفتيشات صحية (المراقبة والحواجز)، ومدير يراقب كل شيء (Cloud Operations). محرك وكلاء Vertex AI يشبه نظام امتياز يتولى عمليات المطعم نيابة عنك حتى تتمكن من التركيز على الوصفات.',
    },
    explanation: {
      en: [
        'Before deploying an ADK agent, you need to ensure your agent code is production-ready. This means externalizing configuration, handling errors gracefully, implementing proper logging, and writing tests. Your agent definition, tools, and callbacks should be organized in a clean project structure that separates concerns.',
        'The first deployment option is containerization with Docker. You create a Dockerfile that packages your ADK agent along with its dependencies. The container exposes an HTTP endpoint that receives user messages and returns agent responses. This container can then be deployed to Cloud Run, which provides serverless scaling, or to Google Kubernetes Engine for more control.',
        'The second option is Vertex AI Agent Engine, which is purpose-built for ADK agents. You register your agent with the Agent Engine, and it handles session management, state persistence, tool execution, and scaling automatically. This is the recommended path for most ADK deployments because it reduces operational overhead significantly.',
        'Scaling is a critical consideration. Cloud Run automatically scales from zero to handle traffic spikes, while Vertex AI Agent Engine manages concurrency limits and request queuing. You configure minimum and maximum instances, memory allocation, and CPU limits based on your agent workload profile.',
        'Monitoring and observability are essential in production. Google Cloud Operations (formerly Stackdriver) provides logging, metrics, and tracing. You should monitor key metrics like response latency, tool call success rates, error rates, and token usage. Setting up alerts for anomalies helps catch issues before they impact users.',
        'Security in production requires managing API keys and secrets through Google Secret Manager, configuring IAM roles for least-privilege access, enabling HTTPS endpoints, and implementing authentication for your agent API. Never hardcode credentials in your agent code or container images.',
      ],
      ar: [
        'قبل نشر وكيل ADK، تحتاج إلى التأكد من أن كود الوكيل جاهز للإنتاج. يعني هذا استخراج التكوين خارجياً، ومعالجة الأخطاء بسلاسة، وتنفيذ تسجيل مناسب، وكتابة اختبارات. يجب تنظيم تعريف الوكيل وأدواته واستدعاءاته في هيكل مشروع نظيف يفصل المسؤوليات.',
        'خيار النشر الأول هو الحاويات باستخدام Docker. تنشئ ملف Dockerfile يحزم وكيل ADK مع تبعياته. تكشف الحاوية نقطة نهاية HTTP تستقبل رسائل المستخدم وتعيد ردود الوكيل. يمكن بعد ذلك نشر هذه الحاوية على Cloud Run الذي يوفر توسعاً بدون خادم، أو على Google Kubernetes Engine لمزيد من التحكم.',
        'الخيار الثاني هو محرك وكلاء Vertex AI، المصمم خصيصاً لوكلاء ADK. تسجل وكيلك مع محرك الوكلاء ويتولى إدارة الجلسات وحفظ الحالة وتنفيذ الأدوات والتوسع تلقائياً. هذا هو المسار الموصى به لمعظم عمليات نشر ADK لأنه يقلل العبء التشغيلي بشكل كبير.',
        'التوسع هو اعتبار حاسم. يتوسع Cloud Run تلقائياً من الصفر للتعامل مع ارتفاعات حركة المرور، بينما يدير محرك وكلاء Vertex AI حدود التزامن وطوابير الطلبات. تقوم بتكوين الحد الأدنى والأقصى للنسخ وتخصيص الذاكرة وحدود المعالج بناءً على ملف عمل وكيلك.',
        'المراقبة وقابلية الملاحظة ضروريتان في الإنتاج. يوفر Google Cloud Operations (المعروف سابقاً بـ Stackdriver) التسجيل والمقاييس والتتبع. يجب مراقبة مقاييس رئيسية مثل زمن استجابة الاستجابة ومعدلات نجاح استدعاءات الأدوات ومعدلات الخطأ واستخدام الرموز. إعداد تنبيهات للشذوذ يساعد في اكتشاف المشاكل قبل أن تؤثر على المستخدمين.',
        'يتطلب الأمان في الإنتاج إدارة مفاتيح API والأسرار عبر Google Secret Manager، وتكوين أدوار IAM للوصول بأقل امتيازات، وتمكين نقاط نهاية HTTPS، وتنفيذ المصادقة لواجهة برمجة وكيلك. لا تقم أبداً بترميز بيانات الاعتماد في كود الوكيل أو صور الحاويات.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from google.adk.agents import Agent
from google.adk.tools import FunctionTool
from google.cloud import aiplatform

# Define the agent with tools
def get_weather(city: str) -> dict:
    """Retrieve current weather for a given city."""
    return {"city": city, "temp": "22C", "condition": "Sunny"}

weather_tool = FunctionTool(func=get_weather)

agent = Agent(
    model="gemini-2.0-flash",
    name="weather_assistant",
    instruction="You help users check weather conditions.",
    tools=[weather_tool],
)

# --- Deploy to Vertex AI Agent Engine ---
aiplatform.init(
    project="my-gcp-project",
    location="us-central1",
)

# Create a remote app on Agent Engine
remote_app = aiplatform.Agent.create(
    agent=agent,
    display_name="Weather Assistant",
    description="Production weather agent",
    requirements=["google-adk", "google-cloud-aiplatform"],
)

print(f"Agent deployed. Resource: {remote_app.resource_name}")

# Test the deployed agent
session = remote_app.create_session(user_id="test-user")
response = remote_app.send_message(
    session_id=session.id,
    message="What is the weather in Tokyo?",
)
print(f"Agent response: {response.text}")`,
      description: {
        en: 'Deploying a Google ADK agent to Vertex AI Agent Engine. The agent is defined locally with tools, then registered as a remote application that can be accessed via API.',
        ar: 'نشر وكيل Google ADK على محرك وكلاء Vertex AI. يتم تعريف الوكيل محلياً مع الأدوات، ثم تسجيله كتطبيق بعيد يمكن الوصول إليه عبر واجهة برمجة.',
      },
    },
    commonMistakes: {
      en: [
        'Hardcoding API keys and secrets directly in agent code instead of using Secret Manager or environment variables.',
        'Not configuring autoscaling limits, leading to unexpected costs during traffic spikes or cold-start latency when scaling from zero.',
        'Skipping monitoring setup and only discovering issues when users complain rather than through proactive alerting.',
        'Deploying without testing the containerized agent locally first, leading to dependency or runtime errors in production.',
      ],
      ar: [
        'ترميز مفاتيح API والأسرار مباشرة في كود الوكيل بدلاً من استخدام Secret Manager أو متغيرات البيئة.',
        'عدم تكوين حدود التوسع التلقائي، مما يؤدي إلى تكاليف غير متوقعة أثناء ارتفاعات حركة المرور أو زمن بدء بارد عند التوسع من الصفر.',
        'تخطي إعداد المراقبة واكتشاف المشاكل فقط عندما يشتكي المستخدمون بدلاً من التنبيه الاستباقي.',
        'النشر دون اختبار الوكيل المحتوى محلياً أولاً، مما يؤدي إلى أخطاء التبعيات أو وقت التشغيل في الإنتاج.',
      ],
    },
    bestPractices: {
      en: [
        'Use Vertex AI Agent Engine for managed deployments to reduce operational overhead and benefit from built-in session management.',
        'Store all secrets in Google Secret Manager and reference them via environment variables in your deployment configuration.',
        'Set up Cloud Monitoring dashboards tracking latency, error rates, tool call success rates, and token consumption.',
        'Implement health check endpoints in your containerized agent so Cloud Run or GKE can detect and replace unhealthy instances.',
        'Use Infrastructure as Code (Terraform or Pulumi) to manage your deployment configuration for reproducibility and version control.',
      ],
      ar: [
        'استخدم محرك وكلاء Vertex AI للنشر المُدار لتقليل العبء التشغيلي والاستفادة من إدارة الجلسات المدمجة.',
        'خزّن جميع الأسرار في Google Secret Manager وأشر إليها عبر متغيرات البيئة في تكوين النشر.',
        'أنشئ لوحات معلومات Cloud Monitoring لتتبع زمن الاستجابة ومعدلات الخطأ ومعدلات نجاح استدعاءات الأدوات واستهلاك الرموز.',
        'نفذ نقاط نهاية فحص الصحة في وكيلك المحتوى حتى يتمكن Cloud Run أو GKE من اكتشاف واستبدال النسخ غير السليمة.',
        'استخدم البنية التحتية كرمز (Terraform أو Pulumi) لإدارة تكوين النشر لضمان قابلية التكرار والتحكم في الإصدارات.',
      ],
    },
    references: [
      { title: 'Google ADK Deployment Guide', url: 'https://google.github.io/adk-docs/deploy/' },
      { title: 'Vertex AI Agent Engine Documentation', url: 'https://cloud.google.com/vertex-ai/docs/agents' },
      { title: 'Cloud Run Container Deployment', url: 'https://cloud.google.com/run/docs/deploying' },
    ],
    quiz: [
      {
        id: 'adkdep-q1',
        question: {
          en: 'What is the recommended managed service for deploying ADK agents in Google Cloud?',
          ar: 'ما هي الخدمة المُدارة الموصى بها لنشر وكلاء ADK في Google Cloud؟',
        },
        options: {
          en: [
            'Google App Engine',
            'Vertex AI Agent Engine',
            'Firebase Functions',
            'Google Compute Engine',
          ],
          ar: [
            'Google App Engine',
            'محرك وكلاء Vertex AI',
            'Firebase Functions',
            'Google Compute Engine',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Vertex AI Agent Engine is purpose-built for ADK agents and provides managed session handling, tool orchestration, scaling, and observability out of the box.',
          ar: 'محرك وكلاء Vertex AI مصمم خصيصاً لوكلاء ADK ويوفر إدارة جلسات مُدارة وتنسيق أدوات وتوسع وقابلية مراقبة جاهزة.',
        },
      },
      {
        id: 'adkdep-q2',
        question: {
          en: 'Why should you avoid hardcoding API keys in your ADK agent code?',
          ar: 'لماذا يجب تجنب ترميز مفاتيح API في كود وكيل ADK؟',
        },
        options: {
          en: [
            'It makes the code run slower',
            'It is a security risk; secrets can be exposed in version control or container images',
            'It prevents the agent from using tools',
            'It is not supported by the ADK framework',
          ],
          ar: [
            'يجعل الكود أبطأ',
            'إنه خطر أمني؛ يمكن كشف الأسرار في التحكم بالإصدارات أو صور الحاويات',
            'يمنع الوكيل من استخدام الأدوات',
            'غير مدعوم من إطار عمل ADK',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Hardcoded secrets can be leaked through source code repositories or container images. Use Google Secret Manager to securely store and access credentials.',
          ar: 'يمكن تسريب الأسرار المرمزة عبر مستودعات الكود المصدري أو صور الحاويات. استخدم Google Secret Manager لتخزين بيانات الاعتماد والوصول إليها بأمان.',
        },
      },
      {
        id: 'adkdep-q3',
        question: {
          en: 'Which monitoring metric is most important for tracking the cost efficiency of a deployed ADK agent?',
          ar: 'أي مقياس مراقبة هو الأهم لتتبع كفاءة تكلفة وكيل ADK المنشور؟',
        },
        options: {
          en: [
            'Number of deployed containers',
            'Token consumption per request',
            'Color of the monitoring dashboard',
            'Number of files in the project',
          ],
          ar: [
            'عدد الحاويات المنشورة',
            'استهلاك الرموز لكل طلب',
            'لون لوحة المراقبة',
            'عدد الملفات في المشروع',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Token consumption directly impacts LLM API costs. Monitoring tokens per request helps identify inefficient prompts or unnecessary tool calls that inflate expenses.',
          ar: 'يؤثر استهلاك الرموز مباشرة على تكاليف واجهة برمجة نموذج اللغة. مراقبة الرموز لكل طلب تساعد في تحديد المطالبات غير الفعالة أو استدعاءات الأدوات غير الضرورية التي تضخم النفقات.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Bedrock Agents Introduction
  // ─────────────────────────────────────────────
  'bedrock-agents-introduction': {
    beginnerDefinition: {
      en: 'Amazon Bedrock Agents are AI assistants built on AWS that can understand user requests, break them into steps, and take actions using foundation models like Claude or Titan. You set them up through the AWS console without managing any servers.',
      ar: 'وكلاء Amazon Bedrock هم مساعدون ذكاء اصطناعي مبنيون على AWS يمكنهم فهم طلبات المستخدم وتقسيمها إلى خطوات واتخاذ إجراءات باستخدام نماذج أساسية مثل Claude أو Titan. يمكنك إعدادهم عبر وحدة تحكم AWS دون إدارة أي خوادم.',
    },
    technicalDefinition: {
      en: 'Amazon Bedrock Agents is a fully managed AWS service that orchestrates foundation model interactions with enterprise data and APIs. An agent consists of a foundation model (FM) selection, an instruction set defining agent behavior, optional knowledge bases for RAG, and action groups that map to Lambda functions or API endpoints. The agent runtime handles prompt construction, chain-of-thought reasoning, tool invocation orchestration, and response generation through a managed ReAct-style loop.',
      ar: 'وكلاء Amazon Bedrock هي خدمة AWS مُدارة بالكامل تنسق تفاعلات النموذج الأساسي مع بيانات المؤسسة وواجهات البرمجة. يتكون الوكيل من اختيار نموذج أساسي (FM)، ومجموعة تعليمات تحدد سلوك الوكيل، وقواعد معرفة اختيارية لـ RAG، ومجموعات إجراءات ترتبط بوظائف Lambda أو نقاط نهاية API. يتولى وقت تشغيل الوكيل بناء المطالبات واستدلال سلسلة التفكير وتنسيق استدعاء الأدوات وتوليد الاستجابات عبر حلقة مُدارة بأسلوب ReAct.',
    },
    analogy: {
      en: 'Think of Amazon Bedrock Agents like hiring a smart office manager through a staffing agency (AWS). You tell the agency what kind of manager you need (choose a foundation model), give them a job description (instructions), hand them the company handbook (knowledge bases), and show them which systems they can access (action groups). The agency handles all the HR, payroll, and office setup (infrastructure), so you just focus on what the manager should accomplish.',
      ar: 'فكر في وكلاء Amazon Bedrock كتوظيف مدير مكتب ذكي عبر وكالة توظيف (AWS). تخبر الوكالة بنوع المدير الذي تحتاجه (اختيار النموذج الأساسي)، وتعطيهم وصفاً وظيفياً (التعليمات)، وتسلمهم دليل الشركة (قواعد المعرفة)، وتريهم الأنظمة التي يمكنهم الوصول إليها (مجموعات الإجراءات). تتولى الوكالة جميع شؤون الموارد البشرية والرواتب وإعداد المكتب (البنية التحتية)، فتركز أنت فقط على ما يجب أن ينجزه المدير.',
    },
    explanation: {
      en: [
        'Amazon Bedrock Agents provide a serverless way to build AI agents on AWS. Unlike building agents from scratch, Bedrock handles the orchestration loop, prompt management, and infrastructure automatically. You define what the agent should do, and Bedrock figures out how to do it using the foundation model you select.',
        'The architecture of a Bedrock Agent has four main components. First is the Foundation Model, which serves as the reasoning engine. You can choose from models like Anthropic Claude, Amazon Titan, Meta Llama, or others available in Bedrock. Each model has different strengths in terms of reasoning capability, speed, and cost.',
        'Second is the Agent Instructions. These are natural language instructions that define the agent personality, scope, and behavior. Good instructions are specific about what the agent should and should not do. They guide the model during the ReAct reasoning loop to stay focused on the intended use case.',
        'Third, Knowledge Bases connect your agent to your enterprise data. When a user asks a question, the agent can search through documents stored in Amazon S3, retrieve relevant passages, and use them to ground its responses in factual information. This is the RAG (Retrieval-Augmented Generation) pattern.',
        'Fourth, Action Groups define what actions the agent can take. Each action group maps to AWS Lambda functions or API endpoints described by OpenAPI schemas. When the agent decides it needs to perform an action (like looking up an order or creating a ticket), it invokes the appropriate action group.',
        'Setting up a Bedrock Agent in the AWS console involves selecting a foundation model, writing instructions, optionally attaching knowledge bases and action groups, and then creating an alias for versioning. You can test your agent directly in the console using the built-in chat interface before integrating it into your application.',
        'The Bedrock Agent runtime uses a ReAct-style loop: it Reasons about the user request, decides on an Action (query knowledge base or invoke action group), observes the result, and continues until it can generate a final response. All of this orchestration is managed by AWS.',
      ],
      ar: [
        'توفر وكلاء Amazon Bedrock طريقة بدون خادم لبناء وكلاء ذكاء اصطناعي على AWS. على عكس بناء الوكلاء من الصفر، يتولى Bedrock حلقة التنسيق وإدارة المطالبات والبنية التحتية تلقائياً. تحدد أنت ما يجب أن يفعله الوكيل، ويكتشف Bedrock كيفية القيام بذلك باستخدام النموذج الأساسي الذي تختاره.',
        'تتكون بنية وكيل Bedrock من أربعة مكونات رئيسية. الأول هو النموذج الأساسي الذي يعمل كمحرك استدلال. يمكنك الاختيار من نماذج مثل Anthropic Claude أو Amazon Titan أو Meta Llama أو غيرها المتاحة في Bedrock. لكل نموذج نقاط قوة مختلفة من حيث قدرة الاستدلال والسرعة والتكلفة.',
        'الثاني هو تعليمات الوكيل. هي تعليمات بلغة طبيعية تحدد شخصية الوكيل ونطاقه وسلوكه. التعليمات الجيدة تكون محددة حول ما يجب وما لا يجب أن يفعله الوكيل. توجه النموذج خلال حلقة استدلال ReAct للبقاء مركزاً على حالة الاستخدام المقصودة.',
        'ثالثاً، تربط قواعد المعرفة وكيلك ببيانات مؤسستك. عندما يسأل المستخدم سؤالاً، يمكن للوكيل البحث في المستندات المخزنة في Amazon S3، واسترجاع المقاطع ذات الصلة، واستخدامها لتأسيس ردوده على معلومات واقعية. هذا هو نمط RAG (التوليد المعزز بالاسترجاع).',
        'رابعاً، تحدد مجموعات الإجراءات الإجراءات التي يمكن للوكيل اتخاذها. كل مجموعة إجراءات ترتبط بوظائف AWS Lambda أو نقاط نهاية API موصوفة بمخططات OpenAPI. عندما يقرر الوكيل أنه يحتاج لتنفيذ إجراء (مثل البحث عن طلب أو إنشاء تذكرة)، يستدعي مجموعة الإجراءات المناسبة.',
        'يتضمن إعداد وكيل Bedrock في وحدة تحكم AWS اختيار نموذج أساسي وكتابة التعليمات وإرفاق قواعد المعرفة ومجموعات الإجراءات اختيارياً، ثم إنشاء اسم مستعار للإصدارات. يمكنك اختبار وكيلك مباشرة في وحدة التحكم باستخدام واجهة المحادثة المدمجة قبل دمجه في تطبيقك.',
        'يستخدم وقت تشغيل وكيل Bedrock حلقة بأسلوب ReAct: يستدل حول طلب المستخدم، ويقرر إجراءً (استعلام قاعدة معرفة أو استدعاء مجموعة إجراءات)، ويلاحظ النتيجة، ويستمر حتى يتمكن من توليد رد نهائي. كل هذا التنسيق يُدار بواسطة AWS.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import boto3
import json

# Create a Bedrock Agent client
bedrock_agent = boto3.client("bedrock-agent", region_name="us-east-1")

# Create a Bedrock Agent
response = bedrock_agent.create_agent(
    agentName="customer-support-agent",
    foundationModel="anthropic.claude-3-sonnet-20240229-v1:0",
    instruction="""You are a helpful customer support agent.
    You can look up order status and answer product questions.
    Always be polite and concise. If you cannot help,
    escalate to a human agent.""",
    description="Customer support agent for order inquiries",
    idleSessionTTLInSeconds=600,
)

agent_id = response["agent"]["agentId"]
print(f"Agent created: {agent_id}")

# Prepare the agent (compiles the configuration)
bedrock_agent.prepare_agent(agentId=agent_id)

# Invoke the agent at runtime
bedrock_runtime = boto3.client(
    "bedrock-agent-runtime", region_name="us-east-1"
)

runtime_response = bedrock_runtime.invoke_agent(
    agentId=agent_id,
    agentAliasId="TSTALIASID",
    sessionId="test-session-001",
    inputText="What is the status of order #12345?",
)

# Stream the response
for event in runtime_response["completion"]:
    if "chunk" in event:
        text = event["chunk"]["bytes"].decode("utf-8")
        print(text, end="")`,
      description: {
        en: 'Creating and invoking an Amazon Bedrock Agent using the AWS SDK for Python (boto3). The agent is configured with Claude as its foundation model and invoked with a customer support query.',
        ar: 'إنشاء واستدعاء وكيل Amazon Bedrock باستخدام AWS SDK لـ Python (boto3). يتم تكوين الوكيل مع Claude كنموذجه الأساسي واستدعاؤه باستعلام دعم عملاء.',
      },
    },
    commonMistakes: {
      en: [
        'Writing vague agent instructions that do not clearly define scope, leading to unpredictable or off-topic agent behavior.',
        'Choosing a foundation model based only on capability without considering cost and latency trade-offs for the specific use case.',
        'Not preparing (compiling) the agent after making configuration changes, resulting in the old configuration being used at runtime.',
        'Forgetting to create an agent alias for versioning, making it impossible to safely roll back to a previous agent configuration.',
      ],
      ar: [
        'كتابة تعليمات وكيل غامضة لا تحدد النطاق بوضوح، مما يؤدي إلى سلوك وكيل غير متوقع أو خارج الموضوع.',
        'اختيار نموذج أساسي بناءً على القدرة فقط دون مراعاة مقايضات التكلفة وزمن الاستجابة لحالة الاستخدام المحددة.',
        'عدم إعداد (تجميع) الوكيل بعد إجراء تغييرات في التكوين، مما يؤدي إلى استخدام التكوين القديم في وقت التشغيل.',
        'نسيان إنشاء اسم مستعار للوكيل للإصدارات، مما يجعل من المستحيل التراجع بأمان إلى تكوين وكيل سابق.',
      ],
    },
    bestPractices: {
      en: [
        'Write detailed, specific agent instructions that clearly define the agent role, allowed actions, response style, and boundary conditions.',
        'Use agent aliases and versioning so you can test new configurations without affecting production users.',
        'Start with a simpler, faster model for prototyping, then evaluate more capable models only if the simpler model cannot handle the reasoning complexity.',
        'Test your agent thoroughly using the built-in console test feature before deploying to production applications.',
        'Enable CloudWatch logging for agent traces to debug reasoning steps and identify where the agent makes incorrect decisions.',
      ],
      ar: [
        'اكتب تعليمات وكيل مفصلة ومحددة تحدد بوضوح دور الوكيل والإجراءات المسموحة وأسلوب الرد والشروط الحدودية.',
        'استخدم أسماء مستعارة وإصدارات الوكيل حتى تتمكن من اختبار تكوينات جديدة دون التأثير على مستخدمي الإنتاج.',
        'ابدأ بنموذج أبسط وأسرع للنمذجة الأولية، ثم قيّم نماذج أكثر قدرة فقط إذا لم يتمكن النموذج الأبسط من التعامل مع تعقيد الاستدلال.',
        'اختبر وكيلك بشكل شامل باستخدام ميزة اختبار وحدة التحكم المدمجة قبل النشر في تطبيقات الإنتاج.',
        'فعّل تسجيل CloudWatch لتتبع الوكيل لتصحيح خطوات الاستدلال وتحديد أين يتخذ الوكيل قرارات غير صحيحة.',
      ],
    },
    references: [
      { title: 'Amazon Bedrock Agents Documentation', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html' },
      { title: 'Building with Amazon Bedrock Agents - AWS Blog', url: 'https://aws.amazon.com/blogs/machine-learning/agents-for-amazon-bedrock/' },
      { title: 'Bedrock Agent API Reference', url: 'https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent.html' },
    ],
    quiz: [
      {
        id: 'brint-q1',
        question: {
          en: 'What orchestration pattern does Amazon Bedrock Agents use internally?',
          ar: 'ما نمط التنسيق الذي يستخدمه وكلاء Amazon Bedrock داخلياً؟',
        },
        options: {
          en: [
            'Simple request-response pattern',
            'ReAct-style reasoning and action loop',
            'MapReduce processing pattern',
            'Event-driven pub/sub pattern',
          ],
          ar: [
            'نمط طلب-استجابة بسيط',
            'حلقة استدلال وإجراء بأسلوب ReAct',
            'نمط معالجة MapReduce',
            'نمط نشر/اشتراك مدفوع بالأحداث',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Bedrock Agents use a ReAct-style loop where the agent Reasons about the user request, takes an Action (knowledge base query or action group invocation), observes the result, and repeats until a final response is generated.',
          ar: 'يستخدم وكلاء Bedrock حلقة بأسلوب ReAct حيث يستدل الوكيل حول طلب المستخدم، ويتخذ إجراءً (استعلام قاعدة معرفة أو استدعاء مجموعة إجراءات)، ويلاحظ النتيجة، ويكرر حتى يتم توليد رد نهائي.',
        },
      },
      {
        id: 'brint-q2',
        question: {
          en: 'Which of the following is NOT a core component of an Amazon Bedrock Agent?',
          ar: 'أي مما يلي ليس مكوناً أساسياً لوكيل Amazon Bedrock؟',
        },
        options: {
          en: [
            'Foundation Model',
            'Agent Instructions',
            'GPU cluster configuration',
            'Action Groups',
          ],
          ar: [
            'النموذج الأساسي',
            'تعليمات الوكيل',
            'تكوين مجموعة GPU',
            'مجموعات الإجراءات',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Bedrock Agents are fully managed and serverless. You do not configure GPU clusters. The core components are the foundation model, instructions, knowledge bases, and action groups.',
          ar: 'وكلاء Bedrock مُدارة بالكامل وبدون خادم. لا تقوم بتكوين مجموعات GPU. المكونات الأساسية هي النموذج الأساسي والتعليمات وقواعد المعرفة ومجموعات الإجراءات.',
        },
      },
      {
        id: 'brint-q3',
        question: {
          en: 'What must you do after modifying a Bedrock Agent configuration before the changes take effect?',
          ar: 'ماذا يجب أن تفعل بعد تعديل تكوين وكيل Bedrock قبل أن تدخل التغييرات حيز التنفيذ؟',
        },
        options: {
          en: [
            'Restart the AWS account',
            'Prepare (compile) the agent',
            'Delete and recreate the agent',
            'Wait 24 hours for propagation',
          ],
          ar: [
            'إعادة تشغيل حساب AWS',
            'إعداد (تجميع) الوكيل',
            'حذف وإعادة إنشاء الوكيل',
            'الانتظار 24 ساعة للانتشار',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'After modifying a Bedrock Agent configuration, you must call the PrepareAgent API to compile the changes. Without this step, the agent continues using its previous configuration.',
          ar: 'بعد تعديل تكوين وكيل Bedrock، يجب استدعاء واجهة PrepareAgent لتجميع التغييرات. بدون هذه الخطوة، يستمر الوكيل في استخدام تكوينه السابق.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Bedrock Knowledge Bases
  // ─────────────────────────────────────────────
  'bedrock-knowledge-bases': {
    beginnerDefinition: {
      en: 'Bedrock Knowledge Bases let your AI agent read and search through your documents (PDFs, Word files, web pages) stored in Amazon S3. When a user asks a question, the agent finds the most relevant passages from your documents and uses them to generate accurate, grounded answers.',
      ar: 'تتيح قواعد معرفة Bedrock لوكيل الذكاء الاصطناعي قراءة مستنداتك والبحث فيها (ملفات PDF وWord وصفحات الويب) المخزنة في Amazon S3. عندما يسأل المستخدم سؤالاً، يجد الوكيل المقاطع الأكثر صلة من مستنداتك ويستخدمها لتوليد إجابات دقيقة ومؤسسة.',
    },
    technicalDefinition: {
      en: 'Amazon Bedrock Knowledge Bases is a managed RAG (Retrieval-Augmented Generation) service that automates the document ingestion pipeline: chunking documents from S3 data sources, generating vector embeddings using models like Amazon Titan Embeddings, storing them in a vector database (Amazon OpenSearch Serverless, Pinecone, or Redis Enterprise Cloud), and performing semantic retrieval at query time. The service supports configurable chunking strategies, metadata filtering, hybrid search combining semantic and keyword matching, and automatic re-ingestion when source documents change.',
      ar: 'قواعد معرفة Amazon Bedrock هي خدمة RAG مُدارة (التوليد المعزز بالاسترجاع) تؤتمت خط أنابيب استيعاب المستندات: تقسيم المستندات من مصادر بيانات S3، وتوليد تضمينات متجهية باستخدام نماذج مثل Amazon Titan Embeddings، وتخزينها في قاعدة بيانات متجهية (Amazon OpenSearch Serverless أو Pinecone أو Redis Enterprise Cloud)، وإجراء استرجاع دلالي وقت الاستعلام. تدعم الخدمة استراتيجيات تقسيم قابلة للتكوين وتصفية بيانات وصفية وبحث هجين يجمع بين المطابقة الدلالية والكلمات المفتاحية وإعادة الاستيعاب التلقائي عند تغير المستندات المصدرية.',
    },
    analogy: {
      en: 'Imagine you have a massive library of company documents. A Bedrock Knowledge Base is like hiring a librarian who reads every single document, creates a detailed index card for each section (embeddings), and organizes them in a smart filing cabinet (vector database). When someone asks a question, the librarian instantly finds the three most relevant pages across all your documents and hands them to the agent, who then crafts a well-informed answer.',
      ar: 'تخيل أن لديك مكتبة ضخمة من مستندات الشركة. قاعدة معرفة Bedrock تشبه توظيف أمين مكتبة يقرأ كل مستند، وينشئ بطاقة فهرسة مفصلة لكل قسم (التضمينات)، وينظمها في خزانة ملفات ذكية (قاعدة بيانات متجهية). عندما يسأل شخص ما سؤالاً، يجد أمين المكتبة فوراً الصفحات الثلاث الأكثر صلة عبر جميع مستنداتك ويسلمها للوكيل، الذي يصيغ بعد ذلك إجابة مستنيرة.',
    },
    explanation: {
      en: [
        'Bedrock Knowledge Bases solve a fundamental problem with LLMs: they do not know your private data. While foundation models are trained on public internet data, your company documents, policies, and product catalogs live in your own storage. Knowledge Bases bridge this gap by giving the agent access to your data without fine-tuning the model.',
        'The ingestion pipeline starts with your documents in Amazon S3. Supported formats include PDF, TXT, HTML, Markdown, CSV, Word (.docx), Excel (.xlsx), and more. During ingestion, documents are split into chunks using configurable strategies: fixed-size chunking, semantic chunking (splitting at natural topic boundaries), or hierarchical chunking (parent-child relationships between chunks).',
        'Each chunk is converted into a vector embedding  - a numerical representation that captures the semantic meaning of the text. Bedrock uses embedding models like Amazon Titan Embeddings or Cohere Embed to generate these vectors. Chunks and their embeddings are stored in a vector database that enables fast similarity search.',
        'At query time, the user question is also converted to an embedding, and the vector database finds the most similar chunks using approximate nearest neighbor (ANN) search. These retrieved chunks are injected into the LLM prompt as context, enabling the model to generate answers grounded in your actual documents rather than relying solely on its training data.',
        'Metadata filtering adds precision to retrieval. You can tag documents with metadata (department, date, product line) and filter retrieval results at query time. For example, you can restrict answers to documents from the "engineering" department or those published after a certain date.',
        'Keeping your knowledge base current is important. You can trigger re-ingestion manually or set up automatic syncing when documents in S3 change. Incremental ingestion processes only new or modified documents, avoiding the cost of re-processing the entire corpus.',
      ],
      ar: [
        'تحل قواعد معرفة Bedrock مشكلة أساسية مع نماذج اللغة الكبيرة: لا تعرف بياناتك الخاصة. بينما تُدرَّب النماذج الأساسية على بيانات الإنترنت العامة، تعيش مستندات شركتك وسياساتها وكتالوجات المنتجات في تخزينك الخاص. تسد قواعد المعرفة هذه الفجوة بإعطاء الوكيل وصولاً لبياناتك دون ضبط النموذج.',
        'يبدأ خط أنابيب الاستيعاب بمستنداتك في Amazon S3. تشمل التنسيقات المدعومة PDF وTXT وHTML وMarkdown وCSV وWord (.docx) وExcel (.xlsx) والمزيد. أثناء الاستيعاب، تُقسم المستندات إلى أجزاء باستخدام استراتيجيات قابلة للتكوين: تقسيم بحجم ثابت، أو تقسيم دلالي (التقسيم عند حدود المواضيع الطبيعية)، أو تقسيم هرمي (علاقات أب-ابن بين الأجزاء).',
        'يُحوَّل كل جزء إلى تضمين متجهي  - تمثيل رقمي يلتقط المعنى الدلالي للنص. يستخدم Bedrock نماذج تضمين مثل Amazon Titan Embeddings أو Cohere Embed لتوليد هذه المتجهات. تُخزن الأجزاء وتضميناتها في قاعدة بيانات متجهية تمكّن البحث السريع بالتشابه.',
        'في وقت الاستعلام، يُحوَّل سؤال المستخدم أيضاً إلى تضمين، وتجد قاعدة البيانات المتجهية الأجزاء الأكثر تشابهاً باستخدام بحث الجار الأقرب التقريبي (ANN). تُحقن هذه الأجزاء المسترجعة في مطالبة نموذج اللغة كسياق، مما يمكّن النموذج من توليد إجابات مؤسسة في مستنداتك الفعلية بدلاً من الاعتماد فقط على بيانات تدريبه.',
        'تضيف تصفية البيانات الوصفية دقة للاسترجاع. يمكنك وسم المستندات ببيانات وصفية (القسم، التاريخ، خط المنتج) وتصفية نتائج الاسترجاع وقت الاستعلام. مثلاً، يمكنك تقييد الإجابات بمستندات من قسم "الهندسة" أو تلك المنشورة بعد تاريخ معين.',
        'الحفاظ على قاعدة معرفتك محدثة أمر مهم. يمكنك تشغيل إعادة الاستيعاب يدوياً أو إعداد مزامنة تلقائية عند تغير المستندات في S3. يعالج الاستيعاب التزايدي فقط المستندات الجديدة أو المعدلة، متجنباً تكلفة إعادة معالجة المجموعة بأكملها.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import boto3
import time

bedrock_agent = boto3.client("bedrock-agent", region_name="us-east-1")

# Step 1: Create a Knowledge Base
kb_response = bedrock_agent.create_knowledge_base(
    name="product-docs-kb",
    description="Product documentation knowledge base",
    roleArn="arn:aws:iam::123456789012:role/BedrockKBRole",
    knowledgeBaseConfiguration={
        "type": "VECTOR",
        "vectorKnowledgeBaseConfiguration": {
            "embeddingModelArn": (
                "arn:aws:bedrock:us-east-1::foundation-model/"
                "amazon.titan-embed-text-v2:0"
            ),
        },
    },
    storageConfiguration={
        "type": "OPENSEARCH_SERVERLESS",
        "opensearchServerlessConfiguration": {
            "collectionArn": "arn:aws:aoss:us-east-1:123456789012:collection/my-kb",
            "vectorIndexName": "product-docs-index",
            "fieldMapping": {
                "vectorField": "embedding",
                "textField": "text",
                "metadataField": "metadata",
            },
        },
    },
)

kb_id = kb_response["knowledgeBase"]["knowledgeBaseId"]

# Step 2: Add an S3 data source
ds_response = bedrock_agent.create_data_source(
    knowledgeBaseId=kb_id,
    name="product-manuals",
    dataSourceConfiguration={
        "type": "S3",
        "s3Configuration": {
            "bucketArn": "arn:aws:s3:::my-product-docs",
            "inclusionPrefixes": ["manuals/"],
        },
    },
)

# Step 3: Start ingestion
bedrock_agent.start_ingestion_job(
    knowledgeBaseId=kb_id,
    dataSourceId=ds_response["dataSource"]["dataSourceId"],
)
print(f"Knowledge Base {kb_id} created and ingestion started.")`,
      description: {
        en: 'Creating a Bedrock Knowledge Base with an S3 data source and OpenSearch Serverless vector store, then starting the document ingestion pipeline.',
        ar: 'إنشاء قاعدة معرفة Bedrock مع مصدر بيانات S3 ومخزن متجهي OpenSearch Serverless، ثم بدء خط أنابيب استيعاب المستندات.',
      },
    },
    commonMistakes: {
      en: [
        'Using overly large chunk sizes that mix multiple topics in a single chunk, reducing retrieval precision and causing irrelevant context in responses.',
        'Not setting up metadata on documents, missing the opportunity to filter retrieval results by department, date, or category.',
        'Forgetting to re-ingest documents after updating source files in S3, resulting in stale answers based on outdated information.',
        'Choosing the wrong vector database for the workload; for example, using a small-scale option when expecting millions of documents.',
      ],
      ar: [
        'استخدام أحجام أجزاء كبيرة جداً تخلط مواضيع متعددة في جزء واحد، مما يقلل دقة الاسترجاع ويسبب سياقاً غير ذي صلة في الردود.',
        'عدم إعداد بيانات وصفية على المستندات، مما يفوت فرصة تصفية نتائج الاسترجاع حسب القسم أو التاريخ أو الفئة.',
        'نسيان إعادة استيعاب المستندات بعد تحديث الملفات المصدرية في S3، مما يؤدي إلى إجابات قديمة بناءً على معلومات متقادمة.',
        'اختيار قاعدة بيانات متجهية خاطئة لعبء العمل؛ مثلاً، استخدام خيار صغير النطاق عند توقع ملايين المستندات.',
      ],
    },
    bestPractices: {
      en: [
        'Experiment with chunking strategies (fixed-size, semantic, hierarchical) on a sample of your documents to find the optimal configuration for your content type.',
        'Add rich metadata to your documents (source, date, category, author) and use metadata filters at query time for more precise retrieval.',
        'Set up automated re-ingestion using S3 event notifications or scheduled Lambda functions to keep the knowledge base current.',
        'Monitor retrieval quality by logging the retrieved chunks alongside agent responses and reviewing them periodically for relevance.',
        'Use hybrid search (combining semantic and keyword search) for domains with specialized terminology that pure semantic search might miss.',
      ],
      ar: [
        'جرب استراتيجيات التقسيم (حجم ثابت، دلالي، هرمي) على عينة من مستنداتك لإيجاد التكوين الأمثل لنوع محتواك.',
        'أضف بيانات وصفية غنية لمستنداتك (المصدر، التاريخ، الفئة، المؤلف) واستخدم مرشحات البيانات الوصفية وقت الاستعلام لاسترجاع أكثر دقة.',
        'أعد إعداد إعادة الاستيعاب التلقائي باستخدام إشعارات أحداث S3 أو وظائف Lambda المجدولة للحفاظ على قاعدة المعرفة محدثة.',
        'راقب جودة الاسترجاع بتسجيل الأجزاء المسترجعة بجانب ردود الوكيل ومراجعتها دورياً للتأكد من صلتها.',
        'استخدم البحث الهجين (الجمع بين البحث الدلالي والكلمات المفتاحية) للمجالات ذات المصطلحات المتخصصة التي قد يفوتها البحث الدلالي الصرف.',
      ],
    },
    references: [
      { title: 'Amazon Bedrock Knowledge Bases Documentation', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html' },
      { title: 'RAG with Amazon Bedrock - AWS Workshop', url: 'https://catalog.us-east-1.prod.workshops.aws/workshops/a4bdb007-5600-4368-81c5-ff5b4154f518/' },
      { title: 'Chunking Strategies for RAG', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-chunking-parsing.html' },
    ],
    quiz: [
      {
        id: 'brkb-q1',
        question: {
          en: 'What is the primary purpose of a Bedrock Knowledge Base?',
          ar: 'ما هو الغرض الأساسي لقاعدة معرفة Bedrock؟',
        },
        options: {
          en: [
            'To fine-tune the foundation model on your data',
            'To give the agent access to your private documents for RAG-based answers',
            'To store the agent conversation history',
            'To train a custom embedding model',
          ],
          ar: [
            'لضبط النموذج الأساسي على بياناتك',
            'لإعطاء الوكيل وصولاً لمستنداتك الخاصة لإجابات قائمة على RAG',
            'لتخزين سجل محادثات الوكيل',
            'لتدريب نموذج تضمين مخصص',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Knowledge Bases enable RAG (Retrieval-Augmented Generation) by ingesting your documents, creating embeddings, and retrieving relevant chunks at query time to ground the agent responses in your actual data.',
          ar: 'تمكّن قواعد المعرفة RAG (التوليد المعزز بالاسترجاع) عبر استيعاب مستنداتك وإنشاء تضمينات واسترجاع الأجزاء ذات الصلة وقت الاستعلام لتأسيس ردود الوكيل في بياناتك الفعلية.',
        },
      },
      {
        id: 'brkb-q2',
        question: {
          en: 'Which chunking strategy splits documents at natural topic boundaries?',
          ar: 'أي استراتيجية تقسيم تقسم المستندات عند حدود المواضيع الطبيعية؟',
        },
        options: {
          en: [
            'Fixed-size chunking',
            'Random chunking',
            'Semantic chunking',
            'Character-level chunking',
          ],
          ar: [
            'التقسيم بحجم ثابت',
            'التقسيم العشوائي',
            'التقسيم الدلالي',
            'التقسيم على مستوى الأحرف',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Semantic chunking analyzes the content to find natural topic boundaries and splits documents at those points, keeping semantically related content together for better retrieval.',
          ar: 'يحلل التقسيم الدلالي المحتوى لإيجاد حدود المواضيع الطبيعية ويقسم المستندات عند تلك النقاط، مما يحافظ على المحتوى المرتبط دلالياً معاً لاسترجاع أفضل.',
        },
      },
      {
        id: 'brkb-q3',
        question: {
          en: 'What happens when source documents in S3 are updated but re-ingestion is not triggered?',
          ar: 'ماذا يحدث عند تحديث المستندات المصدرية في S3 دون تشغيل إعادة الاستيعاب؟',
        },
        options: {
          en: [
            'The knowledge base automatically updates in real-time',
            'The agent uses the old version of the documents for answers',
            'The knowledge base is deleted',
            'The agent stops working entirely',
          ],
          ar: [
            'تتحدث قاعدة المعرفة تلقائياً في الوقت الفعلي',
            'يستخدم الوكيل النسخة القديمة من المستندات للإجابات',
            'تُحذف قاعدة المعرفة',
            'يتوقف الوكيل عن العمل بالكامل',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The vector database retains the embeddings from the original ingestion. Without re-ingestion, the agent will retrieve and use outdated information even though the source files have changed.',
          ar: 'تحتفظ قاعدة البيانات المتجهية بالتضمينات من الاستيعاب الأصلي. بدون إعادة الاستيعاب، سيسترجع الوكيل ويستخدم معلومات قديمة حتى لو تغيرت الملفات المصدرية.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. Bedrock Action Groups
  // ─────────────────────────────────────────────
  'bedrock-action-groups': {
    beginnerDefinition: {
      en: 'Bedrock Action Groups let your AI agent do things in the real world, not just answer questions. You define actions (like "look up an order" or "send an email") using an API description, and connect them to code that runs on AWS Lambda. When a user asks the agent to do something, it figures out which action to call and fills in the required information automatically.',
      ar: 'تتيح مجموعات إجراءات Bedrock لوكيل الذكاء الاصطناعي القيام بأشياء في العالم الحقيقي، وليس فقط الإجابة على الأسئلة. تحدد إجراءات (مثل "البحث عن طلب" أو "إرسال بريد إلكتروني") باستخدام وصف API، وتربطها بكود يعمل على AWS Lambda. عندما يطلب المستخدم من الوكيل القيام بشيء ما، يكتشف أي إجراء يستدعيه ويملأ المعلومات المطلوبة تلقائياً.',
    },
    technicalDefinition: {
      en: 'Bedrock Action Groups define executable capabilities for an agent by mapping OpenAPI 3.0 schema specifications to AWS Lambda function handlers. Each action group contains an API schema describing available operations, their parameters, and response formats. At runtime, the agent reasoning engine parses user intent, selects the appropriate action, extracts parameters from the conversation context, invokes the Lambda function with a structured event payload, and incorporates the response into its reasoning chain. Action groups support path and query parameters, request bodies, and authentication configurations.',
      ar: 'تحدد مجموعات إجراءات Bedrock قدرات قابلة للتنفيذ للوكيل عبر ربط مواصفات مخطط OpenAPI 3.0 بمعالجات وظائف AWS Lambda. تحتوي كل مجموعة إجراءات على مخطط API يصف العمليات المتاحة ومعاملاتها وتنسيقات الاستجابة. في وقت التشغيل، يحلل محرك استدلال الوكيل نية المستخدم، ويختار الإجراء المناسب، ويستخرج المعاملات من سياق المحادثة، ويستدعي وظيفة Lambda بحمولة حدث منظمة، ويدمج الاستجابة في سلسلة استدلاله. تدعم مجموعات الإجراءات معاملات المسار والاستعلام وأجسام الطلبات وتكوينات المصادقة.',
    },
    analogy: {
      en: 'Think of Action Groups like a menu at a restaurant. The OpenAPI schema is the menu that lists all available dishes (actions) with their descriptions and ingredients (parameters). The Lambda function is the kitchen that actually prepares the dish. When a customer (user) says "I want something spicy with chicken," the waiter (agent) reads the menu, identifies the right dish, fills out the order form with the details, and sends it to the kitchen. The kitchen prepares it and sends it back.',
      ar: 'فكر في مجموعات الإجراءات كقائمة طعام في مطعم. مخطط OpenAPI هو القائمة التي تسرد جميع الأطباق المتاحة (الإجراءات) مع أوصافها ومكوناتها (المعاملات). وظيفة Lambda هي المطبخ الذي يحضر الطبق فعلاً. عندما يقول العميل (المستخدم) "أريد شيئاً حاراً بالدجاج"، يقرأ النادل (الوكيل) القائمة، ويحدد الطبق الصحيح، ويملأ نموذج الطلب بالتفاصيل، ويرسله للمطبخ. يحضره المطبخ ويعيده.',
    },
    explanation: {
      en: [
        'Action Groups are what make Bedrock Agents truly useful beyond simple Q&A. Without action groups, an agent can only answer questions based on its training data or knowledge base. With action groups, it can check inventory, place orders, update records, send notifications, and interact with any system that has an API.',
        'Each action group has two main parts: the OpenAPI schema and the Lambda function. The OpenAPI schema describes the available operations in a machine-readable format. It tells the agent what actions are available, what parameters each action requires, and what response format to expect. The agent uses this schema to decide which action to invoke and how to structure the request.',
        'The Lambda function is the backend code that executes when the agent invokes an action. It receives a structured event containing the action name, parameters extracted by the agent, and session context. The Lambda function processes the request (querying a database, calling an external API, performing a calculation) and returns a structured response that the agent incorporates into its answer.',
        'Parameter handling is a critical aspect of action groups. The agent extracts parameter values from the user conversation using the LLM reasoning capabilities. For example, if a user says "Check the status of my order from last Tuesday," the agent identifies the order lookup action, determines it needs an order ID or date parameter, and may ask the user for clarification if the information is ambiguous.',
        'Debugging action groups involves checking several layers: the OpenAPI schema must be valid and descriptive enough for the agent to select the right action; the Lambda function must handle the event format correctly; IAM permissions must allow the agent to invoke the Lambda; and the response format must match what the agent expects. CloudWatch logs for both the agent trace and Lambda execution are essential for troubleshooting.',
      ],
      ar: [
        'مجموعات الإجراءات هي ما تجعل وكلاء Bedrock مفيدة حقاً بعيداً عن الأسئلة والأجوبة البسيطة. بدون مجموعات الإجراءات، يمكن للوكيل فقط الإجابة على الأسئلة بناءً على بيانات تدريبه أو قاعدة معرفته. مع مجموعات الإجراءات، يمكنه فحص المخزون وتقديم الطلبات وتحديث السجلات وإرسال الإشعارات والتفاعل مع أي نظام لديه واجهة برمجة.',
        'تتكون كل مجموعة إجراءات من جزأين رئيسيين: مخطط OpenAPI ووظيفة Lambda. يصف مخطط OpenAPI العمليات المتاحة بتنسيق قابل للقراءة آلياً. يخبر الوكيل بالإجراءات المتاحة والمعاملات التي يتطلبها كل إجراء وتنسيق الاستجابة المتوقع. يستخدم الوكيل هذا المخطط لتقرير أي إجراء يستدعيه وكيف يهيكل الطلب.',
        'وظيفة Lambda هي الكود الخلفي الذي يُنفذ عندما يستدعي الوكيل إجراءً. تستقبل حدثاً منظماً يحتوي على اسم الإجراء والمعاملات المستخرجة بواسطة الوكيل وسياق الجلسة. تعالج وظيفة Lambda الطلب (استعلام قاعدة بيانات، استدعاء API خارجي، إجراء حساب) وتعيد استجابة منظمة يدمجها الوكيل في إجابته.',
        'معالجة المعاملات جانب حاسم في مجموعات الإجراءات. يستخرج الوكيل قيم المعاملات من محادثة المستخدم باستخدام قدرات استدلال نموذج اللغة. مثلاً، إذا قال المستخدم "تحقق من حالة طلبي من يوم الثلاثاء الماضي"، يحدد الوكيل إجراء البحث عن الطلب، ويحدد أنه يحتاج معرف الطلب أو معامل التاريخ، وقد يطلب من المستخدم توضيحاً إذا كانت المعلومات غامضة.',
        'يتضمن تصحيح أخطاء مجموعات الإجراءات فحص عدة طبقات: يجب أن يكون مخطط OpenAPI صالحاً ووصفياً بما يكفي ليختار الوكيل الإجراء الصحيح؛ ويجب أن تعالج وظيفة Lambda تنسيق الحدث بشكل صحيح؛ ويجب أن تسمح أذونات IAM للوكيل باستدعاء Lambda؛ ويجب أن يتطابق تنسيق الاستجابة مع ما يتوقعه الوكيل. سجلات CloudWatch لكل من تتبع الوكيل وتنفيذ Lambda ضرورية لاستكشاف الأخطاء.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import json

def lambda_handler(event, context):
    """Lambda function for a Bedrock Agent Action Group.
    Handles order lookup and order cancellation actions."""

    agent = event.get("agent", {})
    action_group = event.get("actionGroup", "")
    api_path = event.get("apiPath", "")
    http_method = event.get("httpMethod", "")
    parameters = event.get("parameters", [])

    # Extract parameters into a dictionary
    params = {p["name"]: p["value"] for p in parameters}

    if api_path == "/orders/{orderId}" and http_method == "GET":
        order_id = params.get("orderId", "unknown")
        # Simulate order lookup
        result = {
            "orderId": order_id,
            "status": "shipped",
            "estimatedDelivery": "2025-12-20",
            "items": ["Widget A", "Widget B"],
            "total": "$45.99",
        }
        body = json.dumps(result)
        status_code = 200

    elif api_path == "/orders/{orderId}/cancel" and http_method == "POST":
        order_id = params.get("orderId", "unknown")
        result = {
            "orderId": order_id,
            "status": "cancelled",
            "refundAmount": "$45.99",
            "message": f"Order {order_id} has been cancelled.",
        }
        body = json.dumps(result)
        status_code = 200
    else:
        body = json.dumps({"error": f"Unknown path: {api_path}"})
        status_code = 404

    return {
        "messageVersion": "1.0",
        "response": {
            "actionGroup": action_group,
            "apiPath": api_path,
            "httpMethod": http_method,
            "httpStatusCode": status_code,
            "responseBody": {"application/json": {"body": body}},
        },
    }`,
      description: {
        en: 'An AWS Lambda function that handles Bedrock Agent action group invocations. It processes order lookup and cancellation requests, demonstrating how to extract parameters and return structured responses.',
        ar: 'وظيفة AWS Lambda تعالج استدعاءات مجموعة إجراءات وكيل Bedrock. تعالج طلبات البحث عن الطلبات والإلغاء، موضحة كيفية استخراج المعاملات وإعادة استجابات منظمة.',
      },
    },
    commonMistakes: {
      en: [
        'Writing OpenAPI schemas with vague descriptions that do not help the agent distinguish between similar actions.',
        'Not handling missing or malformed parameters in the Lambda function, causing runtime errors when the agent cannot extract all required values.',
        'Returning unstructured plain text from the Lambda instead of the expected response format with messageVersion, actionGroup, and responseBody fields.',
        'Forgetting to grant the Bedrock Agent service role permission to invoke the Lambda function, resulting in AccessDenied errors.',
      ],
      ar: [
        'كتابة مخططات OpenAPI بأوصاف غامضة لا تساعد الوكيل في التمييز بين الإجراءات المتشابهة.',
        'عدم معالجة المعاملات المفقودة أو المشوهة في وظيفة Lambda، مما يسبب أخطاء وقت التشغيل عندما لا يتمكن الوكيل من استخراج جميع القيم المطلوبة.',
        'إعادة نص عادي غير منظم من Lambda بدلاً من تنسيق الاستجابة المتوقع مع حقول messageVersion وactionGroup وresponseBody.',
        'نسيان منح دور خدمة وكيل Bedrock إذن استدعاء وظيفة Lambda، مما يؤدي إلى أخطاء رفض الوصول.',
      ],
    },
    bestPractices: {
      en: [
        'Write detailed, unambiguous descriptions in your OpenAPI schema for each operation and parameter so the agent can accurately select the right action.',
        'Validate and sanitize all parameters in your Lambda function before using them to prevent injection attacks and handle edge cases.',
        'Return informative error messages from your Lambda that the agent can relay to the user in a helpful way.',
        'Use separate action groups for logically distinct domains (e.g., orders vs. support tickets) to keep schemas focused and manageable.',
        'Log the full event payload in your Lambda function during development to understand exactly what the agent sends and debug parameter extraction issues.',
      ],
      ar: [
        'اكتب أوصافاً مفصلة وواضحة في مخطط OpenAPI لكل عملية ومعامل حتى يتمكن الوكيل من اختيار الإجراء الصحيح بدقة.',
        'تحقق من جميع المعاملات ونظفها في وظيفة Lambda قبل استخدامها لمنع هجمات الحقن ومعالجة الحالات الحدودية.',
        'أعد رسائل خطأ مفيدة من Lambda يمكن للوكيل نقلها للمستخدم بطريقة مفيدة.',
        'استخدم مجموعات إجراءات منفصلة للمجالات المختلفة منطقياً (مثل الطلبات مقابل تذاكر الدعم) للحفاظ على المخططات مركزة وقابلة للإدارة.',
        'سجل حمولة الحدث الكاملة في وظيفة Lambda أثناء التطوير لفهم ما يرسله الوكيل بالضبط وتصحيح مشاكل استخراج المعاملات.',
      ],
    },
    references: [
      { title: 'Bedrock Action Groups Documentation', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents-action-create.html' },
      { title: 'OpenAPI Schema for Bedrock Agents', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents-api-schema.html' },
      { title: 'Lambda Functions for Bedrock Agents', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html' },
    ],
    quiz: [
      {
        id: 'brag-q1',
        question: {
          en: 'What format is used to describe available actions in a Bedrock Action Group?',
          ar: 'ما التنسيق المستخدم لوصف الإجراءات المتاحة في مجموعة إجراءات Bedrock؟',
        },
        options: {
          en: [
            'GraphQL schema',
            'OpenAPI 3.0 schema',
            'Protocol Buffers',
            'XML Schema Definition (XSD)',
          ],
          ar: [
            'مخطط GraphQL',
            'مخطط OpenAPI 3.0',
            'Protocol Buffers',
            'تعريف مخطط XML (XSD)',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Bedrock Action Groups use OpenAPI 3.0 schemas to describe available operations, their parameters, and response formats. This standard format allows the agent to understand what actions are available and how to invoke them.',
          ar: 'تستخدم مجموعات إجراءات Bedrock مخططات OpenAPI 3.0 لوصف العمليات المتاحة ومعاملاتها وتنسيقات الاستجابة. يتيح هذا التنسيق القياسي للوكيل فهم الإجراءات المتاحة وكيفية استدعائها.',
        },
      },
      {
        id: 'brag-q2',
        question: {
          en: 'What AWS service executes the backend logic when a Bedrock Agent invokes an action?',
          ar: 'أي خدمة AWS تنفذ المنطق الخلفي عندما يستدعي وكيل Bedrock إجراءً؟',
        },
        options: {
          en: [
            'Amazon EC2',
            'AWS Lambda',
            'Amazon SQS',
            'Amazon DynamoDB',
          ],
          ar: [
            'Amazon EC2',
            'AWS Lambda',
            'Amazon SQS',
            'Amazon DynamoDB',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Action groups map to AWS Lambda functions that execute the backend logic. Lambda provides serverless execution, scaling automatically to handle agent action invocations without managing servers.',
          ar: 'ترتبط مجموعات الإجراءات بوظائف AWS Lambda التي تنفذ المنطق الخلفي. يوفر Lambda تنفيذاً بدون خادم، مع التوسع تلقائياً للتعامل مع استدعاءات إجراءات الوكيل دون إدارة خوادم.',
        },
      },
      {
        id: 'brag-q3',
        question: {
          en: 'What happens when the agent cannot extract a required parameter from the user conversation?',
          ar: 'ماذا يحدث عندما لا يتمكن الوكيل من استخراج معامل مطلوب من محادثة المستخدم؟',
        },
        options: {
          en: [
            'It uses a random default value',
            'It skips the parameter and calls the action anyway',
            'It asks the user for the missing information',
            'It crashes with an error',
          ],
          ar: [
            'يستخدم قيمة افتراضية عشوائية',
            'يتخطى المعامل ويستدعي الإجراء على أي حال',
            'يسأل المستخدم عن المعلومات المفقودة',
            'ينهار بخطأ',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'When the agent cannot extract a required parameter, it engages in a clarification dialogue, asking the user to provide the missing information before proceeding with the action.',
          ar: 'عندما لا يتمكن الوكيل من استخراج معامل مطلوب، يدخل في حوار توضيحي، يسأل المستخدم لتقديم المعلومات المفقودة قبل المضي في الإجراء.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Bedrock Guardrails
  // ─────────────────────────────────────────────
  'bedrock-guardrails': {
    beginnerDefinition: {
      en: 'Amazon Bedrock Guardrails are safety filters you add to your AI agent to control what it can and cannot say. They block harmful content, prevent discussion of denied topics, redact personal information like phone numbers and addresses, and ensure the agent follows your company responsible AI policies.',
      ar: 'حواجز أمان Amazon Bedrock هي مرشحات أمان تضيفها لوكيل الذكاء الاصطناعي للتحكم فيما يمكنه وما لا يمكنه قوله. تحظر المحتوى الضار، وتمنع مناقشة المواضيع المحظورة، وتحجب المعلومات الشخصية مثل أرقام الهاتف والعناوين، وتضمن أن الوكيل يتبع سياسات الذكاء الاصطناعي المسؤول لشركتك.',
    },
    technicalDefinition: {
      en: 'Amazon Bedrock Guardrails is a configurable policy layer that applies content filtering, topic restriction, word blocking, PII detection and redaction, and contextual grounding checks to both agent inputs and outputs. Guardrails operate as middleware in the agent inference pipeline, evaluating content against defined policies before the prompt reaches the FM and after the response is generated. Policies include configurable sensitivity thresholds for categories like hate speech, violence, sexual content, and misconduct, as well as custom denied topic definitions using natural language descriptions and example phrases.',
      ar: 'حواجز أمان Amazon Bedrock هي طبقة سياسات قابلة للتكوين تطبق تصفية المحتوى وتقييد المواضيع وحظر الكلمات واكتشاف وحجب معلومات التعريف الشخصية وفحوصات التأسيس السياقي على كل من مدخلات ومخرجات الوكيل. تعمل الحواجز كبرمجيات وسيطة في خط أنابيب استدلال الوكيل، تقيّم المحتوى مقابل السياسات المحددة قبل وصول المطالبة للنموذج وبعد توليد الاستجابة. تشمل السياسات عتبات حساسية قابلة للتكوين لفئات مثل خطاب الكراهية والعنف والمحتوى الجنسي وسوء السلوك، بالإضافة إلى تعريفات مواضيع محظورة مخصصة باستخدام أوصاف لغة طبيعية وعبارات مثال.',
    },
    analogy: {
      en: 'Guardrails are like the safety systems in a car. Content filters are like airbags that deploy when dangerous content is detected. Denied topics are like road barriers preventing the car from going into restricted zones. PII redaction is like tinted windows that hide private information from outside view. Just as you would not drive a car without seatbelts, you should not deploy an agent without guardrails.',
      ar: 'الحواجز الأمنية مثل أنظمة الأمان في السيارة. مرشحات المحتوى مثل الوسائد الهوائية التي تنتشر عند اكتشاف محتوى خطير. المواضيع المحظورة مثل حواجز الطريق التي تمنع السيارة من الدخول إلى مناطق محظورة. حجب المعلومات الشخصية مثل النوافذ المظللة التي تخفي المعلومات الخاصة عن النظر الخارجي. كما لا تقود سيارة بدون أحزمة أمان، لا يجب نشر وكيل بدون حواجز أمنية.',
    },
    explanation: {
      en: [
        'Guardrails are essential for responsible AI deployment. They act as a safety net that catches problematic content before it reaches users or before harmful user inputs influence agent behavior. Every production agent should have guardrails configured.',
        'Content filters are the first line of defense. They evaluate text against predefined categories including hate speech, insults, sexual content, violence, and misconduct. Each category has configurable strength levels (none, low, medium, high) that you set independently for both input and output. Higher sensitivity catches more borderline content but may also increase false positives.',
        'Denied topics allow you to define custom restrictions. You describe topics the agent should never discuss using natural language definitions and example phrases. For example, you might deny topics like competitor product comparisons, investment advice, or medical diagnoses. When the agent detects a denied topic in user input or its own response, it blocks the content and returns a predefined message.',
        'PII (Personally Identifiable Information) detection and redaction protects user privacy. Guardrails can identify sensitive data types such as names, email addresses, phone numbers, social security numbers, and credit card numbers. You configure each PII type to either be blocked (rejecting the entire message) or anonymized (replacing the PII with a placeholder like [EMAIL]).',
        'Word filters provide simple but effective keyword-based blocking. You define a list of profane or inappropriate words, and guardrails will block any message containing them. This is useful for catching specific terms that content filters might miss, including brand-specific terms or internal jargon that should not appear in responses.',
        'Contextual grounding checks help reduce hallucinations by verifying that agent responses are grounded in the provided context (from knowledge bases or tools). If the agent generates information not supported by its retrieved sources, the grounding check can flag or block the response.',
      ],
      ar: [
        'الحواجز الأمنية ضرورية للنشر المسؤول للذكاء الاصطناعي. تعمل كشبكة أمان تلتقط المحتوى الإشكالي قبل وصوله للمستخدمين أو قبل أن تؤثر المدخلات الضارة على سلوك الوكيل. يجب تكوين حواجز أمنية لكل وكيل إنتاج.',
        'مرشحات المحتوى هي خط الدفاع الأول. تقيّم النص مقابل فئات محددة مسبقاً تشمل خطاب الكراهية والإهانات والمحتوى الجنسي والعنف وسوء السلوك. لكل فئة مستويات قوة قابلة للتكوين (بدون، منخفض، متوسط، عالي) تضبطها بشكل مستقل لكل من المدخلات والمخرجات. الحساسية الأعلى تلتقط محتوى أكثر حدية لكنها قد تزيد أيضاً الإيجابيات الخاطئة.',
        'تتيح المواضيع المحظورة تحديد قيود مخصصة. تصف مواضيع يجب ألا يناقشها الوكيل أبداً باستخدام تعريفات لغة طبيعية وعبارات مثال. مثلاً، قد تحظر مواضيع مثل مقارنات منتجات المنافسين أو نصائح الاستثمار أو التشخيصات الطبية. عندما يكتشف الوكيل موضوعاً محظوراً في مدخلات المستخدم أو رده، يحظر المحتوى ويعيد رسالة محددة مسبقاً.',
        'يحمي اكتشاف وحجب معلومات التعريف الشخصية (PII) خصوصية المستخدم. يمكن للحواجز تحديد أنواع بيانات حساسة مثل الأسماء وعناوين البريد الإلكتروني وأرقام الهاتف وأرقام الضمان الاجتماعي وأرقام بطاقات الائتمان. تكوّن كل نوع PII إما ليُحظر (رفض الرسالة بالكامل) أو يُجهّل (استبدال PII بعنصر نائب مثل [EMAIL]).',
        'توفر مرشحات الكلمات حظراً بسيطاً لكنه فعال قائم على الكلمات المفتاحية. تحدد قائمة بالكلمات البذيئة أو غير المناسبة، وتحظر الحواجز أي رسالة تحتويها. هذا مفيد لالتقاط مصطلحات محددة قد تفوتها مرشحات المحتوى، بما في ذلك مصطلحات خاصة بالعلامة التجارية أو مصطلحات داخلية لا يجب أن تظهر في الردود.',
        'تساعد فحوصات التأسيس السياقي في تقليل الهلوسة بالتحقق من أن ردود الوكيل مؤسسة في السياق المقدم (من قواعد المعرفة أو الأدوات). إذا أنتج الوكيل معلومات غير مدعومة بمصادره المسترجعة، يمكن لفحص التأسيس تمييز أو حظر الاستجابة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import boto3
import json

bedrock = boto3.client("bedrock", region_name="us-east-1")

# Create a guardrail with content filters and PII redaction
response = bedrock.create_guardrail(
    name="production-safety-guardrail",
    description="Content filtering and PII protection",
    blockedInputMessaging="Sorry, I cannot process that request.",
    blockedOutputsMessaging="Sorry, I cannot provide that response.",
    contentPolicyConfig={
        "filtersConfig": [
            {"type": "SEXUAL", "inputStrength": "HIGH", "outputStrength": "HIGH"},
            {"type": "VIOLENCE", "inputStrength": "HIGH", "outputStrength": "HIGH"},
            {"type": "HATE", "inputStrength": "HIGH", "outputStrength": "HIGH"},
            {"type": "INSULTS", "inputStrength": "MEDIUM", "outputStrength": "HIGH"},
            {"type": "MISCONDUCT", "inputStrength": "HIGH", "outputStrength": "HIGH"},
        ]
    },
    topicPolicyConfig={
        "topicsConfig": [
            {
                "name": "Investment Advice",
                "definition": "Any advice about buying or selling stocks or financial instruments.",
                "examples": ["Should I buy AAPL stock?", "Is crypto a good investment?"],
                "type": "DENY",
            },
        ]
    },
    sensitiveInformationPolicyConfig={
        "piiEntitiesConfig": [
            {"type": "EMAIL", "action": "ANONYMIZE"},
            {"type": "PHONE", "action": "ANONYMIZE"},
            {"type": "US_SOCIAL_SECURITY_NUMBER", "action": "BLOCK"},
            {"type": "CREDIT_DEBIT_CARD_NUMBER", "action": "BLOCK"},
        ]
    },
)

guardrail_id = response["guardrailId"]
print(f"Guardrail created: {guardrail_id}")

# Test the guardrail with ApplyGuardrail API
bedrock_runtime = boto3.client("bedrock-runtime", region_name="us-east-1")
test_result = bedrock_runtime.apply_guardrail(
    guardrailIdentifier=guardrail_id,
    guardrailVersion="DRAFT",
    source="INPUT",
    content=[{"text": {"text": "My SSN is 123-45-6789"}}],
)
print(f"Action: {test_result['action']}")`,
      description: {
        en: 'Creating an Amazon Bedrock Guardrail with content filters for harmful categories, a denied topic for investment advice, and PII redaction for sensitive data types.',
        ar: 'إنشاء حاجز أمان Amazon Bedrock مع مرشحات محتوى للفئات الضارة، وموضوع محظور لنصائح الاستثمار، وحجب معلومات شخصية لأنواع البيانات الحساسة.',
      },
    },
    commonMistakes: {
      en: [
        'Setting all content filter strengths to LOW, providing inadequate protection against harmful content in production.',
        'Writing denied topic definitions that are too broad, causing the guardrail to block legitimate user queries unrelated to the restricted topic.',
        'Only configuring output guardrails and ignoring input guardrails, allowing prompt injection attacks to reach the foundation model.',
        'Not testing guardrails with adversarial inputs designed to bypass content filters before deploying to production.',
      ],
      ar: [
        'تعيين جميع قوى مرشحات المحتوى على منخفض، مما يوفر حماية غير كافية ضد المحتوى الضار في الإنتاج.',
        'كتابة تعريفات مواضيع محظورة واسعة جداً، مما يتسبب في حظر الحاجز لاستعلامات المستخدم المشروعة غير المتعلقة بالموضوع المحظور.',
        'تكوين حواجز المخرجات فقط وتجاهل حواجز المدخلات، مما يسمح لهجمات حقن المطالبات بالوصول إلى النموذج الأساسي.',
        'عدم اختبار الحواجز بمدخلات عدائية مصممة لتجاوز مرشحات المحتوى قبل النشر في الإنتاج.',
      ],
    },
    bestPractices: {
      en: [
        'Apply guardrails to both input and output to protect against prompt injection and ensure safe responses.',
        'Start with higher sensitivity levels and reduce them only if you observe excessive false positives after testing.',
        'Use the ApplyGuardrail API to test your guardrail configuration with a comprehensive set of test cases, including adversarial examples, before attaching it to an agent.',
        'Combine multiple guardrail types (content filters + denied topics + PII redaction) for defense-in-depth protection.',
        'Monitor guardrail intervention metrics in CloudWatch to understand how often content is being blocked and fine-tune policies accordingly.',
      ],
      ar: [
        'طبق الحواجز على كل من المدخلات والمخرجات للحماية من حقن المطالبات وضمان ردود آمنة.',
        'ابدأ بمستويات حساسية أعلى وقللها فقط إذا لاحظت إيجابيات خاطئة مفرطة بعد الاختبار.',
        'استخدم واجهة ApplyGuardrail لاختبار تكوين الحاجز بمجموعة شاملة من حالات الاختبار، بما في ذلك أمثلة عدائية، قبل إرفاقه بوكيل.',
        'ادمج أنواع حواجز متعددة (مرشحات محتوى + مواضيع محظورة + حجب PII) لحماية دفاعية متعمقة.',
        'راقب مقاييس تدخل الحواجز في CloudWatch لفهم مدى تكرار حظر المحتوى وضبط السياسات وفقاً لذلك.',
      ],
    },
    references: [
      { title: 'Amazon Bedrock Guardrails Documentation', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html' },
      { title: 'Responsible AI with Bedrock Guardrails', url: 'https://aws.amazon.com/bedrock/guardrails/' },
      { title: 'Testing Guardrails with ApplyGuardrail API', url: 'https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ApplyGuardrail.html' },
    ],
    quiz: [
      {
        id: 'brgr-q1',
        question: {
          en: 'What does PII redaction in Bedrock Guardrails do when configured to "ANONYMIZE"?',
          ar: 'ماذا يفعل حجب معلومات التعريف الشخصية في حواجز Bedrock عند تكوينه على "ANONYMIZE"؟',
        },
        options: {
          en: [
            'Deletes the entire message',
            'Replaces the PII with a placeholder like [EMAIL]',
            'Encrypts the PII with AES-256',
            'Sends the PII to a separate secure database',
          ],
          ar: [
            'يحذف الرسالة بالكامل',
            'يستبدل PII بعنصر نائب مثل [EMAIL]',
            'يشفر PII بـ AES-256',
            'يرسل PII إلى قاعدة بيانات آمنة منفصلة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'When set to ANONYMIZE, Bedrock Guardrails replaces detected PII with type-specific placeholders (e.g., [EMAIL], [PHONE]) so the message can still be processed while protecting sensitive information.',
          ar: 'عند التعيين على ANONYMIZE، تستبدل حواجز Bedrock معلومات التعريف الشخصية المكتشفة بعناصر نائبة خاصة بالنوع (مثل [EMAIL]، [PHONE]) حتى يمكن معالجة الرسالة مع حماية المعلومات الحساسة.',
        },
      },
      {
        id: 'brgr-q2',
        question: {
          en: 'Why is it important to apply guardrails to agent inputs, not just outputs?',
          ar: 'لماذا من المهم تطبيق الحواجز على مدخلات الوكيل وليس فقط المخرجات؟',
        },
        options: {
          en: [
            'To improve response speed',
            'To protect against prompt injection attacks that try to manipulate agent behavior',
            'To reduce API costs',
            'To make the agent respond in different languages',
          ],
          ar: [
            'لتحسين سرعة الاستجابة',
            'للحماية من هجمات حقن المطالبات التي تحاول التلاعب بسلوك الوكيل',
            'لتقليل تكاليف API',
            'لجعل الوكيل يرد بلغات مختلفة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Input guardrails catch prompt injection attempts and harmful content before they reach the foundation model. Without input filtering, malicious users could manipulate the agent into bypassing safety measures.',
          ar: 'تلتقط حواجز المدخلات محاولات حقن المطالبات والمحتوى الضار قبل وصولها إلى النموذج الأساسي. بدون تصفية المدخلات، يمكن للمستخدمين الخبيثين التلاعب بالوكيل لتجاوز إجراءات الأمان.',
        },
      },
      {
        id: 'brgr-q3',
        question: {
          en: 'What is the purpose of contextual grounding checks in Bedrock Guardrails?',
          ar: 'ما هو غرض فحوصات التأسيس السياقي في حواجز Bedrock؟',
        },
        options: {
          en: [
            'To ensure the agent only responds in English',
            'To verify that responses are factually grounded in retrieved source documents',
            'To check that the agent uses proper grammar',
            'To measure the sentiment of user messages',
          ],
          ar: [
            'لضمان أن الوكيل يرد بالإنجليزية فقط',
            'للتحقق من أن الردود مؤسسة واقعياً في المستندات المصدرية المسترجعة',
            'للتحقق من أن الوكيل يستخدم قواعد نحوية صحيحة',
            'لقياس مشاعر رسائل المستخدم',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Contextual grounding checks help reduce hallucinations by verifying that the agent response is supported by the context retrieved from knowledge bases or tools, rather than fabricated by the model.',
          ar: 'تساعد فحوصات التأسيس السياقي في تقليل الهلوسة بالتحقق من أن رد الوكيل مدعوم بالسياق المسترجع من قواعد المعرفة أو الأدوات، بدلاً من أن يكون ملفقاً من النموذج.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Bedrock Agent Collaboration
  // ─────────────────────────────────────────────
  'bedrock-agent-collaboration': {
    beginnerDefinition: {
      en: 'Bedrock Agent Collaboration lets you build systems where multiple specialized AI agents work together. Instead of one agent doing everything, you have a supervisor agent that routes tasks to expert agents: one for orders, one for returns, one for product questions. They communicate, share context, and coordinate to handle complex requests.',
      ar: 'يتيح لك تعاون وكلاء Bedrock بناء أنظمة حيث يعمل عدة وكلاء ذكاء اصطناعي متخصصين معاً. بدلاً من وكيل واحد يفعل كل شيء، لديك وكيل مشرف يوجه المهام إلى وكلاء خبراء: واحد للطلبات، وواحد للمرتجعات، وواحد لأسئلة المنتجات. يتواصلون ويتشاركون السياق وينسقون للتعامل مع الطلبات المعقدة.',
    },
    technicalDefinition: {
      en: 'Amazon Bedrock multi-agent collaboration enables orchestration of multiple specialized Bedrock Agents through a supervisor-worker pattern. A supervisor agent receives user requests, analyzes intent, delegates subtasks to specialized sub-agents (each with their own foundation model, instructions, knowledge bases, and action groups), aggregates their responses, and produces a coherent final answer. The collaboration framework supports agent-to-agent communication via the InvokeInlineAgent API, shared session context, parallel and sequential task delegation, and centralized monitoring through CloudWatch traces that span all participating agents.',
      ar: 'يمكّن تعاون وكلاء Amazon Bedrock المتعدد من تنسيق عدة وكلاء Bedrock متخصصين عبر نمط مشرف-عامل. يستقبل وكيل مشرف طلبات المستخدم، ويحلل النية، ويفوض المهام الفرعية إلى وكلاء فرعيين متخصصين (لكل منهم نموذجه الأساسي وتعليماته وقواعد معرفته ومجموعات إجراءاته)، ويجمع ردودهم، وينتج إجابة نهائية متماسكة. يدعم إطار التعاون التواصل بين الوكلاء عبر واجهة InvokeInlineAgent، وسياق جلسة مشترك، وتفويض مهام متوازي ومتسلسل، ومراقبة مركزية عبر تتبعات CloudWatch تشمل جميع الوكلاء المشاركين.',
    },
    analogy: {
      en: 'Multi-agent collaboration is like a hospital emergency department. The triage nurse (supervisor agent) evaluates each patient and routes them to the right specialist: a cardiologist for chest pain, an orthopedist for broken bones, a neurologist for headaches. Each specialist has their own expertise, tools, and medical records access. The triage nurse coordinates between them, ensures information flows properly, and makes sure no patient falls through the cracks.',
      ar: 'تعاون الوكلاء المتعدد يشبه قسم الطوارئ في المستشفى. ممرض الفرز (الوكيل المشرف) يقيّم كل مريض ويوجهه إلى الأخصائي المناسب: طبيب قلب لآلام الصدر، وجراح عظام للكسور، وطبيب أعصاب للصداع. لكل أخصائي خبرته وأدواته ووصوله للسجلات الطبية الخاصة به. ينسق ممرض الفرز بينهم، ويضمن تدفق المعلومات بشكل صحيح، ويتأكد من عدم إهمال أي مريض.',
    },
    explanation: {
      en: [
        'As AI agent applications grow in complexity, a single agent often becomes overwhelmed with too many responsibilities. Multi-agent collaboration solves this by decomposing the system into specialized agents, each focused on a specific domain. This improves accuracy because each agent can be optimized for its particular task.',
        'The supervisor-worker pattern is the primary orchestration model in Bedrock. The supervisor agent acts as a router and coordinator. It analyzes incoming user requests, determines which sub-agent(s) are best suited to handle each part of the request, delegates work, and synthesizes the responses into a unified answer for the user.',
        'Each sub-agent operates independently with its own configuration. A sub-agent can have a different foundation model (e.g., a faster model for simple lookups, a more capable model for complex reasoning), its own knowledge bases, and its own action groups. This allows you to optimize cost and performance per task type.',
        'Agent-to-agent communication happens through the Bedrock runtime. The supervisor invokes sub-agents using the API, passing relevant context from the user conversation. Sub-agents process their assigned tasks and return results to the supervisor. The supervisor can invoke multiple sub-agents in parallel for independent tasks or sequentially when one task depends on another.',
        'Monitoring multi-agent systems requires observability across all participating agents. CloudWatch provides distributed tracing that follows a request from the supervisor through each sub-agent invocation. This helps you identify bottlenecks, debug routing decisions, and understand the end-to-end latency of complex multi-agent workflows.',
        'A key design decision is how to partition responsibilities across agents. Agents should have clear, non-overlapping domains to avoid confusion in routing. Each agent should be testable independently before being integrated into the multi-agent system.',
      ],
      ar: [
        'مع نمو تعقيد تطبيقات وكلاء الذكاء الاصطناعي، غالباً ما يصبح وكيل واحد مثقلاً بمسؤوليات كثيرة. يحل تعاون الوكلاء المتعدد هذا بتفكيك النظام إلى وكلاء متخصصين، كل منهم مركز على مجال محدد. هذا يحسن الدقة لأن كل وكيل يمكن تحسينه لمهمته الخاصة.',
        'نمط المشرف-العامل هو نموذج التنسيق الأساسي في Bedrock. يعمل الوكيل المشرف كموجه ومنسق. يحلل طلبات المستخدم الواردة، ويحدد أي وكيل(وكلاء) فرعي أنسب للتعامل مع كل جزء من الطلب، ويفوض العمل، ويجمع الردود في إجابة موحدة للمستخدم.',
        'يعمل كل وكيل فرعي باستقلالية مع تكوينه الخاص. يمكن للوكيل الفرعي أن يملك نموذجاً أساسياً مختلفاً (مثلاً، نموذج أسرع للبحث البسيط، ونموذج أقدر للاستدلال المعقد)، وقواعد معرفته الخاصة، ومجموعات إجراءاته الخاصة. يتيح لك هذا تحسين التكلفة والأداء لكل نوع مهمة.',
        'يحدث التواصل بين الوكلاء عبر وقت تشغيل Bedrock. يستدعي المشرف الوكلاء الفرعيين باستخدام واجهة البرمجة، مرراً السياق ذا الصلة من محادثة المستخدم. يعالج الوكلاء الفرعيون مهامهم المسندة ويعيدون النتائج للمشرف. يمكن للمشرف استدعاء عدة وكلاء فرعيين بالتوازي للمهام المستقلة أو بالتسلسل عندما تعتمد مهمة على أخرى.',
        'تتطلب مراقبة أنظمة الوكلاء المتعددة قابلية ملاحظة عبر جميع الوكلاء المشاركين. يوفر CloudWatch تتبعاً موزعاً يتبع الطلب من المشرف عبر كل استدعاء وكيل فرعي. يساعد هذا في تحديد الاختناقات وتصحيح قرارات التوجيه وفهم زمن الاستجابة من البداية للنهاية لسير عمل الوكلاء المتعددة المعقدة.',
        'قرار تصميم رئيسي هو كيفية تقسيم المسؤوليات عبر الوكلاء. يجب أن تكون للوكلاء مجالات واضحة وغير متداخلة لتجنب الارتباك في التوجيه. يجب أن يكون كل وكيل قابلاً للاختبار بشكل مستقل قبل دمجه في نظام الوكلاء المتعدد.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import boto3

bedrock_agent = boto3.client("bedrock-agent", region_name="us-east-1")
bedrock_runtime = boto3.client("bedrock-agent-runtime", region_name="us-east-1")

# Define sub-agents as inline collaborators
order_agent = {
    "agentName": "OrderAgent",
    "foundationModel": "anthropic.claude-3-haiku-20240307-v1:0",
    "instruction": "You handle order lookups and tracking. Use the order action group.",
    "actionGroups": [{
        "actionGroupName": "OrderActions",
        "actionGroupExecutor": {"lambda_": "arn:aws:lambda:us-east-1:123:function:orders"},
        "apiSchema": {"payload": '{"openapi":"3.0.0","paths":{"/orders/{id}":{"get":{}}}}'},
    }],
}

returns_agent = {
    "agentName": "ReturnsAgent",
    "foundationModel": "anthropic.claude-3-haiku-20240307-v1:0",
    "instruction": "You handle return requests and refund processing.",
    "actionGroups": [{
        "actionGroupName": "ReturnActions",
        "actionGroupExecutor": {"lambda_": "arn:aws:lambda:us-east-1:123:function:returns"},
        "apiSchema": {"payload": '{"openapi":"3.0.0","paths":{"/returns":{"post":{}}}}'},
    }],
}

# Create supervisor agent with collaborators
supervisor = bedrock_agent.create_agent(
    agentName="customer-service-supervisor",
    foundationModel="anthropic.claude-3-sonnet-20240229-v1:0",
    instruction="""You are a customer service supervisor. Analyze the
    user request and delegate to the appropriate specialist:
    - OrderAgent: for order status, tracking, and delivery questions
    - ReturnsAgent: for return requests and refund inquiries
    Combine their responses into a helpful final answer.""",
    agentCollaboration="SUPERVISOR",
)

supervisor_id = supervisor["agent"]["agentId"]

# Associate sub-agents
for sub_agent in [order_agent, returns_agent]:
    bedrock_agent.associate_agent_collaborator(
        agentId=supervisor_id,
        agentVersion="DRAFT",
        agentDescriptor={"aliasArn": f"arn:aws:bedrock:us-east-1:123:agent-alias/{sub_agent['agentName']}"},
        collaborationInstruction=f"Delegate relevant tasks to {sub_agent['agentName']}",
        collaboratorName=sub_agent["agentName"],
    )

print(f"Supervisor agent {supervisor_id} configured with sub-agents.")`,
      description: {
        en: 'Setting up a multi-agent collaboration system with a supervisor agent that routes customer service requests to specialized order and returns sub-agents.',
        ar: 'إعداد نظام تعاون وكلاء متعدد مع وكيل مشرف يوجه طلبات خدمة العملاء إلى وكلاء فرعيين متخصصين في الطلبات والمرتجعات.',
      },
    },
    commonMistakes: {
      en: [
        'Creating sub-agents with overlapping responsibilities, causing the supervisor to route ambiguous requests inconsistently.',
        'Using the same expensive foundation model for all sub-agents when simpler models would suffice for straightforward lookup tasks.',
        'Not implementing proper error handling when a sub-agent fails, causing the entire multi-agent workflow to break.',
        'Making the supervisor instructions too vague about routing criteria, leading to incorrect delegation decisions.',
      ],
      ar: [
        'إنشاء وكلاء فرعيين بمسؤوليات متداخلة، مما يتسبب في توجيه المشرف للطلبات الغامضة بشكل غير متسق.',
        'استخدام نفس النموذج الأساسي المكلف لجميع الوكلاء الفرعيين عندما تكفي نماذج أبسط لمهام البحث المباشرة.',
        'عدم تنفيذ معالجة أخطاء مناسبة عند فشل وكيل فرعي، مما يتسبب في انهيار سير عمل الوكلاء المتعدد بالكامل.',
        'جعل تعليمات المشرف غامضة جداً حول معايير التوجيه، مما يؤدي إلى قرارات تفويض غير صحيحة.',
      ],
    },
    bestPractices: {
      en: [
        'Design sub-agents with clear, non-overlapping domains and write explicit routing criteria in the supervisor instructions.',
        'Use cost-appropriate foundation models for each sub-agent: fast, cheap models for simple tasks and more capable models only where complex reasoning is needed.',
        'Implement fallback behavior in the supervisor for when a sub-agent fails or returns an unexpected response.',
        'Test each sub-agent independently before integrating it into the multi-agent system to isolate issues.',
        'Use CloudWatch distributed tracing to monitor the full request lifecycle across supervisor and sub-agent invocations.',
      ],
      ar: [
        'صمم وكلاء فرعيين بمجالات واضحة وغير متداخلة واكتب معايير توجيه صريحة في تعليمات المشرف.',
        'استخدم نماذج أساسية مناسبة التكلفة لكل وكيل فرعي: نماذج سريعة ورخيصة للمهام البسيطة ونماذج أقدر فقط حيث يُحتاج استدلال معقد.',
        'نفذ سلوكاً احتياطياً في المشرف عند فشل وكيل فرعي أو إعادته استجابة غير متوقعة.',
        'اختبر كل وكيل فرعي بشكل مستقل قبل دمجه في نظام الوكلاء المتعدد لعزل المشاكل.',
        'استخدم التتبع الموزع في CloudWatch لمراقبة دورة حياة الطلب الكاملة عبر استدعاءات المشرف والوكلاء الفرعيين.',
      ],
    },
    references: [
      { title: 'Multi-Agent Collaboration with Bedrock', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent.html' },
      { title: 'Supervisor Agent Pattern - AWS', url: 'https://aws.amazon.com/blogs/machine-learning/multi-agent-collaboration-with-amazon-bedrock/' },
      { title: 'Agent Orchestration Best Practices', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents-orchestration.html' },
    ],
    quiz: [
      {
        id: 'brac-q1',
        question: {
          en: 'What is the primary orchestration pattern used in Bedrock multi-agent collaboration?',
          ar: 'ما هو نمط التنسيق الأساسي المستخدم في تعاون وكلاء Bedrock المتعدد؟',
        },
        options: {
          en: [
            'Peer-to-peer mesh pattern',
            'Supervisor-worker pattern',
            'Event-driven pattern',
            'Pipeline pattern',
          ],
          ar: [
            'نمط شبكة نظير-لنظير',
            'نمط مشرف-عامل',
            'نمط مدفوع بالأحداث',
            'نمط خط الأنابيب',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Bedrock multi-agent collaboration uses a supervisor-worker pattern where a supervisor agent analyzes requests, delegates to specialized sub-agents, and aggregates their responses.',
          ar: 'يستخدم تعاون وكلاء Bedrock المتعدد نمط مشرف-عامل حيث يحلل وكيل مشرف الطلبات ويفوض إلى وكلاء فرعيين متخصصين ويجمع ردودهم.',
        },
      },
      {
        id: 'brac-q2',
        question: {
          en: 'Why should sub-agents have clear, non-overlapping responsibilities?',
          ar: 'لماذا يجب أن تكون للوكلاء الفرعيين مسؤوليات واضحة وغير متداخلة؟',
        },
        options: {
          en: [
            'To reduce the total number of agents needed',
            'To avoid routing ambiguity where the supervisor cannot decide which agent to delegate to',
            'To ensure all agents use the same foundation model',
            'To comply with AWS service limits',
          ],
          ar: [
            'لتقليل العدد الإجمالي للوكلاء المطلوبين',
            'لتجنب غموض التوجيه حيث لا يستطيع المشرف تحديد أي وكيل يفوض إليه',
            'لضمان استخدام جميع الوكلاء نفس النموذج الأساسي',
            'للامتثال لحدود خدمة AWS',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'When sub-agents have overlapping responsibilities, the supervisor may route requests inconsistently or to the wrong agent, leading to incorrect or incomplete responses.',
          ar: 'عندما تتداخل مسؤوليات الوكلاء الفرعيين، قد يوجه المشرف الطلبات بشكل غير متسق أو إلى الوكيل الخطأ، مما يؤدي إلى ردود غير صحيحة أو غير مكتملة.',
        },
      },
      {
        id: 'brac-q3',
        question: {
          en: 'What is a cost optimization strategy in multi-agent systems?',
          ar: 'ما هي استراتيجية تحسين التكلفة في أنظمة الوكلاء المتعددة؟',
        },
        options: {
          en: [
            'Use the most expensive model for all agents to ensure quality',
            'Use different foundation models per agent based on task complexity',
            'Disable all knowledge bases to save money',
            'Run all agents on a single Lambda function',
          ],
          ar: [
            'استخدام أغلى نموذج لجميع الوكلاء لضمان الجودة',
            'استخدام نماذج أساسية مختلفة لكل وكيل بناءً على تعقيد المهمة',
            'تعطيل جميع قواعد المعرفة لتوفير المال',
            'تشغيل جميع الوكلاء على وظيفة Lambda واحدة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Using appropriate models per agent (fast, cheap models for simple lookups; capable models for complex reasoning) optimizes cost without sacrificing quality where it matters.',
          ar: 'استخدام نماذج مناسبة لكل وكيل (نماذج سريعة ورخيصة للبحث البسيط؛ نماذج قادرة للاستدلال المعقد) يحسن التكلفة دون التضحية بالجودة حيث تهم.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. CSV Data Agent
  // ─────────────────────────────────────────────
  'csv-data-agent': {
    beginnerDefinition: {
      en: 'A CSV data analysis agent is an AI assistant that can read spreadsheet-like CSV files, answer questions about the data in plain English, create charts and summaries, and clean up messy data. Instead of writing formulas or code yourself, you just ask questions like "What was our best-selling product last month?" and the agent figures it out.',
      ar: 'وكيل تحليل بيانات CSV هو مساعد ذكاء اصطناعي يمكنه قراءة ملفات CSV الشبيهة بجداول البيانات، والإجابة على أسئلة حول البيانات بلغة عادية، وإنشاء رسوم بيانية وملخصات، وتنظيف البيانات الفوضوية. بدلاً من كتابة الصيغ أو الكود بنفسك، تسأل فقط أسئلة مثل "ما هو منتجنا الأكثر مبيعاً الشهر الماضي؟" ويكتشف الوكيل ذلك.',
    },
    technicalDefinition: {
      en: 'A CSV data analysis agent integrates an LLM with data manipulation libraries (pandas, polars) and visualization tools (matplotlib, plotly) through a code execution sandbox. The agent translates natural language queries into pandas operations, executes them against loaded DataFrames, interprets the results, and optionally generates visualizations. Key capabilities include schema inference, data profiling, statistical analysis, data cleaning/transformation, and iterative query refinement when initial results are ambiguous or incomplete.',
      ar: 'يدمج وكيل تحليل بيانات CSV نموذج لغة كبير مع مكتبات معالجة البيانات (pandas وpolars) وأدوات التصور (matplotlib وplotly) عبر بيئة تنفيذ كود معزولة. يترجم الوكيل استعلامات اللغة الطبيعية إلى عمليات pandas، وينفذها على إطارات البيانات المحملة، ويفسر النتائج، وينشئ اختيارياً تصورات بصرية. تشمل القدرات الرئيسية استنتاج المخطط وتوصيف البيانات والتحليل الإحصائي وتنظيف/تحويل البيانات وتحسين الاستعلام التكراري عندما تكون النتائج الأولية غامضة أو غير مكتملة.',
    },
    analogy: {
      en: 'Think of a CSV data agent like having a personal data analyst sitting next to you. You hand them a spreadsheet and say "Tell me which region had the highest growth." They look at the data, figure out the right columns, run the calculations, and present the answer with a chart. You do not need to know Excel formulas or Python  - you just ask questions in plain language and get answers.',
      ar: 'فكر في وكيل بيانات CSV كأن لديك محلل بيانات شخصي يجلس بجانبك. تسلمه جدول بيانات وتقول "أخبرني أي منطقة حققت أعلى نمو". ينظر إلى البيانات ويحدد الأعمدة الصحيحة ويجري الحسابات ويقدم الإجابة مع رسم بياني. لا تحتاج لمعرفة صيغ Excel أو Python  - تسأل فقط أسئلة بلغة عادية وتحصل على إجابات.',
    },
    explanation: {
      en: [
        'CSV data analysis agents democratize data access by allowing non-technical users to explore and analyze data using natural language. Instead of requiring SQL expertise or Python programming skills, users simply describe what they want to know, and the agent handles the technical implementation.',
        'The first step when a user uploads a CSV file is data profiling. The agent reads the file, identifies column names and data types, checks for missing values, detects duplicates, and summarizes basic statistics (mean, median, min, max, unique counts). This profile gives the agent and the user a shared understanding of the dataset.',
        'For natural language querying, the agent translates user questions into pandas operations. The LLM examines the question, the column names, and sample data to generate the appropriate code. For example, "What is the average salary by department?" becomes a groupby and mean operation on the relevant columns.',
        'Data visualization is a powerful capability. The agent can generate bar charts, line graphs, scatter plots, histograms, and pie charts based on user requests or when a visual representation would better communicate the answer. Libraries like matplotlib and plotly create these visualizations programmatically.',
        'Data cleaning and transformation handle real-world data quality issues. The agent can fill missing values, standardize date formats, remove duplicates, correct data types, normalize text (e.g., fixing inconsistent capitalization), and merge multiple CSV files. Users describe what they want cleaned, and the agent generates and executes the transformation code.',
        'Safety is important: the agent should execute code in a sandboxed environment to prevent malicious operations, validate that generated code only accesses the uploaded data, and handle errors gracefully when the data does not match expectations.',
      ],
      ar: [
        'تُضفي وكلاء تحليل بيانات CSV الطابع الديمقراطي على الوصول للبيانات بالسماح للمستخدمين غير التقنيين باستكشاف وتحليل البيانات باستخدام لغة طبيعية. بدلاً من الحاجة إلى خبرة SQL أو مهارات برمجة Python، يصف المستخدمون ببساطة ما يريدون معرفته، ويتولى الوكيل التنفيذ التقني.',
        'الخطوة الأولى عند تحميل المستخدم لملف CSV هي توصيف البيانات. يقرأ الوكيل الملف ويحدد أسماء الأعمدة وأنواع البيانات ويتحقق من القيم المفقودة ويكشف التكرارات ويلخص الإحصاءات الأساسية (المتوسط، الوسيط، الحد الأدنى، الحد الأقصى، العدد الفريد). يمنح هذا التوصيف الوكيل والمستخدم فهماً مشتركاً لمجموعة البيانات.',
        'للاستعلام بلغة طبيعية، يترجم الوكيل أسئلة المستخدم إلى عمليات pandas. يفحص نموذج اللغة السؤال وأسماء الأعمدة وعينة البيانات لتوليد الكود المناسب. مثلاً، "ما هو متوسط الراتب حسب القسم؟" يصبح عملية تجميع ومتوسط على الأعمدة ذات الصلة.',
        'التصور البصري للبيانات قدرة قوية. يمكن للوكيل إنشاء مخططات شريطية ورسوم بيانية خطية ومخططات تشتت ورسوم بيانية توزيعية ومخططات دائرية بناءً على طلبات المستخدم أو عندما يكون التمثيل البصري أفضل لتوصيل الإجابة. تنشئ مكتبات مثل matplotlib وplotly هذه التصورات برمجياً.',
        'يعالج تنظيف وتحويل البيانات مشاكل جودة البيانات في العالم الحقيقي. يمكن للوكيل ملء القيم المفقودة وتوحيد تنسيقات التاريخ وإزالة التكرارات وتصحيح أنواع البيانات وتطبيع النص (مثل إصلاح التكبير غير المتسق) ودمج ملفات CSV متعددة. يصف المستخدمون ما يريدون تنظيفه، ويولد الوكيل وينفذ كود التحويل.',
        'الأمان مهم: يجب أن ينفذ الوكيل الكود في بيئة معزولة لمنع العمليات الخبيثة، والتحقق من أن الكود المولد يصل فقط إلى البيانات المحملة، ومعالجة الأخطاء بسلاسة عندما لا تتطابق البيانات مع التوقعات.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import pandas as pd
from openai import OpenAI

client = OpenAI()

def csv_data_agent(csv_path: str, user_question: str) -> str:
    """An agent that analyzes CSV data using natural language."""
    # Load and profile the data
    df = pd.read_csv(csv_path)
    profile = f"""Dataset: {csv_path}
Shape: {df.shape[0]} rows x {df.shape[1]} columns
Columns: {dict(df.dtypes)}
Sample (first 3 rows):
{df.head(3).to_string()}
Missing values: {dict(df.isnull().sum())}"""

    # Ask the LLM to generate pandas code
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"""You are a data analyst.
Given a pandas DataFrame 'df' with this profile:
{profile}

Generate Python code to answer the user question.
Only use pandas operations on 'df'. Print the result.
Wrap code in \`\`\`python\`\`\` block."""},
            {"role": "user", "content": user_question},
        ],
    )

    # Extract and execute the generated code
    reply = response.choices[0].message.content
    code = reply.split("\`\`\`python")[1].split("\`\`\`")[0].strip()

    local_vars = {"df": df, "pd": pd}
    exec(code, {}, local_vars)  # Use sandbox in production!

    # Get the LLM to interpret the results
    interpretation = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Summarize data analysis results clearly."},
            {"role": "user", "content": f"Question: {user_question}\\nCode:\\n{code}\\nResults are printed above."},
        ],
    )
    return interpretation.choices[0].message.content

# Usage
result = csv_data_agent("sales.csv", "Which product category had the highest revenue?")
print(result)`,
      description: {
        en: 'A CSV data analysis agent that loads a CSV file, profiles the data, generates pandas code from natural language questions, executes it, and interprets the results.',
        ar: 'وكيل تحليل بيانات CSV يحمل ملف CSV ويوصف البيانات ويولد كود pandas من أسئلة اللغة الطبيعية وينفذه ويفسر النتائج.',
      },
    },
    commonMistakes: {
      en: [
        'Executing generated code without any sandboxing, allowing the LLM to potentially run destructive operations on the file system.',
        'Not profiling the data before generating queries, causing the LLM to guess column names and produce incorrect code.',
        'Assuming all CSV files are clean and well-formatted; real-world data often has encoding issues, mixed types, and inconsistent delimiters.',
        'Loading extremely large CSV files entirely into memory instead of using chunked reading or sampling for initial exploration.',
      ],
      ar: [
        'تنفيذ الكود المولد بدون أي عزل، مما يسمح لنموذج اللغة بتشغيل عمليات تدميرية محتملة على نظام الملفات.',
        'عدم توصيف البيانات قبل توليد الاستعلامات، مما يتسبب في تخمين نموذج اللغة لأسماء الأعمدة وإنتاج كود غير صحيح.',
        'افتراض أن جميع ملفات CSV نظيفة ومنسقة جيداً؛ بيانات العالم الحقيقي غالباً ما تحتوي على مشاكل ترميز وأنواع مختلطة ومحددات غير متسقة.',
        'تحميل ملفات CSV كبيرة جداً بالكامل في الذاكرة بدلاً من استخدام القراءة المجزأة أو أخذ العينات للاستكشاف الأولي.',
      ],
    },
    bestPractices: {
      en: [
        'Always profile the dataset first (columns, types, sample rows, missing values) and include this profile in the LLM prompt for accurate code generation.',
        'Execute generated code in a sandboxed environment (e.g., Docker container or restricted exec) to prevent security risks.',
        'Implement iterative error handling: if the generated code fails, send the error back to the LLM to generate a corrected version.',
        'For large files, sample a subset for initial exploration and only process the full dataset when the user confirms the desired analysis.',
        'Cache data profiles and intermediate results to avoid redundant computation when the user asks follow-up questions about the same dataset.',
      ],
      ar: [
        'وصّف دائماً مجموعة البيانات أولاً (الأعمدة، الأنواع، صفوف العينة، القيم المفقودة) وأضف هذا التوصيف في مطالبة نموذج اللغة لتوليد كود دقيق.',
        'نفذ الكود المولد في بيئة معزولة (مثل حاوية Docker أو exec مقيد) لمنع المخاطر الأمنية.',
        'نفذ معالجة أخطاء تكرارية: إذا فشل الكود المولد، أرسل الخطأ لنموذج اللغة لتوليد نسخة مصححة.',
        'للملفات الكبيرة، خذ عينة فرعية للاستكشاف الأولي وعالج مجموعة البيانات الكاملة فقط عندما يؤكد المستخدم التحليل المطلوب.',
        'خزّن مؤقتاً توصيفات البيانات والنتائج الوسيطة لتجنب الحسابات المكررة عندما يسأل المستخدم أسئلة متابعة حول نفس مجموعة البيانات.',
      ],
    },
    references: [
      { title: 'pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
      { title: 'Building a Data Analysis Agent with LLMs', url: 'https://python.langchain.com/docs/use_cases/data_analysis' },
      { title: 'Code Interpreter Patterns for AI Agents', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
    ],
    quiz: [
      {
        id: 'csvag-q1',
        question: {
          en: 'Why is data profiling an important first step for a CSV data agent?',
          ar: 'لماذا يعد توصيف البيانات خطوة أولى مهمة لوكيل بيانات CSV؟',
        },
        options: {
          en: [
            'To encrypt the data before processing',
            'To give the LLM accurate schema information for generating correct code',
            'To compress the file for faster loading',
            'To convert the CSV to a database format',
          ],
          ar: [
            'لتشفير البيانات قبل المعالجة',
            'لإعطاء نموذج اللغة معلومات مخطط دقيقة لتوليد كود صحيح',
            'لضغط الملف لتحميل أسرع',
            'لتحويل CSV إلى تنسيق قاعدة بيانات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Data profiling provides the LLM with column names, data types, and sample values. Without this information, the LLM would have to guess the schema and would likely generate incorrect pandas operations.',
          ar: 'يوفر توصيف البيانات لنموذج اللغة أسماء الأعمدة وأنواع البيانات وقيم العينة. بدون هذه المعلومات، سيضطر نموذج اللغة لتخمين المخطط وسيولد على الأرجح عمليات pandas غير صحيحة.',
        },
      },
      {
        id: 'csvag-q2',
        question: {
          en: 'What is the main security concern when executing LLM-generated code on CSV data?',
          ar: 'ما هو الشاغل الأمني الرئيسي عند تنفيذ كود مولد بواسطة نموذج اللغة على بيانات CSV؟',
        },
        options: {
          en: [
            'The code might be too slow',
            'The code could access the file system or execute malicious operations',
            'The code might generate ugly charts',
            'The code could change the CSV column names',
          ],
          ar: [
            'قد يكون الكود بطيئاً جداً',
            'قد يصل الكود إلى نظام الملفات أو ينفذ عمليات خبيثة',
            'قد ينشئ الكود رسوماً بيانية قبيحة',
            'قد يغير الكود أسماء أعمدة CSV',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'LLM-generated code could potentially include file system operations, network requests, or other harmful commands. Running code in a sandboxed environment prevents these risks.',
          ar: 'قد يتضمن الكود المولد بواسطة نموذج اللغة عمليات نظام ملفات أو طلبات شبكة أو أوامر ضارة أخرى. تشغيل الكود في بيئة معزولة يمنع هذه المخاطر.',
        },
      },
      {
        id: 'csvag-q3',
        question: {
          en: 'What should the agent do when the generated pandas code throws an error?',
          ar: 'ماذا يجب أن يفعل الوكيل عندما يثير كود pandas المولد خطأً؟',
        },
        options: {
          en: [
            'Crash and ask the user to try a different question',
            'Ignore the error and return an empty result',
            'Send the error back to the LLM to generate corrected code',
            'Delete the CSV file',
          ],
          ar: [
            'ينهار ويطلب من المستخدم تجربة سؤال مختلف',
            'يتجاهل الخطأ ويعيد نتيجة فارغة',
            'يرسل الخطأ لنموذج اللغة لتوليد كود مصحح',
            'يحذف ملف CSV',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Iterative error correction is a key agent pattern. When code fails, sending the error message back to the LLM allows it to understand the issue and generate a corrected version.',
          ar: 'تصحيح الأخطاء التكراري نمط وكيل رئيسي. عند فشل الكود، إرسال رسالة الخطأ لنموذج اللغة يسمح له بفهم المشكلة وتوليد نسخة مصححة.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. SQL Database Agent
  // ─────────────────────────────────────────────
  'sql-database-agent': {
    beginnerDefinition: {
      en: 'A SQL database agent lets you ask questions about your database in plain English instead of writing SQL queries. You say "Show me all customers who signed up last month" and the agent translates that into the right SQL query, runs it safely, and explains the results back to you.',
      ar: 'يتيح لك وكيل قاعدة بيانات SQL طرح أسئلة عن قاعدة بياناتك بلغة عادية بدلاً من كتابة استعلامات SQL. تقول "أرني جميع العملاء الذين سجلوا الشهر الماضي" ويترجم الوكيل ذلك إلى استعلام SQL الصحيح وينفذه بأمان ويشرح النتائج لك.',
    },
    technicalDefinition: {
      en: 'A text-to-SQL agent combines an LLM with database schema introspection and a SQL execution engine. The agent retrieves the database schema (tables, columns, types, relationships, indexes), includes it in the LLM prompt context, translates the natural language query into a syntactically and semantically correct SQL statement, applies safety guardrails (read-only permissions, query complexity limits, row count caps), executes the query, and interprets the result set for the user. Advanced implementations include query validation, explain plan analysis, and multi-turn dialogue for query refinement.',
      ar: 'يجمع وكيل تحويل النص إلى SQL بين نموذج لغة كبير واستقصاء مخطط قاعدة البيانات ومحرك تنفيذ SQL. يسترجع الوكيل مخطط قاعدة البيانات (الجداول والأعمدة والأنواع والعلاقات والفهارس)، ويضمنه في سياق مطالبة نموذج اللغة، ويترجم استعلام اللغة الطبيعية إلى عبارة SQL صحيحة نحوياً ودلالياً، ويطبق حواجز أمان (أذونات قراءة فقط وحدود تعقيد الاستعلام وسقوف عدد الصفوف)، وينفذ الاستعلام، ويفسر مجموعة النتائج للمستخدم. تشمل التطبيقات المتقدمة التحقق من الاستعلام وتحليل خطة التنفيذ وحوار متعدد الأدوار لتحسين الاستعلام.',
    },
    analogy: {
      en: 'A SQL database agent is like a translator at the United Nations. You speak your language (English), and they translate it perfectly into another language (SQL) that the database understands. They also know the cultural context (schema): which tables exist, how they relate to each other, and what kind of data they contain. After the database responds, the translator converts the raw data back into a clear explanation you can understand.',
      ar: 'وكيل قاعدة بيانات SQL مثل مترجم في الأمم المتحدة. تتحدث بلغتك (الإنجليزية)، ويترجمها بشكل مثالي إلى لغة أخرى (SQL) تفهمها قاعدة البيانات. يعرف أيضاً السياق الثقافي (المخطط): أي الجداول موجودة وكيف ترتبط ببعضها ونوع البيانات التي تحتويها. بعد استجابة قاعدة البيانات، يحول المترجم البيانات الخام إلى شرح واضح يمكنك فهمه.',
    },
    explanation: {
      en: [
        'Text-to-SQL agents make databases accessible to everyone in an organization, not just developers and analysts who know SQL. Business users can query data directly, reducing the bottleneck of waiting for technical teams to write queries.',
        'Schema awareness is the foundation of accurate SQL generation. The agent introspects the database to discover all tables, their columns, data types, primary keys, foreign keys, and indexes. This schema information is included in the LLM prompt so it can generate queries that reference actual table and column names with correct join conditions.',
        'The translation process involves several steps. First, the agent parses the user natural language question. Then, it identifies the relevant tables and columns. Next, it constructs the SQL query with appropriate WHERE clauses, JOINs, GROUP BYs, and aggregations. Finally, it validates the query syntax before execution.',
        'Safety guardrails are non-negotiable for SQL agents. The database connection should use a read-only user to prevent any data modification. Query complexity should be limited (no deeply nested subqueries, restricted table scans). Row limits should be enforced to prevent accidentally pulling millions of records. Time limits should kill long-running queries.',
        'Result interpretation transforms raw query output into actionable insights. Instead of showing a table of numbers, the agent explains what the data means: "Revenue increased 15% quarter over quarter, with the Electronics category driving most of the growth." This makes the data accessible to non-technical stakeholders.',
        'Multi-turn interaction is important because users often refine their questions. After seeing initial results, they might say "Now filter that by region" or "Show me that as a percentage." The agent maintains conversation context and modifies the previous query accordingly.',
      ],
      ar: [
        'تجعل وكلاء تحويل النص إلى SQL قواعد البيانات متاحة للجميع في المنظمة، وليس فقط المطورين والمحللين الذين يعرفون SQL. يمكن لمستخدمي الأعمال الاستعلام عن البيانات مباشرة، مما يقلل عنق الزجاجة في انتظار الفرق التقنية لكتابة الاستعلامات.',
        'الوعي بالمخطط هو أساس توليد SQL دقيق. يستقصي الوكيل قاعدة البيانات لاكتشاف جميع الجداول وأعمدتها وأنواع البيانات والمفاتيح الأساسية والمفاتيح الأجنبية والفهارس. تُضمَّن معلومات المخطط هذه في مطالبة نموذج اللغة حتى يتمكن من توليد استعلامات تشير إلى أسماء جداول وأعمدة فعلية بشروط ربط صحيحة.',
        'تتضمن عملية الترجمة عدة خطوات. أولاً، يحلل الوكيل سؤال المستخدم بلغة طبيعية. ثم يحدد الجداول والأعمدة ذات الصلة. بعد ذلك، يبني استعلام SQL مع جمل WHERE وJOIN وGROUP BY والتجميعات المناسبة. أخيراً، يتحقق من صحة بناء الاستعلام قبل التنفيذ.',
        'حواجز الأمان غير قابلة للتفاوض لوكلاء SQL. يجب أن يستخدم اتصال قاعدة البيانات مستخدماً للقراءة فقط لمنع أي تعديل للبيانات. يجب تحديد تعقيد الاستعلام (بدون استعلامات فرعية متداخلة بعمق، ومسح جداول مقيد). يجب فرض حدود الصفوف لمنع سحب ملايين السجلات عن طريق الخطأ. يجب أن تقتل الحدود الزمنية الاستعلامات طويلة التشغيل.',
        'يحول تفسير النتائج مخرجات الاستعلام الخام إلى رؤى قابلة للتنفيذ. بدلاً من عرض جدول أرقام، يشرح الوكيل ما تعنيه البيانات: "زادت الإيرادات 15% ربعاً بعد ربع، مع فئة الإلكترونيات تقود معظم النمو." هذا يجعل البيانات متاحة لأصحاب المصلحة غير التقنيين.',
        'التفاعل متعدد الأدوار مهم لأن المستخدمين غالباً ما يحسنون أسئلتهم. بعد رؤية النتائج الأولية، قد يقولون "الآن صفّ ذلك حسب المنطقة" أو "أرني ذلك كنسبة مئوية." يحافظ الوكيل على سياق المحادثة ويعدل الاستعلام السابق وفقاً لذلك.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import sqlite3
from openai import OpenAI

client = OpenAI()

def get_schema(db_path: str) -> str:
    """Extract database schema for LLM context."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("SELECT sql FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    conn.close()
    return "\\n".join(t[0] for t in tables if t[0])

def sql_agent(db_path: str, question: str) -> str:
    """Translate natural language to SQL and execute safely."""
    schema = get_schema(db_path)

    # Generate SQL from the question
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"""You are a SQL expert.
Given this database schema:
{schema}

Generate a SELECT query to answer the user question.
Return ONLY the SQL query, no explanation.
NEVER use INSERT, UPDATE, DELETE, DROP, or ALTER."""},
            {"role": "user", "content": question},
        ],
    )

    sql = response.choices[0].message.content.strip().strip(";")
    sql = sql.replace("\`\`\`sql", "").replace("\`\`\`", "").strip()

    # Safety check: only allow SELECT statements
    if not sql.upper().startswith("SELECT"):
        return "Error: Only SELECT queries are allowed."

    # Execute with row limit
    conn = sqlite3.connect(db_path)
    conn.execute("PRAGMA query_only = ON;")
    try:
        cursor = conn.cursor()
        cursor.execute(f"{sql} LIMIT 100;")
        columns = [d[0] for d in cursor.description]
        rows = cursor.fetchall()
    finally:
        conn.close()

    # Format and interpret results
    result_text = f"Columns: {columns}\\nRows ({len(rows)}):\\n"
    for row in rows[:10]:
        result_text += str(row) + "\\n"

    interpretation = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Summarize the query results clearly."},
            {"role": "user", "content": f"Question: {question}\\nSQL: {sql}\\nResults:\\n{result_text}"},
        ],
    )
    return interpretation.choices[0].message.content

print(sql_agent("company.db", "Top 5 customers by total orders"))`,
      description: {
        en: 'A text-to-SQL agent that extracts the database schema, generates SQL from natural language, enforces safety guardrails (SELECT-only, row limits), and interprets results.',
        ar: 'وكيل تحويل نص إلى SQL يستخرج مخطط قاعدة البيانات ويولد SQL من لغة طبيعية ويفرض حواجز أمان (SELECT فقط وحدود صفوف) ويفسر النتائج.',
      },
    },
    commonMistakes: {
      en: [
        'Using a database connection with write permissions, allowing the LLM-generated SQL to potentially modify or delete data.',
        'Not including the full database schema in the LLM prompt, causing it to hallucinate table or column names that do not exist.',
        'Allowing unlimited query execution time and row counts, which can overwhelm the database with expensive full-table scans.',
        'Not validating that the generated SQL is actually a SELECT statement before executing it against the production database.',
      ],
      ar: [
        'استخدام اتصال قاعدة بيانات بأذونات كتابة، مما يسمح لـ SQL المولد بواسطة نموذج اللغة بتعديل أو حذف البيانات محتملاً.',
        'عدم تضمين مخطط قاعدة البيانات الكامل في مطالبة نموذج اللغة، مما يتسبب في هلوسة أسماء جداول أو أعمدة غير موجودة.',
        'السماح بوقت تنفيذ استعلام وعدد صفوف غير محدود، مما يمكن أن يثقل قاعدة البيانات بمسح جداول كامل مكلف.',
        'عدم التحقق من أن SQL المولد هو فعلاً عبارة SELECT قبل تنفيذه على قاعدة بيانات الإنتاج.',
      ],
    },
    bestPractices: {
      en: [
        'Always use a read-only database user and enforce SELECT-only queries at both the application and database levels.',
        'Include the complete schema with column descriptions, sample values, and relationship annotations in the LLM prompt for accurate query generation.',
        'Set query timeouts and row limits to prevent expensive queries from impacting database performance.',
        'Implement query validation by parsing the generated SQL and rejecting any DDL or DML statements before execution.',
        'Show the generated SQL to the user for transparency and allow them to approve or modify it before execution.',
      ],
      ar: [
        'استخدم دائماً مستخدم قاعدة بيانات للقراءة فقط وافرض استعلامات SELECT فقط على مستوى التطبيق وقاعدة البيانات.',
        'أضمن المخطط الكامل مع أوصاف الأعمدة وقيم العينة وتوضيحات العلاقات في مطالبة نموذج اللغة لتوليد استعلام دقيق.',
        'عيّن مهلات الاستعلام وحدود الصفوف لمنع الاستعلامات المكلفة من التأثير على أداء قاعدة البيانات.',
        'نفذ التحقق من الاستعلام بتحليل SQL المولد ورفض أي عبارات DDL أو DML قبل التنفيذ.',
        'اعرض SQL المولد للمستخدم للشفافية واسمح له بالموافقة عليه أو تعديله قبل التنفيذ.',
      ],
    },
    references: [
      { title: 'Text-to-SQL Research Survey', url: 'https://arxiv.org/abs/2406.11434' },
      { title: 'LangChain SQL Agent', url: 'https://python.langchain.com/docs/tutorials/sql_qa/' },
      { title: 'SQLite Safety Best Practices', url: 'https://www.sqlite.org/security.html' },
    ],
    quiz: [
      {
        id: 'sqlag-q1',
        question: {
          en: 'What is the most critical safety measure for a text-to-SQL agent?',
          ar: 'ما هو إجراء الأمان الأكثر أهمية لوكيل تحويل النص إلى SQL؟',
        },
        options: {
          en: [
            'Using a fast database engine',
            'Using a read-only database connection and restricting to SELECT queries',
            'Caching all query results',
            'Using the latest LLM model',
          ],
          ar: [
            'استخدام محرك قاعدة بيانات سريع',
            'استخدام اتصال قاعدة بيانات للقراءة فقط وتقييد استعلامات SELECT',
            'تخزين جميع نتائج الاستعلام مؤقتاً',
            'استخدام أحدث نموذج لغة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Since the agent executes LLM-generated SQL, using a read-only connection prevents any accidental or malicious data modification (INSERT, UPDATE, DELETE, DROP).',
          ar: 'بما أن الوكيل ينفذ SQL مولد بواسطة نموذج اللغة، فإن استخدام اتصال للقراءة فقط يمنع أي تعديل بيانات عرضي أو خبيث (INSERT, UPDATE, DELETE, DROP).',
        },
      },
      {
        id: 'sqlag-q2',
        question: {
          en: 'Why is database schema information essential in the LLM prompt?',
          ar: 'لماذا تعد معلومات مخطط قاعدة البيانات ضرورية في مطالبة نموذج اللغة؟',
        },
        options: {
          en: [
            'To make the prompt longer',
            'So the LLM can generate queries using actual table and column names',
            'To train the LLM on your data',
            'To encrypt the database connection',
          ],
          ar: [
            'لجعل المطالبة أطول',
            'حتى يتمكن نموذج اللغة من توليد استعلامات باستخدام أسماء جداول وأعمدة فعلية',
            'لتدريب نموذج اللغة على بياناتك',
            'لتشفير اتصال قاعدة البيانات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Without schema information, the LLM would have to guess table and column names, leading to queries that reference non-existent objects and fail at execution.',
          ar: 'بدون معلومات المخطط، سيضطر نموذج اللغة لتخمين أسماء الجداول والأعمدة، مما يؤدي إلى استعلامات تشير إلى كائنات غير موجودة وتفشل عند التنفيذ.',
        },
      },
      {
        id: 'sqlag-q3',
        question: {
          en: 'What should happen after the SQL query is executed successfully?',
          ar: 'ماذا يجب أن يحدث بعد تنفيذ استعلام SQL بنجاح؟',
        },
        options: {
          en: [
            'Return the raw SQL result table directly to the user',
            'Delete the query from the conversation history',
            'Have the LLM interpret and explain the results in natural language',
            'Save the results to a new database table',
          ],
          ar: [
            'إعادة جدول نتائج SQL الخام مباشرة للمستخدم',
            'حذف الاستعلام من سجل المحادثة',
            'جعل نموذج اللغة يفسر ويشرح النتائج بلغة طبيعية',
            'حفظ النتائج في جدول قاعدة بيانات جديد',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'The agent should interpret the raw results and present them in plain language with key insights, making the data accessible to non-technical users who may not understand raw SQL output.',
          ar: 'يجب على الوكيل تفسير النتائج الخام وتقديمها بلغة عادية مع رؤى رئيسية، مما يجعل البيانات متاحة للمستخدمين غير التقنيين الذين قد لا يفهمون مخرجات SQL الخام.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. Financial Report Agent
  // ─────────────────────────────────────────────
  'financial-report-agent': {
    beginnerDefinition: {
      en: 'A financial report agent is an AI assistant that automatically gathers financial data (stock prices, company earnings, market trends), analyzes it, generates insights, and produces a formatted report. Instead of spending hours researching and writing, you tell the agent "Create a quarterly report on tech sector performance" and it does the work for you.',
      ar: 'وكيل التقارير المالية هو مساعد ذكاء اصطناعي يجمع البيانات المالية تلقائياً (أسعار الأسهم، أرباح الشركات، اتجاهات السوق)، ويحللها، ويولد رؤى، وينتج تقريراً منسقاً. بدلاً من قضاء ساعات في البحث والكتابة، تخبر الوكيل "أنشئ تقريراً ربعياً عن أداء قطاع التكنولوجيا" ويقوم بالعمل نيابة عنك.',
    },
    technicalDefinition: {
      en: 'A financial report agent orchestrates multiple data retrieval tools (financial APIs like Yahoo Finance, Alpha Vantage, SEC EDGAR), analytical functions (statistical analysis, ratio calculations, trend detection), and document generation capabilities to produce structured financial reports. The agent follows a pipeline of data acquisition, validation, analysis (fundamental and technical), insight generation via LLM reasoning, and formatted output (Markdown, PDF, or HTML). It handles time-series data, comparative analysis across periods, benchmark comparisons, and risk metric calculations.',
      ar: 'ينسق وكيل التقارير المالية أدوات استرجاع بيانات متعددة (واجهات برمجة مالية مثل Yahoo Finance وAlpha Vantage وSEC EDGAR)، ووظائف تحليلية (تحليل إحصائي، حسابات نسب، اكتشاف اتجاهات)، وقدرات توليد مستندات لإنتاج تقارير مالية منظمة. يتبع الوكيل خط أنابيب من اكتساب البيانات والتحقق والتحليل (أساسي وتقني) وتوليد الرؤى عبر استدلال نموذج اللغة والمخرجات المنسقة (Markdown أو PDF أو HTML). يعالج بيانات السلاسل الزمنية والتحليل المقارن عبر الفترات ومقارنات المعايير وحسابات مقاييس المخاطر.',
    },
    analogy: {
      en: 'A financial report agent is like a team of financial analysts compressed into one assistant. One analyst gathers stock prices and market data (data retrieval tools), another crunches the numbers and calculates ratios (analysis functions), a third identifies patterns and writes insights (LLM reasoning), and a fourth formats everything into a professional report (document generation). The agent does all four jobs in minutes instead of days.',
      ar: 'وكيل التقارير المالية مثل فريق من المحللين الماليين مضغوط في مساعد واحد. محلل يجمع أسعار الأسهم وبيانات السوق (أدوات استرجاع البيانات)، وآخر يطحن الأرقام ويحسب النسب (وظائف التحليل)، وثالث يحدد الأنماط ويكتب الرؤى (استدلال نموذج اللغة)، ورابع ينسق كل شيء في تقرير احترافي (توليد المستندات). يقوم الوكيل بجميع الوظائف الأربع في دقائق بدلاً من أيام.',
    },
    explanation: {
      en: [
        'Financial report agents automate one of the most time-consuming tasks in business: gathering financial data, analyzing it, and writing up the findings. What might take a human analyst several hours can be done by an agent in minutes, with consistent formatting and comprehensive data coverage.',
        'The data retrieval phase uses financial APIs to fetch relevant data. Yahoo Finance provides stock prices and company fundamentals. Alpha Vantage offers technical indicators and forex data. SEC EDGAR provides regulatory filings. The agent determines which data sources are relevant based on the report request and fetches the necessary data points.',
        'Analysis is where the agent applies financial logic. It calculates key metrics like revenue growth rates, profit margins, P/E ratios, debt-to-equity ratios, and moving averages. For trend detection, it compares current metrics against historical values and industry benchmarks. The LLM provides qualitative analysis by interpreting these numbers in the context of market conditions.',
        'Insight generation combines quantitative analysis with LLM reasoning. The agent does not just present numbers; it explains what they mean. For example, instead of just saying "Revenue grew 12%," it explains "Revenue grew 12% year-over-year, outpacing the industry average of 8%, driven primarily by expansion in the Asia-Pacific market."',
        'Report formatting produces a professional document with sections like Executive Summary, Market Overview, Financial Performance, Risk Assessment, and Outlook. The agent structures the report logically, includes relevant charts and tables, and maintains a consistent professional tone throughout.',
        'Important disclaimers: financial report agents should always include appropriate disclaimers that the analysis is generated by AI and should not be considered financial advice. Data should be sourced from reliable APIs and validated for accuracy.',
      ],
      ar: [
        'تؤتمت وكلاء التقارير المالية واحدة من أكثر المهام استهلاكاً للوقت في الأعمال: جمع البيانات المالية وتحليلها وكتابة النتائج. ما قد يستغرق محللاً بشرياً عدة ساعات يمكن للوكيل إنجازه في دقائق، مع تنسيق متسق وتغطية بيانات شاملة.',
        'تستخدم مرحلة استرجاع البيانات واجهات برمجة مالية لجلب البيانات ذات الصلة. يوفر Yahoo Finance أسعار الأسهم وأساسيات الشركات. يقدم Alpha Vantage مؤشرات تقنية وبيانات العملات. يوفر SEC EDGAR الملفات التنظيمية. يحدد الوكيل مصادر البيانات ذات الصلة بناءً على طلب التقرير ويجلب نقاط البيانات الضرورية.',
        'التحليل هو حيث يطبق الوكيل المنطق المالي. يحسب مقاييس رئيسية مثل معدلات نمو الإيرادات وهوامش الربح ونسب السعر إلى الأرباح ونسب الدين إلى حقوق الملكية والمتوسطات المتحركة. لاكتشاف الاتجاهات، يقارن المقاييس الحالية بالقيم التاريخية ومعايير الصناعة. يوفر نموذج اللغة تحليلاً نوعياً بتفسير هذه الأرقام في سياق ظروف السوق.',
        'يجمع توليد الرؤى بين التحليل الكمي واستدلال نموذج اللغة. لا يعرض الوكيل الأرقام فحسب؛ بل يشرح ما تعنيه. مثلاً، بدلاً من قول "نمت الإيرادات 12%" فقط، يشرح "نمت الإيرادات 12% سنوياً، متفوقة على متوسط الصناعة البالغ 8%، مدفوعة بشكل أساسي بالتوسع في سوق آسيا والمحيط الهادئ."',
        'ينتج تنسيق التقرير مستنداً احترافياً بأقسام مثل الملخص التنفيذي ونظرة عامة على السوق والأداء المالي وتقييم المخاطر والتوقعات. ينظم الوكيل التقرير منطقياً ويتضمن رسوماً بيانية وجداول ذات صلة ويحافظ على نبرة احترافية متسقة طوال التقرير.',
        'إخلاءات مسؤولية مهمة: يجب أن تتضمن وكلاء التقارير المالية دائماً إخلاءات مسؤولية مناسبة بأن التحليل مولد بالذكاء الاصطناعي ولا يجب اعتباره نصيحة مالية. يجب أن تكون البيانات مصدرها واجهات برمجة موثوقة ومتحقق من دقتها.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import yfinance as yf
from datetime import datetime, timedelta
from openai import OpenAI

client = OpenAI()

def fetch_stock_data(ticker: str, period: str = "3mo") -> dict:
    """Fetch stock data using yfinance."""
    stock = yf.Ticker(ticker)
    hist = stock.history(period=period)
    info = stock.info
    return {
        "name": info.get("longName", ticker),
        "sector": info.get("sector", "N/A"),
        "current_price": round(hist["Close"].iloc[-1], 2),
        "period_return": round(
            (hist["Close"].iloc[-1] / hist["Close"].iloc[0] - 1) * 100, 2
        ),
        "avg_volume": int(hist["Volume"].mean()),
        "high": round(hist["High"].max(), 2),
        "low": round(hist["Low"].min(), 2),
        "pe_ratio": info.get("trailingPE", "N/A"),
        "market_cap": info.get("marketCap", "N/A"),
    }

def generate_financial_report(tickers: list[str]) -> str:
    """Generate a financial analysis report for given tickers."""
    # Step 1: Fetch data for all tickers
    data = {}
    for ticker in tickers:
        try:
            data[ticker] = fetch_stock_data(ticker)
        except Exception as e:
            data[ticker] = {"error": str(e)}

    # Step 2: Generate the report using LLM
    data_summary = "\\n".join(
        f"{t}: {d}" for t, d in data.items()
    )

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": """You are a financial analyst.
Generate a professional report with these sections:
1. Executive Summary
2. Individual Stock Analysis
3. Comparative Performance
4. Risk Assessment
5. Outlook
Include a disclaimer that this is AI-generated analysis."""},
            {"role": "user", "content": f"Generate a report for:\\n{data_summary}"},
        ],
    )
    return response.choices[0].message.content

# Generate report for tech stocks
report = generate_financial_report(["AAPL", "MSFT", "GOOGL"])
print(report)`,
      description: {
        en: 'A financial report agent that fetches stock data from Yahoo Finance, calculates key metrics, and uses an LLM to generate a professional financial analysis report.',
        ar: 'وكيل تقارير مالية يجلب بيانات الأسهم من Yahoo Finance ويحسب مقاييس رئيسية ويستخدم نموذج لغة لتوليد تقرير تحليل مالي احترافي.',
      },
    },
    commonMistakes: {
      en: [
        'Presenting AI-generated financial analysis as professional investment advice without appropriate disclaimers.',
        'Not validating data from financial APIs for accuracy, leading to reports with incorrect prices or outdated information.',
        'Overloading the LLM with raw numerical data instead of pre-computing key metrics and ratios before the analysis step.',
        'Generating reports without specifying the time period, making it unclear whether metrics represent daily, monthly, or yearly performance.',
      ],
      ar: [
        'تقديم التحليل المالي المولد بالذكاء الاصطناعي كنصيحة استثمارية احترافية بدون إخلاءات مسؤولية مناسبة.',
        'عدم التحقق من بيانات واجهات البرمجة المالية للدقة، مما يؤدي إلى تقارير بأسعار غير صحيحة أو معلومات قديمة.',
        'إثقال نموذج اللغة ببيانات رقمية خام بدلاً من حساب المقاييس والنسب الرئيسية مسبقاً قبل خطوة التحليل.',
        'توليد تقارير دون تحديد الفترة الزمنية، مما يجعل من غير الواضح ما إذا كانت المقاييس تمثل أداءً يومياً أو شهرياً أو سنوياً.',
      ],
    },
    bestPractices: {
      en: [
        'Always include disclaimers that the report is AI-generated and should not be considered financial advice.',
        'Pre-compute financial metrics (ratios, growth rates, moving averages) before passing data to the LLM to reduce hallucination of numbers.',
        'Validate all data from financial APIs and include data timestamps so readers know how current the information is.',
        'Structure reports with clear sections (Executive Summary, Analysis, Risks, Outlook) for professional readability.',
        'Support multiple output formats (Markdown, PDF, HTML) so reports can be easily shared and integrated into existing workflows.',
      ],
      ar: [
        'أضمن دائماً إخلاءات مسؤولية بأن التقرير مولد بالذكاء الاصطناعي ولا يجب اعتباره نصيحة مالية.',
        'احسب المقاييس المالية مسبقاً (النسب، معدلات النمو، المتوسطات المتحركة) قبل تمرير البيانات لنموذج اللغة لتقليل هلوسة الأرقام.',
        'تحقق من جميع البيانات من واجهات البرمجة المالية وأضمن طوابع زمنية للبيانات حتى يعرف القراء مدى حداثة المعلومات.',
        'نظم التقارير بأقسام واضحة (ملخص تنفيذي، تحليل، مخاطر، توقعات) لقراءة احترافية.',
        'ادعم تنسيقات مخرجات متعددة (Markdown، PDF، HTML) حتى يمكن مشاركة التقارير ودمجها بسهولة في سير العمل الحالية.',
      ],
    },
    references: [
      { title: 'yfinance Python Library', url: 'https://github.com/ranaroussi/yfinance' },
      { title: 'Alpha Vantage Financial API', url: 'https://www.alphavantage.co/documentation/' },
      { title: 'SEC EDGAR API Documentation', url: 'https://www.sec.gov/edgar/sec-api-documentation' },
    ],
    quiz: [
      {
        id: 'finag-q1',
        question: {
          en: 'Why should financial metrics be pre-computed before sending data to the LLM?',
          ar: 'لماذا يجب حساب المقاييس المالية مسبقاً قبل إرسال البيانات لنموذج اللغة؟',
        },
        options: {
          en: [
            'To make the prompt shorter',
            'To reduce the risk of the LLM hallucinating incorrect numbers',
            'To comply with financial regulations',
            'To speed up the API calls',
          ],
          ar: [
            'لجعل المطالبة أقصر',
            'لتقليل خطر هلوسة نموذج اللغة بأرقام غير صحيحة',
            'للامتثال للوائح المالية',
            'لتسريع استدعاءات API',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'LLMs can make arithmetic errors or hallucinate numbers. Pre-computing metrics like growth rates, ratios, and averages with code ensures mathematical accuracy.',
          ar: 'يمكن لنماذج اللغة ارتكاب أخطاء حسابية أو هلوسة أرقام. حساب المقاييس مسبقاً مثل معدلات النمو والنسب والمتوسطات بالكود يضمن الدقة الرياضية.',
        },
      },
      {
        id: 'finag-q2',
        question: {
          en: 'What critical disclaimer should every AI-generated financial report include?',
          ar: 'ما إخلاء المسؤولية الحاسم الذي يجب أن يتضمنه كل تقرير مالي مولد بالذكاء الاصطناعي؟',
        },
        options: {
          en: [
            'A note about which LLM model was used',
            'A disclaimer that the analysis is AI-generated and not financial advice',
            'A copyright notice',
            'A list of all API calls made',
          ],
          ar: [
            'ملاحظة حول نموذج اللغة المستخدم',
            'إخلاء مسؤولية بأن التحليل مولد بالذكاء الاصطناعي وليس نصيحة مالية',
            'إشعار حقوق نشر',
            'قائمة بجميع استدعاءات API التي أُجريت',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'AI-generated financial analysis can contain errors and should never be treated as professional financial advice. A clear disclaimer protects both the provider and the reader.',
          ar: 'يمكن أن يحتوي التحليل المالي المولد بالذكاء الاصطناعي على أخطاء ولا يجب أبداً التعامل معه كنصيحة مالية احترافية. إخلاء مسؤولية واضح يحمي كلاً من المزود والقارئ.',
        },
      },
      {
        id: 'finag-q3',
        question: {
          en: 'Which step in the financial report pipeline combines quantitative data with qualitative narrative?',
          ar: 'أي خطوة في خط أنابيب التقرير المالي تجمع بين البيانات الكمية والسرد النوعي؟',
        },
        options: {
          en: [
            'Data retrieval',
            'Data validation',
            'Insight generation via LLM reasoning',
            'API authentication',
          ],
          ar: [
            'استرجاع البيانات',
            'التحقق من البيانات',
            'توليد الرؤى عبر استدلال نموذج اللغة',
            'مصادقة API',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Insight generation is where the LLM interprets pre-computed metrics and explains their significance, combining hard numbers with narrative context about market conditions and trends.',
          ar: 'توليد الرؤى هو حيث يفسر نموذج اللغة المقاييس المحسوبة مسبقاً ويشرح أهميتها، جامعاً بين الأرقام الصلبة والسياق السردي حول ظروف السوق والاتجاهات.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. Research Paper Agent
  // ─────────────────────────────────────────────
  'research-paper-agent': {
    beginnerDefinition: {
      en: 'A research paper analysis agent is an AI assistant that reads academic papers, extracts the key findings, compares multiple papers, and helps you write literature reviews. Instead of reading dozens of papers yourself, you give the agent a set of papers and ask questions like "What are the main contributions of each paper?" or "How do their methods compare?"',
      ar: 'وكيل تحليل الأوراق البحثية هو مساعد ذكاء اصطناعي يقرأ الأوراق الأكاديمية ويستخرج النتائج الرئيسية ويقارن أوراقاً متعددة ويساعدك في كتابة مراجعات الأدبيات. بدلاً من قراءة عشرات الأوراق بنفسك، تعطي الوكيل مجموعة أوراق وتسأل أسئلة مثل "ما هي المساهمات الرئيسية لكل ورقة؟" أو "كيف تقارن أساليبها؟"',
    },
    technicalDefinition: {
      en: 'A research paper analysis agent combines document parsing (PDF extraction, section detection, figure/table identification), vector-based retrieval (embedding paper sections for semantic search), and multi-document reasoning to analyze academic literature. Key capabilities include structured extraction of metadata (title, authors, abstract, methodology, results, conclusions), cross-paper comparison along specified dimensions, citation network analysis, gap identification, and automated literature review generation with proper attribution. The agent uses chunked paper representations in a RAG pipeline to handle papers that exceed LLM context limits.',
      ar: 'يجمع وكيل تحليل الأوراق البحثية بين تحليل المستندات (استخراج PDF، اكتشاف الأقسام، تحديد الأشكال/الجداول)، والاسترجاع القائم على المتجهات (تضمين أقسام الأوراق للبحث الدلالي)، والاستدلال متعدد المستندات لتحليل الأدبيات الأكاديمية. تشمل القدرات الرئيسية الاستخراج المنظم للبيانات الوصفية (العنوان، المؤلفون، الملخص، المنهجية، النتائج، الاستنتاجات)، والمقارنة عبر الأوراق على أبعاد محددة، وتحليل شبكة الاقتباسات، وتحديد الثغرات، وتوليد مراجعة أدبيات آلية مع إسناد مناسب. يستخدم الوكيل تمثيلات أوراق مجزأة في خط أنابيب RAG للتعامل مع الأوراق التي تتجاوز حدود سياق نموذج اللغة.',
    },
    analogy: {
      en: 'A research paper agent is like a brilliant research assistant who can speed-read. You hand them a stack of 50 academic papers and say "I need a literature review on transformer architectures for computer vision." They read every paper, highlight the key findings with colored tabs, create a comparison table, identify where researchers disagree, spot gaps that future research could fill, and write up a structured review  - all by the end of the day.',
      ar: 'وكيل الأوراق البحثية مثل مساعد بحث لامع يمكنه القراءة السريعة. تسلمه كومة من 50 ورقة أكاديمية وتقول "أحتاج مراجعة أدبيات عن بنيات المحولات للرؤية الحاسوبية." يقرأ كل ورقة، ويبرز النتائج الرئيسية بعلامات ملونة، وينشئ جدول مقارنة، ويحدد أين يختلف الباحثون، ويكتشف الثغرات التي يمكن للبحث المستقبلي سدها، ويكتب مراجعة منظمة  - كل ذلك بنهاية اليوم.',
    },
    explanation: {
      en: [
        'Research paper analysis agents address a major pain point in academia and industry R&D: the overwhelming volume of published literature. Researchers spend significant time reading and synthesizing papers. An agent can accelerate this process while maintaining thoroughness.',
        'Paper ingestion and parsing is the first challenge. Academic papers are typically PDFs with complex layouts including multi-column text, equations, figures, tables, and references. The agent uses PDF parsing libraries to extract text while preserving section structure. Section detection identifies the Introduction, Related Work, Methodology, Results, Discussion, and Conclusion sections, which enables targeted analysis.',
        'Structured extraction pulls key information from each paper into a standardized format. This includes the paper title, authors, publication venue, research question, methodology description, key results (with specific numbers and metrics), main contributions, limitations acknowledged by the authors, and cited references. Having this structured data enables systematic comparison.',
        'Multi-paper comparison is where the agent provides the most value. Given a set of papers, it can compare them along dimensions like research methodology, dataset used, reported performance metrics, theoretical framework, and conclusions. This comparison helps researchers understand the state of the art and identify where different studies agree or disagree.',
        'Literature review generation synthesizes the analysis into a cohesive narrative. The agent groups papers by theme or approach, traces the evolution of ideas across publications, highlights consensus findings, identifies open questions, and generates properly attributed text. The output follows academic writing conventions with in-text citations.',
        'Important limitations: the agent should flag when its extraction might be unreliable (e.g., papers with heavy mathematical notation, figures-dependent arguments, or unusual formatting). Human review of the generated analysis is always recommended before use in academic publications.',
      ],
      ar: [
        'تعالج وكلاء تحليل الأوراق البحثية نقطة ألم رئيسية في الأوساط الأكاديمية والبحث والتطوير الصناعي: الحجم الهائل من الأدبيات المنشورة. يقضي الباحثون وقتاً كبيراً في قراءة الأوراق وتوليفها. يمكن للوكيل تسريع هذه العملية مع الحفاظ على الشمولية.',
        'استيعاب وتحليل الأوراق هو التحدي الأول. الأوراق الأكاديمية عادة ملفات PDF بتخطيطات معقدة تشمل نصاً متعدد الأعمدة ومعادلات وأشكال وجداول ومراجع. يستخدم الوكيل مكتبات تحليل PDF لاستخراج النص مع الحفاظ على هيكل الأقسام. يحدد اكتشاف الأقسام المقدمة والأعمال ذات الصلة والمنهجية والنتائج والمناقشة والاستنتاج، مما يمكّن التحليل المستهدف.',
        'يسحب الاستخراج المنظم المعلومات الرئيسية من كل ورقة إلى تنسيق موحد. يشمل هذا عنوان الورقة والمؤلفين ومكان النشر وسؤال البحث ووصف المنهجية والنتائج الرئيسية (بأرقام ومقاييس محددة) والمساهمات الرئيسية والقيود التي أقرها المؤلفون والمراجع المقتبسة. وجود هذه البيانات المنظمة يمكّن المقارنة المنهجية.',
        'مقارنة الأوراق المتعددة هو حيث يقدم الوكيل أكبر قيمة. بمعطى مجموعة أوراق، يمكنه مقارنتها على أبعاد مثل منهجية البحث ومجموعة البيانات المستخدمة ومقاييس الأداء المبلغ عنها والإطار النظري والاستنتاجات. تساعد هذه المقارنة الباحثين في فهم أحدث ما توصل إليه العلم وتحديد أين تتفق أو تختلف الدراسات المختلفة.',
        'يوليف توليد مراجعة الأدبيات التحليل في سرد متماسك. يجمع الوكيل الأوراق حسب الموضوع أو المنهج، ويتتبع تطور الأفكار عبر المنشورات، ويبرز النتائج المتفق عليها، ويحدد الأسئلة المفتوحة، ويولد نصاً مُسنداً بشكل صحيح. يتبع المخرج اتفاقيات الكتابة الأكاديمية مع اقتباسات في النص.',
        'قيود مهمة: يجب أن يشير الوكيل عندما قد يكون استخراجه غير موثوق (مثل الأوراق ذات التدوين الرياضي الكثيف أو الحجج المعتمدة على الأشكال أو التنسيق غير المعتاد). يُوصى دائماً بالمراجعة البشرية للتحليل المولد قبل استخدامه في المنشورات الأكاديمية.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import fitz  # PyMuPDF
from openai import OpenAI

client = OpenAI()

def parse_paper(pdf_path: str) -> dict:
    """Extract structured content from a research paper PDF."""
    doc = fitz.open(pdf_path)
    full_text = ""
    for page in doc:
        full_text += page.get_text()
    doc.close()

    # Use LLM to extract structured information
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": """Extract structured information
from this research paper. Return a JSON object with:
- title, authors, year
- research_question
- methodology (brief description)
- key_findings (list of 3-5 main results)
- contributions (list of novel contributions)
- limitations (list of acknowledged limitations)
- datasets_used (list)"""},
            {"role": "user", "content": full_text[:12000]},  # First ~12k chars
        ],
    )
    return {"path": pdf_path, "analysis": response.choices[0].message.content}

def compare_papers(papers: list[dict]) -> str:
    """Compare multiple parsed papers."""
    summaries = "\\n---\\n".join(
        f"Paper: {p['path']}\\n{p['analysis']}" for p in papers
    )
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": """You are an academic researcher.
Compare these papers and generate a structured comparison:
1. Research Questions Comparison
2. Methodology Comparison
3. Results Comparison
4. Agreements and Disagreements
5. Research Gaps Identified"""},
            {"role": "user", "content": summaries},
        ],
    )
    return response.choices[0].message.content

def generate_literature_review(papers: list[dict], topic: str) -> str:
    """Generate a literature review from analyzed papers."""
    summaries = "\\n---\\n".join(p["analysis"] for p in papers)
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"""Write a literature review on
'{topic}' based on the provided papers. Use academic writing style with
in-text citations. Include: Introduction, Thematic Analysis,
Methodological Trends, Open Questions, and Conclusion."""},
            {"role": "user", "content": summaries},
        ],
    )
    return response.choices[0].message.content

# Usage
papers = [parse_paper(f"paper{i}.pdf") for i in range(1, 4)]
comparison = compare_papers(papers)
review = generate_literature_review(papers, "LLM-based AI Agents")
print(review)`,
      description: {
        en: 'A research paper analysis agent that parses PDFs, extracts structured information, compares multiple papers, and generates literature reviews with academic writing conventions.',
        ar: 'وكيل تحليل أوراق بحثية يحلل ملفات PDF ويستخرج معلومات منظمة ويقارن أوراقاً متعددة ويولد مراجعات أدبيات بأسلوب الكتابة الأكاديمية.',
      },
    },
    commonMistakes: {
      en: [
        'Trying to feed entire long papers into a single LLM call, exceeding context limits and losing important content from later sections.',
        'Not preserving section structure during PDF extraction, making it impossible for the LLM to distinguish methodology from results.',
        'Generating literature reviews without proper attribution, creating text that could be considered plagiarism.',
        'Treating LLM-extracted findings as ground truth without human verification, risking inaccurate representation of paper conclusions.',
      ],
      ar: [
        'محاولة تغذية أوراق طويلة كاملة في استدعاء نموذج لغة واحد، مما يتجاوز حدود السياق ويفقد محتوى مهماً من الأقسام اللاحقة.',
        'عدم الحفاظ على هيكل الأقسام أثناء استخراج PDF، مما يجعل من المستحيل على نموذج اللغة التمييز بين المنهجية والنتائج.',
        'توليد مراجعات أدبيات بدون إسناد مناسب، مما ينشئ نصاً يمكن اعتباره سرقة أدبية.',
        'التعامل مع النتائج المستخرجة بواسطة نموذج اللغة كحقيقة مطلقة دون تحقق بشري، مما يخاطر بتمثيل غير دقيق لاستنتاجات الأوراق.',
      ],
    },
    bestPractices: {
      en: [
        'Chunk long papers into sections and process each section separately, then synthesize the results to handle papers exceeding context limits.',
        'Preserve paper section boundaries during PDF parsing so the LLM can analyze methodology, results, and discussion sections with proper context.',
        'Always include proper citations and attributions in generated literature reviews, referencing specific papers by author and year.',
        'Implement a confidence scoring system that flags extractions the agent is uncertain about for human review.',
        'Store parsed paper representations in a vector database for efficient retrieval when users ask follow-up questions or request cross-paper comparisons.',
      ],
      ar: [
        'قسّم الأوراق الطويلة إلى أقسام وعالج كل قسم بشكل منفصل، ثم وليّف النتائج للتعامل مع الأوراق التي تتجاوز حدود السياق.',
        'حافظ على حدود أقسام الورقة أثناء تحليل PDF حتى يتمكن نموذج اللغة من تحليل أقسام المنهجية والنتائج والمناقشة بسياق مناسب.',
        'أضمن دائماً اقتباسات وإسنادات مناسبة في مراجعات الأدبيات المولدة، مشيراً إلى أوراق محددة بالمؤلف والسنة.',
        'نفذ نظام تقييم ثقة يشير إلى الاستخراجات التي يكون الوكيل غير متأكد منها للمراجعة البشرية.',
        'خزّن تمثيلات الأوراق المحللة في قاعدة بيانات متجهية لاسترجاع فعال عندما يسأل المستخدمون أسئلة متابعة أو يطلبون مقارنات عبر الأوراق.',
      ],
    },
    references: [
      { title: 'PyMuPDF (fitz) Documentation', url: 'https://pymupdf.readthedocs.io/' },
      { title: 'Semantic Scholar API', url: 'https://api.semanticscholar.org/' },
      { title: 'Multi-Document Summarization with LLMs', url: 'https://arxiv.org/abs/2406.12998' },
    ],
    quiz: [
      {
        id: 'rpag-q1',
        question: {
          en: 'What is the main challenge when processing long research papers with an LLM?',
          ar: 'ما هو التحدي الرئيسي عند معالجة أوراق بحثية طويلة مع نموذج لغة؟',
        },
        options: {
          en: [
            'Papers are always in a foreign language',
            'Papers may exceed the LLM context window, requiring chunked processing',
            'Papers cannot be converted from PDF format',
            'LLMs cannot understand academic writing',
          ],
          ar: [
            'الأوراق دائماً بلغة أجنبية',
            'قد تتجاوز الأوراق نافذة سياق نموذج اللغة، مما يتطلب معالجة مجزأة',
            'لا يمكن تحويل الأوراق من تنسيق PDF',
            'لا تستطيع نماذج اللغة فهم الكتابة الأكاديمية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Research papers can be 20-50 pages long, often exceeding LLM context limits. The solution is to chunk papers into sections, process each separately, and synthesize the results.',
          ar: 'يمكن أن تكون الأوراق البحثية 20-50 صفحة، غالباً ما تتجاوز حدود سياق نموذج اللغة. الحل هو تقسيم الأوراق إلى أقسام ومعالجة كل منها بشكل منفصل وتوليف النتائج.',
        },
      },
      {
        id: 'rpag-q2',
        question: {
          en: 'Why is proper citation attribution important in AI-generated literature reviews?',
          ar: 'لماذا يعد الإسناد الصحيح للاقتباسات مهماً في مراجعات الأدبيات المولدة بالذكاء الاصطناعي؟',
        },
        options: {
          en: [
            'To increase the word count',
            'To prevent plagiarism and give credit to original authors',
            'To make the text look more professional',
            'To help the LLM generate better responses',
          ],
          ar: [
            'لزيادة عدد الكلمات',
            'لمنع السرقة الأدبية وإعطاء الفضل للمؤلفين الأصليين',
            'لجعل النص يبدو أكثر احترافية',
            'لمساعدة نموذج اللغة في توليد ردود أفضل',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Academic integrity requires proper attribution. AI-generated text that presents ideas from papers without citation can constitute plagiarism, which has serious consequences in academia.',
          ar: 'تتطلب النزاهة الأكاديمية إسناداً مناسباً. النص المولد بالذكاء الاصطناعي الذي يقدم أفكاراً من أوراق بدون اقتباس يمكن أن يشكل سرقة أدبية، وهي ذات عواقب خطيرة في الأوساط الأكاديمية.',
        },
      },
      {
        id: 'rpag-q3',
        question: {
          en: 'What is the benefit of storing parsed paper representations in a vector database?',
          ar: 'ما فائدة تخزين تمثيلات الأوراق المحللة في قاعدة بيانات متجهية؟',
        },
        options: {
          en: [
            'It makes the papers publicly available',
            'It enables efficient semantic search and retrieval for follow-up questions and cross-paper comparisons',
            'It automatically translates papers into other languages',
            'It reduces the file size of the PDFs',
          ],
          ar: [
            'يجعل الأوراق متاحة للعامة',
            'يمكّن البحث الدلالي والاسترجاع الفعال لأسئلة المتابعة والمقارنات عبر الأوراق',
            'يترجم الأوراق تلقائياً إلى لغات أخرى',
            'يقلل حجم ملفات PDF',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Vector databases enable fast semantic search across paper sections. When users ask follow-up questions, the agent can quickly retrieve relevant passages from any paper without re-processing the PDFs.',
          ar: 'تمكّن قواعد البيانات المتجهية البحث الدلالي السريع عبر أقسام الأوراق. عندما يسأل المستخدمون أسئلة متابعة، يمكن للوكيل استرجاع المقاطع ذات الصلة بسرعة من أي ورقة دون إعادة معالجة ملفات PDF.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 11. Code Review Agent
  // ─────────────────────────────────────────────
  'code-review-agent': {
    beginnerDefinition: {
      en: 'A code review agent is an AI assistant that automatically reads your code changes, finds bugs, spots security problems, suggests improvements, and leaves helpful comments  - just like a senior developer reviewing your pull request, but available instantly and 24/7.',
      ar: 'وكيل مراجعة الكود هو مساعد ذكاء اصطناعي يقرأ تغييرات الكود تلقائياً ويجد الأخطاء ويكتشف مشاكل الأمان ويقترح تحسينات ويترك تعليقات مفيدة  - تماماً مثل مطور أقدم يراجع طلب السحب الخاص بك، لكنه متاح فوراً وعلى مدار الساعة.',
    },
    technicalDefinition: {
      en: 'An automated code review agent integrates with version control systems (Git/GitHub/GitLab) to analyze code diffs in pull requests. It combines static analysis techniques (AST parsing, linting, pattern matching), security vulnerability scanning (OWASP patterns, dependency checking, secret detection), and LLM-powered semantic analysis (logic error detection, code smell identification, performance anti-pattern recognition) to produce actionable review comments. The agent maps findings to specific file locations and line numbers, categorizes issues by severity, and can be configured with project-specific coding standards and review criteria.',
      ar: 'يتكامل وكيل مراجعة الكود الآلي مع أنظمة التحكم في الإصدارات (Git/GitHub/GitLab) لتحليل فروقات الكود في طلبات السحب. يجمع بين تقنيات التحليل الثابت (تحليل AST، التدقيق اللغوي، مطابقة الأنماط)، ومسح الثغرات الأمنية (أنماط OWASP، فحص التبعيات، اكتشاف الأسرار)، والتحليل الدلالي بواسطة نموذج لغة (اكتشاف أخطاء المنطق، تحديد روائح الكود، التعرف على أنماط مضادة للأداء) لإنتاج تعليقات مراجعة قابلة للتنفيذ. يربط الوكيل النتائج بمواقع ملفات وأرقام أسطر محددة، ويصنف المشاكل حسب الخطورة، ويمكن تكوينه بمعايير ترميز خاصة بالمشروع ومعايير مراجعة.',
    },
    analogy: {
      en: 'A code review agent is like having three experts review your code simultaneously. The first expert is a grammar checker (static analysis) who catches syntax issues, unused variables, and style violations. The second is a security guard (vulnerability scanner) who checks for unlocked doors, exposed passwords, and known attack patterns. The third is a wise architect (LLM analysis) who understands the logic, spots design flaws, and suggests better approaches. Together, they catch issues that any single reviewer might miss.',
      ar: 'وكيل مراجعة الكود مثل وجود ثلاثة خبراء يراجعون كودك في وقت واحد. الخبير الأول هو مدقق نحوي (تحليل ثابت) يلتقط مشاكل بناء الجملة والمتغيرات غير المستخدمة وانتهاكات الأسلوب. الثاني هو حارس أمن (ماسح ثغرات) يتحقق من الأبواب غير المقفلة وكلمات المرور المكشوفة وأنماط الهجوم المعروفة. الثالث هو مهندس حكيم (تحليل نموذج اللغة) يفهم المنطق ويكتشف عيوب التصميم ويقترح مناهج أفضل. معاً، يلتقطون مشاكل قد يفوتها أي مراجع منفرد.',
    },
    explanation: {
      en: [
        'Code review is one of the most important software engineering practices, but it is also one of the most time-consuming. Code review agents augment human reviewers by catching common issues automatically, allowing human reviewers to focus on higher-level design and architecture decisions.',
        'The agent starts by analyzing the code diff  - the set of changes in a pull request. It parses added, modified, and deleted lines, understanding the context of each change (what file, what function, what was there before). This diff-centric approach ensures the agent focuses on new changes rather than reviewing the entire codebase.',
        'Bug detection uses multiple strategies. Static analysis catches type errors, null reference risks, resource leaks, and unreachable code. The LLM adds semantic understanding: it can detect logic errors (e.g., off-by-one errors, incorrect boundary conditions), race conditions in concurrent code, and missing error handling for edge cases that static analysis might miss.',
        'Security scanning checks for common vulnerability patterns from the OWASP Top 10: SQL injection, cross-site scripting (XSS), insecure deserialization, exposed credentials, and more. The agent also scans dependencies for known CVEs and detects hardcoded secrets (API keys, passwords, tokens) that should never be committed to version control.',
        'Actionable comments are the output of the review. Each finding includes the specific file and line number, the severity level (critical, warning, suggestion), a clear description of the issue, and a suggested fix or improvement. Good review comments explain why something is a problem, not just what is wrong.',
        'Version control integration connects the agent to platforms like GitHub or GitLab. The agent is triggered automatically when a pull request is opened or updated, analyzes the diff, and posts review comments directly on the PR. This seamless integration means developers get feedback within minutes of pushing code.',
      ],
      ar: [
        'مراجعة الكود هي واحدة من أهم ممارسات هندسة البرمجيات، لكنها أيضاً واحدة من أكثرها استهلاكاً للوقت. تعزز وكلاء مراجعة الكود المراجعين البشريين بالتقاط المشاكل الشائعة تلقائياً، مما يسمح للمراجعين البشريين بالتركيز على قرارات التصميم والبنية العالية المستوى.',
        'يبدأ الوكيل بتحليل فرق الكود  - مجموعة التغييرات في طلب السحب. يحلل الأسطر المضافة والمعدلة والمحذوفة، فاهماً سياق كل تغيير (أي ملف، أي وظيفة، ماذا كان هناك قبل). هذا المنهج المرتكز على الفرق يضمن تركيز الوكيل على التغييرات الجديدة بدلاً من مراجعة قاعدة الكود بالكامل.',
        'يستخدم اكتشاف الأخطاء استراتيجيات متعددة. يلتقط التحليل الثابت أخطاء النوع ومخاطر المراجع الفارغة وتسريبات الموارد والكود غير القابل للوصول. يضيف نموذج اللغة فهماً دلالياً: يمكنه اكتشاف أخطاء المنطق (مثل أخطاء الانحراف بواحد والشروط الحدودية غير الصحيحة) وحالات السباق في الكود المتزامن ومعالجة الأخطاء المفقودة للحالات الحدودية التي قد يفوتها التحليل الثابت.',
        'يتحقق المسح الأمني من أنماط الثغرات الشائعة من قائمة OWASP العشر الأولى: حقن SQL والبرمجة عبر المواقع (XSS) وإلغاء التسلسل غير الآمن وبيانات الاعتماد المكشوفة والمزيد. يمسح الوكيل أيضاً التبعيات بحثاً عن CVEs المعروفة ويكشف الأسرار المرمزة (مفاتيح API وكلمات المرور والرموز) التي لا يجب أبداً تقديمها للتحكم في الإصدارات.',
        'التعليقات القابلة للتنفيذ هي مخرجات المراجعة. كل نتيجة تتضمن الملف ورقم السطر المحدد ومستوى الخطورة (حرج، تحذير، اقتراح) ووصفاً واضحاً للمشكلة وإصلاحاً أو تحسيناً مقترحاً. تعليقات المراجعة الجيدة تشرح لماذا شيء ما يمثل مشكلة، وليس فقط ما هو الخطأ.',
        'يربط تكامل التحكم في الإصدارات الوكيل بمنصات مثل GitHub أو GitLab. يُشغّل الوكيل تلقائياً عند فتح أو تحديث طلب سحب، ويحلل الفرق، وينشر تعليقات المراجعة مباشرة على طلب السحب. هذا التكامل السلس يعني أن المطورين يحصلون على ملاحظات في غضون دقائق من دفع الكود.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import subprocess
from openai import OpenAI

client = OpenAI()

def get_pr_diff(base_branch: str = "main") -> str:
    """Get the diff of the current branch against base."""
    result = subprocess.run(
        ["git", "diff", f"{base_branch}...HEAD"],
        capture_output=True, text=True,
    )
    return result.stdout

def review_code(diff: str) -> list[dict]:
    """Analyze code diff and generate review comments."""
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": """You are an expert code reviewer.
Analyze the git diff and find issues in these categories:
1. BUGS: Logic errors, null references, off-by-one errors
2. SECURITY: SQL injection, XSS, hardcoded secrets, unsafe deserialization
3. PERFORMANCE: N+1 queries, unnecessary loops, missing caching
4. STYLE: Naming conventions, code duplication, missing docs

For each issue, provide a JSON object with:
- file: filename
- line: approximate line number in the diff
- severity: "critical" | "warning" | "suggestion"
- category: "bug" | "security" | "performance" | "style"
- message: clear description of the issue
- suggestion: how to fix it

Return a JSON array of issues. If no issues found, return []."""},
            {"role": "user", "content": f"Review this diff:\\n\\n{diff[:8000]}"},
        ],
    )

    import json
    try:
        issues = json.loads(response.choices[0].message.content)
    except json.JSONDecodeError:
        issues = []
    return issues

def post_review_comments(issues: list[dict]) -> None:
    """Print formatted review comments (integrate with GitHub API in production)."""
    severity_icons = {"critical": "[!!]", "warning": "[!]", "suggestion": "[i]"}
    for issue in issues:
        icon = severity_icons.get(issue.get("severity", ""), "[?]")
        print(f"{icon} {issue['file']}:{issue.get('line', '?')}")
        print(f"   Category: {issue.get('category', 'general')}")
        print(f"   Issue: {issue['message']}")
        print(f"   Fix: {issue.get('suggestion', 'N/A')}\\n")

# Run the review
diff = get_pr_diff()
if diff:
    issues = review_code(diff)
    print(f"Found {len(issues)} issues:\\n")
    post_review_comments(issues)
else:
    print("No changes to review.")`,
      description: {
        en: 'An automated code review agent that reads git diffs, uses an LLM to detect bugs, security issues, and style problems, and outputs structured review comments with severity levels and fix suggestions.',
        ar: 'وكيل مراجعة كود آلي يقرأ فروقات git ويستخدم نموذج لغة لاكتشاف الأخطاء ومشاكل الأمان ومشاكل الأسلوب وينتج تعليقات مراجعة منظمة بمستويات خطورة واقتراحات إصلاح.',
      },
    },
    commonMistakes: {
      en: [
        'Reviewing the entire codebase instead of just the diff, overwhelming the LLM with irrelevant code and missing changes in context.',
        'Producing vague review comments like "This code could be better" instead of specific, actionable feedback with line numbers and fix suggestions.',
        'Not categorizing issues by severity, treating minor style nits the same as critical security vulnerabilities.',
        'Ignoring the context of surrounding unchanged code when analyzing the diff, leading to false positives about missing error handling that already exists.',
      ],
      ar: [
        'مراجعة قاعدة الكود بالكامل بدلاً من الفرق فقط، مما يثقل نموذج اللغة بكود غير ذي صلة ويفوت التغييرات في السياق.',
        'إنتاج تعليقات مراجعة غامضة مثل "هذا الكود يمكن أن يكون أفضل" بدلاً من ملاحظات محددة وقابلة للتنفيذ بأرقام أسطر واقتراحات إصلاح.',
        'عدم تصنيف المشاكل حسب الخطورة، والتعامل مع ملاحظات الأسلوب الطفيفة بنفس طريقة الثغرات الأمنية الحرجة.',
        'تجاهل سياق الكود المحيط غير المتغير عند تحليل الفرق، مما يؤدي إلى إيجابيات خاطئة حول معالجة أخطاء مفقودة موجودة فعلاً.',
      ],
    },
    bestPractices: {
      en: [
        'Focus the review on the diff (changed lines) but include surrounding context to understand the full picture of each change.',
        'Produce actionable comments with specific file paths, line numbers, severity levels, clear problem descriptions, and concrete fix suggestions.',
        'Categorize findings by severity (critical, warning, suggestion) so developers can prioritize the most important issues first.',
        'Allow project-specific configuration: custom linting rules, ignored patterns, and team coding standards that the agent should enforce.',
        'Integrate with the CI/CD pipeline so reviews are triggered automatically on every pull request and comments are posted directly on the PR.',
      ],
      ar: [
        'ركز المراجعة على الفرق (الأسطر المتغيرة) لكن أضمن السياق المحيط لفهم الصورة الكاملة لكل تغيير.',
        'أنتج تعليقات قابلة للتنفيذ بمسارات ملفات محددة وأرقام أسطر ومستويات خطورة وأوصاف مشاكل واضحة واقتراحات إصلاح ملموسة.',
        'صنف النتائج حسب الخطورة (حرج، تحذير، اقتراح) حتى يتمكن المطورون من ترتيب أولويات المشاكل الأكثر أهمية أولاً.',
        'اسمح بتكوين خاص بالمشروع: قواعد تدقيق مخصصة وأنماط متجاهلة ومعايير ترميز الفريق التي يجب أن يفرضها الوكيل.',
        'ادمج مع خط أنابيب CI/CD حتى تُشغّل المراجعات تلقائياً في كل طلب سحب وتُنشر التعليقات مباشرة على طلب السحب.',
      ],
    },
    references: [
      { title: 'GitHub Code Review Best Practices', url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests' },
      { title: 'OWASP Top Ten Security Risks', url: 'https://owasp.org/www-project-top-ten/' },
      { title: 'Static Analysis Tools Comparison', url: 'https://analysis-tools.dev/' },
    ],
    quiz: [
      {
        id: 'crag-q1',
        question: {
          en: 'Why should a code review agent focus on the diff rather than the entire codebase?',
          ar: 'لماذا يجب أن يركز وكيل مراجعة الكود على الفرق بدلاً من قاعدة الكود بالكامل؟',
        },
        options: {
          en: [
            'Because the entire codebase is always bug-free',
            'To focus on new changes, avoid overwhelming the LLM, and reduce noise in review comments',
            'Because LLMs cannot read existing code',
            'To make the review faster regardless of quality',
          ],
          ar: [
            'لأن قاعدة الكود بالكامل خالية من الأخطاء دائماً',
            'للتركيز على التغييرات الجديدة وتجنب إثقال نموذج اللغة وتقليل الضوضاء في تعليقات المراجعة',
            'لأن نماذج اللغة لا تستطيع قراءة الكود الموجود',
            'لجعل المراجعة أسرع بغض النظر عن الجودة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Focusing on the diff ensures the agent reviews the actual changes being introduced, avoids exceeding LLM context limits with irrelevant code, and produces targeted feedback on new code.',
          ar: 'التركيز على الفرق يضمن أن الوكيل يراجع التغييرات الفعلية المُدخلة، ويتجنب تجاوز حدود سياق نموذج اللغة بكود غير ذي صلة، وينتج ملاحظات مستهدفة على الكود الجديد.',
        },
      },
      {
        id: 'crag-q2',
        question: {
          en: 'What makes a code review comment "actionable"?',
          ar: 'ما الذي يجعل تعليق مراجعة الكود "قابلاً للتنفيذ"؟',
        },
        options: {
          en: [
            'Using technical jargon that sounds impressive',
            'Including the file path, line number, clear problem description, and a concrete fix suggestion',
            'Writing the comment in multiple languages',
            'Making the comment as long as possible',
          ],
          ar: [
            'استخدام مصطلحات تقنية تبدو مبهرة',
            'تضمين مسار الملف ورقم السطر ووصف مشكلة واضح واقتراح إصلاح ملموس',
            'كتابة التعليق بلغات متعددة',
            'جعل التعليق طويلاً قدر الإمكان',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Actionable review comments tell the developer exactly where the issue is (file, line), what the problem is (description), and how to fix it (suggestion), enabling quick resolution.',
          ar: 'تخبر تعليقات المراجعة القابلة للتنفيذ المطور بالضبط أين المشكلة (الملف، السطر) وما هي المشكلة (الوصف) وكيفية إصلاحها (الاقتراح)، مما يمكّن الحل السريع.',
        },
      },
      {
        id: 'crag-q3',
        question: {
          en: 'Which security issue should a code review agent always flag?',
          ar: 'أي مشكلة أمنية يجب أن يشير إليها وكيل مراجعة الكود دائماً؟',
        },
        options: {
          en: [
            'Using camelCase instead of snake_case',
            'Hardcoded API keys and passwords committed to version control',
            'Using print statements for debugging',
            'Having too many comments in the code',
          ],
          ar: [
            'استخدام camelCase بدلاً من snake_case',
            'مفاتيح API وكلمات المرور المرمزة المقدمة للتحكم في الإصدارات',
            'استخدام عبارات print للتصحيح',
            'وجود تعليقات كثيرة جداً في الكود',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Hardcoded secrets (API keys, passwords, tokens) in version control are a critical security vulnerability. Once committed, they can be exposed in the repository history even if later removed.',
          ar: 'الأسرار المرمزة (مفاتيح API، كلمات المرور، الرموز) في التحكم بالإصدارات هي ثغرة أمنية حرجة. بمجرد تقديمها، يمكن كشفها في سجل المستودع حتى لو أُزيلت لاحقاً.',
        },
      },
    ],
  },
};
