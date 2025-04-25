import style from "./style.module.css"
import videoPlay from "../../assets/videos/box-video.mp4"
import loadBrandImages from "../../Helpers/ImgImportersHelper"
import { useMemo } from "react"


const BannerSponsor = (props) => {
	const images = useMemo(() => loadBrandImages(), [])

	const { openDeposit } = props
	return (
		<div className={style["banner-container"]}>
			<div className={style["text-info"]}>
				<div className={style.title}>
					Unbox Authentic luxury loot in Mystery Boxes
				</div>
				<div className={style.info}>
					Open our provably fair mystery boxes and have your unboxed products
					shipped to your doorstep
				</div>
				<div className={style["deposit-btn"]} onClick={openDeposit}>DEPOSIT</div>
			</div>
			<div className={style["sponsors-icons"]}>
				{images.map((brand, index) => (
					<img src={brand.src}
						key={index}
						alt={`Logo for ${brand.name + 1}`}
						title={brand.name}
						loading="lazy"
						className={style["brand-image"]} />
				))}
			</div>
			<div className={style["box-animation"]}>
				<video
					playsInline
					autoPlay
					muted
					loop
					width="360"
					height="360">
					<source
						src={videoPlay}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	)
}

export default BannerSponsor
