import { useState } from "react";
import style from "./shop.module.scss";
import type PokemonAPIType from "~shared/hooks/pokemonAPI.types";
import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import { UseCardPicker } from "~shop/components/UseCardPicker";

export const Shop = () => {
	const { CreatePack } = UseCardPicker();
	const [newPack, setNewPack] = useState<PokemonAPIType[]>([]);

	return (
		<div className={style["p-shop"]}>
			<h1>SHOP</h1>
			<button onClick={() => setNewPack(CreatePack)}>New Pack</button>
			<div className={style["p-shop__list"]}>
				{newPack.map((pokemon: PokemonAPIType) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};
