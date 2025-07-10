<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index()
    {
        $educations = Education::latest()->paginate(10);
        return view('admin.education', compact('educations'),[
            'title' => 'Education',
        ]);
    }

    public function store(Request $request)
    {
        $validated = $this->validateRequest($request);
        $validated['achievements'] = $this->formatAchievements($request->achievements);

        Education::create($validated);

        return redirect()->route('admin.education.index')->with('toast', [
            'type' => 'success',
            'message' => 'Education record added successfully',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    public function update(Request $request, Education $education)
    {
        $validated = $this->validateRequest($request);
        $validated['achievements'] = $this->formatAchievements($request->achievements);

        $education->update($validated);

        return redirect()->route('admin.education.index')->with('toast', [
            'type' => 'success',
            'message' => 'Education record updated successfully',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    public function destroy(Education $education)
    {
        $education->delete();

        return redirect()->route('admin.education.index')->with('toast', [
            'type' => 'success',
            'message' => 'Education record deleted successfully',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    private function validateRequest($request)
    {
        return $request->validate([
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'end_year' => 'nullable|digits:4|integer|min:1900|max:' . (date('Y') + 5),
            'status' => 'required|in:completed,in progress,abandoned',
            'achievements' => 'required|string',
            'score' => 'nullable|numeric|between:0,4.00',
        ]);
    }

    private function formatAchievements($achievements)
    {
        return implode(
            ',',
            array_filter(
                array_map('trim', explode(',', $achievements))
            )
        );
    }
}
