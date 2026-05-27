import React, { useEffect } from 'react';
import LandingLayout from '../components/layout/LandingLayout';
import { Database, BarChart3, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceCards = [
  {
    icon: Database,
    title: "Debt Collection",
    description: "End-to-end recovery solutions for soft and hard collections.",
    features: [
      "Pre-emptive Engagement",
      "Outbouding Calling",
      "Field Collection Support",
      "Legal Recovery Pathways"
    ],
    link: "/inbound"
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
  }
];

const industryCards = [
  {
    title: "Banking & NBFC",
    image: "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779862456/ChatGPT_Image_May_27_2026_11_38_07_AM_tdxfpe.png",
    specialties: "Retail & Commercial Loans"
  },
  {
    title: "Fintech",
    image: "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779862454/ChatGPT_Image_May_27_2026_11_41_03_AM_2_beklfv.png",
    specialties: "Digital Lending, Buy Now Pay Later"
  },
  {
    title: "Telecom",
    image: "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779862455/ChatGPT_Image_May_27_2026_11_42_28_AM_bdm0qz.png",
    specialties: "Sales & Service"
  },
  {
    title: "Insurance",
    image: "https://res.cloudinary.com/dtz8hacj4/image/upload/v1779862455/ChatGPT_Image_May_27_2026_11_43_42_AM_fowkcs.png",
    specialties: "Retention & Sales"
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-white min-h-screen pt-20 pb-24">
        {/* Core Services Section - Constrained Width */}
        <div className="max-w-[1280px] mx-auto px-6 pt-10 text-center">
          <h1 className="text-3xl md:text-[42px] font-black text-[#0f2a5e] mb-4 tracking-tight">Our Core Services</h1>   <div className="w-16 h-[3px] bg-[#1158a7] mx-auto mb-6"></div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-[#1e3a8a] border border-transparent rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <Icon size={36} className="text-red-500" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/80 text-[14px] leading-[1.6] mb-8 min-h-[66px]">
                    {card.description}
                  </p>

                  <div className="space-y-3.5 mb-12 flex-grow">
                    {card.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0" strokeWidth={3} />
                        <span className="text-white/90 text-[13px] font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Verticals Section - Full Width */}
        <div className="w-full mx-auto px-6 mt-32 pb-20 text-center">
          <h2 className="text-3xl md:text-[42px] font-black text-[#0f2a5e] mb-4 tracking-tight">Our Core Industry Verticals</h2>


          <div className="w-16 h-[3px] bg-[#1158a7] mx-auto mb-6"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {industryCards.map((card, idx) => (
              <div key={idx} className="relative overflow-hidden  h-[280px] group cursor-pointer shadow-lg">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041434] via-[#041434]/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                  <h3 className={`text-3xl font-bold text-white ${card.specialties ? 'mb-6' : 'mb-0'}`}>
                    {card.title}
                  </h3>

                  {card.specialties && (
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                      <p className="text-white text-[11px] font-bold tracking-wider mb-1.5 uppercase">Specialties</p>
                      <p className="text-slate-200 text-[14px] font-medium m-0">{card.specialties}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </LandingLayout>
  );
};

export default Services;
