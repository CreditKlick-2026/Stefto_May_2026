import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingLayout from '../components/layout/LandingLayout';
import { 
  FileCheck, ShieldAlert, FileText, ClipboardCheck, Lock,
  Search, Activity, Bug, Database, FileSearch, UserX, Shield,
  Clock, Target, ShieldCheck, BookOpen, Cloud, Wifi, RefreshCw, Crosshair, Users,
  Globe, Settings, Home
} from 'lucide-react';

const Security = () => {
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

          <h1 className="text-4xl md:text-[44px] font-bold text-white mb-6 text-center">Cybersecurity Solutions</h1>
          
          <div className="flex items-center gap-2 text-[15px] font-medium tracking-wide">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors cursor-pointer">
              <Home size={16} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <span className="text-gray-500 font-normal px-1">/</span>
            <Link to="/security" className="text-[#e11d48] hover:text-rose-400 transition-colors cursor-pointer">
              Cybersecurity Solutions
            </Link>
          </div>
        </div>


        {/* SECTION 1: GRC Solutions */}
        <section className="py-10 md:py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Governance, Risk, and Compliance (GRC) Solutions
            </h2>
            <p className="text-slate-700 text-[15px] md:text-lg leading-8 font-medium max-w-4xl mx-auto">
              Governance, risk and compliance (GRC) refers to an organization's strategy for handling the interdependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><FileCheck size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Compliance Automation</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Simplify regulatory compliance with GRCX.io, our platform for managing frameworks like ISO 27001, PCI DSS, GDPR, HIPAA, and SOC 2.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><ShieldAlert size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Risk Management</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Identify, assess, and mitigate risks with advanced tools and tailored strategies. Enhance decision-making with real-time insights.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><FileText size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Policy Management</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Develop, implement, and maintain policies that align with regulatory requirements and organizational goals.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><ClipboardCheck size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Audit Readiness</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Prepare for internal and external audits with streamlined processes and detailed documentation.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Lock size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Data Protection &amp; Privacy</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Ensure compliance with data privacy laws such as GDPR and CCPA. Protect sensitive information with cutting-edge solutions.</p>
            </div>

          </div>
        </section>


        {/* SECTION 2: Cyber Forensics Services */}
        <section className="py-10 md:py-16 px-6 max-w-7xl mx-auto border-t border-slate-200 mt-10">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Cyber Forensics Services
            </h2>
            <p className="text-slate-700 text-[15px] md:text-lg leading-8 font-medium max-w-4xl mx-auto">
              A cybersecurity service is a professional product, process, or solution that protects devices, networks, and information from cyber threats. Cybersecurity services help organizations prevent unauthorized access, use, disruption, or destruction of sensitive data, systems, or applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Search size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Digital Forensics Investigations</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Analyze digital evidence to identify the source of cyberattacks, data breaches, or other incidents. Our forensic experts uncover the "who," "what," and "how" of every incident.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Activity size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Incident Response Forensics</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Support your incident response process with rapid forensic investigations to mitigate risks and prevent recurrence.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Bug size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Malware Analysis</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Dissect malicious software to understand its behavior, identify affected systems, and develop mitigation strategies.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Database size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Data Recovery</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Recover lost or corrupted data from compromised systems, ensuring minimal disruption to business operations.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><FileSearch size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">eDiscovery Services</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Support legal and compliance investigations by collecting, preserving, and analyzing electronic evidence in a forensically sound manner.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><UserX size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Insider Threat Investigation</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Uncover and address potential threats originating from within your organization, including unauthorized data access or misuse.</p>
            </div>

            <div className="flex flex-col items-center text-center md:col-start-2">
              <div className="text-[#e11d48] mb-5"><Shield size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Cybercrime Investigation Support</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Assist law enforcement or internal investigations with expert analysis of cybercrime incidents, including fraud, intellectual property theft, and data breaches.</p>
            </div>

          </div>
        </section>


        {/* SECTION 3: Managed Security Services */}
        <section className="py-10 md:py-16 px-6 max-w-7xl mx-auto border-t border-slate-200 mt-10">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Managed Security Services
            </h2>
            <p className="text-slate-700 text-[15px] md:text-lg leading-8 font-medium max-w-4xl mx-auto">
              Managed security services (MSS) are cybersecurity services that help organizations monitor and manage their security systems, devices, and software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Clock size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">24/7 Security Operations Center (SOC)</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Monitor, detect, and respond to cyber threats in real-time with our state-of-the-art SOC services.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Target size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Managed Threat Hunting</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Proactively identify and neutralize potential threats before they escalate.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><ShieldCheck size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Managed Compliance Services</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Leave your compliance requirements to us. From tracking to reporting, we ensure seamless adherence to regulatory standards.</p>
            </div>

          </div>
        </section>


        {/* SECTION 4: Specialized Cybersecurity Services */}
        <section className="py-10 md:py-16 px-6 max-w-7xl mx-auto border-t border-slate-200 mt-10">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Specialized Cybersecurity Services
            </h2>
            <p className="text-slate-700 text-[15px] md:text-lg leading-8 font-medium max-w-4xl mx-auto">
              Specialized cybersecurity services are services that focus on specific areas of cybersecurity, such as network security, application security, or incident response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><BookOpen size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Security Awareness Training</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Empower your team with the knowledge to identify and prevent cyber threats. Conduct phishing simulations and workshops to build a security-first culture.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Cloud size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Cloud Security Solutions</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Secure your cloud infrastructure across AWS, Azure, and Google Cloud with robust configurations and threat monitoring.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Wifi size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">IoT and OT Security</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Protect your smart devices and operational technology from cyber threats with tailored security measures.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><RefreshCw size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Business Continuity (BC/DR)</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Ensure uninterrupted business operations during and after a cyber incident with strategic continuity planning and recovery solutions.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Crosshair size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Advanced Threat Hunting</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Proactively search for threats that have evaded traditional detection mechanisms, ensuring your systems are secure.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5"><Users size={68} strokeWidth={2} /></div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">Red, Blue, Purple Team Assessments</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Red Team: Simulate attacks. Blue Team: Strengthen defense mechanisms. Purple Team: Optimize security responses.</p>
            </div>

          </div>
        </section>


        {/* SECTION 5: Our Products */}
        <section className="py-16 md:py-20 px-6 w-full bg-slate-100 border-t border-slate-200 mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                Our Products
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-[#e11d48] mb-5"><Globe size={68} strokeWidth={2} /></div>
                <h3 className="text-2xl font-black uppercase text-slate-900 mb-4 tracking-wide">DarkX.io</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  A cutting-edge dark web monitoring platform that safeguards your business by detecting compromised data, monitoring brand reputation, and identifying emerging threats.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-[#e11d48] mb-5"><Settings size={68} strokeWidth={2} /></div>
                <h3 className="text-2xl font-black uppercase text-slate-900 mb-4 tracking-wide">GRCX.io</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  An end-to-end governance, risk, and compliance platform designed to automate compliance, track risks, and enhance audit readiness.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </LandingLayout>
  );
};

export default Security;
