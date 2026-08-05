import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingLayout from '../components/layout/LandingLayout';
import { Database, BarChart3, Users, CheckCircle2, ArrowRight, Briefcase, ShieldCheck, ArrowUpRight, Network, Brain, Sparkles, Headset, PhoneCall, PhoneOutgoing, HelpCircle, HandCoins, BadgeDollarSign, FileClock, ClipboardCheck, CalendarDays, Target, Mail, FileSearch, Video, Tag, FileText, Globe, UserCheck, Home, Sun, Keyboard } from 'lucide-react';
import CustomerJourneySection from './LandingPage/components/CustomerJourneySection';
import DomainKnowledgeSection from './LandingPage/components/DomainKnowledgeSection';

const serviceCards = [
  {
    icon: Briefcase,
    title: "Back Office Support",
    description: "Streamline business operations with reliable back-office processing and administrative support.",
    features: [
      "Data Entry & Processing",
      "Order Management",
      "Document Verification",
      "Administrative Support"
    ],
    link: "/back-office"
  },
  {
    icon: BarChart3,
    title: "Risk Data Analytics",
    description: "Transforming raw data into actionable insights for better credit decisioning and risk mitigation.",
    features: [
      "Nano Segmentation",
      "Predictive Scoring",
      "Portfolio Health Monitoring",
      "Fraud Detection"
    ],
    link: "/digital-debt-management"
  },
  {
    icon: Users,
    title: "Customer Services",
    description: "Maintaining Seamless & Efficient Customer Experience.",
    features: [
      "Speciality Help Desk",
      "Inbound Sales & Upsell | Cross Sell",
      "Retention",
      "Lead Generation"
    ],
    link: "/customer-support"
  },
  {
    icon: ShieldCheck,
    title: "Risk & Fraud Management",
    description: "End-to-end fraud detection and compliance monitoring to protect financial institutions.",
    features: [
      "Transaction Monitoring",
      "Anti-Money Laundering (AML)",
      "KYC & Document Verification",
      "Dispute Resolution"
    ],
    link: "/risk-management"
  },
  {
    icon: CheckCircle2,
    title: "Trust & Safety",
    description: "Keeping your digital platforms safe with 24/7 moderation and threat prevention.",
    features: [
      "User Verification",
      "Content Moderation",
      "Account Takeover Prevention",
      "Platform Compliance"
    ],
    link: "/trust-and-safety"
  },
  {
    icon: ArrowRight,
    title: "Revenue Growth & Sales",
    description: "Accelerate customer acquisition with targeted omnichannel sales strategies.",
    features: [
      "Inbound & Outbound Sales",
      "Lead Qualification",
      "Credit Card Up-selling",
      "Customer Win-back Campaigns"
    ],
    link: "/sales-growth"
  },
  {
    icon: Network,
    title: "IT Helpdesk",
    description: "Resolving complex technical queries to ensure seamless digital banking experiences.",
    features: [
      "L1 & L2 Technical Support",
      "Payment Troubleshooting",
      "App Navigation Assistance",
      "Ticketing Management"
    ],
    link: "/tech-support"
  }
];

