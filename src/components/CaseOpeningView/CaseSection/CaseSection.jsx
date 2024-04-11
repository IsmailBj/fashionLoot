import React, { useState } from "react"
import style from "./style.module.css"
import LootBox from "../LootBox/LootBox"
import CarousalGame from "../CarouselGame/CarousalGame"
import Items from "../items/itemsSection"

const CaseSection = (props) => {
	const { targetBox, goBack, setShowLogin, userProfile } = props
	const [spin, setSpin] = useState(false)

	const spinHandler = () => {
		if (!userProfile.isUserLogin) {
			setShowLogin(true)
		} else {
			setSpin(true)
		}
	}
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
				<Items items={targetBox.items} />
			</div>
		</div>
	)
}

export default CaseSection
