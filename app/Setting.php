<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Class Setting
 * @package App
 */
class Setting extends Model
{
    /**
     * @var string[]
     */
    protected $casts = [
        'payload' => 'array'
    ];

    // category

    /**
     * @return HasOne
     */
    public function category()
    {
        return $this->hasOne(SettingCategory::class, 'id', 'category_id');
    }
}
