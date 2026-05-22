import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(28,70,157,0.05) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA Copy */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="pill-tag">Get In Touch</span>
              <h2 className="text-section-xl text-slate-900" style={{ fontFamily: "'Fraunces', serif" }}>
                Ready to Optimize<br /><span className="text-[#1c469d]">Your Recovery?</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed max-w-md">
                Partner with Stefto for turnkey debt collection solutions. Our team will craft a customized strategy for your portfolio within 48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#1c469d]" />
                </div>
                <p className="text-sm text-slate-500">
                  Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#1c469d]" />
                </div>
                <a href="tel:+918800101102" className="text-sm text-slate-900 font-semibold hover:text-[#1c469d] transition-colors">
                  +91 8800-101-102
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#1c469d]" />
                </div>
                <a href="mailto:info@stefto.com" className="text-sm text-slate-900 font-semibold hover:text-[#1c469d] transition-colors">
                  info@stefto.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e?.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Rajesh"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  Company / Institution
                </label>
                <input
                  type="text"
                  placeholder="HDFC Bank, Bajaj Finance..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="rajesh@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your portfolio and recovery requirements..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1c469d] text-white py-4 rounded-xl font-semibold text-sm hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
