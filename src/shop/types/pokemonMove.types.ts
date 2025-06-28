export default interface PokemonMoveType {
	name: string;
	type: string;
	damage: number;
	pp: number;
	priority: number;
	stat_changes: StatChange[];
	accuracy: number | null;
}

interface StatChange {
	change: number;
	stat: {
		name: string;
	};
}
