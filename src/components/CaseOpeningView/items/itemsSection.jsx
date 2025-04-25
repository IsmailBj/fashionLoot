import React from "react";
import style from "./style.module.css"

const Items = ({ items }) => {
    return (
        <>
            {items.map((item, key) => (
                <div className={style["item-wrap"]}>
                    <div className={style["item"]} key={key}>{item.name}</div>
                    <div className={style["price"]} key={key}>Price: {item.price}$</div>
                </div>
            ))}
        </>
    );
}

export default Items