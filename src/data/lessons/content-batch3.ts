import type { LessonContentData } from './content';

export const batch3Contents: Record<string, LessonContentData> = {
  'supabase-agent-memory': {
    beginnerDefinition: {
      en: 'Supabase Agent Memory is a way to give AI agents a persistent brain using Supabase — a cloud database platform. It lets agents store, search, and retrieve memories using powerful vector search (pgvector) so they can remember past conversations and facts across sessions.',
      ar: 'ذاكرة الوكيل باستخدام Supabase هي طريقة لمنح وكلاء الذكاء الاصطناعي دماغاً دائماً باستخدام Supabase — منصة قواعد بيانات سحابية. تتيح للوكلاء تخزين الذكريات والبحث عنها واسترجاعها باستخدام البحث المتجهي القوي (pgvector) حتى يتمكنوا من تذكر المحادثات والحقائق السابقة عبر الجلسات.',
    },
    technicalDefinition: {
      en: 'Supabase Agent Memory leverages PostgreSQL with the pgvector extension to provide vector similarity search for AI agent memory storage. Embeddings generated from agent interactions are stored in Supabase tables, enabling semantic retrieval via cosine similarity or inner product distance. Combined with Supabase Realtime subscriptions, agents can reactively update their memory and synchronize state across distributed agent instances.',
      ar: 'تستفيد ذاكرة الوكيل في Supabase من PostgreSQL مع امتداد pgvector لتوفير بحث تشابه متجهي لتخزين ذاكرة وكيل الذكاء الاصطناعي. يتم تخزين التضمينات المولدة من تفاعلات الوكيل في جداول Supabase، مما يتيح الاسترجاع الدلالي عبر تشابه جيب التمام أو مسافة الجداء الداخلي. بالاقتران مع اشتراكات Supabase الفورية، يمكن للوكلاء تحديث ذاكرتهم بشكل تفاعلي ومزامنة الحالة عبر نسخ الوكيل الموزعة.',
    },
    analogy: {
      en: 'Imagine a librarian with a magical filing cabinet. Every time someone tells the librarian something important, they write it on a card and file it. When someone asks a question later, the librarian does not just search by exact keywords — they understand the meaning behind the question and pull out the most relevant cards, even if the words are completely different. Supabase with pgvector is that magical filing cabinet for AI agents.',
      ar: 'تخيل أمين مكتبة لديه خزانة ملفات سحرية. في كل مرة يخبره شخص بشيء مهم، يكتبه على بطاقة ويحفظه. عندما يسأل شخص سؤالاً لاحقاً، لا يبحث أمين المكتبة بالكلمات المفتاحية الدقيقة فحسب — بل يفهم المعنى وراء السؤال ويسحب البطاقات الأكثر صلة، حتى لو كانت الكلمات مختلفة تماماً. Supabase مع pgvector هي تلك الخزانة السحرية لوكلاء الذكاء الاصطناعي.',
    },
    explanation: {
      en: [
        'Supabase is an open-source Firebase alternative built on PostgreSQL. For AI agents, it provides a robust backend for memory storage with built-in authentication, real-time subscriptions, and the powerful pgvector extension for vector similarity search.',
        'The pgvector extension allows you to store embedding vectors directly in PostgreSQL columns. When an agent creates a memory, the text is first converted to an embedding vector using a model like OpenAI\'s text-embedding-ada-002, then stored alongside metadata like timestamps, session IDs, and importance scores.',
        'Retrieval works through vector similarity search. When the agent needs to recall relevant memories, the query is embedded into a vector, and pgvector finds the closest matching memories using cosine similarity. This means the agent can find semantically related memories even when exact keywords do not match.',
        'Supabase Realtime adds another powerful dimension. Multiple agent instances can subscribe to memory table changes, enabling collaborative agents to share memories in real-time. When one agent learns something new, others can immediately access that knowledge.',
        'A typical memory table schema includes columns for the memory ID, content text, embedding vector, metadata (JSON), creation timestamp, agent ID, and session ID. Indexes on the vector column using IVFFlat or HNSW algorithms ensure fast similarity searches even with millions of records.',
        'Row Level Security (RLS) in Supabase ensures that agents can only access their own memories or shared memories they are authorized to read. This is critical in multi-tenant deployments where multiple users have separate agent instances.',
      ],
      ar: [
        'Supabase هو بديل مفتوح المصدر لـ Firebase مبني على PostgreSQL. بالنسبة لوكلاء الذكاء الاصطناعي، يوفر خلفية قوية لتخزين الذاكرة مع مصادقة مدمجة واشتراكات فورية وامتداد pgvector القوي للبحث بتشابه المتجهات.',
        'يتيح امتداد pgvector تخزين متجهات التضمين مباشرة في أعمدة PostgreSQL. عندما ينشئ الوكيل ذاكرة، يتم تحويل النص أولاً إلى متجه تضمين باستخدام نموذج مثل text-embedding-ada-002 من OpenAI، ثم يُخزن مع بيانات وصفية مثل الطوابع الزمنية ومعرفات الجلسات ودرجات الأهمية.',
        'يعمل الاسترجاع من خلال بحث تشابه المتجهات. عندما يحتاج الوكيل لاستدعاء ذكريات ذات صلة، يتم تضمين الاستعلام في متجه، ويجد pgvector أقرب الذكريات المطابقة باستخدام تشابه جيب التمام. هذا يعني أن الوكيل يمكنه إيجاد ذكريات مرتبطة دلالياً حتى عندما لا تتطابق الكلمات المفتاحية.',
        'يضيف Supabase Realtime بُعداً قوياً آخر. يمكن لنسخ متعددة من الوكلاء الاشتراك في تغييرات جدول الذاكرة، مما يتيح للوكلاء التعاونيين مشاركة الذكريات في الوقت الفعلي. عندما يتعلم وكيل شيئاً جديداً، يمكن للآخرين الوصول فوراً إلى تلك المعرفة.',
        'يتضمن مخطط جدول الذاكرة النموذجي أعمدة لمعرف الذاكرة ونص المحتوى ومتجه التضمين والبيانات الوصفية (JSON) وطابع الإنشاء الزمني ومعرف الوكيل ومعرف الجلسة. تضمن الفهارس على عمود المتجه باستخدام خوارزميات IVFFlat أو HNSW عمليات بحث تشابه سريعة حتى مع ملايين السجلات.',
        'يضمن أمان مستوى الصف (RLS) في Supabase أن الوكلاء يمكنهم فقط الوصول إلى ذكرياتهم الخاصة أو الذكريات المشتركة المصرح لهم بقراءتها. هذا أمر بالغ الأهمية في عمليات النشر متعددة المستأجرين حيث يكون لدى عدة مستخدمين نسخ وكيل منفصلة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from supabase import create_client
import openai

supabase = create_client("https://your-project.supabase.co", "your-anon-key")
openai_client = openai.OpenAI()

def get_embedding(text: str) -> list[float]:
    """Generate embedding vector for text."""
    response = openai_client.embeddings.create(
        model="text-embedding-ada-002", input=text
    )
    return response.data[0].embedding

def store_memory(agent_id: str, content: str, metadata: dict = None):
    """Store a memory with its embedding in Supabase."""
    embedding = get_embedding(content)
    supabase.table("agent_memories").insert({
        "agent_id": agent_id,
        "content": content,
        "embedding": embedding,
        "metadata": metadata or {}
    }).execute()

def recall_memories(agent_id: str, query: str, top_k: int = 5):
    """Retrieve the most relevant memories for a query."""
    query_embedding = get_embedding(query)
    result = supabase.rpc("match_memories", {
        "query_embedding": query_embedding,
        "match_count": top_k,
        "filter_agent_id": agent_id
    }).execute()
    return result.data

# Usage
store_memory("agent-1", "User prefers Python over JavaScript")
store_memory("agent-1", "User is building a chatbot for healthcare")

# Later, recall relevant memories
memories = recall_memories("agent-1", "What programming language?")
for m in memories:
    print(f"Memory: {m['content']} (similarity: {m['similarity']:.3f})")`,
      description: {
        en: 'A practical example showing how to store and retrieve agent memories using Supabase with pgvector for semantic similarity search.',
        ar: 'مثال عملي يوضح كيفية تخزين واسترجاع ذكريات الوكيل باستخدام Supabase مع pgvector للبحث بالتشابه الدلالي.',
      },
    },
    commonMistakes: {
      en: [
        'Not creating proper indexes on the embedding column — without IVFFlat or HNSW indexes, vector searches become extremely slow as the table grows.',
        'Storing raw text without embeddings and trying to do keyword search instead of semantic search, losing the main benefit of vector memory.',
        'Ignoring Row Level Security (RLS) policies, which can expose one agent\'s memories to another in multi-tenant setups.',
        'Using excessively high embedding dimensions without considering storage and query performance trade-offs.',
      ],
      ar: [
        'عدم إنشاء فهارس مناسبة على عمود التضمين — بدون فهارس IVFFlat أو HNSW، تصبح عمليات البحث المتجهي بطيئة للغاية مع نمو الجدول.',
        'تخزين النص الخام بدون تضمينات ومحاولة البحث بالكلمات المفتاحية بدلاً من البحث الدلالي، مما يفقد الفائدة الرئيسية للذاكرة المتجهية.',
        'تجاهل سياسات أمان مستوى الصف (RLS)، مما قد يكشف ذكريات وكيل لوكيل آخر في الإعدادات متعددة المستأجرين.',
        'استخدام أبعاد تضمين عالية بشكل مفرط دون مراعاة المفاضلات بين التخزين وأداء الاستعلام.',
      ],
    },
    bestPractices: {
      en: [
        'Use HNSW indexes for production workloads as they offer better query performance than IVFFlat for most use cases.',
        'Include metadata columns (timestamp, session_id, importance) alongside embeddings to enable filtered similarity searches.',
        'Implement memory consolidation — periodically summarize and merge related memories to prevent unbounded growth.',
        'Use Supabase Edge Functions to handle embedding generation server-side, keeping API keys secure and reducing client-side complexity.',
        'Set up Realtime subscriptions for collaborative multi-agent scenarios where agents need to share knowledge instantly.',
      ],
      ar: [
        'استخدم فهارس HNSW لأحمال العمل الإنتاجية لأنها توفر أداء استعلام أفضل من IVFFlat لمعظم حالات الاستخدام.',
        'أضف أعمدة بيانات وصفية (الطابع الزمني، معرف الجلسة، الأهمية) بجانب التضمينات لتمكين عمليات البحث المفلترة بالتشابه.',
        'نفذ توحيد الذاكرة — لخص وادمج الذكريات المرتبطة دورياً لمنع النمو غير المحدود.',
        'استخدم Supabase Edge Functions للتعامل مع توليد التضمين على جانب الخادم، مما يحافظ على أمان مفاتيح API ويقلل تعقيد جانب العميل.',
        'أعد اشتراكات Realtime لسيناريوهات الوكلاء التعاونيين متعددي الوكلاء حيث يحتاج الوكلاء لمشاركة المعرفة فوراً.',
      ],
    },
    references: [
      { title: 'Supabase pgvector Guide', url: 'https://supabase.com/docs/guides/ai' },
      { title: 'pgvector GitHub Repository', url: 'https://github.com/pgvector/pgvector' },
      { title: 'Supabase Realtime Documentation', url: 'https://supabase.com/docs/guides/realtime' },
    ],
    quiz: [
      {
        id: 'sbmem-q1',
        question: {
          en: 'What PostgreSQL extension does Supabase use for vector similarity search in agent memory?',
          ar: 'ما امتداد PostgreSQL الذي يستخدمه Supabase للبحث بتشابه المتجهات في ذاكرة الوكيل؟',
        },
        options: {
          en: ['PostGIS', 'pgvector', 'pg_trgm', 'hstore'],
          ar: ['PostGIS', 'pgvector', 'pg_trgm', 'hstore'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'pgvector is the PostgreSQL extension that enables storing and querying vector embeddings, which is essential for semantic similarity search in agent memory systems.',
          ar: 'pgvector هو امتداد PostgreSQL الذي يتيح تخزين واستعلام تضمينات المتجهات، وهو ضروري للبحث بالتشابه الدلالي في أنظمة ذاكرة الوكيل.',
        },
      },
      {
        id: 'sbmem-q2',
        question: {
          en: 'What Supabase feature allows multiple agents to share memories in real-time?',
          ar: 'ما ميزة Supabase التي تتيح لعدة وكلاء مشاركة الذكريات في الوقت الفعلي؟',
        },
        options: {
          en: ['Edge Functions', 'Realtime subscriptions', 'Row Level Security', 'Storage Buckets'],
          ar: ['وظائف الحافة', 'اشتراكات الوقت الفعلي', 'أمان مستوى الصف', 'حاويات التخزين'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Supabase Realtime subscriptions allow agents to subscribe to changes in the memory table, enabling instant sharing of new memories across multiple agent instances.',
          ar: 'تتيح اشتراكات Supabase الفورية للوكلاء الاشتراك في تغييرات جدول الذاكرة، مما يمكّن المشاركة الفورية للذكريات الجديدة عبر نسخ متعددة من الوكلاء.',
        },
      },
      {
        id: 'sbmem-q3',
        question: {
          en: 'Which index type is recommended for production pgvector workloads?',
          ar: 'ما نوع الفهرس الموصى به لأحمال عمل pgvector الإنتاجية؟',
        },
        options: {
          en: ['B-tree', 'GIN', 'HNSW', 'GiST'],
          ar: ['B-tree', 'GIN', 'HNSW', 'GiST'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'HNSW (Hierarchical Navigable Small World) indexes offer better query performance than IVFFlat for most production use cases and do not require a separate training step.',
          ar: 'توفر فهارس HNSW (العوالم الصغيرة القابلة للتنقل الهرمي) أداء استعلام أفضل من IVFFlat لمعظم حالات الاستخدام الإنتاجية ولا تتطلب خطوة تدريب منفصلة.',
        },
      },
    ],
  },

  'memory-types-deep-dive': {
    beginnerDefinition: {
      en: 'AI agents can have different types of memory, just like humans do. Working memory holds what the agent is thinking about right now, episodic memory stores past experiences, semantic memory holds general knowledge and facts, and procedural memory remembers how to do things. Understanding these types helps build smarter agents.',
      ar: 'يمكن لوكلاء الذكاء الاصطناعي امتلاك أنواع مختلفة من الذاكرة، تماماً مثل البشر. تحتفظ الذاكرة العاملة بما يفكر فيه الوكيل الآن، وتخزن الذاكرة العرضية التجارب السابقة، وتحتفظ الذاكرة الدلالية بالمعرفة العامة والحقائق، وتتذكر الذاكرة الإجرائية كيفية القيام بالأشياء. فهم هذه الأنواع يساعد في بناء وكلاء أذكى.',
    },
    technicalDefinition: {
      en: 'Memory types in AI agents mirror cognitive science classifications. Working memory is implemented as the current context window with active state variables. Episodic memory uses timestamped event logs with embedding-based retrieval for experience replay. Semantic memory employs knowledge graphs or vector stores for factual information indexed by meaning. Procedural memory encodes learned action sequences, tool-use patterns, and policies as reusable templates or fine-tuned model weights.',
      ar: 'تعكس أنواع الذاكرة في وكلاء الذكاء الاصطناعي تصنيفات العلوم المعرفية. تُنفذ الذاكرة العاملة كنافذة السياق الحالية مع متغيرات الحالة النشطة. تستخدم الذاكرة العرضية سجلات أحداث مختومة زمنياً مع استرجاع قائم على التضمين لإعادة تشغيل التجارب. تستخدم الذاكرة الدلالية رسوماً بيانية معرفية أو مخازن متجهات للمعلومات الواقعية المفهرسة حسب المعنى. تشفر الذاكرة الإجرائية تسلسلات الإجراءات المتعلمة وأنماط استخدام الأدوات والسياسات كقوالب قابلة لإعادة الاستخدام.',
    },
    analogy: {
      en: 'Think of memory types like different parts of a chef\'s knowledge. Working memory is the ingredients currently on the cutting board — what they are actively handling. Episodic memory is remembering specific meals they cooked: "Last Friday I made pasta and it was too salty." Semantic memory is knowing that water boils at 100°C and that garlic pairs well with olive oil. Procedural memory is the muscle memory of how to julienne vegetables or flip a pancake — skills they just know how to do.',
      ar: 'فكر في أنواع الذاكرة مثل أجزاء مختلفة من معرفة الطاهي. الذاكرة العاملة هي المكونات الموجودة حالياً على لوح التقطيع — ما يتعاملون معه بنشاط. الذاكرة العرضية هي تذكر وجبات محددة طهوها: "الجمعة الماضية صنعت معكرونة وكانت مالحة جداً." الذاكرة الدلالية هي معرفة أن الماء يغلي عند 100 درجة مئوية وأن الثوم يتناسب مع زيت الزيتون. الذاكرة الإجرائية هي ذاكرة العضلات لكيفية تقطيع الخضروات أو قلب فطيرة — مهارات يعرفون كيف يؤدونها تلقائياً.',
    },
    explanation: {
      en: [
        'Working memory in AI agents corresponds to the active context window — the information the LLM is currently processing. This includes the system prompt, recent conversation messages, and any retrieved context. It is limited by the model\'s context window size and represents the agent\'s "attention span."',
        'Episodic memory stores specific experiences and events the agent has encountered. Each episode includes what happened, when it happened, and what the outcome was. This allows agents to learn from past successes and failures. For example, an agent might remember that a particular API call failed last time and try an alternative approach.',
        'Semantic memory holds general world knowledge and facts that are not tied to a specific experience. This is typically implemented using vector databases or knowledge graphs. When an agent stores "Python is a programming language" or "The user\'s preferred timezone is UTC+3," it is creating semantic memories.',
        'Procedural memory captures learned sequences of actions — the "how to" knowledge. If an agent has successfully completed a task before, it can store the sequence of steps as a procedure. Next time a similar task arises, it can retrieve and reuse that procedure rather than reasoning from scratch.',
        'The interaction between memory types is critical. When an agent receives a task, it uses working memory to process the request, retrieves relevant facts from semantic memory, recalls similar past experiences from episodic memory, and applies known procedures from procedural memory. This mirrors how human cognition integrates different memory systems.',
        'Implementing these memory types requires different storage strategies. Working memory fits in the LLM context, episodic memory needs timestamped logs with retrieval, semantic memory benefits from vector stores or knowledge graphs, and procedural memory can be stored as structured action templates or code snippets.',
      ],
      ar: [
        'تتوافق الذاكرة العاملة في وكلاء الذكاء الاصطناعي مع نافذة السياق النشطة — المعلومات التي يعالجها نموذج اللغة حالياً. تشمل أوامر النظام ورسائل المحادثة الحديثة وأي سياق مسترجع. وهي محدودة بحجم نافذة سياق النموذج وتمثل "مدى انتباه" الوكيل.',
        'تخزن الذاكرة العرضية تجارب وأحداث محددة واجهها الوكيل. تتضمن كل حلقة ما حدث ومتى حدث وما كانت النتيجة. هذا يسمح للوكلاء بالتعلم من النجاحات والإخفاقات السابقة. على سبيل المثال، قد يتذكر الوكيل أن استدعاء API معين فشل في المرة السابقة ويجرب نهجاً بديلاً.',
        'تحتفظ الذاكرة الدلالية بالمعرفة العامة والحقائق غير المرتبطة بتجربة محددة. يتم تنفيذها عادةً باستخدام قواعد بيانات متجهية أو رسوم بيانية معرفية. عندما يخزن الوكيل "Python هي لغة برمجة" أو "المنطقة الزمنية المفضلة للمستخدم هي UTC+3"، فإنه ينشئ ذكريات دلالية.',
        'تلتقط الذاكرة الإجرائية تسلسلات الإجراءات المتعلمة — معرفة "كيفية القيام بالأشياء". إذا أكمل الوكيل مهمة بنجاح من قبل، يمكنه تخزين تسلسل الخطوات كإجراء. في المرة القادمة التي تظهر فيها مهمة مماثلة، يمكنه استرجاع وإعادة استخدام ذلك الإجراء بدلاً من الاستدلال من الصفر.',
        'التفاعل بين أنواع الذاكرة أمر بالغ الأهمية. عندما يتلقى الوكيل مهمة، يستخدم الذاكرة العاملة لمعالجة الطلب، ويسترجع الحقائق ذات الصلة من الذاكرة الدلالية، ويستدعي التجارب السابقة المماثلة من الذاكرة العرضية، ويطبق الإجراءات المعروفة من الذاكرة الإجرائية. هذا يحاكي كيف يدمج الإدراك البشري أنظمة الذاكرة المختلفة.',
        'يتطلب تنفيذ أنواع الذاكرة هذه استراتيجيات تخزين مختلفة. الذاكرة العاملة تتسع في سياق نموذج اللغة، والذاكرة العرضية تحتاج سجلات مختومة زمنياً مع استرجاع، والذاكرة الدلالية تستفيد من مخازن المتجهات أو الرسوم البيانية المعرفية، والذاكرة الإجرائية يمكن تخزينها كقوالب إجراءات منظمة أو مقتطفات برمجية.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from dataclasses import dataclass, field
from datetime import datetime

@dataclass
class WorkingMemory:
    """Current context the agent is processing."""
    messages: list[dict] = field(default_factory=list)
    active_goal: str = ""
    scratch_pad: dict = field(default_factory=dict)

@dataclass
class EpisodicMemory:
    """A specific past experience."""
    event: str
    outcome: str
    timestamp: datetime
    importance: float = 0.5

@dataclass
class SemanticFact:
    """A general knowledge fact."""
    subject: str
    predicate: str
    obj: str
    confidence: float = 1.0

@dataclass
class Procedure:
    """A learned action sequence."""
    name: str
    steps: list[str]
    success_rate: float = 0.0

class AgentMemorySystem:
    def __init__(self):
        self.working = WorkingMemory()
        self.episodes: list[EpisodicMemory] = []
        self.facts: list[SemanticFact] = []
        self.procedures: list[Procedure] = []

    def record_episode(self, event: str, outcome: str, importance: float = 0.5):
        self.episodes.append(EpisodicMemory(
            event=event, outcome=outcome,
            timestamp=datetime.now(), importance=importance
        ))

    def store_fact(self, subject: str, predicate: str, obj: str):
        self.facts.append(SemanticFact(subject=subject, predicate=predicate, obj=obj))

    def learn_procedure(self, name: str, steps: list[str], success_rate: float):
        self.procedures.append(Procedure(name=name, steps=steps, success_rate=success_rate))

    def recall_relevant(self, query: str) -> dict:
        episodes = [e for e in self.episodes if query.lower() in e.event.lower()]
        facts = [f for f in self.facts if query.lower() in f.subject.lower()]
        procs = [p for p in self.procedures if query.lower() in p.name.lower()]
        return {"episodes": episodes, "facts": facts, "procedures": procs}

# Usage
memory = AgentMemorySystem()
memory.store_fact("Python", "is_a", "programming language")
memory.record_episode("Deployed API to AWS", "Success after retry", importance=0.8)
memory.learn_procedure("deploy_api", ["build", "test", "push", "deploy"], success_rate=0.9)
print(memory.recall_relevant("Python"))`,
      description: {
        en: 'A Python implementation of the four memory types (working, episodic, semantic, procedural) showing how an agent can store and retrieve different kinds of knowledge.',
        ar: 'تنفيذ بلغة Python لأنواع الذاكرة الأربعة (العاملة، العرضية، الدلالية، الإجرائية) يوضح كيف يمكن للوكيل تخزين واسترجاع أنواع مختلفة من المعرفة.',
      },
    },
    commonMistakes: {
      en: [
        'Treating all memories the same — storing everything in one flat list without distinguishing between facts, experiences, and procedures.',
        'Overloading working memory by cramming too much context into the LLM prompt, exceeding the context window and causing information loss.',
        'Not implementing importance scoring for episodic memories, leading to trivial events cluttering the memory and pushing out critical ones.',
        'Ignoring procedural memory entirely, forcing the agent to re-derive action sequences from scratch every time it encounters a familiar task.',
      ],
      ar: [
        'معاملة جميع الذكريات بنفس الطريقة — تخزين كل شيء في قائمة مسطحة واحدة دون التمييز بين الحقائق والتجارب والإجراءات.',
        'إثقال الذاكرة العاملة بحشو سياق كبير في موجه نموذج اللغة، مما يتجاوز نافذة السياق ويسبب فقدان المعلومات.',
        'عدم تنفيذ تقييم الأهمية للذكريات العرضية، مما يؤدي إلى ازدحام الذاكرة بالأحداث التافهة وإزاحة الأحداث الحرجة.',
        'تجاهل الذاكرة الإجرائية بالكامل، مما يجبر الوكيل على إعادة استنتاج تسلسلات الإجراءات من الصفر في كل مرة يواجه مهمة مألوفة.',
      ],
    },
    bestPractices: {
      en: [
        'Design separate storage backends optimized for each memory type — vector stores for semantic, time-series for episodic, structured templates for procedural.',
        'Implement memory consolidation that periodically reviews and strengthens important memories while allowing less important ones to decay.',
        'Use working memory management strategies like summarization to keep the active context focused and within token limits.',
        'Tag episodic memories with emotional valence (success/failure) and importance scores to prioritize retrieval of the most useful experiences.',
        'Build feedback loops where the outcome of actions updates procedural memory, improving the agent\'s action selection over time.',
      ],
      ar: [
        'صمم خلفيات تخزين منفصلة محسنة لكل نوع ذاكرة — مخازن متجهات للدلالية، سلاسل زمنية للعرضية، قوالب منظمة للإجرائية.',
        'نفذ توحيد الذاكرة الذي يراجع دورياً ويعزز الذكريات المهمة مع السماح للذكريات الأقل أهمية بالتلاشي.',
        'استخدم استراتيجيات إدارة الذاكرة العاملة مثل التلخيص للحفاظ على تركيز السياق النشط ضمن حدود الرموز.',
        'ضع علامات على الذكريات العرضية بالتكافؤ العاطفي (نجاح/فشل) ودرجات الأهمية لتحديد أولوية استرجاع التجارب الأكثر فائدة.',
        'ابنِ حلقات تغذية راجعة حيث تحدث نتائج الإجراءات الذاكرة الإجرائية، مما يحسن اختيار إجراءات الوكيل بمرور الوقت.',
      ],
    },
    references: [
      { title: 'Cognitive Architectures for Language Agents (CoALA)', url: 'https://arxiv.org/abs/2309.02427' },
      { title: 'MemGPT: Towards LLMs as Operating Systems', url: 'https://arxiv.org/abs/2310.08560' },
      { title: 'A Survey on Memory Mechanisms in LLM-based Agents', url: 'https://arxiv.org/abs/2404.13501' },
    ],
    quiz: [
      {
        id: 'memtypes-q1',
        question: {
          en: 'Which memory type stores general facts and knowledge not tied to a specific event?',
          ar: 'أي نوع من الذاكرة يخزن الحقائق والمعرفة العامة غير المرتبطة بحدث محدد؟',
        },
        options: {
          en: ['Working memory', 'Episodic memory', 'Semantic memory', 'Procedural memory'],
          ar: ['الذاكرة العاملة', 'الذاكرة العرضية', 'الذاكرة الدلالية', 'الذاكرة الإجرائية'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Semantic memory stores general knowledge and facts (like "Python is a programming language") independent of any specific experience or event.',
          ar: 'تخزن الذاكرة الدلالية المعرفة العامة والحقائق (مثل "Python هي لغة برمجة") بشكل مستقل عن أي تجربة أو حدث محدد.',
        },
      },
      {
        id: 'memtypes-q2',
        question: {
          en: 'What does procedural memory in an AI agent store?',
          ar: 'ماذا تخزن الذاكرة الإجرائية في وكيل الذكاء الاصطناعي؟',
        },
        options: {
          en: ['Current conversation messages', 'Timestamped past events', 'Learned action sequences and how-to knowledge', 'User preferences and settings'],
          ar: ['رسائل المحادثة الحالية', 'أحداث ماضية مختومة زمنياً', 'تسلسلات إجراءات متعلمة ومعرفة كيفية القيام بالأشياء', 'تفضيلات وإعدادات المستخدم'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Procedural memory stores learned sequences of actions — the "how to" knowledge. It allows agents to reuse successful action patterns instead of reasoning from scratch each time.',
          ar: 'تخزن الذاكرة الإجرائية تسلسلات الإجراءات المتعلمة — معرفة "كيفية القيام بالأشياء". تسمح للوكلاء بإعادة استخدام أنماط الإجراءات الناجحة بدلاً من الاستدلال من الصفر في كل مرة.',
        },
      },
      {
        id: 'memtypes-q3',
        question: {
          en: 'Working memory in an AI agent is most analogous to which component?',
          ar: 'الذاكرة العاملة في وكيل الذكاء الاصطناعي تشبه أي مكون أكثر؟',
        },
        options: {
          en: ['The vector database', 'The LLM context window', 'The training dataset', 'The tool registry'],
          ar: ['قاعدة البيانات المتجهية', 'نافذة سياق نموذج اللغة', 'مجموعة بيانات التدريب', 'سجل الأدوات'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Working memory maps to the LLM\'s context window — it holds the information the agent is actively processing, including current messages and retrieved context.',
          ar: 'تتوافق الذاكرة العاملة مع نافذة سياق نموذج اللغة — فهي تحتفظ بالمعلومات التي يعالجها الوكيل بنشاط، بما في ذلك الرسائل الحالية والسياق المسترجع.',
        },
      },
    ],
  },

  'conversational-memory': {
    beginnerDefinition: {
      en: 'Conversational memory is how an AI agent remembers what was said earlier in a conversation. Since LLMs have limited context windows, agents need smart strategies like keeping a sliding window of recent messages, summarizing older parts, or combining both approaches to maintain coherent, context-aware conversations.',
      ar: 'الذاكرة الحوارية هي كيفية تذكر وكيل الذكاء الاصطناعي لما قيل سابقاً في المحادثة. بما أن نماذج اللغة لديها نوافذ سياق محدودة، يحتاج الوكلاء لاستراتيجيات ذكية مثل الاحتفاظ بنافذة منزلقة من الرسائل الأخيرة، أو تلخيص الأجزاء القديمة، أو الجمع بين النهجين للحفاظ على محادثات متماسكة وواعية بالسياق.',
    },
    technicalDefinition: {
      en: 'Conversational memory encompasses techniques for managing dialogue history within an LLM\'s finite context window. Key approaches include: sliding window (retaining the N most recent turns), summarization-based memory (compressing older turns into summaries via LLM calls), token-budget management (dynamically adjusting retained history based on token counts), and hybrid strategies that combine recent messages with summarized history and selectively retrieved past exchanges via embedding similarity.',
      ar: 'تشمل الذاكرة الحوارية تقنيات لإدارة تاريخ الحوار ضمن نافذة السياق المحدودة لنموذج اللغة. تتضمن الأساليب الرئيسية: النافذة المنزلقة (الاحتفاظ بآخر N دور)، والذاكرة القائمة على التلخيص (ضغط الأدوار القديمة إلى ملخصات عبر استدعاءات نموذج اللغة)، وإدارة ميزانية الرموز (تعديل التاريخ المحتفظ به ديناميكياً بناءً على عدد الرموز)، والاستراتيجيات الهجينة التي تجمع بين الرسائل الحديثة والتاريخ الملخص والتبادلات المسترجعة انتقائياً عبر تشابه التضمين.',
    },
    analogy: {
      en: 'Imagine you are having a long phone call that has been going on for hours. You cannot remember every single word that was said. Instead, you remember the last few minutes clearly (sliding window), have a general sense of the main topics discussed earlier (summarization), and can recall specific important moments if prompted (selective retrieval). Conversational memory strategies work the same way — they help the agent manage a long conversation without forgetting what matters.',
      ar: 'تخيل أنك تجري مكالمة هاتفية طويلة استمرت لساعات. لا يمكنك تذكر كل كلمة قيلت. بدلاً من ذلك، تتذكر الدقائق الأخيرة بوضوح (النافذة المنزلقة)، ولديك إحساس عام بالمواضيع الرئيسية التي نوقشت سابقاً (التلخيص)، ويمكنك تذكر لحظات مهمة محددة إذا طُلب منك ذلك (الاسترجاع الانتقائي). تعمل استراتيجيات الذاكرة الحوارية بنفس الطريقة — فهي تساعد الوكيل على إدارة محادثة طويلة دون نسيان ما يهم.',
    },
    explanation: {
      en: [
        'The simplest approach is the sliding window strategy. The agent keeps only the last N messages (or last K tokens) in its context. Older messages are dropped entirely. This is easy to implement and keeps costs predictable, but it means the agent completely forgets earlier conversation context once messages scroll out of the window.',
        'Summarization-based memory improves on the sliding window by condensing older messages into a running summary. When the conversation exceeds a token threshold, the oldest messages are summarized by an LLM call and replaced with that summary. The agent then sees: [summary of earlier conversation] + [recent messages]. This preserves the gist of the full conversation at lower token cost.',
        'The hybrid strategy combines the best of both worlds. It maintains a concise summary of the overall conversation, keeps recent messages in full, and optionally retrieves specific past exchanges that are semantically relevant to the current query. This provides both breadth (summary) and depth (recent + retrieved context).',
        'Token budget management is essential for all strategies. The agent must track how many tokens are used by the system prompt, memory context, and current messages, then allocate the remaining budget appropriately. Going over the limit causes errors or truncation; using too little wastes available context.',
        'Implementation considerations include deciding when to trigger summarization (every N turns, when token count exceeds threshold), how to handle multi-turn tool calls within the conversation history, and whether to store the full conversation externally for later retrieval even when it is trimmed from the active context.',
      ],
      ar: [
        'أبسط نهج هو استراتيجية النافذة المنزلقة. يحتفظ الوكيل فقط بآخر N رسالة (أو آخر K رمز) في سياقه. يتم حذف الرسائل القديمة بالكامل. هذا سهل التنفيذ ويبقي التكاليف متوقعة، لكنه يعني أن الوكيل ينسى تماماً سياق المحادثة السابق بمجرد خروج الرسائل من النافذة.',
        'تحسن الذاكرة القائمة على التلخيص النافذة المنزلقة عن طريق تكثيف الرسائل القديمة في ملخص مستمر. عندما تتجاوز المحادثة حداً معيناً من الرموز، يتم تلخيص أقدم الرسائل باستدعاء نموذج اللغة واستبدالها بذلك الملخص. يرى الوكيل بعدها: [ملخص المحادثة السابقة] + [الرسائل الحديثة]. هذا يحافظ على جوهر المحادثة الكاملة بتكلفة رموز أقل.',
        'تجمع الاستراتيجية الهجينة بين أفضل ما في النهجين. تحافظ على ملخص موجز للمحادثة الشاملة، وتحتفظ بالرسائل الحديثة بالكامل، واختيارياً تسترجع تبادلات سابقة محددة ذات صلة دلالية بالاستعلام الحالي. هذا يوفر كلاً من الاتساع (الملخص) والعمق (السياق الحديث + المسترجع).',
        'إدارة ميزانية الرموز ضرورية لجميع الاستراتيجيات. يجب على الوكيل تتبع عدد الرموز المستخدمة بواسطة أوامر النظام وسياق الذاكرة والرسائل الحالية، ثم تخصيص الميزانية المتبقية بشكل مناسب. تجاوز الحد يسبب أخطاء أو اقتطاع؛ واستخدام أقل مما يجب يهدر السياق المتاح.',
        'تتضمن اعتبارات التنفيذ تحديد متى يتم تشغيل التلخيص (كل N دور، عندما يتجاوز عدد الرموز الحد)، وكيفية التعامل مع استدعاءات الأدوات متعددة الأدوار ضمن تاريخ المحادثة، وما إذا كان يجب تخزين المحادثة الكاملة خارجياً للاسترجاع اللاحق حتى عند اقتطاعها من السياق النشط.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import openai

client = openai.OpenAI()

class ConversationalMemory:
    def __init__(self, max_recent: int = 10, max_tokens: int = 3000):
        self.full_history: list[dict] = []
        self.summary: str = ""
        self.max_recent = max_recent
        self.max_tokens = max_tokens

    def add_message(self, role: str, content: str):
        self.full_history.append({"role": role, "content": content})
        if len(self.full_history) > self.max_recent:
            self._summarize_old_messages()

    def _summarize_old_messages(self):
        """Compress older messages into a running summary."""
        old_msgs = self.full_history[:-self.max_recent]
        old_text = "\\n".join(f"{m['role']}: {m['content']}" for m in old_msgs)
        prompt = f"Previous summary: {self.summary}\\nNew messages:\\n{old_text}"
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "Summarize this conversation concisely."},
                {"role": "user", "content": prompt}
            ]
        )
        self.summary = response.choices[0].message.content
        self.full_history = self.full_history[-self.max_recent:]

    def get_context(self) -> list[dict]:
        """Build context: system prompt + summary + recent messages."""
        context = [{"role": "system", "content": "You are a helpful assistant."}]
        if self.summary:
            context.append({"role": "system",
                "content": f"Conversation summary so far: {self.summary}"})
        context.extend(self.full_history[-self.max_recent:])
        return context

# Usage
memory = ConversationalMemory(max_recent=6)
memory.add_message("user", "My name is Ahmad and I work at Sygma.")
memory.add_message("assistant", "Hello Ahmad! How can I help you today?")
memory.add_message("user", "I need help with our Python API.")
context = memory.get_context()
print(f"Context has {len(context)} messages, summary: {memory.summary[:80]}...")`,
      description: {
        en: 'A hybrid conversational memory implementation that combines a sliding window of recent messages with LLM-generated summaries of older conversation history.',
        ar: 'تنفيذ ذاكرة حوارية هجينة تجمع بين نافذة منزلقة من الرسائل الحديثة وملخصات مولدة بنموذج اللغة لتاريخ المحادثة الأقدم.',
      },
    },
    commonMistakes: {
      en: [
        'Using only a sliding window without any summarization, causing the agent to completely forget critical context from earlier in long conversations.',
        'Summarizing too aggressively — compressing important details into vague summaries that lose key information the agent needs later.',
        'Not accounting for token costs of the summary itself, which can grow large over very long conversations and crowd out recent messages.',
        'Failing to preserve tool call results in the conversation history, leading to the agent repeating tool calls it already made.',
      ],
      ar: [
        'استخدام نافذة منزلقة فقط بدون أي تلخيص، مما يجعل الوكيل ينسى تماماً السياق الحرج من وقت سابق في المحادثات الطويلة.',
        'التلخيص بشكل مفرط — ضغط التفاصيل المهمة في ملخصات غامضة تفقد المعلومات الأساسية التي يحتاجها الوكيل لاحقاً.',
        'عدم حساب تكلفة الرموز للملخص نفسه، الذي يمكن أن يكبر عبر المحادثات الطويلة جداً ويزاحم الرسائل الحديثة.',
        'الفشل في الحفاظ على نتائج استدعاءات الأدوات في تاريخ المحادثة، مما يؤدي إلى تكرار الوكيل لاستدعاءات الأدوات التي قام بها بالفعل.',
      ],
    },
    bestPractices: {
      en: [
        'Use a hybrid approach: keep recent messages in full, maintain a running summary, and enable retrieval of specific past exchanges when needed.',
        'Set clear token budgets for each component: system prompt, summary, recent messages, and retrieved context, ensuring they fit within the model limit.',
        'Trigger summarization based on token count thresholds rather than fixed message counts, since message lengths vary significantly.',
        'Store the full uncompressed conversation history externally (database or file) even when compressing it for the context window, enabling later analysis.',
        'Include key entities (names, numbers, decisions) explicitly in summaries to prevent loss of critical details during compression.',
      ],
      ar: [
        'استخدم نهجاً هجيناً: احتفظ بالرسائل الحديثة بالكامل، وحافظ على ملخص مستمر، ومكّن استرجاع تبادلات سابقة محددة عند الحاجة.',
        'حدد ميزانيات رموز واضحة لكل مكون: أوامر النظام، الملخص، الرسائل الحديثة، والسياق المسترجع، لضمان ملاءمتها ضمن حد النموذج.',
        'شغّل التلخيص بناءً على عتبات عدد الرموز بدلاً من عدد الرسائل الثابت، لأن أطوال الرسائل تتفاوت بشكل كبير.',
        'خزّن تاريخ المحادثة الكامل غير المضغوط خارجياً (قاعدة بيانات أو ملف) حتى عند ضغطه لنافذة السياق، مما يتيح التحليل اللاحق.',
        'أدرج الكيانات الرئيسية (الأسماء، الأرقام، القرارات) بشكل صريح في الملخصات لمنع فقدان التفاصيل الحرجة أثناء الضغط.',
      ],
    },
    references: [
      { title: 'LangChain Conversation Memory', url: 'https://python.langchain.com/docs/modules/memory/' },
      { title: 'MemGPT: Towards LLMs as Operating Systems', url: 'https://arxiv.org/abs/2310.08560' },
      { title: 'Conversation Buffer vs Summary Memory', url: 'https://www.pinecone.io/learn/series/langchain/langchain-conversational-memory/' },
    ],
    quiz: [
      {
        id: 'convmem-q1',
        question: {
          en: 'What is the main limitation of a pure sliding window memory strategy?',
          ar: 'ما هو القيد الرئيسي لاستراتيجية ذاكرة النافذة المنزلقة البحتة؟',
        },
        options: {
          en: ['It is too expensive', 'It completely forgets context outside the window', 'It requires a vector database', 'It only works with GPT-4'],
          ar: ['إنها مكلفة جداً', 'تنسى تماماً السياق خارج النافذة', 'تتطلب قاعدة بيانات متجهية', 'تعمل فقط مع GPT-4'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A pure sliding window keeps only the N most recent messages and completely discards older ones, meaning the agent loses all context from earlier in the conversation.',
          ar: 'تحتفظ النافذة المنزلقة البحتة فقط بآخر N رسالة وتتخلص تماماً من الأقدم، مما يعني أن الوكيل يفقد كل السياق من وقت سابق في المحادثة.',
        },
      },
      {
        id: 'convmem-q2',
        question: {
          en: 'In a hybrid memory strategy, what are the three main components?',
          ar: 'في استراتيجية الذاكرة الهجينة، ما هي المكونات الثلاثة الرئيسية؟',
        },
        options: {
          en: ['Database, cache, and queue', 'Summary, recent messages, and retrieved context', 'Embeddings, keywords, and timestamps', 'Input, processing, and output buffers'],
          ar: ['قاعدة البيانات والذاكرة المؤقتة والطابور', 'الملخص والرسائل الحديثة والسياق المسترجع', 'التضمينات والكلمات المفتاحية والطوابع الزمنية', 'مخازن الإدخال والمعالجة والإخراج'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A hybrid strategy combines a running summary of the full conversation, recent messages kept in full detail, and selectively retrieved past exchanges that are relevant to the current query.',
          ar: 'تجمع الاستراتيجية الهجينة بين ملخص مستمر للمحادثة الكاملة، والرسائل الحديثة المحتفظ بها بتفاصيلها الكاملة، والتبادلات السابقة المسترجعة انتقائياً ذات الصلة بالاستعلام الحالي.',
        },
      },
      {
        id: 'convmem-q3',
        question: {
          en: 'When should summarization be triggered in a conversation memory system?',
          ar: 'متى يجب تشغيل التلخيص في نظام الذاكرة الحوارية؟',
        },
        options: {
          en: ['After every single message', 'Only at the end of the conversation', 'When token count exceeds a threshold', 'Every 24 hours'],
          ar: ['بعد كل رسالة فردية', 'فقط في نهاية المحادثة', 'عندما يتجاوز عدد الرموز حداً معيناً', 'كل 24 ساعة'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Summarization should be triggered based on token count thresholds rather than fixed message counts, since message lengths vary and the goal is to stay within the context window budget.',
          ar: 'يجب تشغيل التلخيص بناءً على عتبات عدد الرموز بدلاً من عدد الرسائل الثابت، لأن أطوال الرسائل تتفاوت والهدف هو البقاء ضمن ميزانية نافذة السياق.',
        },
      },
    ],
  },

  'long-term-memory-strategies': {
    beginnerDefinition: {
      en: 'Long-term memory strategies are techniques that help AI agents remember important information across multiple conversations and sessions. They include deciding what to remember and what to forget, strengthening important memories over time, and efficiently finding old memories when they become relevant again.',
      ar: 'استراتيجيات الذاكرة طويلة المدى هي تقنيات تساعد وكلاء الذكاء الاصطناعي على تذكر المعلومات المهمة عبر محادثات وجلسات متعددة. تتضمن تحديد ما يجب تذكره وما يجب نسيانه، وتعزيز الذكريات المهمة بمرور الوقت، وإيجاد الذكريات القديمة بكفاءة عندما تصبح ذات صلة مرة أخرى.',
    },
    technicalDefinition: {
      en: 'Long-term memory strategies for AI agents encompass memory consolidation (merging related memories into coherent knowledge units), importance-based retention (scoring memories by relevance, recency, and access frequency to determine retention priority), temporal decay and forgetting curves (applying exponential or power-law decay to reduce retrieval probability of stale memories), and cross-session retrieval (indexing and querying memories across session boundaries using embedding similarity, metadata filters, and recency weighting).',
      ar: 'تشمل استراتيجيات الذاكرة طويلة المدى لوكلاء الذكاء الاصطناعي توحيد الذاكرة (دمج الذكريات المرتبطة في وحدات معرفية متماسكة)، والاحتفاظ القائم على الأهمية (تقييم الذكريات بالصلة والحداثة وتكرار الوصول لتحديد أولوية الاحتفاظ)، والتلاشي الزمني ومنحنيات النسيان (تطبيق تلاشٍ أسي أو قانون قوة لتقليل احتمالية استرجاع الذكريات القديمة)، والاسترجاع عبر الجلسات (فهرسة واستعلام الذكريات عبر حدود الجلسات باستخدام تشابه التضمين ومرشحات البيانات الوصفية وترجيح الحداثة).',
    },
    analogy: {
      en: 'Think of how your own brain handles long-term memory. You do not remember every meal you ate, but you remember your wedding dinner. Important events get "consolidated" — replayed and strengthened during sleep. Rarely accessed memories fade over time (when was the last time you thought about a random Tuesday in 2019?). And when someone mentions a topic, related memories suddenly surface. AI agent long-term memory works on the same principles: consolidate, prioritize, let unimportant things fade, and retrieve by association.',
      ar: 'فكر في كيفية تعامل دماغك مع الذاكرة طويلة المدى. أنت لا تتذكر كل وجبة أكلتها، لكنك تتذكر عشاء زفافك. الأحداث المهمة يتم "توحيدها" — إعادة تشغيلها وتعزيزها أثناء النوم. الذكريات نادرة الوصول تتلاشى بمرور الوقت (متى كانت آخر مرة فكرت فيها بثلاثاء عشوائي في 2019؟). وعندما يذكر شخص موضوعاً، تظهر ذكريات مرتبطة فجأة. تعمل ذاكرة وكيل الذكاء الاصطناعي طويلة المدى على نفس المبادئ: توحيد، ترتيب الأولويات، ترك الأشياء غير المهمة تتلاشى، والاسترجاع بالترابط.',
    },
    explanation: {
      en: [
        'Memory consolidation is the process of merging related memories into more compact, coherent representations. Instead of storing 50 separate memories about a user\'s coding preferences, the agent consolidates them into a single comprehensive profile: "User prefers Python, uses type hints, follows PEP 8, prefers functional patterns." This reduces storage and retrieval costs while preserving essential information.',
        'Importance-based retention assigns a score to each memory based on multiple factors: semantic relevance to the agent\'s purpose, emotional significance (was this a critical success or failure?), access frequency (how often is this memory retrieved?), and recency. Memories with higher importance scores are retained longer and retrieved preferentially.',
        'Decay and forgetting mechanisms prevent memory systems from growing without bound. Inspired by Ebbinghaus\'s forgetting curve, each memory\'s retrieval probability decreases over time unless it is accessed again. This can be implemented as an exponential decay function: score = base_importance * exp(-decay_rate * time_since_last_access). Memories below a threshold are archived or deleted.',
        'Cross-session retrieval allows agents to access memories from previous conversations. This requires persistent storage (databases, vector stores) with proper indexing. When a new session starts, the agent can query its memory store for relevant past interactions, user preferences, and learned knowledge to provide continuity.',
        'The interplay between these strategies creates an efficient memory ecosystem. New memories enter with moderate importance, get consolidated with related memories, are strengthened each time they are accessed, and gradually fade if never retrieved. This mirrors the spacing effect in human memory — repeated, spaced retrieval strengthens long-term retention.',
        'Practical implementation often uses a tiered architecture: hot memories (recent, frequently accessed) in fast storage like Redis, warm memories (moderate importance) in a vector database, and cold memories (old, rarely accessed) in archival storage. Periodic maintenance jobs handle consolidation and cleanup.',
      ],
      ar: [
        'توحيد الذاكرة هو عملية دمج الذكريات المرتبطة في تمثيلات أكثر إيجازاً وتماسكاً. بدلاً من تخزين 50 ذاكرة منفصلة حول تفضيلات المستخدم البرمجية، يوحدها الوكيل في ملف شامل واحد: "المستخدم يفضل Python، يستخدم تلميحات الأنواع، يتبع PEP 8، يفضل الأنماط الوظيفية." هذا يقلل تكاليف التخزين والاسترجاع مع الحفاظ على المعلومات الأساسية.',
        'يعين الاحتفاظ القائم على الأهمية درجة لكل ذاكرة بناءً على عوامل متعددة: الصلة الدلالية بغرض الوكيل، والأهمية العاطفية (هل كان هذا نجاحاً أو فشلاً حرجاً؟)، وتكرار الوصول (كم مرة يتم استرجاع هذه الذاكرة؟)، والحداثة. الذكريات ذات درجات الأهمية الأعلى يتم الاحتفاظ بها لفترة أطول واسترجاعها بشكل تفضيلي.',
        'تمنع آليات التلاشي والنسيان أنظمة الذاكرة من النمو بلا حدود. مستوحاة من منحنى النسيان لإبنغهاوس، تنخفض احتمالية استرجاع كل ذاكرة بمرور الوقت ما لم يتم الوصول إليها مرة أخرى. يمكن تنفيذ ذلك كدالة تلاشي أسية: score = base_importance * exp(-decay_rate * time_since_last_access). الذكريات التي تقل عن الحد يتم أرشفتها أو حذفها.',
        'يتيح الاسترجاع عبر الجلسات للوكلاء الوصول إلى ذكريات من محادثات سابقة. يتطلب هذا تخزيناً دائماً (قواعد بيانات، مخازن متجهات) مع فهرسة مناسبة. عند بدء جلسة جديدة، يمكن للوكيل الاستعلام عن مخزن ذاكرته للتفاعلات السابقة ذات الصلة وتفضيلات المستخدم والمعرفة المتعلمة لتوفير الاستمرارية.',
        'يخلق التفاعل بين هذه الاستراتيجيات نظاماً بيئياً فعالاً للذاكرة. تدخل الذكريات الجديدة بأهمية معتدلة، ويتم توحيدها مع الذكريات المرتبطة، وتتعزز في كل مرة يتم الوصول إليها، وتتلاشى تدريجياً إذا لم يتم استرجاعها أبداً. هذا يحاكي تأثير التباعد في الذاكرة البشرية — الاسترجاع المتكرر والمتباعد يعزز الاحتفاظ طويل المدى.',
        'غالباً ما يستخدم التنفيذ العملي بنية متدرجة: ذكريات ساخنة (حديثة، كثيرة الوصول) في تخزين سريع مثل Redis، وذكريات دافئة (أهمية معتدلة) في قاعدة بيانات متجهية، وذكريات باردة (قديمة، نادرة الوصول) في تخزين أرشيفي. تتعامل مهام الصيانة الدورية مع التوحيد والتنظيف.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import math
import time
from dataclasses import dataclass, field

@dataclass
class Memory:
    content: str
    importance: float = 0.5
    created_at: float = field(default_factory=time.time)
    last_accessed: float = field(default_factory=time.time)
    access_count: int = 0
    tags: list[str] = field(default_factory=list)

class LongTermMemoryStore:
    def __init__(self, decay_rate: float = 0.01, threshold: float = 0.1):
        self.memories: list[Memory] = []
        self.decay_rate = decay_rate
        self.threshold = threshold

    def store(self, content: str, importance: float = 0.5, tags: list[str] = None):
        self.memories.append(Memory(
            content=content, importance=importance, tags=tags or []
        ))

    def retrieve(self, query: str, top_k: int = 5) -> list[Memory]:
        """Retrieve memories ranked by decayed importance and relevance."""
        scored = []
        now = time.time()
        for mem in self.memories:
            time_elapsed = (now - mem.last_accessed) / 3600  # hours
            decay = math.exp(-self.decay_rate * time_elapsed)
            recency_boost = 1.0 / (1.0 + time_elapsed)
            relevance = 1.0 if query.lower() in mem.content.lower() else 0.3
            score = mem.importance * decay * relevance + recency_boost * 0.1
            scored.append((score, mem))
        scored.sort(key=lambda x: x[0], reverse=True)
        # Update access metadata for retrieved memories
        for score, mem in scored[:top_k]:
            mem.last_accessed = now
            mem.access_count += 1
        return [mem for _, mem in scored[:top_k]]

    def consolidate(self):
        """Merge memories with shared tags into summaries."""
        from collections import defaultdict
        tag_groups = defaultdict(list)
        for mem in self.memories:
            for tag in mem.tags:
                tag_groups[tag].append(mem)
        for tag, group in tag_groups.items():
            if len(group) >= 3:
                combined = "; ".join(m.content for m in group)
                max_imp = max(m.importance for m in group)
                for m in group:
                    self.memories.remove(m)
                self.store(f"[Consolidated - {tag}] {combined}", max_imp, [tag])

    def forget(self):
        """Remove memories below the importance threshold."""
        now = time.time()
        self.memories = [
            m for m in self.memories
            if m.importance * math.exp(-self.decay_rate * (now - m.last_accessed) / 3600) > self.threshold
        ]

store = LongTermMemoryStore()
store.store("User prefers dark mode", importance=0.7, tags=["preferences"])
store.store("Deployed v2.1 successfully", importance=0.9, tags=["deployments"])
results = store.retrieve("deployment")
print(f"Found {len(results)} relevant memories")`,
      description: {
        en: 'A long-term memory store with importance scoring, exponential decay, consolidation, and forgetting mechanisms for persistent agent memory.',
        ar: 'مخزن ذاكرة طويلة المدى مع تقييم الأهمية والتلاشي الأسي والتوحيد وآليات النسيان لذاكرة الوكيل الدائمة.',
      },
    },
    commonMistakes: {
      en: [
        'Never implementing any forgetting mechanism, leading to unbounded memory growth that degrades retrieval quality and increases costs.',
        'Using only recency for memory scoring — old but critically important memories (like user preferences) should not decay just because time has passed.',
        'Consolidating memories too aggressively, losing nuanced details that might be important for specific future queries.',
        'Not indexing memories properly for cross-session retrieval, making it expensive to search through large memory stores.',
      ],
      ar: [
        'عدم تنفيذ أي آلية نسيان أبداً، مما يؤدي إلى نمو غير محدود للذاكرة يُضعف جودة الاسترجاع ويزيد التكاليف.',
        'استخدام الحداثة فقط لتقييم الذاكرة — الذكريات القديمة ولكن الحرجة (مثل تفضيلات المستخدم) لا يجب أن تتلاشى فقط لأن الوقت قد مر.',
        'توحيد الذكريات بشكل مفرط، مما يفقد التفاصيل الدقيقة التي قد تكون مهمة لاستعلامات مستقبلية محددة.',
        'عدم فهرسة الذكريات بشكل صحيح للاسترجاع عبر الجلسات، مما يجعل البحث في مخازن الذاكرة الكبيرة مكلفاً.',
      ],
    },
    bestPractices: {
      en: [
        'Combine multiple signals for importance scoring: semantic relevance, access frequency, recency, and explicit user feedback.',
        'Implement tiered storage (hot/warm/cold) to balance retrieval speed with storage costs for different memory access patterns.',
        'Run periodic consolidation jobs that merge related memories while preserving key details and updating importance scores.',
        'Apply different decay rates for different memory categories — user preferences should decay much slower than transient task details.',
        'Always maintain a separate, immutable audit log of all memories for debugging and compliance, even when active memories are consolidated or forgotten.',
      ],
      ar: [
        'اجمع إشارات متعددة لتقييم الأهمية: الصلة الدلالية، وتكرار الوصول، والحداثة، وملاحظات المستخدم الصريحة.',
        'نفذ تخزيناً متدرجاً (ساخن/دافئ/بارد) لتحقيق التوازن بين سرعة الاسترجاع وتكاليف التخزين لأنماط وصول الذاكرة المختلفة.',
        'شغّل مهام توحيد دورية تدمج الذكريات المرتبطة مع الحفاظ على التفاصيل الرئيسية وتحديث درجات الأهمية.',
        'طبق معدلات تلاشٍ مختلفة لفئات ذاكرة مختلفة — تفضيلات المستخدم يجب أن تتلاشى أبطأ بكثير من تفاصيل المهام المؤقتة.',
        'احتفظ دائماً بسجل تدقيق منفصل وغير قابل للتغيير لجميع الذكريات لأغراض التصحيح والامتثال، حتى عند توحيد الذكريات النشطة أو نسيانها.',
      ],
    },
    references: [
      { title: 'Generative Agents: Interactive Simulacra of Human Behavior', url: 'https://arxiv.org/abs/2304.03442' },
      { title: 'Ebbinghaus Forgetting Curve and Spaced Repetition', url: 'https://en.wikipedia.org/wiki/Forgetting_curve' },
      { title: 'Memory Management in LLM-powered Agents', url: 'https://arxiv.org/abs/2404.13501' },
    ],
    quiz: [
      {
        id: 'ltmem-q1',
        question: {
          en: 'What is the purpose of memory consolidation in AI agents?',
          ar: 'ما هو الغرض من توحيد الذاكرة في وكلاء الذكاء الاصطناعي؟',
        },
        options: {
          en: ['To delete all old memories', 'To merge related memories into compact, coherent representations', 'To encrypt memories for security', 'To convert memories to a different format'],
          ar: ['حذف جميع الذكريات القديمة', 'دمج الذكريات المرتبطة في تمثيلات مدمجة ومتماسكة', 'تشفير الذكريات للأمان', 'تحويل الذكريات إلى تنسيق مختلف'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Memory consolidation merges related memories into more compact representations, reducing storage and retrieval costs while preserving essential information.',
          ar: 'يدمج توحيد الذاكرة الذكريات المرتبطة في تمثيلات أكثر إيجازاً، مما يقلل تكاليف التخزين والاسترجاع مع الحفاظ على المعلومات الأساسية.',
        },
      },
      {
        id: 'ltmem-q2',
        question: {
          en: 'What mathematical function is commonly used to model memory decay over time?',
          ar: 'ما الدالة الرياضية المستخدمة عادةً لنمذجة تلاشي الذاكرة بمرور الوقت؟',
        },
        options: {
          en: ['Linear function', 'Logarithmic function', 'Exponential decay function', 'Step function'],
          ar: ['دالة خطية', 'دالة لوغاريتمية', 'دالة تلاشي أسية', 'دالة خطوية'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Exponential decay (inspired by Ebbinghaus\'s forgetting curve) is the standard model: score = importance * exp(-decay_rate * time). Memories fade faster initially and then more slowly over time.',
          ar: 'التلاشي الأسي (المستوحى من منحنى النسيان لإبنغهاوس) هو النموذج المعياري: score = importance * exp(-decay_rate * time). تتلاشى الذكريات أسرع في البداية ثم بشكل أبطأ بمرور الوقت.',
        },
      },
      {
        id: 'ltmem-q3',
        question: {
          en: 'In a tiered memory architecture, what characterizes "hot" memories?',
          ar: 'في بنية الذاكرة المتدرجة، ما الذي يميز الذكريات "الساخنة"؟',
        },
        options: {
          en: ['They are archived and rarely needed', 'They are encrypted for security', 'They are recent and frequently accessed', 'They have the lowest importance scores'],
          ar: ['إنها مؤرشفة ونادراً ما تكون مطلوبة', 'إنها مشفرة للأمان', 'إنها حديثة وكثيرة الوصول', 'لديها أدنى درجات أهمية'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Hot memories are recent and frequently accessed, stored in fast storage like Redis for quick retrieval. They represent the most actively used knowledge.',
          ar: 'الذكريات الساخنة هي الحديثة وكثيرة الوصول، مخزنة في تخزين سريع مثل Redis للاسترجاع السريع. تمثل المعرفة الأكثر استخداماً بنشاط.',
        },
      },
    ],
  },

  'tool-use-pattern': {
    beginnerDefinition: {
      en: 'The tool use pattern teaches AI agents how to select the right tool for a job, chain multiple tools together to complete complex tasks, and handle situations when tools fail. It is like teaching a handyman not just to use a hammer, but to know when to use a screwdriver instead, and what to do when a tool breaks.',
      ar: 'يعلّم نمط استخدام الأدوات وكلاء الذكاء الاصطناعي كيفية اختيار الأداة المناسبة للمهمة، وربط أدوات متعددة معاً لإكمال مهام معقدة، والتعامل مع المواقف عندما تفشل الأدوات. إنه مثل تعليم عامل ماهر ليس فقط استخدام المطرقة، بل معرفة متى يستخدم مفك البراغي بدلاً منها، وماذا يفعل عندما تتعطل أداة.',
    },
    technicalDefinition: {
      en: 'The tool use pattern encompasses strategic tool selection via function calling or tool-use APIs, tool chaining (composing sequential tool calls where outputs feed into subsequent inputs), parallel tool execution for independent sub-tasks, error handling with retry logic and fallback strategies, and tool result validation. The LLM acts as an orchestrator that decides which tools to invoke, in what order, with what parameters, based on the current goal and available context.',
      ar: 'يشمل نمط استخدام الأدوات الاختيار الاستراتيجي للأدوات عبر استدعاء الوظائف أو واجهات استخدام الأدوات، وسلسلة الأدوات (تركيب استدعاءات أدوات متتالية حيث تغذي المخرجات المدخلات اللاحقة)، والتنفيذ المتوازي للأدوات للمهام الفرعية المستقلة، ومعالجة الأخطاء مع منطق إعادة المحاولة واستراتيجيات الاحتياط، والتحقق من نتائج الأدوات. يعمل نموذج اللغة كمنسق يقرر أي الأدوات يستدعي، وبأي ترتيب، وبأي معاملات، بناءً على الهدف الحالي والسياق المتاح.',
    },
    analogy: {
      en: 'Imagine a chef preparing a complex meal. They do not just randomly grab kitchen tools — they strategically select a knife for chopping, then a pan for sauteing, then an oven for baking, chaining these tools in the right order. If the oven breaks, they adapt and use the stovetop instead. If a dish burns, they re-make it rather than serving it burnt. An AI agent\'s tool use works the same way: select, chain, adapt, and recover.',
      ar: 'تخيل طاهياً يحضر وجبة معقدة. لا يمسك أدوات المطبخ عشوائياً — بل يختار بشكل استراتيجي سكيناً للتقطيع، ثم مقلاة للقلي، ثم فرناً للخبز، مع ربط هذه الأدوات بالترتيب الصحيح. إذا تعطل الفرن، يتكيف ويستخدم الموقد بدلاً منه. إذا احترق طبق، يعيد صنعه بدلاً من تقديمه محترقاً. استخدام الأدوات في وكيل الذكاء الاصطناعي يعمل بنفس الطريقة: اختيار، ربط، تكيف، واستعادة.',
    },
    explanation: {
      en: [
        'Tool selection is the first critical decision. The agent must match the user\'s intent to the right tool from its available toolkit. This requires clear tool descriptions, well-defined parameter schemas, and sometimes disambiguation when multiple tools could handle a request. Good tool descriptions dramatically improve selection accuracy.',
        'Tool chaining enables complex workflows. For example, to answer "What is the weather in the city where Apple is headquartered?", the agent must first search for Apple\'s headquarters (tool 1), extract the city name from the result, then query a weather API with that city (tool 2). The output of one tool becomes the input for the next.',
        'Parallel tool execution optimizes performance. When sub-tasks are independent — like fetching weather for three different cities — the agent can invoke all three API calls simultaneously rather than sequentially. Many LLM APIs support parallel tool calls in a single response.',
        'Error handling and retries are essential for robust agents. Tools can fail due to network issues, rate limits, invalid parameters, or unexpected responses. A well-designed agent implements retry with exponential backoff, fallback to alternative tools, graceful degradation (providing partial results), and clear error communication to the user.',
        'Tool result validation ensures the agent does not blindly trust tool outputs. The agent should verify that results are in the expected format, contain reasonable values, and actually answer the original question. If a tool returns unexpected data, the agent should re-query or try a different approach.',
        'Security considerations are paramount. Agents must validate tool parameters to prevent injection attacks, enforce rate limits to avoid abuse, sandbox code execution tools, and never expose sensitive credentials through tool calls.',
      ],
      ar: [
        'اختيار الأدوات هو القرار الحرج الأول. يجب على الوكيل مطابقة نية المستخدم مع الأداة الصحيحة من مجموعة أدواته المتاحة. يتطلب هذا أوصاف أدوات واضحة، ومخططات معاملات محددة جيداً، وأحياناً توضيح عندما يمكن لأدوات متعددة التعامل مع طلب. أوصاف الأدوات الجيدة تحسن دقة الاختيار بشكل كبير.',
        'تمكّن سلسلة الأدوات من سير العمل المعقد. على سبيل المثال، للإجابة عن "ما هو الطقس في المدينة التي يقع فيها مقر Apple؟"، يجب على الوكيل أولاً البحث عن مقر Apple (أداة 1)، واستخراج اسم المدينة من النتيجة، ثم الاستعلام عن واجهة الطقس بتلك المدينة (أداة 2). مخرجات أداة واحدة تصبح مدخلات للتالية.',
        'يحسن التنفيذ المتوازي للأدوات الأداء. عندما تكون المهام الفرعية مستقلة — مثل جلب الطقس لثلاث مدن مختلفة — يمكن للوكيل استدعاء جميع استدعاءات API الثلاثة في وقت واحد بدلاً من التتابع. تدعم العديد من واجهات نماذج اللغة استدعاءات الأدوات المتوازية في استجابة واحدة.',
        'معالجة الأخطاء وإعادة المحاولة ضرورية للوكلاء القوية. يمكن أن تفشل الأدوات بسبب مشاكل الشبكة أو حدود المعدل أو المعاملات غير الصالحة أو الاستجابات غير المتوقعة. الوكيل المصمم جيداً ينفذ إعادة المحاولة مع تراجع أسي، واحتياطي لأدوات بديلة، وتدهور أنيق (تقديم نتائج جزئية)، وتوصيل واضح للأخطاء للمستخدم.',
        'يضمن التحقق من نتائج الأدوات أن الوكيل لا يثق بشكل أعمى بمخرجات الأدوات. يجب على الوكيل التحقق من أن النتائج بالتنسيق المتوقع، وتحتوي على قيم معقولة، وتجيب فعلاً على السؤال الأصلي. إذا أعادت أداة بيانات غير متوقعة، يجب على الوكيل إعادة الاستعلام أو تجربة نهج مختلف.',
        'اعتبارات الأمان ذات أهمية قصوى. يجب على الوكلاء التحقق من معاملات الأدوات لمنع هجمات الحقن، وفرض حدود المعدل لتجنب إساءة الاستخدام، وعزل أدوات تنفيذ الأكواد، وعدم كشف بيانات الاعتماد الحساسة أبداً من خلال استدعاءات الأدوات.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import time
import random

class ToolRegistry:
    def __init__(self):
        self.tools = {}

    def register(self, name: str, func, description: str, retries: int = 2):
        self.tools[name] = {"func": func, "desc": description, "retries": retries}

    def call(self, name: str, **kwargs) -> dict:
        tool = self.tools.get(name)
        if not tool:
            return {"error": f"Tool '{name}' not found"}
        for attempt in range(tool["retries"] + 1):
            try:
                result = tool["func"](**kwargs)
                return {"success": True, "result": result}
            except Exception as e:
                if attempt < tool["retries"]:
                    wait = 2 ** attempt + random.random()
                    print(f"Tool '{name}' failed (attempt {attempt+1}), retrying in {wait:.1f}s")
                    time.sleep(wait)
                else:
                    return {"success": False, "error": str(e)}

    def list_tools(self) -> list[dict]:
        return [{"name": n, "description": t["desc"]} for n, t in self.tools.items()]

# Define tools
def search_web(query: str) -> str:
    return f"Search results for: {query}"

def get_weather(city: str) -> dict:
    return {"city": city, "temp": 22, "condition": "Sunny"}

def send_email(to: str, subject: str, body: str) -> str:
    return f"Email sent to {to}"

# Setup
registry = ToolRegistry()
registry.register("search", search_web, "Search the web for information")
registry.register("weather", get_weather, "Get weather for a city")
registry.register("email", send_email, "Send an email")

# Tool chaining example: search -> weather -> email
search_result = registry.call("search", query="Apple headquarters location")
print(f"Step 1: {search_result}")

weather_result = registry.call("weather", city="Cupertino")
print(f"Step 2: {weather_result}")

email_result = registry.call("email",
    to="user@example.com",
    subject="Weather Update",
    body=f"Weather in Cupertino: {weather_result['result']}"
)
print(f"Step 3: {email_result}")`,
      description: {
        en: 'A tool registry with automatic retry logic, error handling, and a demonstration of tool chaining where the output of one tool feeds into the next.',
        ar: 'سجل أدوات مع منطق إعادة محاولة تلقائي ومعالجة أخطاء وعرض لسلسلة الأدوات حيث تغذي مخرجات أداة واحدة الأداة التالية.',
      },
    },
    commonMistakes: {
      en: [
        'Writing vague tool descriptions that confuse the LLM about when to use each tool, leading to incorrect tool selection.',
        'Not implementing any retry or fallback logic, causing the agent to fail completely when a single tool call encounters a transient error.',
        'Ignoring tool result validation — blindly inserting raw tool outputs into the response without checking for errors or unexpected formats.',
        'Allowing the agent to chain too many tool calls without a maximum depth limit, risking infinite loops or excessive API costs.',
      ],
      ar: [
        'كتابة أوصاف أدوات غامضة تربك نموذج اللغة حول متى يستخدم كل أداة، مما يؤدي إلى اختيار أدوات غير صحيح.',
        'عدم تنفيذ أي منطق إعادة محاولة أو احتياطي، مما يتسبب في فشل الوكيل بالكامل عند مواجهة خطأ مؤقت في استدعاء أداة واحدة.',
        'تجاهل التحقق من نتائج الأدوات — إدراج مخرجات الأدوات الخام بشكل أعمى في الاستجابة دون التحقق من الأخطاء أو التنسيقات غير المتوقعة.',
        'السماح للوكيل بسلسلة استدعاءات أدوات كثيرة جداً بدون حد أقصى للعمق، مما يخاطر بحلقات لا نهائية أو تكاليف API مفرطة.',
      ],
    },
    bestPractices: {
      en: [
        'Write detailed, specific tool descriptions with clear examples of when to use each tool and what parameters to provide.',
        'Implement exponential backoff with jitter for retries, and define fallback tools for critical operations.',
        'Validate tool results before using them — check return types, handle empty results, and verify data makes sense in context.',
        'Set a maximum tool call depth (e.g., 10 calls per request) to prevent infinite chains and control costs.',
        'Log all tool calls with inputs, outputs, and timing for debugging, monitoring, and optimization.',
      ],
      ar: [
        'اكتب أوصاف أدوات مفصلة ومحددة مع أمثلة واضحة لمتى تُستخدم كل أداة وما المعاملات المطلوبة.',
        'نفذ تراجعاً أسياً مع تذبذب لإعادة المحاولات، وحدد أدوات احتياطية للعمليات الحرجة.',
        'تحقق من نتائج الأدوات قبل استخدامها — تحقق من أنواع الإرجاع، وتعامل مع النتائج الفارغة، وتأكد من أن البيانات منطقية في السياق.',
        'حدد عمقاً أقصى لاستدعاءات الأدوات (مثل 10 استدعاءات لكل طلب) لمنع السلاسل اللانهائية والتحكم في التكاليف.',
        'سجل جميع استدعاءات الأدوات مع المدخلات والمخرجات والتوقيت للتصحيح والمراقبة والتحسين.',
      ],
    },
    references: [
      { title: 'OpenAI Function Calling Guide', url: 'https://platform.openai.com/docs/guides/function-calling' },
      { title: 'Anthropic Tool Use Documentation', url: 'https://docs.anthropic.com/en/docs/build-with-claude/tool-use' },
      { title: 'Toolformer: Language Models Can Teach Themselves to Use Tools', url: 'https://arxiv.org/abs/2302.04761' },
    ],
    quiz: [
      {
        id: 'tooluse-q1',
        question: {
          en: 'What is tool chaining in the context of AI agents?',
          ar: 'ما هي سلسلة الأدوات في سياق وكلاء الذكاء الاصطناعي؟',
        },
        options: {
          en: ['Using the same tool repeatedly', 'Composing sequential tool calls where outputs feed into subsequent inputs', 'Linking tools to a blockchain', 'Running all tools simultaneously'],
          ar: ['استخدام نفس الأداة بشكل متكرر', 'تركيب استدعاءات أدوات متتالية حيث تغذي المخرجات المدخلات اللاحقة', 'ربط الأدوات بسلسلة كتل', 'تشغيل جميع الأدوات في وقت واحد'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Tool chaining involves composing sequential tool calls where the output of one tool becomes the input for the next, enabling complex multi-step workflows.',
          ar: 'تتضمن سلسلة الأدوات تركيب استدعاءات أدوات متتالية حيث تصبح مخرجات أداة واحدة مدخلات للتالية، مما يمكّن من سير العمل المعقد متعدد الخطوات.',
        },
      },
      {
        id: 'tooluse-q2',
        question: {
          en: 'What retry strategy is recommended for handling tool failures?',
          ar: 'ما استراتيجية إعادة المحاولة الموصى بها للتعامل مع فشل الأدوات؟',
        },
        options: {
          en: ['Retry immediately without delay', 'Retry with fixed 1-second delay', 'Exponential backoff with jitter', 'Never retry, fail immediately'],
          ar: ['إعادة المحاولة فوراً بدون تأخير', 'إعادة المحاولة بتأخير ثابت 1 ثانية', 'تراجع أسي مع تذبذب', 'عدم إعادة المحاولة أبداً، الفشل فوراً'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Exponential backoff with jitter (random variation) prevents thundering herd problems and gives failing services time to recover between retry attempts.',
          ar: 'التراجع الأسي مع التذبذب (تباين عشوائي) يمنع مشاكل القطيع المتدافع ويمنح الخدمات الفاشلة وقتاً للتعافي بين محاولات إعادة المحاولة.',
        },
      },
      {
        id: 'tooluse-q3',
        question: {
          en: 'Why is tool result validation important?',
          ar: 'لماذا يعد التحقق من نتائج الأدوات مهماً؟',
        },
        options: {
          en: ['To make the agent slower', 'To increase API costs', 'To ensure outputs are correct and in the expected format before using them', 'To comply with regulations'],
          ar: ['لجعل الوكيل أبطأ', 'لزيادة تكاليف API', 'لضمان صحة المخرجات وأنها بالتنسيق المتوقع قبل استخدامها', 'للامتثال للوائح'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Tool result validation ensures the agent does not blindly trust tool outputs. It verifies format, checks for errors, and confirms results actually answer the original question.',
          ar: 'يضمن التحقق من نتائج الأدوات أن الوكيل لا يثق بشكل أعمى بمخرجات الأدوات. يتحقق من التنسيق ويكشف الأخطاء ويؤكد أن النتائج تجيب فعلاً على السؤال الأصلي.',
        },
      },
    ],
  },

  'planning-pattern': {
    beginnerDefinition: {
      en: 'The planning pattern teaches AI agents to think before acting. Instead of jumping straight into executing tasks, the agent first creates a step-by-step plan, breaks complex goals into smaller sub-tasks, executes them in order, and adjusts the plan when things do not go as expected — much like how a project manager organizes work.',
      ar: 'يعلّم نمط التخطيط وكلاء الذكاء الاصطناعي التفكير قبل التصرف. بدلاً من القفز مباشرة إلى تنفيذ المهام، ينشئ الوكيل أولاً خطة خطوة بخطوة، ويقسم الأهداف المعقدة إلى مهام فرعية أصغر، وينفذها بالترتيب، ويعدل الخطة عندما لا تسير الأمور كما هو متوقع — تماماً مثل كيفية تنظيم مدير المشروع للعمل.',
    },
    technicalDefinition: {
      en: 'The planning pattern implements plan-then-execute architectures where the LLM first generates a structured task decomposition before taking any actions. Key components include hierarchical task networks (breaking goals into sub-goals), dependency graph construction (identifying task ordering constraints), execution monitoring with progress tracking, and dynamic re-planning triggered by execution failures or new information. Approaches range from simple linear plans to ReAct-style interleaved planning-execution and more sophisticated methods like Plan-and-Solve or ADaPT.',
      ar: 'ينفذ نمط التخطيط بنيات التخطيط ثم التنفيذ حيث يولد نموذج اللغة أولاً تفكيكاً منظماً للمهام قبل اتخاذ أي إجراءات. تشمل المكونات الرئيسية شبكات المهام الهرمية (تقسيم الأهداف إلى أهداف فرعية)، وبناء رسم بياني للتبعيات (تحديد قيود ترتيب المهام)، ومراقبة التنفيذ مع تتبع التقدم، وإعادة التخطيط الديناميكي الذي يتم تشغيله بفشل التنفيذ أو معلومات جديدة.',
    },
    analogy: {
      en: 'Think of planning like organizing a road trip. You do not just start driving randomly — you first decide on the destination, plan the route, identify stops for fuel and food, and estimate arrival times. If you hit unexpected road construction, you re-route rather than giving up. If a passenger gets sick, you adjust the plan to stop at a hospital. An AI agent with planning capabilities does the same: plan the route, track progress, and adapt when reality diverges from the plan.',
      ar: 'فكر في التخطيط مثل تنظيم رحلة بالسيارة. لا تبدأ القيادة عشوائياً — بل تقرر أولاً الوجهة، وتخطط المسار، وتحدد محطات الوقود والطعام، وتقدر أوقات الوصول. إذا واجهت أعمال بناء غير متوقعة على الطريق، تغير المسار بدلاً من الاستسلام. إذا مرض أحد الركاب، تعدل الخطة للتوقف عند مستشفى. وكيل الذكاء الاصطناعي ذو قدرات التخطيط يفعل نفس الشيء: يخطط المسار، ويتتبع التقدم، ويتكيف عندما ينحرف الواقع عن الخطة.',
    },
    explanation: {
      en: [
        'Task decomposition is the foundation of planning. Given a complex goal like "Build a REST API for a bookstore," the agent breaks it into sub-tasks: define data models, set up database, implement CRUD endpoints, add authentication, write tests, deploy. Each sub-task is concrete and actionable.',
        'Plan-then-execute separates thinking from doing. The agent first generates the complete plan (or a plan outline), then executes steps one by one. This prevents the agent from getting tunnel vision on a single step and losing sight of the overall goal. It also enables progress tracking and estimated completion.',
        'Dependency management ensures tasks execute in the right order. Some tasks depend on others (you cannot test endpoints before implementing them). The agent builds a dependency graph and executes tasks in topological order, potentially parallelizing independent branches.',
        'Dynamic re-planning handles the reality that plans rarely survive first contact with execution. When a step fails, produces unexpected results, or reveals new requirements, the agent re-evaluates the remaining plan and adjusts. This might mean adding new steps, reordering existing ones, or changing the approach entirely.',
        'Progress tracking gives visibility into where the agent is in its plan. Each step can be marked as pending, in-progress, completed, or failed. This enables the agent (and the user) to understand progress, estimate remaining work, and identify bottlenecks.',
      ],
      ar: [
        'تفكيك المهام هو أساس التخطيط. بالنظر إلى هدف معقد مثل "بناء REST API لمكتبة"، يقسمه الوكيل إلى مهام فرعية: تعريف نماذج البيانات، إعداد قاعدة البيانات، تنفيذ نقاط CRUD، إضافة المصادقة، كتابة الاختبارات، النشر. كل مهمة فرعية محددة وقابلة للتنفيذ.',
        'يفصل التخطيط ثم التنفيذ بين التفكير والفعل. يولد الوكيل أولاً الخطة الكاملة (أو مخطط الخطة)، ثم ينفذ الخطوات واحدة تلو الأخرى. هذا يمنع الوكيل من التركيز المفرط على خطوة واحدة وفقدان الرؤية الشاملة للهدف. كما يمكّن من تتبع التقدم وتقدير الإكمال.',
        'تضمن إدارة التبعيات تنفيذ المهام بالترتيب الصحيح. بعض المهام تعتمد على أخرى (لا يمكن اختبار نقاط النهاية قبل تنفيذها). يبني الوكيل رسماً بيانياً للتبعيات وينفذ المهام بترتيب طوبولوجي، مع إمكانية موازاة الفروع المستقلة.',
        'تتعامل إعادة التخطيط الديناميكي مع حقيقة أن الخطط نادراً ما تنجو من أول اتصال بالتنفيذ. عندما تفشل خطوة أو تنتج نتائج غير متوقعة أو تكشف متطلبات جديدة، يعيد الوكيل تقييم الخطة المتبقية ويعدلها. قد يعني هذا إضافة خطوات جديدة أو إعادة ترتيب الموجودة أو تغيير النهج بالكامل.',
        'يمنح تتبع التقدم رؤية لمكان الوكيل في خطته. يمكن تمييز كل خطوة كمعلقة أو قيد التنفيذ أو مكتملة أو فاشلة. يمكّن هذا الوكيل (والمستخدم) من فهم التقدم وتقدير العمل المتبقي وتحديد الاختناقات.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from enum import Enum
from dataclasses import dataclass, field

class TaskStatus(Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    FAILED = "failed"

@dataclass
class Task:
    id: str
    description: str
    dependencies: list[str] = field(default_factory=list)
    status: TaskStatus = TaskStatus.PENDING
    result: str = ""

class PlanningAgent:
    def __init__(self):
        self.plan: list[Task] = []

    def create_plan(self, goal: str) -> list[Task]:
        """Decompose a goal into ordered sub-tasks."""
        self.plan = [
            Task("t1", "Analyze requirements", []),
            Task("t2", "Design data models", ["t1"]),
            Task("t3", "Set up database", ["t2"]),
            Task("t4", "Implement API endpoints", ["t3"]),
            Task("t5", "Write tests", ["t4"]),
            Task("t6", "Deploy application", ["t5"]),
        ]
        print(f"Plan created for: {goal}")
        return self.plan

    def get_ready_tasks(self) -> list[Task]:
        """Find tasks whose dependencies are all completed."""
        completed = {t.id for t in self.plan if t.status == TaskStatus.COMPLETED}
        return [t for t in self.plan if t.status == TaskStatus.PENDING
                and all(d in completed for d in t.dependencies)]

    def execute_task(self, task: Task) -> bool:
        """Execute a single task with error handling."""
        task.status = TaskStatus.IN_PROGRESS
        print(f"  Executing: {task.description}...")
        try:
            task.result = f"Completed: {task.description}"
            task.status = TaskStatus.COMPLETED
            return True
        except Exception as e:
            task.status = TaskStatus.FAILED
            self.replan(task, str(e))
            return False

    def replan(self, failed_task: Task, error: str):
        """Adjust plan when a task fails."""
        print(f"  Re-planning due to failure in: {failed_task.description}")
        failed_task.status = TaskStatus.PENDING  # Reset for retry

    def run(self, goal: str):
        """Execute the full plan-then-execute loop."""
        self.create_plan(goal)
        while any(t.status == TaskStatus.PENDING for t in self.plan):
            ready = self.get_ready_tasks()
            if not ready:
                print("No tasks ready — possible deadlock!")
                break
            for task in ready:
                self.execute_task(task)
        done = sum(1 for t in self.plan if t.status == TaskStatus.COMPLETED)
        print(f"Plan complete: {done}/{len(self.plan)} tasks succeeded")

agent = PlanningAgent()
agent.run("Build a bookstore REST API")`,
      description: {
        en: 'A planning agent that decomposes goals into tasks with dependencies, executes them in order, tracks progress, and supports re-planning on failure.',
        ar: 'وكيل تخطيط يفكك الأهداف إلى مهام مع تبعيات، وينفذها بالترتيب، ويتتبع التقدم، ويدعم إعادة التخطيط عند الفشل.',
      },
    },
    commonMistakes: {
      en: [
        'Creating overly detailed plans upfront — the agent spends too many tokens planning every edge case instead of starting execution and adapting.',
        'Not implementing re-planning, so the agent blindly continues with the original plan even when early steps reveal it is wrong.',
        'Ignoring task dependencies and executing steps in arbitrary order, causing failures when a step depends on incomplete prerequisites.',
        'Making plans too rigid with no mechanism for the user to provide feedback or override decisions during execution.',
      ],
      ar: [
        'إنشاء خطط مفصلة بشكل مفرط مقدماً — يقضي الوكيل رموزاً كثيرة في التخطيط لكل حالة حدية بدلاً من بدء التنفيذ والتكيف.',
        'عدم تنفيذ إعادة التخطيط، فيستمر الوكيل بشكل أعمى مع الخطة الأصلية حتى عندما تكشف الخطوات المبكرة أنها خاطئة.',
        'تجاهل تبعيات المهام وتنفيذ الخطوات بترتيب عشوائي، مما يسبب فشلاً عندما تعتمد خطوة على متطلبات أساسية غير مكتملة.',
        'جعل الخطط جامدة جداً بدون آلية للمستخدم لتقديم ملاحظات أو تجاوز القرارات أثناء التنفيذ.',
      ],
    },
    bestPractices: {
      en: [
        'Start with a high-level plan and refine details just before executing each step, following a "plan broad, execute narrow" approach.',
        'Implement checkpoints where the agent evaluates progress and decides whether to continue, adjust, or re-plan from scratch.',
        'Build dependency graphs to enable parallel execution of independent tasks, improving efficiency.',
        'Include human-in-the-loop checkpoints for high-stakes decisions, allowing users to approve or modify the plan.',
        'Log the planning process itself (not just execution) so that failed plans can be analyzed and planning strategies improved over time.',
      ],
      ar: [
        'ابدأ بخطة عالية المستوى وحسّن التفاصيل قبل تنفيذ كل خطوة مباشرة، متبعاً نهج "خطط بشكل واسع، نفذ بشكل ضيق".',
        'نفذ نقاط تفتيش حيث يقيّم الوكيل التقدم ويقرر ما إذا كان سيستمر أو يعدل أو يعيد التخطيط من الصفر.',
        'ابنِ رسوماً بيانية للتبعيات لتمكين التنفيذ المتوازي للمهام المستقلة، مما يحسن الكفاءة.',
        'أدرج نقاط تفتيش بمشاركة بشرية للقرارات عالية المخاطر، مما يسمح للمستخدمين بالموافقة على الخطة أو تعديلها.',
        'سجل عملية التخطيط نفسها (وليس التنفيذ فقط) حتى يمكن تحليل الخطط الفاشلة وتحسين استراتيجيات التخطيط بمرور الوقت.',
      ],
    },
    references: [
      { title: 'Plan-and-Solve Prompting', url: 'https://arxiv.org/abs/2305.04091' },
      { title: 'ReAct: Synergizing Reasoning and Acting', url: 'https://arxiv.org/abs/2210.03629' },
      { title: 'ADaPT: As-Needed Decomposition and Planning with LLMs', url: 'https://arxiv.org/abs/2311.05772' },
    ],
    quiz: [
      {
        id: 'plan-q1',
        question: {
          en: 'What is the main benefit of plan-then-execute over direct execution?',
          ar: 'ما هي الفائدة الرئيسية للتخطيط ثم التنفيذ مقارنة بالتنفيذ المباشر؟',
        },
        options: {
          en: ['It uses fewer tokens', 'It prevents the agent from losing sight of the overall goal', 'It is always faster', 'It eliminates all errors'],
          ar: ['يستخدم رموزاً أقل', 'يمنع الوكيل من فقدان رؤية الهدف العام', 'إنه أسرع دائماً', 'يلغي جميع الأخطاء'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Plan-then-execute separates thinking from doing, which prevents the agent from getting tunnel vision on individual steps and losing sight of the overall goal.',
          ar: 'يفصل التخطيط ثم التنفيذ بين التفكير والفعل، مما يمنع الوكيل من التركيز المفرط على خطوات فردية وفقدان رؤية الهدف العام.',
        },
      },
      {
        id: 'plan-q2',
        question: {
          en: 'When should an agent trigger dynamic re-planning?',
          ar: 'متى يجب على الوكيل تشغيل إعادة التخطيط الديناميكي؟',
        },
        options: {
          en: ['Only at the end of execution', 'Never — plans should be fixed', 'When a step fails or reveals new information', 'Every 5 minutes on a timer'],
          ar: ['فقط في نهاية التنفيذ', 'أبداً — يجب أن تكون الخطط ثابتة', 'عند فشل خطوة أو كشف معلومات جديدة', 'كل 5 دقائق بمؤقت'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Dynamic re-planning should be triggered when execution deviates from expectations — a step fails, produces unexpected results, or reveals new requirements that change the plan.',
          ar: 'يجب تشغيل إعادة التخطيط الديناميكي عندما ينحرف التنفيذ عن التوقعات — فشل خطوة، أو إنتاج نتائج غير متوقعة، أو كشف متطلبات جديدة تغير الخطة.',
        },
      },
      {
        id: 'plan-q3',
        question: {
          en: 'What does a dependency graph help the planning agent determine?',
          ar: 'ماذا يساعد الرسم البياني للتبعيات وكيل التخطيط في تحديده؟',
        },
        options: {
          en: ['The total cost of execution', 'Which tasks can run in parallel and the correct execution order', 'The number of tools needed', 'The best LLM model to use'],
          ar: ['التكلفة الإجمالية للتنفيذ', 'أي المهام يمكن تنفيذها بالتوازي والترتيب الصحيح للتنفيذ', 'عدد الأدوات المطلوبة', 'أفضل نموذج لغة للاستخدام'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'A dependency graph shows which tasks depend on others, revealing the correct execution order and identifying independent tasks that can be run in parallel for efficiency.',
          ar: 'يوضح الرسم البياني للتبعيات أي المهام تعتمد على أخرى، مما يكشف الترتيب الصحيح للتنفيذ ويحدد المهام المستقلة التي يمكن تنفيذها بالتوازي لتحقيق الكفاءة.',
        },
      },
    ],
  },

  'multi-agent-collaboration-pattern': {
    beginnerDefinition: {
      en: 'Multi-agent collaboration is when multiple AI agents work together to solve problems, just like a team of people. Different agents can take different roles — a supervisor assigns tasks, agents debate to find the best answer, or an ensemble of agents each provides a solution and the best one is chosen. This teamwork approach handles complex problems better than a single agent alone.',
      ar: 'التعاون متعدد الوكلاء هو عندما تعمل عدة وكلاء ذكاء اصطناعي معاً لحل المشاكل، تماماً مثل فريق من الأشخاص. يمكن لوكلاء مختلفين أخذ أدوار مختلفة — مشرف يوزع المهام، ووكلاء يتناقشون لإيجاد أفضل إجابة، أو مجموعة من الوكلاء كل منهم يقدم حلاً ويتم اختيار الأفضل. نهج العمل الجماعي هذا يتعامل مع المشاكل المعقدة بشكل أفضل من وكيل واحد.',
    },
    technicalDefinition: {
      en: 'Multi-agent collaboration patterns define how multiple LLM-powered agents coordinate to accomplish tasks. The supervisor pattern uses a meta-agent to decompose tasks and delegate to specialized worker agents. The debate pattern has agents argue for different positions and reach consensus through structured argumentation. The ensemble pattern runs multiple agents independently on the same task and aggregates results through voting or ranking. Inter-agent communication uses message passing, shared memory spaces, or structured protocols to exchange information and coordinate actions.',
      ar: 'تحدد أنماط التعاون متعدد الوكلاء كيفية تنسيق عدة وكلاء مدعومين بنماذج اللغة لإنجاز المهام. يستخدم نمط المشرف وكيلاً فوقياً لتفكيك المهام وتفويضها لوكلاء عمال متخصصين. نمط النقاش يجعل الوكلاء يتجادلون حول مواقف مختلفة ويصلون إلى إجماع من خلال جدال منظم. نمط المجموعة يشغل عدة وكلاء بشكل مستقل على نفس المهمة ويجمع النتائج من خلال التصويت أو الترتيب.',
    },
    analogy: {
      en: 'Think of how a hospital operates. The supervisor pattern is like the attending physician who receives a patient, diagnoses the situation, and delegates to specialists — a radiologist for imaging, a surgeon for the operation, a nurse for post-op care. The debate pattern is like a medical board where doctors argue about the best treatment plan until they reach consensus. The ensemble pattern is like getting three independent second opinions and going with the majority recommendation.',
      ar: 'فكر في كيفية عمل المستشفى. نمط المشرف مثل الطبيب المعالج الذي يستقبل مريضاً، ويشخص الحالة، ويوكل للمتخصصين — أخصائي أشعة للتصوير، وجراح للعملية، وممرض للرعاية بعد العملية. نمط النقاش مثل لجنة طبية حيث يتجادل الأطباء حول أفضل خطة علاج حتى يصلوا إلى إجماع. نمط المجموعة مثل الحصول على ثلاثة آراء ثانية مستقلة والأخذ بتوصية الأغلبية.',
    },
    explanation: {
      en: [
        'The supervisor pattern is the most common approach. A supervisor agent receives the user\'s request, analyzes it, decomposes it into sub-tasks, and delegates each to a specialized worker agent. Workers report results back to the supervisor, who synthesizes the final response. This mirrors organizational hierarchies and works well for complex, multi-domain tasks.',
        'The debate pattern leverages adversarial collaboration. Multiple agents are given the same question but different perspectives or instructions. They take turns presenting arguments and counter-arguments. A judge agent (or the same agents through self-reflection) evaluates the debate and selects the strongest answer. This pattern is particularly effective for reasoning tasks where considering multiple angles improves accuracy.',
        'The ensemble pattern treats agents like an ensemble of machine learning models. Multiple agents independently solve the same task, and their outputs are aggregated through majority voting, weighted averaging, or a selection mechanism. This increases reliability by reducing the chance that a single agent\'s error dominates the final answer.',
        'Inter-agent communication can follow different protocols. Direct message passing is simplest — agents send messages to each other. Shared memory (like a shared scratchpad or database) allows agents to read and write to a common state. Structured protocols like request-response or publish-subscribe enable more complex coordination patterns.',
        'Challenges include managing token costs (each agent uses its own context), handling conflicting agent outputs, preventing infinite communication loops, and coordinating timeouts. Well-designed orchestration with clear termination conditions is essential.',
      ],
      ar: [
        'نمط المشرف هو النهج الأكثر شيوعاً. يتلقى وكيل المشرف طلب المستخدم، ويحلله، ويفككه إلى مهام فرعية، ويوكل كلاً منها لوكيل عامل متخصص. يبلغ العمال النتائج للمشرف، الذي يصنع الاستجابة النهائية. هذا يحاكي التسلسلات الهرمية التنظيمية ويعمل جيداً للمهام المعقدة متعددة المجالات.',
        'يستفيد نمط النقاش من التعاون العدائي. تُعطى عدة وكلاء نفس السؤال لكن بمنظورات أو تعليمات مختلفة. يتناوبون في تقديم الحجج والحجج المضادة. وكيل حكم (أو نفس الوكلاء من خلال التأمل الذاتي) يقيّم النقاش ويختار أقوى إجابة. هذا النمط فعال بشكل خاص لمهام الاستدلال حيث يحسن النظر في زوايا متعددة الدقة.',
        'يعامل نمط المجموعة الوكلاء مثل مجموعة من نماذج التعلم الآلي. تحل عدة وكلاء نفس المهمة بشكل مستقل، وتُجمع مخرجاتهم من خلال تصويت الأغلبية أو المتوسط المرجح أو آلية اختيار. هذا يزيد الموثوقية بتقليل احتمال أن يهيمن خطأ وكيل واحد على الإجابة النهائية.',
        'يمكن أن يتبع التواصل بين الوكلاء بروتوكولات مختلفة. تمرير الرسائل المباشر هو الأبسط — يرسل الوكلاء رسائل لبعضهم البعض. الذاكرة المشتركة (مثل لوحة مشتركة أو قاعدة بيانات) تتيح للوكلاء القراءة والكتابة في حالة مشتركة. البروتوكولات المنظمة مثل الطلب-الاستجابة أو النشر-الاشتراك تمكّن أنماط تنسيق أكثر تعقيداً.',
        'تشمل التحديات إدارة تكاليف الرموز (كل وكيل يستخدم سياقه الخاص)، والتعامل مع مخرجات الوكلاء المتعارضة، ومنع حلقات التواصل اللانهائية، وتنسيق المهلات الزمنية. التنسيق المصمم جيداً مع شروط إنهاء واضحة أمر ضروري.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from dataclasses import dataclass

@dataclass
class AgentMessage:
    sender: str
    content: str

class Agent:
    def __init__(self, name: str, role: str):
        self.name = name
        self.role = role

    def process(self, task: str, context: list[AgentMessage] = None) -> str:
        return f"[{self.name}] Result for: {task}"

class SupervisorAgent:
    def __init__(self):
        self.workers = {}
        self.messages: list[AgentMessage] = []

    def register_worker(self, agent: Agent):
        self.workers[agent.name] = agent

    def delegate(self, goal: str) -> str:
        subtasks = self.decompose(goal)
        results = []
        for worker_name, task in subtasks:
            worker = self.workers[worker_name]
            result = worker.process(task, self.messages)
            self.messages.append(AgentMessage(worker_name, result))
            results.append(result)
        return self.synthesize(results)

    def decompose(self, goal: str) -> list[tuple[str, str]]:
        return [
            ("researcher", f"Research: {goal}"),
            ("coder", f"Implement: {goal}"),
            ("reviewer", f"Review implementation of: {goal}"),
        ]

    def synthesize(self, results: list[str]) -> str:
        return f"Final result combining {len(results)} worker outputs"

def ensemble_vote(agents: list[Agent], task: str) -> str:
    """Run multiple agents on the same task and pick majority answer."""
    answers = [a.process(task) for a in agents]
    # In practice, compare semantic similarity of answers
    print(f"Ensemble: {len(answers)} agents voted")
    return answers[0]  # Simplified: return first (use voting in production)

# Setup supervisor pattern
supervisor = SupervisorAgent()
supervisor.register_worker(Agent("researcher", "Research specialist"))
supervisor.register_worker(Agent("coder", "Python developer"))
supervisor.register_worker(Agent("reviewer", "Code reviewer"))
result = supervisor.delegate("Build a caching system")
print(f"Supervisor result: {result}")

# Ensemble pattern
agents = [Agent(f"solver-{i}", "Problem solver") for i in range(3)]
ensemble_result = ensemble_vote(agents, "What is the best sorting algorithm?")
print(f"Ensemble result: {ensemble_result}")`,
      description: {
        en: 'Implementation of the supervisor pattern (decompose, delegate, synthesize) and ensemble voting pattern for multi-agent collaboration.',
        ar: 'تنفيذ نمط المشرف (تفكيك، تفويض، تجميع) ونمط تصويت المجموعة للتعاون متعدد الوكلاء.',
      },
    },
    commonMistakes: {
      en: [
        'Using multi-agent systems for simple tasks that a single agent can handle efficiently — the overhead outweighs the benefits.',
        'Not defining clear termination conditions, leading to agents going back and forth in endless communication loops.',
        'Giving all agents identical instructions and expecting diverse outputs — differentiation requires different system prompts or perspectives.',
        'Ignoring the cost multiplication: N agents means roughly N times the token cost, which can be prohibitively expensive.',
      ],
      ar: [
        'استخدام أنظمة متعددة الوكلاء للمهام البسيطة التي يمكن لوكيل واحد التعامل معها بكفاءة — التكلفة الإضافية تفوق الفوائد.',
        'عدم تحديد شروط إنهاء واضحة، مما يؤدي إلى ذهاب الوكلاء وإيابهم في حلقات تواصل لا نهائية.',
        'إعطاء جميع الوكلاء تعليمات متطابقة وتوقع مخرجات متنوعة — التمايز يتطلب أوامر نظام أو منظورات مختلفة.',
        'تجاهل مضاعفة التكلفة: N وكيل يعني تقريباً N ضعف تكلفة الرموز، مما قد يكون مكلفاً بشكل باهظ.',
      ],
    },
    bestPractices: {
      en: [
        'Choose the right pattern for the task: supervisor for decomposable tasks, debate for reasoning, ensemble for reliability-critical decisions.',
        'Define clear roles and specializations for each agent with distinct system prompts to maximize diversity of thought.',
        'Implement strict termination conditions: maximum rounds, convergence detection, or timeout limits to prevent runaway costs.',
        'Use shared memory or message logs so agents can build on each other\'s work rather than duplicating effort.',
        'Start with 2-3 agents and scale up only if the task complexity justifies the additional cost and coordination overhead.',
      ],
      ar: [
        'اختر النمط المناسب للمهمة: المشرف للمهام القابلة للتفكيك، النقاش للاستدلال، المجموعة للقرارات الحرجة من حيث الموثوقية.',
        'حدد أدواراً وتخصصات واضحة لكل وكيل مع أوامر نظام مميزة لتعظيم تنوع التفكير.',
        'نفذ شروط إنهاء صارمة: جولات قصوى، اكتشاف التقارب، أو حدود مهلة زمنية لمنع التكاليف الخارجة عن السيطرة.',
        'استخدم ذاكرة مشتركة أو سجلات رسائل حتى يتمكن الوكلاء من البناء على عمل بعضهم البعض بدلاً من تكرار الجهد.',
        'ابدأ بـ 2-3 وكلاء ووسّع فقط إذا كان تعقيد المهمة يبرر التكلفة الإضافية وتكاليف التنسيق.',
      ],
    },
    references: [
      { title: 'AutoGen: Enabling Next-Gen LLM Applications', url: 'https://arxiv.org/abs/2308.08155' },
      { title: 'LLM Debate Improves Reasoning', url: 'https://arxiv.org/abs/2305.14325' },
      { title: 'CrewAI Multi-Agent Framework', url: 'https://github.com/joaomdmoura/crewAI' },
    ],
    quiz: [
      {
        id: 'multiagent-q1',
        question: {
          en: 'In the supervisor pattern, what is the role of the supervisor agent?',
          ar: 'في نمط المشرف، ما هو دور وكيل المشرف؟',
        },
        options: {
          en: ['Execute all tasks directly', 'Decompose tasks and delegate to specialized workers', 'Only monitor without taking action', 'Replace failed worker agents'],
          ar: ['تنفيذ جميع المهام مباشرة', 'تفكيك المهام وتفويضها للعمال المتخصصين', 'المراقبة فقط دون اتخاذ إجراء', 'استبدال وكلاء العمال الفاشلين'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The supervisor agent acts as an orchestrator: it decomposes the user\'s goal into sub-tasks, delegates each to the appropriate specialized worker, and synthesizes the workers\' results into a final response.',
          ar: 'يعمل وكيل المشرف كمنسق: يفكك هدف المستخدم إلى مهام فرعية، ويوكل كلاً منها للعامل المتخصص المناسب، ويجمع نتائج العمال في استجابة نهائية.',
        },
      },
      {
        id: 'multiagent-q2',
        question: {
          en: 'What is the main advantage of the ensemble pattern?',
          ar: 'ما هي الميزة الرئيسية لنمط المجموعة؟',
        },
        options: {
          en: ['It is the cheapest approach', 'It increases reliability by reducing single-agent error dominance', 'It requires only one agent', 'It eliminates the need for a system prompt'],
          ar: ['إنه النهج الأرخص', 'يزيد الموثوقية بتقليل هيمنة خطأ وكيل واحد', 'يتطلب وكيلاً واحداً فقط', 'يلغي الحاجة لأوامر النظام'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The ensemble pattern runs multiple agents independently and aggregates their answers, which increases reliability because a single agent\'s mistake is less likely to dominate the final result.',
          ar: 'يشغل نمط المجموعة عدة وكلاء بشكل مستقل ويجمع إجاباتهم، مما يزيد الموثوقية لأن خطأ وكيل واحد أقل احتمالاً للهيمنة على النتيجة النهائية.',
        },
      },
      {
        id: 'multiagent-q3',
        question: {
          en: 'What is a critical risk of not defining termination conditions in multi-agent systems?',
          ar: 'ما هو الخطر الحرج لعدم تحديد شروط الإنهاء في أنظمة متعددة الوكلاء؟',
        },
        options: {
          en: ['Agents become too fast', 'Agents enter infinite communication loops', 'Agents use too little context', 'Agents produce identical outputs'],
          ar: ['تصبح الوكلاء سريعة جداً', 'تدخل الوكلاء في حلقات تواصل لا نهائية', 'تستخدم الوكلاء سياقاً قليلاً جداً', 'تنتج الوكلاء مخرجات متطابقة'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Without clear termination conditions, agents can keep exchanging messages indefinitely, leading to infinite loops, unbounded costs, and no final output.',
          ar: 'بدون شروط إنهاء واضحة، يمكن للوكلاء الاستمرار في تبادل الرسائل إلى ما لا نهاية، مما يؤدي إلى حلقات لا نهائية وتكاليف غير محدودة وعدم وجود مخرجات نهائية.',
        },
      },
    ],
  },

  'chain-of-thought': {
    beginnerDefinition: {
      en: 'Chain of Thought (CoT) is a prompting technique that encourages an AI to show its reasoning step by step before giving a final answer. Instead of jumping straight to a conclusion, the AI "thinks out loud" — breaking the problem into smaller steps, solving each one, and building toward the answer. This dramatically improves accuracy on math, logic, and complex reasoning tasks.',
      ar: 'سلسلة التفكير (CoT) هي تقنية توجيه تشجع الذكاء الاصطناعي على إظهار استدلاله خطوة بخطوة قبل إعطاء إجابة نهائية. بدلاً من القفز مباشرة إلى استنتاج، "يفكر بصوت عالٍ" — يقسم المشكلة إلى خطوات أصغر، ويحل كل واحدة، ويبني نحو الإجابة. هذا يحسن الدقة بشكل كبير في الرياضيات والمنطق ومهام الاستدلال المعقدة.',
    },
    technicalDefinition: {
      en: 'Chain of Thought (CoT) prompting is a technique that elicits intermediate reasoning steps from large language models before producing a final answer. It can be implemented via few-shot demonstrations (providing examples with step-by-step reasoning), zero-shot triggers (appending "Let\'s think step by step" to the prompt), or structured CoT (defining explicit reasoning templates). CoT activates latent reasoning capabilities in LLMs by allocating computation across multiple sequential tokens rather than compressing all reasoning into the final output token distribution.',
      ar: 'توجيه سلسلة التفكير (CoT) هو تقنية تستخرج خطوات استدلال وسيطة من نماذج اللغة الكبيرة قبل إنتاج إجابة نهائية. يمكن تنفيذها عبر عروض قليلة الأمثلة (تقديم أمثلة مع استدلال خطوة بخطوة)، أو محفزات بدون أمثلة (إضافة "لنفكر خطوة بخطوة" للموجه)، أو سلسلة تفكير منظمة (تعريف قوالب استدلال صريحة). تنشط CoT قدرات الاستدلال الكامنة في نماذج اللغة من خلال تخصيص الحساب عبر رموز متتالية متعددة بدلاً من ضغط كل الاستدلال في توزيع رمز المخرج النهائي.',
    },
    analogy: {
      en: 'Think of how a math teacher solves a problem on the whiteboard. They do not just write the final answer — they show every step: "First, let us isolate x. Then, divide both sides by 3. Now substitute back..." Each step is simple and verifiable. If there is an error, you can spot exactly where it went wrong. Chain of Thought does the same for AI: by making the reasoning visible, each step can be checked, and the final answer is more reliable.',
      ar: 'فكر في كيفية حل معلم الرياضيات لمشكلة على السبورة. لا يكتب فقط الإجابة النهائية — بل يظهر كل خطوة: "أولاً، لنعزل x. ثم، نقسم كلا الطرفين على 3. الآن نعوض مرة أخرى..." كل خطوة بسيطة وقابلة للتحقق. إذا كان هناك خطأ، يمكنك تحديد أين حدث بالضبط. سلسلة التفكير تفعل نفس الشيء للذكاء الاصطناعي: بجعل الاستدلال مرئياً، يمكن فحص كل خطوة، والإجابة النهائية أكثر موثوقية.',
    },
    explanation: {
      en: [
        'Zero-shot CoT is the simplest form — just add "Let\'s think step by step" to your prompt. This simple phrase can significantly improve reasoning performance because it instructs the model to generate intermediate reasoning tokens before the final answer.',
        'Few-shot CoT provides examples of step-by-step reasoning in the prompt. By showing the model how to break down similar problems, it learns the reasoning pattern and applies it to the new question. This is more reliable than zero-shot CoT for complex domains.',
        'Structured CoT defines explicit reasoning templates like: "1. Identify the key information. 2. Determine what is being asked. 3. Apply relevant rules or formulas. 4. Calculate step by step. 5. Verify the answer." This ensures consistent reasoning structure across different problems.',
        'CoT works because LLMs generate tokens sequentially. Each reasoning step generates tokens that become part of the context for subsequent steps. This effectively gives the model more "computation" — it can use intermediate tokens as working memory to track partial results, rather than trying to compute everything in a single forward pass.',
        'The limitations of CoT include increased token usage (reasoning steps consume output tokens), the possibility of plausible-sounding but incorrect reasoning chains, and diminishing returns on simple factual questions where step-by-step reasoning is unnecessary. CoT is most beneficial for math, logic, multi-step reasoning, and tasks requiring careful analysis.',
      ],
      ar: [
        'سلسلة التفكير بدون أمثلة هي أبسط شكل — فقط أضف "لنفكر خطوة بخطوة" لموجهك. هذه العبارة البسيطة يمكن أن تحسن أداء الاستدلال بشكل كبير لأنها تعلم النموذج توليد رموز استدلال وسيطة قبل الإجابة النهائية.',
        'سلسلة التفكير بأمثلة قليلة توفر أمثلة على الاستدلال خطوة بخطوة في الموجه. بإظهار النموذج كيفية تفكيك مشاكل مماثلة، يتعلم نمط الاستدلال ويطبقه على السؤال الجديد. هذا أكثر موثوقية من سلسلة التفكير بدون أمثلة للمجالات المعقدة.',
        'سلسلة التفكير المنظمة تحدد قوالب استدلال صريحة مثل: "1. تحديد المعلومات الرئيسية. 2. تحديد ما هو مطلوب. 3. تطبيق القواعد أو الصيغ ذات الصلة. 4. الحساب خطوة بخطوة. 5. التحقق من الإجابة." هذا يضمن بنية استدلال متسقة عبر مشاكل مختلفة.',
        'تعمل سلسلة التفكير لأن نماذج اللغة تولد الرموز بشكل تتابعي. كل خطوة استدلال تولد رموزاً تصبح جزءاً من السياق للخطوات اللاحقة. هذا يمنح النموذج فعلياً المزيد من "الحساب" — يمكنه استخدام الرموز الوسيطة كذاكرة عاملة لتتبع النتائج الجزئية، بدلاً من محاولة حساب كل شيء في تمريرة أمامية واحدة.',
        'تشمل قيود سلسلة التفكير زيادة استخدام الرموز (خطوات الاستدلال تستهلك رموز المخرجات)، وإمكانية سلاسل استدلال تبدو معقولة لكنها غير صحيحة، وعوائد متناقصة على الأسئلة الواقعية البسيطة حيث الاستدلال خطوة بخطوة غير ضروري. سلسلة التفكير مفيدة أكثر للرياضيات والمنطق والاستدلال متعدد الخطوات والمهام التي تتطلب تحليلاً دقيقاً.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import openai

client = openai.OpenAI()

def solve_with_cot(problem: str, method: str = "zero-shot") -> str:
    """Solve a problem using Chain of Thought prompting."""

    if method == "zero-shot":
        messages = [
            {"role": "system", "content": "You are a careful problem solver."},
            {"role": "user", "content": f"{problem}\\n\\nLet's think step by step."}
        ]

    elif method == "few-shot":
        messages = [
            {"role": "system", "content": "Solve problems step by step."},
            {"role": "user", "content": "If a store has 45 apples and sells 3/5 of them, how many remain?"},
            {"role": "assistant", "content": (
                "Step 1: Find apples sold: 45 × 3/5 = 27\\n"
                "Step 2: Find remaining: 45 - 27 = 18\\n"
                "Answer: 18 apples remain."
            )},
            {"role": "user", "content": problem}
        ]

    elif method == "structured":
        messages = [
            {"role": "system", "content": (
                "Follow this reasoning template:\\n"
                "1. IDENTIFY: What are the key facts?\\n"
                "2. DETERMINE: What is being asked?\\n"
                "3. PLAN: What approach will I use?\\n"
                "4. SOLVE: Execute step by step.\\n"
                "5. VERIFY: Check the answer."
            )},
            {"role": "user", "content": problem}
        ]
    else:
        raise ValueError(f"Unknown method: {method}")

    response = client.chat.completions.create(
        model="gpt-4o", messages=messages, temperature=0
    )
    return response.choices[0].message.content

# Example usage
problem = "A train travels 120km in 2 hours, stops for 30 min, then travels 90km in 1.5 hours. What is the average speed for the entire journey?"

for method in ["zero-shot", "few-shot", "structured"]:
    print(f"\\n=== {method.upper()} CoT ===")
    answer = solve_with_cot(problem, method)
    print(answer)`,
      description: {
        en: 'Three Chain of Thought variants: zero-shot (simple trigger phrase), few-shot (examples with reasoning), and structured (explicit reasoning template).',
        ar: 'ثلاثة أنواع من سلسلة التفكير: بدون أمثلة (عبارة تحفيز بسيطة)، بأمثلة قليلة (أمثلة مع استدلال)، ومنظمة (قالب استدلال صريح).',
      },
    },
    commonMistakes: {
      en: [
        'Using CoT for simple factual retrieval questions where step-by-step reasoning adds no value and just wastes tokens.',
        'Not verifying the reasoning chain — the model can produce confident-sounding but logically flawed intermediate steps.',
        'Making few-shot examples too complex, causing the model to focus on surface patterns rather than learning the reasoning approach.',
        'Forgetting that CoT increases output token count significantly, which increases both latency and cost.',
      ],
      ar: [
        'استخدام سلسلة التفكير لأسئلة استرجاع الحقائق البسيطة حيث لا يضيف الاستدلال خطوة بخطوة أي قيمة ويهدر الرموز فقط.',
        'عدم التحقق من سلسلة الاستدلال — يمكن للنموذج إنتاج خطوات وسيطة تبدو واثقة لكنها معيبة منطقياً.',
        'جعل أمثلة الأمثلة القليلة معقدة جداً، مما يجعل النموذج يركز على الأنماط السطحية بدلاً من تعلم نهج الاستدلال.',
        'نسيان أن سلسلة التفكير تزيد عدد رموز المخرجات بشكل كبير، مما يزيد كلاً من زمن الاستجابة والتكلفة.',
      ],
    },
    bestPractices: {
      en: [
        'Use CoT selectively — apply it to math, logic, multi-step reasoning, and complex analysis tasks where it provides the most benefit.',
        'Combine CoT with answer extraction: after the reasoning chain, explicitly ask for the final answer in a structured format.',
        'Provide diverse few-shot examples that cover different problem types to help the model generalize the reasoning approach.',
        'Use structured CoT templates for domain-specific tasks to ensure consistent and comprehensive reasoning.',
        'Consider pairing CoT with self-consistency (multiple reasoning paths) for high-stakes decisions where accuracy is critical.',
      ],
      ar: [
        'استخدم سلسلة التفكير بشكل انتقائي — طبقها على الرياضيات والمنطق والاستدلال متعدد الخطوات ومهام التحليل المعقدة حيث توفر أكبر فائدة.',
        'اجمع سلسلة التفكير مع استخراج الإجابة: بعد سلسلة الاستدلال، اطلب صراحة الإجابة النهائية بتنسيق منظم.',
        'قدم أمثلة قليلة متنوعة تغطي أنواع مشاكل مختلفة لمساعدة النموذج على تعميم نهج الاستدلال.',
        'استخدم قوالب سلسلة تفكير منظمة للمهام الخاصة بالمجال لضمان استدلال متسق وشامل.',
        'فكر في دمج سلسلة التفكير مع الاتساق الذاتي (مسارات استدلال متعددة) للقرارات عالية المخاطر حيث الدقة حرجة.',
      ],
    },
    references: [
      { title: 'Chain-of-Thought Prompting Elicits Reasoning in LLMs', url: 'https://arxiv.org/abs/2201.11903' },
      { title: 'Zero-shot Chain of Thought (Kojima et al.)', url: 'https://arxiv.org/abs/2205.11916' },
      { title: 'Google Research Blog: Chain of Thought', url: 'https://blog.research.google/2022/05/language-models-perform-reasoning-via.html' },
    ],
    quiz: [
      {
        id: 'cot-q1',
        question: {
          en: 'What is the simplest way to trigger Chain of Thought reasoning?',
          ar: 'ما هي أبسط طريقة لتفعيل استدلال سلسلة التفكير؟',
        },
        options: {
          en: ['Fine-tuning the model', 'Adding "Let\'s think step by step" to the prompt', 'Using a larger model', 'Increasing the temperature'],
          ar: ['ضبط النموذج الدقيق', 'إضافة "لنفكر خطوة بخطوة" للموجه', 'استخدام نموذج أكبر', 'زيادة درجة الحرارة'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Zero-shot CoT simply appends "Let\'s think step by step" to the prompt, which triggers the model to generate intermediate reasoning steps before the final answer.',
          ar: 'سلسلة التفكير بدون أمثلة تضيف ببساطة "لنفكر خطوة بخطوة" للموجه، مما يحفز النموذج على توليد خطوات استدلال وسيطة قبل الإجابة النهائية.',
        },
      },
      {
        id: 'cot-q2',
        question: {
          en: 'Why does Chain of Thought improve LLM reasoning?',
          ar: 'لماذا تحسن سلسلة التفكير استدلال نماذج اللغة؟',
        },
        options: {
          en: ['It uses a different model', 'It allocates computation across intermediate tokens as working memory', 'It accesses the internet', 'It reduces the number of tokens'],
          ar: ['تستخدم نموذجاً مختلفاً', 'تخصص الحساب عبر رموز وسيطة كذاكرة عاملة', 'تصل إلى الإنترنت', 'تقلل عدد الرموز'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'CoT works because intermediate reasoning tokens serve as working memory, allowing the model to track partial results across multiple steps instead of compressing all reasoning into one forward pass.',
          ar: 'تعمل سلسلة التفكير لأن رموز الاستدلال الوسيطة تعمل كذاكرة عاملة، مما يسمح للنموذج بتتبع النتائج الجزئية عبر خطوات متعددة بدلاً من ضغط كل الاستدلال في تمريرة أمامية واحدة.',
        },
      },
      {
        id: 'cot-q3',
        question: {
          en: 'For which type of task is CoT LEAST beneficial?',
          ar: 'لأي نوع من المهام تكون سلسلة التفكير الأقل فائدة؟',
        },
        options: {
          en: ['Multi-step math problems', 'Complex logical reasoning', 'Simple factual retrieval', 'Code debugging'],
          ar: ['مسائل رياضية متعددة الخطوات', 'استدلال منطقي معقد', 'استرجاع حقائق بسيطة', 'تصحيح أخطاء الأكواد'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'CoT adds no value for simple factual retrieval (like "What is the capital of France?") where the answer does not require multi-step reasoning. It just wastes tokens.',
          ar: 'لا تضيف سلسلة التفكير قيمة لاسترجاع الحقائق البسيطة (مثل "ما هي عاصمة فرنسا؟") حيث لا تتطلب الإجابة استدلالاً متعدد الخطوات. إنها تهدر الرموز فقط.',
        },
      },
    ],
  },

  'self-consistency': {
    beginnerDefinition: {
      en: 'Self-consistency is a technique where the AI generates multiple different reasoning paths for the same problem and then picks the answer that appears most often. It is like asking several smart friends to solve a math problem independently — if most of them get the same answer, that answer is probably correct, even if one friend made a mistake.',
      ar: 'الاتساق الذاتي هو تقنية حيث يولد الذكاء الاصطناعي عدة مسارات استدلال مختلفة لنفس المشكلة ثم يختار الإجابة التي تظهر أكثر. إنه مثل سؤال عدة أصدقاء أذكياء لحل مسألة رياضية بشكل مستقل — إذا حصل معظمهم على نفس الإجابة، فتلك الإجابة صحيحة على الأرجح، حتى لو أخطأ أحد الأصدقاء.',
    },
    technicalDefinition: {
      en: 'Self-consistency is a decoding strategy that samples multiple diverse reasoning chains from an LLM using non-zero temperature, extracts the final answer from each chain, and selects the most frequent answer via majority voting. It builds upon Chain of Thought prompting by exploiting the observation that correct reasoning paths tend to converge on the same answer, while incorrect paths produce diverse wrong answers. The technique improves accuracy without model modification, at the cost of N times the inference compute.',
      ar: 'الاتساق الذاتي هو استراتيجية فك تشفير تأخذ عينات من سلاسل استدلال متنوعة متعددة من نموذج لغة باستخدام درجة حرارة غير صفرية، وتستخرج الإجابة النهائية من كل سلسلة، وتختار الإجابة الأكثر تكراراً عبر تصويت الأغلبية. تبني على توجيه سلسلة التفكير من خلال استغلال الملاحظة بأن مسارات الاستدلال الصحيحة تميل للتقارب على نفس الإجابة، بينما تنتج المسارات غير الصحيحة إجابات خاطئة متنوعة.',
    },
    analogy: {
      en: 'Imagine you are lost in a forest and reach a fork with three paths. You send three scouts down each path, each taking a different route. Two scouts return and say they found the river to the east, while one says he found a dead end to the west. You trust the majority — two independent scouts reaching the same conclusion is strong evidence that the river is east. Self-consistency works the same way: multiple independent reasoning attempts vote on the answer.',
      ar: 'تخيل أنك ضائع في غابة ووصلت إلى تقاطع بثلاثة مسارات. ترسل ثلاثة كشافة في كل مسار، كل منهم يأخذ طريقاً مختلفاً. يعود كشافان ويقولان إنهما وجدا النهر في الشرق، بينما يقول الثالث إنه وجد طريقاً مسدوداً في الغرب. تثق بالأغلبية — كشافان مستقلان يصلان لنفس الاستنتاج دليل قوي على أن النهر في الشرق. يعمل الاتساق الذاتي بنفس الطريقة: عدة محاولات استدلال مستقلة تصوت على الإجابة.',
    },
    explanation: {
      en: [
        'The core insight behind self-consistency is that correct reasoning paths tend to converge on the same answer, while incorrect paths produce diverse wrong answers. By sampling multiple reasoning chains, the correct answer naturally emerges as the most common one through majority voting.',
        'Implementation is straightforward: run the same prompt N times with temperature > 0 (typically 0.5-0.7) to get diverse reasoning chains. Extract the final answer from each chain (usually the last line or a structured output). Count the frequency of each unique answer and select the most common one.',
        'The number of samples (N) is a key trade-off. More samples increase accuracy but multiply cost and latency linearly. Research shows that 5-10 samples capture most of the benefit, with diminishing returns beyond 20. The optimal N depends on the task difficulty and accuracy requirements.',
        'Self-consistency pairs naturally with Chain of Thought. Each sample uses CoT to generate a full reasoning chain, and the consistency check is applied only to the final answers. Different reasoning paths may take different approaches but arrive at the same correct answer.',
        'Advanced variants include weighted voting (giving more weight to chains with higher confidence or longer reasoning), universal self-consistency (using an LLM to compare free-form answers instead of exact matching), and adaptive consistency (starting with few samples and adding more only if there is no clear majority).',
      ],
      ar: [
        'الفكرة الأساسية وراء الاتساق الذاتي هي أن مسارات الاستدلال الصحيحة تميل للتقارب على نفس الإجابة، بينما تنتج المسارات غير الصحيحة إجابات خاطئة متنوعة. بأخذ عينات من سلاسل استدلال متعددة، تظهر الإجابة الصحيحة بشكل طبيعي كأكثر إجابة شيوعاً من خلال تصويت الأغلبية.',
        'التنفيذ مباشر: شغل نفس الموجه N مرة مع درجة حرارة أكبر من 0 (عادة 0.5-0.7) للحصول على سلاسل استدلال متنوعة. استخرج الإجابة النهائية من كل سلسلة (عادة السطر الأخير أو مخرج منظم). عُد تكرار كل إجابة فريدة واختر الأكثر شيوعاً.',
        'عدد العينات (N) هو مفاضلة رئيسية. المزيد من العينات يزيد الدقة لكن يضاعف التكلفة وزمن الاستجابة خطياً. تظهر الأبحاث أن 5-10 عينات تلتقط معظم الفائدة، مع عوائد متناقصة بعد 20. العدد الأمثل N يعتمد على صعوبة المهمة ومتطلبات الدقة.',
        'يتزاوج الاتساق الذاتي بشكل طبيعي مع سلسلة التفكير. كل عينة تستخدم CoT لتوليد سلسلة استدلال كاملة، ويُطبق فحص الاتساق فقط على الإجابات النهائية. قد تأخذ مسارات استدلال مختلفة نهجاً مختلفاً لكنها تصل لنفس الإجابة الصحيحة.',
        'تشمل المتغيرات المتقدمة التصويت المرجح (إعطاء وزن أكبر للسلاسل ذات الثقة الأعلى أو الاستدلال الأطول)، والاتساق الذاتي العالمي (استخدام نموذج لغة لمقارنة الإجابات ذات الشكل الحر بدلاً من المطابقة الدقيقة)، والاتساق التكيفي (البدء بعينات قليلة وإضافة المزيد فقط إذا لم تكن هناك أغلبية واضحة).',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import openai
import re
from collections import Counter

client = openai.OpenAI()

def self_consistent_solve(problem: str, n_samples: int = 5, temperature: float = 0.7) -> dict:
    """Solve a problem using self-consistency with majority voting."""
    answers = []
    chains = []

    for i in range(n_samples):
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Solve the problem step by step. End with 'ANSWER: <number>'."},
                {"role": "user", "content": problem}
            ],
            temperature=temperature
        )
        chain = response.choices[0].message.content
        chains.append(chain)
        # Extract final answer
        match = re.search(r"ANSWER:\s*(.+?)$", chain, re.MULTILINE)
        if match:
            answers.append(match.group(1).strip())

    # Majority voting
    vote_counts = Counter(answers)
    best_answer, best_count = vote_counts.most_common(1)[0]
    confidence = best_count / len(answers)

    return {
        "answer": best_answer,
        "confidence": confidence,
        "vote_distribution": dict(vote_counts),
        "n_samples": n_samples,
        "chains": chains
    }

# Example
problem = "A farmer has 3 fields. Each field has 4 rows. Each row has 7 plants. He loses 15% of plants to pests. How many plants survive?"
result = self_consistent_solve(problem, n_samples=5)
print(f"Answer: {result['answer']}")
print(f"Confidence: {result['confidence']:.0%}")
print(f"Votes: {result['vote_distribution']}")`,
      description: {
        en: 'Self-consistency implementation that samples multiple CoT reasoning chains, extracts answers, and uses majority voting to select the most reliable answer.',
        ar: 'تنفيذ الاتساق الذاتي الذي يأخذ عينات من سلاسل استدلال CoT متعددة، ويستخرج الإجابات، ويستخدم تصويت الأغلبية لاختيار الإجابة الأكثر موثوقية.',
      },
    },
    commonMistakes: {
      en: [
        'Using temperature=0 for all samples, which produces identical outputs and defeats the purpose of diverse reasoning paths.',
        'Not extracting final answers properly — comparing full reasoning chains instead of just the final answer leads to false disagreements.',
        'Using too many samples for simple problems where 3-5 would suffice, wasting compute and increasing costs unnecessarily.',
        'Applying self-consistency to open-ended generation tasks (like writing) where there is no single "correct" answer to vote on.',
      ],
      ar: [
        'استخدام درجة حرارة=0 لجميع العينات، مما ينتج مخرجات متطابقة ويبطل الغرض من مسارات الاستدلال المتنوعة.',
        'عدم استخراج الإجابات النهائية بشكل صحيح — مقارنة سلاسل الاستدلال الكاملة بدلاً من الإجابة النهائية فقط يؤدي لخلافات زائفة.',
        'استخدام عينات كثيرة جداً لمشاكل بسيطة حيث 3-5 كافية، مما يهدر الحساب ويزيد التكاليف دون داعٍ.',
        'تطبيق الاتساق الذاتي على مهام التوليد المفتوحة (مثل الكتابة) حيث لا توجد إجابة "صحيحة" واحدة للتصويت عليها.',
      ],
    },
    bestPractices: {
      en: [
        'Use temperature between 0.5 and 0.7 to balance diversity and quality in the sampled reasoning chains.',
        'Start with 5 samples and increase only if the vote distribution shows no clear majority (low confidence).',
        'Structure the output format so answer extraction is reliable — use markers like "ANSWER:" or JSON output.',
        'Report confidence (majority percentage) alongside the answer so the system can escalate low-confidence results for human review.',
        'Consider adaptive consistency: if the first 3 samples all agree, skip the remaining samples to save cost.',
      ],
      ar: [
        'استخدم درجة حرارة بين 0.5 و0.7 لتحقيق التوازن بين التنوع والجودة في سلاسل الاستدلال المأخوذة.',
        'ابدأ بـ 5 عينات وزد فقط إذا لم يظهر توزيع التصويت أغلبية واضحة (ثقة منخفضة).',
        'نظم تنسيق المخرجات ليكون استخراج الإجابة موثوقاً — استخدم علامات مثل "ANSWER:" أو مخرجات JSON.',
        'أبلغ عن الثقة (نسبة الأغلبية) مع الإجابة حتى يتمكن النظام من تصعيد النتائج منخفضة الثقة للمراجعة البشرية.',
        'فكر في الاتساق التكيفي: إذا اتفقت أول 3 عينات جميعها، تخطَّ العينات المتبقية لتوفير التكلفة.',
      ],
    },
    references: [
      { title: 'Self-Consistency Improves Chain of Thought Reasoning (Wang et al.)', url: 'https://arxiv.org/abs/2203.11171' },
      { title: 'Universal Self-Consistency', url: 'https://arxiv.org/abs/2311.17311' },
      { title: 'Making LLMs More Reliable with Self-Consistency', url: 'https://www.promptingguide.ai/techniques/consistency' },
    ],
    quiz: [
      {
        id: 'selfcon-q1',
        question: {
          en: 'What is the key mechanism behind self-consistency?',
          ar: 'ما هي الآلية الرئيسية وراء الاتساق الذاتي؟',
        },
        options: {
          en: ['Fine-tuning the model on correct answers', 'Majority voting across multiple reasoning paths', 'Using a single deterministic path', 'Training on more data'],
          ar: ['ضبط النموذج الدقيق على الإجابات الصحيحة', 'تصويت الأغلبية عبر مسارات استدلال متعددة', 'استخدام مسار حتمي واحد', 'التدريب على بيانات أكثر'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Self-consistency samples multiple diverse reasoning paths and uses majority voting to select the answer that appears most frequently, leveraging the fact that correct reasoning tends to converge.',
          ar: 'يأخذ الاتساق الذاتي عينات من مسارات استدلال متنوعة ويستخدم تصويت الأغلبية لاختيار الإجابة الأكثر تكراراً، مستفيداً من حقيقة أن الاستدلال الصحيح يميل للتقارب.',
        },
      },
      {
        id: 'selfcon-q2',
        question: {
          en: 'Why should temperature be greater than 0 when using self-consistency?',
          ar: 'لماذا يجب أن تكون درجة الحرارة أكبر من 0 عند استخدام الاتساق الذاتي؟',
        },
        options: {
          en: ['To make responses longer', 'To produce diverse reasoning paths for meaningful voting', 'To reduce costs', 'To improve grammar'],
          ar: ['لجعل الاستجابات أطول', 'لإنتاج مسارات استدلال متنوعة لتصويت ذي معنى', 'لتقليل التكاليف', 'لتحسين القواعد اللغوية'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Temperature > 0 introduces randomness, producing different reasoning paths in each sample. With temperature=0, all samples would be identical, making voting meaningless.',
          ar: 'درجة الحرارة أكبر من 0 تدخل عشوائية، مما ينتج مسارات استدلال مختلفة في كل عينة. مع درجة حرارة=0، ستكون جميع العينات متطابقة، مما يجعل التصويت بلا معنى.',
        },
      },
      {
        id: 'selfcon-q3',
        question: {
          en: 'What is the main trade-off when increasing the number of samples in self-consistency?',
          ar: 'ما هي المفاضلة الرئيسية عند زيادة عدد العينات في الاتساق الذاتي؟',
        },
        options: {
          en: ['Accuracy decreases', 'The model forgets previous answers', 'Cost and latency increase linearly', 'The answer format changes'],
          ar: ['تنخفض الدقة', 'ينسى النموذج الإجابات السابقة', 'تزداد التكلفة وزمن الاستجابة خطياً', 'يتغير تنسيق الإجابة'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Each additional sample requires a full LLM inference call, so cost and latency scale linearly with N. The accuracy benefit has diminishing returns beyond ~10-20 samples.',
          ar: 'كل عينة إضافية تتطلب استدعاء استدلال كامل لنموذج اللغة، لذا تتزايد التكلفة وزمن الاستجابة خطياً مع N. فائدة الدقة لها عوائد متناقصة بعد حوالي 10-20 عينة.',
        },
      },
    ],
  },

  'tree-of-thoughts': {
    beginnerDefinition: {
      en: 'Tree of Thoughts (ToT) is an advanced reasoning technique where the AI explores multiple thinking paths like branches of a tree. At each step, it generates several possible next thoughts, evaluates which ones look most promising, and can backtrack from dead ends — similar to how a chess player considers multiple moves ahead and abandons bad lines of play.',
      ar: 'شجرة الأفكار (ToT) هي تقنية استدلال متقدمة حيث يستكشف الذكاء الاصطناعي مسارات تفكير متعددة مثل فروع الشجرة. في كل خطوة، يولد عدة أفكار تالية ممكنة، ويقيّم أيها يبدو واعداً أكثر، ويمكنه التراجع عن الطرق المسدودة — بشكل مشابه لكيفية تفكير لاعب الشطرنج في عدة حركات للأمام وترك الخطوط السيئة.',
    },
    technicalDefinition: {
      en: 'Tree of Thoughts (ToT) extends Chain of Thought by structuring reasoning as a search tree where each node represents a partial reasoning state. At each node, the LLM generates multiple candidate "thoughts" (next reasoning steps), an evaluation function (LLM-based or heuristic) scores each candidate\'s promise, and a search algorithm (BFS or DFS) selects which branches to expand. Pruning removes low-scoring branches, and backtracking enables recovery from dead ends. This deliberate exploration-exploitation framework significantly outperforms linear CoT on tasks requiring search, planning, or creative problem-solving.',
      ar: 'تمتد شجرة الأفكار (ToT) من سلسلة التفكير من خلال هيكلة الاستدلال كشجرة بحث حيث تمثل كل عقدة حالة استدلال جزئية. في كل عقدة، يولد نموذج اللغة عدة "أفكار" مرشحة (خطوات استدلال تالية)، وتقيّم دالة تقييم (قائمة على نموذج اللغة أو إرشادية) مدى وعد كل مرشح، وتختار خوارزمية بحث (BFS أو DFS) أي الفروع يتم توسيعها. التقليم يزيل الفروع منخفضة التقييم، والتراجع يمكّن من التعافي من الطرق المسدودة.',
    },
    analogy: {
      en: 'Think of solving a maze. Chain of Thought is like walking straight ahead and hoping you picked the right path at each turn. Self-consistency is like sending five people through the maze independently. Tree of Thoughts is like having a drone view — at each junction, you can see multiple paths ahead, evaluate which ones look like they lead to the exit, explore the most promising one, and backtrack if it hits a wall. You are systematically searching the maze rather than gambling on a single path.',
      ar: 'فكر في حل متاهة. سلسلة التفكير مثل المشي مباشرة للأمام وأمل أنك اخترت المسار الصحيح عند كل منعطف. الاتساق الذاتي مثل إرسال خمسة أشخاص عبر المتاهة بشكل مستقل. شجرة الأفكار مثل وجود منظور طائرة مسيّرة — عند كل تقاطع، يمكنك رؤية مسارات متعددة للأمام، وتقييم أيها يبدو أنه يقود للمخرج، واستكشاف الأكثر وعداً، والتراجع إذا اصطدم بجدار. أنت تبحث في المتاهة بشكل منهجي بدلاً من المقامرة على مسار واحد.',
    },
    explanation: {
      en: [
        'The key innovation of ToT is treating reasoning as a search problem. Instead of generating a single linear chain of thoughts, the model generates a tree where each level represents a reasoning step, and each node at that level represents one possible thought at that step.',
        'Thought generation creates candidate next steps. At each node, the LLM is prompted to generate K different possible continuations of the reasoning. These candidates should represent genuinely different approaches or perspectives, not minor rephrasing of the same idea.',
        'The evaluation function is crucial — it scores how promising each candidate thought is. This can be done by the LLM itself (asking "Rate how likely this line of reasoning will lead to the correct answer on a scale of 1-10") or by a heuristic function specific to the problem domain.',
        'Search algorithms determine the exploration strategy. Breadth-First Search (BFS) explores all thoughts at one level before moving deeper — good when you want to compare options at each step. Depth-First Search (DFS) follows the most promising branch as deep as possible before backtracking — more efficient for problems with clear good/bad signals.',
        'Pruning and backtracking make ToT practical. Branches that score below a threshold are pruned (abandoned), preventing exponential growth. When the deepest explored branch leads to a dead end, the algorithm backtracks to the last unexplored high-scoring branch and continues from there.',
        'ToT is most valuable for tasks requiring exploration: creative writing, puzzle solving, mathematical proofs, game playing, and strategic planning. For straightforward factual questions, the overhead of tree search is not justified.',
      ],
      ar: [
        'الابتكار الرئيسي لشجرة الأفكار هو معاملة الاستدلال كمشكلة بحث. بدلاً من توليد سلسلة أفكار خطية واحدة، يولد النموذج شجرة حيث يمثل كل مستوى خطوة استدلال، وتمثل كل عقدة في ذلك المستوى فكرة ممكنة واحدة في تلك الخطوة.',
        'توليد الأفكار ينشئ خطوات تالية مرشحة. في كل عقدة، يُوجه نموذج اللغة لتوليد K استمرارات مختلفة ممكنة للاستدلال. يجب أن تمثل هذه المرشحات نهجاً أو منظورات مختلفة حقاً، وليس إعادة صياغة بسيطة لنفس الفكرة.',
        'دالة التقييم حاسمة — تقيّم مدى وعد كل فكرة مرشحة. يمكن القيام بذلك بواسطة نموذج اللغة نفسه (بسؤال "قيّم مدى احتمال أن يؤدي خط الاستدلال هذا للإجابة الصحيحة على مقياس من 1-10") أو بدالة إرشادية خاصة بمجال المشكلة.',
        'تحدد خوارزميات البحث استراتيجية الاستكشاف. البحث بالعرض أولاً (BFS) يستكشف جميع الأفكار في مستوى واحد قبل الانتقال أعمق — جيد عندما تريد مقارنة الخيارات في كل خطوة. البحث بالعمق أولاً (DFS) يتبع الفرع الأكثر وعداً بأعمق ما يمكن قبل التراجع — أكثر كفاءة للمشاكل ذات الإشارات الواضحة الجيدة/السيئة.',
        'التقليم والتراجع يجعلان شجرة الأفكار عملية. الفروع التي تقيّم تحت عتبة معينة تُقلم (تُهمل)، مما يمنع النمو الأسي. عندما يقود أعمق فرع مستكشف إلى طريق مسدود، تتراجع الخوارزمية إلى آخر فرع غير مستكشف عالي التقييم وتستمر من هناك.',
        'شجرة الأفكار أكثر قيمة للمهام التي تتطلب استكشافاً: الكتابة الإبداعية، حل الألغاز، البراهين الرياضية، اللعب، والتخطيط الاستراتيجي. للأسئلة الواقعية المباشرة، لا يُبرر حمل البحث الشجري.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import openai

client = openai.OpenAI()

def generate_thoughts(problem: str, current_state: str, n: int = 3) -> list[str]:
    """Generate n candidate next thoughts."""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": f"Generate {n} different possible next reasoning steps."},
            {"role": "user", "content": f"Problem: {problem}\\nProgress so far: {current_state}\\nGenerate {n} distinct next steps, separated by ---"}
        ],
        temperature=0.8
    )
    return response.choices[0].message.content.split("---")

def evaluate_thought(problem: str, thought: str) -> float:
    """Score how promising a thought is (0-1)."""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "Rate this reasoning step's promise on a scale 0-10."},
            {"role": "user", "content": f"Problem: {problem}\\nReasoning: {thought}\\nScore (just the number):"}
        ],
        temperature=0
    )
    try:
        return float(response.choices[0].message.content.strip()) / 10
    except ValueError:
        return 0.5

def tree_of_thoughts_dfs(problem: str, max_depth: int = 3, branch_factor: int = 3, threshold: float = 0.4) -> str:
    """Solve a problem using Tree of Thoughts with DFS."""
    best_solution = ""
    best_score = 0

    def dfs(state: str, depth: int):
        nonlocal best_solution, best_score
        if depth >= max_depth:
            score = evaluate_thought(problem, state)
            if score > best_score:
                best_score = score
                best_solution = state
            return

        thoughts = generate_thoughts(problem, state, branch_factor)
        scored = [(evaluate_thought(problem, t), t) for t in thoughts]
        scored.sort(key=lambda x: x[0], reverse=True)

        for score, thought in scored:
            if score >= threshold:  # Prune low-scoring branches
                dfs(f"{state}\\n{thought.strip()}", depth + 1)

    dfs("Starting analysis...", 0)
    return best_solution

# Example
solution = tree_of_thoughts_dfs(
    "What is 24 using the numbers 1, 5, 6, 7 with +, -, *, /?",
    max_depth=3, branch_factor=3
)
print(f"Best solution:\\n{solution}")`,
      description: {
        en: 'A Tree of Thoughts implementation using DFS with thought generation, LLM-based evaluation, pruning of low-scoring branches, and backtracking.',
        ar: 'تنفيذ شجرة الأفكار باستخدام DFS مع توليد الأفكار والتقييم القائم على نموذج اللغة وتقليم الفروع منخفضة التقييم والتراجع.',
      },
    },
    commonMistakes: {
      en: [
        'Setting the branch factor too high, causing exponential cost growth — each level multiplies API calls by the branch factor.',
        'Using a weak evaluation function that cannot distinguish promising from unpromising thoughts, making pruning ineffective.',
        'Not implementing proper pruning, leading to the tree growing exponentially and exhausting the compute budget before finding a solution.',
        'Applying ToT to simple problems that do not require search or exploration, wasting resources on unnecessary complexity.',
      ],
      ar: [
        'تعيين عامل التفرع عالياً جداً، مما يسبب نمواً أسياً في التكلفة — كل مستوى يضاعف استدعاءات API بعامل التفرع.',
        'استخدام دالة تقييم ضعيفة لا تستطيع التمييز بين الأفكار الواعدة وغير الواعدة، مما يجعل التقليم غير فعال.',
        'عدم تنفيذ تقليم مناسب، مما يؤدي لنمو الشجرة أسياً واستنفاد ميزانية الحساب قبل إيجاد حل.',
        'تطبيق شجرة الأفكار على مشاكل بسيطة لا تتطلب بحثاً أو استكشافاً، مما يهدر الموارد على تعقيد غير ضروري.',
      ],
    },
    bestPractices: {
      en: [
        'Start with a small branch factor (2-3) and shallow depth (2-3 levels) and increase only if solution quality is insufficient.',
        'Design domain-specific evaluation functions that can reliably distinguish good from bad reasoning paths for your use case.',
        'Use BFS for problems where comparing alternatives at each step is important, and DFS for problems with clear progress signals.',
        'Implement aggressive pruning with a reasonable threshold to keep the search space manageable and costs predictable.',
        'Cache evaluation results for identical or similar thought states to avoid redundant LLM calls and reduce costs.',
      ],
      ar: [
        'ابدأ بعامل تفرع صغير (2-3) وعمق ضحل (2-3 مستويات) وزد فقط إذا كانت جودة الحل غير كافية.',
        'صمم دوال تقييم خاصة بالمجال يمكنها التمييز بشكل موثوق بين مسارات الاستدلال الجيدة والسيئة لحالة استخدامك.',
        'استخدم BFS للمشاكل حيث مقارنة البدائل في كل خطوة مهمة، وDFS للمشاكل ذات إشارات التقدم الواضحة.',
        'نفذ تقليماً صارماً بعتبة معقولة للحفاظ على مساحة البحث قابلة للإدارة والتكاليف متوقعة.',
        'خزّن نتائج التقييم مؤقتاً لحالات الأفكار المتطابقة أو المتشابهة لتجنب استدعاءات نموذج اللغة المتكررة وتقليل التكاليف.',
      ],
    },
    references: [
      { title: 'Tree of Thoughts: Deliberate Problem Solving with LLMs', url: 'https://arxiv.org/abs/2305.10601' },
      { title: 'Tree of Thoughts GitHub Repository', url: 'https://github.com/princeton-nlp/tree-of-thought-llm' },
      { title: 'Beyond Chain of Thought: Tree and Graph Reasoning', url: 'https://arxiv.org/abs/2305.16582' },
    ],
    quiz: [
      {
        id: 'tot-q1',
        question: {
          en: 'How does Tree of Thoughts differ from Chain of Thought?',
          ar: 'كيف تختلف شجرة الأفكار عن سلسلة التفكير؟',
        },
        options: {
          en: ['It uses a smaller model', 'It explores multiple branching reasoning paths instead of a single linear chain', 'It does not use any prompting', 'It only works with GPT-4'],
          ar: ['تستخدم نموذجاً أصغر', 'تستكشف مسارات استدلال متفرعة متعددة بدلاً من سلسلة خطية واحدة', 'لا تستخدم أي توجيه', 'تعمل فقط مع GPT-4'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'ToT extends CoT by generating multiple candidate thoughts at each step (branches), evaluating them, and selectively exploring promising paths while pruning dead ends.',
          ar: 'تمتد شجرة الأفكار من سلسلة التفكير بتوليد عدة أفكار مرشحة في كل خطوة (فروع)، وتقييمها، واستكشاف المسارات الواعدة بشكل انتقائي مع تقليم الطرق المسدودة.',
        },
      },
      {
        id: 'tot-q2',
        question: {
          en: 'What is the role of the evaluation function in Tree of Thoughts?',
          ar: 'ما هو دور دالة التقييم في شجرة الأفكار؟',
        },
        options: {
          en: ['To generate new thoughts', 'To format the final answer', 'To score how promising each candidate thought is for pruning decisions', 'To translate between languages'],
          ar: ['لتوليد أفكار جديدة', 'لتنسيق الإجابة النهائية', 'لتقييم مدى وعد كل فكرة مرشحة لقرارات التقليم', 'للترجمة بين اللغات'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'The evaluation function scores each candidate thought to determine which branches are worth exploring further and which should be pruned, guiding the search efficiently.',
          ar: 'تقيّم دالة التقييم كل فكرة مرشحة لتحديد أي الفروع تستحق الاستكشاف أكثر وأيها يجب تقليمها، مما يوجه البحث بكفاءة.',
        },
      },
      {
        id: 'tot-q3',
        question: {
          en: 'Why is pruning essential in Tree of Thoughts?',
          ar: 'لماذا يعد التقليم ضرورياً في شجرة الأفكار؟',
        },
        options: {
          en: ['To improve grammar', 'To prevent exponential growth of the search tree and control costs', 'To make the answer shorter', 'To increase temperature'],
          ar: ['لتحسين القواعد اللغوية', 'لمنع النمو الأسي لشجرة البحث والتحكم في التكاليف', 'لجعل الإجابة أقصر', 'لزيادة درجة الحرارة'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Without pruning, the search tree grows exponentially (K^D nodes for branch factor K and depth D). Pruning removes unpromising branches to keep computation tractable and costs manageable.',
          ar: 'بدون التقليم، تنمو شجرة البحث أسياً (K^D عقدة لعامل تفرع K وعمق D). يزيل التقليم الفروع غير الواعدة لإبقاء الحساب قابلاً للمعالجة والتكاليف قابلة للإدارة.',
        },
      },
    ],
  },

  'autogen-conversable-agents': {
    beginnerDefinition: {
      en: 'AutoGen ConversableAgent is a building block from Microsoft\'s AutoGen framework that makes it easy to create AI agents that can have conversations with each other or with humans. You configure each agent with a system message defining its role, and they can automatically converse, use tools, and know when to stop talking — like setting up a team of virtual workers who coordinate through chat.',
      ar: 'AutoGen ConversableAgent هو لبنة بناء من إطار عمل AutoGen من Microsoft تسهل إنشاء وكلاء ذكاء اصطناعي يمكنهم إجراء محادثات مع بعضهم البعض أو مع البشر. تقوم بتكوين كل وكيل برسالة نظام تحدد دوره، ويمكنهم التحادث تلقائياً واستخدام الأدوات ومعرفة متى يتوقفون عن الكلام — مثل إعداد فريق من العمال الافتراضيين الذين ينسقون عبر الدردشة.',
    },
    technicalDefinition: {
      en: 'AutoGen\'s ConversableAgent is a base class that encapsulates an LLM-powered conversational agent with configurable system messages, LLM backends, human input modes, tool registration, and conversation termination conditions. It supports three human input modes (ALWAYS, TERMINATE, NEVER), enabling fully autonomous or human-in-the-loop workflows. Agents communicate through a message-passing protocol, with built-in support for function calling, code execution, and multi-turn conversation management. The UserProxyAgent subclass acts as a human representative that can execute code and relay human input.',
      ar: 'ConversableAgent في AutoGen هو فئة أساسية تغلف وكيل محادثة مدعوم بنموذج لغة مع رسائل نظام قابلة للتكوين وخلفيات نماذج لغة وأوضاع إدخال بشري وتسجيل أدوات وشروط إنهاء المحادثة. يدعم ثلاثة أوضاع إدخال بشري (دائماً، عند الإنهاء، أبداً)، مما يمكّن من سير عمل مستقل بالكامل أو بمشاركة بشرية. يتواصل الوكلاء من خلال بروتوكول تمرير الرسائل، مع دعم مدمج لاستدعاء الوظائف وتنفيذ الأكواد وإدارة المحادثات متعددة الأدوار.',
    },
    analogy: {
      en: 'Think of AutoGen ConversableAgent like walkie-talkies for AI. You give each person (agent) a walkie-talkie and a role card (system message). The coder\'s card says "You write Python code," the reviewer\'s says "You review code for bugs." They talk to each other over the walkie-talkies, each contributing their expertise. A human supervisor can jump in at any time by pressing their own walkie-talkie button. And there is a clear rule for when the conversation ends — like "stop when the code passes all tests."',
      ar: 'فكر في AutoGen ConversableAgent مثل أجهزة اتصال لاسلكي للذكاء الاصطناعي. تعطي كل شخص (وكيل) جهاز اتصال لاسلكي وبطاقة دور (رسالة نظام). بطاقة المبرمج تقول "أنت تكتب كود Python"، وبطاقة المراجع تقول "أنت تراجع الأكواد بحثاً عن أخطاء." يتحدثون مع بعضهم عبر أجهزة الاتصال، كل منهم يساهم بخبرته. يمكن لمشرف بشري التدخل في أي وقت بالضغط على زر جهازه. وهناك قاعدة واضحة لمتى تنتهي المحادثة — مثل "توقف عندما يجتاز الكود جميع الاختبارات."',
    },
    explanation: {
      en: [
        'ConversableAgent is the core building block in AutoGen. Every agent is a ConversableAgent (or a subclass of it). You create an agent by specifying its name, system message (defining its role and behavior), LLM configuration, and optional settings like human input mode and maximum consecutive auto-replies.',
        'System messages are critical — they define each agent\'s personality, expertise, and behavior rules. A well-crafted system message might say: "You are a senior Python developer. Write clean, well-documented code. Always include type hints and error handling. Respond with complete code blocks." The LLM then acts according to these instructions in every response.',
        'The UserProxyAgent is a special ConversableAgent subclass designed to represent a human user. It can execute code generated by other agents (in a sandboxed environment), relay human input when the human_input_mode is set to ALWAYS or TERMINATE, and trigger termination when specific conditions are met.',
        'Conversation termination is managed through termination conditions — functions or keywords that signal when the conversation should stop. Common approaches include checking for a keyword like "TERMINATE" in the response, limiting the maximum number of turns, or using a custom function that checks whether the task objective has been achieved.',
        'Tool registration allows agents to call external functions. You register a Python function with an agent, providing its name, description, and parameter schema. When the LLM decides to use the tool, AutoGen handles the function calling protocol, executes the function, and returns the result to the conversation.',
        'Multi-agent conversations can be orchestrated in several patterns: two-agent chat (simple back-and-forth), group chat (multiple agents coordinated by a GroupChatManager), and nested chats (an agent triggers a sub-conversation with other agents to resolve a sub-task).',
      ],
      ar: [
        'ConversableAgent هو لبنة البناء الأساسية في AutoGen. كل وكيل هو ConversableAgent (أو فئة فرعية منه). تنشئ وكيلاً بتحديد اسمه ورسالة النظام (التي تحدد دوره وسلوكه) وتكوين نموذج اللغة وإعدادات اختيارية مثل وضع الإدخال البشري والحد الأقصى للردود التلقائية المتتالية.',
        'رسائل النظام حاسمة — تحدد شخصية كل وكيل وخبرته وقواعد سلوكه. رسالة نظام مصاغة جيداً قد تقول: "أنت مطور Python أول. اكتب كوداً نظيفاً وموثقاً جيداً. دائماً أدرج تلميحات الأنواع ومعالجة الأخطاء. استجب بكتل كود كاملة." ثم يتصرف نموذج اللغة وفقاً لهذه التعليمات في كل استجابة.',
        'UserProxyAgent هو فئة فرعية خاصة من ConversableAgent مصممة لتمثيل المستخدم البشري. يمكنه تنفيذ الأكواد المولدة من وكلاء آخرين (في بيئة معزولة)، ونقل الإدخال البشري عندما يكون وضع الإدخال البشري مضبوطاً على "دائماً" أو "عند الإنهاء"، وتشغيل الإنهاء عند تحقق شروط محددة.',
        'تُدار إنهاء المحادثة من خلال شروط الإنهاء — وظائف أو كلمات مفتاحية تشير إلى متى يجب أن تتوقف المحادثة. تتضمن الأساليب الشائعة التحقق من كلمة مفتاحية مثل "TERMINATE" في الاستجابة، أو تحديد عدد أقصى من الأدوار، أو استخدام دالة مخصصة تتحقق مما إذا كان هدف المهمة قد تحقق.',
        'يتيح تسجيل الأدوات للوكلاء استدعاء وظائف خارجية. تسجل دالة Python مع وكيل، بتقديم اسمها ووصفها ومخطط معاملاتها. عندما يقرر نموذج اللغة استخدام الأداة، يتعامل AutoGen مع بروتوكول استدعاء الوظائف وينفذ الدالة ويعيد النتيجة للمحادثة.',
        'يمكن تنسيق محادثات متعددة الوكلاء بعدة أنماط: محادثة ثنائية الوكيل (ذهاب وإياب بسيط)، محادثة جماعية (عدة وكلاء منسقين بواسطة GroupChatManager)، ومحادثات متداخلة (وكيل يشغل محادثة فرعية مع وكلاء آخرين لحل مهمة فرعية).',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from autogen import ConversableAgent, UserProxyAgent

# Configure LLM
llm_config = {"model": "gpt-4o", "api_key": "your-key"}

# Create a coding agent
coder = ConversableAgent(
    name="Coder",
    system_message=(
        "You are a Python developer. Write clean, well-documented code. "
        "Always include type hints. When the task is complete, reply TERMINATE."
    ),
    llm_config=llm_config,
)

# Create a code reviewer agent
reviewer = ConversableAgent(
    name="Reviewer",
    system_message=(
        "You are a code reviewer. Review the code for bugs, style issues, "
        "and suggest improvements. Be constructive and specific."
    ),
    llm_config=llm_config,
)

# Create a human proxy that can execute code
user_proxy = UserProxyAgent(
    name="UserProxy",
    human_input_mode="TERMINATE",  # Ask human only at termination
    max_consecutive_auto_reply=5,
    is_termination_msg=lambda msg: "TERMINATE" in msg.get("content", ""),
    code_execution_config={"work_dir": "coding_output", "use_docker": False},
)

# Register a tool with the coder
def run_tests(code: str) -> str:
    """Run unit tests on the provided code."""
    return "All 5 tests passed!"

coder.register_for_llm(name="run_tests", description="Run unit tests")(run_tests)
user_proxy.register_for_execution(name="run_tests")(run_tests)

# Start a two-agent conversation
user_proxy.initiate_chat(
    coder,
    message="Write a Python function to calculate the Fibonacci sequence using memoization."
)`,
      description: {
        en: 'AutoGen setup with a ConversableAgent (coder), another agent (reviewer), a UserProxyAgent with code execution, tool registration, and termination conditions.',
        ar: 'إعداد AutoGen مع ConversableAgent (مبرمج)، ووكيل آخر (مراجع)، وUserProxyAgent مع تنفيذ الأكواد وتسجيل الأدوات وشروط الإنهاء.',
      },
    },
    commonMistakes: {
      en: [
        'Writing vague system messages that do not clearly define the agent\'s role, leading to unfocused and inconsistent behavior.',
        'Not setting proper termination conditions, causing agents to chat indefinitely and consume unlimited tokens.',
        'Using human_input_mode="ALWAYS" in production, which blocks execution and requires constant human attention.',
        'Enabling code execution without sandboxing (use_docker=False in production), creating security vulnerabilities.',
      ],
      ar: [
        'كتابة رسائل نظام غامضة لا تحدد دور الوكيل بوضوح، مما يؤدي لسلوك غير مركز وغير متسق.',
        'عدم تعيين شروط إنهاء مناسبة، مما يتسبب في محادثة الوكلاء إلى ما لا نهاية واستهلاك رموز غير محدودة.',
        'استخدام human_input_mode="ALWAYS" في الإنتاج، مما يحظر التنفيذ ويتطلب اهتماماً بشرياً مستمراً.',
        'تمكين تنفيذ الأكواد بدون عزل (use_docker=False في الإنتاج)، مما يخلق ثغرات أمنية.',
      ],
    },
    bestPractices: {
      en: [
        'Write detailed, specific system messages that clearly define each agent\'s role, capabilities, constraints, and output format.',
        'Always set termination conditions: use is_termination_msg, max_consecutive_auto_reply, or both to prevent runaway conversations.',
        'Use UserProxyAgent with human_input_mode="TERMINATE" for development and "NEVER" for fully autonomous production workflows.',
        'Enable Docker-based code execution in production for security: code_execution_config={"use_docker": True}.',
        'Start with two-agent conversations before scaling to group chats — simpler setups are easier to debug and more predictable.',
      ],
      ar: [
        'اكتب رسائل نظام مفصلة ومحددة تحدد بوضوح دور كل وكيل وقدراته وقيوده وتنسيق المخرجات.',
        'عيّن دائماً شروط الإنهاء: استخدم is_termination_msg أو max_consecutive_auto_reply أو كليهما لمنع المحادثات الخارجة عن السيطرة.',
        'استخدم UserProxyAgent مع human_input_mode="TERMINATE" للتطوير و"NEVER" لسير العمل الإنتاجي المستقل بالكامل.',
        'مكّن تنفيذ الأكواد المستند إلى Docker في الإنتاج للأمان: code_execution_config={"use_docker": True}.',
        'ابدأ بمحادثات ثنائية الوكيل قبل التوسع لمحادثات المجموعة — الإعدادات الأبسط أسهل في التصحيح وأكثر قابلية للتنبؤ.',
      ],
    },
    references: [
      { title: 'AutoGen: Enabling Next-Gen LLM Applications', url: 'https://arxiv.org/abs/2308.08155' },
      { title: 'AutoGen Official Documentation', url: 'https://microsoft.github.io/autogen/' },
      { title: 'AutoGen GitHub Repository', url: 'https://github.com/microsoft/autogen' },
    ],
    quiz: [
      {
        id: 'autogen-q1',
        question: {
          en: 'What is the purpose of the system_message parameter in ConversableAgent?',
          ar: 'ما هو الغرض من معامل system_message في ConversableAgent؟',
        },
        options: {
          en: ['To log debug information', 'To define the agent\'s role, behavior, and constraints', 'To set the API key', 'To configure the network settings'],
          ar: ['لتسجيل معلومات التصحيح', 'لتحديد دور الوكيل وسلوكه وقيوده', 'لتعيين مفتاح API', 'لتكوين إعدادات الشبكة'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The system_message defines the agent\'s identity, expertise, behavior rules, and output format. It serves as the foundation instruction that guides all of the agent\'s responses.',
          ar: 'تحدد system_message هوية الوكيل وخبرته وقواعد سلوكه وتنسيق المخرجات. تعمل كتعليمات أساسية توجه جميع استجابات الوكيل.',
        },
      },
      {
        id: 'autogen-q2',
        question: {
          en: 'What does the UserProxyAgent\'s human_input_mode="NEVER" setting do?',
          ar: 'ماذا يفعل إعداد human_input_mode="NEVER" في UserProxyAgent؟',
        },
        options: {
          en: ['Asks for human input on every message', 'Disables the agent entirely', 'Makes the agent operate fully autonomously without human input', 'Only accepts voice input'],
          ar: ['يطلب إدخالاً بشرياً في كل رسالة', 'يعطل الوكيل بالكامل', 'يجعل الوكيل يعمل بشكل مستقل بالكامل دون إدخال بشري', 'يقبل فقط الإدخال الصوتي'],
        },
        correctAnswer: 2,
        explanation: {
          en: 'human_input_mode="NEVER" means the UserProxyAgent operates fully autonomously, automatically processing messages and executing code without asking for human input at any point.',
          ar: 'human_input_mode="NEVER" يعني أن UserProxyAgent يعمل بشكل مستقل بالكامل، يعالج الرسائل تلقائياً وينفذ الأكواد دون طلب إدخال بشري في أي نقطة.',
        },
      },
      {
        id: 'autogen-q3',
        question: {
          en: 'Why are termination conditions important in AutoGen conversations?',
          ar: 'لماذا تعد شروط الإنهاء مهمة في محادثات AutoGen؟',
        },
        options: {
          en: ['They improve response quality', 'They prevent infinite conversation loops and unbounded token costs', 'They are optional and rarely needed', 'They only matter for group chats'],
          ar: ['تحسن جودة الاستجابة', 'تمنع حلقات المحادثة اللانهائية وتكاليف الرموز غير المحدودة', 'إنها اختيارية ونادراً ما تكون مطلوبة', 'تهم فقط محادثات المجموعة'],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Without termination conditions, agents will keep conversing indefinitely. Termination conditions (keywords, max turns, custom functions) ensure conversations end when the task is complete or a limit is reached.',
          ar: 'بدون شروط الإنهاء، سيستمر الوكلاء في التحادث إلى ما لا نهاية. شروط الإنهاء (كلمات مفتاحية، حد أقصى للأدوار، دوال مخصصة) تضمن انتهاء المحادثات عند اكتمال المهمة أو الوصول لحد معين.',
        },
      },
    ],
  },
};
