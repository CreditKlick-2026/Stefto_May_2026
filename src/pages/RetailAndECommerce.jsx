import React from 'react';
import LandingLayout from '../components/layout/LandingLayout';

const RetailAndECommerce = () => {
  return (
    <LandingLayout>
      <div className="relative pt-32 pb-20 min-h-[60vh] flex flex-col justify-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f1f4b 50%, #1c469d 100%)" }}>
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
            Retail &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">E-Commerce</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-light">
            Empowering retail and e-commerce brands with intelligent customer support, order management, and seamless operations.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Retail Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-stefto-indigo text-xs font-bold mb-6 tracking-wide uppercase border border-blue-100">
                Adaptive Retail
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                The New Imperative for Retailers
              </h2>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  With global disruption, external pressures, and responsibilities, adaptive retail is becoming the new imperative for retailers. Retailers need to be able to adapt quickly to reduced turnaround times, improve delivery accuracy, and offer an excellent customer experience to stay on top of the market.
                </p>
                <p>
                  <strong className="text-stefto-navy">Stefto</strong> will help your retail business evolve and stay resilient with groundbreaking technological innovations that will change the way consumers shop and interact with your business. We'll leverage technology to automate your retail and distribution chain processes, including order fulfillment and documentation. 
                </p>
                <p>
                  From the first time a customer hears about your business, through the initial contact with your retail outlet via the web, sales agent, event, or social media, through to the opportunity and sales stage, to onboarding, service provision, support tickets, and complaints, and onward to subsequent orders, we have got you covered.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl relative group">
                <div className="absolute inset-0 bg-stefto-navy/10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern Retail Store Operations" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* E-Commerce Section */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold mb-6 tracking-wide uppercase border border-amber-100">
                E-Commerce Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Click-and-Order Excellence
              </h2>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  Over the last decade, the retail industry has evolved from traditional brick-and-mortar to click-and-order. And e-commerce is quickly establishing itself as a viable alternative to traditional retail channels. However, the eCommerce space is a highly competitive one, with businesses competing for market share and superior user experience.
                </p>
                <p>
                  <strong className="text-stefto-navy">Stefto</strong> has designed an ingenious solution for e-commerce businesses. Our BPM solution for this industry is quick, has minimal fuss, and tackles various challenges from the get-go.
                </p>
                <p>
                  Our BPM solution is holistic and combines best-of-breed technology tools with analytical models that deliver a superior user experience and operations framework, impacting multiple business functions and ensuring a strong foundation for a long-term business digital journey.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl relative group border border-slate-200">
                <div className="absolute inset-0 bg-stefto-navy/10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" 
                  alt="E-Commerce Interface and Shopping" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </LandingLayout>
  );
};

export default RetailAndECommerce;
