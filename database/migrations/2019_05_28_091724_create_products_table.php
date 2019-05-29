<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->increments('id');
            $table->string('kind');
            $table->string('name');
            $table->string('year');
            $table->string('path_image');
            $table->float('weight');
            $table->integer('stock');
            $table->float('alcohol');
            $table->string('quotation');
            $table->integer('format_id')->unsigned();
            $table->foreign('format_id')
                ->references('id')
                ->on('formats');
            $table->integer('type_id')->unsigned();
            $table->foreign('type_id')
                ->references('id')
                ->on('types');
            $table->integer('region_id')->unsigned();
            $table->foreign('region_id')
                ->references('id')
                ->on('regions');
            $table->integer('price_id')->unsigned();
            $table->foreign('price_id')
                ->references('id')
                ->on('prices');
         });
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