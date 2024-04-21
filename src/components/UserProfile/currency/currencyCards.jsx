import React from "react";
import style from "../ProfileStyle.module.css"
const CardCurrency = ({ wallet }) => {

    return (
        <div className={style["card-balance"]}>
            <p className="amount">Amount: {wallet.amount}</p>
            <p className="pending">Pending: {wallet.pending}</p>
        </div>
    )
}

export default CardCurrency