<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
class User extends Model
{
    protected $fillable  = [
       'id' ,'full_name', 'age',
    ];
    public  $timestamps   = false;

    public function phones()
    {
        return $this->hasOne("App\Phone", "user_id", "id");
    }
}
