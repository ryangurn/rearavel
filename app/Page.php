<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Page
 * @package App
 */
class Page extends Model
{
    /**
     * @return HasMany
     */
    public function modules() {
        return $this->hasMany(PageModule::class, 'page_id', 'id');
    }
}
