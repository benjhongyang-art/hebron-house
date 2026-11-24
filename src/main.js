import "./style.css";

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (header && toggle && nav) {
  const label = toggle.querySelector(".sr-only");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    header.classList.toggle("nav-open", open);
    document.body.classList.toggle("nav-open", open);
    if (label) label.textContent = open ? "關閉選單" : "開啟選單";
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 800 && header.classList.contains("nav-open")) {
      setOpen(false);
    }
  });
}
