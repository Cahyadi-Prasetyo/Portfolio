<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .sidebar-item.active {
            background-color: #f1f5f9;
            border-left: 4px solid #0ea5e9;
        }

        .sidebar-item.active .sidebar-icon {
            color: #0ea5e9;
        }

        .sidebar-item:hover:not(.active) {
            background-color: #f8fafc;
        }

        .dropdown-enter-active,
        .dropdown-leave-active {
            transition: all 0.2s ease;
        }

        .dropdown-enter-from,
        .dropdown-leave-to {
            opacity: 0;
            transform: translateY(-10px);
        }
    </style>
</head>

<body class="bg-gray-50 font-sans leading-normal tracking-normal flex flex-col min-h-screen">
    <div class="flex flex-1">
        <div class="flex flex-col md:flex-row">
            <!-- Sidebar -->
            <div
                class="sidebar bg-white text-gray-700 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out shadow-md z-20">
                <!-- Brand -->
                <a href="index" class="flex items-center space-x-2 px-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span class="text-2xl font-extrabold text-primary-600">Admin</span>
                </a>

                <!-- Nav Items -->
                <nav>
                    <a href="index"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-tachometer-alt w-6 text-center"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="project"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.projects.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-project-diagram w-6 text-center"></i>
                        <span>Kelola Project</span>
                    </a>
                    <a href="skills"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.skills.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-code w-6 text-center"></i>
                        <span>Skill</span>
                    </a>
                    <a href="experience"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.experience.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-briefcase w-6 text-center"></i>
                        <span>Experience</span>
                    </a>
                    <a href="education"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.education.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-graduation-cap w-6 text-center"></i>
                        <span>Education</span>
                    </a>
                    <a href="article"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.articles.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-newspaper w-6 text-center"></i>
                        <span>Article</span>
                    </a>
                    </a>
                    <a href="activity"
                        class="sidebar-item flex items-center space-x-2 py-3 px-4 transition duration-200 {{ request()->routeIs('admin.activities.index') ? 'active' : '' }}">
                        <i class="sidebar-icon fas fa-tasks w-6 text-center"></i>
                        <span>Activities</span>
                    </a>
                </nav>
            </div>
        </div>
