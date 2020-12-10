<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CatalogController extends Controller
{
    public function index()
    {
        return Inertia::render('Catalog/Catalog');
    }
}
