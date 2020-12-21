<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function get()
    {
        return Inertia::render('Checkout/Checkout');
    }
}
