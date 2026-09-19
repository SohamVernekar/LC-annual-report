const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

// 1. Replace the page transition and floating nav CSS
const replacement = `/* ================================================================
   CONTINUOUS SCROLL & GLOBAL HEADER
   ================================================================ */
html { scroll-behavior: smooth; }

.annual-app {
  min-height: 100vh;
  position: relative;
  background: var(--lc-black);
}

.annual-report {
  display: flex;
  flex-direction: column;
}

.report-section {
  position: relative;
  width: 100%;
  min-height: 100vh; /* Allow natural expansion */
}

/* Hide internal page navs in continuous mode */
.report-section .topbar,
.report-section .site-header,
.report-section .header,
.report-section .annual-header {
  display: none !important;
}

/* Global Header */
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 9999;
  transition: background 0.3s ease, border-bottom 0.3s ease;
}

.global-header.is-scrolled {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.global-header__brand {
  font-family: var(--font-primary, 'Roboto', sans-serif);
  font-weight: 700;
  font-size: 20px;
  color: var(--lc-white, #fff);
  letter-spacing: 0.05em;
}

.global-header__right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.menu-toggle {
  background: transparent;
  border: none;
  color: var(--lc-white, #fff);
  font-family: var(--font-primary, 'Roboto', sans-serif);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.05em;
  padding: 8px 12px;
}

.menu-toggle:hover {
  color: var(--lc-yellow, #FFCE00);
}

.scroll-progress-subtle {
  width: 150px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.scroll-progress-subtle__fill {
  height: 100%;
  background: var(--lc-yellow, #FFCE00);
  transition: width 0.1s ease;
}

/* Global Menu Overlay */
.global-menu {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 9998;
  border-bottom: 1px solid var(--lc-yellow, #FFCE00);
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.global-menu__inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
}

.global-menu__item {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-primary, 'Roboto', sans-serif);
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  padding: 12px 24px;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
}

.global-menu__item:hover,
.global-menu__item.is-active {
  color: var(--lc-yellow, #FFCE00);
  font-weight: 500;
  transform: translateX(10px);
}`;

css = css.replace(/\/\* ---- Page transition[\s\S]*?\/\* ================================================================/g, replacement + '\n\n/* ================================================================');

// 2. Remove fixed height / aspect-ratio constraints
css = css.replace(/height: min\(100vw \* 1\.413, 100vh\);/g, 'min-height: 100vh;');
css = css.replace(/aspect-ratio: [\d\s\/]+;/g, '');
css = css.replace(/min-height: 0;/g, 'min-height: 100vh;');

fs.writeFileSync('src/App.css', css);
console.log('App.css updated successfully.');
