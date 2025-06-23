import type PokemonType from "./pokemon.types";

export default interface ApiData {
	data: PokemonType[];
	page: number;
	pageSize: number;
}
