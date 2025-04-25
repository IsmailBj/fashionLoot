import React, { useState } from "react"
import style from "./Deposit.module.css"
import { depositPoints } from "../../data/getApiData"
import PropTypes from 'prop-types'

const Deposit = ({ goBack }) => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const buyPoints = async amount => {
        try {
            await depositPoints(amount);
            setSuccess(true)
            setError(null)
        } catch (error) {
            setError("Failed to process the deposit.")
            setSuccess(false)
        }
    };

    const depositOptions = [
        { amount: 20 },
        { amount: 50 },
        { amount: 70 },
        { amount: 100 },
        { amount: 1000 },
    ];


    return (
        <div className="deposit-container">
            <div className="left-container">
                <button onClick={goBack}>go back</button>
            </div>
            <div className={style['right-container']}>
                {depositOptions.map(({ amount }) => (
                    <div className={style["deposit-options"]}>
                        <div className={style["amount-num"]}>{amount}</div>
                        <div className={style.btn} onClick={() => buyPoints(amount)}>Buy</div>
                    </div>
                ))}
                {error && <div className={style.error}>{error}</div>}
                {success && <div className={style.success}>Deposit successful!</div>}
            </div>
        </div>

    )
}

Deposit.propTypes = {
    goBack: PropTypes.func.isRequired,
};

export default Deposit