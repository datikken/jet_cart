<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $payload = $request->payload;
        $arr = array('-', ',', '/', '.', ')', '(', '№');
        $newphrase = str_replace($arr, ' ', $payload);

        $prd = Product::search($newphrase)->get();

        $result = $this->splitProductsByType($prd);

        return response()->json($result->original);
    }

    public function testSearch()
    {
        //Длина 335 M3550idn
        $prd = Product::search('335')->get();

        $result = $this->splitProductsByType($prd);

        return response()->json($result);
    }


    public function splitProductsByType($prdctsArr)
    {
        $flows = array();
        $lasers = array();
        $matrix = array();

        foreach ($prdctsArr as $p) {
            $params = json_decode($p->params);

            $flowVal = stripos($params->tip_printera, 'Принтер струйный');
            $lasVal = stripos($params->tip_printera, 'Принтер лазерный');
            $mtrxVal = stripos($params->tip_printera, 'Принтер матричный');

            // reorganizing product cape for sres
            $p['cape'] = $this->reorganizeProductCape($p);

            if($flowVal === 0) {
                array_push($flows, $p);
            }

            if($lasVal === 0) {
                array_push($lasers, $p);
            }

            if($mtrxVal === 0) {
                array_push($matrix, $p);
            }
        }

        $separatedPrdcts = array(
            $flows, $lasers, $matrix
        );

        return response()->json($separatedPrdcts);
    }

    public function reorganizeProductCape($prdct)
    {
        $result = array();
        $oldCape = json_decode($prdct->cape);

        if($oldCape) {
            foreach ($oldCape as $item) {
                $br = $item->brand;
                $md = $item->model;

                if(!array_key_exists($br, $result)) {
                    $result[$br] = array();
                    array_push($result[$br], $md);
                } else {
                    array_push($result[$br], $md);
                }
            }
        }

        return $result;
    }
}
