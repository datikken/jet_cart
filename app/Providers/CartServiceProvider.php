<?php
/**
 * Created by IntelliJ IDEA.
 * User: datikken
 * Date: 11.12.2020
 * Time: 05:17
 */

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class CartServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('cart', 'App\Models\Cart');
        $config = base_path() . '/config/cart.php';
        $this->mergeConfigFrom($config, 'cart');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
