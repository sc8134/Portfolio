import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E3A5F] border-t border-[#2B4D7A] text-[#A8BDD0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2 text-white font-bold text-lg hover:text-[#E8654A] transition-colors"
            aria-label="Scroll to top"
          >
            <img src="/favicon.svg" alt="SR logo" className="w-8 h-8 rounded-lg" />
            <span className="font-mono text-sm tracking-widest text-white">
              Namaste <span className="text-[#E8654A]">|</span>{' '}
              <span
                className="text-[#E8654A] italic"
                style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
              >
                From Kathmandu to the World
              </span>
            </span>
          </button>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm font-semibold text-white tracking-wide">Sagar RC</p>
            <p className="text-xs text-[#E8654A] tracking-widest uppercase font-medium mt-0.5">Build. Create. Inspire.</p>
            <p className="text-xs text-[#A8BDD0] mt-1">© {year} All rights reserved.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/sc8134', icon: GithubIcon, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sagar-rc', icon: LinkedinIcon, label: 'LinkedIn' },
              { href: 'https://x.com/Sagarch05339168', icon: TwitterXIcon, label: 'Twitter' },
              { href: 'mailto:sc81341@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg hover:text-[#E8654A] hover:bg-[#2B4D7A]/50 transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
