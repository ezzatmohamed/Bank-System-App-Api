<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{
    use HasFactory;
    public function deposits()
    {
        return $this->hasMany('App\Models\deposit');
    }
    public function withdraws()
    {
        return $this->hasMany('App\Models\withdraw');
    }
    public function transfer()
    {
        return $this->hasOne('App\Models\transfer');
    }
}

