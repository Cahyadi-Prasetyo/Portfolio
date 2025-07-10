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
                    <h3 class="text-lg font-semibold text-gray-800">Articles Management</h3>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                        <div class="relative w-full md:w-64">
                            <input type="text" placeholder="Search articles..."
                                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <div class="absolute left-3 top-2.5 text-gray-400">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <button onclick="openAddModal()"
                            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center">
                            <i class="fas fa-plus mr-2"></i> Add Article
                        </button>
                    </div>
                </div>
            </div>

            <!-- Table Content -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Publish Date
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @forelse ($articles as $article)
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $article->id }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $article->title }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    @if($article->image)
                                        <img src="{{ asset('storage/'.$article->image) }}" alt="{{ $article->title }}" class="h-10 w-10 rounded-full object-cover">
                                    @else
                                        <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                            <i class="fas fa-image text-gray-400"></i>
                                        </div>
                                    @endif
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {{ $article->date->format('d-m-y') }} at {{ $article->publish_time }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex justify-end space-x-3">
                                        <button
                                            onclick="openEditModal({{ $article->id }}, '{{ addslashes($article->title) }}', '{{ $article->date->format('Y-m-d') }}', '{{ $article->publish_time }}', `{{ addslashes($article->short_description) }}`, `{{ addslashes($article->long_description) }}`)"
                                            class="text-blue-600 hover:text-blue-900" title="Edit">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <form action="{{ route('admin.articles.destroy', $article->id) }}" method="POST"
                                            class="inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-600 hover:text-red-900"
                                                title="Delete"
                                                onclick="return confirm('Are you sure you want to delete this article?')">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">
                                    No articles found. <button onclick="openAddModal()"
                                        class="text-primary-600 hover:underline">Add your first article</button>
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
                        Showing <span class="font-medium">{{ $articles->firstItem() }}</span> to <span
                            class="font-medium">{{ $articles->lastItem() }}</span> of <span
                            class="font-medium">{{ $articles->total() }}</span> articles
                    </div>
                    <div class="inline-flex mt-2 md:mt-0">
                        {{ $articles->links('vendor.pagination.tailwind') }}
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<!-- Add/Edit Article Modal -->
<div id="articleModal" class="fixed inset-0 z-50 hidden overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <form id="articleForm" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="hidden" id="methodInput" name="_method" value="POST">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modalTitle">Add New Article</h3>
                    <div class="space-y-4">
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                            <input type="text" name="title" id="title" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        
                        <div>
                            <label for="image" class="block text-sm font-medium text-gray-700">Featured Image</label>
                            <input type="file" name="image" id="image"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                            <div id="imagePreview" class="mt-2 hidden">
                                <img id="previewImage" src="" alt="Preview" class="h-32 object-cover rounded">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="date" class="block text-sm font-medium text-gray-700">Publish Date</label>
                                <input type="date" name="date" id="date" required
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                            </div>
                            <div>
                                <label for="publish_time" class="block text-sm font-medium text-gray-700">Publish Time</label>
                                <input type="time" name="publish_time" id="publish_time" required
                                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                            </div>
                        </div>
                        
                        <div>
                            <label for="short_description" class="block text-sm font-medium text-gray-700">Short Description</label>
                            <textarea name="short_description" id="short_description" rows="3" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
                        </div>
                        
                        <div>
                            <label for="long_description" class="block text-sm font-medium text-gray-700">Content</label>
                            <textarea name="long_description" id="long_description" rows="6" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
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
        document.getElementById('modalTitle').textContent = 'Add New Article';
        document.getElementById('articleForm').action = "{{ route('admin.articles.store') }}";
        document.getElementById('methodInput').value = 'POST';
        document.getElementById('title').value = '';
        document.getElementById('date').value = '';
        document.getElementById('publish_time').value = '';
        document.getElementById('short_description').value = '';
        document.getElementById('long_description').value = '';
        document.getElementById('imagePreview').classList.add('hidden');
        document.getElementById('articleModal').classList.remove('hidden');
    }

    function openEditModal(id, title, date, time, shortDesc, longDesc) {
        document.getElementById('modalTitle').textContent = 'Edit Article';
        document.getElementById('articleForm').action = `/admin/articles/${id}`;
        document.getElementById('methodInput').value = 'PUT';
        document.getElementById('title').value = title;
        document.getElementById('date').value = date;
        document.getElementById('publish_time').value = time;
        document.getElementById('short_description').value = shortDesc;
        document.getElementById('long_description').value = longDesc;
        document.getElementById('imagePreview').classList.add('hidden');
        document.getElementById('articleModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('articleModal').classList.add('hidden');
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
</script>

@include('admin.partials.footer')
