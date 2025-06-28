export default interface PokemonInfoType {
	id: number;
	name: string;
	moves: PokemonMoveType[];
	stats: PokemonStatType[];
	types: PokemonTypeType[];
}

interface PokemonMoveType {
	move: {
		name: string;
		url: string;
	};
}

interface PokemonStatType {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface PokemonTypeType {
	type: {
		name: string;
	};
}
