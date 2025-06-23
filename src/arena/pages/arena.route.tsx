import { PageTitle } from "~shared/page-title/PageTitle";
import { Arena } from "./Arena.page";

export const ARENA_ROUTE = {
    path: "/arena",
    element: (
        <>
            <PageTitle title="Arena" />
            <Arena />
        </>
    ),
};