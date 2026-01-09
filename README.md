# Goodseva Landing Page

Modern, performant landing page for the Goodseva Transport Marketplace platform built with Astro and Tailwind CSS.

## Features

- Fast Performance: Static site generation with Astro for optimal load times
- Modern Design: Clean, professional UI with Tailwind CSS
- Responsive: Mobile-first design that works on all devices
- SEO Optimized: Meta tags, semantic HTML, and structured data
- Accessible: WCAG 2.1 AA compliant components
- Lightweight: < 100KB bundle size target

## Tech Stack

- Framework: Astro 5.x
- Styling: Tailwind CSS 4.x
- Icons: Lucide Astro
- Fonts: Inter (body), Poppins (headings)
- Runtime: Bun
- Deployment: Docker + Nginx

## Quick Start

### Prerequisites

- Bun 1.3.5 or higher
- Docker (for containerized deployment)

### Local Development

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run dev
   ```

3. Open http://localhost:4321 in your browser

### Build for Production

```bash
bun run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
bun run preview
```

## Docker Deployment

### Development

```bash
docker build -f Dockerfile.dev -t goodseva-landing:dev .
docker run -p 4321:4321 goodseva-landing:dev
```

### Production

```bash
docker build -t goodseva-landing:latest .
docker run -p 80:80 goodseva-landing:latest
```

## Landing Page Sections

The landing page includes:

1. Hero: Main headline, CTA buttons, trust badges
2. Features: 6 key platform features
3. User Types: 4 user persona cards with benefits
4. How It Works: Dual process flows for shippers and carriers
5. Trust Indicators: Stats, compliance badges, geographic coverage
6. Call to Action: Final conversion section with dual CTAs

## Customization

### Updating Content

Edit `/src/utils/constants.ts` to update platform statistics, feature descriptions, user type information, and URLs.

### Styling

The design system is defined in `/src/styles/global.css` with color palette, typography, and custom animations.

### Integration with Frontend App

Update `FRONTEND_BASE_URL` in `constants.ts`:
- Development: `http://localhost:3000`
- Production: `https://app.goodseva.com`

## Performance Targets

- Lighthouse Score: 95+ (all categories)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Bundle Size: < 100KB

## License

Copyright © 2025 Goodseva. All rights reserved.
