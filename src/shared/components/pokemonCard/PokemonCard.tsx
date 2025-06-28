import type PokemonAPIType from "~shared/hooks/types/pokemonAPI.types";
import styles from "./PokemonCard.module.scss";
import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonLocalType }) => {
	return (
		<div>
			<img className={styles["card"]} src={pokemon.image} alt={pokemon.name} />
		</div>
	);
};
