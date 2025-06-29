import { useState } from "react";
import style from "./shop.module.scss";
import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";
import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import { UseCardPicker } from "~shop/components/UseCardPicker";

export const Shop = () => {
	const { CreatePack } = UseCardPicker();
	const [newPack, setNewPack] = useState<PokemonLocalType[]>([]);

	return (
		<div className={style["p-shop"]}>
			<h1>SHOP</h1>
			<button
				onClick={async () => {
					const pack = await CreatePack();
					setNewPack(pack);
				}}
			>
				New Pack
			</button>
			<div className={style["p-shop__list"]}>
				{newPack.map((pokemon: PokemonLocalType) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};
