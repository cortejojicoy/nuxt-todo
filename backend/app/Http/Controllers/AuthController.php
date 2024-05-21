<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function redirectToProvider(Request $request)
    {
        return Socialite::driver('github')->stateless()->redirect();
    }

    public function handleProviderCallback(Request $request)
    {
        try {
            $socialAccount = Socialite::driver('github')->stateless()->user();

            // Check if the user already exists in your database
            $user = User::where('email', $socialAccount->getEmail())->first();
            if($user) {
                Auth::login($user, true);
            } else {
                $user = User::create([
                    'social_id' => $socialAccount->id,
                    'name' => $socialAccount->name ?? '',
                    'email' => $socialAccount->email,
                    'password' => $socialAccount->password ?? '',
                    'social_token' => $socialAccount->token,
                    'social_refresh_token' => $socialAccount->refreshToken ?? '',
                    'social_avatar' => $socialAccount->avatar,
                ]);
            }
            $token = $user->createToken('sanctum+socialite')->plainTextToken;
            return redirect( config('app.sanctum_stateful_domains').'/auth/callback?token='.$token);
        }
    }

    public function user()
    {
        $user = User::where('email',Auth::user()->email)->first();
        return response()->json([$user], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
}
