<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestmentplansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investmentplans', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("duration");
            $table->string("durationunit");
            $table->string("refpercent");
            $table->string("percentage");
            $table->integer("minimum");
            $table->integer("maximum");
            $table->string("name");
            $table->integer("repeat")->default(0);
            $table->integer("noofrepeat")->default(0);
            $table->string("type");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investmentplans');
    }
}
