import { Outlet } from "react-router";
import { Navigation } from "~shared/components/navigation/Navigation";
import { CardsProvider } from "../../context/CardContext";

function App() {
	return (
		<CardsProvider>
			<Navigation />
			<Outlet />
		</CardsProvider>
	);
}

export default App;
