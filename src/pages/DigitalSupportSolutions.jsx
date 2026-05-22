import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Zap,
  Star,
  ShieldCheck,
  MessageSquare,
  SmartphoneNfc,
  BrainCircuit,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Globe,
  Clock,
  Wallet,
} from 'lucide-react';

import serviceBg from '../assets/services_dropdown_bg.png';
import heroBg from '../assets/ddm_hero_bg.png';
import ctaBg from '../assets/ddm_cta_bg.png';
import advisorImg from '../assets/ddm_financial_advisor.png';
import analyticsImg from '../assets/ddm_analytics.png';
import operationsImg from '../assets/ddm_operations.png';
import customerImg from '../assets/ddm_customer.png';

const DigitalSupportSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const advantages = [
    {
      icon: BrainCircuit,
      title: 'AI-Powered Insights',
      desc: 'Machine learning models surface the right customer profile, at the right time, through the right channel — maximizing customer engagement.',
    },
    {
      icon: MessageSquare,
      title: 'Omnichannel Engagement',
      desc: 'Reach customers via SMS, email, WhatsApp, and voice — whichever channel they prefer — in a non-intrusive, personalized manner.',
    },
    {
      icon: Globe,
      title: '24 × 7 Global Team',
      desc: 'Our trained multilingual agents provide round-the-clock support across geographies, ensuring no customer interaction is ever missed.',
    },
    {
      icon: ShieldCheck,
      title: 'SLA & Quality Audits',
      desc: 'Every interaction is fully compliant with standard SLAs, quality auditing guidelines, and global data-privacy standards.',
    },
    {
      icon: Wallet,
      title: 'Flexible Scaling Plans',
      desc: 'We offer businesses tailored seating plans and flexible outsourcing packages, drastically improving operational ROI.',
    },
    {
      icon: Clock,
      title: 'Real-Time Dashboards',
      desc: 'Live performance dashboards give you full visibility into answer rates, call queue times, agent status, and customer satisfaction.',
    },
  ];

  const keyBenefits = [
    {
      title: 'Increased CSAT & First Contact Resolution',
      desc: 'Our world-class team is provided with real-time insights to resolve support queries on the first contact, optimizing customer satisfaction and loyalty.',
      img: analyticsImg,
      imgRight: true,
    },
    {
      title: 'Enhanced Operational Efficiencies',
      desc: 'Driven by intelligent ticketing automation and data-driven routing, our team delivers a customized and tailored support experience for each customer.',
      img: operationsImg,
      imgRight: false,
    },
    {
      title: 'Scalable Customer Outreach',
      desc: 'Launch targeted outbound sales and support campaigns without hiring overhead. We adapt our seating capacity to match your seasonal demand peaks.',
      img: customerImg,
      imgRight: true,
    },
  ];

  const stats = [
    { value: '95%', label: 'Average CSAT Score' },
    { value: '60%', label: 'Reduction in Operational Costs' },
    { value: '24/7', label: 'Customer Support' },
    { value: '99.9%', label: 'SLA Adherence Rate' },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50">

      {/* ─── 1. HERO ─── */}
      <section
        className="w-full relative flex items-center overflow-hidden bg-cover bg-center md:bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          minHeight: '420px',
          paddingTop: '10rem',
          paddingBottom: '6rem',
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/75 z-0" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors no-underline text-slate-300">Home</Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-white font-medium">Digital Support & Solutions</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-0 tracking-tight">
            Digital Support & Solutions
          </h1>
        </div>
      </section>

      {/* ─── 2. WIN-WIN HEADLINE ─── */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight">
            Intelligent Digital Support & Operations <br />
            Solutions that are a{' '}
            <span className="italic font-serif text-stefto-indigo">Win‑Win</span>
          </h2>
          <div className="w-20 h-1.5 bg-stefto-sky rounded-full mx-auto mt-8" />
        </div>
      </section>

      {/* ─── 3. PARTNER WITH SUPPORT EXPERTS ─── */}
      <section className="w-full py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Text */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-stefto-navy mb-6">
                Partner with Support Experts
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 text-base sm:text-lg">
                The best way to build a high-performing support channel is to partner with operations experts.
                Finding the right BPO team that fits your needs doesn't have to be hard.
                Stefto matches your business needs with dedicated call center agents in 5 minutes.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                If you're ready to be matched with dedicated agents and support specialists that will help you achieve your
                operational goals, get started now.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 mt-8 bg-stefto-indigo text-white font-bold px-8 py-3.5 rounded-full no-underline hover:bg-stefto-navy transition-all shadow-lg hover:shadow-xl"
              >
                Get Matched Now <ArrowRight size={18} />
              </Link>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={advisorImg}
                  alt="Customer support consultation"
                  className="w-full h-[240px] sm:h-[300px] lg:h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. CHALLENGES WITH TRADITIONAL SUPPORT ─── */}
      <section className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

            {/* Heading */}
            <div className="w-full lg:w-2/5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight">
                The Challenges with{' '}
                <span className="block italic font-serif text-stefto-indigo mt-2">
                  Traditional Support Setups
                </span>
              </h2>
            </div>

            {/* Body */}
            <div className="w-full lg:w-3/5">
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-5">
                Setting up a call center or helpdesk in-house requires high upfront CAPEX, intensive training programs,
                and expensive software licensing. Managing agent turnover and scaling operations during high-traffic seasons
                can distract you from your core product or business development.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                The digital era demands a smarter, more flexible outsourcing approach — one that delivers high-quality
                customer experience at a fraction of the cost, protecting and enhancing your brand in the process.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. SWITCH TO INTELLIGENT CUSTOMER SUPPORT ─── */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy mb-8 leading-tight">
            Switch to{' '}
            <span className="italic font-serif text-stefto-indigo">Intelligent Support Operations</span>{' '}
            with Stefto
          </h2>

          <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-[960px]">
            <p>
              A data-driven digital operations solution provides you with the right support insights to take a
              customized and personalized approach to customer service. Instead of hiring agents locally and investing in
              expensive infrastructure, outsource securely to Stefto's expert hubs.
            </p>
            <p>
              Our team operates with integrated helpdesk software so that customer queries across calls, chat, and email
              are responded to dynamically. All these elements provide for a streamlined experience, increasing customer retention
              and sales conversions.
            </p>
            <p>
              At Stefto, we have a trained and experienced global customer service team to provide 24 × 7 support to your
              customers, no matter where they are based. With personalized customer service, we improve your response rates while
              ensuring that your brand image is maintained at the highest standard.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 6. STATS STRIP ─── */}
      <section className="w-full py-14 bg-stefto-navy">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl font-serif italic font-extrabold text-stefto-sky mb-2 group-hover:scale-105 transition-transform">
                  {s.value}
                </div>
                <div className="text-slate-300 text-sm sm:text-base font-medium tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. BENEFIT FROM THE STEFTO ADVANTAGE ─── */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stefto-indigo font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Our Differentiators
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy mb-4 leading-tight">
            Benefit from the{' '}
            <span className="italic font-serif text-stefto-indigo">Stefto Advantage</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg italic mb-16 max-w-[700px] mx-auto">
            We blend the power of digital workflows with human expertise to drive meaningful business outcomes.
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-2xl hover:border-stefto-indigo hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-stefto-indigo/5 rounded-full -mr-10 -mt-10 group-hover:scale-[2.5] transition-transform duration-700" />
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-stefto-indigo group-hover:bg-stefto-indigo group-hover:text-white transition-all duration-300 mb-6">
                  <adv.icon size={26} />
                </div>
                <h4 className="text-lg font-bold text-stefto-navy mb-3 group-hover:text-stefto-indigo transition-colors">
                  {adv.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{adv.desc}</p>
                <div className="w-10 h-1 bg-stefto-sky rounded-full mt-5 group-hover:w-20 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* AI paragraph */}
          <div className="mt-16 max-w-[960px] mx-auto text-left">
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              At Stefto we firmly believe that digitalization when implemented expertly drives
              unprecedented growth and productivity. Leveraging the power of smart technologies —
              AI integration, omnichannel dialers and ticketing — with trained human agents, we help you reach your business
              goals more effectively and efficiently. By augmenting the power of data-driven workflows,
              we make a real impact for you and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. KEY BENEFITS ─── */}
      <section className="w-full py-10 sm:py-20 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-stefto-navy leading-tight">
              Key Benefits of our{' '}
              <span className="italic font-serif text-stefto-indigo">Digital Support Operations</span>
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${benefit.imgRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-20`}
              >
                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl sm:text-3xl font-bold text-stefto-navy mb-3 sm:mb-5">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-lg">
                    {benefit.desc}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 mt-5 sm:mt-8 text-stefto-indigo font-bold text-xs sm:text-sm uppercase tracking-widest cursor-pointer hover:text-stefto-navy transition-colors group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group relative">
                    <img
                      src={benefit.img}
                      alt={benefit.title}
                      className="w-full h-[240px] sm:h-[300px] lg:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stefto-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. HOW IT WORKS ─── */}
      <section 
        className="w-full py-10 sm:py-16 bg-stefto-navy text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/85 z-0" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stefto-sky/10 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-stefto-indigo/15 rounded-full blur-[80px] pointer-events-none z-0" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-stefto-sky font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              How Our Customer Support Operations Work
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { step: '01', icon: BarChart3,    title: 'Requirement Analysis',  desc: 'We align on your target SLAs, support workflows, and preferred contact channels.' },
              { step: '02', icon: SmartphoneNfc, title: 'Workforce Deployment',  desc: 'Trained, professional customer support agents and telecallers are assigned to your campaigns.' },
              { step: '03', icon: Users,         title: 'Omnichannel Execution', desc: 'Live agent answering and outbound calling supported by intelligent ticketing platforms.' },
              { step: '04', icon: TrendingUp,    title: 'Analytics & Audits',    desc: 'Real-time dashboards track response rates, AHT, and CSAT scores for continuous quality audits.' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-row sm:flex-col items-start gap-4 sm:gap-0 p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] hover:border-stefto-sky/40 transition-all duration-400 group"
              >
                {/* Icon + step number */}
                <div className="flex flex-col items-center gap-1 shrink-0 sm:flex-row sm:justify-between sm:w-full sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-stefto-sky/20 rounded-xl flex items-center justify-center text-stefto-sky group-hover:bg-stefto-sky group-hover:text-white transition-all duration-300 shrink-0">
                    <step.icon size={18} />
                  </div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. WHY DIGITAL SUPPORT CHECKLIST ─── */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: heading */}
            <div className="w-full lg:w-2/5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stefto-navy mb-6 leading-tight">
                Why Stefto Support Operations is the{' '}
                <span className="italic font-serif text-stefto-indigo">Smart Choice</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-base sm:text-lg">
                Switching from traditional call setups to Stefto's intelligent digital support
                management delivers measurable improvements across the board.
              </p>
            </div>

            {/* Right: checklist */}
            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                'Higher CSAT scores through domain-specific agent training',
                'Up to 60% lower cost-per-seat vs. in-house setups',
                'Fully compliant with SLA metrics and GDPR requirements',
                'Reduced wait times and improved customer loyalty',
                'Flexible pay-as-you-grow plans with no long contract locks',
                'Real-time analytics for continuous quality monitoring',
                'Multilingual agent support for global audiences',
                'Seamless integration with Zendesk, Zoho, Salesforce, and custom CRMs',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-stefto-sky/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-stefto-sky transition-colors">
                    <CheckCircle2 size={14} className="text-stefto-sky group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── 11. SPEAK TO US BANNER ─── */}
      <section className="w-full relative py-20 sm:py-28 bg-white overflow-hidden">
        {/* Candlestick chart SVG background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full opacity-[0.12]"
          >
            {/* Left chart cluster */}
            {[30,55,80,105,130,155,180,205,230,255,280].map((x, i) => {
              const heights = [60,100,70,130,90,50,110,80,140,60,95];
              const tops   = [140,110,130,90,120,150,105,125,80,145,115];
              const isUp   = [true,false,true,false,true,false,true,false,true,false,true];
              return (
                <g key={i}>
                  <line x1={x} y1={tops[i]-12} x2={x} y2={tops[i]+heights[i]+12} stroke={isUp[i]?'#3b82f6':'#3b82f6'} strokeWidth="1.5"/>
                  <rect x={x-6} y={tops[i]} width="12" height={heights[i]} rx="1" fill={isUp[i]?'#3b82f6':'#93c5fd'} />
                </g>
              );
            })}
            {/* Right chart cluster */}
            {[1160,1185,1210,1235,1260,1285,1310,1335,1360,1385,1410].map((x, i) => {
              const heights = [80,50,110,70,130,60,100,90,55,120,75];
              const tops   = [120,150,100,135,85,145,110,125,155,95,130];
              const isUp   = [false,true,false,true,false,true,false,true,false,true,false];
              return (
                <g key={i}>
                  <line x1={x} y1={tops[i]-12} x2={x} y2={tops[i]+heights[i]+12} stroke="#3b82f6" strokeWidth="1.5"/>
                  <rect x={x-6} y={tops[i]} width="12" height={heights[i]} rx="1" fill={isUp[i]?'#3b82f6':'#93c5fd'} />
                </g>
              );
            })}
            {/* Bottom wave line */}
            <polyline
              points="0,280 120,240 240,260 360,220 480,250 600,230 720,200 840,235 960,215 1080,245 1200,225 1320,255 1440,235"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 font-bold text-base sm:text-lg mb-5">
            Are you looking to scale and streamline your customer support process?{' '}
            <span className="underline underline-offset-4 cursor-pointer hover:text-red-600 transition-colors">
              Speak to Us
            </span>
          </p>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight mb-6">
            Here to Help Your{' '}
            <span className="italic font-serif text-stefto-indigo">Every Business Need.</span>
          </h2>

          {/* Subtext */}
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-2">
            Through operational clarity, we provide you with the customer support confidence you need to achieve.
          </p>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
            And, that's just the beginning.
          </p>

          {/* CTA button */}
          <Link
            to="/contact-us"
            className="inline-block bg-stefto-indigo hover:bg-stefto-navy text-white font-bold px-10 py-4 no-underline transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* ─── 12. FINAL CTA ─── */}
      <section
        className="w-full py-20 sm:py-28 bg-stefto-navy relative overflow-hidden"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/70" />
        <div className="max-w-[1280px] mx-auto px-4 text-center relative z-10">
          <p className="text-stefto-sky font-bold text-xs uppercase tracking-[0.25em] mb-6">
            Ready to Transform Your Support Operations?
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Start Your Digital Support <br />
            <span className="italic font-serif text-stefto-sky">Journey Today</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-[600px] mx-auto">
            Let Stefto's intelligent platform and expert team help you support more customers, spend less, and protect your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-stefto-sky hover:bg-white text-stefto-navy font-bold px-10 py-4 rounded-full shadow-2xl transition-all hover:scale-105 no-underline text-sm uppercase tracking-widest"
            >
              Talk to Us Now
            </Link>
            <Link
              to="/about-us"
              className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full transition-all no-underline text-sm uppercase tracking-widest"
            >
              Learn About Stefto
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default DigitalSupportSolutions;
