// Copyright Protection & Anti-Cloning Detection
(function() {
  'use strict';
  
  // Detect if domain is not official Vijenex domain
  const officialDomains = ['vijenex.github.io', 'localhost', '127.0.0.1'];
  const currentDomain = window.location.hostname;
  const isLocal = currentDomain === 'localhost' || currentDomain === '127.0.0.1' || currentDomain === '';
  
  if (!isLocal && !officialDomains.some(domain => currentDomain.includes(domain))) {
    console.warn('⚠️ WARNING: This appears to be an unauthorized copy of Vijenex™ website.');
    console.warn('Official website: https://vijenex.github.io');
    console.warn('Vijenex™ is a registered trademark (App No. 7368905, India)');
    
    // Add watermark for cloned sites
    const watermark = document.createElement('div');
    watermark.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#dc2626;color:#fff;padding:12px;text-align:center;z-index:99999;font-weight:700;';
    watermark.innerHTML = '⚠️ UNAUTHORIZED COPY - Official site: <a href="https://vijenex.github.io" style="color:#fff;text-decoration:underline;">vijenex.github.io</a>';
    document.body.prepend(watermark);
  }
  
  // Disable right-click on images (basic protection)
  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
  
  // Add copyright notice to console
  console.log('%c© 2025 Vijenex™', 'font-size:20px;font-weight:bold;color:#3b82f6;');
  console.log('%cVijenex™ is a registered trademark (App No. 7368905, India)', 'font-size:12px;color:#666;');
  console.log('%cUnauthorized copying or rebranding is prohibited.', 'font-size:12px;color:#dc2626;');
})();

// Theme toggle with localStorage persistence
const btn = document.getElementById('themeToggle');

function setTheme(theme) {
  try {
    if (theme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      btn.textContent = '🌙';
      localStorage.setItem('vj_theme', 'light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      btn.textContent = '☀️';
      localStorage.setItem('vj_theme', 'dark');
    }
  } catch (e) {
    console.warn('localStorage not available:', e);
  }
}

btn?.addEventListener('click', () => {
  try {
    const current = localStorage.getItem('vj_theme') || 'dark';
    setTheme(current === 'light' ? 'dark' : 'light');
  } catch (e) {
    const isDark = document.body.classList.contains('theme-dark');
    setTheme(isDark ? 'light' : 'dark');
  }
});

// Initialize theme
try {
  const saved = localStorage.getItem('vj_theme');
  if (saved) {
    setTheme(saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
} catch (e) {
  setTheme('dark');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Animated Circuit Background
(function() {
  const canvas = document.getElementById('circuitCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let lines = [];
  let scrollOffset = 0;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initLines();
  }
  
  function initLines() {
    lines = [];
    const lineCount = Math.floor(canvas.width / 150);
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: (i * canvas.width / lineCount) + Math.random() * 100,
        y: Math.random() * canvas.height,
        length: 100 + Math.random() * 200,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.1 + Math.random() * 0.2
      });
    }
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const isDark = document.body.classList.contains('theme-dark');
    const color = isDark ? '59, 130, 246' : '107, 114, 128';
    
    lines.forEach(line => {
      line.y += line.speed + scrollOffset * 0.5;
      
      if (line.y > canvas.height + line.length) {
        line.y = -line.length;
        line.x = Math.random() * canvas.width;
      }
      
      ctx.strokeStyle = `rgba(${color}, ${line.opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(line.x, line.y + line.length);
      ctx.stroke();
      
      // Add nodes
      const nodes = 3;
      for (let i = 0; i < nodes; i++) {
        const nodeY = line.y + (line.length / nodes) * i;
        ctx.fillStyle = `rgba(${color}, ${line.opacity * 1.5})`;
        ctx.fillRect(line.x - 2, nodeY - 2, 4, 4);
      }
    });
    
    scrollOffset *= 0.95;
    requestAnimationFrame(draw);
  }
  
  window.addEventListener('scroll', () => {
    scrollOffset = window.scrollY * 0.01;
  });
  
  window.addEventListener('resize', resize);
  resize();
  draw();
})();
