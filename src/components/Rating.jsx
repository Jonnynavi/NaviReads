import { BsStar, BsStarFill, BsStarHalf  } from "react-icons/bs";
import { useState } from "react";



function Rating(){
    return(
        <div>
            <ul className="rating">
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarHalf/></li>
                <li><BsStar/></li>
            </ul>
        </div>
    );
}

export default Rating;