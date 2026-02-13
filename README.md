# Portfolio — Minimalistic Premium

A minimalistic premium portfolio built with Astro 5, showcasing best practices and premium design patterns.

## ✨ Features

- **Brutally Minimal Design** — Clean, spacious, massive typography
- **Custom Cursor Trail** — Gold gradient cursor with smooth easing
- **Scroll-Driven Animations** — Modern CSS `animation-timeline: view()`
- **View Transitions** — Smooth page navigation
- **Content Collections** — Type-safe project management
- **Premium Typography** — Cormorant Garamond + Plus Jakarta Sans
- **Grain Overlay** — Subtle texture for atmosphere
- **Fully Responsive** — Mobile-first design (375px - 2560px)
- **Accessible** — WCAG AA compliant, reduced motion support
- **Performance Optimized** — 95+ Lighthouse score ready

## 🛠 Tech Stack

- **Astro 5** — Static site generator
- **TypeScript** — Type safety
- **Content Collections** — Schema validation
- **View Transitions** — Native Astro transitions
- **CSS Modules** — Scoped styling

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
\`\`\`

Open http://localhost:4321

## 📁 Project Structure

\`\`\`
src/
├── content/
│   ├── config.ts              # Collection schemas
│   └── projects/              # Project markdown files
├── layouts/
│   └── Layout.astro           # Global layout + View Transitions
├── components/
│   ├── Hero.astro             # Scroll animations
│   ├── Work.astro             # Content collection usage
│   ├── CursorTrail.astro      # Custom cursor
│   └── ...
└── pages/
    └── projects/[...slug].astro  # Dynamic routes
\`\`\`

## ✏️ Adding Projects

Create \`src/content/projects/your-project.md\`:

\`\`\`markdown
---
title: 'Project Name'
year: '2024'
role: 'Your Role'
description: 'Description'
order: 4
featured: true
---

# Details here...
\`\`\`

## 🎯 Best Practices

✅ Content Collections (type-safe)
✅ View Transitions (smooth nav)
✅ Image optimization (WebP via getImage)
✅ Accessibility (WCAG AA)
✅ Performance (95+ Lighthouse)

---

Template by [jagoFps](https://jagofps.dev)
