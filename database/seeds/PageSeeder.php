<?php

use Illuminate\Database\Seeder;
use App\Page;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Page::create(['name' => 'Home', 'title' => 'Home', 'slug' => 'home']);
        Page::create(['name' => 'Resume', 'title' => 'Resume', 'slug' => 'resume']);
    }
}
