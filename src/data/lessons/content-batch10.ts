import type { LessonContentData } from './content';

export const batch10Contents: Record<string, LessonContentData> = {
  // ─────────────────────────────────────────────
  // 1. Vision-Language Models
  // ─────────────────────────────────────────────
  'vision-language-models': {
    beginnerDefinition: {
      en: 'Vision-Language Models (VLMs) are AI systems that can understand both images and text at the same time. Models like GPT-4V and LLaVA can look at a photo and answer questions about it, describe what they see, or follow instructions that involve visual information — combining the power of computer vision with natural language understanding.',
      ar: 'نماذج الرؤية واللغة (VLMs) هي أنظمة ذكاء اصطناعي يمكنها فهم الصور والنصوص في نفس الوقت. نماذج مثل GPT-4V وLLaVA يمكنها النظر إلى صورة والإجابة عن أسئلة حولها، أو وصف ما تراه، أو اتباع تعليمات تتضمن معلومات بصرية — مما يجمع بين قوة الرؤية الحاسوبية وفهم اللغة الطبيعية.',
    },
    technicalDefinition: {
      en: 'Vision-Language Models are multimodal architectures that jointly process visual and textual inputs through shared or aligned representation spaces. They typically consist of a vision encoder (e.g., ViT), a language model backbone (e.g., a transformer-based LLM), and a projection or bridging module that maps visual features into the language model\'s embedding space. Training involves large-scale image-text pair datasets with objectives such as contrastive learning, image-conditioned text generation, and visual instruction tuning. Prominent examples include GPT-4V (proprietary, OpenAI), LLaVA (open-source, visual instruction tuning on LLaMA), and Gemini (Google DeepMind).',
      ar: 'نماذج الرؤية واللغة هي بنيات متعددة الوسائط تعالج المدخلات البصرية والنصية بشكل مشترك عبر فضاءات تمثيل مشتركة أو متوائمة. تتكون عادةً من مُشفِّر رؤية (مثل ViT)، ونموذج لغة أساسي (مثل محوّل LLM)، ووحدة إسقاط أو جسر تربط الميزات البصرية بفضاء التضمين لنموذج اللغة. يتضمن التدريب مجموعات بيانات واسعة النطاق من أزواج الصور والنصوص بأهداف مثل التعلم التباينيّ، وتوليد النص المشروط بالصورة، والضبط بالتعليمات البصرية. تشمل الأمثلة البارزة GPT-4V (مملوك، OpenAI)، وLLaVA (مفتوح المصدر، ضبط التعليمات البصرية على LLaMA)، وGemini (Google DeepMind).',
    },
    analogy: {
      en: 'Think of a Vision-Language Model like a museum tour guide who can both see the paintings and talk about them fluently. A regular text AI is like a guide who only reads the painting descriptions from a book without ever looking at the artwork. A regular image classifier is like someone who can recognize the painting but cannot explain it. A VLM combines both abilities — it looks at the painting, understands what it shows, and can discuss it in rich detail, answer questions, or compare it with other works.',
      ar: 'فكر في نموذج الرؤية واللغة مثل مرشد سياحي في متحف يمكنه رؤية اللوحات والتحدث عنها بطلاقة. الذكاء الاصطناعي النصي العادي مثل مرشد يقرأ فقط أوصاف اللوحات من كتاب دون النظر إلى العمل الفني. ومصنّف الصور العادي مثل شخص يمكنه التعرف على اللوحة لكنه لا يستطيع شرحها. نموذج VLM يجمع كلتا القدرتين — ينظر إلى اللوحة، ويفهم ما تُظهره، ويمكنه مناقشتها بتفصيل غني، أو الإجابة عن الأسئلة، أو مقارنتها بأعمال أخرى.',
    },
    explanation: {
      en: [
        'Vision-Language Models represent a breakthrough in AI by bridging two fundamental modalities: sight and language. Before VLMs, computer vision and natural language processing were largely separate fields. Image classifiers could label a photo as "dog" or "car" but could not hold a conversation about it. Language models could write eloquently but had no ability to see. VLMs unify these capabilities into a single system.',
        'The architecture of a VLM typically has three parts. First, a vision encoder — often a Vision Transformer (ViT) — processes the image into a sequence of visual tokens or feature vectors. Second, a projection module translates these visual features into a format compatible with the language model\'s embedding space. Third, the language model backbone processes the combined visual and textual tokens to generate outputs. This design allows the model to reason about images as naturally as it reasons about text.',
        'GPT-4V (GPT-4 with Vision) by OpenAI is one of the most capable commercial VLMs. It can describe images, read text within images (OCR), interpret charts and diagrams, solve visual math problems, and even understand memes and humor. Its capabilities extend to multi-image reasoning and complex spatial understanding, making it a powerful foundation for AI agents that need to interact with visual information.',
        'LLaVA (Large Language and Vision Assistant) is a prominent open-source VLM. It was created by fine-tuning a LLaMA language model with a CLIP vision encoder using visual instruction-tuning data. LLaVA demonstrates that high-quality visual understanding can be achieved with relatively modest compute by leveraging pre-trained components and carefully curated instruction data. Its open nature has made it a popular choice for research and customization.',
        'For AI agents, VLMs are transformative. An agent equipped with a VLM can browse the web and understand screenshots, inspect product images for quality control, read documents and receipts, navigate user interfaces, and interpret real-world scenes from camera feeds. This visual grounding enables entirely new categories of autonomous agent behaviors that were previously impossible with text-only models.',
      ],
      ar: [
        'تمثل نماذج الرؤية واللغة اختراقاً في الذكاء الاصطناعي من خلال ربط وسيلتين أساسيتين: البصر واللغة. قبل VLMs، كانت الرؤية الحاسوبية ومعالجة اللغة الطبيعية مجالين منفصلين إلى حد كبير. مصنفات الصور كانت تستطيع تسمية صورة بـ "كلب" أو "سيارة" لكنها لم تستطع إجراء محادثة حولها. نماذج اللغة كانت تستطيع الكتابة ببلاغة لكنها لم تملك القدرة على الرؤية. نماذج VLMs توحد هذه القدرات في نظام واحد.',
        'تتكون بنية VLM عادةً من ثلاثة أجزاء. أولاً، مُشفِّر رؤية — غالباً محوّل الرؤية (ViT) — يعالج الصورة إلى سلسلة من الرموز البصرية أو متجهات الميزات. ثانياً، وحدة إسقاط تترجم هذه الميزات البصرية إلى تنسيق متوافق مع فضاء التضمين لنموذج اللغة. ثالثاً، نموذج اللغة الأساسي يعالج الرموز البصرية والنصية المدمجة لتوليد المخرجات. يسمح هذا التصميم للنموذج بالاستدلال حول الصور بشكل طبيعي كما يستدل حول النص.',
        'GPT-4V (GPT-4 مع الرؤية) من OpenAI هو أحد أكثر نماذج VLM التجارية قدرة. يمكنه وصف الصور، وقراءة النصوص داخل الصور (OCR)، وتفسير الرسوم البيانية والمخططات، وحل مسائل الرياضيات البصرية، وحتى فهم الميمات والفكاهة. تمتد قدراته إلى الاستدلال متعدد الصور والفهم المكاني المعقد، مما يجعله أساساً قوياً لوكلاء الذكاء الاصطناعي التي تحتاج للتفاعل مع المعلومات البصرية.',
        'LLaVA (مساعد اللغة والرؤية الكبير) هو نموذج VLM مفتوح المصدر بارز. تم إنشاؤه عن طريق الضبط الدقيق لنموذج لغة LLaMA مع مُشفِّر رؤية CLIP باستخدام بيانات ضبط التعليمات البصرية. يُثبت LLaVA أن الفهم البصري عالي الجودة يمكن تحقيقه بموارد حوسبة متواضعة نسبياً من خلال الاستفادة من المكونات المدربة مسبقاً وبيانات التعليمات المنسقة بعناية. طبيعته المفتوحة جعلته خياراً شائعاً للبحث والتخصيص.',
        'بالنسبة لوكلاء الذكاء الاصطناعي، نماذج VLMs تحويلية. الوكيل المجهز بنموذج VLM يمكنه تصفح الويب وفهم لقطات الشاشة، وفحص صور المنتجات لمراقبة الجودة، وقراءة المستندات والإيصالات، والتنقل في واجهات المستخدم، وتفسير مشاهد العالم الحقيقي من كاميرات المراقبة. هذا التأسيس البصري يُمكّن فئات جديدة تماماً من سلوكيات الوكلاء المستقلة التي كانت مستحيلة سابقاً مع النماذج النصية فقط.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import base64

client = OpenAI()

# Encode a local image to base64
def encode_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

image_b64 = encode_image("screenshot.png")

# Send image + text prompt to GPT-4V
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Describe what you see in this image. "
                            "List all UI elements and their positions.",
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/png;base64,{image_b64}",
                        "detail": "high",
                    },
                },
            ],
        }
    ],
    max_tokens=1024,
)

