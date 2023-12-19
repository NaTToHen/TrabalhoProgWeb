<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Models\Fornecedora;
use App\Models\Valortotal;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    function read()
    {
        $dados = Produto::from('info_produtos')->get();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'descricao' => 'required',
            'valor' => 'required|numeric',
            'fornecedora' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500, [], JSON_UNESCAPED_UNICODE);
        } else {
            $produto = new Produto;
            $produto->nome = $request->nome;
            $produto->descricao = $request->descricao;
            $produto->fk_fornecedora = $request->fornecedora;
            $produto->valor = $request->valor;
            $produto->save();

            if ($produto->save()) {
                return response()->json("Produto cadastrado com sucesso");
            } else {
                return response()->json("Erro ao cadastrar produto");
            }
        }
    }

    function edit($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'descricao' => 'required',
            'valor' => 'required|numeric',
            'fornecedora' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500, [], JSON_UNESCAPED_UNICODE);
        } else {
            $produto = Produto::find($id);
            $produto->nome = $request->nome;
            $produto->descricao = $request->descricao;
            $produto->valor = $request->valor;
            $produto->fk_fornecedora = $request->fornecedora;

            $produto->save();

            return response()->json("cadastrado", 200, [], JSON_UNESCAPED_UNICODE);
        }
    }

    function delete($id)
    {
        $produto = Produto::find($id);
        $produto->delete();
        return response()->json("sucesso");
    }

    function fornecedoras()
    {
        $dados = Fornecedora::all();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function produto($id)
    {
        $produto = Produto::find($id);
        return response()->json($produto, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function valorTotal() {
        $valorTotal = Valortotal::all();
        return $valorTotal;
    }
}
