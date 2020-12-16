<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;

use App\Listeners\UserEventSubscriber;
use App\Listeners\OrderEventSubscriber;

use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;


class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ]
    ];

    protected $subscribe = [
        UserEventSubscriber::class,
        OrderEventSubscriber::class
    ];
    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
