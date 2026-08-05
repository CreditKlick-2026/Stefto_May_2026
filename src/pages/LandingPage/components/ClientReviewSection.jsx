import React from 'react';
import './ClientReviewSection.css';
import { Star } from 'lucide-react';

export default function ClientReviewSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center space-y-3 mb-10">
          <h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1c44b4] leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Client Review
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
            Take a look at the successful journeys we've shared with our valued partners across various industries.
          </p>
        </div>

        {/* Polaroid Gallery from Snippet */}
        <div className="gl-21" aria-label="Polaroid stack gallery">
          <div className="gl-21__pile">
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Happy client in office" loading="lazy" decoding="async" />
              <figcaption>E-Commerce</figcaption>
              <p className="review-text">"Stefto's 24/7 support completely transformed our customer satisfaction rates during peak sales."</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team meeting" loading="lazy" decoding="async" />
              <figcaption>Healthcare</figcaption>
              <p className="review-text">"The most reliable BPO partner we've ever worked with. Truly exceptional compliance and care."</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Successful project" loading="lazy" decoding="async" />
              <figcaption>FinTech</figcaption>
              <p className="review-text">"Our retention skyrocketed after Stefto took over our secure helpdesk operations."</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Startup team" loading="lazy" decoding="async" />
              <figcaption>SaaS Tech</figcaption>
              <p className="review-text">"Scalable, efficient, and professional. They handle ticket volume spikes flawlessly."</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Closing deal handshake" loading="lazy" decoding="async" />
              <figcaption>Telecom</figcaption>
              <p className="review-text">"A seamless extension of our internal team. Their QA processes are absolutely top-notch."</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Business analysis" loading="lazy" decoding="async" />
              <figcaption>Travel & Aviation</figcaption>
              <p className="review-text">"Data-driven insights that completely changed our approach to global customer support."</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Diverse team meeting" loading="lazy" decoding="async" />
              <figcaption>Insurance</figcaption>
              <p className="review-text">"Fast onboarding and incredible attention to detail for claims processing. Highly recommended!"</p>
            </figure>
            <figure className="gl-21__pola" tabIndex="0">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team working closely" loading="lazy" decoding="async" />
              <figcaption>Retail Banking</figcaption>
              <p className="review-text">"Our customers always receive empathetic and efficient care. A fantastic partnership."</p>
            </figure>
          </div>
        </div>

      </div>
    </section>
  );
}
