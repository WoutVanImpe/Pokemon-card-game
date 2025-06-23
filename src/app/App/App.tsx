import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHashRouter, RouterProvider } from "react-router";
import { ARENA_ROUTE } from "~arena/pages/arena.route";
import { HOME_ROUTE } from "~home/pages/home.route";
import { LOGIN_ROUTE } from "~login/pages/login.route";
import { SHOP_ROUTE } from "~shop/pages/shop.route";
import { STORAGE_ROUTE } from "~storage/pages/storage.route";

const queryClient = new QueryClient();

function App() {
	const router = createHashRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ path: HOME_ROUTE.path, element: HOME_ROUTE.element },
				{ path: ARENA_ROUTE.path, element: ARENA_ROUTE.element },
				{ path: LOGIN_ROUTE.path, element: LOGIN_ROUTE.element },
				{ path: SHOP_ROUTE.path, element: SHOP_ROUTE.element },
				{ path: STORAGE_ROUTE.path, element: STORAGE_ROUTE.element },
				{
					path: "*",
					element: <h1>404: Page not found</h1>,
				},
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
