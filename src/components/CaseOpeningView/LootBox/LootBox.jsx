import React from "react"
import style from "./style.module.css"
import image from "../../../assets/img/cardsImages/purbleCard.webp"
import backIcon from "../../../assets/icons/backIcon.png";
import verifiedIcon from "../../../assets/icons/verified.png";

const LootBox = ({ goBack, spinHandler, targetBox }) => {

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
						src={backIcon}
						alt="back icon"
					/>{" "}
					BACK
				</div>
				<div className={style["garanteed-text"]}>
					<img
						width="30"
						height="30"
						src={verifiedIcon}
						alt="Fairness Guaranteed"
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
						<div className={style["box-name"]}>{targetBox.name}</div>
						<div className={style["about-box"]}>{targetBox.about}
						</div>
					</div>
					<div className={style["open-box-options"]}>
						<button
							className={style.btn}
							onClick={spinHandler}
							type="button">
							<strong>OPEN FOR {targetBox.price}</strong>
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
