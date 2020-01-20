import React from "react";

import "./card-list.style.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};
