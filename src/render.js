function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isPending(value) {
  return String(value ?? "").includes("待補");
}

function toTel(phone) {
  const raw = String(phone ?? "").trim();
  const compact = raw.replace(/[^\d+]/g, "");
  if (compact.startsWith("+")) return compact;
  if (compact.startsWith("0")) return `+886${compact.slice(1)}`;
  return compact;
}

function safeUrl(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  try {
    const url = new URL(raw);
    if (!["https:", "http:", "mailto:", "tel:"].includes(url.protocol)) return "";
    return esc(raw);
  } catch {
    return "";
  }
}

function prettyUrl(value) {
  try {
    const url = new URL(value);
    return `${url.host}${url.pathname}`.replace(/\/$/, "");
  } catch {
    return String(value ?? "");
  }
}

function splitDate(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso ?? "").trim());
  if (!match) return { year: "", day: String(iso ?? ""), iso: "" };
  return {
    year: match[1],
    day: `${Number(match[2])}月${Number(match[3])}日`,
    iso: `${match[1]}-${match[2]}-${match[3]}`,
  };
}

function iconPin() {
  return `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`;
}

function iconPhone() {
  return `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M22 16.9v2.6a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7 2 2 0 0 1 2-2.2H6.8a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.8 9.3a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`;
}

function iconMail() {
  return `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 6.5h16v11H4z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m4.5 7.5 7.5 6 7.5-6"/></svg>`;
}

function mottoHtml(motto) {
  const text = String(motto ?? "");
  const index = text.indexOf("：");
  if (index < 0 || index > 12) return esc(text);
  const lead = text.slice(0, index + 1);
  const rest = text.slice(index + 1).trim();
  return `${esc(lead)}<br><span class="motto-rest">${esc(rest)}</span>`;
}

function iconExternal() {
  return `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14 6h4v4M18 6l-8 8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M16 13.5V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.5"/></svg>`;
}

function brandMark() {
  return `<svg class="brand-mark" viewBox="0 0 36 36" width="36" height="36" aria-hidden="true"><rect width="36" height="36" rx="10" fill="currentColor"/><path d="M10 28V16.4C10 12.6 12.5 10.2 18 10.2S26 12.6 26 16.4V28" fill="none" stroke="#F3EEE6" stroke-width="1.7" stroke-linecap="round"/><path d="M13 28V17.2c0-2.7 2.1-4.4 5-4.4s5 1.7 5 4.4V28H13Z" fill="#E7C8A4"/></svg>`;
}

function heroArt() {
  return `<svg class="hero-art" viewBox="0 0 440 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <path fill="#3A4A3C" fill-opacity="0.38" d="M0 408c80-50 152-20 216-58 80-46 148-16 224-50v300H0Z"/>
    <path fill="#243028" d="M0 498c96-44 170-10 248-40 88-32 138 10 192-14v156H0Z"/>
    <g fill="none" stroke="#FFF8EE" stroke-linecap="round" stroke-linejoin="round">
      <path stroke-width="2" d="M132 470V248c0-98 176-98 176 0v222"/>
      <path stroke-width="1.35" opacity="0.72" d="M156 470V266c0-74 128-74 128 0v204"/>
      <path stroke-width="2" d="M132 470h176"/>
    </g>
    <circle cx="220" cy="198" r="56" fill="#FFF6E6" fill-opacity="0.18"/>
    <circle cx="220" cy="198" r="22" fill="#FFF6E6" fill-opacity="0.95"/>
  </svg>`;
}

function badge() {
  return `<span class="badge">待補</span>`;
}

function externalAnchor(href, label, className = "inline-link") {
  const safe = safeUrl(href);
  if (!safe) return esc(label);
  return `<a class="${className}" href="${safe}" target="_blank" rel="noopener noreferrer">${esc(label)}<span class="sr-only">（另開新視窗）</span></a>`;
}

function jsonLd(site) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    description: site.meta.description,
    telephone: toTel(site.phone),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "TW",
    },
    sameAs: [site.facebook],
  };
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}

