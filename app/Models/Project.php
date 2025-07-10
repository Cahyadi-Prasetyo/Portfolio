<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    use HasFactory;

    protected $table = 'project';
    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'description',
        'image_path',
        'icon',
        'skills',
        'demo_link',
        'github_link',
        'is_featured',
        'project_date'
    ];

    protected $casts = [
        'skills' => 'array',
        'is_featured' => 'boolean',
        'project_date' => 'date'
    ];

    // Auto-generate slug dari title
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            $project->slug = Str::slug($project->title);
        });

        static::updating(function ($project) {
            $project->slug = Str::slug($project->title);
        });
    }
}
