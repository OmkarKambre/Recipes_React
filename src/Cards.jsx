import React from "react";
// import './index.css';

function Cards(props){
    return (
        <>
            <div className="mcard">
              <img className="card-image" src={props.imgsrc}/>
              <h1>{props.category}</h1>
              <h4>{props.rname}</h4>
              <p></p>
              <a href={props.link}>Watch Now</a>
              <p className="read">Read</p>
            </div>
        </>
    );
}
export default Cards;