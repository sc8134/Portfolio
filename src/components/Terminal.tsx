import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// ── Fuzzy match helper ────────────────────────────────────────────────────────
// Levenshtein distance — finds closest command to what the user typed
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function findClosestCommand(input: string, commands: string[]): string | null {
  let best: string | null = null;
  let bestDist = Infinity;
  for (const cmd of commands) {
    const d = levenshtein(input, cmd);
    if (d < bestDist) { bestDist = d; best = cmd; }
  }
  return bestDist <= 4 ? best : null;
}

// ── AI Response Bank ──────────────────────────────────────────────────────────
const AI_RESPONSES: Record<string, string[]> = {
  help: [
    "Hi! I'm SARA — Sagar's AI Research Assistant. 👋",
    "I'm here to help you learn everything about Sagar RC.",
    "Here's what you can ask me:",
    '',
    "  sagar         ·  Who is Sagar RC, really?",
    "  skills        ·  What technologies does he work with?",
    "  projects      ·  What has he actually built?",
    "  education     ·  His academic background",
    "  experience    ·  His professional journey",
    "  personality   ·  What's he like to work with?",
    "  goals         ·  Where is he headed?",
    "  availability  ·  Is he open to work?",
    "  hire          ·  How to get in touch",
    "  philosophy    ·  His approach to software & life",
    "  fun-facts     ·  Things you wouldn't expect",
    "  surprise      ·  Let me pick something interesting",
    "  clear         ·  Reset the conversation",
    '',
    "Go ahead — type anything. I'm listening. 😊",
  ],

  sagar: [
    "Sagar RC is a Full Stack Developer from Kathmandu, Nepal.",
    '',
    "He's one of those developers who's genuinely comfortable on both",
    "ends of the stack — designing clean interfaces in the morning and",
    "architecting backend systems in the afternoon.",
    '',
    "He started his journey with Python, which gave him a strong",
    "foundation in logic and automation before he ever wrote a",
    "single line of JavaScript. That background shows in how he",
    "approaches problems — systematically and with purpose.",
    '',
    "He studied Computer Engineering at Cosmos College of Management",
    "& Technology, affiliated with Pokhara University (2022–2026).",
    "His journey: frontend freelance work from mid-2022, expanded",
    "into backend in 2024, and now builds full-stack products end-to-end.",
    '',
    "He believes great software is built at the intersection of",
    "clean code, genuine empathy for users, and relentless curiosity.",
    '',
    "In short: he's a builder. Not just a coder.",
  ],

  skills: [
    "Sagar's technical range is genuinely broad. Here's the honest breakdown:",
    '',
    "  Frontend",
    "  ─────────────────────────────────────────",
    "  React · Next.js · Angular · TypeScript",
    "  Tailwind CSS · Framer Motion · HTML/CSS",
    '',
    "  Backend",
    "  ─────────────────────────────────────────",
    "  Node.js · Python · Flask · FastAPI",
    "  REST APIs · WebSockets",
    '',
    "  Databases",
    "  ─────────────────────────────────────────",
    "  PostgreSQL · MongoDB · Redis · Firebase",
    "  Supabase · Prisma ORM",
    '',
    "  DevOps & Tools",
    "  ─────────────────────────────────────────",
    "  Docker · GitHub Actions · Vercel · Nginx",
    "  Git · Linux · CI/CD pipelines",
    '',
    "What sets him apart isn't just the list — it's that he picks",
    "the *right* tool for each job rather than forcing one stack.",
  ],

  projects: [
    "He's shipped 6 real, public projects. Here's what stands out:",
    '',
    "🎬  Nova DVR",
    "    Next-gen media hub — download, organize, and tag videos",
    "    with AI-powered metadata. TypeScript + Python backend.",
    "    Live → nova-dvr.vercel.app",
    '',
    "💼  Signal Job Portal",
    "    A full-stack job board connecting employers & job seekers",
    "    with a clean, intentional interface. TypeScript + Node.js.",
    '',
    "🤖  AI Reel Generator",
    "    Text prompt → short-form video reel with captions, music,",
    "    and custom templates. Fully automated Python pipeline.",
    '',
    "🌐  Namo Patro",
    "    Nepali digital calendar with BS/AD conversion, astrology,",
    "    festivals, and live radio. GPL-3.0 open source.",
    '',
    "🔐  Phishing Simulation Tool",
    "    Security awareness training platform. React + Flask.",
    "    Simulates phishing campaigns with analytics dashboard.",
    '',
    "🌟  Velora — Media Hub",
    "    AI-powered content discovery and media management.",
    "    TypeScript · Live → velora-six-gules.vercel.app",
    '',
    "All source code → github.com/sc8134",
  ],

  education: [
    "Sagar's academic background is in Computer Engineering.",
    '',
    "🎓  B.CE. Computer Engineering",
    "    Cosmos College of Management & Technology",
    "    Affiliated with Pokhara University",
    "    2021 – 2026 (in progress)",
    '',
    "His coursework covers software engineering, algorithms,",
    "data structures, operating systems, networking, and",
    "distributed systems.",
    '',
    "But what makes his education unique is that he never",
    "separated 'studying' from 'building'. The projects on his",
    "GitHub were born during the same years he was studying theory.",
    '',
    "He's the kind of student who applies concepts the same",
    "week he learns them — which means his knowledge is practical,",
    "not just theoretical.",
  ],

  experience: [
    "Sagar's professional journey is entirely project-driven.",
    '',
    "Rather than climbing the traditional internship ladder,",
    "he built his experience by shipping real products —",
    "products that are live, used, and on GitHub.",
    '',
    "Key milestones:",
    '',
    "  → Built and launched Nova DVR — a full-stack media",
    "    application with a live Vercel deployment.",
    '',
    "  → Created Signal Job Portal — a complete employer +",
    "    job-seeker platform with dual-role authentication.",
    '',
    "  → Developed an AI Reel Generator — an end-to-end",
    "    Python automation pipeline using OpenAI APIs.",
    '',
    "  → Open source contributor — Namo Patro (GPL-3.0)",
    "    serves the Nepali community globally.",
    '',
    "He's currently seeking his first professional role where",
    "he can bring this energy to a team.",
  ],

  personality: [
    "This is worth knowing before you consider working with him.",
    '',
    "Sagar is the kind of developer who asks 'why are we",
    "building this?' before 'how do we build this?' — which",
    "means the things he builds actually solve real problems.",
    '',
    "He communicates proactively. If something is blocked,",
    "he says so early. If he disagrees with a direction,",
    "he voices it clearly and respectfully.",
    '',
    "He's patient with complex problems. Debugging, for him,",
    "is a puzzle — not a frustration.",
    '',
    "He writes code like someone else will read it tomorrow.",
    "Clean naming, meaningful comments, sensible structure.",
    '',
    "And he's genuinely good company. The kind of teammate",
    "who ships on time AND leaves the codebase better than",
    "he found it.",
  ],

  goals: [
    "Sagar has a clear sense of where he wants to go.",
    '',
    "Short term (1–2 years):",
    "  → Land a meaningful role at a company building",
    "    products that actually matter to real people.",
    "  → Deepen his expertise in system design and",
    "    distributed architectures.",
    "  → Contribute more meaningfully to open source.",
    '',
    "Medium term (3–5 years):",
    "  → Lead engineering on a product he believes in.",
    "  → Build something for Nepal — technology that",
    "    directly serves his community.",
    '',
    "Long term:",
    "  → Represent Nepali tech talent on the global stage.",
    "  → Mentor the next generation of developers",
    "    coming out of Kathmandu.",
    '',
    "He's not chasing titles. He's chasing impact.",
  ],

  availability: [
    "Yes — Sagar is currently open to new opportunities. ✅",
    '',
    "He's actively looking for:",
    "  → Full-time roles (frontend, backend, or full-stack)",
    "  → Remote-first or hybrid positions",
    "  → Freelance or contract projects",
    "  → Internships that lead somewhere meaningful",
    '',
    "He's based in Kathmandu, Nepal (UTC+5:45) but is",
    "fully set up for remote work and open to relocation",
    "for the right opportunity.",
    '',
    "He responds to messages within 24 hours.",
    "Best way to reach him → type 'hire' for contact info.",
  ],

  hire: [
    "You're making a good call. Here's how to reach Sagar:",
    '',
    "📧  Email (fastest response)",
    "    sc81341@gmail.com",
    '',
    "💼  LinkedIn",
    "    linkedin.com/in/sagar-rc",
    '',
    "🐙  GitHub (see his work first)",
    "    github.com/sc8134",
    '',
    "🐦  X / Twitter",
    "    x.com/Sagarch05339168",
    '',
    "He's open to full-time roles, freelance work, and",
    "interesting collaborations. If you have something",
    "worth building — reach out. He'll respond.",
    '',
    "Response time: within 24 hours. Usually much faster.",
  ],

  philosophy: [
    "Sagar thinks about software in a way that's worth knowing.",
    '',
    "On code quality:",
    "  'Code is read far more than it's written.",
    "  Write for the person reading it next, not just",
    "  for the compiler running it today.'",
    '',
    "On building products:",
    "  'Features don't matter. Problems matter.",
    "  Every line of code should trace back to a",
    "  real human need.'",
    '',
    "On learning:",
    "  'The best way to understand something is to",
    "  build it. Then break it. Then rebuild it better.'",
    '',
    "On his craft:",
    "  'I want to be the kind of developer who makes",
    "  the people around them better — not just",
    "  the one who writes the most code.'",
  ],

  'fun-facts': [
    "A few things about Sagar that most people don't know:",
    '',
    "🐍  He learned Python before JavaScript.",
    "    He came from automation and scripting — not web dev.",
    "    That's why his backend work feels so natural.",
    '',
    "📷  He photographs the Himalayas on weekends.",
    "    Not as a hobby — as a genuine creative practice.",
    "    Mountains reset his brain after deep focus sessions.",
    '',
    "🌙  His most productive hours are 10PM to 2AM.",
    "    The city quiets down, lo-fi music starts playing,",
    "    and the code just flows.",
    '',
    "🎓  He's been shipping real products while still in college.",
    "    His GitHub portfolio wasn't built after graduation —",
    "    it was built *during* his degree.",
    '',
    "🇳🇵  He's proud to be from Kathmandu.",
    "    He wants to prove that great engineers come from",
    "    everywhere — not just Silicon Valley or London.",
  ],

  surprise: [
    "Alright, let me share something I think you'll find interesting.",
    '',
    "Sagar built Namo Patro — a Nepali digital calendar platform",
    "that handles Bikram Sambat (BS) to Gregorian (AD) conversion,",
    "astrology, Nepali festivals, and live radio.",
    '',
    "It's not the flashiest project on his list. But it's the one",
    "that means the most to him — because it's built *for* his",
    "community, in a language most global devs don't think about.",
    '',
    "It's GPL-3.0 licensed, open source, and built with TypeScript.",
    '',
    "That project, more than anything else, tells you what kind",
    "of developer — and person — Sagar is.",
    "He builds things that matter to real people.",
  ],
};

