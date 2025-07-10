<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Article;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = User::first();

        $projects = Project::orderBy('project_date', 'desc')->get();

        $experiences = Experience::orderBy('start_year', 'desc')->get();

        $educations = Education::orderBy('start_year', 'desc')->get();

        $activities = Activity::orderBy('date', 'desc')->get();

        $colorMap = [
            'js' => 'yellow',
            'php' => 'purple',
            'laravel' => 'red',
            'react' => 'blue',
            'vue' => 'green',
            'docker' => 'blue',
            'git' => 'orange',
            'python' => 'blue',
            'java' => 'red',
            'html' => 'orange',
            'css' => 'blue',
            // Tambahkan mapping khusus lainnya
        ];

        $skillCategories = [
            'front-end' => [
                'title' => 'Front End',
                'icon' => 'fas fa-laptop-code',
                'bg_color' => 'bg-blue-500/10',
                'icon_color' => 'text-blue-400',
                'skills' => Skill::where('category')->get()->map(function ($skill) use ($colorMap) {
                    $skill->color = $colorMap[strtolower($skill->name)] ?? $skill->color;
                    return $skill;
                })
            ],
            'back-end' => [
                'title' => 'Back End',
                'icon' => 'fas fa-server',
                'bg_color' => 'bg-violet-500/10',
                'icon_color' => 'text-violet-400',
                'skills' => Skill::where('category')->get()->map(function ($skill) use ($colorMap) {
                    $skill->color = $colorMap[strtolower($skill->name)] ?? $skill->color;
                    return $skill;
                })
            ],
            'dev-tools' => [
                'title' => 'Dev Tools',
                'icon' => 'fas fa-tools',
                'bg_color' => 'bg-amber-500/10',
                'icon_color' => 'text-amber-400',
                'skills' => Skill::where('category')->get()->map(function ($skill) use ($colorMap) {
                    $skill->color = $colorMap[strtolower($skill->name)] ?? $skill->color;
                    return $skill;
                })
            ]
        ];

        $skillsByCategory = [];
        foreach ($skillCategories as $category => $categoryData) {
            $skillsByCategory[$category] = [
                'title' => $categoryData['title'],
                'icon' => $categoryData['icon'],
                'bg_color' => $categoryData['bg_color'],
                'icon_color' => $categoryData['icon_color'],
                'skills' => Skill::where('category', $category)
                    ->orderBy('name')
                    ->get()
            ];
        }

        $articles = Article::orderBy('date', 'desc')->get();

        return view('home', compact(
            'user',
            'projects',
            'experiences',
            'educations',
            'activities',
            'skillsByCategory'
        ));
    }
}
