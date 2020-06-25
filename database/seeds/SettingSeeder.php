<?php

use Illuminate\Database\Seeder;
use App\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::create(['category_id' => '1', 'key' => 'title', 'payload' => ['Ryan Gurnick']]);
    }
}
