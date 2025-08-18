// src/utils/scrollHelpers.js
export const getNavHeight = () => {
  const nav = document.querySelector("nav");
  return nav ? nav.offsetHeight : 80;
};

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = section.offsetTop - getNavHeight()-20;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