function assetPath(base, path) {
  const value = String(path || "");
  if (!value || value.includes("..") || value.includes(":") || value.startsWith("//")) return "";
  const root = String(base || "/").endsWith("/") ? String(base || "/") : `${base}/`;
  return root + value.replace(/^\//, "");
}

function renderNav(site) {
  const links = [
    ["#about", site.about.heading],
    ["#gatherings", site.gatherings.heading],
    ["#events", site.events.heading],
    ["#gallery", site.gallery.heading],
    ["#videos", site.videos.heading],
    ["#contact", site.contact.heading],
  ];
  return links
    .map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`)
    .join("");
}

function renderGatherings(gatherings) {
  if (!gatherings.items?.length) {
    return `<p class="pending-note">${esc(gatherings.empty)}</p>`;
  }

  const rows = gatherings.items
    .map((item) => {
      const pending = [item.name, item.time, item.note].some(isPending);
      return `<li>
        <div class="schedule-main">
          ${pending ? badge() : ""}
          <h3 class="${isPending(item.name) ? "pending-copy" : ""}">${esc(item.name)}</h3>
          ${item.note ? `<p class="${isPending(item.note) ? "pending-copy" : "quiet"}">${esc(item.note)}</p>` : ""}
        </div>
        <p class="schedule-time ${isPending(item.time) ? "pending-copy" : ""}">${esc(item.time)}</p>
      </li>`;
    })
    .join("");

  return `<ul class="schedule">${rows}</ul>`;
}

function renderEvents(events, base) {
  if (!events.items?.length) {
    return `<p class="empty-note">${esc(events.empty)}</p>`;
  }

  const cards = events.items
    .map((item) => {
      const date = splitDate(item.date);
      const kind = events.dateKindLabels?.[item.dateKind] || events.dateKindLabels?.posted || "";
      const time = date.iso ? `<time datetime="${esc(date.iso)}">${esc(date.day)}</time>` : esc(date.day);
      const link = item.href
        ? `<p class="event-link">${externalAnchor(item.href, item.hrefLabel || "查看連結")}</p>`
        : "";
      const image = assetPath(base, item.image);
      const photo = image
        ? `<img class="event-photo" src="${esc(image)}" alt="${esc(item.imageAlt || item.title)}" width="${Number(item.imageWidth) || 1024}" height="${Number(item.imageHeight) || 1536}" loading="lazy" decoding="async">`
        : "";
      return `<li class="event-card">
        <div class="event-date">
          <p class="event-day">${time}</p>
          ${date.year ? `<p class="event-year">${esc(date.year)}</p>` : ""}
          ${kind ? `<p class="event-kind">${esc(kind)}</p>` : ""}
        </div>
        <div class="event-body">
          ${photo}
          ${item.tag ? `<p class="event-tag">${esc(item.tag)}</p>` : ""}
          <h3>${esc(item.title)}</h3>
          ${item.summary ? `<p class="event-summary">${esc(item.summary)}</p>` : ""}
          ${item.note ? `<p class="${isPending(item.note) ? "pending-copy" : "quiet"}">${isPending(item.note) ? badge() : ""}<span>${esc(item.note)}</span></p>` : ""}
          ${link}
        </div>
      </li>`;
    })
    .join("");

  return `<ul class="event-list">${cards}</ul>`;
}

function renderGallery(gallery, base) {
  if (!gallery?.groups?.length) {
    return gallery?.empty ? `<p class="empty-note">${esc(gallery.empty)}</p>` : "";
  }

  const groups = gallery.groups
    .map((group) => {
      const photos = (group.photos || [])
        .map((photo) => {
          const full = assetPath(base, photo.src);
          const thumb = assetPath(base, photo.thumb || photo.src);
          if (!full || !thumb) return "";
          const external = safeUrl(photo.href);
          const width = Number(photo.width) || 720;
          const height = Number(photo.height) || 540;
          return `<li>
            <a class="gallery-thumb" href="${esc(full)}"${external ? ` data-external="${external}"` : ""}>
              <img src="${esc(thumb)}" alt="${esc(photo.alt)}" width="${width}" height="${height}" loading="lazy" decoding="async">
            </a>
          </li>`;
        })
        .join("");
      if (!photos) return "";
      return `<section class="gallery-group">
        <header class="gallery-heading">
          <h3>${esc(group.title)}</h3>
          ${group.dateLabel ? `<p class="quiet">${esc(group.dateLabel)}</p>` : ""}
        </header>
        <ul class="gallery-grid">${photos}</ul>
      </section>`;
    })
    .join("");

  return `<div class="gallery" data-close="${esc(gallery.closeLabel)}" data-prev="${esc(gallery.prevLabel)}" data-next="${esc(gallery.nextLabel)}" data-facebook="${esc(gallery.facebookLabel)}" data-count="${esc(gallery.countLabel)}">${groups}</div>
    <dialog class="lightbox" id="lightbox" aria-label="${esc(gallery.heading)}">
      <div class="lightbox-bar">
        <p class="lightbox-count"></p>
        <button type="button" class="lightbox-close">${esc(gallery.closeLabel)}</button>
      </div>
      <div class="lightbox-stage">
        <button type="button" class="lightbox-prev" aria-label="${esc(gallery.prevLabel)}"></button>
        <img class="lightbox-image" alt="">
        <button type="button" class="lightbox-next" aria-label="${esc(gallery.nextLabel)}"></button>
      </div>
      <p class="lightbox-caption"></p>
      <p class="lightbox-external"></p>
    </dialog>`;
}

function renderVideos(videos) {
  const items = videos?.items || [];
  if (!items.length) return "";
  const embedded = items.filter((item) => item.embed);
  const linked = items.filter((item) => !item.embed);
  const cards = embedded
    .map((item) => {
      const href = safeUrl(item.href);
      const src = href
        ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(href)}&show_text=false&width=560`
        : "";
      return `<li class="video-card">
        <h3>${esc(item.title)}</h3>
        ${src ? `<div class="video-frame"><iframe src="${esc(src)}" title="${esc(item.title)}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe></div>` : ""}
        ${href ? `<p class="video-fallback">${externalAnchor(href, videos.watchLabel || "在 Facebook 觀看")}</p>` : ""}
      </li>`;
    })
    .join("");
  const more = linked
    .map((item) => {
      const href = safeUrl(item.href);
      return `<li>${href ? externalAnchor(href, item.title) : esc(item.title)}</li>`;
    })
    .join("");
  return `${cards ? `<ul class="video-list">${cards}</ul>` : ""}
    ${more ? `<h3 class="video-more-title">${esc(videos.moreHeading || "")}</h3><ul class="video-links">${more}</ul>` : ""}`;
}

function contactRow({ href, external, icon, label, value }) {
  const inner = `<span class="icon-bubble">${icon}</span><span><span class="contact-label">${esc(label)}</span><span class="contact-value">${esc(value)}</span></span>`;
  if (external) {
    const safe = safeUrl(href);
    if (!safe) return `<li><div class="contact-row">${inner}</div></li>`;
    return `<li><a class="contact-row" href="${safe}" target="_blank" rel="noopener noreferrer">${inner}<span class="sr-only">（另開新視窗）</span></a></li>`;
  }
  return `<li><a class="contact-row" href="${esc(href)}">${inner}</a></li>`;
}

export function renderPage(site, base = "/hebron-house/") {
  const year = new Date().getFullYear();
  const tel = toTel(site.phone);
  const mapQuery = encodeURIComponent(site.address);
  const mapEmbed = `https://maps.google.com/maps?q=${mapQuery}&hl=zh-TW&z=17&output=embed`;
  const mapOpen = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const about = (site.about.paragraphs || [])
    .map((paragraph, index) => {
      if (isPending(paragraph)) return `<p class="pending-note">${esc(paragraph)}</p>`;
      return `<p class="${index === 0 ? "about-lead" : ""}">${esc(paragraph)}</p>`;
    })
    .join("");

  const contactItems = [
    contactRow({
      href: mapOpen,
      external: true,
      icon: iconPin(),
      label: site.contact.labels.address,
      value: site.address,
    }),
    contactRow({
      href: `tel:${tel}`,
      external: false,
      icon: iconPhone(),
      label: site.contact.labels.phone,
      value: site.phone,
    }),
    contactRow({
      href: `mailto:${site.email}`,
      external: false,
      icon: iconMail(),
      label: site.contact.labels.email,
      value: site.email,
    }),
    contactRow({
      href: site.facebook,
      external: true,
      icon: iconExternal(),
      label: site.facebookLabel,
      value: prettyUrl(site.facebook),
    }),
  ].join("");

  return `<header class="site-header" id="top">
    <div class="wrap header-inner">
      <a class="brand" href="#top">${brandMark()}<span>${esc(site.name)}</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">開啟選單</span>
        <span class="nav-toggle-bars" aria-hidden="true"></span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="主要選單">
        <ul>${renderNav(site)}</ul>
      </nav>
    </div>
  </header>
  <main id="main">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="wrap hero">
        <div class="hero-copy">
          <p class="eyebrow">${esc(site.eyebrow)}</p>
          <h1 id="hero-title">${esc(site.name)}</h1>
          <p class="motto">${mottoHtml(site.motto)}</p>
          <p class="motto-ref">${esc(site.mottoCitation)}</p>
          <div class="actions">
            <a class="button button-primary" href="#gatherings">${esc(site.heroPrimaryLabel)}</a>
            <a class="button button-secondary" href="#contact">${esc(site.heroSecondaryLabel)}</a>
          </div>
          <a class="hero-address" href="#contact">${iconPin()}<span>${esc(site.address)}</span></a>
        </div>
        <div class="hero-panel">${heroArt()}</div>
      </div>
    </section>

    <section id="about" class="section band" aria-labelledby="about-title">
      <div class="wrap">
        <header class="section-heading">
          <h2 id="about-title">${esc(site.about.heading)}</h2>
        </header>
        <div class="about-copy">${about}</div>
      </div>
    </section>

    <section id="gatherings" class="section" aria-labelledby="gatherings-title">
      <div class="wrap">
        <header class="section-heading">
          <h2 id="gatherings-title">${esc(site.gatherings.heading)}</h2>
          <p class="lede">${esc(site.gatherings.intro)}</p>
        </header>
        ${renderGatherings(site.gatherings)}
      </div>
    </section>

    <section id="events" class="section band" aria-labelledby="events-title">
      <div class="wrap">
        <header class="section-heading">
          <h2 id="events-title">${esc(site.events.heading)}</h2>
          <p class="lede">${esc(site.events.intro)}</p>
        </header>
        ${renderEvents(site.events, base)}
      </div>
    </section>

    <section id="gallery" class="section" aria-labelledby="gallery-title">
      <div class="wrap">
        <header class="section-heading">
          <h2 id="gallery-title">${esc(site.gallery.heading)}</h2>
          <p class="lede">${esc(site.gallery.intro)}</p>
        </header>
        ${renderGallery(site.gallery, base)}
      </div>
    </section>

    <section id="videos" class="section band" aria-labelledby="videos-title">
      <div class="wrap">
        <header class="section-heading">
          <h2 id="videos-title">${esc(site.videos.heading)}</h2>
          <p class="lede">${esc(site.videos.intro)}</p>
        </header>
        ${renderVideos(site.videos)}
      </div>
    </section>

    <section id="contact" class="section" aria-labelledby="contact-title">
      <div class="wrap">
        <header class="section-heading">
          <h2 id="contact-title">${esc(site.contact.heading)}</h2>
          <p class="lede">${esc(site.contact.intro)}</p>
        </header>
        <div class="contact-grid">
          <div class="contact-card">
            <ul class="contact-list">${contactItems}</ul>
          </div>
          <div class="map-card">
            <div class="map-bar">
              <h3>${esc(site.contact.mapLabel)}</h3>
              ${externalAnchor(mapOpen, site.contact.mapLinkLabel)}
            </div>
            <iframe
              class="map-frame"
              title="${esc(site.name)}地圖：${esc(site.address)}"
              src="${esc(mapEmbed)}"
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
            <p class="map-fallback">${esc(site.contact.mapFallback)}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div>
        <p class="footer-name">${esc(site.name)}</p>
        <p class="footer-motto">${mottoHtml(site.motto)}</p>
        <p class="footer-ref">${esc(site.mottoCitation)}</p>
      </div>
      <div class="footer-contact">
        <p><a href="${esc(mapOpen)}" target="_blank" rel="noopener noreferrer">${esc(site.address)}<span class="sr-only">（另開新視窗）</span></a></p>
        <p><a href="tel:${esc(tel)}">${esc(site.phone)}</a></p>
        <p><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
        <p>${externalAnchor(site.facebook, site.facebookLabel, "footer-link")}</p>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <p>© ${year} ${esc(site.name)}</p>
      <p>${esc(site.footer.note)}</p>
      <p><a class="footer-link" href="#top">${esc(site.footer.backToTop)}</a></p>
    </div>
  </footer>
  <script type="application/ld+json">${jsonLd(site)}</script>`;
}

export function applyDocument(html, site, base = "/hebron-house/") {
  return html
    .replaceAll("__TITLE__", esc(site.meta.title))
    .replaceAll("__DESCRIPTION__", esc(site.meta.description))
    .replace("<!--app-->", renderPage(site, base));
}
