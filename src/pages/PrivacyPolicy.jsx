import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { title: "Personal Identification Information", id: "personal" },
    { title: "Non-personal Identification Information", id: "non-personal" },
    { title: "Web Browser Cookies", id: "cookies" },
    { title: "How We Use Collected Information", id: "use" },
    { title: "STEFTO GDPR Policy", id: "gdpr" },
    { title: "Which Information We Collect", id: "collect" },
    { title: "Data Managed by Our Clients", id: "clients" },
    { title: "Disclosure of Your Information", id: "disclosure" },
    { title: "Your Rights", id: "rights" },
    { title: "Security Procedures", id: "security" }
  ];

  return (
    <main className="w-full bg-slate-50 min-h-screen pt-24 sm:pt-32 pb-20">
      
      {/* Hero / Header Section */}
      <section className="w-full bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px]">
             <p className="text-stefto-sky font-bold tracking-widest text-xs uppercase mb-3">
              Legal Documentation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-stefto-navy mb-6">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-4 text-slate-500 text-sm font-medium bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Last Revised: 02 Nov, 2023
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
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-12">
              
              <div className="border-b border-slate-50 pb-8">
                <p className="text-lg font-medium text-slate-800 italic mb-6">
                  "You agree to abide by our Privacy Policy. STEFTO treats your privacy seriously."
                </p>
                <p>
                  This Privacy Policy governs the manner in which Stefto collects, uses, maintains and discloses information collected from users (each, a “User”) of the https://www.stefto.com website (“Site”). This privacy policy applies to the Site and all products and services offered by STEFTO.
                </p>
              </div>

              {/* Personal Info */}
              <div id="personal" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-stefto-sky rounded-full"></span>
                  Personal identification information
                </h2>
                <div className="space-y-4">
                  <p>
                    We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site.
                  </p>
                  <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-stefto-indigo text-slate-600 font-medium italic">
                    "Users may be asked for, as appropriate, name, email address, mailing address, phone number. We will collect personal identification information from Users only if they voluntarily submit such information to us."
                  </p>
                </div>
              </div>

              {/* Non Personal */}
              <div id="non-personal" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-stefto-sky rounded-full"></span>
                  Non-personal identification information
                </h2>
                <p>
                  We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service provider’s utilized and other similar information.
                </p>
              </div>

              {/* Cookies */}
              <div id="cookies" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-stefto-sky rounded-full"></span>
                  Web browser cookies
                </h2>
                <p>
                  Our Site use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                </p>
              </div>

              {/* Usage */}
              <div id="use" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-stefto-sky rounded-full"></span>
                  How we use collected information
                </h2>
                <p className="mb-6">Stefto may collect and use Users personal information for the following purposes:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "To improve customer service",
                    "To personalize user experience",
                    "To improve our Site",
                    "To send periodic emails"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-stefto-sky"></div>
                      <span className="font-semibold text-stefto-navy text-sm uppercase tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GDPR */}
              <div id="gdpr" className="scroll-mt-32 bg-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-stefto-indigo/20 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                <h2 className="text-3xl font-bold text-white mb-8 relative z-10">STEFTO GDPR policy</h2>
                <div className="space-y-6 text-slate-300 relative z-10">
                  <p>
                    For the purpose of the General Data Protection Regulation (“GDPR”), the data controller is Stefto. The information and data You provide will be processed in accordance with the provisions of the GDPR.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      "Used lawfully, fairly and transparently",
                      "Collected for valid clearly explained purposes",
                      "Relevant and limited to those purposes",
                      "Accurate and kept up to date",
                      "Kept only as long as necessary",
                      "Kept securely and safely"
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-4 border-b border-white/10 pb-4">
                        <span className="text-stefto-sky font-bold">0{idx + 1}</span>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal Bases & Collection */}
              <div id="collect" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-stefto-sky rounded-full"></span>
                  Which Information We Collect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
                    <h4 className="font-bold text-stefto-indigo mb-3 uppercase text-sm tracking-wide">Information You Give Us</h4>
                    <p className="text-sm">Contact info (Name, address, email, phone) and payment info for contract performance. (We do NOT store Credit card Details).</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner">
                    <h4 className="font-bold text-stefto-indigo mb-3 uppercase text-sm tracking-wide">Automatic Collection</h4>
                    <p className="text-sm">Technical IP info, browser settings, operating systems, and full URL clickstream data for security and improvement.</p>
                  </div>
                </div>
              </div>

              {/* Data Managed by Clients */}
              <div id="clients" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6 flex items-center gap-3">
                   <span className="w-1.5 h-6 bg-stefto-sky rounded-full"></span>
                  Personal Data Managed by Our Clients
                </h2>
                <p className="mb-4">
                  “Client Customer Data” is the Personal Data belonging the parties with whom our Client has a relationship. We have no direct relationship with the parties whose Client Customer Data is processed by our Clients.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl italic text-slate-600 text-sm leading-relaxed">
                  "Our customers take responsibility for all Client Customer Data that they process and for complying with relevant data protection legislation. If you wish to make changes, please refer to the Privacy Policy of the relevant Stefto Client."
                </div>
              </div>

              {/* Final Sections */}
              <div id="rights" className="scroll-mt-32 border-t border-slate-100 pt-12">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6">Your Rights</h2>
                <p className="mb-8">Under the GDPR you have the following rights regarding your personal data:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Access", "Rectification", "Erasure", "Restrict", "Object", "Portability", "Withdraw Consent"
                  ].map((right, idx) => (
                    <span key={idx} className="bg-white border border-stefto-sky/30 text-stefto-indigo px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                      THE RIGHT TO {right.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div id="security" className="scroll-mt-32 border-t border-slate-100 pt-12">
                <h2 className="text-2xl font-bold text-stefto-navy mb-6">Security Procedures</h2>
                <p className="mb-6">
                  We maintain physical, electronic and procedural safeguards. Sensitive data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted with digital signatures.
                </p>
                <div className="flex items-center gap-2 text-slate-800 font-bold bg-slate-100 w-fit px-6 py-3 rounded-2xl">
                  Contact Customer Service: <span className="text-stefto-sky">info@stefto.com</span>
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
  );
};

export default PrivacyPolicy;
