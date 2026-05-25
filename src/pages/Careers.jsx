import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Square, X, Upload, MapPin, Loader2 } from 'lucide-react';
import careerTeamCollab from '../assets/career_team_collab.png';
import careerCallCenter from '../assets/career_call_center.png';
import careerMeeting from '../assets/career_meeting.png';
import careerOfficeCulture from '../assets/career_office_culture.png';
import jobAlertsImage from '../assets/stefto_job_alerts.png';
import LandingLayout from '../components/layout/LandingLayout';

const heroImg = 'https://res.cloudinary.com/dtz8hacj4/image/upload/v1779436368/WhyStefto_eczrwf.jpg';

const Careers = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState({ success: false, message: "" });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail) return;

    setIsSubscribing(true);
    setSubscribeStatus({ success: false, message: "" });

    try {
      const response = await fetch('http://localhost:3000/api/v1/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: subscribeEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus({ success: true, message: data.message || 'Successfully subscribed!' });
        setSubscribeEmail("");
      } else {
        setSubscribeStatus({ success: false, message: data.message || 'Subscription failed.' });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeStatus({
        success: false,
        message: 'Unable to connect to the server. Please try again later.',
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-white min-h-screen pt-16">

        {/* 1. Join The Family Section */}
        <section className="w-full pt-16 pb-28 sm:pt-24 sm:pb-40 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779710436/WhatsApp_Image_2026-05-25_at_17.21.23_etcyvd.jpg"
              alt="Stefto Office"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[900px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-10 uppercase tracking-[0.2em]" style={{ fontFamily: "'Fraunces', serif" }}>
                Join the <span className="text-[#1e3a8a]"><span className='bg-white rounded-lg'>Stefto</span></span> Family
              </h2>

              <div className="text-base  sm:text-lg leading-relaxed space-y-6 text-justify border-l-4 border-l-white p-6 sm:p-8">
                <p className="text-white font-semibold">
                  At Stefto, we are digital innovators. We leverage the power of technology to solve the challenges
                  faced by our clients. We owe our success to our team of innovators and passionate problem
                  solvers. If you love working in a fast-paced environment with ample opportunities to advance your
                  career while helping customers amplify their success, then Stefto is the perfect choice for you. Join
                  our winning team to make a change in customer experience.
                </p>
                <p className="text-white font-semibold">
                  Browse available jobs. Cannot find something that fits you? Send us your resume and we will help
                  you find the right role for you on our team.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* 2. Perks Section */}
        <section className="w-full pt-10 pb-20 sm:pt-16 sm:pb-32 bg-[#fdfdfd] relative overflow-hidden">
          <div className="w-[90%] mx-auto">

            {/* Title Text positioned above the layout */}
            <div className="mb-10 lg:mb-14 px-4 sm:px-0 flex flex-col items-center text-center">
              <h2 className="text-[1.125rem] sm:text-xl lg:text-2xl tracking-[0.2em] text-black uppercase font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
                Perks of Working With Stefto
              </h2>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

              {/* Left Image Grid Area */}
              <div className="w-full lg:col-span-6 h-[350px] sm:h-[450px] lg:h-[580px] rounded-none overflow-hidden shadow-2xl relative">
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-1">
                  <div className="overflow-hidden relative group border-4 border-white bg-white">
                    <img
                      src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779714240/ChatGPT_Image_May_25_2026_06_33_27_PM_hbfqj0.png"
                      alt="Team Collaboration"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="overflow-hidden relative group border-4 border-white bg-white">
                    <img
                      src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779715117/WhatsApp_Image_2026-05-25_at_18.47.56_yk79ue.jpg"
                      alt="Office Team"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="overflow-hidden relative group border-4 border-white bg-white">
                    <img
                      src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779715117/WhatsApp_Image_2026-05-25_at_18.47.58_xmlwem.jpg"
                      alt="Team Meeting"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="overflow-hidden relative group border-4 border-white bg-white">
                    <img
                      src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779715797/WhatsApp_Image_2026-05-25_at_18.47.58_1_j2lvg5.jpg"
                      alt="Office Culture"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Right Content Card Area */}
              <div className="w-full lg:col-span-6 bg-white p-6 sm:p-10 shadow-[0_5px_40px_rgba(0,0,0,0.06)] rounded-none border border-slate-100/50 relative z-20">

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

        {/* Gallery Section */}
        <section className="w-full py-16 sm:py-24 bg-white flex justify-center border-t border-slate-100">
          <div className="max-w-[800px] w-full px-4 sm:px-6">
            <div className="mb-10 lg:mb-14 px-4 sm:px-0 flex flex-col items-center text-center">
              <h2 className="text-[1.125rem] sm:text-xl lg:text-2xl tracking-[0.2em] text-black uppercase font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
                Gallery
              </h2>
            </div>
            <div className="custom-gallery-wall" style={{ width: '100%', marginLeft: 0 }}>
              <div className="gallery-frame gw-1"><img src={heroImg} alt="Gallery 1" /></div>
              <div className="gallery-frame gw-2"><img src={heroImg} alt="Gallery 2" /></div>
              <div className="gallery-frame gw-3"><img src={heroImg} alt="Gallery 3" /></div>
              <div className="gallery-frame gw-4"><img src={heroImg} alt="Gallery 4" /></div>
              <div className="gallery-frame gw-5"><img src={heroImg} alt="Gallery 5" /></div>
              <div className="gallery-frame gw-6"><img src={heroImg} alt="Gallery 6" /></div>
              <div className="gallery-frame gw-7"><img src={heroImg} alt="Gallery 7" /></div>
              <div className="gallery-frame gw-8"><img src={heroImg} alt="Gallery 8" /></div>
            </div>
          </div>
        </section>

        {/* 3. Job Listings Section */}
        <section className="w-full py-16 sm:py-24 bg-white relative">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col items-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center uppercase tracking-[0.2em] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                Choose a career with <span className="text-[#1e3a8a]">Stefto</span>
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Job 1 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Debt Counselor</h3>
                  <p className="text-[#475569] text-sm font-medium">Collection & Recovery</p>

                </div>
                <button onClick={() => { setSelectedJob("Voice (Sales)"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 2 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Voice Telecaller</h3>
                  <p className="text-[#475569] text-sm font-medium">Customer Support</p>

                </div>
                <button onClick={() => { setSelectedJob("Voice (Customer Support)"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>



              {/* Job 4 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">A.M.</h3>
                  <p className="text-[#475569] text-sm font-medium">Customer Support | Collection & Recovery</p>

                </div>
                <button onClick={() => { setSelectedJob("A.M. (Customer Support)"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 5 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Human Resource</h3>
                  <p className="text-[#475569] text-sm font-medium">Support Team</p>
                </div>
                <button onClick={() => { setSelectedJob("Human Resource"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>


            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">


              {/* Job 6 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Quality </h3>
                  <p className="text-[#475569] text-sm font-medium">Customer Support | Collection & Recovery</p>
                </div>
                <button onClick={() => { setSelectedJob("Trainer"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>


              {/* Job 7 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">M.I.S.</h3>
                  <p className="text-[#475569] text-sm font-medium">Customer Support | Collection & Recovery</p>
                </div>
                <button onClick={() => { setSelectedJob("M.I.S"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Job 8 */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Manager</h3>
                  <p className="text-[#475569] text-sm font-medium">Customer Support | Collection & Recovery</p>
                </div>
                <button onClick={() => { setSelectedJob("Manager (Customer Operations)"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
                  APPLY NOW <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>


              <div className="bg-[#f8f9fa] p-8 flex flex-col justify-between min-h-[240px] border border-transparent hover:border-slate-200 transition-colors">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2d3a4b] mb-3 font-serif tracking-tight">Trainer</h3>
                  <p className="text-[#475569] text-sm font-medium">Customer Support | Collection & Recovery</p>
                </div>
                <button onClick={() => { setSelectedJob("Trainer"); setIsApplyModalOpen(true); }} className="bg-[#1e3a8a] text-white text-[11px] tracking-[0.15em] font-semibold py-3 px-6 mt-8 w-fit hover:bg-[#1e40af] transition-colors flex items-center group cursor-pointer">
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
                  notifications about new job openings. Don't miss out on your dream job - sign up today to
                  stay informed and take the next step in your professional journey
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    disabled={isSubscribing}
                    className="flex-grow px-4 py-3 sm:py-4 bg-[#f8f9fa] border border-slate-200 text-[#2d3a4b] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-stefto-indigo focus:ring-1 focus:ring-stefto-indigo transition-all disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-stefto-indigo text-white tracking-[0.15em] font-semibold py-3 sm:py-4 px-8 hover:bg-stefto-navy transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
                  >
                    {isSubscribing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe Now"
                    )}
                  </button>
                </form>

                {subscribeStatus.message && (
                  <p className={`mt-4 text-xs font-semibold tracking-wide ${subscribeStatus.success ? 'text-green-600' : 'text-red-500'}`}>
                    {subscribeStatus.message}
                  </p>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Apply Modal */}
      {isApplyModalOpen && createPortal(
        <div className="fixed inset-0 bg-slate-900/60 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
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
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your application for " + selectedJob + " has been submitted successfully.");
                setIsApplyModalOpen(false);
              }}>
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all" placeholder="Enter your full name" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all" placeholder="you@example.com" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all" placeholder="+91 98765 43210" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Location *
                  </label>
                  <select
                    required
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all text-sm text-slate-700"
                  >
                    <option value="" disabled>Select Office Location</option>
                    <option value="Head Office: Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016" title="Head Office: Plot No. 112, Udyog Vihar, Phase-1, Gurugram, Haryana-122016">Head Office - Gurugram</option>

                    <option value="West Delhi Office: WZ-1, Upper Ground Floor, Main Nazafgarh Road, Uttam Nagar West, Delhi-110059" title="West Delhi Office: WZ-1, Upper Ground Floor, Main Nazafgarh Road, Uttam Nagar West, Delhi-110059">West Delhi Office - Uttam Nagar</option>
                    <option value="Noida Office: 1st, 2nd and 3rd Floor B-24, Sector 1 Noida, Uttar Pradesh - 201301" title="Noida Office: 1st, 2nd and 3rd Floor B-24, Sector 1 Noida, Uttar Pradesh - 201301">Noida Office - Sector 1</option>
                    <option value="Pune Office: 501, 5th Floor, Pride Icon, Kharadi, Pune, Maharashtra-411014" title="Pune Office: 501, 5th Floor, Pride Icon, Kharadi, Pune, Maharashtra-411014">Pune Office - Kharadi</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Upload Resume *</label>
                  <label className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:border-[#1e3a8a] hover:bg-blue-50/30 transition-all cursor-pointer group">
                    <Upload size={24} className="mb-2 text-slate-400 group-hover:text-[#1e3a8a] transition-colors" />
                    <p className="text-sm font-medium text-slate-600 group-hover:text-[#1e3a8a]">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400 mt-1">PDF or DOCX (MAX. 5MB)</p>
                    <input type="file" required accept=".pdf,.doc,.docx" className="hidden" />
                  </label>
                </div>
                <button type="submit" className="w-full bg-[#1e3a8a] text-white font-bold py-3.5 rounded-lg hover:bg-[#1e40af] transition-all shadow-md hover:shadow-lg tracking-wide md:col-span-2">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>,
        document.body
      )}
      <style>{`
        .custom-gallery-wall {
          display: grid;
          grid-template-columns: repeat(28, 1fr);
          grid-template-rows: repeat(20, 1fr);
          gap: 1.5%;
          width: 125%;
          margin-left: -25%;
          aspect-ratio: 1.4;
        }

        .gallery-frame {
          background: white;
          padding: 6%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04);
          display: flex;
          transition: transform 0.3s ease;
        }

        .gallery-frame:hover {
          transform: scale(1.02);
          z-index: 10;
        }

        .gallery-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gw-1 { grid-column: 1 / 7; grid-row: 4 / 15; }
        .gw-2 { grid-column: 7 / 12; grid-row: 3 / 8; }
        .gw-3 { grid-column: 7 / 12; grid-row: 9 / 17; }
        .gw-4 { grid-column: 12 / 17; grid-row: 2 / 10; }
        .gw-5 { grid-column: 12 / 17; grid-row: 11 / 16; }
        .gw-6 { grid-column: 17 / 23; grid-row: 1 / 11; }
        .gw-7 { grid-column: 17 / 23; grid-row: 12 / 17; }
        .gw-8 { grid-column: 23 / 29; grid-row: 5 / 15; }

        @media (max-width: 900px) {
          .custom-gallery-wall { 
            width: 100%;
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .custom-gallery-wall { aspect-ratio: 1; }
        }
      `}</style>
    </LandingLayout>
  );
};

export default Careers;
