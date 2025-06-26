import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type PokemonType from "~shared/hooks/pokemon.types";
import { useGetPokemons } from "~shared/hooks/useGetPokemons.hooks";
import { CardStorage } from "./cardStorage";

type CardContextType = {
	allCards: PokemonType[] | null;
};

const CardContext = createContext<CardContextType>({
	allCards: null,
});

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetPokemons();
	const [filteredCards, setFilteredCards] = useState<PokemonType[] | null>(CardStorage.get());

	useEffect(() => {
		if (filteredCards) return;

		if (!data) return;

		const filtered = data.filter((pokemon) => !pokemon.subtypes.includes("TAG TEAM"));
		// const filtered = data;

		setFilteredCards(filtered);
		// CardStorage.save(filtered);
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
