@include('admin.partials.sidebar')
<div class="flex-1">
    @include('admin.partials.navbar')
    <main class="p-6">
        <!-- Toast Notification -->
        <!-- ... (keep your existing toast notification code) ... -->

        <div class="bg-white rounded-lg shadow overflow-hidden">
            <!-- Table Header -->
            <div class="p-4 border-b border-gray-200">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                    <h3 class="text-lg font-semibold text-gray-800">Education Management</h3>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                        <div class="relative w-full md:w-64">
                            <input type="text" placeholder="Search..." id="searchInput"
                                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                            <div class="absolute left-3 top-2.5 text-gray-400">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <button onclick="openAddModal()"
                            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center">
                            <i class="fas fa-plus mr-2"></i> Add New
                        </button>
                    </div>
                </div>
            </div>

            <!-- Table Content -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Achievements</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @forelse ($educations as $education)
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ $education->id }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ $education->institution }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $education->degree }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $education->education_period }}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 py-1 text-xs rounded-full 
                                        {{ $education->status === 'completed' ? 'bg-green-100 text-green-800' : '' }}
                                        {{ $education->status === 'in progress' ? 'bg-blue-100 text-blue-800' : '' }}
                                        {{ $education->status === 'abandoned' ? 'bg-red-100 text-red-800' : '' }}">
                                        {{ $education->status_label }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    <ul class="list-disc list-inside space-y-1">
                                        @foreach($education->achievements_array as $achievement)
                                            {{ $achievement }}
                                        @endforeach
                                    </ul>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex justify-end space-x-3">
                                        <button onclick="openEditModal({{ $education->id }}, 
                                            '{{ addslashes($education->institution) }}',
                                            '{{ addslashes($education->degree) }}',
                                            '{{ addslashes($education->field_of_study) }}',
                                            '{{ $education->start_year }}',
                                            '{{ $education->end_year }}',
                                            '{{ $education->status }}',
                                            '{{ $education->formatted_achievements }}',
                                            '{{ $education->score }}')"
                                            class="text-blue-600 hover:text-blue-900" title="Edit">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <form action="{{ route('admin.education.destroy', $education->id) }}" method="POST" class="inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-600 hover:text-red-900" title="Delete"
                                                onclick="return confirm('Delete this education record?')">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-6 py-4 text-center text-sm text-gray-500">
                                    No records found. <button onclick="openAddModal()"
                                        class="text-primary-600 hover:underline">Add your first record</button>
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                {{ $educations->links() }}
            </div>
        </div>
    </main>
</div>

<!-- Add/Edit Modal -->
<div id="educationModal" class="fixed inset-0 z-50 hidden overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <form id="educationForm" method="POST">
                @csrf
                <input type="hidden" id="methodInput" name="_method" value="POST">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modalTitle">Add Education Record</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <label for="institution" class="block text-sm font-medium text-gray-700">Institution*</label>
                            <input type="text" name="institution" id="institution" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div>
                            <label for="degree" class="block text-sm font-medium text-gray-700">Degree*</label>
                            <input type="text" name="degree" id="degree" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div>
                            <label for="field_of_study" class="block text-sm font-medium text-gray-700">Field of Study</label>
                            <input type="text" name="field_of_study" id="field_of_study"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div>
                            <label for="start_year" class="block text-sm font-medium text-gray-700">Start Year*</label>
                            <input type="number" name="start_year" id="start_year" min="1900" max="{{ date('Y') + 1 }}" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div>
                            <label for="end_year" class="block text-sm font-medium text-gray-700">End Year</label>
                            <input type="number" name="end_year" id="end_year" min="1900" max="{{ date('Y') + 5 }}"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div>
                            <label for="status" class="block text-sm font-medium text-gray-700">Status*</label>
                            <select name="status" id="status" required
                                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                                <option value="completed">Completed</option>
                                <option value="in progress">In Progress</option>
                                <option value="abandoned">Abandoned</option>
                            </select>
                        </div>
                        <div>
                            <label for="score" class="block text-sm font-medium text-gray-700">Score (GPA)</label>
                            <input type="number" step="0.01" min="0" max="4.00" name="score" id="score"
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                        </div>
                        <div class="col-span-2">
                            <label for="achievements" class="block text-sm font-medium text-gray-700">Achievements*</label>
                            <textarea name="achievements" id="achievements" rows="3" required
                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                placeholder="Enter achievements separated by commas"></textarea>
                            <p class="mt-1 text-xs text-gray-500">Separate multiple achievements with commas</p>
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
        document.getElementById('modalTitle').textContent = 'Add Education Record';
        document.getElementById('educationForm').action = "{{ route('admin.education.store') }}";
        document.getElementById('methodInput').value = 'POST';
        document.getElementById('institution').value = '';
        document.getElementById('degree').value = '';
        document.getElementById('field_of_study').value = '';
        document.getElementById('start_year').value = '';
        document.getElementById('end_year').value = '';
        document.getElementById('status').value = 'completed';
        document.getElementById('achievements').value = '';
        document.getElementById('score').value = '';
        document.getElementById('educationModal').classList.remove('hidden');
    }

    function openEditModal(id, institution, degree, fieldOfStudy, startYear, endYear, status, achievements, score) {
        document.getElementById('modalTitle').textContent = 'Edit Education Record';
        document.getElementById('educationForm').action = `/admin/education/${id}`;
        document.getElementById('methodInput').value = 'PUT';
        document.getElementById('institution').value = institution;
        document.getElementById('degree').value = degree;
        document.getElementById('field_of_study').value = fieldOfStudy || '';
        document.getElementById('start_year').value = startYear;
        document.getElementById('end_year').value = endYear || '';
        document.getElementById('status').value = status;
        document.getElementById('achievements').value = achievements || '';
        document.getElementById('score').value = score || '';
        document.getElementById('educationModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('educationModal').classList.add('hidden');
    }

    // Auto-format achievements input
    document.getElementById('achievements').addEventListener('blur', function() {
        this.value = this.value.split(',')
            .map(item => item.trim())
            .filter(item => item.length > 0)
            .join(', ');
    });
</script>

@include('admin.partials.footer')

