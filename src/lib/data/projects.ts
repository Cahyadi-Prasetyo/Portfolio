export interface Project {
    slug: string;
    title: string;
    description: {
        id: string;
        en: string;
    };
    shortDesc: {
        id: string;
        en: string;
    };
    tech: string[];
    category: 'web' | 'mobile';
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    imageUrl: string;
}

export const projects: Project[] = [
    {
        slug: 'umkm-video-platform',
        title: 'UMKM Video Platform',
        description: {
            id: 'Platform promosi digital inovatif untuk UMKM yang mengadopsi antarmuka video pendek vertikal (seperti TikTok). Memungkinkan penjual membuat konten video menarik untuk produk mereka, meningkatkan engagement pembeli, dan integrasi langsung ke marketplace.',
            en: 'An innovative digital promotion platform for MSMEs adopting a vertical short-video interface (TikTok-style). Enables sellers to create engaging video content for their products, boosting buyer engagement, and direct integration with marketplaces.'
        },
        shortDesc: {
            id: 'Platform promosi digital berbasis video pendek (TikTok-style) untuk UMKM.',
            en: 'Digital promotion platform based on short videos (TikTok-style) for MSMEs.'
        },
        tech: ['SvelteKit', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
        category: 'web',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        imageUrl: 'https://placehold.co/1200x800/0d9488/ffffff?text=TokTi+UMKM+Platform'
    },
    {
        slug: 'e-commerce-platform',
        title: 'E-Commerce Platform',
        description: {
            id: 'Platform e-commerce modern yang dibangun dengan SvelteKit dan PostgreSQL. Dilengkapi fitur keranjang belanja, sistem pembayaran terintegrasi, manajemen produk, dan dashboard admin. Menggunakan autentikasi berbasis JWT dan responsive design untuk pengalaman berbelanja yang optimal di semua perangkat.',
            en: 'A modern e-commerce platform built with SvelteKit and PostgreSQL. Features shopping cart, integrated payment system, product management, and admin dashboard. Uses JWT-based authentication and responsive design for an optimal shopping experience across all devices.'
        },
        shortDesc: {
            id: 'Platform e-commerce modern dengan fitur keranjang, pembayaran, dan manajemen produk.',
            en: 'A modern e-commerce platform with cart, payment, and product management features.'
        },
        tech: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
        category: 'web',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        imageUrl: 'https://placehold.co/800x600/1e293b/ffffff?text=E-Commerce'
    },
    {
        slug: 'dashboard-analytics',
        title: 'Dashboard Analytics',
        description: {
            id: 'Dashboard analitik interaktif untuk visualisasi data bisnis secara real-time. Menampilkan grafik dinamis, tabel data yang bisa difilter, dan laporan yang bisa diunduh. Dibangun dengan React dan D3.js untuk memberikan insight bisnis yang mendalam.',
            en: 'An interactive analytics dashboard for real-time business data visualization. Features dynamic charts, filterable data tables, and downloadable reports. Built with React and D3.js to provide deep business insights.'
        },
        shortDesc: {
            id: 'Dashboard interaktif untuk visualisasi data bisnis secara real-time.',
            en: 'An interactive dashboard for real-time business data visualization.'
        },
        tech: ['React', 'Node.js', 'D3.js', 'Express', 'MongoDB'],
        category: 'web',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        imageUrl: 'https://placehold.co/800x600/1e1e2e/ffffff?text=Analytics+Dashboard'
    },
    {
        slug: 'task-management',
        title: 'Task Management App',
        description: {
            id: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time sync dan drag & drop. Tim bisa membuat board, menambahkan task, dan melacak progress secara bersamaan. Menggunakan Firebase untuk real-time database dan PWA untuk akses offline.',
            en: 'A collaborative task management app with real-time sync and drag & drop features. Teams can create boards, add tasks, and track progress simultaneously. Uses Firebase for real-time database and PWA for offline access.'
        },
        shortDesc: {
            id: 'Aplikasi manajemen tugas kolaboratif dengan real-time sync dan drag & drop.',
            en: 'A collaborative task management app with real-time sync and drag & drop.'
        },
        tech: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
        category: 'web',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        imageUrl: 'https://placehold.co/800x600/3b82f6/ffffff?text=Task+Manager'
    },
    {
        slug: 'fitness-tracker',
        title: 'Fitness Tracker',
        description: {
            id: 'Aplikasi mobile untuk melacak aktivitas fitness dan kesehatan harian. Dilengkapi tracking workout, kalori, dan progress chart. UI yang intuitif dengan animasi smooth.',
            en: 'A mobile app for tracking daily fitness activities and health. Features workout tracking, calories, and progress charts. Intuitive UI with smooth animations.'
        },
        shortDesc: {
            id: 'Aplikasi mobile untuk tracking aktivitas fitness dan kesehatan.',
            en: 'A mobile app for tracking fitness activities and health.'
        },
        tech: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
        category: 'mobile',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        imageUrl: 'https://placehold.co/800x600/10b981/ffffff?text=Fitness+App'
    },
    {
        slug: 'recipe-app',
        title: 'Recipe Finder',
        description: {
            id: 'Aplikasi pencarian resep makanan dengan fitur filter berdasarkan bahan, waktu masak, dan kategori. Pengguna bisa menyimpan resep favorit dan membuat rencana makan mingguan.',
            en: 'A recipe finder app with filter features by ingredients, cooking time, and category. Users can save favorite recipes and create weekly meal plans.'
        },
        shortDesc: {
            id: 'Aplikasi pencarian resep dengan filter bahan dan waktu masak.',
            en: 'A recipe finder app with ingredient and cooking time filters.'
        },
        tech: ['Flutter', 'Dart', 'Supabase', 'REST API'],
        category: 'mobile',
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        imageUrl: 'https://placehold.co/800x600/f59e0b/ffffff?text=Recipe+Finder'
    },
    {
        slug: 'portfolio-website',
        title: 'Portfolio Website',
        description: {
            id: 'Website portfolio personal yang sedang kamu lihat sekarang! Dibangun dengan SvelteKit dan TypeScript, menampilkan desain clean & minimalist, multi-page routing, dan dukungan bilingual.',
            en: "The personal portfolio website you're looking at right now! Built with SvelteKit and TypeScript, featuring a clean & minimalist design, multi-page routing, and bilingual support."
        },
        shortDesc: {
            id: 'Website portfolio personal dengan desain minimalist dan bilingual.',
            en: 'A personal portfolio website with minimalist design and bilingual support.'
        },
        tech: ['SvelteKit', 'TypeScript', 'CSS'],
        category: 'web',
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        imageUrl: 'https://placehold.co/800x600/2563eb/ffffff?text=Portfolio'
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: 'all' | 'web' | 'mobile'): Project[] {
    if (category === 'all') return projects;
    return projects.filter((p) => p.category === category);
}
