<?php

namespace App\GraphQL\Mutations;
use App\Models\account;
use Illuminate\Support\Facades\Auth;
use DB;
use Illuminate\Support\Facades\Http;

define("banks", [
    "hsbc",
    "qnb",
    "cib"
  ]);
  define("types", [
    "current",
    "saving",
    "credit",
    "joint" 
  ]);
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

            if(in_array($args["type"],types) && in_array($args["bank"],banks) )
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
            }
            else
            {
                return false;
            }
        }catch(Exception $e) {
            return false;
        }

    }

    // TODO: Implement Middleware Account belongs to user
    public function update($root,array $args)
    {
        try
        {

            if(in_array($args["type"],types) && in_array($args["bank"],banks) )
            {
                $id = $args["id"];
                $account = account::find($id);  
                $account->type = $args["type"];
                $account->bank = $args["bank"];
                
                // $header = $request->header('Authorization');
                // $account->user_id = Auth::guard('api')->user()->id;
                $account->save();
                return $account;
            }
            else
            {
                return false;
            }
        }catch(Exception $e) {
            return false;
        }

    }
    
    // TODO: Implement Middleware Account belongs to user
    public function getAccountBalance($root,array $args)
    {
            
        try{
            
            $account_id = $args['id'];
            $account = account::find($account_id);
            return $account->balance;
        }
        catch(Exception $e)
        {
            return $e;
        }
    }
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
}
