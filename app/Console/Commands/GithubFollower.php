<?php

namespace App\Console\Commands;

use App\Setting;
use Github\ResultPager;
use GrahamCampbell\GitHub\Facades\GitHub;
use Illuminate\Console\Command;

class GithubFollower extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'github:follower';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Save follower information from github to settings';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $github = Github::connection(Github::getDefaultConnection());
        $me = $github->me();

        $follower = Setting::where('key', '=', 'github_follower')->first();
        $payload = $follower->payload;
        $payload['count'] = count($me->followers());
        $payload['text'] = count($me->followers()) . ' Github Followers';
        $follower->payload = $payload;
        $follower->save();

        return 1;
    }
}
