<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Facades\Cart;

class CartController extends Controller
{
    public function show()
    {
        $cart = Cart::content();

        return response()->json($cart);
    }
}
