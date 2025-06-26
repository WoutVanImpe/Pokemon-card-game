import type PokemonType from "~shared/hooks/pokemon.types";

export const CardStorage = {
	save: (value: PokemonType[]) => sessionStorage.setItem("cards", JSON.stringify(value)),
	get: () => {
		const value = sessionStorage.getItem("cards");
		return value ? JSON.parse(value) : null;
	},
	remove: () => sessionStorage.removeItem("cards"),
};
