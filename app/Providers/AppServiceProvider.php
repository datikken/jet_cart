<?php

namespace App\Providers;

use App\Observers\ProductsObserver;
use Illuminate\Support\ServiceProvider;
use App\Models\Product;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Product::observe(ProductsObserver::class);
    }
}
