import React, { useState } from "react"
import style from "./style.module.css"
import LootBox from "../LootBox/LootBox"
import CarousalGame from "../CarouselGame/CarousalGame"
import Items from "../items/itemsSection"

const CaseSection = ({ targetBox, goBack, setShowLogin, userProfile }) => {
	const [spin, setSpin] = useState(false)

	const spinHandler = () => !userProfile.isUserLogin ? setShowLogin(true) : setSpin(true)

	return (
		<div className={style["case-section-container"]}>
			<div className={style["open-box-container"]}>
				<div className={style["scroll-game"]}>
					<CarousalGame spin={spin} />
				</div>
				<LootBox
					goBack={goBack}
					targetBox={targetBox}
					spinHandler={spinHandler}
				/>
			</div>
			<div className={style["items-container"]}>
				<Items items={targetBox.items} />
			</div>
		</div>
	)
}

export default CaseSection
