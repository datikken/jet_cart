<?php

namespace App\Listeners;

use Illuminate\Session\SessionManager;

class UserEventSubscriber
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(SessionManager $seSmanager)
    {
        $this->seSmanager = $seSmanager;
    }

    /**
     * Handle user login events.
     */
    public function handleUserLogin($event) {}

    /**
     * Handle user logout events.
     */
    public function handleUserLogout($event) {
        $this->seSmanager->forget('cart');
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Login',
            [UserEventSubscriber::class, 'handleUserLogin']
        );

        $events->listen(
            'Illuminate\Auth\Events\Logout',
            [UserEventSubscriber::class, 'handleUserLogout']
        );
    }
}
