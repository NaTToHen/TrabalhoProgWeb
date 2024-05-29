<?php

namespace App\Http\Controllers;

use App\Models\Filme;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class FilmeController extends Controller
{
    public function read()
    {
        $dados = filme::all();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function readById($id)
    {
        $dados = filme::find($id);
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
            $filme = new filme;
            $filme->nome = $request->nome;
            $filme->descricao = $request->descricao;
            $filme->save();

            if ($filme->save()) {
                return response()->json("filme cadastrada com sucesso");
            } else {
                return response()->json("Erro ao cadastrar filme");
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
            $filme = filme::find($id);
            $filme->nome = $request->nome;
            $filme->descricao = $request->descricao;
            $filme->save();

            return response()->json("filme editada com sucesso", 200, [], JSON_UNESCAPED_UNICODE);
        }
    }

    function delete($id)
    {
        $filme = filme::find($id);
        $filme->delete();
        return response()->json("sucesso", 200, [], JSON_UNESCAPED_UNICODE);
    }
    
}
