import { cardColor, typeColor } from "~utils/utils";
import styles from "./battlecard.module.scss";
import type { BattlecardType } from "~types/types";

export const BattleCard = ({ device }: { device: BattlecardType }) => {
	return (
		<div className={styles["battlecard"]}>
			<div className={styles["image"]}></div>
			<div className={styles["battlecard__text"]} style={{ backgroundColor: cardColor(device.type), borderTopColor: typeColor(device.type) }}>
				<h4>{device.name}</h4>
				<img className={styles["battlecard__text__type"]} src={`./typings/${device.type}.svg`} alt={device.type} style={{ backgroundColor: typeColor(device.type) }} />
				<div className={styles["battlecard__text__stats"]}>
					<p>{`${device.hp} HP`}</p>
					<p>{`${device.atc} ATC`}</p>
					<p>{`${device.def} DEF`}</p>
					<p>{`${device.spd} SPD`}</p>
				</div>
			</div>
		</div>
	);
};
