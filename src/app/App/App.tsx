import { Outlet } from "react-router";
import { Navigation } from "~shared/components/navigation/Navigation";

function App() {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	);
}

export default App;
