<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard',[App\Http\Controllers\HomeController::class,'index'])->name('dashboard');


    Route::get('/get-data',[App\Http\Controllers\HomeController::class,'getData'])->name('get-data');


    Route::get('/get-color/{id}',[App\Http\Controllers\HomeController::class,'getColor'])->name('get-color');
    Route::get('/get-style/{id}',[App\Http\Controllers\HomeController::class,'getStyle'])->name('get-style');
    Route::get('/get-buttons',[App\Http\Controllers\HomeController::class,'getButtons'])->name('get-buttons');
    Route::get('/get-lapel-medium',[App\Http\Controllers\HomeController::class,'getLapelMedium'])->name('get-lapel-medium');
    Route::get('/get-lapel-width',[App\Http\Controllers\HomeController::class,'getLapelWidth'])->name('get-lapel-width');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
