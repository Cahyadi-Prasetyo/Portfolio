<?php

use App\Http\Controllers\SkillsController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\auth\ContactController as AuthContactController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('home', function () {
    return view('home');
});
Route::get('/', function () {
    return view('home');
});

Route::get('contact', function () {
    return view('contact');
});

Route::get('articles', function () {
    return view('articles');
});

Route::get('auth/login', function () {
    return view('auth/login');
});

Route::get('auth/register', function () {
    return view('auth/register');
});

Route::get('admin/index', function () {
    return view('admin/index');
});

Route::get('admin/project', function () {
    return view('admin/project');
});

Route::get('admin/skills', function () {
    return view('admin/skills');
});

Route::get('admin/experience', function () {
    return view('admin/experience');
});

Route::get('admin/education', function () {
    return view('admin/education');
});

Route::get('admin/article', function () {
    return view('admin/article');
});

Route::get('admin/contact', function () {
    return view('admin/contact');
});

Route::get('admin/profile', function () {
    return view('admin/profile');
});

Route::get('auth/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('auth/register', [RegisterController::class, 'register']);

Route::get('auth/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('auth/login', [LoginController::class, 'login']);
Route::post('auth/logout', [LoginController::class, 'logout'])->name('logout');

Route::post('/contact', [AuthContactController::class, 'send'])->name('contact.send');

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {

    Route::resource('skills', SkillsController::class)
        ->except(['show'])
        ->names([
            'index' => 'admin.skills.index',
            'create' => 'admin.skills.create',
            'store' => 'admin.skills.store',
            'edit' => 'admin.skills.edit',
            'update' => 'admin.skills.update',
            'destroy' => 'admin.skills.destroy',
        ]);

    Route::resource('experience', ExperienceController::class)
        ->except(['show'])
        ->names([
            'index' => 'admin.experience.index',
            'create' => 'admin.experience.create',
            'store' => 'admin.experience.store',
            'edit' => 'admin.experience.edit',
            'update' => 'admin.experience.update',
            'destroy' => 'admin.experience.destroy',
        ]);

    Route::resource('education', EducationController::class)->except(['show'])
        ->names([
            'index' => 'admin.education.index',
            'store' => 'admin.education.store',
            'update' => 'admin.education.update',
            'destroy' => 'admin.education.destroy',
        ]);

    Route::resource('article', ArticleController::class)->except(['show'])
        ->names([
            'index' => 'admin.articles.index',
            'store' => 'admin.articles.store',
            'update' => 'admin.articles.update',
            'destroy' => 'admin.articles.destroy',
            'create' => 'admin.articles.create',
            'edit' => 'admin.articles.edit'
        ]);

    Route::resource('project', ProjectController::class)->except(['show'])
        ->names([
            'index' => 'admin.projects.index',
            'create' => 'admin.projects.create',
            'store' => 'admin.projects.store',
            'edit' => 'admin.projects.edit',
            'update' => 'admin.projects.update',
            'destroy' => 'admin.projects.destroy'
        ]);

    Route::resource('activity', ActivityController::class)->except(['show'])
        ->names([
            'index' => 'admin.activities.index',
            'store' => 'admin.activities.store',
            'update' => 'admin.activities.update',
            'destroy' => 'admin.activities.destroy',
            'create' => 'admin.activities.create',
            'edit' => 'admin.activities.edit'
        ]);

    // Route::get('/admin/profile/edit', [ProfileController::class, 'edit'])->name('admin.profile.edit'); 
    Route::put('/profile/update', [ProfileController::class, 'update'])->name('admin.profile.update');
});

Route::get('admin/index', [DashboardController::class, 'index'])->name('admin.index');

Route::get('home', [HomeController::class, 'index'])->name('home');
Route::get('articles', [ArticlesController::class, 'index'])->name('articles');
Route::get('/articles/{slug}', [ArticlesController::class, 'show'])
    ->name('show');
Route::get('/articles/{slug}/full', [ArticlesController::class, 'getFullArticle'])->name('articles.full');
Route::get('/', [HomeController::class, 'index'])->name('home');
