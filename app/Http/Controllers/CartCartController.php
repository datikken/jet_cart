<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use stdClass;

class CartCartController extends Controller
{
    public function index()
    {

//        return Inertia::render('Cart/Cart', [
//            'cartItems' => ''
//        ]);
//
//        return Inertia::render('Cart/Empty', [
//            'cartItems' => ''
//        ]);
    }

    public function show() {}
    public function get() {}
    public function create() {}
    public function store() {}
    public function edit() {}
    public function update() {}
    public function destroy() {}

    public function checkCartState()
    {
        $cart = Session::get('cart');

        return response()->json($cart);
    }
}
