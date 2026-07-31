const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let content = fs.readFileSync(cssPath, 'utf8');

// Find where the file got corrupted (around .btn-lg)
const btnLgRegex = /\.btn-lg\s*\{\s*--btn-px:\s*32px;\s*--btn-py:\s*15px;\s*--btn-font-size:\s*15px;\s*--btn-radius:\s*14px;\s*\}/;

const match = content.match(btnLgRegex);
if (match) {
  const index = match.index + match[0].length;
  
  // Cut everything after .btn-lg
  content = content.substring(0, index) + '\n\n';

  // Append the correct tail
  const tail = `.btn-xl {
  --btn-px: 40px;
  --btn-py: 18px;
  --btn-font-size: 16px;
  --btn-radius: 16px;
  letter-spacing: 0.02em;
}

/* ── Shape modifiers ───────────────────────── */
.btn-pill {
  --btn-radius: 9999px;
}

.btn-square {
  --btn-radius: 0;
}

/* ── Pulse animation (CTA highlight) ───────── */
.btn-pulse {
  animation: btn-pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

/* ── Loading state ─────────────────────────── */
.btn-loading {
  pointer-events: none;
  opacity: 0.75;
}

.btn-loading::after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0;
}

/* ── Disabled ──────────────────────────────── */
.btn:disabled,
.btn[disabled] {
  opacity: 0.45;
  pointer-events: none;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* ── Icon-only button ──────────────────────── */
.btn-icon {
  --btn-px: 12px;
  --btn-py: 12px;
  aspect-ratio: 1;
}

/* ── Isometric Tower (Core Services) ──────────────────────── */
.scd-22,
.scd-22 *,
.scd-22 *::before,
.scd-22 *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.scd-22 {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scd-22__scene {
  perspective: 1200px;
}

.scd-22__tower {
  position: relative;
  width: 250px;
  height: 300px;
  transform-style: preserve-3d;
  transform: rotateX(58deg) rotateZ(-42deg);
  transition: transform .5s;
}

.scd-22__floor {
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 220px;
  border-radius: 10px;
  background: linear-gradient(160deg, oklch(calc(0.78 - var(--i) * .05) 0.09 240), oklch(calc(0.64 - var(--i) * .05) 0.11 250));
  transform: translateZ(calc(var(--i) * 34px));
  box-shadow: 0 20px 30px -16px rgba(0,0,0,.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: transform .5s cubic-bezier(.3,.9,.3,1);
  text-align: center;
}

.scd-22__floor::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 34px;
  background: oklch(calc(0.5 - var(--i) * .04) 0.1 250);
  transform: translateZ(-34px);
  border-radius: 0 0 10px 10px;
}

.scd-22__floor b {
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: .02em;
  text-shadow: 0 1px 2px rgba(0,0,0,.35), 0 0 12px rgba(0,0,0,.15);
  margin-top: 10px;
}

.scd-22__floor p {
  color: rgba(255,255,255,0.9);
  font-size: 12px;
  margin-top: 6px;
  line-height: 1.3;
}

.scd-22__tower:hover .scd-22__floor,
.scd-22__tower:focus-visible .scd-22__floor {
  transform: translateZ(calc(var(--i) * 60px + 10px));
}

.scd-22__tower:focus-visible {
  outline: 3px solid oklch(0.7 0.12 240);
  outline-offset: 26px;
  border-radius: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .scd-22__floor,
  .scd-22__tower {
    transition: none;
  }
}
`;

  fs.writeFileSync(cssPath, content + tail, 'utf8');
  console.log('Fixed index.css tail!');
} else {
  console.log('Could not find anchor to fix.');
}
