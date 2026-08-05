import React from 'react';

export default function LearnOurStoryButton({ onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#003366] hover:bg-[#001F3F] text-white font-bold px-6 py-3 rounded-md border-b-4 border-[#FF0000] transition-all duration-300 ${className}`}
    >
      Learn Our Story
    </button>
  );
}
