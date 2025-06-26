import type PokemonType from "~shared/hooks/pokemon.types";
import { usePokemonCards } from "../../context/CardContext";
import { RarityGroups, type RarityGroupKey } from "./RarityGroups";

export const UseCardPicker = () => {
	const { allCards } = usePokemonCards();

	const getCard = (rarityGroup: RarityGroupKey): PokemonType | null => {
		const filterByRarityGroup = (group: RarityGroupKey): PokemonType[] => {
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
	const CreatePack = () => {
		const Pack: PokemonType[] = [];

		const safePush = (pack: PokemonType[], card: PokemonType | null) => {
			if (card !== null) {
				pack.push(card);
			}
		};

		for (let i = 0; i < 6; i++) {
			safePush(Pack, getCard("Common"));
		}
		for (let i = 0; i < 2; i++) {
			safePush(Pack, getCard("Uncommon"));
		}

		const randomNumber1 = Math.floor(Math.random() * 100);
		if (randomNumber1 < 71) {
			safePush(Pack, getCard("Uncommon"));
		} else if (randomNumber1 < 91) {
			safePush(Pack, getCard("Rare"));
		} else {
			safePush(Pack, getCard("SuperRare"));
		}

		const randomNumber2 = Math.floor(Math.random() * 100);
		if (randomNumber2 < 61) {
			safePush(Pack, getCard("Rare"));
		} else if (randomNumber2 < 81) {
			safePush(Pack, getCard("SuperRare"));
		} else if (randomNumber2 < 91) {
			safePush(Pack, getCard("UltraRare"));
		} else if (randomNumber2 < 97) {
			safePush(Pack, getCard("Shiny"));
		} else {
			safePush(Pack, getCard("Legendary"));
		}

		return Pack;
	};

	return { CreatePack };
};
