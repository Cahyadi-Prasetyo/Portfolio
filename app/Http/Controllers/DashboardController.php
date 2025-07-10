<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Article;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;

class DashboardController extends Controller
{
    public function index()
    {
        return view('admin.index', [
            'articleCount' => Article::count(),
            'projectCount' => Project::count(),
            'skillCount' => Skill::count(),
            'experienceCount' => Experience::count(),
            'educationCount' => Education::count(),
            'activityCount' => Activity::count(),
            'recentActivities' => Activity::latest()->take(5)->get(),

            'title' => 'Dashboard'

        ]);
    }
}
