import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "./pokemon.service";
import type PokemonAPIType from "./types/pokemonAPI.types";
import type PokemonLocalType from "./types/pokemonLocal.types";

export const useGetAPIPokemons = () =>
	useQuery<PokemonAPIType[], Error>({
		queryKey: ["APIpokemon"],
		queryFn: pokemonService.getAllAPIPokemons,
	});

export const useGetLocalPokemons = () =>
	useQuery<PokemonLocalType[], Error>({
		queryKey: ["Localpokemon"],
		queryFn: pokemonService.getAllLocalPokemons,
	});
