import { ApiKey } from "~shared/keys/pokemonKeys";
import type PokemonAPIType from "./types/pokemonAPI.types";
import type PokemonLocalType from "./types/pokemonLocal.types";
import type PokemonInfoType from "../../shop/types/pokemonInfo.types";
import type PokemonMoveType from "../../shop/types/pokemonMove.types";

class PokemonService {
	async getAllAPIPokemons(): Promise<PokemonAPIType[]> {
		const baseUrl = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 368]`;
		const pageSize = 250;

		let currentPage = 1;
		let allCards: PokemonAPIType[] = [];
		let totalCount = 8611;

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

			allCards = [...allCards, ...data.data];
			currentPage++;
			console.log("page" + currentPage + " done (" + allCards.length + ")");
		} while (allCards.length < totalCount);

		const pokemons = allCards.filter((card: PokemonAPIType) => card.supertype === "Pokémon");
		return pokemons;
	}

	async getAllLocalPokemons(): Promise<PokemonLocalType[]> {
		const res = await fetch("./pokemons.json");
		const json = await res.json();
		console.log(json);
		return json;
	}
}

export const pokemonService = new PokemonService();
