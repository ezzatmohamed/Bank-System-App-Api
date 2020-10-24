<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class withdraw extends Model
{
    use HasFactory;
    public function transaction() 
    {
        return $this->belongsTo('App\Models\transaction');
    }
}
