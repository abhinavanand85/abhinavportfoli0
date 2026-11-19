import { ArrowRight, Bot, LineChart, Users, Zap, CheckCircle2 } from 'lucide-react';

const highlights = [
  'AI-powered campaign automation',
  'Data-driven customer insights',
  '24/7 intelligent engagement',
];

const floatingCards = [
  { icon: Bot, label: 'AI Automation', value: '+340% ROI', color: 'text-brand-600', bg: 'bg-brand-50' },
  { icon: Users, label: 'Customer Reach', value: '1.2M+', color: 'text-accent-600', bg: 'bg-accent-50' },
  { icon: LineChart, label: 'Conversion', value: '+85%', color: 'text-brand-600', bg: 'bg-brand-50' },
];

const headlineLines = [
  [{ text: 'Marketing that', color: 'text-[#071a3d]' }],
  [{ text: 'thinks for', color: 'text-[#59ad82]' }],
  [
    { text: 'itself.', color: 'text-[#9a9c67]' },
    { text: ' Customers', color: 'text-[#071a3d]' },
  ],
  [
    { text: 'that ', color: 'text-[#071a3d]' },
    { text: 'stay loyal.', color: 'text-[#f47a38]' },
  ],
];

function AnimatedHeadline() {
  let letterIndex = 0;

  return (
    <h1 className="animated-headline heading-display mt-6 text-4xl sm:text-5xl lg:text-[3.9rem] font-extrabold leading-[0.98]">
      {headlineLines.map((segments, lineIndex) => (
        <span className="block" key={lineIndex}>
          {segments.map((segment, segmentIndex) => (
            <span
              className={segment.color}
              key={`${lineIndex}-${segmentIndex}`}
            >
              {segment.text.split('').map((letter, index) => {
                const currentIndex = letterIndex++;
                return (
                  <span
                    aria-hidden="true"
                    className={letter === ' ' ? 'animated-letter animated-space' : 'animated-letter'}
                    key={`${currentIndex}-${index}`}
                    style={{ animationDelay: `${70 + currentIndex * 32}ms` }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
      <span className="sr-only">Marketing that thinks for itself. Customers that stay loyal.</span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl animate-pulse-slow" />
      </div>

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
              <Zap className="h-3.5 w-3.5" />
              AI Expert in Digital Marketing
            </span>
            <AnimatedHeadline />
            <p className="mt-6 text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              I'm <span className="font-semibold text-brand-700">Abhinav Anand</span> — I help brands
              scale smarter with artificial intelligence. From automated campaigns to intelligent
              customer handling, every touchpoint is optimized for growth.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-white/40">
              <img
                src="/assets/chatbot-customer-service.jpeg"
                alt="Portrait of Abhinav Anand"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => {
              const positions = [
                'absolute -top-5 -left-5',
                'absolute top-1/2 -right-6',
                'absolute -bottom-5 -left-8',
              ];
              return (
                <div
                  key={card.label}
                  className={`${positions[i]} hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 border border-slate-100 animate-float`}
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.bg} ${card.color}`}>
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{card.label}</p>
                    <p className={`text-sm font-bold ${card.color}`}>{card.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
