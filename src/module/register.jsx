import React, { useState, useRef } from "react";
import styles from "./registerStyle.module.css";
import { requestRegisterUser } from "../data/getApiData";

const RegisterModule = ({ show }) => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    repPassword: "",
    gender: "",
    termsAccepted: false,
  });
  const RegisterFormRef = useRef();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBackgroundClick = (event) => {
    if (RegisterFormRef.current && RegisterFormRef.current.contains(event.target)) {
      return;
    }
    show(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await requestRegisterUser(registerData);
    console.log(data);
    data.success && show(false);
	if (!registerData.username || !registerData.email || !registerData.password || !registerData.repPassword || !registerData.gender || !registerData.termsAccepted) {
		alert("Please fill in all the fields.");
		return;
	  }
  };

  return (
    <div className={styles["register-container-blur"]} onClick={handleBackgroundClick}>
      <form
        ref={RegisterFormRef}
        className={styles["register-container"]}
        onSubmit={handleSubmit}
      >
        <div className={styles["close"]} onClick={() => show(false)}>
          X
        </div>
        <div className={styles["title"]}>Register</div>
        <div className={styles["input-group"]}>
          <label className={styles["input-label"]} htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={registerData.username}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
        <div className={styles["input-group"]}>
          <label className={styles["input-label"]} htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={registerData.email}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
        <div className={styles["input-group"]}>
          <label className={styles["input-label"]} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={registerData.password}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
        <div className={styles["input-group"]}>
          <label className={styles["input-label"]} htmlFor="repPassword">Repeat Password:</label>
          <input
            type="password"
            id="repPassword"
            value={registerData.repPassword}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
        <div className={styles["input-group"]}>
          <label className={styles["input-label"]} htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={registerData.gender}
            onChange={handleChange}
            className={styles["input-field"]}
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles["input-group"]}>
          <input
            type="checkbox"
            id="termsAccepted"
            checked={registerData.termsAccepted}
            onChange={handleChange}
          />
          <label className={styles["tc-label"]} htmlFor="termsAccepted">I accept the terms and conditions</label>
        </div>
        <button type="submit" className={styles["submitBtn"]}>Register</button>
      </form>
    </div>
  );
};

export default RegisterModule;
