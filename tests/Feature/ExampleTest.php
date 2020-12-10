<?php

namespace Tests\Feature;

use Illuminate\Auth\Events\Registered;
use Tests\TestCase;
use Illuminate\Support\Facades\Notification;
use App\Models\User;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