const Services = () => {
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

          <h1 className="text-4xl md:text-[44px] font-bold text-white mb-6">Our Services</h1>
          
          <div className="flex items-center gap-2 text-[15px] font-medium tracking-wide">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors cursor-pointer">
              <Home size={16} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <span className="text-gray-500 font-normal px-1">/</span>
            <Link to="/services" className="text-[#e11d48] hover:text-rose-400 transition-colors cursor-pointer">
              Our Services
            </Link>
          </div>
        </div>        {/* BUSINESS PROCESS MANAGEMENT SERVICES */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-slate-50">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0f2a5e] mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>Business Process Management Services</h2>
            <p className="text-slate-700 text-[15px] md:text-lg leading-8 font-medium max-w-4xl mx-auto">
              For businesses seeking efficient Business Process Management (BPM) services, Stefto offers tailored solutions for streamlined operations and growth. With round-the-clock operations and competitive pricing, we cater to businesses of all sizes. Serving industries like Global, PSU &amp; Government, E-Commerce, and more, our services include Inbound Customer Support, Seller Support, Outbound Surveys, and Data Science Projects. Recognized by Startup India, we're committed to social responsibility and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Headset size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">INBOUND CUSTOMER SUPPORT</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Stefto provides complete call support and customer care services through a highly trained inbound support team that consists of professional tele-callers, team leaders and managers.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <PhoneCall size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">SELLER SUPPORT</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We support matchmaking of buyers and sellers through tele calling. We also assist with the buyer's onboarding journey.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <PhoneOutgoing size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">OUTBOUND COLLECTIONS</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Stefto specializes in 'outbound portfolio wise collection' services which include EMI collections and debt collections with a well-trained team that makes sure the calls are professional in nature, always keeping in mind to improve customer relations as a part of the job.
              </p>
            </div>

            {/* Column 4 - Query Handling */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <HelpCircle size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">QUERY HANDLING</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                As a part of our Inbound Services our well-trained team also provides all and any 'Inquiry Handling' which forms an integral and essential fragment of customer support.
              </p>
            </div>

            {/* Column 5 - Accounting & Financial Services */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <HandCoins size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">ACCOUNTING &amp; FINANCIAL SERVICES</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Stefto provides complete accounting and finance services such as billing, invoicing as well as outsources payroll services at cost effective plans and we assure complete confidentiality to our clients.
              </p>
            </div>

            {/* Column 6 - End to End Sales */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <BadgeDollarSign size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">END TO END SALES</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Providing start to end functional solutions from engagement to sale of the product.
              </p>
            </div>

            {/* Column 7 - Pre Sales */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <FileClock size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">PRE SALES</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                During this phase, Stefto provides comprehensive support to engage, identify, filter &amp; schedule appointments with the most promising potential customers for specific services, supporting the core sales team.
              </p>
            </div>

            {/* Column 8 - Outbound Surveys */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <ClipboardCheck size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">OUTBOUND SURVEYS</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We provide help with surveying your customers and collecting information for the betterment of your business's product or service.
              </p>
            </div>

            {/* Column 9 - Appointment Generation */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <CalendarDays size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">APPOINTMENT GENERATION</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                In order to provide complete sales solutions for our customer's business we also provide appointment generation services.
              </p>
            </div>

            {/* Column 10 - Outbound Lead Generation */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Target size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">OUTBOUND LEAD GENERATION</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Generating prospective leads for sales teams, in order to help increase the sales revenue of the establishments and businesses.
              </p>
            </div>

            {/* Column 11 - Email & Chat */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Mail size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">EMAIL &amp; CHAT</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Support services for customer Query, Request and Complaint handling.
              </p>
            </div>

            {/* Column 12 - GST & CIN Verification */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <FileSearch size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">GST &amp; CIN VERIFICATION</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Help you validate your business to ensure credibility amongst your prospective customers and increase your trust factor with them.
              </p>
            </div>

            {/* Column 13 - Security Surveillance */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Video size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">SECURITY SURVEILLANCE</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We help in video monitoring through remote desktop services to ensure on site safety and security and act as whistleblowers when we notice a breach in security.
              </p>
            </div>

            {/* Column 14 - Video Labelling */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Tag size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">VIDEO LABELLING</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Screening through video footage and labelling or tagging them as per the client’s requirement and recommendation.
              </p>
            </div>

            {/* Column 15 - Data Science Projects */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Database size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">DATA SCIENCE PROJECTS</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Data entry, data processing, content writing, data seeding, data harvesting and keyword stuffing for all your business needs.
              </p>
            </div>

            {/* Column 16 - Optical Character Recognition */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <FileText size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">OPTICAL CHARACTER RECOGNITION</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Image to text conversion through software interface.
              </p>
            </div>

            {/* Column 17 - Import / Export Code Verification */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Globe size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">IMPORT / EXPORT CODE VERIFICATION</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Adding value to the trust factor by verifying the Import Export Codes for businesses that require this service.
              </p>
            </div>

            {/* Column 18 - Customer Verification */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <UserCheck size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">CUSTOMER VERIFICATION</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Stefto provides support services with verifying identities and filtering through documents to check if they are reliable or fraudulent in nature through KYC validation, and background checks, if needed.
              </p>
            </div>

            {/* Column 19 - Mortgage Sales */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Home size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">MORTGAGE SALES</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Call assistance regarding information about mortgage loans as well as all sorts of loan programs available.
              </p>
            </div>

            {/* Column 20 - Cable & Solar Sales */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Sun size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">CABLE &amp; SOLAR SALES</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Our sales team at Stefto helps consumers with detailed information regarding cable and solar equipment, marketing and promoting them, and also advising them about the advantages and savings of purchasing solar powered products.
              </p>
            </div>

            {/* Column 21 - Online Data Entry */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#e11d48] mb-5">
                <Keyboard size={68} strokeWidth={2} />
              </div>
              <h3 className="text-base font-black uppercase text-slate-900 mb-4 tracking-wide">ONLINE DATA ENTRY</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We offer online data compilation services for better ease of access and organized storage in a digital format. This is one of the various services Stefto offers to make your business process straightforward and easy.
              </p>
            </div>
          </div>
        </section>

        {/* CUSTOMER JOURNEY (TP INSPIRED) */}
        <CustomerJourneySection />

        {/* DOMAIN KNOWLEDGE (STACKED CARDS) */}
        <DomainKnowledgeSection />
      </main>
    </LandingLayout>
  );
};

export default Services;
