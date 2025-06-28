import type PokemonLocalType from "~shared/hooks/types/pokemonLocal.types";
import { usePokemonCards } from "../../context/CardContext";
import { RarityGroups, type RarityGroupKey } from "./RarityGroups";
import type FullPokemon from "~shared/types/fullPokemon.types";
import { DefaultPokemon } from "./defaultPokemon";
import type PokemonMoveType from "~shop/types/pokemonMove.types";
import type Stats from "../types/stats.types";
import { fetchPokemonInfo, fetchPokemonMove } from "./fetches";

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
		const pickedPokemon = shuffled[0];
		let fullPokemon: FullPokemon = DefaultPokemon;
		const data = await fetchPokemonInfo(pickedPokemon.name.toLowerCase());

		// types
		const pokemonTypes: string[] = [];
		data?.types.forEach((type) => pokemonTypes.push(type.type.name));

		// stats
		const pokemonStats = { hp: 0, attack: 0, defense: 0, speed: 0 };
		data?.stats.forEach((stat) => {
			if (stat.stat.name == "hp") {
				pokemonStats.hp = stat.base_stat;
			}
			if (stat.stat.name == "attack") {
				pokemonStats.attack = stat.base_stat;
			}
			if (stat.stat.name == "defense") {
				pokemonStats.defense = stat.base_stat;
			}
			if (stat.stat.name == "speed") {
				pokemonStats.speed = stat.base_stat;
			}
		});

		// moves
		const pokemonMoves: PokemonMoveType[] = [];
		if (data?.moves) {
			const movePool = shuffleArray(data.moves);
			for (let i = 0; i < 0; i++) {
				const data = await fetchPokemonMove(movePool[i].move.url);
				if (data) {
					pokemonMoves.push({
						name: data.name,
						type: data.type,
						damage: data.damage,
						pp: data.pp,
						priority: data.priority,
						stat_changes: data.stat_changes ?? [],
						accuracy: data.accuracy ?? 100, // fallback indien null
					});
				}
			}
		} else {
			throw new Error("Error fetching Pokémon Move");
		}
		fullPokemon = buildPokemon(pickedPokemon, pokemonTypes, pokemonStats, pokemonMoves);

		return fullPokemon;
	};

	const buildPokemon = (basics: PokemonLocalType, type: string[], stats: Stats, moves: PokemonMoveType[]) => {
		const pokemon: FullPokemon = {
			id: basics.id,
			name: basics.name,
			rarity: basics.rarity,
			image: basics.image,
			moves: moves,
			types: type,
			stats: stats,
		};
		return pokemon;
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
