(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  const getPreferredTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.textContent = theme === "dark" ? "☾" : "◑";
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };

  setTheme(getPreferredTheme());
  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobilePanel = document.getElementById("mobilePanel");

  const setMenuOpen = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobilePanel.classList.toggle("is-open", open);
  };

  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") !== "true";
    setMenuOpen(open);
  });

  document.querySelectorAll("[data-close-menu]").forEach((a) => {
    a.addEventListener("click", () => setMenuOpen(false));
  });

  // Close menu on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  // Navbar hide/show on scroll
  const nav = document.getElementById("siteNav");
  let lastY = window.scrollY;
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    const nearTop = y < 40;
    if (nearTop) nav.classList.remove("is-hidden");
    else nav.classList.toggle("is-hidden", goingDown && y > 220);
    lastY = y;
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Scroll-triggered reveals
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => io.observe(el));

  // Active section highlighting
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = ["home", "about", "skills", "projects", "contact"].map((id) => document.getElementById(id)).filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((a) => {
      const isActive = a.getAttribute("data-nav") === id;
      a.setAttribute("aria-current", isActive ? "page" : "false");
    });
  };

  const activeIo = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (visible && visible.target && visible.target.id) setActive(visible.target.id);
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.01, 0.2, 0.35, 0.5] }
  );
  sections.forEach((s) => activeIo.observe(s));
  setActive("home");

  // Typewriter effect
  const typeTarget = document.getElementById("typeTarget");
  const phrases = ["Frontend Developer", "SE Student @ FUTMinna", "React Enthusiast"];
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced && typeTarget) {
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const typeLoop = () => {
      const full = phrases[phraseIdx];
      const speed = deleting ? 28 : 44;

      if (!deleting) {
        charIdx++;
        typeTarget.textContent = full.slice(0, charIdx);
        if (charIdx >= full.length) {
          deleting = true;
          setTimeout(typeLoop, 900);
          return;
        }
      } else {
        charIdx--;
        typeTarget.textContent = full.slice(0, Math.max(0, charIdx));
        if (charIdx <= 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      setTimeout(typeLoop, speed);
    };
    setTimeout(typeLoop, 400);
  } else if (typeTarget) {
    typeTarget.textContent = phrases[0];
  }
})();

