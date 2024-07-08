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
                <div className="card-inner">
                    <div className="card-front">
                        <img className="card-image" src={props.imgsrc} />
                        <h1 className="h1new">{props.category}</h1>
                        <h4>{props.rname}</h4>
                        <p></p>
                    </div>
                    <div className="card-back">
                        <h1 style={{color: "black"}}>Description</h1>
                        <center><p className="read">{props.info}</p></center>
                        <a href={props.link} target="_blank" className="watchnow">Watch Now</a>
                        <button
                            className={"like-button " + (isLike ? "liked" : "")}
                            onClick={onLikeButtonClick}
                        >
                            {"👍"} | {like}
                        </button>   
                    </div>

                </div>
            </div>
        </>
    );
};
export default Cards;