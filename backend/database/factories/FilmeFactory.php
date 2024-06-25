<?php

namespace Database\Factories;

use App\Models\Categoria;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Filme>
 */
class FilmeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'titulo' => $this->faker->sentence,
            'sinopse' => $this->faker->paragraph,
            'ano' => $this->faker->year,
            'duracao' => $this->faker->numberBetween(60, 180),
            'idioma' => $this->faker->languageCode,
            'id_categoria' => Categoria::factory(), // Associa uma categoria aleatória
        ];
    }
}
