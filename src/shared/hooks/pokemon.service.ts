import type { PokemonType } from "./pokemon.types";

class PokemonService {
	async getPokemons(): Promise<PokemonType[]> {
		const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");

		if (!response.ok) {
			throw new Error("Error fetching pokemon");
		}

		const data = await response.json();
		return data as PokemonType[];
	}
}
export const pokemonService = new PokemonService();
