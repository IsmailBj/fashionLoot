import React, { useState } from "react"
import style from "./style.module.css"
import hotIcon from "../../../assets/icons/hot-icon.svg"
import newIcon from "../../../assets/icons/new.svg"
import premiumIcon from "../../../assets/icons/premium.svg"
import searchIcon from "../../../assets/icons/search-icon.svg"

const CardsLFilter = () => {
	const [selectedItem, setSelectedItem] = useState(null)

	const handleItemClick = (index) => {
		setSelectedItem(index)
	}

	return (
		<span className={style["filter-container"]}>
			<ul className={style.filter}>
				<li
					className={`${selectedItem === 0 ? `${style.selected} ` : ""}`}
					onClick={() => handleItemClick(0)}>
					<img
						src={hotIcon}
						alt=""
						height={25}
					/>
					Hot
				</li>

				<li
					className={`${selectedItem === 2 ? `${style.selected} ` : ""}`}
					onClick={() => handleItemClick(2)}>
					<img
						src={premiumIcon}
						alt=""
						height={25}
					/>
					Premium
				</li>
				<li
					className={`${selectedItem === 1 ? `${style.selected} ` : ""}`}
					onClick={() => handleItemClick(1)}>
					<img
						src={newIcon}
						alt=""
						height={25}
					/>
					New
				</li>
				<span className={style["search-bar"]}>
					<div className="icon">
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
