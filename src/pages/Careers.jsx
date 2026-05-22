import React, { useEffect, useState } from 'react';
import { Square, X, Upload } from 'lucide-react';
import perksImage from '../assets/stefto_career_working.png';
import ctaImage from '../assets/stefto_business_growth.png';
import jobAlertsImage from '../assets/stefto_job_alerts.png';
import LandingLayout from '../components/layout/LandingLayout';

const Careers = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-white min-h-screen pt-16">

        {/* 1. Join The Family Section */}
        <section className="w-full pt-4 pb-16 sm:pt-6 sm:pb-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[900px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-6 lg:mb-10" style={{ fontFamily: "'Fraunces', serif" }}>
                Join the <span className="italic">Stefto Family</span>
              </h2>

              <div className="text-base sm:text-lg leading-relaxed space-y-6 text-justify bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-100 border-l-4 border-l-[#1e3a8a] shadow-sm">
                <p className="text-black">
                  At Stefto, we are digital innovators. We leverage the power of technology to solve the challenges
                  faced by our clients. We owe our success to our team of innovators and passionate problem
                  solvers. If you love working in a fast-paced environment with ample opportunities to advance your
                  career while helping customers amplify their success, then Stefto is the perfect choice for you. Join
                  our winning team to make a change in customer experience.
                </p>
                <p className="text-black">
                  Browse available jobs. Cannot find something that fits you? Send us your resume and we will help
                  you find the right role for you on our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Perks Section */}
        <section className="w-full pt-10 pb-20 sm:pt-16 sm:pb-32 bg-[#fdfdfd] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Title Text positioned above the layout */}
            <div className="mb-10 lg:mb-14 px-4 sm:px-0 flex flex-col items-center text-center">
              <h2 className="text-[1.125rem] sm:text-xl lg:text-2xl tracking-[0.2em] text-black uppercase font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
                Perks of Working With Stefto
              </h2>

            </div>

            <div className="relative flex flex-col lg:flex-row">

              {/* Left Image Area */}
              <div className="w-full lg:w-[45%] h-[400px] sm:h-[600px] relative">
                <img
                  src={perksImage}
                  alt="Man working on laptop"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Right Overlapping White Card Area */}
              <div className="w-[95%] mx-auto lg:w-[50%] bg-white p-6 sm:p-10 shadow-[0_5px_40px_rgba(0,0,0,0.06)] relative mt-[-150px] lg:mt-[130px] lg:-ml-[8%] z-20">

                <ul className="flex flex-col">

                  <li className="border-b border-slate-100 py-5 sm:py-6 group hover:bg-slate-50 transition-colors px-2 sm:px-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase block mb-1">
                          Positive Work Culture
                        </span>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-0 mt-1">
                          A good organization fosters a positive work culture, which can lead to higher productivity and a more engaged workforce.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li className="border-b border-slate-100 py-5 sm:py-6 group hover:bg-slate-50 transition-colors px-2 sm:px-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase block mb-1">
                          Effective Use of Individual Expertise
                        </span>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-0 mt-1">
                          Collaboration allows teams to utilize individual strengths and expertise, leading to higher-quality output and stronger overall performance.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li className="border-b border-slate-100 py-5 sm:py-6 group hover:bg-slate-50 transition-colors px-2 sm:px-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase block mb-1">
                          Improved Knowledge Sharing
                        </span>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-0 mt-1">
                          Collaboration encourages frequent sharing of updates, documents, and data, which reduces time spent searching for information and saves up to 19% of the time knowledge workers typically spend gathering data.
                        </p>
                      </div>

                    </div>
                  </li>

                  <li className="py-5 sm:py-6 group hover:bg-slate-50 transition-colors px-2 sm:px-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-bold text-[11px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase block mb-1">
                          Added Fun & Engagement
                        </span>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-0 mt-1">
                          Teamwork injects a social element into work, making it more enjoyable through shared experiences and camaraderie.
                        </p>
                      </div>

                    </div>
                  </li>

                </ul>

              </div>

            </div>
          </div>
        </section>

        {/* 3. Job Listings Section */}
        <section className="w-full py-16 sm:py-24 bg-white relative">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col items-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#2d3a4b] text-center tracking-tight mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                Choose a career with Stefto and <span className="italic text-[#374151]">let's grow together!</span>
              </h2>
              <div className="w-full flex justify-end mt-4">
                <div className="w-[150px] lg:w-[300px] h-[1px] bg-orange-300"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Job 1 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Voice (Sales)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida</p>
                </div>
                <button onClick={() => { setSelectedJob("Voice (Sales)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 2 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Voice (Customer Support)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
                </div>
                <button onClick={() => { setSelectedJob("Voice (Customer Support)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 3 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">A.M (Sales)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
                </div>
                <button onClick={() => { setSelectedJob("A.M (Sales)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 4 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">A.M (Customer Support)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon</p>
                </div>
                <button onClick={() => { setSelectedJob("A.M (Customer Support)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

              {/* Job 5 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">HCM</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">H.R (Hiring)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
                </div>
                <button onClick={() => { setSelectedJob("H.R (Hiring)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 6 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">TRAINING</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Trainer (Sales)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
                </div>
                <button onClick={() => { setSelectedJob("Trainer (Sales)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 7 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">M.I.S</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
                </div>
                <button onClick={() => { setSelectedJob("M.I.S"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 8 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <p className="text-[#f59e0b] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4">OPERATION</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Manager (Customer Operations)</h3>
                  <p className="text-[#475569] text-sm font-medium">Gurgaon, Noida, Delhi</p>
                </div>
                <button onClick={() => { setSelectedJob("Manager (Customer Operations)"); setIsApplyModalOpen(true); }} className="bg-stefto-indigo text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-stefto-navy transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Job Alerts Section */}
        <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

              {/* Left Image Area */}
              <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] border border-slate-100 rounded-lg overflow-hidden shadow-lg relative">
                <img src={jobAlertsImage} alt="Job Alerts" className="w-full h-full object-cover object-center" />
              </div>

              {/* Right Content Area */}
              <div className="w-full md:w-1/2 flex flex-col">
                <p className="text-[#f59e0b] text-sm font-medium tracking-wide uppercase mb-4">
                  JOB ALERTS
                </p>
                <h2 className="text-3xl sm:text-4xl text-[#2d3a4b] font-bold mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                  Get notified of new openings
                </h2>
                <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-8">
                  Stay ahead in your career by subscribing to our job alerts! Receive timely
                  notifications about new job openings, ensuring you're the first to know about
                  exciting opportunities. Don't miss out on your dream job - sign up today to
                  stay informed and take the next step in your professional journey
                </p>
                <button className="bg-stefto-indigo text-white tracking-[0.15em] font-semibold py-3 sm:py-4 px-8 w-fit hover:bg-stefto-navy transition-colors text-xs sm:text-sm">
                  REGISTER NOW
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 5. CTA Banner Section */}
        <section
          className="w-full relative py-20 sm:py-32 lg:py-40"
          style={{
            backgroundImage: `url(${ctaImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
          <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 lg:mb-8 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Here to Help Your <span className="italic">Every Business Need.</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-900 font-medium leading-relaxed mb-10 lg:mb-12 max-w-3xl">
              Through operational clarity, we provide you with the customer support confidence you need to achieve.<br className="hidden sm:block" />
              And, that's just the beginning.
            </p>
            <button className="bg-stefto-indigo hover:bg-stefto-navy transition-colors text-white font-semibold py-3 sm:py-4 px-8 text-sm sm:text-base tracking-wide shadow-xl rounded-sm">
              Get a Free Quote
            </button>
          </div>
        </section>

      </main>

      {/* Apply Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
              <div>
                <h3 className="text-2xl font-bold text-stefto-navy font-serif">Apply Now</h3>
                <p className="text-slate-500 text-sm mt-1">Submit your details for <span className="font-semibold text-stefto-indigo">{selectedJob}</span></p>
              </div>
              <button onClick={() => setIsApplyModalOpen(false)} className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your application for " + selectedJob + " has been submitted successfully.");
                setIsApplyModalOpen(false);
              }}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stefto-indigo/30 focus:border-stefto-indigo transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stefto-indigo/30 focus:border-stefto-indigo transition-all" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stefto-indigo/30 focus:border-stefto-indigo transition-all" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Upload Resume *</label>
                  <label className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:border-stefto-indigo hover:bg-indigo-50/30 transition-all cursor-pointer group">
                    <Upload size={24} className="mb-2 text-slate-400 group-hover:text-stefto-indigo transition-colors" />
                    <p className="text-sm font-medium text-slate-600 group-hover:text-stefto-indigo">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400 mt-1">PDF or DOCX (MAX. 5MB)</p>
                    <input type="file" required accept=".pdf,.doc,.docx" className="hidden" />
                  </label>
                </div>
                <button type="submit" className="w-full bg-stefto-indigo text-white font-bold py-3.5 rounded-lg hover:bg-stefto-navy transition-all shadow-md hover:shadow-lg mt-2 tracking-wide">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </LandingLayout>
  );
};

export default Careers;
