export const typeColor = (type: string) => {
	const color: Record<string, string> = {
		water: "#0A4DA0",
		ice: "#96F1FF",
		fire: "#D63031",
		steel: "#696464",
		wind: "#B9D5ED",
		electricity: "#FFD700",
	};
	return color[type];
};

export const cardColor = (type: string) => {
	const color: Record<string, string> = {
		water: "#75A0E0",
		ice: "#B8EAFF",
		fire: "#F06543",
		steel: "#ADA6A6",
		wind: "#E5F5FF",
		electricity: "#F5E593",
	};
	return color[type];
};
