<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReferralpercentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('referralpercents', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('firstref')->nullable();
            $table->string('secondref')->nullable();
            $table->string('thirdref')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('referralpercents');
    }
}
