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
                <div x-data="{ show: true }" x-init="setTimeout(() => show = false, 5000);
                setTimeout(() => toasts = toasts.filter(t => t.id !== toast.id), 5300)" x-show="show"
                    x-transition:enter="transform ease-out duration-300 transition"
                    x-transition:enter-start="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    x-transition:enter-end="translate-y-0 opacity-100 sm:translate-x-0"
                    x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0"
                    class="max-w-sm w-full bg-white shadow-2xl rounded-xl pointer-events-auto overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="text-2xl"
                                x-bind:class="{
                                    'text-green-500': toast.type === 'success',
                                    'text-red-500': toast.type === 'error',
                                    'text-yellow-500': toast.type === 'warning'
                                }">
                                <i :class="toast.icon"></i>
                            </div>
                            <div class="flex-1">
                                <p x-text="toast.message" class="text-base font-semibold text-gray-900"></p>
                            </div>
                            <div>
                                <button @click="show = false" class="text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-times text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div :class="{
                        'bg-green-500': toast.type === 'success',
                        'bg-red-500': toast.type === 'error',
                        'bg-yellow-500': toast.type === 'warning'
                    }"
                        class="h-1 w-full transition-all duration-[4900ms] ease-linear" x-init="setTimeout(() => $el.style.width = '0%', 50)">
                    </div>
                </div>
            </template>
        </div>

        <div class="bg-white rounded-lg shadow overflow-hidden">
            <!-- Table Header with Search and Add Button -->
            <div class="p-4 border-b border-gray-200">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                    <h3 class="text-lg font-semibold text-gray-800">Projects Management</h3>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                        <div class="relative w-full md:w-64">
                            <input type="text" placeholder="Search projects..." id="searchInput"
                                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <div class="absolute left-3 top-2.5 text-gray-400">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <button onclick="openAddModal()"
                            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center">
                            <i class="fas fa-plus mr-2"></i> Add Project
                        </button>
                    </div>
                </div>
            </div>

            <!-- Table Content -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Skills
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Links
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @forelse ($projects as $project)
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $project->id }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $project->title }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div class="flex flex-wrap gap-1">
                                        @foreach($project->skills as $skill)
                                            <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                                                {{ $skill }}
                                            </span>
                                        @endforeach
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    @if($project->image_path)
                                        <img src="{{ asset('storage/'.$project->image_path) }}" alt="{{ $project->title }}" class="h-10 w-10 rounded-full object-cover">
                                    @else
                                        <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                            <i class="fas fa-image text-gray-400"></i>
                                        </div>
                                    @endif
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div class="flex space-x-3">
                                        @if($project->demo_link)
                                            <a href="{{ $project->demo_link }}" target="_blank" class="text-blue-600 hover:text-blue-800" title="Demo">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                        @endif
                                        @if($project->github_link)
                                            <a href="{{ $project->github_link }}" target="_blank" class="text-gray-700 hover:text-gray-900" title="GitHub">
                                                <i class="fab fa-github"></i>
                                            </a>
                                        @endif
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {{ $project->project_date->format('M d, Y') }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex justify-end space-x-3">
                                        <button
                                            onclick="openEditModal({{ $project->id }}, '{{ addslashes($project->title) }}', `{{ addslashes($project->short_description) }}`, `{{ addslashes($project->description) }}`, '{{ $project->image_path }}', '{{ $project->icon }}', `{{ implode(', ', $project->skills) }}`, '{{ $project->demo_link }}', '{{ $project->github_link }}', {{ $project->is_featured ? 'true' : 'false' }}, '{{ $project->project_date->format('Y-m-d') }}')"
                                            class="text-blue-600 hover:text-blue-900" title="Edit">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <form action="{{ route('admin.projects.destroy', $project->id) }}" method="POST" class="inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-600 hover:text-red-900" title="Delete"
                                                onclick="return confirm('Are you sure you want to delete this project?')">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-6 py-4 text-center text-sm text-gray-500">
                                    No projects found. <button onclick="openAddModal()"
                                        class="text-primary-600 hover:underline">Add your first project</button>
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <!-- Table Footer with Pagination -->
            <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="text-sm text-gray-500 mb-2 md:mb-0">
                        Showing <span class="font-medium">{{ $projects->firstItem() }}</span> to <span
                            class="font-medium">{{ $projects->lastItem() }}</span> of <span
                            class="font-medium">{{ $projects->total() }}</span> projects
                    </div>
                    <div class="inline-flex mt-2 md:mt-0">
                        {{ $projects->links('vendor.pagination.tailwind') }}
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<!-- Add/Edit Project Modal -->
<div id="projectModal" class="fixed inset-0 z-50 hidden overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <form id="projectForm" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="hidden" id="methodInput" name="_method" value="POST">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modalTitle">Add New Project</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div>
                                <label for="title" class="block text-sm font-medium text-gray-700">Title*</label>
                                <input type="text" name="title" id="title" required
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                            </div>
                            
                            <div>
                                <label for="short_description" class="block text-sm font-medium text-gray-700">Short Description*</label>
                                <textarea name="short_description" id="short_description" rows="3" required
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
                            </div>
                            
                            <div>
                                <label for="description" class="block text-sm font-medium text-gray-700">Full Description</label>
                                <textarea name="description" id="description" rows="5"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <div>
                                <label for="image" class="block text-sm font-medium text-gray-700">Project Image</label>
                                <input type="file" name="image_path" id="image"
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                <div id="imagePreview" class="mt-2 hidden">
                                    <img id="previewImage" src="" alt="Preview" class="h-32 w-full object-cover rounded">
                                </div>
                            </div>
                            
                            <div>
                                <label for="skills" class="block text-sm font-medium text-gray-700">Skills</label>
                                <input type="text" name="skills" id="skills" 
                                       class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                       placeholder="PHP, Laravel, JavaScript (separate with commas)">
                                <p class="mt-1 text-xs text-gray-500">Separate multiple skills with commas</p>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label for="demo_link" class="block text-sm font-medium text-gray-700">Demo Link</label>
                                    <input type="url" name="demo_link" id="demo_link"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                </div>
                                <div>
                                    <label for="github_link" class="block text-sm font-medium text-gray-700">GitHub Link</label>
                                    <input type="url" name="github_link" id="github_link"
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label for="project_date" class="block text-sm font-medium text-gray-700">Project Date*</label>
                                    <input type="date" name="project_date" id="project_date" required
                                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                                </div>
                                <div class="flex items-center">
                                    <input type="checkbox" name="is_featured" id="is_featured" value="1"
                                        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded">
                                    <label for="is_featured" class="ml-2 block text-sm text-gray-700">
                                        Featured Project
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="submit"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Save
                    </button>
                    <button type="button" onclick="closeModal()"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    function openAddModal() {
        document.getElementById('modalTitle').textContent = 'Add New Project';
        document.getElementById('projectForm').action = "{{ route('admin.projects.store') }}";
        document.getElementById('methodInput').value = 'POST';
        document.getElementById('title').value = '';
        document.getElementById('short_description').value = '';
        document.getElementById('description').value = '';
        document.getElementById('skills').value = '';
        document.getElementById('demo_link').value = '';
        document.getElementById('github_link').value = '';
        document.getElementById('project_date').value = '';
        document.getElementById('is_featured').checked = false;
        document.getElementById('imagePreview').classList.add('hidden');
        document.getElementById('projectModal').classList.remove('hidden');
    }

    function openEditModal(id, title, shortDesc, description, imagePath, icon, skills, demoLink, githubLink, isFeatured, projectDate) {
        document.getElementById('modalTitle').textContent = 'Edit Project';
        document.getElementById('projectForm').action = `/admin/projects/${id}`;
        document.getElementById('methodInput').value = 'PUT';
        document.getElementById('title').value = title;
        document.getElementById('short_description').value = shortDesc;
        document.getElementById('description').value = description;
        document.getElementById('skills').value = skills;
        document.getElementById('demo_link').value = demoLink;
        document.getElementById('github_link').value = githubLink;
        document.getElementById('project_date').value = projectDate;
        document.getElementById('is_featured').checked = isFeatured;
        
        // Image preview
        if (imagePath) {
            document.getElementById('previewImage').src = `/storage/${imagePath}`;
            document.getElementById('imagePreview').classList.remove('hidden');
        } else {
            document.getElementById('imagePreview').classList.add('hidden');
        }
        
        document.getElementById('projectModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('projectModal').classList.add('hidden');
    }

    // Image preview
    document.getElementById('image').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('previewImage').src = event.target.result;
                document.getElementById('imagePreview').classList.remove('hidden');
            }
            reader.readAsDataURL(file);
        }
    });

    // Auto-format skills input
    document.getElementById('skills').addEventListener('blur', function() {
        this.value = this.value.split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)
            .join(', ');
    });
</script>

@include('admin.partials.footer')

