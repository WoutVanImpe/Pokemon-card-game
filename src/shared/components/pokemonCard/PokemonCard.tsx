import type PokemonAPIType from "~shared/hooks/pokemonAPI.types";
import styles from "./PokemonCard.module.scss";
import type PokemonLocalType from "~shared/hooks/pokemonLocal.types";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonLocalType }) => {
	return (
		<div>
			<img className={styles["card"]} src={pokemon.image} alt={pokemon.name} />
		</div>
	);
};
