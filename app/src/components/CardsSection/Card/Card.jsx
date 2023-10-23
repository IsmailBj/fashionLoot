import style from "./style.module.css"
import image from "../../../assets/img/cardsImages/purbleCard.webp"
const Card = props => {
    const { card, onClick } = props
    return (
        <div className={style['card-container']} onClick={onClick}>
            <div className={style['card']} key={card.id}>
                <span className={style.tag}>{card.tag}</span>
                <div className={style['box-image']} alt={card.imageAlt}>
                    <img src={image} alt="" />
                </div>
                <div className={style.price}>{card.price}</div>
                <div className={style['box-name']}>{card.name}</div>
            </div>
        </div>
    );
};


export default Card