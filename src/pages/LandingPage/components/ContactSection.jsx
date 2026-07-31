import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-24 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left: CTA Copy */}
          <div className="space-y-4 sm:space-y-8">
            <div className="space-y-1.5 sm:space-y-3">
              <h1 className="text-[#1e3a8a] font-bold text-lg sm:text-3xl leading-tight max-w-md">Get In Touch</h1>
              <p className="text-slate-700 text-xs sm:text-xl leading-normal sm:leading-relaxed max-w-md">
                Partner with us for turnkey debt collection &amp; customer service solutions. Our team will craft a customized strategy for your portfolio.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#1c469d] sm:w-4 sm:h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016
                </p>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#1c469d] sm:w-4 sm:h-4" />
                </div>
                <a href="tel:+918800101102" className="text-xs sm:text-sm text-slate-900 font-semibold hover:text-[#1c469d] transition-colors">
                  +91 8800-101-102
                </a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#1c469d] sm:w-4 sm:h-4" />
                </div>
                <a href="mailto:info@stefto.com" className="text-xs sm:text-sm text-slate-900 font-semibold hover:text-[#1c469d] transition-colors">
                  info@stefto.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] p-4 sm:p-8 border border-slate-200">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-6">Send Us a Message</h3>
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e?.preventDefault()}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Rajesh"
                    className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
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
                  className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="rajesh@company.com"
                  className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your portfolio and recovery requirements..."
                  className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1c469d] focus:ring-1 focus:ring-[#1c469d] transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" size="sm" pill className="w-full sm:btn-lg">
                Send Message
                <ArrowRight size={14} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
