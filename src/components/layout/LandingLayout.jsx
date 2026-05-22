import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  PhoneOutgoing,
  HeadphonesIcon,
  BarChart3,
  Users,
  Clock,
  Globe,
  Building2,
  ShoppingCart,
  Heart,
  Landmark,
  BookOpen,
  FileText,
  HelpCircle,
  Briefcase,
  Award,
  UserCheck,
  Layers,
  ArrowRight,
  TrendingUp,
  Settings,
  Search,
  ShieldCheck,
} from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import ChatWidget from "../ChatWidget";
import { BrandLogo } from "../icons/BrandLogo";
import "./nav.css";

// Dropdown menu data — BPO / Customer Experience
const menuData = {
  services: {
    title: "Services",
    badge: "What We Do",
    sections: [
      {
        title: "Industry Solutions",
        items: [
          { name: "BFSI", description: "Banking & financial services", icon: Landmark, href: "/banking-and-financial-services", color: "bg-green-50 text-green-600" },
          { name: "Telecom", description: "Subscriber support & activations", icon: Phone, href: "/telecom", color: "bg-purple-50 text-purple-600" },
        ]
      },
      {
        title: "Core Services",
        items: [
          { name: "Inbound Support", description: "24/7 customer helpdesk", icon: Phone, href: "/inbound", color: "bg-blue-50 text-blue-600" },
          { name: "Outbound Calling", description: "Lead generation & sales", icon: PhoneOutgoing, href: "/outbound", color: "bg-red-50 text-red-600" },
        ]
      }
    ]
  },
  industries: {
    title: "Industries",
    badge: "Sectors We Serve",
    sections: [
      {
        title: "Financial Services",
        items: [
          { name: "Banking & NBFC", description: "Collections, service & onboarding", icon: Landmark, href: "/banking-and-financial-services", color: "bg-blue-50 text-blue-600" },
          { name: "Insurance", description: "Policy support & renewals", icon: Award, href: "/insurance", color: "bg-green-50 text-green-600" },
        ]
      },
      {
        title: "Other Sectors",
        items: [
          { name: "Retail & E-Commerce", description: "Order support & returns management", icon: ShoppingCart, href: "/retail-and-e-commerce", color: "bg-orange-50 text-orange-600" },
          { name: "Healthcare", description: "Patient helpdesk & appointment mgmt", icon: Heart, href: "/health-care", color: "bg-red-50 text-red-600" },
          { name: "Telecom", description: "Subscriber support & activations", icon: Globe, href: "/telecom", color: "bg-purple-50 text-purple-600" },
          { name: "Automotive", description: "Dealer & aftersales support", icon: Building2, href: "/automotive", color: "bg-cyan-50 text-cyan-600" },
        ]
      }
    ]
  },
  company: {
    title: "Company",
    items: [
      { name: "About Us", description: "Our story, mission & values", icon: Users, href: "/about-us", color: "bg-blue-50 text-blue-600" },
      { name: "Leadership", description: "Meet the team behind Stefto", icon: Briefcase, href: "/leadership", color: "bg-purple-50 text-purple-600" },
      { name: "Careers", description: "Join our growing BPO team", icon: UserCheck, href: "/careers", color: "bg-green-50 text-green-600" },
      { name: "Contact Us", description: "Get in touch with our team", icon: HeadphonesIcon, href: "/contact-us", color: "bg-red-50 text-red-600" },
    ]
  },
  whyStefto: {
    title: "Why Stefto",
    badge: "Our Difference",
    items: [
      { name: "Our Story", description: "Trusted partner since 2007", icon: Award, href: "/about-us", color: "bg-blue-50 text-blue-600" },
      { name: "Security & Compliance", description: "RBI-aligned, 100% compliant ops", icon: ShieldCheck, href: "/security", color: "bg-green-50 text-green-600" },
      { name: "Innovation Partners", description: "Cutting-edge digital solutions", icon: Layers, href: "/digital-lead-partner", color: "bg-purple-50 text-purple-600" },
      { name: "Client Stories", description: "Results that speak for themselves", icon: Users, href: "/customer-stories", color: "bg-amber-50 text-amber-600" },
    ]
  },
  aboutUs: {
    title: "About Us",
    items: [
      { name: "About Stefto", description: "Our mission, vision & values", icon: Users, href: "/about-us", color: "bg-blue-50 text-blue-600" },
      { name: "Leadership", description: "Meet the leaders behind Stefto", icon: Briefcase, href: "/leadership", color: "bg-purple-50 text-purple-600" },
    ]
  }
};

