<header class="bg-white shadow-sm">
    <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-4">
            <!-- Mobile sidebar toggle (hidden on desktop) -->
            <button class="mobile-menu-button md:hidden text-gray-500 hover:text-gray-600 focus:outline-none">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <h1 class="text-xl font-semibold text-gray-800">
                @isset($title)
                    {{ $title }}
                @else
                    Profile
                @endisset
            </h1>
        </div>
        <div class="flex items-center space-x-4">

            <div class="relative" x-data="{ open: false }">
                <button @click="open = !open" class="flex items-center space-x-2 focus:outline-none">
                    <img class="h-8 w-8 rounded-full"
                        src="{{ auth()->user()->image_url ?: 'https://ui-avatars.com/api/?name=' . urlencode(auth()->user()->name) . '&background=random' }}"
                                        alt="Profile">
                    <span class="hidden md:inline text-gray-700"></span>
                    <i class="fas fa-chevron-down text-xs text-gray-500"></i>
                </button>

                <!-- Dropdown menu -->
                <div x-show="open" @click.away="open = false" x-transition:enter="dropdown-enter"
                    x-transition:enter-start="dropdown-enter-start" x-transition:enter-end="dropdown-enter-end"
                    x-transition:leave="dropdown-leave" x-transition:leave-start="dropdown-leave-start"
                    x-transition:leave-end="dropdown-leave-end"
                    class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div class="py-1">
                        <a href="profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <i class="fas fa-user mr-2"></i> Profil Saya
                        </a>
                        <div class="border-t border-gray-100"></div>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit"
                                class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                                <i class="fas fa-sign-out-alt mr-2"></i> Logout
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
