import React, { useEffect } from "react"

const CarousalGame = () => {
	useEffect(() => {
		setupGame()
	}, [])

	const setupGame = () => {
		const items = {
			simple: {
				skin: "M4A1-S | Cyrex",
				img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.144b4053eb73b4a47f8128ebb0e808d8e28f5b9c.png",
			},
			middle: {
				skin: "M4A1-S | Chantico's Fire",
				img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--YXygED6_UZrMTzwJYSdJlU8N1zY81TrxO_v0MW9uJnBm3Rk7nEk5XfUmEeyhQYMMLIUhCYx0A",
			},
			super: {
				skin: "M4A4 | Asiimov",
				img: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4_asimov_light_large.af03179f3d43ff55b0c3d114c537eac77abdb6cf.png",
			},
		}

		const generateDynamicItems = () => {
			const dynamicItems = []

			for (let i = 0; i < 101; i++) {
				let element = (
					<div
						key={`CardNumber${i}`}
						className="item class_red_item"
						style={{ backgroundImage: `url(${items.simple.img})` }}></div>
				)

				let randed = randomInt(1, 1000)

				if (randed < 50) {
					element = (
						<div
							key={`CardNumber${i}`}
							className="item class_red_item"
							style={{ backgroundImage: `url(${items.super.img})` }}></div>
					)
				} else if (randed > 500) {
					element = (
						<div
							key={`CardNumber${i}`}
							className="item class_red_item"
							style={{ backgroundImage: `url(${items.middle.img})` }}></div>
					)
				}

				dynamicItems.push(element)
			}

			return dynamicItems
		}

		const randomInt = (min, max) => {
			return Math.floor(Math.random() * (max - min)) + min
		}

		// Event listener for the "go" button
		const goButton = document.getElementById("goButton")
		goButton.addEventListener("click", () => {
			const randed2 = 2 // Set randed2 to 2 for the "middle" skin
			generate(randed2)
		})

		// Event listener for the "reset" button
		const resetButton = document.getElementById("resetButton")
		resetButton.addEventListener("click", () => {
			window.location = ""
		})

		// Call generateDynamicItems and append the items to the container
		const container = document.querySelector(".raffle-roller-container")
		container.style.transition = "sdf"
		container.style.marginLeft = "0px"
		container.innerHTML = ""

		const randed2 = 2

		const dynamicItems = generateDynamicItems()
		container.append(...dynamicItems)

		const generate = (randed2) => {
			// Your generate function code here
		}
	}

	return (
		<div>
			<div className="raffle-roller">
				<div className="raffle-roller-holder">
					<div
						className="raffle-roller-container"
						style={{ marginLeft: "0px" }}>
						{/* Dynamic items will be rendered here */}
					</div>
				</div>
			</div>
			<center>
				<span style={{ fontSize: "25px" }}>
					Your winning is{" "}
					<span
						style={{ color: "green" }}
						id="rolled">
						rolling
					</span>
				</span>
				<br />
				<button id="goButton">go</button>
				<button id="resetButton">reset</button>
			</center>
			<br />
			<div className="inventory"></div>
		</div>
	)
}

export default CarousalGame
