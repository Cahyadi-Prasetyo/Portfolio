<!DOCTYPE html>
<html lang="id" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio profesional Cahyadi Prasetyo - Full Stack Developer">
    <meta name="keywords" content="web developer, portfolio, full stack, laravel, javascript">
    <meta name="author" content="Profile">
    <title>Portfolio </title>

    <!-- Preload Critical Resources -->
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        as="style">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/toggle.js'])

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

    <!-- Open Graph / Social Media Meta Tags -->
    <meta property="og:title" content="Cahyadi Prasetyo | Full-Stack Developer">
    <meta property="og:description" content="Portfolio profesional Cahyadi Prasetyo - Full Stack Developer">
    <meta property="og:image" content="{{ asset('images/social-preview.jpg') }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">

    <style>
        :root {
            --bg-color: #0F172A;
            --card-color: rgba(30, 41, 59, 0.6);
            --text-color: #E2E8F0;
            --subtext-color: #94A3B8;
            --accent-violet: #8B5CF6;
            --accent-blue: #60A5FA;
            --border-color: rgba(255, 255, 255, 0.08);
            --body-color: #ffff;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            line-height: 1.6;
        }

        #bg-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.8;
        }

        h1,
        h2,
        h3,
        h4 {
            font-weight: 800;
            line-height: 1.2;
        }

        .text-gradient {
            background-image: linear-gradient(90deg, var(--body-color), var(--accent-blue));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        section {
            padding: 6rem 0;
            scroll-margin-top: 5rem;
        }

        .glass-card {
            background: var(--card-color);
            backdrop-filter: blur(14px) saturate(150%);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            transition: all 0.3s ease;
        }

        .glass-card:hover {
            border-color: rgba(139, 92, 246, 0.5);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .reveal {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
        }

        .profile-img-container {
            position: relative;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid transparent;
            background: linear-gradient(45deg, var(--accent-violet), var(--accent-blue)) border-box;
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
            transition: all 0.3s ease;
        }

        .profile-img-container:hover {
            transform: scale(1.05);
            box-shadow: 0 0 45px rgba(99, 102, 241, 0.4);
        }

        .skill-item {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(51, 65, 85, 0.7);
            border-radius: 9999px;
            font-size: 0.875rem;
            color: #CBD5E1;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.2s ease;
        }

        .skill-item:hover {
            background: rgba(71, 85, 105, 0.9);
            transform: translateY(-3px);
        }

        .project-card {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .project-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 1rem;
            padding: 1px;
            background: linear-gradient(45deg, var(--accent-violet), var(--accent-blue));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .project-card:hover::before {
            opacity: 1;
        }

        .nav-link {
            position: relative;
            padding: 0.5rem 1rem;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--accent-violet);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        .nav-link:hover::after {
            width: 70%;
        }

        .share-container {
            position: relative;
            display: inline-block;
            margin-left: 1rem;
        }

        .share-button {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent-violet), var(--accent-blue));
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 20;
            position: relative;
        }

        .share-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .social-icons {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 10;
        }

        .social-icons.active {
            opacity: 1;
            visibility: visible;
        }

        .social-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.9rem;
            text-decoration: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            opacity: 0;
        }

        .social-icons.active .social-icon {
            opacity: 1;
        }

        .social-icons.active .social-icon.github {
            transform: translate(32px, 10px);
        }

        .social-icons.active .social-icon.linkedin {
            transform: translate(50px, -10px);
        }

        .social-icons.active .social-icon.instagram {
            transform: translate(50px, -40px);
        }

        .social-icons.active .social-icon.tiktok {
            transform: translate(30px, -60px);
        }


        .social-icon:hover {
            transform: translateY(-5px);
        }

        .social-icon.github {
            background-color: #333;
        }

        .social-icon.linkedin {
            background-color: #0077b5;
        }

        .social-icon.instagram {
            background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
        }

        .social-icon.tiktok {
            background-color: #000;
        }

        /* Mobile Dropdown Styling */
        .mobile-dropdown {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-out;
            padding-left: 1rem;
        }

        .mobile-dropdown.active {
            max-height: 300px;
        }

        .mobile-dropdown a {
            display: block;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            color: var(--subtext-color);
            transition: all 0.2s ease;
        }

        .mobile-dropdown a:hover {
            color: var(--accent-violet);
            padding-left: 1.5rem;
        }

        .dropdown-toggle {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 0.5rem 0.75rem;
            gap: 0.25rem;
        }

        .dropdown-toggle i {
            font-size: 0.625rem;
        }

        /* .dropdown-toggle span {
            flex: 1;
            text-align: left;
            font-size: 1rem;

        } */

        /* Tambahkan di file CSS Anda */
        .rotate-180 {
            transform: rotate(180deg);
        }

        .transition-transform {
            transition: transform 0.2s ease-in-out;
        }

        #mobile-dropdown-content {
            transition: all 0.3s ease;
            max-height: 0;
            overflow: hidden;
        }

        #mobile-dropdown-content:not(.hidden) {
            max-height: 500px;
            /* Sesuaikan dengan kebutuhan */
        }

        #mobile-menu-button {
            position: relative;
            z-index: 1000;
            /* Pastikan lebih tinggi dari elemen lain */
        }

        #mobile-menu {
            z-index: 999;
            /* Lebih rendah dari tombol tapi lebih tinggi dari konten */
        }

        .dropdown-toggle.active i {
            transform: rotate(180deg);
        }

        /* Responsivitas */
        @media (max-width: 640px) {
            .dropdown-toggle {
                padding: 0.5rem 0.75rem;
            }

            .dropdown-toggle span {
                font-size: 1rem;
            }

            .dropdown-toggle i {
                font-size: 0.625rem;
            }

            .mobile-dropdown a {
                font-size: 0.875rem;
                padding: 0.5rem 0.75rem;
            }

            #mobile-menu {
                padding: 1rem;
            }
        }

        .glass-card {
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.75rem;
            /* rounded-xl */
            color: white;
            /* Ensure text is visible on dark glass */
        }

        /* Basic reveal animation for projects within the "All Projects" page */
        .project-card-animated {
            opacity: 0;
            transform: translateX(50px);
            /* Start slightly off to the right */
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .project-card-animated.is-visible {
            opacity: 1;
            transform: translateX(0);
        }

        .overflow-y-auto::-webkit-scrollbar {
            display: none;
        }

        .skip-link {
            position: absolute;
            top: -100px;
            /* Sembunyikan di luar viewport */
            left: 0;
            background: var(--accent-violet);
            /* Warna sesuai tema */
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0 0 4px 0;
            z-index: 9999;
            transition: transform 0.3s ease;
        }

        .skip-link:focus {
            transform: translateY(100px);
            /* Munculkan saat difokus */
            outline: 2px solid white;
            outline-offset: 2px;
        }

        .prose-invert {
            color: #e2e8f0;
        }

        .prose-invert h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }

        .prose-invert p {
            margin-bottom: 1rem;
            line-height: 1.6;
        }

        .prose-invert ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
        }

        .prose-invert img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 1rem 0;
        }
    </style>
