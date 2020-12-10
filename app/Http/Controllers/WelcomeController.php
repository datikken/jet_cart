<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $ten = app()->call('App\Http\Controllers\ProductController::getTenProductsWithImages');

        return Inertia::render('Welcome', [
            'tenProducts' => $ten
        ]);
    }
}
