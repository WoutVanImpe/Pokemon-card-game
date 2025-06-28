import type PokemonInfoType from "~shop/types/pokemonInfo.types";
import type PokemonMoveType from "~shop/types/pokemonMove.types";

export const fetchPokemonInfo = async (name: string): Promise<PokemonInfoType> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	if (!response.ok) throw new Error("Failed to fetch Pokémon info");
	return await response.json();
};

export const fetchPokemonMove = async (url: string): Promise<PokemonMoveType> => {
	const response = await fetch(url);
	if (!response.ok) throw new Error("Failed to fetch Pokémon move");
	return await response.json();
};