const DropdownMenu = ({ menu, isOpen, onClose }) => {
  if (!isOpen) return null;
  const isSectioned = menu.sections;

  return (
    <motion.div
      initial={{ opacity: 0, y: 4, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 2, scale: 0.99 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 pt-[1px] z-[1000]"
      onMouseLeave={onClose}
    >
      <div
        className={`pb-dropdown ${isSectioned ? 'min-w-[560px]' : 'min-w-[220px]'
          }`}
      >
        {/* Badge header */}
        {menu.badge && (
          <div className="px-5 pt-4 pb-2 bg-slate-50/50 border-b border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1c469d] bg-[#1c469d]/8 border border-[#1c469d]/12 px-2.5 py-0.5 rounded-full">
              <span className="w-1 h-1 rounded-full bg-[#1c469d] inline-block animate-pulse" />
              {menu.badge}
            </span>
          </div>
        )}

        {isSectioned ? (
          <div className="grid grid-cols-2 divide-x divide-slate-100/80 gap-0">
            {menu.sections.map((section, i) => (
              <div key={i} className="py-2">
                <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-[0.18em] pt-3 pb-2 px-5">{section.title}</p>
                <div className="divide-y divide-slate-50">
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3.5 px-5 py-3 hover:bg-slate-50/60 transition-all duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 ${item.color}`}>
                        <item.icon className="w-4 h-4" strokeWidth={1.8} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#1c469d] transition-colors duration-150">{item.name}</span>
                        <span className="text-[10.5px] text-slate-500 mt-0.5 leading-normal">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            {menu.items.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                onClick={onClose}
                className="pb-dropdown-item group"
              >
                <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 ${item.color}`}>
                  <item.icon className="w-[16px] h-[16px]" strokeWidth={1.8} />
                </div>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}


      </div>
    </motion.div>
  );
};

// Custom hook to check auth status
const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Start false - no blocking spinner

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/profile', {
          credentials: 'include'
        });
        setIsLoggedIn(response.ok);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  return { isLoggedIn, isLoading };
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setSearchQuery(''); } };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const navItems = [

    { name: "Why Stefto?", key: "whyStefto", hasDropdown: false, href: "/about-us#why-stefto" },
    { name: "Services", key: "services", hasDropdown: true },
    { name: "About Us", key: "aboutUs", hasDropdown: true },
    { name: "Careers", key: "careers", hasDropdown: false, href: "/careers" },
  ];

  const toggleMobileExpanded = (key) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  return (
    <>
      {/* Apple-style nav bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-350 ${scrolled
          ? 'bg-[#ffffff] shadow-[0_4px_24px_rgba(15,23,42,0.06)] border-b border-slate-100 text-[#0f172a]'
          : 'bg-[#ffffff] border-b border-slate-50 text-[#0f172a]'
          }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex items-center h-[64px] gap-4">
            <Link to="/" className="flex items-center shrink-0 cursor-pointer h-full py-1">
              <img src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277115/Stefto_Logo_ng3frh.png" alt="Stefto" className="h-12 md:h-[56px] w-auto object-contain" />
            </Link>

            {/* Desktop Nav — center (flex-1 pushes right buttons to far right) */}
            <div className="hidden lg:flex items-center gap-1.5 h-full flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative flex items-center h-full px-1"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button className={`nav-text-smooth ${activeDropdown === item.key ? 'active' : ''
                      }`}>
                      {item.name}
                      <ChevronDown className={`nav-caret w-4 h-4 ml-1`} strokeWidth={2.5} />
                    </button>
                  ) : (
                    <Link to={item.href} className={`nav-text-smooth ${activeDropdown === item.key ? 'active' : ''
                      }`}>
                      {item.name}
                    </Link>
                  )}

                  <AnimatePresence>
                    {item.hasDropdown && (
                      <DropdownMenu
                        menu={menuData[item.key]}
                        isOpen={activeDropdown === item.key}
                        onClose={() => setActiveDropdown(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side — Search + CTA buttons — always pinned far right */}
            <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0">

              {/* ── Animated Search ── */}
              <div className="relative flex items-center">
                {/* Input floats absolutely to the LEFT of the button — never shifts layout */}
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      key="search-input"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 220, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute overflow-hidden"
                      style={{ right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' }}
                    >
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full h-9 pl-4 pr-3 rounded-full border border-slate-200 bg-white shadow-sm text-[14px] text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/15 transition-all duration-200"
                        onBlur={() => { if (!searchQuery) { setSearchOpen(false); } }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => { setSearchOpen((v) => !v); setSearchQuery(''); }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 shrink-0 ${searchOpen
                    ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-md shadow-blue-500/25'
                    : 'border-slate-200 text-slate-500 hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-blue-50'
                    }`}
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#1e3a8a] text-white text-[13.5px] font-semibold hover:bg-[#1e40af] transition-all duration-200 shadow-sm shadow-blue-900/20 shrink-0"
              >
                Contact Us
              </Link>


            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[990] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0, scale: 0.96 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: "100%", opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-4 right-4 bottom-4 w-[calc(100vw-32px)] max-w-[360px] bg-white z-[1000] lg:hidden flex flex-col rounded-[24px] border border-slate-200/80 shadow-[0_24px_64px_rgba(15,23,42,0.15)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center shrink-0 h-10">
                  <img src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277115/Stefto_Logo_ng3frh.png" alt="Stefto" className="h-7 w-auto object-contain" />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors bg-slate-50 border border-slate-100"
                >
                  <X className="w-4 h-4 text-slate-600" />
                </button>
              </div>

              {/* Scrollable Items */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 custom-scrollbar">
                {navItems.map((category) => {
                  const data = category.hasDropdown ? menuData[category.key] : null;
                  const isExpanded = mobileExpanded === category.key;

                  return (
                    <div key={category.key} className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/30">
                      {!category.hasDropdown ? (
                        <Link
                          to={category.href}
                          onClick={() => setIsOpen(false)}
                          className="w-full flex items-center justify-between px-5 py-4 text-[15px] nav-text-smooth hover:bg-slate-50/80"
                        >
                          <span className="flex items-center gap-2">{category.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => toggleMobileExpanded(category.key)}
                          className="w-full flex items-center justify-between px-5 py-4 text-[15px] nav-text-smooth hover:bg-slate-50/80"
                        >
                          <span className="flex items-center gap-2">
                            {category.name}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-250 ${isExpanded ? 'rotate-180 text-[#1c469d]' : ''}`} />
                        </button>
                      )}

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-slate-100 bg-white"
                          >
                            <div className="p-3.5 space-y-3">
                              {data.sections ? (
                                data.sections.map((section, idx) => (
                                  <div key={idx} className="space-y-2">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2.5 mt-2 mb-1.5">{section.title}</p>
                                    <div className="space-y-1">
                                      {section.items.map((item, itemIdx) => (
                                        <Link
                                          key={itemIdx}
                                          to={item.href}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all group"
                                        >
                                          <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                                            <item.icon className="w-4 h-4" />
                                          </div>
                                          <span className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#1c469d]">{item.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="grid grid-cols-1 gap-1">
                                  {data.items.map((item, itemIdx) => (
                                    <Link
                                      key={itemIdx}
                                      to={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all group"
                                    >
                                      <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                                        <item.icon className="w-4 h-4" />
                                      </div>
                                      <span className="text-[13.5px] font-semibold text-slate-800 group-hover:text-[#1c469d]">{item.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTAs */}
              <div className="shrink-0 px-6 py-5 border-t border-slate-100 bg-slate-50/50 space-y-3">


              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp pill */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[55] flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)] hover:-translate-x-1 transition-all duration-200"
        style={{ width: 48, height: 48, borderRadius: '14px 0 0 14px' }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3b82f6" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}

export function Footer() {
  const footerRef = useRef(null);

  // ── Mobile-compatible parallax ──────────────────────────────────────────
  const { scrollY } = useScroll();
  const [inputRange, setInputRange] = useState([99999, 999999]);

  useEffect(() => {
    const calculate = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const footerTop = rect.top + scrollTop;
      const vh = window.innerHeight;
      setInputRange([footerTop - vh, footerTop + rect.height * 0.4]);
    };

    const t = setTimeout(calculate, 100);
    window.addEventListener('resize', calculate);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', calculate);
    };
  }, []);

  const avatarY = useTransform(scrollY, inputRange, [-120, 60]);

  const footerLinks = {
    product: [
      { name: "Inbound Support", href: "/inbound" },
      { name: "Outbound Calling", href: "/outbound" },
      { name: "Back Office", href: "/back-office-support" },
      { name: "Digital Solutions", href: "/digital-debt-management" },
      { name: "Sales Support", href: "/sales-support" },
      { name: "Retention & Persistency", href: "/retention-and-persistency" },
    ],
    solutions: [
      { name: "Banking & NBFC", href: "/banking-and-financial-services" },
      { name: "Insurance BPO", href: "/insurance" },
      { name: "Healthcare BPO", href: "/health-care" },
      { name: "Retail & E-Commerce", href: "/retail-and-e-commerce" },
      { name: "Telecom Support", href: "/telecom" },
      { name: "Automotive", href: "/automotive" },
    ],
    general: [
      { name: "About Stefto", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Use", href: "/terms-of-use" },
    ]
  };

  return (
    <footer ref={footerRef} className="relative pt-20 sm:pt-36 pb-8 sm:pb-12 font-sans selection:bg-blue-900 selection:text-white z-0 overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f1f4b 35%, #132359 60%, #1a3a8f 85%, #1d4ed8 100%)" }}>

      {/* 1. The Seamless Wave Mask (z-20) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none drop-shadow-[0_8px_12px_rgba(0,0,0,0.04)]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-[80px] md:h-[140px]" preserveAspectRatio="none">
          <path d="M0,120 C360,120 540,30 720,30 C900,30 1080,120 1440,120 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* 2. Floating Stefto Chibi Character (z-10) */}
      {/* 
      <div className="absolute top-0 left-[20%] md:left-[28%] z-10 w-40 h-52 pointer-events-none opacity-90">
        <motion.div
          style={{ y: avatarY }}
          className="relative w-full h-full"
        >
          <img
            src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277117/Stefto_Chibi_Character_rkwucv.png"
            alt="Stefto Mascot"
            className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] rotate-180"
          />
        </motion.div>
      </div>
      */}

      {/* 3. Footer Content (z-30) */}
      <div className="max-w-[1080px] mx-auto px-6 relative z-30">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-16 lg:gap-8 pt-2 sm:pt-4">

          {/* Left Side */}
          <div className="lg:w-[45%] flex flex-col gap-4 sm:gap-6">
            <div className="mb-2">
              <img
                src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277115/Stefto_Logo_ng3frh.png"
                alt="Stefto"
                className="h-10 sm:h-12 w-auto object-contain mb-4"
              />
              <p className="text-blue-100/80 font-semibold text-[13px] sm:text-[15px]">Next-Gen BPO & Customer Experience Solutions.</p>
            </div>

            <div className="mt-2 sm:mt-6">
              <p className="text-blue-100/70 text-[12px] sm:text-[13px] font-medium mb-2 leading-relaxed">
                Want to receive insights on BPO and customer support?<br />
                Enter your email to join our expert newsletter:
              </p>
              <form className="flex items-center w-full max-w-[320px] sm:max-w-[340px] bg-white/5 border border-white/10 rounded-xl p-1 sm:p-1.5 shadow-[0_4px_14px_0_rgba(0,0,0,0.12)]" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="hello@company.com"
                  className="flex-1 bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 text-[13px] sm:text-[14px] text-white outline-none placeholder:text-blue-200/40 font-medium"
                  required
                />
                <button type="submit" className="bg-white hover:bg-slate-100 text-[#1c469d] p-2.5 sm:p-3 rounded-lg transition-colors flex items-center justify-center shrink-0 font-bold">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1c469d]" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[55%] grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-[10px] sm:text-[12px] font-bold text-blue-200/40 uppercase tracking-widest mb-3 sm:mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                  {category === 'product' ? 'Solutions' : category === 'solutions' ? 'Services' : 'General'}
                </h3>
                <ul className="space-y-2 sm:space-y-3.5">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-[12px] sm:text-[14px] text-blue-100/70 font-medium hover:underline hover:text-white decoration-2 underline-offset-[5px] transition-all">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-20 pt-4 sm:pt-6 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

          <div className="text-[10px] sm:text-[11px] text-blue-200/50 font-medium flex flex-col gap-1.5 sm:gap-2">
            <span>© {new Date().getFullYear()}-present Stefto Inc. All Rights Reserved.</span>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="/terms" className="hover:text-white hover:underline underline-offset-[3px] decoration-white/30">Terms of Use</a>
              <a href="/privacy" className="hover:text-white hover:underline underline-offset-[3px] decoration-white/30">Privacy Policy</a>
              <a href="/conduct" className="hover:text-white hover:underline underline-offset-[3px] decoration-white/30">Code of Conduct</a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 text-blue-200/60">
            <a href="#" className="hover:-translate-y-1 hover:text-white transition-all duration-200"><FaTwitter className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" /></a>
            <a href="#" className="hover:-translate-y-1 hover:text-white transition-all duration-200"><FaLinkedinIn className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" /></a>
            <a href="#" className="hover:-translate-y-1 hover:text-white transition-all duration-200"><FaGithub className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" /></a>
            <a href="#" className="hover:-translate-y-1 hover:text-white transition-all duration-200"><FaInstagram className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-50 selection:text-[#1c469d]">
      <Navbar />
      <main className="relative z-10 bg-transparent">
        {children}
      </main>
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
}
