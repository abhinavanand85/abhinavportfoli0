import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20 transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className={`heading-display text-lg font-bold transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
            Abhinav<span className="text-brand-600">Anand</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-xs">
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-3 bg-white/95 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
