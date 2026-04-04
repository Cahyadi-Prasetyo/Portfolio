export type Language = 'id' | 'en';

export const translations: Record<Language, any> = {
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            projects: 'Proyek',
            contact: 'Kontak'
        },
        hero: {
            greeting: 'Hai! Saya Cahyadi Prasetyo 👋',
            value: 'Full-Stack Developer, IT Mentor, & Data Enthusiast.',
            bio: 'Mahasiswa Teknik Informatika di UMRAH yang udah keburu nyemplung ke dunia industri sejak 2022. Dari bikin platform data buat BPS, ngurusin IT di Pelindo, sampai jadi asisten praktikum yang bantuin mahasiswa paham jaringan komputer — semua saya jalani sambil terus belajar.',
            cta: 'Lihat Hasil Kerja Saya',
            ctaSecondary: 'Hubungi Saya'
        },
        trust: {
            label: 'Dipercaya oleh',
            orgs: [
                { name: 'BPS Kepulauan Riau', type: 'Pemerintah' },
                { name: 'PT. Pelindo', type: 'BUMN' },
                { name: 'UMRAH', type: 'Universitas' },
                { name: 'Posyandu Terintegrasi', type: 'Publik' }
            ]
        },
        selectedWork: {
            label: 'Hasil Kerja',
            title: 'Proyek Terpilih',
            viewAll: 'Lihat Semua Proyek'
        },
        about: {
            title: 'Tentang Saya',
            bio: 'Saya percaya teknologi itu harusnya menyelesaikan masalah, bukan bikin tambah ribet. Itulah yang jadi landasan saya di setiap proyek.\n\nSebagai Full-Stack Developer, saya terbiasa handle dari frontend sampai backend — React, Vue, Svelte di depan, Laravel & Node.js di belakang. Tapi saya nggak cuma berhenti di coding. Pengalaman sebagai IT & Web Mentor di kampus bikin saya terbiasa menjelaskan hal teknis ke non-teknis, dan pengalaman magang sebagai Data Analyst di BPS mengasah cara saya berpikir berbasis data.\n\nYang bikin saya semangat? Melihat solusi yang saya bangun benar-benar dipakai orang — bukan cuma jadi tugas kuliah atau proyek pajangan.\n\nKalau kamu punya ide proyek atau butuh partner kolaborasi, jangan sungkan buat hubungi saya. 🚀',
            techStackLabel: 'Tech Stack',
            titleExp: 'Pengalaman',
            titleEdu: 'Pendidikan',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
                },
                backend: {
                    label: 'Backend',
                    items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Python']
                },
                database: {
                    label: 'Database',
                    items: ['PostgreSQL', 'MySQL', 'Prisma']
                },
                devops: {
                    label: 'DevOps',
                    items: ['Docker', 'Nginx']
                },
                design: {
                    label: 'Design Tools',
                    items: ['Figma', 'Canva']
                },
                vcs: {
                    label: 'Version Control',
                    items: ['Git', 'GitHub']
                },
                data_ai: {
                    label: 'Data & AI',
                    items: ['Looker Studio', 'Pandas', 'Metabase', 'Google Sheets']
                }
            },
            experience: [
                {
                    period: 'Februari 2026 – Juli 2026',
                    role: 'Asisten Praktikum Jaringan Komputer',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo-umrah.png',
                    desc: 'Berkontribusi dalam program instruksional akademik untuk mendukung pemahaman mahasiswa pada mata kuliah Jaringan Komputer.',
                    points: [
                        'Berkontribusi dalam program instruksional akademik untuk mendukung pemahaman mahasiswa pada mata kuliah Jaringan Komputer dengan standar kurikulum teknik informatika.',
                        'Merancang dan mensimulasikan arsitektur jaringan kompleks (VLAN, Static/Dynamic Routing, Subnetting) menggunakan Cisco Packet Tracer sebagai media pembelajaran interaktif.',
                        'Melakukan analisis protokol mendalam dan troubleshooting lalu lintas data menggunakan Wireshark untuk memvalidasi keamanan dan efisiensi transmisi jaringan.',
                        'Mengevaluasi performa teknis mahasiswa melalui sesi responsi praktikum untuk memastikan penguasaan konsep OSI Layer dan infrastruktur jaringan.'
                    ],
                    skills: 'Computer Networking · Cisco Packet Tracer · Wireshark · Technical Instruction · Troubleshooting'
                },
                {
                    period: 'Januari 2026 – Maret 2026',
                    role: 'IT Web Developer & Data Analyst (Internship)',
                    company: 'BPS Provinsi Kepulauan Riau',
                    logo: '/logo-bps.png',
                    desc: 'Berperan aktif dalam divisi IT dan Pengolahan untuk mendukung digitalisasi data statistik regional.',
                    points: [
                        'Berperan aktif dalam divisi IT dan Pengolahan untuk mendukung digitalisasi data statistik regional melalui pengembangan aplikasi web dan integrasi data.',
                        'Membangun antarmuka pengguna (Frontend) yang responsif untuk platform kepri.gurind.am dan tanjak.gurind.am menggunakan React, Vue.js, dan Tailwind CSS.',
                        'Merekayasa integrasi visualisasi laporan interaktif pada platform Tanjak dengan mengimplementasikan teknik embedding Looker Studio menggunakan PHP.',
                        'Mengoptimalkan alur kerja data dari PostgreSQL dan Spreadsheet API ke dalam dasbor analitik untuk mendukung pengambilan keputusan berbasis data oleh pimpinan instansi.',
                        'Berkontribusi dalam pengembangan Aeroprice, platform pemantau harga tiket pesawat, dengan fokus pada optimasi rendering data dinamis di sisi frontend.',
                        'Memberikan dukungan infrastruktur (IT Support) untuk memastikan stabilitas operasional sistem informasi di lingkungan kantor BPS.'
                    ],
                    skills: 'React.js · Vue.js · PHP · PostgreSQL · Looker Studio · Data Visualization · IT Support'
                },
                {
                    period: 'November 2025 – Januari 2026',
                    role: 'Frontend Developer',
                    company: 'Tim PKM Dosen UMRAH',
                    logo: '/logo-umrah.png',
                    desc: 'Berpartisipasi dalam Program Kreativitas Mahasiswa (PKM) untuk mengembangkan solusi digital inovatif.',
                    points: [
                        'Berpartisipasi dalam Program Kreativitas Mahasiswa (PKM) untuk mengembangkan solusi digital inovatif bagi sektor UMKM.',
                        'Mengembangkan antarmuka website bertema video-style (serupa TikTok) menggunakan React.js untuk meningkatkan user engagement terhadap produk lokal.',
                        'Mengimplementasikan prinsip User-Centric Design untuk memastikan navigasi dan interaksi video berjalan mulus pada berbagai perangkat (Responsive Design).',
                        'Berkolaborasi dalam tim lintas fungsi untuk merumuskan arsitektur sistem dan solusi teknis yang aplikatif bagi pengguna akhir.'
                    ],
                    skills: 'React.js · Tailwind CSS · User Interface (UI) Design · Cross-team Collaboration'
                },
                {
                    period: '2024 – Sekarang',
                    role: 'Data Analyst & Administrator',
                    company: 'Posyandu Terintegrasi',
                    logo: '/logo-posyandu.png',
                    desc: 'Mengelola ekosistem data operasional secara profesional untuk memastikan keakuratan pelaporan.',
                    points: [
                        'Mengelola ekosistem data operasional secara profesional untuk memastikan keakuratan pelaporan administrasi kesehatan masyarakat.',
                        'Melakukan analisis data rutin dan pembersihan data (data cleaning) untuk meminimalisir anomali pada laporan operasional bulanan.',
                        'Bertanggung jawab atas integritas pelaporan data yang menjadi acuan dalam peninjauan kebijakan kesehatan tingkat desa/kelurahan.'
                    ],
                    skills: 'Data Analysis · Administrative Management · Data Integrity · Operational Excellence'
                },
                {
                    period: 'Januari 2022 – Juni 2022',
                    role: 'IT Support (Internship)',
                    company: 'PT. Pelindo (Persero) Regional 1 Tanjungpinang',
                    logo: '/logo-pelindo.png',
                    desc: 'Menjalankan fungsi dukungan teknis di lingkungan BUMN untuk mendukung produktivitas operasional.',
                    points: [
                        'Menjalankan fungsi dukungan teknis di lingkungan Badan Usaha Milik Negara (BUMN) untuk mendukung produktivitas operasional perusahaan.',
                        'Melakukan pemeliharaan rutin pada perangkat keras dan perangkat lunak serta memastikan stabilitas konektivitas jaringan lokal (LAN).',
                        'Menyelesaikan kendala teknis harian pengguna (end-user support) terkait sistem operasi dan aplikasi perkantoran secara efektif.'
                    ],
                    skills: 'Hardware Maintenance · Network Troubleshooting · Technical Support · Corporate Environment'
                }
            ],
            education: [
                {
                    period: '2023 – Sekarang',
                    degree: 'S1 Teknik Informatika',
                    school: 'Universitas Maritim Raja Ali Haji',
                    logo: '/logo-umrah.png',
                    desc: 'Fokus pada pengembangan perangkat lunak dan data analytics.'
                },
                {
                    period: '2019 – 2022',
                    degree: 'Rekayasa Perangkat Lunak',
                    school: 'SMKN 1 Bintan Timur',
                    logo: '/logo-smkn.png',
                    desc: 'Mempelajari dasar pemrograman, basis data, dan pengembangan aplikasi.'
                }
            ]
        },
        projects: {
            label: 'Proyek',
            title: 'Proyek Saya',
            desc: 'Proyek-proyek yang sudah saya kerjakan.',
            filterAll: 'Semua',
            filterWeb: 'Website',
            filterMobile: 'Mobile',
            filterAI: 'AI'
        },
        featured: {
            label: 'Proyek Pilihan',
            title: 'Proyek Pilihan',
            viewAll: 'Lihat Semua Proyek'
        },
        faq: {
            label: 'FAQ',
            title: 'Pertanyaan Umum',
            items: [
                { q: 'Teknologi apa yang kamu kuasai?', a: 'Saya bekerja dengan React, Vue.js, Svelte, Node.js, PHP (Laravel), PostgreSQL, dan tools data analytics seperti Looker Studio dan Metabase.' },
                { q: 'Apakah kamu menerima freelance?', a: 'Ya, saya terbuka untuk proyek freelance. Mari diskusikan kebutuhan Anda.' },
                { q: 'Berapa lama pengalaman kerjamu?', a: 'Saya sudah terlibat dalam proyek profesional sejak 2022 — termasuk internship di BPS dan PT. Pelindo, serta proyek riset di universitas.' },
                { q: 'Bagaimana cara menghubungi kamu?', a: 'Langsung melalui halaman kontak atau email ke chdprasetyo@gmail.com.' }
            ]
        },
        contact: {
            label: 'Kontak',
            title: 'Mari Bekerja Sama',
            desc: 'Punya proyek atau ide? Saya siap berdiskusi.',
            nameLabel: 'Nama',
            namePlaceholder: 'Nama Anda',
            emailLabel: 'Email',
            emailPlaceholder: 'email@contoh.com',
            subjectLabel: 'Subjek',
            subjectPlaceholder: 'Tentang apa?',
            messageLabel: 'Pesan',
            messagePlaceholder: 'Ceritakan tentang proyek Anda...',
            send: 'Kirim Pesan',
            email: 'chdprasetyo@gmail.com',
            orEmail: 'Atau kirim email langsung ke'
        },
        footerCta: {
            title: 'Punya proyek yang ingin didiskusikan?',
            desc: 'Mari wujudkan ide Anda.',
            button: 'Hubungi Saya'
        },
        footer: {
            copy: '© 2026 Cahyadi Prasetyo. All rights reserved.'
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
            greeting: "Hi! I'm Cahyadi Prasetyo 👋",
            value: 'Full-Stack Developer, IT Mentor, & Data Enthusiast.',
            bio: "A Computer Science student at UMRAH who's been diving into the industry since 2022. From building data platforms for BPS, handling IT at Pelindo, to mentoring students in computer networking labs — I do it all while continuously learning.",
            cta: 'See My Work',
            ctaSecondary: 'Contact Me'
        },
        trust: {
            label: 'Trusted by',
            orgs: [
                { name: 'BPS Kepulauan Riau', type: 'Government' },
                { name: 'PT. Pelindo', type: 'State Enterprise' },
                { name: 'UMRAH', type: 'University' },
                { name: 'Posyandu Terintegrasi', type: 'Public Health' }
            ]
        },
        selectedWork: {
            label: 'Selected Work',
            title: 'Selected Projects',
            viewAll: 'View All Projects'
        },
        about: {
            title: 'About Me',
            bio: "I believe technology should solve problems, not create more of them. That\'s the foundation of everything I build.\n\nAs a Full-Stack Developer, I\'m comfortable handling everything from frontend to backend — React, Vue, Svelte up front, Laravel & Node.js in the back. But I don\'t stop at coding. My experience as an IT & Web Mentor on campus taught me how to explain technical concepts to non-technical people, and my internship as a Data Analyst at BPS sharpened my data-driven thinking.\n\nWhat keeps me going? Seeing the solutions I build actually being used by real people — not just sitting as a college assignment or a portfolio showpiece.\n\nGot a project idea or need a collaboration partner? Don\'t hesitate to reach out. 🚀",
             techStackLabel: 'Tech Stack',
            titleExp: 'Experience',
            titleEdu: 'Education',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
                },
                backend: {
                    label: 'Backend',
                    items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Python']
                },
                database: {
                    label: 'Database',
                    items: ['PostgreSQL', 'MySQL', 'Prisma']
                },
                devops: {
                    label: 'DevOps',
                    items: ['Docker', 'Nginx', 'Linux Server']
                },
                design: {
                    label: 'Design Tools',
                    items: ['Figma', 'Canva']
                },
                vcs: {
                    label: 'Version Control',
                    items: ['Git', 'GitHub']
                },
                data_ai: {
                    label: 'Data & AI',
                    items: ['Looker Studio', 'Pandas', 'Metabase', 'Google Sheets']
                }
            },
            experience: [
                {
                    period: 'Feb 2026 – Jul 2026',
                    role: 'Computer Network Lab Assistant',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo-umrah.png',
                    desc: 'Guiding students through applied computer networking concepts.',
                    highlights: [
                        {
                            title: 'Network Lab & Infrastructure',
                            desc: 'Responsible for guiding students in understanding fundamental and applied computer networking concepts. Designed lab scenarios covering Subnetting, Routing configuration (Static & Dynamic), and VLAN implementation.'
                        },
                        {
                            title: 'Protocol Analysis & Troubleshooting',
                            desc: 'Demonstrated real-time packet data analysis (TCP/UDP/HTTP) using Wireshark. Used Cisco Packet Tracer to simulate complex network topologies, helping students identify bottlenecks and understand data flow across the OSI Layer.'
                        }
                    ]
                },
                {
                    period: 'Jan 2026 – Mar 2026',
                    role: 'IT Web Developer & Data Analyst (Internship)',
                    company: 'BPS Kepulauan Riau Province',
                    logo: '/logo-bps.png',
                    desc: 'Built regional statistical data platform and internal analytics dashboards.',
                    highlights: [
                        {
                            title: 'Gurindam Platform Ecosystem',
                            desc: 'Engineered the user interface (Frontend) for the regional statistical data distribution platform. Used React and Vue.js to ensure complex data presentation remained responsive and navigable by the public.'
                        },
                        {
                            title: 'Data Integration & PHP Embedding',
                            desc: 'Developed data visualization integration system on the Tanjak platform using PHP. Implemented dynamic embedding techniques to serve interactive reports from Looker Studio directly into the internal BPS website environment.'
                        },
                        {
                            title: 'Internal Analytics Dashboard',
                            desc: 'Built an internal data monitoring dashboard connected to PostgreSQL and Spreadsheet API. Optimized Looker Studio visualizations to support real-time data-driven decision making by BPS Kepri leadership.'
                        },
                        {
                            title: 'Aeroprice Flight Monitoring',
                            desc: 'Contributed as Frontend Developer in building a flight price monitoring platform. Focused on dynamic data rendering performance optimization to provide fast user experience in monitoring airline price fluctuations.'
                        }
                    ]
                },
                {
                    period: 'Nov 2025 – Jan 2026',
                    role: 'Frontend Developer',
                    company: 'PKM Dosen Team, UMRAH',
                    logo: '/logo-umrah.png',
                    desc: 'Built MSME promotion platform with video-based interface.',
                    highlights: [
                        {
                            title: 'UMKM Video-Style Platform',
                            desc: 'Engineered an innovative video-feed based web interface (similar to TikTok interaction) to boost local product exposure. Used React.js and Tailwind CSS to build interactive UI components, ensuring smooth video content transitions responsive across various devices.'
                        }
                    ]
                },
                {
                    period: '2024 – Present',
                    role: 'Data Analyst & Administrator',
                    company: 'Posyandu Terintegrasi',
                    logo: '/logo-posyandu.png',
                    desc: 'Managing public health data systems.',
                    highlights: [
                        {
                            title: 'Operational Data & Integrity Management',
                            desc: 'Managing digital data administration system for monthly operations. Fully responsible for validation and accuracy of public health data reporting, conducting routine analysis to ensure information integrity before submission in official administrative reports.'
                        }
                    ]
                },
                {
                    period: 'Jan 2022 – Jun 2022',
                    role: 'IT Support (Internship)',
                    company: 'PT. Pelindo (Persero) Regional 1 Tanjungpinang',
                    logo: '/logo-pelindo.png',
                    desc: 'IT technical support in state-owned enterprise.',
                    highlights: [
                        {
                            title: 'Infrastructure & Technical Support',
                            desc: 'Provided on-site technical support to ensure smooth IT operations in a state-owned enterprise environment. Work scope included local network (LAN) troubleshooting, hardware maintenance, and installation and configuration of supporting software for company staff.'
                        }
                    ]
                }
            ],
            education: [
                {
                    period: '2023 – Present',
                    degree: 'Bachelor of Computer Science',
                    school: 'Universitas Maritim Raja Ali Haji',
                    logo: '/logo-umrah.png',
                    desc: 'Focusing on software engineering and data analytics.'
                },
                {
                    period: '2019 – 2022',
                    degree: 'Software Engineering',
                    school: 'SMKN 1 Bintan Timur',
                    logo: '/logo-smkn.png',
                    desc: 'Studied programming fundamentals, databases, and application development.'
                }
            ]
        },
        projects: {
            label: 'Projects',
            title: 'My Projects',
            desc: 'Projects I have worked on.',
            filterAll: 'All',
            filterWeb: 'Website',
            filterMobile: 'Mobile',
            filterAI: 'AI'
        },
        featured: {
            label: 'Selected Work',
            title: 'Selected Projects',
            viewAll: 'View All Projects'
        },
        faq: {
            label: 'FAQ',
            title: 'Frequently Asked',
            items: [
                { q: 'What technologies do you work with?', a: 'I work with React, Vue.js, Svelte, Node.js, PHP (Laravel), PostgreSQL, and data analytics tools like Looker Studio and Metabase.' },
                { q: 'Are you available for freelance?', a: "Yes, I'm open for freelance projects. Let's discuss your needs." },
                { q: 'How much experience do you have?', a: "I've been involved in professional projects since 2022 — including internships at BPS and PT. Pelindo, as well as university research projects." },
                { q: 'How can I reach you?', a: 'Through the contact page or email me directly at chdprasetyo@gmail.com .' }
            ]
        },
        contact: {
            label: 'Contact',
            title: "Let's Work Together",
            desc: 'Have a project or idea? I am ready to discuss.',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'email@example.com',
            subjectLabel: 'Subject',
            subjectPlaceholder: 'What is this about?',
            messageLabel: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            send: 'Send Message',
            email: 'chdprasetyo@gmail.com ' ,
            orEmail: 'Or email me directly at'
        },
        footerCta: {
            title: 'Have a project to discuss?',
            desc: "Let's make your idea a reality.",
            button: 'Contact Me'
        },
        footer: {
            copy: '© 2026 Cahyadi Prasetyo. All rights reserved.'
        }
    }
};
