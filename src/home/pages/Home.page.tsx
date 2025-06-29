import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import style from "./home.module.scss";
import { usePokemonCards } from "../../context/CardContext";
import type PokemonAPIType from "~shared/hooks/types/pokemonAPI.types";
import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";

export const Home = () => {
	const { allCards } = usePokemonCards();

	return (
		<div className={style["p-home"]}>
			<h1>HOME</h1>
			<div className={style["p-home__list"]}>
				{allCards?.map((pokemon: PokemonLocalType) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};
