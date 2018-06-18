import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
    <div onClick={() => props.shuffle(props.id)} className="sort">
      <img alt={props.name} src={props.image}>
      </img>
      </div>
    </div>
  </div>
);

export default CharacterCard;
