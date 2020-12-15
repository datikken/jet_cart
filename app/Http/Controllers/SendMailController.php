<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderCreated;
use http\Env\Request;

class SendMailController extends Controller
{
    public static function sendOrderWasCreated($id)
    {
        $user_id = Auth::id();
        $customer = DB::table('users')->where('id', $user_id)->select('email')->get();

        $data = array(
            'id' => $id
        );

        Mail::to($customer)->send(new OrderCreated($data));

        return back()->with('success', 'Thanks for contacting us');
    }
}
