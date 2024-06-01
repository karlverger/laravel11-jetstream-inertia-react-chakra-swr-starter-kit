<?php

namespace Database\Seeders;

use App\Models\BrokerFirm;
use App\Models\Team;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->withPersonalTeam()->create();

        User::factory()->withPersonalTeam()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $testUser = new user([
            'name' => config('test.user_login'),
            'email' => config('test.user_email'),
            'password' => bcrypt(config('test.user_password')),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);
        $testUser->save();

        // Create a personal access token for the user and display it in the console
        $token = $testUser->createToken('auth_token');
        echo 'TEST_AUTHENTICATION_BEARER_TOKEN: '.$token->plainTextToken.PHP_EOL.PHP_EOL;

        $testTeam = new Team([
            'name' => $testUser->name.'\'s Team',
            'user_id' => $testUser->id,
            'personal_team' => true,
        ]);
        $testTeam->save();
    }
}
