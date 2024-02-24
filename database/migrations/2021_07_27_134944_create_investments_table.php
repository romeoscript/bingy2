<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("investmentplan");
            $table->string("investmentpercent");
            $table->string("investmentdate");
            $table->string("investmentduration");
            $table->string("investmentprofit");
            $table->string("investmenttotalprofit");
            $table->string("investmentmaturitydate");
            $table->string("investmentamount");
            $table->string("investmentStatus");
            $table->text("stage");
            $table->string("type");
            $table->integer("userid");
            $table->integer("nooftimes");
            $table->integer("gotteninvestmentprofit")->default(0);


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investments');
    }
}
