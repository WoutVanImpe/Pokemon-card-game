import type PokemonType from "~shared/hooks/pokemon.types";
import { usePokemonCards } from "../../context/CardContext";
import { RarityGroups, type RarityGroupKey } from "./RarityGroups";

export const UseCardPicker = () => {
	const getCard = (rarityGroup: RarityGroupKey): PokemonType | null => {
		const filterByRarityGroup = (group: RarityGroupKey): PokemonType[] => {
			const { allCards } = usePokemonCards();
			if (!allCards) return [];
			return allCards.filter((card) => RarityGroups[group].includes(card.rarity));
		};

		const categorizedCards: Record<RarityGroupKey, PokemonType[]> = {
			Common: filterByRarityGroup("Common"),
			Uncommon: filterByRarityGroup("Uncommon"),
			Rare: filterByRarityGroup("Rare"),
			SuperRare: filterByRarityGroup("SuperRare"),
			MegaRare: filterByRarityGroup("MegaRare"),
			UltraRare: filterByRarityGroup("UltraRare"),
			Shiny: filterByRarityGroup("Shiny"),
			Legendary: filterByRarityGroup("Legendary"),
		};

		const cards = categorizedCards[rarityGroup];
		if (!cards || cards.length === 0) return null;

		const shuffleArray = <T,>(array: T[]): T[] => {
			return [...array].sort(() => Math.random() - 0.5);
		};

		const shuffled = shuffleArray(cards);
		return shuffled[0];
	};

	return { getCard };
};
