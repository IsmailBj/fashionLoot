import React from "react";

const CardCurrency = ({ wallet }) => {

    return (
        <div className="view-cards">
            <div className="card">
                <div>
                    <p>Amount: {wallet.amount}</p>
                    <p>Pending: {wallet.pending}</p>
                </div>
            </div>
        </div>
    )
}

export default CardCurrency