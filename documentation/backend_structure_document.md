# Backend Structure Document

This document details the complete backend setup for the Qafotel company profile website, built with Next.js, TypeScript, PostgreSQL (via Drizzle ORM), and hosted on Vercel. It explains the architecture, data management, APIs, infrastructure, security, and maintenance practices in clear, everyday language.

## 1. Backend Architecture

### Overall Design
- **Framework & Runtime**: Uses Next.js (App Router) running on Node.js. Pages and API routes live together in the `src/app` hierarchy.  
- **Design Patterns**:  
  - **Server Components** for static content (About, Rooms, Café, Gallery) to minimize client-side JavaScript.  
  - **Client Components** for interactive parts (admin forms).  
  - **API Routes & Server Actions** for CRUD operations in the headless CMS.  
  - **Modular Folder Structure** (`src/app`, `src/components`, `src/lib`) for clear separation between UI, data access, and utilities.

### Scalability, Maintainability & Performance
- **Scalability**:  
  - The site deploys globally on Vercel’s CDN, automatically scaling with traffic.  
  - Database can scale vertically or migrate to a managed cluster as demand grows.  
- **Maintainability**:  
  - TypeScript ensures early detection of errors.  
  - Drizzle ORM offers typed, clear database models and migrations.  
  - Component-based UI keeps code DRY and easy to update.  
- **Performance**:  
  - Static Site Generation (SSG) for public pages yields near-instant load times.  
  - `next/image` optimizes and lazy-loads images.  
  - Built-in HTTP caching and CDN edge caching reduce server load.

## 2. Database Management

### Technologies & Types
- **Database**: PostgreSQL (relational SQL database).  
- **ORM**: Drizzle ORM for safe, typed SQL queries and migrations.  
- **Hosting**: Vercel Postgres (managed service) or any external PostgreSQL provider.

### Data Structure & Access
- **Structured Tables** store rooms, café items, gallery assets, and static content.  
- **CRUD Operations** exposed via Next.js API routes.  
- **Migrations** managed with `drizzle-kit` to evolve schema safely over time.  
- **Best Practices**:  
  - Parameterized queries prevent SQL injection.  
  - Explicit indexing on foreign keys for efficient joins.  
  - Timestamps tracked with timezone-aware columns.

## 3. Database Schema

### Human-Readable Description
- **rooms**: Holds each room type’s name, size, occupancy, amenities list, description, price, and image URL.  
- **cafe_categories**: Lists menu categories (Drinks, Pastries, Workspace).  
- **cafe_items**: Stores individual café menu items linked to a category, with name, description, price.  
- **gallery_images**: Contains image URLs and optional captions for the gallery.  
- **static_texts**: Key/value pairs for editable site text (e.g., About Us content, contact info).

### PostgreSQL Schema (SQL)
```sql
CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  size VARCHAR(50) NOT NULL,
  occupancy INTEGER NOT NULL,
  amenities TEXT[] NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE cafe_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE cafe_items (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES cafe_categories(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE gallery_images (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE static_texts (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 4. API Design and Endpoints

### Approach
- **RESTful Endpoints** under `/api/*`.  
- **Server Actions** for form submissions in the admin UI.

### Key Endpoints
- **Rooms**:  
  - GET `/api/rooms` – List all room types.  
  - GET `/api/rooms/{id}` – Get room details.  
  - POST `/api/rooms` – Create a room (CMS only).  
  - PUT `/api/rooms/{id}` – Update room.  
  - DELETE `/api/rooms/{id}` – Remove a room.
- **Café Menu**:  
  - GET `/api/cafe` – List categories and items.  
  - POST `/api/cafe/items` – Add/Update/Delete café items (CMS only).
- **Gallery**:  
  - GET `/api/gallery` – Fetch image list.  
  - POST `/api/gallery` – Upload or delete images (CMS only).
- **Static Text**:  
  - GET `/api/static` – Fetch editable text blocks.  
  - PUT `/api/static/{key}` – Update a text block.

## 5. Hosting Solutions

### Environment
- **Provider**: Vercel  
- **Domain & SSL**: Vercel handles custom domains and HTTPS automatically.

### Benefits
- **Reliability**: Global edge network with built-in redundancy.  
- **Scalability**: Automatic scaling without manual server management.  
- **Cost-Effectiveness**: Generous free tier for low-traffic sites, pay-as-you-go for growth.  
- **Developer Experience**: One-click CI/CD pipeline; every push to GitHub triggers a redeploy.

## 6. Infrastructure Components

- **Load Balancing & CDN**: Vercel’s edge network routes requests to the nearest data center and caches static assets globally.  
- **Caching**:  
  - HTTP headers for CDN caching of SSG pages.  
  - In-memory cache for frequent API calls (via `cache()` directive).  
- **Image Delivery**: `next/image` optimizes, resizes, and serves images through the CDN.  
- **Database Connection Pooling**: Managed by `postgres.js` driver or Vercel Postgres internally.

## 7. Security Measures

- **Authentication & Authorization**:  
  - Admin routes under `/admin` protected by a single passphrase stored in `process.env.ADMIN_SECRET`.  
  - CMS API endpoints check the passphrase before allowing write operations.  
- **Data Encryption**:  
  - TLS/SSL for all data in transit (HTTPS).  
  - Managed Postgres encryption at rest by the provider.  
- **Query Safety**:  
  - Parameterized statements via Drizzle ORM to prevent SQL injection.  
- **Environment Variables**:  
  - Secrets (DB URL, admin passphrase) never checked into code.  
  - Rotated by redeploying with new values if compromised.

## 8. Monitoring and Maintenance

- **Performance Monitoring**:  
  - Vercel Analytics for real-time traffic, build times, and latency metrics.  
  - Custom logging for slow API queries (integrate with Sentry or Logflare if needed).  
- **Error Tracking**:  
  - Sentry or a similar tool to capture unhandled exceptions in API routes and server components.  
- **Database Health**:  
  - Regular backups via the managed Postgres provider.  
  - Alerts on high connection counts or slow queries.  
- **Maintenance Strategy**:  
  - Use `drizzle-kit` migrations for schema changes; test locally before production.  
  - Schedule periodic reviews of dependencies and security patches.  
  - Monitor Vercel build warnings and update Node/Next.js versions as needed.

## 9. Conclusion and Overall Backend Summary

The Qafotel backend combines Next.js, TypeScript, Drizzle ORM, and PostgreSQL to deliver a fast, secure, and easy-to-manage site. By leveraging Vercel’s global infrastructure, we ensure excellent reliability and scalability without ongoing server administration. The clear API structure and modular codebase make it simple for your team to maintain and extend features—whether updating rooms, enhancing the café menu, or adding new site sections. Security is baked in through encrypted connections, safe queries, and protected admin routes. Monitoring tools keep us informed about performance and errors, while migrations and backups safeguard data integrity.

With this setup, Qafotel’s online presence will remain polished, responsive, and ready for future enhancements—providing both guests and staff with a seamless experience.