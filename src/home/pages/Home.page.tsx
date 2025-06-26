import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import { useGetPokemons } from "~shared/hooks/useGetPokemons.hooks";
import style from "./home.module.scss";

export const Home = () => {
	const { data } = useGetPokemons();
	console.log(data);

	return (
		<div className={style["p-home"]}>
			<h1>HOME</h1>
			<div className={style["p-home__list"]}>
				{data?.map((pokemon) => {
					if (pokemon.set.series == "Base") {
						return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
					}
				})}
			</div>
		</div>
	);
};
