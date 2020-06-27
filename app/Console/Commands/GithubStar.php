<?php

namespace App\Console\Commands;

use App\Setting;
use Github\ResultPager;
use GrahamCampbell\GitHub\Facades\GitHub;
use Illuminate\Console\Command;

class GithubStar extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'github:star';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Save star information from github to settings';

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
        // get the github data
        $github = GitHub::connection(GitHub::getDefaultConnection());
        $me = $github->me();

        // repositories information
        $repositoriesPager = new ResultPager($github);
        $repositories = $repositoriesPager->fetchAll($me, 'repositories');

        $starCount = 0;
        foreach ($repositories as $repository)
        {
            $starCount = $starCount + $repository['stargazers_count'];
        }

        $star = Setting::where('key', '=', 'github_star')->first();
        $payload = $star->payload;
        $payload['count'] = $starCount;
        $payload['text'] = $starCount . ' Github Stars';
        $star->payload = $payload;
        $star->save();

        return 1;
    }
}
