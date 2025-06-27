import type PokemonAPIType from "./pokemonAPI.types";

export default interface ApiData {
	data: PokemonAPIType[];
	page: number;
	pageSize: number;
}
