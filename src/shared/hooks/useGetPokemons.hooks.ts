import { useQuery } from "@tanstack/react-query";
import { pokemonService } from "./pokemon.service";
import type { PokemonType } from "./pokemon.types";

export const useGetFairytales = () =>
	useQuery<PokemonType[], Error>({
		queryKey: ["pokemon"],
		queryFn: pokemonService.getAllPokemons,
	});
