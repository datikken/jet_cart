<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Helpers\Converter;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public function parse()
    {

        $jsonString = file_get_contents(base_path('resources/json/products.json'));

        $json = json_decode($jsonString);

        return $json;
    }

    /*
     *  for each product cape returns array of objects: { brand: **, model: **}
     */
    public function reorganizeProductCape($cape)
    {
        $merged = array();

        foreach ($cape as $key=>$prm) {
            $newCape = new \stdClass();

            foreach ($prm as $a=>$b) {
                $newCape->brand = $a;
                $newCape->model = $b;
            }

            array_push($merged, $newCape);
        }

        $result = strval(json_encode($merged));

        return $result;
    }

    public function createProductsDto($dto)
    {
        $converter = new Converter();
        $newDto = array();

            foreach ($dto as $key=>$val) {
                $newDto[$key] = $val;
            }

            foreach ($newDto as $key=>$val) {
                if(gettype($val) === 'array') {
                    $newDto[$key] = $converter->arrObjToStr($val);
                }

                if ($key === 'params') {
                    $newDto['params'] = $converter->arrayObjKeyPairs($val);
                }

                if($key === 'cape') {
                    $newDto['cape'] = $this->reorganizeProductCape($val);
                }
            }

//            if(count($newDto) >= 16) {
//                dd($newDto);
//            }

        Product::updateOrCreate($newDto);
    }

    public function index()
    {


//        $prd = Product::id(1);

        return $u;

//        $fileJson = $this->parse();
//
//        $converter = new Converter();
//
//        foreach ($fileJson as $product) {
//
//            $oldVal = (array) $product;
//            $newProduct = array();
//            $converter = new Converter();
//
//            foreach ($oldVal as $key => $val)
//            {
//                $newKey = $converter->translit($key);
//                $newProduct[$newKey] = $val;
//            }
//
//            $this->createProductsDto($newProduct);
//        }
//
//        dump(count($fileJson));
//
//        return response()->json('success');
    }

    public function all()
    {
        $prd = Product::all();

        return response()->json(count($prd));
    }
}
