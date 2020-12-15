<?php

namespace App\Http\Controllers;

use App\Facades\Cart;
use Illuminate\Session\SessionManager;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;

class CartController extends Controller
{
    public function __construct(SessionManager $seSmanager)
    {
        $this->seSmanager = $seSmanager;
        $this->id = '';
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

        $newCartItems = array();

        foreach ($cartContent as $k => $cnt) {
            $photo = $cnt->model->findProductImage();
            $name = $cnt->model->artikul;

            $cnt->photo = $photo;
            $cnt->name = $name;

            $cartContent[$k] = $cnt;

            array_push($newCartItems, $cartContent[$k]);
        }

        return response()->json([
            'content' => $newCartItems,
            'qnt' => $qnt,
            'total' => $cartTotal
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'rowId' => 'required',
            'amount' => 'required|numeric'
        ]);

        $rowId = $request->rowId;
        $qty = $request->amount;

        Cart::update($rowId, $qty);

        return response()->json(['status' => 200, 'message' => 'success']);
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

    public function delete(Request $request)
    {
        $id = $request->id;
        $this->id = $id;

        if ($request->has('id')) {
            $cartItem = Cart::search(function ($cartItem, $rowId) {
                if ($cartItem->id === $this->id) {
                    Cart::remove($rowId);
                }
            });
        }

        return response()->json(['status' => 200, 'message' => 'success']);
    }

    public function destroy()
    {
        $this->seSmanager->forget('cart');
    }

}
