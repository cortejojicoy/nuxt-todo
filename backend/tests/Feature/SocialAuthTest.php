<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Contracts\User as SocialiteUser;
use Mockery as m;

class SocialAuthTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_redirect_to_provider(): void
    {
        $response = $this->get('/api/auth');

        $response->assertRedirect();
    }

    public function test_handle_provider_callback(): void
    {
        $socialiteUser = m::mock(SocialiteUser::class);
        $socialiteUser->shouldReceive('getId')->andReturn(123456);
        $socialiteUser->shouldReceive('getName')->andReturn('John Doe');
        $socialiteUser->shouldReceive('getEmail')->andReturn('johndoe@example.com');

        $socialite = m::mock('Laravel\Socialite\Contracts\Factory');
        $socialite->shouldReceive('driver->user')->andReturn($socialiteUser);
        $this->app->instance('Laravel\Socialite\Contracts\Factory', $socialite);

        // Perform the GET request
        $response = $this->get('/api/auth/callback');

        $response->assertStatus(500);

    }
}
