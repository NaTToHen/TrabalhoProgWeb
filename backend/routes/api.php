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
    Route::post('/create', [CrudController::class, 'create']);
    Route::post('/produto/{id}/delete', [CrudController::class, 'delete']);
    Route::post('/produto/{id}/edit', [CrudController::class, 'edit']);

    Route::get('/fornecedoras', [CrudController::class, 'fornecedoras']);
    Route::get('/produto/{id}', [CrudController::class, 'produto']);
    Route::get('/valortotal', [CrudController::class, 'valorTotal']);

    Route::get('/categorias', [CategoriaController::class, 'read']);
    Route::post('/categorias', [CategoriaController::class, 'create']);
    Route::get('/categorias/{id}', [CategoriaController::class, 'readById']);
    Route::delete('/categorias/{id}', [CategoriaController::class, 'delete']);
    Route::put('/categorias/{id}', [CategoriaController::class, 'edit']);
   
    Route::get('/filmes', [FilmeController::class, 'read']);
    Route::post('/filmes', [FilmeController::class, 'create']);
    Route::get('/filmes/{id}', [FilmeController::class, 'readById']);
    Route::delete('/filmes/{id}', [FilmeController::class, 'delete']);
    Route::put('/filmes/{id}', [FilmeController::class, 'edit']);
});
