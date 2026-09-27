(function () {
  const current = document.body.dataset.page || 'home';
  const links = [
    ['home', 'index.html', 'Srijato Bhattacharyya'],
    ['research', 'research.html', 'Research'],
    ['talks', 'talks.html', 'Talks'],
    ['teaching', 'teaching.html', 'Teaching'],
    ['cv', 'cv.html', 'CV'],
    ['personal', 'personal.html', 'Personal']
  ];

  const header = `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html">Srijato Bhattacharyya</a>
        <button class="menu-button" aria-label="Toggle navigation" aria-expanded="false">Menu</button>
        <nav class="nav" aria-label="Primary navigation">
          ${links.slice(1).map(([id, href, label]) => `<a href="${href}" class="${current === id ? 'active' : ''}">${label}</a>`).join('')}
        </nav>
      </div>
    </header>`;

  const sidebar = `
    <aside class="sidebar">
      <div class="avatar"><img src="assets/img/profile-placeholder.svg" alt="Profile placeholder for Srijato Bhattacharyya"></div>
      <div>
        <h2>Srijato Bhattacharyya</h2>
        <div class="role">Ph.D. Student in Statistics<br>Texas A&amp;M University</div>
      </div>
      <ul class="meta">
        <li>📍 College Station, Texas</li>
        <li>✉️ <a href="mailto:srijato@tamu.edu">srijato@tamu.edu</a></li>
        <li>🏛️ <a href="https://artsci.tamu.edu/statistics/contact/profiles/srijato-bhattacharyya.html" target="_blank" rel="noopener">TAMU profile</a></li>
        <li>🔬 <a href="https://www.researchgate.net/profile/Srijato-Bhattacharyya" target="_blank" rel="noopener">ResearchGate</a></li>
        <li>💼 <a href="https://www.linkedin.com/in/srijato-bhattacharyya-44195b201" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
      <div class="sidebar-note"><strong>Replace the initials avatar</strong> with your preferred headshot by saving it as <code>assets/img/profile.jpg</code> and changing the image path in <code>assets/js/components.js</code>.</div>
    </aside>`;

  const footer = `
    <footer class="footer"><div class="footer-inner">© 2026 Srijato Bhattacharyya. Built as a lightweight academic site for GitHub Pages.</div></footer>`;

  const headerMount = document.getElementById('site-header');
  const sidebarMount = document.getElementById('site-sidebar');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.outerHTML = header;
  if (sidebarMount) sidebarMount.outerHTML = sidebar;
  if (footerMount) footerMount.outerHTML = footer;
})();
