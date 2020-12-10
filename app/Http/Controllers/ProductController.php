<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getPaginatedProducts(Request $request)
    {
        $request->validate([
            'amount' => 'required|max:5'
        ]);

        $amount = $request->amount;
        $prdcts = Product::all($amount);

        return $prdcts;
    }

    public static function getTenProductsWithImages()
    {
        $result = array();
        $prdcts = Product::all();

        foreach ($prdcts as $key => $prd) {
            $ext = $prd->findProductImage();
            $json = json_decode($prd->photo);

            if ($json != null) {
                if (count($result) < 10) {
                    array_push($result, $prd);
                }
            }
        }

        return response()->json($result);
    }
}
