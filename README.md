# Sagar RC — Personal Portfolio

[![Live](https://img.shields.io/badge/Live-sagarrc.com.np-E8654A?style=flat-square&logo=globe)](https://www.sagarrc.com.np)
[![GitHub](https://img.shields.io/badge/GitHub-sc8134-1E3A5F?style=flat-square&logo=github)](https://github.com/sc8134)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sagar--rc-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/sagar-rc)
[![Rating](https://img.shields.io/badge/Portfolio%20Rating-9.5%2F10-E8654A?style=flat-square)](https://www.sagarrc.com.np)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](./LICENSE)

> **"Namaste | From Kathmandu to the World"**  
> A modern, frontend-only personal portfolio — rated **9.5/10** against other developer portfolios.

---

## 🌐 Live

**[sagarrc.com.np](https://www.sagarrc.com.np)**

📺 **[2-minute video walkthrough](https://youtu.be/wgcTCBLrpjo)** — shows the design, projects, and SARA in action.

---

## ✨ What makes this different

Most developer portfolios look the same: dark background, purple gradient, progress bar skills, three project cards, done.

This one breaks every convention:

- **Warm cream palette** (`#F5F0EB`) — rare in dev portfolios, immediately intentional
- **DM Sans + DM Serif Display italic mixing** — editorial typography from product design
- **SARA** — a fully interactive AI research assistant that knows everything about me. Try it.
- **"Namaste | From *Kathmandu to the World*"** — cultural identity in the design
- **Python SR favicon** — custom 3D logo combining Python's visual language with my initials
- **Scroll progress bar** — navy → coral gradient at the top of the page
- **Smart Gmail routing** — contact form opens Gmail app on mobile, Gmail web on desktop
- **Resume download** — in the navbar and hero CTA
- **2-minute video walkthrough** — embedded on the site, hosted on YouTube
- **CodeRunners Technologies** — real company experience, production-level MERN stack work

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | DM Sans + DM Serif Display (Google Fonts) |
| Hosting | InfinityFree + custom domain (`sagarrc.com.np`) |
| Deployment | Static build via `npm run build` |

> No backend. No database. No API calls. Pure frontend.

---

## ⚡ Performance Optimizations

- `formal.webp` — profile photo converted to WebP (246KB → 116KB, 53% reduction)
- `font-display: swap` — fonts no longer block rendering
- Inline critical CSS — page background renders instantly, no flash
- `loading="lazy"` + `decoding="async"` on images
- `width` / `height` attributes set — prevents CLS layout shift
- `<picture>` element with WebP source + JPG fallback
- Reduced Google Fonts weight variants loaded
- DNS prefetch on font CDN

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          — sticky nav, resume button
│   ├── Hero.tsx            — animated role rotator, CTA buttons
│   ├── About.tsx           — profile photo (WebP), stats, strength cards
│   ├── Skills.tsx          — categorized tech badges
│   ├── Projects.tsx        — project grid
│   ├── ProjectCard.tsx     — gradient mockup banner cards with case-study descriptions
│   ├── Experience.tsx      — color-coded timeline (work = navy, education = coral)
│   ├── Terminal.tsx        — SARA AI easter egg (bubble chat UI)
│   ├── VideoShowcase.tsx   — YouTube walkthrough embed
│   ├── Contact.tsx         — smart Gmail routing (app on mobile, web on desktop)
│   ├── Footer.tsx          — social links
│   ├── ScrollProgress.tsx  — page scroll indicator
│   └── SocialIcons.tsx     — inline SVG social icons
├── context/
│   └── ThemeContext.tsx
├── data/
│   ├── projects.ts         — 6 real GitHub projects with case-study descriptions
│   ├── skills.ts           — tech stack categories
│   └── experience.ts       — accurate work + education timeline
└── types/
    └── index.ts
```

---

## 🤖 SARA — AI Easter Egg

SARA (Sagar's AI Research Assistant) is an interactive AI chat section where visitors learn about me by typing commands.

**Commands:** `sagar` · `skills` · `projects` · `education` · `experience` · `personality` · `goals` · `availability` · `hire` · `philosophy` · `fun-facts` · `surprise`

**Features:**
- Fuzzy matching via Levenshtein distance — handles typos intelligently
- Context-aware suggestions ("contact" → `hire`, "stack" → `skills`)
- 600ms typing indicator with animated dots
- Bubble chat UI with SARA avatar (coral gradient)
- Quick prompt chips for one-click exploration
- Scroll contained within chat box — no page jump

---

## 📦 Sections (in order)

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Name, animated role rotator, CTA buttons, social links, resume download |
| 2 | **About** | Profile photo (WebP), personal bio, stats, strength cards |
| 3 | **Skills** | Frontend · Backend · Database · Tools & DevOps |
| 4 | **Projects** | 6 real projects with case-study descriptions and live links |
| 5 | **Experience** | Work (navy icons) + Education (coral icons) timeline |
| 6 | **SARA** | Interactive AI assistant easter egg |
| 7 | **Video** | 2-minute YouTube walkthrough embedded |
| 8 | **Contact** | Social links + smart Gmail-integrated contact form |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/sc8134/Portfolio.git
cd Portfolio

# Install
npm install

# Dev server
npm run dev

# Production build (outputs to dist/)
npm run build
```

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | sc81341@gmail.com |
| LinkedIn | [linkedin.com/in/sagar-rc](https://www.linkedin.com/in/sagar-rc) |
| GitHub | [github.com/sc8134](https://github.com/sc8134) |
| X / Twitter | [x.com/Sagarch05339168](https://x.com/Sagarch05339168) |
| Portfolio | [sagarrc.com.np](https://www.sagarrc.com.np) |

---

## 📄 License

Copyright © 2026 Sagar RC. All Rights Reserved.

This source code is made public for viewing purposes only.  
Unauthorized copying, cloning, or redistribution is prohibited.  
See [LICENSE](./LICENSE) for details.
