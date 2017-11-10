import React from "react";



function Card(props) {
  const styles = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    textTransform: "uppercase"
  }
  return (
    <div className="card">
      <img className="card-img" src={props.imgSrc}/>
      <div className="card-content">
        <h2 style={styles} className="card-heading">{props.heading}</h2>
        <p>{props.productInfo}</p>
        <button className="card-button">Buy it now</button>
      </div>
    </div>
  );
}

export default Card;
