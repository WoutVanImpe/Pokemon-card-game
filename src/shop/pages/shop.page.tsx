import { useState } from "react";
import style from "./shop.module.scss";
import type PokemonType from "~shared/hooks/pokemon.types";
import { CreatePack } from "~shop/components/CreatePack";
import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";

export const Shop = () => {
	const [newPack, setNewPack] = useState<PokemonType[]>([]);

	return (
		<div className={style["p-shop"]}>
			<h1>SHOP</h1>
			<button onClick={() => setNewPack(CreatePack())}>New Pack</button>
			<div className={style["p-shop__list"]}>
				{newPack.map((pokemon: PokemonType) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};
