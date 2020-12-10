<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ApiController extends Controller
{
    public function makeRequest()
    {
        $client = new Client([
            'headers' => ['Content-Type' => 'application/json']
        ]);

        $response = $client->post('http://93.184.160.194:8085/mainbase/hs/ecom/getitems',
            ['body' => json_encode(
                [
                    'IDToken' => '298095c6-7f9e-11e1-a511-001b214bf52b'
                ]
            )]
        );

        $res = $response->getBody()->getContents();
        $json = json_decode($res);

        return $json;
    }
}
