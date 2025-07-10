<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::orderBy('start_year', 'desc')->paginate(10);
        return view('admin.experience', compact('experiences'),[
            'tile' => 'Experience',
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'end_year' => 'nullable|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'employment_type' => 'required|string|max:255',
            'responsibilities' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput()
                ->with('toast', [
                    'type' => 'error',
                    'message' => 'Please correct the errors below.',
                    'icon' => 'fas fa-exclamation-circle'
                ]);
        }

        // Process responsibilities - ensure proper comma separation
        $responsibilities = $this->processResponsibilities($request->responsibilities);

        Experience::create(array_merge($request->except('responsibilities'), [
            'responsibilities' => $responsibilities
        ]));

        return redirect()->route('admin.experience.index')
            ->with('toast', [
                'type' => 'success',
                'message' => 'Experience added successfully!',
                'icon' => 'fas fa-check-circle'
            ]);
    }

    public function update(Request $request, Experience $experience)
    {
        $validator = Validator::make($request->all(), [
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'end_year' => 'nullable|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'employment_type' => 'required|string|max:255',
            'responsibilities' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput()
                ->with('toast', [
                    'type' => 'error',
                    'message' => 'Please correct the errors below.',
                    'icon' => 'fas fa-exclamation-circle'
                ]);
        }

        // Process responsibilities
        $responsibilities = $this->processResponsibilities($request->responsibilities);

        $experience->update(array_merge($request->except('responsibilities'), [
            'responsibilities' => $responsibilities
        ]));

        return redirect()->route('admin.experience.index')
            ->with('toast', [
                'type' => 'success',
                'message' => 'Experience updated successfully!',
                'icon' => 'fas fa-check-circle'
            ]);
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();

        return redirect()->route('admin.experience.index')
            ->with('toast', [
                'type' => 'success',
                'message' => 'Experience deleted successfully!',
                'icon' => 'fas fa-check-circle'
            ]);
    }

    /**
     * Process responsibilities input to ensure proper comma separation
     */
    protected function processResponsibilities($input): string
    {
        // Split by new lines and commas, then clean up
        $items = preg_split('/[\n,]/', $input);
        $items = array_map('trim', $items);
        $items = array_filter($items); // Remove empty items
        
        return implode(', ', $items);
    }
}