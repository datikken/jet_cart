<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FeedbackController extends Controller
{
    public function sendContactsProposal(Request $request)
    {
        $name = $request->name;
        $last_name = $request->last_name;
        $text = $request->text;
        $theme = $request->theme;

        $arr = array(
            'name' => $name,
            'last_name' => $last_name,
            'text' => $text,
            'theme' => $theme,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        );

        DB::table('feedback_contacts')->insert($arr);

        return response()->json($arr);
    }


    public function store()
    {

    }
}
