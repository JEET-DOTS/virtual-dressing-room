<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thumb_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->string('hip_pockets', 200)->nullable();
            $table->string('breast_pocket', 200)->nullable();
            $table->string('bottom_double', 200)->nullable();
            $table->string('interior', 200)->nullable();
            $table->string('lapel_medium', 200)->nullable();
            $table->string('espalda_abajo', 200)->nullable();
            $table->string('espalda_arriba', 200)->nullable();
            $table->string('top_espalda_arriba', 200)->nullable();
            $table->string('etiquetas', 200)->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thumb_images');
    }
};
