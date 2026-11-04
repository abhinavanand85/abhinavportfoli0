import { Sparkles, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="heading-display text-lg font-bold text-white">
                Abhinav<span className="text-brand-400">Anand</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              AI expert in digital marketing and customer handling. Helping brands scale smarter
              with intelligent automation and data-driven strategy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="mt-4 flex gap-3">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-brand-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">
              Based in Patna, working worldwide.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Abhinav Anand. All rights reserved.</p>
          <p>Crafted with AI-powered precision.</p>
        </div>
      </div>
    </footer>
  );
}
