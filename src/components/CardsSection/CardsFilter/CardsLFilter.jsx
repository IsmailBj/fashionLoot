import React, { useState } from "react"
import style from "./style.module.css"
import hotIcon from "../../../assets/icons/hot-icon.svg"
import newIcon from "../../../assets/icons/new.svg"
import premiumIcon from "../../../assets/icons/premium.svg"
// import searchIcon from "../../../assets/icons/search-icon.svg"

const CardsLFilter = ({ filter }) => {
	const [selectedFilter, setSelectedFilter] = useState(null);

	const handleFilterClick = (id) => {
		setSelectedFilter(id)
		filter(id)
	}

	const filterOptions = [
		{ id: "ALL", icon: hotIcon, label: "All" },
		{ id: "HOT", icon: hotIcon, label: "Hot" },
		{ id: "PREMIUM", icon: premiumIcon, label: "Premium" },
		{ id: "NEW", icon: newIcon, label: "New" },
	];

	return (
		<span className={style["filter-container"]}>
			<ul className={style.filter}>
				{filterOptions.map(({ id, icon, label }) => (
					<li
						key={id}
						className={selectedFilter === id ? style.selected : ""}
						onClick={() => handleFilterClick(id)}
					>
						<img src={icon} alt={`${label} icon`} height={25} />
						{label}
					</li>
				))}
				{/* <span className={style["search-bar"]}>
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
				</span> */}
			</ul>
		</span>
	)
}

export default CardsLFilter
