import { PageTitle } from "~shared/page-title/PageTitle";
import { Storage } from "./Storage.page";

export const STORAGE_ROUTE = {
	path: "/storage",
	element: (
		<>
			<PageTitle title="storage" />
			<Storage />
		</>
	),
};
