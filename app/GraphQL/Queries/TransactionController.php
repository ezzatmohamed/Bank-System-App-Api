<?php

namespace App\GraphQL\Queries;

use App\Models\account;
use App\Models\transaction;
use App\Models\deposit;
use App\Models\withdraw;
use App\Models\transfer;
use App\GraphQl\AccountObserver;
use Illuminate\Support\Facades\Auth;
use DB;

class TransactionController
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function getTransactions($root,array $args)
    {
        try{
            $user_id = Auth::guard('api')->user()->id;
            if(array_key_exists('from', $args) && array_key_exists('to', $args) )
                $transactions = transaction::where('user_id','=',$user_id)
                                           ->whereBetween('created_at', [$args['from'], $args['to']])
                                           ->get();
            else
                $transactions = transaction::where('user_id','=',$user_id)->get();

            return $transactions; 

        }catch(Exception $e)
        {
            return $e;
        }
    }
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
}
