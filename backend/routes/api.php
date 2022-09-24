<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create-post', [PostController::class,'create'] );
Route::get('/post', [PostController::class,'listOfPosts'] ); 
Route::get('/post/{post_id}', [PostController::class,'Post'] ); 
Route::delete('/delete/{post_id}', [PostController::class,'deletePost'] ); 
Route::put('/edit/{post_id}', [PostController::class,'editPost'] ); 
