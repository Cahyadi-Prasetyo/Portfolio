<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::latest()->paginate(10);
        return view('admin.activity', compact('activities'),[
            'title' => 'Activity'
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
            'type_activity' => 'required|string|max:255',
        ]);

        Activity::create($validated);

        return redirect()->route('admin.activities.index')->with('toast', [
            'type' => 'success',
            'message' => 'Activity created successfully!',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'required|string|max:255',
            'date' => 'required|date',
            'description' => 'required|string',
            'type_activity' => 'required|string|max:255',
        ]);

        $activity->update($validated);

        return redirect()->route('admin.activities.index')->with('toast', [
            'type' => 'success',
            'message' => 'Activity updated successfully!',
            'icon' => 'fas fa-check-circle'
        ]);
    }

    public function destroy(Activity $activity)
    {
        $activity->delete();

        return redirect()->route('admin.activities.index')->with('toast', [
            'type' => 'success',
            'message' => 'Activity deleted successfully!',
            'icon' => 'fas fa-check-circle'
        ]);
    }
}
