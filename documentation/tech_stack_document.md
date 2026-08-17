# Tech Stack Document

This document explains the technology choices for the Qafotel company profile website in clear, everyday language. It shows how each part of the stack works together to deliver a fast, reliable, and easy-to-manage site that features both your boutique hotel and Jardin Coffee.

## Frontend Technologies

The frontend is everything a visitor sees and interacts with in their browser.

- Next.js (React framework)
  * Builds on React to give us server-side rendering (fast initial load) and static site generation (great for SEO).
  * Lets us split pages into components, reuse code, and optimize performance out of the box.
  * App Router structure keeps code organized under `src/app` and `src/components`.
- React
  * A popular library for building user interfaces as independent, reusable pieces (components).
- TypeScript
  * Adds static typing on top of JavaScript so many mistakes get caught while writing code, not in production.
- Tailwind CSS
  * A utility-first styling system. Instead of writing long CSS files, we apply small, single-purpose classes directly in our markup.
  * Ensures consistent colors, spacing, and typography across the site.
- next/image
  * Next.js’s built-in image component automatically resizes, compresses (WebP/AVIF), and lazy-loads images for faster pages.
- Custom Font (“Qafotel” chunky/rounded)
  * Loaded via the browser’s font loader or self-hosted files.
  * Gives the site a friendly, hand-drawn vibe that matches your hotel branding.

These tools together let us build a modern, responsive interface that looks great on mobile, tablet, and desktop.

## Backend Technologies

The backend handles data storage, management, and any server-side logic.

- Node.js (Next.js server runtime)
  * Runs JavaScript/TypeScript on the server to generate pages and APIs.
- Drizzle ORM (PostgreSQL)
  * A lightweight, TypeScript-friendly library that maps database tables to code objects.
  * Ensures queries are safe (no SQL injection) and fully typed (fewer bugs).
- PostgreSQL
  * A robust, open-source relational database that stores room details, café menu items, gallery images, and static content.
- Custom Headless CMS pages
  * Built directly in Next.js under an `/admin` path.
  * Lets hotel staff add/edit/delete rooms, café menu items, gallery images, and page text.
  * Protected by a single secret (stored in an environment variable)—staff log in with a passphrase, no full user database needed.
- API Routes / Server Actions
  * Next.js endpoints that connect frontend forms or CMS actions to the database.

These components work together so you can update content without touching code, while the public site remains fast and stable.

## Infrastructure and Deployment

How and where the site lives, plus how updates get pushed out.

- Vercel (Hosting & CI/CD)
  * Automatically builds and deploys your site whenever you push code to GitHub.
  * Provides free HTTPS (SSL certificates) and custom domain support out of the box.
- Git + GitHub (Version Control)
  * All code and content live in a Git repository. Every change is tracked, so you can roll back if needed.
- Environment Variables
  * Securely store secrets like your database connection string and CMS passphrase.
- Vercel Postgres (Optional)
  * A managed PostgreSQL database hosted by Vercel, keeping your data close to the site for minimal latency.

This setup means zero manual server maintenance: you write code, push to GitHub, and Vercel handles the rest.

## Third-Party Integrations

No external services are required in version 1.

- No Google Analytics, map services, or social media feeds.
- The only “integration” is the CMS login secret stored as an environment variable.

In later phases, you could add analytics or maps without reworking the core stack.

## Security and Performance Considerations

We’ve taken steps to keep the site safe and snappy.

- Parameterized Queries (Drizzle ORM)
  * Prevents SQL injection. All database calls are typed and safe.
- Protected CMS Routes
  * Admin pages under `/admin` require a secret key. If someone guesses it, you rotate the environment variable.
- Static Site Generation (SSG) & Server-Side Rendering (SSR)
  * Public pages are pre-built or server-rendered for fast load times and good SEO.
- Image Optimization (next/image)
  * Delivers correctly sized, compressed images to every visitor.
- Accessibility & SEO
  * Semantic HTML tags, alt text for images, unique page titles, and meta descriptions ensure good search rankings and usability.

## Conclusion and Tech Stack Summary

Your Qafotel website uses a modern, industry-standard stack that matches your goals:

- Frontend: Next.js (React) + TypeScript + Tailwind CSS + next/image for a fast, beautiful user interface.
- Backend: Node.js + Drizzle ORM + PostgreSQL for reliable data management and a built-in CMS to keep content fresh.
- Infrastructure: Vercel + GitHub + environment variables for seamless hosting, continuous deployment, and secure secrets.
- No unnecessary third-party tools—keeping the first release lean and focused.

This combination ensures the site is easy to maintain, simple to update by your staff, and lightning fast for your guests. As Qafotel grows, you can seamlessly add analytics, maps, or booking integrations without changing the core architecture.