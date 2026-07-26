# Vasant Valley School — Website Redesign

A modern, responsive redesign of the Vasant Valley School website, built with React + Vite.

## Intern Details

| Field | Value |
|---|---|
| Full Name | Risha Hermain |
| Intern ID | NN/A |
| Email Address | _rishahermain39@gmail.com |
| GitHub Username | [rishahermain7-eng](https://github.com/rishahermain7-eng) |
| Selected Website | Vasant Valley School |
| Live Demo Link | _[ADD YOUR VERCEL DEPLOYMENT LINK]_ |

## Technologies Used

- **React 19** — component-based UI
- **Vite** — build tool and dev server
- **Framer Motion** — scroll/entrance animations
- **React Icons** — icon set (navbar, contact, footer, etc.)
- **React Router DOM** — routing
- **Swiper** — carousels
- **Tailwind CSS v4** — utility styling (via `@tailwindcss/vite`)
- **yet-another-react-lightbox** — gallery lightbox
- Plain CSS modules per component for layout/theming

## Project Structure

```
src/
├── assets/              # images used directly in components
├── components/           # one folder per section, each with its own .jsx + .css
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── WhyChooseUs/
│   ├── Academics/
│   ├── StudentLife/
│   ├── Gallery/
│   ├── Principal/
│   ├── Testimonials/
│   ├── News/
│   ├── AdmissionsCTA/
│   ├── Contact/
│   └── Footer/
├── pages/
│   └── Home.jsx          # composes all sections in order
├── App.jsx
├── main.jsx
└── index.css              # global reset, fonts, container width
```

## Key Improvements Made

This pass focused on making the site fully responsive on mobile **without changing the existing design** — same fonts, same colors, same Framer Motion animations, same overall layout on desktop.

- **Fixed a broken mobile menu**: the navbar's hamburger icon rendered but had no click handler, so it did nothing on phones. It now opens a working slide-in menu that closes on link tap.
- **Added missing breakpoints**: the WhyChooseUs, Academics, Testimonials, News, and AdmissionsCTA sections had no `@media` rules at all and could overflow or look cramped on small screens. Added `768px` and `480px` breakpoints to each.
- **Fixed a real overflow bug** in the Gallery grid: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` could overflow horizontally on phones narrower than ~340px. Forced single-column layout below 480px.
- **Tuned every section** (Hero, About, Student Life, Principal, Contact, Footer) with an additional small-phone (`≤480px`) breakpoint: smaller heading sizes, tighter section padding, full-width stacked CTAs where needed.
- **Global safety net** in `index.css`: `overflow-x: hidden` on `html`/`body` and a slightly narrower `.container` width on very small screens, so no section can force horizontal scrolling.
- Verified with `npm run build` after each change.

## Running Locally

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the production build
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` and Vercel will build and deploy automatically (Framework preset: Vite).
