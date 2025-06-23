import { PageTitle } from "~shared/page-title/PageTitle";
import { Login } from "./Login.page";

export const LOGIN_ROUTE = {
    path: "/login",
    element: (
        <>
            <PageTitle title="login" />
            <Login />
        </>
    ),
};