import React, { useState } from 'react';
import './style.css';
import { SpinnerAnimation } from '../../../animations/SpinnerAnimation';


export const startTheSpin = () => {
	const animation = new SpinnerAnimation({
		container: "spinnerContainer",
		list: "spinnerList"
	});

	if (animation.started === "ready") {
		return;
	}

	if (!animation.firstRound) animation.spinnerItems.item(animation.winningItem).classList.remove("win");
	animation.reset();
	animation.start();

}

const CarousalGame = () => {

	const [isMuted, setIsMuted] = useState(false);

	const handleMuteToggle = () => {
		setIsMuted(!isMuted);
	};
	return (
		<div className="container">
			<div className="muteSound" onClick={handleMuteToggle}>
				{isMuted ? (<span>muted</span>) : (<span>unmuted</span>)}
			</div>
			<div className="spinner" id="spinnerContainer">
				<ul className="spinner-items" id="spinnerList">
					<li className="spinner-items__item" id="8">🐶</li>
					<li className="spinner-items__item" id="9">🐷</li>
					<li className="spinner-items__item" id="1">🐸</li>
					<li className="spinner-items__item" id="2">🐹</li>
					<li className="spinner-items__item" id="3">🐵</li>
					<li className="spinner-items__item" id="4">🐰</li>
					<li className="spinner-items__item" id="5">🐭</li>
					<li className="spinner-items__item" id="6">🐮</li>
					<li className="spinner-items__item" id="7">🐨</li>
				</ul>
				<div className="spinner__marker" id="spinnerMarker"></div>
			</div>
		</div>
	);
};

export default CarousalGame;
