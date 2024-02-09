import style from "./style.module.css"
import videoPlay from "../../assets/videos/box-video.mp4"
import brand1 from "../../assets/img/brands/1.png"
import brand2 from "../../assets/img/brands/2.png"
import brand3 from "../../assets/img/brands/3.png"
import brand4 from "../../assets/img/brands/4.png"
import brand5 from "../../assets/img/brands/5.png"
import brand6 from "../../assets/img/brands/6.png"
import brand7 from "../../assets/img/brands/7.png"
import brand8 from "../../assets/img/brands/8.png"
import brand9 from "../../assets/img/brands/9.png"
import brand10 from "../../assets/img/brands/10.png"
import brand11 from "../../assets/img/brands/11.png"
import brand12 from "../../assets/img/brands/12.png"

const BannerSponsor = (props) => {

	const {setShowDeposit} = props
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
				<div className={style["deposit-btn"]} onClick={()=> setShowDeposit(true)}>DEPOSIT</div>
			</div>
			<div className={style["sponsors-icons"]}>
				<img
					src={brand1}
					alt=""
				/>
				<img
					src={brand2}
					alt=""
				/>
				<img
					src={brand3}
					alt=""
				/>
				<img
					src={brand4}
					alt=""
				/>
				<img
					src={brand5}
					alt=""
				/>
				<img
					src={brand6}
					alt=""
				/>
				<img
					src={brand7}
					alt=""
				/>
				<img
					src={brand8}
					alt=""
				/>
				<img
					src={brand9}
					alt=""
				/>
				<img
					src={brand10}
					alt=""
				/>
				<img
					src={brand11}
					alt=""
				/>
				<img
					src={brand12}
					alt=""
				/>
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
