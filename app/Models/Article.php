<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory;

    protected $casts = ['date' => 'date', 'date' => 'datetime'];
    protected $table = 'articles';
    protected $fillable = [
        'title',
        'image',
        'date',
        'publish_time',
        'short_description',
        'long_description',
        'slug'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    protected $dates = ['date'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            $article->slug = Str::slug($article->title);
        });

        static::updating(function ($article) {
            $article->slug = Str::slug($article->title);
        });
    }

    public function getFullDateTimeAttribute()
    {
        return $this->date->format('d-m-y') . ' ' . $this->publish_time;
    }
}
