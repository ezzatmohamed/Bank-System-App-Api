<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;

class UserController
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function login($root,array $args)
    {
        $creds = Arr::only($args,['email','password']);
        if(Auth::once($creds))
        {
            $token= Str::random(60);
            $user=auth()->user();
            $user->api_token=$token;
            $user->save();
            return $token;
        }
        return null;
    }

    public function logout($root,array $args)
    {
        if( $user  = Auth::guard('api')->user() )
        {
            $user->api_token=NULL;
            $user->save();
            return true;
        }
        return false;
    }
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
}
