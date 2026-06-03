# 🌟 Personal Portfolio — Sujal Kumar

> A modern, cinematic personal portfolio built with React, Tailwind CSS, and Framer Motion.

---

## 🚀 Live Demo

[your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)

---

## 📸 Preview

> Add a screenshot here after deployment

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| React 18 + Vite | Frontend framework |
| Tailwind CSS | Utility styling |
| Framer Motion | Page transitions |
| GSAP | MagicBento animations |
| Lucide React | Icons |
| React Bits | MagicBento component |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Fixed transparent navbar
│   │   └── PageTransition.jsx  # Scroll snap section wrapper
│   └── sections/
│       ├── Hero.jsx            # Video landing with START button
│       ├── Intro.jsx           # Name, skills, floating cards
│       ├── About.jsx           # Bio, TiltedCard, social links
│       ├── Skills.jsx          # MagicBento skill grid
│       ├── Projects.jsx        # Horizontal slide projects
│       └── Contact.jsx         # Contact + footer
├── styles/
│   ├── globals.css             # Base styles, fonts, scrollbar
│   └── Animation/
│       ├── MagicBento.jsx      # React Bits bento component
│       ├── TiltedCard.jsx      # React Bits tilted card
│       └── PageTransition.jsx  # Zoom-in scroll transition
├── public/
│   ├── Protfolio.mp4           # AI hero video
│   ├── Photo.png               # Profile photo
│   ├── profile.png             # About section photo
│   ├── project-1.png           # Project screenshots
│   ├── project-2.png
│   └── resume.pdf              # Downloadable resume
├── App.jsx
└── main.jsx
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com)

---

## 📄 Pages / Sections

| Section | Description |
|---|---|
| **Hero** | AI video with START button, plays on click |
| **Intro** | Full name, role, skill pills, floating info cards |
| **About** | Bio, tilted photo card, social links, stats |
| **Skills** | MagicBento grid — 5 skill categories |
| **Projects** | Horizontal slide with screenshot bg |
| **Contact** | Dark layout, LET'S TALK → LinkedIn |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary accent | `#F59E0B` (Warm Gold) |
| Dark bg | `#0a0a0a` |
| Card bg | `#120F17` |
| Hero/Intro bg | Cream → Gold gradient |
| Font — display | Bebas Neue |
| Font — body | DM Sans |
| Font — mono | JetBrains Mono |

---

## 🔧 Customisation

All personal data is at the top of each file as constants:

```js
// Hero.jsx
const YOUR_NAME  = 'Sujal Kumar'
const YOUR_ROLES = 'Application Developer · AI Builder'

// Intro.jsx
const YOUR_NAME_LINE1 = 'Sujal'
const YOUR_NAME_LINE2 = 'Kumar'

// Contact.jsx
const LINKEDIN_USER = 'sujal22'
const EMAIL         = 'kumarsujal751@gmail.com'
```

---

## 📝 License

MIT © 2026 Sujal Kumar

---

> Designed & Developed with Precision.