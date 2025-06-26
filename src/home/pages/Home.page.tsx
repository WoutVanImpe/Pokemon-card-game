import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import style from "./home.module.scss";
import { usePokemonCards } from "../../context/CardContext";
import type PokemonType from "~shared/hooks/pokemon.types";

export const Home = () => {
	const { allCards } = usePokemonCards();

	return (
		<div className={style["p-home"]}>
			<h1>HOME</h1>
			<div className={style["p-home__list"]}>
				{allCards?.map((pokemon: PokemonType) => (pokemon.rarity === "Common" ? <PokemonCard key={pokemon.id} pokemon={pokemon} /> : null))}
				</div>
		</div>
	);
};
