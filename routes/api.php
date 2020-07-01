<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'setting'], function(){
    Route::group(['prefix' => 'category'], function(){
        Route::get('/', 'SettingCategoryController@index');
        Route::post('/', 'SettingCategoryController@store');
        Route::get('/{id}', 'SettingCategoryController@show');
        Route::put('/{id}', 'SettingCategoryController@update');
        Route::delete('/{id}', 'SettingCategoryController@destroy');
    });

    Route::get('/', 'SettingController@index');
    Route::post('/', 'SettingController@store');
    Route::get('/key/{key}', 'SettingController@showKey');
    Route::get('/{id}', 'SettingController@show');
    Route::put('/{id}', 'SettingController@update');
    Route::delete('/{id}', 'SettingController@destroy');
});

Route::group(['prefix' => 'page'], function(){
    Route::get('/', 'PageController@index');
    Route::post('/', 'PageController@store');
    Route::get('/slug/{slug}', 'PageController@showSlug');
    Route::get('/{id}', 'PageController@show');
    Route::put('/{id}', 'PageController@update');
    Route::delete('/{id}', 'PageController@destroy');

    Route::group(['prefix' => 'module'], function(){
        Route::get('/', 'PageModuleController@index');
        Route::post('/', 'PageModuleController@store');
        Route::get('/slug/{slug}', 'PageModuleController@showSlug');
        Route::get('/{id}', 'PageModuleController@show');
        Route::put('/{id}', 'PageModuleController@update');
        Route::delete('/{id}', 'PageModuleController@destroy');
    });
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
