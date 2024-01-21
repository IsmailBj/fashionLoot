import React, { useState, useRef } from "react"
import styles from "./registerStyle.module.css"
import { sendUserDataToServer } from "../data/getApiData"

const RegisterModule = ({ show }) => {
	const [registerData, setRegisterData] = useState({
		username: "",
		email: "",
		password: "",
		repPassword: "",
		gender: "",
		termsAccepted: false,
	})
	const RegisterFormRef = useRef()

	const handleChange = (e) => {
		const { id, value, type, checked } = e.target
		setRegisterData((prevData) => ({
			...prevData,
			[id]: type === "checkbox" ? checked : value,
		}))
	}

	const handleBackgroundClick = event => {
		if (RegisterFormRef.current && RegisterFormRef.current.contains(event.target)) {
			return
		}
		show(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		sendUserDataToServer(registerData, 'register')
	}

	return (
		<div className={styles["register-container-blur"]} onClick={handleBackgroundClick}>
			<form
				ref={RegisterFormRef}
				className={styles["register-container"]}
				onSubmit={handleSubmit}>
				<div className="close" onClick={() => show(false)}>X</div>
				<div className="tittle">Register</div>
				<label>
					Username:
					<input
						type="text"
						id="username"
						value={registerData.username}
						onChange={handleChange}
					/>
				</label>
				<label>
					Email:
					<input
						type="text"
						id="email"
						value={registerData.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						id="password"
						value={registerData.password}
						onChange={handleChange}
					/>
				</label>
				<label>
					Repeat Password:
					<input
						type="password"
						id="repPassword"
						value={registerData.repPassword}
						onChange={handleChange}
					/>
				</label>
				<label>
					Gender:
					<select
						id="gender"
						value={registerData.gender}
						onChange={handleChange}>
						<option
							value=""
							disabled>
							Select your gender
						</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</label>
				<div className="checkbox">
					<input
						type="checkbox"
						name=""
						id=""
						checked={registerData.termsAccepted}
						onChange={handleChange}
					/>
					I accept the terms and conditions
				</div>
				<button
					type="submit"
					className={styles["submitBtn"]}>
					Register
				</button>
			</form>
		</div>
	)
}

export default RegisterModule
