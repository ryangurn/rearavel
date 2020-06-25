<?php

use Illuminate\Database\Seeder;
use App\SettingCategory;

class SettingCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SettingCategory::create(['name' => 'General', 'description' => 'General Settings Category']);
    }
}
