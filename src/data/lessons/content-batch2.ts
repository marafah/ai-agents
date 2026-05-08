import type { LessonContentData } from './content';

export const batch2: Record<string, LessonContentData> = {
  'langgraph-nodes-edges': {
    beginnerDefinition: {
      en: 'LangGraph Nodes and Edges are the building blocks of AI agent workflows. Nodes are individual steps or tasks your agent performs, while Edges are the connections that define the order in which those steps run - like a flowchart that tells your agent what to do next.',
      ar: 'العقد والحواف في LangGraph هي اللبنات الأساسية لسير عمل وكيل الذكاء الاصطناعي. العقد هي الخطوات أو المهام الفردية التي ينفذها وكيلك، بينما الحواف هي الاتصالات التي تحدد الترتيب الذي تُنفَّذ به تلك الخطوات - مثل مخطط انسيابي يُخبر وكيلك بما يجب فعله بعد ذلك.',
    },
    technicalDefinition: {
      en: 'In LangGraph, a Node is a Python function or callable that receives a state object, performs computation (such as calling an LLM, executing a tool, or transforming data), and returns an updated state. An Edge is a directed connection between two nodes that controls execution flow. Edges can be unconditional (always proceed from A to B) or conditional (choose the next node based on state values). The graph is compiled into a runnable that executes nodes in topological order, passing state through the defined edges.',
      ar: 'في LangGraph، العقدة هي دالة Python أو كائن قابل للاستدعاء يستقبل كائن الحالة، وينفذ عمليات حسابية (مثل استدعاء نموذج لغوي كبير، أو تنفيذ أداة، أو تحويل البيانات)، ويُعيد حالة محدَّثة. الحافة هي اتصال موجَّه بين عقدتين يتحكم في تدفق التنفيذ. يمكن أن تكون الحواف غير مشروطة (الانتقال دائماً من A إلى B) أو مشروطة (اختيار العقدة التالية بناءً على قيم الحالة). يُجمَّع الرسم البياني إلى كيان قابل للتشغيل ينفذ العقد بترتيب طوبولوجي، مع تمرير الحالة عبر الحواف المحددة.',
    },
    analogy: {
      en: 'Think of a LangGraph as an airport terminal. Each gate (node) is a specific checkpoint: check-in, security screening, boarding. The corridors between gates (edges) tell passengers which gate to go to next. Some corridors are one-way with no choice (unconditional edges), while others have signs that route different passengers to different gates based on their ticket class or destination (conditional edges). The state is like each passenger\'s boarding pass - it carries all the information needed at each checkpoint.',
      ar: 'فكر في LangGraph كمبنى مطار. كل بوابة (عقدة) هي نقطة تفتيش محددة: تسجيل الوصول، فحص الأمن، الصعود للطائرة. الممرات بين البوابات (الحواف) تُخبر المسافرين إلى أي بوابة يذهبون بعد ذلك. بعض الممرات أحادية الاتجاه بلا خيار (حواف غير مشروطة)، بينما تحتوي أخرى على لافتات توجِّه مسافرين مختلفين إلى بوابات مختلفة بناءً على درجة تذكرتهم أو وجهتهم (حواف مشروطة). الحالة تشبه بطاقة الصعود لكل مسافر - تحمل جميع المعلومات اللازمة في كل نقطة تفتيش.',
    },
    explanation: {
      en: [
        'A LangGraph begins with a StateGraph object that defines the shape of the state shared between all nodes. The state is typically a TypedDict or Pydantic model containing fields like messages, tool results, and intermediate outputs.',
        'Nodes are added to the graph using add_node(name, function). Each node function takes the current state as input and returns a dictionary of updated state fields. LangGraph merges these updates into the shared state automatically.',
        'Edges connect nodes using add_edge(from_node, to_node) for unconditional transitions. The special START and END constants mark entry and exit points of the graph, allowing the runtime to know where execution begins and when it terminates.',
        'The graph is compiled with graph.compile() which validates the structure, checks for cycles, and produces a runnable object. You can then invoke it with an initial state using compiled_graph.invoke(initial_state).',
        'During execution, LangGraph maintains a checkpoint of the state after each node runs. This allows for debugging, replaying from a specific point, and implementing human-in-the-loop patterns where execution can be paused and resumed.',
      ],
      ar: [
        'يبدأ LangGraph بكائن StateGraph يحدد شكل الحالة المشتركة بين جميع العقد. الحالة عادةً ما تكون TypedDict أو نموذج Pydantic يحتوي على حقول مثل الرسائل ونتائج الأدوات والمخرجات الوسيطة.',
        'تُضاف العقد إلى الرسم البياني باستخدام add_node(name, function). تأخذ كل دالة عقدة الحالة الحالية كمدخل وتُعيد قاموساً بحقول الحالة المحدَّثة. يدمج LangGraph هذه التحديثات في الحالة المشتركة تلقائياً.',
        'تربط الحواف العقد باستخدام add_edge(from_node, to_node) للانتقالات غير المشروطة. تُحدِّد ثوابت START وEND الخاصة نقاط الدخول والخروج من الرسم البياني، مما يسمح للنظام بمعرفة مكان بدء التنفيذ ومتى ينتهي.',
        'يُجمَّع الرسم البياني باستخدام graph.compile() الذي يتحقق من الهيكل، ويفحص الدورات، وينتج كائناً قابلاً للتشغيل. يمكنك بعد ذلك تشغيله بحالة أولية باستخدام compiled_graph.invoke(initial_state).',
        'أثناء التنفيذ، يحتفظ LangGraph بنقطة تفتيش للحالة بعد تشغيل كل عقدة. يسمح ذلك بتصحيح الأخطاء، وإعادة التشغيل من نقطة محددة، وتنفيذ أنماط الإنسان في الحلقة حيث يمكن إيقاف التنفيذ واستئنافه.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI

# 1. Define the state schema
class AgentState(TypedDict):
    messages: Annotated[list, add_messages]
    step_count: int

# 2. Define nodes (functions that transform state)
llm = ChatOpenAI(model="gpt-4o-mini")

def call_llm(state: AgentState) -> dict:
    response = llm.invoke(state["messages"])
    return {
        "messages": [response],
        "step_count": state["step_count"] + 1
    }

def summarize(state: AgentState) -> dict:
    summary = f"Completed in {state['step_count']} steps."
    return {"messages": [{"role": "system", "content": summary}]}

# 3. Build the graph
graph = StateGraph(AgentState)

# Add nodes
graph.add_node("llm_call", call_llm)
graph.add_node("summarize", summarize)

# Add edges (unconditional flow)
graph.add_edge(START, "llm_call")
graph.add_edge("llm_call", "summarize")
graph.add_edge("summarize", END)

# 4. Compile and run
app = graph.compile()
result = app.invoke({
    "messages": [{"role": "user", "content": "Hello, agent!"}],
    "step_count": 0
})
print(result["messages"][-1].content)`,
      description: {
        en: 'A minimal LangGraph example showing how to define state, create nodes, connect them with edges, compile the graph, and invoke it with an initial state.',
        ar: 'مثال بسيط على LangGraph يوضح كيفية تعريف الحالة، وإنشاء العقد، وربطها بالحواف، وتجميع الرسم البياني، وتشغيله بحالة أولية.',
      },
    },
    commonMistakes: {
      en: [
        'Forgetting to add START and END edges - without these, the graph has no defined entry or exit point and will raise a validation error at compile time.',
        'Returning the full state from a node instead of only the changed fields - nodes should return a partial state dict with only the fields they modify, not a copy of the entire state.',
        'Mutating the state object directly inside a node instead of returning a new dict - LangGraph expects immutable state updates returned as dictionaries.',
        'Not using the add_messages reducer for message lists - without it, each node that appends a message will overwrite the entire messages list instead of appending to it.',
      ],
      ar: [
        'نسيان إضافة حواف START وEND - بدونها، لا يوجد للرسم البياني نقطة دخول أو خروج محددة وسيثير خطأ تحقق وقت التجميع.',
        'إعادة الحالة الكاملة من العقدة بدلاً من الحقول المتغيرة فقط - يجب أن تُعيد العقد قاموس حالة جزئي يحتوي فقط على الحقول التي تعدِّلها، وليس نسخة من الحالة بأكملها.',
        'تعديل كائن الحالة مباشرةً داخل العقدة بدلاً من إعادة قاموس جديد - يتوقع LangGraph تحديثات حالة غير قابلة للتغيير مُعادة كقواميس.',
        'عدم استخدام مُخفِّض add_messages لقوائم الرسائل - بدونه، ستُستبدل قائمة الرسائل بالكامل عند كل إضافة بدلاً من الإلحاق بها.',
      ],
    },
    bestPractices: {
      en: [
        'Give nodes descriptive, verb-based names (e.g., "fetch_data", "call_llm", "validate_output") to make the graph self-documenting and easy to visualize.',
        'Keep nodes small and single-purpose - each node should do exactly one logical thing, making it easier to test, debug, and reuse across different graphs.',
        'Define your state schema explicitly using TypedDict with type annotations, and use reducers (like add_messages) for fields that accumulate values over multiple steps.',
        'Use graph.get_graph().draw_mermaid_png() during development to visualize the graph structure and catch connection errors early.',
      ],
      ar: [
        'امنح العقد أسماء وصفية تعتمد على الأفعال (مثل "fetch_data", "call_llm", "validate_output") لجعل الرسم البياني موثِّقاً لنفسه وسهل التصور.',
        'اجعل العقد صغيرة وذات غرض واحد - يجب أن تقوم كل عقدة بشيء منطقي واحد بالضبط، مما يجعلها أسهل في الاختبار والتصحيح وإعادة الاستخدام عبر رسوم بيانية مختلفة.',
        'حدد مخطط حالتك بشكل صريح باستخدام TypedDict مع تعليقات النوع، واستخدم المُخفِّضات (مثل add_messages) للحقول التي تتراكم قيمها عبر خطوات متعددة.',
        'استخدم graph.get_graph().draw_mermaid_png() أثناء التطوير لتصور هيكل الرسم البياني واكتشاف أخطاء الاتصال مبكراً.',
      ],
    },
    references: [
      { title: 'LangGraph Documentation - Nodes and Edges', url: 'https://langchain-ai.github.io/langgraph/concepts/low_level/' },
      { title: 'LangGraph Quick Start Tutorial', url: 'https://langchain-ai.github.io/langgraph/tutorials/introduction/' },
      { title: 'StateGraph API Reference', url: 'https://langchain-ai.github.io/langgraph/reference/graphs/' },
    ],
    quiz: [
      {
        id: 'langgraph-nodes-edges-q1',
        question: { en: 'What does a LangGraph Node function receive as its input?', ar: 'ماذا تستقبل دالة عقدة LangGraph كمدخل لها؟' },
        options: {
          en: ['A string message from the user', 'The current shared state object', 'A list of available tools', 'The compiled graph object'],
          ar: ['رسالة نصية من المستخدم', 'كائن الحالة المشتركة الحالية', 'قائمة بالأدوات المتاحة', 'كائن الرسم البياني المُجمَّع'],
        },
        correctAnswer: 1,
        explanation: { en: 'Every node function in LangGraph receives the current state as its only argument and returns a dictionary of updated state fields.', ar: 'تستقبل كل دالة عقدة في LangGraph الحالة الحالية كحجة وحيدة لها وتُعيد قاموساً بحقول الحالة المحدَّثة.' },
      },
      {
        id: 'langgraph-nodes-edges-q2',
        question: { en: 'Which constants mark the entry and exit points of a LangGraph?', ar: 'ما الثوابت التي تُحدد نقاط الدخول والخروج في LangGraph؟' },
        options: {
          en: ['BEGIN and FINISH', 'START and END', 'ENTRY and EXIT', 'FIRST and LAST'],
          ar: ['BEGIN و FINISH', 'START و END', 'ENTRY و EXIT', 'FIRST و LAST'],
        },
        correctAnswer: 1,
        explanation: { en: 'LangGraph uses the START and END constants imported from langgraph.graph to define where execution begins and where it terminates.', ar: 'يستخدم LangGraph ثوابت START وEND المستوردة من langgraph.graph لتحديد مكان بدء التنفيذ ومكان انتهائه.' },
      },
      {
        id: 'langgraph-nodes-edges-q3',
        question: { en: 'What is the purpose of the add_messages reducer in LangGraph state?', ar: 'ما الغرض من مُخفِّض add_messages في حالة LangGraph؟' },
        options: {
          en: ['It limits the number of messages stored', 'It encrypts messages for security', 'It appends new messages instead of overwriting the list', 'It converts messages to a standard format'],
          ar: ['يحدد عدد الرسائل المخزنة', 'يُشفِّر الرسائل للأمان', 'يُلحق رسائل جديدة بدلاً من استبدال القائمة', 'يحوِّل الرسائل إلى تنسيق قياسي'],
        },
        correctAnswer: 2,
        explanation: { en: 'The add_messages reducer is an annotation that tells LangGraph to append new messages to the existing list rather than replacing the entire messages field with each state update.', ar: 'مُخفِّض add_messages هو تعليق يُخبر LangGraph بإلحاق رسائل جديدة بالقائمة الموجودة بدلاً من استبدال حقل الرسائل بأكمله مع كل تحديث للحالة.' },
      },
    ],
  },

  'langgraph-conditional-flows': {
    beginnerDefinition: {
      en: 'Conditional Flows in LangGraph let your agent make decisions and choose different paths based on what it finds. Instead of always following the same steps, your agent can branch left or right depending on the situation - just like a real person deciding what to do next.',
      ar: 'تتيح التدفقات الشرطية في LangGraph لوكيلك اتخاذ قرارات واختيار مسارات مختلفة بناءً على ما يجده. بدلاً من اتباع نفس الخطوات دائماً، يمكن لوكيلك الانعطاف يساراً أو يميناً حسب الموقف - تماماً كشخص حقيقي يقرر ما يجب فعله بعد ذلك.',
    },
    technicalDefinition: {
      en: 'Conditional Flows in LangGraph are implemented using add_conditional_edges(), which maps a source node to a routing function. The routing function inspects the current state and returns a string key that maps to a target node name. This enables dynamic, data-driven control flow within the graph, supporting patterns like loops, retries, tool-use cycles, and multi-branch decision trees without hardcoding the execution path.',
      ar: 'تُنفَّذ التدفقات الشرطية في LangGraph باستخدام add_conditional_edges()، التي تربط عقدة مصدر بدالة توجيه. تفحص دالة التوجيه الحالة الحالية وتُعيد مفتاح سلسلة نصية يرتبط باسم عقدة هدف. يُتيح ذلك تدفق التحكم الديناميكي المدفوع بالبيانات داخل الرسم البياني، مع دعم أنماط مثل الحلقات وإعادة المحاولات ودورات استخدام الأدوات وأشجار القرارات متعددة الفروع دون ترميز مسار التنفيذ بشكل صارم.',
    },
    analogy: {
      en: 'Imagine a triage nurse in an emergency room. After examining each patient (node), the nurse decides where to send them next based on severity (routing function): mild symptoms go to the waiting room, moderate symptoms go to a standard ward, and critical symptoms go straight to the ICU. The nurse reads the patient\'s condition (state) and makes a routing decision - that is exactly what a conditional edge does in LangGraph.',
      ar: 'تخيل ممرضة الفرز في غرفة الطوارئ. بعد فحص كل مريض (عقدة)، تقرر الممرضة أين ترسله بعد ذلك بناءً على الخطورة (دالة التوجيه): الأعراض الخفيفة تذهب إلى غرفة الانتظار، والأعراض المتوسطة تذهب إلى جناح عادي، والأعراض الحرجة تذهب مباشرةً إلى وحدة العناية المركزة. تقرأ الممرضة حالة المريض (الحالة) وتتخذ قرار التوجيه - هذا بالضبط ما تفعله الحافة الشرطية في LangGraph.',
    },
    explanation: {
      en: [
        'Conditional edges are added with add_conditional_edges(source_node, routing_function, path_map). The path_map is a dict mapping the routing function\'s return values to actual node names, making your logic independent of internal node naming.',
        'The routing function is a plain Python function that takes the current state and returns a string. It can examine any field in the state - for example, checking if the LLM requested a tool call, if an error occurred, or if a loop count has been exceeded.',
        'A common pattern is the "agent loop": the LLM node routes to a tools node if tool_calls are present, or to END if no more tools are needed. The tools node always routes back to the LLM node, creating a cycle that repeats until the task is complete.',
        'You can combine multiple conditional edges and unconditional edges in the same graph. The routing function can also return a list of node names to fan out execution to multiple parallel nodes simultaneously.',
        'For complex routing logic, you can use a dedicated "router" node that updates a field in state (e.g., next_step), and then a conditional edge reads that field to decide the path. This keeps routing logic visible in the state rather than hidden in a lambda.',
      ],
      ar: [
        'تُضاف الحواف الشرطية باستخدام add_conditional_edges(source_node, routing_function, path_map). path_map هو قاموس يربط قيم الإرجاع لدالة التوجيه بأسماء العقد الفعلية، مما يجعل منطقك مستقلاً عن تسمية العقد الداخلية.',
        'دالة التوجيه هي دالة Python عادية تأخذ الحالة الحالية وتُعيد سلسلة نصية. يمكنها فحص أي حقل في الحالة - على سبيل المثال، التحقق مما إذا كان نموذج اللغة طلب استدعاء أداة، أو حدث خطأ، أو تجاوز عدد الحلقات.',
        'النمط الشائع هو "حلقة الوكيل": تُوجِّه عقدة LLM إلى عقدة الأدوات إذا كانت tool_calls موجودة، أو إلى END إذا لم تكن هناك أدوات أخرى مطلوبة. دائماً ما تُعيد عقدة الأدوات التوجيه إلى عقدة LLM، مما يخلق دورة تتكرر حتى اكتمال المهمة.',
        'يمكنك دمج حواف شرطية متعددة وحواف غير مشروطة في نفس الرسم البياني. يمكن لدالة التوجيه أيضاً إعادة قائمة بأسماء العقد لتوزيع التنفيذ على عقد متوازية متعددة في نفس الوقت.',
        'بالنسبة لمنطق التوجيه المعقد، يمكنك استخدام عقدة "موجِّه" مخصصة تحدِّث حقلاً في الحالة (مثل next_step)، ثم تقرأ الحافة الشرطية ذلك الحقل لتحديد المسار. يُبقي هذا منطق التوجيه مرئياً في الحالة بدلاً من إخفائه في دالة lambda.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Annotated, Literal
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI
from langchain_core.messages import ToolMessage
import json

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]

llm = ChatOpenAI(model="gpt-4o-mini").bind_tools([
    {"name": "search", "description": "Search the web", "parameters": {"type": "object", "properties": {"query": {"type": "string"}}, "required": ["query"]}}
])

def call_llm(state: AgentState) -> dict:
    response = llm.invoke(state["messages"])
    return {"messages": [response]}

def call_tools(state: AgentState) -> dict:
    last_message = state["messages"][-1]
    results = []
    for tool_call in last_message.tool_calls:
        # Simulate tool execution
        result = f"Search result for: {tool_call['args']['query']}"
        results.append(ToolMessage(content=result, tool_call_id=tool_call["id"]))
    return {"messages": results}

# Routing function - the heart of conditional flow
def should_use_tools(state: AgentState) -> Literal["tools", "__end__"]:
    last_message = state["messages"][-1]
    if hasattr(last_message, "tool_calls") and last_message.tool_calls:
        return "tools"
    return "__end__"

# Build graph with conditional edges
graph = StateGraph(AgentState)
graph.add_node("llm", call_llm)
graph.add_node("tools", call_tools)

graph.add_edge(START, "llm")
graph.add_conditional_edges("llm", should_use_tools)  # Branches here
graph.add_edge("tools", "llm")  # Loop back after tool use

app = graph.compile()
result = app.invoke({"messages": [{"role": "user", "content": "Search for LangGraph tutorials"}]})
print(result["messages"][-1].content)`,
      description: {
        en: 'A complete agent loop using conditional edges: the LLM decides whether to call a tool or finish, and the routing function directs execution accordingly, creating a cycle that repeats until the task is done.',
        ar: 'حلقة وكيل كاملة باستخدام الحواف الشرطية: يقرر LLM ما إذا كان سيستدعي أداة أو ينهي، وتُوجِّه دالة التوجيه التنفيذ وفقاً لذلك، مما يخلق دورة تتكرر حتى اكتمال المهمة.',
      },
    },
    commonMistakes: {
      en: [
        'Returning a key from the routing function that is not in the path_map - this causes a KeyError at runtime. Always ensure every possible return value is mapped.',
        'Creating infinite loops by connecting nodes cyclically without a termination condition - always include a check that eventually routes to END.',
        'Writing routing logic inside the node itself instead of in a separate routing function - this makes the graph harder to visualize and test independently.',
        'Not handling edge cases like empty tool_calls lists - always check for the presence and length of fields before accessing them in routing functions.',
      ],
      ar: [
        'إعادة مفتاح من دالة التوجيه غير موجود في path_map - يُسبب هذا خطأ KeyError أثناء التشغيل. تأكد دائماً من تعيين كل قيمة إرجاع محتملة.',
        'إنشاء حلقات لا نهائية عن طريق ربط العقد بشكل دوري بدون شرط إنهاء - قم دائماً بتضمين فحص يُوجِّه في النهاية إلى END.',
        'كتابة منطق التوجيه داخل العقدة نفسها بدلاً من دالة توجيه منفصلة - هذا يجعل الرسم البياني أصعب في التصور والاختبار المستقل.',
        'عدم معالجة حالات الحافة مثل قوائم tool_calls الفارغة - تحقق دائماً من وجود وطول الحقول قبل الوصول إليها في دوال التوجيه.',
      ],
    },
    bestPractices: {
      en: [
        'Use Literal type hints in your routing function signature (e.g., Literal["tools", "__end__"]) to make the possible paths explicit and enable IDE autocompletion.',
        'Keep routing functions pure and stateless - they should only read from the state and return a string, without side effects or external API calls.',
        'Add a maximum iteration counter to looping graphs to prevent runaway agents - check the counter in your routing function and route to END if it exceeds a threshold.',
        'Test each routing condition independently by constructing synthetic state objects and asserting the routing function returns the expected branch.',
      ],
      ar: [
        'استخدم تلميحات نوع Literal في توقيع دالة التوجيه (مثل Literal["tools", "__end__"]) لجعل المسارات المحتملة صريحة وتمكين الإكمال التلقائي في بيئة التطوير.',
        'اجعل دوال التوجيه نقية وعديمة الحالة - يجب أن تقرأ فقط من الحالة وتُعيد سلسلة نصية، بدون آثار جانبية أو استدعاءات API خارجية.',
        'أضف عداد تكرار أقصى للرسوم البيانية ذات الحلقات لمنع الوكلاء المنفلتين - تحقق من العداد في دالة التوجيه وجهِّه إلى END إذا تجاوز حداً معيناً.',
        'اختبر كل شرط توجيه بشكل مستقل عن طريق إنشاء كائنات حالة اصطناعية والتحقق من أن دالة التوجيه تُعيد الفرع المتوقع.',
      ],
    },
    references: [
      { title: 'LangGraph Conditional Edges Guide', url: 'https://langchain-ai.github.io/langgraph/concepts/low_level/#conditional-edges' },
      { title: 'LangGraph How-to: Branching', url: 'https://langchain-ai.github.io/langgraph/how-tos/branching/' },
      { title: 'Building Agentic Loops with LangGraph', url: 'https://langchain-ai.github.io/langgraph/tutorials/introduction/#part-3-adding-memory-to-the-chatbot' },
    ],
    quiz: [
      {
        id: 'langgraph-conditional-flows-q1',
        question: { en: 'What does the routing function in add_conditional_edges() return?', ar: 'ماذا تُعيد دالة التوجيه في add_conditional_edges()؟' },
        options: {
          en: ['A node object to execute next', 'A string key that maps to a target node name', 'A modified state dictionary', 'A boolean indicating whether to continue'],
          ar: ['كائن عقدة لتنفيذها بعد ذلك', 'مفتاح سلسلة نصية يرتبط باسم عقدة هدف', 'قاموس حالة معدَّل', 'قيمة منطقية تشير إلى الاستمرار'],
        },
        correctAnswer: 1,
        explanation: { en: 'The routing function inspects the state and returns a string key, which is then looked up in the path_map to find the actual node name to route execution to.', ar: 'تفحص دالة التوجيه الحالة وتُعيد مفتاح سلسلة نصية، يُبحث عنه بعد ذلك في path_map للعثور على اسم العقدة الفعلية لتوجيه التنفيذ إليها.' },
      },
      {
        id: 'langgraph-conditional-flows-q2',
        question: { en: 'How do you create a loop in LangGraph where a tools node feeds back into the LLM node?', ar: 'كيف تنشئ حلقة في LangGraph حيث تُعيد عقدة الأدوات التوجيه إلى عقدة LLM؟' },
        options: {
          en: ['Use a while loop inside the node function', 'Add an unconditional edge from tools back to llm', 'Set the loop=True parameter on the graph', 'Use the LOOP constant from langgraph.graph'],
          ar: ['استخدم حلقة while داخل دالة العقدة', 'أضف حافة غير مشروطة من الأدوات إلى LLM', 'اضبط المعامل loop=True على الرسم البياني', 'استخدم ثابت LOOP من langgraph.graph'],
        },
        correctAnswer: 1,
        explanation: { en: 'You use add_edge("tools", "llm") to create an unconditional edge that always sends execution back to the LLM node after tools run. The conditional edge on the LLM node decides when to exit the loop by routing to END.', ar: 'تستخدم add_edge("tools", "llm") لإنشاء حافة غير مشروطة ترسل التنفيذ دائماً إلى عقدة LLM بعد تشغيل الأدوات. تقرر الحافة الشرطية على عقدة LLM متى تخرج من الحلقة عن طريق التوجيه إلى END.' },
      },
    ],
  },

  'langgraph-tool-integration': {
    beginnerDefinition: {
      en: 'Tool Integration with LangGraph means giving your AI agent the ability to use real-world capabilities like searching the web, running code, reading files, or calling APIs. Think of it as equipping your agent with a toolbox - the more tools it has, the more tasks it can actually accomplish.',
      ar: 'يعني دمج الأدوات مع LangGraph منح وكيل الذكاء الاصطناعي القدرة على استخدام قدرات العالم الحقيقي مثل البحث في الويب، وتشغيل الكود، وقراءة الملفات، أو استدعاء واجهات برمجة التطبيقات. فكر في الأمر كتزويد وكيلك بصندوق أدوات - كلما كان لديه المزيد من الأدوات، كلما تمكن من إنجاز المزيد من المهام.',
    },
    technicalDefinition: {
      en: 'Tool Integration in LangGraph involves binding LangChain Tool objects (or raw function schemas) to an LLM using bind_tools(), then creating a ToolNode that receives tool call requests from the LLM\'s response, executes the appropriate functions, and returns ToolMessage objects containing results. The ToolNode handles parallel tool calls, error catching, and message formatting automatically, enabling the agent to interact with external systems within the graph execution loop.',
      ar: 'يتضمن دمج الأدوات في LangGraph ربط كائنات LangChain Tool (أو مخططات دالة خام) بنموذج LغG باستخدام bind_tools()، ثم إنشاء ToolNode يستقبل طلبات استدعاء الأدوات من استجابة LLM، ويُنفِّذ الدوال المناسبة، ويُعيد كائنات ToolMessage تحتوي على النتائج. يتعامل ToolNode مع استدعاءات الأدوات المتوازية واصطياد الأخطاء وتنسيق الرسائل تلقائياً، مما يُتيح للوكيل التفاعل مع الأنظمة الخارجية ضمن حلقة تنفيذ الرسم البياني.',
    },
    analogy: {
      en: 'Consider a surgeon in an operating room. The surgeon (LLM) directs the operation, but relies on specialized instruments (tools) - scalpels, monitors, imaging equipment - handed over by the surgical team (ToolNode). The surgeon calls for a specific instrument, uses it, observes the result, then decides what instrument to call for next. Without the instruments, the surgeon can only plan; with them, they can actually operate. LangGraph\'s tool integration is the surgical team that makes sure the right tool reaches the surgeon at the right time.',
      ar: 'تخيل جراحاً في غرفة العمليات. يوجِّه الجراح (LLM) العملية، لكنه يعتمد على أدوات متخصصة (أدوات) - مشارط، وشاشات، وأجهزة تصوير - يُسلِّمها الفريق الجراحي (ToolNode). يطلب الجراح أداة محددة، يستخدمها، يلاحظ النتيجة، ثم يقرر ما الأداة التي سيطلبها بعد ذلك. بدون الأدوات، يستطيع الجراح فقط التخطيط؛ معها، يمكنه فعلاً إجراء العملية. دمج الأدوات في LangGraph هو الفريق الجراحي الذي يضمن وصول الأداة الصحيحة للجراح في الوقت الصحيح.',
    },
    explanation: {
      en: [
        'Tools in LangChain/LangGraph are Python functions decorated with @tool or constructed from a schema. They have a name, description (used by the LLM to decide when to call them), and typed input parameters.',
        'You bind tools to the LLM using llm.bind_tools(tools_list). This injects the tool schemas into every LLM call, allowing the model to output structured tool_call objects instead of plain text when it wants to use a tool.',
        'LangGraph provides a pre-built ToolNode class that accepts a list of tools and automatically handles the execution loop: it reads tool_calls from the last AI message, finds the matching tool function, runs it with the provided arguments, and wraps the output in a ToolMessage.',
        'After the ToolNode runs, its ToolMessage results are appended to the state messages. The LLM then reads these results in the next iteration and decides whether to call more tools or generate a final response.',
        'For custom behavior, you can implement your own tool-execution node instead of ToolNode - this is useful for adding logging, rate limiting, result caching, or transforming tool outputs before they reach the LLM.',
      ],
      ar: [
        'الأدوات في LangChain/LangGraph هي دوال Python مُزيَّنة بـ @tool أو مُنشأة من مخطط. لها اسم ووصف (يستخدمه LLM لتحديد متى يستدعيها) ومعاملات إدخال ذات أنواع محددة.',
        'تربط الأدوات بـ LLM باستخدام llm.bind_tools(tools_list). يحقن هذا مخططات الأدوات في كل استدعاء LLM، مما يسمح للنموذج بإخراج كائنات tool_call منظَّمة بدلاً من النص العادي عندما يريد استخدام أداة.',
        'يوفر LangGraph فئة ToolNode مبنية مسبقاً تقبل قائمة من الأدوات وتتعامل تلقائياً مع حلقة التنفيذ: تقرأ tool_calls من آخر رسالة ذكاء اصطناعي، تجد دالة الأداة المطابقة، تُشغِّلها بالحجج المقدمة، وتلف الإخراج في ToolMessage.',
        'بعد تشغيل ToolNode، تُلحق نتائج ToolMessage بها بالحالة messages. يقرأ LLM بعد ذلك هذه النتائج في التكرار التالي ويقرر ما إذا كان سيستدعي المزيد من الأدوات أو يولِّد استجابة نهائية.',
        'للسلوك المخصص، يمكنك تنفيذ عقدة تنفيذ أدوات خاصة بك بدلاً من ToolNode - هذا مفيد لإضافة التسجيل، وتحديد معدل الاستخدام، وتخزين النتائج مؤقتاً، أو تحويل مخرجات الأدوات قبل وصولها إلى LLM.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode, tools_condition
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool

# 1. Define tools using the @tool decorator
@tool
def multiply(a: float, b: float) -> float:
    """Multiply two numbers together."""
    return a * b

@tool
def get_weather(city: str) -> str:
    """Get the current weather for a city."""
    # In production, this would call a real weather API
    return f"The weather in {city} is 22 degrees Celsius and sunny."

tools = [multiply, get_weather]

# 2. Bind tools to the LLM
llm = ChatOpenAI(model="gpt-4o-mini").bind_tools(tools)

# 3. Define state and LLM node
class State(TypedDict):
    messages: Annotated[list, add_messages]

def call_llm(state: State) -> dict:
    return {"messages": [llm.invoke(state["messages"])]}

# 4. Build graph using the pre-built ToolNode
graph = StateGraph(State)
graph.add_node("llm", call_llm)
graph.add_node("tools", ToolNode(tools))  # Pre-built tool executor

graph.add_edge(START, "llm")
# tools_condition is a pre-built routing function
graph.add_conditional_edges("llm", tools_condition)
graph.add_edge("tools", "llm")

app = graph.compile()

# 5. Test with a query that requires tool use
result = app.invoke({
    "messages": [{"role": "user", "content": "What is 42 multiplied by 7?"}]
})
print(result["messages"][-1].content)  # The LLM's final answer after tool use`,
      description: {
        en: 'A complete tool integration example using the @tool decorator, ToolNode, and tools_condition. The agent can multiply numbers and get weather data, automatically choosing the right tool based on the user query.',
        ar: 'مثال كامل على دمج الأدوات باستخدام مُزيِّن @tool وToolNode وtools_condition. يمكن للوكيل ضرب الأرقام والحصول على بيانات الطقس، مع اختيار الأداة الصحيحة تلقائياً بناءً على استعلام المستخدم.',
      },
    },
    commonMistakes: {
      en: [
        'Writing tool docstrings that are too vague - the LLM uses the description to decide when to call the tool, so be specific about what the tool does and what inputs it expects.',
        'Not handling tool execution errors - if a tool raises an exception, ToolNode will catch it and return an error message, but your LLM must be prompted to handle error ToolMessages gracefully.',
        'Passing tools to ToolNode but forgetting to bind them to the LLM with bind_tools() - the LLM will never generate tool_calls if it does not know the tools exist.',
        'Defining tool parameters without proper type annotations - the type information is used to generate the JSON schema that the LLM sees, so missing types produce malformed schemas.',
      ],
      ar: [
        'كتابة توثيق الأدوات بصورة غامضة جداً - يستخدم LLM الوصف لتحديد متى يستدعي الأداة، لذا كن محدداً بشأن ما تفعله الأداة وما هي المدخلات التي تتوقعها.',
        'عدم معالجة أخطاء تنفيذ الأدوات - إذا أثارت أداة استثناءً، سيصطاده ToolNode ويُعيد رسالة خطأ، لكن يجب توجيه LLM للتعامل مع رسائل ToolMessage الخاطئة بأناقة.',
        'تمرير الأدوات إلى ToolNode لكن نسيان ربطها بـ LLM باستخدام bind_tools() - لن يولِّد LLM أبداً tool_calls إذا لم يعرف بوجود الأدوات.',
        'تعريف معاملات الأدوات بدون تعليقات نوع مناسبة - تُستخدم معلومات النوع لتوليد مخطط JSON الذي يراه LLM، لذا تُنتج الأنواع المفقودة مخططات مشوهة.',
      ],
    },
    bestPractices: {
      en: [
        'Write clear, action-oriented docstrings for every tool: describe what it does, what inputs it expects (with units/formats), and what it returns.',
        'Use the pre-built tools_condition routing function instead of writing your own when the logic is simply "call tools if tool_calls exist, otherwise END".',
        'Group related tools into a ToolNode and test the node in isolation by passing synthetic state objects with pre-constructed tool_call messages.',
        'Implement tool-level error handling by wrapping the tool body in try/except and returning a descriptive error string instead of raising - this allows the LLM to recover gracefully.',
      ],
      ar: [
        'اكتب توثيقاً واضحاً وموجهاً نحو الفعل لكل أداة: صف ما تفعله، وما المدخلات التي تتوقعها (مع الوحدات/التنسيقات)، وما الذي تُعيده.',
        'استخدم دالة التوجيه المبنية مسبقاً tools_condition بدلاً من كتابة دالتك الخاصة عندما يكون المنطق ببساطة "استدع الأدوات إذا كانت tool_calls موجودة، وإلا انتهِ".',
        'اجمع الأدوات ذات الصلة في ToolNode واختبر العقدة بشكل معزول عن طريق تمرير كائنات حالة اصطناعية مع رسائل tool_call مُنشأة مسبقاً.',
        'نفِّذ معالجة الأخطاء على مستوى الأداة عن طريق لف جسم الأداة في try/except وإعادة سلسلة خطأ وصفية بدلاً من الإثارة - يسمح هذا لـ LLM بالتعافي بأناقة.',
      ],
    },
    references: [
      { title: 'LangGraph ToolNode Documentation', url: 'https://langchain-ai.github.io/langgraph/reference/prebuilt/#langgraph.prebuilt.tool_node.ToolNode' },
      { title: 'LangChain Tools Concept Guide', url: 'https://python.langchain.com/docs/concepts/tools/' },
      { title: 'LangGraph How-to: Tool Calling', url: 'https://langchain-ai.github.io/langgraph/how-tos/tool-calling/' },
    ],
    quiz: [
      {
        id: 'langgraph-tool-integration-q1',
        question: { en: 'What is the purpose of calling llm.bind_tools(tools) when integrating tools in LangGraph?', ar: 'ما الغرض من استدعاء llm.bind_tools(tools) عند دمج الأدوات في LangGraph؟' },
        options: {
          en: ['It registers the tools in the graph as nodes', 'It injects tool schemas into LLM calls so the model can generate tool_call objects', 'It automatically executes tools when the LLM response arrives', 'It validates tool input arguments before execution'],
          ar: ['يُسجِّل الأدوات في الرسم البياني كعقد', 'يحقن مخططات الأدوات في استدعاءات LLM حتى يتمكن النموذج من توليد كائنات tool_call', 'ينفِّذ الأدوات تلقائياً عند وصول استجابة LLM', 'يتحقق من صحة حجج إدخال الأداة قبل التنفيذ'],
        },
        correctAnswer: 1,
        explanation: { en: 'bind_tools() attaches the tool schemas (name, description, parameters) to the LLM, enabling it to output structured tool_call requests in its responses. Without this, the LLM has no knowledge of the available tools.', ar: 'يُرفق bind_tools() مخططات الأدوات (الاسم والوصف والمعاملات) بـ LLM، مما يُمكِّنه من إخراج طلبات tool_call منظَّمة في ردوده. بدون هذا، لا يكون لدى LLM أي معرفة بالأدوات المتاحة.' },
      },
      {
        id: 'langgraph-tool-integration-q2',
        question: { en: 'What does LangGraph\'s pre-built ToolNode do when it receives a state with tool_calls?', ar: 'ماذا يفعل ToolNode المبني مسبقاً في LangGraph عند استقبال حالة تحتوي على tool_calls؟' },
        options: {
          en: ['It forwards the tool_calls to the LLM for processing', 'It finds the matching tool, executes it, and returns ToolMessage results', 'It stores the tool_calls in a database for later use', 'It validates the tool schema and rejects invalid calls'],
          ar: ['يُعيد توجيه tool_calls إلى LLM للمعالجة', 'يجد الأداة المطابقة وينفِّذها ويُعيد نتائج ToolMessage', 'يخزِّن tool_calls في قاعدة بيانات للاستخدام لاحقاً', 'يتحقق من مخطط الأداة ويرفض الاستدعاءات غير الصالحة'],
        },
        correctAnswer: 1,
        explanation: { en: 'ToolNode reads the tool_calls from the last AI message, matches each call to a registered tool function, executes it with the provided arguments, and returns ToolMessage objects containing the results back into the state.', ar: 'يقرأ ToolNode tool_calls من آخر رسالة ذكاء اصطناعي، ويُطابق كل استدعاء مع دالة أداة مُسجَّلة، وينفِّذها بالحجج المقدمة، ويُعيد كائنات ToolMessage تحتوي على النتائج إلى الحالة.' },
      },
    ],
  },

  'langgraph-human-in-loop': {
    beginnerDefinition: {
      en: 'Human-in-the-Loop with LangGraph means building AI agents that can pause and ask a human for approval, feedback, or input before continuing. Instead of running completely on autopilot, the agent can check in with a person at critical decision points - like getting a signature before sending an important email.',
      ar: 'الإنسان في الحلقة مع LangGraph يعني بناء وكلاء ذكاء اصطناعي يمكنهم التوقف وطلب موافقة الإنسان أو ملاحظاته أو مدخلاته قبل المتابعة. بدلاً من العمل تلقائياً بالكامل، يمكن للوكيل مراجعة شخص في نقاط القرار الحرجة - مثل الحصول على توقيع قبل إرسال بريد إلكتروني مهم.',
    },
    technicalDefinition: {
      en: 'Human-in-the-Loop (HITL) in LangGraph is implemented using interrupt() calls inside node functions combined with a checkpointer (persistent state store). When interrupt() is called, the graph execution pauses, serializes the current state to the checkpointer, and returns control to the caller. A human can then inspect the state, modify it, and resume execution by calling the graph again with Command(resume=value). This pattern enables approval workflows, feedback injection, and supervised agent execution.',
      ar: 'يُنفَّذ نمط الإنسان في الحلقة في LangGraph باستخدام استدعاءات interrupt() داخل دوال العقد مقترنة بـ checkpointer (مخزن حالة مستمر). عند استدعاء interrupt()، يتوقف تنفيذ الرسم البياني، ويُسلسل الحالة الحالية إلى checkpointer، ويُعيد التحكم إلى المُستدعي. يمكن للإنسان بعد ذلك فحص الحالة وتعديلها واستئناف التنفيذ باستدعاء الرسم البياني مرة أخرى مع Command(resume=value). يُتيح هذا النمط سير عمل الموافقة وحقن الملاحظات وتنفيذ الوكيل الخاضع للإشراف.',
    },
    analogy: {
      en: 'Think of a junior lawyer drafting a contract. After completing the first draft (node execution), they place it in their manager\'s inbox and wait (interrupt). The manager reviews the draft, makes notes, and either approves it for sending or sends it back with corrections (human input). Once the manager responds (resume), the junior lawyer continues with the next step - finalizing or revising. The contract never gets sent without the manager\'s sign-off, no matter how confident the junior lawyer is.',
      ar: 'فكر في محامٍ مبتدئ يصيغ عقداً. بعد إتمام المسودة الأولى (تنفيذ العقدة)، يضعها في صندوق بريد مديره وينتظر (interrupt). يراجع المدير المسودة، ويُدوِّن ملاحظات، ويوافق عليها للإرسال أو يُعيدها مع تصحيحات (مدخل بشري). بمجرد رد المدير (resume)، يتابع المحامي المبتدئ الخطوة التالية - الإنهاء أو المراجعة. لا يُرسَل العقد أبداً بدون موافقة المدير، بغض النظر عن مدى ثقة المحامي المبتدئ.',
    },
    explanation: {
      en: [
        'To use Human-in-the-Loop, you must first set up a checkpointer - a persistent storage backend that saves graph state between interruptions. LangGraph provides MemorySaver for development and PostgresSaver/SqliteSaver for production.',
        'The graph is compiled with a checkpointer: app = graph.compile(checkpointer=checkpointer). Every invocation must also provide a thread_id in the config to identify the conversation session.',
        'Inside a node, calling interrupt(value) pauses execution at that exact point, saves the state, and returns the value to the caller as an InterruptException. The value is often a prompt or description asking the human what to do.',
        'To resume, the human calls app.invoke(Command(resume=human_response), config=config) with the same thread_id. LangGraph restores the state from the checkpoint and continues execution from the interrupted point, with the human response available.',
        'You can also use breakpoints - compile-time interrupts set with graph.compile(interrupt_before=["node_name"]) or interrupt_after=["node_name"]. These pause before/after a specific node runs without modifying the node code itself.',
      ],
      ar: [
        'لاستخدام الإنسان في الحلقة، يجب أولاً إعداد checkpointer - خلفية تخزين مستمرة تحفظ حالة الرسم البياني بين الانقطاعات. يوفر LangGraph MemorySaver للتطوير وPostgresSaver/SqliteSaver للإنتاج.',
        'يُجمَّع الرسم البياني مع checkpointer: app = graph.compile(checkpointer=checkpointer). يجب أيضاً أن يوفر كل استدعاء thread_id في التكوين لتحديد جلسة المحادثة.',
        'داخل العقدة، يوقف استدعاء interrupt(value) التنفيذ في تلك النقطة بالضبط، يحفظ الحالة، ويُعيد القيمة إلى المُستدعي كـ InterruptException. القيمة غالباً ما تكون موجِّهاً أو وصفاً يسأل الإنسان ماذا يفعل.',
        'للاستئناف، يستدعي الإنسان app.invoke(Command(resume=human_response), config=config) مع نفس thread_id. يستعيد LangGraph الحالة من نقطة التفتيش ويتابع التنفيذ من النقطة المنقطعة، مع توفر الاستجابة البشرية.',
        'يمكنك أيضاً استخدام نقاط التوقف - انقطاعات وقت التجميع المُعيَّنة بـ graph.compile(interrupt_before=["node_name"]) أو interrupt_after=["node_name"]. هذه توقف التنفيذ قبل/بعد تشغيل عقدة محددة دون تعديل كود العقدة نفسها.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import interrupt, Command
from langchain_openai import ChatOpenAI

class State(TypedDict):
    messages: Annotated[list, add_messages]
    draft_email: str
    approved: bool

llm = ChatOpenAI(model="gpt-4o-mini")

def draft_email(state: State) -> dict:
    """LLM drafts an email based on conversation."""
    prompt = f"Draft a professional email based on: {state['messages'][-1].content}"
    draft = llm.invoke(prompt).content
    return {"draft_email": draft}

def human_review(state: State) -> dict:
    """Pause and ask human to review the draft."""
    # interrupt() pauses the graph and surfaces the draft to the human
    human_decision = interrupt({
        "draft": state["draft_email"],
        "prompt": "Review the email draft. Reply 'approve' to send or provide corrections."
    })
    if human_decision.lower() == "approve":
        return {"approved": True}
    else:
        # Human provided corrections - add them to messages for re-drafting
        return {
            "approved": False,
            "messages": [{"role": "user", "content": f"Revise the email: {human_decision}"}]
        }

def send_email(state: State) -> dict:
    print(f"Email sent: {state['draft_email']}")
    return {}

def route_after_review(state: State):
    return "send" if state["approved"] else "draft"

# Build graph
graph = StateGraph(State)
graph.add_node("draft", draft_email)
graph.add_node("review", human_review)
graph.add_node("send", send_email)

graph.add_edge(START, "draft")
graph.add_edge("draft", "review")
graph.add_conditional_edges("review", route_after_review, {"send": "send", "draft": "draft"})
graph.add_edge("send", END)

# IMPORTANT: compile with a checkpointer
checkpointer = MemorySaver()
app = graph.compile(checkpointer=checkpointer)

# Run 1: Graph pauses at interrupt()
config = {"configurable": {"thread_id": "email-session-1"}}
result = app.invoke({"messages": [{"role": "user", "content": "Write to John about the Q3 meeting"}], "draft_email": "", "approved": False}, config)
print("Interrupted - review the draft and call with Command(resume=...)")

# Run 2: Human approves the draft
final = app.invoke(Command(resume="approve"), config=config)`,
      description: {
        en: 'A Human-in-the-Loop email drafting workflow. The agent drafts an email, then pauses with interrupt() for human review. The human can approve or request revisions, and execution resumes based on their input.',
        ar: 'سير عمل صياغة البريد الإلكتروني مع الإنسان في الحلقة. يصيغ الوكيل بريداً إلكترونياً ثم يتوقف بـ interrupt() لمراجعة الإنسان. يمكن للإنسان الموافقة أو طلب المراجعات، ويتابع التنفيذ بناءً على مدخلاته.',
      },
    },
    commonMistakes: {
      en: [
        'Forgetting to compile the graph with a checkpointer - without a checkpointer, interrupt() will raise an error because there is nowhere to persist the state between calls.',
        'Not passing the same thread_id in the config when resuming - LangGraph uses the thread_id to look up the saved checkpoint, so a different ID will start a new execution instead of resuming.',
        'Using interrupt() in a node that runs at the very start before any useful state is built - interrupt() is most valuable after significant work has been done that is worth reviewing.',
        'Not handling the case where the human provides corrections - design your routing logic to handle both approval and revision scenarios.',
      ],
      ar: [
        'نسيان تجميع الرسم البياني مع checkpointer - بدون checkpointer، سيثير interrupt() خطأً لأنه لا يوجد مكان لاستمرار الحالة بين الاستدعاءات.',
        'عدم تمرير نفس thread_id في التكوين عند الاستئناف - يستخدم LangGraph thread_id للبحث عن نقطة التفتيش المحفوظة، لذا سيبدأ معرِّف مختلف تنفيذاً جديداً بدلاً من الاستئناف.',
        'استخدام interrupt() في عقدة تعمل في البداية قبل بناء أي حالة مفيدة - interrupt() أكثر قيمة بعد إنجاز عمل كبير يستحق المراجعة.',
        'عدم التعامل مع الحالة التي يقدم فيها الإنسان تصحيحات - صمِّم منطق التوجيه للتعامل مع سيناريوهات الموافقة والمراجعة.',
      ],
    },
    bestPractices: {
      en: [
        'Pass a descriptive object to interrupt() - include the data needing review, clear instructions for the human, and available options - to make the review UX intuitive.',
        'Use compile-time breakpoints (interrupt_before/interrupt_after) for debugging or simple approval gates, and use runtime interrupt() for complex workflows where the interruption point depends on runtime state.',
        'Store interrupt state in a user-facing system (database, UI state) so the human reviewer has a proper interface to respond rather than raw Python objects.',
        'Set reasonable timeouts for human review and implement fallback paths for when the human does not respond within the expected window.',
      ],
      ar: [
        'مرِّر كائناً وصفياً إلى interrupt() - أدرج البيانات التي تحتاج مراجعة، وتعليمات واضحة للإنسان، والخيارات المتاحة - لجعل تجربة المراجعة بديهية.',
        'استخدم نقاط التوقف وقت التجميع (interrupt_before/interrupt_after) لتصحيح الأخطاء أو بوابات الموافقة البسيطة، واستخدم interrupt() وقت التشغيل للسير العمل المعقدة حيث تعتمد نقطة الانقطاع على حالة وقت التشغيل.',
        'خزِّن حالة الانقطاع في نظام موجَّه للمستخدم (قاعدة بيانات، حالة واجهة المستخدم) حتى يكون لدى مراجع الإنسان واجهة مناسبة للرد بدلاً من كائنات Python الخام.',
        'اضبط مهلاً معقولة للمراجعة البشرية ونفِّذ مسارات احتياطية لعندما لا يرد الإنسان في النافذة الزمنية المتوقعة.',
      ],
    },
    references: [
      { title: 'LangGraph Human-in-the-Loop Conceptual Guide', url: 'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/' },
      { title: 'LangGraph How-to: Add Human Approval', url: 'https://langchain-ai.github.io/langgraph/how-tos/human_in_the_loop/add-human-in-the-loop/' },
      { title: 'LangGraph Persistence and Checkpointing', url: 'https://langchain-ai.github.io/langgraph/concepts/persistence/' },
    ],
    quiz: [
      {
        id: 'langgraph-human-in-loop-q1',
        question: { en: 'What is required to use interrupt() in LangGraph?', ar: 'ما المطلوب لاستخدام interrupt() في LangGraph؟' },
        options: {
          en: ['A special HumanNode must be added to the graph', 'The graph must be compiled with a checkpointer', 'A separate thread must be started for human input', 'The LLM must support function calling'],
          ar: ['يجب إضافة HumanNode خاص إلى الرسم البياني', 'يجب تجميع الرسم البياني مع checkpointer', 'يجب بدء thread منفصل لمدخلات الإنسان', 'يجب أن يدعم LLM استدعاء الدوال'],
        },
        correctAnswer: 1,
        explanation: { en: 'interrupt() works by serializing the current state to persistent storage. Without a checkpointer compiled into the graph, there is no place to save this state, and interrupt() will raise an error.', ar: 'يعمل interrupt() عن طريق تسلسل الحالة الحالية إلى تخزين مستمر. بدون checkpointer مُجمَّع في الرسم البياني، لا يوجد مكان لحفظ هذه الحالة، وسيُثير interrupt() خطأً.' },
      },
      {
        id: 'langgraph-human-in-loop-q2',
        question: { en: 'How do you resume a LangGraph execution after an interrupt()?', ar: 'كيف تستأنف تنفيذ LangGraph بعد interrupt()؟' },
        options: {
          en: ['Call graph.resume() with the human response', 'Call app.invoke(Command(resume=value), config=same_config)', 'Restart the graph from the beginning with new input', 'Call interrupt.resolve(value) on the exception object'],
          ar: ['استدعِ graph.resume() مع استجابة الإنسان', 'استدعِ app.invoke(Command(resume=value), config=same_config)', 'أعد تشغيل الرسم البياني من البداية بمدخل جديد', 'استدعِ interrupt.resolve(value) على كائن الاستثناء'],
        },
        correctAnswer: 1,
        explanation: { en: 'After an interrupt, you resume by calling app.invoke(Command(resume=human_response), config=config) with the SAME thread_id in the config. LangGraph restores the checkpoint and continues from where it left off.', ar: 'بعد الانقطاع، تستأنف باستدعاء app.invoke(Command(resume=human_response), config=config) مع نفس thread_id في التكوين. يستعيد LangGraph نقطة التفتيش ويتابع من حيث توقف.' },
      },
    ],
  },

  'langgraph-multi-agent': {
    beginnerDefinition: {
      en: 'Multi-Agent Systems with LangGraph means building networks of specialized AI agents that work together, each handling a specific part of a complex task. Instead of one agent trying to do everything, you have a team of focused agents - like a company with different departments - that collaborate to solve bigger problems.',
      ar: 'أنظمة متعددة الوكلاء مع LangGraph تعني بناء شبكات من وكلاء الذكاء الاصطناعي المتخصصين الذين يعملون معاً، حيث يتعامل كل منهم مع جزء محدد من مهمة معقدة. بدلاً من وكيل واحد يحاول فعل كل شيء، لديك فريق من الوكلاء المتخصصين - مثل شركة بأقسام مختلفة - يتعاونون لحل مشكلات أكبر.',
    },
    technicalDefinition: {
      en: 'Multi-Agent Systems in LangGraph are implemented by composing multiple compiled graphs or subgraphs. A supervisor agent orchestrates task routing to specialized worker agents based on task requirements. Worker agents can be LangGraph subgraphs, LangChain runnables, or tool-calling agents. Communication happens through shared state or message passing. LangGraph supports hierarchical supervisor-worker and peer-to-peer architectures through the add_node() API which accepts compiled graphs directly.',
      ar: 'تُنفَّذ أنظمة متعددة الوكلاء في LangGraph من خلال تركيب رسوم بيانية أو رسوم بيانية فرعية متعددة مُجمَّعة. يُنسِّق وكيل المشرف توجيه المهام إلى وكلاء عمال متخصصين بناءً على متطلبات المهمة. يمكن أن يكون وكلاء العمال رسوماً بيانية فرعية لـ LangGraph، أو LangChain runnables، أو وكلاء استدعاء أدوات.',
    },
    analogy: {
      en: 'Imagine a news agency. The editor-in-chief (supervisor agent) receives a story assignment and delegates: the researcher agent gathers facts, the writer agent drafts the article, and the fact-checker agent verifies claims. Each specialist does what they do best and reports back to the editor-in-chief, who coordinates the workflow. No single person could match the quality of the entire team working together.',
      ar: 'تخيل وكالة أنباء. يستقبل رئيس التحرير (وكيل المشرف) تكليفاً بقصة ويفوِّض: وكيل الباحث يجمع الحقائق، ووكيل الكاتب يصيغ المقال، ووكيل التحقق يتحقق من الادعاءات. كل متخصص يفعل ما يُتقنه ويُعيد التقرير لرئيس التحرير الذي ينسِّق سير العمل.',
    },
    explanation: {
      en: [
        'The simplest multi-agent pattern is the supervisor architecture. A supervisor LLM receives the user task, decides which specialized agent should handle it, delegates the task, receives the result, and either delegates further or produces the final answer.',
        'Worker agents in LangGraph can be full subgraphs compiled with their own state schemas, tools, and internal logic. They are added to the parent graph using add_node("worker_name", compiled_subgraph).',
        'For parallel execution, LangGraph supports fan-out patterns where the supervisor routes to multiple agents simultaneously. Results are collected using a merge node that combines outputs before passing them to the next step.',
        'Message-passing between agents is handled through shared state. The supervisor writes task instructions into a dedicated state field, worker agents read that field, process the task, and write results back.',
        'LangGraph also supports handoff patterns using Command(goto=agent_name, update=state_update), allowing any node to explicitly hand off control to another agent with state updates in a single atomic operation.',
      ],
      ar: [
        'أبسط نمط متعدد الوكلاء هو بنية المشرف. يستقبل LLM المشرف مهمة المستخدم، يقرر أي وكيل متخصص يتعامل معها، يفوِّض المهمة، يستقبل النتيجة، ثم يفوِّض لوكيل آخر أو يُنتج الإجابة النهائية.',
        'يمكن أن يكون وكلاء العمال رسوماً بيانية فرعية كاملة مُجمَّعة بمخططات حالتها الخاصة وأدواتها ومنطقها الداخلي. تُضاف للرسم البياني الأب باستخدام add_node.',
        'للتنفيذ المتوازي، يدعم LangGraph أنماط التوزيع حيث يُوجِّه المشرف لوكلاء متعددين في آنٍ. تُجمَّع النتائج باستخدام عقدة دمج قبل تمريرها للخطوة التالية.',
        'يُعالَج تمرير الرسائل بين الوكلاء عبر الحالة المشتركة. يكتب المشرف تعليمات المهمة في حقل حالة مخصص، ويقرأ الوكلاء ذلك الحقل ويكتبون النتائج.',
        'يدعم LangGraph أيضاً أنماط التسليم باستخدام Command(goto, update) مما يتيح لأي عقدة تسليم التحكم لوكيل آخر مع تحديثات الحالة في عملية ذرية واحدة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Annotated, Literal
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini")

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]
    task: str
    result: str
    next_agent: str

def research_agent(state: AgentState) -> dict:
    response = llm.invoke([
        {"role": "system", "content": "You are a research specialist. Find key facts."},
        {"role": "user", "content": f"Research: {state['task']}"}
    ])
    return {"result": response.content, "messages": [response]}

def writer_agent(state: AgentState) -> dict:
    response = llm.invoke([
        {"role": "system", "content": "You are a professional writer. Create clear content."},
        {"role": "user", "content": f"Write a summary based on: {state['result']}"}
    ])
    return {"result": response.content, "messages": [response]}

def supervisor(state: AgentState) -> dict:
    decision = llm.invoke([
        {"role": "system", "content": "Route tasks. Reply with only: researcher, writer, or FINISH."},
        {"role": "user", "content": f"Task: {state['task']}  Result so far: {state.get('result','none')}  Next?"}
    ])
    return {"next_agent": decision.content.strip()}

def route_supervisor(state: AgentState) -> Literal["researcher", "writer", "__end__"]:
    agent = state["next_agent"].lower()
    if "researcher" in agent:
        return "researcher"
    elif "writer" in agent:
        return "writer"
    return "__end__"

graph = StateGraph(AgentState)
graph.add_node("supervisor", supervisor)
graph.add_node("researcher", research_agent)
graph.add_node("writer", writer_agent)
graph.add_edge(START, "supervisor")
graph.add_conditional_edges("supervisor", route_supervisor)
graph.add_edge("researcher", "supervisor")
graph.add_edge("writer", "supervisor")

app = graph.compile()
result = app.invoke({
    "messages": [], "task": "Explain quantum computing for beginners",
    "result": "", "next_agent": ""
})
print(result["result"])`,
      description: {
        en: 'A supervisor-worker multi-agent system where a supervisor LLM routes tasks between a researcher and a writer agent. Each worker reports back to the supervisor after completing their task.',
        ar: 'نظام متعدد الوكلاء من نوع المشرف-العامل حيث يُوجِّه LLM المشرف المهام بين وكيل باحث ووكيل كاتب. يُعيد كل عامل التقرير للمشرف بعد إتمام مهمته.',
      },
    },
    commonMistakes: {
      en: [
        'Creating agents that are too generic - worker agents should have narrow, well-defined specializations rather than trying to handle everything.',
        'Not defining clear boundaries between agents - specify in each agent\'s system prompt exactly what it should and should not handle.',
        'Forgetting to route worker agents back to the supervisor - workers should always return control to the supervisor unless they are final output nodes.',
        'Designing state schemas that are too tightly coupled - changes to one agent\'s fields can break others if all agents share the same large state object.',
      ],
      ar: [
        'إنشاء وكلاء عامين جداً - يجب أن يكون لدى وكلاء العمال تخصصات ضيقة محددة بدلاً من محاولة التعامل مع كل شيء.',
        'عدم تحديد حدود واضحة بين الوكلاء - حدد في موجِّه النظام لكل وكيل بالضبط ما يجب وما لا يجب أن يتعامل معه.',
        'نسيان توجيه وكلاء العمال مرة أخرى للمشرف - يجب على العمال دائماً إعادة التحكم للمشرف.',
        'تصميم مخططات حالة مترابطة بشكل مفرط - فكر في استخدام هياكل حالة متداخلة لعزل حقول كل وكيل.',
      ],
    },
    bestPractices: {
      en: [
        'Start with a simple supervisor-worker architecture and add more agents incrementally as you identify bottlenecks, rather than over-engineering upfront.',
        'Give each worker agent a focused system prompt describing its role, specialization, and expected input and output format.',
        'Add a maximum delegation counter in the supervisor state to prevent infinite loops where the supervisor keeps delegating without a final answer.',
        'Test each worker agent independently before integrating into the multi-agent system to ensure correct isolated behavior.',
      ],
      ar: [
        'ابدأ ببنية مشرف-عامل بسيطة وأضف الوكلاء تدريجياً عند تحديد الاختناقات بدلاً من الإفراط في الهندسة مسبقاً.',
        'امنح كل وكيل عامل موجِّه نظام مُركَّز يصف دوره وتخصصه وتنسيق الإدخال والإخراج المتوقع.',
        'أضف عداد تفويض أقصى في حالة المشرف لمنع الحلقات اللانهائية.',
        'اختبر كل وكيل عامل بشكل مستقل قبل دمجه في النظام متعدد الوكلاء.',
      ],
    },
    references: [
      { title: 'LangGraph Multi-Agent Networks', url: 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/' },
      { title: 'LangGraph Supervisor Tutorial', url: 'https://langchain-ai.github.io/langgraph/tutorials/multi_agent/agent_supervisor/' },
      { title: 'LangGraph Subgraph Documentation', url: 'https://langchain-ai.github.io/langgraph/how-tos/subgraph/' },
    ],
    quiz: [
      {
        id: 'langgraph-multi-agent-q1',
        question: { en: 'In a supervisor-worker multi-agent architecture, what is the supervisor\'s primary role?', ar: 'في بنية المشرف-العامل متعددة الوكلاء، ما الدور الأساسي للمشرف؟' },
        options: {
          en: ['Execute all tasks directly without delegation', 'Route tasks to appropriate specialized agents and coordinate results', 'Manage checkpointing and state persistence', 'Validate the output of worker agents'],
          ar: ['تنفيذ جميع المهام مباشرةً بدون تفويض', 'توجيه المهام لوكلاء متخصصين مناسبين وتنسيق النتائج', 'إدارة نقاط التفتيش واستمرارية الحالة', 'التحقق من صحة مخرجات وكلاء العمال'],
        },
        correctAnswer: 1,
        explanation: { en: 'The supervisor acts as an orchestrator - it receives the high-level task, decides which specialized worker is best suited, delegates work, and combines results into a final answer.', ar: 'يعمل المشرف كمنسِّق - يستقبل المهمة عالية المستوى، يقرر أي عامل متخصص هو الأنسب، يفوِّض العمل، ويجمع النتائج في إجابة نهائية.' },
      },
      {
        id: 'langgraph-multi-agent-q2',
        question: { en: 'How can a compiled LangGraph subgraph be used as a worker agent in a parent graph?', ar: 'كيف يمكن استخدام رسم بياني فرعي LangGraph مُجمَّع كوكيل عامل في رسم بياني أب؟' },
        options: {
          en: ['By importing it as a Python module', 'By passing the compiled subgraph directly to add_node()', 'By serializing it to JSON and loading at runtime', 'By calling subgraph.attach(parent_graph)'],
          ar: ['باستيراده كوحدة Python', 'بتمرير الرسم البياني الفرعي المُجمَّع مباشرةً لـ add_node()', 'بتسلسله إلى JSON وتحميله أثناء التشغيل', 'باستدعاء subgraph.attach(parent_graph)'],
        },
        correctAnswer: 1,
        explanation: { en: 'LangGraph\'s add_node() accepts compiled graphs directly as node implementations, allowing you to compose complex agent hierarchies by nesting compiled subgraphs inside parent graphs.', ar: 'تقبل add_node() في LangGraph الرسوم البيانية المُجمَّعة مباشرةً كتنفيذات للعقد، مما يسمح بتركيب تسلسلات هرمية معقدة للوكلاء.' },
      },
    ],
  },

  'langgraph-persistence': {
    beginnerDefinition: {
      en: 'State Persistence in LangGraph means saving your agent\'s memory and progress so it can remember past conversations, resume after being interrupted, and pick up where it left off - even after the program restarts. Without persistence, your agent forgets everything the moment a conversation ends.',
      ar: 'استمرارية الحالة في LangGraph تعني حفظ ذاكرة وكيلك وتقدمه حتى يتمكن من تذكر المحادثات السابقة، والاستئناف بعد الانقطاع، والمتابعة من حيث توقف - حتى بعد إعادة تشغيل البرنامج. بدون الاستمرارية، ينسى وكيلك كل شيء بمجرد انتهاء المحادثة.',
    },
    technicalDefinition: {
      en: 'State Persistence in LangGraph is implemented through the Checkpointer interface. A checkpointer serializes the complete graph state after each node runs and stores it in a backend (memory, SQLite, or PostgreSQL). Each conversation is identified by a thread_id in the config. On subsequent calls with the same thread_id, LangGraph retrieves the latest checkpoint and resumes execution from the exact state where it was last saved.',
      ar: 'تُنفَّذ استمرارية الحالة في LangGraph من خلال واجهة Checkpointer. يُسلسل checkpointer حالة الرسم البياني الكاملة بعد تشغيل كل عقدة ويخزِّنها في خلفية (ذاكرة، SQLite، أو PostgreSQL). يُحدَّد كل محادثة بـ thread_id في التكوين. في الاستدعاءات اللاحقة بنفس thread_id، يسترجع LangGraph أحدث نقطة تفتيش ويستأنف التنفيذ من الحالة الدقيقة المحفوظة.',
    },
    analogy: {
      en: 'Think of persistence like a video game save file. Without saving, you lose all progress if you close the game. With a save file, you can pause at any point, return days later, and continue exactly where you left off - same level, same items, same quest progress. LangGraph\'s checkpointer is the save-game system: it captures the complete state so nothing is lost between sessions.',
      ar: 'فكر في الاستمرارية مثل ملف حفظ لعبة فيديو. بدون الحفظ، تفقد كل تقدمك إذا أغلقت اللعبة. مع ملف الحفظ، يمكنك التوقف في أي وقت، والعودة بعد أيام، والمتابعة من حيث توقفت بالضبط. checkpointer في LangGraph هو نظام حفظ اللعبة لوكيل الذكاء الاصطناعي.',
    },
    explanation: {
      en: [
        'LangGraph provides several checkpointer backends: MemorySaver (in-process, for development), SqliteSaver (file-based, for single-server production), and PostgresSaver (for distributed production deployments).',
        'Every graph invocation requires a config dict with a "configurable" key containing a "thread_id". This ID uniquely identifies a conversation thread. Messages and state from previous invocations with the same thread_id are automatically loaded.',
        'After each node runs, the checkpointer saves a snapshot called a checkpoint. Each checkpoint has a unique checkpoint_id. You can retrieve the full history with app.get_state_history(config).',
        'Time-travel debugging is possible because all checkpoints are stored. You can replay execution from any past checkpoint by passing checkpoint_id in the config, allowing inspection of intermediate states.',
        'The checkpointer also enables the fork pattern: branch off from any saved checkpoint to explore alternative execution paths without modifying the original thread.',
      ],
      ar: [
        'يوفر LangGraph عدة خلفيات checkpointer: MemorySaver (في العملية، للتطوير)، وSqliteSaver (قائمة على الملفات، لإنتاج خادم واحد)، وPostgresSaver (للنشر الإنتاجي الموزع).',
        'يتطلب كل استدعاء للرسم البياني قاموس config مع مفتاح "configurable" يحتوي على "thread_id". يُحدِّد هذا المعرِّف خيط المحادثة. تُحمَّل الرسائل والحالة من الاستدعاءات السابقة بنفس thread_id تلقائياً.',
        'بعد تشغيل كل عقدة، يحفظ checkpointer لقطة تسمى نقطة تفتيش. لكل نقطة تفتيش checkpoint_id فريد يمكن استرجاع التاريخ الكامل من خلاله.',
        'تصحيح أخطاء السفر عبر الزمن ممكن لأن جميع نقاط التفتيش مخزَّنة. يمكنك إعادة تشغيل التنفيذ من أي نقطة سابقة عن طريق تمرير checkpoint_id في التكوين.',
        'يُتيح checkpointer أيضاً نمط التفريع: التفرع من أي نقطة تفتيش لاستكشاف مسارات تنفيذ بديلة دون تعديل الخيط الأصلي.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import MemorySaver
from langgraph.checkpoint.sqlite import SqliteSaver
from langchain_openai import ChatOpenAI

class State(TypedDict):
    messages: Annotated[list, add_messages]

llm = ChatOpenAI(model="gpt-4o-mini")

def chatbot(state: State) -> dict:
    return {"messages": [llm.invoke(state["messages"])]}

graph = StateGraph(State)
graph.add_node("chat", chatbot)
graph.add_edge(START, "chat")
graph.add_edge("chat", END)

# Option 1: In-memory (development only - lost on restart)
memory_checkpointer = MemorySaver()
app_dev = graph.compile(checkpointer=memory_checkpointer)

# Option 2: SQLite (persistent - survives restarts)
with SqliteSaver.from_conn_string("agent_memory.db") as sqlite_checkpointer:
    app_prod = graph.compile(checkpointer=sqlite_checkpointer)

    config = {"configurable": {"thread_id": "user-alice-session-1"}}

    # Turn 1: Alice introduces herself
    result1 = app_prod.invoke(
        {"messages": [{"role": "user", "content": "My name is Alice."}]},
        config=config
    )
    print(result1["messages"][-1].content)

    # Turn 2: Agent remembers Alice across turns
    result2 = app_prod.invoke(
        {"messages": [{"role": "user", "content": "What is my name?"}]},
        config=config
    )
    print(result2["messages"][-1].content)  # "Your name is Alice."

    # Inspect state history for debugging
    history = list(app_prod.get_state_history(config))
    print(f"Stored {len(history)} checkpoints for this thread")`,
      description: {
        en: 'Demonstrates LangGraph persistence with MemorySaver and SqliteSaver. The agent remembers conversation history across turns using the same thread_id, and the state history API enables time-travel debugging.',
        ar: 'يوضح استمرارية LangGraph مع MemorySaver وSqliteSaver. يتذكر الوكيل تاريخ المحادثة عبر جولات متعددة باستخدام نفس thread_id، وواجهة تاريخ الحالة تُتيح تصحيح أخطاء السفر عبر الزمن.',
      },
    },
    commonMistakes: {
      en: [
        'Using MemorySaver in production - it stores state only in RAM, so all conversation history is lost every time the server restarts.',
        'Using the same thread_id for different users - thread_ids must be globally unique per conversation to prevent one user\'s history being exposed to another.',
        'Not closing SqliteSaver connections properly - always use it as a context manager or call .close() explicitly to avoid database lock issues.',
        'Assuming the state is automatically trimmed - checkpointers store all history indefinitely. Implement periodic cleanup or message trimming to prevent unbounded storage growth.',
      ],
      ar: [
        'استخدام MemorySaver في الإنتاج - يخزِّن الحالة في الذاكرة العشوائية فقط، لذا يضيع تاريخ المحادثة عند كل إعادة تشغيل للخادم.',
        'استخدام نفس thread_id لمستخدمين مختلفين - يجب أن تكون thread_ids فريدة عالمياً لكل محادثة لمنع كشف تاريخ أحد المستخدمين للآخر.',
        'عدم إغلاق اتصالات SqliteSaver بشكل صحيح - استخدمها دائماً كمدير سياق لتجنب مشاكل قفل قاعدة البيانات.',
        'افتراض تقليص الحالة تلقائياً - نفِّذ تنظيفاً دورياً أو تقليصاً للرسائل لمنع نمو التخزين غير المحدود.',
      ],
    },
    bestPractices: {
      en: [
        'Generate thread_ids using uuid.uuid4() to guarantee uniqueness and prevent accidental ID collisions between different users or sessions.',
        'Use PostgresSaver with connection pooling for high-traffic production deployments to handle concurrent checkpoint reads and writes efficiently.',
        'Implement message trimming in your state reducer to keep only the last N messages and prevent context window overflow as conversations grow.',
        'Store thread_ids in your application database alongside user records so you can retrieve conversation history and associate it with the correct user at any time.',
      ],
      ar: [
        'أنشئ thread_ids باستخدام uuid.uuid4() لضمان التفرد ومنع تصادم المعرِّفات بين مستخدمين أو جلسات مختلفة.',
        'استخدم PostgresSaver مع تجميع الاتصالات لعمليات النشر الإنتاجية عالية حركة المرور.',
        'نفِّذ تقليص الرسائل في مُخفِّض حالتك للاحتفاظ بآخر N رسالة فقط ومنع تجاوز نافذة السياق.',
        'خزِّن thread_ids في قاعدة بيانات تطبيقك جانباً سجلات المستخدمين لاسترجاع تاريخ المحادثة عند الحاجة.',
      ],
    },
    references: [
      { title: 'LangGraph Persistence Conceptual Guide', url: 'https://langchain-ai.github.io/langgraph/concepts/persistence/' },
      { title: 'LangGraph Checkpointer Reference', url: 'https://langchain-ai.github.io/langgraph/reference/checkpoints/' },
      { title: 'LangGraph How-to: Add Memory to Chatbot', url: 'https://langchain-ai.github.io/langgraph/tutorials/introduction/#part-3-adding-memory-to-the-chatbot' },
    ],
    quiz: [
      {
        id: 'langgraph-persistence-q1',
        question: { en: 'Which LangGraph checkpointer should you use for a production deployment that needs to survive server restarts?', ar: 'أي checkpointer في LangGraph يجب استخدامه لنشر إنتاجي يحتاج إلى البقاء بعد إعادة تشغيل الخادم؟' },
        options: {
          en: ['MemorySaver', 'FileSaver', 'SqliteSaver or PostgresSaver', 'CacheSaver'],
          ar: ['MemorySaver', 'FileSaver', 'SqliteSaver أو PostgresSaver', 'CacheSaver'],
        },
        correctAnswer: 2,
        explanation: { en: 'MemorySaver stores state in RAM and loses all data on restart. SqliteSaver and PostgresSaver write to durable storage so state persists across server restarts.', ar: 'يخزِّن MemorySaver الحالة في الذاكرة العشوائية ويفقد جميع البيانات عند إعادة التشغيل. يكتب SqliteSaver وPostgresSaver إلى تخزين دائم لذا تبقى الحالة عبر إعادات التشغيل.' },
      },
      {
        id: 'langgraph-persistence-q2',
        question: { en: 'What is time-travel debugging in the context of LangGraph persistence?', ar: 'ما هو تصحيح أخطاء السفر عبر الزمن في سياق استمرارية LangGraph؟' },
        options: {
          en: ['Running the graph faster by skipping slow nodes', 'Replaying execution from a past checkpoint to inspect intermediate states', 'Predicting future states before they are computed', 'Rolling back the LLM to an earlier model version'],
          ar: ['تشغيل الرسم البياني بشكل أسرع عن طريق تخطي العقد البطيئة', 'إعادة تشغيل التنفيذ من نقطة تفتيش سابقة لفحص الحالات الوسيطة', 'التنبؤ بالحالات المستقبلية قبل حسابها', 'التراجع عن LLM إلى إصدار نموذج سابق'],
        },
        correctAnswer: 1,
        explanation: { en: 'Because every checkpoint is saved, you can replay execution from any past state by passing a checkpoint_id in the config, letting you inspect what the agent\'s state looked like at each step.', ar: 'لأن كل نقطة تفتيش محفوظة، يمكنك إعادة تشغيل التنفيذ من أي حالة سابقة عن طريق تمرير checkpoint_id في التكوين، مما يتيح فحص حالة الوكيل في كل خطوة.' },
      },
    ],
  },

  'langgraph-streaming': {
    beginnerDefinition: {
      en: 'Streaming with LangGraph means getting results from your agent in real-time as it works, rather than waiting for it to finish everything before showing any output. Like watching a typewriter print text letter by letter, streaming lets users see progress immediately instead of staring at a blank screen.',
      ar: 'البث مع LangGraph يعني الحصول على نتائج من وكيلك في الوقت الفعلي أثناء عمله، بدلاً من الانتظار حتى ينتهي من كل شيء قبل إظهار أي مخرجات. مثل مشاهدة الآلة الكاتبة تطبع النص حرفاً بحرف، يتيح البث للمستخدمين رؤية التقدم فوراً.',
    },
    technicalDefinition: {
      en: 'Streaming in LangGraph is provided through the astream() and stream() methods on compiled graphs. LangGraph supports multiple streaming modes: "values" streams the complete state after each node, "updates" streams only state changes from each node, "messages" streams individual LLM token chunks for real-time text display, and "events" streams all internal LangChain events for fine-grained observability. Async streaming with astream() integrates with FastAPI and other async web frameworks.',
      ar: 'يُوفَّر البث في LangGraph من خلال طريقتي astream() وstream() على الرسوم البيانية المُجمَّعة. يدعم LangGraph أوضاع بث متعددة: "values" يبث الحالة الكاملة بعد كل عقدة، و"updates" يبث فقط تغييرات الحالة، و"messages" يبث أجزاء رمز LLM الفردية لعرض النص في الوقت الفعلي، و"events" يبث جميع أحداث LangChain الداخلية.',
    },
    analogy: {
      en: 'Imagine ordering food at a restaurant. Without streaming, the waiter brings everything at once only after all dishes are completely ready - you wait 45 minutes staring at an empty table. With streaming, the waiter brings each dish as soon as it is ready. You start eating immediately and always know something is happening. LangGraph streaming delivers each result token, node update, or state change the moment it is produced.',
      ar: 'تخيل طلب طعام في مطعم. بدون البث، يُحضر الجرسون كل شيء دفعة واحدة فقط بعد اكتمال جميع الأطباق. مع البث، يُحضر الجرسون كل طبق بمجرد أن يكون جاهزاً. تبدأ الأكل فوراً وتعلم دائماً أن شيئاً ما يحدث. يُسلِّم البث في LangGraph كل رمز نتيجة أو تحديث عقدة في اللحظة التي يُنتَج فيها.',
    },
    explanation: {
      en: [
        'The stream() method returns an iterator of event data. The most basic usage is stream(input, config, stream_mode="updates") to see what each node produced after it ran.',
        'The "messages" streaming mode is the most user-visible: it streams individual token chunks from LLM calls, enabling the typewriter effect in chat interfaces. Each chunk is an AIMessageChunk with a content field containing partial text.',
        'For async web frameworks, use astream() which returns an async generator. This integrates directly with FastAPI Server-Sent Events endpoints, allowing you to stream tokens to the browser in real-time.',
        'You can combine streaming modes by passing a list: stream_mode=["updates", "messages"] to simultaneously receive node-level updates and token-level streaming.',
        'The astream_events() method provides the most granular streaming, emitting events for every internal action - chain starts, LLM calls, tool executions - useful for building detailed progress indicators.',
      ],
      ar: [
        'تُعيد طريقة stream() مكرِّراً لبيانات الأحداث. الاستخدام الأساسي هو stream(input, config, stream_mode="updates") لرؤية ما أنتجته كل عقدة.',
        'وضع بث "messages" هو الأكثر ظهوراً للمستخدم: يبث أجزاء رمز فردية من استدعاءات LLM، مما يُتيح تأثير الآلة الكاتبة في واجهات المحادثة.',
        'لأطر الويب غير المتزامنة، استخدم astream() الذي يُعيد مولِّداً غير متزامن يتكامل مع نقاط نهاية Server-Sent Events في FastAPI.',
        'يمكنك دمج أوضاع البث بتمرير قائمة: stream_mode=["updates", "messages"] لاستقبال تحديثات مستوى العقدة وبث مستوى الرمز معاً.',
        'توفر طريقة astream_events() البث الأكثر دقة، وتُصدر أحداثاً لكل إجراء داخلي - مفيدة لبناء مؤشرات تقدم مفصَّلة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import asyncio
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI

class State(TypedDict):
    messages: Annotated[list, add_messages]

llm = ChatOpenAI(model="gpt-4o-mini", streaming=True)

def chatbot(state: State) -> dict:
    return {"messages": [llm.invoke(state["messages"])]}

graph = StateGraph(State)
graph.add_node("chat", chatbot)
graph.add_edge(START, "chat")
graph.add_edge("chat", END)
app = graph.compile()

# Node-level updates streaming
print("=== Node Updates ===")
for chunk in app.stream(
    {"messages": [{"role": "user", "content": "Tell me a joke"}]},
    stream_mode="updates"
):
    node_name, state_update = list(chunk.items())[0]
    print(f"Node '{node_name}' produced an update")

# Token-level message streaming (typewriter effect)
print("\\n=== Token Streaming ===")
for chunk, metadata in app.stream(
    {"messages": [{"role": "user", "content": "Write a haiku about AI"}]},
    stream_mode="messages"
):
    if chunk.content:
        print(chunk.content, end="", flush=True)
print()

# Async streaming for FastAPI / web use
async def stream_for_web():
    async for chunk, metadata in app.astream(
        {"messages": [{"role": "user", "content": "Count to 5"}]},
        stream_mode="messages"
    ):
        if chunk.content:
            # In FastAPI: yield f"data: {chunk.content}\\n\\n"
            print(chunk.content, end="", flush=True)

asyncio.run(stream_for_web())`,
      description: {
        en: 'Demonstrates LangGraph streaming in three modes: node-level updates, token-level message streaming for the typewriter effect, and async streaming for web framework integration.',
        ar: 'يوضح البث في LangGraph بثلاثة أوضاع: تحديثات مستوى العقدة، وبث الرسائل على مستوى الرمز لتأثير الآلة الكاتبة، والبث غير المتزامن لتكامل إطار الويب.',
      },
    },
    commonMistakes: {
      en: [
        'Not setting streaming=True on the ChatOpenAI constructor - without this flag, the LLM completes the full response before returning, so no token chunks are available even in "messages" mode.',
        'Calling astream() from synchronous code without a running event loop - use asyncio.run() or an async framework to avoid runtime errors.',
        'Parsing the wrong event type in "events" mode - filter for "on_chat_model_stream" to get token chunks and "on_tool_end" for tool results.',
        'Forgetting to flush stdout when printing streaming tokens - always use print(chunk, end="", flush=True) so tokens appear immediately.',
      ],
      ar: [
        'عدم ضبط streaming=True على منشئ ChatOpenAI - بدون هذا العلَم، يُكمل LLM الاستجابة الكاملة قبل إعادتها، لذا لا تتوفر أجزاء الرموز.',
        'استدعاء astream() من كود متزامن بدون حلقة أحداث جارية - استخدم asyncio.run() أو إطار غير متزامن.',
        'تحليل نوع الحدث الخاطئ في وضع "events" - صفِّح على "on_chat_model_stream" للحصول على أجزاء الرموز.',
        'نسيان فلش stdout عند طباعة رموز البث - استخدم دائماً print(chunk, end="", flush=True).',
      ],
    },
    bestPractices: {
      en: [
        'Use stream_mode="messages" for user-facing chat interfaces to enable the typewriter effect, which significantly improves perceived responsiveness.',
        'Filter streaming events by node name using the metadata field to show progress indicators specific to each step.',
        'For FastAPI, use StreamingResponse with an async generator that yields Server-Sent Events, and handle client disconnections to cancel graph execution gracefully.',
        'Test streaming behavior separately from correctness - validate that the streaming UX is clear and that intermediate states are not confusing to users.',
      ],
      ar: [
        'استخدم stream_mode="messages" لواجهات المحادثة المُوجَّهة للمستخدم لتمكين تأثير الآلة الكاتبة.',
        'صفِّح أحداث البث حسب اسم العقدة باستخدام حقل البيانات الوصفية لإظهار مؤشرات التقدم الخاصة بكل خطوة.',
        'لـ FastAPI، استخدم StreamingResponse مع مولِّد غير متزامن يُنتج Server-Sent Events وتعامل مع قطع الاتصال.',
        'اختبر سلوك البث بشكل منفصل عن الصحة - تحقق من أن تجربة البث واضحة وأن الحالات الوسيطة ليست مربكة.',
      ],
    },
    references: [
      { title: 'LangGraph Streaming Conceptual Guide', url: 'https://langchain-ai.github.io/langgraph/concepts/streaming/' },
      { title: 'LangGraph How-to: Stream Tokens', url: 'https://langchain-ai.github.io/langgraph/how-tos/streaming-tokens/' },
      { title: 'LangGraph How-to: Stream from Final Node', url: 'https://langchain-ai.github.io/langgraph/how-tos/streaming-from-final-node/' },
    ],
    quiz: [
      {
        id: 'langgraph-streaming-q1',
        question: { en: 'Which streaming mode provides individual LLM token chunks for a typewriter effect?', ar: 'أي وضع بث يوفر أجزاء رمز LLM الفردية لتأثير الآلة الكاتبة؟' },
        options: {
          en: ['"values" mode', '"updates" mode', '"messages" mode', '"events" mode'],
          ar: ['وضع "values"', 'وضع "updates"', 'وضع "messages"', 'وضع "events"'],
        },
        correctAnswer: 2,
        explanation: { en: '"messages" mode streams individual AIMessageChunk objects containing partial token text as the LLM generates them, enabling the typewriter effect in user interfaces.', ar: 'يبث وضع "messages" كائنات AIMessageChunk الفردية التي تحتوي على نص رمز جزئي أثناء توليد LLM لها.' },
      },
      {
        id: 'langgraph-streaming-q2',
        question: { en: 'What additional setup is required on the LLM to enable token-level streaming in LangGraph?', ar: 'ما الإعداد الإضافي المطلوب على LLM لتمكين البث على مستوى الرمز في LangGraph؟' },
        options: {
          en: ['Set temperature=0 on the LLM', 'Pass stream=True to the invoke() call', 'Set streaming=True when constructing the LLM object', 'Add a StreamNode to the graph'],
          ar: ['ضبط temperature=0 على LLM', 'تمرير stream=True لاستدعاء invoke()', 'ضبط streaming=True عند إنشاء كائن LLM', 'إضافة StreamNode للرسم البياني'],
        },
        correctAnswer: 2,
        explanation: { en: 'You must set streaming=True in the ChatOpenAI (or other LLM) constructor. Without this, the LLM buffers the complete response before returning, making token-level streaming impossible.', ar: 'يجب ضبط streaming=True في منشئ ChatOpenAI. بدون هذا، يُخزِّن LLM الاستجابة الكاملة مؤقتاً قبل إعادتها، مما يجعل البث على مستوى الرمز مستحيلاً.' },
      },
    ],
  },

  'langgraph-deployment': {
    beginnerDefinition: {
      en: 'Deploying LangGraph Applications means taking your AI agent from a local Python script to a real production service that handles multiple users, scales under load, and runs reliably 24/7. It involves packaging your agent, setting up an API, managing state storage, and using platforms designed for AI agent workloads.',
      ar: 'نشر تطبيقات LangGraph يعني نقل وكيل الذكاء الاصطناعي من سكريبت Python محلي إلى خدمة إنتاجية حقيقية تتعامل مع مستخدمين متعددين وتعمل بموثوقية على مدار الساعة. يتضمن تغليف وكيلك وإعداد واجهة برمجة التطبيقات وإدارة تخزين الحالة.',
    },
    technicalDefinition: {
      en: 'LangGraph applications can be deployed via LangGraph Platform (managed cloud), self-hosted LangGraph Server (open-source Docker-based), or manually integrated into FastAPI. LangGraph Platform provides a REST API with endpoints for runs, threads, assistants, and cron jobs; handles state persistence with PostgreSQL; supports streaming via Server-Sent Events; and includes LangGraph Studio for visual debugging. The langgraph.json configuration file defines graph entry points, dependencies, and environment variables.',
      ar: 'يمكن نشر تطبيقات LangGraph عبر LangGraph Platform (السحابة المُدارة)، أو LangGraph Server المُستضاف ذاتياً (القائم على Docker مفتوح المصدر)، أو الدمج اليدوي في FastAPI. توفر LangGraph Platform واجهة REST API مع نقاط نهاية للتشغيل والخيوط والمساعدين والوظائف الدورية؛ وتتعامل مع استمرارية الحالة مع PostgreSQL.',
    },
    analogy: {
      en: 'Building a LangGraph application locally is like cooking a great meal in your home kitchen. Deploying it is like opening a restaurant. Suddenly you need commercial kitchen infrastructure, an ordering system (API endpoints), staff (load balancer), refrigerators for overnight storage (persistent state), and health inspectors (monitoring). LangGraph Platform is the restaurant franchise system that handles all of that infrastructure so you can focus on perfecting the recipes.',
      ar: 'بناء تطبيق LangGraph محلياً يشبه طهي وجبة رائعة في مطبخك المنزلي. نشره يشبه افتتاح مطعم. فجأة تحتاج بنية تحتية تجارية ونظام طلبات وطواقم خدمة وتخزين مستمر ومراقبة. LangGraph Platform هو نظام الامتياز الذي يتولى كل ذلك حتى تركز على تحسين وصفاتك.',
    },
    explanation: {
      en: [
        'The simplest deployment approach is integrating a compiled LangGraph into a FastAPI application. The graph runs within the web server process and you expose endpoints for invoking the graph and streaming results via Server-Sent Events.',
        'For production, LangGraph Server packages your graph as a Docker container and provides a ready-made REST API: POST /runs (invoke), POST /runs/stream (stream), GET /threads (list conversations). It uses PostgreSQL for persistence and Redis for queuing.',
        'The langgraph.json file is the deployment manifest. It specifies the Python path to your compiled graph object, required environment variables, additional packages, and which checkpointer backend to use.',
        'LangGraph Platform (cloud) builds on the open-source server and adds managed infrastructure: automatic scaling, built-in auth, deployment slots (dev/staging/prod), LangSmith tracing integration, and LangGraph Studio for visual debugging.',
        'For high-availability deployments, configure horizontal scaling with multiple server replicas sharing the same PostgreSQL database. The server is stateless between requests so any replica can handle any request.',
      ],
      ar: [
        'أبسط نهج للنشر هو دمج LangGraph مُجمَّع في تطبيق FastAPI. يعمل الرسم البياني داخل عملية خادم الويب وتعرض نقاط نهاية لاستدعائه وبث النتائج عبر Server-Sent Events.',
        'للإنتاج، يُغلِّف LangGraph Server رسمك البياني كحاوية Docker ويوفر REST API جاهزة. يستخدم PostgreSQL للاستمرارية وRedis للطوابير.',
        'ملف langgraph.json هو بيان النشر. يُحدِّد مسار Python لكائن الرسم البياني المُجمَّع، ومتغيرات البيئة المطلوبة، والحزم الإضافية.',
        'LangGraph Platform يُضيف بنية تحتية مُدارة: توسع تلقائي ومصادقة مدمجة وفتحات نشر وتكامل تتبع LangSmith وLangGraph Studio للتصحيح المرئي.',
        'للنشر عالي التوافر، اضبط التوسع الأفقي مع نسخ خادم متعددة تشترك في PostgreSQL. الخادم عديم الحالة بين الطلبات لذا يمكن لأي نسخة التعامل مع أي طلب.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `# === FastAPI Deployment (Manual Integration) ===
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from typing import AsyncGenerator
import json
from your_agent import compiled_graph  # Your compiled LangGraph

app = FastAPI()

@app.post("/chat")
async def chat(request: dict):
    """Invoke the agent and return the final result."""
    config = {"configurable": {"thread_id": request["thread_id"]}}
    result = await compiled_graph.ainvoke(
        {"messages": [{"role": "user", "content": request["message"]}]},
        config=config
    )
    return {"response": result["messages"][-1].content}

@app.post("/chat/stream")
async def chat_stream(request: dict):
    """Stream the agent response token by token."""
    config = {"configurable": {"thread_id": request["thread_id"]}}

    async def generate() -> AsyncGenerator[str, None]:
        async for chunk, metadata in compiled_graph.astream(
            {"messages": [{"role": "user", "content": request["message"]}]},
            config=config,
            stream_mode="messages"
        ):
            if chunk.content:
                yield f"data: {json.dumps({'token': chunk.content})}\\n\\n"
        yield "data: [DONE]\\n\\n"

    return StreamingResponse(generate(), media_type="text/event-stream")

# === LangGraph Server Deployment ===
# 1. pip install langgraph-cli
# 2. Create langgraph.json:
# {
#   "dependencies": ["."],
#   "graphs": { "agent": "./my_agent.py:compiled_graph" },
#   "env": ".env"
# }
# 3. langgraph dev        (local development server)
# 4. langgraph deploy     (deploy to LangGraph Platform)`,
      description: {
        en: 'Two deployment patterns: a manual FastAPI integration with a streaming SSE endpoint, and the LangGraph Server deployment workflow. Both enable production-ready REST API access to LangGraph agents.',
        ar: 'نمطان للنشر: تكامل FastAPI يدوي مع نقطة نهاية SSE للبث، وسير عمل نشر LangGraph Server. كلاهما يُتيح الوصول عبر REST API الجاهز للإنتاج.',
      },
    },
    commonMistakes: {
      en: [
        'Using MemorySaver in production - production requires a persistent checkpointer that survives server restarts and can be shared across multiple server instances.',
        'Not setting environment variables securely - API keys should be loaded from environment variables or secrets managers, never hardcoded in langgraph.json or source code.',
        'Using synchronous invoke() in async FastAPI handlers - this blocks the event loop and destroys throughput. Always use ainvoke() and astream() in async contexts.',
        'Not implementing request timeouts - long-running LLM calls can block server threads indefinitely without timeouts set at both the LLM and HTTP server levels.',
      ],
      ar: [
        'استخدام MemorySaver في الإنتاج - يتطلب الإنتاج checkpointer مستمراً يبقى بعد إعادة تشغيل الخادم ويمكن مشاركته عبر مثيلات متعددة.',
        'عدم ضبط متغيرات البيئة بأمان - يجب تحميل مفاتيح API من متغيرات البيئة أو مديري الأسرار، وليس ترميزها صارماً.',
        'استخدام invoke() المتزامن في معالجات FastAPI غير المتزامنة - يحظر هذا حلقة الأحداث ويُدمِّر الإنتاجية.',
        'عدم تنفيذ مهل الطلب - اضبط المهل على مستوى عميل LLM ومستوى خادم HTTP لمنع الحظر.',
      ],
    },
    bestPractices: {
      en: [
        'Use LangGraph Platform or LangGraph Server for production rather than a manual FastAPI integration - they handle persistence, queuing, authentication, and scaling out of the box.',
        'Implement proper observability: integrate LangSmith for LLM call tracing, add structured logging per request, and expose a /health endpoint for load balancer health checks.',
        'Containerize your deployment with Docker and use environment-specific configuration for dev/staging/prod differences.',
        'Design your agent to be idempotent where possible - if a request is retried, running it twice should not cause duplicate actions like sending emails or charging payments.',
      ],
      ar: [
        'استخدم LangGraph Platform أو LangGraph Server للإنتاج بدلاً من تكامل FastAPI اليدوي - فهما يتعاملان مع الاستمرارية والطوابير والمصادقة والتوسع جاهزاً.',
        'نفِّذ إمكانية ملاحظة مناسبة: ادمج LangSmith لتتبع الاستدعاءات وأضف تسجيلاً منظَّماً لكل طلب.',
        'احتوِ نشرك في Docker واستخدم تكويناً خاصاً بالبيئة لاختلافات التطوير والتجهيز والإنتاج.',
        'صمِّم وكيلك ليكون idempotent قدر الإمكان - تشغيله مرتين بسبب إعادة المحاولة يجب ألا يُسبب إجراءات مكررة.',
      ],
    },
    references: [
      { title: 'LangGraph Platform Documentation', url: 'https://langchain-ai.github.io/langgraph/concepts/langgraph_platform/' },
      { title: 'LangGraph Server Self-Hosted Deployment', url: 'https://langchain-ai.github.io/langgraph/how-tos/deploy-self-hosted/' },
      { title: 'LangGraph CLI Reference', url: 'https://langchain-ai.github.io/langgraph/cloud/reference/cli/' },
    ],
    quiz: [
      {
        id: 'langgraph-deployment-q1',
        question: { en: 'What file defines the deployment configuration for LangGraph Server?', ar: 'ما الملف الذي يُعرِّف تكوين النشر لـ LangGraph Server؟' },
        options: {
          en: ['deployment.yaml', 'langgraph.json', 'docker-compose.yml', 'graph_config.py'],
          ar: ['deployment.yaml', 'langgraph.json', 'docker-compose.yml', 'graph_config.py'],
        },
        correctAnswer: 1,
        explanation: { en: 'The langgraph.json file is the deployment manifest specifying graph entry points, required environment variables, additional dependencies, and deployment settings.', ar: 'ملف langgraph.json هو بيان النشر الذي يُحدِّد نقاط دخول الرسم البياني ومتغيرات البيئة المطلوبة والتبعيات الإضافية وإعدادات النشر.' },
      },
      {
        id: 'langgraph-deployment-q2',
        question: { en: 'Why should you use ainvoke() instead of invoke() when deploying LangGraph in a FastAPI application?', ar: 'لماذا يجب استخدام ainvoke() بدلاً من invoke() عند نشر LangGraph في تطبيق FastAPI؟' },
        options: {
          en: ['ainvoke() is faster than invoke()', 'invoke() blocks the async event loop, reducing server throughput', 'ainvoke() automatically retries on failure', 'invoke() does not support checkpointers'],
          ar: ['ainvoke() أسرع من invoke()', 'invoke() يحظر حلقة الأحداث غير المتزامنة مما يُقلِّل إنتاجية الخادم', 'ainvoke() يعيد المحاولة تلقائياً عند الفشل', 'invoke() لا يدعم نقاط التفتيش'],
        },
        correctAnswer: 1,
        explanation: { en: 'FastAPI runs on an async event loop. Calling synchronous invoke() from an async handler blocks the entire event loop, preventing the server from handling other requests. ainvoke() is non-blocking.', ar: 'تعمل FastAPI على حلقة أحداث غير متزامنة. استدعاء invoke() المتزامن من معالج غير متزامن يحظر خيط حلقة الأحداث بأكمله، مما يمنع الخادم من التعامل مع طلبات أخرى. ainvoke() غير محظور.' },
      },
    ],
  },

  'langmem-introduction': {
    beginnerDefinition: {
      en: 'LangMem is a memory system for AI agents that lets them remember important information over time - across many conversations and sessions. Instead of starting fresh every chat, an agent with LangMem can recall past facts, preferences, and context, making it feel genuinely personal and intelligent rather than amnesiac.',
      ar: 'LangMem هو نظام ذاكرة لوكلاء الذكاء الاصطناعي يتيح لهم تذكر المعلومات المهمة بمرور الوقت - عبر محادثات وجلسات كثيرة. بدلاً من البدء من جديد في كل محادثة، يمكن للوكيل المزوَّد بـ LangMem استدعاء الحقائق والتفضيلات والسياق السابق، مما يجعله يبدو شخصياً وذكياً حقاً بدلاً من كونه مصاباً بفقدان الذاكرة.',
    },
    technicalDefinition: {
      en: 'LangMem is an open-source library from LangChain that provides long-term memory management for LLM-powered agents. It implements three memory types: in-context storage (injecting memories into the prompt), external storage (semantic search over a vector store), and in-weights storage (fine-tuning). LangMem offers memory managers that automatically extract, deduplicate, and consolidate memories from conversations using LLM-driven processing. It integrates natively with LangGraph through background memory formation tasks and namespace-based memory isolation.',
      ar: 'LangMem هي مكتبة مفتوحة المصدر من LangChain توفر إدارة الذاكرة طويلة الأمد لوكلاء مدعومة بـ LLM. تُنفِّذ ثلاثة أنواع من الذاكرة: التخزين في السياق (حقن الذكريات في الموجِّه)، والتخزين الخارجي (البحث الدلالي عبر مخزن متجهات)، والتخزين في الأوزان (الضبط الدقيق). يوفر LangMem مديري ذاكرة يستخرجون الذكريات ويُزيلون التكرار منها ويوحِّدونها تلقائياً من المحادثات.',
    },
    analogy: {
      en: 'Think of LangMem like the notebook a great therapist keeps between sessions. After each session (conversation), the therapist writes down key facts: "patient prefers morning appointments", "has two children named Lena and Max", "working through career anxiety". In the next session, the therapist glances at the notebook before the patient arrives and can pick up exactly where they left off, referencing specific details without being told again. LangMem is that notebook - it captures, organizes, and retrieves what matters across sessions.',
      ar: 'فكر في LangMem مثل الدفتر الذي يحتفظ به معالج نفسي رائع بين الجلسات. بعد كل جلسة (محادثة)، يكتب المعالج الحقائق الرئيسية. في الجلسة التالية، يتصفح المعالج الدفتر قبل وصول المريض ويمكنه متابعة ما توقف عنده. LangMem هو ذلك الدفتر - يلتقط وينظم ويسترجع ما يهم عبر الجلسات.',
    },
    explanation: {
      en: [
        'LangMem organizes memory into namespaces - isolated scopes identified by tuples like ("user_123", "preferences") or ("project_abc", "facts"). This allows the same agent to maintain separate memory stores for different users, projects, or topics without cross-contamination.',
        'The InMemoryStore and the LangGraph-integrated store are the two primary backends. InMemoryStore is for development; for production you use a vector-enabled database (like PostgreSQL with pgvector) that supports semantic similarity search.',
        'Memory extraction is done by a memory manager that runs an LLM over recent conversation turns to identify facts worth storing. It uses structured output to produce memory objects with content, importance scores, and topic labels.',
        'When a new conversation starts, the agent performs a semantic search over the memory store using the user\'s current message as the query. The top-k most relevant memories are retrieved and injected into the system prompt as context.',
        'LangMem supports background memory processing: instead of blocking the main agent response, memory extraction runs as a background LangGraph task after the conversation turn completes, keeping latency low.',
      ],
      ar: [
        'ينظِّم LangMem الذاكرة في نطاقات اسمية - نطاقات معزولة تُحدَّد بمجموعات مثل ("user_123", "preferences") أو ("project_abc", "facts"). يتيح ذلك للوكيل نفسه الحفاظ على مخازن ذاكرة منفصلة لمستخدمين أو مشاريع أو موضوعات مختلفة.',
        'InMemoryStore والمخزن المتكامل مع LangGraph هما الخلفيتان الأساسيتان. InMemoryStore للتطوير؛ للإنتاج تستخدم قاعدة بيانات مُمكَّنة للمتجهات تدعم البحث عن التشابه الدلالي.',
        'يُنفِّذ مدير الذاكرة استخراج الذاكرة عن طريق تشغيل LLM على جولات المحادثة الأخيرة لتحديد الحقائق الجديرة بالتخزين. يستخدم المخرجات المنظَّمة لإنتاج كائنات ذاكرة مع المحتوى ودرجات الأهمية والتسميات الموضوعية.',
        'عند بدء محادثة جديدة، يُجري الوكيل بحثاً دلالياً عبر مخزن الذاكرة باستخدام رسالة المستخدم الحالية كاستعلام. يُسترجع أعلى k ذكريات ذات صلة وتُحقن في موجِّه النظام كسياق.',
        'يدعم LangMem معالجة الذاكرة في الخلفية: بدلاً من حظر استجابة الوكيل الرئيسية، يعمل استخراج الذاكرة كمهمة LangGraph في الخلفية بعد اكتمال جولة المحادثة للحفاظ على زمن الاستجابة منخفضاً.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from langmem import create_memory_manager, create_memory_store_manager
from langchain_openai import ChatOpenAI
from langgraph.store.memory import InMemoryStore

llm = ChatOpenAI(model="gpt-4o-mini")

# 1. Create a memory store
store = InMemoryStore()

# 2. Create a memory manager that extracts facts from conversations
manager = create_memory_store_manager(
    "openai:gpt-4o-mini",
    namespace=("user_memories", "{user_id}"),  # Isolated per user
)

# 3. Simulate a conversation and extract memories
conversation = [
    {"role": "user", "content": "Hi, I'm Alice. I love hiking and I'm allergic to peanuts."},
    {"role": "assistant", "content": "Nice to meet you Alice! I'll remember your love of hiking and your peanut allergy."},
    {"role": "user", "content": "I prefer morning messages and I'm a software engineer."},
    {"role": "assistant", "content": "Got it - morning messages and software engineer. Noted!"},
]

# Extract and store memories from this conversation
await manager.ainvoke(
    {"messages": conversation},
    config={"configurable": {"user_id": "alice_123"}}
)

# 4. Retrieve memories for the next conversation
from langmem import create_memory_retriever

retriever = create_memory_retriever(
    store,
    namespace=("user_memories", "alice_123"),
)

# Semantic search: find memories relevant to food
relevant_memories = await retriever.ainvoke("food preferences")
for mem in relevant_memories:
    print(f"Memory: {mem.page_content}")
# Output: "User is allergic to peanuts."

# 5. Use in a RAG-style prompt
context = "\\n".join([m.page_content for m in relevant_memories])
response = await llm.ainvoke([
    {"role": "system", "content": f"User context:\\n{context}"},
    {"role": "user", "content": "What snack should I bring on a hike?"}
])
print(response.content)`,
      description: {
        en: 'A complete LangMem workflow: creating a memory store, extracting facts from a conversation using a memory manager, retrieving relevant memories via semantic search, and injecting them into the next LLM prompt.',
        ar: 'سير عمل LangMem الكامل: إنشاء مخزن ذاكرة، استخراج الحقائق من محادثة باستخدام مدير الذاكرة، استرجاع الذكريات ذات الصلة عبر البحث الدلالي، وحقنها في موجِّه LLM التالي.',
      },
    },
    commonMistakes: {
      en: [
        'Storing every message verbatim instead of extracting meaningful facts - memories should be compact, deduplicated summaries, not raw conversation logs.',
        'Using a single global namespace for all users - always scope memories by user_id or session_id to prevent data leakage between different users.',
        'Retrieving too many memories and overloading the context window - set a reasonable top_k limit (5-10 memories) and rank by relevance score before injecting.',
        'Running memory extraction synchronously in the main response path - this adds significant latency. Use background tasks for memory extraction.',
      ],
      ar: [
        'تخزين كل رسالة حرفياً بدلاً من استخراج الحقائق المعنوية - يجب أن تكون الذكريات ملخصات مضغوطة وغير مكررة، وليس سجلات محادثات خام.',
        'استخدام نطاق اسمي عام واحد لجميع المستخدمين - قيِّد الذكريات دائماً بـ user_id أو session_id لمنع تسرب البيانات.',
        'استرجاع ذكريات كثيرة جداً وإرهاق نافذة السياق - اضبط حداً معقولاً لـ top_k (5-10 ذكريات) ورتِّب حسب درجة الصلة قبل الحقن.',
        'تشغيل استخراج الذاكرة بشكل متزامن في مسار الاستجابة الرئيسية - يُضيف هذا زمن استجابة كبيراً. استخدم مهام الخلفية لاستخراج الذاكرة.',
      ],
    },
    bestPractices: {
      en: [
        'Use namespace hierarchies to organize memories: ("users", user_id, "facts") for factual memories, ("users", user_id, "preferences") for preferences, enabling targeted retrieval.',
        'Implement memory deduplication by having the memory manager check existing memories before adding new ones to avoid storing the same fact multiple times.',
        'Set memory importance scores and periodically prune low-importance memories to keep the store manageable and relevant.',
        'Test memory retrieval quality separately by constructing known memory sets and verifying that semantically related queries return the expected memories.',
      ],
      ar: [
        'استخدم تسلسلات هرمية للنطاقات الاسمية لتنظيم الذكريات: ("users", user_id, "facts") للذكريات الواقعية، و("users", user_id, "preferences") للتفضيلات.',
        'نفِّذ إزالة تكرار الذاكرة بجعل مدير الذاكرة يتحقق من الذكريات الموجودة قبل إضافة جديدة لتجنب تخزين نفس الحقيقة عدة مرات.',
        'اضبط درجات أهمية الذاكرة وقم بتقليص الذكريات منخفضة الأهمية دورياً للحفاظ على المخزن قابلاً للإدارة وذا صلة.',
        'اختبر جودة استرجاع الذاكرة بشكل منفصل عن طريق إنشاء مجموعات ذاكرة معروفة والتحقق من أن الاستعلامات ذات الصلة الدلالية تُعيد الذكريات المتوقعة.',
      ],
    },
    references: [
      { title: 'LangMem GitHub Repository', url: 'https://github.com/langchain-ai/langmem' },
      { title: 'LangMem Documentation', url: 'https://langchain-ai.github.io/langmem/' },
      { title: 'LangGraph Long-term Memory Guide', url: 'https://langchain-ai.github.io/langgraph/concepts/memory/' },
    ],
    quiz: [
      {
        id: 'langmem-introduction-q1',
        question: { en: 'What are the three memory storage types supported by LangMem?', ar: 'ما أنواع تخزين الذاكرة الثلاثة التي يدعمها LangMem؟' },
        options: {
          en: ['Short-term, medium-term, and long-term', 'In-context, external storage, and in-weights', 'RAM, disk, and database', 'Episodic, semantic, and procedural'],
          ar: ['قصيرة الأمد ومتوسطة الأمد وطويلة الأمد', 'في السياق والتخزين الخارجي والتخزين في الأوزان', 'ذاكرة عشوائية وقرص وقاعدة بيانات', 'حلقية ودلالية وإجرائية'],
        },
        correctAnswer: 1,
        explanation: { en: 'LangMem supports in-context storage (injecting memories into the prompt), external storage (semantic search over a vector store), and in-weights storage (fine-tuning the model with memories).', ar: 'يدعم LangMem التخزين في السياق (حقن الذكريات في الموجِّه)، والتخزين الخارجي (البحث الدلالي عبر مخزن متجهات)، والتخزين في الأوزان (الضبط الدقيق للنموذج بالذكريات).' },
      },
      {
        id: 'langmem-introduction-q2',
        question: { en: 'Why should memory extraction be run as a background task rather than in the main response path?', ar: 'لماذا يجب تشغيل استخراج الذاكرة كمهمة في الخلفية بدلاً من مسار الاستجابة الرئيسية؟' },
        options: {
          en: ['Background tasks have access to more memory', 'It avoids adding latency to the user-facing response', 'Background tasks use a different LLM model', 'It prevents memory from being saved incorrectly'],
          ar: ['مهام الخلفية لديها وصول لمزيد من الذاكرة', 'تتجنب إضافة زمن استجابة للاستجابة المُوجَّهة للمستخدم', 'تستخدم مهام الخلفية نموذج LLM مختلفاً', 'تمنع حفظ الذاكرة بشكل غير صحيح'],
        },
        correctAnswer: 1,
        explanation: { en: 'Memory extraction involves additional LLM calls to analyze the conversation and extract facts. Running this in the main response path would increase latency for the user. Background tasks keep the user-facing response fast.', ar: 'يتضمن استخراج الذاكرة استدعاءات LLM إضافية لتحليل المحادثة واستخراج الحقائق. تشغيل هذا في مسار الاستجابة الرئيسية سيزيد زمن الاستجابة للمستخدم. مهام الخلفية تُبقي الاستجابة سريعة.' },
      },
      {
        id: 'langmem-introduction-q3',
        question: { en: 'What is the purpose of namespaces in LangMem?', ar: 'ما الغرض من النطاقات الاسمية في LangMem؟' },
        options: {
          en: ['To encrypt memories for security', 'To isolate memories by user, project, or topic and prevent cross-contamination', 'To compress memories for storage efficiency', 'To prioritize which memories are retrieved first'],
          ar: ['لتشفير الذكريات من أجل الأمان', 'لعزل الذكريات حسب المستخدم أو المشروع أو الموضوع ومنع التلوث المتبادل', 'لضغط الذكريات لكفاءة التخزين', 'لتحديد أولوية الذكريات التي تُسترجع أولاً'],
        },
        correctAnswer: 1,
        explanation: { en: 'Namespaces are scoped identifiers (tuples) that isolate memories so that different users, projects, or topics have completely separate memory stores. This prevents one user\'s memories from appearing in another user\'s context.', ar: 'النطاقات الاسمية هي معرِّفات نطاقية (مجموعات) تعزل الذكريات بحيث يكون للمستخدمين أو المشاريع أو الموضوعات المختلفة مخازن ذاكرة منفصلة تماماً.' },
      },
    ],
  },

  'mem0-memory-layer': {
    beginnerDefinition: {
      en: 'Mem0 is a smart memory layer for AI applications that automatically remembers what matters about each user and surfaces that context in future conversations. It is like giving your AI a long-term memory that learns and adapts - so every interaction feels personal and contextually aware, not like starting over.',
      ar: 'Mem0 هو طبقة ذاكرة ذكية لتطبيقات الذكاء الاصطناعي تتذكر تلقائياً ما يهم بشأن كل مستخدم وتعرض ذلك السياق في المحادثات المستقبلية. إنه مثل منح الذكاء الاصطناعي ذاكرة طويلة الأمد تتعلم وتتكيف - بحيث يبدو كل تفاعل شخصياً وواعياً بالسياق.',
    },
    technicalDefinition: {
      en: 'Mem0 is an open-source memory management system providing a unified API for storing, retrieving, and updating memories across AI agent conversations. It uses an LLM to automatically extract facts and preferences from conversation turns, stores them in a hybrid vector-graph database, applies conflict resolution when new information contradicts old memories, and provides a search API for relevance-ranked memory retrieval. Mem0 supports user-level, agent-level, and session-level memory scoping and provides both a self-hosted Python package and a managed cloud service.',
      ar: 'Mem0 هو نظام إدارة ذاكرة مفتوح المصدر يوفر واجهة برمجة تطبيقات موحدة لتخزين الذكريات واسترجاعها وتحديثها عبر محادثات وكيل الذكاء الاصطناعي. يستخدم LLM لاستخراج الحقائق والتفضيلات تلقائياً من جولات المحادثة، ويخزِّنها في قاعدة بيانات هجينة متجه-رسم بياني، ويطبِّق حل التعارضات عندما تتعارض المعلومات الجديدة مع الذكريات القديمة، ويوفر واجهة برمجة بحث لاسترجاع الذاكرة المرتَّب حسب الصلة.',
    },
    analogy: {
      en: 'Mem0 is like the front desk staff at a hotel you visit regularly. When you check in again, they already know you prefer a non-smoking room on a high floor, that you are traveling for business, and that you had an issue with the Wi-Fi last time. They do not need to ask you again - they remembered. Each stay, they update their notes with new preferences. Mem0 does the same for AI applications: it builds a living profile of each user that gets smarter with every interaction.',
      ar: 'Mem0 مثل موظفي الاستقبال في فندق تزوره بانتظام. عند تسجيل الوصول مجدداً، يعرفون بالفعل أنك تفضل غرفة غير مدخنين في طابق مرتفع. لا يحتاجون لسؤالك مجدداً. Mem0 يفعل الشيء نفسه لتطبيقات الذكاء الاصطناعي: يبني ملفاً حياً لكل مستخدم يصبح أذكى مع كل تفاعل.',
    },
    explanation: {
      en: [
        'Mem0 operates through a simple four-operation API: add() stores new memories from a conversation, search() finds relevant memories for a query, get_all() retrieves all memories for a user, and delete() removes a specific memory.',
        'When you call add() with a conversation, Mem0 runs an LLM internally to extract discrete facts (e.g., "user is vegetarian", "user speaks Spanish"). It also checks for contradictions with existing memories and updates or replaces them.',
        'Memories are stored in a hybrid storage system: a vector database (for semantic similarity search) and a graph database (for relationship-based reasoning). This dual storage allows both "find memories similar to this query" and "find memories connected to this entity".',
        'The search() method takes a natural language query and returns memories ranked by relevance. You inject the top results into your LLM prompt as context before generating a response, giving the model access to personalized history.',
        'Mem0 supports three memory scopes: user_id (memories about a specific user, persisted across all their conversations), agent_id (memories specific to an agent\'s configuration), and run_id (session-level memories for a single conversation run).',
      ],
      ar: [
        'يعمل Mem0 من خلال واجهة برمجة بأربع عمليات بسيطة: add() يخزِّن ذكريات جديدة من محادثة، وsearch() يجد الذكريات ذات الصلة لاستعلام، وget_all() يسترجع جميع الذكريات لمستخدم، وdelete() يحذف ذكرى محددة.',
        'عند استدعاء add() مع محادثة، يُشغِّل Mem0 LLM داخلياً لاستخراج حقائق منفصلة. يتحقق أيضاً من التعارضات مع الذكريات الموجودة ويحدِّثها أو يستبدلها.',
        'تُخزَّن الذكريات في نظام تخزين هجين: قاعدة بيانات متجهات (للبحث عن التشابه الدلالي) وقاعدة بيانات رسم بياني (للاستدلال القائم على العلاقات).',
        'تأخذ طريقة search() استعلاماً باللغة الطبيعية وتُعيد ذكريات مرتَّبة حسب الصلة. تُحقن أعلى النتائج في موجِّه LLM كسياق قبل توليد استجابة.',
        'يدعم Mem0 ثلاثة نطاقات للذاكرة: user_id (ذكريات حول مستخدم محدد، مستمرة عبر جميع محادثاته)، وagent_id (ذكريات خاصة بتكوين وكيل)، وrun_id (ذكريات مستوى الجلسة لتشغيل محادثة واحدة).',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from mem0 import Memory
from openai import OpenAI

# Initialize Mem0 (uses OpenAI for extraction by default)
memory = Memory()
openai_client = OpenAI()

USER_ID = "alice_456"

# --- Turn 1: User shares information ---
messages_turn1 = [
    {"role": "user", "content": "Hi! I'm a vegetarian software engineer who loves hiking. I'm based in Berlin."},
    {"role": "assistant", "content": "Great to meet you! I'll keep that in mind."}
]

# Extract and store memories from this conversation
result = memory.add(messages_turn1, user_id=USER_ID)
print("Stored memories:", result)

# --- Turn 2: Later conversation ---
user_query = "Can you recommend a restaurant for a team lunch?"

# Retrieve relevant memories before generating response
relevant_memories = memory.search(user_query, user_id=USER_ID, limit=5)
memory_context = "\\n".join([f"- {m['memory']}" for m in relevant_memories["results"]])

print("Retrieved context:")
print(memory_context)
# Output:
# - User is a vegetarian
# - User is based in Berlin

# Build contextual prompt
response = openai_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": f"User background:\\n{memory_context}\\n\\nGive personalized recommendations."},
        {"role": "user", "content": user_query}
    ]
)
print("\\nPersonalized response:")
print(response.choices[0].message.content)

# View all stored memories for this user
all_memories = memory.get_all(user_id=USER_ID)
for mem in all_memories["results"]:
    print(f"[{mem['id']}] {mem['memory']}")`,
      description: {
        en: 'A complete Mem0 workflow: storing memories from a conversation, searching for relevant memories given a new query, injecting them into the LLM prompt, and listing all stored memories for a user.',
        ar: 'سير عمل Mem0 الكامل: تخزين الذكريات من محادثة، والبحث عن الذكريات ذات الصلة لاستعلام جديد، وحقنها في موجِّه LLM، وسرد جميع الذكريات المخزنة لمستخدم.',
      },
    },
    commonMistakes: {
      en: [
        'Not passing user_id to add() and search() - without scoping memories to a user, all memories mix together and any user can retrieve another user\'s personal information.',
        'Calling search() with a vague or very short query - semantic search works best with descriptive queries. "food" retrieves less targeted memories than "dietary restrictions and food preferences".',
        'Not handling the case where search() returns zero results - always check the results list length and gracefully handle an empty context (use a generic prompt instead).',
        'Storing entire message texts as memories - Mem0 works best when the LLM extracts compact facts. Avoid bypassing extraction by directly inserting raw messages.',
      ],
      ar: [
        'عدم تمرير user_id لـ add() وsearch() - بدون تحديد نطاق الذكريات لمستخدم، تختلط جميع الذكريات معاً ويمكن لأي مستخدم استرجاع المعلومات الشخصية لمستخدم آخر.',
        'استدعاء search() باستعلام غامض أو قصير جداً - يعمل البحث الدلالي بشكل أفضل مع استعلامات وصفية.',
        'عدم التعامل مع الحالة التي تُعيد فيها search() صفر نتائج - تحقق دائماً من طول قائمة النتائج وتعامل بأناقة مع السياق الفارغ.',
        'تخزين نصوص الرسائل بالكامل كذكريات - يعمل Mem0 بشكل أفضل عند استخراج LLM للحقائق المضغوطة.',
      ],
    },
    bestPractices: {
      en: [
        'Use all three scope IDs when applicable (user_id + agent_id + run_id) for fine-grained memory isolation and targeted retrieval.',
        'Periodically review and clean stored memories by calling get_all() and deleting outdated or incorrect entries to maintain memory quality.',
        'Set limit=5 to limit=10 in search() to keep the retrieved context concise enough to fit within the LLM\'s context window without crowding out the actual conversation.',
        'Use the managed Mem0 cloud service for production deployments to benefit from automatic scaling, hosted vector storage, and the web dashboard for memory inspection.',
      ],
      ar: [
        'استخدم معرِّفات النطاق الثلاثة عند الاقتضاء (user_id + agent_id + run_id) لعزل الذاكرة الدقيق والاسترجاع المستهدف.',
        'راجع الذكريات المخزنة وقم بتنظيفها دورياً باستدعاء get_all() وحذف الإدخالات القديمة أو غير الصحيحة للحفاظ على جودة الذاكرة.',
        'اضبط limit من 5 إلى 10 في search() للحفاظ على السياق المُسترجع مختصراً بما يكفي للاندراج ضمن نافذة سياق LLM.',
        'استخدم خدمة Mem0 السحابية المُدارة لعمليات النشر الإنتاجية للاستفادة من التوسع التلقائي وتخزين المتجهات المُستضاف.',
      ],
    },
    references: [
      { title: 'Mem0 Documentation', url: 'https://docs.mem0.ai/' },
      { title: 'Mem0 GitHub Repository', url: 'https://github.com/mem0ai/mem0' },
      { title: 'Mem0 Quickstart Guide', url: 'https://docs.mem0.ai/quickstart' },
    ],
    quiz: [
      {
        id: 'mem0-memory-layer-q1',
        question: { en: 'What are the four core operations of the Mem0 API?', ar: 'ما العمليات الأربع الأساسية لواجهة برمجة تطبيقات Mem0؟' },
        options: {
          en: ['create, read, update, delete', 'add, search, get_all, delete', 'store, fetch, update, purge', 'write, query, list, remove'],
          ar: ['create, read, update, delete', 'add, search, get_all, delete', 'store, fetch, update, purge', 'write, query, list, remove'],
        },
        correctAnswer: 1,
        explanation: { en: 'Mem0 provides add() for storing memories from conversations, search() for finding relevant memories, get_all() for listing all memories for a user, and delete() for removing a specific memory.', ar: 'يوفر Mem0 add() لتخزين الذكريات من المحادثات، وsearch() للعثور على الذكريات ذات الصلة، وget_all() لسرد جميع الذكريات لمستخدم، وdelete() لإزالة ذكرى محددة.' },
      },
      {
        id: 'mem0-memory-layer-q2',
        question: { en: 'What type of storage does Mem0 use to enable both semantic search and relationship-based reasoning?', ar: 'ما نوع التخزين الذي يستخدمه Mem0 لتمكين البحث الدلالي والاستدلال القائم على العلاقات؟' },
        options: {
          en: ['A relational database with full-text search', 'A hybrid vector-graph database', 'A key-value store with LRU cache', 'A document database with indexing'],
          ar: ['قاعدة بيانات علائقية مع بحث نصي كامل', 'قاعدة بيانات هجينة متجه-رسم بياني', 'مخزن مفتاح-قيمة مع ذاكرة تخزين مؤقت LRU', 'قاعدة بيانات وثائق مع فهرسة'],
        },
        correctAnswer: 1,
        explanation: { en: 'Mem0 uses a hybrid vector-graph storage: the vector database enables semantic similarity search for "find memories related to this query", while the graph database enables relationship-based reasoning about connected entities.', ar: 'يستخدم Mem0 تخزيناً هجيناً متجه-رسم بياني: قاعدة البيانات المتجهية تُتيح البحث عن التشابه الدلالي، بينما قاعدة بيانات الرسم البياني تُتيح الاستدلال القائم على العلاقات حول الكيانات المترابطة.' },
      },
    ],
  },

  'coala-architecture': {
    beginnerDefinition: {
      en: 'CoALA (Cognitive Architectures for Language Agents) is a research framework that describes how to build AI agents by taking inspiration from how human cognition works. It provides a blueprint organizing an agent\'s memory, actions, and decision-making into clear components - making it easier to design agents that reason, remember, and act more like humans do.',
      ar: 'CoALA (البنى المعرفية لوكلاء اللغة) هو إطار بحثي يصف كيفية بناء وكلاء الذكاء الاصطناعي بالاستلهام من طريقة عمل الإدراك البشري. يوفر مخططاً ينظِّم ذاكرة الوكيل وأفعاله وصنع قراراته في مكونات واضحة - مما يُسهِّل تصميم وكلاء يستدلون ويتذكرون ويتصرفون بشكل أشبه بالبشر.',
    },
    technicalDefinition: {
      en: 'CoALA (Cognitive Architectures for Language Agents) is a conceptual framework published in 2023 that systematically organizes language agent design space along two dimensions: memory modules (working, episodic, semantic, procedural) and action spaces (storage, process, retrieval, reasoning, interaction). CoALA provides a taxonomy for analyzing and comparing existing agent systems (ReAct, Reflexion, Voyager, etc.) and a structured design methodology for building new agents. It bridges cognitive science, classical AI planning, and modern LLM-based agent design.',
      ar: 'CoALA (البنى المعرفية لوكلاء اللغة) هو إطار مفاهيمي نُشر عام 2023 ينظِّم بشكل منهجي فضاء تصميم وكيل اللغة على بُعدين: وحدات الذاكرة (العاملة، والحلقية، والدلالية، والإجرائية) وفضاءات الإجراءات (التخزين، والمعالجة، والاسترجاع، والاستدلال، والتفاعل). يوفر CoALA تصنيفاً لتحليل ومقارنة أنظمة الوكلاء الموجودة وتصميم وكلاء جدد.',
    },
    analogy: {
      en: 'CoALA is to AI agent design what an architectural blueprint is to building construction. Before CoALA, building an AI agent was like constructing a building without blueprints - developers cobbled together components without a shared vocabulary or principled structure. CoALA provides the blueprint: here is where the memory goes, here is how actions are classified, here is how decision cycles work. Just as architectural blueprints let builders of different backgrounds collaborate on the same building, CoALA lets researchers and engineers design agents with a shared conceptual language.',
      ar: 'CoALA لتصميم وكيل الذكاء الاصطناعي مثل المخطط المعماري لبناء الهياكل. قبل CoALA، كان بناء وكيل ذكاء اصطناعي مثل تشييد مبنى بدون مخططات. يوفر CoALA المخطط: هنا تذهب الذاكرة، وهكذا تُصنَّف الإجراءات، وهكذا تعمل دورات القرار.',
    },
    explanation: {
      en: [
        'CoALA defines four types of memory based on cognitive science. Working memory is the agent\'s context window - the active information in the current reasoning cycle. Episodic memory stores specific past experiences and interaction histories. Semantic memory holds general world knowledge and facts. Procedural memory contains skills, plans, and action sequences the agent can execute.',
        'The action space in CoALA is divided into five categories. Storage actions read from or write to memory. Process actions execute computation (run code, call APIs). Retrieval actions fetch information from external sources. Reasoning actions use the LLM to think, plan, and evaluate. Interaction actions communicate with humans or other agents.',
        'The decision-making cycle in CoALA follows a perceive-retrieve-reason-act loop. The agent perceives new input, retrieves relevant memories, reasons about the best next action (using the LLM), selects an action, executes it, and updates memory with the result before starting the next cycle.',
        'CoALA uses this framework as a lens to analyze existing agent systems. ReAct (Reason+Act) is analyzed as using working memory only with retrieval and reasoning actions. Reflexion adds episodic memory via a self-critique loop. Voyager adds procedural memory through a skill library that grows over time.',
        'For practitioners, CoALA\'s value is as a design checklist: before building an agent, ask which memory types it needs, which action categories it requires, and how the decision cycle should be structured. This prevents ad-hoc architectures and encourages principled, extensible design.',
      ],
      ar: [
        'يُعرِّف CoALA أربعة أنواع من الذاكرة مستندة إلى علم الأعصاب المعرفي. الذاكرة العاملة هي نافذة سياق الوكيل - المعلومات النشطة في دورة الاستدلال الحالية. تُخزِّن الذاكرة الحلقية تجارب محددة وتاريخ التفاعلات. تحتوي الذاكرة الدلالية على المعرفة العامة والحقائق. تحتوي الذاكرة الإجرائية على مهارات وخطط وتسلسلات إجراءات يمكن للوكيل تنفيذها.',
        'تنقسم فضاء الإجراءات في CoALA إلى خمس فئات. إجراءات التخزين تقرأ أو تكتب في الذاكرة. إجراءات المعالجة تُنفِّذ الحسابات. إجراءات الاسترجاع تجلب المعلومات من مصادر خارجية. إجراءات الاستدلال تستخدم LLM للتفكير والتخطيط والتقييم. إجراءات التفاعل تتواصل مع البشر أو وكلاء آخرين.',
        'تتبع دورة صنع القرار في CoALA حلقة إدراك-استرجاع-استدلال-تنفيذ. يُدرك الوكيل مدخلاً جديداً، ويسترجع الذكريات ذات الصلة، ويستدل بشأن أفضل إجراء تالٍ، ويختار إجراءً، وينفِّذه، ويحدِّث الذاكرة بالنتيجة قبل بدء الدورة التالية.',
        'يستخدم CoALA هذا الإطار كعدسة لتحليل أنظمة الوكلاء الموجودة. يُحلَّل ReAct على أنه يستخدم الذاكرة العاملة فقط مع إجراءات الاسترجاع والاستدلال. يُضيف Reflexion الذاكرة الحلقية عبر حلقة النقد الذاتي. يُضيف Voyager الذاكرة الإجرائية من خلال مكتبة مهارات تنمو بمرور الوقت.',
        'للممارسين، قيمة CoALA هي كقائمة مراجعة للتصميم: قبل بناء وكيل، اسأل عن أنواع الذاكرة التي يحتاجها، وفئات الإجراءات المطلوبة، وكيف يجب هيكلة دورة القرار.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `"""
CoALA-inspired agent architecture implementation.
This maps the four CoALA memory types and five action categories
to concrete Python components.
"""
from dataclasses import dataclass, field
from typing import Any
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage

llm = ChatOpenAI(model="gpt-4o-mini")

# === CoALA Memory Modules ===

@dataclass
class WorkingMemory:
    """Active context - current conversation and reasoning state."""
    messages: list = field(default_factory=list)
    current_plan: str = ""
    scratch_pad: str = ""

@dataclass
class EpisodicMemory:
    """Past experiences - specific interaction histories."""
    episodes: list[dict] = field(default_factory=list)

    def add_episode(self, task: str, outcome: str, reflection: str):
        self.episodes.append({"task": task, "outcome": outcome, "reflection": reflection})

    def retrieve_similar(self, query: str, k: int = 3) -> list[dict]:
        # Simplified: in production, use semantic search
        return self.episodes[-k:] if self.episodes else []

@dataclass
class SemanticMemory:
    """General world knowledge - facts and concepts."""
    knowledge_base: dict[str, str] = field(default_factory=dict)

    def store_fact(self, key: str, value: str):
        self.knowledge_base[key] = value

    def retrieve_fact(self, key: str) -> str | None:
        return self.knowledge_base.get(key)

@dataclass
class ProceduralMemory:
    """Skills and plans - reusable action sequences."""
    skills: dict[str, str] = field(default_factory=dict)

    def register_skill(self, name: str, description: str):
        self.skills[name] = description

    def list_skills(self) -> list[str]:
        return list(self.skills.keys())

# === CoALA Action Space ===

class CoALAAgent:
    def __init__(self):
        self.working_memory = WorkingMemory()
        self.episodic_memory = EpisodicMemory()
        self.semantic_memory = SemanticMemory()
        self.procedural_memory = ProceduralMemory()

        # Seed procedural memory with skills
        self.procedural_memory.register_skill("web_search", "Search the web for current information")
        self.procedural_memory.register_skill("code_execution", "Write and run Python code")

    # --- Reasoning Action ---
    def reason(self, task: str) -> str:
        past_episodes = self.episodic_memory.retrieve_similar(task)
        episode_context = "\n".join([f"Past: {e['task']} -> {e['reflection']}" for e in past_episodes])
        available_skills = ", ".join(self.procedural_memory.list_skills())

        response = llm.invoke([
            SystemMessage(content=f"You are a CoALA agent.\\nAvailable skills: {available_skills}\\nPast experience:\\n{episode_context}"),
            HumanMessage(content=f"Task: {task}\\nWhat is your plan?")
        ])
        self.working_memory.current_plan = response.content
        return response.content

    # --- Storage Action ---
    def store_fact(self, key: str, value: str):
        self.semantic_memory.store_fact(key, value)

    # --- Interaction Action ---
    def respond(self, user_message: str) -> str:
        plan = self.reason(user_message)
        self.episodic_memory.add_episode(
            task=user_message, outcome="responded", reflection=f"Used plan: {plan[:50]}"
        )
        return plan

agent = CoALAAgent()
agent.store_fact("user_language", "English")
response = agent.respond("How do I sort a list in Python?")
print(response)`,
      description: {
        en: 'A CoALA-inspired agent implementing all four memory types (working, episodic, semantic, procedural) and demonstrating reasoning, storage, and interaction action categories from the CoALA framework.',
        ar: 'وكيل مستلهَم من CoALA يُنفِّذ جميع أنواع الذاكرة الأربعة (العاملة، والحلقية، والدلالية، والإجرائية) ويوضح فئات إجراءات الاستدلال والتخزين والتفاعل من إطار CoALA.',
      },
    },
    commonMistakes: {
      en: [
        'Implementing only working memory (the LLM context window) and ignoring the other three memory types - most agent failures stem from insufficient long-term memory design.',
        'Confusing episodic memory (specific past experiences) with semantic memory (general facts) - they serve different purposes and should be stored and retrieved differently.',
        'Designing action spaces that are too coarse-grained - lumping all actions into a single "tool call" category loses the CoALA distinction between retrieval, reasoning, and process actions.',
        'Treating CoALA as a rigid specification rather than a design lens - use it as a checklist to ensure you have considered each component, not as a framework you must implement exactly.',
      ],
      ar: [
        'تنفيذ الذاكرة العاملة فقط (نافذة سياق LLM) وتجاهل أنواع الذاكرة الثلاثة الأخرى - معظم إخفاقات الوكيل تنبع من تصميم ذاكرة طويلة الأمد غير كافٍ.',
        'الخلط بين الذاكرة الحلقية (تجارب محددة سابقة) والذاكرة الدلالية (حقائق عامة) - فهما يخدمان أغراضاً مختلفة ويجب تخزينهما واسترجاعهما بشكل مختلف.',
        'تصميم فضاءات إجراءات خشنة جداً - تجميع جميع الإجراءات في فئة "استدعاء أداة" واحدة يفقد التمييز بين الاسترجاع والاستدلال وإجراءات المعالجة.',
        'التعامل مع CoALA كمواصفات صارمة بدلاً من عدسة تصميم - استخدمه كقائمة مراجعة لضمان النظر في كل مكون، وليس كإطار يجب تنفيذه بالضبط.',
      ],
    },
    bestPractices: {
      en: [
        'Use CoALA as a design checklist at the start of every new agent project: identify which of the four memory types the agent needs and which of the five action categories it will use.',
        'Map your existing agent components to CoALA categories before adding new features - this reveals gaps (e.g., missing episodic memory) that explain why the agent keeps repeating mistakes.',
        'Implement memory types incrementally: start with working memory (always needed), add semantic memory for factual grounding, then episodic for learning from experience, and finally procedural for skill reuse.',
        'Document your agent architecture using CoALA terminology in your codebase - future contributors will immediately understand the role of each component without reading lengthy descriptions.',
      ],
      ar: [
        'استخدم CoALA كقائمة مراجعة للتصميم في بداية كل مشروع وكيل جديد: حدد أنواع الذاكرة الأربعة التي يحتاجها الوكيل وفئات الإجراءات الخمس التي سيستخدمها.',
        'حوِّل مكونات وكيلك الموجودة إلى فئات CoALA قبل إضافة ميزات جديدة - هذا يكشف الثغرات التي تُفسِّر سبب تكرار الوكيل للأخطاء.',
        'نفِّذ أنواع الذاكرة بشكل تدريجي: ابدأ بالذاكرة العاملة، ثم أضف الذاكرة الدلالية، ثم الحلقية، وأخيراً الإجرائية.',
        'وثِّق بنية وكيلك باستخدام مصطلحات CoALA في قاعدة الكود - سيفهم المساهمون المستقبليون فوراً دور كل مكون.',
      ],
    },
    references: [
      { title: 'CoALA Paper: Cognitive Architectures for Language Agents', url: 'https://arxiv.org/abs/2309.02427' },
      { title: 'CoALA GitHub Repository', url: 'https://github.com/ysymyth/awesome-language-agents' },
      { title: 'Survey of Language Agent Architecture', url: 'https://arxiv.org/abs/2308.11432' },
    ],
    quiz: [
      {
        id: 'coala-architecture-q1',
        question: { en: 'Which of the four CoALA memory types stores specific past experiences and interaction histories?', ar: 'أي من أنواع الذاكرة الأربعة في CoALA يُخزِّن تجارب محددة وتواريخ التفاعلات؟' },
        options: {
          en: ['Working memory', 'Semantic memory', 'Episodic memory', 'Procedural memory'],
          ar: ['الذاكرة العاملة', 'الذاكرة الدلالية', 'الذاكرة الحلقية', 'الذاكرة الإجرائية'],
        },
        correctAnswer: 2,
        explanation: { en: 'Episodic memory in CoALA stores specific past experiences and interaction histories - like a diary of what happened in previous agent runs. This is distinct from semantic memory (general facts) and procedural memory (skills and plans).', ar: 'تُخزِّن الذاكرة الحلقية في CoALA تجارب محددة وتواريخ التفاعلات - مثل مذكرات ما حدث في تشغيلات الوكيل السابقة. هذا يختلف عن الذاكرة الدلالية (الحقائق العامة) والذاكرة الإجرائية (المهارات والخطط).' },
      },
      {
        id: 'coala-architecture-q2',
        question: { en: 'In the CoALA framework, which action category covers using the LLM to think, plan, and evaluate options?', ar: 'في إطار CoALA، أي فئة إجراءات تغطي استخدام LLM للتفكير والتخطيط وتقييم الخيارات؟' },
        options: {
          en: ['Storage actions', 'Process actions', 'Retrieval actions', 'Reasoning actions'],
          ar: ['إجراءات التخزين', 'إجراءات المعالجة', 'إجراءات الاسترجاع', 'إجراءات الاستدلال'],
        },
        correctAnswer: 3,
        explanation: { en: 'Reasoning actions in CoALA specifically cover using the LLM to think, plan, evaluate options, and make decisions. This is distinct from retrieval (fetching information), process (executing computation), and storage (reading/writing memory).', ar: 'تغطي إجراءات الاستدلال في CoALA تحديداً استخدام LLM للتفكير والتخطيط وتقييم الخيارات واتخاذ القرارات. هذا يختلف عن الاسترجاع (جلب المعلومات) والمعالجة (تنفيذ الحسابات) والتخزين (قراءة/كتابة الذاكرة).' },
      },
      {
        id: 'coala-architecture-q3',
        question: { en: 'Which agent system does CoALA identify as adding procedural memory through a skill library that grows over time?', ar: 'أي نظام وكيل يُحدِّده CoALA باعتباره يُضيف الذاكرة الإجرائية من خلال مكتبة مهارات تنمو بمرور الوقت؟' },
        options: {
          en: ['ReAct', 'Reflexion', 'Voyager', 'AutoGPT'],
          ar: ['ReAct', 'Reflexion', 'Voyager', 'AutoGPT'],
        },
        correctAnswer: 2,
        explanation: { en: 'Voyager, the Minecraft-playing agent, is identified by CoALA as implementing procedural memory through a growing skill library. Each new skill (code function) the agent learns is stored and can be reused in future tasks.', ar: 'يُحدِّد CoALA Voyager، وكيل لعب Minecraft، على أنه يُنفِّذ الذاكرة الإجرائية من خلال مكتبة مهارات متنامية. كل مهارة جديدة (دالة كود) يتعلمها الوكيل تُخزَّن ويمكن إعادة استخدامها في المهام المستقبلية.' },
      },
    ],
  },
};
