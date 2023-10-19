import style from "./style.module.css"
import image from "../../../assets/img/cardsImages/purbleCard.webp"
const Card = props => {
    return (
        props.productData.map((product, index) => (
            <div className={style['card-container']}>
                <div className={style['card']} key={index}>
                    <span className={style.tag}>{product.tag}</span>
                    <div className={style['box-image']} alt={product.imageAlt}>
                        <img src={image} alt="" />
                    </div>
                    <div className={style.price}>{product.price}</div>
                    <div className={style['box-name']}>{product.name}</div>
                </div>
            </div>
        ))
    );
};


export default Card