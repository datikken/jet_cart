<?php

namespace App\Http\Controllers;

use App\Events\OrderCreated;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Facades\Cart;

class OrderController extends Controller
{
    public function index()
    {
    }

    public function show()
    {
    }

    public function get()
    {
    }

    public function create()
    {
        $total = Cart::total();

        $orderDto = array(
            'order_status' => 'on_hold',
            'order_total' => $total,
            'order_payment' => false,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        );

        $ord = new Order($orderDto);
        $ord->save();

        $cart = Cart::content();

        foreach ($cart as $cartItem) {
            $orderItemsDto = array(
                'order_id' => $ord->id,
                'product_id' => $cartItem->id,
                'product_qty' => $cartItem->qty,
                'product_price' => $cartItem->price,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            );

            DB::table('order_product')->insertOrIgnore($orderItemsDto);
        }


        OrderCreated::dispatch($ord);


        return response()->json(['status' => 200, 'message' => 'Order successfully created.', 'order_total' => $ord->order_total]);
    }

    public function store()
    {

    }

    public function edit()
    {
    }

    public function update()
    {
    }

    public function destroy()
    {
    }
}
