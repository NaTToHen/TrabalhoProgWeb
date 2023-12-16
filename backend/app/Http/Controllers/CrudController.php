<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    function read() {
        $dados = Produto::from('info_produtos')->get();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }
}
