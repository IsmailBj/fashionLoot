import React from "react";

const Items = ({ items }) => {

    return (
        <>
            {items.map((item, key) => (
                <div className="item-wrap">
                    <div key={key}>{item.name}</div>
                    <div key={key}>{item.price}</div>
                </div>
            ))}
        </>
    );
}

export default Items