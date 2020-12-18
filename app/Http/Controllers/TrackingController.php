<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TrackingController extends Controller
{
    public function index()
    {
        return Inertia::render('Tracking/Tracking');
    }

    public function trackingGet(Request $request)
    {
        $state = $request->validateWithBag('trackingGet', [
            'numb' => 'required|numeric',
            'email' => 'required|email'
        ]);

        return Inertia::render('Tracking/TrackingStatus', [
            'state' => $state
        ]);
    }
}
