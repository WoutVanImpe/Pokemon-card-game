export default interface FullPokemon {
	id: string;
	name: string;
	rarity: string;
	image: string;
	moves: Move[] | null;
	types: string[] | null;
	stats: {
		hp: number;
		attack: number;
		defense: number;
		speed: number;
	} | null;
}

interface Move {
	name: string;
	type: string;
	damage: number;
	pp: number;
	priority: number;
	stat_changes: [];
	accuracy: number;
}
