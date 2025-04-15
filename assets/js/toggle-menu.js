const toggle = document.querySelector(".header__toggle");
const slider = document.querySelector(".header__slider");
const closeBtn = document.querySelector(".header__slider-close");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const headerInner = document.querySelector(".header__inner");
const search = document.querySelector(".search");
const overlay = document.querySelector(".overlay");

// Function to close the slider
const closeSlider = () => {
  slider.classList.remove("active");
  toggle.setAttribute("aria-expanded", "false");
  headerInner.insertBefore(nav, search);
  nav.classList.remove("nav--mobile");
  navList.classList.remove("nav__list--mobile");
  overlay.style.display = "none";
};

// Toggle button
toggle.addEventListener("click", () => {
  const isOpen = slider.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isOpen.toString());

  if (isOpen) {
    slider.appendChild(nav);
    nav.classList.add("nav--mobile");
    navList.classList.add("nav__list--mobile");
    overlay.style.display = "block";
  } else {
    closeSlider();
  }
});

// Close button
closeBtn.addEventListener("click", closeSlider);

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (
    slider.classList.contains("active") &&
    !slider.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    closeSlider();
  }
});

// Close when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && slider.classList.contains("active")) {
    closeSlider();
  }
});
