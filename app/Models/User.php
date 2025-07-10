<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'images',
        'bio_1',
        'bio_2',
        'description',
        'approach',
        'values'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }

    public function getImageUrlAttribute()
    {
        return $this->images ? asset('storage/' . $this->images) : asset('images/default-profile.png');
    }

    public function setApproachAttribute($value)
    {
        $this->attributes['approach'] = is_array($value)
            ? implode(', ', $value)
            : $value;
    }

    public function getApproachArrayAttribute()
    {
        return $this->approach ? explode(', ', $this->approach) : [];
    }

    public function setValuesAttribute($value)
    {
        $this->attributes['values'] = is_array($value)
            ? implode(', ', $value)
            : $value;
    }

    public function getValuesArrayAttribute()
    {
        return $this->values ? explode(', ', $this->values) : [];
    }
}
