// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'dark-mode-toggle';
    toggleBtn.innerHTML = '🌓';
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
    document.body.appendChild(toggleBtn);
  
    // Check system preference
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize dark mode based on preference
    function initDarkMode() {
      const savedMode = localStorage.getItem('darkMode');
      const systemPrefersDark = colorSchemeQuery.matches;
      
      // If no preference saved, use system preference
      if (savedMode === null) {
        if (systemPrefersDark) {
          enableDarkMode();
        }
      } 
      // If preference is saved, use that
      else if (savedMode === 'enabled') {
        enableDarkMode();
      }
    }
  
    function enableDarkMode() {
      document.body.classList.add('dark-mode');
      toggleBtn.innerHTML = '☀️';
      localStorage.setItem('darkMode', 'enabled');
    }
  
    function disableDarkMode() {
      document.body.classList.remove('dark-mode');
      toggleBtn.innerHTML = '🌓';
      localStorage.setItem('darkMode', 'disabled');
    }
  
    // Toggle functionality
    toggleBtn.addEventListener('click', function() {
      if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  
    // Show/hide button on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        toggleBtn.classList.remove('visible');
      } else if (currentScroll > lastScroll) {
        toggleBtn.classList.add('visible');
      } else {
        toggleBtn.classList.add('visible');
      }
      lastScroll = currentScroll;
    });
  
    // Show briefly on page load
    setTimeout(() => {
      toggleBtn.classList.add('visible');
      setTimeout(() => toggleBtn.classList.remove('visible'), 2000);
    }, 500);
  
    // Watch for system preference changes
    colorSchemeQuery.addEventListener('change', (e) => {
      if (localStorage.getItem('darkMode') === null) {
        if (e.matches) {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      }
    });
  
    // Initialize
    initDarkMode();
  });