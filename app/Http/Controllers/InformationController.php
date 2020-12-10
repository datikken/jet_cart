<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InformationController extends Controller
{
    public function index()
    {
        return Inertia::render('Information/Information');
    }
}
