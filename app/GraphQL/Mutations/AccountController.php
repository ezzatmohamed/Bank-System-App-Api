<?php

namespace App\GraphQL\Mutations;
use App\Models\account;
use Illuminate\Support\Facades\Auth;
use DB;
class AccountController
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */

    // TODO: Implement Middleware Account belongs to user
    public function activate($root,array $args)
    {
        $id = $args["id"];
        $account = account::find($id);  
        $account->activated = true;
        $account->save();
        return true;

    }
    
    // TODO: Implement Middleware Account belongs to user
    public function deactivate($root,array $args)
    {
        $id = $args["id"];
        $account = account::find($id);  
        $account->activated = false;
        $account->save();
        return false;

    }
    public function create($root,array $args)
    {
        // return Auth::guard('api')->user();
        try
        {

            $account = new account();
            $account->type = $args["type"];
            $account->bank = $args["bank"];
            $account->currency = $args["currency"];
            $account->balance = 0;
            $account->activated = true;
            // $header = $request->header('Authorization');
            $account->user_id = Auth::guard('api')->user()->id;
            $account->save();
            return $account;
        }catch(Exception $e) {
            return $e;
        }

    }

    // TODO: Implement Middleware Account belongs to user
    public function update($root,array $args)
    {
        try
        {

            $id = $args["id"];
            $account = account::find($id);  
            $account->activated = false;
            $account->type = $args["type"];
            $account->bank = $args["bank"];
            $account->currency = $args["currency"];
            
            // $header = $request->header('Authorization');
            $account->user_id = Auth::guard('api')->user()->id;
            $account->save();
            return $account;
        }catch(Exception $e) {
            return $e;
        }

    }
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
}
