import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type PokemonType from "~shared/hooks/pokemon.types";
import { useGetPokemons } from "~shared/hooks/useGetPokemons.hooks";

type CardContextType = {
	allCards: PokemonType[] | null;
};

const CardContext = createContext<CardContextType>({
	allCards: null,
});

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetPokemons();
	const [filteredCards, setFilteredCards] = useState<PokemonType[] | null>(null);

	useEffect(() => {
		if (filteredCards) return;

		if (!data) return;

		let filtered = data.filter((pokemon) => !pokemon.subtypes.includes("TAG TEAM"));
		filtered = filtered.filter((pokemon) => pokemon.rarity !== "Promo");
		filtered = filtered.filter((pokemon) => pokemon.rarity !== "Rare Break");
		filtered = filtered.filter((pokemon) => pokemon.rarity !== "Rare Holo LV.X");

		setFilteredCards(filtered);
	}, [data, filteredCards]);

	const value = useMemo(
		() => ({
			allCards: filteredCards ?? null,
		}),
		[filteredCards]
	);

	return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const usePokemonCards = () => useContext(CardContext);
