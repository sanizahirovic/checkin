<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('logs', function (Blueprint $table) {
          $table->increments('id');
          $table->dateTime('checkin');
          $table->dateTime('checkout');
          $table->integer('user_id')->nullable()->unsigned();
          $table->string('total_time')->nullable();
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
          Schema::drop('logs');
    }
}
