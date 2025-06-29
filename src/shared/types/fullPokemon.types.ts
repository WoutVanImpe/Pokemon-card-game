import type PokemonMoveType from "~shop/types/pokemonMove.types";

export default interface FullPokemon {
	id: string;
	name: string;
	rarity: string;
	image: string;
	moves: PokemonMoveType[] | null;
	types: string[] | null;
	stats: {
		hp: number;
		attack: number;
		defense: number;
		speed: number;
	} | null;
}
