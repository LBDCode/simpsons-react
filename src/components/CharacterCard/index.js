import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div id={props.id} className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
