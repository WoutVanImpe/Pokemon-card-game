import { BattleCard } from "~shared/components/battlecard/BattleCard";
import * as cards from "../../dummyData";
import styles from "./app.module.scss";

function App() {
	return (
		<div className={styles["app"]}>
			<BattleCard device={cards.water} />
			<BattleCard device={cards.ice} />
			<BattleCard device={cards.fire} />
			<BattleCard device={cards.steel} />
			<BattleCard device={cards.wind} />
			<BattleCard device={cards.electric} />
		</div>
	);
}

export default App;
