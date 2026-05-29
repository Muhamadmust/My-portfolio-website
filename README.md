# Muhammad Mustapha — Portfolio Website

A personal portfolio built with **vanilla HTML, CSS, and JavaScript** — no frameworks or build tools. Showcases projects, skills, and contact links for Muhammad Mustapha, a frontend developer and Software Engineering student at FUTMinna, and aspiring AI engineer.

## Live demo

Open [`index.html`](index.html) in your browser, or deploy the repo to [GitHub Pages](https://pages.github.com/) for a public URL.

## Features

- Light / dark theme toggle (saved in `localStorage`)
- Sticky navbar with smooth scroll, mobile hamburger menu, and active section highlighting
- Hero typewriter effect cycling roles
- Scroll-triggered fade-in animations (`IntersectionObserver`)
- Responsive layout (Flexbox + Grid)
- Downloadable CV from the hero section
- Project cards with hover effects

## Tech stack

- HTML5
- CSS3 (custom properties, animations, responsive design)
- JavaScript (ES6+)
- [Google Fonts](https://fonts.google.com/) — Space Grotesk + DM Sans

## Project structure

```
├── index.html          # Main page
├── style.css           # Styles and theme variables
├── script.js           # Theme, nav, scroll reveal, typewriter
├── assets/
│   ├── profile.jpeg    # Profile photo
│   └── Muhammad_Mustapha_CV.pdf
└── README.md
```

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/Muhamadmust/My-portfolio-website.git
   cd My-portfolio-website
   ```

2. Open `index.html` in your browser.

   For the best experience (especially CV download), use a local server:

   ```bash
   npx serve .
   ```

   Or use the **Live Server** extension in VS Code / Cursor.

## Updating content

| What to change | Where |
|----------------|--------|
| Profile photo | Replace `assets/profile.jpeg` |
| CV / resume | Replace `assets/Muhammad_Mustapha_CV.pdf` |
| Projects, bio, links | Edit `index.html` |
| Colors, layout, fonts | Edit `style.css` |
| Typewriter phrases, interactions | Edit `script.js` |

## Connect

- **GitHub:** [@Muhamadmust](https://github.com/Muhamadmust)
- **X (Twitter):** [@Awwal_ts](https://x.com/Awwal_ts)
- **LinkedIn:** [Muhammad Mustapha](https://linkedin.com/in/muhammad-mustapha-b6aab3332/)

## License

This project is open source for portfolio and learning purposes. Feel free to use it as inspiration — please credit the original if you fork it.

---

Designed & built by **Muhammad Mustapha** © 2025
