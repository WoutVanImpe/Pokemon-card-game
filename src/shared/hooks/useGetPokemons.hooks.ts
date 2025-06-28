import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "./pokemon.service";
import type PokemonAPIType from "./types/pokemonAPI.types";
import type PokemonLocalType from "./types/pokemonLocal.types";
import type PokemonInfoType from "./types/pokemonInfo.types";

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
export const useGetPokemonInfo = (pokemon: string) =>
	useQuery<PokemonInfoType, Error>({
		queryKey: ["PokemonInfo", pokemon],
		queryFn: ({ queryKey }) => pokemonService.getPokemonInfo(queryKey[1] as string),
	});
