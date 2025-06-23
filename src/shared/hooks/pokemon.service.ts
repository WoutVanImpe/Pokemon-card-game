import type { PokemonType } from "./pokemon.types";
import { ApiKey } from "~shared/keys/pokemonKeys";

class PokemonService {
	async getAllPokemons(): Promise<PokemonType[]> {
		const response = await fetch("https://api.pokemontcg.io/v2/cards", {
			headers: {
				"X-Api-Key": ApiKey,
			},
		});

		if (!response.ok) {
			throw new Error("Error fetching pokemon");
		}

		const data = await response.json();
		return data as PokemonType[];
	}
}
export const pokemonService = new PokemonService();
