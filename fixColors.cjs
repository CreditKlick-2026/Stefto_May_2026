const fs = require('fs');
let content = fs.readFileSync('src/pages/Services.jsx', 'utf8');

// Replace Telecommunication custom CSS
content = content.replace(
  /\/\* 4\. RETAIL BESPOKE FLAT AMBER THEME \*\/[\s\S]*?\/\* 5\. E-COMMERCE BESPOKE FLAT VIOLET THEME \*\//,
  `/* 4. RETAIL BESPOKE FLAT AMBER THEME */
          .theme-retail-custom {
            position: relative;
            width: 100%;
            border-radius: 32px;
            border: 1px solid rgba(28, 70, 157, 0.12);
            box-shadow: 0 4px 30px rgba(28, 70, 157, 0.02);
            overflow: hidden;
            z-index: 2;
          }
          .theme-retail-custom:hover {
            border-color: rgba(28, 70, 157, 0.25);
            box-shadow: 0 15px 40px -10px rgba(28, 70, 157, 0.06);
          }
          .theme-retail-custom .card-theme-edge {
            background: linear-gradient(to bottom, #1c469d, #0f2a5e);
          }

          /* 5. E-COMMERCE BESPOKE FLAT VIOLET THEME */`
);

// Split content by sections to safely replace colors
const bankingIdx = content.indexOf(`if (ind.id === 'banking') {`);
const insuranceIdx = content.indexOf(`if (ind.id === 'insurance') {`);
const retailIdx = content.indexOf(`if (ind.id === 'retail') {`);
const afterRetailIdx = content.indexOf(`return (`, retailIdx);

let insuranceContent = content.substring(insuranceIdx, retailIdx);
let retailContent = content.substring(retailIdx, afterRetailIdx);

// Map insurance colors
insuranceContent = insuranceContent.replace(/#2d5128/g, '#1c469d');
insuranceContent = insuranceContent.replace(/#1b3320/g, '#0f2a5e');
insuranceContent = insuranceContent.replace(/#cbdad5/g, '#b3c7e8');
insuranceContent = insuranceContent.replace(/#88a296/g, '#7094c8');
insuranceContent = insuranceContent.replace(/#5b8266/g, '#4169a8');
insuranceContent = insuranceContent.replace(/#e1eae0/g, '#dce5f2');
insuranceContent = insuranceContent.replace(/#b2cbb0/g, '#a8bedb');
insuranceContent = insuranceContent.replace(/#d2ded0/g, '#dce5f2');
insuranceContent = insuranceContent.replace(/#fbf9f2/g, '#f4f7fc');
insuranceContent = insuranceContent.replace(/#3c5e42/g, '#4169a8');

// Map retail colors
retailContent = retailContent.replace(/#b45309/g, '#1c469d');
retailContent = retailContent.replace(/#92400e/g, '#0f2a5e');
retailContent = retailContent.replace(/#e8d5b8/g, '#b3c7e8');
retailContent = retailContent.replace(/#c8a875/g, '#7094c8');
retailContent = retailContent.replace(/#d97706/g, '#4169a8');
retailContent = retailContent.replace(/#f0e4d0/g, '#dce5f2');
retailContent = retailContent.replace(/#d4b896/g, '#a8bedb');
retailContent = retailContent.replace(/#fdf8f0/g, '#f4f7fc');
retailContent = retailContent.replace(/#78350f/g, '#0f2a5e');
retailContent = retailContent.replace(/#a16207/g, '#4169a8');

content = content.substring(0, insuranceIdx) + insuranceContent + retailContent + content.substring(afterRetailIdx);

fs.writeFileSync('src/pages/Services.jsx', content);
