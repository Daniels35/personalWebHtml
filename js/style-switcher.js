/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// ========================== theme colors ===========================
const alternateStyles = document.querySelectorAll(".alternate-style");

const savedColor = localStorage.getItem('themeColor');

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
  localStorage.setItem('themeColor', color);
}
const defaultColor = savedColor;
setActiveStyle(defaultColor);

/* ========================== theme light and dark mode =========================== */
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

window.addEventListener("load", () => {
  const currentMode = localStorage.getItem('themeMode');

  if (currentMode === 'dark') {
    toggleMode();
  } else {
    checkSystemColorScheme();
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemColorScheme);
