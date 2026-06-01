# LearnHub — Student Learning Dashboard

A futuristic, animated student dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Live Demo
[Deployed on Vercel](#) <!-- add your vercel link after deployment -->

## Tech Stack
- **Next.js 16** (App Router)
- **Supabase** (PostgreSQL database)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **TypeScript** (type safety)
- **Lucide React** (icons)

## Features
- Dark mode Bento Grid layout
-  Staggered entrance animations with spring physics
-  Live course data fetched from Supabase
-  Skeleton loaders via React Suspense
-  Fully responsive (desktop, tablet, mobile bottom nav)
-  Learning streak indicator
-  Animated progress bars per course
-  Activity contribution graph

## Architecture Decisions

### Server vs Client Component Split
- **Server Components** (`CourseGrid.tsx`) — fetches course data directly from Supabase on the server. No API route needed, no data exposed to the client, faster initial load.
- **Client Components** (`Sidebar.tsx`, `CourseCard.tsx`, `ActivityTile.tsx`, `HeroTile.tsx`) — anything using Framer Motion, useState, or browser APIs must be a client component since animations run in the browser.

### Data Fetching
Course data is fetched in `CourseGrid.tsx` using the Supabase JS client inside an async Server Component. React `<Suspense>` wraps it with `CourseSkeleton.tsx` as the fallback, showing pulsing skeleton cards while data loads.

### Animation Strategy
All animations use `transform` and `opacity` exclusively to avoid layout shifts and trigger GPU acceleration. Spring physics (`stiffness: 300, damping: 30`) give a natural, non-linear feel. The sidebar uses Framer Motion's `layoutId` for the sliding active highlight.

### Responsive Design
- **Desktop (>1024px)** — Full 3-column Bento grid with expanded sidebar
- **Tablet (768–1024px)** — 2-column grid, sidebar collapses to icons
- **Mobile (<768px)** — Single column stack, sidebar replaced by bottom navigation bar

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/learning-dashboard
cd learning-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```
Fill in your Supabase credentials in `.env.local`

### 4. Set up Supabase
Create a `courses` table with this schema:
```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamptz default now()
);
```

Enable public read access:
```sql
alter table courses enable row level security;
create policy "Allow public read" on courses for select to anon using (true);
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Actual Website
https://learning-dashboard-roan.vercel.app/dashboard

## Environment Variables
See `.env.example` for required variables.
