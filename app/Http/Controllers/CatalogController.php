<?php

namespace App\Http\Controllers;

use App\Helpers\Converter;
use App\Models\Product;
use Inertia\Inertia;

class CatalogController extends Controller
{

    public function __construct(ProductController $prdCtrl)
    {
        $this->prdCtrl = $prdCtrl;
    }

    public function index()
    {
        $prdCts = Product::all();
        $ten = $this->prdCtrl->getTenProductsWithImages();

        return Inertia::render('Catalog/Catalog',[
            'tenProducts' => $ten,
            'products' => $prdCts
        ]);
    }

    public function get($id)
    {
        $prdct = Product::where('id', $id)->get();

        return Inertia::render('Catalog/CatalogDetails',[
            'product' => $prdct[0]
        ]);
    }
}
