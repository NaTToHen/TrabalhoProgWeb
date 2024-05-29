<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function read()
    {
        $dados = Categoria::all();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function readById($id)
    {
        $dados = Categoria::find($id);
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'descricao' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500, [], JSON_UNESCAPED_UNICODE);
        } else {
            $categoria = new categoria;
            $categoria->nome = $request->nome;
            $categoria->descricao = $request->descricao;
            $categoria->save();

            if ($categoria->save()) {
                return response()->json("categoria cadastrada com sucesso");
            } else {
                return response()->json("Erro ao cadastrar categoria");
            }
        }
    }


    public function edit($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'descricao' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500, [], JSON_UNESCAPED_UNICODE);
        } else {
            $categoria = Categoria::find($id);
            $categoria->nome = $request->nome;
            $categoria->descricao = $request->descricao;
            $categoria->save();

            return response()->json("categoria editada com sucesso", 200, [], JSON_UNESCAPED_UNICODE);
        }
    }

    function delete($id)
    {
        $categoria = Categoria::find($id);
        $categoria->delete();
        return response()->json("sucesso", 200, [], JSON_UNESCAPED_UNICODE);
    }
}
