import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const COMMANDS: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  whoami      — who is Sagar RC?',
    '  skills      — list tech stack',
    '  location    — where am I?',
    '  hobbies     — what do I do outside code?',
    '  contact     — how to reach me',
    '  clear       — clear terminal',
  ],
  whoami: [
    'Sagar RC — Full Stack Developer from Kathmandu, Nepal.',
    'B.CE. Computer Engineering @ Cosmos College / Pokhara University.',
    'Passionate about Python, React, and building things that matter.',
  ],
  skills: [
    'Frontend  → React, TypeScript, Next.js, Tailwind CSS',
    'Backend   → Node.js, Python, Flask, FastAPI',
    'Database  → PostgreSQL, MongoDB, Redis',
    'DevOps    → Docker, GitHub Actions, Vercel',
  ],
  location: [
    '📍 Kathmandu, Nepal',
    '🌐 Available for remote work worldwide',
    '✈️  Open to relocation for the right opportunity',
  ],
  hobbies: [
    '🐍 Python scripting & automation',
    '📷 Photography in the Himalayas',
    '📚 Reading about distributed systems',
    '🎵 Lo-fi music while coding at 2AM',
  ],
  contact: [
    'Email   → sc81341@gmail.com',
    'GitHub  → github.com/sc8134',
    'LinkedIn→ linkedin.com/in/sagar-rc',
    'Twitter → @SagarRC',
  ],
};

interface HistoryLine {
  type: 'input' | 'output' | 'error';
  text: string;
}

export default function Terminal() {
  const ref = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { type: 'output', text: 'Welcome to Sagar RC\'s terminal. Type "help" to get started.' },
  ]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: HistoryLine[] = [{ type: 'input', text: `> ${cmd}` }];

    if (trimmed === 'clear') {
      setHistory([{ type: 'output', text: 'Terminal cleared. Type "help" for commands.' }]);
      setInput('');
      return;
    }

    if (trimmed === '') {
      setInput('');
      return;
    }

    if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((line) => newLines.push({ type: 'output', text: line }));
    } else {
      newLines.push({ type: 'error', text: `Command not found: "${trimmed}". Type "help" for available commands.` });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInput('');
  };

  return (
    <section
      id="terminal"
      ref={ref}
      className="py-24 bg-[#EDE6DF]"
      aria-labelledby="terminal-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Ask me{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              anything
            </span>
          </h2>
          <p className="mt-2 text-sm text-[#4A6080]">A little interactive terminal. Type <code className="bg-white px-1.5 py-0.5 rounded text-[#E8654A] text-xs font-mono border border-[#D9CFC5]">help</code> to start.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-[#243447]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal title bar */}
          <div className="bg-[#1E3A5F] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#E8654A]" />
              <div className="w-3 h-3 rounded-full bg-[#F5C842]" />
              <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
            </div>
            <span className="text-xs text-[#7A9AB5] font-mono mx-auto">sagar@portfolio:~</span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#0F1923] p-5 min-h-64 max-h-80 overflow-y-auto font-mono text-sm">
            {history.map((line, i) => (
              <div key={i} className={`mb-1 leading-relaxed ${
                line.type === 'input'   ? 'text-[#E8654A]' :
                line.type === 'error'   ? 'text-red-400' :
                                          'text-[#A8BDD0]'
              }`}>
                {line.text}
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#E8654A]">›</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') runCommand(input);
                }}
                className="flex-1 bg-transparent text-[#E8EDF2] outline-none caret-[#E8654A] placeholder-[#4A6080]"
                placeholder="type a command..."
                aria-label="Terminal input"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
