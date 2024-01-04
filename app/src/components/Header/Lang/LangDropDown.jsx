import React from "react";
import Style from './LangStyle.module.css'
import langData from '../../../data/lang.json'

const LangDrowDown = props => {

    return (
        <div className={Style.dropdown}>
            <div className={Style["lang-list"]}>
                {langData.map((lang, index) => (
                    <span key={index} className={`${Style.lang} ${lang.short}`}>
                        {lang.language}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default LangDrowDown