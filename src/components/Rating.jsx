import { BsStar, BsStarFill, BsStarHalf  } from "react-icons/bs";
import { useState } from "react";



function Rating(){
    return(
            <ul className="rating">
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarFill/></li>
                <li><BsStarHalf/></li>
                <li><BsStar/></li>
            </ul>
    );
}

export default Rating;