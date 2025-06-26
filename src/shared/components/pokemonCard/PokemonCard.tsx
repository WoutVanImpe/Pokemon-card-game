import type PokemonType from "~shared/hooks/pokemon.types";
import styles from "./PokemonCard.module.scss";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonType }) => {
	return (
		<div>
			<img className={styles["card"]} src={pokemon.images.large} alt={pokemon.name} />
		</div>
	);
};
