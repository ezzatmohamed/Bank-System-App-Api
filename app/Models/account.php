<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class account extends Model
{
    use HasFactory;
    public function user() 
    {
        return $this->belongsTo('App\Models\user');
    }
    public function updateBalance($balance)
    {
        $this->balance = $balance;
        $this->save();

    }
}
