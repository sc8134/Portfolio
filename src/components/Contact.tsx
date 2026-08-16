import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', message: '' };

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  const socials = [
    { href: 'https://github.com/sc8134', icon: GithubIcon, label: 'GitHub', handle: '@sc8134' },
    { href: 'https://www.linkedin.com/in/sagar-rc', icon: LinkedinIcon, label: 'LinkedIn', handle: 'Sagar RC' },
    { href: 'mailto:sc81341@gmail.com', icon: Mail, label: 'Email', handle: 'sc81341@gmail.com' },
    { href: 'https://twitter.com/SagarRC', icon: TwitterXIcon, label: 'Twitter / X', handle: '@SagarRC' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-[#EDE6DF]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-[#E8654A] uppercase">
            Contact
          </span>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E3A5F]"
          >
            Let's{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              work together
            </span>
          </h2>
          <p className="mt-3 text-[#4A6080] max-w-xl mx-auto">
            Have a project in mind, a role to fill, or just want to connect? I'm always open to
            interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-6">
              Find me online
            </h3>
            {socials.map(({ href, icon: Icon, label, handle }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#D9CFC5] shadow-sm hover:border-[#E8654A]/50 hover:shadow-md transition-all group"
                aria-label={`${label}: ${handle}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8654A]/10 flex items-center justify-center group-hover:bg-[#E8654A]/20 transition-colors">
                  <Icon size={18} className="text-[#E8654A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1E3A5F]">{label}</p>
                  <p className="text-xs text-[#4A6080]">{handle}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white border border-[#D9CFC5]">
                <CheckCircle size={48} className="text-[#E8654A] mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Message sent!</h3>
                <p className="text-[#4A6080] text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#E8654A] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="space-y-5 p-6 rounded-2xl bg-white border border-[#D9CFC5] shadow-sm"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1E3A5F] mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-[#F5F0EB] border ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-[#D9CFC5] focus:ring-[#E8654A]'
                    } text-[#1E3A5F] placeholder-[#7A9AB5] focus:outline-none focus:ring-2 focus:border-transparent transition`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1E3A5F] mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-[#F5F0EB] border ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-[#D9CFC5] focus:ring-[#E8654A]'
                    } text-[#1E3A5F] placeholder-[#7A9AB5] focus:outline-none focus:ring-2 focus:border-transparent transition`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1E3A5F] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-[#F5F0EB] border ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-[#D9CFC5] focus:ring-[#E8654A]'
                    } text-[#1E3A5F] placeholder-[#7A9AB5] focus:outline-none focus:ring-2 focus:border-transparent transition resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E8654A] hover:bg-[#D45538] text-white font-semibold text-sm shadow-lg shadow-[#E8654A]/25 hover:shadow-[#E8654A]/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
