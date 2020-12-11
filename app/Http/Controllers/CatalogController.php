<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function __construct(ProductController $prdCtrl)
    {
        $this->prdCtrl = $prdCtrl;
    }

    public function index()
    {
        $prdcts = Product::all();
        $ten = $this->prdCtrl->getTenProductsWithImages();

        return Inertia::render('Catalog/Catalog',[
            'tenProducts' => $ten,
            'products' => $prdcts
        ]);
    }
}
