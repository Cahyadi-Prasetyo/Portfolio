# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│                      (Next.js 14)                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Homepage   │  │   Projects   │  │     Blog     │     │
│  │              │  │              │  │              │     │
│  │  - Hero      │  │  - List      │  │  - List      │     │
│  │  - About     │  │  - Filter    │  │  - Detail    │     │
│  │  - Featured  │  │  - Detail    │  │  - Tags      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────┐  ┌─────────────────────────────────┐    │
│  │   Contact    │  │      Admin Panel                │    │
│  │              │  │                                  │    │
│  │  - Form      │  │  - Dashboard                    │    │
│  │  - Submit    │  │  - Projects CRUD                │    │
│  └──────────────┘  │  - Blog CRUD                    │    │
│                     │  - Contacts View                │    │
│                     │  - Auth Protected               │    │
│                     └─────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      API ROUTES                              │
│                   (Next.js API)                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  /api/contact          - Save contact form                  │
│  /api/auth/signin      - Admin login                        │
│  /api/auth/signout     - Admin logout                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   AUTHENTICATION                             │
│                    (NextAuth.js)                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  - Credentials Provider                                      │
│  - Session Management                                        │
│  - Route Protection (Middleware)                             │
│  - Password Hashing (bcrypt)                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                          │
│                      (Prisma ORM)                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │   User   │  │ Project  │  │   Post   │  │  Skill   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
│  ┌──────────┐                                               │
│  │ Contact  │                                               │
│  └──────────┘                                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       DATABASE                               │
│                     (PostgreSQL)                             │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### Public User Flow

```
User → Homepage → View Projects/Blog → Contact Form → Database
```

### Admin Flow

```
Admin → Login → Dashboard → Manage Content → Database → Public View
```

## Authentication Flow

```
┌──────────┐
│  Admin   │
└────┬─────┘
     │
     ▼
┌─────────────────┐
│  Login Page     │
│  /admin/login   │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  Credentials    │
│  Validation     │
└────┬────────────┘
     │
     ├─── Valid ───────┐
     │                 ▼
     │         ┌──────────────┐
     │         │   Session    │
     │         │   Created    │
     │         └──────┬───────┘
     │                │
     │                ▼
     │         ┌──────────────┐
     │         │    Admin     │
     │         │  Dashboard   │
     │         └──────────────┘
     │
     └─── Invalid ────┐
                      ▼
              ┌──────────────┐
              │    Error     │
              │   Message    │
              └──────────────┘
```

## Request Flow

### Public Page Request

```
Browser Request
    ↓
Next.js Server
    ↓
Fetch Data (Prisma)
    ↓
PostgreSQL
    ↓
Return Data
    ↓
Render Page (React)
    ↓
Send HTML to Browser
```

### Admin Action

```
Admin Action (Create/Update/Delete)
    ↓
Check Authentication (Middleware)
    ↓
Validate Data (Zod)
    ↓
Database Operation (Prisma)
    ↓
PostgreSQL
    ↓
Return Success/Error
    ↓
Update UI
```

## Component Hierarchy

```
RootLayout
├── Navbar
├── Page Content
│   ├── Homepage
│   │   ├── Hero Section
│   │   ├── About Section
│   │   └── Featured Projects
│   │
│   ├── Projects Page
│   │   └── Project Cards
│   │
│   ├── Blog Page
│   │   └── Post List
│   │
│   ├── Contact Page
│   │   └── Contact Form
│   │
│   └── Admin Panel
│       ├── Admin Layout
│       ├── Dashboard
│       ├── Projects Management
│       ├── Blog Management
│       └── Contacts View
│
└── Footer
```

## Database Schema Relationships

```
User (Admin)
  - No direct relations
  - Used for authentication only

Project
  - Independent entity
  - Has tags (array)
  - Has featured flag
  - Has published status

Post
  - Independent entity
  - Has unique slug
  - Has tags (array)
  - Has published status

Skill
  - Independent entity
  - Categorized
  - Has level (0-100)

Contact
  - Independent entity
  - Has read/unread status
```

## Security Layers

```
1. Route Protection (Middleware)
   ↓
2. Authentication Check (NextAuth)
   ↓
3. Session Validation
   ↓
4. Password Hashing (bcrypt)
   ↓
5. Input Validation (Zod)
   ↓
6. Database Constraints (Prisma)
```

## Deployment Architecture

```
┌─────────────────────────────────────────┐
│            Vercel (Frontend)            │
│                                         │
│  - Next.js Application                  │
│  - Static Assets                        │
│  - API Routes                           │
│  - Edge Functions                       │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│      Supabase/Neon (Database)           │
│                                         │
│  - PostgreSQL Database                  │
│  - Connection Pooling                   │
│  - Automatic Backups                    │
└─────────────────────────────────────────┘
```

## File Structure Flow

```
Request → middleware.ts (Auth Check)
    ↓
app/[route]/page.tsx (Page Component)
    ↓
lib/prisma.ts (Database Client)
    ↓
prisma/schema.prisma (Database Schema)
    ↓
PostgreSQL Database
```

## Development vs Production

### Development
```
Local Machine
├── Next.js Dev Server (localhost:3000)
├── Local/Cloud PostgreSQL
└── Hot Reload Enabled
```

### Production
```
Vercel
├── Optimized Build
├── CDN for Static Assets
├── Edge Functions
└── Cloud PostgreSQL (Supabase/Neon)
```

## Key Technologies Integration

```
┌──────────────┐
│   Next.js    │ ← Framework
└──────┬───────┘
       │
       ├─→ React (UI)
       ├─→ TypeScript (Type Safety)
       ├─→ Tailwind CSS (Styling)
       ├─→ NextAuth.js (Authentication)
       └─→ Prisma (Database ORM)
              │
              └─→ PostgreSQL (Database)
```

## Performance Optimizations

1. **Server-Side Rendering (SSR)**
   - Pages rendered on server
   - Better SEO
   - Faster initial load

2. **Static Generation**
   - Build-time rendering
   - Cached pages
   - Instant loading

3. **Image Optimization**
   - next/image component
   - Automatic resizing
   - Lazy loading

4. **Database Connection Pooling**
   - Prisma connection management
   - Efficient queries
   - Reduced latency

## Scalability Considerations

- **Horizontal Scaling**: Vercel auto-scales
- **Database**: Connection pooling via Prisma
- **Caching**: Next.js built-in caching
- **CDN**: Static assets served via CDN
- **Edge Functions**: Reduced latency

## Monitoring & Debugging

```
Development:
- Console logs
- React DevTools
- Prisma Studio

Production:
- Vercel Analytics
- Error tracking
- Performance monitoring
- Database logs
```
