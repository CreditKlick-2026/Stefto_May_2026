import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import LandingLayout from '../components/layout/LandingLayout';

// Reusing existing assets that fit the content
import heroBg        from '../assets/stefto_business_growth.png';
import workplaceImg1 from '../assets/ddm_operations.png';
import workplaceImg2 from '../assets/ddm_analytics.png';

const features = [
  {
    title: 'Telemarketing',
    desc: 'Strategic telemarketing campaigns that go beyond cold calling. We understand your objectives and deliver results with maximum ROI.',
  },
  {
    title: 'Follow-up Calling',
    desc: 'Consistent follow-up with prospects and clients to nurture leads, close deals and build lasting customer relationships.',
  },
  {
    title: 'Customer Satisfaction',
    desc: 'Measure and improve customer satisfaction through targeted outbound surveys, feedback calls and loyalty programmes.',
  },
  {
    title: 'Appointment Setting',
    desc: 'Professional appointment scheduling that connects your sales team with qualified prospects ready to engage.',
  },
  {
    title: 'Lead Generation',
    desc: 'Targeted lead generation campaigns that identify high-potential prospects and drive new business opportunities for your brand.',
  },
  {
    title: 'Market Research',
    desc: 'Comprehensive market research and reactivation campaigns to understand your customers and bring dormant clients back.',
  },
];

const outsourceReasons = [
  'Maximise Return on Investment',
  'Improve your client base while increasing brand awareness',
  'Reach out to dormant and existing clients and get them to reactivate',
  'Promote new launches – products and services – to boost sales',
  'Follow up mails and calls with targeted marketing calls and emails',
];

