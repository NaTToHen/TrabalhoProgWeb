<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Filme;

class ListFilmTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_list_all_films()
    {
        $films = filme::factory()->count(3)->create();

        $response = $this->getJson('/api/crud/filmes');

        $response->assertStatus(200);
        $response->assertJsonCount(3);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'titulo',
                'sinopse',
                'ano',
                'duracao',
                'idioma',
                'id_categoria',
                'created_at',
                'updated_at'
            ]
        ]);

        foreach ($films as $film) {
            $response->assertJsonFragment([
                'id' => $film->id,
                'titulo' => $film->titulo,
                'sinopse' => $film->sinopse,
                'ano' => $film->ano,
                'duracao' => $film->duracao,
                'idioma' => $film->idioma,
                'id_categoria' => $film->id_categoria
            ]);
        }
    }
}
