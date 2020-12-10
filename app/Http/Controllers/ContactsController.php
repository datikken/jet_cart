<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactsController extends Controller
{
    public function index()
    {
        return Inertia::render('Contacts/Contacts');
    }
}
