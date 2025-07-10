@include('admin.partials.sidebar')
<div class="flex-1">
    @include('admin.partials.navbar')
    <main class="p-6">
        <!-- Toast Notification -->
        <div class="fixed bottom-4 right-4 z-50 space-y-4" x-data="{ toasts: [] }" x-init="@if (session('toast')) toasts.push({
                type: '{{ session('toast.type') }}',
                message: '{{ session('toast.message') }}',
                icon: '{{ session('toast.icon') }}',
                id: Date.now()
            }); @endif">
            <template x-for="toast in toasts" :key="toast.id">
                <div x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
                    x-transition:leave="transition ease-in duration-200"
                    x-transition:leave-start="opacity-100 translate-y-0"
                    x-transition:leave-end="opacity-0 translate-y-2"
                    class="relative w-full max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    x-show="toast" x-init="setTimeout(() => { toasts = toasts.filter(t => t.id !== toast.id) }, 5000)">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 text-2xl" x-html="toast.icon"></div>
                            <div class="ml-3 flex-1 pt-0.5">
                                <p x-text="toast.message" class="text-sm font-medium text-gray-900"></p>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button @click="toasts = toasts.filter(t => t.id !== toast.id)"
                                    class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none">
                                    <span class="sr-only">Close</span>
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                        <div class="h-full bg-green-500"
                            x-bind:class="{
                                'bg-green-500': toast.type === 'success',
                                'bg-red-500': toast.type === 'error',
                                'bg-yellow-500': toast.type === 'warning'
                            }"
                            x-init="setTimeout(() => {
                                this.style.width = '0%';
                                setTimeout(() => { toasts = toasts.filter(t => t.id !== toast.id) }, 300);
                            }, 100)" style="width: 100%; transition: width 4.7s linear;"></div>
                    </div>
                </div>
            </template>
        </div>

        <div class="bg-white rounded-lg shadow overflow-hidden">
            <!-- Form Header -->
            <div class="p-4 border-b border-gray-200">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-gray-800">Profile Management</h3>
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-500">Last updated:
                            {{ auth()->user()->updated_at->format('d M Y H:i') }}</span>
                    </div>
                </div>
            </div>

            <!-- Profile Form -->
            <form method="POST" action="{{ route('admin.profile.update') }}" enctype="multipart/form-data"
                class="p-6">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Column 1: Basic Info & Image -->
                    <div class="lg:col-span-1 space-y-6">
                        <!-- Profile Image -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <label class="block text-sm font-medium text-gray-700 mb-3">Profile Image</label>
                            <div class="flex flex-col items-center">
                                <div class="relative mb-3">
                                    <img id="profileImagePreview"
                                        src="{{ auth()->user()->image_url ?: 'https://ui-avatars.com/api/?name=' . urlencode(auth()->user()->name) . '&background=random' }}"
                                        alt="Profile"
                                        class="h-40 w-40 rounded-full object-cover border-4 border-white shadow-lg">
                                    <i class="fas fa-camera text-white"></i>
                                    <input type="file" id="images" name="images" class="hidden" accept="image/*">
                                    </label>
                                </div>
                                <div class="text-center">
                                    <h4 class="text-lg font-semibold">{{ auth()->user()->name }}</h4>
                                    <p class="text-sm text-gray-600">{{ auth()->user()->email }}</p>
                                    @if (auth()->user()->email_verified_at)
                                        <span
                                            class="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                            <i class="fas fa-check-circle mr-1"></i> Verified
                                        </span>
                                    @else
                                        <span
                                            class="inline-block mt-1 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                            <i class="fas fa-exclamation-circle mr-1"></i> Not Verified
                                        </span>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <!-- Basic Information -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                <i class="fas fa-id-card mr-2 text-primary-500"></i> Basic Information
                            </h4>
                            <div class="space-y-4">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700">Full
                                        Name*</label>
                                    <input type="text" id="name" name="name"
                                        value="{{ old('name', auth()->user()->name) }}" required
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                </div>

                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
                                    <input type="email" id="email" name="email"
                                        value="{{ old('email', auth()->user()->email) }}" required
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                </div>
                            </div>
                        </div>
                        <!-- Professional Summary -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                <i class="fas fa-briefcase mr-2 text-primary-500"></i> Professional Summary
                            </h4>
                            <div class="space-y-4">
                                <div>
                                    <label for="approach"
                                        class="block text-sm font-medium text-gray-700">Approach</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <span
                                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            <i class="fas fa-bullseye"></i>
                                        </span>
                                        <input type="text" id="approach" name="approach"
                                            value="{{ old('approach', auth()->user()->approach) }}"
                                            class="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm py-2 px-3"
                                            placeholder="Client-focused, Results-driven, Strategic">
                                    </div>
                                    <p class="mt-1 text-xs text-gray-500">Separate approaches with commas</p>
                                </div>

                                <div>
                                    <label for="values" class="block text-sm font-medium text-gray-700">Core
                                        Values</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <span
                                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                            <i class="fas fa-lightbulb"></i>
                                        </span>
                                        <input type="text" id="values" name="values"
                                            value="{{ old('values', auth()->user()->values) }}"
                                            class="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm py-2 px-3"
                                            placeholder="Innovation, Integrity, Excellence">
                                    </div>
                                    <p class="mt-1 text-xs text-gray-500">Separate values with commas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Column 2: Bio & Description -->
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Bio Sections -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Primary Bio -->
                            <div class="border border-gray-200 rounded-lg p-4">
                                <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                    <i class="fas fa-user-edit mr-2 text-primary-500"></i> Primary Bio*
                                </h4>
                                <div>
                                    <label for="bio_1" class="sr-only">Primary Bio</label>
                                    <textarea id="bio_1" name="bio_1" rows="6" required
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                        placeholder="Your main bio description (appears in header)">{{ old('bio_1', auth()->user()->bio_1) }}</textarea>
                                </div>
                            </div>

                            <!-- Secondary Bio -->
                            <div class="border border-gray-200 rounded-lg p-4">
                                <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                    <i class="fas fa-user-tag mr-2 text-primary-500"></i> Secondary Bio
                                </h4>
                                <div>
                                    <label for="bio_2" class="sr-only">Secondary Bio</label>
                                    <textarea id="bio_2" name="bio_2" rows="6"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                        placeholder="Additional bio information (optional)">{{ old('bio_2', auth()->user()->bio_2) }}</textarea>
                                </div>
                            </div>
                        </div>

                        <!-- Full Description -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                <i class="fas fa-align-left mr-2 text-primary-500"></i> Detailed Description
                            </h4>
                            <div>
                                <label for="description" class="sr-only">Detailed Description</label>
                                <textarea id="description" name="description" rows="8"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    placeholder="Your full professional description">{{ old('description', auth()->user()->description) }}</textarea>
                            </div>
                        </div>

                        <!-- Security Section -->
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center">
                                <i class="fas fa-shield-alt mr-2 text-primary-500"></i> Security Settings
                            </h4>
                            <div class="space-y-4">
                                <!-- Password Update -->
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <h5 class="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                        Change Password</h5>
                                    <div class="space-y-3">
                                        <div>
                                            <label for="current_password"
                                                class="block text-sm font-medium text-gray-700">Current
                                                Password</label>
                                            <div class="mt-1 relative rounded-md shadow-sm">
                                                <input type="password" id="current_password" name="current_password"
                                                    class="block w-full pr-10 border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md py-2 px-3"
                                                    placeholder="Enter current password">
                                                <div
                                                    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <i class="fas fa-lock text-gray-400"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label for="new_password"
                                                class="block text-sm font-medium text-gray-700">New Password</label>
                                            <div class="mt-1 relative rounded-md shadow-sm">
                                                <input type="password" id="new_password" name="new_password"
                                                    class="block w-full pr-10 border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md py-2 px-3"
                                                    placeholder="Enter new password">
                                                <div
                                                    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <i class="fas fa-key text-gray-400"></i>
                                                </div>
                                            </div>
                                            <p class="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
                                        </div>

                                        <div>
                                            <label for="new_password_confirmation"
                                                class="block text-sm font-medium text-gray-700">Confirm New
                                                Password</label>
                                            <div class="mt-1 relative rounded-md shadow-sm">
                                                <input type="password" id="new_password_confirmation"
                                                    name="new_password_confirmation"
                                                    class="block w-full pr-10 border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md py-2 px-3"
                                                    placeholder="Confirm new password">
                                                <div
                                                    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <i class="fas fa-redo text-gray-400"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Actions -->
                <div class="mt-6 flex justify-between items-center border-t border-gray-200 pt-4">
                    <div class="text-sm text-gray-500">
                        Last updated: {{ auth()->user()->updated_at->diffForHumans() }}
                    </div>
                    <div class="flex space-x-3">
                        <button type="button" onclick="window.location.reload()"
                            class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                            Cancel
                        </button>
                        <button type="submit"
                            class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</div>

<script>
    // Profile image preview
    document.getElementById('images').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('profileImagePreview').src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // Auto-format approach input
    document.getElementById('approach').addEventListener('blur', function() {
        this.value = this.value.split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0)
            .join(', ');
    });

    // Auto-format values input
    document.getElementById('values').addEventListener('blur', function() {
        this.value = this.value.split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0)
            .join(', ');
    });
</script>

@include('admin.partials.footer')
