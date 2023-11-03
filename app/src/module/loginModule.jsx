import React, { useState } from "react"
import style from "./style.module.css"

const LoginModule = (props) => {
	const { setShowLogin } = props

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const handleLogin = () => {
		if (username === "user" && password === "password") {
			setIsLoggedIn(true)
		} else {
			alert("Login failed. Please check your credentials.")
		}
	}

	const handleLogout = () => {
		setIsLoggedIn(false)
		setUsername("")
		setPassword("")
	}

	return (
		<div
			className={style["login-container"]}
			onClick={() => setShowLogin(false)}>
			{isLoggedIn ? (
				<div>
					<p>Welcome, {username}!</p>
					<button onClick={handleLogout}>Logout</button>
				</div>
			) : (
				<div className={style["login-form"]}>
					<h2>Login</h2>
					<label>
						Username:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<button onClick={handleLogin}>Login</button>
				</div>
			)}
		</div>
	)
}

export default LoginModule
