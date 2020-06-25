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
    Route::get('/', 'SettingController@index');
    Route::post('/', 'SettingController@store');
    Route::get('/{id}', 'SettingController@show');
    Route::put('/{id}', 'SettingController@update');
    Route::delete('/{id}', 'SettingController@destroy');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
