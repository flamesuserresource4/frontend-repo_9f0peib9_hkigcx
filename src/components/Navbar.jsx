import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Github, Mail, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-md transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/70 border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-white font-semibold tracking-wide">Pren</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => setDark((d) => !d)}
              className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-900/90">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="mailto:hello@pren.dev"
              className="mt-2 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
