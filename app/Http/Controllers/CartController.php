<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;
use stdClass;

class CartController extends Controller
{
    public function index()
    {
        $cart = Session::get('cart');
        $empty = new stdClass();
        $empty->items = array();
        $empty->totalPrice = '';

        if(is_object($cart)) {
            foreach($cart->items as $cartItem) {
                $type = gettype($cartItem['data']['params']);

                if($type != 'array') {
                    $param = json_decode($cartItem['data']['params']);
                    $newParam = array();

                    foreach($param as $key=>$val) {
                        $newParam[$key] = $val;
                    }

                    $cartItem['data']['params'] = $newParam;
                }
            }
        }

        if($cart) {
            return Inertia::render('Cart/Cart', [
                'cartItems' => $cart
            ]);

        } else {
            return Inertia::render('Cart/Empty', [
                'cartItems' => $empty
            ]);
        }
    }

    public function checkCartState()
    {
        $cart = Session::get('cart');

        return response()->json($cart);
    }
}
