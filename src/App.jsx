import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AccordingToTheRbiReportTheIndianHouseholdDebtIsRisingButItIsRelativelyLowInComparisonWithOtherEmergingMarkets from './pages/AccordingToTheRbiReportTheIndianHouseholdDebtIsRisingButItIsRelativelyLowInComparisonWithOtherEmergingMarkets';
import Automotive from './pages/Automotive';
import BackOfficeSupport from './pages/BackOfficeSupport';
import BankingAndFinancialServices from './pages/BankingAndFinancialServices';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import ContactUs from './pages/ContactUs';
import CookiePolicy from './pages/CookiePolicy';
import CreditRefine from './pages/CreditRefine';
import CustomerStories from './pages/CustomerStories';
import CustomerSupport from './pages/CustomerSupport';
import DebtCollection from './pages/DebtCollection';
import DigitalDebtManagement from './pages/DigitalDebtManagement';
import DigitalLeadPartner from './pages/DigitalLeadPartner';
import HealthCare from './pages/HealthCare';
import HowAiIsMakingDebtCollectionMoreHumanA2025CaseStudy from './pages/HowAiIsMakingDebtCollectionMoreHumanA2025CaseStudy';
import Inbound from './pages/Inbound';
import Insurance from './pages/Insurance';
import Leadership from './pages/Leadership';
import LegalStatement from './pages/LegalStatement';
import NewUpdate from './pages/NewUpdate';
import News from './pages/News';
import Outbound from './pages/Outbound';
import PressRelease from './pages/PressRelease';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundsCancellations from './pages/RefundsCancellations';
import RetailAndECommerce from './pages/RetailAndECommerce';
import RetentionAndPersistency from './pages/RetentionAndPersistency';
import SalesSupport from './pages/SalesSupport';
import Security from './pages/Security';
import Services from './pages/Services';
import Technology from './pages/Technology';
import Telecom from './pages/Telecom';
import TermsOfUse from './pages/TermsOfUse';
import TheSignificanceOfRecoveryManagementSolutionsInCurrentTimes from './pages/TheSignificanceOfRecoveryManagementSolutionsInCurrentTimes';
import TravelHospitalityAndCargo from './pages/TravelHospitalityAndCargo';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Maintenance from './pages/Maintenance';
import NewLanding from './pages/NewLanding';
import WhyTrustStefto from './pages/WhyTrustStefto';

import { Phone, Mail, MapPin, ChevronDown, Search, Menu, X, LogIn, User, LayoutDashboard, LogOut } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const STEFTO_LOGO_URL = 'https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277115/Stefto_Logo_ng3frh.png';
import whyWorkBg from './assets/why_work_at_stefto_dropdown_bg.png';
import servicesBg from './assets/services_dropdown_bg.png';
import insightsBg from './assets/insights_dropdown_bg.png';
import industriesBg from './assets/industries_dropdown_bg.png';
import careerValuesBg from './assets/career_our_values_bg.png';
import careerWhyBg from './assets/career_why_stefto_bg.png';
import careerJobBg from './assets/career_job_opportunity_bg.png';

const SteftoLogo = () => (
  <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <img src={STEFTO_LOGO_URL} alt="Stefto" style={{ height: '50px', objectFit: 'contain' }} />
  </Link>
);

