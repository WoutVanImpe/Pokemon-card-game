import type PokemonType from "~shared/hooks/pokemon.types";
import { UseCardPicker } from "./CardPicker";

const safePush = (pack: PokemonType[], card: PokemonType | null) => {
	if (card !== null) {
		pack.push(card);
	}
};

export const CreatePack = () => {
	const { getCard } = UseCardPicker();
	const Pack: PokemonType[] = [];

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
