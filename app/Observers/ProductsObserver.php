<?php

namespace App\Observers;

use App\Models\Product;
use Carbon\Carbon;

class ProductsObserver
{
    /**
     * Handle the Product "created" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function created(Product $product)
    {
        $product->created_at = Carbon::now();
    }

    /**
     * Handle the Product "updated" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function updated(Product $product)
    {
        $product->updated_at = Carbon::now();
    }

    /**
     * Handle the Product "deleted" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function deleted(Product $product)
    {
        //
    }

    /**
     * Handle the Product "restored" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function restored(Product $product)
    {
        //
    }

    /**
     * Handle the Product "force deleted" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function forceDeleted(Product $product)
    {
        //
    }
}