</head>

<body class="antialiased">
    <canvas id="bg-canvas" aria-hidden="true"></canvas>

    <a href="#main-content" class="skip-link">Skip to main content</a>

    <header class="fixed w-full top-0 left-0 z-50 py-4">
        <div class="container">
            <div class="glass-card px-6 py-3 rounded-full">
                <div class="flex justify-between items-center">
                    <a href="home#home"
                        class="text-2xl font-extrabold text-white tracking-wider hover:text-accent-violet transition-colors">CP</a>

                    <nav class="hidden md:flex items-center gap-6">
                        <!-- Home with Dropdown -->
                        <div class="relative group">
                            <button
                                class="nav-link text-sm font-medium text-slate-300 hover:text-violet-400 flex items-center gap-1">
                                Home
                                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                class="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <a href="home#about"
                                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">About</a>
                                <a href="home#skills"
                                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Skills</a>
                                <a href="home#projects"
                                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Projects</a>
                                <a href="home#experience"
                                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Experience</a>
                                <a href="home#education"
                                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Education</a>
                                <a href="home#activities"
                                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Activities</a>
                            </div>
                        </div>

                        <!-- Other Links -->
                        <a href="articles"
                            class="nav-link text-sm font-medium text-slate-300 hover:text-violet-400">Articles</a>
                        <a href="contact"
                            class="nav-link text-sm font-medium text-slate-300 hover:text-violet-400">Contact</a>
                    </nav>

                    <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none"
                        aria-label="Toggle menu" aria-expanded="false">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu"
            class="hidden md:hidden fixed inset-0 bg-slate-900 bg-opacity-95 z-40 flex flex-col items-center justify-center transition-opacity duration-300">
            <nav class="flex flex-col items-start gap-4 text-xl font-medium w-full px-6">
                <div class="w-full">
                    <button
                        class="dropdown-toggle flex items-center justify-between w-full px-4 py-3 text-white hover:text-violet-400 transition-colors text-lg md:text-xl"
                        id="mobile-home-dropdown" aria-expanded="false">
                        <span class="text-xl font-medium">Home</span>
                        <i class="fas fa-chevron-down ml-2 text-sm transition-transform"></i>
                    </button>

                    <div class="mobile-dropdown mt-2 pl-6 hidden" id="mobile-dropdown-content">
                        <a href="/home#about" class="block py-2 text-white/80 hover:text-violet-400 text-base">About</a>
                        <a href="/home#skills"
                            class="block py-2 text-white/80 hover:text-violet-400 text-base">Skills</a>
                        <a href="/home#projects"
                            class="block py-2 text-white/80 hover:text-violet-400 text-base">Projects</a>
                        <a href="home#experience"
                            class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Experience</a>
                        <a href="home#education"
                            class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-violet-400">Education</a>
                        <a href="/home#activities"
                            class="block py-2 text-white/80 hover:text-violet-400 text-base">Activities</a>
                    </div>
                </div>
                <a href="articles"
                    class="block px-4 py-2 text-white hover:text-violet-400 transition-colors w-full">Articles</a>
                <a href="contact"
                    class="block px-4 py-2 text-white hover:text-violet-400 transition-colors w-full">Contact</a>
            </nav>
            <button id="mobile-menu-close" class="absolute top-8 right-8 text-white text-3xl"
                aria-label="Close menu">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </header>
