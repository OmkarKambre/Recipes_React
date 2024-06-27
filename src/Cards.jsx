import React, { useState } from "react";
// import './index.css';
import { GrLike } from "react-icons/gr";

function Cards(props) {
    const [like, setLike] = useState(0),
        [isLike, setIsLike] = useState(false),
        onLikeButtonClick = () => {
            setLike(like + (isLike ? -1 : 1));
            setIsLike(!isLike);
        };
    return (
        <>
            <div className="mcard">
                <img className="card-image" src={props.imgsrc} />
                <h1>{props.category}</h1>
                <h4>{props.rname}</h4>
                <p></p>
                <a href={props.link}>Watch Now</a>
                <button
                    className={"like-button " + (isLike ? "liked" : "")}
                    onClick={onLikeButtonClick}
                >
                    {"👍"} | {like}
                </button>
                <p className="read">Read</p>
            </div>
        </>
    );
};
export default Cards;