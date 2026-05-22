import React from 'react';
import { ChevronRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem' }}>
      <h1>Services</h1>
      <p style={{ marginTop: '2rem' }}>
        This page represents the migrated content for the "services" section from the legacy website.
      </p>
      <div className="glass-panel" style={{ marginTop: '2rem' }}>
        <h2>Placeholder Content</h2>
        <p>Integrate legacy content from original HTML files here.</p>
        <a href="/" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center' }}>
          Back to Home <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default Services;
