<?php

namespace Database\Seeders;

use App\Models\Produto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProdutoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Produto::factory()->create([
            'nome' => 'Garoto ao leite',
            'descricao' => 'Chocola ao leite, 90g',
            'valor' => 5.99,
            'fk_fornecedora' => 2,
        ]);

        Produto::factory()->create([
            'nome' => 'Nestlé meio amargo 45% cacau',
            'descricao' => 'Chocolate meio amargo, 100g',
            'valor' => 6.99,
            'fk_fornecedora' => 1,
        ]);

        Produto::factory()->create([
            'nome' => 'Caixa de bombom Lacta',
            'descricao' => 'Caixa de bombom Lactea, edição favoritos com 15 chocolates',
            'valor' => 15.90,
            'fk_fornecedora' => 3,
        ]);

        Produto::factory()->create([
            'nome' => 'Lindt caramelo',
            'descricao' => 'Chocolate suíço com lascas de caramelo, 150g',
            'valor' => 11.99,
            'fk_fornecedora' => 4,
        ]);

        Produto::factory()->create([
            'nome' => 'Chocolate 40% Cacau Neugebauer',
            'descricao' => 'Tablete Neugebauer Meio Amargo: cremoso, macio, derrete na boca e tem um gostinho inconfundível.',
            'valor' => 4.99,
            'fk_fornecedora' => 4,
        ]);

        Produto::factory()->create([
            'nome' => 'Cadbury ao leite com café',
            'descricao' => 'Chocolate ao leite inglês com café premium 3 Corações, 110g',
            'valor' => 22.90,
            'fk_fornecedora' => 5,
        ]);

    }
}
