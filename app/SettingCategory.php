<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingCategory extends Model
{
    // settings
    public function settings()
    {
        return $this->hasMany(Setting::class, 'category_id', 'id');
    }
}
