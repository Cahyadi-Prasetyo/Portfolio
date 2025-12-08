const en = {
    // Navigation
    nav: {
        home: 'Home',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
    },

    // Hero Section
    hero: {
        iAmA: 'I am a',
        roles: ['Backend Engineer', 'Fullstack Developer', 'System Architect'],
        taglines: [
            'Architecting scalable backend systems.',
            'Building end-to-end web solutions.',
            'Creating robust APIs & databases.'
        ],
        available: 'Ready to help your project 🚀',
        contactMe: 'CONTACT ME',
    },

    // Who Am I Section
    whoAmI: {
        title: 'Who Am I?',
        paragraph1: "Hi! I'm Cahyadi Prasetyo, an Informatics Engineering student at UMRAH with a background in Software Engineering from vocational school. I love exploring web development, both Frontend and Backend.",
        paragraph2: "I interned as IT Support at PT Pelindo Regional 1 Tanjungpinang, where I learned a lot about troubleshooting, database management, and teamwork in a professional environment. Now I'm focusing on fullstack development using Laravel, React, and PostgreSQL.",
        paragraph3: "I'm always excited to try new technologies, solve problems creatively, and build meaningful projects. Feel free to reach out! 🚀",
        moreAboutMe: 'More about me',
    },

    // Projects Section
    projects: {
        title: 'Selected\nProjects.',
        viewAll: 'View All',
        viewAllProjects: 'View All Projects',
    },

    // FAQ Section
    faq: {
        title: 'Any questions?',
        questions: [
            {
                question: 'Do you work with international clients?',
                answer: "Yes, I'm open to projects from anywhere. I'm experienced with remote collaboration and use tools that make working across time zones seamless."
            },
            {
                question: 'What technologies do you master?',
                answer: 'I focus on fullstack development with Laravel and CodeIgniter for backend, React and TypeScript for frontend, and PostgreSQL and MySQL for databases. I also use supporting tools like Docker, Git, and Tailwind CSS.'
            },
            {
                question: 'What services do you offer?',
                answer: 'I offer fullstack web development, API design and development, database optimization, system troubleshooting, and application architecture consulting.'
            },
            {
                question: 'How long does a typical project take?',
                answer: 'It depends on the project complexity. A simple website usually takes 2-4 weeks, while more complex web applications can take 2-3 months.'
            }
        ]
    },

    // Footer
    footer: {
        cta: 'Have an interesting\nproject?',
        letsChat: "Let's chat",
        description: 'Fullstack Developer based in Indonesia. Ready to help bring your digital ideas to life.',
        navigation: 'Navigation',
        services: 'Services',
        serviceList: [
            'Web Development',
            'Mobile Development',
            'UI/UX Design',
            'System Architecture'
        ],
        connect: 'Connect',
        coding: 'Coding With ',
    },

    // Page Transition
    pageTransition: {
        home: 'Home',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
    },

    // About Page
    about: {
        title: 'Short Story',
        subtitle: 'Let\'s get introduced 👋',
        intro: "Hi! I'm Cahyadi Prasetyo, a 5th semester Informatics Engineering student at Raja Ali Haji Maritime University (UMRAH). My programming journey started in vocational school majoring in Software Engineering. I've completed a 6-month internship as IT Support at PT Pelindo Regional 1 Tanjungpinang, where I learned troubleshooting, database management, and professional teamwork.",
        intro2: "Now I focus as a Fullstack Developer and have built various projects like Online Exam System, Laundry System, Attendance System, and UMKM E-commerce. I got exciting experience using backend tech like",
        skills: [
            { name: 'Laravel', color: 'blue' },
            { name: 'React', color: 'blue' },
            { name: 'PostgreSQL', color: 'blue' },
            { name: 'TypeScript', color: 'blue' },
        ],
        intro3: 'plus modern frontend technologies.',
        hobby: "Besides coding, I love exploring new technologies, contributing to open source projects, and gaming. I'm always open to new opportunities and collaborations! Feel free to reach out. 🚀",
        experience: 'My Career',
        education: 'Education',
        experienceData: [
            {
                years: '2022\n2022',
                period: 'Jan 2022 - Jun 2022',
                role: 'IT Support',
                company: 'PT Pelindo (Persero) Regional 1 Tanjungpinang',
                desc: [
                    'Performed troubleshooting for computer devices, printers, and network equipment.',
                    'Handled installation, configuration, and maintenance of software and hardware.',
                    'Supported daily operations related to corporate information systems.',
                    'Documented incidents and repairs.',
                    'Coordinated with the IT team to ensure systems remained optimal.'
                ]
            },
        ],
        educationData: [
            {
                years: '2023\nPresent',
                period: '2023 - Present',
                role: 'B.S. Informatics Engineering',
                company: 'Raja Ali Haji Maritime University',
                desc: ['Focus on web development and information systems.']
            },
            {
                years: '2020\n2023',
                period: '2020 - 2023',
                role: 'Software Engineering',
                company: 'SMKN 1 Bintan Timur',
                desc: ['Programming fundamentals, databases, and software development.']
            },
        ],
    },

    // Projects Page
    projectsPage: {
        title: 'Projects',
    },
    projectsList: [
        {
            id: 1,
            title: 'EXAM SYSTEM',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'exam-system',
            github: 'https://github.com/Cahyadi-Prasetyo/Exam-System',
            description: "A comprehensive CBT (Computer Based Test) system designed to facilitate secure and efficient online examinations. This system supports various question types, automated grading, and real-time monitoring of examinees.",
            techStack: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'TailwindCSS', 'Typescript'],
            features: [
                'Real-time Exam Monitoring',
                'Synchronous Broadcasting (Redis/Reverb)',
                'Automated Grading System',
                'Secure Browser Lockdown',
                'Teacher & Student Dashboards',
                'Comprehensive Reporting'
            ]
        },
        {
            id: 2,
            title: 'LAUNDRY SYSTEM',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'laundry-system',
            github: 'https://github.com/Cahyadi-Prasetyo/LaundrySystem',
            description: "A management application for laundry businesses to streamline operations. It handles order recording, customer management, status tracking, and financial reporting.",
            techStack: ['Laravel', 'MySQL', 'jQuery', 'TailwindCss'],
            features: [
                'POS (Point of Sale) transaction entry',
                'Real-time laundry status tracking',
                'SMS/WhatsApp notification integration',
                'Income and expense reports',
                'Customer database management'
            ]
        },
        {
            id: 3,
            title: 'SISTEM ABSENSI',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'sistem-absensi',
            github: 'https://github.com/Cahyadi-Prasetyo/Sistem-Absensi',
            description: "An employee attendance system using QR Codes and Geolocation validation. It prevents attendance fraud and provides accurate working hour data for HR.",
            techStack: ['Docker', 'Laravel', 'MySQL', 'Javascript', 'TailwindCss', 'Redis', 'WebSocket', 'Nginx'],
            features: [
                'Geolocation-based Attendance',
                'Real-time Spreadsheet Sync',
                'Automated Reporting (Data Studio)',
                'Leave & Permission Management',
                'Face Recognition Support',
                'Mobile-friendly Interface'
            ]
        },
        {
            id: 4,
            title: 'WARUNG DIGITAL',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'warung-digital',
            github: 'https://github.com/Cahyadi-Prasetyo/warung-digital',
            description: "A digital marketplace platform empowering local MSMEs to go online. Features a user-friendly shopping interface and easier product management for stall owners.",
            techStack: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'TailwindCSS', 'Typescript'],
            features: [
                'Product catalog with categories',
                'Shopping cart and checkout flow',
                'Merchant dashboard',
                'Order status tracking',
                'Responsive mobile design'
            ]
        },
        {
            id: 5,
            title: 'BAHARI KEPRI',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'bahari-kepri',
            github: 'https://github.com/Cahyadi-Prasetyo/bahari-kepri',
            description: "A tourism information portal dedicated to promoting the marine beauty of Kepulauan Riau. Showcases destinations, culinary spots, and travel guides.",
            techStack: ['PHP', 'MySQL', 'CSS', 'JavaScript', 'Bootstrap', 'Leaflet.js'],
            features: [
                'Maritime Tourism Mapping',
                'Interactive Island Details',
                'Route Planning',
                'Ticket Booking System',
                'Admin Content Management',
                'Visitor Reviews'
            ]
        },
        {
            id: 6,
            title: 'TRASH MONITORING',
            category: 'mobile',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'trash-monitoring',
            github: 'https://github.com/Cahyadi-Prasetyo/TrashMonitoring',
            description: "An IoT-integrated mobile app to monitor trash levels in smart bins real-time. Helps in optimizing waste collection routes.",
            techStack: ['Javascript', 'PHP', 'Firebase', 'Arduino', 'ESP32'],
            features: [
                'Real-time Fill Level Monitoring',
                'IoT Sensor Integration (ESP32)',
                'Automated Alerts',
                'Historical Data Analytics',
                'Route Optimization for Pickup',
                'Solar Power Management'
            ]
        },

        {
            id: 7,
            title: 'PEMIRA OSMA',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'pemira-osma',
            github: 'https://github.com/Cahyadi-Prasetyo/pemira-osma-v2',
            description: "E-Voting system for student organization elections (OSMA). Ensures a transparent, fair, and efficient voting process.",
            techStack: ['PHP', 'MySQL', 'Bootstrap'],
            features: [
                'Secure voter authentication',
                'Real-time vote counting (Quick Count)',
                'Candidate profile pages',
                'Audit logs for security',
                'Responsive voting interface'
            ]
        },
        {
            id: 8,
            title: 'INVENTORY SYSTEM',
            category: 'web',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: 'inventory-system',
            github: 'https://github.com/Cahyadi-Prasetyo/Inventory-v2',
            description: "A stock management system for warehouses. Tracks item entry, exit, and current stock levels with reporting features.",
            techStack: ['PHP', 'MySQL', 'Bootstrap'],
            features: [
                'Real-time Stock Tracking',
                'Purchase Order Management',
                'Sales Reporting & Analytics',
                'Supplier Database',
                'Barcode/QR Code Scanning',
                'Multi-warehouse Support'
            ]
        },

    ],

    // Contact Page
    contact: {
        label: "Let's Connect",
        title: 'Get in Touch.',
        subtitle: 'Have a project in mind or just want to say hi? Feel free to drop me a message.',
        email: 'Email',
        location: 'Location',
        form: {
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            message: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            send: 'Send Message',
            sending: 'Sending...',
            sent: 'Sent!',
            error: 'Something went wrong. Please try again.',
        },
    },
};

export default en;
