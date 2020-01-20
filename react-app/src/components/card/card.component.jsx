import React from "react";

import "./card.style.css";

export const Card = props => {
  console.log(props)
  return (
    <div className="card-container">
      <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} />
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  );
};
