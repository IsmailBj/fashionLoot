import style from "./style.module.css"
import image from "../../../assets/img/cardsImages/purbleCard.webp"

const Card = ({ card, onClick }) => {
    return (
        <div className={style['card-container']} onClick={onClick}>
            <div className={style['card']} key={card.id}>
                <span className={style.tag}>{card.tag}</span>
                <div className={style['box-image']} alt={`card name ${card.imageAlt}`}>
                    <img src={image} alt="error" />
                </div>
                <div className={style.price}>{card.price}</div>
                <div className={style['box-name']}>{card.name}</div>
            </div>
        </div>
    );
};


export default Card


// card objec {
//     id,
//     tag,
//     imageAlt,
//     price,
//     name
// }