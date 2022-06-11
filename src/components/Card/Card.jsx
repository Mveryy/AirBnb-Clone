import star from "/images/star.png";
import "./card.css";

export default function Card(props) {
    const { img, rate, rateNumber, text, price } = props;
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="bottom">
                <div className="rate">
                    <img src={star} alt="Red Star" />
                    <p>
                        {rate} <span>({rateNumber}) • USA</span>
                    </p>
                </div>
                <p>{text}</p>
                <p>
                    <strong>From ${price}</strong> / person
                </p>
            </div>
        </div>
    );
}