// ── Suggestion engine ─────────────────────────────────────────────────────────
const ALL_COMMANDS = Object.keys(AI_RESPONSES).concat(['clear']);

// Context-aware suggestions based on partial input
function getContextualSuggestion(input: string): string {
  const lower = input.toLowerCase();

  // Common intent mappings
  const intentMap: Record<string, string> = {
    who: 'sagar', 'who is': 'sagar', 'about': 'sagar',
    tech: 'skills', technology: 'skills', stack: 'skills', tools: 'skills',
    build: 'projects', built: 'projects', work: 'projects', portfolio: 'projects',
    study: 'education', college: 'education', university: 'education', degree: 'education',
    job: 'experience', career: 'experience', professional: 'experience',
    contact: 'hire', email: 'hire', reach: 'hire', connect: 'hire',
    available: 'availability', open: 'availability', looking: 'availability',
    fun: 'fun-facts', facts: 'fun-facts', interesting: 'surprise',
    think: 'philosophy', belief: 'philosophy', approach: 'philosophy',
    personality: 'personality', like: 'personality', team: 'personality',
    goal: 'goals', future: 'goals', plan: 'goals',
  };

  for (const [key, cmd] of Object.entries(intentMap)) {
    if (lower.includes(key)) return cmd;
  }

  // Fuzzy closest match
  const closest = findClosestCommand(lower, ALL_COMMANDS);
  return closest ?? 'help';
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface Message {
  id: number;
  role: 'user' | 'ai';
  lines: string[];
}

let msgId = 0;

// ── Component ─────────────────────────────────────────────────────────────────
export default function Terminal() {
  const ref = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);   // ← scroll container
  const inputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: msgId++,
      role: 'ai',
      lines: [
        "Hi there! I'm SARA — Sagar's AI Research Assistant. ✨",
        "I know everything about him. Ask me anything.",
        'Type "help" for a full list of what I can tell you.',
      ],
    },
  ]);

  // Scroll only the chat box — not the whole page
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const userMsg: Message = { id: msgId++, role: 'user', lines: [cmd.trim()] };

    if (trimmed === 'clear') {
      setMessages([{
        id: msgId++,
        role: 'ai',
        lines: ["Fresh start! Type \"help\" to explore Sagar again. 🌱"],
      }]);
      setInput('');
      return;
    }

    // Show user message immediately, then simulate SARA "typing"
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let responseLines: string[];

      if (AI_RESPONSES[trimmed]) {
        responseLines = AI_RESPONSES[trimmed];
      } else {
        const suggestion = getContextualSuggestion(trimmed);
        const suggestedResponse = AI_RESPONSES[suggestion] ?? AI_RESPONSES['help'];
        responseLines = [
          `I don't have an exact match for "${cmd.trim()}" — but I think I know what you're after. 🤔`,
          `Let me answer what I think you meant (try "${suggestion}" next time):`,
          '',
          ...suggestedResponse,
        ];
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: msgId++, role: 'ai', lines: responseLines },
      ]);
    }, 600);
  };

  return (
    <section
      id="terminal"
      ref={ref}
      className="py-24 bg-[#EDE6DF]"
      aria-labelledby="terminal-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold tracking-widest text-[#E8654A] uppercase">
            Easter Egg
          </span>
          <h2
            id="terminal-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E3A5F]"
          >
            Ask{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              SARA
            </span>
            {' '}about Sagar
          </h2>
          <p className="mt-2 text-sm text-[#4A6080]">
            An AI assistant that knows Sagar personally. Try{' '}
            <code className="bg-white px-1.5 py-0.5 rounded text-[#E8654A] text-xs font-mono border border-[#D9CFC5]">sagar</code>,{' '}
            <code className="bg-white px-1.5 py-0.5 rounded text-[#E8654A] text-xs font-mono border border-[#D9CFC5]">hire</code>,{' '}
            or just choose what you want to know.
          </p>
        </motion.div>

        {/* AI window */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Ambient glow behind the box */}
          <div
            className="absolute -inset-1 rounded-3xl blur-xl opacity-30"
            style={{ background: 'radial-gradient(ellipse at 40% 50%, #E8654A 0%, #1E3A5F 60%, transparent 100%)' }}
            aria-hidden="true"
          />

          <div
            className="relative rounded-2xl overflow-hidden border border-[#2B4D7A] shadow-2xl"
            style={{ boxShadow: '0 0 0 1px #1E3A5F, 0 25px 50px rgba(15,25,35,0.6)' }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* ── Title bar ── */}
            <div className="bg-gradient-to-r from-[#1E3A5F] to-[#16232F] px-5 py-3.5 flex items-center gap-3 border-b border-[#2B4D7A]">
              {/* Traffic lights */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E8654A] shadow-sm shadow-[#E8654A]/50" />
                <div className="w-3 h-3 rounded-full bg-[#F5C842] shadow-sm shadow-[#F5C842]/50" />
                <div className="w-3 h-3 rounded-full bg-[#4CAF50] shadow-sm shadow-[#4CAF50]/50" />
              </div>

              {/* Center label */}
              <div className="flex items-center gap-2 mx-auto">
                <div className="flex gap-0.5">
                  <span className="w-1 h-3 rounded-sm bg-[#E8654A] animate-pulse" />
                  <span className="w-1 h-3 rounded-sm bg-[#E8654A] animate-pulse [animation-delay:150ms]" />
                  <span className="w-1 h-3 rounded-sm bg-[#E8654A] animate-pulse [animation-delay:300ms]" />
                </div>
                <Sparkles size={13} className="text-[#E8654A]" />
                <span className="text-xs font-semibold text-[#C8D8E8] tracking-wide">
                  SARA — Sagar's AI Research Assistant
                </span>
              </div>

              {/* Status dot */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                <span className="text-[10px] text-[#4CAF50] font-medium">online</span>
              </div>
            </div>

            {/* ── Chat body ── */}
            <div
              ref={chatRef}
              className="bg-[#0A1520] px-5 pt-4 pb-3 h-96 overflow-y-auto space-y-5 scroll-smooth"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#243447 transparent' }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.role === 'user' ? (
                    /* User bubble — right aligned feel */
                    <div className="flex justify-end">
                      <div className="max-w-xs px-4 py-2.5 rounded-2xl rounded-tr-sm bg-[#1E3A5F] border border-[#2B4D7A]">
                        <p className="text-sm text-[#E8EDF2] font-mono">{msg.lines[0]}</p>
                      </div>
                    </div>
                  ) : (
                    /* SARA bubble — left with avatar */
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#E8654A] to-[#C04030] flex items-center justify-center shadow-md shadow-[#E8654A]/30">
                        <Sparkles size={12} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold text-[#E8654A] uppercase tracking-wider mb-1.5">SARA</p>
                        <div className="space-y-0.5 font-mono text-xs">
                          {msg.lines.map((line, li) => (
                            <div
                              key={li}
                              className={`leading-relaxed ${
                                line === ''
                                  ? 'h-1.5'
                                  : line.startsWith('  ') || line.startsWith('    ')
                                  ? 'text-[#7A9AB5] pl-3'
                                  : line.match(/^[🐍📷🌙🎓🇳🇵📧💼🐙🐦🎬🤖🌐🔐🌟✅]/)
                                  ? 'text-[#C8D8E8]'
                                  : line.startsWith('─')
                                  ? 'text-[#2B4D7A]'
                                  : line.startsWith("'") || line.startsWith('"')
                                  ? 'text-[#FFD43B] italic pl-1'
                                  : line.startsWith('On ')
                                  ? 'text-[#E8654A] font-semibold mt-1'
                                  : 'text-[#C8D8E8]'
                              }`}
                            >
                              {line || ''}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#E8654A] to-[#C04030] flex items-center justify-center shadow-md shadow-[#E8654A]/30">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="mt-2 flex gap-1.5 px-3 py-2 rounded-xl bg-[#16232F] border border-[#2B4D7A] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8654A] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8654A] animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8654A] animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* ── Input bar ── */}
            <div className="bg-[#0F1923] border-t border-[#1E3A5F] px-4 py-3 flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2 bg-[#16232F] rounded-xl px-4 py-2.5 border border-[#2B4D7A] focus-within:border-[#E8654A] transition-colors">
                <span className="text-[#E8654A] text-xs font-mono shrink-0">›</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(input); }}
                  className="flex-1 bg-transparent text-sm text-[#E8EDF2] outline-none caret-[#E8654A] placeholder-[#334D62] font-mono"
                  placeholder="ask me anything about sagar..."
                  aria-label="Ask SARA about Sagar"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <button
                onClick={() => handleSubmit(input)}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#E8654A] hover:bg-[#D45538] text-white text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-md shadow-[#E8654A]/20"
              >
                Ask
              </button>
            </div>

            {/* ── Quick prompt chips ── */}
            <div className="bg-[#0A1520] px-4 py-3 flex flex-wrap gap-2 border-t border-[#16232F]">
              <span className="text-[10px] text-[#334D62] font-mono mr-1 self-center">quick ask:</span>
              {['sagar', 'skills', 'projects', 'personality', 'goals', 'hire', 'philosophy', 'fun-facts', 'surprise'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleSubmit(cmd); }}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#16232F] text-[#7A9AB5] hover:bg-[#E8654A] hover:text-white transition-all border border-[#243447] hover:border-[#E8654A] hover:-translate-y-0.5"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
