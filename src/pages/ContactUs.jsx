import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowDown } from 'lucide-react';
import heroImage from '../assets/image.png';
import steftoLocation from '../assets/SteftoLocation.png';
import LandingLayout from '../components/layout/LandingLayout';
import WhyTrustSection from './LandingPage/components/WhyTrustSection';

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
                fit for you. Feel free to contact us over the phone or by email. You can also connect with one of our teammates and learn more about our
                services and how we can help your business.
              </p>
            </div>
          </div>
        </section>





        <section className="w-full py-16 sm:py-24 bg-white relative">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1c469d] uppercase tracking-wide" style={{ fontFamily: "'Fraunces', serif" }}>
                SAY HELLO!
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

              <div className="flex-1 flex items-stretch justify-center lg:justify-end mt-11 lg:mt-0">
                <div className="w-full max-w-[600px] rounded overflow-hidden shadow-2xl relative border-[4px] border-slate-50 h-full flex flex-col">
                  <img
                    src="https://res.cloudinary.com/dtz8hacj4/image/upload/v1779776420/Stefto_Building_Image_i2fvjc.png "
                    alt="Stefto Building Office"
                    className="w-full h-[300px] lg:h-full object-cover flex-1"
                  />
                </div>
              </div>


              <div className="flex-[1.2] lg:pr-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 sm:gap-y-8">
                  {/* Email */}
                  <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left border border-slate-200 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 border border-[#1c469d] flex items-center justify-center mb-4 text-[#1c469d]">
                      <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Email & Telephone</h3>
                    <div className="text-black text-base font-medium">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        info@stefto.com
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        +91 8800-101-102
                      </p>
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
                      WZ-1, Upper Ground Floor, Main Najafgarh Road, Uttam Nagar, Delhi - 110059.
                    </p>
                    {/* Arrow Connector */}
                    <div className="absolute bottom-[-24px] sm:bottom-[-16px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex">
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
                    <h3 className="font-bold text-[#1c469d] mb-2 text-lg">Gurugram Office</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Plot 112, Udyog Vihar phase 1, Sector 20, Gurugram, Haryana
                    </p>
                    {/* Arrow Connector (Visible ONLY on Mobile) */}
                    <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 translate-y-1/2 text-slate-300 z-10 flex sm:hidden">
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

                  </div>

                </div>
              </div>


            </div>

          </div>
        </section>



        {/* Location Map */}
        <section className="w-full bg-white relative pb-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041434] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>Our Presence</h2>
              <p className="text-slate-500 font-medium tracking-wide">VISIT OUR HEADQUARTERS IN GURUGRAM</p>
            </div>
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <iframe
                src="https://maps.google.com/maps?q=Plot%20No.%20112%2C%20Udyog%20Vihar%20Phase%201%2C%20Gurugram%2C%20Haryana%20122016&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                title="Stefto Headquarters Location"
              ></iframe>
            </div>
          </div>
        </section>




      </main>
    </LandingLayout>
  );
};

export default ContactUs;
