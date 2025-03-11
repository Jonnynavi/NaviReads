import { BsStar, BsStarFill, BsStarHalf  } from "react-icons/bs";
import { useState } from "react";



function Rating({rating = 0, active, handleRating}){
    const [starRating, setStarRating] = useState(rating);
    const [hoverRating, setHoverRating] = useState(0);

    const renderStars = () => {
        
        const fullStars = Math.floor(hoverRating||starRating);
        const emptyStars = 5 - fullStars;

        const starsArray = [
            ...Array(fullStars).fill(<BsStarFill />),
            ...Array(emptyStars).fill(<BsStar />),
        ]

        const handleClick = (index) => {
            setStarRating(index + 1);
            handleRating(index + 1);
        }

        return starsArray.map((star, index) => {
            return <li 
            key={index}
            onMouseEnter={() => active? setHoverRating(index + 1): null }
            onMouseLeave={() => active? setHoverRating(0) : null}
            onClick={() => active? handleClick(index) : null}
            className={active ? "active-stars": ""}
            >{star}</li>
        });
    }

    return(
            <ul className="rating">
                {renderStars()}
            </ul>
    );
}

export default Rating;