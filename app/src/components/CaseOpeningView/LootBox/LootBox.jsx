import React from "react"
import style from "./style.module.css"
import image from "../../../assets/img/cardsImages/purbleCard.webp"
import { startTheSpin } from "../CarouselGame/CarousalGame"

const LootBox = (props) => {
	const { goBack } = props
	return (
		<div className={style["box-container"]}>
			<div className={style["back-guaranteed"]}>
				<div
					className={style["go-back"]}
					id="goBack"
					onClick={goBack}>
					<img
						width="30"
						height="30"
						src="https://img.icons8.com/ios-filled/50/838383/back.png"
						alt="verified-account--v1"
					/> BACK
				</div>
				<div className={style["garanteed-text"]}>
					<img
						width="30"
						height="30"
						src="https://img.icons8.com/color/48/verified-account--v1.png"
						alt="verified-account--v1"
					/>
					FAIRNESS GUARANTEED
				</div>
				<div className="muteBtn">Mute</div>
			</div>
			<div className={style["box-ditails"]}>
				<div className={style["box-img"]}>
					<img
						src={image}
						alt=""
					/>
				</div>
				<div className={style["box-spins"]}>
					<div className={style["text-container"]}>
						<div className={style["box-name"]}>Galaxy box</div>
						<div className={style["about-box"]}>Hypeloot's instant classic for those just looking to start on our site, we introduce you to the Cheap Starter box! Now at an ridiculous discount of 55%! Perhaps as ridiculous as not going for a chance to win a Nintendo Switch for only 0,77$. Between this and all the other gaming-related items here, there really is nothing left to consider. </div>
					</div>
					<div className={style["open-box-options"]}>

						<button className={style.btn} onClick={startTheSpin} type="button">
							<strong>OPEN FOR 5.29</strong>
							<div className={style.containerStars}>
								<div className={style.stars}></div>
							</div>

							<div className={style.glow}>
								<div className={style.circle}></div>
								<div className={style.circle}></div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LootBox
