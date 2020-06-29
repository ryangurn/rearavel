<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class SettingCategory
 * @package App
 */
class SettingCategory extends Model
{
    /**
     * @return HasMany
     */
    public function settings()
    {
        return $this->hasMany(Setting::class, 'category_id', 'id');
    }
}
