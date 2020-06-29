<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Class PageModule
 * @package App
 */
class PageModule extends Model
{
    /**
     * @var string[]
     */
    protected $casts = [
        'ui' => 'array',
        'payload' => 'array'
    ];

    /**
     * @return HasOne
     */
    public function page()
    {
        return $this->hasOne(Page::class, 'id', 'page_id');
    }
}
