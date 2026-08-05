import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-[#8b0000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: CTA Copy */}
            <div className="space-y-4 sm:space-y-8 text-white">
              <div className="space-y-1.5 sm:space-y-3">
              <h1 className="text-white font-bold text-lg sm:text-3xl leading-tight max-w-md">Get In Touch</h1>
              <p className="text-white/90 text-xs sm:text-xl leading-normal sm:leading-relaxed max-w-md">
                Partner with us for turnkey debt collection &amp; customer service solutions. Our team will craft a customized strategy for your portfolio.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-4 mt-2 sm:mt-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                  Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <a href="tel:+918800101102" className="text-xs sm:text-sm text-white font-bold tracking-wide hover:text-white/70 transition-colors">
                  +91 8800-101-102
                </a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <a href="mailto:info@stefto.com" className="text-xs sm:text-sm text-white font-bold tracking-wide hover:text-white/70 transition-colors">
                  info@stefto.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-4 sm:p-6 shadow-lg text-slate-900">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Send Us a Message</h3>
            <form className="space-y-2.5 sm:space-y-3" onSubmit={(e) => e?.preventDefault()}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Rajesh"
                    className="w-full bg-white border border-slate-200 rounded-none px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full bg-white border border-slate-200 rounded-none px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                  Company / Institution
                </label>
                <input
                  type="text"
                  placeholder="HDFC Bank, Bajaj Finance..."
                  className="w-full bg-white border border-slate-200 rounded-none px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="rajesh@company.com"
                  className="w-full bg-white border border-slate-200 rounded-none px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                  Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your portfolio and recovery requirements..."
                  className="w-full bg-white border border-slate-200 rounded-none px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-[#1c44b4] hover:bg-[#17378d] text-white font-bold py-3 px-4 rounded-none text-[13px] shadow-3d-red"
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
