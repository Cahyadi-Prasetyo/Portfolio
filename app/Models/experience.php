<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    // Employment type constants
    const TYPE_FULLTIME = 'full-time';
    const TYPE_PARTTIME = 'part-time';
    const TYPE_INTERNSHIP = 'internship';
    const TYPE_FREELANCE = 'freelance';
    const TYPE_CONTRACT = 'contract';
    const TYPE_EVENT = 'event';

    protected $table = 'experience';
    protected $fillable = [
        'position',
        'company',
        'start_year',
        'end_year',
        'employment_type',
        'responsibilities'
    ];

    protected $casts = [
        'start_year' => 'integer',
        'end_year' => 'integer'
    ];

    /**
     * Set the responsibilities attribute - converts array to comma-separated string
     */
    public function setResponsibilitiesAttribute($value)
    {
        if (is_array($value)) {
            $this->attributes['responsibilities'] = implode(', ', $value);
        } else {
            // Clean up the string by removing empty items and trimming whitespace
            $items = array_map('trim', explode(',', $value));
            $items = array_filter($items);
            $this->attributes['responsibilities'] = implode(', ', $items);
        }
    }

    /**
     * Get human-readable employment type
     */
    public function getEmploymentTypeLabelAttribute(): string
    {
        return match ($this->employment_type) {
            self::TYPE_FULLTIME => 'Full Time',
            self::TYPE_PARTTIME => 'Part Time',
            self::TYPE_INTERNSHIP => 'Internship',
            self::TYPE_FREELANCE => 'Freelance',
            self::TYPE_CONTRACT => 'Contract',
            self::TYPE_EVENT => 'Special Event',
            default => ucfirst(str_replace('-', ' ', $this->employment_type))
        };
    }

    /**
     * Format duration string
     */
    public function getDurationAttribute(): string
    {
        if (is_null($this->end_year)) {
            return $this->start_year . ' - Present';
        }

        if ($this->start_year == $this->end_year) {
            return (string)$this->start_year;
        }

        return $this->start_year . ' - ' . $this->end_year;
    }

    /**
     * Get responsibilities as array
     */
    public function getResponsibilitiesArrayAttribute(): array
    {
        return array_map('trim', explode(',', $this->responsibilities));
    }

    /**
     * Check if experience is current
     */
    public function isCurrent(): bool
    {
        return is_null($this->end_year);
    }
}
