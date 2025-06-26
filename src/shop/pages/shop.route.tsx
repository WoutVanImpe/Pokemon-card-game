import { PageTitle } from "~shared/page-title/PageTitle";
import { Shop } from "./shop.page";

export const SHOP_ROUTE = {
	path: "/shop",
	element: (
		<>
			<PageTitle title="Shop" />
			<Shop />
		</>
	),
};
