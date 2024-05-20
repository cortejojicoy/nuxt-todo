<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function redirecToProvider()
    {
        return Socialite::driver('github')->redirect();
    }

    public function handleProviderCallback(Request $request)
    {
        $socialAccount = Socialite::driver('github')->user();
        $user = User::updateOrCreate([
                'social_id' => $socialAccount->id
            ], [
                'email' => $socialAccount->email,
                'social_token' => $socialAccount->token,
            ]
        );

        return response()->json([
            $user
        ], 200);
    }
}
