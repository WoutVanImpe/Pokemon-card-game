import type PokemonLocalType from "~shared/hooks/pokemonLocal.types";
import { usePokemonCards } from "../../context/CardContext";
import { RarityGroups, type RarityGroupKey } from "./RarityGroups";

export const UseCardPicker = () => {
	const { allCards } = usePokemonCards();

	const getCard = async (rarityGroup: RarityGroupKey): Promise<PokemonLocalType | null> => {
		const filterByRarityGroup = (group: RarityGroupKey): PokemonLocalType[] => {
			if (!allCards) return [];
			return allCards.filter((card) => RarityGroups[group].includes(card.rarity));
		};

		const categorizedCards: Record<RarityGroupKey, PokemonLocalType[]> = {
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
		console.log(shuffled[0]);

		return shuffled[0];
	};
	const CreatePack = async () => {
		const Pack: PokemonLocalType[] = [];

		const safePush = (pack: PokemonLocalType[], card: PokemonLocalType | null) => {
			if (card !== null) {
				pack.push(card);
			}
		};

		for (let i = 0; i < 6; i++) {
			safePush(Pack, await getCard("Common"));
		}
		for (let i = 0; i < 2; i++) {
			safePush(Pack, await getCard("Uncommon"));
		}

		const randomNumber1 = Math.floor(Math.random() * 100);
		console.log(randomNumber1);
		if (randomNumber1 < 71) {
			safePush(Pack, await getCard("Uncommon"));
		} else if (randomNumber1 < 91) {
			safePush(Pack, await getCard("Rare"));
		} else {
			safePush(Pack, await getCard("SuperRare"));
		}

		const randomNumber2 = Math.floor(Math.random() * 100);
		console.log(randomNumber2);
		if (randomNumber2 < 61) {
			safePush(Pack, await getCard("Rare"));
		} else if (randomNumber2 < 81) {
			safePush(Pack, await getCard("SuperRare"));
		} else if (randomNumber2 < 91) {
			safePush(Pack, await getCard("UltraRare"));
		} else if (randomNumber2 < 97) {
			safePush(Pack, await getCard("Shiny"));
		} else {
			safePush(Pack, await getCard("Legendary"));
		}

		console.log(Pack);
		return Pack;
	};

	return { CreatePack };
};
