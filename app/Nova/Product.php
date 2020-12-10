<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\DateTime;

class Product extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Product::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
        'uuid',
        'photo',
        'name_buh',
        'price',
        'stock',
        'currency_code',
        'params',
        'name_ecom',
        'type',
        'artikul',
        'bro_color',
        'bro_v3',
        'bro_brand',
        'bro_counter_brand',
        'cape',
        'oem',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make(__('ID'), 'id')->sortable(),
            Text::make('uuid'),
            Text::make('photo'),
            Text::make('name_buh'),
            Text::make('price'),
            Text::make('bro_color'),
            Text::make('stock'),
            Text::make('currency_code'),
            Text::make('params'),
            Text::make('name_econom'),
            Text::make('type'),
            Text::make('artikul'),
            Text::make('bro_color'),
            Text::make('bro_v3'),
            Text::make('bro_brand'),
            Text::make('bro_counter_brand'),
            Text::make('cape'),
            Text::make('oem'),
            DateTime::make('created_at')->hideFromIndex(),
            DateTime::make('updated_at')->hideFromIndex()
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [
            Actions\GetProducts::make()->standalone(),
            Actions\DeleteProducts::make()->standalone()
        ];
    }
}
