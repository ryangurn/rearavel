<?php

use Carbon\Carbon;
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
        $first = 'Ryan';
        $last = 'Gurnick';
        $dob = new Carbon('1998-01-30');

        Setting::create(['category_id' => 1, 'key' => 'title', 'payload' => [$first . ' ' . $last]]);
        Setting::create(['category_id' => 2, 'key' => 'name', 'payload' => [$first . ' ' . substr($last, 0, 1) . '.']]);
        Setting::create(['category_id' => 2, 'key' => 'age', 'payload' => $dob]);

        Setting::create(['category_id' => 3, 'key' => 'github_key', 'payload' => [env('GITHUB_KEY')]]);
        Setting::create(['category_id' => 3, 'key' => 'github_repo', 'payload' => ['count' => 0, 'text' => '0 Github Repo\'s']]);
        Setting::create(['category_id' => 3, 'key' => 'github_star', 'payload' => ['count' => 0, 'text' => '0 Github Star\'s']]);
        Setting::create(['category_id' => 3, 'key' => 'github_follower', 'payload' => ['count' => 0, 'text' => '0 Github Follower\'s']]);
    }
}
