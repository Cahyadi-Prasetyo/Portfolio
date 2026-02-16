export const translations = {
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            projects: 'Projek',
            contact: 'Hubungi'
        },
        hero: {
            greeting: 'Halo, saya',
            name: 'Cahyadi Prasetyo',
            role: 'Full-Stack Developer',
            tagline: 'Saya membangun pengalaman digital yang bersih, modern, & berdampak.',
            cta: 'Lihat Projek',
            contact: 'Hubungi Saya'
        },
        about: {
            label: 'Tentang Saya',
            title: 'Sedikit tentang diri saya',
            bio1: 'Saya seorang developer yang passionate dalam menciptakan solusi digital yang elegan dan fungsional. Dengan pengalaman di berbagai teknologi modern, saya selalu berusaha menghadirkan kode yang bersih dan produk yang memukau.',
            bio2: 'Saat ini saya fokus mengembangkan aplikasi web full-stack dengan pendekatan yang mengutamakan pengalaman pengguna dan performa.',
            techTitle: 'Tech Stack'
        },
        projects: {
            label: 'Projek',
            title: 'Karya pilihan saya',
            description: 'Beberapa project yang pernah saya kerjakan.',
            viewProject: 'Lihat Projek',
            viewCode: 'Lihat Kode',
            items: [
                {
                    title: 'E-Commerce Platform',
                    description: 'Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Dibangun dengan fokus pada performa dan pengalaman pengguna.',
                    tech: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Tailwind'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Dashboard Analytics',
                    description: 'Dashboard interaktif untuk visualisasi data bisnis secara real-time. Menampilkan grafik, statistik, dan laporan yang mudah dipahami.',
                    tech: ['React', 'Node.js', 'D3.js', 'MongoDB'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Task Management App',
                    description: 'Aplikasi manajemen tugas kolaboratif dengan fitur real-time sync, drag & drop, dan notifikasi. Desain minimalis yang intuitif.',
                    tech: ['Vue.js', 'Firebase', 'Sass', 'PWA'],
                    liveUrl: '#',
                    githubUrl: '#'
                }
            ]
        },
        contact: {
            label: 'Hubungi',
            title: 'Mari bekerja sama',
            description: 'Tertarik untuk berkolaborasi atau punya project yang ingin didiskusikan? Jangan ragu untuk menghubungi saya.',
            email: 'Kirim Email',
            or: 'atau temukan saya di'
        },
        footer: {
            copyright: '© 2026 Cahyadi Prasetyo. Dibuat dengan',
            allRights: 'Semua hak dilindungi.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: "Hi, I'm",
            name: 'Cahyadi Prasetyo',
            role: 'Full-Stack Developer',
            tagline: 'I build clean, modern, & impactful digital experiences.',
            cta: 'View Projects',
            contact: 'Contact Me'
        },
        about: {
            label: 'About Me',
            title: 'A little bit about myself',
            bio1: "I'm a developer passionate about crafting elegant and functional digital solutions. With experience across various modern technologies, I always strive to deliver clean code and stunning products.",
            bio2: "Currently, I'm focused on building full-stack web applications with a user experience and performance-first approach.",
            techTitle: 'Tech Stack'
        },
        projects: {
            label: 'Projects',
            title: 'Selected works',
            description: 'Some projects I have worked on.',
            viewProject: 'View Project',
            viewCode: 'View Code',
            items: [
                {
                    title: 'E-Commerce Platform',
                    description: 'A modern e-commerce platform with shopping cart, payment, and product management features. Built with a focus on performance and user experience.',
                    tech: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Tailwind'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Analytics Dashboard',
                    description: 'An interactive dashboard for real-time business data visualization. Displays charts, statistics, and easy-to-understand reports.',
                    tech: ['React', 'Node.js', 'D3.js', 'MongoDB'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Task Management App',
                    description: 'A collaborative task management app with real-time sync, drag & drop, and notifications. Minimalist and intuitive design.',
                    tech: ['Vue.js', 'Firebase', 'Sass', 'PWA'],
                    liveUrl: '#',
                    githubUrl: '#'
                }
            ]
        },
        contact: {
            label: 'Contact',
            title: "Let's work together",
            description: "Interested in collaborating or have a project you'd like to discuss? Don't hesitate to reach out.",
            email: 'Send Email',
            or: 'or find me on'
        },
        footer: {
            copyright: '© 2026 Cahyadi Prasetyo. Built with',
            allRights: 'All rights reserved.'
        }
    }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations['id'];
