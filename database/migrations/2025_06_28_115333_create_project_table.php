<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('project', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('short_description');
            $table->text('description')->nullable();
            $table->string('image_path')->nullable();
            $table->string('icon')->nullable();
            $table->json('skills')->nullable();
            $table->string('demo_link')->nullable();
            $table->string('github_link')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->date('project_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project');
    }
};
