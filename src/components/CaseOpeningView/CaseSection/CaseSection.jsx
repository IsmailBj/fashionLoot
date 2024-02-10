import React from "react"
import style from "./style.module.css"
import LootBox from "../LootBox/LootBox"
import CarousalGame from "../CarouselGame/CarousalGame"

const CaseSection = (props) => {
	const { targetBox, goBack } = props
	return (
		<div className={style["case-section-container"]}>
			<div className={style["open-box-container"]}>
				<div className={style["scroll-game"]}>
					<CarousalGame></CarousalGame>
				</div>
				<LootBox
					goBack={goBack}
					targetBox={targetBox}
				/>
			</div>
		</div>
	)
}

export default CaseSection
