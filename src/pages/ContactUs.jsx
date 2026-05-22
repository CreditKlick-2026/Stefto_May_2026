import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowDown } from 'lucide-react';
import heroImage from '../assets/image.png';
import steftoLocation from '../assets/SteftoLocation.png';
import LandingLayout from '../components/layout/LandingLayout';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-slate-50 min-h-screen pt-16">

      {/* 1. Hero Section */}
      <section
        className="w-full py-16 sm:py-24 lg:py-32 relative flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(15, 31, 75, 0.85) 50%, rgba(29, 78, 216, 0.8) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-[800px]">
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
              We'd love to learn more about your business and see if Stefto could be the perfect
              fit for you. Feel free to contact us over the phone or by email. You can also request a
              free video call to connect with one of our teammates and learn more about our
              services and how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* 1.5. Offices Quick Nav */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-4 sm:py-6 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Head Office", "Noida Office", "New Delhi Office", "West Delhi Office", "Pune Office"
            ].map((office, idx) => (
              <button key={idx} className="flex-1 min-w-[150px] sm:min-w-[200px] text-white py-3 sm:py-4 px-4 rounded-md font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] shadow-sm text-center" style={{ background: "linear-gradient(135deg, #0f1f4b 0%, #1c469d 100%)" }}>
                {office}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Got a Question Section */}
      <section className="w-full flex flex-col md:flex-row" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1c469d 100%)" }}>
        {/* Left Solid Blue block */}
        <div className="md:w-1/2 hidden md:block min-h-[300px]"></div>

        {/* Right Content block */}
        <div className="w-full md:w-1/2 bg-white flex items-center">
          <div className="p-8 sm:p-12 lg:p-20 max-w-[800px]">
            <div className="mb-6 lg:mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1c469d] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                Got A Question?
              </h2>
              <div className="w-20 h-1 bg-slate-300"></div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-loose">
              Whether you're seeking advice on business strategies, troubleshooting tech
              issues, or simply curious about a topic, our knowledgeable team is at your
              service. With expertise spanning various domains, we're equipped to provide
              comprehensive solutions to all your queries. No question is too big or too
              small – we're here to support you every step of the way. Reach out to us
              today and tap into our wealth of knowledge and experience. Your satisfaction
              is our priority, and we're committed to delivering prompt and accurate
              assistance to ensure your peace of mind. Let us help you navigate through
              any challenges or uncertainties you may encounter. Get in touch with us now
              and let's find the answers together!
            </p>
          </div>
        </div>
      </section>

      {/* 3. Say Hello / Office Locations */}
      <section className="w-full py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Locations Column */}
            <div className="flex-[1.2] lg:pr-10">
              <div className="flex items-center justify-center sm:justify-start gap-4 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1c469d] uppercase tracking-wide" style={{ fontFamily: "'Fraunces', serif" }}>
                  SAY HELLO!
                </h2>
                <div className="flex-1 h-px bg-slate-300 max-w-[150px]"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 sm:gap-y-8">
                {/* Email */}
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Email</h3>
                  <div className="text-slate-500 text-sm">
                    <p>info@stefto.com</p>
                    <p>contact@imspglobal.com</p>
                  </div>
                  {/* Arrow Connector */}
                  <div className="absolute bottom-[-24px] sm:bottom-[-16px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex">
                    <ArrowDown size={24} strokeWidth={3} />
                  </div>
                </div>

                {/* Delhi Office */}
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Delhi Office</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    IInd Floor, DLF, Moti Nagar, New Delhi-110015
                  </p>
                  {/* Arrow Connector */}
                  <div className="absolute bottom-[-24px] sm:bottom-[-16px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex">
                    <ArrowDown size={24} strokeWidth={3} />
                  </div>
                </div>

                {/* Telephone */}
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Telephone</h3>
                  <p className="text-slate-500 text-sm">
                    +91 8800-101-102
                  </p>
                  {/* Arrow Connector */}
                  <div className="absolute bottom-[-24px] sm:bottom-[-16px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex">
                    <ArrowDown size={24} strokeWidth={3} />
                  </div>
                </div>

                {/* Pune Office */}
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Pune Office</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    501, 5th Floor, Pride Icon, Kharadi, Pune, Maharashtra-411014
                  </p>
                  {/* Arrow Connector */}
                  <div className="absolute bottom-[-24px] sm:bottom-[-16px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex">
                    <ArrowDown size={24} strokeWidth={3} />
                  </div>
                </div>

                {/* Head Office */}
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Head Office</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Plot 112, Udyog Vihar phase 1, Sector 20, Gurugram, Haryana
                  </p>
                  {/* Arrow Connector (Visible ONLY on Mobile) */}
                  <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex sm:hidden">
                    <ArrowDown size={24} strokeWidth={3} />
                  </div>
                </div>

                {/* Noida Office */}
                <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Noida Office</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    1st, 2nd and 3rd Floor B-24, Sector 1 Noida, Uttar Pradesh - 201301
                  </p>
                  {/* No Arrow here as it is the last item */}
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="flex-1 flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="w-full max-w-[600px] rounded overflow-hidden shadow-2xl relative border-[4px] border-slate-50">
                <img
                  src={steftoLocation}
                  alt="Stefto Building Office"
                  className="w-full h-[300px] lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Support Banner (Bottom) */}
      <section className="w-full py-12 sm:py-20 bg-slate-50 flex justify-center px-4">
        <div className="w-full max-w-[1000px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(26,35,126,0.25)] relative p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10" style={{ background: "linear-gradient(135deg, #0a1628 0%, #132359 50%, #1d4ed8 100%)" }}>

          {/* Faint grid/maze pattern as overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>

          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-center md:text-left relative z-10 max-w-[500px]">
            If you are an existing customer, for quick support response contact us at -
          </h3>

          <a href="mailto:info@stefto.com" className="relative z-10 md:ml-auto whitespace-nowrap bg-[#3b82f6] hover:bg-[#2563eb] text-white py-4 px-8 sm:px-10 rounded text-xl sm:text-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block no-underline">
            info@stefto.com
          </a>
        </div>
      </section>

    </main>
    </LandingLayout>
  );
};

export default ContactUs;
