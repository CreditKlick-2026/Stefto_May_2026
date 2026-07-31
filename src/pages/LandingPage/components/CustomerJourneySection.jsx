import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const CustomerJourneySection = () => {
  // 'human', 'hybrid', 'autonomous'
  const [activeForce, setActiveForce] = useState('human');

  // Auto-cycle through forces
  useEffect(() => {
    const forces = ['human', 'hybrid', 'autonomous'];
    const interval = setInterval(() => {
      setActiveForce(prev => {
        const nextIdx = (forces.indexOf(prev) + 1) % forces.length;
        return forces[nextIdx];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Helper to determine active states
  const isHumanActive = activeForce === 'human' || activeForce === 'hybrid';
  const isAutonomousActive = activeForce === 'autonomous' || activeForce === 'hybrid';

  return (
    <div className="w-full bg-[#484a5e] py-20 relative overflow-hidden font-sans">
      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .circuit-flow {
          stroke-dasharray: 4 4;
          animation: flow 0.8s linear infinite;
        }
      `}</style>

      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-6 relative flex flex-col md:flex-row items-center justify-between min-h-0 md:min-h-[500px]">

        {/* LEFT SIDE: Circular Customer Diagram */}
        <div className="relative w-full md:w-[30%] flex justify-center items-center h-[220px] md:h-[400px]">

          {/* Main Circle (Left Half Arc) */}
          <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full border border-white/20 border-r-transparent border-t-transparent -rotate-45" />

          {/* Customer Image Center */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-[#6b7280] overflow-hidden bg-slate-200 shadow-xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Customer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[80px] md:top-[110px] flex flex-col items-center z-20">
              <p className="text-white text-[12px] md:text-[15px] font-medium whitespace-nowrap mb-2 drop-shadow-lg">Customer talking...</p>
              <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#16c653] flex items-center justify-center shadow-[0_0_20px_rgba(22,198,83,0.6)] animate-pulse">
                <Phone size={14} className="text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Radiating Text Labels & Lines */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 scale-50 sm:scale-100">

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Intent clarity (240 deg) */}
              <line x1="130" y1="79" x2="115" y2="53" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              {/* Persona and context (210 deg) */}
              <line x1="79" y1="130" x2="53" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              {/* Business criticality (180 deg) */}
              <line x1="60" y1="200" x2="30" y2="200" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              {/* Channel and preference (150 deg) */}
              <line x1="79" y1="270" x2="53" y2="285" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
              {/* Task complexity (120 deg) */}
              <line x1="130" y1="321" x2="115" y2="347" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
            </svg>

            {/* Text Labels */}
            <span className="absolute text-slate-300 text-[13px] tracking-wide whitespace-nowrap" style={{ top: '53px', left: '105px', transform: 'translate(-100%, -50%)' }}>Intent clarity</span>
            <span className="absolute text-slate-300 text-[13px] tracking-wide whitespace-nowrap" style={{ top: '115px', left: '43px', transform: 'translate(-100%, -50%)' }}>Persona and context</span>
            <span className="absolute text-slate-300 text-[13px] tracking-wide whitespace-nowrap" style={{ top: '200px', left: '20px', transform: 'translate(-100%, -50%)' }}>Business criticality</span>
            <span className="absolute text-slate-300 text-[13px] tracking-wide whitespace-nowrap" style={{ top: '285px', left: '43px', transform: 'translate(-100%, -50%)' }}>Channel and preference</span>
            <span className="absolute text-slate-300 text-[13px] tracking-wide whitespace-nowrap" style={{ top: '347px', left: '105px', transform: 'translate(-100%, -50%)' }}>Task complexity</span>
          </div>
        </div>

        {/* MIDDLE: Sliders & Connecting Lines */}
        <div className="relative w-full md:w-[40%] flex flex-col justify-center items-center px-4 mt-8 md:mt-0">

          {/* Sliders Container */}
          <div className="w-full max-w-[220px] relative z-20">
            {/* Human Slider */}
            <div className="mb-10">
              <p className="text-white text-base mb-2 font-medium">Human</p>
              <div className="w-full h-4 bg-[#8b8e9b] rounded-full p-[2px] shadow-inner relative overflow-hidden">
                <div
                  className="h-full bg-[#16c653] rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: activeForce === 'human' ? '90%' : activeForce === 'hybrid' ? '50%' : '5%' }}
                />
              </div>
            </div>

            {/* AI Slider */}
            <div>
              <p className="text-white text-base mb-2 font-medium">Automation & Tech</p>
              <div className="w-full h-4 bg-[#8b8e9b] rounded-full p-[2px] shadow-inner relative overflow-hidden">
                <div
                  className="h-full bg-[#16c653] rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: activeForce === 'autonomous' ? '90%' : activeForce === 'hybrid' ? '50%' : '5%' }}
                />
              </div>
            </div>
          </div>

          {/* SVG Connecting Lines to Right Tabs (Circuit Style) */}
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 translate-x-[90%] md:translate-x-[75%] pointer-events-none z-10 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">

            {/* Human Line (Top) */}
            <path
              d="M0,25 L20,25 L30,15 L100,15"
              fill="none"
              stroke={isHumanActive ? "#16c653" : "#6a7082"}
              strokeWidth="2.5"
              strokeLinejoin="miter"
              className={`transition-colors duration-500 ${isHumanActive ? 'circuit-flow' : ''}`}
            />
            <circle cx="20" cy="25" r="1.5" fill={isHumanActive ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="30" cy="15" r="1.5" fill={isHumanActive ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="100" cy="15" r="2.5" fill={isHumanActive ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />

            {/* Hybrid Line (Middle convergence) */}
            <path
              d="M0,25 L10,25 L35,50 L100,50"
              fill="none"
              stroke={activeForce === 'hybrid' ? "#16c653" : "#6a7082"}
              strokeWidth="2.5"
              strokeLinejoin="miter"
              className={`transition-colors duration-500 ${activeForce === 'hybrid' ? 'circuit-flow' : ''}`}
            />
            <path
              d="M0,75 L10,75 L35,50 L100,50"
              fill="none"
              stroke={activeForce === 'hybrid' ? "#16c653" : "#6a7082"}
              strokeWidth="2.5"
              strokeLinejoin="miter"
              className={`transition-colors duration-500 ${activeForce === 'hybrid' ? 'circuit-flow' : ''}`}
            />
            <circle cx="10" cy="25" r="1.5" fill={activeForce === 'hybrid' ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="10" cy="75" r="1.5" fill={activeForce === 'hybrid' ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="35" cy="50" r="2.5" fill={activeForce === 'hybrid' ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="100" cy="50" r="2.5" fill={activeForce === 'hybrid' ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />

            {/* Autonomous Line (Bottom) */}
            <path
              d="M0,75 L20,75 L30,85 L100,85"
              fill="none"
              stroke={isAutonomousActive ? "#16c653" : "#6a7082"}
              strokeWidth="2.5"
              strokeLinejoin="miter"
              className={`transition-colors duration-500 ${isAutonomousActive ? 'circuit-flow' : ''}`}
            />
            <circle cx="20" cy="75" r="1.5" fill={isAutonomousActive ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="30" cy="85" r="1.5" fill={isAutonomousActive ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
            <circle cx="100" cy="85" r="2.5" fill={isAutonomousActive ? "#16c653" : "#6a7082"} className="transition-colors duration-500" />
          </svg>
        </div>

        {/* RIGHT SIDE: Tabs */}
        <div className="w-full md:w-[30%] flex flex-col justify-center space-y-8 relative z-20 mt-10 md:mt-0 pl-12 md:pl-0">

          {/* Human Force Tab */}
          <div
            className="cursor-pointer group"
            onClick={() => setActiveForce('human')}
          >
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeForce === 'human' ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>Human Force</h3>
            <p className={`text-base transition-colors duration-300 ${activeForce === 'human' ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>TP Expert</p>
          </div>

          {/* Hybrid Force Tab */}
          <div
            className="cursor-pointer group mt-8"
            onClick={() => setActiveForce('hybrid')}
          >
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeForce === 'hybrid' ? 'text-[#16c653]' : 'text-slate-300 group-hover:text-white'}`}>Hybrid Force</h3>
            <p className={`text-base transition-colors duration-300 ${activeForce === 'hybrid' ? 'text-[#16c653]' : 'text-slate-400 group-hover:text-slate-300'}`}>Human + Automation</p>
          </div>

          {/* Autonomous Force Tab */}
          <div
            className="cursor-pointer group mt-8"
            onClick={() => setActiveForce('autonomous')}
          >
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeForce === 'autonomous' ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>Autonomous Force</h3>
            <p className={`text-base transition-colors duration-300 ${activeForce === 'autonomous' ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>Automated Systems</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default CustomerJourneySection;
