import type PokemonAPIType from "~shared/hooks/types/pokemonAPI.types";

export const CardStorage = {
	save: (value: PokemonAPIType[]) => sessionStorage.setItem("cards", JSON.stringify(value)),
	get: () => {
		const value = sessionStorage.getItem("cards");
		return value ? JSON.parse(value) : null;
	},
	remove: () => sessionStorage.removeItem("cards"),
};
