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
        SettingCategory::create(['name' => 'Card', 'description' => 'Card Settings Category']);
        SettingCategory::create(['name' => 'Github', 'description' => 'Github Settings Category']);
    }
}
