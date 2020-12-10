<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;

class SliderController extends Controller
{
    public function getMainSliderImages()
    {
        $images = Slider::all();

        return response()->json($images);
    }
}
