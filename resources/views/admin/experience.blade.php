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
                    <h3 class="text-lg font-semibold text-gray-800">Experience Management</h3>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                        <div class="relative w-full md:w-64">
                            <input type="text" placeholder="Search experiences..."
                                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <div class="absolute left-3 top-2.5 text-gray-400">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <button onclick="openAddModal()"
                            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center">
                            <i class="fas fa-plus mr-2"></i> Add Experience
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
                                Position
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Period
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Employment Type
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Responsibility
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @forelse ($experiences as $experience)
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $experience->id }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $experience->position }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {{ $experience->company }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {{ $experience->start_year }} - {{ $experience->end_year ?? 'Present' }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {{ $experience->employment_type }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <ul class="list-disc list-inside">
                                        @foreach($experience->responsibilities_array as $responsibility)
                                            <li>{{ $responsibility }}</li>
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex justify-end space-x-3">
                                        <button
                                            onclick="openEditModal(
                                                {{ $experience->id }}, 
                                                '{{ addslashes($experience->position) }}', 
                                                '{{ addslashes($experience->company) }}', 
                                                '{{ $experience->start_year }}', 
                                                '{{ $experience->end_year }}', 
                                                '{{ $experience->employment_type }}', 
                                                `{{ addslashes($experience->responsibilities) }}`
                                            )"
                                            class="text-blue-600 hover:text-blue-900" title="Edit">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <form action="{{ route('admin.experience.destroy', $experience->id) }}" method="POST"
                                            class="inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-600 hover:text-red-900"
                                                title="Delete"
                                                onclick="return confirm('Are you sure you want to delete this experience?')">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="px-6 py-4 text-center text-sm text-gray-500">
                                    No experiences found. <button onclick="openAddModal()"
                                        class="text-primary-600 hover:underline">Add your first experience</button>
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
                        Showing <span class="font-medium">{{ $experiences->firstItem() }}</span> to <span
                            class="font-medium">{{ $experiences->lastItem() }}</span> of <span
                            class="font-medium">{{ $experiences->total() }}</span> experiences
                    </div>
                    <div class="inline-flex mt-2 md:mt-0">
                        {{ $experiences->links('vendor.pagination.tailwind') }}
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

<!-- Add/Edit Experience Modal -->
<div id="experienceModal" class="fixed inset-0 z-50 hidden overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <form id="experienceForm" method="POST">
                @csrf
                <input type="hidden" id="methodInput" name="_method" value="POST">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modalTitle">Add New Experience</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <label for="position" class="block text-sm font-medium text-gray-700">Position*</label>
                            <input type="text" name="position" id="position" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label for="company" class="block text-sm font-medium text-gray-700">Company*</label>
                            <input type="text" name="company" id="company" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label for="employment_type" class="block text-sm font-medium text-gray-700">Employment Type*</label>
                            <select name="employment_type" id="employment_type" required
                                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                                <option value="">Select type</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="contract">Contract</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label for="start_year" class="block text-sm font-medium text-gray-700">Start Year*</label>
                            <input type="number" name="start_year" id="start_year" min="1900" max="{{ date('Y') + 1 }}" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label for="end_year" class="block text-sm font-medium text-gray-700">End Year (Leave empty if present)</label>
                            <input type="number" name="end_year" id="end_year" min="1900" max="{{ date('Y') + 1 }}"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div class="col-span-2">
                            <label for="responsibilities" class="block text-sm font-medium text-gray-700">Responsibilities*</label>
                            <textarea name="responsibilities" id="responsibilities" rows="4" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" placeholder="Responsibility 1, Responsibility 2, Responsibility 3"></textarea>
                                <p class="mt-1 text-sm text-gray-500">
                                    Enter multiple responsibilities separated by commas or on new lines.
                                </p>
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
    // Update the modal functions to handle responsibilities properly
    function openAddModal() {
        document.getElementById('modalTitle').textContent = 'Add New Experience';
        document.getElementById('experienceForm').action = "{{ route('admin.experience.store') }}";
        document.getElementById('methodInput').value = 'POST';
        // Clear all fields
        document.querySelectorAll('#experienceForm input, #experienceForm select, #experienceForm textarea').forEach(field => {
            field.value = '';
        });
        document.getElementById('experienceModal').classList.remove('hidden');
    }

    function openEditModal(id, position, company, startYear, endYear, employmentType, responsibilities) {
        document.getElementById('modalTitle').textContent = 'Edit Experience';
        document.getElementById('experienceForm').action = `/admin/experience/${id}`;
        document.getElementById('methodInput').value = 'PUT';
        document.getElementById('position').value = position;
        document.getElementById('company').value = company;
        document.getElementById('start_year').value = startYear;
        document.getElementById('end_year').value = endYear;
        document.getElementById('employment_type').value = employmentType.toLowerCase().replace(' ', '-');
        
        // Convert comma-separated responsibilities to newline-separated for better editing
        const formattedResponsibilities = responsibilities.replace(/, /g, "\n");
        document.getElementById('responsibilities').value = formattedResponsibilities;
        
        document.getElementById('experienceModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('experienceModal').classList.add('hidden');
    }

    function closeModal() {
        document.getElementById('experienceModal').classList.add('hidden');
    }
</script>

@include('admin.partials.footer')

