import React, { useState, useRef } from "react"
import style from "./loginStyle.module.css"
import { sendUserDataToServer, getUserData } from "../data/getApiData"
import { setToken } from "../utils/auth"

const LoginModule = (props) => {
	const { show, setUserProfile } = props
	const loginFormRef = useRef()

	const [loginData, setLoginData] = useState({
		email: "",
		pass: "",
	})
	const [error, setError] = useState({ status: false, message: "" })

	const handleClick = (event) => {
		if (loginFormRef.current && loginFormRef.current.contains(event.target)) {
			return
		}
		show(false)
	}

	const handleLogin = async () => {
		const response = await sendUserDataToServer(loginData, "login")
		if (response.success) {
			setToken(response.token)
			setError({ status: false })
			show(false)
		} else {
			setError({ status: true, message: response.message })
		}
	}

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleLogin();
		}
	};

	return (
		<div
			className={style["login-container"]}
			onClick={handleClick}>
			<div
				className={style["login-form"]}
				ref={loginFormRef}>
				<h2>Login</h2>
				<label>
					email:
					<input
						type="text"
						value={loginData.email}
						onChange={(e) =>
							setLoginData({ ...loginData, email: e.target.value })
						}
						onKeyDown={handleKeyPress}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						value={loginData.pass}
						onChange={(e) =>
							setLoginData({ ...loginData, pass: e.target.value })
						}
						onKeyDown={handleKeyPress}
					/>
				</label>
				{!error.success && <span className={style.error}>{error.message}</span>}
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}

export default LoginModule
