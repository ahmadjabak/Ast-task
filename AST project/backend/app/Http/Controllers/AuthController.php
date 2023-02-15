<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
class AuthController extends Controller
{
    public function login(Request $request) {

  
    

        $fields = $request->validate([
            
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

      // check email
      $user = User::where('email', $fields['email'])->first();



      // check password

      if (!$user || !Hash::check($fields['password'], $user->password)){
        return response ([
            'message' => 'Bad creds'
        ], 401);
      }
     

        $token =$user->createToken('myapptoken')->plainTextToken;
        // $cookie = Admins::withCookie(cookie('token', $token, 60*24));
        

        

        $response = [
            "token"=>$token,
            'user' => $user            
        ];



        return response($response, 201);
    }
}
