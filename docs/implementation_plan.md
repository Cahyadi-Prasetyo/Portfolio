# Implementation Plan - Portfolio Website (Next.js + Supabase)

The goal is to build a modern, aesthetic portfolio website using Next.js, React, and Supabase.

## User Review Required

> [!IMPORTANT]
> **Supabase Credentials**: I will need your Supabase URL and Anon Key to connect the application. Please provide them or add them to `.env.local` later.

## Proposed Changes

### 1. Project Initialization
- Create `package.json` (if missing) and install dependencies:
    - `next`, `react`, `react-dom`
    - `@supabase/supabase-js`, `@supabase/ssr` (for Next.js SSR)
    - `tailwindcss`, `postcss`, `autoprefixer`
    - `lucide-react` (for icons)
    - `framer-motion` (for animations)

### 2. Project Structure
- Create `app/` directory.
- Create `app/layout.tsx` (Root layout with fonts, global styles).
- Create `app/page.tsx` (Home page).
- Create `components/` directory for reusable UI components.

### 3. Supabase Integration
- Create `utils/supabase/client.ts` (Client-side Supabase client).
- Create `utils/supabase/server.ts` (Server-side Supabase client for Server Components).
- **Database Schema**:
    - `projects` (id, title, description, content, image, demo_url, github_url, tags, featured)
    - `skills` (id, name, category, level, icon)
    - `messages` (id, name, email, message, created_at)
    - `experience` (id, company, role, start_date, end_date, description, type [internship/work])
    - `education` (id, school, degree, start_date, end_date, description)
    - `organizations` (id, name, role, start_date, end_date, description)

### 4. Core Pages & Components
#### [NEW] `app/page.tsx`
- **Hero Section**:
    - Use **Decrypted Text** (React Bits) for Name.
    - Use **Typewriter** (React Bits) for Roles.
- **About Section**:
    - **Chrome Grid**: Use a grid layout to organize bio, stats, and quick info.
    - **Circular Gallery**: Implement code but **comment out** (waiting for photos).
- **Experience & Education**:
    - **Stack**: Use a stacking card effect to show timeline items (Internship, School, Organizations).
- **Skills Section**:
    - **Logo Loop + Scroll Velocity**: Infinite scrolling logos that accelerate based on scroll speed.
- **Projects Section**:
    - **Design**: Inspired by Afrizal's portfolio.
    - **Filter**: Simple text buttons (All, Web, Mobile) at the top.
    - **Layout**: Grid of large cards (2 per row on desktop).
    - **Card Style**: Large background image, Title, Number sequence (01, 02), and a "View" button.
    - **Interaction**: Hover scales image; clicking navigates to a **Dedicated Project Page** (`/projects/[slug]`) for a full immersive experience.
- **Contact Section**:
    - Form to send messages.
    - **Lanyard**: Display Discord status next to the form (shows real-time availability).

#### [NEW] `app/admin/page.tsx` (Dashboard)
- **Rationale**: Essential for the "easy input" requirement.
- **Protected Route**: Only accessible via Supabase Auth.
- **Management Modules**:
    - **Projects**: CRUD for portfolio projects.
    - **Skills**: CRUD for technical skills.
    - **Experience**: CRUD for work/internship history.
    - **Education**: CRUD for academic history.
    - **Organizations**: CRUD for volunteer/org history.

#### [NEW] `components/Navbar.tsx` & `components/Footer.tsx`
- **Initial State**: Standard Navbar at the top (Logo + Links + Language Switcher).
- **Scroll Behavior**: When scrolled down, the standard navbar disappears and transforms into a **Floating Toggle Button** (Hamburger) fixed at the top-right.
- **Menu Open State**: Clicking the toggle opens a **Full-screen Overlay** with large typography links (Home, Projects, About, Contact) and social icons, matching the reference image.
- **Language Switcher**: Available in both standard navbar and full-screen menu.

### 5. Styling & Aesthetics
- **Theme**: **Soft/Minimalist** (Light Mode).
- **Animations**:
    - **Page Transitions**: Smooth fade-out/fade-in effect (AnimatePresence) for all page navigations, matching the reference site.
    - **Logo Loop**: Continuous slider.
    - **Stack**: Cards stacking on scroll or hover.
    - **Chrome Grid**: Bento-style grid layout.
- **Tailwind**: Use of `bg-white/50`, `backdrop-blur`, and soft gradients.

## Verification Plan

### Automated Tests
- Since this is a new setup, I will rely on building the project to verify configuration.
- Run `npm run build` to ensure no type errors or build issues.

### Manual Verification
- **Supabase Connection**: Verify data fetching works (will need credentials).
- **Responsiveness**: Check layout on mobile/desktop sizes.
- **Interactions**: Verify hover states and animations.
