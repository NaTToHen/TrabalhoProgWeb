<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\FilmeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CrudController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [LoginController::class, 'auth'])->name("login");

Route::prefix('crud')->group(function() {
    Route::get('/read', [CrudController::class, 'read']);

    Route::get('/categorias', [CategoriaController::class, 'read']);
    Route::post('/categoria', [CategoriaController::class, 'create']);
    Route::get('/categorias/{id}', [CategoriaController::class, 'readById']);
    Route::delete('/categorias/{id}', [CategoriaController::class, 'delete']);
    Route::put('/categorias/{id}', [CategoriaController::class, 'edit']);
   
    Route::get('/filmes', [FilmeController::class, 'read']);
    Route::post('/filmes', [FilmeController::class, 'create']);
    Route::get('/filmes/{id}', [FilmeController::class, 'readById']);
    Route::delete('/filmes/{id}', [FilmeController::class, 'delete']);
    Route::post('/filmes/edit/{id}', [FilmeController::class, 'edit']);
});
