import { PageTitle } from "~shared/page-title/PageTitle";
import { Shop } from "./Shop.page";

export const SHOP_ROUTE = {
    path: "/shop",
    element: (
        <>
            <PageTitle title="Shop" />
            <Shop />
        </>
    ),
};