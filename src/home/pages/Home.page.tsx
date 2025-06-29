import { PokemonCard } from "~shared/components/pokemonCard/PokemonCard";
import style from "./home.module.scss";
import { usePokemonCards } from "../../context/CardContext";
import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";
import { NavLink } from "react-router";
import { SHOP_ROUTE } from "~shop/pages/shop.route";

export const Home = () => {
	const { allCards } = usePokemonCards();

	return (
		<div className={style["p-home"]}>
			<header className={style["p-home__hero"]}>
				<h1>Welkom bij PokéPack!</h1>
				<p>Open packs, verzamel kaarten en bouw jouw ultieme Pokédex.</p>
				<NavLink to={SHOP_ROUTE.path} className={style["p-home__cta"]}>
					Naar de Shop →
				</NavLink>
			</header>

			<section className={style["p-home__section"]}>
				<h2>Voorbeeldkaarten</h2>
				{allCards?.length ? (
					<div className={style["p-home__list"]}>
						{allCards.slice(0, 6).map((pokemon: PokemonLocalType) => (
							<PokemonCard key={pokemon.id} pokemon={pokemon} />
						))}
					</div>
				) : (
					<p>Er zijn nog geen kaarten geladen. Kom later terug of open een pack!</p>
				)}
			</section>
		</div>
	);
};
