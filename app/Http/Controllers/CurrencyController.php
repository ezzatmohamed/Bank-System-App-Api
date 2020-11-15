<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function ConvertCurrency($amount,$currency)
    {
       try{
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, 'https://xecdapi.xe.com/v1/convert_from.json/?from=EGP&to='.$currency.'&amount='.$amount.'');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            
            curl_setopt($ch, CURLOPT_USERPWD, 'freelancer713782024' . ':' . 'bju4g2ibh6q52s2mhllnd9vtkp');
            
            $result = json_decode(curl_exec($ch));
            $newBalance = ($result->{'to'})[0]->{'mid'};
            
            if (curl_errno($ch)) {
                echo 'Error:' . curl_error($ch);
            }
            curl_close($ch);
            return $newBalance;
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
            // 'curl –i -u freelancer713782024:bju4g2ibh6q52s2mhllnd9vtkp "https://xecdapi.xe.com/v1/convert_from.json/?from=EGP&to=USD&amount=20"'
            return false;
       }
       catch(Exception $e)
       {
           return $e;
       }
    }
}
