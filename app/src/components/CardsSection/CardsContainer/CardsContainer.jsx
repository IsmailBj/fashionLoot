import React from "react"
import style from "./style.module.css"
import CardsFlter from '../CardsFilter/CardsLFilter'
import Card from "../Card/Card";
const productData = [
    {
        tag: 'HOT',
        imageAlt: 'Lux Box 1',
        price: '$9.80',
        name: 'Lux Box 1',
        about: "A colossal collection of Nike's legendary line of shoes, all packed into Dunk Low box! Almost 50% chance to hit a Dunk, be it your $260 Dunk Low Valerian, or a crazy-expensive $7,371 Dunk Low Pure Platinum. Want to know the best part? A 53% discount, one of our biggest to date! So hit that Dunk, Hypeloot's got you covered!",
        id: 225
    },
    {
        tag: 'NEW',
        imageAlt: 'Lux Box 2',
        price: '$12.50',
        name: 'Lux Box 2',
        about: "Virgil Abloh's legacy lives in Hypeloot's OFF White box! With a deal-breaker 33% discount we bring you sneakers, t-shirts and various swag with a legendary Off-White name attached to them. More than 50% chance to win a luxury design that always leaves an impression. Do not miss it!",
        id: 321
    },
    {
        tag: 'SALE',
        imageAlt: 'Lux Box 3',
        price: '$7.99',
        name: 'Lux Box 3',
        about: "A budget offering for all you Supreme fans! In this Supreme budget box you will find everything you would expect: sneakers, caps, even a Supreme sweatshirt of an epic quality. All that at a 25% discount! It's boxes like these which make the experience of visiting Hypeloot truly... supreme!",
        id: 222
    }
];

const CardsContainer = (props) => {

    return <div className={style['cards-container']}>
        <CardsFlter />
        <div className={style['cards-list']}>
            {
                productData.map(card => (
                    <Card card={card} key={card.id} onClick={() => props.openCardView(card)} />
                ))
            }
        </div>
    </div>
}

export default CardsContainer