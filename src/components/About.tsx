import { Award, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '120+', label: 'Projects Delivered' },
  { icon: TrendingUp, value: '340%', label: 'Average ROI Increase' },
  { icon: Award, value: '8+', label: 'Years of Experience' },
  { icon: Award, value: '50+', label: 'Brands Scaled' },
];

const skills = [
  { name: 'AI Marketing Automation', level: 96 },
  { name: 'Customer Experience Strategy', level: 92 },
  { name: 'Predictive Analytics', level: 88 },
  { name: 'Conversion Optimization', level: 90 },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-gradient-to-b from-white to-brand-50/50 relative overflow-hidden">
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent-100/40 blur-3xl" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/15 border-4 border-white">
              <img
                src="/assets/pasted-image-2.jpg"
                alt="Abhinav Anand — collaborative strategy session"
                className="w-full h-[460px] object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 rounded-2xl bg-brand-600 text-white px-6 py-5 shadow-xl shadow-brand-600/30">
              <p className="heading-display text-3xl font-extrabold">8+</p>
              <p className="text-sm text-brand-100 mt-0.5">Years in AI &amp; Marketing</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
              About Me
            </span>
            <h2 className="heading-display mt-5 text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Turning data into customers, and customers into <span className="text-accent-500">loyalty</span>
            </h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm Abhinav Anand, an AI specialist focused on digital marketing and customer
                experience. For nearly a decade I've helped brands move from guesswork to
                intelligence — building systems that reach the right audience, convert them
                efficiently, and keep them coming back.
              </p>
              <p>
                My approach blends machine learning, automation, and human-centered design so every
                campaign is measurable and every customer interaction feels personal. The result:
                marketing that scales without losing its soul.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium text-slate-700 mb-1.5">
                    <span>{skill.name}</span>
                    <span className="text-brand-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Work With Me
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div id="results" className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card card-hover p-6 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="heading-display mt-4 text-3xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
