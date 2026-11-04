import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'abhinav.anand85@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9472463185' },
  { icon: MapPin, label: 'Location', value: 'Patna, India' },
  { icon: Clock, label: 'Availability', value: 'Open to new projects' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold text-accent-600">
            Get in Touch
          </span>
          <h2 className="heading-display mt-5 text-3xl lg:text-4xl font-bold text-slate-900">
            Let's build something <span className="gradient-text">that grows</span>
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Tell me about your brand and your goals. I'll get back to you within 24 hours with a
            tailored AI marketing strategy.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white">
              <h3 className="heading-display text-xl font-bold">Contact Details</h3>
              <p className="mt-2 text-sm text-brand-100">
                Reach out directly — I personally read every message.
              </p>
              <div className="mt-7 space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-brand-200 font-medium">{c.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-accent-50 border border-accent-100 p-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-white">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">Free 30-min strategy call</p>
                <p className="text-xs text-slate-500 mt-0.5">No obligation. Just actionable insight.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-brand-50 border-2 border-brand-200 p-10 text-center h-full flex flex-col items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="heading-display mt-5 text-2xl font-bold text-slate-900">Message sent!</h3>
                <p className="mt-2 text-slate-500 max-w-sm">
                  Thank you for reaching out. I'll get back to you within 24 hours with next steps.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white border border-slate-100 shadow-lg shadow-brand-900/5 p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service</label>
                    <select
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>AI Campaign Automation</option>
                      <option>Intelligent Customer Handling</option>
                      <option>Predictive Analytics</option>
                      <option>Audience Targeting</option>
                      <option>Customer Retention Engine</option>
                      <option>Custom AI Marketing Tools</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your goals..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
