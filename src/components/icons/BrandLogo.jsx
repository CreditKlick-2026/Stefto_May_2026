import React from 'react';

/**
 * BrandLogo - A high-fidelity SVG implementation of the kinetic lightning logo.
 * Designed for Swiss Brutalist aesthetics with sharp lines and high contrast.
 */
export const BrandLogo = ({ className = "w-12 h-12", color = "#25D366" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 
          Kinetic Speed Lines 
          Pattern: 3 Black (Tapered), 4 Green (Long/Extended), 3 Black (Tapered)
      */}
      <g className="kinetic-lines">
        {/* Top Black Lines */}
        <rect x="45" y="17" width="16" height="3" fill="black" />
        <rect x="40" y="24" width="22" height="3" fill="black" />
        <rect x="33" y="31" width="23" height="3" fill="black" />
        
        {/* Middle Green Lines (Extended) */}
        <rect x="29.5" y="38" width="25" height="3.5" fill={color} />
        <rect x="23" y="46" width="27" height="3.5" fill={color} />
        <rect x="15" y="54" width="49" height="3.8" fill={color} />
        <rect x="6.5" y="62" width="54" height="4" fill={color} />
        
        {/* Bottom Black Lines */}
        <rect x="29" y="70" width="28" height="3" fill="black" />
        <rect x="38" y="77" width="18" height="3" fill="black" />
        <rect x="44.5" y="84" width="9" height="3" fill="black" />
      </g>

      {/* 
          Main Bolt Geometry
          Black: Slanted 'L' Bolt
          Green: Sharp Power Spike
      */}
      <path 
        d="M71 14L55 50H82L55 95V55H45L61 14H71Z" 
        fill="transparent" 
        /* Reference path tracing */
      />
      
      {/* Actual Rendering Paths */}
      <path 
        d="M71 14L55 50H92L73 14H71Z" 
        fill="black" 
      />
      <path 
        d="M55 50H92L70 50L56 95L75 50H55Z" 
        fill="transparent" 
      />
       <path 
        d="M55 50H84L75 40H58L55 50Z" 
        fill="black" 
        /* Horizontal connector part */
      />
      
      {/* Redefined Bolt for Accuracy */}
      <path 
        d="M69 14H86L72 39H92L55 50L69 14Z" 
        fill="black" 
      />
      <path 
        d="M55 50L85 50L56 90L55 50Z" 
        fill={color} 
      />
    </svg>
  );
};
