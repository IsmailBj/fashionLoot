import React, { useState, useRef } from "react"
import style from "./loginStyle.module.css"
import { sendUserDataToServer } from "../data/getApiData"

const LoginModule = (props) => {
	const { show, setUserData } = props
	const loginFormRef = useRef()

	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	})
	const [error, setError] = useState({ status: false, message: "" })

	const handleClick = (event) => {
		if (loginFormRef.current && loginFormRef.current.contains(event.target)) {
			return
		}
		show(false)
	}

	const handleLogin = async () => {
		const data = await sendUserDataToServer(loginData, "login")
		console.log(data)
		data.success ? setUserData(data) : setError({ ...data })
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
					email:
					<input
						type="text"
						value={loginData.email}
						onChange={(e) =>
							setLoginData({ ...loginData, email: e.target.value })
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
				{!error.success && <span className={style.error}>{error.message}</span>}
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}

export default LoginModule
