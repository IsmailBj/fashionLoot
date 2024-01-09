import React, { useState, useRef } from "react"
import style from "./loginStyle.module.css"
import { sendUserDataToServer } from "../data/getApiData"

const LoginModule = (props) => {
	const { show } = props

	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	})
	const loginFormRef = useRef()

	const handleClick = (event) => {
		if (loginFormRef.current && loginFormRef.current.contains(event.target)) {
			return
		}
		show(false)
	}

	const handleLogin = () => {
		const data = {
			email: "adsad.br@gmail.com",
			password: "123123"
		}
		// TODO fix here check username or email
		sendUserDataToServer(data, 'login')
	}

	return (
		<div
			className={style["login-container"]}
			onClick={handleClick}>
			<div
				className={style["login-form"]}
				ref={loginFormRef}>
				<h2>Login</h2>
				<label>
					Username:
					<input
						type="text"
						value={loginData.username}
						onChange={(e) =>
							setLoginData({ ...loginData, username: e.target.value })
						}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						value={loginData.password}
						onChange={(e) =>
							setLoginData({ ...loginData, password: e.target.value })
						}
					/>
				</label>
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}

export default LoginModule
