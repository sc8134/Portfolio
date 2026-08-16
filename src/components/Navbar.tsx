import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F0EB]/95 backdrop-blur-md shadow-sm border-b border-[#D9CFC5]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 text-[#1E3A5F] font-bold text-lg hover:text-[#E8654A] transition-colors"
          aria-label="Sagar Roka Chhetri— go to homepage"
        >
          <img src="/favicon.svg" alt="SR logo" className="w-8 h-8 rounded-lg" />
          <span className="font-mono text-sm tracking-widest text-[#2B4D7A]">
            Namaste <span className="text-[#E8654A]">|</span> Build. Code. Deploy.
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2B4D7A] hover:text-[#1E3A5F] hover:bg-[#EDE6DF] transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded-lg text-[#2B4D7A] hover:bg-[#EDE6DF] transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F0EB] border-b border-[#D9CFC5] shadow-lg">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#2B4D7A] hover:text-[#1E3A5F] hover:bg-[#EDE6DF] transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}