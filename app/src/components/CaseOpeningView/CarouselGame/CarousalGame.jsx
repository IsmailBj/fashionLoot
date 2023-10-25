import React, { useRef, useEffect } from 'react';
import './style.css';

class SpinnerAnimation {
	constructor({ container, list }) {
		this.tickSound = new Audio("https://freesound.org/data/previews/269/269026_5094889-lq.mp3");
		this.tickSound.playbackRate = 4;

		this.winSound = new Audio("https://freesound.org/data/previews/511/511484_6890478-lq.mp3");

		this.reset();

		this.spinnerContainer = document.getElementById(container);
		this.spinnerList = this.spinnerContainer.children.namedItem(list);
		this.spinnerMarker = this.spinnerContainer.children.namedItem("spinnerMarker");
		this.spinnerItems = this.spinnerList.children;
		this.spinnerWon = document.getElementById("spinnerWon");
	}

	reset() {
		this.started = false;
		this.stopped = false;
		this.stopAnimation = false;
		this.lowerSpeed = 0;
		this.ticks = 0;
		this.offSet = 0;
		this.recycle = false;
		this.tick = false;
		this.state = null;
		this.speed = 0;
		this.winningItem = 0;
		this.firstRound = false;
	}

	start(speed = 1200) {
		this.started = true;
		this.speed = speed;
		console.log(this.speed);
		this.loop();
	}

	loop() {
		let dt = 0;
		let last = 0;


		const loop = (ms) => {
			if (this.recycle) {
				this.recycle = false;
				const item = this.spinnerList.firstElementChild;
				this.spinnerList.append(item);
			}

			if (this.tick) {
				this.tick = false;
				this.tickSound.play();
			}

			this.offSet += this.speed * dt;

			const ct = ms / 1000;
			dt = ct - last;
			last = ct;


			this.spinnerList.style.right = this.offSet + "px";

			if (this.offSet >= 122) {
				this.recycle = true;
				this.offSet = 0;
				this.tick = true;
				this.ticks += 1;
				if (this.ticks >= 20 && Math.random() * 10 >= 5) {
					this.stop();
				}
			}

			if (this.stopped) {
				let stopped = false;
				if (!stopped) this.speed -= this.lowerSpeed;

				if (this.speed <= 0) {
					stopped = true;
					this.speed = 0;
				}

				if (stopped) {
					if (this.offSet >= 58.6) {
						this.offSet += 6;
					} else {
						this.offSet -= 6;
					}

					if (this.offSet >= 122 || this.offSet <= 0) {
						this.stopAnimation = true;

						this.winSound.play();

						if (this.offSet >= 122) {
							this.winningItem = 5;
							this.spinnerItems.item(5).classList.add("win");
							this.spinnerWon.innerText += this.spinnerItems.item(5).innerText;
							this.offSet = 122;
						}

						if (this.offSet <= 0) {
							this.winningItem = 4;
							this.spinnerItems.item(4).classList.add("win");
							this.spinnerWon.innerText += this.spinnerItems.item(4).innerText;
							this.offSet = 0;
						}
					}
				}
			}

			if (!this.stopAnimation) {
				requestAnimationFrame(loop);
			}
		};


		requestAnimationFrame(loop);
	}

	stop() {
		this.stopped = true;


		this.lowerSpeed = Math.ceil(Math.random() * 10) + 1;
	}
}

const CarousalGame = () => {
	const startSpinnerBtn = useRef(null);

	useEffect(() => {
		const animation = new SpinnerAnimation({
			container: "spinnerContainer",
			list: "spinnerList"
		});

		startSpinnerBtn.current.addEventListener("click", (e) => {
			if (animation.started === "ready") {
				return;
			}

			if (!animation.firstRound) animation.spinnerItems.item(animation.winningItem).classList.remove("win");
			animation.reset();
			animation.start();
		});
	}, []);

	return (
		<div className="container">
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
				<div className="spinner__marker" id="spinnerMarker"> </div>
			</div>
			<div className="spinner__won" id="spinnerWon"></div>
			<button className="button" id="startSpinner" ref={startSpinnerBtn}>Spin Emoji!</button>
		</div>
	);
};

export default CarousalGame;
