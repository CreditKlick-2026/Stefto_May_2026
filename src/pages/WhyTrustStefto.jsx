import React, { useEffect } from 'react';
import LandingLayout from '../components/layout/LandingLayout';
import WhyTrustSection from './LandingPage/components/WhyTrustSection';

export default function WhyTrustStefto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingLayout>
      <main className="w-full bg-white min-h-screen pt-16">
        <WhyTrustSection />
      </main>
    </LandingLayout>
  );
}
