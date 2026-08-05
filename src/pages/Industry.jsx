import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingLayout from '../components/layout/LandingLayout';
import { 
  Globe, Landmark, ShoppingCart, Package, CreditCard, Leaf, 
  Radio, BookOpen, Map, Plane, Activity, Tv, 
  Building, Home, Laptop, Tag, Film, Car, Briefcase 
} from 'lucide-react';

const Industry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-slate-50 min-h-screen">

        {/* HERO BANNER */}
        <div 
          className="relative w-full bg-[#152b69] flex flex-col items-center justify-center pt-32 pb-24 md:pt-40 md:pb-28 px-6 mb-16 md:mb-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3vw), 50% 100%, 0 calc(100% - 3vw))" }}
        >
          {/* Decorative left triangle */}
          <svg className="absolute left-[10%] md:left-[20%] top-1/2 -translate-y-1/2 w-6 h-6 text-[#e11d48] opacity-80 hidden md:block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="16 4 6 12 16 20" /></svg>
          
          {/* Decorative right triangle */}
          <svg className="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 w-6 h-6 text-[#e11d48] opacity-80 hidden md:block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polygon points="8 4 18 12 8 20" /></svg>

          <h1 className="text-4xl md:text-[44px] font-bold text-white mb-6 text-center">Industries We Serve</h1>
          
          <div className="flex items-center gap-2 text-[15px] font-medium tracking-wide">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors cursor-pointer">
              <Home size={16} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <span className="text-gray-500 font-normal px-1">/</span>
            <Link to="/industry" className="text-[#e11d48] hover:text-rose-400 transition-colors cursor-pointer">
              Industries We Serve
            </Link>
          </div>
        </div>

        {/* INDUSTRIES GRID SECTION */}
        <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto bg-slate-50">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>Key Industries</h2>
            <p className="text-slate-700 text-[15px] md:text-lg leading-8 font-medium max-w-4xl mx-auto">
              Our services cater to a wide range of industries, ensuring that businesses across various sectors receive the support they need to thrive. Whether you're in global operations, e-commerce, or healthcare, we have the expertise to assist you. Providing tailored solutions to meet your needs &amp; challenges is our specialty! Explore our comprehensive list of industries below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* 1. Global */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Globe size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Global</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Serving Multinational Corporations with tailored solutions to meet their global business requirement.
              </p>
            </div>

            {/* 2. Government */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Landmark size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">PSU &amp; Government</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing specialized services to the Public Sector Undertakings &amp; Government Agencies to enhance efficiency &amp; service provision.
              </p>
            </div>

            {/* 3. E-Commerce */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <ShoppingCart size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">E- Commerce</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Offering comprehensive solutions to support the online retail players &amp; enhance customer experience.
              </p>
            </div>

            {/* 4. FMCG */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Package size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">FMCG</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Catering to the fast-paced consumer goods industry, with innovative solutions, for secure &amp; efficient financial transactions.
              </p>
            </div>

            {/* 5. FinTech */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <CreditCard size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">FinTech</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Supporting financial technology companies with innovative solutions for secure &amp; efficient financial transactions.
              </p>
            </div>

            {/* 6. Pharma & Agro */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Leaf size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Pharma &amp; Agro</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing specialized services to the pharmaceutical &amp; agrochemical industries to ensure regulatory compliance &amp; operational efficiency.
              </p>
            </div>

            {/* 7. Telecom & Communication */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Radio size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Telecom &amp; Communication</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Offering solutions to enhance communication networks &amp; customer experiences in the telecom industry.
              </p>
            </div>

            {/* 8. Education */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <BookOpen size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Education</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Supporting educational institutions with technology-driven solutions for learning management &amp; student engagement.
              </p>
            </div>

            {/* 9. Travel, Tourism & Surveys */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Map size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Travel, Tourism &amp; Surveys</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing comprehensive solutions to enhance travel experiences &amp; gather valuable customer feedback.
              </p>
            </div>

            {/* 10. Hospitality/ Aviation */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Plane size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Hospitality/ Aviation</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Offering specialized services to the hospitality &amp; aviation industries to improve operational efficiencies &amp; customer satisfaction.
              </p>
            </div>

            {/* 11. Healthcare */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Activity size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Healthcare</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing healthcare institutions with technology-driven solutions for appointments, services, management, and engagement.
              </p>
            </div>

            {/* 12. Infotainment */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Tv size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Infotainment</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing innovative solutions for interactive &amp; engaging content delivery in the information &amp; entertainment industry.
              </p>
            </div>

            {/* 13. BFSI */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Building size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">BFSI Sector</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Supporting the banking, financial services, and insurance sectors with secure &amp; efficient solutions for financial transactions.
              </p>
            </div>

            {/* 14. Real Estate */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Home size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Real Estate</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Offering solutions to streamline real estate operations &amp; enhance customer experiences in the property market.
              </p>
            </div>

            {/* 15. IT Tech */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Laptop size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">IT Tech</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing IT solutions &amp; services to enhance operational efficiency &amp; innovation in the technology sector.
              </p>
            </div>

            {/* 16. Retail */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Tag size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Retail</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Offering comprehensive solutions to enhance retail operations &amp; customer experiences in the retail industry.
              </p>
            </div>

            {/* 17. Media & Entertainment */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Film size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Media &amp; Entertainment</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing innovative solutions for content creation, delivery &amp; engagement in the media &amp; entertainment firms.
              </p>
            </div>

            {/* 18. Automobile */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Car size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Automobile</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Supporting the automobile industry with technology-driven solutions for sales, marketing, and customer service.
              </p>
            </div>

            {/* 19. NBFC */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Briefcase size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">NBFC</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Offering banking services to the non-banking financial institutions to ensure regulatory compliance &amp; operational efficiency.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200 text-center pb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#0f2a5e]" style={{ fontFamily: "'Fraunces', serif" }}>
              We are a lending service partner for <span className="text-[#e11d48]">mPokket</span>
            </h3>
          </div>
        </section>

      </main>
    </LandingLayout>
  );
};

export default Industry;
