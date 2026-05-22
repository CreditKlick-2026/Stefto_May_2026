import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/image.png';
import endeavorsImage from '../assets/our_endeavors.png';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import news1 from '../assets/news_business_growth_1775211597064.png';
import news2 from '../assets/news_technology_innovation_1775211617151.png';
import news3 from '../assets/news_digital_transformation_1775211635494.png';
import mediaBg from '../assets/media_blocks_bg_1775212185626.png';
import globalBg from '../assets/global_interactions.png';
import mediaLogo from '../assets/media_logo_placeholder_1775212084849.png';
// Partner logos loaded from public/assets/partners/
import {
  Users, Globe, Zap, MessageSquare,
  Phone, Globe2, Link as LinkIcon, Download,
  Star, ArrowRight
} from 'lucide-react';

// ── Testimonial Data (from stefto_client_repo) ──────────────────────────────
const uniqueTestimonials = [
  {
    name: "Mrs. Sumona",
    company: "(AGENCY MANAGER) - CITI BANK",
    text: "Stefto knows how to run any project aggressively for Banks/NBFCs needs and really understands the process delivery in terms of debt collection and recovery. They are also very helpful with competitive intelligence along with technology."
  },
  {
    name: "Ajay Yadav",
    company: "(COLLECTION HEAD - UNSECURED) - HEROFIN CORP",
    text: "Stefto has been instrumental in building the business right from any stage of its growth and into any vertical. Their understanding of our product has helped us in achieving the goals with technical logic. They have also helped us in late-stage collections and continue to partner of preference with us as we scale up."
  },
  {
    name: "Mr. Vineet Kakkar",
    company: "(ZONAL HEAD) - SBIC",
    text: "It has been a great experience and continuous journey with the Stefto Team. The organisation has strong leadership in delivery and managing the businesses very effectively. What sets them apart is their vested interest in understanding the nuances of the business and the culture of the organization."
  }
];

// Duplicate 10× for seamless infinite loop on wide screens
const allTestimonials = [];
for (let i = 0; i < 10; i++) allTestimonials.push(...uniqueTestimonials);

