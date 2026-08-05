import React, { useRef, useEffect, useState } from 'react';

const servicesList = [
  {
    no: '01',
    name: 'Inbound customer support',
    desc: "24×7 helpline management by trained advisors — service queries, order status, complaints and escalations, answered in the customer's preferred language and resolved with clear ownership on the first contact wherever possible.",
    scope: 'Helpline · Queries · Complaints · Escalations',
  },
  {
    no: '02',
    name: 'Outbound engagement',
    desc: 'Welcome calls, service reminders, renewal and persistency calling, feedback and win-back campaigns — DND-compliant outreach that strengthens the relationship instead of straining it.',
    scope: 'Welcome · Reminders · Renewals · Win-back',
  },
  {
    no: '03',
    name: 'Email & chat support',
    desc: "Written service in your brand's voice — live chat and email queues integrated with your CRM, measured on first-response and full-resolution SLAs, not just ticket closure.",
    scope: 'Live chat · Email · CRM-integrated',
  },
  {
    no: '04',
    name: 'Retention & save-desk',
    desc: 'Specialist advisors for the moments that decide loyalty — cancellation saves, complaint recovery and persistency follow-up, handled with empathy and tracked to outcome.',
    scope: 'Save-desk · Complaint recovery · Persistency',
  },
  {
    no: '05',
    name: 'Video KYC & verification',
    desc: 'Agent-assisted video KYC and document verification that makes onboarding feel effortless for the customer — with a complete audit trail for every session.',
    scope: 'VKYC · Onboarding · Re-KYC',
  },
  {
    no: '06',
    name: 'Collections, back-office & QA',
    desc: 'The discipline Stefto built its name on — respectful, compliant collections across every bucket, plus the data processing, quality audit and reporting layer beneath every front-line channel.',
    scope: 'Collections · Back-office · Quality audit',
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-8 md:py-[110px] bg-transparent text-[#182234] font-['Inter']">
      <div className="max-w-[1140px] mx-auto px-[16px] sm:px-[36px]">
        
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[14px]'}`}>
          <div className="text-[10px] md:text-[12px] font-semibold tracking-[0.14em] uppercase text-[#8b95a5] mb-3 md:mb-5 flex items-center gap-2 md:gap-3">
            <div className="w-[16px] md:w-[26px] h-px bg-[#db222d]" />
            360° customer experience
          </div>
          <h2 className="text-[20px] sm:text-[24px] md:text-[42px] leading-[1.2] md:leading-[1.15] text-[#122a47] max-w-[640px]" style={{ fontFamily: "'Fraunces', serif" }}>
            Every channel your customer chooses. One team behind all of them.
          </h2>
          <p className="mt-3 md:mt-5 text-[13px] md:text-[16.5px] text-[#5b6779] max-w-[560px] leading-[1.5] md:leading-[1.7]">
            Inbound or outbound, spoken or written — every interaction runs under the same quality, compliance and reporting discipline, so your customer never has to repeat themselves.
          </p>
        </div>

        <div className="mt-6 md:mt-16 border-t border-[#e4e9f1]">
          {servicesList.map((svc, i) => (
            <div 
              key={svc.no}
              className={`grid grid-cols-[24px_1fr] sm:grid-cols-[40px_1fr] md:grid-cols-[90px_300px_1fr] gap-x-3 sm:gap-x-4 md:gap-x-9 gap-y-1.5 md:gap-y-4 py-4 md:py-10 border-b border-[#e4e9f1] items-start transition-colors duration-200 hover:bg-[#f7f9fc] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[14px]'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-[11px] md:text-[16px] text-[#8b95a5] pt-0.5 md:pt-1" style={{ fontFamily: "'Fraunces', serif" }}>
                {svc.no}
              </div>
              <div className="col-start-2 text-[15px] sm:text-[18px] md:text-[23px] text-[#122a47] leading-[1.2] md:leading-[1.3]" style={{ fontFamily: "'Fraunces', serif" }}>
                {svc.name}
              </div>
              <div className="col-start-2 md:col-start-3 text-[12px] md:text-[15px] text-[#5b6779] leading-[1.5] md:leading-[1.7] max-w-[560px]">
                {svc.desc}
                <span className="block mt-1.5 md:mt-3 text-[9px] md:text-[12.5px] tracking-[0.06em] uppercase text-[#db212c] font-semibold font-['Inter']">
                  {svc.scope}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
