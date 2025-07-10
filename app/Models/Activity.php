<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $table = 'activity';

    protected $fillable = [
        'title',
        'icon',
        'date',
        'description',
        'type_activity'
    ];

    protected $dates = ['date'];
    protected $casts = [
        'date' => 'datetime',
    ];
}
