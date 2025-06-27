export const RarityGroups = {
	Common: ["Common"],
	Uncommon: ["Uncommon"],
	Rare: ["Rare, Unknown"],
	SuperRare: ["Rare Holo"],
	MegaRare: ["Rare Holo", "Rare Holo V", "Rare Holo EX", "Rare Holo VSTAR", "Rare Holo LV.X", "Rare Prime", "Rare Prism Star", "Classic Collection", "Double Rare"],
	UltraRare: ["Rare Holo VMAX", "Rare Ultra", "Rare Secret", "Trainer Gallery Rare Holo", "Radiant Rare", "Illustration Rare", "Ultra Rare", "Promo"],
	Shiny: ["Rare Shiny", "Rare Holo Star", "Special Illustration Rare", "Shiny Rare"],
	Legendary: ["Rare Shiny GX", "Rare Shining", "Rare Rainbow", "Hyper Rare"],
};

export type RarityGroupKey = keyof typeof RarityGroups;
