<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HitsController extends Controller
{
    public function index()
    {
        return Inertia::render('Hits/Hits');
    }
}
