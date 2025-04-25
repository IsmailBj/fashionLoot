import React from "react"
import style from "./Header.module.css"
import logo from "../../assets/img/logo.svg"
import avatar from "../../assets/img/avatars/avatar.svg"
import downIcon from "../../assets/icons/down.svg"

const Header = (props) => {
	const {
		viewHome,
		setShowLogin,
		setLangSetting,
		langSetting,
		setShowRegister,
		isUserLogin,
		openProfile,
		username,
		currency,
		openDeposit
	} = props

	const handleLoginClick = () => setShowLogin(true);
	const handleRegisterClick = () => setShowRegister(true);
	const handleLanguageToggle = () => setLangSetting({ ...langSetting, show: !langSetting.show });


	return (
		<div className={style["header-component"]}>
			<div className={style["left-header"]}>
				<div
					className={style["logo"]}
					onClick={viewHome}>
					<img
						src={logo}
						alt="logg"
						width={200}
					/>
				</div>
			</div>
			<div className={style["center-header"]}>
				<div className={style["menu-list"]}>
					<div className={style["link-direct"]}>BOX</div>
					<div className={style["link-direct"]}>meni2</div>
					<div className={style["link-direct"]}>meni4</div>
					<div className={style["link-direct"]} onClick={openDeposit}>Deposit</div>
				</div>
			</div>
			<div className={style["right-header"]}>
				{isUserLogin ? (
					<div className={style['user-avatar']} onClick={openProfile}>
						<div className="amount">{currency.amount}</div>
						<div className="username">
							{username}
						</div>
						<div className="avatar">
							<img src={avatar} width={30} alt="" />
						</div>
					</div>
				) :
					<div className={style["login-register"]}>
						<div
							className={style.login}
							onClick={handleLoginClick}>
							Login
						</div>
						<div
							className={style.register}
							onClick={handleRegisterClick}>
							Register
						</div>
					</div>

				}
				<div
					className={style.language}
					onClick={handleLanguageToggle}>
					{langSetting.short + " "}
					<img
						src={downIcon}
						alt=""
						height={10}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
