<?php

namespace App\GraphQL;
use App\Models\account;
use DB;


class AccountObserver
{

    public function updateBalance($account,$balance,$deposit)
    {
        if($deposit)
            $NewBalance = floatval($account->balance)+floatval($balance);
        else
            $NewBalance = floatval($account->balance)-floatval($balance);
        
        $account->updateBalance( (string)$NewBalance);

    }
}