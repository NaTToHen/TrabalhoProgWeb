<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Fornecedora;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        //\App\Models\User::factory(10)->create();

        /*User::factory()->create([
            'name' => 'admin',
            'password' => 'admin'
        ]);*/

        Fornecedora::factory()->create([
            'nome' => 'Garoto',
            'endereco' => 'Rua ABC, 369',
            'cidade' => 'Rio de Janeiro',
            'uf' => 'RJ'
        ]);

        // Fornecedor 3
        Fornecedora::factory()->create([
            'nome' => 'Lacta',
            'endereco' => 'Rua Terezinha, 1200',
            'cidade' => 'Belo Horizonte',
            'uf' => 'MG'
        ]);

        // Fornecedor 4
        Fornecedora::factory()->create([
            'nome' => 'Neugebauer',
            'endereco' => 'Av. Principal, 256',
            'cidade' => 'Porto Alegre',
            'uf' => 'RS'
        ]);

        // Fornecedor 5
        Fornecedora::factory()->create([
            'nome' => '3 Corações',
            'endereco' => 'Rua Teste, 789',
            'cidade' => 'Curitiba',
            'uf' => 'PR'
        ]);
    }
}
