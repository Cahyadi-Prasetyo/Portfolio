<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;
    protected $table = 'skill';
    protected $fillable = [
        'name',
        'icon_class',
        'category'
    ];

    protected $casts = [
        'category' => 'string',
    ];

    // Category constants for easy reference
    public const CATEGORY_FRONTEND = 'front-end';
    public const CATEGORY_BACKEND = 'back-end';
    public const CATEGORY_DEVTOOLS = 'dev-tools';

    // Get all available categories
    public static function getCategories(): array
    {
        return [
            self::CATEGORY_FRONTEND => 'Front End',
            self::CATEGORY_BACKEND => 'Back End',
            self::CATEGORY_DEVTOOLS => 'Development Tools',
        ];
    }

    // Get formatted category name
    public function getFormattedCategoryAttribute(): string
    {
        return self::getCategories()[$this->category] ?? $this->category;
    }

    // Scope queries by category
    public function scopeFrontEnd($query)
    {
        return $query->where('category', self::CATEGORY_FRONTEND);
    }

    public function scopeBackEnd($query)
    {
        return $query->where('category', self::CATEGORY_BACKEND);
    }

    public function scopeDevTools($query)
    {
        return $query->where('category', self::CATEGORY_DEVTOOLS);
    }

    // Tambahkan di App\Models\Skill
    public function getCategoryNameAttribute()
    {
        return self::getCategories()[$this->category] ?? 'Uncategorized';
    }

    public function getCategoryColorAttribute()
    {
        $colors = [
            self::CATEGORY_FRONTEND => 'blue',
            self::CATEGORY_BACKEND => 'purple',
            self::CATEGORY_DEVTOOLS => 'green'
        ];

        return $colors[$this->category] ?? 'gray';
    }

    // Di App\Models\Skill
    public function getIconColorAttribute()
    {
        $colorMap = [
            'js' => 'yellow-500',
            'php' => 'purple-500',
            'laravel' => 'red-500',
            'react' => 'blue-400',
            'vue' => 'green-500',
            'docker' => 'blue-300',
            'git' => 'orange-500',
            'python' => 'blue-600',
            'java' => 'red-600',
            'html' => 'orange-600',
            'css' => 'blue-500',
            // Tambahkan mapping khusus lainnya
        ];

        // Cari warna berdasarkan keyword dalam icon_class
        foreach ($colorMap as $keyword => $color) {
            if (str_contains($this->icon_class, $keyword)) {
                return $color;
            }
        }

        // Jika tidak ditemukan, generate warna random konsisten berdasarkan hash
        return $this->generateConsistentColor();
    }

    protected function generateConsistentColor()
    {
        $colors = [
            'red-500',
            'blue-500',
            'green-500',
            'yellow-500',
            'purple-500',
            'pink-500',
            'indigo-500',
            'teal-500'
        ];

        $hash = crc32($this->icon_class);
        return $colors[$hash % count($colors)];
    }
}
