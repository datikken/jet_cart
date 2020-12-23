<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth;

class UserController extends Controller
{
    public function setName(Request $request)
    {
        $name = $request->name;

    }

    public function setLastName(Request $request)
    {
        $lastname = $request->lastname;

    }

    public function setTel(Request $request)
    {
        $tel = $request->tel;
    }
}
