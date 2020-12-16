<?php

namespace App\Listeners;

use Illuminate\Session\SessionManager;

class OrderEventSubscriber
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
     * Handle user logout events.
     */
    public function handleOrderCreated($event) {
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
            'App\Events\OrderCreated',
            [OrderEventSubscriber::class, 'handleOrderCreated']
        );
    }
}
