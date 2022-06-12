import star from "/images/star.png";
import "./card.css";

export default function Card({ item }) {
    let { title, openSpots, location, coverImg, stats, rating, price } = item;
    let badgeText;
    if (openSpots) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={coverImg} alt="" />
            <div className="bottom">
                <div className="rate">
                    <img src={star} alt="Red Star" />
                    <p>
                        {rating} <span>({stats.reviewCount}) • USA</span>
                    </p>
                </div>
                <p>{title}</p>
                <p>
                    <strong>From ${price}</strong> / person
                </p>
            </div>
        </div>
    );
}
