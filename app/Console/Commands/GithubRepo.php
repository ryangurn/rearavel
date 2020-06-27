<?php

namespace App\Console\Commands;

use App\Setting;
use Github\ResultPager;
use GrahamCampbell\GitHub\Facades\GitHub;
use Illuminate\Console\Command;

class GithubRepo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'github:repo';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Save repo information from github to settings';

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

        $repo = Setting::where('key', '=', 'github_repo')->first();
        $payload = $repo->payload;
        $payload['count'] = count($repositories);
        $payload['text'] = count($repositories) . ' Github Repositories';
        $repo->payload = $payload;
        $repo->save();

        return 1;
    }
}
