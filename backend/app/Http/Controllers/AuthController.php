<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;


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
            $user = User::where('email', $socialAccount->email)->first();
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
            // generate random strings for temporary token
            $tempToken = Str::random(40);
            $token = $user->createToken('sanctum+socialite')->plainTextToken;

            // put token in cache for 5mins
            Cache::put($tempToken, $token, now()->addMinutes(5));

            return redirect( config('app.sanctum_stateful_domains').'/auth/callback?tempToken='. $tempToken);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function fetchToken(Request $request)
    {   
        $userData = Cache::get($request->tempToken);
        if($userData) return response()->json($userData);

        return response()->json(['error', 'Invalid token'], 400);
    }

    public function user()
    {
        $user = User::where('email',Auth::user()->email)->first();
        return response()->json($user, 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
}
