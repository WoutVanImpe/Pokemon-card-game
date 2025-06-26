import { ApiKey } from "~shared/keys/pokemonKeys";
import type PokemonType from "./pokemon.types";

class PokemonService {
	async getAllPokemons(): Promise<PokemonType[]> {
		const baseUrl = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]`;
		const pageSize = 250;

		let currentPage = 1;
		let allCards: PokemonType[] = [];
		let totalCount = 4200;

		do {
			const response = await fetch(`${baseUrl}&page=${currentPage}&pageSize=${pageSize}`, {
				headers: {
					"X-Api-Key": ApiKey,
				},
			});

			if (!response.ok) {
				throw new Error("Error fetching Pokémon data");
			}

			const data = await response.json();
			console.log("page" + currentPage + " done");

			allCards = [...allCards, ...data.data];
			currentPage++;
		} while (allCards.length < totalCount);

		const pokemons = allCards.filter((card: PokemonType) => card.supertype === "Pokémon");
		return pokemons;
	}
}

export const pokemonService = new PokemonService();
