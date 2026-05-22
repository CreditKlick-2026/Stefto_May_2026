import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import LandingLayout from '../components/layout/LandingLayout';

// Using existing assets for placeholders
import heroBg from '../assets/stefto_career_working.png';
import analyticsImage from '../assets/ddm_analytics.png';
import outsourcingImg from '../assets/ddm_operations.png';

// Newly generated images for cards
import cardImg1 from '../assets/Driven by intelligent technology.png';
import cardImg2 from '../assets/Capture every lead.png';
import cardImg3 from '../assets/Provide customers with the best CX.png';
import cardImg4 from '../assets/Manage business calls 247.png';
import cardImg5 from '../assets/Unique solutions.png';
import cardImg6 from '../assets/CRM integration.png';

const Inbound = () => {
  const advantages = [
    {
      title: 'Driven by intelligent technology',
      img: cardImg1,
      desc: 'We use advanced data analysis tools to build detailed customer profiles to offer a personalised experience to each of your callers.',
    },
    {
      title: 'Capture every lead',
      img: cardImg2,
      desc: 'Do not let prospective customers drop. Be there for them anywhere & anytime.',
    },
    {
      title: 'Provide customers with the best CX',
      img: cardImg3,
      desc: 'We provide multiple channels for your customers - live chat, 24 x 7 contact centres, emails and more.',
    },
    {
      title: 'Manage business calls 24/7',
      img: cardImg4,
      desc: 'Let your business team focus on core business practices while we handle the calls for you.',
    },
    {
      title: 'Unique solutions',
      img: cardImg5,
      desc: 'No two businesses are the same. So, we build a tailor-made call flow just for you.',
    },
    {
      title: 'CRM integration',
      img: cardImg6,
      desc: 'We integrate our services seamlessly with your current systems to build a customised workflow.',
    },
  ];

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
        {/* Overlay */}
        <div className="absolute inset-0 bg-stefto-navy/60 z-0" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <nav className="flex items-center gap-2 text-sm text-slate-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors no-underline text-slate-200">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-white font-medium">Inbound</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Inbound Services
          </h1>
        </div>
      </section>

      {/* ─── 2. TAGLINE ─── */}
      <section className="w-full py-16 sm:py-24 bg-white text-center">
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-stefto-navy font-bold leading-tight mb-8">
            Reimagining Inbound Call Services with <br className="hidden sm:block" />
            <span className="italic font-serif text-blue-600">Digital Technologies.</span>
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed">
            We don't just answer calls. We leverage the power of data-driven analytics, digital
            technologies and human expertise to grow your business. Enjoy professional support from
            a team of expert and experienced inbound call services providers armed with the best
            digital technologies.
          </p>
        </div>
      </section>

      {/* ─── 3. POWERFUL METRICS ─── */}
      <section className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stefto-navy mb-6 leading-tight">
              Powerful Metrics: Let the Force of <br className="hidden sm:block" />
              <span className="italic font-serif text-blue-600">Big Data</span> Guide You
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Analytics plays a vital role in customer interactions. Our inbound contact centres are
              empowered with real-time data and customer insight to provide each of your callers
              with an enhanced customer experience. Stay on target, reach business goals and improve
              customer satisfaction with the right data.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              With the help of advanced integrated customer analytics, we empower you to go beyond
              answering customer queries. We help you identify the needs of each customer, providing
              them with actionable insights to drive business results.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={analyticsImage} 
              alt="Big Data Analytics" 
              className="w-full h-[200px] sm:h-[280px] lg:h-[340px] object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>
      </section>

      {/* ─── 4. PROFESSIONAL INBOUND ─── */}
      <section className="w-full py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy leading-tight">
              Professional Inbound Call Services for{' '}
              <span className="italic font-serif text-blue-600">Businesses of All Sizes & Across Industries</span>
            </h3>
          </div>
          <div className="lg:w-1/2 text-slate-600 space-y-6 text-base sm:text-lg leading-relaxed">
            <p>
              Efficient, reliable and professional customer service should be a top priority for all
              businesses. Stefto has years of experience and expertise in delivering exceptional
              customer services. We handle all your inbound calls, freeing up your time and resources
              to focus on your core business activities.
            </p>
            <p>
              Whether you want to outsource your entire customer care services or want us to handle
              just a part of your customer service activities, we can do it all. We can also
              complement your existing call and email handling services – after hours services,
              overflow services, crisis management – and more tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. ADVANTAGES GRID ─── */}
      <section className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy text-center mb-16 leading-tight">
            The Stefto Advantage: How our Inbound Services <br className="hidden lg:block"/>
            add <span className="italic font-serif text-blue-600">Value to your Business.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {advantages.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col group"
              >
                {/* Title */}
                <h4 className="text-xl sm:text-2xl font-bold text-stefto-navy mb-4 lg:mb-6">
                  {item.title}
                </h4>

                {/* Image */}
                <div className="overflow-hidden h-[160px] sm:h-[180px] lg:h-[180px] mb-4 lg:mb-6 w-full rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. BENEFITS OF OUTSOURCING ─── */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stefto-navy mb-16 leading-tight">
            Benefits of <span className="italic font-serif text-blue-600">Outsourcing Inbound Call Services</span> to Stefto
          </h3>

          {/* 4-Column Text Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-20 text-slate-500 text-sm sm:text-base leading-relaxed">
            <p>
              By outsourcing your non-core functions like customer service, you can free up time and 
              resources to focus on your key business activities.
            </p>
            <p>
              Enjoy professional and experienced customer services to improve customer engagement and experience.
            </p>
            <p>
              We offer customised services to meet your specific requirements – seasonal inbound calls, 
              time-sensitive peak calls, enhance your limited capabilities and more.
            </p>
            <p>
              Our inbound call services are scalable, supporting future growth of your business.
            </p>
          </div>

          {/* Final Row: Text + Image */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                Our inbound services go beyond attending customer calls. We help you develop a customised 
                business strategy to increase customer engagement, improve customer experience and achieve 
                business goals efficiently and professionally.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={outsourcingImg} 
                  alt="Outsourcing call center operations" 
                  className="w-full h-[200px] sm:h-[280px] lg:h-[320px] object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. SPEAK TO US / FREE QUOTE BANNER ─── */}
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
                  {/* wick */}
                  <line x1={x} y1={tops[i]-12} x2={x} y2={tops[i]+heights[i]+12} stroke={isUp[i]?'#3b82f6':'#3b82f6'} strokeWidth="1.5"/>
                  {/* body */}
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
          {/* Red tagline */}
          <p className="text-red-500 font-bold text-base sm:text-lg mb-5">
            Are you looking to enhance and streamline your inbound customer support operations?{' '}
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
    </main>
    </LandingLayout>
  );
};

export default Inbound;
