<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return  User::with("phones")->get();
    }

    public function show(User $user)
    {
        return  $user->where("id", $user->id)->with("phones")->get();
    }

    public function store(Request $req)
    {
        return User::create(
            array("full_name" => $req["full_name"],"age" => $req["age"])
            )->phones()->create(array("number_phone" => $req["number_phone"]));
    }

    public function update(User $user, Request $req)
    {
        $user->update(array("full_name" => $req["full_name"],"age" => $req["age"]));
        $user->phones()->update(array("number_phone" => $req["number_phone"]));       

        return $user;
    }

    public function destroy(User $user)
    {
        if($user)
        {
            if($user->phones()->delete())
            {
                if($user->delete())
                {
                    return "Excluido com sucesso";
                }
            }
        }
    }
}
