import React from "react"
import style from "./style.module.css"
import image from "../../../assets/img/cardsImages/purbleCard.webp"

const LootBox = (props) => {
	const { goBack } = props
	return (
		<div className={style["box-container"]}>
			<div className={style["back-guaranteed"]}>
				<div
					className={style["go-back"]}
					id="goBack"
					onClick={goBack}>
					Back
				</div>
				<div className={style["garanteed"]}>
					<img
						width="48"
						height="48"
						src="https://img.icons8.com/color/48/verified-account--v1.png"
						alt="verified-account--v1"
					/>
					FAIRNESS GUARANTEED
				</div>
			</div>
			<div className={style["box-ditails"]}>
				<div className={style["box-img"]}>
					<img
						src={image}
						alt=""
					/>
				</div>
				<div className={style["box-spins"]}>
					<div className={style["box-name"]}>Test your luck</div>
					<div className={style["open-box-options"]}>
						<input
							type="button"
							value={"OPEN FOR 5.29"}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LootBox
