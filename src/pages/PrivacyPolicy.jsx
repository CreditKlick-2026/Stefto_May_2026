import React, { useEffect } from 'react';
import LandingLayout from '../components/layout/LandingLayout';
import PrivacyIcon from '../assets/PrivacyPolicy.png';
import heroImage from '../assets/image.png';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { title: "Personal Identification Information", id: "personal" },
    { title: "Non-personal Identification Information", id: "non-personal" },
    { title: "Web Browser Cookies", id: "cookies" },
    { title: "How We Use Collected Information", id: "use" },
    { title: "Stefto  GDPR Policy", id: "gdpr" },
    { title: "Which Information We Collect", id: "collect" },
    { title: "Data Managed by Our Clients", id: "clients" },
    { title: "Your Rights", id: "rights" },
    { title: "Security Procedures", id: "security" }
  ];

  return (
    <LandingLayout>
      <main className="w-full bg-slate-50 min-h-screen pb-20">

        {/* Hero / Header Section */}
        <section
          className="w-full relative overflow-hidden text-white border-b border-white/10 pt-24 pb-16 md:pt-[130px] md:pb-[90px]"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(15, 31, 75, 0.85) 50%, rgba(29, 78, 216, 0.8) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Ambient glow blobs */}
          <div style={{ position: "absolute", top: -100, right: "25%", width: 500, height: 500, borderRadius: "50%", background: "rgba(37,99,235,0.15)", filter: "blur(100px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -80, left: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(96,165,250,0.10)", filter: "blur(80px)", pointerEvents: "none" }} />

          {/* Dot grid */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-row justify-between items-center relative">
              <div className="max-w-[900px] py-4 relative z-20">
                <h1 className="text-4xl md:text-[56px] font-bold text-white leading-[1.1] tracking-[-0.02em] m-0">
                  Privacy Policy
                </h1>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-8 md:mt-12 pointer-events-none opacity-20 md:opacity-100">
                <img src={PrivacyIcon} alt="Privacy Policy Icon" className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[350px] lg:h-[350px] object-contain drop-shadow-2xl scale-110 md:scale-125 origin-right" />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Quick Links Sidebar (Sticky) */}
            <aside className="hidden lg:block w-1/4">
              <div className="sticky top-32 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h4 className="text-stefto-navy font-bold mb-6 text-sm uppercase tracking-wider border-b border-slate-100 pb-3">
                  Contents
                </h4>
                <nav className="flex flex-col gap-3">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                      className="text-left text-slate-600 hover:text-stefto-indigo text-[13px] font-medium transition-colors border-l-2 border-transparent hover:border-stefto-sky pl-3"
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm border border-slate-100 text-black leading-relaxed space-y-8 sm:space-y-12 text-[12px] sm:text-base">

                <div className="border-b border-slate-50 pb-6 sm:pb-8">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    STEFTO TREATS YOUR PRIVACY SERIOUSLY.
                  </h2>







                  <p className="text-black text-justify sm:text-left">
                    This Privacy Policy explains how Stefto collects, uses, protects, and discloses information gathered from users of our website (https://www.stefto.com). It applies to all interactions with our Site, as well as to the full suite of products and services offered by Stefto. Our commitment is to ensure that your data is handled securely, transparently, and in strict compliance with applicable privacy standards.
                  </p>
                </div>

                {/* Personal Info */}
                <div id="personal" className="scroll-mt-32">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    Personal identification information
                  </h2>
                  <div className="space-y-4">
                    <p className="text-black text-justify sm:text-left">
                      We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site.
                    </p>
                    <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-stefto-indigo text-black font-medium italic text-justify sm:text-left">
                      "Users may be asked for, as appropriate, name, email address, mailing address, phone number. We will collect personal identification information from Users only if they voluntarily submit such information to us."
                    </p>
                  </div>
                </div>

                {/* Non Personal */}
                <div id="non-personal" className="scroll-mt-32">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    Non-personal identification information
                  </h2>
                  <p className="text-black text-justify sm:text-left">
                    We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service provider’s utilized and other similar information.
                  </p>
                </div>

                {/* Cookies */}
                <div id="cookies" className="scroll-mt-32">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    Web browser cookies
                  </h2>
                  <p className="text-black text-justify sm:text-left">
                    Our Site use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                  </p>
                </div>

                {/* Usage */}
                <div id="use" className="scroll-mt-32">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    How we use collected information
                  </h2>
                  <p className="mb-6 text-black text-justify sm:text-left">Stefto may collect and use Users personal information for the following purposes:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "To improve customer service",
                      "To personalize user experience",
                      "To improve our Site",
                      "To send periodic emails"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-stefto-sky"></div>
                        <span className="font-semibold text-stefto-navy text-[11px] sm:text-sm uppercase tracking-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GDPR */}
                <div id="gdpr" className="scroll-mt-32 bg-[#1e3a8a] rounded-xl sm:rounded-3xl p-4 sm:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-stefto-indigo/20 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                  <h2 className="text-lg sm:text-3xl font-bold text-white mb-3 sm:mb-8 relative z-10">STEFTO GDPR policy</h2>
                  <div className="space-y-3 sm:space-y-6 text-white [&_p]:text-white relative z-10">
                    <p className="text-justify sm:text-left text-[11.5px] sm:text-base leading-snug sm:leading-relaxed">
                      For the purpose of the General Data Protection Regulation (“GDPR”), the data controller is Stefto. The information and data you provide will be processed in accordance with the provisions of the GDPR.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                      {[
                        "Used lawfully, fairly and transparently",
                        "Collected for valid clearly explained purposes",
                        "Relevant and limited to those purposes",
                        "Accurate and kept up to date",
                        "Kept only as long as necessary",
                        "Kept securely and safely"
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 sm:gap-4 border-b border-white/10 pb-1.5 sm:pb-4">
                          <span className="text-white/80 font-extrabold text-[11px] sm:text-base">0{idx + 1}</span>
                          <p className="text-[11.5px] sm:text-sm text-justify sm:text-left m-0">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legal Bases & Collection */}
                <div id="collect" className="scroll-mt-32">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    Which Information We Collect
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                    <div className="bg-slate-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-inner">
                      <h4 className="font-bold text-stefto-indigo mb-3 uppercase text-sm tracking-wide">Information You Give Us</h4>
                      <p className="text-[11.5px] sm:text-sm text-black text-justify sm:text-left">Contact info (Name, address, email, phone) and payment info for contract performance. (We do not store account details ).</p>
                    </div>
                    <div className="bg-slate-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 shadow-inner">
                      <h4 className="font-bold text-stefto-indigo mb-3 uppercase text-sm tracking-wide">Automatic Collection</h4>
                      <p className="text-[11.5px] sm:text-sm text-black text-justify sm:text-left">Technical IP info, browser settings, operating systems, and full URL clickstream data for security and improvement.</p>
                    </div>
                  </div>
                </div>

                {/* Data Managed by Clients */}
                <div id="clients" className="scroll-mt-32">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6 flex items-start sm:items-center gap-3">
                    <span className="w-1.5 h-6 bg-stefto-sky rounded-full shrink-0 mt-1 sm:mt-0"></span>
                    Personal Data Managed by Our Clients
                  </h2>
                  <p className="mb-4 text-black text-justify sm:text-left">
                    “Client Customer Data” is the Personal Data belonging the parties with whom our Client has a relationship. We have no direct relationship with the parties whose Client Customer Data is processed by our Clients.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6 rounded-xl sm:rounded-2xl italic text-black text-[11.5px] sm:text-sm leading-relaxed text-justify sm:text-left">
                    "Our customers take responsibility for all Client Customer Data that they process and for complying with relevant data protection legislation. If you wish to make changes, please refer to the Privacy Policy of the relevant Stefto Client."
                  </div>
                </div>

                {/* Final Sections */}
                <div id="rights" className="scroll-mt-32 border-t border-slate-100 pt-8 sm:pt-12">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6">Your Rights</h2>
                  <p className="mb-6 sm:mb-8 text-black text-justify sm:text-left">Under the GDPR you have the following rights regarding your personal data:</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                      "Access", "Rectification", "Erasure", "Restrict", "Object", "Portability", "Withdraw Consent"
                    ].map((right, idx) => (
                      <span key={idx} className="bg-white border border-stefto-sky/30 text-stefto-indigo px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-sm">
                        THE RIGHT TO {right.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div id="security" className="scroll-mt-32 border-t border-slate-100 pt-8 sm:pt-12">
                  <h2 className="text-[17px] sm:text-2xl font-bold text-stefto-navy mb-4 sm:mb-6">Security Procedures</h2>
                  <p className="mb-6 text-black text-justify sm:text-left">
                    We maintain physical, electronic and procedural safeguards. Sensitive data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted with digital signatures.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-slate-800 font-bold bg-slate-100 w-fit px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-[13px] sm:text-base">
                    Contact Customer Service: <span className="text-stefto-sky break-all">info@stefto.com</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl text-center text-xs text-slate-400 font-medium">
                  Copyright © 2026 Stefto Management Services | Incredible Management Services (India) Private Limited
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>
    </LandingLayout>
  );
};

export default PrivacyPolicy;
