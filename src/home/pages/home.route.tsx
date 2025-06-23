import { PageTitle } from "~shared/page-title/PageTitle";
import { Home } from "./Home.page";

export const HOME_ROUTE = {
	path: "/",
	element: (
		<>
			<PageTitle title="Home" />
			<Home />
		</>
	),
};