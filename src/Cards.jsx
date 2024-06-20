import React from "react";
// import './index.css';

function Cards(props){
    return (
        <>
            <div className="m-cards">
                <div className="s-card">
                    <img src={props.imgsrc} alt="recipe picture" className="card-image" />
                    <div className="card-info">
                        <div className="card-category">{props.category}</div>
                        <h3 className="card-title">{props.rname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cards;