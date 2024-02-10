import React, { useState } from "react"
import style from "./style.module.css"
import hotIcon from "../../../assets/icons/hot-icon.svg"
import newIcon from "../../../assets/icons/new.svg"
import premiumIcon from "../../../assets/icons/premium.svg"
import searchIcon from "../../../assets/icons/search-icon.svg"

const CardsLFilter = ({ filter }) => {
	const [selectedItem, setSelectedItem] = useState(null)

	const handleItemClick = (index) => {
		setSelectedItem(index)
		filter(index)
	}

	return (
		<span className={style["filter-container"]}>
			<ul className={style.filter}>
				<li
					className={`${selectedItem === 'HOT' ? `${style.selected} ` : ""}`}
					onClick={() => handleItemClick('HOT')}>
					<img
						src={hotIcon}
						alt=""
						height={25}
					/>
					Hot
				</li>

				<li
					className={`${selectedItem === 'PREMIUM' ? `${style.selected} ` : ""}`}
					onClick={() => handleItemClick('PREMIUM')}>
					<img
						src={premiumIcon}
						alt=""
						height={25}
					/>
					Premium
				</li>
				<li
					className={`${selectedItem === 'NEW' ? `${style.selected} ` : ""}`}
					onClick={() => handleItemClick('NEW')}>
					<img
						src={newIcon}
						alt=""
						height={25}
					/>
					New
				</li>
				<span className={style["search-bar"]}>
					<div className={style.icon}>
						{" "}
						<img
							src={searchIcon}
							alt=""
							height={20}
						/>
					</div>
					<input
						type="text"
						name="Search a Box"
						id="searchBox"
					/>
				</span>
			</ul>
		</span>
	)
}

export default CardsLFilter
