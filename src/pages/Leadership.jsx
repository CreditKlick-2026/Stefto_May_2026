import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import LandingLayout from '../components/layout/LandingLayout';

// ── Leadership Data (from stefto_client_repo About page) ─────────────────────
const leaders = [
  {
    name: 'Rajnish Datta',
    role: 'Director',
    initials: 'RD',
    color: 'from-black to-slate-900',
    img: '/assets/team/Rajnish.png',
    shortBio: '30+ Years of experience in Banking Operations & HR',
    bio: `Rajnish Datta is a dynamic and results-oriented leader with a proven track record of driving growth and achieving strategic objectives across diverse sectors, particularly within the financial services industry.\n\nWith over three decades of experience, he brings a wealth of knowledge and expertise to Stefto Management Services as its Director.`
  },
  {
    name: 'Parvesh Paul Sood',
    role: 'Director',
    initials: 'PS',
    color: 'from-black to-slate-900',
    img: '/assets/team/Parvesh.png',
    shortBio: '30+ Years of experience in Banking & Finance Operations',
    bio: `Parvesh Paul Sood is a distinguished financial services professional and strategic leader with over 30 years of experience across diverse banking domains, including consumer, SME, and commercial banking.\n\nHis expertise extends to strategic investment, risk management, and business incubation, making him a valuable asset to organizations seeking growth and innovation.`
  },
  {
    name: 'Dharmendra Kalra',
    role: 'Chief Executive Officer',
    initials: 'DK',
    color: 'from-black to-slate-900',
    img: 'https://res.cloudinary.com/dtz8hacj4/image/upload/v1779884703/ChatGPT_Image_May_27_2026_05_54_47_PM_aqvshw.png',
    objectPosition: '50% 20%',
    shortBio: '25+ Years of experience in Banking Operations & Sales',
    bio: `Dharmendra Kalra is a dynamic leader and entrepreneur with over 25+ years of rich experience in the financial services industry, particularly in debt management customer service and sale collection.\n\nAs the CEO of Stefto Management Services, he is dedicated to simplifying and enhancing financial services through digitization.`
  }
];

const LeaderCard = ({ leader, index }) => {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = leader.bio.split('\n\n').filter(Boolean);

  const [imgErr, setImgErr] = React.useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Photo — full image, gradient overlay, name on image */}
      <div className="relative overflow-hidden bg-slate-100">
        {leader.img && !imgErr ? (
          <img
            src={leader.img}
            alt={leader.name}
            className="w-full h-[380px] object-cover block transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ display: 'block', objectPosition: leader.objectPosition || 'center top' }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <div
            className={`w-full bg-gradient-to-br ${leader.color} flex items-center justify-center text-white font-extrabold text-5xl`}
            style={{ minHeight: '300px' }}
          >
            {leader.initials}
          </div>
        )}

        {/* Smooth dark gradient — no hard line */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[rgba(4,20,52,0.95)] via-[rgba(4,20,52,0.4)] to-transparent pointer-events-none" />

        {/* Name + Role overlaid on gradient */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 z-10">
          <h3 className="text-white font-extrabold text-base sm:text-lg leading-tight drop-shadow-lg">
            {leader.name}
          </h3>
          <span
            className={`inline-block mt-1.5 text-[0.58rem] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-full bg-gradient-to-r ${leader.color} text-white shadow-lg`}
          >
            {leader.role}
          </span>
        </div>
      </div>

      {/* Card Content — compact */}
      <div className="p-4 sm:p-5 flex flex-col">
        {/* Short Bio Tag */}
        <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 mb-3 self-start">
          <div className="w-1.5 h-1.5 rounded-full bg-stefto-blue flex-shrink-0"></div>
          <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold text-slate-500">{leader.shortBio}</span>
        </div>

        {/* Bio Text */}
        <div className="flex-1">
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify font-medium">
            {paragraphs[0]}
          </p>
          {paragraphs.length > 1 && (
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${expanded ? 'max-h-[400px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
            >
              {paragraphs.slice(1).map((p, i) => (
                <p key={i} className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-3 text-justify font-medium">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Expand Toggle */}
        {paragraphs.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1.5 text-stefto-blue font-bold text-[0.65rem] sm:text-xs uppercase tracking-wider cursor-pointer bg-transparent border-none p-0 hover:gap-2.5 transition-all"
          >
            {expanded ? (
              <><ChevronUp size={13} /> Read Less</>
            ) : (
              <><ChevronDown size={13} /> Read More</>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <LandingLayout footerCurveColor="fill-slate-50">
      <main className="w-full bg-slate-50 min-h-screen overflow-x-hidden">

        {/* 1. Hero Banner */}
        <section
          className="relative flex items-center px-[5%] sm:px-[7%] lg:px-[10%] pt-24 pb-8"
          style={{
            background: 'linear-gradient(135deg, #041434 0%, #1a237e 60%, #041434 100%)',
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-white/[0.03] pointer-events-none"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] rounded-full bg-white/[0.03] pointer-events-none"></div>

          <div className="relative z-10 max-w-[600px]">



            <h1
              className="text-[1.6rem] sm:text-[2.2rem] lg:text-[2.8rem] font-extrabold text-white leading-[1.1] mb-5"
              style={{ color: 'white', background: 'none' }}
            >
              The Minds <span className="text-white">Behind Stefto</span>
            </h1>

          </div>
        </section>

        {/* 2. Leadership Cards Grid */}
        <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section heading */}
            <div className="text-center mb-6 sm:mb-8">

              <h2
                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light text-[#041434]"
                style={{ background: 'none', color: '#041434' }}
              >
                Leading the <span className="font-extrabold text-stefto-blue">future</span>
              </h2>
              <div className="flex gap-1.5 mt-4 justify-center items-center">
                <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
                <div className="w-1 h-1 bg-stefto-blue rounded-full"></div>
                <div className="w-12 h-1 bg-stefto-blue rounded-sm"></div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {leaders.map((leader, i) => (
                <LeaderCard key={i} leader={leader} index={i} />
              ))}
            </div>

            {/* Bold Leadership Quote moved below cards */}
            <div className="max-w-[800px] mx-auto px-4 mt-16 sm:mt-20">
              <div className="relative inline-block text-center w-full">
                <div className="absolute -top-3 -left-4 text-[#1a237e] opacity-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed px-6 z-10 relative">
                  <span className="font-bold text-[#041434]">Bold leadership</span> — Our dedication makes the difference, and we have the passion and persistence to thrive amid complexity and overcome obstacles in an ever changing regulatory environment.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA Strip */}
        {/* 
      <section className="py-12 sm:py-16 bg-[#041434] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-white mb-4 leading-tight">
            Want to work with our leadership team?
          </h3>
          <p className="text-white/70 text-sm sm:text-base mb-8 max-w-[560px] mx-auto">
            Join Stefto and be part of the mission to transform India's financial services landscape with technology and empathy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#041434] py-3 px-8 rounded-full font-extrabold text-sm sm:text-base no-underline hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              View Careers <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white py-3 px-8 rounded-full font-bold text-sm sm:text-base no-underline hover:border-white hover:-translate-y-1 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      */}

      </main>
    </LandingLayout>
  );
};

export default Leadership;
