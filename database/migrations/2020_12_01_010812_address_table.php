<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
//
//
//'user_id',
//        'city',
//        'street',
//        'home',
//        'wing',
//        'building',
//        'porch',
//        'intercom',
//        'floor',
//        'flat',
//        'comment',
//        'created_at',
//        'updated_at'
//
//
class AddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('user_id')->nullable();
            $table->string('city')->nullable();
            $table->string('street')->nullable();
            $table->string('home')->nullable();
            $table->string('wing')->nullable();
            $table->string('building')->nullable();
            $table->string('porch')->nullable();
            $table->string('intercom')->nullable();
            $table->string('floor')->nullable();
            $table->string('flat')->nullable();
            $table->string('comment')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
