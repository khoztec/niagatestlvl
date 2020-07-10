<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
    * Index view for Welcome Related Controller.
    *
    * @return \Illuminate\Contracts\Support\Renderable
    */
    public function index()
    {
        return view("welcome");
    }
}
