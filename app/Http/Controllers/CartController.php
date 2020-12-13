<?php

namespace App\Http\Controllers;

use App\Facades\Cart;
use Illuminate\Session\SessionManager;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;

class CartController extends Controller
{
    public function __construct(SessionManager $seSmanager)
    {
        $this->seSmanager = $seSmanager;
    }

    public function index()
    {
        $cart = $this->show();

        return Inertia::render('Cart/Cart', [
            'cart' => $cart
        ]);
    }

    public function show()
    {
        $cartContent = Cart::content();
        $cartTotal = Cart::total();
        $qnt = Cart::count();

        return response()->json([
            'content' => $cartContent,
            'qnt' => $qnt,
            'total' => $cartTotal
        ]);
    }

    public function get()
    {
    }

    public function add(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'amount' => 'required|numeric'
        ]);

        $id = $request->id;
        $amount = $request->amount;

        $prd = Product::find($id);

        $name = $prd->name_buh;
        $price = intval($prd->price);

        Cart::add($id, $name, $amount, $price);

        return response()->json(['status' => 200, 'message' => 'success']);
    }

    public function edit()
    {
    }

    public function update()
    {
    }

    public function destroy()
    {
        $this->seSmanager->forget('cart');
    }

}
