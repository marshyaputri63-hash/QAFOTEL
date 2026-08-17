# Project Requirements Document (PRD)

## 1. Project Overview

We are building a company profile website for Qafotel, a boutique hotel with an on-site Jardin Coffee. The website will showcase the hotel’s rooms, amenities, brand story, and café menu in a cohesive, visually appealing way. It will use Next.js (React framework) with TypeScript for strong typing, server-side rendering (SSR), and static site generation (SSG) where appropriate. The data store will be PostgreSQL accessed via Drizzle ORM, making content structured and easy to manage.

The primary goal is to create a polished online presence that highlights both the hotel experience and its unique Jardin Coffee. Success means: fast page loads (under 2s), responsive design across devices, an intuitive navigation bar, and a lightweight CMS for staff to update room details, café menu items, images, and text without touching code. We will deploy on Vercel and use placeholder assets until final photography and copy are ready.

## 2. In-Scope vs. Out-of-Scope

### In-Scope (Version 1)
- Landing page with hero banner, brief introduction, and call-to-action.
- Global header with logo, navigation bar (Home, About, Rooms, Gallery, Café, Contact).
- Pages/sections:
  • About Us (hotel story, mission, brand colors/style).  
  • Rooms (two room types: Standard & Deluxe, with placeholder descriptions, features, pricing).  
  • Gallery (image grid with placeholder images).  
  • Jardin Coffee (drinks, pastries, workspace categories).  
  • Contact (display email, phone number, basic contact info).
- Responsive design (mobile, tablet, desktop).
- Basic SEO metadata (page titles, descriptions).
- Custom headless CMS interface (built in Next.js) for updating:
  • Room types (names, sizes, occupancy, amenities, descriptions, pricing).  
  • Café menu (items by category, descriptions, prices).  
  • Gallery images and captions.  
  • Static content (About Us text, contact info).
- Database schema in PostgreSQL via Drizzle ORM with migrations.
- Deployment pipeline on Vercel (CI/CD) with environment variables (DB connection).

### Out-of-Scope (Phase 1)
- User registration, authentication, or login for guests.
- Online booking or reservation form.
- Third-party integrations (Google Maps, analytics, social feeds).
- Multi-language support (i18n).
- Advanced search/filter (e.g., search rooms by date).
- Payment gateway or e-commerce.

## 3. User Flow

A first-time visitor lands on the home page. They see a full-width hero banner introducing Qafotel, followed by quick links to core pages in a sticky header navigation bar. Scrolling down, they glimpse highlights of the hotel and café, then click “Rooms” to learn more about available accommodations.

On the Rooms page, placeholder cards for the Standard Room and Deluxe Room display images, size, occupancy, amenities list, and nightly rates. From there, a “Gallery” link opens an image grid. The “Café” page presents menu categories—Drinks, Pastries, Workspace—with items and placeholder prices. Finally, the visitor goes to “Contact” to find the hotel’s email address and phone number. Every page adapts seamlessly to mobile and desktop layouts.

## 4. Core Features

- **Header & Navigation**: Global header with logo and links to Home, About, Rooms, Gallery, Café, Contact.
- **Landing Page**: Hero banner, introductory text, CTA buttons.
- **About Us Section**: Hotel story, brand colors (#55632B background, #FDF8DD font), chunky rounded “Qafotel” font style.
- **Rooms Module**:
  • Two room types (Standard, Deluxe) with attributes: size, occupancy, amenities, description, price.
- **Gallery Module**: Responsive grid layout with placeholders.
- **Jardin Coffee Module**:
  • Categories: Drinks, Pastries, Workspace.
  • Menu items with name, description, price; updatable via CMS.
- **Contact Page**: Display hotel email and phone number.
- **CMS Interface**:
  • CRUD (Create/Read/Update/Delete) for rooms, café menu, gallery images, static text.
  • Authentication for admin area (simple protected route with environment-based secret).
- **Database Layer**:
  • PostgreSQL schema via Drizzle ORM.
  • Migrations folder for tracking changes.
- **Deployment & Hosting**: Vercel, environment variables, automatic builds on push.

## 5. Tech Stack & Tools

- Frontend Framework: Next.js 15 with App Router (React 19).
- Language: TypeScript (strict mode enabled).
- CSS: Tailwind CSS (utility-first styling).
- ORM: Drizzle ORM (PostgreSQL).
- Database: PostgreSQL (Hosted via managed provider or Vercel Postgres).
- Deployment: Vercel (CI/CD, custom domains, SSL by default).
- CMS: Custom Next.js admin pages (protected routes); no external headless CMS.
- Image Optimization: `next/image` with `placeholder="blur"`, `priority` for hero.
- IDE: Visual Studio Code; recommend Tailwind and TypeScript plugins.

## 6. Non-Functional Requirements

- Performance: First Contentful Paint <1.5s; Time to Interactive <2s on 3G slow.
- Security: Use parameterized queries via Drizzle ORM; protect CMS routes via secret token.
- Accessibility: WCAG 2.1 AA standards—semantic HTML, alt text for images, keyboard nav.
- SEO: Unique page titles & meta descriptions; Open Graph tags for social sharing.
- Scalability: Modular code structure (`src/app`, `src/components`, `src/lib`).

## 7. Constraints & Assumptions

- Placeholder content stands in for final photography and copy.
- Admin CMS is internal and protected by a simple route lock—no full auth system.
- Deployment environment supports Next.js 15 & Postgres.
- No requirement for high-availability DB or multi-region failover in v1.

## 8. Known Issues & Potential Pitfalls

- Large images could slow page loads—use `next/image` with proper sizing and lazy loading.
- CMS protection using a single secret environment variable must be rotated if compromised.
- Drizzle ORM migrations must be tested locally before deployment to avoid production schema mismatches.
- Tailwind class bloat can occur—consider using the `@apply` directive or component extraction for repeated patterns.
- Placeholder data model for room types and menu should be flexible enough to add new categories or room variants.