const Outbound = () => {
  return (
    <LandingLayout>
    <main className="w-full min-h-screen bg-slate-50">

      {/* ─── 1. HERO ─── */}
      <section
        className="w-full relative flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          minHeight: '420px',
          paddingTop: '10rem',
          paddingBottom: '6rem',
        }}
      >
        <div className="absolute inset-0 bg-stefto-navy/60 z-0" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <nav className="flex items-center gap-2 text-sm text-slate-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors no-underline text-slate-200">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-white font-medium">Outbound</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Outbound Services
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-[600px] leading-relaxed">
            Optimise Outbound Call Services with Data Analysis and Digital Technologies
          </p>
        </div>
      </section>

      {/* ─── 2. TAGLINE ─── */}
      <section className="w-full py-16 sm:py-24 bg-white text-center">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-stefto-navy font-bold leading-tight mb-8">
            Move from Cold Calling to{' '}
            <br className="hidden sm:block" />
            <span className="italic font-serif text-blue-600">Smart Calling.</span>
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed">
            Optimise the efficiency of your outbound customer calls with real-time data and in-depth
            customer insights. Stefto offers intelligent and smart outbound call services by blending
            the power of data analysis and human expertise — for B2B and B2C campaigns with maximum efficiency.
          </p>
        </div>
      </section>

      {/* ─── 3. WHY OUTSOURCE ─── */}
      <section className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-16">
          {/* Left — Text */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stefto-navy mb-4 leading-tight">
              Why Outsource Outbound Call Services{' '}
              <span className="italic font-serif text-blue-600">to Stefto?</span>
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed text-base sm:text-lg">
              Our outbound call services include investor relations, market research, reactivation,
              lead generation, telemarketing, follow-up calling and more. Our skilled and experienced
              agents help you:
            </p>
            <ul className="space-y-3">
              {outsourceReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                  <CheckCircle2 size={18} className="text-stefto-blue flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Image */}
          <div className="lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={workplaceImg1}
              alt="Outbound call center operations"
              className="w-full h-[240px] sm:h-[320px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ─── 4. STRATEGIC CAMPAIGN SECTION ─── */}
      <section className="w-full py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-16">
          {/* Left — Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={workplaceImg2}
              alt="Smart outbound strategy"
              className="w-full h-[240px] sm:h-[320px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right — Text */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight mb-6">
              A Strategic Campaign That{' '}
              <span className="italic font-serif text-blue-600">Understands Your Business</span>
            </h3>
            <div className="text-slate-600 space-y-5 text-base sm:text-lg leading-relaxed">
              <p>
                Cold calling doesn't deliver the best results. To get maximum success from your
                outbound calls, you need a strategic campaign that understands your company, your
                business objectives and your brief.
              </p>
              <p>
                At Stefto, we have in-depth industry-specific knowledge, sophisticated data analysis
                tools and marketing expertise to help you achieve the desired results in the minimum
                turnaround time and cost-effectively.
              </p>
              <p>
                Our telemarketing agents do not begin a campaign immediately. Rather, they understand
                your products and services, analyse your brief and deliver the expected results with a
                focus on maximum ROI — while delivering a superior customer care experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. BEST FEATURES GRID ─── */}
      <section className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight mb-4">
              Checkout{' '}
              <span className="italic font-serif text-blue-600">Best Features</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-[620px] mx-auto">
              Our outbound services become an extension of your sales team — boosting ROI and improving
              sales with targeted campaigns tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Number badge */}
                <div className="w-10 h-10 rounded-full bg-stefto-indigo/10 text-stefto-indigo font-extrabold text-sm flex items-center justify-center mb-5 group-hover:bg-stefto-indigo group-hover:text-white transition-all duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-stefto-navy mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. INDUSTRY-SPECIFIC SECTION ─── */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy mb-10 leading-tight">
            Industry-Specific{' '}
            <span className="italic font-serif text-blue-600">Professional Outbound Services</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16 text-slate-500 text-sm sm:text-base leading-relaxed">
            <p>
              Our outbound services become an extension of your sales team. We help you increase ROI
              and improve sales with our targeted data capture and telemarketing sales calls.
            </p>
            <p>
              We offer customised business solutions to create the perfect outbound services packages
              just for your specific business needs.
            </p>
            <p>
              Our tailored services are designed to achieve your business objectives and key business
              metrics across B2B and B2C markets.
            </p>
            <p>
              With a focus on customer relations and transparent communication, our outbound team
              helps you build stronger, more profitable customer connections.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. CTA BANNER ─── */}
      <section className="w-full relative py-20 sm:py-28 bg-white overflow-hidden">
        {/* Candlestick chart SVG background (matching Inbound style) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full opacity-[0.12]"
          >
            {[30,55,80,105,130,155,180,205,230,255,280].map((x, i) => {
              const heights = [60,100,70,130,90,50,110,80,140,60,95];
              const tops   = [140,110,130,90,120,150,105,125,80,145,115];
              const isUp   = [true,false,true,false,true,false,true,false,true,false,true];
              return (
                <g key={i}>
                  <line x1={x} y1={tops[i]-12} x2={x} y2={tops[i]+heights[i]+12} stroke="#3b82f6" strokeWidth="1.5"/>
                  <rect x={x-6} y={tops[i]} width="12" height={heights[i]} rx="1" fill={isUp[i]?'#3b82f6':'#93c5fd'} />
                </g>
              );
            })}
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

        <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 font-bold text-base sm:text-lg mb-5">
            Customer relations with transparent communication...{' '}
            <span className="underline underline-offset-4 cursor-pointer hover:text-red-600 transition-colors">
              Talk to us
            </span>
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight mb-6">
            Business Solutions Can{' '}
            <span className="italic font-serif text-stefto-indigo">Help You Get There.</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-2">
            Let Stefto's expert outbound team deliver the results your business deserves.
          </p>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
            And, that's just the beginning.
          </p>

          <Link
            to="/contact-us"
            className="inline-block bg-stefto-indigo hover:bg-stefto-navy text-white font-bold px-10 py-4 no-underline transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

    </main>
    </LandingLayout>
  );
};

export default Outbound;
