import { ApiKey } from "~shared/keys/pokemonKeys";
import type PokemonType from "./pokemon.types";

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
		return data.data as PokemonType[];
	}
}
export const pokemonService = new PokemonService();
