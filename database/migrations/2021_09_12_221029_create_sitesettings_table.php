<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitesettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sitesettings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('btc_address')->nullable();
            $table->string('paypal')->nullable();
            $table->string('eth')->nullable();
            $table->string('usdt')->nullable();
            $table->string('xrp')->nullable();

            $table->integer("withdrawal_minimum")->default(0);
            $table->integer("withdrawal_maximum")->default(9999999);

            $table->string("companyabouttitle")->nullable();
            $table->text("companyabouttext")->nullable();
            $table->string("companyname")->nullable();
            $table->string("companyrunningdays")->nullable();
            $table->string("companyemail")->nullable();
            $table->string("companylocation")->nullable();
            $table->string("companyphone")->nullable();
            $table->string("depositcharge")->nullable();
            $table->string("withdrawlcharges")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitesettings');
    }
}
