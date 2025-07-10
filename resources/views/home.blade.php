@include('partials.navbar')
<main class="pt-24" id="main-content">
    <section id="home" class="min-h-screen flex items-center justify-center">
        <div class="container text-center">
            <div class="reveal">
                <h1 class="text-5xl md:text-7xl font-bold mb-4 text-gradient">{{ $user->name }}</h1>
                <p class="text-xl md:text-2xl text-slate-300 mb-8">{{ $user->bio_1 }}
                </p>
                @if ($user->bio_2)
                    <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                        {{ $user->bio_2 }}
                    </p>
                @endif

                <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#projects"
                        class="px-6 py-3 rounded-full font-medium text-white border-2 border-white/20 hover:border-white/40 transition-all bg-gradient-to-r from-violet-600/10 to-blue-500/10 hover:from-violet-600/20 hover:to-blue-500/20 bg-transparent">
                        View Project
                    </a>

                    <div class="share-container">
                        <button class="share-button" id="shareBtn">
                            <i class="fas fa-share-alt"></i>
                        </button>
                        <div class="social-icons" id="socialIcons">
                            <a href="https://github.com/cahyadi240105" class="social-icon github" aria-label="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="social-icon linkedin" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="social-icon instagram" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="social-icon tiktok" aria-label="TikTok">
                                <i class="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="py-20">
        <div class="container">
            <h2 class="text-4xl font-bold text-center mb-16 reveal">About Me</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="flex justify-center reveal">
                    <div class="profile-img-container">
                        @if ($user->images)
                            <img src="{{ Storage::url($user->images) }}" alt="{{ $user->name }}"
                                class="w-full h-full object-cover">
                        @else
                            <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span class="text-4xl text-gray-500">{{ substr($user->name, 0, 1) }}</span>
                            </div>
                        @endif
                    </div>
                </div>
                <div class="reveal">
                    <h3 class="text-2xl font-bold mb-4">Halo, I'm {{ $user->name }}</h3>
                    <p class="text-slate text-justify leading-tight mb-4">
                        {{ $user->description }}
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-lg font-semibold mb-3 border-b border-slate-700 pb-2">My Values</h4>
                            <ul class="space-y-3 text-slate-300">
                                @if ($user->values)
                                    @foreach (explode(',', $user->values) as $value)
                                        <li class="flex items-start">
                                            <span
                                                class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                            <span>{{ trim($value) }}</span>
                                        </li>
                                    @endforeach
                                @endif
                            </ul>
                        </div>

                        <div>
                            <h4 class="text-lg font-semibold mb-3 border-b border-slate-700 pb-2">My Approach</h4>
                            <ul class="space-y-3 text-slate-300">
                                @if ($user->approach)
                                    @foreach (explode(',', $user->approach) as $approach)
                                        <li class="flex items-start">
                                            <span
                                                class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                            <span>{{ trim($approach) }}</span>
                                        </li>
                                    @endforeach
                                @endif
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="py-20 bg-slate-900/50">
        <div class="container">
            <h2 class="text-4xl font-bold text-center mb-16 text-white reveal">My Skills</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                @foreach ($skillsByCategory as $category => $categoryData)
                    <div class="glass-card p-6 reveal"
                        @if ($loop->index > 0) style="animation-delay: {{ $loop->index * 0.2 }}s" @endif>
                        <div class="flex items-center mb-6">
                            <div
                                class="w-12 h-12 rounded-lg {{ $categoryData['bg_color'] }} flex items-center justify-center mr-4">
                                <i class="{{ $categoryData['icon'] }} text-2xl {{ $categoryData['icon_color'] }}"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">{{ $categoryData['title'] }}</h3>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            @foreach ($categoryData['skills'] as $skill)
                                @php
                                    // Default color mapping
                                    $colorMap = [
                                        'javascript' => 'yellow',
                                        'js' => 'yellow',
                                        'php' => 'purple',
                                        'laravel' => 'red',
                                        'react' => 'blue',
                                        'vue' => 'green',
                                        'docker' => 'blue',
                                        'git' => 'orange',
                                        'python' => 'blue',
                                        'java' => 'red',
                                        'html' => 'orange',
                                        'css' => 'blue',
                                        'tailwindcss' => 'cyan',
                                        'mysql' => 'blue',
                                        'node' => 'green',
                                        'github' => 'white',
                                        'bootstrap' => 'purple',
                                        'c' => 'blue',
                                        'r' => 'blue',
                                        'python' => 'yellow',
                                        'figma' => 'purple',
                                    ];

                                    $skillKey = strtolower(preg_replace('/[^a-zA-Z]/', '', $skill->name));
                                    $color = $colorMap[$skillKey] ?? 'slate';
                                @endphp

                                <span
                                    class="px-4 py-2 rounded-full text-sm flex items-center bg-slate-800/80 border border-slate-700">
                                    <i class="{{ $skill->icon_class }} mr-2 text-{{ $color }}-400"></i>
                                    <span class="text-slate-100">{{ $skill->name }}</span>
                                </span>
                            @endforeach
                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </section>

    <section id="projects" class="py-20">
        <div class="container">
            <h2 class="text-4xl font-bold text-center mb-12">All Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                @foreach ($projects as $project)
                    <div
                        class="glass-card p-5 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                        <div class="h-40 bg-slate-800 rounded-md mb-4 overflow-hidden">
                            @if ($project->image_path)
                                <img src="{{ Storage::url($project->image_path) }}" alt="{{ $project->title }}"
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                            @else
                                <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <i class="fas fa-project-diagram text-4xl text-gray-400"></i>
                                </div>
                            @endif
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ $project->title }}</h3>
                        <p class="text-sm text-slate-300 mb-4 leading-relaxed">
                            {{ $project->short_description }}
                        </p>
                        
                        <div class="flex items-center space-x-4 mt-4 pt-3 border-t border-slate-700/50">
                            @if ($project->demo_link)
                                <a href="{{ $project->demo_link }}" target="_blank"
                                    class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                                    <span class="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <i class="fas fa-external-link-alt"></i>
                                    </span>
                                    Live Demo
                                </a>
                            @endif

                            @if ($project->github_link)
                                <a href="{{ $project->github_link }}" target="_blank"
                                    class="text-slate-400 hover:text-white text-sm flex items-center gap-1">
                                    <span class="w-5 h-5 rounded-full bg-slate-500/20 flex items-center justify-center">
                                        <i class="fab fa-github"></i>
                                    </span>
                                    Source Code
                                </a>
                            @endif
                        </div>

                    </div>
                    
                @endforeach
            </div>

        </div>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
                class="px-6 py-3 rounded-full font-medium text-white border-2 border-white/20 hover:border-white/40 transition-all bg-gradient-to-r from-violet-600/10 to-blue-500/10 hover:from-violet-600/20 hover:to-blue-500/20 bg-transparent">
                View Project
            </button>
        </div>
    </section>

    <div id="allProjectsModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 ease-out">
        <div class="bg-slate-800/80 border border-slate-700/50 rounded-xl w-full mx-4 transform scale-95 transition-all duration-300 ease-out flex flex-col"
            style="max-width: 90vw; max-height: 90vh;">
            <!-- Header -->
            <div
                class="flex justify-between items-center py-4 px-6 border-b border-slate-700/50 sticky top-0 bg-slate-800/80 z-10">
                <h3 class="text-2xl font-bold">All Projects</h3>
                <button onclick="closeModal('allProjectsModal')"
                    class="text-slate-400 hover:text-white transition-colors">
                    ✕
                </button>
            </div>

            <!-- Konten Utama dengan Scroll Halus -->
            <div class="px-6 pb-6 overflow-y-auto flex-1 custom-scroll">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    @foreach ($projects as $project)
                        <div
                            class="glass-card p-5 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                            <div class="h-40 bg-slate-800 rounded-md mb-4 overflow-hidden">
                                @if ($project->image_path)
                                    <img src="{{ Storage::url($project->image_path) }}" alt="{{ $project->title }}"
                                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                                @else
                                    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <i class="fas fa-project-diagram text-4xl text-gray-400"></i>
                                    </div>
                                @endif
                            </div>
                            <h3 class="text-xl font-bold mb-2">{{ $project->title }}</h3>
                            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
                                {{ $project->short_description }}
                            </p>

                            <div class="flex items-center space-x-4 mt-4 pt-3 border-t border-slate-700/50">
                                @if ($project->demo_link)
                                    <a href="{{ $project->demo_link }}" target="_blank"
                                        class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                                        <span
                                            class="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <i class="fas fa-external-link-alt"></i>
                                        </span>
                                        Live Demo
                                    </a>
                                @endif

                                @if ($project->github_link)
                                    <a href="{{ $project->github_link }}" target="_blank"
                                        class="text-slate-400 hover:text-white text-sm flex items-center gap-1">
                                        <span
                                            class="w-5 h-5 rounded-full bg-slate-500/20 flex items-center justify-center">
                                            <i class="fab fa-github"></i>
                                        </span>
                                        Source Code
                                    </a>
                                @endif
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Custom scroll indicator (opsional) -->
            <div class="h-1 bg-slate-700/50 rounded-b-xl">
                <div class="h-full bg-blue-500/30 rounded-b-xl" style="width: 30%" id="scrollIndicator"></div>
            </div>
        </div>
    </div>
    <!-- Tambahkan bagian ini setelah section projects -->
    <section class="py-20 bg-slate-900/50">
        <div class="container">
            <h2 class="text-4xl font-bold text-center mb-16">Experience & Education</h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Experience Column -->
                <div>
                    <div class="flex items-center mb-8">
                        <div class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                            <i class="fas fa-briefcase text-2xl text-purple-400"></i>
                        </div>
                        <h3 class="text-3xl font-bold">Work Experience</h3>
                    </div>

                    <div class="space-y-8">
                        @foreach ($experiences as $exp)
                            <div
                                class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-xl font-bold">{{ $exp->position }}</h4>
                                    <span class="px-3 py-1 bg-slate-800 rounded-full text-sm">
                                        {{ $exp->start_year }} - {{ $exp->end_year ?? 'Present' }}
                                    </span>
                                </div>
                                <p class="text-blue-400 mb-1">{{ $exp->company }}</p>
                                <p class="text-slate-300 mb-3">{{ $exp->employment_type }}</p>
                                <p class="text-slate-300">{{ $exp->responsibilities }}</p>
                            </div>
                        @endforeach
                    </div>
                </div>

                <!-- Education Column -->
                <div>
                    <div class="flex items-center mb-8">
                        <div class="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-4">
                            <i class="fas fa-graduation-cap text-2xl text-cyan-400"></i>
                        </div>
                        <h3 class="text-3xl font-bold">Education</h3>
                    </div>

                    <div class="space-y-8">
                        @foreach ($educations as $edu)
                            <div
                                class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-xl font-bold">{{ $edu->degree }}</h4>
                                    <span class="px-3 py-1 bg-slate-800 rounded-full text-sm">
                                        {{ $edu->start_year }} - {{ $edu->end_year ?? 'Present' }}
                                    </span>
                                </div>
                                <p class="text-blue-400 mb-1">{{ $edu->institution }}</p>
                                @if ($edu->field_of_study)
                                    <p class="text-slate-300 mb-3">{{ $edu->field_of_study }}</p>
                                @endif
                                <p class="text-slate-300">{{ $edu->achievements }}</p>
                                @if ($edu->score)
                                    <p class="text-slate-300 mt-2">GPA: {{ $edu->score }}</p>
                                @endif
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Tambahkan setelah section education-experience -->
    <section id="activities" class="py-20">
        <div class="container">
            <h2 class="text-4xl font-bold text-center mb-16">Activities</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                @foreach ($activities as $activity)
                    <div
                        class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all h-full">
                        <div class="flex items-center mb-4">
                            <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mr-3">
                                <i class="{{ $activity->icon }} text-lg text-green-400"></i>
                            </div>
                            <h3 class="text-xl font-bold">{{ $activity->title }}</h3>
                        </div>
                        <p class="text-slate-300 mb-4">{{ $activity->description }}</p>
                        <div class="flex items-center text-sm text-slate-400">
                            <i class="far fa-calendar-alt mr-2"></i>
                            <span>{{ $activity->date->format('F Y') }}</span>
                            <span class="mx-2">•</span>
                            <span class="capitalize">{{ $activity->type_activity }}</span>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!-- Tambahkan ini di bagian bawah sebelum penutup </body> -->
    <div id="activitiesModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 ease-out">
        <div class="bg-slate-800/80 border border-slate-700/50 rounded-xl w-full mx-4 transform scale-95 transition-all duration-300 ease-out flex flex-col"
            style="max-width: 90vw; max-height: 90vh;">
            <!-- Modal Header -->
            <div
                class="flex justify-between items-center py-4 px-6 border-b border-slate-700/50 sticky top-0 bg-slate-800/80 z-10">
                <h3 class="text-2xl font-bold">All Activities</h3>
                <button onclick="closeModal('activitiesModal')"
                    class="text-slate-400 hover:text-white transition-colors text-2xl">
                    &times;
                </button>
            </div>

            <!-- Modal Content -->
            <div class="px-6 pb-6 overflow-y-auto flex-1 custom-scroll">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <!-- Activity 1 -->
                    <div
                        class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mr-4">
                                <i class="fas fa-users text-xl text-green-400"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold">Komunitas Developer</h4>
                                <p class="text-slate-400 text-sm">2020 - Sekarang</p>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4">Memimpin komunitas developer lokal dengan 500+ anggota.
                            Menyelenggarakan:</p>
                        <ul class="space-y-2 text-slate-300 pl-5 list-disc">
                            <li>Workshop bulanan tentang teknologi terkini</li>
                            <li>Networking event setiap 3 bulan</li>
                            <li>Program mentorship untuk pemula</li>
                        </ul>
                    </div>

                    <!-- Activity 2 -->
                    <div
                        class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                                <i class="fas fa-code text-xl text-yellow-400"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold">Hackathon Nasional</h4>
                                <p class="text-slate-400 text-sm">Agustus 2021</p>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-2">Juara 1 Hackathon Nasional 2021</p>
                        <p class="text-slate-300 mb-4">Mengembangkan aplikasi "Smart Waste Management" berbasis AI
                            dengan fitur:</p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Computer Vision</span>
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">React Native</span>
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Node.js</span>
                        </div>
                        <a href="#" class="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                            <i class="fas fa-external-link-alt mr-2"></i> Lihat Proyek
                        </a>
                    </div>

                    <div
                        class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                                <i class="fas fa-code text-xl text-yellow-400"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold">Hackathon Nasional</h4>
                                <p class="text-slate-400 text-sm">Agustus 2021</p>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-2">Juara 1 Hackathon Nasional 2021</p>
                        <p class="text-slate-300 mb-4">Mengembangkan aplikasi "Smart Waste Management" berbasis AI
                            dengan fitur:</p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Computer Vision</span>
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">React Native</span>
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Node.js</span>
                        </div>
                        <a href="#" class="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                            <i class="fas fa-external-link-alt mr-2"></i> Lihat Proyek
                        </a>
                    </div>

                    <div
                        class="glass-card p-6 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mr-4">
                                <i class="fas fa-code text-xl text-yellow-400"></i>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold">Hackathon Nasional</h4>
                                <p class="text-slate-400 text-sm">Agustus 2021</p>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-2">Juara 1 Hackathon Nasional 2021</p>
                        <p class="text-slate-300 mb-4">Mengembangkan aplikasi "Smart Waste Management" berbasis AI
                            dengan fitur:</p>
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Computer Vision</span>
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">React Native</span>
                            <span class="px-3 py-1 bg-slate-800 rounded-full text-xs">Node.js</span>
                        </div>
                        <a href="#" class="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                            <i class="fas fa-external-link-alt mr-2"></i> Lihat Proyek
                        </a>
                    </div>

                </div>
            </div>

            <!-- Modal Footer -->
            <div class="h-2 bg-slate-900/50 relative">
                <div class="h-full bg-blue-500/30 absolute top-0 left-0 transition-all duration-300"
                    id="activitiesScrollIndicator"></div>
            </div>
        </div>
    </div>
