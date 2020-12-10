<?php

namespace App\Nova\Actions;

use App\Helpers\Converter;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Fields\ActionFields;
use App\Models\Product;
use App\Http\Controllers\ApiController;


class GetProducts extends Action
{
    use InteractsWithQueue, Queueable;

    /**
     * Perform the action on the given models.
     *
     * @param  \Laravel\Nova\Fields\ActionFields $fields
     * @param  \Illuminate\Support\Collection $models
     * @return mixed
     */
    public function handle(ActionFields $fields, Collection $models)
    {
       $this->run();
    }

    public function parse()
    {

        $jsonString = file_get_contents(base_path('resources/json/products.json'));

        $json = json_decode($jsonString);

        return $json;
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

        Product::updateOrCreate($newDto);
    }

    /*
     * for each product cape returns array of objects: { brand: **, model: **}
     */
    public function reorganizeProductCape($cape)
    {
        $merged = array();

        foreach ($cape as $key => $prm) {
            $newCape = new \stdClass();

            foreach ($prm as $a => $b) {
                $newCape->brand = $a;
                $newCape->model = $b;
            }

            array_push($merged, $newCape);
        }

        $result = strval(json_encode($merged));

        return $result;
    }

    public function run()
    {
        $fileJson = $this->parse();

        $converter = new Converter();

        foreach ($fileJson as $product) {

            $oldVal = (array)$product;
            $newProduct = array();
            $converter = new Converter();

            foreach ($oldVal as $key => $val) {
                $newKey = $converter->translit($key);
                $newProduct[$newKey] = $val;
            }

            $this->createProductsDto($newProduct);
        }

        dump(count($fileJson));

        return response()->json('success');
    }

    /**
     * Get the fields available on the action.
     *
     * @return array
     */
    public function fields()
    {
        return [];
    }
}
