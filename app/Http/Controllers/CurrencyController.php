<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function ConvertCurrency($amount,$currency)
    {
       try{
            $data = Http::get('https://www.amdoren.com/api/currency.php?api_key=zL4znzQUm4thNEut4bkJF2ks8qCN84&from=USD&to='.$currency.'&amount='.$amount)->json();
            return $data['amount'];
       }
       catch(Exception $e)
       {
           return $e;
       }

    }
    public function ValidCurrency($currency)
    {
        try{
            $data = Http::get('https://www.amdoren.com/api/currency.php?api_key=zL4znzQUm4thNEut4bkJF2ks8qCN84&from=USD&to='.$currency.'&amount=1')->json();
            if($data['error_message'][0] == '-'){
                return true;
            }
            return false;
       }
       catch(Exception $e)
       {
           return $e;
       }
    }
}
