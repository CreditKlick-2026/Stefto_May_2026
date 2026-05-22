import React from 'react';

const STEFTO_LOGO_URL = 'https://res.cloudinary.com/dtz8hacj4/image/upload/v1779277115/Stefto_Logo_ng3frh.png';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #041434 0%, #0d1f5c 100%)' }}>
      <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-2xl border border-white/20 text-center max-w-2xl shadow-2xl">
        <img src={STEFTO_LOGO_URL} alt="Stefto" className="h-12 md:h-16 mx-auto mb-8" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Under Maintenance</h1>
        <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8">
          We are currently upgrading our platform to serve you better. We will be back online shortly. Thank you for your patience!
        </p>
        <div className="flex gap-2 justify-center mt-4">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
