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
    },
    {
        tag: 'NEW',
        imageAlt: 'Lux Box 2',
        price: '$12.50',
        name: 'Lux Box 2',
    },
    {
        tag: 'SALE',
        imageAlt: 'Lux Box 3',
        price: '$7.99',
        name: 'Lux Box 3',
    },
    {
        tag: 'HOT',
        imageAlt: 'Lux Box 1',
        price: '$9.80',
        name: 'Lux Box 1',
    },
    {
        tag: 'NEW',
        imageAlt: 'Lux Box 2',
        price: '$12.50',
        name: 'Lux Box 2',
    },
    {
        tag: 'SALE',
        imageAlt: 'Lux Box 3',
        price: '$7.99',
        name: 'Lux Box 3',
    },
    {
        tag: 'HOT',
        imageAlt: 'Lux Box 1',
        price: '$9.80',
        name: 'Lux Box 1',
    },
    {
        tag: 'NEW',
        imageAlt: 'Lux Box 2',
        price: '$12.50',
        name: 'Lux Box 2',
    },
    {
        tag: 'SALE',
        imageAlt: 'Lux Box 3',
        price: '$7.99',
        name: 'Lux Box 3',
    },
    {
        tag: 'HOT',
        imageAlt: 'Lux Box 1',
        price: '$9.80',
        name: 'Lux Box 1',
    },
    {
        tag: 'NEW',
        imageAlt: 'Lux Box 2',
        price: '$12.50',
        name: 'Lux Box 2',
    },
    {
        tag: 'SALE',
        imageAlt: 'Lux Box 3',
        price: '$7.99',
        name: 'Lux Box 3',
    },
];

const CardsContainer = () => {

    return <div className={style['cards-container']}>
        <CardsFlter />
        <div className={style['cards-list']}>
            <Card productData={productData} />
        </div>
    </div>
}

export default CardsContainer