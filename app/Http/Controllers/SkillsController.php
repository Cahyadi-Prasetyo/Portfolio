<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;
use App\Http\Controllers\Controller;

class SkillsController extends Controller
{
    public function index()
    {
        $skills = Skill::orderBy('id')->paginate(10);
        return view('admin.skills', compact('skills'),[
            'title' => 'Skill'
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'icon_class' => 'required|string|max:255',
                'category' => 'required|in:front-end,back-end,dev-tools'
            ]);

            Skill::create($validated);

            return redirect()->route('admin.skills.index')
                ->with('toast', [
                    'type' => 'success',
                    'message' => 'Skill berhasil ditambahkan',
                    'icon' => 'fas fa-check-circle'
                ]);
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('toast', [
                    'type' => 'error',
                    'message' => 'Gagal menambahkan skill: ' . $e->getMessage(),
                    'icon' => 'fas fa-times-circle'
                ])
                ->withInput();
        }
    }

    public function update(Request $request, Skill $skill)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'icon_class' => 'required|string|max:255',
                'category' => 'required|in:front-end,back-end,dev-tools'
            ]);

            $skill->update($validated);

            return redirect()->route('admin.skills.index')
                ->with('toast', [
                    'type' => 'success',
                    'message' => 'Skill ' . $skill->name . ' berhasil diperbarui',
                    'icon' => 'fas fa-sync-alt'
                ]);
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('toast', [
                    'type' => 'error',
                    'message' => 'Gagal memperbarui skill: ' . $e->getMessage(),
                    'icon' => 'fas fa-times-circle'
                ]);
        }
    }

    public function destroy(Skill $skill)
    {
        try {
            $skillName = $skill->name;
            $skill->delete();

            return redirect()->route('admin.skills.index')
                ->with('toast', [
                    'type' => 'success',
                    'message' => 'Skill ' . $skillName . ' berhasil dihapus',
                    'icon' => 'fas fa-trash-alt'
                ]);
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('toast', [
                    'type' => 'error',
                    'message' => 'Gagal menghapus skill: ' . $e->getMessage(),
                    'icon' => 'fas fa-times-circle'
                ]);
        }
    }
}
