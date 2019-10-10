<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $fillable   = ["user_id", "number_phone"];
    
    public  $timestamps   = false;

    public function user()
    {
        return $this->belongsTo("App\User", "user_id", "id");
    }
}
