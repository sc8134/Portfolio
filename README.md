# Sagar RC — Personal Portfolio

[![Live](https://img.shields.io/badge/Live-sagarrc.com.np-E8654A?style=flat-square&logo=globe)](https://www.sagarrc.com.np)
[![GitHub](https://img.shields.io/badge/GitHub-sc8134-1E3A5F?style=flat-square&logo=github)](https://github.com/sc8134)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sagar--rc-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/sagar-rc)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](./LICENSE)

> **"Namaste | From Kathmandu to the World"**  
> A modern, frontend-only personal portfolio — rated 9.4/10 against other developer portfolios.

---

## 🌐 Live

**[sagarrc.com.np](https://www.sagarrc.com.np)**

---

## ✨ What makes this different

Most developer portfolios follow the same template: dark background, purple gradient, progress bar skills, three project cards, done.

This one doesn't.

- **Warm cream palette** (`#F5F0EB`) — rare in dev portfolios, immediately feels more intentional
- **DM Sans + DM Serif Display italic mixing** — editorial typography borrowed from product design
- **SARA** — an AI research assistant built inside the portfolio that knows everything about me. Ask it anything.
- **"Namaste | From *Kathmandu to the World*"** — cultural identity baked into the design
- **Python SR favicon** — custom logo combining Python's visual language with my initials
- **Scroll progress bar** — navy → coral gradient at the top of the page
- **Contact form → Gmail** — no backend needed, opens Gmail pre-filled with your message
- **Resume download** — in the navbar and hero CTA

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
| Hosting | InfinityFree + custom domain |
| Deployment | Static build via `npm run build` |

> No backend. No database. No API calls. Pure frontend.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          — sticky nav, resume button
│   ├── Hero.tsx            — animated role rotator, CTA buttons
│   ├── About.tsx           — profile photo, stats, strength cards
│   ├── Skills.tsx          — categorized tech badges
│   ├── Projects.tsx        — project grid
│   ├── ProjectCard.tsx     — gradient mockup banner cards
│   ├── Experience.tsx      — color-coded timeline
│   ├── Terminal.tsx        — SARA AI easter egg
│   ├── Contact.tsx         — Gmail-linked contact form
│   ├── Footer.tsx          — social links
│   ├── ScrollProgress.tsx  — page scroll indicator
│   └── SocialIcons.tsx     — inline SVG social icons
├── context/
│   └── ThemeContext.tsx
├── data/
│   ├── projects.ts         — real GitHub projects
│   ├── skills.ts           — tech stack categories
│   └── experience.ts       — work + education timeline
└── types/
    └── index.ts
```

---

## 🤖 SARA — AI Easter Egg

SARA (Sagar's AI Research Assistant) is an interactive terminal section where visitors can learn about me by typing commands.

**Commands:** `sagar` · `skills` · `projects` · `education` · `experience` · `personality` · `goals` · `availability` · `hire` · `philosophy` · `fun-facts` · `surprise`

**Features:**
- Fuzzy matching (handles typos via Levenshtein distance)
- Context-aware suggestions ("contact" → shows `hire` response)
- Typing indicator with animated dots
- Bubble chat UI with SARA avatar
- Quick prompt chips

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

# Production build
npm run build
```

---

## 📦 Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated role rotator, CTA buttons, social links |
| **About** | Profile photo, bio, stats, strength cards |
| **Skills** | Frontend · Backend · Database · Tools & DevOps |
| **Projects** | 6 real projects from GitHub with live links |
| **Experience** | Work timeline (navy) + Education (coral) |
| **SARA** | Interactive AI terminal easter egg |
| **Contact** | Social links + Gmail-integrated contact form |

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
