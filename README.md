# Modern Portfolio Website

A high-performance, aesthetically pleasing portfolio website built with **Next.js 14**, **React**, **Tailwind CSS**, and **Supabase**.

## Features

- **Soft/Minimalist Design**: Clean UI with glassmorphism and smooth animations.
- **Dynamic Content**: Managed via a custom Admin Dashboard.
- **Interactive Components**:
    - **Decrypted Text** & **Typewriter** (Hero)
    - **Logo Loop** & **Scroll Velocity** (Skills)
    - **Stack Cards** (Experience/Education)
    - **Project Grid** & **Detail Pages** (Projects)
    - **Transforming Navbar** (Toggle on scroll)
- **Tech Stack**:
    - Framework: Next.js (App Router)
    - Styling: Tailwind CSS
    - Database: Supabase (PostgreSQL)
    - ORM: Prisma
    - Animations: Framer Motion

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    Create a `.env.local` file with your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    DATABASE_URL=your_postgres_connection_string
    DIRECT_URL=your_direct_connection_string
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Project Structure

- `app/`: Next.js App Router pages.
- `components/`: Reusable UI components.
- `lib/`: Utility functions.
- `prisma/`: Database schema.
- `utils/`: Supabase clients.
- `docs/`: Project documentation and plans.

## Documentation

Check the `docs/` folder for detailed implementation plans and task lists.
