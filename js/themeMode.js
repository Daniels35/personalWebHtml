document.addEventListener("DOMContentLoaded", () => {
  const dayNight = document.querySelector(".day-night");
  const root = document.documentElement;

  function toggleMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      dayNight.querySelector("i").classList.add("fa-sun");
      dayNight.querySelector("i").classList.remove("fa-moon");
      root.style.setProperty('--brightness', '75%');
    } else {
      dayNight.querySelector("i").classList.remove("fa-sun");
      dayNight.querySelector("i").classList.add("fa-moon");
      root.style.setProperty('--brightness', '100%');
    }

    const currentMode = document.body.classList.contains("dark") ? 'dark' : 'light';
    localStorage.setItem('themeMode', currentMode);
  }
  
  function checkSystemColorScheme() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode && !currentMode) {
      document.body.classList.add("dark");
      dayNight.querySelector("i").classList.add("fa-sun");
      root.style.setProperty('--brightness', '75%');
    } else {
      document.body.classList.remove("dark");
      dayNight.querySelector("i").classList.add("fa-moon");
      root.style.setProperty('--brightness', '100%');
    }
  }

  dayNight.addEventListener("click", toggleMode);

  const currentMode = localStorage.getItem('themeMode');

  if (currentMode === 'dark') {
    document.body.classList.add('dark');
    dayNight.querySelector("i").classList.add("fa-moon");
    root.style.setProperty('--brightness', '75%');
  } else {
    checkSystemColorScheme();
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemColorScheme);
});
