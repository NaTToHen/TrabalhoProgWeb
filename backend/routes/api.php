<?php

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

    Route::get('/fornecedoras', [CrudController::class, 'fornecedoras']);
    Route::post('/create', [CrudController::class, 'create']);

    Route::get('/produto/{id}', [CrudController::class, 'produto']);
    Route::post('/produto/{id}/delete', [CrudController::class, 'delete']);
});
