<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Categoria;

class ListCategoriesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_list_all_categories()
    {
        $categories = categoria::factory()->count(3)->create();

        $response = $this->getJson('/api/crud/categorias');

        $response->assertStatus(200);
        $response->assertJsonCount(3);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'nome',
                'created_at',
                'updated_at'
            ]
        ]);

        foreach ($categories as $category) {
            $response->assertJsonFragment([
                'id' => $category->id,
                'nome' => $category->nome
            ]);
        }
    }
}
