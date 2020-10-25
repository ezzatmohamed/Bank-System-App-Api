<?php

namespace App\GraphQL\Queries;

use App\Models\account;
use App\Models\user;
use Illuminate\Support\Facades\Auth;
class AccountController
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function BankAccounts($root,array $args)
    {
        if(array_key_exists('bank', $args))
            $accounts = user::find(Auth::guard('api')->user()->id)
                            ->accounts()
                            ->where('bank','=',$args['bank'])
                            ->get();
        else
            $accounts = user::find(Auth::guard('api')->user()->id)->accounts;
        return $accounts;
    }

    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
}
