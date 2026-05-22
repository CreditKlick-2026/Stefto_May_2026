import fs from 'fs';
import path from 'path';

const sourceDir = 'c:\\stefto\\web.archive.org\\web\\20250408024312\\https_\\www.stefto.com';
const destDir = 'c:\\stefto\\frontend\\src\\pages';
const appJsxFile = 'c:\\stefto\\frontend\\src\\App.jsx';

// Get directories inside sourceDir
const items = fs.readdirSync(sourceDir);
const folders = items.filter(item => {
  const stat = fs.statSync(path.join(sourceDir, item));
  return stat.isDirectory() && item !== 'Edge' && item !== 'comments' && item !== 'feed' && item !== 'insights';
});

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Ensure camelCase component names
function toPascalCase(str) {
  return str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

const routes = [];
const imports = [];

folders.forEach(folder => {
  const componentName = toPascalCase(folder);
  const routePath = `/${folder}`;
  
  routes.push(`          <Route path="${routePath}" element={<${componentName} />} />`);
  imports.push(`import ${componentName} from './pages/${componentName}';`);
  
  // Create a placeholder component
  const content = `import React from 'react';
import { ChevronRight } from 'lucide-react';

const ${componentName} = () => {
  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem' }}>
      <h1>${componentName.replace(/([A-Z])/g, ' $1').trim()}</h1>
      <p style={{ marginTop: '2rem' }}>
        This page represents the migrated content for the "${folder}" section from the legacy website.
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

export default ${componentName};
`;
  fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), content);
});

// Create Main Layout and modify App.jsx slightly to use Router
const homeComponentContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Briefcase, PhoneCall, ShieldCheck, 
  LineChart, Users, ChevronRight, Database, Globe
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, link }) => (
  <div className="glass-panel">
    <div className="service-icon">
      <Icon size={40} />
    </div>
    <h3 style={{ marginBottom: '1rem', color: 'white', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ fontSize: '0.95rem' }}>{desc}</p>
    <Link to={link || '#'} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
      Learn more <ChevronRight size={16} />
    </Link>
  </div>
);

const Home = () => {
  return (
    <main className="container">
      <section className="hero-section">
        <div style={{ maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            background: 'rgba(79, 70, 229, 0.2)', 
            color: '#a5b4fc',
            fontWeight: '600',
            marginBottom: '1.5rem',
            border: '1px solid rgba(79, 70, 229, 0.3)'
          }}>
            Transformational Business Solutions
          </div>
          <h1>Digital Debt Collections & Operational Excellence</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Stefto Management Services is the leading hub for Digital Business Services, 
            delivering cutting-edge Debt Management and BPO solutions across India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/about-us" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Core Competencies</h2>
          <p>Comprehensive solutions tailored to streamline your operations.</p>
        </div>
        
        <div className="services-grid">
          <ServiceCard 
            icon={ShieldCheck} 
            title="Digital Debt Management" 
            desc="Advanced AI-driven debt collection strategies."
            link="/digital-debt-management"
          />
          <ServiceCard 
            icon={PhoneCall} 
            title="BPO & Call Center Services" 
            desc="Inbound, outbound, and comprehensive back-office support."
            link="/back-office-support"
          />
          <ServiceCard 
            icon={LineChart} 
            title="Retention & Persistency" 
            desc="Data-backed strategies to reduce churn."
            link="/retention-and-persistency"
          />
          <ServiceCard 
            icon={Database} 
            title="Sales & Back-Office Support" 
            desc="Robust operational frameworks designed to unburden your primary teams."
            link="/sales-support"
          />
          <ServiceCard 
            icon={Users} 
            title="Customer Support" 
            desc="24/7 omnichannel customer service ensuring high CSAT scores."
            link="/customer-support"
          />
          <ServiceCard 
            icon={Globe} 
            title="Digital Lead Partner" 
            desc="Leverage technology to drive intelligent lead generation."
            link="/digital-lead-partner"
          />
        </div>
      </section>

      {/* Dynamic Link List based on extracted folders */}
      <section id="all-pages" style={{ padding: '4rem 0' }}>
        <div className="glass-panel" style={{ padding: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Restored Pages</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            ${folders.map(f => `<Link to="/${f}" style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>${f}</Link>`).join('\n            ')}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
`;

fs.writeFileSync(path.join(destDir, 'Home.jsx'), homeComponentContent);

const appContent = `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
${imports.join('\n')}

const SteftoLogo = () => (
  <Link to="/" className="logo">
    <div style={{
      width: '32px', height: '32px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
      borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 'bold', color: 'white'
    }}>S</div>
    Stefto
  </Link>
);

const NavBar = () => (
  <nav className="glass-nav">
    <SteftoLogo />
    <div className="nav-links">
      <Link to="/about-us">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact-us">Contact</Link>
    </div>
    <Link to="/contact-us" className="btn btn-primary">Partner With Us</Link>
  </nav>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--surface-border)', padding: '3rem 2rem', marginTop: '4rem', background: 'rgba(0,0,0,0.3)' }}>
    <div className="container" style={{ padding: '0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
      <div>
        <SteftoLogo />
        <p style={{ marginTop: '1rem', maxWidth: '300px', fontSize: '0.9rem' }}>
          Operational Excellence and Transformational Solutions for the forward-thinking enterprise.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/about-us" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Us</Link>
            <Link to="/careers" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Careers</Link>
            <Link to="/leadership" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Leadership</Link>
            <Link to="/press-release" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Press Release</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Legal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms-of-use" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Use</Link>
            <Link to="/cookie-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
      &copy; {new Date().getFullYear()} Stefto Management Services Pvt Ltd. All rights reserved.
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
${routes.join('\n')}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
`;

fs.writeFileSync(appJsxFile, appContent);
console.log('Successfully generated ' + folders.length + ' pages and updated App.jsx');
