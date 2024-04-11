import React, { useEffect, useState } from "react"
import style from "./style.module.css"
import CardsFlter from '../CardsFilter/CardsLFilter'
import { getAllBoxes } from "../../../data/getApiData";
import Card from "../Card/Card";


const CardsContainer = (props) => {

    const [productData, setProductData] = useState({})
    const [filterTag, setFilterTag] = useState('all')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllBoxes();
                setProductData(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);

    const cardsList = productData && productData.boxes
        ? productData.boxes
            .filter(card => filterTag === 'all' || card.tag === filterTag)
            .map(card => (
                <Card card={card} key={card._id} onClick={() => props.openCardView(card)} />
            ))
        : null;
    return <div className={style['cards-container']}>
        <CardsFlter filter={setFilterTag} />
        <div className={style['cards-list']}>
            {cardsList}
        </div>
    </div>
}

export default CardsContainer