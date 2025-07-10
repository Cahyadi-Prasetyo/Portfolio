@include('admin.partials.sidebar')
<!-- Main Content -->
<div class="flex-1">
    <!-- Navbar -->
    @include('admin.partials.navbar')

    <!-- Content -->
    <main class="p-6">
        <!-- Dashboard Content -->
        <div id="dashboardContent">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <!-- Article Card -->
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Total Articles</p>
                            <h3 class="text-2xl font-bold text-gray-800">{{ $articleCount }}</h3>
                        </div>
                        <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                            <i class="fas fa-newspaper"></i>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="{{ route('admin.articles.index') }}" class="text-sm text-blue-600 hover:underline">View all articles</a>
                    </div>
                </div>

                <!-- Project Card -->
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Total Projects</p>
                            <h3 class="text-2xl font-bold text-gray-800">{{ $projectCount }}</h3>
                        </div>
                        <div class="p-3 rounded-full bg-green-100 text-green-600">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="{{ route('admin.projects.index') }}" class="text-sm text-green-600 hover:underline">View all projects</a>
                    </div>
                </div>

                <!-- Skill Card -->
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Total Skills</p>
                            <h3 class="text-2xl font-bold text-gray-800">{{ $skillCount }}</h3>
                        </div>
                        <div class="p-3 rounded-full bg-purple-100 text-purple-600">
                            <i class="fas fa-code"></i>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="{{ route('admin.skills.index') }}" class="text-sm text-purple-600 hover:underline">View all skills</a>
                    </div>
                </div>

                <!-- Experience Card -->
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Total Experiences</p>
                            <h3 class="text-2xl font-bold text-gray-800">{{ $experienceCount }}</h3>
                        </div>
                        <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                            <i class="fas fa-briefcase"></i>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="{{ route('admin.experience.index') }}" class="text-sm text-yellow-600 hover:underline">View all experiences</a>
                    </div>
                </div>

                <!-- Education Card -->
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Total Education</p>
                            <h3 class="text-2xl font-bold text-gray-800">{{ $educationCount }}</h3>
                        </div>
                        <div class="p-3 rounded-full bg-red-100 text-red-600">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="{{ route('admin.education.index') }}" class="text-sm text-red-600 hover:underline">View all education</a>
                    </div>
                </div>

                <!-- Activity Card -->
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Total Activities</p>
                            <h3 class="text-2xl font-bold text-gray-800">{{ $activityCount }}</h3>
                        </div>
                        <div class="p-3 rounded-full bg-indigo-100 text-indigo-600">
                            <i class="fas fa-history"></i>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="{{ route('admin.activities.index') }}" class="text-sm text-indigo-600 hover:underline">View all activities</a>
                    </div>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white rounded-lg shadow p-6 mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold text-gray-800">Recent Activities</h2>
                    <a href="{{ route('admin.activities.index') }}" class="text-sm text-primary-600 hover:underline">View All</a>
                </div>
                <div class="space-y-4">
                    @forelse($recentActivities as $activity)
                    <div class="flex items-start">
                        <div class="p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                            <i class="{{ $activity->icon }}"></i>
                        </div>
                        <div>
                            <p class="text-gray-800">{{ $activity->title }}</p>
                            <p class="text-sm text-gray-500">
                                {{ $activity->date->format('M d, Y') }} • 
                                <span class="capitalize">{{ $activity->type_activity }}</span>
                            </p>
                        </div>
                    </div>
                    @empty
                    <div class="text-center text-gray-500 py-4">
                        No recent activities found
                    </div>
                    @endforelse
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <a href="{{ route('admin.projects.create') }}"
                        class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                        <div class="p-3 rounded-full bg-green-100 text-green-600 mb-2">
                            <i class="fas fa-plus"></i>
                        </div>
                        <span class="text-sm text-gray-700">Add Project</span>
                    </a>
                    <a href="{{ route('admin.articles.create') }}"
                        class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                        <div class="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
                            <i class="fas fa-pen"></i>
                        </div>
                        <span class="text-sm text-gray-700">Write Article</span>
                    </a>
                    <a href="{{ route('admin.skills.index') }}"
                        class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                        <div class="p-3 rounded-full bg-purple-100 text-purple-600 mb-2">
                            <i class="fas fa-cog"></i>
                        </div>
                        <span class="text-sm text-gray-700">Manage Skills</span>
                    </a>
                    <a href="{{ route('admin.experience.create') }}"
                        class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-200">
                        <div class="p-3 rounded-full bg-yellow-100 text-yellow-600 mb-2">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <span class="text-sm text-gray-700">Add Experience</span>
                    </a>
                </div>
            </div>
        </div>
    </main>
</div>
@include('admin.partials.footer')

