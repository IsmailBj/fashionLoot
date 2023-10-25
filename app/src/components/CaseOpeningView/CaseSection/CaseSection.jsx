import React from "react"
import style from "./style.module.css"
import LootBox from "../LootBox/LootBox"

const CaseSection = (props) => {
	const { targetBox, goBack } = props
	return (
		<div className="case-section-container">
			<div className="open-box-container">
				<div className="scroll-game"></div>
				<LootBox
					goBack={goBack}
					targetBox={targetBox}
				/>
			</div>
		</div>
	)
}

export default CaseSection
