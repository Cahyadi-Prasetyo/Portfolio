<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table= 'education';
    protected $fillable = [
        'institution',
        'degree',
        'field_of_study',
        'start_year',
        'end_year',
        'status',
        'achievements',
        'score'
    ];

    protected $casts = [
        'start_year' => 'integer',
        'end_year' => 'integer',
        'score' => 'float'
    ];

    // Format status untuk tampilan
    public function getStatusLabelAttribute()
    {
        return match ($this->status) {
            'completed' => 'Completed',
            'in progress' => 'In Progress',
            'abandoned' => 'Abandoned',
            default => 'Unknown'
        };
    }

    // Konversi achievements ke array
    public function getAchievementsArrayAttribute()
    {
        return array_map('trim', explode(',', $this->achievements));
    }

    // Format achievements untuk edit form
    public function getFormattedAchievementsAttribute()
    {
        return implode(', ', $this->achievements_array);
    }

    // Format tahun pendidikan
    public function getEducationPeriodAttribute()
    {
        if ($this->status === 'in progress') {
            return $this->start_year . ' - Present';
        }
        return $this->start_year . ' - ' . ($this->end_year ?? 'Present');
    }
}
