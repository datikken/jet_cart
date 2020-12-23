<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Obiefy\API\Facades\API;

class UserController extends Controller
{
    public function setName(Request $request)
    {
        $name = $request->name;
        $statusText = Config::get('responses.success.setName');

        return $this->store($name,'name', $statusText);
    }

    public function setLastName(Request $request)
    {
        $lastname = $request->last_name;
        $statusText = Config::get('responses.success.setLastName');

        return $this->store($lastname,'last_name', $statusText);
    }

    public function setTel(Request $request)
    {
        $tel = $request->tel;
        $statusText = Config::get('responses.success.setTel');

        return $this->store($tel,'tel', $statusText);
    }

    public function store($val, $col, $statusText)
    {
        $id = Auth::id();
        DB::table('users')->where('id', $id)->update(array($col => $val));

        $response = [
            'status' => 200,
            'message' => $statusText,
        ];

        return response()->json($response);
    }
}
