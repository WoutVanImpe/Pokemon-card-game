import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import { useGetPokemons } from "~shared/hooks/useGetPokemons.hooks";

export const Home = () => {
	const { data } = useGetPokemons();
	console.log(data);

	return (
		<div>
			<h1>HOME</h1>
			{data?.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
};