const TestimonialSlider = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);

  useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const oneSetWidth = container.scrollWidth / 10;
    container.scrollLeft = oneSetWidth * 4;

    const autoScroll = () => {
      if (!isPausedRef.current) container.scrollLeft += 1.5;
      const setWidth = container.scrollWidth / 10;
      if (container.scrollLeft >= setWidth * 6) container.scrollLeft -= setWidth;
      else if (container.scrollLeft <= setWidth * 2) container.scrollLeft += setWidth;
    };
    const interval = setInterval(autoScroll, 20);

    const handleInfiniteScroll = () => {
      const setWidth = container.scrollWidth / 10;
      if (container.scrollLeft >= setWidth * 6) container.scrollLeft -= setWidth;
      else if (container.scrollLeft <= setWidth * 2) container.scrollLeft += setWidth;
    };
    container.addEventListener('scroll', handleInfiniteScroll);
    return () => { clearInterval(interval); container.removeEventListener('scroll', handleInfiniteScroll); };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-auto py-4 flex cursor-grab active:cursor-grabbing"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex whitespace-nowrap">
        {allTestimonials.map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[420px] mx-3 lg:mx-5"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] relative h-full flex flex-col justify-between whitespace-normal transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-white/10">
              {/* Decorative blue circle */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-blue-600 rounded-full opacity-90 z-[1]"></div>
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-blue-100 z-[2]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbca1e" color="#fbca1e" className="sm:w-4 sm:h-4" />)}
                </div>
                {/* Review text */}
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                  "{t.text}"
                </p>
              </div>
              {/* Author */}
              <div className="border-t border-slate-100 pt-4 mt-5 flex items-center gap-3 sm:gap-4 relative z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 rounded-full bg-gradient-to-br from-stefto-indigo to-stefto-blue flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                  {t.name.replace(/^(Mr\.|Mrs\.)\s*/i, '').charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-800 mb-0.5 tracking-tight">{t.name}</h4>
                  <p className="text-[0.6rem] sm:text-[0.65rem] text-stefto-blue font-bold tracking-widest uppercase">{t.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, number, label }) => {
  const [count, setCount] = React.useState(0);
  const target = parseInt(number);
  const cardRef = React.useRef(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={cardRef}
      className="bg-white p-4 sm:p-8 lg:p-10 text-center shadow-md hover:shadow-xl transition-all duration-300 ease-out cursor-pointer rounded-lg relative overflow-hidden group w-full"
    >
      {/* Animated Bottom Slider */}
      <div className="absolute bottom-0 left-0 h-[5px] w-0 bg-stefto-blue group-hover:w-full transition-all duration-400 ease-out"></div>

      <div className="mb-4 lg:mb-6 text-slate-400">
        <Icon size={36} strokeWidth={1} className="mx-auto sm:w-10 sm:h-10" />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-[3.5rem] font-serif italic font-extrabold text-slate-800 leading-none mb-2 flex justify-center items-start">
        {count}<span className="text-stefto-blue text-xl sm:text-2xl mt-0.5">+</span>
      </div>
      <div className="text-slate-400 text-sm sm:text-base lg:text-lg font-medium">{label}</div>
    </div>
  );
};

const SolutionCard = ({ title, desc }) => (
  <div
    className="bg-[rgba(2,11,40,0.85)] backdrop-blur-md p-6 sm:p-8 lg:p-10 text-white h-full flex flex-col relative border border-white/5 transition-all duration-300 cursor-pointer hover:bg-[rgba(4,21,60,0.95)] hover:-translate-y-1"
  >
    <h3 className="text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6 font-bold tracking-tight">{title}</h3>
    <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-loose text-white/80 font-normal">{desc}</p>
  </div>
);

const AccordionItem = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-400 border-l-[5px] border-l-red-500 border-b border-t border-r border-slate-100">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex items-center justify-between cursor-pointer transition-all hover:bg-slate-50"
      >
        <span className="text-base sm:text-lg lg:text-xl font-bold text-stefto-indigo tracking-tight">{title}</span>
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 flex items-center justify-center text-stefto-indigo transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          <ArrowRight size={16} strokeWidth={2.5} />
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-out bg-white ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 sm:px-6 lg:px-10 pb-6 pt-2">
          <div className="flex flex-col gap-4 lg:gap-5">
            {items.map((sub, sIdx) => (
              <div key={sIdx} className="flex items-center gap-3 lg:gap-5 text-stefto-indigo text-sm sm:text-base lg:text-lg font-medium cursor-pointer transition-transform hover:translate-x-1">
                <div className="w-3 h-3 border-[1.5px] border-stefto-sky rounded-sm flex-shrink-0"></div>
                {sub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => { }, []);

  return (
    <main className="w-full overflow-x-hidden bg-slate-50">

      {/* 1. Hero Section */}
      <section
        className="relative flex items-center min-h-[400px] sm:min-h-[480px] lg:min-h-[550px] h-auto sm:h-[60vh] lg:h-[75vh] px-[5%] sm:px-[7%] lg:px-[10%] pt-16 sm:pt-12 pb-16 sm:pb-0"
        style={{
          background: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#041434'
        }}
      >
        {/* Hero Content */}
        <div className="relative z-[2] max-w-[800px] text-white">
          <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-extrabold mb-4 lg:mb-5 leading-[1.1] tracking-tight"
            style={{ color: 'white', background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset' }}
          >
            AI-Enhanced<br />
            India's Next Frontier
          </h1>
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 lg:mb-10 max-w-[650px] leading-relaxed" style={{ color: 'white' }}>
            Leading Hub for Digital Business Services, Operational Excellence, and Transformational Solutions
          </p>
          <Link to="/contact-us" className="btn-spark inline-block bg-stefto-indigo py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-full text-white font-bold text-sm sm:text-base no-underline">
            Contact Us
          </Link>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,20,52,0.7)] to-[rgba(4,20,52,0.3)] z-[1]"></div>

        {/* Floating Services Bar */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] max-w-[1200px] bg-white py-4 sm:py-5 px-4 sm:px-6 lg:px-14 rounded-xl z-10 hidden sm:flex sm:flex-col md:flex-row md:justify-between md:items-center gap-3 sm:gap-4 lg:gap-10 shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_6px_rgba(0,0,0,0.04),0_12px_25px_rgba(0,0,0,0.1),0_30px_60px_rgba(0,0,0,0.15)] border border-black/[0.03]">
          {['Inbound and Outbound', 'Digital Sales Fulfilment', 'Debt Collection', 'Market Research'].map((service, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm lg:text-base font-bold tracking-tight transition-transform hover:-translate-y-0.5">
              <div className="w-2.5 h-2.5 border-2 border-stefto-sky rounded-sm flex-shrink-0"></div>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 2. Our Endeavors */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-center justify-center">
            {/* Image */}
            <div className="relative w-full max-w-[550px] h-[250px] sm:h-[350px] lg:h-[450px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,51,204,0.25)] border border-slate-200">
              <img src={endeavorsImage} alt="Our Endeavors" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 text-center lg:text-left">
              <div className="mb-6 sm:mb-8 lg:mb-12 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-4 lg:gap-5 mb-4 lg:mb-5">
                  <div className="branding-box w-7 h-7 sm:w-8 sm:h-8 border-2 border-stefto-indigo rounded-lg cursor-pointer"></div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-slate-800 tracking-tight m-0" style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: '#1e293b' }}>
                    Our <span className="text-stefto-indigo font-extrabold">Endeavors</span>
                  </h2>
                </div>
                <div className="flex gap-2 items-center lg:pl-11">
                  <div className="w-1.5 h-1.5 bg-stefto-indigo rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-stefto-indigo rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-stefto-indigo rounded-full"></div>
                  <div className="w-[80px] sm:w-[100px] h-1 bg-stefto-sky rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-loose text-slate-500 font-normal m-0" style={{ color: '#475569' }}>
                  Every day, we work closely with brands to tackle present challenges and prepare for <span className="text-stefto-indigo font-semibold">future opportunities</span> through our all-encompassing and inventive digital services. With a worldwide presence and profound local knowledge, we enable our team members to set industry standards, nurturing a <span className="text-stefto-indigo font-semibold">culture of creativity and inspiration</span>.
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-loose text-slate-500 font-normal m-0" style={{ color: '#475569' }}>
                  This strategy helps us grow our global presence. When your customers are looking for solutions, you can rely on our committed team to offer unwavering support at every step. Assisting others isn't just a part of our work— <span className="text-stefto-indigo font-bold">it's central to everything we do.</span>
                </p>
              </div>

              <div className="mt-8 lg:mt-12 flex justify-center lg:justify-start">
                <Link to="/contact-us" className="inline-flex items-center bg-white text-stefto-indigo py-2 sm:py-2.5 px-6 sm:px-8 lg:px-10 rounded-full font-bold text-sm sm:text-base no-underline shadow-[0_12px_30px_rgba(0,26,114,0.15)] transition-all duration-300 border-[1.5px] border-stefto-indigo hover:bg-gradient-to-r hover:from-stefto-sky hover:to-stefto-indigo hover:text-white hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,26,114,0.4)] hover:border-transparent">
                  How can we help you?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner Across Section */}
      <section
        className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-white overflow-hidden relative"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 z-0"></div>
        {/* Accent */}
        <div className="absolute -top-[15%] -right-[5%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[radial-gradient(circle,rgba(239,68,68,0.03)_0%,transparent_70%)] z-[1]"></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start justify-between">
            {/* Left Title */}
            <div className="flex-1 min-w-0 lg:sticky lg:top-[100px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-normal text-stefto-indigo leading-tight m-0"
                style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: '#1a237e' }}>
                Stefto in India<br />
                is your partner <span className="font-extrabold border-b-4 border-red-500">across...</span>
              </h2>
            </div>

            {/* Right Accordions */}
            <div className="flex-[1.1] min-w-0 w-full max-w-full lg:max-w-[650px] flex flex-col gap-3 sm:gap-4 lg:gap-5">
              {[
                { title: 'Industries', items: ['Healthcare', 'Travel', 'BFSI', 'Retail & Ecommerce', 'Telecom', 'Utilities', 'Manufacturing'] },
                { title: 'Channel', items: ['Direct Sales', 'Partner Network', 'Global Distribution', 'Wholesale Operations'] },
                { title: 'Services', items: ['Digital Strategy', 'Cloud Transformation', 'Operational Excellence', 'Customer Experience'] }
              ].map((item, idx) => (
                <AccordionItem key={idx} title={item.title} items={item.items} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Solutions Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] bg-[#000b28] overflow-hidden flex items-center">
        {/* Background Split */}
        <div className="absolute top-0 left-0 w-full h-full hidden lg:flex z-[1]">
          <div className="flex-[1.1] bg-[#000b28]"></div>
          <div className="flex-1 bg-cover bg-center relative" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop")` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#000b28] to-[rgba(0,11,40,0.2)]"></div>
          </div>
        </div>

        <div className="relative z-[2] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
          <div className="mb-8 sm:mb-10 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[3.25rem] text-white font-normal m-0" style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: 'white' }}>
              Our <span className="font-bold">Solutions</span>
            </h2>
            <div className="flex gap-1.5 mt-4 lg:mt-5">
              <div className="w-1 h-1 bg-stefto-sky rounded-full"></div>
              <div className="w-1 h-1 bg-stefto-sky rounded-full"></div>
              <div className="w-1 h-1 bg-stefto-sky rounded-full"></div>
              <div className="w-10 sm:w-12 h-1 bg-stefto-sky rounded-sm"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 border-b border-white/30 pb-8 lg:pb-10">
            <SolutionCard title="Customer Management" desc="Through our smart blend of people, process and technologies, we imagine, design and deliver outstanding customer experiences." />
            <SolutionCard title="Digital Solutions" desc="We help you engage in conversation with your customers through digital channels and introduce effective Data-Driven marketing models." />
            <SolutionCard title="Process Management" desc="We streamline your processes, reduce and remove the burden of repetitive tasks, allowing your team to be more focused and increase productivity." />
          </div>
        </div>
      </section>

      {/* 5. Organization Overview */}
      <section className="py-8 sm:py-12 lg:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-16">
            <span className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light text-slate-800">Organization </span>
            <span className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-stefto-blue">Overview</span>
            <div className="flex gap-1.5 mt-3 lg:mt-4 justify-center">
              <div className="w-1.5 h-1.5 bg-stefto-blue rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-stefto-blue rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-stefto-blue rounded-full"></div>
              <div className="w-12 sm:w-16 h-1.5 bg-stefto-blue rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <StatCard icon={Users} number="2000" label="Employees" />
            <StatCard icon={Globe2} number="20" label="Languages" />
            <StatCard icon={LinkIcon} number="50" label="Clients" />
            <StatCard icon={Globe} number="8" label="Offices" />
          </div>
        </div>
      </section>

      {/* 6. Dual Brand Story Showcase */}
      <section className="flex flex-col bg-stefto-navy">
        {/* Row 1: Talent Hero */}
        <div
          className="w-full relative h-auto min-h-[350px] sm:min-h-[450px] lg:h-[700px] bg-cover bg-center flex items-center justify-start px-[5%] sm:px-[6%] lg:px-[8%] py-10 sm:py-12 lg:py-16 overflow-hidden"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,20,52,0.85)] to-[rgba(4,20,52,0.2)]"></div>
          <div className="relative z-10 max-w-[600px] text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[3.5rem] text-white mb-4 lg:mb-5 font-extrabold leading-[1.1]"
              style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: 'white' }}>
              At Stefto, <br />talent sets us apart
            </h2>
            <div className="w-16 sm:w-20 h-1 sm:h-[5px] bg-yellow-500 mb-6 sm:mb-8 lg:mb-12"></div>
            <p className="text-sm sm:text-base lg:text-xl text-white leading-relaxed lg:leading-loose mb-6 sm:mb-8 lg:mb-14 font-normal" style={{ color: 'white' }}>
              We strongly value our people, who are essential to steering the company's success. A team dedicated to ongoing professional development. Discover a new path of growth, Join us!
            </p>
            <Link to="/careers" className="inline-flex py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-14 bg-stefto-sky text-white rounded-full no-underline font-bold text-sm sm:text-base lg:text-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Row 2: Social Commitment */}
        <div
          className="w-full relative h-auto min-h-[350px] sm:min-h-[450px] lg:h-[700px] bg-cover bg-center flex items-center justify-start px-[5%] sm:px-[6%] lg:px-[8%] py-10 sm:py-12 lg:py-16 overflow-hidden"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/10"></div>
          <div className="relative z-10 max-w-[600px] text-left">
            <h2 className="text-2xl sm:text-[2rem] lg:text-[3rem] text-white mb-4 lg:mb-5 font-extrabold leading-tight lg:leading-[1.2]"
              style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: 'white' }}>
              Our commitment: <br />Improvement of society
            </h2>
            <div className="w-16 sm:w-20 h-1 sm:h-[5px] bg-yellow-500 mb-6 sm:mb-8 lg:mb-12"></div>
            <p className="text-sm sm:text-base lg:text-xl text-white leading-relaxed lg:leading-loose mb-6 sm:mb-8 lg:mb-14 font-normal" style={{ color: 'white' }}>
              We aim to make a positive impact on everyone at Stefto and on society as a whole. By operating sustainably and staying committed to the environment, we ensure that our activities contribute to a better future for all.
            </p>
            <Link to="/about-us" className="inline-flex py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-14 bg-white text-stefto-navy rounded-full no-underline font-bold text-sm sm:text-base lg:text-lg">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 7. In The News */}
      <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-light text-slate-800"
              style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: '#1e293b' }}>
              In The <span className="text-stefto-blue font-bold">News</span>
            </h2>
            <div className="flex gap-1.5 mt-3 lg:mt-4 justify-center items-center">
              <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
              <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
              <div className="w-10 sm:w-12 h-1 bg-stefto-blue rounded-sm"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            <NewsCard img={news1} tag="Stefto" title="Stefto's expansion plan would create more job opportunities" desc="Dharmendra Kalra, the Chief Executive Officer of Stefto..." />
            <NewsCard img={news2} tag="Case Study 2" title="Stefto introduces Credit Refine product" desc="Stefto is excited to unveil its groundbreaking product, Credit Refine..." />
            <NewsCard img={news3} tag="Empowerment" title="Optimising Digital Innovation through Intelligent Services" desc="Digital transformation is now crucial for businesses aiming to stay competitive." />
          </div>
        </div>
      </section>

      {/* 8. Our Media Coverage */}
      <section
        className="py-10 sm:py-16 lg:py-[5.5rem] relative"
        style={{
          background: `linear-gradient(rgba(4, 20, 52, 0.6), rgba(4, 20, 52, 0.7)), url(${mediaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-16">
            <h2 className="text-lg sm:text-xl lg:text-[1.8rem] font-normal text-white tracking-wider"
              style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: 'white' }}>
              Our Media <span className="font-bold">Coverage</span>
            </h2>
            <div className="flex gap-1 mt-3 lg:mt-4 justify-center items-center">
              <div className="w-1 h-1 bg-stefto-sky rounded-full opacity-80"></div>
              <div className="w-1 h-1 bg-stefto-sky rounded-full opacity-80"></div>
              <div className="w-8 sm:w-10 h-1 bg-stefto-sky rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            <MediaLogoCard />
            <MediaLogoCard />
            <MediaLogoCard />
            <MediaLogoCard />
          </div>
        </div>
      </section>

      {/* 9. Infinite Logo Marquee */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-[1.8rem] font-normal text-slate-800"
              style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: '#1e293b' }}>
              The Platform Trusted by Over <span className="text-stefto-blue font-bold">50+ Brands</span>
            </h2>
            <div className="flex gap-1 mt-3 lg:mt-4 justify-center items-center">
              <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
              <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
              <div className="w-8 sm:w-10 h-1 bg-stefto-blue rounded"></div>
            </div>
          </div>
          <div className="w-full overflow-hidden relative h-[100px] sm:h-[120px] lg:h-[140px] flex items-center">
            <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
            <div className="flex w-max gap-4 sm:gap-6 lg:gap-8" style={{ animation: 'marquee 40s linear infinite', willChange: 'transform' }}>
              {[...Array(2)].map((_, loopIdx) => (
                <React.Fragment key={loopIdx}>
                  {partnerLogos.map((src, idx) => (
                    <BrandCard key={`${loopIdx}-${idx}`} src={src} idx={idx} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials From Clients */}
      <section
        className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(rgba(4, 20, 52, 0.6), rgba(4, 20, 52, 0.6)), url(${mediaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Section Header */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <p className="text-[0.7rem] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] mb-2 lg:mb-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
              WHAT OUR CLIENT SAY ABOUT STEFTO
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] font-light mb-4 lg:mb-5"
              style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: 'white' }}>
              Testimonials From <span className="font-bold">Clients</span>
            </h2>
            <div className="flex gap-1.5 mt-4 lg:mt-5 justify-center items-center">
              <div className="w-1 h-1 bg-stefto-sky rounded-full"></div>
              <div className="w-1 h-1 bg-stefto-sky rounded-full"></div>
              <div className="w-10 sm:w-12 h-1 bg-stefto-sky rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Infinite Scrolling Slider — full width, no horizontal padding */}
        <TestimonialSlider />
      </section>

      {/* 11. Latest Blogs */}
      <section className="py-12 sm:py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute left-[4%] top-0 bottom-0 w-px bg-slate-200 z-[1] hidden lg:block">
          <div className="absolute top-[10%] -left-[5px] w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
          <div className="absolute top-[50%] -left-[5px] w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
          <div className="absolute top-[90%] -left-[5px] w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
        </div>
        <div className="absolute right-[4%] top-0 bottom-0 w-px bg-slate-200 z-[1] hidden lg:block">
          <div className="absolute top-[20%] -right-[5px] w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
          <div className="absolute top-[60%] -right-[5px] w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
          <div className="absolute top-[85%] -right-[5px] w-3 h-3 rounded-full border-2 border-slate-300 bg-white"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header + CTA */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light text-slate-800 mb-3 lg:mb-5"
                style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: '#1e293b' }}>
                Latest <span className="text-stefto-blue font-extrabold">Blogs</span>
              </h2>
              <div className="flex gap-1.5 items-center">
                <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
                <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
                <div className="w-10 sm:w-12 h-1 bg-stefto-blue rounded-sm"></div>
              </div>
            </div>
            <Link to="/blogs" className="py-2.5 sm:py-3 lg:py-4 px-5 sm:px-6 lg:px-10 bg-[#155e75] text-white rounded-md no-underline font-bold text-xs sm:text-sm lg:text-base shadow-[0_4px_0_rgba(0,0,0,0.1)] transition-all hover:bg-[#0e7490]">
              View all blogs
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            <BlogCard date="28" month="Feb" tags={["Debt Collection", "Customer Support", "New Update"]} title="Management Solutions in Current Times" excerpt="The Significance of Recovery Management Solutions in Current Times" />
            <BlogCard date="23" month="Jan" tags={["Debt Collection"]} title="Making Debt Collection More Human: A 2025 Case Study" excerpt="How AI is Making Debt Collection More Human: A 2025 Case Study" />
            <BlogCard date="07" month="Jan" tags={["Debt Collection"]} title="According to the RBI report, Indian household debt is rising" excerpt="According to the RBI report, Indian household debt is rising, but it is relatively low in comparison with other emerging markets" />
          </div>
        </div>
      </section>

      {/* 12. Global Interaction CTA */}
      <section
        className="py-10 sm:py-16 lg:py-24 relative"
        style={{
          background: `linear-gradient(rgba(4, 20, 52, 0.8), rgba(4, 20, 52, 0.8)), url(${globalBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20">
            {/* Left */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-[2.8rem] text-white font-extrabold leading-tight lg:leading-[1.2] mb-4 sm:mb-6 lg:mb-10"
                style={{ background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', color: 'white' }}>
                Globally, we handle billions of unique interactions.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed lg:leading-loose max-w-[600px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Stefto India is recognized as a Center of Excellence for Back-Office Outsourcing Services and Transformation Solutions. We deliver seamless customer engagement powered by robotics, artificial intelligence, and advanced analytics.
              </p>
            </div>

            {/* Right - Subscribe Card */}
            <div className="flex-1 min-w-0 w-full max-w-[500px]">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 min-h-[200px] sm:min-h-[250px] lg:min-h-[280px] flex flex-col justify-center shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden">
                <div className="text-base sm:text-lg lg:text-xl text-slate-800 font-bold mb-4 sm:mb-5 lg:mb-6 text-center">
                  Subscribe to our newsletter
                </div>
                <div className="flex flex-col sm:flex-row bg-slate-100 rounded-xl p-1 sm:p-1.5 items-stretch sm:items-center shadow-inner">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border-none bg-transparent py-3 px-4 text-sm sm:text-base outline-none text-slate-800"
                  />
                  <button className="bg-[#043b4d] text-white border-none py-3 px-4 sm:px-6 lg:px-8 rounded-lg font-extrabold text-sm sm:text-base lg:text-lg cursor-pointer transition-all shadow-md hover:bg-[#0e7490] hover:-translate-y-0.5 mt-2 sm:mt-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

// --- SUPPORTING COMPONENTS ---

const partnerLogos = Array.from({ length: 26 }, (_, i) => `/assets/partners/${i + 1}.png`);

const BlogCard = ({ date, month, tags, title, excerpt }) => (
  <div className="bg-white rounded-lg p-5 sm:p-6 lg:p-8 pt-8 sm:pt-10 lg:pt-12 shadow-md relative transition-all duration-300 cursor-pointer border border-black/[0.02] h-full flex flex-col group hover:-translate-y-2 hover:shadow-xl">
    {/* Floating Date Badge */}
    <div className="absolute top-8 sm:top-10 -left-3 sm:-left-5 bg-rose-500 text-white py-2 sm:py-3 px-3 sm:px-3.5 rounded text-center min-w-[48px] sm:min-w-[60px] shadow-[8px_8px_30px_rgba(244,63,94,0.3)]">
      <div className="text-lg sm:text-2xl font-extrabold leading-none">{date}</div>
      <div className="text-[0.6rem] sm:text-[0.7rem] font-bold uppercase opacity-90">{month}</div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 lg:mb-6 ml-2 sm:ml-4">
      {tags.map((tag, idx) => (
        <span key={idx} className="bg-stefto-sky text-white text-[0.55rem] sm:text-[0.65rem] font-bold py-1 px-2 sm:px-2.5 rounded uppercase">{tag}</span>
      ))}
    </div>

    <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-extrabold mb-3 lg:mb-6 leading-snug pl-2 sm:pl-4">{title}</h3>
    <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed mb-6 lg:mb-10 pl-2 sm:pl-4" style={{ color: '#64748b' }}>{excerpt}</p>

    <div className="mt-auto pl-2 sm:pl-4">
      <button className="bg-blue-600 text-white border-none py-2 sm:py-3 lg:py-3.5 px-4 sm:px-5 lg:px-7 rounded-md font-bold text-xs sm:text-sm lg:text-base flex items-center gap-2 cursor-pointer">
        Read More <span className="text-base sm:text-lg">→</span>
      </button>
    </div>
  </div>
);

const BrandCard = ({ src, idx }) => (
  <div className="bg-white h-16 sm:h-20 lg:h-24 w-[140px] sm:w-[170px] lg:w-[200px] flex items-center justify-center rounded-xl px-4 sm:px-6 lg:px-8 shadow-sm border border-slate-100 flex-shrink-0">
    <img
      src={src}
      alt={`Partner brand ${idx + 1}`}
      className="max-h-10 sm:max-h-12 lg:max-h-14 w-full object-contain"
      onError={(e) => { e.target.style.display = 'none'; }}
    />
  </div>
);

const MediaLogoCard = () => (
  <div className="bg-white h-16 sm:h-20 lg:h-[100px] rounded flex items-center justify-center shadow-lg transition-all duration-400 cursor-pointer gap-2 sm:gap-3 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(59,130,246,0.4)]">
    <div className="w-5 h-5 sm:w-6 sm:h-6 relative opacity-50">
      <div className="border-2 border-slate-400 w-full h-full rounded-sm"></div>
      <div className="absolute top-1/2 -left-[10%] w-[120%] h-0.5 bg-slate-400 rotate-45"></div>
    </div>
    <span className="text-slate-400 font-semibold text-xs sm:text-sm lg:text-lg font-mono">/Not Load</span>
  </div>
);

const NewsCard = ({ img, title, desc, tag }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-400 flex flex-col h-full cursor-pointer border border-black/[0.02] group hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(10,48,140,0.12)]">
    <div className="w-full h-28 sm:h-36 lg:h-40 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}></div>
    <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
      <div className="text-[0.7rem] sm:text-xs text-slate-400 uppercase mb-2 sm:mb-3 font-semibold flex items-center gap-1.5" style={{ color: '#64748b' }}>
        <div className="w-2 sm:w-2.5 h-0.5 bg-stefto-blue"></div>
        {tag || "Latest News"}
      </div>
      <h3 className="text-sm sm:text-base lg:text-xl text-[#002699] font-extrabold mb-2 sm:mb-3 lg:mb-4 leading-snug">{title}</h3>
      <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed m-0" style={{ color: '#64748b' }}>{desc}</p>
    </div>
  </div>
);

export default Home;
