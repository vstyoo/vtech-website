 document.addEventListener('DOMContentLoaded', function() {
      const modeToggle = document.querySelector('.mode-toggle');
      const html = document.documentElement;
      
      // Cek localStorage untuk mode yang disimpan
      const currentMode = localStorage.getItem('mode') || 'dark';
      if (currentMode === 'light') {
        html.classList.remove('dark');
        modeToggle.classList.add('active');
        document.querySelector('.moon-ball-icon').classList.add('hidden');
        document.querySelector('.sun-ball-icon').classList.remove('hidden');
      } else {
        html.classList.add('dark');
        modeToggle.classList.remove('active');
        document.querySelector('.sun-ball-icon').classList.add('hidden');
        document.querySelector('.moon-ball-icon').classList.remove('hidden');
      }
      
      // Toggle mode ketika diklik
      modeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        modeToggle.classList.toggle('active');
        
        if (modeToggle.classList.contains('active')) {
          html.classList.remove('dark');
          localStorage.setItem('mode', 'light');
          // Switch icons
          document.querySelector('.moon-ball-icon').classList.add('hidden');
          document.querySelector('.sun-ball-icon').classList.remove('hidden');
        } else {
          html.classList.add('dark');
          localStorage.setItem('mode', 'dark');
          // Switch icons
          document.querySelector('.sun-ball-icon').classList.add('hidden');
          document.querySelector('.moon-ball-icon').classList.remove('hidden');
        }
      });
    });