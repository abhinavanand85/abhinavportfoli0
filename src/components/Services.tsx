import { Bot, Target, MessageSquare, BarChart3, Users, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Campaign Automation',
    desc: 'Automate ad creation, A/B testing, and budget allocation with intelligent agents that learn and adapt in real time.',
    points: ['Smart ad copy generation', 'Auto-optimized bidding', 'Multi-platform sync'],
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Customer Handling',
    desc: 'Deploy AI chatbots and virtual assistants that resolve queries, qualify leads, and keep customers delighted around the clock.',
    points: ['24/7 AI chat support', 'Sentiment-aware responses', 'Seamless human handoff'],
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    desc: 'Turn raw data into forward-looking insight. Know what your customers want before they do.',
    points: ['Churn prediction', 'Lifetime value models', 'Trend forecasting'],
  },
  {
    icon: Target,
    title: 'Precision Audience Targeting',
    desc: 'Reach the right person, at the right moment, with the right message using AI-built lookalike segments.',
    points: ['Lookalike modeling', 'Behavioral triggers', 'Cross-channel attribution'],
  },
  {
    icon: Users,
    title: 'Customer Retention Engine',
    desc: 'Win-back flows, loyalty scoring, and personalized re-engagement campaigns powered by machine learning.',
    points: ['Win-back automation', 'Loyalty scoring', 'Personalized offers'],
  },
  {
    icon: Cpu,
    title: 'Custom AI Marketing Tools',
    desc: 'Tailored AI workflows and integrations built to fit your stack — from CRM automation to content pipelines.',
    points: ['CRM integration', 'Content pipelines', 'API & workflow design'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold text-accent-600">
            What I Do
          </span>
          <h2 className="heading-display mt-5 text-3xl lg:text-4xl font-bold text-slate-900">
            AI-powered services that <span className="gradient-text">drive real growth</span>
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            A full-stack approach to digital marketing — blending artificial intelligence with
            proven marketing strategy to scale your brand efficiently.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card card-hover p-7 group">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="heading-display mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