</main>

@include('partials.footer')
<script>
    // Modal control functions
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modal.querySelector('.transform').classList.remove('scale-95');
        modal.querySelector('.transform').classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.querySelector('.transform').classList.remove('scale-100');
        modal.querySelector('.transform').classList.add('scale-95');
        document.body.style.overflow = 'auto';
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.id === 'allProjectsModal') {
            closeModal('allProjectsModal');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal('allProjectsModal');
        }
    });

    // Untuk custom scroll indicator (opsional)
    const scrollContainer = document.querySelector('#allProjectsModal .overflow-y-auto');
    const scrollIndicator = document.getElementById('scrollIndicator');

    if (scrollContainer && scrollIndicator) {
        scrollContainer.addEventListener('scroll', () => {
            const scrollPercentage = (scrollContainer.scrollTop / (scrollContainer.scrollHeight -
                scrollContainer.clientHeight)) * 100;
            scrollIndicator.style.width = `${scrollPercentage}%`;
        });
    }

    // Fungsi untuk membuka modal activities
    function openActivitiesModal() {
        const modal = document.getElementById('activitiesModal');
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modal.querySelector('.transform').classList.remove('scale-95');
        modal.querySelector('.transform').classList.add('scale-100');
        document.body.style.overflow = 'hidden';

        // Inisialisasi scroll indicator
        updateActivitiesScrollIndicator();
    }

    // Fungsi untuk update scroll indicator
    function updateActivitiesScrollIndicator() {
        const container = document.querySelector('#activitiesModal .custom-scroll');
        const indicator = document.getElementById('activitiesScrollIndicator');

        if (container && indicator) {
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = container;
            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            indicator.style.width = `${scrollPercentage}%`;
        }
    }

    // Event listener untuk scroll
    const activitiesScrollContainer = document.querySelector('#activitiesModal .custom-scroll');
    if (activitiesScrollContainer) {
        activitiesScrollContainer.addEventListener('scroll', updateActivitiesScrollIndicator);
    }

    // Update tombol "View All Activities" di section activities
    document.querySelector('#activities button').onclick = openActivitiesModal;

    // Smooth scroll untuk skip link
    document.querySelector('.skip-link').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById('main-content');

        if (target) {
            target.setAttribute('tabindex', '-1'); // Agar bisa difokus
            target.focus(); // Fokus ke main content (penting untuk aksesibilitas)

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
</script>
