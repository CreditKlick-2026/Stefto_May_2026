const fs = require('fs');
let content = fs.readFileSync('src/pages/Services.jsx', 'utf8');
const lines = content.split('\n');
const start = 703;
const end = 885;

for (let i = start; i < end; i++) {
  lines[i] = lines[i]
    .replace(/bg-\[#fdf8f0\]/g, 'bg-[#f4f7fc]')
    .replace(/fill="#b45309"/g, 'fill="#1c469d"')
    .replace(/stroke="#b45309"/g, 'stroke="#1c469d"')
    .replace(/fill="#e8d5b8"/g, 'fill="#b3c7e8"')
    .replace(/fill="#c8a875"/g, 'fill="#7094c8"')
    .replace(/fill="#d97706"/g, 'fill="#4169a8"')
    .replace(/fill="#92400e"/g, 'fill="#0f2a5e"')
    .replace(/border-\[#b45309\]/g, 'border-[#1c469d]')
    .replace(/bg-\[#f0e4d0\]/g, 'bg-[#dce5f2]')
    .replace(/border-\[#d4b896\]/g, 'border-[#a8bedb]')
    .replace(/text-\[#92400e\]/g, 'text-[#1c469d]')
    .replace(/text-\[#78350f\]/g, 'text-[#0f2a5e]')
    .replace(/fill="#f0e4d0"/g, 'fill="#dce5f2"');
}

fs.writeFileSync('src/pages/Services.jsx', lines.join('\n'));
