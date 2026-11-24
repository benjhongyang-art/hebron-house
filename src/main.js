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

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector("#lightbox");

if (gallery && lightbox) {
  const closeButton = lightbox.querySelector(".lightbox-close");
  const previousButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  const image = lightbox.querySelector(".lightbox-image");
  const caption = lightbox.querySelector(".lightbox-caption");
  const count = lightbox.querySelector(".lightbox-count");
  const external = lightbox.querySelector(".lightbox-external");
  let currentGroup = null;
  let index = 0;
  let opener = null;
  let touchStartX = 0;
  let touchStartY = 0;

  previousButton.textContent = "‹";
  nextButton.textContent = "›";

  const photosInGroup = () => [...currentGroup.querySelectorAll(".gallery-thumb")];

  const show = (nextIndex) => {
    const photos = photosInGroup();
    if (!photos.length) return;
    index = (nextIndex + photos.length) % photos.length;
    const link = photos[index];
    const thumb = link.querySelector("img");
    image.src = link.href;
    image.alt = thumb?.alt || "";
    caption.textContent = thumb?.alt || "";
    const template = gallery.dataset.count || "第 {current} 張，共 {total} 張";
    count.textContent = template
      .replace("{current}", String(index + 1))
      .replace("{total}", String(photos.length));
    external.replaceChildren();
    if (link.dataset.external) {
      const anchor = document.createElement("a");
      anchor.href = link.dataset.external;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = gallery.dataset.facebook || "在 Facebook 查看這張照片";
      external.append(anchor);
    }
    const single = photos.length < 2;
    previousButton.hidden = single;
    nextButton.hidden = single;
  };

  gallery.addEventListener("click", (event) => {
    const link = event.target.closest(".gallery-thumb");
    if (!link || !gallery.contains(link)) return;
    event.preventDefault();
    currentGroup = link.closest(".gallery-group");
    opener = link;
    show(photosInGroup().indexOf(link));
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
      closeButton.focus();
    } else {
      window.location.href = link.href;
    }
  });

  previousButton.addEventListener("click", () => show(index - 1));
  nextButton.addEventListener("click", () => show(index + 1));
  closeButton.addEventListener("click", () => lightbox.close());

  lightbox.addEventListener("close", () => {
    image.removeAttribute("src");
    opener?.focus();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    }
  });

  lightbox.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true },
  );

  lightbox.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY)) return;
      show(deltaX < 0 ? index + 1 : index - 1);
    },
    { passive: true },
  );
}
