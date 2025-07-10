<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    // Tampilkan semua projects
    public function index()
    {
        $projects = Project::orderBy('id')->paginate(10);
        return view('admin.project', compact('projects'),[
            'title' => 'Project'
        ]);
    }

    // Form tambah project
    public function create()
    {
        return view('admin.projects.create');
    }

    // Simpan project baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:500',
            'description' => 'nullable|string',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'icon' => 'nullable|string|max:50',
            'skills' => 'nullable|string',
            'demo_link' => 'nullable|url|max:255',
            'github_link' => 'nullable|url|max:255',
            'is_featured' => 'boolean',
            'project_date' => 'required|date'
        ]);

        // Convert skills string to array
        $validated['skills'] = $this->parseSkills($request->skills);

        // Upload gambar jika ada
        if ($request->hasFile('image_path')) {
            $validated['image_path'] = $request->file('image_path')->store('projects', 'public');
        }

        Project::create($validated);

        return redirect()->route('admin.projects.index')->with('toast', [
            'type' => 'success',
            'message' => 'Project berhasil ditambahkan!',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    // Form edit project
    public function edit(Project $project)
    {
        return view('admin.projects.edit', compact('project'));
    }

    // Update project
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required|string|max:500',
            'description' => 'nullable|string',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'icon' => 'nullable|string|max:50',
            'skills' => 'nullable|string',
            'demo_link' => 'nullable|url|max:255',
            'github_link' => 'nullable|url|max:255',
            'is_featured' => 'boolean',
            'project_date' => 'required|date'
        ]);

        // Convert skills string to array
        $validated['skills'] = $this->parseSkills($request->skills);

        // Update gambar jika ada
        if ($request->hasFile('image_path')) {
            // Hapus gambar lama
            if ($project->image_path) {
                Storage::disk('public')->delete($project->image_path);
            }
            $validated['image_path'] = $request->file('image_path')->store('projects', 'public');
        }

        $project->update($validated);

        return redirect()->route('admin.projects.index')->with('toast', [
            'type' => 'success',
            'message' => 'Project berhasil diupdate!',
            'icon' => 'fas fa-sync-alt'
        ]);
    }

    // Hapus project
    public function destroy(Project $project)
    {
        // Hapus gambar jika ada
        if ($project->image_path) {
            Storage::disk('public')->delete($project->image_path);
        }

        $project->delete();

        return redirect()->route('admin.projects.index')->with('toast', [
            'type' => 'success',
            'message' => 'Project berhasil dihapus!'
        ]);
    }

    // Helper: Convert string skills to array
    protected function parseSkills($skillsString)
    {
        if (empty($skillsString)) {
            return [];
        }

        return array_map(
            'trim',
            explode(',', $skillsString)
        );
    }
}
