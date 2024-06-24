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
        $dados = filme::from('lista_filmes')->get();
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
            'titulo' => 'required',
            'sinopse' => 'required',
            'ano' => 'required',
            'duracao' => 'required',
            'idioma' => 'required',
            'categoria' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500, [], JSON_UNESCAPED_UNICODE);
        } else {
            $filme = new filme;
            $filme->titulo = $request->titulo;
            $filme->sinopse = $request->sinopse;
            $filme->ano = $request->ano;
            $filme->duracao = $request->duracao;
            $filme->idioma = $request->idioma;
            $filme->id_categoria = $request->categoria;

            $filme->save();

            if ($filme->save()) {
                return response()->json("Filme cadastrada com sucesso");
            } else {
                return response()->json("Erro ao cadastrar filme");
            }
        }
    }


    public function edit($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'titulo' => 'required',
            'sinopse' => 'required',
            'ano' => 'required',
            'duracao' => 'required',
            'idioma' => 'required',
            'id_categoria' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500, [], JSON_UNESCAPED_UNICODE);
        } else {
            $filme = filme::find($id);
            $filme->titulo = $request->titulo;
            $filme->sinopse = $request->sinopse;
            $filme->ano = $request->ano;
            $filme->duracao = $request->duracao;
            $filme->idioma = $request->idioma;
            $filme->id_categoria = $request->id_categoria;

            $filme->save();

            return response()->json("Filme editada com sucesso", 201, [], JSON_UNESCAPED_UNICODE);
        }
    }

    function delete($id)
    {
        $filme = filme::find($id);
        $filme->delete();
        return response()->json("sucesso", 200, [], JSON_UNESCAPED_UNICODE);
    }
    
}
