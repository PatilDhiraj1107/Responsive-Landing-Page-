const topbar = document.getElementById("topbar");
const menuIcon = document.getElementById("menuIcon");
const navPanel = document.getElementById("navPanel");
const themeSwitch = document.getElementById("themeSwitch");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    topbar.classList.add("active-scroll");
  } else {
    topbar.classList.remove("active-scroll");
  }
});

menuIcon.addEventListener("click", () => {
  navPanel.classList.toggle("open");
});

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeSwitch.textContent = "🌙";
  } else {
    themeSwitch.textContent = "☀";
  }
});

const animatedItems = document.querySelectorAll(".service-card, .stat-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";
    }
  });
});

animatedItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "0.6s ease";
  observer.observe(item);
});