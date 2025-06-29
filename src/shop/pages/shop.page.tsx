import { useState } from "react";
import style from "./shop.module.scss";
import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";
import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import { UseCardPicker } from "~shop/components/UseCardPicker";

export const Shop = () => {
	const { CreatePack } = UseCardPicker();
	const [newPack, setNewPack] = useState<PokemonLocalType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleNewPack = async () => {
		setIsLoading(true);
		const pack = await CreatePack();
		setNewPack(pack);
		setIsLoading(false);
	};

	return (
		<div className={style["p-shop"]}>
			<header className={style["p-shop__header"]}>
				<h1>PokéPack Shop</h1>
				<p>Open een nieuw pack en ontdek welke Pokémon je krijgt!</p>
				<button onClick={handleNewPack} disabled={isLoading}>
					{isLoading ? "Pack openen..." : "Nieuw Pack Openen"}
				</button>
			</header>

			<section className={style["p-shop__results"]}>
				{newPack.length > 0 ? (
					<div className={style["p-shop__list"]}>
						{newPack.map((pokemon: PokemonLocalType) => (
							<PokemonCard key={pokemon.id} pokemon={pokemon} />
						))}
					</div>
				) : (
					<p className={style["p-shop__empty"]}>
						Nog geen kaarten geopend. Klik op de knop hierboven om een nieuw pack te openen!
					</p>
				)}
			</section>
		</div>
	);
};
