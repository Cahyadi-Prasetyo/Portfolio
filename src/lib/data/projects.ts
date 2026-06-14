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
    category: 'web' | 'mobile' | 'ai' | 'game';
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    imageUrl: string;
    images?: string[];
    status: 'concept' | 'in-progress' | 'shipped';
    role: {
        id: string;
        en: string;
    };
    duration: {
        id: string;
        en: string;
    };
}

export const projects: Project[] = [
    {
        slug: 'smart-task',
        title: 'Smart Task',
        description: {
            id: 'SMART-TASK adalah aplikasi mobile berbasis Android yang dirancang untuk membantu mahasiswa mengelola tugas akademik secara lebih efektif. Aplikasi ini dikembangkan sebagai bagian dari Tugas Akhir dengan fokus yang berat pada implementasi kinerja tinggi (High-Performance Engineering). Berbeda dengan aplikasi to-do list konvensional, SMART-TASK mengimplementasikan kecerdasan adaptif yang mampu menganalisis pola perilaku pengguna untuk memberikan dukungan pengelolaan tugas yang lebih progresif, didukung oleh infrastruktur backend Golang yang sangat cepat secara native.',
            en: 'SMART-TASK is an Android-based mobile application designed to help students manage academic tasks more effectively. Developed as a final year project with a heavy focus on High-Performance Engineering. Unlike conventional to-do list apps, SMART-TASK implements adaptive intelligence that analyzes user behavior patterns to provide progressive task management support, backed by natively fast Golang backend infrastructure.'
        },
        shortDesc: {
            id: 'Aplikasi manajemen tugas cerdas dengan adaptif AI dan backend Golang berkinerja tinggi.',
            en: 'Smart task management app with adaptive AI and high-performance Golang backend.'
        },
        tech: ['Flutter', 'Go', 'PostgreSQL', 'Redis', 'Firebase','Google'],
        category: 'mobile',
        liveUrl: 'https://smartask-omega.vercel.app/',
        githubUrl: '',
        featured: true,
        imageUrl: '/smart-task.webp',
        images: ['/smart-task.webp'],
        status: 'shipped',
        role: { id: 'Team Lead & Frontend Developer', en: 'Team Lead & Frontend Developer' },
        duration: { id: '3 Bulan', en: '3 Month' }
    },
    {
        slug: 'dashboard-kepri',
        title: 'Dashboard Kepri BPS',
        description: {
            id: 'Dashboard ini merupakan website statis yang menyajikan data indikator strategis ekonomi dan pembangunan untuk Provinsi Kepulauan Riau beserta 7 kabupaten/kota-nya. Dibuat untuk keperluan presentasi di Badan Pusat Statistik (BPS) dalam rangka Sensus Ekonomi 2026. Menampilkan 8 indikator utama termasuk Pertumbuhan Ekonomi, IPM, IPG, Pengangguran Terbuka, APS, Kemiskinan, dan Gini Ratio.',
            en: 'A static dashboard presenting strategic economic and development indicators for the Riau Islands Province and its 7 districts/cities. Built for presentation purposes at Statistics Indonesia (BPS) for the 2026 Economic Census. Displays 8 key indicators including Economic Growth, HDI, GDI, Unemployment Rate, School Participation, Poverty, and Gini Ratio.'
        },
        shortDesc: {
            id: 'Dashboard indikator strategis ekonomi BPS Kepulauan Riau untuk Sensus 2026.',
            en: 'Strategic economic indicators dashboard for BPS Riau Islands (2026 Census).'
        },
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'web',
        liveUrl: 'https://kepri.gurind.am/',
        githubUrl: 'https://github.com/Cahyadi-Prasetyo/dashboard-map.git',
        featured: true,
        imageUrl: '/dashboard-kepri.webp',
        images: ['/dashboard-kepri.webp'],
        status: 'shipped',
        role: { id: 'Full Stack Developer', en: 'Full Stack Developer' },
        duration: { id: '1 Minggu', en: '1 Weeks' }
    },
    {
        slug: 'dashboard-tanjak',
        title: 'Dashboard Tanjak SAKERNAS',
        description: {
            id: 'Dasbor interaktif untuk visualisasi data BPS yang terintegrasi langsung dengan Google Looker Studio. Menyediakan visualisasi data yang interaktif dan responsif, dibungkus dengan antarmuka bersih dan modern bergaya glassmorphism. Menampilkan indikator pemuatan dan keamanan iframe sandbox, dikembangkan murni menggunakan HTML/CSS dan JavaScript Vanilla tanpa framework berat.',
            en: 'An interactive dashboard for BPS data visualization integrated directly with Google Looker Studio. Provides interactive and responsive data visualization wrapped in a clean, modern glassmorphism interface. Features loading indicators and iframe sandbox security, developed purely using HTML/CSS and Vanilla JavaScript without heavy frameworks.'
        },
        shortDesc: {
            id: 'Dasbor visualisasi data BPS yang terintegrasi dengan Google Looker Studio.',
            en: 'BPS data visualization dashboard integrated with Google Looker Studio.'
        },
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Looker Studio', 'PHP'],
        category: 'web',
        liveUrl: 'https://tanjak.gurind.am/',
        githubUrl: 'https://github.com/Cahyadi-Prasetyo/BPS-Tanjak.git',
        featured: true,
        imageUrl: '/Tanjak.webp',
        images: ['/Tanjak.webp'],
        status: 'shipped',
        role: { id: 'Data Analyst & Looker Studio Designer', en: 'Data Analyst & Looker Studio Designer' },
        duration: { id: '2 Bulan', en: '2 Month' }
    },
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
        tech: ['React.js', 'Tailwind CSS','Laravel','MySQL'],
        category: 'web',
        liveUrl: '',
        githubUrl: 'https://github.com/aidilbaihaqi/pkm-project.git',
        featured: true,
        imageUrl: '/umkm.webp',
        images: ['/umkm.webp'],
        status: 'shipped',
        role: { id: 'Frontend Developer', en: 'Frontend Developer' },
        duration: { id: '3 Bulan', en: '3 Months' }
    },
    {
        slug: 'aero-price-monitoring',
        title: 'Aero Price Monitoring Platform',
        description: {
            id: 'Platform pemantauan harga tiket pesawat berbasis rute tetap, time-series, dan data historis untuk analisis tren harga, evaluasi strategi pembelian, serta kebutuhan monitoring harga menjelang periode tertentu (mis. Hari Raya).\n\nPlatform ini melakukan scraping harga tiket terjadwal maupun manual, menyimpan histori harga harian, dan menyajikan data dalam dashboard web serta spreadsheet terstruktur.',
            en: 'A flight ticket price monitoring platform based on fixed routes, time-series, and historical data for price trend analysis, purchasing strategy evaluation, and price monitoring needs approaching specific periods (e.g., holidays).\n\nThe platform performs scheduled and manual ticket price scraping, stores daily price history, and presents data in a web dashboard and structured spreadsheets.'
        },
        shortDesc: {
            id: 'Platform pemantauan harga tiket pesawat berbasis rute tetap, time-series, dan data historis.',
            en: 'Flight ticket price monitoring platform based on fixed routes, time-series, and historical data.'
        },
        tech: ['Next.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Docker'],
        category: 'web',
        liveUrl: '',
        githubUrl: 'https://github.com/aidilbaihaqi/Aero.git',
        featured: true,
        imageUrl: '/aero.webp',
        images: ['/aero.webp'],
        status: 'shipped',
        role: { id: 'Frontend Developer', en: 'Frontend Developer' },
        duration: { id: '3 Bulan', en: '3 Months' }
    },
    {
        slug: 'courier-game',
        title: 'Simple Courier Game',
        description: {
            id: 'Sebuah game kurir sederhana yang dikembangkan menggunakan bahasa C dan library grafis Raylib. Pemain bertugas mengantarkan paket dengan menavigasi rintangan dasar, dirancang khusus untuk mempraktikkan pemahaman logika algoritma dan struktur data secara interaktif.',
            en: 'A simple courier game developed using C and the Raylib graphics library. Players are tasked with delivering packages by navigating through basic obstacles, specifically designed to interactively practice algorithmic logic and data structures.'
        },
        shortDesc: {
            id: 'Game kurir sederhana yang dibangun menggunakan bahasa C dan Raylib.',
            en: 'A simple courier game built using C and Raylib.'
        },
        tech: ['C', 'Raylib'],
        category: 'game',
        liveUrl: '',
        githubUrl: 'https://github.com/rajaaizin123/PAA-project-game.git',
        featured: true,
        imageUrl: '/game.webp',
        images: ['/game.webp'],
        status: 'shipped',
        role: { id: 'Game Developer', en: 'Game Developer' },
        duration: { id: '2 Minggu', en: '2 Weeks' }
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: 'all' | 'web' | 'mobile' | 'ai' | 'game'): Project[] {
    if (category === 'all') return projects;
    return projects.filter((p) => p.category === category);
}
