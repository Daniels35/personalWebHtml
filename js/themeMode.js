document.addEventListener("DOMContentLoaded", () => {
    const dayNight = document.querySelector(".day-night");
  
    function toggleMode() {
      document.body.classList.toggle("dark");
  
      if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
      } else {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
      }
  
      const currentMode = document.body.classList.contains("dark") ? 'dark' : 'light';
      localStorage.setItem('themeMode', currentMode);
    }
  
    function checkSystemColorScheme() {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
      if (prefersDarkMode) {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
      } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
      }
    }
  
    dayNight.addEventListener("click", toggleMode);
  
    const currentMode = localStorage.getItem('themeMode');
  
    if (currentMode === 'dark') {
      toggleMode();
    } else {
      checkSystemColorScheme();
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemColorScheme);
  });
  