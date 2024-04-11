import React, { useState } from "react"
import "./style.css"

const items = [
	{
		name: "mouse",
		img: "./img/mouse.jpg",
	},
	{
		name: "pc",
		img: "./img/pc.jpg",
	},
	{
		name: "card",
		img: "./img/card.jpg",
	},
	{
		name: "mobile",
		img: "./img/mobile.jpg",
	},
	{
		name: "watch",
		img: "./img/watch.jpg",
	},
]

const CarousalGame = ({ spin }) => {


	const boxWidth = 100
	const boxLength = 50
	const winBox = 45
	const itemW = 4

	const fill = () => {
		const elements = []
		for (let i = 1; i <= boxLength; i++) {
			if (i === winBox) {
				elements.push(createElement(items[itemW], true))
			} else {
				const randomN = getRandomInt(items.length)
				elements.push(createElement(items[randomN]))
			}
		}
		return elements
	}

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max)
	}

	const createElement = (item, winner = false) => {
		return (
			<div style={{ maxWidth: boxWidth + "px" }}>
				<img
					src={item.img}
					style={{
						width: boxWidth + "px",
						border: winner ? "2px solid green" : "2px solid red",
					}}
					alt={item.name}
				/>
			</div>
		)
	}

	return (
		<div>
			<div
				style={{
					maxWidth: "900px",
					height: "100px",
					overflow: "hidden",
					background: "#333",
					margin: "0 auto",
					position: "relative",
				}}>
				<div
					style={{
						backgroundColor: "#2fcf72",
						width: "5px",
						height: "100%",
						position: "absolute",
						left: "50%",
						transform: "translateX(-50%)",
						zIndex: "2",
					}}></div>
				<div
					id="body"
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						position: "absolute",
						left: spin ? winBox * boxWidth - boxWidth / 2 - 250 + "px" : "0",
						transition: "all 3s ease-in-out",
					}}>
					{fill()}
				</div>
			</div>
		</div>
	)
}

export default CarousalGame
