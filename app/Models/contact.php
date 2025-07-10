<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'sender_name',
        'sender_email',
        'subject',
        'message',
        'status'
    ];

    protected $casts = [
        'status' => 'string'
    ];

    public const STATUS_UNREAD = 'unread';
    public const STATUS_READ = 'read';

    public static function getStatuses(): array
    {
        return [
            self::STATUS_UNREAD => 'Unread',
            self::STATUS_READ => 'Read',
        ];
    }
}
