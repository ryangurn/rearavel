<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $casts = [
        'payload' => 'array'
    ];

    // category
    public function category()
    {
        return $this->hasOne(SettingCategory::class, 'id', 'category_id');
    }
}
