<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->nullable();
            $table->string('photo')->nullable();
            $table->longText('name_buh')->nullable();
            $table->string('price')->nullable();
            $table->string('stock')->nullable();
            $table->string('currency_code')->nullable();
            $table->longText('params')->nullable();
            $table->string('name_ecom')->nullable();
            $table->string('type')->nullable();
            $table->string('artikul')->nullable();
            $table->longText('bro_color')->nullable();
            $table->longText('bro_v3')->nullable();
            $table->longText('bro_brand')->nullable();
            $table->longText('bro_counter_brand')->nullable();
            $table->longText('cape')->nullable();
            $table->longText('oem')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });

        DB::statement('ALTER TABLE products ADD FULLTEXT fulltext_index (uuid, photo, name_buh, price, stock, currency_code, params, name_ecom, type, artikul, bro_color, bro_v3, bro_brand, bro_counter_brand, cape, oem)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
