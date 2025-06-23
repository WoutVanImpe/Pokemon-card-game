import type { PokemonType } from "~shared/hooks/pokemon.types";
import styles from "./PokemonCard.module.scss";

export const PokemonCard = ({ pokemon }: { pokemon: PokemonType }) => {
	return (
		<div className={styles["card"]}>
			<img src={pokemon.images.large} alt={pokemon.name} />
		</div>
	);
};
