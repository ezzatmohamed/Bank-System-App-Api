<?php

namespace App\GraphQL\Mutations;
use App\Models\account;
use App\Models\transaction;
use App\Models\deposit;
use App\Models\withdraw;
use App\Models\transfer;
use App\GraphQl\AccountObserver;
use Illuminate\Support\Facades\Auth;
use DB;
use Carbon\Carbon;

class TransactionController
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */

     public function create($root,array $args)
     {
         try{
             
            $user_id = Auth::guard('api')->user()->id;
            $trans = new transaction();
            $trans->user_id = $user_id;
            $trans->save();

            return $trans->id;

         }catch(Exception $e)
         {
             return $e;
         }
         
     }

    public function transfer($root,array $args)
    {
         try{
            // Extracting Information
            $user_id  = Auth::guard('api')->user()->id;
            $trans_id = $args['transId'];
            $from = $args['from'];
            $to = $args['to'];
            $balance= $args['balance'];


            $transaction = transaction::find($trans_id);
            $account = account::find($from);
            $to_account = account::find($to);

            if( is_null($transaction) || is_null($account) || is_null($to_account) 
                || $transaction->user_id != $user_id || $account->user_id != $user_id 
                || !$account->activated || !$to_account->activated 
                || floatval($account->balance) < floatval($balance)
                )
                return false;
            
            // Creating New Transfer
            $withdraw = new transfer();
            $withdraw->transaction_id = $trans_id;
            $withdraw->from = $from;
            $withdraw->to = $to;
            $withdraw->balance = $balance;
            $withdraw->save();

            
            $AccountObserver = new AccountObserver();
            $AccountObserver->updateBalance($account,$balance,false);
            $AccountObserver->updateBalance($to_account,$balance,true);

            // $NewBalance = floatval($account->balance)-floatval($balance);
            // $account->updateBalance( (string)$NewBalance);

            // $to_NewBalance = floatval($balance) + floatval($to_account->balance);
            // $to_account->updateBalance( (string)$to_NewBalance);
            return true;

         }catch(Exception $e)
         {
             return $e;
         }
    }
    public function deposit($root,array $args)
    {
        try{
            // Extracting Information
            $user_id  = Auth::guard('api')->user()->id;
            $trans_id = $args['transId'];
            $to = $args['to'];
            $balance= $args['balance'];


            $transaction = transaction::find($trans_id);
            $account = account::find($to);

            // $account2= new account();
            // return gettype($account2);
            if( is_null($transaction) || is_null($account) || $transaction->user_id != $user_id 
                || $account->user_id != $user_id || !$account->activated  
                )
                return false;
            
            // Creating New Deposit
            $deposit = new deposit();
            $deposit->transaction_id = $trans_id;
            $deposit->to = $to;
            $deposit->balance = $balance;
            $deposit->save();


            $AccountObserver = new AccountObserver();
            $AccountObserver->updateBalance($account,$balance,true);
            
            return true;

         }catch(Exception $e)
         {
             return $e;
         }
    }
    public function withdraw($root,array $args)
    {
        try{
            // Extracting Information
            $user_id  = Auth::guard('api')->user()->id;
            $trans_id = $args['transId'];
            $from = $args['from'];
            $balance= $args['balance'];


            $transaction = transaction::find($trans_id);
            $account = account::find($from);

            if( is_null($transaction) || is_null($account) || $transaction->user_id != $user_id 
                || $account->user_id != $user_id  || !$account->activated
                || floatval($account->balance) < floatval($balance)
                )
                return false;
            
            // Creating New Withdraw
            $withdraw = new withdraw();
            $withdraw->transaction_id = $trans_id;
            $withdraw->from = $from;
            $withdraw->balance = $balance;
            $withdraw->save();

            
            $AccountObserver = new AccountObserver();
            $AccountObserver->updateBalance($account,$balance,false);
            // // TODO: update account balance
            // $NewBalance = floatval($account->balance)-floatval($balance);
            // $account->updateBalance( (string)$NewBalance);
            return true;

         }catch(Exception $e)
         {
             return $e;
         }
    }
    public function deleteTransaction($root,array $args)
    {
        
        DB::beginTransaction();
        try {
            
            $user_id  = Auth::guard('api')->user()->id;
            $trans_id = $args['transId'];
            $transaction = transaction::find($trans_id);

            if( is_null($transaction) || $transaction->user_id != $user_id  )
                return false;
            
            $hours =  round((strtotime(Carbon::now()) - strtotime($transaction->created_at))/3600, 1); 
            if( $hours >= 24 )
                return false;
            $deposits  = deposit::where('transaction_id','=',$trans_id)->get();
            $withdraws = withdraw::where('transaction_id','=',$trans_id)->get();
            $transfers = transfer::where('transaction_id','=',$trans_id)->get();
             
            
            $AccountObserver = new AccountObserver();
            
            
            foreach($withdraws as $withdraw)
            {
                $balance = $withdraw->balance;   
                $account = account::find($withdraw->from);
                $AccountObserver->updateBalance($account,$balance,true);
                $withdraw->delete();
            }
            
            foreach($transfers as $transfer)
            {
                $balance = $transfer->balance;   
                $from_account = account::find($transfer->from);
                $to_account = account::find($transfer->to);
                if( $to_account->balance < $balance )
                {
                    DB::rollback();
                    return false;
                }
                
                $AccountObserver->updateBalance($from_account,$balance,true);
                $AccountObserver->updateBalance($to_account,$balance,false);
                $transfer->delete();
            }
            foreach($deposits as $deposit)
            {
                $balance = $deposit->balance;   
                $account = account::find($deposit->to);
                if( $account->balance < $balance )
                {
                    DB::rollback();
                    return false;
                }
                $AccountObserver->updateBalance($account,$balance,false);
                $deposit->delete();
            }
            
            $transaction->delete();
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return $e;
        }
    }
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
}