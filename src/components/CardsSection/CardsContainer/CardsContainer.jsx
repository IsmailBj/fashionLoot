import React, { useEffect, useState, useMemo } from "react"
import style from "./style.module.css"
import CardsFlter from '../CardsFilter/CardsLFilter'
import { getAllBoxes } from "../../../data/getApiData";
import Card from "../Card/Card";


const CardsContainer = ({ openCardView }) => {

    const [productData, setProductData] = useState([])
    const [filterTag, setFilterTag] = useState('ALL')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data = await getAllBoxes()
                setProductData(data.boxes || [])
            } catch (error) {
                console.error("Error fetching product data: ", error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProductData()
    }, [])

    const filteredCards = useMemo(() => {
        return productData
            .filter(card => filterTag === 'ALL' || card.tag === filterTag)
            .map(card => (
                <Card card={card} key={card._id} onClick={() => openCardView(card)} />
            ));
    }, [productData, filterTag, openCardView]);


    return <div className={style['cards-container']}>
        <CardsFlter filter={setFilterTag} />
        <div className={style['cards-list']}>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {filteredCards.length === 0 && !loading && !error && <div>No products available.</div>}
            {!loading && !error && filteredCards}
        </div>
    </div>
}

export default CardsContainer
