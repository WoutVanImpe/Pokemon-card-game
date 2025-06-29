import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type PokemonAPIType from "~shared/hooks/types/pokemonAPI.types";
import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";
import { useGetAPIPokemons, useGetLocalPokemons } from "~shared/hooks/useGetPokemons.hooks";

type CardContextType = {
	allCards: PokemonLocalType[] | null;
};

const CardContext = createContext<CardContextType>({
	allCards: null,
});

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetLocalPokemons();
	// const { data } = useGetAPIPokemons();
	const [filteredCards, setFilteredCards] = useState<PokemonLocalType[] | null>(null);

	useEffect(() => {
		if (filteredCards) return;

		if (!data) return;
		let filtered = data;
		// filtered = data.filter((pokemon) => !pokemon.subtypes.includes("TAG TEAM"));
		// filtered = filtered.filter((pokemon) => pokemon.rarity !== "Rare Break");
		// filtered = filtered.filter((pokemon) => pokemon.rarity !== "Rare Holo LV.X");

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
