import React from "react"
import style from "./style.module.css"


const LootBox = props => {
    const { goBack } = props
    return (
        <div className="box-container">
            <div className="back-guaranteed">
                <div className="go-back" id="goBack" onClick={goBack}>Back</div>
                <div className="garanteed"><img width="48" height="48" src="https://img.icons8.com/color/48/verified-account--v1.png" alt="verified-account--v1" />FAIRNESS GUARANTEED</div>
            </div>
        </div>
    )
}

export default LootBox