const navMenus = {
  'Why Stefto?': {
    heading: 'At Stefto, We Believe That Good is Just the Beginning',
    links: [
      { label: 'About Stefto', to: '/about-us' },
      { label: 'Why Trust Stefto?', to: '/why-trust-stefto' },
      { label: 'Security', to: '/security' },
      { label: 'Innovative partners', to: '/digital-lead-partner' },
      { label: 'Leadership', to: '/leadership' },
      { label: 'Inspiration World', to: '/about-us' },
    ],
    panel: {
      type: 'image',
      image: whyWorkBg,
      title: 'Why work at Stefto',
      desc: 'Having a clear purpose and a passion for solving problems leads to a fulfilling workplace.'
    }
  },
  'Services': {
    heading: 'Innovative, Business-specific Solutions',
    links: [
      { label: 'Inbound', to: '/inbound' },
      { label: 'Outbound', to: '/outbound' },
      { label: 'Back Office Support', to: '/back-office-support' },
      { label: 'Digital Support & Solutions', to: '/digital-debt-management' },
      { label: 'Credit Refine', to: '/credit-refine' },
      { label: 'Retention and Persistency', to: '/retention-and-persistency' },
      { label: 'Sales Support', to: '/sales-support' },
    ],
    panel: {
      type: 'dark',
      image: servicesBg,
      title: 'STREAMLINING OPERATIONS THROUGH TAILORED BPO SOLUTIONS',
      desc: ''
    }
  },
  'Insights': {
    heading: 'The Power of Advanced Insights',
    links: [
      { label: 'Client stories', to: '/customer-stories' },
      { label: 'Blog', to: '/insights' },
      { label: 'Press releases', to: '/press-release' },
      { label: 'News', to: '/news' },
      { label: 'Case Studies', to: '/case-studies' },
    ],
    panel: {
      type: 'image',
      image: insightsBg,
      title: 'Stay Informed',
      desc: 'Explore our latest articles and success stories from the field.'
    }
  },
  'Career': {
    layout: 'columns',
    columns: [
      { label: 'Our values', to: '/about-us', image: careerValuesBg },
      { label: 'Why Stefto', to: '/about-us', image: careerWhyBg },
      { label: 'Job Opportunity', to: '/careers', image: careerJobBg },
    ]
  },
};

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const location = useLocation();
  const accountMenuRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('stefto_admin_token');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('stefto_admin_token');
    setIsLoggedIn(false);
    setIsAccountMenuOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, accountMenuRef]);

  return (
    <header className="w-full sticky top-0 z-[1000] shadow-md">
      {/* Top Navy Bar - Visible on mobile now */}
      <div className="bg-[#1c469d] text-white py-1.5 sm:py-2 px-2 sm:px-6 lg:px-8 text-sm">
        <div className="max-w-[1380px] mx-auto flex justify-center sm:justify-between items-center">
          <div className="flex gap-3 sm:gap-6 lg:gap-8 items-center justify-center w-full sm:w-auto">
            <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"><Phone size={12} className="sm:w-3.5 sm:h-3.5" /> +91 8800 101 102</span>
            <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"><Mail size={12} className="sm:w-3.5 sm:h-3.5" /> info@stefto.com</span>
          </div>
          <div className="hidden sm:flex gap-3 sm:gap-4 items-center">
            <a href="https://www.facebook.com/steftocom/" target="_blank" rel="noreferrer" className="text-white opacity-80 hover:opacity-100 transition-opacity"><FaFacebookF size={14} /></a>
            <a href="https://x.com/steftocom" target="_blank" rel="noreferrer" className="text-white opacity-80 hover:opacity-100 transition-opacity"><FaTwitter size={14} /></a>
            <a href="https://www.linkedin.com/company/stefto/" target="_blank" rel="noreferrer" className="text-white opacity-80 hover:opacity-100 transition-opacity"><FaLinkedinIn size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-slate-50 py-2.5 sm:py-3 px-3 sm:px-4 lg:px-8 relative">
        <div className="max-w-[1380px] mx-auto flex justify-between items-center">

          <div className="flex items-center gap-2 sm:gap-3">
            <SteftoLogo />
          </div>

          {/* Desktop Nav - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 gap-3 xl:gap-4 items-center">
            {Object.keys(navMenus).map((label) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setActiveMenu(label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className={`flex items-center gap-1.5 px-3 py-2 rounded-md cursor-pointer transition-all text-[17px] font-bold ${activeMenu === label ? 'text-stefto-indigo bg-slate-100 shadow-sm' : 'text-slate-900 hover:text-stefto-indigo'}`}>
                  {label} <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === label ? 'rotate-180' : ''}`} />
                </span>

                {activeMenu === label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[999]">
                    <div className="bg-white shadow-2xl rounded-2xl flex overflow-hidden border border-slate-200" style={{ minWidth: navMenus[label].layout === 'columns' ? 'auto' : '650px' }}>
                      {navMenus[label].layout === 'columns' ? (
                        <div className="flex w-[650px] h-[320px]">
                          {navMenus[label].columns.map((col, idx) => (
                            <Link key={idx} to={col.to} className="flex-1 relative bg-cover bg-center flex items-end no-underline p-6 group/item" style={{ backgroundImage: `url(${col.image})` }}>
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 group-hover/item:to-stefto-navy/95 transition-all"></div>
                              <span className="relative z-[1] text-white text-xl font-black tracking-tight">{col.label}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <>
                          <div className="flex-1 p-8">
                            <p className="text-stefto-indigo font-black text-xs uppercase tracking-[0.2em] mb-6">{navMenus[label].heading}</p>
                            <div className="flex flex-col gap-1">
                              {navMenus[label].links.map((link, i) => (
                                <Link key={i} to={link.to} onClick={() => setActiveMenu(null)} className="block text-slate-700 no-underline py-2.5 text-[15px] font-bold hover:text-stefto-indigo hover:translate-x-1 transition-all border-b border-slate-50 last:border-0">{link.label}</Link>
                              ))}
                            </div>
                          </div>
                          <div className="flex-1 relative bg-cover p-8 text-white flex flex-col justify-center text-center" style={{ background: navMenus[label].panel.type === 'dark' ? '#041434' : 'transparent', backgroundImage: navMenus[label].panel.image ? `url(${navMenus[label].panel.image})` : 'none', backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-[rgba(4,20,52,0.6)] backdrop-blur-[2px]"></div>
                            <div className="relative z-[1]">
                              <h4 className="text-xl font-black mb-3">{navMenus[label].panel.title}</h4>
                              <p className="text-sm font-medium opacity-80 leading-relaxed text-slate-200">{navMenus[label].panel.desc}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/blogs" className="flex items-center gap-1.5 px-3 py-2 rounded-md cursor-pointer transition-all text-[17px] font-bold text-slate-900 hover:text-stefto-indigo no-underline">
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex gap-4 items-center" ref={searchRef}>
            {isSearchVisible ? (
              <div className="flex items-center bg-white rounded-full py-1.5 pl-5 pr-2 border-2 border-stefto-indigo shadow-lg transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search articles..."
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-none bg-transparent outline-none text-[15px] font-medium w-[150px] lg:w-[200px]"
                />
                <button onClick={() => setIsSearchVisible(false)} className="bg-slate-100 rounded-full cursor-pointer p-1.5 hover:bg-slate-200 transition-colors"><X size={16} /></button>
              </div>
            ) : (
              <button onClick={() => setIsSearchVisible(true)} className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white text-stefto-indigo cursor-pointer flex items-center justify-center hover:border-stefto-indigo hover:shadow-md transition-all"><Search size={18} /></button>
            )}

            {!isSearchVisible && (
              <>
                <Link to="/contact-us" className="btn-spark hidden lg:inline-flex items-center justify-center relative overflow-hidden bg-stefto-indigo text-white py-2 px-6 rounded-full font-bold no-underline text-[13px] uppercase tracking-widest hover:bg-stefto-navy transition-all shadow-xl hover:shadow-2xl active:scale-95">
                  Contact us
                </Link>
                {isLoggedIn ? (
                  <div className="relative" ref={accountMenuRef}>
                    <button
                      onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                      className="hidden lg:inline-flex items-center justify-center gap-2 border-2 border-stefto-indigo bg-white text-stefto-indigo py-2 px-5 rounded-full font-bold no-underline text-[13px] uppercase tracking-widest hover:bg-stefto-indigo hover:text-white transition-all active:scale-95 shadow-sm"
                    >
                      <User size={16} /> Account <ChevronDown size={14} className={`transition-transform duration-300 ${isAccountMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isAccountMenuOpen && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-[1001] animate-in fade-in slide-in-from-top-2 duration-200">
                        <Link to="/admin-dashboard" onClick={() => setIsAccountMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 no-underline transition-colors font-bold text-sm">
                          <LayoutDashboard size={18} className="text-green-600" /> Dashboard
                        </Link>
                        <div className="h-px bg-slate-100 mx-2 my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50/50 transition-colors font-bold text-sm bg-transparent border-none text-left cursor-pointer"
                        >
                          <LogOut size={18} /> Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login" className="hidden lg:inline-flex items-center justify-center gap-1.5 border-2 border-stefto-indigo text-stefto-indigo py-2 px-5 rounded-full font-bold no-underline text-[13px] uppercase tracking-widest hover:bg-stefto-indigo hover:text-white transition-all active:scale-95">
                    <LogIn size={15} /> Login
                  </Link>
                )}
              </>
            )}

            {/* Hamburger - visible on mobile/tablet, hidden on desktop */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer text-stefto-indigo p-1 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white z-[1001] shadow-lg border-t border-slate-200 p-4 sm:p-6 max-h-[80vh] overflow-y-auto lg:hidden">
            {Object.keys(navMenus).map((label) => (
              <div key={label} className="mb-4 sm:mb-5">
                <h4 className="text-stefto-indigo text-sm sm:text-base font-extrabold mb-2 sm:mb-3 border-b-2 border-slate-100 pb-1.5">{label}</h4>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {(navMenus[label].links || (navMenus[label].columns || [])).map((link, k) => (
                    <Link key={k} to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-500 no-underline text-xs sm:text-sm py-1">{link.label}</Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-4 sm:mb-5">
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-stefto-indigo text-sm sm:text-base font-extrabold no-underline block border-b-2 border-slate-100 pb-1.5 hover:text-[#2b3366]">Blog</Link>
            </div>

            {isLoggedIn ? (
              <div className="flex flex-col gap-2 mt-3">
                <Link to="/admin-dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-green-50 text-green-700 py-2.5 rounded-lg no-underline font-bold text-sm border border-green-200">
                  <LayoutDashboard size={16} /> Dashboard
                </Link>
                <button onClick={handleLogout} className="flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2.5 rounded-lg no-underline font-bold text-sm w-full border border-red-200 cursor-pointer">
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 border-2 border-stefto-indigo text-stefto-indigo text-center py-2.5 sm:py-3 rounded-lg no-underline font-bold mt-3 text-sm">
                <LogIn size={16} /> Login
              </Link>
            )}
            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block bg-stefto-indigo text-white text-center py-2.5 sm:py-3 rounded-lg no-underline font-bold mt-2 text-sm">Contact us</Link>
          </div>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-stefto-navy text-white pt-10 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 text-sm relative border-t-[5px] border-stefto-sky">
    <div className="max-w-[1280px] mx-auto">

      {/* Link Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">

        {/* Brand Hub */}
        <div>
          <div className="mb-4 sm:mb-5">
            <img src={STEFTO_LOGO_URL} alt="Stefto" className="h-10 sm:h-11 object-contain" />
          </div>
          <p className="footer-heading-spark leading-relaxed text-xs sm:text-sm">
            Stefto is the trade name of Incredible Management Services (India) Private Limited (CIN: U74140DL2007ULT166363).
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-2">
          <h4 className="footer-heading-spark text-sm sm:text-base font-bold mb-1 sm:mb-2">Company</h4>
          <Link to="/about-us" className="footer-link-spark text-xs sm:text-sm">About Us</Link>
          <Link to="/why-trust-stefto" className="footer-link-spark text-xs sm:text-sm">Why Trust Stefto?</Link>
          <Link to="/careers" className="footer-link-spark text-xs sm:text-sm">Careers</Link>
          <Link to="/security" className="footer-link-spark text-xs sm:text-sm">Security</Link>
          <Link to="/digital-lead-partner" className="footer-link-spark text-xs sm:text-sm">Partnership</Link>
          <Link to="/contact-us" className="footer-link-spark text-xs sm:text-sm">Contact us</Link>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-2">
          <h4 className="footer-heading-spark text-sm sm:text-base font-bold mb-1 sm:mb-2">Solutions</h4>
          <Link to="/inbound" className="footer-link-spark text-xs sm:text-sm">Inbound</Link>
          <Link to="/digital-debt-management" className="footer-link-spark text-xs sm:text-sm">Digital Debt Collections</Link>
          <Link to="/customer-support" className="footer-link-spark text-xs sm:text-sm">Digital Communications</Link>
          <Link to="/retention-and-persistency" className="footer-link-spark text-xs sm:text-sm">Retention and Persistency</Link>
          <Link to="/sales-support" className="footer-link-spark text-xs sm:text-sm">Sales Support</Link>
        </div>

        {/* Links Column 3 */}
        <div className="flex flex-col gap-2">
          <h4 className="footer-heading-spark text-sm sm:text-base font-bold mb-1 sm:mb-2">Insights</h4>
          <Link to="/news" className="footer-link-spark text-xs sm:text-sm">Blog</Link>
          <Link to="/press-release" className="footer-link-spark text-xs sm:text-sm">Press Release</Link>
          <Link to="/case-studies" className="footer-link-spark text-xs sm:text-sm">Case Studies</Link>
          <Link to="/customer-stories" className="footer-link-spark text-xs sm:text-sm">Customer Stories</Link>
          <Link to="/leadership" className="footer-link-spark text-xs sm:text-sm">Awards</Link>
        </div>

        {/* Links Column 4 */}
        <div className="flex flex-col gap-2">
          <h4 className="footer-heading-spark text-sm sm:text-base font-bold mb-1 sm:mb-2">Legal</h4>
          <Link to="/refunds-cancellations" className="footer-link-spark text-xs sm:text-sm">Refunds & cancellations</Link>
          <Link to="/legal-statement" className="footer-link-spark text-xs sm:text-sm">Legal Notice</Link>
          <Link to="/terms-of-use" className="footer-link-spark text-xs sm:text-sm">Terms of Use</Link>
          <Link to="/privacy-policy" className="footer-link-spark text-xs sm:text-sm">Acceptable Use Policy</Link>
          <Link to="/cookie-policy" className="footer-link-spark text-xs sm:text-sm">Cookie Policy</Link>
          <Link to="/privacy-policy" className="footer-link-spark text-xs sm:text-sm">Privacy Policy</Link>
        </div>

      </div>

      {/* Bottom Section: Contact + Social */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 sm:pt-10 mt-6 sm:mt-8 border-t border-white/10">

        {/* Contact Details */}
        <div>
          <p className="text-xs sm:text-sm opacity-85 text-white font-sans m-0">
            Mobile: +91 8800-101-102. Email: info@stefto.com
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 sm:gap-3">
          {[
            { Icon: FaFacebookF, href: "https://www.facebook.com/steftocom/" },
            { Icon: FaTwitter, href: "https://x.com/steftocom" },
            { Icon: FaInstagram, href: "https://www.instagram.com/stefto__/" },
            { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/stefto/?viewAsMember=true" }
          ].map(({ Icon, href }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-stefto-navy flex items-center justify-center no-underline transition-all hover:-translate-y-1 hover:shadow-lg">
              <Icon size={14} />
            </a>
          ))}
        </div>

      </div>

    </div>

    {/* Copyright Strip */}
    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-stefto-navy/10 py-3 sm:py-4 px-4 sm:px-8 flex justify-center">
      <p className="text-slate-400 text-[0.65rem] sm:text-xs lg:text-sm m-0 text-center font-sans" style={{ color: '#64748b' }}>
        <strong className="text-slate-500">Copyright &copy; 2007 &ndash; 2026</strong> Stefto (Incredible Management Services Pvt Ltd)
      </p>
    </div>
  </footer>
);

const AppContent = () => {
  const location = useLocation();
  const hideShell = location.pathname.startsWith('/admin-dashboard') || location.pathname === '/' || location.pathname === '/landing' || location.pathname.startsWith('/about-us') || location.pathname.startsWith('/careers') || location.pathname.startsWith('/contact-us') || location.pathname.startsWith('/leadership') || location.pathname.startsWith('/inbound') || location.pathname.startsWith('/outbound') || location.pathname.startsWith('/telecom') || location.pathname.startsWith('/banking-and-financial-services') || location.pathname.startsWith('/privacy-policy') || location.pathname.startsWith('/why-trust-stefto') || location.pathname.startsWith('/insurance') || location.pathname.startsWith('/retail-and-e-commerce');

  useEffect(() => {
    if (hideShell) {
      document.body.classList.add('landing-body');
      document.body.classList.remove('stefto-body');
    } else {
      document.body.classList.add('stefto-body');
      document.body.classList.remove('landing-body');
    }
    return () => {
      document.body.classList.remove('landing-body', 'stefto-body');
    };
  }, [hideShell]);

  return (
    <>
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      {!hideShell && <NavBar />}
      <div className={!hideShell ? "flex-grow min-h-[60vh] flex flex-col" : "min-h-screen"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-trust-stefto" element={<WhyTrustStefto />} />
          <Route path="/according-to-the-rbi-report-the-indian-household-debt-is-rising-but-it-is-relatively-low-in-comparison-with-other-emerging-markets" element={<AccordingToTheRbiReportTheIndianHouseholdDebtIsRisingButItIsRelativelyLowInComparisonWithOtherEmergingMarkets />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/back-office-support" element={<BackOfficeSupport />} />
          <Route path="/banking-and-financial-services" element={<BankingAndFinancialServices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/credit-refine" element={<CreditRefine />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/debt-collection" element={<DebtCollection />} />
          <Route path="/digital-debt-management" element={<DigitalDebtManagement />} />
          <Route path="/digital-lead-partner" element={<DigitalLeadPartner />} />
          <Route path="/health-care" element={<HealthCare />} />
          <Route path="/how-ai-is-making-debt-collection-more-human-a-2025-case-study" element={<HowAiIsMakingDebtCollectionMoreHumanA2025CaseStudy />} />
          <Route path="/inbound" element={<Inbound />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/legal-statement" element={<LegalStatement />} />
          <Route path="/new-update" element={<NewUpdate />} />
          <Route path="/news" element={<News />} />
          <Route path="/outbound" element={<Outbound />} />
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refunds-cancellations" element={<RefundsCancellations />} />
          <Route path="/retail-and-e-commerce" element={<RetailAndECommerce />} />
          <Route path="/retention-and-persistency" element={<RetentionAndPersistency />} />
          <Route path="/sales-support" element={<SalesSupport />} />
          <Route path="/security" element={<Security />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/telecom" element={<Telecom />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/the-significance-of-recovery-management-solutions-in-current-times" element={<TheSignificanceOfRecoveryManagementSolutionsInCurrentTimes />} />
          <Route path="/travel-hospitality-and-cargo" element={<TravelHospitalityAndCargo />} />
          <Route path="/insights" element={<Blog />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/blog-post/:id" element={<BlogPost />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/landing" element={<NewLanding />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      {!hideShell && <Footer />}
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
