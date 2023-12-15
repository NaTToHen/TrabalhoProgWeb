<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller {
    public function auth(Request $request) {
        if(Auth::attempt(['user' => $request->user, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('JWT');

            return response()->json($token->plainTextToken, 200);
        } else {
            return response()->json('Usuario ou senha invalidos', 401);
        }
    }
}
