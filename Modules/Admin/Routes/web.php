<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('admin')->group(function() {
    Route::get('/', 'AdminController@index');

    Route::get('/categories',[Modules\Admin\Http\Controllers\CategoriesController::class,'index'])->name('categories');
    Route::get('/categories/create',[Modules\Admin\Http\Controllers\CategoriesController::class,'create'])->name('categories.create');
    Route::post('/categories/store',[Modules\Admin\Http\Controllers\CategoriesController::class,'store'])->name('categories.store');
    Route::get('/categories/view/{cat_id}',[Modules\Admin\Http\Controllers\CategoriesController::class,'show'])->name('categories.show');
    Route::get('/categories/edit/{cat_id}',[Modules\Admin\Http\Controllers\CategoriesController::class,'edit'])->name('categories.edit');
    Route::post('/categories/update/',[Modules\Admin\Http\Controllers\CategoriesController::class,'update'])->name('categories.update');
    Route::delete('/categories/delete/{cat_id}',[Modules\Admin\Http\Controllers\CategoriesController::class,'destroy'])->name('categories.destroy');

    Route::get('/sub-categories/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'index'])->name('sub-categories');
    Route::get('/sub-categories/add/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'create'])->name('sub-categories-add');
    Route::post('/sub-categories/create/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'store'])->name('sub-categories-create');
    Route::get('/sub-categories/view/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'view'])->name('sub-categories-show');
    Route::get('/sub-categories/edit/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'edit'])->name('sub-categories-edit');
    Route::patch('/sub-categories/update/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'update'])->name('sub-categories-update');
    Route::delete('/sub-categories/delete/{cat_id}',[Modules\Admin\Http\Controllers\SubCategoriesController::class,'destroy'])->name('sub-categories-destroy');
});
