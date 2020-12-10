<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class WelcomeController extends Controller
{
    private $sldCtrl;
    private $prdCtrl;

    public function __construct(ProductController $prdCtrl, SliderController $sldCtrl)
    {
        $this->prdCtrl = $prdCtrl;
        $this->sldCtrl = $sldCtrl;
    }

    public function index()
    {
        $ten = $this->prdCtrl->getTenProductsWithImages();
        $slides = $this->sldCtrl->getMainSliderImages();

        return Inertia::render('Welcome', [
            'tenProducts' => $ten,
            'slides' => $slides
        ]);
    }
}