print(response.choices[0].message.content)`,
      description: {
        en: 'Sending a local image to GPT-4o (GPT-4 with Vision) using the OpenAI API. The image is base64-encoded and sent alongside a text prompt that asks the model to describe UI elements.',
        ar: 'إرسال صورة محلية إلى GPT-4o (GPT-4 مع الرؤية) باستخدام واجهة OpenAI. يتم ترميز الصورة بـ base64 وإرسالها مع موجه نصي يطلب من النموذج وصف عناصر واجهة المستخدم.',
      },
    },
    commonMistakes: {
      en: [
        'Sending very high-resolution images without resizing, leading to excessive token usage and slow responses. Most VLMs work well with images resized to 1024px or less on the longest side.',
        'Assuming VLMs can perfectly read small or stylized text in images. OCR accuracy varies and critical text should be verified or extracted with dedicated OCR tools.',
        'Ignoring the detail parameter in the OpenAI API. Using "high" detail for every image wastes tokens; use "low" for simple images and "high" only when fine detail matters.',
        'Treating VLM outputs as ground truth for safety-critical applications like medical imaging without human verification and proper validation pipelines.',
      ],
      ar: [
        'إرسال صور عالية الدقة جداً بدون تغيير حجمها، مما يؤدي إلى استهلاك مفرط للرموز واستجابات بطيئة. معظم نماذج VLM تعمل جيداً مع صور مُعاد تحجيمها إلى 1024 بكسل أو أقل على الجانب الأطول.',
        'افتراض أن نماذج VLM يمكنها قراءة النصوص الصغيرة أو المُنمّقة في الصور بشكل مثالي. دقة التعرف على النص تتفاوت ويجب التحقق من النصوص الحرجة أو استخراجها بأدوات OCR متخصصة.',
        'تجاهل معامل detail في واجهة OpenAI. استخدام "high" لكل صورة يهدر الرموز؛ استخدم "low" للصور البسيطة و"high" فقط عندما تكون التفاصيل الدقيقة مهمة.',
        'التعامل مع مخرجات VLM كحقيقة مطلقة للتطبيقات الحرجة مثل التصوير الطبي دون تحقق بشري وخطوط تحقق مناسبة.',
      ],
    },
    bestPractices: {
      en: [
        'Provide clear, specific text prompts alongside images to guide the model\'s attention. Instead of "What is this?" ask "Identify the brand name and expiration date on this product label."',
        'Use the appropriate detail level and image resolution for your task to balance cost, latency, and accuracy.',
        'Combine VLMs with specialized tools: use a VLM for general understanding and dedicated OCR, object detection, or segmentation models for precision tasks.',
        'Implement structured output parsing (e.g., JSON mode) when the VLM output needs to be consumed by downstream agent steps, ensuring reliable data flow in agentic pipelines.',
      ],
      ar: [
        'قدم موجهات نصية واضحة ومحددة مع الصور لتوجيه انتباه النموذج. بدلاً من "ما هذا؟" اسأل "حدد اسم العلامة التجارية وتاريخ انتهاء الصلاحية على ملصق هذا المنتج."',
        'استخدم مستوى التفاصيل ودقة الصورة المناسبين لمهمتك لتحقيق التوازن بين التكلفة والسرعة والدقة.',
        'ادمج نماذج VLM مع أدوات متخصصة: استخدم VLM للفهم العام ونماذج OCR أو كشف الأجسام أو التجزئة المتخصصة لمهام الدقة.',
        'نفّذ تحليل المخرجات المنظم (مثل وضع JSON) عندما يحتاج ناتج VLM إلى استهلاكه بواسطة خطوات الوكيل اللاحقة، لضمان تدفق بيانات موثوق في خطوط الوكلاء.',
      ],
    },
    references: [
      { title: 'GPT-4V System Card - OpenAI', url: 'https://openai.com/index/gpt-4v-system-card/' },
      { title: 'LLaVA: Visual Instruction Tuning - Paper', url: 'https://arxiv.org/abs/2304.08485' },
      { title: 'OpenAI Vision Guide', url: 'https://platform.openai.com/docs/guides/vision' },
    ],
    quiz: [
      {
        id: 'batch10-q1',
        question: {
          en: 'What is the primary role of the projection module in a Vision-Language Model architecture?',
          ar: 'ما هو الدور الأساسي لوحدة الإسقاط في بنية نموذج الرؤية واللغة؟',
        },
        options: {
          en: [
            'To compress the image to a smaller file size',
            'To map visual features into the language model\'s embedding space',
            'To convert text into image pixels',
            'To train the vision encoder from scratch',
          ],
          ar: [
            'لضغط الصورة إلى حجم ملف أصغر',
            'لربط الميزات البصرية بفضاء التضمين لنموذج اللغة',
            'لتحويل النص إلى بكسلات صورة',
            'لتدريب مُشفِّر الرؤية من الصفر',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The projection module bridges the vision encoder and the language model by translating visual feature vectors into a format compatible with the language model\'s embedding space, enabling unified multimodal reasoning.',
          ar: 'وحدة الإسقاط تربط مُشفِّر الرؤية ونموذج اللغة عن طريق ترجمة متجهات الميزات البصرية إلى تنسيق متوافق مع فضاء التضمين لنموذج اللغة، مما يتيح الاستدلال الموحد متعدد الوسائط.',
        },
      },
      {
        id: 'batch10-q2',
        question: {
          en: 'Which of the following is an open-source Vision-Language Model?',
          ar: 'أي مما يلي هو نموذج رؤية ولغة مفتوح المصدر؟',
        },
        options: {
          en: [
            'GPT-4V',
            'LLaVA',
            'Gemini Ultra',
            'Claude 3 Opus',
          ],
          ar: [
            'GPT-4V',
            'LLaVA',
            'Gemini Ultra',
            'Claude 3 Opus',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'LLaVA (Large Language and Vision Assistant) is an open-source VLM built by fine-tuning LLaMA with a CLIP vision encoder using visual instruction tuning data, making it freely available for research and customization.',
          ar: 'LLaVA (مساعد اللغة والرؤية الكبير) هو نموذج VLM مفتوح المصدر مبني عن طريق الضبط الدقيق لـ LLaMA مع مُشفِّر رؤية CLIP باستخدام بيانات ضبط التعليمات البصرية، مما يجعله متاحاً مجاناً للبحث والتخصيص.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Multimodal Agents
  // ─────────────────────────────────────────────
  'multimodal-agents': {
    beginnerDefinition: {
      en: 'Multimodal agents are AI systems that can process and respond to multiple types of input — text, images, audio, and video — within a single unified pipeline. Unlike traditional agents that only handle text, multimodal agents can listen to a voice command, look at an image, read a document, and combine all of that information to take intelligent action.',
      ar: 'الوكلاء متعددو الوسائط هي أنظمة ذكاء اصطناعي يمكنها معالجة أنواع متعددة من المدخلات والاستجابة لها — نص وصور وصوت وفيديو — ضمن خط أنابيب موحد واحد. على عكس الوكلاء التقليديين الذين يتعاملون مع النص فقط، يمكن للوكلاء متعددي الوسائط الاستماع إلى أمر صوتي، والنظر إلى صورة، وقراءة مستند، والجمع بين كل تلك المعلومات لاتخاذ إجراء ذكي.',
    },
    technicalDefinition: {
      en: 'Multimodal agents are autonomous AI systems that integrate multiple perception modalities (text, vision, audio, video) through modality-specific encoders feeding into a shared reasoning backbone, typically a large multimodal model (LMM). The agent architecture includes modality routers that detect input types and dispatch them to appropriate encoders, a fusion layer that aligns cross-modal representations, and an action module that executes tool calls or generates multimodal outputs. Key challenges include cross-modal grounding (linking references across modalities), temporal alignment (synchronizing audio/video streams), and efficient context management when dealing with high-dimensional inputs like video frames.',
      ar: 'الوكلاء متعددو الوسائط هي أنظمة ذكاء اصطناعي مستقلة تدمج وسائط إدراك متعددة (نص، رؤية، صوت، فيديو) عبر مُشفِّرات خاصة بكل وسيط تغذي عموداً فقرياً مشتركاً للاستدلال، عادةً نموذج متعدد الوسائط كبير (LMM). تتضمن بنية الوكيل موجّهات وسائط تكتشف أنواع المدخلات وترسلها إلى المُشفِّرات المناسبة، وطبقة دمج توائم التمثيلات عبر الوسائط، ووحدة إجراء تنفذ استدعاءات الأدوات أو تولد مخرجات متعددة الوسائط. تشمل التحديات الرئيسية التأسيس عبر الوسائط (ربط المراجع عبر الوسائط)، والمحاذاة الزمنية (مزامنة تدفقات الصوت/الفيديو)، وإدارة السياق الفعالة عند التعامل مع مدخلات عالية الأبعاد مثل إطارات الفيديو.',
    },
    analogy: {
      en: 'A multimodal agent is like a skilled detective who gathers clues from every sense. They listen to witness testimony (audio), examine photos from the scene (vision), read forensic reports (text), and watch security camera footage (video). By combining all these sources, they build a comprehensive picture and decide the next steps. A text-only agent is like a detective who can only read written reports and never visits the crime scene — they miss crucial visual and audio evidence that could change the entire investigation.',
      ar: 'الوكيل متعدد الوسائط مثل محقق ماهر يجمع الأدلة من كل الحواس. يستمع إلى شهادات الشهود (الصوت)، ويفحص صور المشهد (الرؤية)، ويقرأ تقارير الطب الشرعي (النص)، ويشاهد لقطات كاميرات المراقبة (الفيديو). من خلال الجمع بين كل هذه المصادر، يبني صورة شاملة ويقرر الخطوات التالية. الوكيل النصي فقط مثل محقق يمكنه فقط قراءة التقارير المكتوبة ولا يزور مسرح الجريمة أبداً — يفوته أدلة بصرية وصوتية حاسمة قد تغير التحقيق بالكامل.',
    },
    explanation: {
      en: [
        'Multimodal agents represent the next evolution of AI agents. While text-based agents like ReAct or tool-using chatbots have proven powerful, the real world is inherently multimodal — we see images, hear sounds, read text, and watch videos simultaneously. Agents that can process all these modalities are fundamentally more capable of operating in real-world environments.',
        'The architecture of a multimodal agent typically includes a modality router at the input stage. When the agent receives input, the router determines whether it is text, an image, audio, or video, and sends it to the appropriate encoder. Text goes to a tokenizer, images to a vision encoder like CLIP or ViT, audio to a speech encoder like Whisper, and video frames are sampled and processed by the vision encoder. The encoded representations are then aligned and fused before being fed to the central reasoning model.',
        'Cross-modal reasoning is the key capability that distinguishes multimodal agents. For example, a user might send a photo of a restaurant menu and ask "What vegetarian options cost under $15?" The agent must simultaneously process the image (OCR the menu), understand the text (parse prices and dish descriptions), apply reasoning (filter by vegetarian items and price), and generate a text response. This requires seamless integration of visual and textual understanding.',
        'Building multimodal pipelines requires careful handling of different data formats, latencies, and context windows. Audio and video are streaming modalities that produce data continuously, while text and images are typically discrete inputs. Agents must buffer, sample, and chunk streaming data appropriately. Video, in particular, is challenging because processing every frame is expensive — agents typically sample key frames or use temporal pooling to reduce computational costs.',
        'Practical multimodal agents are emerging across industries. Customer service agents that can look at a photo of a defective product while hearing the customer describe the issue. Medical assistants that analyze X-ray images alongside patient history notes. Accessibility tools that describe visual scenes in audio for visually impaired users. The combination of modalities enables richer, more natural interactions between humans and AI systems.',
      ],
      ar: [
        'الوكلاء متعددو الوسائط يمثلون التطور التالي لوكلاء الذكاء الاصطناعي. بينما أثبت الوكلاء النصيون مثل ReAct أو روبوتات المحادثة المستخدمة للأدوات قوتهم، فإن العالم الحقيقي متعدد الوسائط بطبيعته — نرى الصور، ونسمع الأصوات، ونقرأ النصوص، ونشاهد الفيديوهات في وقت واحد. الوكلاء الذين يمكنهم معالجة كل هذه الوسائط هم أكثر قدرة بشكل جوهري على العمل في بيئات العالم الحقيقي.',
        'تتضمن بنية الوكيل متعدد الوسائط عادةً موجّه وسائط في مرحلة الإدخال. عندما يستقبل الوكيل مدخلات، يحدد الموجّه ما إذا كانت نصاً أو صورة أو صوتاً أو فيديو، ويرسلها إلى المُشفِّر المناسب. النص يذهب إلى مُرمِّز، والصور إلى مُشفِّر رؤية مثل CLIP أو ViT، والصوت إلى مُشفِّر كلام مثل Whisper، وإطارات الفيديو يتم أخذ عينات منها ومعالجتها بواسطة مُشفِّر الرؤية. ثم يتم محاذاة التمثيلات المُشفَّرة ودمجها قبل تغذيتها لنموذج الاستدلال المركزي.',
        'الاستدلال عبر الوسائط هو القدرة الرئيسية التي تميز الوكلاء متعددي الوسائط. على سبيل المثال، قد يرسل المستخدم صورة لقائمة طعام مطعم ويسأل "ما الخيارات النباتية التي تكلف أقل من 15 دولاراً؟" يجب على الوكيل معالجة الصورة (التعرف على نص القائمة)، وفهم النص (تحليل الأسعار وأوصاف الأطباق)، وتطبيق الاستدلال (تصفية حسب العناصر النباتية والسعر)، وتوليد رد نصي. يتطلب هذا تكاملاً سلساً بين الفهم البصري والنصي.',
        'بناء خطوط أنابيب متعددة الوسائط يتطلب معالجة دقيقة لتنسيقات البيانات المختلفة، وأوقات الاستجابة، ونوافذ السياق. الصوت والفيديو وسائط متدفقة تنتج بيانات بشكل مستمر، بينما النص والصور عادةً مدخلات منفصلة. يجب على الوكلاء تخزين البيانات المتدفقة وأخذ عينات منها وتقسيمها بشكل مناسب. الفيديو بشكل خاص يمثل تحدياً لأن معالجة كل إطار مكلفة — الوكلاء عادةً يأخذون عينات من الإطارات الرئيسية أو يستخدمون التجميع الزمني لتقليل التكاليف الحسابية.',
        'الوكلاء متعددو الوسائط العمليون يظهرون عبر الصناعات. وكلاء خدمة عملاء يمكنهم النظر إلى صورة منتج معيب أثناء سماع العميل يصف المشكلة. مساعدون طبيون يحللون صور الأشعة السينية إلى جانب ملاحظات تاريخ المريض. أدوات إمكانية الوصول التي تصف المشاهد البصرية بالصوت للمستخدمين ذوي الإعاقة البصرية. الجمع بين الوسائط يُمكّن تفاعلات أغنى وأكثر طبيعية بين البشر وأنظمة الذكاء الاصطناعي.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import base64
from openai import OpenAI

client = OpenAI()

def multimodal_agent(text_input: str, image_path: str = None,
                     audio_path: str = None) -> str:
    """A simple multimodal agent that handles text, images, and audio."""

    messages = [
        {"role": "system", "content": (
            "You are a multimodal assistant. Analyze all provided inputs "
            "(text, images, audio transcriptions) and give a unified response."
        )}
    ]

    content_parts = []

    # Always include text
    content_parts.append({"type": "text", "text": text_input})

    # Add image if provided
    if image_path:
        with open(image_path, "rb") as f:
            img_b64 = base64.b64encode(f.read()).decode()
        content_parts.append({
            "type": "image_url",
            "image_url": {"url": f"data:image/png;base64,{img_b64}"}
        })

    # Transcribe audio if provided (using Whisper)
    if audio_path:
        with open(audio_path, "rb") as f:
            transcript = client.audio.transcriptions.create(
                model="whisper-1", file=f
            )
        content_parts.append({
            "type": "text",
            "text": f"[Audio transcript]: {transcript.text}"
        })

    messages.append({"role": "user", "content": content_parts})

    response = client.chat.completions.create(
        model="gpt-4o", messages=messages, max_tokens=1024
    )
    return response.choices[0].message.content

# Example: analyze a product issue with photo and voice note
result = multimodal_agent(
    text_input="Customer complaint about this product",
    image_path="defective_item.jpg",
    audio_path="customer_voice_note.mp3",
)
print(result)`,
      description: {
        en: 'A multimodal agent function that accepts text, image, and audio inputs. Images are base64-encoded for the vision model, and audio is transcribed via Whisper before being combined into a unified prompt sent to GPT-4o.',
        ar: 'دالة وكيل متعدد الوسائط تقبل مدخلات نصية وصور وصوت. يتم ترميز الصور بـ base64 لنموذج الرؤية، ويتم نسخ الصوت عبر Whisper قبل دمجه في موجه موحد يُرسل إلى GPT-4o.',
      },
    },
    commonMistakes: {
      en: [
        'Processing all modalities through a single encoder instead of using specialized encoders for each modality, leading to poor representation quality.',
        'Not handling missing modalities gracefully — the agent should work with whatever inputs are available rather than failing if one modality is absent.',
        'Ignoring latency differences between modalities. Audio transcription and image encoding take different amounts of time and should be parallelized where possible.',
        'Overloading the context window by sending raw video frames or full audio transcripts without summarization or sampling.',
      ],
      ar: [
        'معالجة جميع الوسائط عبر مُشفِّر واحد بدلاً من استخدام مُشفِّرات متخصصة لكل وسيط، مما يؤدي إلى جودة تمثيل ضعيفة.',
        'عدم التعامل مع الوسائط المفقودة بسلاسة — يجب أن يعمل الوكيل مع أي مدخلات متاحة بدلاً من الفشل إذا غاب أحد الوسائط.',
        'تجاهل اختلافات وقت الاستجابة بين الوسائط. نسخ الصوت وترميز الصور يستغرقان أوقاتاً مختلفة ويجب معالجتها بالتوازي حيثما أمكن.',
        'إثقال نافذة السياق بإرسال إطارات فيديو خام أو نسخ صوتية كاملة دون تلخيص أو أخذ عينات.',
      ],
    },
    bestPractices: {
      en: [
        'Use modality-specific preprocessing: resize images, chunk audio into segments, and sample video frames at appropriate intervals before feeding to the model.',
        'Design fallback paths for each modality so the agent degrades gracefully when a modality is unavailable or fails to process.',
        'Parallelize modality encoding to minimize total latency — encode images and transcribe audio concurrently rather than sequentially.',
        'Implement a unified context format that clearly labels each modality\'s contribution (e.g., "[Image Analysis]: ...", "[Audio Transcript]: ...") so the reasoning model can distinguish between sources.',
      ],
      ar: [
        'استخدم معالجة مسبقة خاصة بكل وسيط: غيّر حجم الصور، وقسّم الصوت إلى مقاطع، وخذ عينات من إطارات الفيديو بفترات مناسبة قبل تغذيتها للنموذج.',
        'صمم مسارات بديلة لكل وسيط بحيث يتراجع الوكيل بسلاسة عندما يكون أحد الوسائط غير متاح أو يفشل في المعالجة.',
        'وازِ ترميز الوسائط لتقليل وقت الاستجابة الإجمالي — شفّر الصور وانسخ الصوت بشكل متزامن بدلاً من التسلسل.',
        'نفّذ تنسيق سياق موحد يُسمّي بوضوح مساهمة كل وسيط (مثل "[تحليل الصورة]: ..."، "[نسخ الصوت]: ...") حتى يتمكن نموذج الاستدلال من التمييز بين المصادر.',
      ],
    },
    references: [
      { title: 'GPT-4o Multimodal Capabilities - OpenAI', url: 'https://openai.com/index/hello-gpt-4o/' },
      { title: 'Multimodal Agents Survey - arXiv', url: 'https://arxiv.org/abs/2402.05120' },
      { title: 'Google Gemini Multimodal', url: 'https://deepmind.google/technologies/gemini/' },
    ],
    quiz: [
      {
        id: 'batch10-q3',
        question: {
          en: 'What is the primary purpose of a modality router in a multimodal agent?',
          ar: 'ما هو الغرض الأساسي لموجّه الوسائط في وكيل متعدد الوسائط؟',
        },
        options: {
          en: [
            'To compress all inputs into a single text format',
            'To detect input types and dispatch them to appropriate encoders',
            'To generate outputs in multiple modalities simultaneously',
            'To store multimodal data in a database',
          ],
          ar: [
            'لضغط جميع المدخلات في تنسيق نصي واحد',
            'لكشف أنواع المدخلات وإرسالها إلى المُشفِّرات المناسبة',
            'لتوليد مخرجات بوسائط متعددة في وقت واحد',
            'لتخزين البيانات متعددة الوسائط في قاعدة بيانات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The modality router is responsible for identifying the type of each input (text, image, audio, video) and dispatching it to the correct specialized encoder for processing before fusion and reasoning.',
          ar: 'موجّه الوسائط مسؤول عن تحديد نوع كل مدخل (نص، صورة، صوت، فيديو) وإرساله إلى المُشفِّر المتخصص الصحيح للمعالجة قبل الدمج والاستدلال.',
        },
      },
      {
        id: 'batch10-q4',
        question: {
          en: 'Why is video considered the most challenging modality for multimodal agents?',
          ar: 'لماذا يُعتبر الفيديو الوسيط الأكثر تحدياً للوكلاء متعددي الوسائط؟',
        },
        options: {
          en: [
            'Because video files are always corrupted',
            'Because video has no useful information for AI',
            'Because processing every frame is computationally expensive and fills context windows quickly',
            'Because there are no video encoders available',
          ],
          ar: [
            'لأن ملفات الفيديو تكون دائماً تالفة',
            'لأن الفيديو لا يحتوي على معلومات مفيدة للذكاء الاصطناعي',
            'لأن معالجة كل إطار مكلفة حسابياً وتملأ نوافذ السياق بسرعة',
            'لأنه لا توجد مُشفِّرات فيديو متاحة',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Video produces a massive number of frames, each requiring visual encoding. Processing every frame would be prohibitively expensive and exceed context window limits, so agents must use frame sampling or temporal pooling strategies.',
          ar: 'الفيديو ينتج عدداً هائلاً من الإطارات، كل منها يتطلب ترميزاً بصرياً. معالجة كل إطار ستكون مكلفة بشكل باهظ وستتجاوز حدود نافذة السياق، لذا يجب على الوكلاء استخدام استراتيجيات أخذ عينات الإطارات أو التجميع الزمني.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. CLIP and GPT-4V Integration
  // ─────────────────────────────────────────────
  'clip-gpt4v-integration': {
    beginnerDefinition: {
      en: 'CLIP (Contrastive Language-Image Pre-training) and GPT-4V can be combined to give AI agents powerful image understanding abilities. CLIP acts as a fast image search and matching engine that connects images to text descriptions, while GPT-4V provides deep visual reasoning and conversation. Together, they enable agents to find relevant images, understand their content, and reason about them in sophisticated ways.',
      ar: 'CLIP (التدريب المسبق التباينيّ للغة والصورة) وGPT-4V يمكن دمجهما لمنح وكلاء الذكاء الاصطناعي قدرات فهم صور قوية. CLIP يعمل كمحرك بحث ومطابقة صور سريع يربط الصور بأوصاف نصية، بينما GPT-4V يوفر استدلالاً بصرياً عميقاً ومحادثة. معاً، يُمكّنان الوكلاء من العثور على الصور ذات الصلة، وفهم محتواها، والاستدلال حولها بطرق متطورة.',
    },
    technicalDefinition: {
      en: 'CLIP is a dual-encoder model trained by OpenAI on 400 million image-text pairs using contrastive learning, producing aligned embeddings for both images and text in a shared vector space. GPT-4V is a large multimodal model capable of visual question answering, image description, and complex visual reasoning. In integrated architectures, CLIP serves as a retrieval and pre-filtering layer — its embeddings enable fast similarity search, zero-shot classification, and image ranking — while GPT-4V handles detailed analysis, contextual reasoning, and natural language generation about visual content. This two-stage approach (CLIP for retrieval, GPT-4V for reasoning) is cost-effective and scalable compared to sending every image to GPT-4V directly.',
      ar: 'CLIP هو نموذج ثنائي المُشفِّر دربته OpenAI على 400 مليون زوج من الصور والنصوص باستخدام التعلم التباينيّ، مُنتِجاً تضمينات متوائمة لكل من الصور والنصوص في فضاء متجهات مشترك. GPT-4V هو نموذج متعدد الوسائط كبير قادر على الإجابة البصرية عن الأسئلة ووصف الصور والاستدلال البصري المعقد. في البنيات المتكاملة، يعمل CLIP كطبقة استرجاع وتصفية مسبقة — تضميناته تُمكّن البحث السريع بالتشابه والتصنيف بدون أمثلة وترتيب الصور — بينما يتولى GPT-4V التحليل المفصل والاستدلال السياقي وتوليد اللغة الطبيعية حول المحتوى البصري. هذا النهج ذو المرحلتين (CLIP للاسترجاع، GPT-4V للاستدلال) فعال من حيث التكلفة وقابل للتوسع مقارنة بإرسال كل صورة إلى GPT-4V مباشرة.',
    },
    analogy: {
      en: 'Think of CLIP and GPT-4V as two colleagues in a photo research agency. CLIP is the fast librarian who can instantly search through millions of photos and find the ones matching a description ("sunset over mountains" or "damaged car bumper"). GPT-4V is the expert analyst who sits down with the selected photos and provides detailed analysis — describing damage severity, estimating repair costs, or writing detailed captions. You would not ask the analyst to sort through millions of photos (too slow and expensive), and you would not ask the librarian for deep analysis (not their strength). Together, they form a powerful image understanding pipeline.',
      ar: 'فكر في CLIP وGPT-4V كزميلين في وكالة أبحاث صور. CLIP هو أمين المكتبة السريع الذي يمكنه البحث فوراً عبر ملايين الصور والعثور على تلك التي تطابق وصفاً ("غروب شمس فوق الجبال" أو "مصد سيارة متضرر"). GPT-4V هو المحلل الخبير الذي يجلس مع الصور المختارة ويقدم تحليلاً مفصلاً — يصف شدة الضرر، أو يقدر تكاليف الإصلاح، أو يكتب تعليقات مفصلة. لن تطلب من المحلل فرز ملايين الصور (بطيء ومكلف جداً)، ولن تطلب من أمين المكتبة تحليلاً عميقاً (ليس نقطة قوته). معاً، يشكلان خط أنابيب قوي لفهم الصور.',
    },
    explanation: {
      en: [
        'CLIP and GPT-4V serve complementary roles in image understanding systems. CLIP excels at fast, scalable operations over large image collections: searching, filtering, classifying, and ranking images based on text descriptions. GPT-4V excels at deep, nuanced understanding of individual images: describing scenes, answering complex questions, interpreting charts, and reasoning about spatial relationships. Combining them creates a two-stage pipeline that is both efficient and powerful.',
        'CLIP works by encoding images and text into the same vector space. An image of a cat and the text "a photo of a cat" would have similar embedding vectors. This enables zero-shot classification (matching images to label descriptions without training), image search (finding images most similar to a text query), and image clustering (grouping visually similar images). CLIP embeddings are fast to compute and can be pre-computed and indexed for near-instant retrieval over millions of images.',
        'In a typical integrated pipeline, CLIP first retrieves or filters the relevant images from a large corpus. For example, an e-commerce agent might use CLIP to find all product images matching "red running shoes with white sole" from a catalog of millions. Then, only the top-ranked images are sent to GPT-4V for detailed analysis — checking if the shoes have specific features, comparing them to the customer\'s requirements, or generating detailed product descriptions.',
        'This two-stage approach is critical for cost and performance reasons. GPT-4V API calls are significantly more expensive and slower than CLIP embedding computations. By using CLIP as a pre-filter, you reduce the number of GPT-4V calls from potentially thousands to just a handful, while maintaining high accuracy because CLIP efficiently narrows the candidate set.',
        'For AI agents, this integration pattern enables powerful workflows: visual search agents that find and analyze images from databases, quality inspection agents that scan production line photos and flag defects for detailed analysis, content moderation agents that quickly screen millions of images and deeply analyze flagged content, and research agents that search scientific figures and charts across paper repositories.',
      ],
      ar: [
        'CLIP وGPT-4V يؤديان أدواراً متكاملة في أنظمة فهم الصور. CLIP يتفوق في العمليات السريعة والقابلة للتوسع على مجموعات صور كبيرة: البحث والتصفية والتصنيف وترتيب الصور بناءً على أوصاف نصية. GPT-4V يتفوق في الفهم العميق والدقيق للصور الفردية: وصف المشاهد والإجابة عن أسئلة معقدة وتفسير الرسوم البيانية والاستدلال حول العلاقات المكانية. دمجهما يُنشئ خط أنابيب ذا مرحلتين فعال وقوي في آن واحد.',
        'يعمل CLIP عن طريق ترميز الصور والنصوص في نفس فضاء المتجهات. صورة قطة والنص "صورة لقطة" سيكون لهما متجهات تضمين متشابهة. هذا يُمكّن التصنيف بدون أمثلة (مطابقة الصور مع أوصاف التسميات بدون تدريب)، والبحث عن الصور (العثور على الصور الأكثر تشابهاً مع استعلام نصي)، وتجميع الصور (تجميع الصور المتشابهة بصرياً). تضمينات CLIP سريعة الحساب ويمكن حسابها مسبقاً وفهرستها للاسترجاع شبه الفوري عبر ملايين الصور.',
        'في خط أنابيب متكامل نموذجي، يسترجع CLIP أولاً الصور ذات الصلة أو يصفيها من مجموعة كبيرة. مثلاً، وكيل تجارة إلكترونية قد يستخدم CLIP للعثور على جميع صور المنتجات المطابقة لـ "أحذية جري حمراء بنعل أبيض" من كتالوج يضم ملايين الصور. ثم، فقط الصور ذات الترتيب الأعلى تُرسل إلى GPT-4V للتحليل المفصل — التحقق مما إذا كانت الأحذية تحتوي على ميزات محددة، أو مقارنتها بمتطلبات العميل، أو توليد أوصاف منتجات مفصلة.',
        'هذا النهج ذو المرحلتين حاسم لأسباب التكلفة والأداء. استدعاءات واجهة GPT-4V أغلى بكثير وأبطأ من حسابات تضمين CLIP. باستخدام CLIP كمرشح مسبق، تقلل عدد استدعاءات GPT-4V من آلاف محتملة إلى حفنة فقط، مع الحفاظ على دقة عالية لأن CLIP يضيّق مجموعة المرشحين بكفاءة.',
        'بالنسبة لوكلاء الذكاء الاصطناعي، يُمكّن نمط التكامل هذا سير عمل قوية: وكلاء بحث بصري يعثرون على الصور ويحللونها من قواعد البيانات، ووكلاء فحص جودة يمسحون صور خط الإنتاج ويُبلّغون عن العيوب للتحليل المفصل، ووكلاء إشراف على المحتوى يفحصون بسرعة ملايين الصور ويحللون بعمق المحتوى المُبلَّغ عنه، ووكلاء بحث يبحثون عن الأشكال والرسوم البيانية العلمية عبر مستودعات الأوراق.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import torch
import clip
from PIL import Image
from openai import OpenAI

client = OpenAI()

# --- Stage 1: CLIP-based image retrieval ---
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

def search_images(query: str, image_paths: list[str], top_k: int = 3):
    """Use CLIP to find the top-k images matching a text query."""
    text_tokens = clip.tokenize([query]).to(device)
    with torch.no_grad():
        text_features = model.encode_text(text_tokens)

    scores = []
    for path in image_paths:
        image = preprocess(Image.open(path)).unsqueeze(0).to(device)
        with torch.no_grad():
            image_features = model.encode_image(image)
        similarity = (text_features @ image_features.T).item()
        scores.append((path, similarity))

    scores.sort(key=lambda x: x[1], reverse=True)
    return [path for path, _ in scores[:top_k]]

# --- Stage 2: GPT-4V detailed analysis ---
import base64

def analyze_image(image_path: str, question: str) -> str:
    """Use GPT-4V for detailed visual analysis."""
    with open(image_path, "rb") as f:
        img_b64 = base64.b64encode(f.read()).decode()

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": question},
                {"type": "image_url",
                 "image_url": {"url": f"data:image/png;base64,{img_b64}"}}
            ]
        }],
        max_tokens=512,
    )
    return response.choices[0].message.content

# --- Combined pipeline ---
all_images = ["img_001.jpg", "img_002.jpg", "img_003.jpg"]  # thousands
top_matches = search_images("damaged car bumper", all_images, top_k=2)

for img in top_matches:
    analysis = analyze_image(img, "Describe the damage and estimate severity.")
    print(f"{img}: {analysis}")`,
      description: {
        en: 'A two-stage pipeline: CLIP retrieves the most relevant images from a collection based on a text query, then GPT-4V performs detailed analysis on only the top matches, reducing cost and latency.',
        ar: 'خط أنابيب من مرحلتين: CLIP يسترجع الصور الأكثر صلة من مجموعة بناءً على استعلام نصي، ثم GPT-4V يجري تحليلاً مفصلاً على أفضل التطابقات فقط، مما يقلل التكلفة ووقت الاستجابة.',
      },
    },
    commonMistakes: {
      en: [
        'Sending every image directly to GPT-4V without pre-filtering with CLIP, resulting in unnecessarily high API costs and slow performance.',
        'Using CLIP for tasks that require deep reasoning — CLIP is great for retrieval and matching but cannot answer complex questions about image content.',
        'Forgetting to normalize CLIP embeddings before computing similarity scores, which can lead to inconsistent ranking results.',
        'Not caching CLIP embeddings for known image collections, causing redundant computation every time the same images are searched.',
      ],
      ar: [
        'إرسال كل صورة مباشرة إلى GPT-4V بدون تصفية مسبقة بـ CLIP، مما يؤدي إلى تكاليف API عالية بلا داعٍ وأداء بطيء.',
        'استخدام CLIP لمهام تتطلب استدلالاً عميقاً — CLIP ممتاز للاسترجاع والمطابقة لكنه لا يستطيع الإجابة عن أسئلة معقدة حول محتوى الصور.',
        'نسيان تطبيع تضمينات CLIP قبل حساب درجات التشابه، مما قد يؤدي إلى نتائج ترتيب غير متسقة.',
        'عدم تخزين تضمينات CLIP مؤقتاً لمجموعات الصور المعروفة، مما يسبب حسابات زائدة في كل مرة يتم فيها البحث عن نفس الصور.',
      ],
    },
    bestPractices: {
      en: [
        'Pre-compute and index CLIP embeddings for your image database using a vector store like FAISS or Pinecone for sub-second retrieval over millions of images.',
        'Use CLIP for fast filtering and ranking, then send only the top candidates to GPT-4V for detailed analysis to optimize cost and performance.',
        'Fine-tune CLIP on domain-specific data if your use case involves specialized imagery (medical, industrial, satellite) that differs from CLIP\'s training distribution.',
        'Combine CLIP similarity scores with GPT-4V analysis confidence to create robust ranking systems that leverage both speed and depth.',
      ],
      ar: [
        'احسب مسبقاً وفهرس تضمينات CLIP لقاعدة بيانات الصور الخاصة بك باستخدام مخزن متجهات مثل FAISS أو Pinecone لاسترجاع في أقل من ثانية عبر ملايين الصور.',
        'استخدم CLIP للتصفية والترتيب السريع، ثم أرسل فقط أفضل المرشحين إلى GPT-4V للتحليل المفصل لتحسين التكلفة والأداء.',
        'اضبط CLIP بدقة على بيانات خاصة بالمجال إذا كانت حالة استخدامك تتضمن صوراً متخصصة (طبية، صناعية، فضائية) تختلف عن توزيع تدريب CLIP.',
        'ادمج درجات تشابه CLIP مع ثقة تحليل GPT-4V لإنشاء أنظمة ترتيب متينة تستفيد من السرعة والعمق معاً.',
      ],
    },
    references: [
      { title: 'CLIP: Learning Transferable Visual Models - OpenAI', url: 'https://openai.com/index/clip/' },
      { title: 'CLIP Paper - arXiv', url: 'https://arxiv.org/abs/2103.00020' },
      { title: 'OpenAI CLIP GitHub Repository', url: 'https://github.com/openai/CLIP' },
    ],
    quiz: [
      {
        id: 'batch10-q5',
        question: {
          en: 'In a CLIP + GPT-4V integrated pipeline, what is CLIP\'s primary role?',
          ar: 'في خط أنابيب متكامل لـ CLIP + GPT-4V، ما هو الدور الأساسي لـ CLIP؟',
        },
        options: {
          en: [
            'To generate detailed image descriptions',
            'To fast-retrieve and rank images based on text similarity before GPT-4V analysis',
            'To train GPT-4V on new images',
            'To convert images into audio descriptions',
          ],
          ar: [
            'لتوليد أوصاف صور مفصلة',
            'لاسترجاع وترتيب الصور بسرعة بناءً على تشابه النص قبل تحليل GPT-4V',
            'لتدريب GPT-4V على صور جديدة',
            'لتحويل الصور إلى أوصاف صوتية',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'CLIP serves as a fast retrieval and pre-filtering layer, using its shared image-text embedding space to quickly find and rank the most relevant images before sending only the top candidates to GPT-4V for expensive detailed analysis.',
          ar: 'CLIP يعمل كطبقة استرجاع وتصفية مسبقة سريعة، مستخدماً فضاء تضمين الصور والنصوص المشترك للعثور بسرعة على الصور الأكثر صلة وترتيبها قبل إرسال أفضل المرشحين فقط إلى GPT-4V للتحليل المفصل المكلف.',
        },
      },
      {
        id: 'batch10-q6',
        question: {
          en: 'What type of learning does CLIP use to align image and text representations?',
          ar: 'ما نوع التعلم الذي يستخدمه CLIP لمحاذاة تمثيلات الصور والنصوص؟',
        },
        options: {
          en: [
            'Reinforcement learning',
            'Supervised classification',
            'Contrastive learning',
            'Generative adversarial training',
          ],
          ar: [
            'التعلم التعزيزي',
            'التصنيف الخاضع للإشراف',
            'التعلم التباينيّ',
            'التدريب التوليدي التنافسي',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'CLIP uses contrastive learning, specifically trained on 400 million image-text pairs to pull matching image-text pairs closer together and push non-matching pairs apart in a shared embedding space.',
          ar: 'يستخدم CLIP التعلم التباينيّ، مُدرَّب تحديداً على 400 مليون زوج من الصور والنصوص لتقريب أزواج الصور والنصوص المتطابقة من بعضها وإبعاد الأزواج غير المتطابقة في فضاء تضمين مشترك.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. Speech-to-Text and Text-to-Speech
  // ─────────────────────────────────────────────
  'speech-to-text-tts': {
    beginnerDefinition: {
      en: 'Speech-to-Text (STT) converts spoken words into written text, while Text-to-Speech (TTS) converts written text into natural-sounding spoken audio. Tools like OpenAI Whisper (STT) and ElevenLabs (TTS) enable AI agents to listen to voice commands and speak responses back, creating voice-enabled AI assistants that feel natural to interact with.',
      ar: 'تحويل الكلام إلى نص (STT) يحوّل الكلمات المنطوقة إلى نص مكتوب، بينما تحويل النص إلى كلام (TTS) يحوّل النص المكتوب إلى صوت منطوق يبدو طبيعياً. أدوات مثل OpenAI Whisper (STT) وElevenLabs (TTS) تُمكّن وكلاء الذكاء الاصطناعي من الاستماع إلى الأوامر الصوتية ونطق الردود، مما يُنشئ مساعدات ذكاء اصطناعي صوتية تبدو طبيعية في التفاعل.',
    },
    technicalDefinition: {
      en: 'Speech-to-Text (ASR - Automatic Speech Recognition) systems like Whisper use encoder-decoder transformer architectures trained on large-scale multilingual audio-text datasets to transcribe speech into text. Text-to-Speech synthesis systems like ElevenLabs and OpenAI TTS use neural vocoder architectures (often based on diffusion models or autoregressive transformers) to generate high-fidelity, natural-sounding audio from text input, supporting voice cloning, emotion control, and multilingual synthesis. Voice pipelines in AI agents chain STT → LLM reasoning → TTS to create end-to-end conversational voice interfaces with considerations for latency optimization, streaming, and turn-taking management.',
      ar: 'أنظمة تحويل الكلام إلى نص (ASR - التعرف التلقائي على الكلام) مثل Whisper تستخدم بنيات محوّل المُشفِّر-فك المُشفِّر المدربة على مجموعات بيانات صوت-نص واسعة النطاق ومتعددة اللغات لنسخ الكلام إلى نص. أنظمة تركيب النص إلى كلام مثل ElevenLabs وOpenAI TTS تستخدم بنيات المُصوِّت العصبي (غالباً تعتمد على نماذج الانتشار أو المحوّلات الارتجاعية) لتوليد صوت عالي الدقة وطبيعي من مدخلات نصية، مع دعم استنساخ الصوت والتحكم بالمشاعر والتركيب متعدد اللغات. خطوط أنابيب الصوت في وكلاء الذكاء الاصطناعي تسلسل STT → استدلال LLM → TTS لإنشاء واجهات صوتية حوارية من طرف إلى طرف مع اعتبارات لتحسين وقت الاستجابة والتدفق وإدارة تبادل الأدوار.',
    },
    analogy: {
      en: 'A voice pipeline is like a human translator at a United Nations meeting. When a delegate speaks in Japanese, the translator listens and writes down what was said (Speech-to-Text). Then they think about the best translation (LLM reasoning). Finally, they speak the translation aloud in English (Text-to-Speech). The quality of the experience depends on each stage: accurate listening, smart translation, and clear, natural-sounding speech. Modern AI voice pipelines do this entire process in near real-time, making them feel like having a fluent, multilingual conversation partner.',
      ar: 'خط أنابيب الصوت مثل مترجم بشري في اجتماع الأمم المتحدة. عندما يتحدث مندوب باليابانية، يستمع المترجم ويكتب ما قيل (تحويل الكلام إلى نص). ثم يفكر في أفضل ترجمة (استدلال LLM). أخيراً، ينطق الترجمة بصوت عالٍ بالإنجليزية (تحويل النص إلى كلام). جودة التجربة تعتمد على كل مرحلة: استماع دقيق، وترجمة ذكية، وكلام واضح وطبيعي. خطوط أنابيب الصوت الحديثة بالذكاء الاصطناعي تقوم بهذه العملية بالكامل في الوقت شبه الحقيقي، مما يجعلها تبدو كأنك تتحدث مع شريك محادثة طليق ومتعدد اللغات.',
    },
    explanation: {
      en: [
        'Speech-to-Text has been revolutionized by OpenAI\'s Whisper model. Whisper is a general-purpose ASR model trained on 680,000 hours of multilingual audio data. It supports 99 languages, automatic language detection, translation, and timestamp generation. Unlike older ASR systems that required language-specific models and careful audio preprocessing, Whisper works robustly across accents, background noise, and audio quality levels, making it ideal for production voice agents.',
        'Text-to-Speech has evolved from robotic-sounding synthesizers to nearly indistinguishable from human speech. ElevenLabs offers voice cloning from short audio samples, emotion control, and multilingual synthesis with consistent voice identity. OpenAI\'s TTS API provides high-quality voices with low latency. These services enable AI agents to speak in natural, expressive voices that maintain consistent personality across interactions.',
        'A voice pipeline for an AI agent follows a three-stage architecture: capture and transcribe audio (STT), process the transcription with the LLM to generate a response, then synthesize the response as speech (TTS). The key challenge is latency — users expect sub-second response times in voice conversations. Techniques like streaming STT (processing audio as it arrives), speculative LLM generation, and streaming TTS (playing audio before the full response is generated) help achieve conversational latency targets.',
        'Building production voice pipelines requires handling edge cases: background noise filtering, speaker diarization (identifying who is speaking), handling interruptions (barge-in), silence detection, and graceful error recovery. Voice Activity Detection (VAD) determines when the user has started and stopped speaking. Endpointing algorithms decide when the user\'s turn is complete, balancing responsiveness (responding quickly) with accuracy (not cutting off the user mid-sentence).',
        'Voice agents are transforming industries. Customer service IVR systems now use AI voice agents instead of rigid phone trees. Healthcare providers use voice agents for appointment scheduling and symptom triage. Accessibility applications convert visual content to speech for blind users. Language learning apps use TTS with voice cloning to create personalized tutors that speak in the learner\'s native accent.',
      ],
      ar: [
        'أحدث نموذج Whisper من OpenAI ثورة في تحويل الكلام إلى نص. Whisper هو نموذج ASR متعدد الاستخدامات مدرب على 680,000 ساعة من البيانات الصوتية متعددة اللغات. يدعم 99 لغة، وكشف اللغة التلقائي، والترجمة، وتوليد الطوابع الزمنية. على عكس أنظمة ASR القديمة التي تطلبت نماذج خاصة بكل لغة ومعالجة صوتية دقيقة، يعمل Whisper بقوة عبر اللهجات وضجيج الخلفية ومستويات جودة الصوت، مما يجعله مثالياً لوكلاء الصوت الإنتاجية.',
        'تطور تحويل النص إلى كلام من مُركّبات ذات صوت آلي إلى كلام لا يكاد يُميَّز عن الكلام البشري. تقدم ElevenLabs استنساخ الصوت من عينات صوتية قصيرة، والتحكم بالمشاعر، والتركيب متعدد اللغات مع هوية صوتية متسقة. توفر واجهة TTS من OpenAI أصواتاً عالية الجودة بوقت استجابة منخفض. هذه الخدمات تُمكّن وكلاء الذكاء الاصطناعي من التحدث بأصوات طبيعية ومعبرة تحافظ على شخصية متسقة عبر التفاعلات.',
        'يتبع خط أنابيب الصوت لوكيل ذكاء اصطناعي بنية من ثلاث مراحل: التقاط ونسخ الصوت (STT)، ومعالجة النسخ مع LLM لتوليد رد، ثم تركيب الرد كلاماً (TTS). التحدي الرئيسي هو وقت الاستجابة — يتوقع المستخدمون أوقات استجابة أقل من ثانية في المحادثات الصوتية. تقنيات مثل STT المتدفق (معالجة الصوت فور وصوله)، والتوليد التخميني بـ LLM، وTTS المتدفق (تشغيل الصوت قبل توليد الرد الكامل) تساعد في تحقيق أهداف وقت الاستجابة للمحادثة.',
        'بناء خطوط أنابيب صوتية إنتاجية يتطلب التعامل مع حالات حدية: تصفية ضجيج الخلفية، وفصل المتحدثين (تحديد من يتحدث)، والتعامل مع المقاطعات (التدخل)، وكشف الصمت، والتعافي السلس من الأخطاء. كشف النشاط الصوتي (VAD) يحدد متى بدأ المستخدم ومتى توقف عن الحديث. خوارزميات نقطة النهاية تقرر متى يكتمل دور المستخدم، موازنة بين الاستجابة (الرد بسرعة) والدقة (عدم مقاطعة المستخدم في منتصف جملته).',
        'الوكلاء الصوتيون يُحوّلون الصناعات. أنظمة IVR لخدمة العملاء تستخدم الآن وكلاء صوت ذكاء اصطناعي بدلاً من قوائم الهاتف الجامدة. مقدمو الرعاية الصحية يستخدمون وكلاء صوتيين لجدولة المواعيد وفرز الأعراض. تطبيقات إمكانية الوصول تحول المحتوى البصري إلى كلام للمستخدمين المكفوفين. تطبيقات تعلم اللغات تستخدم TTS مع استنساخ الصوت لإنشاء مدرسين مخصصين يتحدثون بلهجة المتعلم الأم.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
from pathlib import Path

client = OpenAI()

# --- Speech-to-Text with Whisper ---
def transcribe_audio(audio_path: str) -> str:
    """Transcribe speech to text using Whisper."""
    with open(audio_path, "rb") as audio_file:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=audio_file,
            response_format="text",
        )
    return transcript

# --- LLM Processing ---
def process_with_llm(user_text: str) -> str:
    """Process transcribed text with GPT to generate a response."""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful voice assistant. "
             "Keep responses concise (under 3 sentences) for natural speech."},
            {"role": "user", "content": user_text},
        ],
    )
    return response.choices[0].message.content

# --- Text-to-Speech ---
def speak_response(text: str, output_path: str = "response.mp3"):
    """Convert text to speech using OpenAI TTS."""
    response = client.audio.speech.create(
        model="tts-1",
        voice="nova",
        input=text,
    )
    response.stream_to_file(Path(output_path))
    return output_path

# --- Full Voice Pipeline ---
def voice_pipeline(audio_input: str) -> str:
    # Step 1: Listen (STT)
    user_text = transcribe_audio(audio_input)
    print(f"User said: {user_text}")

    # Step 2: Think (LLM)
    response_text = process_with_llm(user_text)
    print(f"Agent response: {response_text}")

    # Step 3: Speak (TTS)
    audio_output = speak_response(response_text)
    print(f"Audio saved to: {audio_output}")
    return audio_output

# Run the pipeline
voice_pipeline("user_question.mp3")`,
      description: {
        en: 'A complete voice pipeline using OpenAI APIs: Whisper transcribes user speech to text, GPT processes the query, and OpenAI TTS converts the response back to natural speech audio.',
        ar: 'خط أنابيب صوتي كامل باستخدام واجهات OpenAI: Whisper ينسخ كلام المستخدم إلى نص، وGPT يعالج الاستعلام، وOpenAI TTS يحول الرد إلى صوت كلام طبيعي.',
      },
    },
    commonMistakes: {
      en: [
        'Using high-quality TTS models (tts-1-hd) for real-time conversations where latency matters. Use the standard tts-1 model for speed and reserve HD for pre-generated content.',
        'Not implementing Voice Activity Detection, causing the agent to process silence or background noise as speech input, leading to nonsensical responses.',
        'Generating overly long LLM responses for voice output. Spoken responses should be concise (1-3 sentences) because users cannot skim audio like they skim text.',
        'Ignoring audio format and sample rate compatibility between STT and TTS components, causing quality degradation or processing errors.',
      ],
      ar: [
        'استخدام نماذج TTS عالية الجودة (tts-1-hd) للمحادثات في الوقت الحقيقي حيث يهم وقت الاستجابة. استخدم نموذج tts-1 القياسي للسرعة واحتفظ بـ HD للمحتوى المُولَّد مسبقاً.',
        'عدم تنفيذ كشف النشاط الصوتي، مما يجعل الوكيل يعالج الصمت أو ضجيج الخلفية كمدخلات كلام، مما يؤدي إلى ردود غير منطقية.',
        'توليد ردود LLM طويلة جداً للإخراج الصوتي. الردود المنطوقة يجب أن تكون موجزة (1-3 جمل) لأن المستخدمين لا يمكنهم تصفح الصوت كما يتصفحون النص.',
        'تجاهل توافق تنسيق الصوت ومعدل العينات بين مكونات STT وTTS، مما يسبب تدهور الجودة أو أخطاء المعالجة.',
      ],
    },
    bestPractices: {
      en: [
        'Implement streaming for both STT and TTS to minimize perceived latency. Start processing audio as it arrives and start playing the response before it is fully generated.',
        'Add a system prompt instruction telling the LLM to keep voice responses short and conversational — responses that read well often sound unnatural when spoken.',
        'Use Voice Activity Detection (VAD) with appropriate silence thresholds to determine when the user has finished speaking before triggering STT processing.',
        'Cache frequently used TTS outputs (greetings, common responses) to eliminate synthesis latency for predictable interactions.',
      ],
      ar: [
        'نفّذ التدفق لكل من STT وTTS لتقليل وقت الاستجابة المُدرَك. ابدأ معالجة الصوت فور وصوله وابدأ تشغيل الرد قبل توليده بالكامل.',
        'أضف تعليمات في موجه النظام تخبر LLM بإبقاء الردود الصوتية قصيرة وحوارية — الردود التي تُقرأ جيداً غالباً تبدو غير طبيعية عند نطقها.',
        'استخدم كشف النشاط الصوتي (VAD) مع عتبات صمت مناسبة لتحديد متى انتهى المستخدم من الحديث قبل تفعيل معالجة STT.',
        'خزّن مؤقتاً مخرجات TTS المستخدمة بشكل متكرر (التحيات، الردود الشائعة) لإزالة وقت التركيب للتفاعلات المتوقعة.',
      ],
    },
    references: [
      { title: 'OpenAI Whisper - GitHub', url: 'https://github.com/openai/whisper' },
      { title: 'OpenAI Text-to-Speech Guide', url: 'https://platform.openai.com/docs/guides/text-to-speech' },
      { title: 'ElevenLabs Documentation', url: 'https://elevenlabs.io/docs' },
    ],
    quiz: [
      {
        id: 'batch10-q7',
        question: {
          en: 'What is the correct order of stages in a voice AI agent pipeline?',
          ar: 'ما هو الترتيب الصحيح للمراحل في خط أنابيب وكيل صوت ذكاء اصطناعي؟',
        },
        options: {
          en: [
            'TTS → LLM → STT',
            'LLM → STT → TTS',
            'STT → LLM → TTS',
            'STT → TTS → LLM',
          ],
          ar: [
            'TTS → LLM → STT',
            'LLM → STT → TTS',
            'STT → LLM → TTS',
            'STT → TTS → LLM',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'The correct pipeline is: Speech-to-Text (transcribe user audio to text) → LLM (process the text and generate a response) → Text-to-Speech (convert the response to audio for the user to hear).',
          ar: 'خط الأنابيب الصحيح هو: تحويل الكلام إلى نص (نسخ صوت المستخدم إلى نص) ← LLM (معالجة النص وتوليد رد) ← تحويل النص إلى كلام (تحويل الرد إلى صوت ليسمعه المستخدم).',
        },
      },
      {
        id: 'batch10-q8',
        question: {
          en: 'Why should LLM responses for voice agents be kept short and concise?',
          ar: 'لماذا يجب أن تكون ردود LLM لوكلاء الصوت قصيرة وموجزة؟',
        },
        options: {
          en: [
            'Because LLMs cannot generate long text',
            'Because TTS models have a strict character limit',
            'Because users cannot skim audio like text, and long spoken responses feel unnatural',
            'Because short text uses fewer API tokens',
          ],
          ar: [
            'لأن نماذج LLM لا تستطيع توليد نص طويل',
            'لأن نماذج TTS لديها حد صارم لعدد الأحرف',
            'لأن المستخدمين لا يمكنهم تصفح الصوت كالنص، والردود المنطوقة الطويلة تبدو غير طبيعية',
            'لأن النص القصير يستهلك رموز API أقل',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Unlike text which users can skim, scan, and re-read, audio is linear and must be listened to in real-time. Long spoken responses feel tedious and unnatural in conversation, so voice agents should give concise 1-3 sentence answers.',
          ar: 'على عكس النص الذي يمكن للمستخدمين تصفحه وإعادة قراءته، الصوت خطي ويجب الاستماع إليه في الوقت الحقيقي. الردود المنطوقة الطويلة تبدو مملة وغير طبيعية في المحادثة، لذا يجب أن يعطي وكلاء الصوت إجابات موجزة من 1-3 جمل.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Real-time Voice Agents
  // ─────────────────────────────────────────────
  'real-time-voice-agents': {
    beginnerDefinition: {
      en: 'Real-time voice agents are AI systems that can have live, natural conversations using voice — just like talking to another person on the phone. They use WebSocket streaming to send and receive audio continuously, and Voice Activity Detection (VAD) to know when you start and stop speaking, enabling smooth back-and-forth dialogue without awkward pauses or interruptions.',
      ar: 'وكلاء الصوت في الوقت الحقيقي هي أنظمة ذكاء اصطناعي يمكنها إجراء محادثات حية وطبيعية باستخدام الصوت — تماماً مثل التحدث مع شخص آخر على الهاتف. تستخدم تدفق WebSocket لإرسال واستقبال الصوت بشكل مستمر، وكشف النشاط الصوتي (VAD) لمعرفة متى تبدأ ومتى تتوقف عن الحديث، مما يُمكّن حواراً سلساً متبادلاً بدون توقفات محرجة أو مقاطعات.',
    },
    technicalDefinition: {
      en: 'Real-time voice agents implement full-duplex audio communication using WebSocket connections that maintain persistent bidirectional streams between client and server. The pipeline integrates Voice Activity Detection (VAD) algorithms (such as Silero VAD or WebRTC VAD) for endpointing, streaming ASR for incremental transcription, LLM inference with streaming token generation, and streaming TTS with audio chunking. Key technical challenges include achieving sub-300ms end-to-end latency, handling barge-in (user interruption during agent speech), echo cancellation, and managing conversation state across asynchronous audio streams. The OpenAI Realtime API and LiveKit provide infrastructure for building these systems.',
      ar: 'وكلاء الصوت في الوقت الحقيقي تنفذ اتصال صوتي ثنائي الاتجاه كامل باستخدام اتصالات WebSocket التي تحافظ على تدفقات ثنائية الاتجاه مستمرة بين العميل والخادم. يدمج خط الأنابيب خوارزميات كشف النشاط الصوتي (VAD) (مثل Silero VAD أو WebRTC VAD) لتحديد نقاط النهاية، وASR المتدفق للنسخ التدريجي، واستدلال LLM مع توليد الرموز المتدفق، وTTS المتدفق مع تقسيم الصوت. التحديات التقنية الرئيسية تشمل تحقيق وقت استجابة أقل من 300 مللي ثانية من طرف إلى طرف، والتعامل مع التدخل (مقاطعة المستخدم أثناء كلام الوكيل)، وإلغاء الصدى، وإدارة حالة المحادثة عبر تدفقات صوتية غير متزامنة. واجهة OpenAI Realtime وLiveKit توفران البنية التحتية لبناء هذه الأنظمة.',
    },
    analogy: {
      en: 'Imagine the difference between sending letters and having a phone call. A traditional voice agent is like exchanging letters — you write your message (record audio), mail it (send to server), wait for a reply (process), and receive a letter back (get audio response). A real-time voice agent is like a phone call — both parties can hear each other continuously, respond instantly, and even interrupt each other naturally. WebSocket streaming is the "phone line" that keeps the connection open, and VAD is like your brain knowing when the other person has finished their sentence so you can start speaking.',
      ar: 'تخيل الفرق بين إرسال الرسائل وإجراء مكالمة هاتفية. الوكيل الصوتي التقليدي مثل تبادل الرسائل — تكتب رسالتك (تسجل الصوت)، وترسلها بالبريد (ترسل إلى الخادم)، وتنتظر الرد (المعالجة)، وتستلم رسالة (تحصل على رد صوتي). وكيل الصوت في الوقت الحقيقي مثل مكالمة هاتفية — كلا الطرفين يمكنهما سماع بعضهما بشكل مستمر، والرد فوراً، وحتى مقاطعة بعضهما بشكل طبيعي. تدفق WebSocket هو "خط الهاتف" الذي يبقي الاتصال مفتوحاً، وVAD مثل دماغك الذي يعرف متى انتهى الشخص الآخر من جملته حتى تبدأ بالحديث.',
    },
    explanation: {
      en: [
        'Real-time voice agents require fundamentally different architecture than batch voice processing. Instead of the sequential record-transcribe-process-synthesize approach, real-time agents process audio streams continuously. Audio from the user\'s microphone is chunked into small frames (typically 20-30ms) and sent over a WebSocket connection to the server as they are captured. The server processes these frames incrementally, building up the transcription in real-time rather than waiting for a complete utterance.',
        'WebSocket connections are the backbone of real-time voice agents. Unlike HTTP requests which are one-shot (send request, get response), WebSockets maintain a persistent, bidirectional connection. The client continuously streams audio frames to the server, and the server streams audio responses back. This eliminates the connection overhead of HTTP and enables the sub-second latency required for natural conversation. Protocols like the OpenAI Realtime API define structured events (input_audio_buffer.append, response.audio.delta) that flow over this WebSocket channel.',
        'Voice Activity Detection (VAD) is critical for determining when the user is speaking. VAD algorithms analyze audio frames to distinguish speech from silence, background noise, and non-speech sounds. When VAD detects speech onset, the agent starts buffering and transcribing. When VAD detects speech offset (the user stops talking), it triggers endpointing — signaling that the user\'s turn is complete and the agent should begin responding. Good VAD tuning is essential: too aggressive endpointing cuts users off mid-sentence; too conservative endpointing creates awkward pauses.',
        'Barge-in handling allows users to interrupt the agent while it is speaking, just as in natural conversation. When VAD detects user speech while the agent is outputting audio, the system must immediately stop TTS playback, cancel any pending audio generation, capture the user\'s new input, and process it. This requires careful coordination between the playback, VAD, and processing pipelines to avoid echo (the agent hearing its own output) and ensure the conversation flows naturally.',
        'Latency optimization is the defining challenge of real-time voice agents. The total perceived latency is the sum of audio capture delay, network transmission, STT processing, LLM inference, TTS synthesis, and audio playback buffering. Each component must be optimized: streaming STT provides partial results before the user finishes speaking, LLM streaming generates tokens as they are produced, and streaming TTS begins synthesizing audio from the first few tokens while the rest are still being generated. The target is under 500ms total round-trip time for a natural conversational feel.',
      ],
      ar: [
        'وكلاء الصوت في الوقت الحقيقي تتطلب بنية مختلفة جذرياً عن معالجة الصوت بالدُفعات. بدلاً من النهج التسلسلي للتسجيل-النسخ-المعالجة-التركيب، تعالج وكلاء الوقت الحقيقي تدفقات الصوت بشكل مستمر. الصوت من ميكروفون المستخدم يُقسَّم إلى إطارات صغيرة (عادةً 20-30 مللي ثانية) ويُرسَل عبر اتصال WebSocket إلى الخادم فور التقاطها. يعالج الخادم هذه الإطارات تدريجياً، يبني النسخ في الوقت الحقيقي بدلاً من انتظار كلام كامل.',
        'اتصالات WebSocket هي العمود الفقري لوكلاء الصوت في الوقت الحقيقي. على عكس طلبات HTTP التي تكون لمرة واحدة (إرسال طلب، الحصول على رد)، تحافظ WebSockets على اتصال مستمر ثنائي الاتجاه. يبث العميل إطارات صوتية باستمرار إلى الخادم، ويبث الخادم ردوداً صوتية بالمقابل. هذا يزيل عبء اتصال HTTP ويُمكّن وقت الاستجابة دون الثانية المطلوب للمحادثة الطبيعية. بروتوكولات مثل واجهة OpenAI Realtime تحدد أحداثاً منظمة (input_audio_buffer.append، response.audio.delta) تتدفق عبر قناة WebSocket هذه.',
        'كشف النشاط الصوتي (VAD) حاسم لتحديد متى يتحدث المستخدم. خوارزميات VAD تحلل إطارات الصوت للتمييز بين الكلام والصمت وضجيج الخلفية والأصوات غير الكلامية. عندما يكتشف VAD بداية الكلام، يبدأ الوكيل بالتخزين المؤقت والنسخ. عندما يكتشف VAD نهاية الكلام (توقف المستخدم عن الحديث)، يُفعّل تحديد نقطة النهاية — إشارة بأن دور المستخدم اكتمل ويجب على الوكيل البدء بالرد. ضبط VAD الجيد ضروري: تحديد نقطة نهاية عدواني جداً يقطع المستخدمين في منتصف الجملة؛ متحفظ جداً يُنشئ توقفات محرجة.',
        'التعامل مع التدخل يسمح للمستخدمين بمقاطعة الوكيل أثناء حديثه، تماماً كما في المحادثة الطبيعية. عندما يكتشف VAD كلام المستخدم أثناء إخراج الوكيل للصوت، يجب على النظام إيقاف تشغيل TTS فوراً، وإلغاء أي توليد صوت معلق، والتقاط مدخلات المستخدم الجديدة، ومعالجتها. يتطلب هذا تنسيقاً دقيقاً بين خطوط أنابيب التشغيل وVAD والمعالجة لتجنب الصدى (سماع الوكيل لمخرجاته) وضمان تدفق المحادثة بشكل طبيعي.',
        'تحسين وقت الاستجابة هو التحدي المحدد لوكلاء الصوت في الوقت الحقيقي. إجمالي وقت الاستجابة المُدرَك هو مجموع تأخير التقاط الصوت، والإرسال عبر الشبكة، ومعالجة STT، واستدلال LLM، وتركيب TTS، والتخزين المؤقت لتشغيل الصوت. يجب تحسين كل مكون: STT المتدفق يوفر نتائج جزئية قبل أن ينتهي المستخدم من الحديث، وLLM المتدفق يولد الرموز فور إنتاجها، وTTS المتدفق يبدأ تركيب الصوت من أول بضع رموز بينما الباقي لا يزال يُولَّد. الهدف هو أقل من 500 مللي ثانية إجمالي وقت ذهاب وإياب لشعور محادثة طبيعي.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `import asyncio
import websockets
import json
import base64

async def realtime_voice_agent():
    """Connect to OpenAI Realtime API for live voice conversation."""
    url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview"
    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "OpenAI-Beta": "realtime=v1",
    }

    async with websockets.connect(url, extra_headers=headers) as ws:
        # Configure the session
        await ws.send(json.dumps({
            "type": "session.update",
            "session": {
                "modalities": ["text", "audio"],
                "instructions": "You are a helpful voice assistant.",
                "voice": "nova",
                "input_audio_transcription": {"model": "whisper-1"},
                "turn_detection": {
                    "type": "server_vad",
                    "threshold": 0.5,
                    "prefix_padding_ms": 300,
                    "silence_duration_ms": 500,
                },
            },
        }))

        # Stream microphone audio (simplified)
        async def send_audio(audio_chunks):
            for chunk in audio_chunks:
                audio_b64 = base64.b64encode(chunk).decode()
                await ws.send(json.dumps({
                    "type": "input_audio_buffer.append",
                    "audio": audio_b64,
                }))
                await asyncio.sleep(0.02)  # 20ms chunks

        # Receive and play responses
        async def receive_responses():
            async for message in ws:
                event = json.loads(message)

                if event["type"] == "response.audio.delta":
                    audio_bytes = base64.b64decode(event["delta"])
                    # Play audio_bytes through speakers
                    print(f"Playing {len(audio_bytes)} bytes of audio")

                elif event["type"] == "response.audio_transcript.delta":
                    print(f"Agent: {event['delta']}", end="", flush=True)

                elif event["type"] == "input_audio_buffer.speech_started":
                    print("\\n[User started speaking]")

                elif event["type"] == "input_audio_buffer.speech_stopped":
                    print("[User stopped speaking]")

        # Run send and receive concurrently
        await asyncio.gather(
            send_audio(get_microphone_chunks()),
            receive_responses(),
        )

# asyncio.run(realtime_voice_agent())`,
      description: {
        en: 'A real-time voice agent using the OpenAI Realtime API over WebSockets. Audio is streamed bidirectionally with server-side VAD for automatic turn detection, enabling natural conversational interaction.',
        ar: 'وكيل صوت في الوقت الحقيقي يستخدم واجهة OpenAI Realtime عبر WebSockets. يُبث الصوت في كلا الاتجاهين مع VAD من جانب الخادم لكشف الأدوار التلقائي، مما يُمكّن تفاعلاً حوارياً طبيعياً.',
      },
    },
    commonMistakes: {
      en: [
        'Setting VAD silence thresholds too low (under 300ms), causing the agent to respond before the user finishes speaking, especially during natural pauses mid-thought.',
        'Not implementing barge-in handling, forcing users to wait for the agent to finish speaking before they can ask a follow-up question.',
        'Ignoring echo cancellation — without it, the agent\'s own audio output is picked up by the microphone and processed as user input, creating feedback loops.',
        'Using synchronous HTTP calls instead of WebSocket streaming, which adds connection overhead and makes sub-second latency impossible.',
      ],
      ar: [
        'تعيين عتبات صمت VAD منخفضة جداً (أقل من 300 مللي ثانية)، مما يجعل الوكيل يرد قبل أن ينتهي المستخدم من الحديث، خاصة أثناء التوقفات الطبيعية في منتصف التفكير.',
        'عدم تنفيذ التعامل مع التدخل، مما يجبر المستخدمين على الانتظار حتى ينتهي الوكيل من الحديث قبل أن يتمكنوا من طرح سؤال متابعة.',
        'تجاهل إلغاء الصدى — بدونه، يلتقط الميكروفون مخرجات صوت الوكيل نفسه ويعالجها كمدخلات مستخدم، مما يُنشئ حلقات تغذية راجعة.',
        'استخدام استدعاءات HTTP متزامنة بدلاً من تدفق WebSocket، مما يضيف عبء اتصال ويجعل وقت الاستجابة دون الثانية مستحيلاً.',
      ],
    },
    bestPractices: {
      en: [
        'Use server-side VAD when available (like OpenAI Realtime API) to offload voice detection from the client and benefit from optimized models.',
        'Implement graceful barge-in: stop TTS playback immediately when the user starts speaking, cancel pending generation, and process the new input.',
        'Tune VAD silence duration based on your use case: 500ms for quick Q&A, 800-1200ms for thoughtful conversations where users take natural pauses.',
        'Monitor end-to-end latency metrics (time from user silence to first audio response byte) and set alerts when latency exceeds acceptable thresholds for your use case.',
      ],
      ar: [
        'استخدم VAD من جانب الخادم عند توفره (مثل واجهة OpenAI Realtime) لنقل كشف الصوت من العميل والاستفادة من النماذج المُحسَّنة.',
        'نفّذ تدخلاً سلساً: أوقف تشغيل TTS فوراً عندما يبدأ المستخدم بالحديث، وألغِ التوليد المعلق، وعالج المدخلات الجديدة.',
        'اضبط مدة صمت VAD بناءً على حالة استخدامك: 500 مللي ثانية للأسئلة والأجوبة السريعة، 800-1200 مللي ثانية للمحادثات المتأنية حيث يأخذ المستخدمون توقفات طبيعية.',
        'راقب مقاييس وقت الاستجابة من طرف إلى طرف (الوقت من صمت المستخدم إلى أول بايت استجابة صوتية) واضبط تنبيهات عندما يتجاوز وقت الاستجابة العتبات المقبولة لحالة استخدامك.',
      ],
    },
    references: [
      { title: 'OpenAI Realtime API Documentation', url: 'https://platform.openai.com/docs/guides/realtime' },
      { title: 'LiveKit - Open Source WebRTC', url: 'https://livekit.io/' },
      { title: 'Silero VAD - GitHub', url: 'https://github.com/snakers4/silero-vad' },
    ],
    quiz: [
      {
        id: 'batch10-q9',
        question: {
          en: 'What is the primary purpose of Voice Activity Detection (VAD) in a real-time voice agent?',
          ar: 'ما هو الغرض الأساسي لكشف النشاط الصوتي (VAD) في وكيل صوت في الوقت الحقيقي؟',
        },
        options: {
          en: [
            'To improve the audio quality of the recording',
            'To determine when the user starts and stops speaking for turn management',
            'To translate speech from one language to another',
            'To generate the agent\'s voice responses',
          ],
          ar: [
            'لتحسين جودة تسجيل الصوت',
            'لتحديد متى يبدأ المستخدم ومتى يتوقف عن الحديث لإدارة الأدوار',
            'لترجمة الكلام من لغة إلى أخرى',
            'لتوليد الردود الصوتية للوكيل',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'VAD distinguishes speech from silence and background noise, enabling the system to know when the user has started and finished speaking. This is critical for turn-taking management in real-time conversations.',
          ar: 'VAD يميز الكلام عن الصمت وضجيج الخلفية، مما يُمكّن النظام من معرفة متى بدأ المستخدم ومتى انتهى من الحديث. هذا حاسم لإدارة تبادل الأدوار في المحادثات في الوقت الحقيقي.',
        },
      },
      {
        id: 'batch10-q10',
        question: {
          en: 'What does "barge-in" mean in the context of real-time voice agents?',
          ar: 'ماذا يعني "التدخل" في سياق وكلاء الصوت في الوقت الحقيقي؟',
        },
        options: {
          en: [
            'The agent speaking louder to override background noise',
            'The user interrupting the agent while it is still speaking',
            'Multiple agents speaking at the same time',
            'The system crashing due to audio overload',
          ],
          ar: [
            'تحدث الوكيل بصوت أعلى للتغلب على ضجيج الخلفية',
            'مقاطعة المستخدم للوكيل أثناء حديثه',
            'تحدث عدة وكلاء في نفس الوقت',
            'تعطل النظام بسبب حمل صوتي زائد',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Barge-in refers to the user interrupting the agent mid-speech. Proper barge-in handling requires immediately stopping TTS playback, canceling pending audio generation, and processing the user\'s new input, enabling natural conversational flow.',
          ar: 'التدخل يشير إلى مقاطعة المستخدم للوكيل في منتصف حديثه. التعامل السليم مع التدخل يتطلب إيقاف تشغيل TTS فوراً، وإلغاء توليد الصوت المعلق، ومعالجة مدخلات المستخدم الجديدة، مما يُمكّن تدفق محادثة طبيعي.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Customer Support Agent Design
  // ─────────────────────────────────────────────
  'customer-support-agent-design': {
    beginnerDefinition: {
      en: 'A customer support agent is an AI system designed to handle customer inquiries automatically. It detects what the customer wants (intent detection), routes the request to the right department or system (ticket routing), and knows when to hand off to a human agent (escalation). Think of it as an intelligent first responder that can solve common problems instantly and smartly escalate complex ones.',
      ar: 'وكيل دعم العملاء هو نظام ذكاء اصطناعي مصمم للتعامل مع استفسارات العملاء تلقائياً. يكتشف ما يريده العميل (كشف النية)، ويوجه الطلب إلى القسم أو النظام المناسب (توجيه التذاكر)، ويعرف متى يجب تسليمه إلى وكيل بشري (التصعيد). فكر فيه كمستجيب أول ذكي يمكنه حل المشكلات الشائعة فوراً وتصعيد المشكلات المعقدة بذكاء.',
    },
    technicalDefinition: {
      en: 'A customer support agent is an LLM-powered system that implements intent classification (mapping customer messages to predefined categories like billing, technical support, returns), entity extraction (identifying key information such as order numbers, product names, dates), ticket routing (assigning requests to appropriate queues, teams, or automated workflows based on intent, priority, and context), and escalation logic (rules and heuristics for transferring to human agents based on sentiment analysis, complexity scoring, VIP status, and failure detection). The architecture typically integrates with CRM systems, knowledge bases, and ticketing platforms via APIs.',
      ar: 'وكيل دعم العملاء هو نظام مدعوم بـ LLM ينفذ تصنيف النية (ربط رسائل العملاء بفئات محددة مسبقاً مثل الفواتير والدعم التقني والمرتجعات)، واستخراج الكيانات (تحديد المعلومات الرئيسية مثل أرقام الطلبات وأسماء المنتجات والتواريخ)، وتوجيه التذاكر (تعيين الطلبات إلى قوائم انتظار أو فرق أو سير عمل آلية مناسبة بناءً على النية والأولوية والسياق)، ومنطق التصعيد (قواعد واستدلالات لنقل الطلب إلى وكلاء بشريين بناءً على تحليل المشاعر وتسجيل التعقيد وحالة VIP وكشف الفشل). تتكامل البنية عادةً مع أنظمة CRM وقواعد المعرفة ومنصات التذاكر عبر واجهات البرمجة.',
    },
    analogy: {
      en: 'A customer support agent works like the reception desk at a large hospital. When a patient walks in, the receptionist quickly assesses the situation (intent detection): "Are you here for a routine checkup, an emergency, or to pick up test results?" Based on the answer, they direct the patient to the right department (ticket routing): general practice, emergency room, or the lab. If the situation is beyond their ability to handle — a severe injury or a complex insurance question — they immediately call a specialist or supervisor (escalation). The best receptionists handle routine matters themselves, freeing doctors to focus on complex cases.',
      ar: 'وكيل دعم العملاء يعمل مثل مكتب الاستقبال في مستشفى كبير. عندما يأتي مريض، يقيّم موظف الاستقبال الوضع بسرعة (كشف النية): "هل أنت هنا لفحص روتيني، أم حالة طوارئ، أم لاستلام نتائج فحوصات؟" بناءً على الإجابة، يوجه المريض إلى القسم المناسب (توجيه التذاكر): الطب العام، أو غرفة الطوارئ، أو المختبر. إذا كان الوضع يتجاوز قدرته على التعامل — إصابة شديدة أو سؤال تأميني معقد — يتصل فوراً بأخصائي أو مشرف (التصعيد). أفضل موظفي الاستقبال يتعاملون مع الأمور الروتينية بأنفسهم، مما يحرر الأطباء للتركيز على الحالات المعقدة.',
    },
    explanation: {
      en: [
        'Intent detection is the first and most critical step in a customer support agent. When a customer says "I was charged twice for my order" or "My package hasn\'t arrived yet," the agent must classify the intent accurately: is this a billing issue, a shipping issue, or something else? Modern agents use LLMs for intent classification, which offers greater flexibility than traditional rule-based or ML classifier approaches because LLMs can understand nuanced, ambiguous, or multi-intent messages without extensive training data.',
        'Entity extraction works alongside intent detection to pull out key information from the customer\'s message. From "I ordered a blue laptop case on March 5th and the order number is ORD-12345," the agent extracts: product (blue laptop case), date (March 5th), and order ID (ORD-12345). These entities are used to query backend systems, pre-fill ticket forms, and personalize responses. LLMs with structured output (JSON mode) are particularly effective for reliable entity extraction.',
        'Ticket routing determines where a request goes after classification. Simple routing maps intents to queues: billing issues go to the billing team, technical problems go to tier-2 support. Advanced routing considers multiple factors: customer tier (VIP customers get priority), issue severity (account security issues get immediate attention), agent availability and specialization, and historical resolution data. The routing logic can be implemented as a decision tree, a rules engine, or as LLM-powered reasoning with access to routing policies.',
        'Escalation logic is what makes the difference between a helpful agent and a frustrating one. The agent should escalate to a human when: sentiment analysis detects high frustration or anger, the same issue has been raised multiple times without resolution, the request involves legal or compliance-sensitive matters, the agent\'s confidence in its response drops below a threshold, or the customer explicitly asks for a human. Smart escalation includes passing the full conversation history so the human agent does not ask the customer to repeat themselves.',
        'A production customer support agent integrates with multiple systems: CRM (customer history, account details), knowledge base (product documentation, FAQs, troubleshooting guides), ticketing system (create, update, close tickets), order management (check order status, process refunds), and communication channels (email, chat, phone). The agent uses these integrations as tools, calling them through function calling to look up information and take actions on behalf of the customer.',
      ],
      ar: [
        'كشف النية هو الخطوة الأولى والأكثر أهمية في وكيل دعم العملاء. عندما يقول العميل "تم خصم المبلغ مرتين من طلبي" أو "لم يصل طردي بعد"، يجب على الوكيل تصنيف النية بدقة: هل هذه مشكلة فواتير أم مشكلة شحن أم شيء آخر؟ الوكلاء الحديثون يستخدمون LLMs لتصنيف النية، مما يوفر مرونة أكبر من الأساليب التقليدية القائمة على القواعد أو مصنفات التعلم الآلي لأن LLMs يمكنها فهم الرسائل الدقيقة والغامضة أو متعددة النيات بدون بيانات تدريب واسعة.',
        'استخراج الكيانات يعمل جنباً إلى جنب مع كشف النية لسحب المعلومات الرئيسية من رسالة العميل. من "طلبت غلاف لابتوب أزرق في 5 مارس ورقم الطلب هو ORD-12345"، يستخرج الوكيل: المنتج (غلاف لابتوب أزرق)، والتاريخ (5 مارس)، ومعرف الطلب (ORD-12345). تُستخدم هذه الكيانات للاستعلام عن أنظمة الخلفية، وملء نماذج التذاكر مسبقاً، وتخصيص الردود. LLMs مع المخرجات المنظمة (وضع JSON) فعالة بشكل خاص لاستخراج الكيانات بشكل موثوق.',
        'توجيه التذاكر يحدد أين يذهب الطلب بعد التصنيف. التوجيه البسيط يربط النيات بقوائم الانتظار: مشاكل الفواتير تذهب لفريق الفواتير، المشاكل التقنية تذهب لدعم المستوى الثاني. التوجيه المتقدم يأخذ عوامل متعددة بعين الاعتبار: مستوى العميل (عملاء VIP يحصلون على أولوية)، وشدة المشكلة (مشاكل أمان الحساب تحصل على اهتمام فوري)، وتوفر الوكلاء وتخصصهم، وبيانات الحل التاريخية. يمكن تنفيذ منطق التوجيه كشجرة قرار أو محرك قواعد أو كاستدلال مدعوم بـ LLM مع وصول إلى سياسات التوجيه.',
        'منطق التصعيد هو ما يصنع الفرق بين وكيل مفيد ووكيل محبط. يجب على الوكيل التصعيد إلى بشري عندما: يكتشف تحليل المشاعر إحباطاً أو غضباً شديداً، أو تم طرح نفس المشكلة عدة مرات بدون حل، أو يتضمن الطلب مسائل قانونية أو حساسة للامتثال، أو تنخفض ثقة الوكيل في رده عن حد معين، أو يطلب العميل صراحةً وكيلاً بشرياً. التصعيد الذكي يتضمن تمرير تاريخ المحادثة الكامل حتى لا يطلب الوكيل البشري من العميل تكرار نفسه.',
        'وكيل دعم العملاء الإنتاجي يتكامل مع أنظمة متعددة: CRM (تاريخ العميل، تفاصيل الحساب)، وقاعدة المعرفة (وثائق المنتج، الأسئلة الشائعة، أدلة استكشاف الأخطاء)، ونظام التذاكر (إنشاء وتحديث وإغلاق التذاكر)، وإدارة الطلبات (التحقق من حالة الطلب، معالجة المبالغ المستردة)، وقنوات الاتصال (البريد الإلكتروني، الدردشة، الهاتف). يستخدم الوكيل هذه التكاملات كأدوات، يستدعيها عبر استدعاء الدوال للبحث عن المعلومات واتخاذ إجراءات نيابة عن العميل.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json

client = OpenAI()

# Define support agent tools
tools = [
    {
        "type": "function",
        "function": {
            "name": "classify_intent",
            "description": "Classify customer message intent and extract entities",
            "parameters": {
                "type": "object",
                "properties": {
                    "intent": {
                        "type": "string",
                        "enum": ["billing", "shipping", "technical",
                                 "returns", "account", "general"],
                    },
                    "priority": {
                        "type": "string",
                        "enum": ["low", "medium", "high", "critical"],
                    },
                    "entities": {
                        "type": "object",
                        "properties": {
                            "order_id": {"type": "string"},
                            "product": {"type": "string"},
                            "issue_summary": {"type": "string"},
                        },
                    },
                    "should_escalate": {"type": "boolean"},
                    "escalation_reason": {"type": "string"},
                },
                "required": ["intent", "priority", "entities", "should_escalate"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "lookup_order",
            "description": "Look up order details by order ID",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_id": {"type": "string"},
                },
                "required": ["order_id"],
            },
        },
    },
]

SYSTEM_PROMPT = """You are a customer support agent for TechShop.
1. First classify the customer's intent and extract key entities.
2. Look up relevant information using available tools.
3. Provide a helpful response or escalate to a human if needed.

Escalate when: customer is very frustrated, issue is legal/compliance,
you cannot resolve after 2 attempts, or customer requests a human."""

def handle_customer_message(message: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": message},
        ],
        tools=tools,
        tool_choice="auto",
    )

    msg = response.choices[0].message

    if msg.tool_calls:
        for tc in msg.tool_calls:
            result = json.loads(tc.function.arguments)
            print(f"Tool: {tc.function.name} -> {json.dumps(result, indent=2)}")

    return msg.content or "Processing your request..."

# Example usage
handle_customer_message(
    "I was charged twice for order ORD-9921. This is really frustrating!"
)`,
      description: {
        en: 'A customer support agent that classifies intent, extracts entities (order ID, product), and determines whether to handle the issue autonomously or escalate to a human based on customer sentiment and issue complexity.',
        ar: 'وكيل دعم عملاء يصنف النية، ويستخرج الكيانات (معرف الطلب، المنتج)، ويحدد ما إذا كان سيتعامل مع المشكلة ذاتياً أو يصعدها إلى بشري بناءً على مشاعر العميل وتعقيد المشكلة.',
      },
    },
    commonMistakes: {
      en: [
        'Not implementing escalation paths, trapping frustrated customers in infinite AI loops with no way to reach a human agent.',
        'Using rigid keyword matching for intent detection instead of LLM-based classification, which fails on paraphrased or ambiguous messages.',
        'Failing to pass conversation context during escalation, forcing customers to repeat their entire issue to the human agent.',
        'Over-automating sensitive situations (billing disputes, account security) that require human judgment and empathy.',
      ],
      ar: [
        'عدم تنفيذ مسارات التصعيد، مما يحبس العملاء المحبطين في حلقات ذكاء اصطناعي لا نهائية بدون طريقة للوصول إلى وكيل بشري.',
        'استخدام مطابقة كلمات مفتاحية جامدة لكشف النية بدلاً من تصنيف قائم على LLM، مما يفشل مع الرسائل المعاد صياغتها أو الغامضة.',
        'الفشل في تمرير سياق المحادثة أثناء التصعيد، مما يجبر العملاء على تكرار مشكلتهم بالكامل للوكيل البشري.',
        'الأتمتة المفرطة للمواقف الحساسة (نزاعات الفواتير، أمان الحساب) التي تتطلب حكماً بشرياً وتعاطفاً.',
      ],
    },
    bestPractices: {
      en: [
        'Always provide a clear escape hatch for customers to reach a human agent at any point in the conversation.',
        'Use structured output (JSON mode) for intent classification and entity extraction to ensure reliable downstream processing.',
        'Implement sentiment tracking across the conversation — escalate proactively if customer frustration increases over multiple messages.',
        'Log all agent interactions, tool calls, and decisions for quality monitoring, compliance auditing, and continuous improvement of the system.',
      ],
      ar: [
        'وفر دائماً مخرجاً واضحاً للعملاء للوصول إلى وكيل بشري في أي نقطة من المحادثة.',
        'استخدم المخرجات المنظمة (وضع JSON) لتصنيف النية واستخراج الكيانات لضمان معالجة لاحقة موثوقة.',
        'نفّذ تتبع المشاعر عبر المحادثة — صعّد بشكل استباقي إذا زاد إحباط العميل عبر رسائل متعددة.',
        'سجّل جميع تفاعلات الوكيل واستدعاءات الأدوات والقرارات لمراقبة الجودة وتدقيق الامتثال والتحسين المستمر للنظام.',
      ],
    },
    references: [
      { title: 'OpenAI Customer Service Agent Cookbook', url: 'https://cookbook.openai.com/examples/how_to_build_an_agent_with_the_node_sdk' },
      { title: 'Zendesk AI Agent Documentation', url: 'https://www.zendesk.com/service/ai/' },
      { title: 'Intercom AI Customer Service', url: 'https://www.intercom.com/ai-bot' },
    ],
    quiz: [
      {
        id: 'batch10-q11',
        question: {
          en: 'Which component of a customer support agent determines what the customer is asking about?',
          ar: 'أي مكون من مكونات وكيل دعم العملاء يحدد ما يسأل عنه العميل؟',
        },
        options: {
          en: [
            'Ticket routing',
            'Intent detection',
            'Escalation logic',
            'Entity extraction',
          ],
          ar: [
            'توجيه التذاكر',
            'كشف النية',
            'منطق التصعيد',
            'استخراج الكيانات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Intent detection classifies the customer\'s message into categories (billing, shipping, returns, etc.) to determine what the customer is asking about, which then drives routing and response generation.',
          ar: 'كشف النية يصنف رسالة العميل إلى فئات (فواتير، شحن، مرتجعات، إلخ) لتحديد ما يسأل عنه العميل، مما يقود بعد ذلك التوجيه وتوليد الرد.',
        },
      },
      {
        id: 'batch10-q12',
        question: {
          en: 'When should a customer support AI agent escalate to a human?',
          ar: 'متى يجب على وكيل دعم عملاء بالذكاء الاصطناعي التصعيد إلى بشري؟',
        },
        options: {
          en: [
            'Only when the customer explicitly asks for a human',
            'For every single interaction to be safe',
            'When sentiment is negative, confidence is low, issues are repeated, or compliance-sensitive matters arise',
            'Never — AI agents should handle everything autonomously',
          ],
          ar: [
            'فقط عندما يطلب العميل صراحةً وكيلاً بشرياً',
            'لكل تفاعل ليكون في الجانب الآمن',
            'عندما تكون المشاعر سلبية، أو الثقة منخفضة، أو المشاكل متكررة، أو تنشأ مسائل حساسة للامتثال',
            'أبداً — يجب على وكلاء الذكاء الاصطناعي التعامل مع كل شيء ذاتياً',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Smart escalation considers multiple factors: customer frustration (sentiment analysis), repeated unresolved issues, legal/compliance topics, low agent confidence, and explicit human requests. This balanced approach handles routine issues efficiently while ensuring complex cases get human attention.',
          ar: 'التصعيد الذكي يأخذ عوامل متعددة بعين الاعتبار: إحباط العميل (تحليل المشاعر)، والمشاكل المتكررة غير المحلولة، والمواضيع القانونية/الامتثال، وانخفاض ثقة الوكيل، والطلبات الصريحة للبشري. هذا النهج المتوازن يتعامل مع المشاكل الروتينية بكفاءة مع ضمان حصول الحالات المعقدة على اهتمام بشري.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. Cybersecurity SOC Agent
  // ─────────────────────────────────────────────
  'cybersecurity-soc-agent': {
    beginnerDefinition: {
      en: 'A Cybersecurity SOC (Security Operations Center) agent is an AI system that helps security teams detect threats, analyze security logs, and respond to incidents automatically. Like a tireless security analyst that works 24/7, it monitors network traffic, examines suspicious activities, correlates events from multiple sources, and either resolves threats automatically or alerts human analysts with prioritized findings.',
      ar: 'وكيل مركز عمليات الأمن السيبراني (SOC) هو نظام ذكاء اصطناعي يساعد فرق الأمن في اكتشاف التهديدات، وتحليل سجلات الأمان، والاستجابة للحوادث تلقائياً. مثل محلل أمني لا يكل يعمل على مدار الساعة، يراقب حركة مرور الشبكة، ويفحص الأنشطة المشبوهة، ويربط الأحداث من مصادر متعددة، ويحل التهديدات تلقائياً أو ينبه المحللين البشريين بنتائج مرتبة حسب الأولوية.',
    },
    technicalDefinition: {
      en: 'A SOC agent is an AI-powered security automation system that integrates with SIEM (Security Information and Event Management) platforms, EDR (Endpoint Detection and Response) tools, threat intelligence feeds, and network monitoring infrastructure. It implements automated alert triage (reducing false positive rates through contextual analysis), log correlation (linking events across firewalls, IDS/IPS, authentication systems, and endpoints), threat hunting (proactively searching for indicators of compromise using MITRE ATT&CK mapping), and incident response playbook execution (automated containment, evidence collection, and remediation actions). The agent uses LLMs for natural language analysis of logs, generating human-readable incident reports, and reasoning about complex multi-stage attack patterns.',
      ar: 'وكيل SOC هو نظام أتمتة أمني مدعوم بالذكاء الاصطناعي يتكامل مع منصات SIEM (إدارة معلومات وأحداث الأمان)، وأدوات EDR (كشف واستجابة نقطة النهاية)، ومصادر استخبارات التهديدات، والبنية التحتية لمراقبة الشبكة. ينفذ فرز التنبيهات الآلي (تقليل معدلات الإيجابيات الكاذبة عبر التحليل السياقي)، وربط السجلات (ربط الأحداث عبر جدران الحماية وأنظمة IDS/IPS وأنظمة المصادقة ونقاط النهاية)، وصيد التهديدات (البحث الاستباقي عن مؤشرات الاختراق باستخدام تعيين MITRE ATT&CK)، وتنفيذ دليل الاستجابة للحوادث (الاحتواء الآلي وجمع الأدلة وإجراءات المعالجة). يستخدم الوكيل LLMs لتحليل اللغة الطبيعية للسجلات، وتوليد تقارير حوادث مقروءة للبشر، والاستدلال حول أنماط هجوم معقدة متعددة المراحل.',
    },
    analogy: {
      en: 'A SOC agent is like an advanced security guard system in a large building complex. Traditional security has hundreds of cameras (log sources) but only a few guards who cannot watch all screens at once. The SOC agent is like an AI-enhanced monitoring system that watches every camera simultaneously, recognizes suspicious behavior (a person trying multiple locked doors), correlates events across cameras (tracking the same person across floors), checks their face against a known threats database (threat intelligence), and decides whether to lock doors automatically (automated response) or call security officers with a detailed briefing (escalation with context).',
      ar: 'وكيل SOC مثل نظام حراسة أمنية متقدم في مجمع مبانٍ كبير. الأمن التقليدي لديه مئات الكاميرات (مصادر السجلات) لكن عدد قليل من الحراس الذين لا يمكنهم مراقبة جميع الشاشات في وقت واحد. وكيل SOC مثل نظام مراقبة مُعزَّز بالذكاء الاصطناعي يراقب كل كاميرا في وقت واحد، ويتعرف على السلوك المشبوه (شخص يحاول فتح أبواب مقفلة متعددة)، ويربط الأحداث عبر الكاميرات (تتبع نفس الشخص عبر الطوابق)، ويتحقق من وجهه في قاعدة بيانات التهديدات المعروفة (استخبارات التهديدات)، ويقرر ما إذا كان سيقفل الأبواب تلقائياً (الاستجابة الآلية) أو يستدعي ضباط الأمن بإحاطة مفصلة (التصعيد مع السياق).',
    },
    explanation: {
      en: [
        'Security Operations Centers face an overwhelming challenge: modern enterprises generate millions of security events daily from firewalls, servers, endpoints, cloud services, and applications. Human analysts cannot review all these events manually. SOC agents use AI to automate the initial triage, filtering out false positives and highlighting genuine threats that require human attention. This dramatically reduces alert fatigue — a critical problem where analysts become desensitized to alerts due to sheer volume.',
        'Log analysis and correlation is where SOC agents provide the most value. A single event — like a failed login attempt — might be benign. But the agent can correlate it with other events: the same IP address also scanned multiple ports, attempted SQL injection on the web server, and triggered a malware signature on the endpoint. By connecting these dots across different log sources (firewall, WAF, EDR), the agent reconstructs the attack narrative and identifies a coordinated intrusion attempt that individual alerts would miss.',
        'Threat detection in SOC agents maps observed behaviors to known attack frameworks, particularly MITRE ATT&CK. When the agent detects a PowerShell script downloading a payload from an external server, it maps this to ATT&CK technique T1059.001 (Command and Scripting Interpreter: PowerShell) and T1105 (Ingress Tool Transfer). This mapping helps analysts understand the attack stage, predict likely next steps, and apply appropriate countermeasures. The agent can also query threat intelligence feeds to check if the external server is associated with known threat actors.',
        'Incident response automation allows SOC agents to take immediate containment actions according to predefined playbooks. When a confirmed threat is detected — such as a compromised endpoint communicating with a command-and-control server — the agent can automatically isolate the endpoint from the network, block the malicious IP at the firewall, disable the compromised user account, collect forensic artifacts (memory dumps, running processes, recent file changes), and create a detailed incident ticket with all evidence and timeline.',
        'The LLM component of SOC agents adds natural language capabilities that traditional SOAR (Security Orchestration, Automation and Response) platforms lack. Analysts can query the agent in natural language: "Show me all failed authentication attempts from external IPs in the last 24 hours" or "Investigate the root cause of alert SEC-4521." The agent translates these into SIEM queries, analyzes the results, and generates human-readable reports with findings, severity assessments, and recommended actions.',
      ],
      ar: [
        'تواجه مراكز عمليات الأمن تحدياً هائلاً: المؤسسات الحديثة تولد ملايين الأحداث الأمنية يومياً من جدران الحماية والخوادم ونقاط النهاية والخدمات السحابية والتطبيقات. لا يمكن للمحللين البشريين مراجعة كل هذه الأحداث يدوياً. وكلاء SOC يستخدمون الذكاء الاصطناعي لأتمتة الفرز الأولي، تصفية الإيجابيات الكاذبة وتسليط الضوء على التهديدات الحقيقية التي تتطلب اهتماماً بشرياً. هذا يقلل بشكل كبير من إجهاد التنبيهات — مشكلة حرجة حيث يصبح المحللون غير حساسين للتنبيهات بسبب الحجم الهائل.',
        'تحليل السجلات والربط بينها هو المكان الذي يقدم فيه وكلاء SOC أكبر قيمة. حدث واحد — مثل محاولة تسجيل دخول فاشلة — قد يكون عادياً. لكن الوكيل يمكنه ربطه بأحداث أخرى: نفس عنوان IP أيضاً مسح منافذ متعددة، وحاول حقن SQL على خادم الويب، وأطلق توقيع برمجيات خبيثة على نقطة النهاية. بربط هذه النقاط عبر مصادر سجلات مختلفة (جدار الحماية، WAF، EDR)، يعيد الوكيل بناء رواية الهجوم ويحدد محاولة اختراق منسقة كانت ستفوتها التنبيهات الفردية.',
        'كشف التهديدات في وكلاء SOC يربط السلوكيات المرصودة بأطر هجوم معروفة، خاصة MITRE ATT&CK. عندما يكتشف الوكيل سكريبت PowerShell يحمّل حمولة من خادم خارجي، يربط هذا بتقنية ATT&CK T1059.001 (مفسر الأوامر والسكريبتات: PowerShell) وT1105 (نقل أدوات الدخول). يساعد هذا الربط المحللين على فهم مرحلة الهجوم، والتنبؤ بالخطوات المحتملة التالية، وتطبيق الإجراءات المضادة المناسبة. يمكن للوكيل أيضاً الاستعلام عن مصادر استخبارات التهديدات للتحقق مما إذا كان الخادم الخارجي مرتبطاً بجهات تهديد معروفة.',
        'أتمتة الاستجابة للحوادث تسمح لوكلاء SOC باتخاذ إجراءات احتواء فورية وفقاً لأدلة مُعدَّة مسبقاً. عند اكتشاف تهديد مؤكد — مثل نقطة نهاية مخترقة تتصل بخادم قيادة وتحكم — يمكن للوكيل تلقائياً عزل نقطة النهاية عن الشبكة، وحظر IP الخبيث في جدار الحماية، وتعطيل حساب المستخدم المخترق، وجمع القطع الأثرية الجنائية (تفريغات الذاكرة، العمليات الجارية، التغييرات الأخيرة في الملفات)، وإنشاء تذكرة حادث مفصلة بجميع الأدلة والجدول الزمني.',
        'مكون LLM في وكلاء SOC يضيف قدرات اللغة الطبيعية التي تفتقر إليها منصات SOAR (تنسيق وأتمتة واستجابة الأمان) التقليدية. يمكن للمحللين الاستعلام من الوكيل بلغة طبيعية: "أرني جميع محاولات المصادقة الفاشلة من عناوين IP خارجية في آخر 24 ساعة" أو "حقق في السبب الجذري للتنبيه SEC-4521." يترجم الوكيل هذه إلى استعلامات SIEM، ويحلل النتائج، ويولد تقارير مقروءة للبشر مع النتائج وتقييمات الشدة والإجراءات الموصى بها.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json
from datetime import datetime

client = OpenAI()

# SOC Agent tools for security operations
soc_tools = [
    {
        "type": "function",
        "function": {
            "name": "query_siem",
            "description": "Query SIEM for security events matching criteria",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"},
                    "time_range": {"type": "string"},
                    "severity": {"type": "string",
                                 "enum": ["low", "medium", "high", "critical"]},
                },
                "required": ["query", "time_range"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "check_threat_intel",
            "description": "Check an IP or domain against threat intelligence",
            "parameters": {
                "type": "object",
                "properties": {
                    "indicator": {"type": "string"},
                    "indicator_type": {"type": "string",
                                       "enum": ["ip", "domain", "hash"]},
                },
                "required": ["indicator", "indicator_type"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "isolate_endpoint",
            "description": "Isolate a compromised endpoint from the network",
            "parameters": {
                "type": "object",
                "properties": {
                    "hostname": {"type": "string"},
                    "reason": {"type": "string"},
                },
                "required": ["hostname", "reason"],
            },
        },
    },
]

SOC_SYSTEM_PROMPT = """You are a SOC (Security Operations Center) analyst agent.
When analyzing security alerts:
1. Gather context by querying the SIEM for related events
2. Check indicators (IPs, domains, hashes) against threat intelligence
3. Correlate events to identify attack patterns (map to MITRE ATT&CK)
4. Assess severity and recommend or take containment actions
5. Generate a structured incident report

Only isolate endpoints for HIGH or CRITICAL confirmed threats."""

def analyze_alert(alert: dict) -> str:
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": SOC_SYSTEM_PROMPT},
            {"role": "user", "content": (
                f"Analyze this security alert:\\n"
                f"Type: {alert['type']}\\n"
                f"Source IP: {alert['source_ip']}\\n"
                f"Target: {alert['target']}\\n"
                f"Details: {alert['details']}"
            )},
        ],
        tools=soc_tools,
        tool_choice="auto",
    )
    return response.choices[0].message.content

# Example alert
alert = {
    "type": "Suspicious PowerShell Execution",
    "source_ip": "10.0.1.55",
    "target": "WORKSTATION-042",
    "details": "Encoded PowerShell downloading payload from 185.43.7.12",
}
analyze_alert(alert)`,
      description: {
        en: 'A SOC agent that analyzes security alerts using SIEM queries, threat intelligence lookups, and automated endpoint isolation. It follows a structured investigation workflow mapped to MITRE ATT&CK techniques.',
        ar: 'وكيل SOC يحلل تنبيهات الأمان باستخدام استعلامات SIEM، وعمليات بحث استخبارات التهديدات، وعزل نقاط النهاية الآلي. يتبع سير عمل تحقيق منظم مربوط بتقنيات MITRE ATT&CK.',
      },
    },
    commonMistakes: {
      en: [
        'Giving the SOC agent unrestricted automated response capabilities without approval gates for high-impact actions like endpoint isolation or account disabling.',
        'Not tuning alert thresholds, leading to either too many false positives (alert fatigue) or too few detections (missed threats).',
        'Relying solely on the AI agent without human oversight for critical security decisions — AI should augment, not replace, human security analysts.',
        'Failing to keep threat intelligence feeds and detection rules updated, causing the agent to miss new attack techniques and emerging threats.',
      ],
      ar: [
        'إعطاء وكيل SOC قدرات استجابة آلية غير مقيدة بدون بوابات موافقة للإجراءات عالية التأثير مثل عزل نقاط النهاية أو تعطيل الحسابات.',
        'عدم ضبط عتبات التنبيه، مما يؤدي إما إلى إيجابيات كاذبة كثيرة جداً (إجهاد التنبيهات) أو اكتشافات قليلة جداً (تهديدات مفقودة).',
        'الاعتماد فقط على وكيل الذكاء الاصطناعي بدون إشراف بشري لقرارات الأمان الحرجة — الذكاء الاصطناعي يجب أن يُعزز محللي الأمن البشريين وليس يحل محلهم.',
        'الفشل في تحديث مصادر استخبارات التهديدات وقواعد الكشف، مما يجعل الوكيل يفقد تقنيات هجوم جديدة وتهديدات ناشئة.',
      ],
    },
    bestPractices: {
      en: [
        'Implement tiered automation: auto-resolve low-severity alerts, flag medium alerts for review, and require human approval for high-impact containment actions.',
        'Map all detections to MITRE ATT&CK techniques for standardized threat categorization and to help analysts quickly understand attack context.',
        'Maintain detailed audit logs of all automated actions taken by the SOC agent for compliance, forensics, and accountability.',
        'Regularly test the SOC agent with red team exercises and simulated attacks to validate detection accuracy and response effectiveness.',
      ],
      ar: [
        'نفّذ أتمتة متدرجة: حل تلقائي للتنبيهات منخفضة الشدة، وإبلاغ التنبيهات المتوسطة للمراجعة، وطلب موافقة بشرية لإجراءات الاحتواء عالية التأثير.',
        'اربط جميع الاكتشافات بتقنيات MITRE ATT&CK لتصنيف تهديدات موحد ولمساعدة المحللين على فهم سياق الهجوم بسرعة.',
        'احتفظ بسجلات تدقيق مفصلة لجميع الإجراءات الآلية التي يتخذها وكيل SOC للامتثال والتحقيقات الجنائية والمساءلة.',
        'اختبر وكيل SOC بانتظام بتمارين الفريق الأحمر والهجمات المحاكاة للتحقق من دقة الكشف وفعالية الاستجابة.',
      ],
    },
    references: [
      { title: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
      { title: 'Microsoft Security Copilot', url: 'https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot' },
      { title: 'NIST Incident Response Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
    ],
    quiz: [
      {
        id: 'batch10-q13',
        question: {
          en: 'What is the primary benefit of using AI agents in a Security Operations Center?',
          ar: 'ما هي الفائدة الأساسية لاستخدام وكلاء الذكاء الاصطناعي في مركز عمليات الأمن؟',
        },
        options: {
          en: [
            'Eliminating the need for human security analysts entirely',
            'Reducing alert fatigue by automating triage and correlating events across multiple sources',
            'Making firewalls unnecessary',
            'Preventing all cyberattacks automatically',
          ],
          ar: [
            'القضاء على الحاجة لمحللي أمن بشريين بالكامل',
            'تقليل إجهاد التنبيهات عبر أتمتة الفرز وربط الأحداث عبر مصادر متعددة',
            'جعل جدران الحماية غير ضرورية',
            'منع جميع الهجمات السيبرانية تلقائياً',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'SOC agents primarily help by automating the triage of millions of daily security events, filtering false positives, and correlating events across multiple log sources to surface genuine threats that require human attention, significantly reducing alert fatigue.',
          ar: 'وكلاء SOC يساعدون بشكل أساسي عبر أتمتة فرز ملايين الأحداث الأمنية اليومية، وتصفية الإيجابيات الكاذبة، وربط الأحداث عبر مصادر سجلات متعددة لإبراز التهديدات الحقيقية التي تتطلب اهتماماً بشرياً، مما يقلل بشكل كبير من إجهاد التنبيهات.',
        },
      },
      {
        id: 'batch10-q14',
        question: {
          en: 'What framework does a SOC agent use to categorize observed attack behaviors?',
          ar: 'ما هو الإطار الذي يستخدمه وكيل SOC لتصنيف سلوكيات الهجوم المرصودة؟',
        },
        options: {
          en: [
            'OWASP Top 10',
            'MITRE ATT&CK',
            'ISO 27001',
            'PCI DSS',
          ],
          ar: [
            'OWASP Top 10',
            'MITRE ATT&CK',
            'ISO 27001',
            'PCI DSS',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'MITRE ATT&CK is a knowledge base of adversary tactics and techniques that SOC agents use to map observed behaviors to known attack patterns, helping analysts understand the attack stage and predict likely next steps.',
          ar: 'MITRE ATT&CK هي قاعدة معرفية لتكتيكات وتقنيات الخصوم يستخدمها وكلاء SOC لربط السلوكيات المرصودة بأنماط هجوم معروفة، مما يساعد المحللين على فهم مرحلة الهجوم والتنبؤ بالخطوات المحتملة التالية.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. Healthcare Assistant Agent
  // ─────────────────────────────────────────────
  'healthcare-assistant-agent': {
    beginnerDefinition: {
      en: 'A healthcare assistant agent is an AI system designed to help patients with medical questions, symptom assessment, appointment scheduling, and health information. It can perform basic triage (helping determine urgency), answer medical FAQs, and guide patients to appropriate care — all while strictly following healthcare regulations like HIPAA to protect patient privacy and always clarifying that it is not a substitute for professional medical advice.',
      ar: 'وكيل المساعد الصحي هو نظام ذكاء اصطناعي مصمم لمساعدة المرضى في الأسئلة الطبية وتقييم الأعراض وجدولة المواعيد والمعلومات الصحية. يمكنه إجراء فرز أساسي (المساعدة في تحديد مدى الإلحاح)، والإجابة عن الأسئلة الطبية الشائعة، وتوجيه المرضى إلى الرعاية المناسبة — كل ذلك مع الالتزام الصارم بلوائح الرعاية الصحية مثل HIPAA لحماية خصوصية المريض والتوضيح دائماً أنه ليس بديلاً عن المشورة الطبية المهنية.',
    },
    technicalDefinition: {
      en: 'A healthcare assistant agent is an LLM-based conversational system operating within a regulated healthcare environment. It implements symptom-based triage algorithms (mapping reported symptoms to urgency levels using clinical decision trees and medical ontologies like SNOMED CT and ICD-10), medical knowledge retrieval (RAG over curated medical databases, clinical guidelines, and drug interaction databases), appointment scheduling (integration with EHR/EMR systems via FHIR/HL7 APIs), and HIPAA-compliant data handling (encryption at rest and in transit, minimum necessary data principle, audit logging, BAA-covered infrastructure, and PHI de-identification). The agent operates with strict guardrails: it never provides diagnoses, always recommends professional consultation for serious symptoms, and maintains comprehensive audit trails.',
      ar: 'وكيل المساعد الصحي هو نظام محادثة قائم على LLM يعمل ضمن بيئة رعاية صحية منظمة. ينفذ خوارزميات فرز قائمة على الأعراض (ربط الأعراض المُبلَّغ عنها بمستويات الإلحاح باستخدام أشجار قرار سريرية وأنطولوجيات طبية مثل SNOMED CT وICD-10)، واسترجاع المعرفة الطبية (RAG عبر قواعد بيانات طبية منسقة وإرشادات سريرية وقواعد بيانات تفاعلات الأدوية)، وجدولة المواعيد (التكامل مع أنظمة EHR/EMR عبر واجهات FHIR/HL7)، ومعالجة البيانات المتوافقة مع HIPAA (التشفير في السكون وأثناء النقل ومبدأ الحد الأدنى الضروري من البيانات وتسجيل التدقيق والبنية التحتية المغطاة بـ BAA وإزالة تعريف PHI). يعمل الوكيل بحواجز حماية صارمة: لا يقدم تشخيصات أبداً، ويوصي دائماً بالاستشارة المهنية للأعراض الخطيرة، ويحافظ على مسارات تدقيق شاملة.',
    },
    analogy: {
      en: 'A healthcare assistant agent is like a knowledgeable nurse at a hospital front desk. When you walk in, the nurse asks about your symptoms, checks your temperature and vital signs (triage), looks up your medical history (EHR integration), and directs you to the right department or doctor. The nurse does not diagnose you or prescribe medication — that is the doctor\'s job — but they efficiently gather information, provide basic health guidance, and ensure you get to the right care quickly. Similarly, the AI agent handles information gathering and routing while always deferring clinical decisions to qualified professionals.',
      ar: 'وكيل المساعد الصحي مثل ممرض(ة) على دراية في مكتب استقبال المستشفى. عندما تدخل، يسألك الممرض عن أعراضك، ويتحقق من حرارتك وعلاماتك الحيوية (الفرز)، ويبحث في تاريخك الطبي (تكامل EHR)، ويوجهك إلى القسم أو الطبيب المناسب. الممرض لا يشخص حالتك أو يصف لك دواءً — هذا عمل الطبيب — لكنه يجمع المعلومات بكفاءة، ويقدم إرشادات صحية أساسية، ويضمن وصولك إلى الرعاية المناسبة بسرعة. وبالمثل، يتعامل وكيل الذكاء الاصطناعي مع جمع المعلومات والتوجيه بينما يُحيل دائماً القرارات السريرية إلى المتخصصين المؤهلين.',
    },
    explanation: {
      en: [
        'Healthcare assistant agents must operate under strict regulatory frameworks. In the United States, HIPAA (Health Insurance Portability and Accountability Act) governs how patient health information (PHI) is collected, stored, transmitted, and accessed. Any AI agent handling PHI must use encrypted communications, store data on BAA-covered infrastructure (Business Associate Agreement), implement role-based access controls, maintain detailed audit logs of all data access, and apply the minimum necessary principle — only collecting and exposing the least amount of PHI needed for the specific task.',
        'Symptom triage is one of the most valuable functions of a healthcare agent. When a patient reports symptoms, the agent follows structured clinical assessment protocols: asking about symptom onset, duration, severity, associated symptoms, and relevant medical history. Based on this information, it categorizes the urgency: emergency (call 911 — chest pain, difficulty breathing, signs of stroke), urgent (seek care within hours — high fever, severe pain), semi-urgent (schedule appointment within days), or routine (general health questions). The agent must always err on the side of caution, directing potentially serious symptoms to immediate care.',
        'Medical knowledge retrieval uses RAG (Retrieval-Augmented Generation) over curated, authoritative medical databases rather than relying on the LLM\'s general training data. Sources include clinical practice guidelines (from organizations like WHO, CDC, NICE), drug databases (for interaction checking and dosage information), and institutional knowledge bases (hospital-specific protocols and formularies). This ensures the agent provides evidence-based information that is current and traceable to authoritative sources.',
        'A critical design principle for healthcare agents is knowing their limitations and communicating them clearly. Every interaction should include appropriate disclaimers: the agent is not a doctor, its assessments are not diagnoses, and patients should always consult healthcare professionals for medical decisions. The agent should never recommend specific treatments or medications without physician involvement. For mental health contexts, the agent must have crisis protocols — detecting suicidal ideation and immediately providing crisis hotline numbers and emergency resources.',
        'Integration with Electronic Health Record (EHR) systems enables the agent to access patient history, allergies, current medications, and past appointments through standardized APIs like FHIR (Fast Healthcare Interoperability Resources). This allows personalized interactions: the agent knows a patient\'s allergy to penicillin when discussing medications, or can reference recent lab results when discussing symptoms. All EHR access must be logged and authorized according to the patient\'s consent and the minimum necessary principle.',
      ],
      ar: [
        'يجب أن تعمل وكلاء المساعد الصحي تحت أطر تنظيمية صارمة. في الولايات المتحدة، يحكم قانون HIPAA (قانون قابلية نقل التأمين الصحي والمساءلة) كيفية جمع معلومات صحة المريض (PHI) وتخزينها ونقلها والوصول إليها. أي وكيل ذكاء اصطناعي يتعامل مع PHI يجب أن يستخدم اتصالات مشفرة، ويخزن البيانات على بنية تحتية مغطاة بـ BAA (اتفاقية شريك الأعمال)، وينفذ ضوابط وصول قائمة على الأدوار، ويحافظ على سجلات تدقيق مفصلة لجميع عمليات الوصول للبيانات، ويطبق مبدأ الحد الأدنى الضروري — جمع وكشف أقل قدر من PHI المطلوب للمهمة المحددة.',
        'فرز الأعراض هو أحد أكثر وظائف الوكيل الصحي قيمة. عندما يُبلّغ مريض عن أعراض، يتبع الوكيل بروتوكولات تقييم سريري منظمة: يسأل عن بداية الأعراض ومدتها وشدتها والأعراض المصاحبة والتاريخ الطبي ذي الصلة. بناءً على هذه المعلومات، يصنف مدى الإلحاح: طوارئ (اتصل بالإسعاف — ألم في الصدر، صعوبة في التنفس، علامات سكتة دماغية)، عاجل (اطلب الرعاية خلال ساعات — حمى مرتفعة، ألم شديد)، شبه عاجل (حدد موعداً خلال أيام)، أو روتيني (أسئلة صحية عامة). يجب أن يميل الوكيل دائماً نحو الحذر، موجهاً الأعراض الخطيرة المحتملة إلى رعاية فورية.',
        'استرجاع المعرفة الطبية يستخدم RAG (التوليد المعزز بالاسترجاع) عبر قواعد بيانات طبية منسقة وموثوقة بدلاً من الاعتماد على بيانات التدريب العامة لـ LLM. تشمل المصادر إرشادات الممارسة السريرية (من منظمات مثل WHO وCDC وNICE)، وقواعد بيانات الأدوية (للتحقق من التفاعلات ومعلومات الجرعة)، وقواعد المعرفة المؤسسية (بروتوكولات ونماذج وصفات خاصة بالمستشفى). يضمن هذا أن الوكيل يقدم معلومات قائمة على الأدلة حالية وقابلة للتتبع إلى مصادر موثوقة.',
        'مبدأ تصميم حاسم للوكلاء الصحيين هو معرفة حدودهم وإبلاغها بوضوح. كل تفاعل يجب أن يتضمن إخلاءات مسؤولية مناسبة: الوكيل ليس طبيباً، وتقييماته ليست تشخيصات، ويجب على المرضى دائماً استشارة متخصصي الرعاية الصحية للقرارات الطبية. يجب ألا يوصي الوكيل أبداً بعلاجات أو أدوية محددة بدون مشاركة الطبيب. في سياقات الصحة النفسية، يجب أن يكون لدى الوكيل بروتوكولات أزمات — اكتشاف الأفكار الانتحارية وتقديم أرقام خطوط الأزمات وموارد الطوارئ فوراً.',
        'التكامل مع أنظمة السجلات الصحية الإلكترونية (EHR) يُمكّن الوكيل من الوصول إلى تاريخ المريض والحساسيات والأدوية الحالية والمواعيد السابقة عبر واجهات برمجة معيارية مثل FHIR (موارد التشغيل البيني السريع للرعاية الصحية). يتيح هذا تفاعلات مخصصة: الوكيل يعرف حساسية المريض تجاه البنسلين عند مناقشة الأدوية، أو يمكنه الرجوع إلى نتائج مختبرية حديثة عند مناقشة الأعراض. يجب تسجيل جميع عمليات الوصول لـ EHR وتفويضها وفقاً لموافقة المريض ومبدأ الحد الأدنى الضروري.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json

client = OpenAI()

HEALTHCARE_SYSTEM_PROMPT = """You are a healthcare assistant agent.

CRITICAL RULES:
- NEVER provide diagnoses. Only provide general health information.
- ALWAYS recommend consulting a healthcare professional.
- For emergency symptoms (chest pain, difficulty breathing, severe
  bleeding, signs of stroke), immediately direct to call 911/emergency.
- NEVER recommend specific medications or dosages.
- Include a disclaimer in every response.
- Follow HIPAA: never store or repeat sensitive PHI unnecessarily.

For symptom triage, assess:
1. Symptom onset, duration, severity (1-10)
2. Associated symptoms
3. Relevant medical history
4. Categorize urgency: EMERGENCY / URGENT / SEMI-URGENT / ROUTINE"""

healthcare_tools = [
    {
        "type": "function",
        "function": {
            "name": "triage_assessment",
            "description": "Perform structured symptom triage",
            "parameters": {
                "type": "object",
                "properties": {
                    "symptoms": {
                        "type": "array",
                        "items": {"type": "string"},
                    },
                    "severity": {
                        "type": "string",
                        "enum": ["emergency", "urgent",
                                 "semi-urgent", "routine"],
                    },
                    "recommended_action": {"type": "string"},
                    "needs_emergency": {"type": "boolean"},
                },
                "required": ["symptoms", "severity",
                             "recommended_action", "needs_emergency"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "search_medical_knowledge",
            "description": "Search curated medical knowledge base",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"},
                    "source": {
                        "type": "string",
                        "enum": ["guidelines", "drug_info", "conditions"],
                    },
                },
                "required": ["query", "source"],
            },
        },
    },
]

def healthcare_chat(patient_message: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": HEALTHCARE_SYSTEM_PROMPT},
            {"role": "user", "content": patient_message},
        ],
        tools=healthcare_tools,
        tool_choice="auto",
    )

    msg = response.choices[0].message
    if msg.tool_calls:
        for tc in msg.tool_calls:
            args = json.loads(tc.function.arguments)
            if args.get("needs_emergency"):
                return ("EMERGENCY: Please call 911 immediately. "
                        f"Symptoms: {', '.join(args['symptoms'])}")
            print(f"Triage: {args.get('severity', 'unknown').upper()}")

    return msg.content or "Please consult your healthcare provider."

# Example
healthcare_chat("I have been having chest tightness and shortness "
                "of breath for the past hour.")`,
      description: {
        en: 'A healthcare assistant agent with strict guardrails: it performs symptom triage, searches medical knowledge bases, and always directs emergencies to 911 while including appropriate disclaimers.',
        ar: 'وكيل مساعد صحي بحواجز حماية صارمة: يجري فرز الأعراض، ويبحث في قواعد المعرفة الطبية، ويوجه حالات الطوارئ دائماً إلى الإسعاف مع تضمين إخلاءات مسؤولية مناسبة.',
      },
    },
    commonMistakes: {
      en: [
        'Allowing the agent to provide specific diagnoses or recommend particular medications without physician oversight, creating serious legal and safety risks.',
        'Storing patient health information (PHI) in non-HIPAA-compliant systems or sending it through unencrypted channels.',
        'Not implementing crisis detection protocols for mental health emergencies — failing to recognize suicidal ideation and provide immediate crisis resources.',
        'Using the LLM\'s general knowledge instead of curated, authoritative medical databases, potentially providing outdated or incorrect medical information.',
      ],
      ar: [
        'السماح للوكيل بتقديم تشخيصات محددة أو التوصية بأدوية معينة بدون إشراف طبيب، مما يُنشئ مخاطر قانونية وسلامة خطيرة.',
        'تخزين معلومات صحة المريض (PHI) في أنظمة غير متوافقة مع HIPAA أو إرسالها عبر قنوات غير مشفرة.',
        'عدم تنفيذ بروتوكولات كشف الأزمات لحالات الطوارئ النفسية — الفشل في التعرف على الأفكار الانتحارية وتقديم موارد أزمات فورية.',
        'استخدام المعرفة العامة لـ LLM بدلاً من قواعد بيانات طبية منسقة وموثوقة، مما قد يقدم معلومات طبية قديمة أو غير صحيحة.',
      ],
    },
    bestPractices: {
      en: [
        'Always include clear disclaimers that the agent is not a medical professional and cannot provide diagnoses or treatment recommendations.',
        'Use RAG over curated, authoritative medical databases rather than relying on the LLM\'s general training data for medical information.',
        'Implement crisis detection with immediate escalation to emergency services for life-threatening symptoms and mental health emergencies.',
        'Maintain comprehensive HIPAA-compliant audit logs of all patient interactions, data access, and triage decisions for regulatory compliance.',
      ],
      ar: [
        'ضمّن دائماً إخلاءات مسؤولية واضحة بأن الوكيل ليس متخصصاً طبياً ولا يمكنه تقديم تشخيصات أو توصيات علاجية.',
        'استخدم RAG عبر قواعد بيانات طبية منسقة وموثوقة بدلاً من الاعتماد على بيانات التدريب العامة لـ LLM للمعلومات الطبية.',
        'نفّذ كشف الأزمات مع تصعيد فوري لخدمات الطوارئ للأعراض المهددة للحياة وحالات الطوارئ النفسية.',
        'احتفظ بسجلات تدقيق شاملة متوافقة مع HIPAA لجميع تفاعلات المرضى وعمليات الوصول للبيانات وقرارات الفرز للامتثال التنظيمي.',
      ],
    },
    references: [
      { title: 'HIPAA Compliance Guide - HHS.gov', url: 'https://www.hhs.gov/hipaa/index.html' },
      { title: 'FHIR Standard - HL7', url: 'https://www.hl7.org/fhir/' },
      { title: 'WHO Digital Health Guidelines', url: 'https://www.who.int/publications/i/item/9789240029200' },
    ],
    quiz: [
      {
        id: 'batch10-q15',
        question: {
          en: 'What should a healthcare AI agent do when a patient reports chest pain and difficulty breathing?',
          ar: 'ماذا يجب أن يفعل وكيل ذكاء اصطناعي صحي عندما يُبلّغ مريض عن ألم في الصدر وصعوبة في التنفس؟',
        },
        options: {
          en: [
            'Suggest possible diagnoses and recommend medication',
            'Schedule a routine appointment for next week',
            'Immediately direct the patient to call 911/emergency services',
            'Ask the patient to wait and monitor symptoms for 24 hours',
          ],
          ar: [
            'اقتراح تشخيصات محتملة والتوصية بدواء',
            'جدولة موعد روتيني للأسبوع القادم',
            'توجيه المريض فوراً للاتصال بالإسعاف/خدمات الطوارئ',
            'طلب من المريض الانتظار ومراقبة الأعراض لمدة 24 ساعة',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'Chest pain and difficulty breathing are emergency symptoms that could indicate a heart attack, pulmonary embolism, or other life-threatening conditions. The agent must immediately direct the patient to call 911 or go to the nearest emergency room — never attempt diagnosis or delay care.',
          ar: 'ألم الصدر وصعوبة التنفس هي أعراض طارئة قد تشير إلى نوبة قلبية أو انصمام رئوي أو حالات أخرى مهددة للحياة. يجب على الوكيل توجيه المريض فوراً للاتصال بالإسعاف أو الذهاب لأقرب غرفة طوارئ — لا يحاول أبداً التشخيص أو تأخير الرعاية.',
        },
      },
      {
        id: 'batch10-q16',
        question: {
          en: 'What does HIPAA\'s "minimum necessary" principle require for healthcare AI agents?',
          ar: 'ماذا يتطلب مبدأ "الحد الأدنى الضروري" في HIPAA لوكلاء الذكاء الاصطناعي الصحيين؟',
        },
        options: {
          en: [
            'Use the cheapest possible AI model',
            'Only collect and expose the least amount of patient data needed for the specific task',
            'Minimize the number of questions asked to the patient',
            'Use the minimum number of API calls',
          ],
          ar: [
            'استخدام أرخص نموذج ذكاء اصطناعي ممكن',
            'جمع وكشف أقل قدر من بيانات المريض المطلوبة للمهمة المحددة فقط',
            'تقليل عدد الأسئلة المطروحة على المريض',
            'استخدام الحد الأدنى من استدعاءات API',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'HIPAA\'s minimum necessary principle requires that healthcare systems, including AI agents, only access, use, and disclose the minimum amount of Protected Health Information (PHI) needed to accomplish the intended purpose, limiting exposure of sensitive patient data.',
          ar: 'مبدأ الحد الأدنى الضروري في HIPAA يتطلب أن أنظمة الرعاية الصحية، بما في ذلك وكلاء الذكاء الاصطناعي، تصل فقط إلى الحد الأدنى من المعلومات الصحية المحمية (PHI) وتستخدمه وتكشفه المطلوب لإنجاز الغرض المقصود، مما يحد من تعرض بيانات المريض الحساسة.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. AI Tutor Agent
  // ─────────────────────────────────────────────
  'ai-tutor-agent': {
    beginnerDefinition: {
      en: 'An AI tutor agent is an intelligent teaching assistant that adapts to each student\'s learning level, assesses their knowledge through questions and exercises, and uses the Socratic method (asking guiding questions instead of giving direct answers) to help students understand concepts deeply. It personalizes the learning experience based on what each student knows and where they struggle, much like a patient private tutor.',
      ar: 'وكيل المعلم الذكي هو مساعد تعليمي ذكي يتكيف مع مستوى تعلم كل طالب، ويقيّم معرفتهم من خلال الأسئلة والتمارين، ويستخدم المنهج السقراطي (طرح أسئلة توجيهية بدلاً من إعطاء إجابات مباشرة) لمساعدة الطلاب على فهم المفاهيم بعمق. يُخصّص تجربة التعلم بناءً على ما يعرفه كل طالب وأين يواجه صعوبة، تماماً مثل مدرس خصوصي صبور.',
    },
    technicalDefinition: {
      en: 'An AI tutor agent is an LLM-powered adaptive learning system that implements knowledge modeling (maintaining a student profile with mastery levels across topics using techniques like Bayesian Knowledge Tracing or Item Response Theory), adaptive content selection (dynamically choosing exercises, explanations, and difficulty levels based on the student\'s current knowledge state), Socratic dialogue management (generating scaffolded questions that guide students toward understanding rather than providing direct answers), formative assessment (evaluating student responses to update the knowledge model and identify misconceptions), and learning path optimization (sequencing topics and activities to maximize learning efficiency based on prerequisite graphs and spaced repetition schedules).',
      ar: 'وكيل المعلم الذكي هو نظام تعلم تكيفي مدعوم بـ LLM ينفذ نمذجة المعرفة (الحفاظ على ملف طالب بمستويات إتقان عبر المواضيع باستخدام تقنيات مثل تتبع المعرفة البايزي أو نظرية استجابة العنصر)، واختيار المحتوى التكيفي (اختيار التمارين والشروحات ومستويات الصعوبة ديناميكياً بناءً على حالة معرفة الطالب الحالية)، وإدارة الحوار السقراطي (توليد أسئلة مُوجَّهة تقود الطلاب نحو الفهم بدلاً من تقديم إجابات مباشرة)، والتقييم التكويني (تقييم ردود الطلاب لتحديث نموذج المعرفة وتحديد المفاهيم الخاطئة)، وتحسين مسار التعلم (ترتيب المواضيع والأنشطة لتعظيم كفاءة التعلم بناءً على رسوم المتطلبات المسبقة وجداول التكرار المتباعد).',
    },
    analogy: {
      en: 'An AI tutor is like a master chess coach. A good chess coach does not just tell you the best move — they ask "What do you think will happen if you move your knight here?" (Socratic method). They know exactly which openings you have mastered and which endgames you still struggle with (knowledge assessment). They adapt each lesson to focus on your weaknesses while building on your strengths (adaptive learning). And they gradually increase the difficulty of practice puzzles as you improve (scaffolding). The AI tutor applies these same pedagogical principles across any subject, from mathematics to programming to history.',
      ar: 'المعلم الذكي مثل مدرب شطرنج ماهر. المدرب الجيد لا يخبرك فقط بأفضل نقلة — يسأل "ماذا تعتقد سيحدث إذا حركت حصانك هنا؟" (المنهج السقراطي). يعرف بالضبط أي افتتاحيات أتقنتها وأي نهايات لعب لا تزال تعاني منها (تقييم المعرفة). يكيّف كل درس للتركيز على نقاط ضعفك بينما يبني على نقاط قوتك (التعلم التكيفي). ويزيد تدريجياً صعوبة ألغاز التدريب مع تحسنك (التدرج). المعلم الذكي يطبق نفس المبادئ التربوية عبر أي مادة، من الرياضيات إلى البرمجة إلى التاريخ.',
    },
    explanation: {
      en: [
        'The Socratic method is the cornerstone of effective AI tutoring. Instead of simply providing correct answers, the tutor asks probing questions that guide the student to discover the answer themselves. When a student asks "What is recursion?", a Socratic tutor might respond: "Think about what happens when you look at a mirror reflected in another mirror. What do you see? Now, what if a function could call itself in a similar way?" This approach builds deeper understanding and develops critical thinking skills, as opposed to passive information consumption.',
        'Knowledge assessment and modeling tracks what each student knows and does not know. The tutor maintains a knowledge graph where each node represents a concept or skill, and edges represent prerequisites. As the student answers questions and completes exercises, the tutor updates mastery estimates for each concept using techniques like Bayesian Knowledge Tracing. For example, if a student consistently solves algebra equations but struggles with word problems, the model identifies that the gap is in problem formulation, not algebraic manipulation.',
        'Adaptive learning adjusts the difficulty, pacing, and content type based on the student\'s current knowledge state. If a student demonstrates strong understanding, the tutor advances to more challenging material or introduces new topics. If a student struggles, the tutor provides additional scaffolding: breaking the concept into smaller pieces, offering different analogies, providing worked examples, or revisiting prerequisite concepts. This personalization ensures each student learns at their optimal pace without being bored or overwhelmed.',
        'Formative assessment is woven throughout the tutoring interaction, not just at the end. The tutor evaluates every student response — not just whether it is correct, but what misconceptions it might reveal. If a student says "5 + 3 × 2 = 16", the tutor recognizes a common misconception about order of operations and addresses it directly. This continuous assessment creates a tight feedback loop: teach, assess, identify gaps, adapt, and teach again.',
        'Effective AI tutors also manage motivation and engagement. They provide positive reinforcement for effort (not just correct answers), celebrate progress, vary activity types to prevent monotony, use gamification elements like progress bars and achievements, and adapt their communication style to the student\'s age and preferences. The emotional dimension of tutoring is just as important as the cognitive dimension — a frustrated student does not learn effectively regardless of content quality.',
      ],
      ar: [
        'المنهج السقراطي هو حجر الزاوية في التدريس الفعال بالذكاء الاصطناعي. بدلاً من تقديم الإجابات الصحيحة ببساطة، يطرح المعلم أسئلة استقصائية توجه الطالب لاكتشاف الإجابة بنفسه. عندما يسأل طالب "ما هي العودية؟"، قد يرد المعلم السقراطي: "فكر فيما يحدث عندما تنظر إلى مرآة منعكسة في مرآة أخرى. ماذا ترى؟ الآن، ماذا لو استطاعت دالة استدعاء نفسها بطريقة مشابهة؟" هذا النهج يبني فهماً أعمق ويطور مهارات التفكير النقدي، بخلاف الاستهلاك السلبي للمعلومات.',
        'تقييم المعرفة ونمذجتها يتتبع ما يعرفه كل طالب وما لا يعرفه. يحافظ المعلم على رسم بياني للمعرفة حيث كل عقدة تمثل مفهوماً أو مهارة، والحواف تمثل المتطلبات المسبقة. مع إجابة الطالب على الأسئلة وإكمال التمارين، يُحدّث المعلم تقديرات الإتقان لكل مفهوم باستخدام تقنيات مثل تتبع المعرفة البايزي. مثلاً، إذا كان طالب يحل باستمرار معادلات الجبر لكنه يعاني مع المسائل الكلامية، يحدد النموذج أن الفجوة في صياغة المشكلة وليس في التلاعب الجبري.',
        'التعلم التكيفي يُعدّل الصعوبة والسرعة ونوع المحتوى بناءً على حالة معرفة الطالب الحالية. إذا أظهر الطالب فهماً قوياً، يتقدم المعلم إلى مادة أكثر تحدياً أو يقدم مواضيع جديدة. إذا عانى الطالب، يقدم المعلم دعماً إضافياً: تقسيم المفهوم إلى أجزاء أصغر، أو تقديم تشبيهات مختلفة، أو توفير أمثلة محلولة، أو إعادة زيارة مفاهيم المتطلبات المسبقة. هذا التخصيص يضمن أن كل طالب يتعلم بسرعته المثلى دون ملل أو إرهاق.',
        'التقييم التكويني مُدمج طوال تفاعل التدريس، وليس فقط في النهاية. يقيّم المعلم كل رد من الطالب — ليس فقط ما إذا كان صحيحاً، بل ما المفاهيم الخاطئة التي قد يكشفها. إذا قال طالب "5 + 3 × 2 = 16"، يتعرف المعلم على مفهوم خاطئ شائع حول ترتيب العمليات ويعالجه مباشرة. هذا التقييم المستمر يُنشئ حلقة تغذية راجعة ضيقة: علّم، وقيّم، وحدد الفجوات، وتكيّف، وعلّم مجدداً.',
        'المعلمون الذكيون الفعالون يديرون أيضاً الدافعية والمشاركة. يقدمون تعزيزاً إيجابياً للجهد (ليس فقط الإجابات الصحيحة)، ويحتفلون بالتقدم، وينوعون أنواع الأنشطة لمنع الرتابة، ويستخدمون عناصر التلعيب مثل أشرطة التقدم والإنجازات، ويكيّفون أسلوب تواصلهم مع عمر الطالب وتفضيلاته. البُعد العاطفي للتدريس لا يقل أهمية عن البُعد المعرفي — الطالب المحبط لا يتعلم بفعالية بغض النظر عن جودة المحتوى.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json

client = OpenAI()

TUTOR_SYSTEM_PROMPT = """You are a Socratic AI tutor specializing in Python.

TEACHING APPROACH:
- Never give direct answers. Guide with questions.
- Assess the student's level from their responses.
- Break complex topics into small, digestible steps.
- Use analogies and real-world examples.
- Celebrate progress and encourage effort.
- If the student is stuck after 2 hints, provide a partial answer
  and ask them to complete it.

STUDENT PROFILE (updated dynamically):
- Level: {level}
- Mastered topics: {mastered}
- Struggling with: {struggling}

Adapt your explanations to match the student's current level."""

class AITutor:
    def __init__(self):
        self.student_profile = {
            "level": "beginner",
            "mastered": [],
            "struggling": [],
            "history": [],
        }
        self.messages = []

    def _build_system_prompt(self) -> str:
        return TUTOR_SYSTEM_PROMPT.format(
            level=self.student_profile["level"],
            mastered=", ".join(self.student_profile["mastered"]) or "none yet",
            struggling=", ".join(self.student_profile["struggling"]) or "none identified",
        )

    def chat(self, student_message: str) -> str:
        self.messages.append({"role": "user", "content": student_message})

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": self._build_system_prompt()},
                *self.messages[-10:],  # Keep last 10 messages for context
            ],
        )

        reply = response.choices[0].message.content
        self.messages.append({"role": "assistant", "content": reply})

        # Update student profile based on interaction
        self._assess_understanding(student_message)
        return reply

    def _assess_understanding(self, response: str):
        """Update student knowledge model based on responses."""
        assessment = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{
                "role": "user",
                "content": (
                    f"Based on this student response, assess understanding.\\n"
                    f"Response: {response}\\n"
                    f"Return JSON: {{\\\"understood\\\": bool, "
                    f"\\\"topic\\\": str, \\\"misconceptions\\\": [str]}}"
                ),
            }],
            response_format={"type": "json_object"},
        )
        result = json.loads(assessment.choices[0].message.content)

        topic = result.get("topic", "")
        if result.get("understood") and topic:
            if topic not in self.student_profile["mastered"]:
                self.student_profile["mastered"].append(topic)
        elif topic:
            if topic not in self.student_profile["struggling"]:
                self.student_profile["struggling"].append(topic)

# Usage
tutor = AITutor()
print(tutor.chat("What is a for loop in Python?"))
print(tutor.chat("It goes through a list?"))`,
      description: {
        en: 'A Socratic AI tutor that maintains a student knowledge profile, adapts difficulty based on understanding, and guides learning through questions rather than direct answers. It continuously assesses student responses to identify misconceptions.',
        ar: 'معلم ذكي سقراطي يحافظ على ملف معرفة الطالب، ويكيّف الصعوبة بناءً على الفهم، ويوجه التعلم من خلال الأسئلة بدلاً من الإجابات المباشرة. يقيّم باستمرار ردود الطالب لتحديد المفاهيم الخاطئة.',
      },
    },
    commonMistakes: {
      en: [
        'Simply providing answers when the student asks, instead of guiding them through the reasoning process with questions and hints.',
        'Not tracking student progress across sessions, forcing the student to restart from scratch each time they interact with the tutor.',
        'Using the same explanation approach for every student regardless of their learning style, background, or current level.',
        'Overwhelming beginners with technical jargon or advanced concepts before they have mastered the prerequisites.',
      ],
      ar: [
        'تقديم الإجابات ببساطة عندما يسأل الطالب، بدلاً من توجيهه عبر عملية التفكير بالأسئلة والتلميحات.',
        'عدم تتبع تقدم الطالب عبر الجلسات، مما يجبر الطالب على البدء من الصفر في كل مرة يتفاعل مع المعلم.',
        'استخدام نفس نهج الشرح لكل طالب بغض النظر عن أسلوب تعلمه أو خلفيته أو مستواه الحالي.',
        'إرهاق المبتدئين بالمصطلحات التقنية أو المفاهيم المتقدمة قبل إتقانهم للمتطلبات المسبقة.',
      ],
    },
    bestPractices: {
      en: [
        'Use the Socratic method as the default teaching approach: ask guiding questions, provide hints, and let students discover answers themselves for deeper understanding.',
        'Maintain persistent student profiles across sessions to track mastery levels, learning patterns, and misconceptions over time.',
        'Implement spaced repetition by revisiting previously learned concepts at increasing intervals to strengthen long-term retention.',
        'Provide varied feedback: celebrate effort and progress, not just correct answers, and always frame mistakes as learning opportunities.',
      ],
      ar: [
        'استخدم المنهج السقراطي كنهج تعليمي افتراضي: اطرح أسئلة توجيهية، وقدم تلميحات، ودع الطلاب يكتشفون الإجابات بأنفسهم لفهم أعمق.',
        'احتفظ بملفات طلاب دائمة عبر الجلسات لتتبع مستويات الإتقان وأنماط التعلم والمفاهيم الخاطئة بمرور الوقت.',
        'نفّذ التكرار المتباعد بإعادة زيارة المفاهيم المتعلمة سابقاً بفترات متزايدة لتعزيز الاحتفاظ طويل المدى.',
        'قدم تغذية راجعة متنوعة: احتفِ بالجهد والتقدم، وليس فقط الإجابات الصحيحة، وصِغ الأخطاء دائماً كفرص تعلم.',
      ],
    },
    references: [
      { title: 'Khan Academy AI Tutor - Khanmigo', url: 'https://www.khanacademy.org/khan-labs' },
      { title: 'Bayesian Knowledge Tracing Paper', url: 'https://www.cs.cmu.edu/~ggordon/yudelson-koedinger-gordon-individualized-bayesian-knowledge-tracing.pdf' },
      { title: 'Socratic Method in Education', url: 'https://en.wikipedia.org/wiki/Socratic_method' },
    ],
    quiz: [
      {
        id: 'batch10-q17',
        question: {
          en: 'What is the core principle of the Socratic method in AI tutoring?',
          ar: 'ما هو المبدأ الأساسي للمنهج السقراطي في التدريس بالذكاء الاصطناعي؟',
        },
        options: {
          en: [
            'Providing detailed written answers to every question',
            'Guiding students to discover answers through carefully crafted questions',
            'Testing students with multiple-choice quizzes only',
            'Lecturing students with long explanations',
          ],
          ar: [
            'تقديم إجابات مكتوبة مفصلة لكل سؤال',
            'توجيه الطلاب لاكتشاف الإجابات من خلال أسئلة مصاغة بعناية',
            'اختبار الطلاب بأسئلة الاختيار المتعدد فقط',
            'إلقاء محاضرات على الطلاب بشروحات طويلة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'The Socratic method guides students through carefully crafted questions that lead them to discover the answer themselves, building deeper understanding and critical thinking skills rather than passive information consumption.',
          ar: 'المنهج السقراطي يوجه الطلاب من خلال أسئلة مصاغة بعناية تقودهم لاكتشاف الإجابة بأنفسهم، مما يبني فهماً أعمق ومهارات تفكير نقدي بدلاً من الاستهلاك السلبي للمعلومات.',
        },
      },
      {
        id: 'batch10-q18',
        question: {
          en: 'What is "adaptive learning" in the context of AI tutoring?',
          ar: 'ما هو "التعلم التكيفي" في سياق التدريس بالذكاء الاصطناعي؟',
        },
        options: {
          en: [
            'Teaching all students the same content at the same pace',
            'Adjusting difficulty, pacing, and content based on each student\'s current knowledge state',
            'Only teaching students who are already advanced',
            'Using the same textbook for every lesson',
          ],
          ar: [
            'تعليم جميع الطلاب نفس المحتوى بنفس السرعة',
            'تعديل الصعوبة والسرعة والمحتوى بناءً على حالة معرفة كل طالب الحالية',
            'تعليم الطلاب المتقدمين فقط',
            'استخدام نفس الكتاب لكل درس',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Adaptive learning personalizes the educational experience by dynamically adjusting difficulty, pacing, content type, and scaffolding based on continuous assessment of each student\'s current knowledge state, strengths, and weaknesses.',
          ar: 'التعلم التكيفي يُخصّص التجربة التعليمية عن طريق تعديل الصعوبة والسرعة ونوع المحتوى والتدرج ديناميكياً بناءً على التقييم المستمر لحالة معرفة كل طالب ونقاط قوته وضعفه.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. Autonomous Browser Agent
  // ─────────────────────────────────────────────
  'autonomous-browser-agent': {
    beginnerDefinition: {
      en: 'An autonomous browser agent is an AI that can control a web browser just like a human would — clicking buttons, filling out forms, navigating between pages, reading content, and extracting information. Given a high-level goal like "Find the cheapest flight from London to Tokyo for next Monday," the agent opens a browser, navigates to travel websites, enters search criteria, compares results, and returns the best options — all without human intervention.',
      ar: 'وكيل المتصفح المستقل هو ذكاء اصطناعي يمكنه التحكم في متصفح ويب تماماً كما يفعل الإنسان — النقر على الأزرار، وملء النماذج، والتنقل بين الصفحات، وقراءة المحتوى، واستخراج المعلومات. بإعطائه هدفاً عالي المستوى مثل "ابحث عن أرخص رحلة من لندن إلى طوكيو ليوم الإثنين القادم"، يفتح الوكيل متصفحاً، وينتقل إلى مواقع السفر، ويدخل معايير البحث، ويقارن النتائج، ويعيد أفضل الخيارات — كل ذلك بدون تدخل بشري.',
    },
    technicalDefinition: {
      en: 'An autonomous browser agent combines an LLM reasoning core with browser automation frameworks (Playwright, Puppeteer, or Selenium) to perform web-based tasks programmatically. The architecture includes a visual perception layer (processing screenshots or DOM snapshots to understand page state), an action space definition (click, type, scroll, navigate, wait, extract), a planning module (decomposing high-level goals into sequences of browser actions), and a feedback loop (observing page changes after each action and replanning if needed). Advanced implementations use accessibility trees and structured DOM representations instead of raw screenshots for more reliable element targeting. Projects like WebArena, BrowserGym, and tools like Playwright MCP provide benchmarks and infrastructure for building these agents.',
      ar: 'وكيل المتصفح المستقل يجمع بين نواة استدلال LLM وأطر أتمتة المتصفح (Playwright أو Puppeteer أو Selenium) لأداء المهام المبنية على الويب برمجياً. تتضمن البنية طبقة إدراك بصري (معالجة لقطات الشاشة أو لقطات DOM لفهم حالة الصفحة)، وتعريف فضاء الإجراءات (النقر، الكتابة، التمرير، التنقل، الانتظار، الاستخراج)، ووحدة تخطيط (تفكيك الأهداف عالية المستوى إلى تسلسلات من إجراءات المتصفح)، وحلقة تغذية راجعة (مراقبة تغييرات الصفحة بعد كل إجراء وإعادة التخطيط إذا لزم الأمر). التطبيقات المتقدمة تستخدم أشجار إمكانية الوصول وتمثيلات DOM المنظمة بدلاً من لقطات الشاشة الخام لاستهداف العناصر بشكل أكثر موثوقية. مشاريع مثل WebArena وBrowserGym وأدوات مثل Playwright MCP توفر معايير وبنية تحتية لبناء هذه الوكلاء.',
    },
    analogy: {
      en: 'An autonomous browser agent is like hiring a remote assistant who shares their screen with you. You tell them "Book me a table for two at an Italian restaurant near downtown for Friday evening." You watch as they open a restaurant booking site, type in the search criteria, scroll through options, read reviews, select the best match, fill in your details, and confirm the reservation. The AI browser agent does exactly this, but instead of a human moving the mouse and typing, the LLM decides what to click, what to type, and how to navigate, while seeing the page through screenshots or DOM analysis.',
      ar: 'وكيل المتصفح المستقل مثل توظيف مساعد عن بُعد يشارك شاشته معك. تخبره "احجز لي طاولة لشخصين في مطعم إيطالي قرب وسط المدينة مساء الجمعة." تشاهده وهو يفتح موقع حجز مطاعم، ويكتب معايير البحث، ويمرر بين الخيارات، ويقرأ المراجعات، ويختار أفضل تطابق، ويملأ تفاصيلك، ويؤكد الحجز. وكيل المتصفح الذكي يفعل نفس الشيء بالضبط، لكن بدلاً من إنسان يحرك الماوس ويكتب، يقرر LLM أين ينقر وماذا يكتب وكيف يتنقل، بينما يرى الصفحة عبر لقطات الشاشة أو تحليل DOM.',
    },
    explanation: {
      en: [
        'Autonomous browser agents address a fundamental limitation of traditional AI agents: most of the world\'s information and services live on websites that are designed for human interaction, not API access. While APIs are the preferred integration method, many websites do not offer APIs, or their APIs are limited. Browser agents can interact with any website just as a human would, unlocking automation for tasks like web research, price comparison, form submission, data extraction, and online transactions.',
        'The perception layer is how the agent "sees" the web page. There are two main approaches: screenshot-based (sending a screenshot to a VLM like GPT-4V to identify elements and understand page layout) and DOM-based (parsing the page\'s HTML/accessibility tree to get a structured representation of all interactive elements). DOM-based approaches are generally more reliable and efficient — the agent gets clean element labels, coordinates, and types without the ambiguity of visual interpretation. Many implementations use a hybrid approach: DOM for element identification and screenshots for visual context.',
        'The action space defines what the browser agent can do. Common actions include: click(element) to click a button or link, type(element, text) to fill in a form field, scroll(direction) to navigate the page, navigate(url) to go to a URL, wait(condition) to wait for a page to load, and extract(selector) to pull data from the page. The LLM generates a sequence of these actions based on its understanding of the current page state and the overall goal. Each action changes the page state, and the agent observes the result before deciding the next action.',
        'Planning and error recovery are essential because web interactions are unpredictable. Pages load slowly, pop-ups appear, CAPTCHAs block access, layouts change, and actions can fail. The agent must decompose high-level goals into sub-tasks, track progress toward each sub-task, detect when an action fails (page did not change, error message appeared, element not found), and replan when necessary. Robust agents implement retry logic, alternative navigation paths, and graceful failure handling.',
        'Safety and ethics are critical considerations for browser agents. These agents can interact with real websites and make real transactions, so they need appropriate guardrails: confirmation prompts before financial transactions, restrictions on accessing sensitive accounts, rate limiting to avoid overwhelming websites, and respect for robots.txt and terms of service. Many implementations operate in a supervised mode where the agent proposes actions and waits for human approval before executing sensitive operations.',
      ],
      ar: [
        'وكلاء المتصفح المستقلين يعالجون قيداً أساسياً لوكلاء الذكاء الاصطناعي التقليديين: معظم معلومات وخدمات العالم موجودة على مواقع ويب مصممة للتفاعل البشري وليس للوصول عبر API. بينما واجهات API هي طريقة التكامل المفضلة، العديد من المواقع لا تقدم واجهات API، أو واجهاتها محدودة. وكلاء المتصفح يمكنهم التفاعل مع أي موقع ويب تماماً كما يفعل الإنسان، مما يفتح الأتمتة لمهام مثل البحث على الويب ومقارنة الأسعار وإرسال النماذج واستخراج البيانات والمعاملات عبر الإنترنت.',
        'طبقة الإدراك هي كيف "يرى" الوكيل صفحة الويب. هناك نهجان رئيسيان: قائم على لقطات الشاشة (إرسال لقطة شاشة إلى VLM مثل GPT-4V لتحديد العناصر وفهم تخطيط الصفحة) وقائم على DOM (تحليل HTML/شجرة إمكانية الوصول للصفحة للحصول على تمثيل منظم لجميع العناصر التفاعلية). الأساليب القائمة على DOM أكثر موثوقية وكفاءة عموماً — يحصل الوكيل على تسميات عناصر نظيفة وإحداثيات وأنواع بدون غموض التفسير البصري. العديد من التطبيقات تستخدم نهجاً هجيناً: DOM لتحديد العناصر ولقطات الشاشة للسياق البصري.',
        'فضاء الإجراءات يحدد ما يمكن لوكيل المتصفح فعله. الإجراءات الشائعة تشمل: click(element) للنقر على زر أو رابط، وtype(element, text) لملء حقل نموذج، وscroll(direction) للتنقل في الصفحة، وnavigate(url) للذهاب إلى عنوان URL، وwait(condition) لانتظار تحميل الصفحة، وextract(selector) لسحب البيانات من الصفحة. يولد LLM تسلسلاً من هذه الإجراءات بناءً على فهمه لحالة الصفحة الحالية والهدف العام. كل إجراء يغير حالة الصفحة، ويراقب الوكيل النتيجة قبل تقرير الإجراء التالي.',
        'التخطيط والتعافي من الأخطاء ضروريان لأن التفاعلات على الويب غير متوقعة. الصفحات تُحمَّل ببطء، والنوافذ المنبثقة تظهر، وCAPTCHAs تحظر الوصول، والتخطيطات تتغير، والإجراءات قد تفشل. يجب على الوكيل تفكيك الأهداف عالية المستوى إلى مهام فرعية، وتتبع التقدم نحو كل مهمة فرعية، وكشف فشل الإجراء (الصفحة لم تتغير، ظهرت رسالة خطأ، العنصر غير موجود)، وإعادة التخطيط عند الضرورة. الوكلاء المتينون ينفذون منطق إعادة المحاولة، ومسارات تنقل بديلة، ومعالجة فشل سلسة.',
        'السلامة والأخلاقيات هي اعتبارات حاسمة لوكلاء المتصفح. هذه الوكلاء يمكنها التفاعل مع مواقع ويب حقيقية وإجراء معاملات حقيقية، لذا تحتاج حواجز حماية مناسبة: مطالبات تأكيد قبل المعاملات المالية، وقيود على الوصول إلى الحسابات الحساسة، وتحديد معدل لتجنب إثقال المواقع، واحترام robots.txt وشروط الخدمة. العديد من التطبيقات تعمل في وضع مُشرَف حيث يقترح الوكيل الإجراءات وينتظر موافقة بشرية قبل تنفيذ العمليات الحساسة.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from playwright.sync_api import sync_playwright
from openai import OpenAI
import base64, json

client = OpenAI()

def get_page_state(page) -> str:
    """Extract accessible elements from the page DOM."""
    return page.evaluate("""() => {
        const elements = [];
        document.querySelectorAll('a, button, input, select, textarea')
            .forEach((el, i) => {
                elements.push({
                    id: i,
                    tag: el.tagName,
                    text: el.textContent?.trim().slice(0, 50),
                    type: el.type || '',
                    placeholder: el.placeholder || '',
                    href: el.href || '',
                });
            });
        return JSON.stringify(elements, null, 2);
    }""")

def browser_agent(goal: str):
    """Autonomous browser agent that navigates the web to achieve a goal."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto("https://www.google.com")

        for step in range(10):  # Max 10 steps
            # Get current page state
            page_state = get_page_state(page)
            screenshot = page.screenshot()
            img_b64 = base64.b64encode(screenshot).decode()

            # Ask LLM to decide the next action
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[{
                    "role": "user",
                    "content": [
                        {"type": "text", "text": (
                            f"Goal: {goal}\\n"
                            f"Step: {step+1}/10\\n"
                            f"Page URL: {page.url}\\n"
                            f"Elements: {page_state}\\n\\n"
                            "Respond with JSON: "
                            '{"action": "click|type|navigate|done", '
                            '"element_id": N, "value": "text", '
                            '"reasoning": "why"}'
                        )},
                        {"type": "image_url",
                         "image_url": {"url": f"data:image/png;base64,{img_b64}"}}
                    ]
                }],
                response_format={"type": "json_object"},
            )

            action = json.loads(response.choices[0].message.content)
            print(f"Step {step+1}: {action['reasoning']}")

            if action["action"] == "done":
                print("Goal achieved!")
                break
            # Execute the action on the page...

        browser.close()

browser_agent("Search for the weather in Tokyo tomorrow")`,
      description: {
        en: 'An autonomous browser agent using Playwright for browser control and GPT-4o for decision-making. It extracts interactive elements from the DOM, takes screenshots for visual context, and iteratively performs actions to achieve a user-specified goal.',
        ar: 'وكيل متصفح مستقل يستخدم Playwright للتحكم بالمتصفح وGPT-4o لاتخاذ القرارات. يستخرج العناصر التفاعلية من DOM، ويأخذ لقطات شاشة للسياق البصري، وينفذ إجراءات بشكل تكراري لتحقيق هدف محدد من المستخدم.',
      },
    },
    commonMistakes: {
      en: [
        'Relying solely on screenshots for element identification, which is slow, expensive, and less reliable than DOM/accessibility tree parsing.',
        'Not implementing proper wait conditions, causing the agent to act on pages that have not finished loading, leading to missed elements and failed actions.',
        'Allowing the agent to perform unrestricted financial transactions or account modifications without human confirmation steps.',
        'Ignoring website terms of service and rate limits, which can lead to IP bans and legal issues.',
      ],
      ar: [
        'الاعتماد فقط على لقطات الشاشة لتحديد العناصر، وهو بطيء ومكلف وأقل موثوقية من تحليل DOM/شجرة إمكانية الوصول.',
        'عدم تنفيذ شروط انتظار مناسبة، مما يجعل الوكيل يتصرف على صفحات لم تنتهِ من التحميل، مما يؤدي إلى عناصر مفقودة وإجراءات فاشلة.',
        'السماح للوكيل بإجراء معاملات مالية أو تعديلات حساب غير مقيدة بدون خطوات تأكيد بشرية.',
        'تجاهل شروط خدمة المواقع وحدود المعدل، مما قد يؤدي إلى حظر IP ومشاكل قانونية.',
      ],
    },
    bestPractices: {
      en: [
        'Use DOM and accessibility tree parsing as the primary perception method, supplemented by screenshots for visual context when needed.',
        'Implement robust wait conditions (wait for network idle, element visibility, page load) before attempting to interact with page elements.',
        'Add human-in-the-loop confirmation for sensitive actions like purchases, account changes, and form submissions with personal data.',
        'Build comprehensive error recovery: detect failed actions, implement retries with alternative selectors, and maintain a fallback strategy for when navigation gets stuck.',
      ],
      ar: [
        'استخدم تحليل DOM وشجرة إمكانية الوصول كطريقة إدراك أساسية، مُعزَّزة بلقطات الشاشة للسياق البصري عند الحاجة.',
        'نفّذ شروط انتظار متينة (انتظار خمول الشبكة، ظهور العنصر، تحميل الصفحة) قبل محاولة التفاعل مع عناصر الصفحة.',
        'أضف تأكيداً بشرياً للإجراءات الحساسة مثل المشتريات وتغييرات الحساب وإرسال النماذج بالبيانات الشخصية.',
        'ابنِ تعافياً شاملاً من الأخطاء: اكتشف الإجراءات الفاشلة، ونفّذ إعادة المحاولة بمُحدِّدات بديلة، واحتفظ باستراتيجية بديلة عندما يتعطل التنقل.',
      ],
    },
    references: [
      { title: 'Playwright Documentation', url: 'https://playwright.dev/docs/intro' },
      { title: 'WebArena Benchmark - CMU', url: 'https://webarena.dev/' },
      { title: 'BrowserGym - ServiceNow', url: 'https://github.com/ServiceNow/BrowserGym' },
    ],
    quiz: [
      {
        id: 'batch10-q19',
        question: {
          en: 'What are the two main approaches for a browser agent to perceive a web page?',
          ar: 'ما هما النهجان الرئيسيان لوكيل المتصفح لإدراك صفحة ويب؟',
        },
        options: {
          en: [
            'Audio analysis and text parsing',
            'Screenshot-based (VLM) and DOM-based (accessibility tree parsing)',
            'API calls and database queries',
            'Keyboard shortcuts and mouse tracking',
          ],
          ar: [
            'تحليل الصوت وتحليل النص',
            'قائم على لقطات الشاشة (VLM) وقائم على DOM (تحليل شجرة إمكانية الوصول)',
            'استدعاءات API واستعلامات قاعدة البيانات',
            'اختصارات لوحة المفاتيح وتتبع الماوس',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Browser agents use two main perception approaches: screenshot-based (sending page screenshots to a VLM for visual understanding) and DOM-based (parsing the page\'s HTML/accessibility tree for structured element data). DOM-based is more reliable; many agents use a hybrid of both.',
          ar: 'وكلاء المتصفح يستخدمون نهجين إدراكيين رئيسيين: قائم على لقطات الشاشة (إرسال لقطات الصفحة إلى VLM للفهم البصري) وقائم على DOM (تحليل HTML/شجرة إمكانية الوصول للصفحة للحصول على بيانات عناصر منظمة). القائم على DOM أكثر موثوقية؛ العديد من الوكلاء يستخدمون مزيجاً من كليهما.',
        },
      },
      {
        id: 'batch10-q20',
        question: {
          en: 'Why is human-in-the-loop confirmation important for autonomous browser agents?',
          ar: 'لماذا يعتبر التأكيد البشري مهماً لوكلاء المتصفح المستقلين؟',
        },
        options: {
          en: [
            'Because AI cannot read web pages accurately',
            'Because browser agents interact with real websites and can make real transactions with real consequences',
            'Because it makes the agent faster',
            'Because web browsers require human authentication for every page',
          ],
          ar: [
            'لأن الذكاء الاصطناعي لا يستطيع قراءة صفحات الويب بدقة',
            'لأن وكلاء المتصفح يتفاعلون مع مواقع حقيقية ويمكنهم إجراء معاملات حقيقية بعواقب حقيقية',
            'لأنه يجعل الوكيل أسرع',
            'لأن متصفحات الويب تتطلب مصادقة بشرية لكل صفحة',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Unlike sandboxed environments, browser agents operate on real websites where actions have real consequences — financial transactions, account changes, data submissions. Human confirmation gates prevent the agent from making costly mistakes or unauthorized actions.',
          ar: 'على عكس البيئات المعزولة، يعمل وكلاء المتصفح على مواقع حقيقية حيث الإجراءات لها عواقب حقيقية — معاملات مالية، تغييرات حسابات، إرسال بيانات. بوابات التأكيد البشري تمنع الوكيل من ارتكاب أخطاء مكلفة أو إجراءات غير مصرح بها.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 11. Digital Workers
  // ─────────────────────────────────────────────
  'digital-workers': {
    beginnerDefinition: {
      en: 'Digital workers are AI agents that automate entire business processes from start to finish. Unlike simple chatbots or single-task tools, digital workers handle complete workflows — receiving an invoice, extracting data from it, validating it against purchase orders, routing it for approval, entering it into the accounting system, and scheduling payment. They are essentially AI employees that can handle repetitive, rules-based business processes autonomously, freeing human workers for creative and strategic tasks.',
      ar: 'العمال الرقميون هم وكلاء ذكاء اصطناعي يؤتمتون عمليات تجارية كاملة من البداية إلى النهاية. على عكس روبوتات المحادثة البسيطة أو أدوات المهمة الواحدة، يتعامل العمال الرقميون مع سير عمل كاملة — استلام فاتورة، واستخراج البيانات منها، والتحقق منها مقابل أوامر الشراء، وتوجيهها للموافقة، وإدخالها في نظام المحاسبة، وجدولة الدفع. هم في الأساس موظفون بالذكاء الاصطناعي يمكنهم التعامل مع العمليات التجارية المتكررة القائمة على القواعد بشكل مستقل، مما يحرر العمال البشريين للمهام الإبداعية والاستراتيجية.',
    },
    technicalDefinition: {
      en: 'Digital workers are composite AI agent systems that orchestrate end-to-end business process automation by integrating LLM-based reasoning with Robotic Process Automation (RPA), document understanding (OCR, document AI), enterprise system integration (ERP, CRM, HRIS via APIs), workflow orchestration engines, and human-in-the-loop approval mechanisms. They operate on structured process definitions (BPMN-compatible workflows) enhanced with AI decision-making at judgment points. Key capabilities include intelligent document processing (IDP), cross-system data synchronization, exception handling with human escalation, audit trail generation, and SLA-aware process monitoring. Unlike traditional RPA bots that follow rigid scripts, digital workers use LLMs to handle unstructured data, make contextual decisions, and adapt to process variations.',
      ar: 'العمال الرقميون هم أنظمة وكلاء ذكاء اصطناعي مركبة تنسق أتمتة عمليات الأعمال من طرف إلى طرف عبر دمج الاستدلال القائم على LLM مع أتمتة العمليات الروبوتية (RPA)، وفهم المستندات (OCR، ذكاء المستندات)، وتكامل أنظمة المؤسسة (ERP، CRM، HRIS عبر واجهات البرمجة)، ومحركات تنسيق سير العمل، وآليات الموافقة البشرية. تعمل على تعريفات عمليات منظمة (سير عمل متوافق مع BPMN) مُعزَّزة باتخاذ قرارات ذكاء اصطناعي عند نقاط الحكم. تشمل القدرات الرئيسية معالجة المستندات الذكية (IDP)، ومزامنة البيانات عبر الأنظمة، ومعالجة الاستثناءات مع التصعيد البشري، وتوليد مسار التدقيق، ومراقبة العمليات المدركة لاتفاقيات مستوى الخدمة. على عكس روبوتات RPA التقليدية التي تتبع سكريبتات جامدة، يستخدم العمال الرقميون LLMs للتعامل مع البيانات غير المنظمة واتخاذ قرارات سياقية والتكيف مع اختلافات العمليات.',
    },
    analogy: {
      en: 'Think of the evolution from hand tools to power tools to fully automated factories. Traditional software is like a hand tool — useful for one specific task. RPA bots are like power tools — they automate repetitive motions but still need someone to guide them along a fixed path. Digital workers are like smart factory robots — they understand the entire production process, can handle variations in raw materials, make quality decisions, coordinate with other machines, and only call a human supervisor when something truly unusual happens. They do not just automate individual tasks; they own and manage entire workflows end-to-end.',
      ar: 'فكر في التطور من الأدوات اليدوية إلى الأدوات الكهربائية إلى المصانع المؤتمتة بالكامل. البرمجيات التقليدية مثل أداة يدوية — مفيدة لمهمة واحدة محددة. روبوتات RPA مثل أدوات كهربائية — تؤتمت الحركات المتكررة لكنها لا تزال تحتاج شخصاً لتوجيهها على مسار ثابت. العمال الرقميون مثل روبوتات المصنع الذكية — يفهمون عملية الإنتاج بالكامل، ويمكنهم التعامل مع اختلافات المواد الخام، واتخاذ قرارات الجودة، والتنسيق مع آلات أخرى، واستدعاء مشرف بشري فقط عندما يحدث شيء غير عادي حقاً. لا يؤتمتون المهام الفردية فحسب؛ بل يمتلكون ويديرون سير العمل الكاملة من طرف إلى طرف.',
    },
    explanation: {
      en: [
        'Digital workers represent the convergence of several technologies: Large Language Models (for understanding unstructured data and making contextual decisions), Robotic Process Automation (for interacting with legacy systems and UIs), Document AI (for extracting information from invoices, contracts, forms), workflow engines (for orchestrating multi-step processes), and enterprise APIs (for integrating with ERP, CRM, HRIS systems). This combination creates AI systems that can handle complete business processes that previously required human workers.',
        'A key differentiator between digital workers and traditional RPA is the ability to handle unstructured data and exceptions. Traditional RPA bots break when they encounter an invoice with a different format, an email with unusual phrasing, or a process step that does not match the script. Digital workers use LLMs to understand context, interpret variations, and make judgment calls. For example, when processing an invoice that does not match any purchase order exactly but clearly corresponds to a known order with minor discrepancies, a digital worker can reason about the match and proceed (or escalate) intelligently.',
        'Intelligent Document Processing (IDP) is a core capability of digital workers. Using a combination of OCR, layout analysis, and LLM-based extraction, digital workers can process diverse document types: invoices, purchase orders, contracts, receipts, medical records, insurance claims, and compliance forms. They extract structured data (dates, amounts, names, line items) from unstructured documents with high accuracy and can handle variations in format, layout, and language across different vendors and document types.',
        'Workflow orchestration in digital workers follows process definitions that combine automated steps with human approval gates. A typical accounts payable workflow might be: receive invoice (email monitoring) → extract data (document AI) → match to PO (database lookup) → validate amounts (rules engine) → route for approval (based on amount thresholds and department) → human approval (if above threshold) → create payment entry (ERP integration) → schedule payment (banking API). The digital worker manages this entire flow, handling exceptions, sending reminders, and maintaining audit trails.',
        'Enterprise deployment of digital workers requires careful attention to security, compliance, and change management. Digital workers need appropriate access credentials for each system they interact with (following least-privilege principles), comprehensive audit logging for regulatory compliance, error handling and human escalation procedures, performance monitoring and SLA tracking, and gradual rollout with parallel running alongside human workers to build confidence. Organizations typically start with high-volume, rules-based processes (invoice processing, employee onboarding, report generation) and gradually expand to more complex workflows as trust in the digital worker grows.',
      ],
      ar: [
        'العمال الرقميون يمثلون تقارب عدة تقنيات: نماذج اللغة الكبيرة (لفهم البيانات غير المنظمة واتخاذ قرارات سياقية)، وأتمتة العمليات الروبوتية (للتفاعل مع الأنظمة القديمة وواجهات المستخدم)، وذكاء المستندات (لاستخراج المعلومات من الفواتير والعقود والنماذج)، ومحركات سير العمل (لتنسيق العمليات متعددة الخطوات)، وواجهات برمجة المؤسسة (للتكامل مع أنظمة ERP وCRM وHRIS). هذا المزيج يُنشئ أنظمة ذكاء اصطناعي يمكنها التعامل مع عمليات تجارية كاملة كانت تتطلب سابقاً عمالاً بشريين.',
        'عامل تمييز رئيسي بين العمال الرقميين وRPA التقليدي هو القدرة على التعامل مع البيانات غير المنظمة والاستثناءات. روبوتات RPA التقليدية تتعطل عندما تواجه فاتورة بتنسيق مختلف، أو بريد إلكتروني بصياغة غير معتادة، أو خطوة عملية لا تطابق السكريبت. العمال الرقميون يستخدمون LLMs لفهم السياق وتفسير الاختلافات واتخاذ قرارات حُكمية. مثلاً، عند معالجة فاتورة لا تطابق أي أمر شراء بالضبط لكنها تتوافق بوضوح مع طلب معروف مع اختلافات طفيفة، يمكن للعامل الرقمي الاستدلال حول التطابق والمتابعة (أو التصعيد) بذكاء.',
        'معالجة المستندات الذكية (IDP) هي قدرة أساسية للعمال الرقميين. باستخدام مزيج من OCR وتحليل التخطيط والاستخراج القائم على LLM، يمكن للعمال الرقميين معالجة أنواع مستندات متنوعة: الفواتير، وأوامر الشراء، والعقود، والإيصالات، والسجلات الطبية، ومطالبات التأمين، ونماذج الامتثال. يستخرجون بيانات منظمة (تواريخ، مبالغ، أسماء، بنود) من مستندات غير منظمة بدقة عالية ويمكنهم التعامل مع اختلافات في التنسيق والتخطيط واللغة عبر بائعين وأنواع مستندات مختلفة.',
        'تنسيق سير العمل في العمال الرقميين يتبع تعريفات عمليات تجمع بين الخطوات الآلية وبوابات الموافقة البشرية. سير عمل حسابات الدفع النموذجي قد يكون: استلام الفاتورة (مراقبة البريد الإلكتروني) ← استخراج البيانات (ذكاء المستندات) ← المطابقة مع أمر الشراء (بحث قاعدة بيانات) ← التحقق من المبالغ (محرك قواعد) ← التوجيه للموافقة (بناءً على حدود المبالغ والقسم) ← الموافقة البشرية (إذا فوق الحد) ← إنشاء قيد دفع (تكامل ERP) ← جدولة الدفع (واجهة بنكية). يدير العامل الرقمي هذا التدفق بالكامل، يتعامل مع الاستثناءات، ويرسل تذكيرات، ويحافظ على مسارات التدقيق.',
        'نشر العمال الرقميين في المؤسسات يتطلب اهتماماً دقيقاً بالأمان والامتثال وإدارة التغيير. يحتاج العمال الرقميون إلى بيانات اعتماد وصول مناسبة لكل نظام يتفاعلون معه (اتباع مبادئ الامتياز الأدنى)، وتسجيل تدقيق شامل للامتثال التنظيمي، وإجراءات معالجة الأخطاء والتصعيد البشري، ومراقبة الأداء وتتبع اتفاقيات مستوى الخدمة، وطرح تدريجي مع تشغيل موازٍ جنباً إلى جنب مع العمال البشريين لبناء الثقة. تبدأ المنظمات عادةً بالعمليات عالية الحجم القائمة على القواعد (معالجة الفواتير، إعداد الموظفين، توليد التقارير) وتتوسع تدريجياً إلى سير عمل أكثر تعقيداً مع نمو الثقة في العامل الرقمي.',
      ],
    },
    codeExample: {
      language: 'python',
      code: `from openai import OpenAI
import json
from datetime import datetime

client = OpenAI()

# Digital worker tools for invoice processing
invoice_tools = [
    {
        "type": "function",
        "function": {
            "name": "extract_invoice_data",
            "description": "Extract structured data from an invoice document",
            "parameters": {
                "type": "object",
                "properties": {
                    "vendor": {"type": "string"},
                    "invoice_number": {"type": "string"},
                    "date": {"type": "string"},
                    "total_amount": {"type": "number"},
                    "line_items": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "description": {"type": "string"},
                                "quantity": {"type": "number"},
                                "unit_price": {"type": "number"},
                            },
                        },
                    },
                },
                "required": ["vendor", "invoice_number", "date",
                             "total_amount", "line_items"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "match_purchase_order",
            "description": "Match invoice against purchase orders in ERP",
            "parameters": {
                "type": "object",
                "properties": {
                    "vendor": {"type": "string"},
                    "amount": {"type": "number"},
                    "date_range": {"type": "string"},
                },
                "required": ["vendor", "amount"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "route_for_approval",
            "description": "Route invoice for human approval based on amount",
            "parameters": {
                "type": "object",
                "properties": {
                    "approver_email": {"type": "string"},
                    "invoice_summary": {"type": "string"},
                    "amount": {"type": "number"},
                    "urgency": {"type": "string",
                                "enum": ["normal", "urgent"]},
                },
                "required": ["approver_email", "invoice_summary", "amount"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "create_payment_entry",
            "description": "Create a payment entry in the accounting system",
            "parameters": {
                "type": "object",
                "properties": {
                    "vendor": {"type": "string"},
                    "amount": {"type": "number"},
                    "invoice_ref": {"type": "string"},
                    "payment_date": {"type": "string"},
                },
                "required": ["vendor", "amount", "invoice_ref",
                             "payment_date"],
            },
        },
    },
]

DIGITAL_WORKER_PROMPT = """You are a digital worker for accounts payable.

WORKFLOW:
1. Extract data from the invoice document
2. Match against purchase orders in the ERP system
3. If amount > $5,000: route for manager approval
4. If amount <= $5,000 and PO matches: create payment entry
5. If no PO match: flag for manual review

Always maintain an audit trail of every action taken."""

def process_invoice(invoice_text: str) -> str:
    messages = [
        {"role": "system", "content": DIGITAL_WORKER_PROMPT},
        {"role": "user", "content": f"Process this invoice:\\n{invoice_text}"},
    ]

    # Multi-step agent loop
    for step in range(5):
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=invoice_tools,
            tool_choice="auto",
        )
        msg = response.choices[0].message
        messages.append(msg)

        if not msg.tool_calls:
            return msg.content  # Final response

        for tc in msg.tool_calls:
            print(f"[Step {step+1}] {tc.function.name}: "
                  f"{tc.function.arguments}")
            # Simulate tool execution
            result = f"Executed {tc.function.name} successfully"
            messages.append({
                "role": "tool",
                "tool_call_id": tc.id,
                "content": result,
            })

    return "Invoice processing complete."

process_invoice("Invoice #INV-2024-0891 from Acme Corp, "
                "total $3,200 for 100 units of Widget A at $32 each")`,
      description: {
        en: 'A digital worker that automates invoice processing: extracting data, matching purchase orders, routing for approval based on amount thresholds, and creating payment entries — demonstrating end-to-end business process automation.',
        ar: 'عامل رقمي يؤتمت معالجة الفواتير: استخراج البيانات، ومطابقة أوامر الشراء، والتوجيه للموافقة بناءً على حدود المبالغ، وإنشاء قيود الدفع — مما يُظهر أتمتة عمليات الأعمال من طرف إلى طرف.',
      },
    },
    commonMistakes: {
      en: [
        'Trying to automate complex judgment-heavy processes before proving the concept on simpler, rules-based workflows.',
        'Not maintaining comprehensive audit trails, which is required for financial processes and regulatory compliance.',
        'Removing human oversight entirely instead of implementing appropriate approval gates for high-value or sensitive decisions.',
        'Building digital workers as monolithic systems instead of composable, modular agents that can be individually tested and updated.',
      ],
      ar: [
        'محاولة أتمتة عمليات معقدة كثيرة الأحكام قبل إثبات المفهوم على سير عمل أبسط قائم على القواعد.',
        'عدم الحفاظ على مسارات تدقيق شاملة، وهو مطلوب للعمليات المالية والامتثال التنظيمي.',
        'إزالة الإشراف البشري بالكامل بدلاً من تنفيذ بوابات موافقة مناسبة للقرارات عالية القيمة أو الحساسة.',
        'بناء العمال الرقميين كأنظمة متراصة بدلاً من وكلاء قابلة للتركيب ومعيارية يمكن اختبارها وتحديثها بشكل فردي.',
      ],
    },
    bestPractices: {
      en: [
        'Start with high-volume, rules-based processes (invoice processing, data entry, report generation) and expand to complex workflows as the system matures.',
        'Implement comprehensive audit logging for every action, decision, and data access for regulatory compliance and troubleshooting.',
        'Design with human-in-the-loop gates at critical decision points: financial approvals above thresholds, exception handling, and final sign-offs.',
        'Run digital workers in parallel with human workers during initial deployment to validate accuracy, build trust, and identify edge cases before full automation.',
      ],
      ar: [
        'ابدأ بالعمليات عالية الحجم القائمة على القواعد (معالجة الفواتير، إدخال البيانات، توليد التقارير) وتوسع إلى سير عمل معقدة مع نضج النظام.',
        'نفّذ تسجيل تدقيق شامل لكل إجراء وقرار ووصول للبيانات للامتثال التنظيمي واستكشاف الأخطاء.',
        'صمم مع بوابات بشرية عند نقاط القرار الحرجة: الموافقات المالية فوق الحدود، ومعالجة الاستثناءات، والتوقيعات النهائية.',
        'شغّل العمال الرقميين بالتوازي مع العمال البشريين أثناء النشر الأولي للتحقق من الدقة وبناء الثقة وتحديد الحالات الحدية قبل الأتمتة الكاملة.',
      ],
    },
    references: [
      { title: 'UiPath Digital Workers', url: 'https://www.uipath.com/rpa/robotic-process-automation' },
      { title: 'Automation Anywhere - Intelligent Automation', url: 'https://www.automationanywhere.com/' },
      { title: 'Microsoft Power Automate', url: 'https://powerautomate.microsoft.com/' },
    ],
    quiz: [
      {
        id: 'batch10-q21',
        question: {
          en: 'What is the key advantage of digital workers over traditional RPA bots?',
          ar: 'ما هي الميزة الرئيسية للعمال الرقميين مقارنة بروبوتات RPA التقليدية؟',
        },
        options: {
          en: [
            'They are cheaper to deploy',
            'They can handle unstructured data, make contextual decisions, and adapt to process variations using LLMs',
            'They do not need any software to run',
            'They work only with spreadsheets',
          ],
          ar: [
            'أنها أرخص في النشر',
            'يمكنها التعامل مع البيانات غير المنظمة واتخاذ قرارات سياقية والتكيف مع اختلافات العمليات باستخدام LLMs',
            'لا تحتاج أي برامج للعمل',
            'تعمل فقط مع جداول البيانات',
          ],
        },
        correctAnswer: 1,
        explanation: {
          en: 'Traditional RPA follows rigid scripts and breaks when encountering unexpected formats or variations. Digital workers use LLMs to understand unstructured data, interpret context, handle exceptions intelligently, and adapt to process variations without reprogramming.',
          ar: 'RPA التقليدي يتبع سكريبتات جامدة ويتعطل عند مواجهة تنسيقات أو اختلافات غير متوقعة. العمال الرقميون يستخدمون LLMs لفهم البيانات غير المنظمة وتفسير السياق ومعالجة الاستثناءات بذكاء والتكيف مع اختلافات العمليات بدون إعادة برمجة.',
        },
      },
      {
        id: 'batch10-q22',
        question: {
          en: 'What is the recommended approach when first deploying digital workers in an organization?',
          ar: 'ما هو النهج الموصى به عند نشر العمال الرقميين لأول مرة في منظمة؟',
        },
        options: {
          en: [
            'Replace all human workers immediately with digital workers',
            'Start with the most complex processes to show maximum value',
            'Run digital workers in parallel with human workers on high-volume, rules-based processes first',
            'Deploy without testing since AI is always accurate',
          ],
          ar: [
            'استبدال جميع العمال البشريين فوراً بعمال رقميين',
            'البدء بالعمليات الأكثر تعقيداً لإظهار أقصى قيمة',
            'تشغيل العمال الرقميين بالتوازي مع العمال البشريين على العمليات عالية الحجم القائمة على القواعد أولاً',
            'النشر بدون اختبار لأن الذكاء الاصطناعي دقيق دائماً',
          ],
        },
        correctAnswer: 2,
        explanation: {
          en: 'The recommended approach is to start with high-volume, rules-based processes and run digital workers in parallel with humans. This validates accuracy, builds organizational trust, identifies edge cases, and allows gradual expansion to more complex workflows as confidence grows.',
          ar: 'النهج الموصى به هو البدء بالعمليات عالية الحجم القائمة على القواعد وتشغيل العمال الرقميين بالتوازي مع البشر. هذا يتحقق من الدقة، ويبني الثقة التنظيمية، ويحدد الحالات الحدية، ويسمح بالتوسع التدريجي إلى سير عمل أكثر تعقيداً مع نمو الثقة.',
        },
      },
    ],
  },
};
