<?php
/**
 * Created by IntelliJ IDEA.
 * User: datikken
 * Date: 11.12.2020
 * Time: 04:51
 */

namespace App\Facades;

use Illuminate\Support\Facades\Facade;


class Cart extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'cart';
    }
}
