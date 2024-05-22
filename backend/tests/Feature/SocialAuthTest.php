<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

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
}
