import React from "react"
import style from "./Deposit.module.css"
import { depositPoints } from "../../data/getApiData"

const Deposit = ({ goBack }) => {

    const buyPoints = async amount => {
        try {
            await depositPoints(amount);

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="deposit-container">
            <div className="left-container">
                <button onClick={goBack}>go back</button>
            </div>
            <div className={style['right-container']}>
                <div className={style['deposit-options']}><div>amount 20 points</div> <div className={style.btn} onClick={() => buyPoints(20)}>buy</div></div>
                <div className={style['deposit-options']}><div>amount 50 points</div> <div className={style.btn} onClick={() => buyPoints(50)}>buy</div></div>
                <div className={style['deposit-options']}><div>amount 70 points</div> <div className={style.btn} onClick={() => buyPoints(70)}>buy</div></div>
                <div className={style['deposit-options']}><div>amount 100 points</div> <div className={style.btn} onClick={() => buyPoints(100)}>buy</div></div>
                <div className={style['deposit-options']}><div>amount 1000 points</div> <div className={style.btn} onClick={() => buyPoints(1000)}>buy</div></div>
            </div>
        </div>

    )
}

export default Deposit