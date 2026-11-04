import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Abhinav transformed our entire marketing pipeline. The AI automation he built cut our campaign setup time by 70% while doubling our conversion rate. A true expert.',
    name: 'Priya Sharma',
    role: 'CMO, RetailNext',
    initials: 'PS',
  },
  {
    quote:
      'Our customer support response time went from hours to seconds. The intelligent chatbot Abhinav deployed handles 85% of queries automatically — our CSAT has never been higher.',
    name: 'Rahul Verma',
    role: 'Founder, D2C Brands Co.',
    initials: 'RV',
  },
  {
    quote:
      'The predictive analytics models gave us a clear view of which customers were about to churn. We retained 40% of them with targeted win-back campaigns. Incredible ROI.',
    name: 'Sneha Gupta',
    role: 'Head of Growth, FinEdge',
    initials: 'SG',
  },
  {
    quote:
      'Working with Abhinav felt like adding a senior AI team overnight. He understood our business, built the right tools, and trained our team to use them independently.',
    name: 'Vikram Singh',
    role: 'Director, EduPro',
    initials: 'VS',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-4 py-1.5 text-xs font-semibold text-brand-300">
            Client Stories
          </span>
          <h2 className="heading-display mt-5 text-3xl lg:text-4xl font-bold text-white">
            Trusted by brands that <span className="text-accent-400">grow smarter</span>
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Real results from real clients. Here's what happens when AI meets marketing expertise.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7 hover:bg-white/10 transition-colors duration-300 group"
            >
              <Quote className="h-8 w-8 text-brand-400/60 group-hover:text-brand-400 transition-colors" />
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="mt-4 text-slate-200 leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white text-sm font-bold">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
