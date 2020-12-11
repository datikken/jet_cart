<?php

namespace App\Http\Controllers;

use App\Facades\Cart;
use Illuminate\Session\SessionManager;
use Inertia\Inertia;

class CartController extends Controller
{
    public function __construct(SessionManager $seSmanager)
    {
        $this->seSmanager = $seSmanager;
    }

    public function index() {
        $cart = $this->show();

        return Inertia::render('Cart/Cart', [
            'cart' => $cart
        ]);
    }

    public function show()
    {
        $cart = Cart::content();

        return response()->json($cart);
    }

    public function get(){}
    public function create(){}
    public function store(){}
    public function edit(){}
    public function update(){}

    public function destroy() {
        $this->seSmanager->forget('cart');
    }

}
